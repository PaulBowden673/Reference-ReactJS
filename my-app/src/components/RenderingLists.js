import React from 'react'

function RenderingLists() {
    const booklist = [
        'to kill a mokingbird',
        'the great gatsby',
        'wuthering heights'

    ]

    const books = [
        {
            title: 'to kill a mikingbird',
            author: 'harper lee',
            pages: 281
        },
        {
            titel: 'the great gatsby',
            author: 'f. scott fitzgerald',
            pages: 402
        },
        {
            title: 'wuthringheights',
            author: 'jayne aire',
            pages: 581
        }
    ]
    
    return (
        <div>
           { booklist.map(book => {
                return <h2 key={book}>{book}</h2>
            })}
            <hr />
            {
                books.map(book => {
                    return (
                        <div key={book.title}>
                            <h4>{book.title}</h4>
                            <p>{book.author}</p>
                            <p>{book.pages}</p>
                        </div>
                    )
                }
                   
                )
            }
        </div>
    )
}

export default RenderingLists