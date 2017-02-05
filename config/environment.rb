# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

Rails.application.config.assets.root_path = '/dist/'
Rails.application.config.assets.manifest = 'public/dist/manifest.json'
