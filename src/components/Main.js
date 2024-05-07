const Main=()=> {

    let villain = ['joker', 'the government', 'spongebob', 'him', 'jojo siwa', 'saul goodman', 'herb']
    let random = Math.floor(Math.random() * villain.length )

    return(
        <main className="main" id="main">
            <div className="container">
                <section className="sect-1 mt-5">
                    <div className="col-md-6">
                    <h2 className="header">Me (super cool awesome sauce guy 300)</h2>
                        <p>Yea so im basically batman cause i've never broken a bone and i was just born amazing and things of that nature. Anyone who disagrees has been braniwashed by {random} </p>
                    </div>
                </section>
                <section className="sect-2 mt-5">
                    <div className="col md-6">
                        <h2 className="header">Also Me (super cool awesome sauce guy 300 but on the bottom)</h2>
                        <p>When I'm not being cool and doing cool things I go to MS Coding Academy and do things there and I'll occasionally go out and do normal activities such as playing football, reading, watching tv, and practing pianos and things of that nature</p>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Main