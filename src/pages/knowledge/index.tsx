import { useAntdTable } from 'ahooks'
import { Button, Col, Form, Input, Row, Table, Select } from 'antd'
import { useForm } from 'antd/es/form/Form'
import axios from 'axios'

const Knowledge = () => {
  const getTables = ({ current = 1, pageSize = 10 }, formData: Object) => {
    // let api = `/mock/story?page=${current}&pageSize=${pageSize}`
    // Object.entries(formData).forEach(([key, value]) => {
    //   api += '&' + key + '=' + value
    // })
    const obj: any = {}
    ;(obj.page = current), (obj.pageSize = pageSize)
    Object.entries(formData).forEach(([key, value]) => {
      obj[key] = value
    })
    let api = '/mock/story'
    return axios.post(api, obj).then((res) => res.data)
  }
  const [form] = useForm()
  const { tableProps, search } = useAntdTable(getTables, { defaultCurrent: 1, defaultPageSize: 15, form })
  const { type, changeType, submit, reset } = search
  const columns = [
    {
      title: 'name',
      dataIndex: 'name.last'
    },
    {
      title: 'email',
      dataIndex: 'email'
    },
    {
      title: 'phone',
      dataIndex: 'phone'
    },
    {
      title: 'age',
      dataIndex: 'age'
    }
  ]

  return (
    <div className="w-1/2 h-1/2 bg-gray-500 hover:border-20 border-10 border-red-500 rounded">
      <h1 className="text-regal-red text-base">knowledge</h1>
      <h2 className="text-3xl text-red-500">this is my knowledge message</h2>
      <Form form={form}>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label="name" name="name">
              <Input placeholder="name" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="email" name="email">
              <Input placeholder="email" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="phone" name="phone">
              <Input placeholder="phone" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Form.Item style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button type="primary" onClick={submit}>
              Search
            </Button>
            <Button onClick={reset} style={{ marginLeft: 16 }}>
              Reset
            </Button>
            <Button type="link" onClick={changeType}>
              Simple Search
            </Button>
          </Form.Item>
        </Row>
      </Form>
      <Table columns={columns} {...tableProps} rowKey="id" />
    </div>
  )
}

export default Knowledge
