const App = () => {
    return (
        <div>
            <Tweet 
                name="Bob Fisher"
                username="FisherBob35"
                date={new Date().toDateString()}
                msg="Happened to be fisher with the last name Fisher. LOL!"
            />
            <Tweet 
                name="Tim Cook"
                username="MrCook"
                date={new Date().toDateString()}
                msg="CEO of Apple! Truly miss Steve."
            />
            <Tweet 
                name="David Peterson"
                username="DavPete"
                date={new Date().toDateString()}
                msg="Excited to start a new day!"
            />
        </div>
    );
};