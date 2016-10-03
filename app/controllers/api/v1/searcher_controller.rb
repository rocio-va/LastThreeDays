class Api::V1::SearcherController < ApplicationController

  def search
    word = params[:word]
    lang = params[:lang]
    result_type = params[:result_type]
    tweets = $client.search(word + ' -rt', lang: lang, result_type: result_type).take(5).collect do |tweet|
      {name: tweet.user.name, text: tweet.text}
    end
    render json: tweets
  end

end
