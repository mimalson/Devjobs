import Button from '../UI/Button';

import styles from './JobBottomBanner.module.css';

const JobBottomBanner = (props) => {
  return (
    <section className={styles.jobBottomBanner}>
      <div className={styles.jobDescription}>
        <h3>{props.position}</h3>
        <p>{props.company}</p>
      </div>
      <a href={props.apply} target='_blank' rel='noreferrer'>
        <Button primary>Apply now</Button>
      </a>
    </section>
  );
};

export default JobBottomBanner;
