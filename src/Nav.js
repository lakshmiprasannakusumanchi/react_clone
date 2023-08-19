import React from 'react'
import { NavLink } from 'react-router-dom'
import cart from './images/icon-cart.svg'
import avatar from './images/image-avatar.png'
const Nav = () => {
    const activepagestyle=({isActive})=>{
        return{
            color:isActive?'black':'grey',
            fontSize:isActive?'25px':'18px',
            paddingLeft:'50px',
            fontFamily:"Times New Roman"
        }
    }
  return (
    <div style={{padding:'40px 100px 0px 100px  '}}>
        <div  className="ui text menu">
  <NavLink  to='/'  style={activepagestyle} className="active item">
    sneakers </NavLink>
  <NavLink to='Coll' style={activepagestyle} className="item">
    Collections
  </NavLink>
  <NavLink to='Men' style={activepagestyle} className="item">
   Men
  </NavLink>
  <NavLink to='Women'style={activepagestyle} className="item">
    Women
  </NavLink>
  <NavLink to='About' style={activepagestyle} className="item">
   About
  </NavLink>
  <NavLink to='Contact'style={activepagestyle}  className="item">
   Contact
  </NavLink>
  <a href="#"><img style={{paddingLeft:'500px',paddingTop:'10px'}} src={cart}/></a>
  <a><img style={{paddingLeft:'25px',width:'70px'}} src={avatar}/></a> 
</div>
<hr style={{marginTop:'30px'}}></hr>
 </div>
  )
}

export default Nav