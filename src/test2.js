import React, { useState } from 'react';
import './App.css';

function MemoApp() {
  const [memos, setMemos] = useState([]); // 用于存储备忘录的数组
  const [text, setText] = useState(''); // 输入框的文本
  const [selectedDate, setSelectedDate] = useState(''); // 选中的日期
  const [selectedTime, setSelectedTime] = useState(''); // 选中的时间

  // 处理输入框文本变化
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // 处理日期选择框变化
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  // 处理时间选择框变化
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  // 处理添加备忘录按钮点击事件
  const handleAddMemo = () => {
    if (text.trim() !== '' && selectedDate !== '' && selectedTime !== '') {
      const memo = {
        id: Date.now(),
        text: text,
        date: selectedDate,
        time: selectedTime,
      };
      setMemos([...memos, memo]);
      setText('');
      setSelectedDate('');
      setSelectedTime('');
      setMemos([...memos, memo]);
      setText('');
      //document.querySelector('.container').style.marginBottom = `${memos.length * 20}px`;
    }
  };

  // 处理删除备忘录按钮点击事件
  const handleDeleteMemo = (id) => {
    const updatedMemos = memos.filter((memo) => memo.id !== id);
    setMemos(updatedMemos);
    //document.querySelector('.container').classList.add('movedown'); // 向下移动容器
  };

  return (
    <div >
      <h1>備忘錄</h1>
      <div className="input-container">
        <input type="text" value={text} onChange={handleTextChange} placeholder="請輸入内容" />
        <input type="date" value={selectedDate} onChange={handleDateChange} />
        <input type="time" value={selectedTime} onChange={handleTimeChange} />
        <button onClick={handleAddMemo} className="button">添加</button>
      </div>
      <div className="memo-list" style={{ height: memos.length * 40 + 'px' }}>
        {memos.map((memo) => (
          <div key={memo.id} className="memo-item">
            <span>{memo.text} - {memo.date} {memo.time}</span>
            <button className="button delete-button" onClick={() => handleDeleteMemo(memo.id)}>删除</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemoApp;