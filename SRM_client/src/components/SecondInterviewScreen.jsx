import React from "react";
import { Container, Box, Typography, TextField } from "@mui/material";

function SecondInterviewScreen({ secondInterviewData, setSecondInterviewData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSecondInterviewData((prev) => ({
      ...prev,
      [name]: value || "",
    }));
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        二次面接
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          fullWidth
          label="専門知識・技術力"
          name="technicalSkills"
          value={secondInterviewData.technicalSkills}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="問題解決能力"
          name="problemSolving"
          value={secondInterviewData.problemSolving}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="論理的思考力"
          name="logicalThinking"
          value={secondInterviewData.logicalThinking}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="リーダーシップ・主体性"
          name="leadership"
          value={secondInterviewData.leadership}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="キャリアビジョン"
          name="careerVision"
          value={secondInterviewData.careerVision}
          onChange={handleInputChange}
          margin="normal"
          variant="outlined"
        />
      </Box>
    </Container>
  );
}

export default SecondInterviewScreen;
