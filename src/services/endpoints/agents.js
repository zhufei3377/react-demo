const baseURLs = {
  dev: `http://localhost:3001/`,
  prod: `http://localhost:3001/`
};

const serviceConfig = {
  getAgents: {
    url: 'agents',
    method: 'get',
    params: { t: "" }
  },
  getAgentById: {
    url: 'agents/{id}',
    method: 'get',
    params: { id: 0, t: "" }
  },
  addAgent: {
    url: 'agents/{id}',
    method: 'put',
    params: { id: 0, t: "" },
    data: {
      name: "",
      os: "",
      status: "",
      type: "",
      ip: "",
      location: "",
      resources: [],
      id: 0
    }
  }
};

export default { baseURLs, serviceConfig };