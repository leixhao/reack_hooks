import React,{useEffect} from "react";
function Header(props) {
  const { handlerOnClick } = props
  console.log(props)
  return (
    <div className="detail">
      <button onClick={()=> {handlerOnClick()}}>detail改变count</button>
    </div>
  )
}
export default Header;