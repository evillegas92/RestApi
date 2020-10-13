'use strict';

export class ReasonsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            reasons: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:49824/api/reasons")
            .then(response => response.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    reasons: result
                });
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    render() {
        const { error, isLoaded, reasons } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {reasons.map(reason => (
                        <li key={reason.Id}>
                            {reason.Name} - {reason.Value}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}