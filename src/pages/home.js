import {Button} from "@mui/material";
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();
    const  handleClick =(id)=> {
        navigate(`\case${id}`);
    }
    return(
        <>
            <Button variant="contained" sx={{marginRight:'15px'}} onClick={() => handleClick(1)}>
                Case1
            </Button>
            <Button variant="contained" sx={{marginRight:'15px'}} onClick={() => handleClick(2)}>
                Case2
            </Button>
            <Button variant="contained" onClick={() => handleClick(3)}>
                Case3
            </Button>
        </>
    )
}

export default Home
