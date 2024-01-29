import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../services/base_url';

function ServiceCard({services}) {

  return (
    <div>

        <Card style={{ width: '18rem',height:'430px'}} >
            <Card.Img variant="top" width={'250px'} height={'250px'} src={`${BASE_URL}/uploads/${services.image}`} />
            <Card.Body>
                <Card.Title style={{fontWeight:'bold',fontSize:'22px'}}>{services.servicename}</Card.Title>
                <Card.Text>
                <h4>{(services.description).slice(0,50)}...</h4>
                </Card.Text>
                <Button variant="primary">
                  <Link style={{textDecoration:'none',color:'white'}} to={`/booknow/${services._id}`}>Book Now</Link>
                </Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ServiceCard
