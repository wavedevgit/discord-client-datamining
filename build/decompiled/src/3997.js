// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var6;
    var0 = ['style'];
    var _closure1_slot3 = var0;
    var0 = ['style'];
    var _closure1_slot4 = var0;
    var0 = ['style'];
    var _closure1_slot5 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 1;
    var3 = var6[var3];
    var7 = var5.bind(var0)(var3);
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.Image;
    var _closure1_slot7 = var8;
    var8 = var3.Platform;
    var8 = var3.StyleSheet;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var4 = var7.forwardRef;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun37163: for (var _fun37163_ip = 0;;) switch (_fun37163_ip) {
            case 0:
                var7 = arg0;
                var3 = _closure1_slot8;
                var4 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 4;
                var1 = var10[var1];
                var2 = undefined;
                var1 = var4.bind(var2)(var1);
                var4 = global;
                var6 = var4.Object;
                var5 = var6.assign;
                var4 = {};
                var8 = arg1;
                var4.ref = var8;
                var9 = _closure1_slot0;
                var8 = 5;
                var8 = var10[var8];
                var8 = var9.bind(var2)(var8);
                var8 = var8.EDGE_TO_EDGE;
                var9 = !var8;
                var8 = !var9;
                if (!var9) {
                    _fun37163_ip = 91;
                    continue _fun37163
                }
            case 85:
                var8 = var7.topInsetEnabled;
            case 91:
                var4.topInsetEnabled = var8;
                var0 = _closure1_slot9;
                var0 = var0.headerConfig;
                var4.style = var0;
                var0 = 'box-none';
                var4.pointerEvents = var0;
                var0 = {};
                var0 = var5.bind(var6)(var0, var7, var4);
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 'ScreenStackHeaderConfig';
    var3.displayName = var4;
    var7 = var8.create;
    var4 = {};
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var4.headerSubview = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
        'flexShrink': 1
    };
    var4.headerSubviewCenter = var9;
    var9 = {
        'position': 'absolute',
        'width': '100%',
        'flexDirection': 'row',
        'justifyContent': 'space-between'
    };
    var9.alignItems = var0;
    var4.headerConfig = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var2.ScreenStackHeaderSubview = var4;
    var2.ScreenStackHeaderConfig = var3;
    var3 = function(arg0) { // Original name: ScreenStackHeaderBackButtonImage, environment: var1
        var3 = _closure1_slot8;
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 6;
        var0 = var2[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var5 = 'back';
        var0.type = var5;
        var5 = _closure1_slot9;
        var5 = var5.headerSubview;
        var0.style = var5;
        var5 = _closure1_slot7;
        var4 = global;
        var8 = var4.Object;
        var7 = var8.assign;
        var6 = {
            'resizeMode': 'center',
            'fadeDuration': 0
        };
        var4 = arg0;
        var4 = var7.bind(var8)(var6, var4);
        var4 = var3.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.ScreenStackHeaderBackButtonImage = var3;
    var3 = function(arg0) { // Original name: ScreenStackHeaderRightView, environment: var1
        var4 = arg0;
        var8 = var4.style;
        var2 = _closure1_slot6;
        var1 = _closure1_slot3;
        var3 = undefined;
        var7 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot8;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 6;
        var1 = var5[var1];
        var1 = var4.bind(var3)(var1);
        var4 = global;
        var6 = var4.Object;
        var5 = var6.assign;
        var4 = {};
        var9 = 'right';
        var4.type = var9;
        var0 = _closure1_slot9;
        var9 = var0.headerSubview;
        var0 = new Array(2);
        var0[0] = var9;
        var0[1] = var8;
        var4.style = var0;
        var0 = {};
        var0 = var5.bind(var6)(var0, var7, var4);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.ScreenStackHeaderRightView = var3;
    var3 = function(arg0) { // Original name: ScreenStackHeaderLeftView, environment: var1
        var4 = arg0;
        var8 = var4.style;
        var2 = _closure1_slot6;
        var1 = _closure1_slot4;
        var3 = undefined;
        var7 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot8;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 6;
        var1 = var5[var1];
        var1 = var4.bind(var3)(var1);
        var4 = global;
        var6 = var4.Object;
        var5 = var6.assign;
        var4 = {};
        var9 = 'left';
        var4.type = var9;
        var0 = _closure1_slot9;
        var9 = var0.headerSubview;
        var0 = new Array(2);
        var0[0] = var9;
        var0[1] = var8;
        var4.style = var0;
        var0 = {};
        var0 = var5.bind(var6)(var0, var7, var4);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.ScreenStackHeaderLeftView = var3;
    var3 = function(arg0) { // Original name: ScreenStackHeaderCenterView, environment: var1
        var4 = arg0;
        var8 = var4.style;
        var2 = _closure1_slot6;
        var1 = _closure1_slot5;
        var3 = undefined;
        var7 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot8;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 6;
        var1 = var5[var1];
        var1 = var4.bind(var3)(var1);
        var4 = global;
        var6 = var4.Object;
        var5 = var6.assign;
        var4 = {};
        var9 = 'center';
        var4.type = var9;
        var0 = _closure1_slot9;
        var9 = var0.headerSubviewCenter;
        var0 = new Array(2);
        var0[0] = var9;
        var0[1] = var8;
        var4.style = var0;
        var0 = {};
        var0 = var5.bind(var6)(var0, var7, var4);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.ScreenStackHeaderCenterView = var3;
    var1 = function(arg0) { // Original name: ScreenStackHeaderSearchBarView, environment: var1
        var3 = _closure1_slot8;
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var4 = global;
        var7 = var4.Object;
        var6 = var7.assign;
        var5 = {};
        var4 = 'searchBar';
        var5.type = var4;
        var0 = _closure1_slot9;
        var0 = var0.headerSubview;
        var5.style = var0;
        var4 = {};
        var0 = arg0;
        var0 = var6.bind(var7)(var4, var0, var5);
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.ScreenStackHeaderSearchBarView = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 27, 33, 3998, 3996, 3999]);