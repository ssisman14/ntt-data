import {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import Card from "./card";
import {Backdrop, Box, CircularProgress} from "@mui/material";

const OfferList = ({count}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        for (let i=1; i<=count; i++){
            fetch(`https://snetmyapp.herokuapp.com/case3`)
                .then(res => res.json())
                .then(
                    result => {
                        setData(i => [...i,result])
                        console.log(i)
                        if(i===count){
                            setIsLoaded(true)
                        }
                    }
                )
        }
    },[])

    console.log(data)




    return (
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
                {data.sort((a,b) => a.Cash - b.Cash).map((i) => {
                    return(
                        <Grid item xs={12} md={6} key={i.Cash}>
                            <Card data={i}/>
                        </Grid>
                    )
                })}

            </Grid>
    )
}

export default OfferList