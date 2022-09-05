import * as React from 'react';
import { NextComponentType } from 'next';
import Image from 'next/image';
import { Container } from './styles';
import profile from '../../assets/profile.jpeg';
import Story from '../Story';

const Header: NextComponentType = () => (
  <Container>
    <div className="content">
      <div className="image">
        <span>
          <div>
            <Image src={profile} alt="Brenda Matias" />
          </div>
        </span>
      </div>

      <div className="content-info">
        <h2>
          @brendasobralmatias
          <a href="https://www.instagram.com/brendasobralmatias/" target="_blank" rel="noreferrer">
            Follow
          </a>
        </h2>

        <div className="info">
          <div>
            <strong>+888</strong>
            <span> projects</span>
          </div>
          <div>
            <strong>+888</strong>
            <span> clients</span>
          </div>
        </div>

        <div className="contact">
          <strong>Brenda Matias</strong>
          <p>Hello! I'm Brenda Matias, a computer engineer who loves to turn dream into code lines</p>
          <br />
          <p>
            Portfolio:{' '}
            <a href="https://brendamatias.dev/" target="_blank" rel="noreferrer">
              https://brendamatias.dev/
            </a>
          </p>
          <p>
            Linkedin:{' '}
            <a href="https://www.linkedin.com/in/brenda-matias/" target="_blank" rel="noreferrer">
              https://www.linkedin.com/in/brenda-matias/
            </a>
          </p>
          <p>Contact: brendamatias.sobral@gmail.com</p>
          <br />-<br />
          <p>paraibana • developer • recife 📍</p>
        </div>

        <Story />
      </div>
    </div>
  </Container>
);

export default Header;
