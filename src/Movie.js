import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react' 


export default class Movie extends React.Component{

    render(){
        return (
            
                 <Card raised color='red'>
                    <Image src={this.props.movie.poster} wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>{this.props.movie.name}</Card.Header>
                    <Card.Meta>
                    <span className='date'>{`Year: in ${this.props.movie.year}`}</span>
                    </Card.Meta>
                    <Card.Description>
                     {this.props.movie.desciption}
                    </Card.Description>
                    </Card.Content>
                     <Card.Content extra>
                    <Icon name='video' />
                    </Card.Content>
                 </Card >
                
          
        )
    }

}