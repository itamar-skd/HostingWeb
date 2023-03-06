import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Bottom() {
    return (
        <div>
            <section className="text-light p-5 text-center" style={{ backgroundColor: '#171921' }}>
                <Container>
                    <p>Made with <span className="text-warning">{'<3'}</span> by Bqre</p>
                </Container>
            </section>
        </div>
    )
}
