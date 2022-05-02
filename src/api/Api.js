import superagent from "superagent";

export const fetchVacancy = filter => {
  return superagent
    .get(`http://localhost:5999/api/vacancy`)
    .query(filter)
    .then(res => res.body);
};

export const fetchResume = filter => {
  return superagent
    .get(`http://localhost:5999/api/resume`)
    .query(filter)
    .then(res => res.body);
};
