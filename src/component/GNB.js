import React from 'react';
import "../css/gnb.css";
import GNBGroup from './GNBGroup';

function GNB(props) {
    const data = [{
        about : "개발",
        info : [
            {name : "서버 개발자"},
            {name : "웹 개발자"},
            {name : "프론트엔드 개발자"},
            {name : "자바 개발자"},
            {name : "소프트웨어 엔지니어"},
            {name : "안드로이드 개발자"},
            {name : "iOS 개발자"},
            {name : "파이썬 개발자"}]
    },
        {
        about: "ㅤ",
        info : [
            {name :"데이터 엔지니어"},
            {name :"Node.js 개발자"},
            {name :"DevOps / 시스템 관리자"},
            {name :"머신러닝 엔지니어"},
            {name :"시스템 네트워크 관리자"},
            {name :"데이터 사이언티스트"},
            {name :"C,C++ 개발자"},
            {name :"더보기"},
        ]
    },

    {
        about: "경영·비즈니스",
        info : [
            {name :"서비스 기획자"},
            {name :"PM·PO"},
            {name :"사업개발·기획자"},
            {name :"전략 기획자"},
            {name :"운영 매니저"},
            {name :"경영지원"},
            {name :"데이터 분석가"},
            {name :"더보기"},
        ]
    },

    {
        about: "마케팅·광고",
        info : [
            {name :"디지털 마케터"},
            {name :"마케터"},
            {name :"콘텐츠 마케터"},
            {name :"퍼포먼스 마케터"},
            {name :"마케팅 전략 기획자"},
            {name :"브랜드 마케터"},
            {name :"광고 기획자(AE)"},
            {name :"더보기"},
        ]
    },
    {
        about: "디자인",
        info : [
            {name :"UX 디자이너"},
            {name :"UI, GUI 디자이너"},
            {name :"웹 디자이너"},
            {name :"그래픽 디자이너"},
            {name :"모바일 디자이너"},
            {name :"광고 디자이너"},
            {name :"BI/BX 디자이너"},
            {name :"더보기"},
        ]
    },
    {
        about: "고객서비스·리...",
        info : [
            {name :"MD"},
            {name :"CS 매니저"},
            {name :"서비스 운영"},
            {name :"리테일 MD"},
            {name :"CS 어드바이저"},
            {name :"패션 MD"},
            {name :"CRM 전문가"},
            {name :"더보기"},
        ]
    },
    {
        about: "영업",
        info : [
            {name :"기업영업"},
            {name :"외부영업"},
            {name :"영업 관리자"},
            {name :"주요고객사 담당자"},
            {name :"기술영업"},
            {name :"솔루션 컨설턴트"},
            {name :"해외영업"},
            {name :"더보기"},
        ]
    },
    {
        about: "미디어",
        info : [
            {name :"콘텐츠 크리에이터"},
            {name :"PD"},
            {name :"영상 편집가"},
            {name :"에디터"},
            {name :"비디오 제작"},
            {name :"작가"},
            {name :"출판 기획자"},
            {name :"더보기"},
        ]
    },
    {
        about: "인사",
        info : [
            {name :"인사담당"},
            {name :"리크루터"},
            {name :"조직문화"},
            {name :"평가·보상"},
            {name :"헤드헌터"},
            {name :"HRBP"},
            {name :"급여담당"},
            {name :"더보기"},
        ]
    },
    {
        about: "게임 제작",
        info : [
            {name :"게임 기획자"},
            {name :"게임 그래픽 디자이너"},
            {name :"모바일 게임 개발자"},
            {name :"게임 아티스트"},
            {name :"게임 클라이언트 개발자"},
            {name :"게임 서버 개발자"},
            {name :"유니티 개발자"},
            {name :"더보기"},
        ]
    },
    {
        about: "엔지니어링·설계",
        info : [
            {name :"기계 엔지니어"},
            {name :"전자 엔지니어"},
            {name :"전자기계 공학자"},
            {name :"전기 엔지니어"},
            {name :"로봇·자동화"},
            {name :"제품 엔지니어"},
            {name :"QA 엔지니어"},
            {name :"더보기"},
        ]
    },
                ]
    return (
        <div className="gnb__header">
            <ul>
                <li style={{fontSize:"22px", fontWeight:"700"}}>wanted</li>
                <li>탐색</li>
                <li>커리어 성장</li>
                <li>직군별 연봉</li>
                <li>이력서</li>
                <li>매치업</li>
                <li>프리랜서</li>
                <li className="AI" style={{lineHeight:"38px"}}>Ai 합격예측</li>
                <div className="profile__box">
                <div className="profile"><img alt="" src="./assets/img/magnifier-left.svg" style={{width:"20px", height:"20px"}}></img></div>
                <div className="profile"><img alt="" src="./assets/img/bell.svg" style={{width:"20xp", height:"20px"}}></img></div>
                <div className="profile" style={{borderRadius:"50%"}}><img alt="" src="./assets/img/duck.svg" style={{width:"20px", height:"20px"}}></img></div>
                <div className="profile__after"></div>
                <div className="progile__company">기업 서비스</div>
                </div>
            </ul>
            <div className="gnb__main">
                <GNBGroup data={data}></GNBGroup>
                </div>
        </div>
    );
}

export default GNB;