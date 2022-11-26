import axios from 'axios';
import { cloneDeep, forEach, isUndefined, toMilliseconds, replacer } from '../utilities';
import baseConfig from './endpoints';

const getConfigServiceEnvironment = () => {
  let environment = "dev";
  const host = window.location.hostname;
  if(host === "localhost") {
    environment = "dev";
  } else {
    environment = "prod";
  }

  return environment;
};

const getServiceConfig = (env = 'dev') => {
  let serviceConfig = {};
  forEach(baseConfig, (singleServiceConfig, property) => {
    if(isUndefined(serviceConfig[property])) {
      serviceConfig[property] = {};
    }
    forEach(singleServiceConfig.serviceConfig, (funcConfig, funcName) => {
      serviceConfig[property][funcName] = cloneDeep(funcConfig);
      serviceConfig[property][funcName].baseURL = singleServiceConfig.baseURLs[env] || "";
    });
  });

  return serviceConfig;
};

// ------- generate service -------
const globalConfig = {
  baseURL: "",
  timeout: toMilliseconds(60),
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    // "Referrer-Policy": "no-referrer",
    // "Referrer-Policy": "no-referrer-when-downgrade",
    Pragma: "no-cache"
  }
};
let service = axios.create(globalConfig);

const initServiceProvider = (serviceConfig, autoSetKeys) => {
  let serviceProvider = {};
  forEach(serviceConfig, (serviceObj, serviceName) => {
    if(isUndefined(serviceProvider[serviceName])) {
      serviceProvider[serviceName] = {};
    }

    forEach(serviceObj, (serviceFunc, funcName) => {
      serviceProvider[serviceName][funcName] = ({ payload, getState, staticData }) => {
        let config = cloneDeep(serviceFunc);
        config.url = replacer(config.url, payload);
        forEach(autoSetKeys, (key) => {
          autoSetValueByKey(config, serviceFunc, key, payload);
          if(!isUndefined(staticData) && !isUndefined(staticData[key])) {
            config[key] = staticData[key];
          }
        });
        return service.request(config);
      }
    });
  });

  return serviceProvider;
};

const autoSetValueByKey = (config, serviceFunc, key, payload) => {
  if(!isUndefined(config) && !isUndefined(serviceFunc) && !isUndefined(key) && !isUndefined(payload)) {
    const value = fetchValueFromKeyList(config[key], serviceFunc[key], payload);
    if(!isUndefined(value)) {
      config[key] = value;
    }
  }
};

const fetchValueFromKeyList = (target, keyList, source) => {
  let data = cloneDeep(target);
  if(!isUndefined(keyList) && !isUndefined(source)) {
    forEach(keyList, (value, keyName) => {
      if(!isUndefined(source[keyName])) {
        data[keyName] = source[keyName];
      } else {
        data[keyName] = value;
      }
    });
  }
  return data;
};

const env = getConfigServiceEnvironment();
const serviceConfig = getServiceConfig(env);
const serviceProvider = initServiceProvider(serviceConfig, ["headers", "params", "data"]);

const errorDispatch = (error, dispatch) => {
  console.log("error === ", error);
  console.log("dispatch === ", dispatch);
}

export {
  serviceProvider,
  errorDispatch
};