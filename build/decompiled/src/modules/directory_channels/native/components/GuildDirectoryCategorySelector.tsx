// modules/directory_channels/native/components/GuildDirectoryCategorySelector.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.DirectoryEntryCategories;
    var _closure1_slot8 = var6;
    var3 = var3.getHubCategories;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 7;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var9;
    var9 = 12;
    var8.paddingTop = var9;
    var3.categoriesListWrapper = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/directory_channels/native/components/GuildDirectoryCategorySelector.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        var0 = arg0;
        var6 = var0.channel;
        var _closure2_slot0 = var6;
        var1 = var0.onCategorySelected;
        var _closure2_slot1 = var1;
        var15 = var0.categoryCounts;
        var _closure2_slot2 = var15;
        var1 = var0.allEntriesCount;
        var _closure2_slot3 = var1;
        var0 = _closure1_slot12;
        var3 = undefined;
        var11 = var0.bind(var3)();
        var12 = _closure1_slot5;
        var0 = var12.useState;
        var2 = 0;
        var7 = var0.bind(var12)(var2);
        var5 = _closure1_slot4;
        var0 = 2;
        var5 = var5.bind(var3)(var7, var0);
        var8 = var5[var2];
        var0 = 1;
        var0 = var5[var0];
        var _closure2_slot4 = var0;
        var7 = var12.useCallback;
        var5 = function(arg0) { // Environment: var9
            var0 = arg0;
            var0 = var0.nativeEvent;
            var0 = var0.layout;
            var2 = var0.width;
            var1 = _closure2_slot4;
            var0 = undefined;
            var1 = var1.bind(var0)(var2);
            return var0;
        };
        var0 = new Array(0);
        var7 = var7.bind(var12)(var5, var0);
        var5 = _closure1_slot0;
        var10 = _closure1_slot3;
        var0 = 11;
        var0 = var10[var0];
        var16 = var5.bind(var3)(var0);
        var14 = var16.useStateFromStores;
        var0 = _closure1_slot7;
        var13 = new Array(1);
        var13[0] = var0;
        var0 = function() { // Environment: var9
            var2 = _closure1_slot7;
            var1 = var2.getCurrentCategoryId;
            var0 = _closure2_slot0;
            var0 = var0.id;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var14.bind(var16)(var13, var0);
        var _closure2_slot5 = var0;
        var14 = var12.useMemo;
        var6 = var6.id;
        var13 = new Array(1);
        var13[0] = var6;
        var6 = function() { // Environment: var9
            var0 = _closure2_slot0;
            var3 = var0.id;
            var4 = {};
            var0 = _closure1_slot8;
            var0 = var0.ALL;
            var4.value = var0;
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var0 = 8;
            var5 = var8[var0];
            var2 = undefined;
            var5 = var7.bind(var2)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var0 = var8[var0];
            var0 = var7.bind(var2)(var0);
            var0 = var0.t;
            var0 = var0.hEAa2a;
            var0 = var5.bind(var6)(var0);
            var4.label = var0;
            var0 = 70;
            var4.idealSize = var0;
            var0 = new Array(1);
            var0[0] = var4;
            var1 = _closure1_slot9;
            var10 = var1.bind(var2)(var3);
            var9 = 1;
            var11 = var0;
            var1 = arraySpread(var11, var10, var9);
            return var0;
        };
        var14 = var14.bind(var12)(var6, var13);
        var _closure2_slot6 = var14;
        var13 = var12.useMemo;
        var6 = new Array(3);
        var6[0] = var14;
        var6[1] = var15;
        var6[2] = var1;
        var1 = function() { // Environment: var9
            var2 = _closure2_slot6;
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                _fun91927: for (var _fun91927_ip = 0;;) switch (_fun91927_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = {};
                        var1 = var2.label;
                        var0.label = var1;
                        var1 = global;
                        var4 = var1.String;
                        var3 = var2.value;
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var0.id = var3;
                        var4 = var2.value;
                        var3 = _closure1_slot8;
                        var3 = var3.ALL;
                        if (!(var4 !== var3)) {
                            _fun91927_ip = 93;
                            continue _fun91927
                        }
                    case 60:
                        var5 = _closure2_slot2;
                        var4 = null;
                        var4 = var4 == var5;
                        var1 = undefined;
                        if (var4) {
                            _fun91927_ip = 91;
                            continue _fun91927
                        }
                    case 78:
                        var3 = _closure2_slot2;
                        var2 = var2.value;
                        var1 = var3[var2];
                    case 91:
                        _fun91927_ip = 100;
                        continue _fun91927;
                    case 93:
                        var1 = _closure2_slot3;
                    case 100:
                        var0.count = var1;
                        var1 = null;
                        var0.page = var1;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var13 = var13.bind(var12)(var1, var6);
        var6 = var12.useMemo;
        var1 = new Array(2);
        var1[0] = var14;
        var1[1] = var0;
        var0 = function() { // Environment: var9
            _fun91928: for (var _fun91928_ip = 0;;) switch (_fun91928_ip) {
                case 0:
                    var2 = _closure2_slot6;
                    var1 = var2.findIndex;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.value;
                        var0 = _closure2_slot5;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var1 = var1.bind(var2)(var0);
                    var2 = -1;
                    var0 = 0;
                    if (!(var2 !== var1)) {
                        _fun91928_ip = 42;
                        continue _fun91928
                    }
                case 39:
                    var0 = var1;
                case 42:
                    return var0;
            }
        };
        var12 = var6.bind(var12)(var0, var1);
        var0 = 12;
        var0 = var10[var0];
        var6 = var5.bind(var3)(var0);
        var1 = var6.useSegmentedControlState;
        var0 = {};
        var0.items = var13;
        var0.defaultIndex = var12;
        var9 = function(arg0) { // Original name: onSetActiveIndex, environment: var9
            _fun91930: for (var _fun91930_ip = 0;;) switch (_fun91930_ip) {
                case 0:
                    var2 = _closure2_slot6;
                    var0 = arg0;
                    var2 = var2[var0];
                    var0 = null;
                    var3 = var0 == var2;
                    var0 = undefined;
                    var5 = undefined;
                    if (var3) {
                        _fun91930_ip = 32;
                        continue _fun91930
                    }
                case 27:
                    var5 = var2.value;
                case 32:
                    var2 = _closure2_slot5;
                    if (!(var5 !== var2)) {
                        _fun91930_ip = 92;
                        continue _fun91930
                    }
                case 40:
                    var3 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var2 = 13;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.selectDirectoryCategory;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2, var5);
                    var1 = _closure2_slot1;
                    var1 = var1.bind(var0)();
                case 92:
                    return var0;
            }
        };
        var0.onSetActiveIndex = var9;
        var0.pageWidth = var8;
        var9 = var1.bind(var6)(var0);
        var0 = 9;
        var0 = var10[var0];
        var8 = var5.bind(var3)(var0);
        var1 = var8.useToken;
        var6 = _closure1_slot1;
        var0 = 7;
        var0 = var10[var0];
        var0 = var6.bind(var3)(var0);
        var0 = var0.colors;
        var0 = var0.BACKGROUND_BASE_LOW;
        var1 = var1.bind(var8)(var0);
        var8 = new Array(2);
        var8[0] = var1;
        var0 = 10;
        var0 = var10[var0];
        var0 = var6.bind(var3)(var0);
        var1 = var0.bind(var3)(var1);
        var0 = var1.alpha;
        var1 = var0.bind(var1)(var2);
        var0 = var1.hex;
        var0 = var0.bind(var1)();
        var8[1] = var0;
        var2 = _closure1_slot11;
        var1 = _closure1_slot6;
        var0 = {};
        var11 = var11.categoriesListWrapper;
        var0.style = var11;
        var0.onLayout = var7;
        var7 = _closure1_slot10;
        var4 = 14;
        var4 = var10[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.Tabs;
        var4 = {};
        var4.state = var9;
        var5 = var7.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = 15;
        var5 = var10[var5];
        var6 = var6.bind(var3)(var5);
        var5 = {};
        var5.state = var9;
        var5.colors = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 8884, 8877, 33, 1297, 671, 1234, 3110, 669, 566, 7758, 8888, 7764, 11388, 2]);