import React from 'react'
import {Box,Grid,Divider} from '@mui/material'
import logo from '../logo.png'

export default function Footer(props){

return(
<div class="footer"><br/><br/>
<Grid container>
<Grid align="center" item xs={4}>
    <img src={logo}/>


</Grid>
<Grid align="center" item xs={4}>
    <ul>
        <li>Support</li>
        <li>About Us</li>
        <li>Privacy Policy</li>

    </ul>


</Grid>
<Grid align="center" item xs={4}>
    
<ul>
        <li>Terms & Conditions</li>
        <li>Return & Refund Policy</li>
        <li>Shipping & Delivery Policy</li>

    </ul>


</Grid>

</Grid><br/><br/><br/><br/>
<Grid align="center"  item xs={12}><Box sx={{fontSize: '15px',color:'common.white'}}>© Copyright 2021, Sea Basket. All Rights Reserved.</Box></Grid>


</div>



)






}