import React from 'react';
import LoadingSpinnerComponent from 'react-spinners-components';


const Spinner = () => {
    return (

        <div className=' mt-20 flex justify-center items-center'>
            <LoadingSpinnerComponent type={'Infinity'} color={'#05D0E9'} size={'300px'} />

        </div>

    );
};

export default Spinner;