import {Button} from "@mui/material";
import {ButtonGroup} from "@mui/material";

const ChangeScreenButtonGroupComponent = () => {
    return <div style={{width : "100%"}}>
        <ButtonGroup
            variant="contained"
        >
            <Button sx={{flex : 1, mx : 1}}>Учить</Button>
            <Button sx={{flex : 1, mx : 1}}>Добавить</Button>
        </ButtonGroup>
    </div>
}
export default ChangeScreenButtonGroupComponent;