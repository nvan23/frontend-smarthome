import { ConfigProvider } from 'antd'
import viVN from 'antd/lib/locale/vi_VN'

import AppContainer from './pages/App'

import './App.css'

function App () {
  return (
    <ConfigProvider locale={viVN}>
      <AppContainer />
    </ConfigProvider>
  )
}

export default App
