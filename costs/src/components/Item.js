import PropTypes from 'prop-types';

function Item({brand, year}) {
    return (
        <>
            <li>{brand} - {year}</li>
        </>
    );
}

Item.propTypes = {
    brand: PropTypes.string.isRequired,
    year: PropTypes.number,
};

Item.defaultProps = {
    brand: 'the brand is missing',
    year: 0
};

export default Item;