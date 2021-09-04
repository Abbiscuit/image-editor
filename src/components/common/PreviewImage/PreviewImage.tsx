import styles from './PreviewImage.module.scss';

interface PreviewImageProps {}

const PreviewImage = (props: PreviewImageProps) => {
  return (
    <div className={styles.box}>
      <div id="img-preview" className={styles.imgPreview} />
    </div>
  );
};

export default PreviewImage;
