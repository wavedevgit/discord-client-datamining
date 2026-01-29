// modules/app_launcher/native/options/user/AppLauncherUserOption.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 5;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_MOD_SUBTLE;
    var8.backgroundColor = var9;
    var3.iconWrapper = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/options/user/AppLauncherUserOption.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: AppLauncherUserOption, environment: var1
        _fun108596: for (var _fun108596_ip = 0;;) switch (_fun108596_ip) {
            case 0:
                var1 = arg0;
                var14 = var1.style;
                var11 = var1.option;
                var _closure2_slot0 = var11;
                var0 = var1.initialValue;
                var _closure2_slot1 = var0;
                var0 = var1.onUserPress;
                var _closure2_slot2 = var0;
                var0 = var1.onActionSheetDismiss;
                var _closure2_slot3 = var0;
                var0 = var1.channel;
                var _closure2_slot4 = var0;
                var4 = var1.autoFocus;
                var8 = var1.hasError;
                var1 = var1.onPress;
                var _closure2_slot5 = var1;
                var1 = _closure1_slot7;
                var3 = undefined;
                var13 = var1.bind(var3)();
                var10 = var0.guild_id;
                var1 = _closure1_slot0;
                var16 = _closure1_slot2;
                var0 = 6;
                var0 = var16[var0];
                var5 = var1.bind(var3)(var0);
                var2 = var5.useStateFromStores;
                var0 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var7
                    var0 = _closure1_slot5;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var15 = var2.bind(var5)(var1, var0);
                var18 = _closure1_slot4;
                var1 = var18.useState;
                var0 = function() { // Environment: var7
                    _fun108598: for (var _fun108598_ip = 0;;) switch (_fun108598_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var4 = null;
                            var2 = var4 != var0;
                            var0 = null;
                            if (!var2) {
                                _fun108598_ip = 48;
                                continue _fun108598
                            }
                        case 18:
                            var2 = _closure2_slot1;
                            var3 = var2.type;
                            var2 = 'userMention';
                            var0 = null;
                            if (!(var2 === var3)) {
                                _fun108598_ip = 48;
                                continue _fun108598
                            }
                        case 39:
                            var1 = _closure2_slot1;
                            var0 = var1.userId;
                        case 48:
                            return var0;
                    }
                };
                var0 = var1.bind(var18)(var0);
                var17 = _closure1_slot3;
                var9 = 2;
                var0 = var17.bind(var3)(var0, var9);
                var2 = 0;
                var12 = var0[var2];
                var1 = 1;
                var0 = var0[var1];
                var _closure2_slot6 = var0;
                var0 = var18.useState;
                var5 = null;
                var0 = var0.bind(var18)(var5);
                var0 = var17.bind(var3)(var0, var9);
                var9 = var0[var2];
                var0 = var0[var1];
                var _closure2_slot7 = var0;
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var0 = 7;
                var0 = var16[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.style = var14;
                var0.option = var11;
                var0.hasError = var8;
                var8 = var5 != var9;
                if (var8) {
                    _fun108596_ip = 276;
                    continue _fun108596
                }
            case 272:
                var8 = var5 != var12;
            case 276:
                var0.selected = var8;
                var7 = function() { // Original name: onPress, environment: var7
                    _fun108599: for (var _fun108599_ip = 0;;) switch (_fun108599_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun108599_ip = 23;
                                continue _fun108599
                            }
                        case 13:
                            var1 = _closure2_slot5;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 23:
                            var2 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 8;
                            var3 = var7[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var3);
                            var3 = var4.dismissGlobalKeyboard;
                            var3 = var3.bind(var4)();
                            var3 = _closure1_slot1;
                            var1 = 9;
                            var1 = var7[var1];
                            var5 = var3.bind(var0)(var1);
                            var4 = var5.openLazy;
                            var1 = 11;
                            var1 = var7[var1];
                            var8 = var2.bind(var0)(var1);
                            var1 = 10;
                            var3 = var7[var1];
                            var1 = var7.paths;
                            var3 = var8.bind(var0)(var3, var1);
                            var1 = 12;
                            var1 = var7[var1];
                            var1 = var2.bind(var0)(var1);
                            var2 = var1.APP_LAUNCHER_USER_LIST_ACTION_SHEET_KEY;
                            var1 = {};
                            var7 = _closure2_slot0;
                            var1.option = var7;
                            var7 = _closure2_slot4;
                            var1.channel = var7;
                            var7 = function(arg0) { // Original name: onUserPress, environment: var7
                                _fun108600: for (var _fun108600_ip = 0;;) switch (_fun108600_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var0 = var0.user;
                                        var2 = 'string';
                                        var1 = typeof var0;
                                        if (!(var2 !== var1)) {
                                            _fun108600_ip = 49;
                                            continue _fun108600
                                        }
                                    case 19:
                                        var4 = _closure2_slot6;
                                        var3 = var0.id;
                                        var2 = undefined;
                                        var3 = var4.bind(var2)(var3);
                                        var1 = _closure2_slot7;
                                        var1 = var1.bind(var2)(var0);
                                        _fun108600_ip = 63;
                                        continue _fun108600;
                                    case 49:
                                        var2 = _closure2_slot6;
                                        var1 = undefined;
                                        var1 = var2.bind(var1)(var0);
                                    case 63:
                                        var2 = _closure2_slot2;
                                        var1 = {};
                                        var1.user = var0;
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                }
                            };
                            var1.onUserPress = var7;
                            var6 = _closure2_slot3;
                            var1.onActionSheetDismiss = var6;
                            var1 = var4.bind(var5)(var3, var2, var1);
                            return var0;
                    }
                };
                var0.onPress = var7;
                if (!(var5 == var9)) {
                    _fun108596_ip = 387;
                    continue _fun108596
                }
            case 296:
                var11 = _closure1_slot6;
                var8 = _closure1_slot1;
                var17 = _closure1_slot2;
                var7 = 14;
                var7 = var17[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var16 = _closure1_slot0;
                var14 = 15;
                var14 = var17[var14];
                var14 = var16.bind(var3)(var14);
                var16 = var14.UserCircleIcon;
                var14 = {
                    'size': 'sm',
                    'color': 'interactive-text-default'
                };
                var14 = var11.bind(var3)(var16, var14);
                var7.icon = var14;
                var13 = var13.iconWrapper;
                var7.wrapperStyle = var13;
                var7 = var11.bind(var3)(var8, var7);
                _fun108596_ip = 464;
                continue _fun108596;
            case 387:
                var13 = _closure1_slot6;
                var11 = _closure1_slot1;
                var16 = _closure1_slot2;
                var14 = 13;
                var8 = var16[var14];
                var11 = var11.bind(var3)(var8);
                var8 = {};
                var8.user = var9;
                var8.guildId = var10;
                var15 = !var15;
                var8.animate = var15;
                var15 = _closure1_slot0;
                var14 = var16[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.AvatarSizes;
                var14 = var14.REFRESH_MEDIUM_32;
                var8.size = var14;
                var7 = var13.bind(var3)(var11, var8);
            case 464:
                var0.leading = var7;
                if (!(var5 == var9)) {
                    _fun108596_ip = 537;
                    continue _fun108596
                }
            case 473:
                var7 = var5 != var12;
                var5 = null;
                if (!var7) {
                    _fun108596_ip = 535;
                    continue _fun108596
                }
            case 482:
                var11 = _closure1_slot6;
                var8 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 17;
                var7 = var13[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var7.children = var12;
                var5 = var11.bind(var3)(var8, var7);
            case 535:
                _fun108596_ip = 577;
                continue _fun108596;
            case 537:
                var8 = _closure1_slot6;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 16;
                var6 = var11[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.guildId = var10;
                var6.user = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 577:
                var0.selectedItemName = var5;
                var0.autoFocus = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1298, 33, 1297, 671, 566, 13965, 1582, 3237, 13973, 1307, 13973, 5409, 13746, 9055, 13970, 3895, 2]);