import React from 'react'
import { Grid,Card, Container,Typography,CardActionArea,CardContent,Accordion,AccordionDetails,AccordionSummary, CardMedia,CardActions,Button} from '@mui/material'

export default function Cat(props){

return(
  <Grid item xs={4} >
    <Card align="center" sx={{ maxWidth: 300, borderRadius:'15px'}} class="card">
    <CardActionArea>
    <CardMedia
          component="img"
          height="140"
          image="https://static.freshtohome.com/media/catalog/product/cache/45/image/600x400/18ae109e34f485bd0b0c075abec96b2e/b/u/butter-fish-butterfishwhole_3.jpg"
          alt="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="black">
          {props.dat}
        </Typography>
        
      </CardContent>
    </CardActionArea>
  </Card>
</Grid>
)

}




