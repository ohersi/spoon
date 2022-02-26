import * as React from "react";
import Card from "@mui/material/Card";
import "./styles.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export default function MediaCard() {
  return (
    <div className="spoon-card">
      <Card
        sx={{ maxWidth: 345, }}
        grid
        spacing={100}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <CardMedia
          component="img"
          height="140"
          image="https://www.chatelaine.com/wp-content/uploads/2018/06/metal-spoon-food-cruch-feature.jpg"
          alt="spoon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Spoon!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Get a Spoonful of diversity!
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
