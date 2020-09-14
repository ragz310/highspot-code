import React from 'react';
import './Card.css';
import Loader from './../LoadingIndicator/Loader.js';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class Card extends React.Component {
	constructor(props) {

		super(props);

		this.state = {

			error: null,
			isLoaded: false,
			cards: [],
			page: 1, // Page number accepted by the API
			pageSize: 20, // Number of cards retrived per page
			search: ''

		};

	}

	componentDidMount() {

		const { page, pageSize } = this.state;

		fetch(`https://api.elderscrollslegends.io/v1/cards?page=${page}&pageSize=${pageSize}`)
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						cards: result.cards
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			)
	}

	fetchCards= () =>  {

		// Helper funtion for subsequent API request calls on scroll, initialized in render block under 'react-infinite-scroll-component'

		// Increament page number by 1 on every request call
		this.setState({ page: this.state.page + 1 });
		
		const {  page, pageSize } = this.state;
	
		fetch(`https://api.elderscrollslegends.io/v1/cards?page=${page}&pageSize=${pageSize}`)
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						cards: this.state.cards.concat(result.cards)
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			)
	}

	updateSearch(event) {

		this.setState({search: event.target.value.substr(0, 20)});

	}

	render() {

		let cards = this.state.cards.filter(
			(card) => {
				return card.name.indexOf(this.state.search) !== -1;
			}
		);

		if (this.state.error) {

			return (

				<div className="error__message">
					<div className="error__message--inner">
						<p>Web Page under maintenance.</p>
						<p>Please try again later. Thanks for your patience.</p>
					</div>	
				</div>

			);

		} else if (!this.state.isLoaded) {

			return <Loader />;

		} else {

			return (

				<InfiniteScroll
					dataLength={this.state.cards.length}
					next={this.fetchCards}
					hasMore={true}
					loader={<p>Loading...</p>}
				>
					<div>
						<div className="legends__card--search">
							<div className="legends__card--search-form">
								<input type="text" placeholder="Search by Card Name..." value={this.state.search} onChange={this.updateSearch.bind(this)} />
							</div>
						</div>
						<div className="legends__cards--wrapper">
							{cards.map(card => (
								<div key={card.id} className="legends__card">
									<a className="legends__card--link" href="https://legends.bethesda.net">
										<div className="legends__card--img">
											<img src={card.imageUrl} alt=""/>
										</div>
										<div className="legends__card--content">
											<p className="legends__card--content-name">Name: {card.name}</p>
											<p className="legends__card--content-text">Text: {card.text}</p>
											<p className="legends__card--content-setName">Set Name: {card.set.name}</p>
											<p className="legends__card--content-setName">Type: {card.type}</p>
										</div>
									</a>
								</div>
							))}
						</div>
					</div>
				</InfiniteScroll>  

			);

		}

	}

}