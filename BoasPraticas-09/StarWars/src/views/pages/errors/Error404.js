const Error404 = {
  is_private: false,
  render: async () => {
    const view = `${error}`;
    return view;
  },

  after_render: () => {
    console.log('Try another one... :)');
  },
};
let error = `
<div>
    erro 404!
</div>
`;

export default Error404;
