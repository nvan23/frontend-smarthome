import React from 'react'
import { Result, Button } from 'antd'

import './notFound.css'

const NotFound = () => {
  return (
    <div className="not-found__container">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" href='/'>Back Home</Button>}
      />
    </div>
  )
}

export default NotFound