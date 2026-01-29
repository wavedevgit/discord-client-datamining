// modules/guilds_bar/native/GuildsBar.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot4 = var7;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var7 = var8.create;
    var3 = {};
    var9 = {
        'position': 'relative',
        'overflow': 'visible',
        'flex': 1
    };
    var3.wrapper = var9;
    var9 = {
        'opacity': 0.5,
        'position': 'absolute',
        'left': 0,
        'width': 72,
        'height': 40,
        'backgroundColor': 'black',
        'zIndex': 100,
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center',
        'color': 'white'
    };
    var3.toggleWrapper = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: GuildsBar, environment: var1
        _fun101100: for (var _fun101100_ip = 0;;) switch (_fun101100_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.enableHome;
                var3 = undefined;
                if (!(var12 === var3)) {
                    _fun101100_ip = 19;
                    continue _fun101100
                }
            case 17:
                var12 = false;
            case 19:
                var _closure2_slot0 = var3;
                var11 = _closure1_slot1;
                var20 = _closure1_slot2;
                var1 = 3;
                var1 = var20[var1];
                var1 = var11.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var16 = var1.scrollPosition;
                var6 = var1.gesture;
                var14 = var1.scrollerRef;
                var18 = var1.fastListRef;
                _closure2_slot0 = var18;
                var15 = var1.persistantKeys;
                var17 = var1.onFastListScroll;
                var1 = 4;
                var1 = var20[var1];
                var1 = var11.bind(var3)(var1);
                var1 = var1.bind(var3)(var18);
                var19 = var1.listProps;
                var13 = var1.listDataProps;
                var4 = _closure1_slot3;
                var2 = var4.useEffect;
                var1 = new Array(1);
                var1[0] = var18;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.registerGuildVisibilityMethod;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot4;
                var4 = 6;
                var0 = var20[var4];
                var1 = var11.bind(var3)(var0);
                var0 = {};
                var5 = _closure1_slot0;
                var4 = var20[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.Profiles;
                var4 = var4.Guilds;
                var0.profile = var4;
                var4 = 7;
                var4 = var20[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.GestureDetector;
                var4 = {};
                var4.gesture = var6;
                var8 = _closure1_slot5;
                var6 = 8;
                var6 = var20[var6];
                var7 = var11.bind(var3)(var6);
                var6 = {
                    'style': null,
                    'collapsable': false,
                    'nativeID': 'guilds-bar-view'
                };
                var9 = _closure1_slot6;
                var9 = var9.wrapper;
                var6.style = var9;
                var9 = 9;
                var9 = var20[var9];
                var11 = var11.bind(var3)(var9);
                var9 = {};
                var22 = var9;
                var21 = var19;
                var19 = copyDataProperties(var22, var21);
                var22 = var9;
                var21 = var13;
                var13 = copyDataProperties(var22, var21);
                var13 = 'ref';
                var9[var13] = var18;
                var13 = 'manualRef';
                var9[var13] = var14;
                var14 = true;
                var13 = 'disableContentWrappers';
                var9[var13] = var14;
                var13 = 'onScroll';
                var9[var13] = var17;
                var13 = 'scrollPosValue';
                var9[var13] = var16;
                var16 = 'sticky-mount';
                var13 = 'stickySectionsVariant';
                var9[var13] = var16;
                var13 = 'optimizeListItemRender';
                var9[var13] = var14;
                var13 = 'persistantKeys';
                var9[var13] = var15;
                var13 = 'disableRecyclingOnFullCompute';
                var9[var13] = var14;
                var13 = undefined;
                if (!var12) {
                    _fun101100_ip = 410;
                    continue _fun101100
                }
            case 396:
                var12 = {};
                var14 = 'visible';
                var12.overflow = var14;
                var13 = var12;
            case 410:
                var12 = 'style';
                var9[var12] = var13;
                var13 = 'guilds-bar-fast-list';
                var12 = 'nativeID';
                var9[var12] = var13;
                var11 = var2.bind(var3)(var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var12 = _closure1_slot4;
                var11 = _closure1_slot1;
                var13 = _closure1_slot2;
                var10 = 10;
                var10 = var13[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guilds_bar/native/GuildsBar.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 13123, 13134, 13193, 11555, 4917, 6415, 6414, 13194, 2]);