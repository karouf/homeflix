require 'sinatra'
require 'sinatra/activerecord'
require 'sinatra/json'

class Movie < ActiveRecord::Base
  validates :title, presence: true
  validates :title, uniqueness: true
end

class Recording < ActiveRecord::Base
  validates :filename, presence: true
  validates :filename, uniqueness: true
end

get '/' do
  erb :index
end

get '/movies' do
  json movies: Movie.all
end

get '/recordings' do
  json recordings: Recording.all
end
