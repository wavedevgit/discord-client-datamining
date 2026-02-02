// modules/main_tabs_v2/native/sidebar/details/screens/ThreadsScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        _fun105916: for (var _fun105916_ip = 0;;) switch (_fun105916_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.style;
                var10 = var1.channel;
                var _closure2_slot0 = var10;
                var1 = _closure1_slot9;
                var3 = undefined;
                var4 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 8;
                var1 = var13[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useCanStartThread;
                var12 = var1.bind(var2)(var10);
                var5 = _closure1_slot1;
                var1 = 9;
                var1 = var13[var1];
                var2 = var5.bind(var3)(var1);
                var1 = {};
                var7 = true;
                var1.includeKeyboardHeight = var7;
                var1 = var2.bind(var3)(var1);
                var9 = var1.insets;
                var11 = _closure1_slot3;
                var7 = var11.useCallback;
                var2 = new Array(1);
                var2[0] = var10;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.navigateToThreadCreation;
                    var2 = _closure2_slot0;
                    var1 = 'Thread Browser Empty State';
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var11 = var7.bind(var11)(var1, var2);
                var7 = _closure1_slot3;
                var2 = var7.useCallback;
                var1 = function(arg0) { // Environment: var0
                    _fun105918: for (var _fun105918_ip = 0;;) switch (_fun105918_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var1 = var2.getChannel;
                            var0 = arg0;
                            var3 = var1.bind(var2)(var0);
                            var0 = null;
                            if (!(var0 != var3)) {
                                _fun105918_ip = 76;
                                continue _fun105918
                            }
                        case 26:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.transitionToThread;
                            var0 = {};
                            var4 = _closure1_slot7;
                            var4 = var4.BROWSER;
                            var0.source = var4;
                            var0 = var1.bind(var2)(var3, var0);
                        case 76:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = new Array(0);
                var7 = var2.bind(var7)(var1, var0);
                var2 = _closure1_slot8;
                var1 = _closure1_slot4;
                var0 = {};
                var14 = var4.container;
                var4 = new Array(2);
                var4[0] = var14;
                var4[1] = var6;
                var0.style = var4;
                var6 = _closure1_slot8;
                var4 = 12;
                var4 = var13[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.channel = var10;
                var10 = undefined;
                if (!var12) {
                    _fun105916_ip = 216;
                    continue _fun105916
                }
            case 213:
                var10 = var11;
            case 216:
                var4.onCreateThreadPress = var10;
                var4.onThreadPress = var7;
                var7 = {};
                var9 = var9.bottom;
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 7;
                var8 = var11[var8];
                var8 = var10.bind(var3)(var8);
                var8 = var8.spacing;
                var8 = var8.PX_16;
                var8 = var9 + var8;
                var7.paddingBottom = var8;
                var8 = 16;
                var7.paddingHorizontal = var8;
                var4.contentContainerStyle = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = arg3;
    var0 = undefined;
    var7 = var1.bind(var0)(var4);
    var _closure1_slot3 = var7;
    var10 = 1;
    var1 = var6[var10];
    var1 = var5.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.SearchTypes;
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.OpenThreadAnalyticsLocations;
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var6[var1];
    var8 = var5.bind(var0)(var1);
    var4 = var8.createStyles;
    var1 = {};
    var9 = {};
    var9.flex = var10;
    var1.container = var9;
    var9 = {};
    var10 = 7;
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var10;
    var1.screen = var9;
    var1 = var4.bind(var8)(var1);
    var _closure1_slot9 = var1;
    var4 = var7.memo;
    var1 = function(arg0) { // Environment: var3
        _fun105919: for (var _fun105919_ip = 0;;) switch (_fun105919_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.searchContext;
                var4 = undefined;
                var _closure2_slot0 = var4;
                var5 = var3.type;
                var2 = _closure1_slot6;
                var2 = var2.CHANNEL;
                if (!(var5 !== var2)) {
                    _fun105919_ip = 60;
                    continue _fun105919
                }
            case 39:
                var6 = var3.type;
                var2 = _closure1_slot6;
                var5 = var2.GUILD_CHANNEL;
                var2 = null;
                if (!(var6 === var5)) {
                    _fun105919_ip = 65;
                    continue _fun105919
                }
            case 60:
                var2 = var3.channelId;
            case 65:
                _closure2_slot0 = var2;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 13;
                var2 = var5[var2];
                var5 = var3.bind(var4)(var2);
                var3 = var5.useStateFromStores;
                var6 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var3.bind(var5)(var2, var0);
                var0 = null;
                var2 = var0 == var5;
                if (var2) {
                    _fun105919_ip = 148;
                    continue _fun105919
                }
            case 128:
                var3 = _closure1_slot8;
                var2 = _closure1_slot10;
                var1 = {};
                var1.channel = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 148:
                return var0;
        }
    };
    var1 = var4.bind(var7)(var1);
    var4 = var7.memo;
    var3 = function() { // Environment: var3
        _fun105921: for (var _fun105921_ip = 0;;) switch (_fun105921_ip) {
            case 0:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 14;
                var2 = var5[var2];
                var4 = undefined;
                var6 = var3.bind(var4)(var2);
                var2 = var6.useRoute;
                var2 = var2.bind(var6)();
                var2 = var2.params;
                var2 = var2.channelId;
                var _closure2_slot0 = var2;
                var2 = 13;
                var2 = var5[var2];
                var5 = var3.bind(var4)(var2);
                var3 = var5.useStateFromStores;
                var6 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var3.bind(var5)(var2, var0);
                var0 = _closure1_slot9;
                var6 = var0.bind(var4)();
                var0 = null;
                var2 = var0 == var5;
                if (var2) {
                    _fun105921_ip = 141;
                    continue _fun105921
                }
            case 111:
                var3 = _closure1_slot8;
                var2 = _closure1_slot10;
                var1 = {};
                var6 = var6.screen;
                var1.style = var6;
                var1.channel = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 141:
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/sidebar/details/screens/ThreadsScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.SearchTabsThreadScreen = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 660, 1233, 33, 1297, 671, 6661, 4858, 9519, 3904, 13763, 632, 1470, 2]);