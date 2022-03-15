import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};

const proj = [
  
     {
      name: " CLONE OF SMATBOT",
      description: "SmatBot is a conversational bot building platform to create customizable chatbots for Lead generation,  chat support, Interactive  Pages,Feedback and Suggestions for your business.",
      images : ["/Images/smatbot1.png","/Images/smatbot2.png"],
      svn_url: "https://github.com/utkrsh2505/Smatbot1.git",
      deploy_url : "https://clone-smatbot.netlify.app/",
      tech : "HTML | CSS ",
      stargazers_count: "23",
      languages_url: null,
      pushed_at: null,
    },
    {
      name: "CLONE OF BBC NEWS",
      description:  "BBC News is an operational business division of the British Broadcasting Corporation responsible for the gathering and broadcasting of news.",
      images : ["/Images/smatbot1.png","/Images/smatbot2.png"],
      svn_url: "https://github.com/utkrsh2505/BBC_Clone.git",
      deploy_url :"https://bbc-news-clone.netlify.app/",
      tech : "HTML | CSS | JAVASCRIPT",
      stargazers_count: null,
      languages_url: null,
      pushed_at: null,
    },
    {
      name: "CLONE OF OYO",
      description:  "OYO is India's one of the largest network of hotels, which provides customers to stay across the globe.",
      images : ["/Images/oyo1.png","/Images/oyo2.png","/Images/oyo3.png"],
      svn_url: "https://github.com/utkrsh2505/OYO-Clone",
      deploy_url :"https://zealous-shirley-afc987.netlify.app/",
      tech : "HTML | CSS | JavaScript |React JS |Redux",
      stargazers_count: null,
      languages_url: null,
      pushed_at: null,
    }
]
const API = "https://api.github.com";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      // getting all repos
      const response = await axios.get(allReposAPI);
      // slicing to the length
      repoList = [...response.data.slice(0, length)];
      // adding specified repos
      try {
        for (let repoName of specfic) {
          const response = await axios.get(`${specficReposAPI}/${repoName}`);
          repoList.push(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
      // setting projectArray
      // TODO: remove the duplication.
      setProjectsArray(proj);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specfic, specficReposAPI]);

  // useEffect(() => {
  // //  fetchRepos();
  // }, [fetchRepos]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {proj.map((project, index) => (
                <ProjectCard
                  key={`project-card-${index}`}
                  id={`project-card-${index}`}
                  value={project}
                />
              ))
           }
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
