import { LinearProgress } from "@mui/material";

const Progress = (props: { progress: number; theme: "dark" | "light" }) => {
  const { progress, theme } = props;
  return (
    <div className="bg-[#FFFF] p-1 rounded-xl dark:bg-[#3B4D66]">
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: "8px",
          bgcolor: theme === "dark" ? "#3B4D66" : "#FFFFFF",
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
    </div>
  );
};

export default Progress;
