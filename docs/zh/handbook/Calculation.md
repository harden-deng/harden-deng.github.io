# Calculation

## What is Calculation for the template?

Calculation is a kind of backend logic which can be configured in template design-time, this logic can ben saved together with template design and rendered in run-time, aim to ***set the value to specific fields*** based on the pre-defined calculation logic regard to other fields value which were filled in real-time.

![](images/ConditionalStyle_Features_Pic1.png)

## How to define Calculation for the template?

eReporting Designer support add centralize maintained Calculation logic into the template.

### Open form Calculation

**Form Attribute** Panel->Calculations **Settings**

![](images/Calculation_Features_Pic1.png)

### Config Calculation

![](images/Calculation_Features_Pic2.png)

【1】On **Field structure Tree**, click target object

   Using field structure tree, you can

* 1st level collapse by default.
* Support search by node.
* Quick copy the ID of the node by clicking the small icon.
* Support  click & drag to adjust the width of the structure tree display area.

【2】Click **Add formula**  button

【3】On area of operation

   Dragging or move rules

* Can adjust the width by dragging the border of the header.
* Can move up/down by click and drag the item of the indicator.

:::info
Calculation formula can be defined here

* Type: Define the result is a Field or a Variable, variable can be reused in other formulas as parameter.
* Target: Refers to where the result of the calculation should be displayed and you can only enter one target.
* Formula: Define the logic of calculation, can support common operator or formula

:::

【4】Validation

   Click to verify whether there’s any component id mis-typing or deleted.

【5】Save

   Click to save the calculation definition to the template.

## Formula List

