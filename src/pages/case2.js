import {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import Card from "../components/card";
import {Backdrop, Box, CircularProgress, Skeleton} from "@mui/material";

const Case2 = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://snetmyapp.herokuapp.com/case2`)
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
            ? (<Backdrop
                sx={{ color: '#fff' }}
                open={!isLoaded}
            >

                <Box>
                    <Box>
                        <CircularProgress color="inherit" sx={{marginLeft: '50px'}}/>
                    </Box>
                    <Box>
                        Teklifler Yükleniyor...
                    </Box>
                </Box>
            </Backdrop>)
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

export default Case2;