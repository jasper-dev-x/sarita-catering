import React from "react";

export default function BookSubmit({ emailList, openMail }) {
    return (
        <>
            {/* <!-- Button trigger modal --> */ }
            <button type="submit" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#submitBooking">
                Review Booking Request
            </button>

            {/* <!-- Modal --> */ }
            <div className="modal fade" id="submitBooking" tabIndex="-1" aria-labelledby="sumbitBookingLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Booking Request</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Name: { emailList.first } { emailList.last }</p>
                            <p>Phone Number: { emailList.phone }</p>
                            <p>Location: { emailList.location }</p>
                            <p>Event Date: { emailList.date }</p>
                            <p>Start Time: { emailList.startTime }</p>
                            <p>End Time: { emailList.endTime }</p>
                            <p>Service: { emailList.service }</p>
                            <p>Number of Guests: { emailList.numGuests }</p>
                            <p>Budget: { emailList.budget }</p>
                            <p>Extra Infomation: { emailList.message }</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" onClick={ openMail } className="btn btn-primary">Open Mail App</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}