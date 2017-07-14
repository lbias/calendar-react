var Appointments = React.createClass({
  render: function() {
    return (
      <div>
        <AppointmentForm input_title={this.state.input_title} input_appt_time={this.state.input_appt_time} />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    )
  }
});
