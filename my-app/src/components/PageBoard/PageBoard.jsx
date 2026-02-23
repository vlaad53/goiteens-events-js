import PropTypes from "prop-types";
import Event from "../Event/Event";
import { Board, Title, EventList } from "./PageBoard.styled";

import { FaMapMarkerAlt, FaUserAlt, FaClock } from "react-icons/fa";

const PageBoard = ({ events }) => {
  return (
    <Board>
      <Title>24th Core Worlds Coalition Conference</Title>

      <EventList>
        {events.map(({ name, location, speaker, time }) => (
          <Event
            key={name}
            name={name}
            location={location}
            speaker={speaker}
            start={time.start}
            end={time.end}
            iconLocation={<FaMapMarkerAlt />}
            iconSpeaker={<FaUserAlt />}
            iconTime={<FaClock />}
          />
        ))}
      </EventList>
    </Board>
  );
};

PageBoard.propTypes = {
  events: PropTypes.array.isRequired,
};

export default PageBoard;