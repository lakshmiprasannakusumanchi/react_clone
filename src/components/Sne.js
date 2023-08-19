import React from 'react'
import product from '../images/image-product-1.jpg'
import plus from '../images/icon-plus.svg'
import minus from '../images/icon-minus.svg'
import cart from '../images/icon-cart.svg'
import  {useState} from 'react'
const Sne = () => {
    const[inc,setInc] =useState(0);
  return (
    <div style={{display:'flex',flexWrap:'wrap'}}>
        <img src={product} style={{height:'500px',width:'500px',margin:'80px 80px 100px 200px',borderRadius:'5%'}}></img>
        <div style={{margin:'120px 0px 100px 80px'}}>
            <b style={{color:' #FFA4AA'}}>SNEAKER COMPANY</b>
            <h1>Fall Limited Edition</h1>
            <h1>Sneakers</h1>
            <div  style={{fontFamily:'sansSerif,Arial',fontWeight:'lighter',color:'grey'}}><p>These low level sneakers area your perfect casual ware </p><p>companion,Featuring durable layer outer sole,
                they'll</p> <p> outstand witheverything the weather can offer.....</p></div>
            <div style={{display:'flex',flexWrap:'wrap'}}>
            <p><h1>$125.00 </h1>
            <del style={{color:'grey'}}>$250.00</del></p>
            <p style={{marginTop:'10px',backgroundColor:'lightgrey',width:'120px',height:'50px',borderRadius:'10px',paddingTop:'15px',marginRight:'20px',marginLeft:'30px'}}>
                <img onClick={()=>setInc(inc+1)} src={plus} style={{paddingLeft:'15px',cursor: 'pointer'}}></img>
                <b style={{paddingLeft:'30px'}}>{inc}</b>
                <img onClick={()=>setInc(inc-1)} src={minus} style={{paddingLeft:'25px',cursor: 'pointer'}}></img>
            </p>
            </div>
            <button style={{marginTop:'10px'}} onClick={()=>setInc(inc+1)} class="ui google plus button">
            <i><img src={cart} ></img></i> Add to cart</button> 
        </div>
    </div>
  )
}

export default Sne