// modules/user_profile/native/openUserContextMenuCommands.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 7;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/openUserContextMenuCommands.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: openUserContextMenuCommands, environment: var1
        _fun91854: for (var _fun91854_ip = 0;;) switch (_fun91854_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.userId;
                var7 = var0.selectedChannel;
                var5 = var0.showUserProfile;
                var10 = var0.analyticsLocations;
                var _closure2_slot0 = var10;
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 0;
                var2 = var8[var0];
                var0 = undefined;
                var9 = var3.bind(var0)(var2);
                var3 = var9.trackUserProfileAction;
                var2 = {};
                var11 = 'PRESS_VIEW_APP_COMMANDS';
                var2.action = var11;
                var2.analyticsLocations = var10;
                var2 = var3.bind(var9)(var2);
                var3 = _closure1_slot1;
                var2 = 1;
                var2 = var8[var2];
                var8 = var3.bind(var0)(var2);
                var3 = var8.getConfig;
                var2 = {};
                var9 = 'openUserContextMenuCommands';
                var2.location = var9;
                var2 = var3.bind(var8)(var2);
                var2 = var2.newUIEnabled;
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var3 = 2;
                var3 = var9[var3];
                var3 = var8.bind(var0)(var3);
                if (var2) {
                    _fun91854_ip = 269;
                    continue _fun91854
                }
            case 152:
                var12 = var3.openLazy;
                var8 = _closure1_slot0;
                var2 = 6;
                var2 = var9[var2];
                var11 = var8.bind(var0)(var2);
                var2 = 5;
                var10 = var9[var2];
                var2 = var9.paths;
                var11 = var11.bind(var0)(var10, var2);
                var10 = {};
                var10.channel = var7;
                var2 = 4;
                var2 = var9[var2];
                var2 = var8.bind(var0)(var2);
                var2 = var2.ApplicationCommandType;
                var2 = var2.USER;
                var10.commandType = var2;
                var10.commandTargetId = var6;
                var2 = function() { // Original name: onPressAppCommand, environment: var4
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.trackUserProfileAction;
                    var0 = {};
                    var3 = 'PRESS_APP_COMMAND';
                    var0.action = var3;
                    var3 = _closure2_slot0;
                    var0.analyticsLocations = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10.onPressAppCommand = var2;
                var15 = 'CommandContextMenuActionSheet';
                var13 = 'stack';
                var17 = var3;
                var16 = var11;
                var14 = var10;
                var2 = var17[var12](var16, var15, var14, var13, var12);
                _fun91854_ip = 363;
                continue _fun91854;
            case 269:
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                var8 = _closure1_slot0;
                var1 = 3;
                var1 = var9[var1];
                var3 = var8.bind(var0)(var1);
                var2 = var3.navigateToContextMenuCommands;
                var1 = {};
                var1.channel = var7;
                var7 = 4;
                var7 = var9[var7];
                var7 = var8.bind(var0)(var7);
                var7 = var7.ApplicationCommandType;
                var7 = var7.USER;
                var1.commandType = var7;
                var1.commandTargetId = var6;
                var1.onClose = var5;
                var4 = function() { // Original name: onPressAppCommand, environment: var4
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.trackUserProfileAction;
                    var0 = {};
                    var3 = 'PRESS_APP_COMMAND';
                    var0.action = var3;
                    var3 = _closure2_slot0;
                    var0.analyticsLocations = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1.onPressAppCommand = var4;
                var1 = var2.bind(var3)(var1);
            case 363:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6934, 9579, 3237, 3878, 1636, 9580, 1307, 2]);