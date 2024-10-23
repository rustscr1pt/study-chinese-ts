import "./TopWrapper.style.sass"
import CurrentScreen from "../../structs&constants&enums/enums";
import ManageScreenComponent from "../Manage/ManageScreen.component";
import StudyScreenComponent from "../Study/StudyScreen.component";
import {useAppSelector} from "../../redux/hooks";
import ChangeScreenButtonGroupComponent from "./ChangeScreenButtonGroup/ChangeScreenButtonGroup.component";
const TopWrapperComponent = () => {
    const currentScreen : CurrentScreen = useAppSelector((state) => state.currentScreenStore.value)

    return <div className="top-wrapper">
        <ChangeScreenButtonGroupComponent/>
        {
            currentScreen === CurrentScreen.Manage
                ? <ManageScreenComponent/>
                : <StudyScreenComponent/>
        }
    </div>
}

export default TopWrapperComponent;