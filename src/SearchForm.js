import React from 'react'
import { Button, Form } from 'semantic-ui-react'


export default class AddMovieForm extends React.Component{

    render(){
        return (
            <div>
                <Form onSubmit={this.props.handleSearch}>
                <Form.Field>
                <label>Movie Year:</label>
                <input placeholder='Movie Year' />
                </Form.Field>
                 <Button type='submit'>Submit</Button>
                </Form >
            </div>
        )
    }

}