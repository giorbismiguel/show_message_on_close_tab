import React, { FC, PropsWithChildren } from 'react'
import { Content } from 'antd/es/layout/layout'


const ListLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
      <Content>{children}</Content>
  )
}

export default ListLayout