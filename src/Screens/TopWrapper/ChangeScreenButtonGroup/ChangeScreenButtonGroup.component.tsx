import {Button} from "@mui/material";
import "./ChangeScreenButtonGroup.style.sass";
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';
import CurrentScreen from "../../../structs&constants&enums/enums";
import {useAppDispatch} from "../../../redux/hooks";
import {changeCurrentScreen} from "../../../redux/currentScreenStore/currentScreenStore";


const ChangeScreenButtonGroupComponent = () => {
    const dispatch = useAppDispatch();

    const changeScreen = (setTo : CurrentScreen) => {
        switch (setTo) {
            case CurrentScreen.Manage:
                dispatch(changeCurrentScreen(setTo));
                return
            case CurrentScreen.Study:
                dispatch(changeCurrentScreen(setTo));
                return;
        }
    }

    return <div className="ChangeScreenButtonGroup">
        <div className="ChangeScreenButtonGroup__div">
            <Button
                variant="contained"
                sx={{width : "35%", fontSize : "1.3vw"}}
                endIcon={<SchoolRoundedIcon/>}
                onClick={() => changeScreen(CurrentScreen.Study)}
            >
                Study
            </Button>
            <Button
                variant="contained"
                sx={{width : "35%", fontSize : "1.3vw"}}
                endIcon={<PlaylistAddRoundedIcon/>}
                onClick={() => changeScreen(CurrentScreen.Manage)}
            >
                Add
            </Button>
        </div>
    </div>
}
export default ChangeScreenButtonGroupComponent;