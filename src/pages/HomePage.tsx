import { Dashboard } from '../components/common';

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
      <Dashboard.Content>{/* main */}</Dashboard.Content>
      <Dashboard.Right>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
          ipsa voluptatibus assumenda aut nesciunt facilis laborum modi minima,
          expedita possimus consequatur excepturi nostrum eligendi quod sunt,
          temporibus iure esse veritatis!
        </p>
      </Dashboard.Right>
    </Dashboard>
  );
};

export default HomePage;
