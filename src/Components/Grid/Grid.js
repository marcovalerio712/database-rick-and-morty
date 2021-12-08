import React from "react";
import "./Grid.css";
import Card from "../Card/Card";
import PropTypes from "prop-types";

class Grid extends React.Component {

    constructor() {
        super()

        this.state = {
            favorites: [],
        }
    }

    addToFavorite = (characterID, isSelected) => {

        let nextFavorites = [...this.state.favorites];

        if (!isSelected) {
            nextFavorites.push(characterID);
        }
        else {
            nextFavorites = nextFavorites.filter((selectedID) => selectedID !== characterID);
        }

        this.setState({favorites: nextFavorites});
    }

    render() {
        const { characters, isLoading } = this.props;
        const { favorites } = this.state;

        return (

            <div className="grid container">

                {characters.map((character) =>
                (<Card
                    key={character.id}
                    character={character}
                    isSelected={favorites.includes(character.id)}
                    charToFavorite = {this.addToFavorite}
                    
                />))}
                {
                    isLoading && (
                        <div className="loading">
                            <p>Loading...</p>
                        </div>
                    )
                }
            </div>


        );

    }
}

Grid.propTypes = {

    characters: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default Grid;
