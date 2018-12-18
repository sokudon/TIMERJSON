/**
 * Return a list of sheet names in the Spreadsheet with the given ID.
 * @param {String} a Spreadsheet ID.
 * @return {Array} A list of sheet names.
 */

var sid="1CpwNLrurUVVLX2dmMgZHU-uQC7WQfyfWqLlaiooRaN8";
var sname="イベント";

function doGet() {
  var ss = SpreadsheetApp.openById(sid);
  var sheets = ss.getSheetByName(sname);
  
　var last_row = 2;
　var last_col = 6;
  
   var values= sheets.getRange(1,1,last_row ,last_col).getValues();
  var str="var ibemie=\"" +value[1,4] +" " + value[1,0] 
  +"\";var ibekaishi= " + value[1,5]
  +";var ibeowari = " + value[1,6]
  +";var date_fm=\"YYYY/MM/DD(ddd) HH:mm:ss ([JST,UTC+9:00])\"";
  
  return ContentService.createTextOutput(str).setMimeType(ContentService.MimeType.JAVASCRIPT);
}

function wmap_getSheetsName(sheets){
  //var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var sheet_names = new Array();
  
  if (sheets.length >= 1) {  
    for(var i = 0;i < sheets.length; i++)
    {
      sheet_names.push(sheets[i].getName());
    }
  }
  return sheet_names;
}