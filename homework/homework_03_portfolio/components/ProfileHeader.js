import Avatar from '@/components/Avatar';
import { userProfile } from '@/config/userProfile';
import { Grid, Typography } from '@mui/material';
import ActionButtons from '@/components/ActionButtons';

export default function ProfileHeader({ UserProfile }) {
  return (
    <Grid container spacing={4} alignItems="center" justifyContent="center">
      <Grid size={{ xs: 12, sm: 4, md: 3 }}>
        <Avatar src={userProfile.imageSrc} alt={userProfile.altText} />
      </Grid>
      <Grid size={{ xs: 12, sm: 8, md: 9 }}>
        <Typography variant="h2" textAlign="center">
          {userProfile.name}
        </Typography>
        <Typography variant="h5" textAlign="center" color="text.secondary">
          I&apos;m a {userProfile.profession}
        </Typography>
        <ActionButtons downloadLink={userProfile.downloadCvLink} contactEmail={userProfile.contactEmail} />
      </Grid>
    </Grid>
  );
}
