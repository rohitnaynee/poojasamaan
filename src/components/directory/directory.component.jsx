import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor () {
        super ();
        
        this.state = {
            sections: [

                {
                  title: 'GANAPATI',
                  imageUrl: '/images/ganesh.png',
                  id: 1,
                  linkUrl: 'shop/GANAPATI'
                },
                {
                  title: 'LAKSHMI DEVI',
                  imageUrl: '/images/Lakshmi_Devi.png',
                  id: 2,
                  linkUrl: 'shop/LAKSHMI DEVI'
                },
                {
                  title: 'SATYANARAYANA',
                  imageUrl: '/images/satyanarayana.png', 
                  id: 3,
                  linkUrl: 'shop/SATYANARAYANA'
                },
                {
                  title: 'SAI BABA',
                  imageUrl: '/images/sai_baba.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/SAI BABA'
                },
                {
                  title: 'SHIVA',
                  imageUrl: '/images/shiva.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/SHIVA'
                }
              ]
        }
    }

    render() {
        return (
            <div className = 'directory-menu' >
            {
              this.state.sections.map( ({ title, imageUrl, id, size}) => (
                  <MenuItem key = {id} title = {title} imageUrl = {imageUrl} size = {size} />
              ))
            }
            </div>
        );
    }

}

export default Directory;