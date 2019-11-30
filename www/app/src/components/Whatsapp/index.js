import React from 'react';

import { Icon } from '../../components/icon';

import { Link } from './styles';
import { colors } from '../../styles/variables';

const Whatsapp = (props) => (
    <Link href={`https://api.whatsapp.com/send?phone=${props.phone}&text=${props.text}`} className="btn-whatsapp" target="_blank"><Icon name={"FaWhatsapp"} size={30} color={colors.white.hexa} /></Link>
);

export default Whatsapp;
