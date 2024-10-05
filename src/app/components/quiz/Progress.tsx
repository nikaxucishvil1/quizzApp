import { LinearProgress } from "@mui/material";

const Progress = (props: { progress: number }) => {
  const { progress } = props;
  return (
    <LinearProgress
      variant="determinate"
      value={progress}
      sx={{
        height: "8px",
        bgcolor: "white",
        borderRadius: "4px",
        "& .MuiLinearProgress-bar": {
          backgroundColor: "#A729F5",
          height: "100%",
          borderRadius: "4px",
        },
        "& .MuiLinearProgress-root": {
          margin: "4px 0",
        },
      }}
    />
  );
};

export default Progress;
