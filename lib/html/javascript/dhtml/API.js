/**
 * show User Information panel(bar).
 */
function user_showUserPanel() 
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.showUserInfoBar();
	}
}

/**
 * show TOC panel.
 */
function user_showTOC() 
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.controlLeftPanel("toc");
	}
}

/**
 * show Toolbox panel.
 */
function user_showToolbox()
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.controlLeftPanel("toolbox");
	}
}

/**
 * show Help dialog by helpId.
 * helpId - help file id. type: int
 */
function user_showHelp(helpId)
{
	if ( helpId == null ) helpId = "40035"
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.help(helpId);
	}
}

/**
 * show Search dialog.
 */
function user_showSearchDialog()
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.openSearch(false,null);
	}	
}

/**
 * show Sort dialog.
 */
function user_showSortDialog()
{	
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.sortDlg();
	}
}

/**
 * show Filter dialog.
 */
function user_showFilterDialog()
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.filterDlg();
	}	
}

/**
 * show New Report wizard dialog.
 */
function user_showNewRptDialog()
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.createRptSet(null, false);
	}
}

/**
 * show Open Report dialog.
 */
function user_showOpenRptDialog()
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){//change the width of page from 500 to 562
		dialogManager.open('openrptdlg',null,true);
	}
}


/**
 * show Save As dialog.
 */
function user_showSaveAsDialog()
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.saveAsDlg(null,null,true);
	}
}

/**
 * show Export dialog.
 */
function user_showSaveResultDialog()
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.saveResultDlg();
	}
}

/**
 * show Page Setup dialog.
 */
function user_showPageSetupDialog()
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.openDlg('pageproperty','&dsid="+DHTMLConstant.REPORT_PAGE_PANEL+"&');
	}
}

/**
 * show Printable Version dialog.
 */
function user_showPrintDialog()
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.printDlg();
	}
}

/**
 * goto next page.
 */
function user_nextPage() 
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.nextPage();
	}
}

/**
 * goto previous page.
 */
function user_prevPage() 
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.prevPage();
	}
}

/**
 * goto first page.
 */
function user_firstPage() 
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.firstPage();
	}
}

/**
 * goto last page.
 */
function user_lastPage() 
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.lastPage();
	}
}

/**
 * goto current number page.
 */
function user_gotoPage(pageNum){
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.submitGotoPage(pageNum);
	}
}

/**
 * zoom report.
 * zoomSize - must be a integer between 0 and 400. type: int
 */
function user_zoomTo(zoomSize)
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.zoom(zoomSize);
	}
}

/**
 * change report style.
 * styleName - style name. type: string
 */
function user_changeStyleTo(styleName)
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		var formObj = getFrameObject("", OperateConstant.DHTML_PREFIX + "actionform");
		var args = [
					["selectedStyle", styleName],
		            [OperateConstant.OPERATE, OperateConstant.CHANGERPTSTYLE]
					];
		styleName = encodeSingleQuote(styleName);
		winobj.submitAction(formObj, args);
	}
}

/**
 * save report.
 */
function user_saveRpt()
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.save();
	}
}

/**
 * close current report.
 */
function user_closeRpt()
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.closeCurrRptSheet();
	}
}

/**
 * close current report set.
 */
function user_closeReportSet()
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.closeWindow('false', 'false', 'false');
	}
}

/**
 * close reportset. This function is only for keeping compatibility with V7
 */
function user_exit() {
	user_closeReportSet();
}

/**
 * delete current report.
 */
function user_deleteRpt()
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		var formObj = getFrameObject("", OperateConstant.DHTML_PREFIX + "actionform");
		var args = [[OperateConstant.OPERATE, OperateConstant.DELETE_CURRENT_RPTSHEET]];
	    if(confirm(msg(1000106))){
	    	winobj.submitAction(formObj, args);
	    }
	}
}

/**
 * show Rename Report dialog.
 */
function user_renameRpt()
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.OpenRenameCurrRptSheetDlg();
	}
}

/**
 * refresh current report.
 */
