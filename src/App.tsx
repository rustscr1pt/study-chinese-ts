import {useAppSelector} from "./redux/hooks";
import CurrentScreen from "./structs&constants&enums/enums";


const App = () => {
    const currentScreen : CurrentScreen = useAppSelector((state) => state.currentScreen.value)

    return <div>
        {
            currentScreen === CurrentScreen.Manage
                ? <div>Manage Screen</div>
                : <div>Study Screen</div>
        }
    </div>
}

export default App;