// modules/checkpoint/native/components/CheckpointPressable.tsx
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
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Pressable;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/checkpoint/native/components/CheckpointPressable.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: CheckpointPressable, environment: var1
        var2 = arg0;
        var0 = var2.muteSound;
        var _closure2_slot0 = var0;
        var0 = var2.children;
        var _closure2_slot1 = var0;
        var0 = var2.onPress;
        var _closure2_slot2 = var0;
        var1 = {
            'muteSound': 0,
            'children': 0,
            'onPress': 0
        };
        var10 = null;
        var11 = var1;
        var0 = silentSetPrototypeOf(var11, var10);
        var11 = {};
        var10 = var2;
        var9 = var1;
        var5 = copyDataProperties(var11, var10, var9);
        var8 = _closure1_slot3;
        var6 = var8.useContext;
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 3;
        var1 = var7[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var1 = var1.CheckpointColorContext;
        var1 = var6.bind(var8)(var1);
        var6 = var1.secondaryColor;
        var1 = 4;
        var1 = var7[var1];
        var2 = var2.bind(var3)(var1);
        var1 = var2.useToken;
        var1 = var1.bind(var2)(var6);
        var _closure2_slot3 = var1;
        var6 = _closure1_slot1;
        var1 = 5;
        var1 = var7[var1];
        var2 = var6.bind(var3)(var1);
        var1 = 6;
        var1 = var7[var1];
        var1 = var6.bind(var3)(var1);
        var1 = var2.bind(var3)(var1);
        var _closure2_slot4 = var1;
        var2 = _closure1_slot5;
        var1 = _closure1_slot4;
        var0 = {};
        var6 = function(arg0) { // Original name: onPress, environment: var4
            _fun86506: for (var _fun86506_ip = 0;;) switch (_fun86506_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    if (var1) {
                        _fun86506_ip = 20;
                        continue _fun86506
                    }
                case 10:
                    var2 = _closure2_slot4;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                case 20:
                    var2 = _closure2_slot2;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun86506_ip = 44;
                        continue _fun86506
                    }
                case 30:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                case 44:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.onPress = var6;
        var11 = var0;
        var10 = var5;
        var6 = copyDataProperties(var11, var10);
        var5 = var5.style;
        var6 = new Array(1);
        var6[0] = var5;
        var5 = 'style';
        var0[var5] = var6;
        var5 = function(arg0) { // Original name: children, environment: var4
            _fun86507: for (var _fun86507_ip = 0;;) switch (_fun86507_ip) {
                case 0:
                    var0 = arg0;
                    var4 = var0.pressed;
                    var3 = _closure1_slot5;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    if (!var4) {
                        _fun86507_ip = 114;
                        continue _fun86507
                    }
                case 43:
                    var5 = {
                        'transform': null,
                        'shadowOpacity': 0,
                        'borderBottomColor': null,
                        'borderRightColor': null,
                        'borderBottomWidth': 2,
                        'borderRightWidth': 2
                    };
                    var7 = {};
                    var8 = 3;
                    var7.translateY = var8;
                    var6 = new Array(2);
                    var6[0] = var7;
                    var7 = {};
                    var7.translateX = var8;
                    var6[1] = var7;
                    var5.transform = var6;
                    var6 = _closure2_slot3;
                    var5.borderBottomColor = var6;
                    var5.borderRightColor = var6;
                    var4 = var5;
                case 114:
                    var0.style = var4;
                    var4 = _closure2_slot1;
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
            }
        };
        var4 = 'children';
        var0[var4] = var5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 11136, 3110, 11146, 11147, 11148, 2]);