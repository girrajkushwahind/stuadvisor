import React, { useEffect, useState, useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import { SignOut, SiteContext } from '../App';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Notes from './Notes';
import Impque from './Impque';
import SamplePaper from './SamplePaper';
import PrePaper from './PrePaper';
import DataPosted from './DataPosted';

const Academics = () => {
  const { state } = useContext(SiteContext);
  const handleSignOut = useContext(SignOut);
  const [data, setData] = useState(0);
  const { key } = useOutletContext();

  const menuClick = id => {
    setData(id);
  }

  const academicsData = [{ text: 'Notes', icon: <i className="i-tag fa-solid fa-house"></i>, click: menuClick }, { text: 'Important Questions', icon: <i className="i-tag fa-solid fa-address-card"></i>, click: menuClick }, { text: 'Sample Papers', icon: <i className="i-tag fa-sharp fa-solid fa-laptop"></i>, click: menuClick }, { text: 'Previous Papers', icon: <i className="i-tag fa-brands fa-blogger-b"></i>, click: menuClick }, { text: 'Data Posted', icon: <i className="i-tag fa-solid fa-magnifying-glass-chart"></i>, click: menuClick }]

  const academicsMenu = [...academicsData, { text: 'Sign in', icon: <i className="i-tag fa-solid fa-door-open"></i>, click: menuClick }, { text: 'Sign up', icon: <i className="i-tag fa-solid fa-user-plus"></i>, click: menuClick }];

  const academicsMenu2 = [...academicsData, { text: 'Sign out', icon: <i className="i-tag fa-solid fa-right-from-bracket"></i>, click: handleSignOut }];

  useEffect(() => {
    document.title = 'Academics';
    if (state) key(academicsMenu2);
    else key(academicsMenu);
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className="main-item main-right">
        {data === 0 ? <Notes /> : null}
        {data === 1 ? <Impque /> : null}
        {data === 2 ? <SamplePaper /> : null}
        {data === 3 ? <PrePaper /> : null}
        {data === 4 ? <DataPosted /> : null}
        {data === 5 ? <SignIn /> : null}
        {data === 6 ? <SignUp /> : null}
      </div>
    </>
  )
}

export default Academics;