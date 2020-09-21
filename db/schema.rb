# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_21_140944) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.bigint "casas_id"
    t.string "last_name"
    t.string "first_name"
    t.string "email"
    t.string "phone"
    t.integer "adults"
    t.integer "childrens"
    t.boolean "baby_bed", default: false
    t.date "arrival_date"
    t.date "departure_date"
    t.string "comment"
    t.string "status", default: "Pending"
    t.string "street"
    t.string "city"
    t.integer "zipcode"
    t.string "country"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["casas_id"], name: "index_bookings_on_casas_id"
  end

  create_table "casas", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
