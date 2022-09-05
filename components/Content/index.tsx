import * as React from 'react';
import { IExperience } from '../../types';
import { formatDate } from '../../utils/formatDate';
import { Container } from './styles';

interface ContentProps {
  experiences: IExperience[];
}

const Content = ({ experiences }: ContentProps) => {
  const educations = [
    {
      name: 'Bacharelado em Engenharia de Computação',
      organization: 'Faculdade Maurício de Nassau',
      date: 'jan de 2015 - dez de 2019',
    },
    {
      name: 'Aluna Bootcamp GoStack 8.0, FullStack Developer',
      organization: 'Rocketseat',
      date: 'julho de 2019 - dez de 2019',
    },
  ];

  const certifications = [
    {
      name: 'Automação Front End com NPM',
      organization: 'Origamid',
      date: 'Emitido em mar de 2020',
    },
    {
      name: 'CSS Avançado',
      organization: 'Origamid',
      date: 'Emitido em mar de 2020',
    },
    {
      name: 'Bootstrap 4',
      organization: 'Origamid',
      date: 'Emitido em out de 2018',
    },
    {
      name: 'UX Design - Heurísticas',
      organization: 'Origamid',
      date: 'Emitido em jul de 2018',
    },
    {
      name: 'Web Design Completo',
      organization: 'Origamid',
      date: 'Emitido em jul de 2018',
    },
  ];

  return (
    <Container>
      <div>
        <div className="experience">
          <span className="title">Experience</span>

          {experiences
            // .sort((a, b) => (a.finished_in && b.finished_in && a.finished_in < b.finished_in ? 1 : -1))
            .map((experience) => (
              <div key={experience.company}>
                <span>
                  <strong>{experience.job},</strong> {experience.company}
                </span>

                <h6>
                  {formatDate(experience.started_in)} -{' '}
                  {experience.finished_in ? formatDate(experience.finished_in) : 'at moment'}
                </h6>

                <p>{experience.description}</p>
              </div>
            ))}
        </div>
      </div>

      <div>
        <div className="education">
          <span className="title">Academic Education</span>

          {educations.map((education) => (
            <div key={education.organization}>
              <span>
                <strong>{education.name},</strong>
                <br />
                {education.organization}
              </span>

              <h6> {education.date}</h6>
            </div>
          ))}
        </div>

        <div className="education">
          <span className="title">Certificates</span>

          {certifications.map((certification) => (
            <div key={certification.name}>
              <span>
                <strong>{certification.name},</strong>
                <br />
                {certification.organization}
              </span>

              <h6>{certification.date}</h6>
            </div>
          ))}
        </div>
        <div className="education">
          <span className="title">Skills</span>
          <div>
            <span>
              React · Javascript · Node.js · Typescript · HTML · CSS · Bootstrap · Material UI · Postgres · SQL Server ·
              Adonis.js
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Content;
