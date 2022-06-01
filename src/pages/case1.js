import {useEffect, useState} from "react";
import Grid from '@mui/material/Grid';
import Card from "../components/card";

const Case1 = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://snetmyapp.herokuapp.com/case1`)
            .then(res => res.json())
            .then(
                result => {
                    setIsLoaded(true)
                    setItems(result['offerList'])
                }
            )
    },[])


    return(
        (!isLoaded)
            ? (<div>Yükleniyor</div>)
            : <Grid container spacing={2} >
                {items.map((i) => {
                   return(
                       <Grid item xs={12} md={6} key={i.Cash}>
                        <Card data={i}/>
                    </Grid>
                   )
                })}


            </Grid>
    )
}

export default Case1