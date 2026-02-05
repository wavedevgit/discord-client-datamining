// modules/forums/native/Placeholder.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function() {
        var1 = _closure1_slot7;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var1 = global;
        var5 = var1.Math;
        var2 = var5.random;
        var5 = var2.bind(var5)();
        var2 = 0.6;
        var8 = var2 * var5;
        var5 = var1.Math;
        var2 = var5.floor;
        var6 = var1.Math;
        var1 = var6.random;
        var6 = var1.bind(var6)();
        var1 = 50;
        var6 = var1 * var6;
        var1 = 110;
        var1 = var1 + var6;
        var6 = var2.bind(var5)(var1);
        var2 = _closure1_slot6;
        var1 = _closure1_slot4;
        var0 = {};
        var5 = var4.postPlaceholder;
        var4 = new Array(2);
        var4[0] = var5;
        var5 = {};
        var7 = 0.4;
        var7 = var7 + var8;
        var5.opacity = var7;
        var5.height = var6;
        var4[1] = var5;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot10 = var0;
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot4 = var7;
    var10 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flex': 1,
        'overflow': 'hidden',
        'flexDirection': 'column'
    };
    var3.container = var9;
    var9 = {};
    var14 = var10.absoluteFillObject;
    var15 = var9;
    var10 = copyDataProperties(var15, var14);
    var10 = 12;
    var12 = 'paddingHorizontal';
    var9[var12] = var10;
    var3.fill = var9;
    var9 = {};
    var9.marginTop = var10;
    var10 = 5;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.md;
    var9.borderRadius = var10;
    var10 = 6;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.DARK_PRIMARY_700_LIGHT_PRIMARY_260;
    var9.backgroundColor = var10;
    var3.postPlaceholder = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot7 = var3;
    var3 = {
        'start': 0.33,
        'end': 1
    };
    var7 = {};
    var8 = 1300;
    var7.duration = var8;
    var8 = 7;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.Easing;
    var8 = var8.ease;
    var7.easing = var8;
    var3.config = var7;
    var _closure1_slot8 = var3;
    var3 = {};
    var7 = 'function PlaceholderTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}';
    var3.code = var7;
    var _closure1_slot9 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun91475: for (var _fun91475_ip = 0;;) switch (_fun91475_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.rows;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun91475_ip = 20;
                    continue _fun91475
                }
            case 17:
                var10 = 20;
            case 20:
                var9 = var0.style;
                var1 = var0.placeholderRow;
                if (!(var1 === var3)) {
                    _fun91475_ip = 56;
                    continue _fun91475
                }
            case 37:
                var6 = _closure1_slot6;
                var4 = _closure1_slot10;
                var2 = {};
                var1 = var6.bind(var3)(var4, var2);
            case 56:
                var _closure2_slot0 = var1;
                var8 = var0.fillScreen;
                if (!(var8 === var3)) {
                    _fun91475_ip = 72;
                    continue _fun91475
                }
            case 70:
                var8 = true;
            case 72:
                var _closure2_slot1 = var3;
                var1 = _closure1_slot7;
                var7 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var6 = 7;
                var1 = var1[var6];
                var4 = var2.bind(var3)(var1);
                var2 = var4.useSharedValue;
                var1 = _closure1_slot5;
                var11 = var1.useReducedMotion;
                var1 = 0;
                if (!var11) {
                    _fun91475_ip = 131;
                    continue _fun91475
                }
            case 128:
                var1 = 1;
            case 131:
                var13 = var2.bind(var4)(var1);
                _closure2_slot1 = var13;
                var1 = _closure1_slot5;
                var1 = var1.useReducedMotion;
                if (var1) {
                    _fun91475_ip = 292;
                    continue _fun91475
                }
            case 156:
                var2 = var13.set;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var1 = var18[var6];
                var14 = var17.bind(var3)(var1);
                var12 = var14.withRepeat;
                var1 = var18[var6];
                var15 = var17.bind(var3)(var1);
                var11 = var15.withSequence;
                var16 = 8;
                var1 = var18[var16];
                var21 = var17.bind(var3)(var1);
                var20 = var21.withTiming;
                var1 = _closure1_slot8;
                var19 = var1.start;
                var4 = var1.config;
                var4 = var20.bind(var21)(var19, var4);
                var16 = var18[var16];
                var18 = var17.bind(var3)(var16);
                var17 = var18.withTiming;
                var16 = var1.end;
                var1 = var1.config;
                var1 = var17.bind(var18)(var16, var1);
                var11 = var11.bind(var15)(var4, var1);
                var4 = -1;
                var1 = true;
                var1 = var12.bind(var14)(var11, var4, var1);
                var1 = var2.bind(var13)(var1);
            case 292:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = var1[var6];
                var11 = var4.bind(var3)(var2);
                var4 = var11.useAnimatedStyle;
                var2 = function() {
                    var0 = {};
                    var2 = _closure2_slot1;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0.opacity = var1;
                    return var0;
                };
                var12 = {};
                var12.opacity = var13;
                var2.__closure = var12;
                var12 = 6178625855262.0;
                var2.__workletHash = var12;
                var12 = _closure1_slot9;
                var2.__initData = var12;
                var11 = var4.bind(var11)(var2);
                var4 = _closure1_slot6;
                var2 = _closure1_slot1;
                var1 = var1[var6];
                var1 = var2.bind(var3)(var1);
                var2 = var1.View;
                var1 = {};
                var6 = new Array(2);
                var6[0] = var11;
                var6[1] = var9;
                var1.style = var6;
                var6 = global;
                var6 = var6.Array;
                var9 = var6.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var6
                    }
                });
                var25 = var9;
                var24 = var10;
                var6 = new var25[var6](var24, var23);
                var9 = var6 instanceof Object ? var6 : var9;
                var6 = var9.fill;
                var9 = var6.bind(var9)(var3);
                var6 = var9.map;
                var5 = function(arg0, arg1) { // Environment: var5
                    var4 = _closure1_slot6;
                    var0 = _closure1_slot3;
                    var3 = var0.Fragment;
                    var2 = {};
                    var0 = _closure2_slot0;
                    var2.children = var0;
                    var1 = undefined;
                    var0 = arg1;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var5 = var6.bind(var9)(var5);
                var1.children = var5;
                var4 = var4.bind(var3)(var2, var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var6 = var7.container;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = undefined;
                if (!var8) {
                    _fun91475_ip = 508;
                    continue _fun91475
                }
            case 502:
                var6 = var7.fill;
            case 508:
                var5[1] = var6;
                var0.style = var5;
                var5 = 'none';
                var0.pointerEvents = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/Placeholder.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 33, 1297, 671, 4874, 3720, 4097, 2]);