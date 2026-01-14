# Radio

![](images/icon_Radio.png)

## Features

- [X] Basic Usage
- [X] Data Source

### Basic Usage

![](images/Radio_Features_pic1.png)

Basic function :multiple selection,Search.

### Static Data Source

![](images/Radio_Features_pic5.png)

### Dynamic Data Source

![](images/Radio_Features_pic6.png)

### Binding Data Source from table colunm.

![](images/Select_Features_pic3.png)

### Display Type

* Inline Type
  ![](images/Radio_Features_pic4.png)
* Block Type
  ![](images/Radio_Features_pic2.png)

## UI Preview

### Design Time

![](images/Radio_Features_pic1.png)

### Run Time

![](images/Radio_Features_pic2.png)

## Key Attribute for component

| Attribute Name | Attribute Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Additional Info                                                                                                                                                                                  |
| :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Source Key     | Component ID for the data source                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Select component can only support binding to component within a repeating table,the source key format would be***tableID.componentID***, source key has higher priority than data option |
| Layout         | Control whether to display the check box option Block or Inline                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                  |
| Option         | To control the data source of the drop-down list:``1.Static Data: Manually input the selection options``2.Dynamic Data: Specify the data source from data maintained in List Management for the selection `` **List Selection:** choose where the data comes from`` **Filter Value:** input filter value if want to reduce the data range, the input filter value should meet the “filter value” maintained in List Management,leave it blank if you want to load all the data from the list |                                                                                                                                                                                                  |