function user_refresh() 
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.refreshAllDataSet();
	}
}

/**
 * reset appointed component(section, table, ...).
 * instanceName - component instance name. type: string
 */
function user_reset(instanceName) 
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		var args = [
					[OperateConstant.COM_INST_NAME, instanceName],
		            [OperateConstant.OPERATE, OperateConstant.RESET_REPORT]
		           ];
		var formObj = getFrameObject("", OperateConstant.DHTML_PREFIX + "actionform");
		winobj.submitAction(formObj, args);
	}
}

/**
 * undo action.
 */
function user_undo()
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.undoAction();
	}
}

/**
 * redo action.
 */
function user_redo()
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.redoAction();
	}
}

/**
 * change appointed crosstab to chart.
 * instanceName - crosstab instance name. type: string
 */
function user_crosstabToChart(instanceName)
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		var needConvert = false;
		var comp = winobj.dhtmlAdhoc.getCompObjByInstName(instanceName);
		if(comp!=null)
		{
			var convertInfo = eval(comp.getAttribute("convert"));
			if(convertInfo!=null) {
				var isBasedBC = convertInfo[1]=="true"?true:false;
				if(isBasedBC==false) needConvert = convertInfo[2]=="true"?true:false;
			}
		}
		winobj._openConvertDlg(instanceName, null, 'chart', 'crosstab', needConvert);
	}
}

/**
 * change appointed chart to crosstab.
 * instanceName - chart instance name. type: string
 */
function user_chartToCrosstab(instanceName)
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		var needConvert = false;
		var comp = winobj.dhtmlAdhoc.getCompObjByInstName(instanceName);
		if(comp!=null)
		{
			var convertInfo = eval(comp.getAttribute("convert"));
			if(convertInfo!=null) {
				var isBasedBC = convertInfo[1]=="true"?true:false;
				if(isBasedBC==false) needConvert = convertInfo[2]=="true"?true:false;
			}
		}
		winobj._openConvertDlg(instanceName, null, 'crosstab', 'chart', needConvert);
	}
}

/**
 * rotate appointed crosstab.
 * instanceName - crosstab instance name. type: string
 */
function user_rotateCrosstab(instanceName)
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		var args = new Array();
		args._push([OperateConstant.OPERATE, OperateConstant.ROTATE_CROSSTAB]);
		args._push([OperateConstant.COM_INST_NAME, instanceName]);
		var formObj = winobj.getFrameObject("", OperateConstant.DHTML_PREFIX + "actionform");
		winobj.submitAction(formObj, args);
	}
}

/**
 * drill to.
 * instanceName - component instance name(common is GroupPanel instance name). type: string
 * columnBLName - column BL name which will drill to. type: string
 */
function user_drillTo(instanceName, columnBLName)
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		var args = new Array();
		args._push([OperateConstant.OPERATE, OperateConstant.DRILL_TO]);
		args._push([OperateConstant.INST_NAME, instanceName]);
		args._push(["col", columnBLName]);
		args._push(["dhtmlview", "false"]);
		var formObj = winobj.getFrameObject("", OperateConstant.DHTML_PREFIX + "actionform");
		winobj.submitAction(formObj, args);
	}
}

/**
 * change appointed component's property
 * instanceName - component instance name. type: string
 * propertyName - property name. type: string
 * value - property value. type: string, int or float
 * isBy - whether the property is controled by formula. type: boolean
 */
function user_changeCompProperty(instanceName, propertyName, value, isBy)
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		var args = new Array();
		args.push([propertyName, value]);
		if(isBy){
			args.push([propertyName, isBy]);
		} else {
			args.push([propertyName, "false"]);
		}
		args.push([OperateConstant.OPERATE, OperateConstant.CHANGE_PROPERTY]);
		args._push([OperateConstant.INST_NAME, instanceName]);
		var formObj = getFrameObject("", OperateConstant.DHTML_PREFIX + "actionform");
		submitAction(formObj, args, true);
	}
}

