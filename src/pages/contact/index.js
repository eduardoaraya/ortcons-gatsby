import React from 'react';
import Layout from '../../components/layout';

import { SectionDevelopment } from './styled';
import { Container } from '../../shared/styled-shared'
import FormContact from '../../components/form-contact'

const contact = () => {
    return (
        <Layout>
            <SectionDevelopment>
                <Container>
                    <FormContact></FormContact>
                </Container>
            </SectionDevelopment>
        </Layout>
    )
}

export default contact;