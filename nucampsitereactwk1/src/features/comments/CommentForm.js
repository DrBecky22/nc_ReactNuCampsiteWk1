import useState from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

const CommentForm = (campsiteID) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleSubmit = (values) => {
        campsiteId: parseInt(campsiteId),
        rating: values.rating,
        author: values.author,
        text: values.commentText;

        console.log(values.comment);
        setModalOpen = false;
    }

    return (
        <>
            <Button outline onClick={() => setModalOpen(true)}>
                <i className='fa fa-pencil fa-lg' /> Add Comment
            </Button>

            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => {setModalOpen(false)}}>
                    Add Comment
                </ModalHeader>

                <ModalBody>
                    campsite: {campsiteID}
                </ModalBody>
            </Modal>
        </>
    )
}

export default CommentForm;
