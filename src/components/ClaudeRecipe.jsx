import React from 'react'
import Markdown from 'react-markdown'

export default function ClaudeRecipe(props) {


    return (
        <section className="suggested-recipe-container">
            <h2>Techy Seniors Recommends: </h2>
            <Markdown>{props.recipe}</Markdown>
        </section>
    )
}
