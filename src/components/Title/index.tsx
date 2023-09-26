import { Box, Typography } from "@mui/material";

export function Title({ text }: { text: string }) {
  return (
    <Box>
      <Typography
        align="center"
        sx={{
          fontFamily: "'Josefin Sans', sans-serif",
          fontWeight: "bold",
          fontSize: "2rem",
          marginTop: "32px",
          marginBottom: "18px",

          textTransform: "uppercase",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}
