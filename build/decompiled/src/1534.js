// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function(arg0) { // Original name: _toPropertyKey, environment: var1
        _fun17412: for (var _fun17412_ip = 0;;) switch (_fun17412_ip) {
            case 0:
                var6 = arg0;
                var3 = 'object';
                var0 = typeof var6;
                var1 = var6;
                if (!(var3 === var0)) {
                    _fun17412_ip = 119;
                    continue _fun17412
                }
            case 17:
                var1 = var6;
                if (!var1) {
                    _fun17412_ip = 119;
                    continue _fun17412
                }
            case 23:
                var0 = global;
                var2 = var0.Symbol;
                var2 = var2.toPrimitive;
                var5 = var6[var2];
                var4 = undefined;
                if (!(var4 === var5)) {
                    _fun17412_ip = 60;
                    continue _fun17412
                }
            case 47:
                var2 = var0.String;
                var1 = var2.bind(var4)(var6);
                _fun17412_ip = 119;
                continue _fun17412;
            case 60:
                var4 = var5.call;
                var2 = 'string';
                var4 = var4.bind(var5)(var6, var2);
                var2 = typeof var4;
                var1 = var4;
                if (!(var3 === var2)) {
                    _fun17412_ip = 119;
                    continue _fun17412
                }
            case 85:
                var3 = var0.TypeError;
                var0 = var3.prototype;
                var2 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var8 = '@@toPrimitive must return a primitive value.';
                var9 = var2;
                var0 = new var9[var3](var8, var7);
                var0 = var0 instanceof Object ? var0 : var2;
                throw var0;
            case 119:
                var3 = 'symbol';
                var2 = typeof var1;
                var0 = var1;
                if (!(var3 !== var2)) {
                    _fun17412_ip = 136;
                    continue _fun17412
                }
            case 133:
                var0 = '' + var1;
            case 136:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var5 = var4[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot5 = var3;
    var3 = 4;
    var4 = var4[var3];
    var3 = arg1;
    var3 = var3.bind(var0)(var4);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var1 = function(arg0) { // Original name: useDescriptors, environment: var1
        var2 = arg0;
        var1 = var2.state;
        var _closure2_slot0 = var1;
        var3 = var2.screens;
        var _closure2_slot1 = var3;
        var10 = var2.navigation;
        var _closure2_slot2 = var10;
        var3 = var2.screenOptions;
        var _closure2_slot3 = var3;
        var3 = var2.defaultScreenOptions;
        var _closure2_slot4 = var3;
        var19 = var2.onAction;
        var _closure2_slot5 = var19;
        var11 = var2.getState;
        var _closure2_slot6 = var11;
        var3 = var2.setState;
        var _closure2_slot7 = var3;
        var18 = var2.addListener;
        var _closure2_slot8 = var18;
        var17 = var2.addKeyedListener;
        var _closure2_slot9 = var17;
        var16 = var2.onRouteFocus;
        var _closure2_slot10 = var16;
        var8 = var2.router;
        var7 = var2.emitter;
        var13 = _closure1_slot5;
        var4 = var13.useState;
        var3 = {};
        var6 = var4.bind(var13)(var3);
        var5 = _closure1_slot4;
        var3 = undefined;
        var4 = 2;
        var5 = var5.bind(var3)(var6, var4);
        var4 = 0;
        var4 = var5[var4];
        var _closure2_slot11 = var4;
        var4 = 1;
        var9 = var5[var4];
        var _closure2_slot12 = var9;
        var6 = var13.useContext;
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var2 = 5;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var6.bind(var13)(var2);
        var15 = var2.onDispatchAction;
        var _closure2_slot13 = var15;
        var14 = var2.onOptionsChange;
        var _closure2_slot14 = var14;
        var2 = var2.stackRef;
        var _closure2_slot15 = var2;
        var12 = var13.useMemo;
        var6 = new Array(8);
        var6[0] = var10;
        var6[1] = var19;
        var6[2] = var18;
        var6[3] = var17;
        var6[4] = var16;
        var6[5] = var15;
        var6[6] = var14;
        var6[7] = var2;
        var2 = function() { // Environment: var0
            var0 = {};
            var2 = _closure2_slot2;
            var0.navigation = var2;
            var2 = _closure2_slot5;
            var0.onAction = var2;
            var2 = _closure2_slot8;
            var0.addListener = var2;
            var2 = _closure2_slot9;
            var0.addKeyedListener = var2;
            var2 = _closure2_slot10;
            var0.onRouteFocus = var2;
            var2 = _closure2_slot13;
            var0.onDispatchAction = var2;
            var2 = _closure2_slot14;
            var0.onOptionsChange = var2;
            var1 = _closure2_slot15;
            var0.stackRef = var1;
            return var0;
        };
        var2 = var12.bind(var13)(var2, var6);
        var _closure2_slot16 = var2;
        var2 = 6;
        var2 = var5[var2];
        var6 = var4.bind(var3)(var2);
        var2 = {};
        var2.state = var1;
        var2.getState = var11;
        var2.navigation = var10;
        var2.setOptions = var9;
        var2.router = var8;
        var2.emitter = var7;
        var2 = var6.bind(var3)(var2);
        var _closure2_slot17 = var2;
        var2 = 7;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var1 = var1.routes;
        var3 = var2.bind(var3)(var1);
        var2 = var3.reduce;
        var1 = function(arg0, arg1, arg2) { // Environment: var0
            _fun17415: for (var _fun17415_ip = 0;;) switch (_fun17415_ip) {
                case 0:
                    var0 = arg0;
                    var6 = arg1;
                    var _closure3_slot0 = var6;
                    var1 = arg2;
                    var _closure3_slot1 = var1;
                    var3 = _closure2_slot1;
                    var2 = var6.name;
                    var10 = var3[var2];
                    var2 = var10.props;
                    var _closure3_slot2 = var2;
                    var5 = _closure2_slot17;
                    var3 = var6.key;
                    var5 = var5[var3];
                    var _closure3_slot3 = var5;
                    var3 = _closure2_slot3;
                    var8 = new Array(1);
                    var8[0] = var3;
                    var7 = var8.concat;
                    var9 = _closure1_slot3;
                    var3 = var10.options;
                    if (var3) {
                        _fun17415_ip = 99;
                        continue _fun17415
                    }
                case 93:
                    var3 = new Array(0);
                    _fun17415_ip = 122;
                    continue _fun17415;
                case 99:
                    var12 = var10.options;
                    var11 = var12.filter;
                    var10 = global;
                    var10 = var10.Boolean;
                    var3 = var11.bind(var12)(var10);
                case 122:
                    var10 = undefined;
                    var3 = var9.bind(var10)(var3);
                    var9 = var2.options;
                    var2 = new Array(2);
                    var2[0] = var9;
                    var11 = _closure2_slot11;
                    var9 = var6.key;
                    var9 = var11[var9];
                    var2[1] = var9;
                    var8 = var7.bind(var8)(var3, var2);
                    var7 = var8.reduce;
                    var3 = function(arg0, arg1) { // Environment: var4
                        _fun17416: for (var _fun17416_ip = 0;;) switch (_fun17416_ip) {
                            case 0:
                                var5 = arg1;
                                var0 = global;
                                var3 = var0.Object;
                                var2 = var3.assign;
                                var4 = 'function';
                                var0 = typeof var5;
                                var1 = var5;
                                if (!(var4 === var0)) {
                                    _fun17416_ip = 60;
                                    continue _fun17416
                                }
                            case 30:
                                var4 = {};
                                var6 = _closure3_slot0;
                                var4.route = var6;
                                var0 = _closure3_slot3;
                                var4.navigation = var0;
                                var0 = undefined;
                                var1 = var5.bind(var0)(var4);
                            case 60:
                                var0 = arg0;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                        }
                    };
                    var2 = {};
                    var8 = var7.bind(var8)(var3, var2);
                    var2 = global;
                    var7 = var2.Object;
                    var3 = var7.assign;
                    var2 = _closure2_slot4;
                    var9 = 'function';
                    var2 = typeof var2;
                    if (!(var9 !== var2)) {
                        _fun17415_ip = 218;
                        continue _fun17415
                    }
                case 212:
                    var2 = _closure2_slot4;
                    _fun17415_ip = 243;
                    continue _fun17415;
                case 218:
                    var9 = _closure2_slot4;
                    var1 = {};
                    var1.route = var6;
                    var1.navigation = var5;
                    var1.options = var8;
                    var2 = var9.bind(var10)(var1);
                case 243:
                    var1 = {};
                    var3 = var3.bind(var7)(var1, var2, var8);
                    var _closure3_slot4 = var3;
                    var1 = function() { // Original name: clearOptions, environment: var4
                        var2 = _closure2_slot12;
                        var1 = undefined;
                        var0 = function(arg0) { // Environment: var0
                            _fun17418: for (var _fun17418_ip = 0;;) switch (_fun17418_ip) {
                                case 0:
                                    var3 = arg0;
                                    var1 = _closure3_slot0;
                                    var1 = var1.key;
                                    var1 = var1 in var3;
                                    if (var1) {
                                        _fun17418_ip = 24;
                                        continue _fun17418
                                    }
                                case 22:
                                    return var3;
                                case 24:
                                    var0 = _closure3_slot0;
                                    var1 = var0.key;
                                    var0 = var3[var1];
                                    var2 = _closure1_slot2;
                                    var4 = new Array(1);
                                    var4[0] = var1;
                                    var1 = var4.map;
                                    var0 = _closure1_slot7;
                                    var1 = var1.bind(var4)(var0);
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var3, var1);
                                    return var0;
                            }
                        };
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var _closure3_slot5 = var1;
                    var2 = var6.key;
                    var1 = {};
                    var1.route = var6;
                    var1.navigation = var5;
                    var4 = function() { // Original name: render, environment: var4
                        var4 = _closure1_slot6;
                        var10 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var0 = 5;
                        var0 = var14[var0];
                        var3 = undefined;
                        var0 = var10.bind(var3)(var0);
                        var2 = var0.Provider;
                        var1 = {};
                        var0 = _closure2_slot16;
                        var1.value = var0;
                        var0 = 8;
                        var0 = var14[var0];
                        var0 = var10.bind(var3)(var0);
                        var6 = var0.Provider;
                        var5 = {};
                        var13 = _closure3_slot3;
                        var5.value = var13;
                        var0 = 9;
                        var0 = var14[var0];
                        var0 = var10.bind(var3)(var0);
                        var8 = var0.Provider;
                        var7 = {};
                        var0 = _closure3_slot0;
                        var7.value = var0;
                        var9 = 10;
                        var9 = var14[var9];
                        var10 = var10.bind(var3)(var9);
                        var9 = {};
                        var9.navigation = var13;
                        var9.route = var0;
                        var13 = _closure3_slot2;
                        var9.screen = var13;
                        var13 = _closure2_slot0;
                        var14 = var13.routes;
                        var13 = _closure3_slot1;
                        var13 = var14[var13];
                        var13 = var13.state;
                        var9.routeState = var13;
                        var13 = _closure2_slot6;
                        var9.getState = var13;
                        var12 = _closure2_slot7;
                        var9.setState = var12;
                        var12 = _closure3_slot4;
                        var9.options = var12;
                        var11 = _closure3_slot5;
                        var9.clearOptions = var11;
                        var9 = var4.bind(var3)(var10, var9);
                        var7.children = var9;
                        var7 = var4.bind(var3)(var8, var7);
                        var5.children = var7;
                        var5 = var4.bind(var3)(var6, var5);
                        var1.children = var5;
                        var0 = var0.key;
                        var0 = var4.bind(var3)(var2, var1, var0);
                        return var0;
                    };
                    var1.render = var4;
                    var1.options = var3;
                    var0[var2] = var1;
                    return var0;
            }
        };
        var0 = {};
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 65, 57, 31, 33, 1491, 1535, 1504, 1497, 1496, 1536]);