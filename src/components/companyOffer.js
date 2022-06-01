import Box from '@mui/material/Box';
import {Button} from "@mui/material";

const CompanyOffer = ({cash, quotaInfo}) => {
    return(
        <Box
            sx={{
                display:'flex',
                flexDirection: 'column',
                gap: '20px',
                marginRight: '15px'
            }}>
            <Box>
                {quotaInfo.HasDiscount && <Box
                    sx={{
                        textDecoration : 'line-through'
                    }}>
                    {cash} TL
                </Box>
                }
                <Box
                sx={{
                    fontWeight: 'bold',
                    fontSize: '22px',
                }}>
                    {quotaInfo.HasDiscount ? `${quotaInfo.PremiumWithDiscount} TL`  : `${cash} TL`}
                </Box>

            </Box>
            <Box
                sx={{

                }}>
                <Button variant="contained" disableElevation>
                    Satın Al
                </Button>
            </Box>
        </Box>


    )
}

export default CompanyOffer