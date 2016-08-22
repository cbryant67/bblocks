class Post < ActiveRecord::Base
	
extend FriendlyId
friendly_id :title, use: [:finders]

mount_uploader :image, PostUploader

end
