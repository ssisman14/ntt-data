import Box from '@mui/material/Box';
import CompanyTitle from "./companyTitle";
import CompanyOffer from "./companyOffer";

const Card = ({data}) => {
    return(
        <>
            <Box
                sx={{
                    backgroundColor: 'card.bg',
                    width: '100%',
                    height: '120px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >

                <CompanyTitle img={data.ImagePath} name={data.FirmName} desc={data.ProductDesc}/>


                <CompanyOffer cash={data.Cash} quotaInfo={data.QuotaInfo} />

            </Box>
        </>
    )
}

export default Card;