Here're the Formula List currently supported for the eReporting Report Designer
| Formula | Description | Example |
| --- | --- | --- |
| isNumber(value)              | Check if the value is a number.<br>Returns true or null.                               | isNumber(<font style="color:red;">{input_6xcbr9sz}</font>)<br>Check if the component with ID: <font style="color:red;">input_6xcbr9sz</font>is a number or not                                                  |
| toNumber(value)              | Convert the value to a number.<br>Returns a number.                                    | toNumber(<font style="color:red;">{input_6xcbr9sz}</font>)<br>Convert the value of component with ID:<font style="color:red;">`input_6xcbr9sz</font>to a number           |
| count(array, value)          | Count the number of items in an array. Optionally, <br>count the number of a specific value in an array.<br>Returns a number.                                                                                             | count(<font style="color:red;">{table_p4ek2ugx.input_6xcbr9sz},1</font>)<br>Count the number of items which value equals to<font style="color:red;">1</font>for the field<font style="color:red;">input_6xcbr9sz</font>in the list<font style="color:red;">: table_p4ek2ugx</font>                                                      |
| indexOf(array, value)        | Gets the first index at which a given value can be found in an array.<br>Returns a number.                                                                                                                            | indexOf(<font style="color:#DF2A3F;">{table_p4ek2ugx.input_6xcbr9sz}</font>,1)<br>Get the first index at which value 1 can be found in the field <font style="color:#DF2A3F;">input_6xcbr9sz</font>of repeating table:<font style="color:#DF2A3F;">table_p4ek2ugx</font>                                                              |
| like(value, match)           | Checks if a text value includes a match value.<br>Returns true or null.                | like (<font style="color:red;">{input_6xcbr9sz}, ‘123’</font>)<br>Check if value of the component with ID<font style="color:red;">input_6xcbr9sz</font>includes value<font style="color:red;">123</font>                                              |
| substr(value, start, length) | Returns a portion of text value, starting at the specified start index <br>and extending for a given length of characters afterwards.<br>Returns a new text.                                                              | substr (<font style="color:red;">{input_6xcbr9sz},1,4</font>)<br>Returns a portion of text value from component with ID<font style="color:red;">input_6xcbr9sz</font>, starting at the specified start index<font style="color:red;"> 1</font>and extending for a given length of<font style="color:red;">4</font>characters afterwards. |
| sum(array)                   | Calculates the addition all the numbers in an array.<br>Returns a number.              | sum(<font style="color:#DF2A3F;">{table_p4ek2ugx.input_6xcbr9sz}</font>)<br>Calculates the addition all the field with ID i<font style="color:#DF2A3F;">nput_6xcbr9sz</font>in the array <font style="color:#DF2A3F;">table_p4ek2ugx</font>.                                                                                           |
| avg(array)                   | Calculates the average all the numbers in an array.<br>Returns a number.               | avg (<font style="color:#DF2A3F;">{table_p4ek2ugx.input_6xcbr9sz}</font>)<br>Calculates the average all the field with ID i<font style="color:#DF2A3F;">nput_6xcbr9sz</font>in the array <font style="color:#DF2A3F;">table_p4ek2ugx</font>.                                                                                           |
| avg(array)                   | Calculates the average all the numbers in an array.<br>Returns a number.               | avg (<font style="color:red;">{table_p4ek2ugx.input_6xcbr9sz}</font>)<br>Calculate the average value for the field<font style="color:red;">input_6xcbr9sz</font>in the list<font style="color:red;">table_p4ek2ugx</font>, or can compose the input parameter to treat like array<font style="color:red;"> [{field1},{field2},{field3}…]</font>                                                                      |
| min(array)                   | Finds the lowest-valued number in an array.<br>Returns a number.                       | min (<font style="color:#DF2A3F;">{table_p4ek2ugx.input_6xcbr9sz}</font>)<br>Find the lowest-value from the field <font style="color:#DF2A3F;">input_6xcbr9sz</font>of the list t<font style="color:#DF2A3F;">able_p4ek2ugx</font>, or can compose the input parameter to treat like array<font style="color:#DF2A3F;"> [{field1},{field2},{field3}…]</font>                                                                                                |
| max(array)                   | Finds the highest-valued number in an array.<br>Returns a number.                      | max (<font style="color:#DF2A3F;">{table_p4ek2ugx.input_6xcbr9sz}</font>)<br>Find the highest-value from the field <font style="color:#DF2A3F;">input_6xcbr9sz</font>of the list<font style="color:#DF2A3F;"> table_p4ek2ugx</font>, or can compose the input parameter to treat like array <font style="color:#DF2A3F;">[{field1},{field2},{field3}…]</font>                                                                                               |
| sqrt(number)                 | Calculates the square root of a value.<br>Returns a number.                            | sqrt (<font style="color:red;">{input_6xcbr9sz}</font>)<br>Calculate the square root of the value of component with ID:<font style="color:#e4002b;">i</font><font style="color:red;">nput_6xcbr9sz</font>                                                                                           |
| round(number, precision)     | Rounds a number to the nearest integer or decimal.<br>Returns a number.                | round (<font style="color:red;">{input_6xcbr9sz}，2</font>)<br>Rounds a number to the nearest integer or decimal forcomponent:<font style="color:red;">`input_6xcbr9sz</font>                                                                                                                            |
| floor(number)                | Returns the largest integer less than or equal to a given value.<br>Returns a number.  | floor (<font style="color:red;">{input_6xcbr9sz}</font>)<br>Returns the largest integer less than or equal to the value of component with ID: <font style="color:red;">input_6xcbr9sz</font>                    |
| ceil(number)                 | Rounds a number up to the next largest integer.<br>Returns a number.                   | ceil (<font style="color:red;">{input_6xcbr9sz}</font>)<br>Rounds a number with value comes from component<font style="color:red;">`input_6xcbr9sz</font>up to the next largest integer.                                                                                                                 |
| abs(number)                  | Calculates the absolute value of a number.<br>Returns a number.                        | abs (<font style="color:red;">{input_6xcbr9sz}</font>)<br>Calculates the absolute value of a numbers comes from component <font style="color:red;">input_6xcbr9sz</font>                                        |
| repeat(value, count)         | Constructs and returns a new text which contains <br>the specified number of copies of the value on which it was called, <br>concatenated together.Returns a text.                                                        | repeat (<font style="color:red;">{input_6xcbr9sz}, 5</font>)<br>Get the value of component<font style="color:red;">input_6xcbr9sz</font>,and repeat 5 times of copies, concatenated together and return as a new text string                                  |
| split(value, delimiter)      | Divides a text into an ordered list of substrings, <br>puts these substrings into an array, and returns the array. <br>The division is done by checking for the delimiter in the provided text.<br>Returns an array of items. | split (<font style="color:red;">{input_6xcbr9sz}, ‘-’</font>)<br>Divides a text value from component<font style="color:red;">input_6xcbr9sz</font>into an array by delimiter<font style="color:#e4002b;">-</font>     |
| join(array, delimiter) | Creates and returns a new text by concatenating all of the item in an array, <br/>separated by commas or a specified delimiter string. <br/>If the array has only one item, <br/>then that item will be returned without <br/>using the delimiter.Returns a text. | join(<font style="color:#DF2A3F;">{table_p4ek2ugx.input_6xcbr9sz}</font>, <font style="color:#DF2A3F;">-</font>)<br/>Concatenating the value of field input_6xcbr9szvalue from list <font style="color:#DF2A3F;">table_p4ek2ugx</font> into a new text string with delimiter “<font style="color:#DF2A3F;">-</font>” |
| getAt(array, index) | Finds the value at a specified index in an array.<br/>Returns a text. | getAt (<font style="color:#DF2A3F;">{table_p4ek2ugx.input_6xcbr9sz}</font>, <font style="color:#DF2A3F;">4</font>)<br/>Finds the value at a index 4 from the field input_6xcbr9sz of the array table_p4ek2ugx, the first row index is 0. |
| first(array) | Finds the first item in an array.<br/>Returns a text. | first (<font style="color:#DF2A3F;">{table_p4ek2ugx.input_6xcbr9sz}</font>)<br/>Finds the first item value of field <font style="color:#DF2A3F;">input_6xcbr9sz in</font> an array <font style="color:#DF2A3F;">table_p4ek2ugx</font>. |
| last(array) | Finds the last item in an array.<br/>Returns a text. | last (<font style="color:#DF2A3F;">{table_p4ek2ugx.input_6xcbr9sz}</font>)<br/>Finds the last item value of field <font style="color:#DF2A3F;">input_6xcbr9sz</font> in an array<font style="color:#DF2A3F;"> table_p4ek2ugx</font>. |
| now(format) | Returns the current date. By default returns as 'Y-m-d' or in the specified date format.<br/>Returns a date. | now (<font style="color:#DF2A3F;">YYYY-MM-DD</font>)<br/>Returns the current date with specific display format, currently support following format.<br/><font style="color:#DF2A3F;">'YYYY'</font><br/><font style="color:#DF2A3F;">'YYYY-MM'</font><br/><font style="color:#DF2A3F;">'MM'</font><br/><font style="color:#DF2A3F;">'YYYY-MM-DD'</font><br/><font style="color:#DF2A3F;">'YYYY</font><font style="color:#DF2A3F;">年</font><font style="color:#DF2A3F;">MM</font><font style="color:#DF2A3F;">月</font><font style="color:#DF2A3F;">'</font><br/><font style="color:#DF2A3F;">'MM</font><font style="color:#DF2A3F;">月</font><font style="color:#DF2A3F;">DD</font><font style="color:#DF2A3F;">日</font><font style="color:#DF2A3F;">'</font><br/><font style="color:#DF2A3F;">'YYYY</font><font style="color:#DF2A3F;">年</font><font style="color:#DF2A3F;">MM</font><font style="color:#DF2A3F;">月</font><font style="color:#DF2A3F;">DD</font><font style="color:#DF2A3F;">日</font><font style="color:#DF2A3F;">'</font><br/><font style="color:#DF2A3F;">'YYYY-MM-DD HH:MM'</font><br/><font style="color:#DF2A3F;">'MM-DD HH:MM'</font><br/><font style="color:#DF2A3F;">'HH:MM'</font><br/><font style="color:#DF2A3F;">'WEEK'</font> |
| addDays(date, days, format) | Returns the date after adding (positive value) or deducting (negative value) of days.<br/>Returns a date. | addDays (<font style="color:#DF2A3F;">{date_p4ek2ugx}</font>,<font style="color:#DF2A3F;">30</font>, <font style="color:#DF2A3F;">YYYY-MM-DD</font>)<br/>Returns the date with display format <font style="color:#DF2A3F;">YYYY-MM-DD</font> adding <font style="color:#DF2A3F;">30</font> days to the value of component with ID: <font style="color:#DF2A3F;">date_p4ek2ugx</font> |
| addMonths<br/>(date, months, format) | Returns the date after adding (positive value) or deducting (negative value) of months.<br/>Returns a date. | addMonths (<font style="color:#DF2A3F;">{date_p4ek2ugx}</font>,<font style="color:#DF2A3F;">3</font>, <font style="color:#DF2A3F;">YYYY-MM-DD</font>)<br/>Returns the date with display format <font style="color:#DF2A3F;">YYYY-MM-DD</font>  after adding <font style="color:#DF2A3F;">3</font> months to the value of component with ID: <font style="color:#DF2A3F;">date_p4ek2ugx</font> |
| any(array) | Checks if any of the values is set.<br/>Returns true or null. | any (<font style="color:#DF2A3F;">{table_p4ek2ugx.input_6xcbr9sz}</font>)<br/>Checks if any of the values is set for the field<font style="color:#DF2A3F;"> input_6xcbr9sz</font> under list <font style="color:#DF2A3F;">table_p4ek2ugx</font> |
| anyMatch(array, match) | Checks if any value or item in an array is equal to the match value.<br/>Returns true or null. | anyMatch(<font style="color:#DF2A3F;">{table_p4ek2ugx.input_6xcbr9sz}</font>, <font style="color:#DF2A3F;">123</font>)<br/>Checks if any value or item input_6xcbr9sz in an array <font style="color:#DF2A3F;">table_p4ek2ugx</font> is equal to the <font style="color:#DF2A3F;">123</font> |
| haversine(location1, location2) | Calculates the great-circle distance in meters between two locations.<br/>Returns a number. | haversine(<font style="color:#DF2A3F;">{input_6xcbr9sz}</font>,<font style="color:#DF2A3F;">{input_6xcbr9sz}</font>)<br/>Calculates the great-circle distance in meters between two locations from 2 values of component <font style="color:#DF2A3F;">input_6xcbr9sz</font> and <font style="color:#DF2A3F;">input_6xcbr9sz</font> |
| sample_size<br/>(plantype,inspectionlevel, <br/>aql,lotsize,round) | Return the sample size based on the provided information | <font style="color:black;">s</font>ample_size(<font style="color:#DF2A3F;">{plantype}</font>,<font style="color:#DF2A3F;">{inspectionlevel}</font>,<font style="color:#DF2A3F;">{aql}</font>,<font style="color:#DF2A3F;">{lotsize}</font>,<font style="color:#DF2A3F;">{round}</font>) |
| accept_number<br/>(plantype,inspectionlevel,<br/>aql,lotsize,round) | Return the accept number based on the provided information | accept_number(<font style="color:#DF2A3F;">{plantype}</font>,<font style="color:#DF2A3F;">{inspectionlevel}</font>,<font style="color:#DF2A3F;">{aql}</font>,<font style="color:#DF2A3F;">{lotsize}</font>,<font style="color:#DF2A3F;">{round}</font>) |
| reject_number<br/>(plantype,inspectionlevel,<br/>aql,lotsize,round) | Return the reject number based on the provided information | reject_numberr(<font style="color:#DF2A3F;">{plantype}</font>,<font style="color:#DF2A3F;">{inspectionlevel}</font>,<font style="color:#DF2A3F;">{aql}</font>,<font style="color:#DF2A3F;">{lotsize}</font>,<font style="color:#DF2A3F;">{round}</font>) |
| totalPointMeasured | Total Point Measured | totalPointMeasured(<font style="color:#DF2A3F;">{measurementchart1}</font>)<br/><font style="color:#DF2A3F;">{measurementchart1} </font>should be an id of a measurement chart component |
| measurementPointsOut | No,of measurement points out of tolerance | measurementPointsOut(<font style="color:#DF2A3F;">{measurementchart1}</font>)<br/><font style="color:#DF2A3F;">{measurementchart1} </font>should be an id of a measurement chart component |
| percentageOfOut | Percentage of out of tolerance points | percentageOfOut(<font style="color:#DF2A3F;">{measurementchart1}</font>)<br/><font style="color:#DF2A3F;">{measurementchart1} </font>should be an id of a measurement chart component |
| pointsOfMeasurement | No.of Points of Measurement | pointsOfMeasurement(<font style="color:#DF2A3F;">{measurementchart1}</font>)<br/><font style="color:#DF2A3F;">{measurementchart1}</font> should be an id of a measurement chart component |
| getCurrentRowNo() | Get Current Row No of a subform + | getCurrentRowNo(), the target component should be<font style="color:#DF2A3F;"> {subformplusid.componentid}</font><br/>If theres subform+ within subform+, the target component should be follow the following style: <font style="color:#DF2A3F;">{subform1.subform2.componentid}</font> |


## Key Points for Calculation

* The formula function name and field ID which used inside calculation is case sensitive.
* Some of the formula has parameter with value from the component, data type restriction should be considered, might not return value or cause form rendering error if passing the wrong types of data to the formula.
* Please be aware of the multiple formula items configured to avoid logic conflict.
* Currently, system has default logic to transform the input component as number if input number into text box (similar as Excel, when input 043829, the 0 prefix will be auto removed for calculation), so it can also be used for numeric calculation, if need to output exactly the same as the input text without transform (such as SKU number), please use* **{#componentID}** *instead of** *{componentID}***
* Please don’t name component id using the following keywords to avoid mis-calculation: ***length, constructor, at, chartAt, charCodeAt, codePointAt, repeat, search, toString, slice, split, value***.
