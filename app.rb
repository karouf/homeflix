require 'sinatra'
require 'sinatra/activerecord'
require 'sinatra/json'

class Movie < ActiveRecord::Base
  validates :title, presence: true
  validates :title, uniqueness: true
end

get '/' do
  erb :index
end

get '/movies' do
  json movies: Movie.all
end
