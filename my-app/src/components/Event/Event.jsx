import PropTypes from "prop-types";
import { Card, EventTitle, Info } from "./Event.styled";

const Event = ({
  name,
  location,
  speaker,
  start,
  end,
  iconLocation,
  iconSpeaker,
  iconTime,
}) => {
  const startDate = new Date(start).toLocaleString();
  const endDate = new Date(end).toLocaleTimeString();

  return (
    <Card>
      <EventTitle>{name}</EventTitle>

      <Info>
        {iconLocation}
        {location}
      </Info>

      <Info>
        {iconSpeaker}
        {speaker}
      </Info>

      <Info>
        {iconTime}
        {startDate} - {endDate}
      </Info>
    </Card>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  iconLocation: PropTypes.node,
  iconSpeaker: PropTypes.node,
  iconTime: PropTypes.node,
};

export default Event;