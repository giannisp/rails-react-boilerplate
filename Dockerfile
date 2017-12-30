FROM ruby:2.5.0-alpine

RUN apk add --update --no-cache build-base ruby-dev tzdata postgresql-dev \
 nodejs

RUN mkdir -p /app
WORKDIR /app

ADD Gemfile .
ADD Gemfile.lock .

RUN gem install bundler && bundle install --without development test

COPY . ./

ENV RAILS_ENV production

EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]
