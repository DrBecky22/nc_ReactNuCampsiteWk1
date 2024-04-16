import { Col } from 'reactstrap';
import Partner from "./Partner";
import { selectAllPartners } from './partnerSlice';

const PartnersList = () => {
    const partners = selectAllPartners();
    
    return (
        <Col className='mt-4'>{partners.map((partner) => {
            return (
                <div className='d-flex mb-5' key={partner.id}>
                    <Partner />
                </div>
            )
        })}
        </Col>
    );
};

export default PartnersList;

