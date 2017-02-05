module ApplicationHelper
  def asset_path(file, directory)
    return AssetLoader.get_asset_path(file, directory)
  end
end
