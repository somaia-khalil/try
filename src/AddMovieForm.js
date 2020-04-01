import React from 'react'
import { Button, Form } from 'semantic-ui-react'


export default class AddMovieForm extends React.Component{

    render(){
        return (
            <div>
                <Form onSubmit={this.props.handleForm}>
                <Form.Field>
                 <label>Movie Name:</label>
                <input placeholder='Movie Name' />
                 </Form.Field>
                <Form.Field>
                <label>Movie Year:</label>
                <input placeholder='Movie Year' />
                </Form.Field>
                <Form.Field>
                <label>Movie Poster:</label>
                <input placeholder='Movie Poster' />
                </Form.Field>
                <Form.Field>
                <label>Movie Description:</label>
                <input placeholder='Movie Description' />
                </Form.Field>
                 <Button type='submit'>Submit</Button>
                </Form >
            </div>
        )
    }

}