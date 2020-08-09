FROM ruby:2.6.0

WORKDIR /workdir
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt install -y nodejs
RUN npm install
COPY . /workdir
COPY Gemfile Gemfile.lock /workdir/
RUN gem install bundler
RUN bundle install

RUN rails db:migrate

EXPOSE 3000

CMD rails s


