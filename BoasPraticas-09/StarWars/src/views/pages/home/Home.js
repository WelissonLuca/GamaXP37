import homeSectionOne from '../../components/sections/homeSectionOne';
import homeSectionTwo from '../../components/sections/homeSectionTwo';

const Home = {
  is_private: false,

  render: async () => {
    const view = `
          <div>
            <h1>Inicio</div>
            ${homeSectionOne}
            ${homeSectionTwo}
          </div>
      `;

    return view;
  },

  after_render: async () => {},
};

export default Home;
