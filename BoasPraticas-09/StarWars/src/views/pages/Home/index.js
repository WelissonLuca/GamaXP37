import homeSectionOne from '../../components/sections/homeSectionOne';
import homeSectionTwo from '../../components/sections/homeSectionTwo';
import floatImage from '../../components/float/floatImage';

const Home = {
  is_private: false,

  render: async () => {
    const view = `
          <div>
            ${homeSectionOne}
            ${homeSectionTwo}
            ${floatImage}
          </div>
      `;

    return view;
  },

  after_render: async () => {},
};

export default Home;
