import React from 'react';
import PropTypes from 'prop-types'


export default function StatisticsCard(props) {
    return (
        <div className='row'>
            {props.cards.map((card, index) => {
                return (
                <div className="col-md-4 mb-4" key={'Card'+index}>
                    <div className={`card border-left-${card.blcolor} shadow h-100 py-2`}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> {card.title} </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        {card.title ==='Amount in products' ? '$'+card.number: card.number}
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className={`fas fa-${card.icon} fa-2x text-gray-300`}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                );
      })}
        </div>
    )
}

StatisticsCard.propTypes = {
    blcolor: PropTypes.string,
    title: PropTypes.string,
    number: PropTypes.number,
    icon: PropTypes.oneOf(["clipboard-list", "dollar-sign", "user-check"])
}

StatisticsCard.defaultProps = {
    blcolor: "primary",
    title: "Data Base info",
    number: 0,
    icon: "clipboard-list"
}