import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import {Button, Skeleton} from "@mui/material";
import {useEffect, useState} from "react";
import OfferList from "../components/offerList";


const Case3 = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [offer_count, setOfferCount] = useState();
    const [offer_page, setOfferPage] = useState(false)

    const handleOfferClick= () => {
        setOfferPage(true)
    }

    useEffect(() => {
        fetch(`https://snetmyapp.herokuapp.com/get_offer_count`)
            .then(res => res.json())
            .then(
                result => {
                    setIsLoaded(true)
                    setOfferCount(result['num_offers'])
                }
            )
    },[])

    return(
        (!offer_page) ?
        <Grid container spacing={2} >
            {isLoaded &&
                <Grid item xs={4} >
                    <Box
                        sx={{
                            backgroundColor: 'card.bg',
                            width: '100%',
                            height: '60px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center'
                        }}
                    >
                        <Box>
                            Size özel hazırladığımız {offer_count} adet teklif bulunmaktadır.
                        </Box>


                        <Box>
                            <Button variant="contained" onClick={handleOfferClick}>
                                İncele
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            }
        </Grid>
            :
            <OfferList count={offer_count}/>
    )
}

export default Case3