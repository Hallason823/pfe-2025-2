// components/ActionButtons.jsx
import { Grid, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

export default function ActionButtons({ downloadLink, contactEmail }) {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
      <Grid size="auto">
        <Button startIcon={<DownloadIcon />} variant="contained" color="primary" href={downloadLink}>
          Download CV
        </Button>
      </Grid>
      <Grid size="auto">
        <Button startIcon={<EmailIcon />} variant="outlined" color="primary"  href={`mailto:${contactEmail}`}>
          Contact me
        </Button>
      </Grid>
    </Grid>
  );
}
