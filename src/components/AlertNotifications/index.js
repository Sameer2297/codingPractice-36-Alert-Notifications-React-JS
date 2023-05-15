import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import './index.css'

import Notification from '../Notification'

const AlertNotifications = () => {
  const renderSuccessNotification = () => (
    <Notification className="notification">
      <AiFillCheckCircle className="icon success" />
      <div className="text-container">
        <h1 className="main-heading success">Success</h1>
        <p className="main-para">You can access all the files in the folder</p>
      </div>
    </Notification>
  )

  const renderWarningNotification = () => (
    <Notification className="notification">
      <MdWarning className="icon warning" />
      <div className="text-container">
        <h1 className="main-heading warning">Warning</h1>
        <p className="main-para">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderErrorNotification = () => (
    <Notification className="notification">
      <RiErrorWarningFill className="icon error" />
      <div className="text-container">
        <h1 className="main-heading error">Error</h1>
        <p className="main-para">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderInfoNotification = () => (
    <Notification className="notification">
      <MdInfo className="icon info" />
      <div className="text-container">
        <h1 className="main-heading info">Info</h1>
        <p className="main-para">Anyone on the internet can view these files</p>
      </div>
    </Notification>
  )

  return (
    <div className="main-bg-container">
      <h1 className="main-bg-heading">Alert Notifications</h1>
      {renderSuccessNotification()}
      {renderErrorNotification()}
      {renderWarningNotification()}
      {renderInfoNotification()}
    </div>
  )
}

export default AlertNotifications
