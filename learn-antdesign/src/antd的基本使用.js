import React, { PureComponent } from 'react'

import { Button, DatePicker } from "antd"
import { PoweroffOutlined } from '@ant-design/icons';
import moment from 'moment'
import Test from '@/test'

export default class App extends PureComponent {
  state = {

  }
  render() {
    const loadings = true
    return (
      <>
        <Test />
        <Button type="primary" loading>
          Loading
      </Button>
        <Button type="primary" size="small" loading>
          Loading
      </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading />
        <br />
        <Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
          Click me!
      </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => this.enterLoading(1)}
        >
          Click me!
      </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
          onClick={() => this.enterLoading(2)}
        />
        <DatePicker defaultValue={moment('2015-06-06', 'YYYY-MM-DD')} />
      </>
    )
  }
}