/**
 * <form action="/dhtml" method="GET" target="<%=DHTMLConstant.DHTML_PREFIX%>connect">op=56&catalogFile=link&newRptName=master&newWindow=false&param1=jj
 * catalog - catalog name(null is current). type: string
 * rptName - report name(null is current). type: string
 * newWindow - if popup new window. type: boolean
 * params - type: string[][2], first is param name, second is value
 */
function user_openNewReport(catalog, rptName, newWindow, params)
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.openNewReport(catalog, rptName, newWindow, params);
	}
}

/**
 * do one sort
 * instanceName - component instance name. type: string
 * columnMappingName - column mapping name
 * order - sort order. type: boolean (true: asc, false: desc)
 */
function user_sort(instanceName, columnMappingName, order)
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.sort(instanceName, columnMappingName, winobj.tAPI.orderValueOf(order));
	}
}

/**
 * apply multi sorts for component in one step.
 * instanceName - component instance name. type: string
 * columnMappingNames - columns names. type: string[]
 * orders - sorts orders. type: boolean[] (true: asc, false: desc)
 */
function user_oneStepSort(columnMappingNames, orders, instanceName) {
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		if(columnMappingNames.length < 0 || columnMappingNames.length != orders.length) {
			alert("Invalid parameters! Check it and try again.");
			return;
		}
		var args = new Array();
		for(var i = 0; i < columnMappingNames.length; i++) {
			args._push(["col", columnMappingNames[i]]);
			args._push(["ord", winobj.tAPI.orderValueOf(orders[i])]);
		}
		if(arguments.length == 2) {
			//V7
		} else if (arguments.length > 2) {
			args._push(["comp", instanceName]);
			args._push(["isdataset", "false"]);
			args._push(["subrptkey", "null"]); // TO DO - Yang Yanlin
			args._push([OperateConstant.OPERATE, OperateConstant.SORT]);
		}
		var formObj = winobj.getFrameObject("", OperateConstant.DHTML_PREFIX + "actionform");
		winobj.submitAction(formObj, args);
	}
}

/**
 * do one filter
 * instanceName - component instance name. type: string
 * columnMappingName - column mapping name. type: string
 * operator - operator symbol. type: string
 * value - value. type: string
 * logic - logic opeartor('AND','OR'). type:string
 */
function user_filter(instanceName, columnMappingName, operator, value, logic ,valueFormat) {
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		var args = [[OperateConstant.URI_COMPONENT, instanceName],
			[OperateConstant.URI_COLUMN, columnMappingName],
			[OperateConstant.URI_OPERATE, operator],
			[OperateConstant.URI_LOGIC, "END"],
			[OperateConstant.URI_VALUE, escape(value)],
			[OperateConstant.OPERATE, OperateConstant.FILTER]];

		var logicVal;
		//needClearBefore logic caseby FS_134661 & Bug #135747
		//FS: 'AND' or 'OR' (firstly remove the filters on this field from existing filters)
		//So this parameter logic is from FS.
		var needClearBefore=true;
		switch(logic){
			case "AND":
				logicVal=1;
			break;
			case "OR":
				logicVal=2;
			break;
			default:
				logicVal=0;
				needClearBefore=false;
		}
		args.push([OperateConstant.URI_LOGIC_WITHEXIST,logicVal]);
		var doFilter=function(){
			var formObj=getFrameObject("",OperateConstant.DHTML_PREFIX+"actionform");
			submitAction(formObj,args);
		};
		var doClearAndFilter=function(){
			if(needClearBefore){
				winobj.filter_clear(null,columnMappingName,instanceName
				,doFilter);
			}else{
				doFilter();
			}
		};
		if(valueFormat&&tAPI.trim(valueFormat)!=""){
			args.push(["valueFormat",valueFormat]);
		}else{
		}
		doClearAndFilter();
	}
}

/**
 * apply multi filter for component in one step.
 * instanceName - component instance name. type: string
 * columnMappingNames - columns mapping names. type: string[]
 * operators - operator symbols. type: string[]
 * values - values. type: string[]
 * logics - logics of all filters. type: string[]
 */
