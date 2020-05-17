import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

export const ProductCard = ({ item }) => {
  
  const [isFlipped, handleFlipped] = useState(false)

  const classes = useStyles();
  
  const onCardClick = () => {
    handleFlipped(!isFlipped)
  }
  
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <Card className={classes.root}  onClick={onCardClick}>
        <CardMedia className={classes.media} image={item.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Click to learn more
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}  onClick={onCardClick}>
        <CardMedia className={classes.media} image={item.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price: ${item.price}
          </Typography>
        </CardContent>
      </Card>
    </ReactCardFlip>
  );
}