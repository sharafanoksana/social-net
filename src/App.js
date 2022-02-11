import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Outlet, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App() {
    return (
        <Routes>
            <Route path={'/'}
                   element={
                       <Layout />
                   }>
                <Route path={'/profile'}
                       element={
                           <Profile/>
                       }/>
                <Route path={'/dialogs/*'}
                       element={
                           <DialogsContainer/>
                       }>
                    {/*<Route path={'/1'} component={User}/>*/}
                </Route>
            </Route>
        </Routes>
    );
}

function Layout() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Outlet/>
            </div>
        </div>
    );
}

export default App;
