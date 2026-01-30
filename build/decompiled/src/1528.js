// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 0;
    var4 = var3[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot3 = var3;
    var1 = function(arg0) { // Original name: useOnAction, environment: var1
        var2 = arg0;
        var12 = var2.router;
        var _closure2_slot0 = var12;
        var9 = var2.getState;
        var _closure2_slot1 = var9;
        var0 = var2.setState;
        var _closure2_slot2 = var0;
        var16 = var2.key;
        var _closure2_slot3 = var16;
        var17 = var2.actionListeners;
        var _closure2_slot4 = var17;
        var7 = var2.beforeRemoveListeners;
        var _closure2_slot5 = var7;
        var11 = var2.routerConfigOptions;
        var _closure2_slot6 = var11;
        var8 = var2.emitter;
        var _closure2_slot7 = var8;
        var4 = _closure1_slot3;
        var5 = var4.useContext;
        var3 = _closure1_slot1;
        var10 = _closure1_slot2;
        var2 = 1;
        var2 = var10[var2];
        var6 = undefined;
        var2 = var3.bind(var6)(var2);
        var2 = var5.bind(var4)(var2);
        var15 = var2.onAction;
        var _closure2_slot8 = var15;
        var13 = var2.onRouteFocus;
        var _closure2_slot9 = var13;
        var5 = var2.addListener;
        var _closure2_slot10 = var5;
        var14 = var2.onDispatchAction;
        var _closure2_slot11 = var14;
        var2 = var4.useRef;
        var2 = var2.bind(var4)(var11);
        var _closure2_slot12 = var2;
        var11 = var4.useEffect;
        var2 = function() { // Environment: var1
            var1 = _closure2_slot12;
            var0 = _closure2_slot6;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var2 = var11.bind(var4)(var2);
        var11 = var4.useCallback;
        var2 = new Array(10);
        var2[0] = var17;
        var2[1] = var7;
        var2[2] = var8;
        var2[3] = var9;
        var2[4] = var16;
        var2[5] = var15;
        var2[6] = var14;
        var2[7] = var13;
        var2[8] = var12;
        var2[9] = var0;
        var0 = function(arg0) { // Environment: var1
            _fun17381: for (var _fun17381_ip = 0;;) switch (_fun17381_ip) {
                case 0:
                    var4 = arg0;
                    var2 = undefined;
                    var0 = undefined;
                    var1 = arguments.length;
                    var6 = 1;
                    if (!(var1 > var6)) {
                        _fun17381_ip = 25;
                        continue _fun17381
                    }
                case 17:
                    var1 = arguments[var6];
                    if (!(var2 === var1)) {
                        _fun17381_ip = 55;
                        continue _fun17381
                    }
                case 25:
                    var1 = global;
                    var1 = var1.Set;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var1
                        }
                    });
                    var16 = var3;
                    var1 = new var16[var1](var15);
                    var5 = var1 instanceof Object ? var1 : var3;
                    _fun17381_ip = 59;
                    continue _fun17381;
                case 55:
                    var5 = arguments[var6];
                case 59:
                    var1 = _closure2_slot1;
                    var1 = var1.bind(var2)();
                    var7 = var5.has;
                    var3 = var1.key;
                    var3 = var7.bind(var5)(var3);
                    var7 = var5;
                    if (var3) {
                        _fun17381_ip = 424;
                        continue _fun17381
                    }
                case 94:
                    var5 = var7.add;
                    var3 = var1.key;
                    var3 = var5.bind(var7)(var3);
                    var3 = var4.target;
                    var5 = 'string';
                    var3 = typeof var3;
                    if (!(var5 === var3)) {
                        _fun17381_ip = 141;
                        continue _fun17381
                    }
                case 126:
                    var5 = var4.target;
                    var3 = var1.key;
                    if (!(var5 === var3)) {
                        _fun17381_ip = 201;
                        continue _fun17381
                    }
                case 141:
                    var8 = _closure2_slot0;
                    var5 = var8.getStateForAction;
                    var3 = _closure2_slot12;
                    var3 = var3.current;
                    var10 = var5.bind(var8)(var1, var4, var3);
                    var5 = null;
                    var3 = var10;
                    if (!(var5 === var10)) {
                        _fun17381_ip = 197;
                        continue _fun17381
                    }
                case 176:
                    var9 = var4.target;
                    var8 = var1.key;
                    var3 = var10;
                    if (!(var9 === var8)) {
                        _fun17381_ip = 197;
                        continue _fun17381
                    }
                case 194:
                    var3 = var1;
                case 197:
                    if (!(var5 === var3)) {
                        _fun17381_ip = 277;
                        continue _fun17381
                    }
                case 201:
                    var5 = _closure2_slot8;
                    if (!(var2 !== var5)) {
                        _fun17381_ip = 222;
                        continue _fun17381
                    }
                case 209:
                    var5 = _closure2_slot8;
                    var5 = var5.bind(var2)(var4, var7);
                    if (var5) {
                        _fun17381_ip = 273;
                        continue _fun17381
                    }
                case 222:
                    var5 = _closure2_slot4;
                    var5 = var5.length;
                    var6 = var5 - var6;
                    var5 = 0;
                    if (!(var6 >= var5)) {
                        _fun17381_ip = 265;
                        continue _fun17381
                    }
                case 241:
                    var8 = _closure2_slot4;
                    var8 = var8[var6];
                    var8 = var8.bind(var2)(var4, var7);
                    if (var8) {
                        _fun17381_ip = 269;
                        continue _fun17381
                    }
                case 258:
                    var6 = var6 - 1;
                    if (var6 >= var5) {
                        _fun17381_ip = 241;
                        continue _fun17381
                    }
                case 265:
                    var5 = false;
                    return var5;
                case 269:
                    var5 = true;
                    return var5;
                case 273:
                    var5 = true;
                    return var5;
                case 277:
                    var6 = _closure2_slot11;
                    var5 = var1 === var3;
                    var5 = var6.bind(var2)(var4, var5);
                    if (!(var1 !== var3)) {
                        _fun17381_ip = 366;
                        continue _fun17381
                    }
                case 295:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 2;
                    var5 = var7[var5];
                    var9 = var6.bind(var2)(var5);
                    var8 = var9.shouldPreventRemove;
                    var15 = _closure2_slot7;
                    var14 = _closure2_slot5;
                    var13 = var1.routes;
                    var12 = var3.routes;
                    var16 = var9;
                    var11 = var4;
                    var1 = var16[var8](var15, var14, var13, var12, var11, var10);
                    if (var1) {
                        _fun17381_ip = 420;
                        continue _fun17381
                    }
                case 357:
                    var1 = _closure2_slot2;
                    var1 = var1.bind(var2)(var3);
                case 366:
                    var1 = _closure2_slot9;
                    if (!(var2 !== var1)) {
                        _fun17381_ip = 416;
                        continue _fun17381
                    }
                case 374:
                    var3 = _closure2_slot0;
                    var1 = var3.shouldActionChangeFocus;
                    var1 = var1.bind(var3)(var4);
                    if (!var1) {
                        _fun17381_ip = 400;
                        continue _fun17381
                    }
                case 392:
                    var3 = _closure2_slot3;
                    var1 = var2 !== var3;
                case 400:
                    if (!var1) {
                        _fun17381_ip = 416;
                        continue _fun17381
                    }
                case 403:
                    var1 = _closure2_slot9;
                    var0 = _closure2_slot3;
                    var0 = var1.bind(var2)(var0);
                case 416:
                    var0 = true;
                    return var0;
                case 420:
                    var0 = true;
                    return var0;
                case 424:
                    var0 = false;
                    return var0;
            }
        };
        var0 = var11.bind(var4)(var0, var2);
        var _closure2_slot13 = var0;
        var2 = 2;
        var2 = var10[var2];
        var3 = var3.bind(var6)(var2);
        var2 = {};
        var2.getState = var9;
        var2.emitter = var8;
        var2.beforeRemoveListeners = var7;
        var2 = var3.bind(var6)(var2);
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var5;
        var2[1] = var0;
        var1 = function() { // Environment: var1
            _fun17382: for (var _fun17382_ip = 0;;) switch (_fun17382_ip) {
                case 0:
                    var2 = _closure2_slot10;
                    var0 = null;
                    var2 = var0 == var2;
                    var4 = undefined;
                    var0 = undefined;
                    if (var2) {
                        _fun17382_ip = 38;
                        continue _fun17382
                    }
                case 20:
                    var3 = _closure2_slot10;
                    var2 = _closure2_slot13;
                    var1 = 'action';
                    var0 = var3.bind(var4)(var1, var2);
                case 38:
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1491, 1529]);