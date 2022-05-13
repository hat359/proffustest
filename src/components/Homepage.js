import React,{useEffect,useState} from 'react'
import Nav from './Nav'
import { Grid,Card, Container,Typography,CardActionArea,CardContent,Accordion,AccordionDetails,AccordionSummary, CardMedia,CardActions,Button} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Banner from '../banner.png'
import axios from 'axios'
import Cat from './Cat'
import Footer from './Footer'

export default function Homepage(){
const [dat,setdat]=useState([])
    useEffect(()=>{
            axios.get("https://www.fishwatch.gov/api/species").then(response=>{
                
            setdat(response.data)
            

            })

            
    })
return(
<div>
<Nav/>
<Container maxWidth="lg">

<div className="image">
    <img src={Banner}/>
</div><br/><br/>

<div align="center"><Typography variant="h3" sx={{fontWeight:"600"}}>HOW IT WORKS</Typography></div><br/>
<div align="center"> <Typography variant="h5">Sea Basket delivers fresh sourced seafood in a few easy clicks  </Typography></div><br/><br/>
<Typography variant="h4">CATEGORIES</Typography><br/><br/>
        <Grid container spacing={3}>
          

            {dat.slice(0, 6).map(item=>(
                <Cat dat={item["Species Name"]}/>

            ))}

           
             
            

          
          </Grid>
          <div align="center"><Typography variant="h3" sx={{fontWeight:"600",marginTop:'100px'}}>A GLANCE AT OUR PRODUCT</Typography></div><br/>
            <div align="center" className="video"><iframe width="100%" height="600"  src="https://www.youtube.com/embed/IwkHyDZynF0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><br/><br/>
            <div align="center"><Typography variant="h3" sx={{fontWeight:"600" ,marginTop:'100px'}}>FAQS</Typography></div><br/><br/>
            <Accordion sx={{minHeight:"100px", borderRadius:"10px"}} elevation={5}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4" sx={{fontWeight:"550"}}>Sed ut perspiciatis unde omnis iste natus  </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion><br/><br/>
      <Accordion sx={{minHeight:"100px", borderRadius:"10px"}} elevation={5}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4" sx={{fontWeight:"550"}}>Sed ut perspiciatis unde omnis iste natus  </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion><br/><br/>
      <Accordion sx={{minHeight:"100px", borderRadius:"10px"}} elevation={5}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4" sx={{fontWeight:"550"}}>Sed ut perspiciatis unde omnis iste natus   </Typography>
        </AccordionSummary>
        <AccordionDetails><br/><br/>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion><br/><br/>
      <Accordion sx={{minHeight:"100px", borderRadius:"10px"}} elevation={5}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4" sx={{fontWeight:"550"}}>Sed ut perspiciatis unde omnis iste natus  </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion><br/><br/>
      <div align="center"><Typography variant="h3" sx={{fontWeight:"600",marginTop:'100px'}}>HAVE A READ</Typography></div><br/>
      <Card sx={{ maxWidth:"100%",borderRadius:"10px" }} elevation={5}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:"550"}}>
          The Right Quality
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontSize:"18px", color:"black"}}>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
        </Typography>
      </CardContent>
      <CardActions>
        <div align="right">
        <Button sx={{}}>Read More</Button></div>
      </CardActions>
    </Card><br/><br/>
    <Card sx={{ maxWidth:"100%",borderRadius:"10px" }} elevation={5}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:"550"}}>
          The Right Time
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontSize:"18px", color:"black"}}>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
        </Typography>
      </CardContent>
      <CardActions>
        <div align="right">
        <Button sx={{}}>Read More</Button></div>
      </CardActions>
    </Card><br/><br/>
    <Card sx={{ maxWidth:"100%",borderRadius:"10px" }} elevation={5}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:"550"}}>
          The basis of balanced diet
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontSize:"18px", color:"black"}}>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
        </Typography>
      </CardContent>
      <CardActions>
        <div align="right">
        <Button sx={{}}>Read More</Button></div>
      </CardActions>
    </Card><br/><br/>
    <div align="center"><Typography variant="h3" sx={{fontWeight:"600" , marginTop:'100px'}}>TOPICS YOU CAN'T MISS</Typography></div><br/>

           
    <Card sx={{ maxWidth:"100%",borderRadius:"10px", height:'300px'}} elevation={5}>
    <Grid container>
                <Grid item xs={6}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:"550"}}>
          TOPICS YOU CANT MISS
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontSize:"18px", color:"black"}}>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button sx={{}}>Read More</Button>
      </CardActions>
      </Grid>
      <Grid  class="topics" item xs={6}>
      <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwY29va2luZ3xlbnwwfHwwfHw%3D&w=1000&q=80"/>

      </Grid>
    </Grid>
    </Card>
    <br/>
    
    <Card sx={{ maxWidth:"100%",borderRadius:"10px", height:'300px'}} elevation={5}>
    <Grid container>
                <Grid item xs={6}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:"550"}}>
          HOW TO CLEAN/CUT YOUR SEAFOOD
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontSize:"18px", color:"black"}}>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button sx={{}}>Read More</Button>
      </CardActions>
      </Grid>
      <Grid  class="topics" item xs={6}>
      <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwY29va2luZ3xlbnwwfHwwfHw%3D&w=1000&q=80"/>

      </Grid>
    </Grid>
    </Card>
    <br/>
    


</Container>
<Footer/>
</div>

)





}