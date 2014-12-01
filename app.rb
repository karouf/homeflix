require 'sinatra'
require 'sinatra/activerecord'
require 'sinatra/json'

class Movie < ActiveRecord::Base
  has_many :recordings

  validates :title, presence: true
  validates :title, uniqueness: true
end

class Recording < ActiveRecord::Base
  belongs_to :movie

  validates :filename, presence: true
  validates :filename, uniqueness: true
end

get '/' do
  erb :index
end

get '/movies' do
  if title = params['title']
    movies = Movie.where(title: title)
  else
    movies = Movie.all
  end

  json movies: movies
end

post '/movies' do
  payload = JSON.parse(request.env["rack.input"].read)

  movie = Movie.new(payload['movie'])

  if  movie.save
    json movie: movie
  else
    halt 400
  end
end

get '/recordings' do
  json recordings: Recording.all
end

put '/recordings/:id' do
  id = params[:id]
  payload = JSON.parse(request.env["rack.input"].read)

  recording = Recording.find(params[:id])
  new_attrs = payload['recording']

  recording.update_attributes(new_attrs)

  json recording: recording
end
