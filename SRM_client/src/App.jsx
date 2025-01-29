import React, { useState } from "react";
import StepNavigator from "./components/StepNavigator";
import ProfileScreen from "./components/ProfileScreen";
import EntryAdjustmentScreen from "./components/EntryAdjustmentScreen";
import CasualScreen from "./components/CasualScreen";
import FirstInterviewScreen from "./components/FirstInterviewScreen";
import SecondInterviewScreen from "./components/SecondInterviewScreen";
import OtherScreens from "./components/OtherScreens";
import FinalInterviewScreen from "./components/FinalInterviewScreen";

function App() {
  const [profileData, setProfileData] = useState({
    name: "",
    furigana: "",
    photo: null,
    education: "",
    career: "",
    resume: null,
    careerSheet: null,
  });

  const [casualData, setCasualData] = useState({
    result: "",
    honesty: "",
    teamLove: "",
    charm: "",
    humility: "",
    notes: "",
  });

  const [interviewData, setInterviewData] = useState({
    firstInterview: {
      technicalSkills: "",
      problemSolving: "",
      logicalThinking: "",
      leadership: "",
      careerVision: "",
    },
    secondInterview: {
      technicalSkills: "",
      problemSolving: "",
      logicalThinking: "",
      leadership: "",
      careerVision: "",
    },
  });

  const [currentStep, setCurrentStep] = useState(0);

  const [stepLabels, setStepLabels] = useState([
    "エントリー",
    "調整中",
    "カジュアル",
    "調整中",
    "1次面接",
    "調整中",
    "2次面接",
    "調整中",
    "最終",
    "調整中",
  ]);

  const [steps, setSteps] = useState([
    { id: 1, type: 'profile' },
    { id: 2, type: 'entryAdjustment' },
    { id: 3, type: 'casual' },
    { id: 4, type: 'other' },
    { id: 5, type: 'firstInterview' },
    { id: 6, type: 'other' },
    { id: 7, type: 'secondInterview' },
    { id: 8, type: 'other' },
    { id: 9, type: 'finalInterview' },
    { id: 10, type: 'other' },
  ]);

  // 新しいフォロー面談を追加する関数
  const handleAddStep = () => {
    const newStepName = `フォロー面談 ${steps.length + 1}`;
    setStepLabels((prev) => [...prev, newStepName]);
    setSteps((prev) => [...prev, { id: steps.length + 1, type: 'followUp' }]);
  };

  const renderStep = () => {
    const step = steps[currentStep];
    switch (step.type) {
      case 'profile':
        return <ProfileScreen profileData={profileData} setProfileData={setProfileData} />;
      case 'entryAdjustment':
        return <EntryAdjustmentScreen profileData={profileData} setProfileData={setProfileData} />;
      case 'casual':
        return (
          <CasualScreen
            profileData={profileData}
            casualData={casualData}
            setCasualData={setCasualData}
          />
        );
      case 'firstInterview':
        return (
          <FirstInterviewScreen
            interviewData={interviewData}
            setInterviewData={setInterviewData}
          />
        );
      case 'secondInterview':
        return (
          <SecondInterviewScreen
            interviewData={interviewData}
            setInterviewData={setInterviewData}
          />
        );
      case 'finalInterview':
        return (
          <FinalInterviewScreen
            interviewData={interviewData}
            setInterviewData={setInterviewData}
          />
        );
      case 'other':
      case 'followUp':
        return <OtherScreens profileData={profileData} casualData={casualData} />;
      default:
        return <div>ステップが見つかりません。</div>;
    }
  };

  return (
    <div className="app-container">
      <div className="container">
        {/* ステップナビゲーション */}
        <StepNavigator
          steps={stepLabels}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          onAddStep={handleAddStep}
        />
        {/* 現在のステップのコンテンツ */}
        {renderStep()}
      </div>
    </div>
  );
}

export default App;
