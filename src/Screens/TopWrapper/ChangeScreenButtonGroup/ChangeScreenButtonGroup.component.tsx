import {Button} from "@mui/material";
import "./ChangeScreenButtonGroup.style.sass";
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';


const ChangeScreenButtonGroupComponent = () => {
    return <div className="ChangeScreenButtonGroup">
        <div className="ChangeScreenButtonGroup__div">
            <Button
                variant="contained"
                sx={{width : "35%", fontSize : "1.3vw"}}
                endIcon={<SchoolRoundedIcon/>}
                onClick={() => {}}
            >
                Study
            </Button>
            <Button
                variant="contained"
                sx={{width : "35%", fontSize : "1.3vw"}}
                endIcon={<PlaylistAddRoundedIcon/>}
            >
                Add
            </Button>
        </div>
    </div>
}
export default ChangeScreenButtonGroupComponent;