function user_oneStepfilter(columnMappingNames, operators, values, logics, instanceName) {
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		if(columnMappingNames.length < 0
				|| columnMappingNames.length != operators.length
				|| columnMappingNames.length != values.length
				|| columnMappingNames.length != logics.length) {
			alert("Invalid parameters! Check it and try again.");
			return;
		}
		var callback=arguments[5];

		var args = new Array();
		for(var i = 0; i < columnMappingNames.length; i++) {
			args._push(["col", columnMappingNames[i]]);
			args._push(["operate", operators[i]]);
			args._push(["value", values[i]]);
			args._push(["logic", logics[i]]);
		}
		if(arguments.length == 4) {
			//V7
		} else if (arguments.length > 4) {
			args._push(["comp", instanceName]);
			args._push(["isdataset", "false"]);
			args._push(["subrptkey", "null"]); // TO DO - Yang Yanlin
			args._push([OperateConstant.OPERATE, OperateConstant.FILTER]);
		}
		var formObj = winobj.getFrameObject("", OperateConstant.DHTML_PREFIX + "actionform");
		winobj.submitAction(formObj, args,null,null,null,callback);
	}
}

/**
 * top N
 * instanceName - component instance name. type: string
 * columnMappingName - column mapping name. type: string
 * value - num of top N. type: int
 */
function user_topN(instanceName, columnMappingName, value)
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.filter_contextmenu(null, instanceName, value + "", 0, columnMappingName, true, true);
	}
}

/**
 * bottom N
 * instanceName - component instance name. type: string
 * columnMappingName - column mapping name. type: string
 * value - num of bottom N. type: int
 */
function user_bottomN(instanceName, columnMappingName, value)
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.filter_contextmenu(null, instanceName, value + "", 0, columnMappingName, false, true);
	}
}

/**
 * multi searchs in one step.
 * value - search string value. type: string
 * columnMappingName - column mapping name. type: string
 * isContent - if search is for content. type: boolean
 * isUp - if search orientation is up. type: boolean
 * isMatchCase - if search is match case. type: boolean
 * isWordOnly - if search is whole word only. type: boolean
 */
function user_oneStepSearch(value, isContent, columnMappingName, isUp, isMatchCase, isWordOnly) {
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		var args = new Array();
		args._push(["value", value]);
		args._push(["content", value]);
		args._push(["isContent", isContent]);
		args._push(["column", columnMappingName]);
		args._push(["isUp", isUp]);
		args._push(["isMatchCase", isMatchCase]);
		args._push(["isWholeWord", isWordOnly]);
		args._push([OperateConstant.OPERATE, OperateConstant.ONESTEP_SEARCH]);
		var formObj = winobj.getFrameObject("", OperateConstant.DHTML_PREFIX + "actionform");
		winobj.submitAction(formObj, args, false);
	}
}

/**
 * one step export
 * type - export type. type: int
 * optionValues - export option values. type: string[]
 */
function user_oneStepExport(type, optionValues)
{
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		var url = winobj.oneStepExport(type, optionValues);
		var params = url.split('&');
		//alert("params=" + params);
		var args = new Array();
		for(var i = 0; i < params.length; i++) {
			var name = params[i].substring(0, params[i].indexOf('='));
			var value = params[i].substring(params[i].indexOf('=') + 1);
			value = (value == null) ? "" : value;
			args._push([name, value]);
		}
		var formObj = winobj.getFrameObject("", OperateConstant.DHTML_PREFIX + "actionform");
		//alert("args=" + args);
		winobj.submitAction(function(obj){
			obj.obj.target=1;//only for download.
			doExportActionFinish(obj);
		},args);
		//winobj.open(winobj.oneStepExport(type, optionValues));
	}
}

/**
 * one step download
 * type - download type. type: string
 * optionValues - download option values. type: string[]
 */
