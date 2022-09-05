import * as React from 'react';
import Image from 'next/image';
import { Container } from './styles';
import profile from '../../assets/profile.jpeg';
import logo from '../../assets/logo.svg';
import HomeIcon from '../icons/HomeIcon';
import MessengerIcon from '../icons/MessengerIcon';
import NewPublicationIcon from '../icons/NewPublicationIcon';
import FindPeopleIcon from '../icons/FindPeopleIcon';
import HeartIcon from '../icons/HeartIcon';
import SearchIcon from '../icons/SearchIcon';

function HeaderTop() {
  return (
    <Container>
      <div>
        <div className="logoImage">
          <Image src={logo} alt="Instafolio" />
        </div>
        <div className="searchInput">
          <SearchIcon />
          <span>Pesquisar</span>
        </div>
        <div>
          <div>
            <HomeIcon />
          </div>
          <MessengerIcon />
          <NewPublicationIcon />
          <FindPeopleIcon />
          <HeartIcon />

          <div className="profileImage">
            <Image src={profile} alt="Brenda Matias" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HeaderTop;
