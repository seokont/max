import React from 'react';
import style from "./Languages.module.css";



export default function Languages() {


    return (
        <select className={style.select__css}>
            <option>En</option>
            <option>Ru</option>

        </select>
    );
}