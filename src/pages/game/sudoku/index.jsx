import React, { useState, useRef } from 'react';
import './index.less';
import { message } from 'antd';

const sudokuArray = [
  { index: 0, dataIndex: 0 },
  { index: 1, dataIndex: 1 },
  { index: 2, dataIndex: 2 },
  { index: 3, dataIndex: 7 },
  { index: 4, center: true },
  { index: 5, dataIndex: 3 },
  { index: 6, dataIndex: 6 },
  { index: 7, dataIndex: 5 },
  { index: 8, dataIndex: 4 },
];

function getRandomIntInclusive(min, max) {
  const Min = Math.ceil(min);
  const Max = Math.floor(max);
  return Math.floor(Math.random() * (Max - Min + 1)) + Min; // 含最大值，含最小值
}

function easeInOutQuad(currentTime, startValue = 0, changeValue = 5000, duration = 5000) {
  currentTime /= duration / 2;
  if (currentTime < 1) return (changeValue / 2) * currentTime * currentTime + startValue;
  currentTime--;
  return (-changeValue / 2) * (currentTime * (currentTime - 2) - 1) + startValue;
}

function animate({ timing = f => f, draw, duration = 5000 }) {
  const start = performance.now();
  let requestId;

  requestId = requestAnimationFrame(function step(time) {
    // timeFraction 从 0 增加到 1
    let timeFraction = (time - start) / duration;

    if (timeFraction > 1) {
      timeFraction = 1;
    }

    // 计算当前动画状态
    const progress = timing(timeFraction);
    draw(progress); // 绘制

    if (timeFraction < 1) {
      requestId = requestAnimationFrame(step);
    }
  });

  return () => {
    cancelAnimationFrame(requestId);
  };
}

const Sudoku = () => {
  const [active, setActive] = useState();
  // 防止重复点击
  const lockRef = useRef(false);

  const onStart = () => {
    if (lockRef.current) {
      return;
    }
    lockRef.current = true;

    try {
      new Promise((resolve) => {
        setTimeout(() => {
          // 获取抽奖结果
          resolve(getRandomIntInclusive(0, 7));
        });
      }).then((res) => {
        const target = 8 * 4 + res;
        animate({
          draw: (progress) => {
            const cur = Math.floor(target * progress);

            if (cur < target) {
              setActive(cur % 8);
              return;
            }

            setActive(cur % 8);
            lockRef.current = false;
            message.success(`抽中了 ${res}`);
          },
        });
      });
    } catch (e) {
      lockRef.current = false;
    }
  };

  const renderItem = (item) => {
    if (item.center) {
      return (
        <div onClick={onStart} key={item.index} className={`item${item.index}`}>
          start
        </div>
      );
    }

    return (
      <div
        key={item.index}
        className={`item${item.index} ${active === item.dataIndex && 'activeItem'}`}
      >
        {item.dataIndex}
      </div>
    );
  };

  return (
    <div className="container">
      {sudokuArray.map(ele => renderItem(ele))}
      {/* <div className='item2'>2</div>
      <div className='item3'>3</div>

      <div className='item8'>8</div>
      <div className='item9'>start</div>
      <div className='item4'>4</div>

      <div className='item7'>7</div>
      <div className='item6'>6</div>
      <div className='item5'>5</div> */}
    </div>
  );
};

export default Sudoku;
