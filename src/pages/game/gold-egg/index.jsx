import React, { useState } from 'react';
import { Button, Row, message } from 'antd';
import './index.less';
import hammer from '../../../public/img-1.png';

export default () => {
  const [play, setPlay] = useState(false); // 动画是否运转
  const [target, setTarget] = useState(0);

  const handleStart = () => {
    setPlay(paly => !paly);
    setTarget(0);
  };

  const handleItem = (i) => {
    if (!play) return;

    setPlay(paly => !paly);
    setTarget(i);

    setTimeout(() => {
      message.info('一等奖');
    }, 800);
  };

  const animationStyle = {
    animationPlayState: play ? 'running' : 'paused',
  };

  const hammerTransformStyle = {
    // visibility: 'visible',
    // transform: 'rotate(-45deg)',
    // transformOrigin: '80px 70px',
    // transition: 'transform 1s ease-in -1s',
  };

  return (
    <div className="wrap">
      <div className="egg-content">
        <div
          className="egg-item transformStyle1"
          style={animationStyle}
          onClick={() => handleItem(1)}
        >
          <div className={`egg ${target === 1 && 'activeEgg'}`} />
          <img
            src={hammer}
            className={`hammer ${target === 1 && 'hammerTransform'}`}
            style={target === 1 ? hammerTransformStyle : null}
            alt="hammer"
          />
        </div>
        <div
          className="egg-item transformStyle2"
          style={animationStyle}
          onClick={() => handleItem(2)}
        >
          <div className={`egg ${target === 2 && 'activeEgg'}`} />
          <img
            src={hammer}
            className={`hammer ${target === 2 && 'hammerTransform'}`}
            style={target === 2 ? hammerTransformStyle : null}
            alt="hammer"
          />
        </div>
        <div
          className="egg-item transformStyle3"
          style={animationStyle}
          onClick={() => handleItem(3)}
        >
          <div className={`egg ${target === 3 && 'activeEgg'}`} />
          <img
            src={hammer}
            className={`hammer ${target === 3 && 'hammerTransform'}`}
            style={target === 3 ? hammerTransformStyle : null}
            alt="hammer"
          />
        </div>
      </div>
      <Row justify="center">
        <Button type="primary" onClick={handleStart}>
          {play ? 'pause' : 'start'}
        </Button>
      </Row>
    </div>
  );
};
