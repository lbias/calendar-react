class CreateAppointments < ActiveRecord::Migration[5.1]
  def change
    create_table :appointments do |t|
      t.string :title
      t.datetime :appt_time
      t.timestamps
    end
  end
end
