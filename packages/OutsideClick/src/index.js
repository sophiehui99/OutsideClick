/**
 * @name: OutsideClick ;
 * @author: sophiehui ;
 * @description:  ;
 * */

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const OutsideClick = (props) =>{

    const ref = useRef(null)

    const handClick = (e) =>{
        const { onClickOutside } = props;
        const el = ref;
        if (!el.current.contains(e.target)) onClickOutside(e);
    }

    useEffect(() => {
        document.addEventListener('click', handClick, true);
        document.addEventListener('touchend', handClick, true);
        return () => {
            document.removeEventListener('click', handClick, true);
            document.removeEventListener('touchend', handClick, true);
        };
    }, []);

    const {onClickOutside,...args} = props

    return(
        <div {...args} ref={ref}>{props.children}</div>
)
}

OutsideClick.propTypes = {
    onClickOutside: PropTypes.func.isRequired
}

export default OutsideClick