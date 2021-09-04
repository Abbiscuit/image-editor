import React, { useRef, useState } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import styles from './ImageCrop.module.scss';

interface ImageCropProps {}

const ImageCrop = (props: ImageCropProps): JSX.Element => {
  const cropperRef = useRef<HTMLImageElement>(null);
  const [cropData, setCropData] = useState('#');
  const [cropper, setCropper] = useState<any>();

  console.log(cropData);

  const getCropData = () => {
    const imageElement: any = cropperRef?.current;
    const cropper: any = imageElement?.cropper;

    if (typeof cropper !== 'undefined') {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };
  return (
    <>
      <Cropper
        src="https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg"
        zoomTo={0.5}
        zoomOnWheel={false}
        initialAspectRatio={1}
        preview="#img-preview"
        viewMode={1}
        minCropBoxHeight={10}
        minCropBoxWidth={10}
        background={false}
        responsive={true}
        autoCropArea={1}
        checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
        onInitialized={instance => {
          setCropper(instance);
        }}
        guides={true}
        ref={cropperRef}
      />
      <button onClick={getCropData}>button</button>
      {cropData && (
        <img
          src={cropData}
          width={100}
          height={100}
          style={{ objectFit: 'contain' }}
          alt=""
        />
      )}
    </>
  );
};

export default ImageCrop;
