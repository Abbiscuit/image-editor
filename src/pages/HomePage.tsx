import { Dashboard, ImageCrop, PreviewImage } from '../components/common';

interface HomePageProps {}

const HomePage = (props: HomePageProps): JSX.Element => {
  return (
    <Dashboard>
      <Dashboard.Left>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
          ipsa voluptatibus assumenda aut nesciunt facilis laborum modi minima,
          expedita possimus consequatur excepturi nostrum eligendi quod sunt,
          temporibus iure esse veritatis!
        </p>
      </Dashboard.Left>
      <Dashboard.Content>
        <ImageCrop />
      </Dashboard.Content>
      <Dashboard.Right>
        <section>
          <h3>Preview</h3>
          <PreviewImage />
        </section>
      </Dashboard.Right>
    </Dashboard>
  );
};

export default HomePage;
