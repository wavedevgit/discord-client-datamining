// modules/hang_status/components/native/HangStatusFavoriteActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MAX_FAVORITES;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.HANG_STATUS_FAVORITE_ACTION_SHEET_KEY;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/hang_status/components/native/HangStatusFavoriteActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun111097: for (var _fun111097_ip = 0;;) switch (_fun111097_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.channel;
                var _closure2_slot0 = var1;
                var5 = var2.status;
                var _closure2_slot1 = var5;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 5;
                var2 = var8[var4];
                var3 = undefined;
                var12 = var7.bind(var3)(var2);
                var11 = var12.useStateFromStores;
                var2 = _closure1_slot4;
                var9 = new Array(1);
                var9[0] = var2;
                var6 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getFavoritedStatuses;
                    var1 = var1.bind(var2)();
                    var1 = var1.length;
                    var0 = _closure1_slot5;
                    var0 = var1 >= var0;
                    return var0;
                };
                var6 = var11.bind(var12)(var9, var6);
                var _closure2_slot2 = var6;
                var4 = var8[var4];
                var8 = var7.bind(var3)(var4);
                var7 = var8.useStateFromStores;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.isFavorited;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var7.bind(var8)(var4, var2);
                var _closure2_slot3 = var9;
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var7 = null;
                var8 = var7 == var1;
                var7 = undefined;
                if (var8) {
                    _fun111097_ip = 146;
                    continue _fun111097
                }
            case 141:
                var7 = var1.id;
            case 146:
                var1 = new Array(4);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var9;
                var1[3] = var5;
                var0 = function() { // Environment: var0
                    _fun111100: for (var _fun111100_ip = 0;;) switch (_fun111100_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 6;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = _closure2_slot1;
                            var7 = var3.bind(var0)(var2);
                            var2 = _closure2_slot2;
                            if (!var2) {
                                _fun111100_ip = 51;
                                continue _fun111100
                            }
                        case 44:
                            var3 = _closure2_slot3;
                            var2 = !var3;
                        case 51:
                            if (var2) {
                                _fun111100_ip = 263;
                                continue _fun111100
                            }
                        case 57:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 7;
                            var2 = var4[var2];
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.updateFavoriteHangStatus;
                            var2 = _closure2_slot1;
                            if (var7) {
                                _fun111100_ip = 97;
                                continue _fun111100
                            }
                        case 90:
                            var3 = var2.status;
                            _fun111100_ip = 100;
                            continue _fun111100;
                        case 97:
                            var3 = var2;
                        case 100:
                            var9 = null;
                            var2 = null;
                            if (var7) {
                                _fun111100_ip = 117;
                                continue _fun111100
                            }
                        case 107:
                            var7 = _closure2_slot1;
                            var2 = var7.emoji;
                        case 117:
                            var2 = var4.bind(var5)(var3, var2);
                            var8 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var2 = 8;
                            var2 = var10[var2];
                            var5 = var8.bind(var0)(var2);
                            var4 = var5.track;
                            var2 = _closure1_slot7;
                            var3 = var2.HANG_STATUS_FAVORITE_CLICKED;
                            var2 = {};
                            var7 = 9;
                            var7 = var10[var7];
                            var8 = var8.bind(var0)(var7);
                            var7 = _closure2_slot0;
                            var9 = var9 == var7;
                            var7 = undefined;
                            if (var9) {
                                _fun111100_ip = 194;
                                continue _fun111100
                            }
                        case 185:
                            var9 = _closure2_slot0;
                            var7 = var9.id;
                        case 194:
                            var11 = var8.bind(var0)(var7);
                            var12 = var2;
                            var7 = copyDataProperties(var12, var11);
                            var6 = _closure2_slot3;
                            var7 = !var6;
                            var6 = 'favorited';
                            var2[var6] = var7;
                            var2 = var4.bind(var5)(var3, var2);
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 10;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.hideActionSheet;
                            var1 = _closure1_slot6;
                            var1 = var2.bind(var3)(var1);
                        case 263:
                            return var0;
                    }
                };
                var8 = var2.bind(var4)(var0, var1);
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                if (var9) {
                    _fun111097_ip = 210;
                    continue _fun111097
                }
            case 190:
                var0 = 12;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var12 = var0.StarIcon;
                _fun111097_ip = 228;
                continue _fun111097;
            case 210:
                var0 = 11;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var12 = var0.StarOutlineIcon;
            case 228:
                var2 = _closure1_slot8;
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 13;
                var0 = var11[var0];
                var0 = var7.bind(var3)(var0);
                var1 = var0.ActionSheet;
                var0 = {};
                var6 = 14;
                var4 = var11[var6];
                var4 = var7.bind(var3)(var4);
                var4 = var4.ActionSheetRow;
                var5 = var4.Group;
                var4 = {};
                var6 = var11[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.ActionSheetRow;
                var6 = {};
                var11 = {};
                var11 = var2.bind(var3)(var12, var11);
                var6.icon = var11;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 15;
                var11 = var14[var10];
                var11 = var13.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var3)(var10);
                var10 = var10.t;
                if (var9) {
                    _fun111097_ip = 375;
                    continue _fun111097
                }
            case 362:
                var9 = var10["R3BPH+"];
                var9 = var11.bind(var12)(var9);
                _fun111097_ip = 388;
                continue _fun111097;
            case 375:
                var10 = var10.aSMptF;
                var9 = var11.bind(var12)(var10);
            case 388:
                var6.label = var9;
                var6.onPress = var8;
                var6 = var2.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3611, 3612, 660, 33, 566, 3613, 14291, 795, 11927, 3278, 8580, 8578, 5208, 7735, 1234, 2]);