function user_downloadReport(type, optionValues)
{
	var exist = false;
	var down = "to_local=true";
	var downarr = ["to_local=true"];
	var optionValues1 = new Array() ;
	if(optionValues==null || optionValues.length==0) optionValues1 = downarr;
    for(var i=0; optionValues!=null && i<optionValues.length; i++){
        optionValues1[i] = optionValues[i];
        if(optionValues[i]==down) {
            exist = true;
            break;
        }
    }
    if(optionValues!=null && optionValues.length>0) optionValues1[optionValues.length] = down;
    if(exist) optionValues1 = optionValues;
	return user_oneStepExport(type, optionValues1);
}

/**
 * flex group
 * groupControlObj - group control object(or it's Id). The param value can be 'this' or other unique web object(or web object Id). type: object or string
 */
function user_groupFlex(groupControlObj)
{
	if (groupControlObj)
	{
		var obj = winobj.dAPI.getObj(groupControlObj);
		groupFlex(obj);
	}
}

/**
 * change generic chart type
 * instanceName - component instance name. type: string
 * isPrimaryAxis - if the axis is primary axis. type: boolean
 * type - chart type. type: string
 */
function user_changeGenericChartType(instanceName, isPrimaryAxis, type)
{
	var winobj = window.getDHTMLMainWindow();
	if(type != "" && winobj && winobj != null){
		var args = new Array();
		args._push(["inst_name", instanceName]);
		args._push(["actionType", "type"]);
		args._push(["combo", false]);
		args._push(["axis", eval(isPrimaryAxis) ? 0 : 1]);
		args._push(["type", type]);
		args._push([OperateConstant.OPERATE, 119]);
		var formObj = winobj.getFrameObject("", OperateConstant.DHTML_PREFIX + "actionform");
		winobj.submitAction(formObj, args);
	}
}

/**
 * change combo chart type
 * instanceName - component instance name. type: string
 * isPrimaryAxis - if the axis is primary axis. type: boolean
 * index - the chart type index. type: int
 * type - chart type. type: string
 */
function user_changeComboChartType(instanceName, isPrimaryAxis, index,  type)
{
	if(!type||type==""){
		return;
	}
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		var args = new Array();
		args._push(["inst_name", instanceName]);
		args._push(["actionType", "type"]);
		args._push(["combo", true]);
		args._push(["axis", eval(isPrimaryAxis) ? 0 : 1]);
		args._push(["type", type]);
		args._push(["typeidx", index]);
		args._push([OperateConstant.OPERATE, 119]);
		var formObj = winobj.getFrameObject("", OperateConstant.DHTML_PREFIX + "actionform");
		winobj.submitAction(formObj, args);
	}
}
/**
* Refreshes current report automatically by the specified time interval (second).
* time - the interval time (second)
*/
function user_autoRefreshALLDataSet(time){
	
	var plugin=PageReportFeaturePlugins.Get("AutoRefreshData");
	if(plugin){
		plugin.Start(time);
	}
}
/**
* Stops automatically refreshing current report.
*/
function user_stopAutoRefreshALLDataSet()
{
	var plugin=PageReportFeaturePlugins.Get("AutoRefreshData");
	if(plugin){
		plugin.Stop();
	}
}
/**
* Pops up the user customized page.
*/
function user_popCustomizedPage(){
	var winobj = window.getDHTMLMainWindow();
	if(winobj && winobj != null){
		winobj.openDlg('customized_page');
	}
}

/**
 * Remove filters on a field or all fields in a component.
 * 
 * instanceName - the instance name of the component. type:string
 * columnMappingName -the DBField name based on query. type:string
 */
function user_removeFilter(instanceName,columnMappingName){
    var winobj = window.getDHTMLMainWindow();
    if(winobj && winobj != null){
        winobj.filter_clear(null, columnMappingName, instanceName);
    }
}

var approveSecureDomains=function(origin){
	switch(origin){
		case "null":
		case location.origin:
		// case "http://www.sample.com":
		return true;
		default:
		alert("Need Admin add allowe origin "+origin+" in white list at API.js:776 line.");
		return false;
	}
};
/*
js.lang.Class.forName("com.jinfonet.pagereport.WebAPIService").Start(approveSecureDomains);
*/
