# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

collection = Collection.create!(title: "Kittens")
images = []
12.times do |n|
  images << Image.create!(title: "Image n", file: "480/270")
end

collection.images << images.shuffle[0..4]

collection.save!
