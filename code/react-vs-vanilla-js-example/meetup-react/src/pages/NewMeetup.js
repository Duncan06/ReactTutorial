import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();

  function AddMeetupHandler(meetupData) {
    fetch(
      "https://react-meetup-demo-5ecdc-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1> New Meetup Page</h1>
      <NewMeetupForm onAddMeetup={AddMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
