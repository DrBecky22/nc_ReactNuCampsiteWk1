import { Container, Row, Col } from 'reactstrap';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from '../features/campsites/CampsitesList';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import {useState} from 'react';


const CampsitesDirectoryPage = () => {
    // let selectedCampsite = selectRandomCampsite();
        
    
    // const toggleCampsite = () => {
    //     selectedCampsite = selectRandomCampsite();
    //     console.log(selectedCampsite);
    // };
    const[campsiteId, setCampsiteId] = useState(0);
    const selectedCampsite = selectCampsiteById(campsiteId);


    return (
        <Container>
            {/* <Button onClick={() => toggleCampsite(selectRandomCampsite())}>
                Select Random Campsite
            </Button> */}
            <Row>
                <Col sm='5' md='7'>
                    <CampsitesList />
                </Col>

                <Col sm='7' md='5'>
                    <CampsiteDetail campsite={selectedCampsite} />
                </Col>
            </Row>
        </Container>
    )
};

export default CampsitesDirectoryPage;