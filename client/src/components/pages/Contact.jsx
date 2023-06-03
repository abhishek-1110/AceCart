import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


const Contact = () => {
    return (
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          style={{display: "flex", justifyContent: "center", marginTop: 10}}
        >
          <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Hello World"
            />
            <TextField
              id="outlined-email-input"
              label="Email"
              type="email"
              autoComplete="current-password"
            />
          </div>
        </Box>
      );
}

export default Contact