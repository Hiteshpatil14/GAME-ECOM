import { useCallback, useContext, useState } from 'react'
import { Cartcontext } from '../App'
import "./checkout.css"
import useRazorpay from "react-razorpay"
const Checkout=()=>{
    const Razorpay=useRazorpay()
    const {cart,total,removefromcart}=useContext(Cartcontext)

    const showpayment=useCallback(async(total)=>{
      const options={
        key:"rzp_test_TRNUJqRbdWS5s5",
        name:"10xgames",
        amount:total*100,
        currency:"INR",
        handler:(err)=>{
            console.log(err)
        },
        theme:{
            color:"3399cc"
        }
      }
      const pay=new Razorpay(options);
      pay.open()
    },[Razorpay])
    
    
    
    return(
      <div className='checkout-page'>
          <table>
            <thead >
                <th>
                    Product Image
                </th>
                <th>
                    Product Name
                </th>
                <th>
                    SubTotal
                </th>
                <th>
                    Remove Product
                </th>
            </thead>
            <tbody>
            {cart.map((item,id)=>{
                const url=`http://localhost:1337${item.attributes.CardImage.data[0].attributes.url}`
              
         return <tr key={id}>
            <td><img height="200px" width="180px" src={url} alt="" /></td>
            <td className='product-name'>{item.attributes.Title}</td>
            <td className='product-price'>{item.attributes.Price}</td>
            <td className='remove-cart-item' onClick={()=>{
             removefromcart(id)
            }}>Remove</td>
         </tr>  })}
            </tbody>
          </table>
          <div className='total'>
           <span>Total Amount:- </span><span> {total}</span>
          </div>
          <button className='payment-button' onClick={()=>{
            showpayment(total)
          }} >Procede To Pay</button>
         </div>
  
 
    )
}
export default Checkout