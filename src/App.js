import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Outlet, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
    return (
        <Routes>
            <Route path={'/'}
                   element={
                       <Layout friends={props.appState.sidebar}/>
                   }
            >
                <Route path={'/profile'}
                       element={
                           <Profile
                               // profilePage={props.appState.profilePage}
                               // dispatch={props.dispatch}
                               store={props.store}
                           />
                       }/>
                <Route path={'/dialogs/*'}
                       element={
                           <DialogsContainer
                               store={props.store}
                               // dispatch={props.dispatch}
                               // dialogsPage={props.appState.dialogsPage}
                           />
                       }
                >
                    {/*<Route path={'/1'} component={User}/>*/}
                </Route>
            </Route>
        </Routes>
    );
}

function Layout(props) {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar friends={props.friends.friendData}/>
            <div className={'app-wrapper-content'}>
                <Outlet/>
            </div>
        </div>
    );
}

export default App;
