import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/sample_tux.png';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '황대연',
    small: '반갑습니다',
  },
  contact: [
    {
      title: '2288003@pcu.ac.kr',
      link: '2288003@pcu.ac.kr',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/Gooongback',
      icon: faGithub,
    },
    {
      link: 'non facebook',
      icon: faFacebook,
    },
  ],
  notice: {
    title:
      "포트폴리오용 웹 이력서입니다.",
    icon: faBell,
  },
};

export default profile;
