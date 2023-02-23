import React from "react";
import { Outlet } from "react-router-dom";
import {Main} from '../../Components/Main'
import {Topbar} from '../../Components/Topbar'
import { Sidebar } from "../../Components/Sidebar";

import * as S from './styes'

const MainLayout = () => {
  return (
    <S.MainLayout>
      <Topbar />
      <S.MainSection>
        <Sidebar/>
        <Main>
          
        </Main>
      </S.MainSection>
    </S.MainLayout>
  );
};

export { MainLayout };
