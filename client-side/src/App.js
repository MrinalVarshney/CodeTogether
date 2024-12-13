import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import VideoLists from './pages/VideoLists/VideoLists';
import Education from './pages/Education/Education';
import NoticeBoard from './pages/NoticeBoard/NoticeBoard';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import UserHome from './pages/UserHome/UserHome';
import {useState } from 'react';
import { loginContext } from './loginContext';
import { useParams } from 'react-router-dom';
import TeamMember from './pages/Team/TeamMember';

export default function App() {
  const [login, setLogin] = useState(false);
  //cfID of user currently logged in
  const [userCfID,setUserCfID] = useState("")

  const params = useParams();

  const baseURL = process.env.REACT_APP_BASE_URL;
  return (
    <loginContext.Provider value={{ login, setLogin,userCfID,setUserCfID }}>
    <BrowserRouter>
      <Routes>
        <Route path={baseURL + "/"} element={<LandingPage />} />
        <Route path={baseURL + "/login"} element={<LoginPage />} />
        <Route path={baseURL + "/education/videos"} element={<VideoLists />} />
        <Route path={baseURL + "/education"} element={<Education />} />
        <Route path={baseURL + "/notice-board"} element={<NoticeBoard />} />
        <Route path={baseURL + "/user-home/:id"} element={<UserHome/>} />
        <Route path={baseURL + "/leader-board"} element={<Leaderboard />} />
        <Route path={baseURL + "/team-member"} element={<TeamMember />} />
      </Routes>
    </BrowserRouter >
    </loginContext.Provider>
  )
}