import styles from '../../styles/Home.module.css';

interface PageProps {
  text: string;
}

export default function TestingPage({ text }: PageProps) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Testing on this template!</h1>
        <p>This ({text})is being server side rendered</p>
        <p>See the code to know how to test page components</p>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      text: 'Hello World!',
    },
  };
}
