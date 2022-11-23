import Header from "../components/Header"

const HeaderLayout = (props: any) => {
  return (
    <div className="sticky">
      <Header/>
      {props.children}
    </div>
  )
}

export default HeaderLayout