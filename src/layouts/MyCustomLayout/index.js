import React, { PropTypes } from 'react';
import Page from '../Page';
import styles from './index.css';

const MyCustomLayout = (props) => {
    return (
        <Page { ...props }>
            <h2 className={ styles.pink }>{ "Whatever" }</h2>
            <img src={props.head.featuredImage}/>
        </Page>
    )
}

MyCustomLayout.contextTypes = {
    collection: PropTypes.array.isRequired,
}

MyCustomLayout.propTypes = {
    head: PropTypes.object.isRequired
}

export default MyCustomLayout
