import React, {Component} from 'react';
import Status from '../Status';
import windows from '../../images/windows.png';
import cent_os from '../../images/cent_os.png';
import debin from '../../images/debin.png';
import suse from '../../images/suse.png';
import ubuntu from '../../images/ubuntu.png';
import Icon from '../Icon';
import InputText from '../InputText';
import Button from '../Button';

export default class PrimaryAgent extends Component {

  render() {
    const { contentContext, agent, displayModalId, onClickOpenModal, onKeyUpAddResource, onClickAddResource, onClickCancelResource } = this.props;
    let os = "";
    switch (agent.os) {
      case contentContext.agentImg.windows:
        os = windows;
        break;
      case contentContext.agentImg.cent_os:
        os = cent_os;
        break;
      case contentContext.agentImg.debin:
        os = debin;
        break;
      case contentContext.agentImg.suse:
        os = suse;
        break;
      case contentContext.agentImg.ubuntu:
        os = ubuntu;
        break;
      default:
        os = windows;
        break;
    }

    const denyBtnProps = {
      attributes: {
        id: "denybtn",
        type: "button",
      },
      className: "c-button--blue"
    };

    const showModal = String(agent.id) === String(displayModalId);

    const addResourceInputProps = {
      attributes: {
        id: "addResource",
        name: "addResource",
        type: "text",
        autoComplete: "off",
        // required: true,
        placeholder: "e.g. Chrome, Firefox",
        onKeyUp: (e) => onKeyUpAddResource(e)
      },
      // className: "c-input--search"
    };

    const addBtnProps = {
      attributes: {
        id: "addResourcebtn",
        type: "button",
        onClick: (e) => onClickAddResource(e, agent.id)
      },
      className: "c-button--blue"
    };

    const cancelBtnProps = {
      attributes: {
        id: "cancelResourcebtn",
        type: "button",
        onClick: (e) => onClickCancelResource(e)
      },
      className: "c-button--grey"
    };

    return (
      <div className="agents-item">
        <div className="agent-icon">
          <img src={os} alt={agent.os} />
        </div>
        <div className="agent-info">
          <div className="address">
            <span><Icon name="icon-desktop" /><label className="server-name">{agent.name}</label></span>
            <span><Status status={agent.status}/></span>
            <span><Icon name="icon-info" /><label>{agent.ip}</label></span>
            <span><Icon name="icon-folder" /><label>{agent.location}</label></span>
          </div>
          <div className="browser">
            <span className="browser__add" onClick={(e) => onClickOpenModal(e, agent.id)}>
              <Icon name="icon-plus" className="c-icon-add" />
            </span>
            <div className="browser__itemContainer">
              {agent.resources && 
                agent.resources.map((resource, i) => {
                  return (
                    <span key={i} className="browser__item">{resource} <Icon name="icon-trash" className="c-icon-remove" /></span>
                  )
                })
              }
            </div>
            {agent.status === "building" && <span className="browser__btn"><Button {...denyBtnProps}><Icon name="icon-deny" className="c-icon-deny" /> Deny</Button></span>}
          </div>
        </div>
        {showModal && 
          <div className="add-resource-modal">
            <div className="text-row">
              <span>Separate multiple resouce with commas</span>
              <span onClick={(e) => onClickCancelResource(e)}><Icon name="icon-close" className="c-icon-colse" /></span>
            </div>
            <InputText {...addResourceInputProps} />
            <div className="btn-row">
              <Button {...addBtnProps}>Add Resources</Button>
              <Button {...cancelBtnProps}>Cancel</Button>
            </div>
          </div>
        }
      </div>
    )
  }
}