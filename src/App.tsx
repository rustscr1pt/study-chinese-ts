import {useAppSelector} from "./redux/hooks";
import CurrentScreen from "./structs&constants&enums/enums";
import ManageScreenComponent from "./Screens/Manage/ManageScreen.component";
import StudyScreenComponent from "./Screens/Study/StudyScreen.component";


const App = () => {
    const currentScreen : CurrentScreen = useAppSelector((state) => state.currentScreen.value)

    return <div>
        {
            currentScreen === CurrentScreen.Manage
                ? <ManageScreenComponent/>
                : <StudyScreenComponent/>
        }
    </div>
}

export default App;