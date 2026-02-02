// modules/app_launcher/native/options/channel/AppLauncherChannelOption.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/options/channel/AppLauncherChannelOption.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun108229: for (var _fun108229_ip = 0;;) switch (_fun108229_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.style;
                var8 = var0.option;
                var _closure2_slot0 = var8;
                var1 = var0.initialValue;
                var _closure2_slot1 = var1;
                var13 = var0.onChannelPress;
                var _closure2_slot2 = var13;
                var1 = var0.onActionSheetDismiss;
                var _closure2_slot3 = var1;
                var1 = var0.channel;
                var _closure2_slot4 = var1;
                var4 = var0.autoFocus;
                var7 = var0.hasError;
                var0 = var0.onPress;
                var _closure2_slot5 = var0;
                var12 = _closure1_slot4;
                var1 = var12.useState;
                var0 = function() { // Environment: var5
                    _fun108230: for (var _fun108230_ip = 0;;) switch (_fun108230_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var4 = null;
                            var2 = var4 != var0;
                            var0 = null;
                            if (!var2) {
                                _fun108230_ip = 46;
                                continue _fun108230
                            }
                        case 18:
                            var2 = _closure2_slot1;
                            var3 = var2.type;
                            var2 = 'channelMention';
                            var0 = null;
                            if (!(var2 === var3)) {
                                _fun108230_ip = 46;
                                continue _fun108230
                            }
                        case 37:
                            var1 = _closure2_slot1;
                            var0 = var1.channelId;
                        case 46:
                            return var0;
                    }
                };
                var2 = var1.bind(var12)(var0);
                var1 = _closure1_slot3;
                var3 = undefined;
                var0 = 2;
                var2 = var1.bind(var3)(var2, var0);
                var0 = 0;
                var0 = var2[var0];
                var _closure2_slot6 = var0;
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot7 = var1;
                var2 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 4;
                var1 = var11[var1];
                var15 = var2.bind(var3)(var1);
                var14 = var15.useStateFromStores;
                var1 = _closure1_slot5;
                var9 = new Array(1);
                var9[0] = var1;
                var2 = new Array(1);
                var2[0] = var0;
                var1 = function() { // Environment: var5
                    var2 = _closure1_slot5;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot6;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var14.bind(var15)(var9, var1, var2);
                var _closure2_slot8 = var9;
                var2 = var12.useEffect;
                var1 = new Array(3);
                var1[0] = var13;
                var1[1] = var0;
                var1[2] = var9;
                var0 = function() { // Environment: var5
                    _fun108232: for (var _fun108232_ip = 0;;) switch (_fun108232_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun108232_ip = 24;
                                continue _fun108232
                            }
                        case 16:
                            var2 = _closure2_slot8;
                            var1 = var3 == var2;
                        case 24:
                            if (!var1) {
                                _fun108232_ip = 53;
                                continue _fun108232
                            }
                        case 27:
                            var1 = _closure2_slot7;
                            var2 = undefined;
                            var1 = var1.bind(var2)(var3);
                            var1 = _closure2_slot2;
                            var0 = {};
                            var0.channel = var3;
                            var0 = var1.bind(var2)(var0);
                        case 53:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var12)(var0, var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var0 = 5;
                var0 = var11[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.style = var10;
                var0.option = var8;
                var0.hasError = var7;
                var7 = null;
                var8 = var7 != var9;
                var0.selected = var8;
                var8 = var7 != var9;
                var7 = undefined;
                if (!var8) {
                    _fun108229_ip = 298;
                    continue _fun108229
                }
            case 293:
                var7 = var9.name;
            case 298:
                var0.selectedItemName = var7;
                var8 = _closure1_slot6;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 6;
                var6 = var10[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.ChannelIcon;
                var6 = {};
                var6.channel = var9;
                var6 = var8.bind(var3)(var7, var6);
                var0.leading = var6;
                var5 = function() {
                    _fun108233: for (var _fun108233_ip = 0;;) switch (_fun108233_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun108233_ip = 23;
                                continue _fun108233
                            }
                        case 13:
                            var1 = _closure2_slot5;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 23:
                            var3 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var0 = 7;
                            var2 = var7[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.openLazy;
                            var2 = _closure1_slot0;
                            var1 = 9;
                            var1 = var7[var1];
                            var8 = var2.bind(var0)(var1);
                            var1 = 8;
                            var3 = var7[var1];
                            var1 = var7.paths;
                            var3 = var8.bind(var0)(var3, var1);
                            var1 = 6;
                            var1 = var7[var1];
                            var1 = var2.bind(var0)(var1);
                            var2 = var1.APP_LAUNCHER_CHANNEL_LIST_ACTION_SHEET_KEY;
                            var1 = {};
                            var7 = _closure2_slot0;
                            var1.option = var7;
                            var7 = _closure2_slot4;
                            var1.channel = var7;
                            var7 = function arg0() {
                                _fun108234: for (var _fun108234_ip = 0;;) switch (_fun108234_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var3 = var0.channel;
                                        var4 = _closure2_slot7;
                                        var0 = null;
                                        var5 = var0 == var3;
                                        var0 = undefined;
                                        var2 = undefined;
                                        if (var5) {
                                            _fun108234_ip = 33;
                                            continue _fun108234
                                        }
                                    case 28:
                                        var2 = var3.id;
                                    case 33:
                                        var2 = var4.bind(var0)(var2);
                                        var2 = _closure2_slot2;
                                        var1 = {};
                                        var1.channel = var3;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                }
                            };
                            var1.onChannelPress = var7;
                            var6 = _closure2_slot3;
                            var1.onActionSheetDismiss = var6;
                            var1 = var4.bind(var5)(var3, var2, var1);
                            return var0;
                    }
                };
                var0.onPress = var5;
                var0.autoFocus = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1372, 33, 566, 13923, 13703, 3239, 13703, 1307, 2]);