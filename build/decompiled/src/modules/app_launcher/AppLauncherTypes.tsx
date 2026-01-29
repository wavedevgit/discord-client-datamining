// modules/app_launcher/AppLauncherTypes.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var5 = {};
    var0 = 'NONE';
    var5.NONE = var0;
    var0 = 'TEXT';
    var5.TEXT = var0;
    var0 = 'VOICE';
    var5.VOICE = var0;
    var4 = {};
    var0 = 'home_empty';
    var4.HOME_EMPTY = var0;
    var0 = 'search_empty';
    var4.SEARCH_EMPTY = var0;
    var0 = 'home_no_permissions';
    var4.HOME_NO_PERMISSIONS = var0;
    var0 = 'command_no_permissions';
    var4.COMMAND_NO_PERMISSIONS = var0;
    var0 = 'command_not_found';
    var4.COMMAND_NOT_FOUND = var0;
    var3 = {};
    var6 = 0;
    var3.DISMISSED = var6;
    var0 = 'DISMISSED';
    var3[var6] = var0;
    var1 = 1;
    var3.COMMAND = var1;
    var0 = 'COMMAND';
    var3[var1] = var0;
    var1 = 2;
    var3.ACTIVITY = var1;
    var0 = 'ACTIVITY';
    var3[var1] = var0;
    var1 = {};
    var0 = 'open_app_dm';
    var1.OPEN_APP_DM = var0;
    var0 = 'use_app_command';
    var1.USE_APP_COMMAND = var0;
    var0 = dependencyMap;
    var7 = var0[var6];
    var6 = require;
    var0 = undefined;
    var8 = var6.bind(var0)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/app_launcher/AppLauncherTypes.tsx';
    var6 = var7.bind(var8)(var6);
    var2.AppLauncherEntrypoint = var5;
    var5 = {
        'SEARCH': 'search',
        'RECENT': 'recent',
        'INSTALLED': 'installed',
        'ACTIVITIES': 'activities',
        'RECENT_APPS': 'recent_apps',
        'RECENT_COMMANDS': 'recent_commands',
        'NEW_TO_APPS': 'new_to_apps',
        'APPS_IN_THIS_SERVER': 'apps_in_this_server'
    };
    var2.AppLauncherSectionName = var5;
    var5 = {
        'HOME': 'home',
        'APP_DETAIL': 'app_detail'
    };
    var2.AppLauncherLocations = var5;
    var2.AppLauncherEmptyStateType = var4;
    var2.AppLauncherCloseReason = var3;
    var2.EntryPointCommandButtonActions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);