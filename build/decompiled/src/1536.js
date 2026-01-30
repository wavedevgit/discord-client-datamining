// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var4;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot2 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = require;
    var3 = var3.bind(var0)(var4);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var1 = function(arg0) { // Original name: SceneView, environment: var1
        _fun17437: for (var _fun17437_ip = 0;;) switch (_fun17437_ip) {
            case 0:
                var2 = arg0;
                var15 = var2.screen;
                var12 = var2.route;
                var _closure2_slot0 = var12;
                var13 = var2.navigation;
                var14 = var2.routeState;
                var _closure2_slot1 = var14;
                var10 = var2.getState;
                var _closure2_slot2 = var10;
                var1 = var2.setState;
                var _closure2_slot3 = var1;
                var6 = var2.options;
                var2 = var2.clearOptions;
                var _closure2_slot4 = var2;
                var4 = _closure1_slot2;
                var2 = var4.useRef;
                var2 = var2.bind(var4)();
                var _closure2_slot5 = var2;
                var5 = var4.useCallback;
                var3 = function() { // Environment: var0
                    var0 = _closure2_slot5;
                    var0 = var0.current;
                    return var0;
                };
                var2 = new Array(0);
                var8 = var5.bind(var4)(var3, var2);
                var _closure2_slot6 = var8;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 2;
                var2 = var3[var2];
                var3 = undefined;
                var5 = var5.bind(var3)(var2);
                var2 = {};
                var7 = var12.key;
                var2.key = var7;
                var2.options = var6;
                var2.navigation = var13;
                var2 = var5.bind(var3)(var2);
                var5 = var2.addOptionsGetter;
                var _closure2_slot7 = var5;
                var7 = var4.useCallback;
                var6 = function(arg0) { // Environment: var0
                    var1 = _closure2_slot5;
                    var0 = arg0;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var2 = new Array(0);
                var7 = var7.bind(var4)(var6, var2);
                var _closure2_slot8 = var7;
                var11 = var4.useCallback;
                var6 = new Array(2);
                var6[0] = var10;
                var2 = var12.key;
                var6[1] = var2;
                var2 = function() { // Environment: var0
                    _fun17440: for (var _fun17440_ip = 0;;) switch (_fun17440_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            var3 = var1.routes;
                            var2 = var3.find;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.key;
                                var0 = _closure2_slot0;
                                var0 = var0.key;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            if (!var1) {
                                _fun17440_ip = 44;
                                continue _fun17440
                            }
                        case 39:
                            var0 = var1.state;
                        case 44:
                            return var0;
                    }
                };
                var11 = var11.bind(var4)(var2, var6);
                var _closure2_slot9 = var11;
                var6 = var4.useCallback;
                var2 = new Array(3);
                var2[0] = var10;
                var10 = var12.key;
                var2[1] = var10;
                var2[2] = var1;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var3 = _closure2_slot2;
                    var0 = undefined;
                    var6 = var3.bind(var0)();
                    var2 = _closure2_slot3;
                    var3 = global;
                    var5 = var3.Object;
                    var4 = var5.assign;
                    var3 = {};
                    var8 = var6.routes;
                    var7 = var8.map;
                    var1 = function(arg0) { // Environment: var1
                        _fun17443: for (var _fun17443_ip = 0;;) switch (_fun17443_ip) {
                            case 0:
                                var5 = arg0;
                                var2 = var5.key;
                                var0 = _closure2_slot0;
                                var1 = var0.key;
                                var0 = var5;
                                if (!(var2 === var1)) {
                                    _fun17443_ip = 62;
                                    continue _fun17443
                                }
                            case 27:
                                var1 = global;
                                var4 = var1.Object;
                                var3 = var4.assign;
                                var2 = {};
                                var1 = _closure3_slot0;
                                var2.state = var1;
                                var1 = {};
                                var0 = var3.bind(var4)(var1, var5, var2);
                            case 62:
                                return var0;
                        }
                    };
                    var1 = var7.bind(var8)(var1);
                    var3.routes = var1;
                    var1 = {};
                    var1 = var4.bind(var5)(var1, var6, var3);
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var10 = var6.bind(var4)(var1, var2);
                var _closure2_slot10 = var10;
                var2 = var4.useRef;
                var1 = true;
                var1 = var2.bind(var4)(var1);
                var _closure2_slot11 = var1;
                var2 = var4.useEffect;
                var1 = function() { // Environment: var0
                    var1 = _closure2_slot11;
                    var0 = false;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var1 = var2.bind(var4)(var1);
                var6 = var4.useEffect;
                var2 = function() { // Environment: var0
                    var0 = _closure2_slot4;
                    return var0;
                };
                var1 = new Array(0);
                var1 = var6.bind(var4)(var2, var1);
                var6 = var4.useCallback;
                var2 = function() { // Environment: var0
                    var0 = _closure2_slot11;
                    var0 = var0.current;
                    return var0;
                };
                var1 = new Array(0);
                var6 = var6.bind(var4)(var2, var1);
                var _closure2_slot12 = var6;
                var2 = var4.useMemo;
                var1 = new Array(7);
                var1[0] = var14;
                var1[1] = var11;
                var1[2] = var10;
                var1[3] = var8;
                var1[4] = var7;
                var1[5] = var6;
                var1[6] = var5;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot1;
                    var0.state = var2;
                    var2 = _closure2_slot9;
                    var0.getState = var2;
                    var2 = _closure2_slot10;
                    var0.setState = var2;
                    var2 = _closure2_slot6;
                    var0.getKey = var2;
                    var2 = _closure2_slot8;
                    var0.setKey = var2;
                    var2 = _closure2_slot12;
                    var0.getIsInitial = var2;
                    var1 = _closure2_slot7;
                    var0.addOptionsGetter = var1;
                    return var0;
                };
                var4 = var2.bind(var4)(var0, var1);
                var0 = var15.getComponent;
                if (var0) {
                    _fun17437_ip = 415;
                    continue _fun17437
                }
            case 407:
                var11 = var15.component;
                _fun17437_ip = 425;
                continue _fun17437;
            case 415:
                var0 = var15.getComponent;
                var11 = var0.bind(var15)();
            case 425:
                var2 = _closure1_slot3;
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 3;
                var0 = var8[var0];
                var0 = var7.bind(var3)(var0);
                var1 = var0.Provider;
                var0 = {};
                var0.value = var4;
                var4 = 4;
                var4 = var8[var4];
                var5 = var7.bind(var3)(var4);
                var4 = {};
                var6 = 5;
                var6 = var8[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var8 = var15.name;
                var6.name = var8;
                var8 = var11;
                if (var8) {
                    _fun17437_ip = 509;
                    continue _fun17437
                }
            case 504:
                var8 = var15.children;
            case 509:
                var6.render = var8;
                var6.navigation = var13;
                var6.route = var12;
                if (!(var3 === var11)) {
                    _fun17437_ip = 563;
                    continue _fun17437
                }
            case 528:
                var10 = var15.children;
                var8 = null;
                if (!(var3 !== var10)) {
                    _fun17437_ip = 561;
                    continue _fun17437
                }
            case 539:
                var14 = var15.children;
                var10 = {};
                var10.navigation = var13;
                var10.route = var12;
                var8 = var14.bind(var15)(var10);
            case 561:
                _fun17437_ip = 585;
                continue _fun17437;
            case 563:
                var10 = _closure1_slot3;
                var9 = {};
                var9.navigation = var13;
                var9.route = var12;
                var8 = var10.bind(var3)(var11, var9);
            case 585:
                var6.children = var8;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1490, 1483, 1495, 1537]);