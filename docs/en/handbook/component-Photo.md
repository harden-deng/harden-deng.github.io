# Photo

![](images/icon_Photo.png)

## Features

Basic function : upload photo, upload photo in batch , thumbnail and  config size.

## UI Preview

### Design Time

![](images/Photo_Features_pic1.png)

### Run Time

![](images/Photo_Features_pic2.png)

## Key Attribute for component

| Attribute Name         | Attribute Description                                                                                                                                                                                                                                                                         | Additional Info                                                                                                   |
| :--------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| Source Key             | Component ID for the data source                                                                                                                                                                                                                                                              | Can point to a repeat component such as a input component under subform as the data source for photo comment list |
| Comment Select Options | Set the data source for the comment drop down list                                                                                                                                                                                                                                            | Data source configuration can refer to “select” component                                                       |
| Comment Select Visible | Set whether show the comment drop down under each photo                                                                                                                                                                                                                                       |                                                                                                                   |
| Thumbnail              | Configure the thumbnail size to show the photo uploaded, setting size to the thumbnail won’t change the actual resolution of the picture uploaded to report                                                                                                                                  |                                                                                                                   |
| Original               | Configure the size of the image which uploaded to report, in order to make sure keep the image aspect ratio, you can configure the priority to control the picture size by height or width. Setting size to the original will change the actual resolution of the picture uploaded to report. |                                                                                                                   |
| Multiple Upload        | Set whether to enable upload photo in batch                                                                                                                                                                                                                                                   |                                                                                                                   |
| Maximum Upload Count   | Choose the maximum upload count for the image                                                                                                                                                                                                                                                 | If reach the maximum number, the upload icon will be disappear Set as 0 (default) means no limitation             |
