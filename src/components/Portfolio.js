import { Card, CardContent, Typography } from "@mui/material";
import Container from '@mui/material/Container';



function Portfolio() {
    return (
        <Container maxWidth="md">
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Portfolio
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        This is a basic portfolio card. You can add more content here.
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Portfolio
