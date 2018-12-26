(function() {
    'use strict';

    angular
    .module('app')
    .config(['$translateProvider', 'calendarOptions', function ($translateProvider, calendarOptions) {


    //English language and substitutions
    $translateProvider.translations('en', {
      //These are name value pairs. Customize the values only (the item after the colon)
      'Home': "Home",
      'Calendars': "Calendars",
      'Filters': "Filters",
      'Settings': "Settings",

      'Hide Sidebar': "Hide Sidebar",
      'Show Sidebar': "Show Sidebar",

      'Day': "Day",
      'Schedule': "Schedule",
      'List': "List",
      'Week': "Week",
      'Month': "Month",
      'Resource': "Resource",
      'Grid': "Grid",

      'Today': "Today",
      'Resources': "Resources",

      'Calendar': "Calendar",
      'All_Day': "All Day",
      'Start': "Start",
      'End': "End",
      'Status': "Status",
      'Contact': "Contact",
      'Project': "Project",

      'Delete': "Delete",
      'Close': "Close",
      'Save And Close': "Save & Close",
      'Save And Back': "Save & Back",
      'Back': "Back",

      'Search': "Search",
      'none': "none",

      'Description': "Description",
      'Enter Title': "Enter Title",

      'Clear Selection': "Clear Selection",

      'New_Event_Title': "New Event",
      'New Event': "New Event",
      'View Day': "View Day",
      'You have no editable calendars': "You have no editable calendars",

      'Time Settings': "Time Settings",
      'Default Time': "Default Time",
      'Earliest Time': "Earliest Time",
      'Latest Time': "Latest Time",
      'Time Scale': "Time Scale",
      'View Settings': "View Settings",
      'Compressed View': "Compressed View",
      'Fluid Months': "Fluid Months",

      'Yes': "Yes",
      'No': "No",

      'Advanced Filters': "Advanced Filters",
      'Reset Filters': "Reset Filters",

      'Week_Number_Header': "W",
      'more': "more",

      'hour': "hour",
      'hours': "hours",
      'minute': "minute",
      'minutes': "minutes",

      'Status Filters': "Status Filters",
      'Resource Filters': "Resource Filters",
      'Project Filters': "Project Filters",
      'Contact Filters': "Contact Filters",

      'New Status': "New Status",
      'New Resource': "New Resource",
      'New Folder': "New Folder",

      'Sources': "Sources",
      'Save': "Save",
      'Cancel': "Cancel",

      'Default for new events': "Default for new events",

      'Call your own scripts': "Custom Actions",

      'Status Filter': "Status Filter",

      'Name': "Name",
      'Color': "Color",

      'day': "day",
      'days': "days",

      'Account Settings': "Account Settings",
      'Trial Mode': "Trial Mode",
      'Contact Us': "Contact Us",
      'Help': "Help",

      'Check For Updates': "Check For Updates",
      'Install Update': "Install Update",
      'what is new': "what's new?",

      'Load Calendar': "Load Calendar",

      'Purchase DayBack': "Purchase DayBack",
      'Switch To Subscription': "Switch To Subscription",
      'Manage Subscription': "Manage Subscription",
      'Enter New License': "Enter New License",
      'Activate': "Activate",

      'Trial expired': "Your trial has expired",
      'Trial expired message': "Trial expired. Please purchase a license to continue.",

      'Subscription expired message': "Subscription expired. Please renew to continue.",
      'Cease to function message': "If a new license is not entered the calendar interface will cease to function in {{days}}",

      'Purchased': "Purchased",

      'Product': "Product",
      'Order Number': "Order Number",
      'Email': "Email",
      'Registered To': "Registered To",

      'Current version': "You're running version {{version}}",
      'Version available': "Version {{version}} available",
      'Running latest version': "You are running the latest version",
      'Cannot connect': "Couldn't connect to update server",
      'Problem downloading update': "There was a problem downloading the update",

      'Activation denied': "The activation request was denied. Please check your information and try again",
      'Activation successfull': "Activation successfull",

      'Mobile not supported': "This is currently not supported on iOS",
      'Update Successful': "Update Successful",

      'Resource Columns': "Resource Columns",

      'Refresh': "Refresh",
      'Show Weekends': "Show Weekends",
      'Days': "Days",
      'of': "of",

      'Fetching': "Fetching",

      'Week of': "Week of",
      'weeks': "weeks",
      'Show Distances': "Show Distances",
      'Horizon': "Horizon",

      'saved': "saved",
      'deleted': "deleted",
      'Undo': "Undo",

      'Operation Failed': "Operation Failed",
      'Revert Changes': "Revert Changes",
      'Return To Event': "Return To Event",

      'Authentication Successful': "Authentication Successful",
      'Please close to return to the calendar': "Please close to return to the calendar",

    });

    //Spanish language and substitutions - Special thanks to Rodrigo, Jean Wenmeekers (and his students)
    $translateProvider.translations('es', {
      //These are name value pairs. Customize the values only (the item after the colon)
      //For example "Home": "House"

    });

    //French language and substitutions  - Spceial thanks to Bernard Leroy
    $translateProvider.translations('fr', {
      //These are name value pairs. Customize the values only (the item after the colon)
      //For example "Home": "House"

    });

    //German language and substitutions - Special thanks to Juergen Joeckel and Maria Gross
    $translateProvider.translations('de', {
      //These are name value pairs. Customize the values only (the item after the colon)
      //For example "Home": "House"

    });

    //Italian language and substitutions
    $translateProvider.translations('it', {
      //These are name value pairs. Customize the values only (the item after the colon)
      //For example "Home": "House"

    });

    //Danish language and substitutions
    $translateProvider.translations('da', {
      //These are name value pairs. Customize the values only (the item after the colon)
      //For example "Home": "House"

    });

    //Dutch language and substitutions - Special thanks to Jean Wenmeekers
    $translateProvider.translations('nl', {
      //These are name value pairs. Customize the values only (the item after the colon)
      //For example "Home": "House"

    });

    //Swedish language and substitutions - Special thanks to Simon Danielsson - Quadevo AB - Sweden
    $translateProvider.translations('sv', {
      //These are name value pairs. Customize the values only (the item after the colon)
      //For example "Home": "House"

    });

    //Japanese language and substitutions - Special thanks to Shin Ninagawa
    $translateProvider.translations('ja', {
      //These are name value pairs. Customize the values only (the item after the colon)
      //For example "Home": "House"

    });


// Do not edit below this line =========================================================================================
      var language = calendarOptions.urlParams.language || "auto"; //Leave this set to "auto" we get the specific language code elsewhere.

      //Function to return language, do not edit!
      $translateProvider.determinePreferredLanguage(function() {
            var detectLanguage = window.navigator.userLanguage || window.navigator.language;
            var selectedLanguage;

            //We want to get the language code before any "_" or "-"
            selectedLanguage = language === "auto" || !language ? detectLanguage.split(/[-_]+/)[0] : language;
            calendarOptions.language = $translateProvider.translations(selectedLanguage) ? selectedLanguage : 'en';
            return calendarOptions.language;
      });


    }]);
}());
