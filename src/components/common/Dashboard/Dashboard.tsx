import type { ReactNode } from 'react';

import styles from './Dashboard.module.scss';

interface DashboardProps {
  readonly children: ReactNode;
}

const Dashboard = ({ children }: DashboardProps): JSX.Element => {
  return <div className={styles.dashboard}>{children}</div>;
};

Dashboard.Content = ({ children }: { children: ReactNode }) => {
  return <div className={styles.content}>{children}</div>;
};

Dashboard.Left = ({ children }: { children: ReactNode }) => {
  return <div className={styles.left}>{children}</div>;
};

Dashboard.Right = ({ children }: { children: ReactNode }) => {
  return <div className={styles.right}>{children}</div>;
};

export default Dashboard;
