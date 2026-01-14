# Overview

Here're the component list for the eReporting Report Designer

## Components

| Category   | Components      | Description                                                                                                                   |
| ---------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Layout     | Grid            | With the basic 24 grid spans, you can quickly and easily create layouts and support nested use.                               |
|            | Table           | Table to handle row/column/cell merge to control the customize layouts                                                        |
|            | Tabs            | Container to consolidate forms into separate tabs                                                                             |
|            | Collapse        | Container which can be expand/collapse                                                                                        |
|            | Inline          | A general container for regular components                                                                                    |
|            | Card            | A container which can be displayed like a card                                                                                |
|            | Divider         | A divider to separate the page by different subjects                                                                          |
| Collection | Sub-Form        | Used to display list array fields, can be added/deleted to the array.                                                         |
|            | Sub-Form+       | For complex sub-form layouts, supporting nested use of layouts and containers.                                                |
|            | Group           | Used to set the object data, the form is configured as follows:                                                               |
| Basic      | Barcode         | Call out the camera to scan barcode, and save the result into destination, this control can be rendered at device with camera |
|            | Location        | Capture the current location and save latitude and longitude result into destination                                          |
|            | Link            | Click button to jump to the external link                                                                                     |
|            | Shortcut        | Click button to jump to the destination component position within current form                                                |
|            | Photo           | Click to upload a photo                                                                                                       |
|            | Attachment      | Click to upload attachment into the report form                                                                               |
|            | Combination     | A complex button area, click specific button to generate a relevant component                                                 |
|            | Input           | Single text box input                                                                                                         |
|            | Text area       | Text box input which support multiple line                                                                                    |
|            | Number          | Input number with specific control and display format                                                                         |
|            | Date            | Select date with specific control and display format                                                                          |
|            | Time            | Select time with specific control and display format                                                                          |
|            | Select          | Drop-down list which support selection option by manually maintained or from external data source                             |
|            | Checkbox        | Check box list which support data source from manually or external data source                                                |
|            | Radio           | Radio button which support data source from manually or external data source                                                  |
|            | Slider          | Slider to control input value by click or drag                                                                                |
|            | Image           | Picture upload with specific control and display format                                                                       |
|            | Canvas          | Upload picture and can add remark or arrow to the picture                                                                     |
|            | Video           | To upload a video from local to the report.                                                                                   |
|            | Flex Table      | A composed component to support for dynamic generate a table with free input header and content                               |
|            | Matrix          | A composed component to support for dynamic fill-in for measure points, with calculate logic behind                           |
|            | Measuring Chart | A composed component to support for dynamic fill-in for measure points, with calculate logic behind                           |
|            | Text            | Text label                                                                                                                    |
|            | Info            | Customized information which can be added to report in order to provide help information                                      |
|            | Static Image    | Static image which can be used for logo or other static picture placeholder                                                   |

## Key Concept

- [X] Every component has Design Time & Run Time

+ Design Time is focus on config the relevant settings to the component when try to design the report template in designer.
+ Run Time is the display layout and interactive of the component when end user try to fill-in the report instance or in preview page, it is controlled and predefined by how the component attribute is configured in design time.

- [X] There're some common attributes for all of the components (refer to table on the right) to control the general property, and customized attributes for different components (will be introduced later)

## Common Attribute for Components

| Attribute Name | Attribute Description                                                | Additional Info                                                     |
| -------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------- |
| ID             | Component ID                                                         | Unique ID for component                                             |
| Source Key     | Component ID for the data source                                     | Config when the input value is comes from other component           |
| Name           | Label name for the component                                         |                                                                     |
| Width          | Width                                                                |                                                                     |
| Label Width    | Width for the label                                                  |                                                                     |
| Label Wrap    | Control whether to display the label in wrap mode                    |                                                                     |
| Hide Label    | Control whether to hide the label for the component or not           |                                                                     |
| Placeholder    | Placeholder text for the input component                             |                                                                     |
| data binding   | Control whether to enable the data binding for the current component | Keep as checked                                                     |
| hidden         | Config whether want to hide the component when the page is loaded    |                                                                     |
| disabled       | Config whether want to display the component when the page is loaded |                                                                     |
| required       | Control whether this component value is mandatory or not             | Customized error tips can be added when the validation is triggered |
