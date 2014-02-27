$(document).bind("mobileinit", function () {

    // Navigation
    
    $.mobile.page.prototype.options.addBackBtn      = true;
    $.mobile.page.prototype.options.backBtnTheme    = "d";

    // Page
    $.mobile.page.prototype.options.headerTheme = "d";  // Page header only

    $.mobile.page.prototype.options.footerTheme = "d";

    // Listviews
    $.mobile.listview.prototype.options.headerTheme = "d";  // Header for nested lists
    $.mobile.listview.prototype.options.theme           = "d";  // List items / content
    $.mobile.listview.prototype.options.dividerTheme    = "d";  // List divider

    $.mobile.listview.prototype.options.splitTheme   = "d";
    $.mobile.listview.prototype.options.countTheme   = "d";
    $.mobile.listview.prototype.options.filterTheme = "d";
    $.mobile.listview.prototype.options.filterPlaceholder = "Filter data...";
});