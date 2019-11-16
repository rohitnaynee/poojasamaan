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
                  imageUrl: '/images/ganesh-2.jpg',
                  id: 1,
                  linkUrl: 'ganesh'
                },
                {
                  title: 'LAKSHMI DEVI',
                  imageUrl: '/images/Lakshmi_Devi.png',
                  id: 2,
                  linkUrl: 'lakshmi'
                },
                {
                  title: 'SATYANARAYANA',
                  imageUrl: '/images/satyanarayana.png', 
                  id: 3,
                  linkUrl: 'satyanarayana'
                },
                {
                  title: 'SAI BABA',
                  imageUrl: '/images/saibaba.jpg',
                  size: 'large',
                  id: 4,
                  linkUrl: 'saibaba'
                },
                {
                  title: 'SHIVA',
                  imageUrl: '/images/shiva.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shiva'
                }
              ]
        }
    }

    render() {
        return (
            <div className = 'directory-menu' >
            {
              this.state.sections.map( ({ id, ...otherSectionProps  }) => (
                  <MenuItem key = {id} { ...otherSectionProps } />
              ))
            }
            </div>
        );
    }

}

export default Directory;