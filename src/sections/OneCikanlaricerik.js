import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import exampleTemplate from '../assets/img/examples.png'
import { TiEyeOutline } from "react-icons/ti";
import { TiMessage } from "react-icons/ti";
import { MdFlag } from "react-icons/md";

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 600,
    },
});
export default function OneCikanlaricerik() {

    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root} style={{ marginTop: 50, marginBottom: 50 }}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={exampleTemplate}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Eğitim/Kırtasiye E-Ticaret Sistemi
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Türü : <span>Eğitim/Kırtasiye</span>
                        </Typography>
                        <br />
                        <Typography variant="body2" color="textSecondary" component="p">
                            Fiyat : <span>1000</span>
                        </Typography>
                        <br />
                        <Typography variant="body2" color="textSecondary" component="p">
                            Durum : <span>Satılık</span>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <TiMessage style={{ width: 40, height: 40 }} />&nbsp;&nbsp;Mesaj Gönder
        </Button>
                    <Button size="small" color="primary">
                        <TiEyeOutline style={{ width: 40, height: 40 }} />&nbsp;&nbsp;Canlı Görünüm
        </Button>
                    <Button size="small" color="primary">
                        <MdFlag style={{ width: 40, height: 40 }} />&nbsp;&nbsp;Şikayet Et
        </Button>
                </CardActions>
            </Card>

        </div>

    )


}
