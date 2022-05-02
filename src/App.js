import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Main from "./pages/Main";
import Resume from "./pages/Resume";
import Vacancies from "./pages/Vacancies";
import Searches from "./pages/Searches";
import VacanciesList from "./pages/VacanciesList";
import ResumeList from "./pages/ResumeList";
import VacancyCreate from "./pages/VacancyCreate";
import CardOfVacancy from "./pages/CardOfVacancy";

import { useSelector } from "react-redux";
import ResumeCreate from "./pages/ResumeCreate";

function App() {
  const listVacancy1 = useSelector(state => state.vacancy.list);
  const listVacancy2 = useSelector(state => state.vacancy.addedVacansies);
  const listResume1 = useSelector(state => state.resume.list);
  const listResume2 = useSelector(state => state.resume.addedResume);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/searches" element={<Searches />} />
          <Route path="/vacancieslist" element={<VacanciesList />} />
          <Route path="/vacancycreate" element={<VacancyCreate />} />
          <Route path="/resumelist" element={<ResumeList />} />
          <Route path="/resumecreate" element={<ResumeCreate />} />

          {[...listVacancy1, listVacancy2].map(route => {
            return (
              <Route
                path={route.repos}
                element={<CardOfVacancy props={route} />}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
