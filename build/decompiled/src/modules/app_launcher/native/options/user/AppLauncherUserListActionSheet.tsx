// modules/app_launcher/native/options/user/AppLauncherUserListActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var6 = var0.query;
        var0 = var0.onPressRow;
        var _closure2_slot0 = var0;
        var1 = _closure1_slot5;
        var3 = undefined;
        var5 = var1.bind(var3)();
        var2 = _closure1_slot4;
        var1 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 12;
        var0 = var7[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.AppLauncherList;
        var0 = {};
        var5 = var5.emptyState;
        var0.contentContainerStyle = var5;
        var5 = new Array(1);
        var5[0] = var6;
        var0.data = var5;
        var4 = function arg0() {
            var0 = arg0;
            var4 = var0.item;
            var3 = _closure1_slot4;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 13;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.TableRow;
            var0 = {
                'label': null,
                'start': true,
                'end': true
            };
            var0.label = var4;
            var4 = _closure2_slot0;
            var0.onPress = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var0.renderItem = var4;
        var4 = 'always';
        var0.keyboardShouldPersistTaps = var4;
        var4 = 'on-drag';
        var0.keyboardDismissMode = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var10 = var3.DEFAULT_CONTENT_PADDING;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.paddingHorizontal = var10;
    var8.paddingTop = var10;
    var8.flex = var9;
    var3.emptyState = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/options/user/AppLauncherUserListActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun108804: for (var _fun108804_ip = 0;;) switch (_fun108804_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.onUserPress;
                var _closure2_slot0 = var1;
                var7 = var2.onActionSheetDismiss;
                var _closure2_slot1 = var7;
                var6 = var2.channel;
                var4 = var2.option;
                var11 = var6.guild_id;
                var9 = var6.id;
                var3 = _closure1_slot3;
                var10 = var3.useCallback;
                var8 = new Array(1);
                var8[0] = var7;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.hideActionSheet;
                    var1 = 'AppLauncherUserListActionSheet';
                    var1 = var2.bind(var3)(var1);
                    var1 = _closure2_slot1;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var10 = var10.bind(var3)(var2, var8);
                var _closure2_slot2 = var10;
                var8 = var3.useCallback;
                var2 = new Array(2);
                var2[0] = var10;
                var2[1] = var1;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.user;
                    var3 = _closure2_slot0;
                    var2 = {};
                    var2.user = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var1 = _closure2_slot2;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var8 = var8.bind(var3)(var1, var2);
                var _closure2_slot3 = var8;
                var2 = var3.useCallback;
                var1 = new Array(1);
                var1[0] = var8;
                var0 = function(arg0) { // Environment: var0
                    _fun108807: for (var _fun108807_ip = 0;;) switch (_fun108807_ip) {
                        case 0:
                            var6 = arg0;
                            var _closure3_slot0 = var6;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 5;
                            var0 = var3[var0];
                            var4 = undefined;
                            var2 = var2.bind(var4)(var0);
                            var0 = var2.isSnowflake;
                            var0 = var0.bind(var2)(var6);
                            var3 = _closure1_slot4;
                            if (var0) {
                                _fun108807_ip = 233;
                                continue _fun108807
                            }
                        case 55:
                            var8 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var0 = 6;
                            var0 = var11[var0];
                            var2 = var8.bind(var4)(var0);
                            var0 = {};
                            var7 = {};
                            var9 = 80;
                            var7.paddingTop = var9;
                            var0.style = var7;
                            var7 = 7;
                            var9 = var11[var7];
                            var9 = var8.bind(var4)(var9);
                            var0.lightSource = var9;
                            var7 = var11[var7];
                            var7 = var8.bind(var4)(var7);
                            var0.darkSource = var7;
                            var10 = _closure1_slot0;
                            var7 = 8;
                            var8 = var11[var7];
                            var8 = var10.bind(var4)(var8);
                            var12 = var8.intl;
                            var9 = var12.string;
                            var8 = var11[var7];
                            var8 = var10.bind(var4)(var8);
                            var8 = var8.t;
                            var8 = var8.vYocDz;
                            var8 = var9.bind(var12)(var8);
                            var0.title = var8;
                            var8 = var11[var7];
                            var8 = var10.bind(var4)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var7 = var11[var7];
                            var7 = var10.bind(var4)(var7);
                            var7 = var7.t;
                            var7 = var7.V6nAfF;
                            var7 = var8.bind(var9)(var7);
                            var0.body = var7;
                            var0 = var3.bind(var4)(var2, var0);
                            _fun108807_ip = 262;
                            continue _fun108807;
                        case 233:
                            var2 = _closure1_slot6;
                            var1 = {};
                            var1.query = var6;
                            var5 = function() {
                                var2 = _closure2_slot3;
                                var1 = {};
                                var0 = _closure3_slot0;
                                var1.user = var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1.onPressRow = var5;
                            var0 = var3.bind(var4)(var2, var1);
                        case 262:
                            return var0;
                    }
                };
                var12 = var2.bind(var3)(var0, var1);
                var3 = _closure1_slot4;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.AppLauncherCommandOptionActionSheet;
                var0 = {};
                var0.onDismiss = var7;
                var0.option = var4;
                var4 = {};
                var7 = 0;
                var4.paddingHorizontal = var7;
                var0.contentContainerStyles = var4;
                var4 = var6.isPrivate;
                var4 = var4.bind(var6)();
                var7 = _closure1_slot4;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                if (var4) {
                    _fun108804_ip = 294;
                    continue _fun108804
                }
            case 225:
                var4 = 11;
                var4 = var10[var4];
                var5 = var6.bind(var2)(var4);
                var4 = {
                    'channelId': null,
                    'guildId': null,
                    'searchable': true,
                    'searchableEmptyState': null,
                    'headerShown': false,
                    'opensUserProfileOnUserPress': false
                };
                var4.channelId = var9;
                var4.guildId = var11;
                var11 = true;
                var4.searchableEmptyState = var12;
                var4.onUserPress = var8;
                var4.inActionSheet = var11;
                var4.disableThemedGradient = var11;
                var4 = var7.bind(var2)(var5, var4);
                _fun108804_ip = 338;
                continue _fun108804;
            case 294:
                var5 = 10;
                var5 = var10[var5];
                var6 = var6.bind(var2)(var5);
                var5 = {
                    'channelId': null,
                    'disableStickySections': true,
                    'hideTitle': true,
                    'headerShown': false,
                    'inActionSheet': true,
                    'onUserPress': null,
                    'opensUserProfileOnUserPress': false
                };
                var5.channelId = var9;
                var5.onUserPress = var8;
                var4 = var7.bind(var2)(var6, var5);
            case 338:
                var0.children = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    var1 = 'AppLauncherUserListActionSheet';
    var2.APP_LAUNCHER_USER_LIST_ACTION_SHEET_KEY = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1468, 33, 1297, 3279, 4544, 7429, 13816, 1234, 13812, 13858, 13850, 13813, 4900, 2]);