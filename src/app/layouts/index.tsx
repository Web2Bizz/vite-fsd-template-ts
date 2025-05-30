type TDefaultProps = {
 children: JSX.Element
}

const Default = (props: TDefaultProps) => {

 const { children } = props

 return (
  <>{children}</>
 )
}

const Layout = { Default: Default }

export default Layout
