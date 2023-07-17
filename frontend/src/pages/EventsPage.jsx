import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          {
            allEvents.length===0?
              <div className="no-events">No Events run now</div>
              :
              allEvents.map((event) => <EventCard active={true} data={event} />)
          }
          
        </div>
      )}
    </>
  );
};

export default EventsPage;
