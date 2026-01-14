# Number

![](images/icon_Number.png)

## Features

- [X] Basic Usage

### Basic Usage

![](images/Number_Features_pic1.png)

Basic function :Add number field or delete, suport multiple formarts.

1. Help text for the content.

![](images/Number_Features_pic3.png)

2.Enter the values to represent precision to several decimal places.

![img](images/Number_Features_pic4.png)

2.Control thousands format.

![img](images/Number_Features_pic5.png)

## UI Preview

### Design Time

![](images/Number_Features_pic1.png)

### Run Time

![](images/Number_Features_pic2.png)

## Key Attribute for component

| Attribute Name    | Attribute Description                                                                                                                                     | Additional Info                                                    |
| :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------- |
| Source Key        | Component ID for the data source                                                                                                                          | Config when the input value is comes from other component          |
| Max length        | Set the minimum value of the component,<br>if the input value is smaller than the minimum value, <br>iwill replace the value with the minimum value           | Leave it blank if you don’t want any limitation for the component |
| Default Value     | Set the maximum value of the component,`<br>`if the input value is bigger than the maximum value, `<br>`will replace the value with the minimum value | Leave it blank if you don’t want any limitation for the component |
| Help Text         | Help text for the content                                                                                                                                 |                                                                    |
| Decimal Precision | Control the precision for the input number,`<br>`enter the values to represent precision to several decimal places                                      |                                                                    |
| Format            | Control thousands format,<br> if the format has bigger number than decimal precision,<br> it will still show the number follow the format,<br>but the value will keep the precision decimal place follow the decimal precision settings                                      |                                                                    |
