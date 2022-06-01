import Box from '@mui/material/Box';
import {Divider} from "@mui/material";

const CompanyTitle = ({img, name, desc}) => {
    console.log(name)
    return(
        <Box
            sx={{
                display:'flex',
                justifyContent: 'space-evenly',
                alignItems:'center'

            }}>
            <Box
                sx={{
                    marginLeft: '15px',
                    marginRight: '15px'
                }}>
                <img src={img} alt={name} loading="lazy"/>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box
                sx={{

                    marginLeft: '15px',
                    marginRight: '15px'
                }}>
                <div style={{'fontWeight': 'bold'}}>
                    {name}
                </div>
                <div>
                    {desc}
                </div>
            </Box>
        </Box>
    )
}
export default CompanyTitle