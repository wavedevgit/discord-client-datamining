// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = ['key', 'routeNames'];
    var _closure1_slot3 = var0;
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
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var4 = var6[var3];
    var3 = metroImportAll;
    var4 = var3.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = function arg0() {
        _fun17055: for (var _fun17055_ip = 0;;) switch (_fun17055_ip) {
            case 0:
                var0 = arg0;
                var3 = undefined;
                if (!(var3 === var0)) {
                    _fun17055_ip = 11;
                    continue _fun17055
                }
            case 9:
                return var3;
            case 11:
                var1 = var0.key;
                var1 = var0.routeNames;
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var4 = var2.bind(var3)(var0, var1);
                var1 = global;
                var3 = var1.Object;
                var2 = var3.assign;
                var1 = {};
                var5 = true;
                var1.stale = var5;
                var6 = var0.routes;
                var5 = var6.map;
                var0 = function(arg0) { // Environment: var0
                    _fun17056: for (var _fun17056_ip = 0;;) switch (_fun17056_ip) {
                        case 0:
                            var5 = arg0;
                            var1 = var5.state;
                            var7 = undefined;
                            var0 = var5;
                            if (!(var7 !== var1)) {
                                _fun17056_ip = 62;
                                continue _fun17056
                            }
                        case 17:
                            var1 = global;
                            var4 = var1.Object;
                            var3 = var4.assign;
                            var2 = {};
                            var6 = _closure1_slot8;
                            var1 = var5.state;
                            var1 = var6.bind(var7)(var1);
                            var2.state = var1;
                            var1 = {};
                            var0 = var3.bind(var4)(var1, var5, var2);
                        case 62:
                            return var0;
                    }
                };
                var0 = var5.bind(var6)(var0);
                var1.routes = var0;
                var0 = {};
                var0 = var2.bind(var3)(var0, var4, var1);
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var3 = var4.forwardRef;
    var1 = function arg0, arg1() {
        _fun17057: for (var _fun17057_ip = 0;;) switch (_fun17057_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.initialState;
                var _closure2_slot0 = var2;
                var9 = var1.onStateChange;
                var _closure2_slot1 = var9;
                var15 = var1.onUnhandledAction;
                var2 = var1.independent;
                var17 = var1.children;
                var6 = _closure1_slot6;
                var5 = var6.useContext;
                var7 = _closure1_slot1;
                var3 = _closure1_slot2;
                var10 = 4;
                var3 = var3[var10];
                var4 = undefined;
                var3 = var7.bind(var4)(var3);
                var3 = var5.bind(var6)(var3);
                var3 = var3.isDefault;
                if (var3) {
                    _fun17057_ip = 130;
                    continue _fun17057
                }
            case 91:
                if (var2) {
                    _fun17057_ip = 130;
                    continue _fun17057
                }
            case 94:
                var3 = global;
                var6 = var3.Error;
                var3 = var6.prototype;
                var5 = Object.create(var3, {
                    constructor: {
                        value: var6
                    }
                });
                var34 = "Looks like you have nested a 'NavigationContainer' inside another. Normally you need only one container at the root of the app, so this was probably an error. If this was intentional, pass 'independent={true}' explicitly. Note that this will make the child navigators disconnected from the parent and you won't be able to navigate between them.";
                var35 = var5;
                var3 = new var35[var6](var34, var33);
                var3 = var3 instanceof Object ? var3 : var5;
                throw var3;
            case 130:
                var13 = _closure1_slot1;
                var16 = _closure1_slot2;
                var6 = 5;
                var3 = var16[var6];
                var5 = var13.bind(var4)(var3);
                var3 = function() { // Environment: var0
                    _fun17058: for (var _fun17058_ip = 0;;) switch (_fun17058_ip) {
                        case 0:
                            var2 = _closure1_slot8;
                            var1 = _closure2_slot0;
                            var0 = null;
                            var4 = var0 == var1;
                            var1 = undefined;
                            var0 = undefined;
                            if (var4) {
                                _fun17058_ip = 31;
                                continue _fun17058
                            }
                        case 27:
                            var0 = _closure2_slot0;
                        case 31:
                            var0 = var2.bind(var1)(var0);
                            return var0;
                    }
                };
                var5 = var5.bind(var4)(var3);
                var3 = _closure1_slot4;
                var5 = var3.bind(var4)(var5, var6);
                var3 = 0;
                var3 = var5[var3];
                var _closure2_slot2 = var3;
                var6 = 1;
                var24 = var5[var6];
                var _closure2_slot3 = var24;
                var6 = 2;
                var23 = var5[var6];
                var _closure2_slot4 = var23;
                var6 = 3;
                var25 = var5[var6];
                var _closure2_slot5 = var25;
                var8 = var5[var10];
                var _closure2_slot6 = var8;
                var7 = _closure1_slot6;
                var5 = var7.useRef;
                var19 = true;
                var5 = var5.bind(var7)(var19);
                var _closure2_slot7 = var5;
                var5 = var7.useRef;
                var5 = var5.bind(var7)();
                var _closure2_slot8 = var5;
                var11 = var7.useCallback;
                var6 = function() { // Environment: var0
                    var0 = _closure2_slot8;
                    var0 = var0.current;
                    return var0;
                };
                var5 = new Array(0);
                var22 = var11.bind(var7)(var6, var5);
                var _closure2_slot9 = var22;
                var11 = var7.useCallback;
                var6 = function(arg0) { // Environment: var0
                    var1 = _closure2_slot8;
                    var0 = arg0;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var5 = new Array(0);
                var21 = var11.bind(var7)(var6, var5);
                var _closure2_slot10 = var21;
                var5 = 6;
                var5 = var16[var5];
                var5 = var13.bind(var4)(var5);
                var5 = var5.bind(var4)();
                var20 = var5.listeners;
                var _closure2_slot11 = var20;
                var28 = var5.addListener;
                var _closure2_slot12 = var28;
                var5 = 7;
                var5 = var16[var5];
                var5 = var13.bind(var4)(var5);
                var6 = var5.bind(var4)();
                var5 = var6.keyedListeners;
                var _closure2_slot13 = var5;
                var27 = var6.addKeyedListener;
                var _closure2_slot14 = var27;
                var12 = var7.useCallback;
                var6 = var20.focus;
                var11 = new Array(1);
                var11[0] = var6;
                var6 = function(arg0) { // Environment: var0
                    _fun17061: for (var _fun17061_ip = 0;;) switch (_fun17061_ip) {
                        case 0:
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var1 = _closure2_slot11;
                            var3 = var1.focus;
                            var1 = 0;
                            var4 = var3[var1];
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun17061_ip = 60;
                                continue _fun17061
                            }
                        case 34:
                            var2 = _closure2_slot11;
                            var2 = var2.focus;
                            var1 = var2[var1];
                            var0 = function(arg0) { // Environment: var0
                                var2 = arg0;
                                var1 = var2.dispatch;
                                var0 = _closure3_slot0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            _fun17061_ip = 109;
                            continue _fun17061;
                        case 60:
                            var0 = global;
                            var2 = var0.console;
                            var1 = var2.error;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 8;
                            var3 = var3[var0];
                            var0 = undefined;
                            var0 = var4.bind(var0)(var3);
                            var0 = var0.NOT_INITIALIZED_ERROR;
                            var0 = var1.bind(var2)(var0);
                        case 109:
                            var0 = undefined;
                            return var0;
                    }
                };
                var30 = var12.bind(var7)(var6, var11);
                var _closure2_slot15 = var30;
                var12 = var7.useCallback;
                var6 = var20.focus;
                var11 = new Array(1);
                var11[0] = var6;
                var6 = function() { // Environment: var0
                    _fun17063: for (var _fun17063_ip = 0;;) switch (_fun17063_ip) {
                        case 0:
                            var0 = _closure2_slot11;
                            var2 = var0.focus;
                            var0 = 0;
                            var3 = var2[var0];
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun17063_ip = 77;
                                continue _fun17063
                            }
                        case 25:
                            var1 = _closure2_slot11;
                            var2 = var1.focus;
                            var1 = var2[var0];
                            var0 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var0 = var1.canGoBack;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.result;
                            var0 = var0.handled;
                            var2 = !var0;
                            var0 = !var2;
                            if (var2) {
                                _fun17063_ip = 75;
                                continue _fun17063
                            }
                        case 72:
                            var0 = var1;
                        case 75:
                            return var0;
                        case 77:
                            var0 = false;
                            return var0;
                    }
                };
                var31 = var12.bind(var7)(var6, var11);
                var _closure2_slot16 = var31;
                var12 = var7.useCallback;
                var6 = var5.getState;
                var11 = new Array(2);
                var11[0] = var6;
                var6 = var20.focus;
                var11[1] = var6;
                var6 = function(arg0) { // Environment: var0
                    _fun17065: for (var _fun17065_ip = 0;;) switch (_fun17065_ip) {
                        case 0:
                            var4 = arg0;
                            var _closure3_slot0 = var4;
                            var3 = null;
                            var5 = var3 == var4;
                            var0 = undefined;
                            var2 = undefined;
                            if (var5) {
                                _fun17065_ip = 27;
                                continue _fun17065
                            }
                        case 22:
                            var2 = var4.key;
                        case 27:
                            if (!(var3 == var2)) {
                                _fun17065_ip = 87;
                                continue _fun17065
                            }
                        case 31:
                            var4 = _closure2_slot13;
                            var4 = var4.getState;
                            var4 = var4.root;
                            var6 = var3 == var4;
                            var4 = undefined;
                            if (var6) {
                                _fun17065_ip = 84;
                                continue _fun17065
                            }
                        case 59:
                            var5 = _closure2_slot13;
                            var6 = var5.getState;
                            var5 = var6.root;
                            var5 = var5.bind(var6)();
                            var4 = var5.key;
                        case 84:
                            var2 = var4;
                        case 87:
                            var _closure3_slot1 = var2;
                            if (!(var3 != var2)) {
                                _fun17065_ip = 126;
                                continue _fun17065
                            }
                        case 95:
                            var2 = _closure2_slot11;
                            var3 = var2.focus;
                            var2 = 0;
                            var2 = var3[var2];
                            var1 = function(arg0) { // Environment: var1
                                var2 = arg0;
                                var1 = var2.dispatch;
                                var0 = global;
                                var6 = var0.Object;
                                var5 = var6.assign;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 9;
                                var3 = var3[var0];
                                var0 = undefined;
                                var0 = var4.bind(var0)(var3);
                                var7 = var0.CommonActions;
                                var4 = var7.reset;
                                var3 = _closure3_slot0;
                                var4 = var4.bind(var7)(var3);
                                var3 = {};
                                var0 = _closure3_slot1;
                                var3.target = var0;
                                var0 = {};
                                var0 = var5.bind(var6)(var0, var4, var3);
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            _fun17065_ip = 173;
                            continue _fun17065;
                        case 126:
                            var1 = global;
                            var3 = var1.console;
                            var2 = var3.error;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 8;
                            var1 = var5[var1];
                            var1 = var4.bind(var0)(var1);
                            var1 = var1.NOT_INITIALIZED_ERROR;
                            var1 = var2.bind(var3)(var1);
                        case 173:
                            return var0;
                    }
                };
                var6 = var12.bind(var7)(var6, var11);
                var _closure2_slot17 = var6;
                var12 = var7.useCallback;
                var5 = var5.getState;
                var11 = new Array(1);
                var11[0] = var5;
                var5 = function() { // Environment: var0
                    _fun17067: for (var _fun17067_ip = 0;;) switch (_fun17067_ip) {
                        case 0:
                            var0 = _closure2_slot13;
                            var0 = var0.getState;
                            var2 = var0.root;
                            var0 = null;
                            var2 = var0 == var2;
                            var0 = undefined;
                            if (var2) {
                                _fun17067_ip = 50;
                                continue _fun17067
                            }
                        case 30:
                            var1 = _closure2_slot13;
                            var2 = var1.getState;
                            var1 = var2.root;
                            var0 = var1.bind(var2)();
                        case 50:
                            return var0;
                    }
                };
                var18 = var12.bind(var7)(var5, var11);
                var _closure2_slot18 = var18;
                var12 = var7.useCallback;
                var11 = new Array(1);
                var11[0] = var18;
                var5 = function() { // Environment: var0
                    _fun17068: for (var _fun17068_ip = 0;;) switch (_fun17068_ip) {
                        case 0:
                            var0 = _closure2_slot18;
                            var2 = undefined;
                            var1 = var0.bind(var2)();
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun17068_ip = 21;
                                continue _fun17068
                            }
                        case 19:
                            return var2;
                        case 21:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 10;
                            var0 = var4[var0];
                            var0 = var3.bind(var2)(var0);
                            var0 = var0.bind(var2)(var1);
                            return var0;
                    }
                };
                var26 = var12.bind(var7)(var5, var11);
                var _closure2_slot19 = var26;
                var5 = 11;
                var5 = var16[var5];
                var5 = var13.bind(var4)(var5);
                var14 = var5.bind(var4)();
                var _closure2_slot20 = var14;
                var5 = 12;
                var5 = var16[var5];
                var11 = var13.bind(var4)(var5);
                var5 = {};
                var11 = var11.bind(var4)(var5);
                var5 = var11.addOptionsGetter;
                var _closure2_slot21 = var5;
                var29 = var11.getCurrentOptions;
                var _closure2_slot22 = var29;
                var12 = var7.useMemo;
                var11 = new Array(8);
                var11[0] = var31;
                var11[1] = var30;
                var11[2] = var14;
                var11[3] = var29;
                var11[4] = var26;
                var11[5] = var18;
                var20 = var20.focus;
                var11[6] = var20;
                var11[7] = var6;
                var6 = function() { // Environment: var0
                    var1 = global;
                    var5 = var1.Object;
                    var4 = var5.assign;
                    var3 = var1.Object;
                    var2 = var3.keys;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 9;
                    var6 = var6[var1];
                    var1 = undefined;
                    var1 = var7.bind(var1)(var6);
                    var1 = var1.CommonActions;
                    var6 = var2.bind(var3)(var1);
                    var3 = var6.reduce;
                    var2 = function(arg0, arg1) { // Environment: var0
                        var0 = arg0;
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var1 = function() { // Environment: var1
                            var2 = undefined;
                            var0 = undefined;
                            var1 = _closure2_slot15;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 9;
                            var4 = var7[var3];
                            var4 = var6.bind(var2)(var4);
                            var5 = var4.CommonActions;
                            var4 = _closure4_slot0;
                            var5 = var5[var4];
                            var4 = var5.apply;
                            var3 = var7[var3];
                            var3 = var6.bind(var2)(var3);
                            var3 = var3.CommonActions;
                            var0 = arguments;
                            var0 = var4.bind(var5)(var3, var0);
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var0[var2] = var1;
                        return var0;
                    };
                    var1 = {};
                    var10 = var3.bind(var6)(var2, var1);
                    var7 = _closure2_slot20;
                    var2 = var7.create;
                    var1 = 'root';
                    var9 = var2.bind(var7)(var1);
                    var1 = {};
                    var7 = _closure2_slot15;
                    var1.dispatch = var7;
                    var7 = _closure2_slot17;
                    var1.resetRoot = var7;
                    var7 = function() {
                        var0 = true;
                        return var0;
                    };
                    var1.isFocused = var7;
                    var7 = _closure2_slot16;
                    var1.canGoBack = var7;
                    var7 = function() {
                        var0 = undefined;
                        return var0;
                    };
                    var1.getParent = var7;
                    var7 = function() {
                        var0 = _closure2_slot31;
                        var0 = var0.current;
                        return var0;
                    };
                    var1.getState = var7;
                    var7 = _closure2_slot18;
                    var1.getRootState = var7;
                    var7 = _closure2_slot19;
                    var1.getCurrentRoute = var7;
                    var6 = _closure2_slot22;
                    var1.getCurrentOptions = var6;
                    var0 = function() {
                        var0 = _closure2_slot11;
                        var1 = var0.focus;
                        var0 = 0;
                        var1 = var1[var0];
                        var0 = null;
                        var0 = var0 != var1;
                        return var0;
                    };
                    var1.isReady = var0;
                    var11 = {};
                    var12 = var5;
                    var8 = var1;
                    var0 = var12[var4](var11, var10, var9, var8, var7);
                    return var0;
                };
                var6 = var12.bind(var7)(var6, var11);
                var _closure2_slot23 = var6;
                var26 = var7.useImperativeHandle;
                var20 = new Array(1);
                var20[0] = var6;
                var12 = arg1;
                var11 = function() { // Environment: var0
                    var0 = _closure2_slot23;
                    return var0;
                };
                var11 = var26.bind(var7)(var12, var11, var20);
                var20 = var7.useCallback;
                var12 = new Array(1);
                var12[0] = var14;
                var11 = function(arg0, arg1) { // Environment: var0
                    var2 = _closure2_slot20;
                    var1 = var2.emit;
                    var0 = {};
                    var3 = '__unsafe_action__';
                    var0.type = var3;
                    var3 = {};
                    var5 = arg0;
                    var3.action = var5;
                    var5 = arg1;
                    var3.noop = var5;
                    var4 = _closure2_slot27;
                    var4 = var4.current;
                    var3.stack = var4;
                    var0.data = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var26 = var20.bind(var7)(var11, var12);
                var _closure2_slot24 = var26;
                var11 = var7.useRef;
                var11 = var11.bind(var7)();
                var _closure2_slot25 = var11;
                var20 = var7.useCallback;
                var12 = new Array(1);
                var12[0] = var14;
                var11 = function(arg0) { // Environment: var0
                    _fun17078: for (var _fun17078_ip = 0;;) switch (_fun17078_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = _closure2_slot25;
                            var1 = var1.current;
                            if (!(var1 !== var4)) {
                                _fun17078_ip = 64;
                                continue _fun17078
                            }
                        case 19:
                            var1 = _closure2_slot25;
                            var1.current = var4;
                            var2 = _closure2_slot20;
                            var1 = var2.emit;
                            var0 = {};
                            var3 = 'options';
                            var0.type = var3;
                            var3 = {};
                            var3.options = var4;
                            var0.data = var3;
                            var0 = var1.bind(var2)(var0);
                        case 64:
                            var0 = undefined;
                            return var0;
                    }
                };
                var11 = var20.bind(var7)(var11, var12);
                var _closure2_slot26 = var11;
                var12 = var7.useRef;
                var12 = var12.bind(var7)();
                var _closure2_slot27 = var12;
                var20 = var7.useMemo;
                var12 = new Array(4);
                var12[0] = var28;
                var12[1] = var27;
                var12[2] = var26;
                var12[3] = var11;
                var11 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot12;
                    var0.addListener = var2;
                    var2 = _closure2_slot14;
                    var0.addKeyedListener = var2;
                    var2 = _closure2_slot24;
                    var0.onDispatchAction = var2;
                    var2 = _closure2_slot26;
                    var0.onOptionsChange = var2;
                    var1 = _closure2_slot27;
                    var0.stackRef = var1;
                    return var0;
                };
                var11 = var20.bind(var7)(var11, var12);
                var20 = var7.useMemo;
                var12 = new Array(2);
                var12[0] = var25;
                var12[1] = var8;
                var8 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot5;
                    var0.scheduleUpdate = var2;
                    var1 = _closure2_slot6;
                    var0.flushUpdates = var1;
                    return var0;
                };
                var8 = var20.bind(var7)(var8, var12);
                var12 = var7.useRef;
                var12 = var12.bind(var7)(var19);
                var _closure2_slot28 = var12;
                var20 = var7.useCallback;
                var19 = function() { // Environment: var0
                    var0 = _closure2_slot28;
                    var0 = var0.current;
                    return var0;
                };
                var12 = new Array(0);
                var20 = var20.bind(var7)(var19, var12);
                var _closure2_slot29 = var20;
                var19 = var7.useMemo;
                var12 = new Array(7);
                var12[0] = var3;
                var12[1] = var24;
                var12[2] = var23;
                var12[3] = var22;
                var12[4] = var21;
                var12[5] = var20;
                var12[6] = var5;
                var5 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot2;
                    var0.state = var2;
                    var2 = _closure2_slot3;
                    var0.getState = var2;
                    var2 = _closure2_slot4;
                    var0.setState = var2;
                    var2 = _closure2_slot9;
                    var0.getKey = var2;
                    var2 = _closure2_slot10;
                    var0.setKey = var2;
                    var2 = _closure2_slot29;
                    var0.getIsInitial = var2;
                    var1 = _closure2_slot21;
                    var0.addOptionsGetter = var1;
                    return var0;
                };
                var12 = var19.bind(var7)(var5, var12);
                var5 = var7.useRef;
                var5 = var5.bind(var7)(var9);
                var _closure2_slot30 = var5;
                var5 = var7.useRef;
                var5 = var5.bind(var7)(var3);
                var _closure2_slot31 = var5;
                var9 = var7.useEffect;
                var5 = function() { // Environment: var0
                    var2 = _closure2_slot28;
                    var1 = false;
                    var2.current = var1;
                    var2 = _closure2_slot30;
                    var1 = _closure2_slot1;
                    var2.current = var1;
                    var1 = _closure2_slot31;
                    var0 = _closure2_slot2;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var5 = var9.bind(var7)(var5);
                var9 = var7.useEffect;
                var5 = new Array(3);
                var5[0] = var18;
                var5[1] = var14;
                var5[2] = var3;
                var3 = function() { // Environment: var0
                    _fun17084: for (var _fun17084_ip = 0;;) switch (_fun17084_ip) {
                        case 0:
                            var2 = _closure2_slot18;
                            var0 = undefined;
                            var4 = var2.bind(var0)();
                            var5 = _closure2_slot20;
                            var3 = var5.emit;
                            var2 = {};
                            var6 = 'state';
                            var2.type = var6;
                            var6 = {};
                            var7 = _closure2_slot2;
                            var6.state = var7;
                            var2.data = var6;
                            var2 = var3.bind(var5)(var2);
                            var2 = _closure2_slot7;
                            var2 = var2.current;
                            var2 = !var2;
                            if (!var2) {
                                _fun17084_ip = 76;
                                continue _fun17084
                            }
                        case 67:
                            var3 = _closure2_slot30;
                            var2 = var3.current;
                        case 76:
                            if (!var2) {
                                _fun17084_ip = 93;
                                continue _fun17084
                            }
                        case 79:
                            var3 = _closure2_slot30;
                            var2 = var3.current;
                            var2 = var2.bind(var3)(var4);
                        case 93:
                            var2 = _closure2_slot7;
                            var1 = false;
                            var2.current = var1;
                            return var0;
                    }
                };
                var3 = var9.bind(var7)(var3, var5);
                var5 = var7.useCallback;
                var3 = function(arg0) { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var0 = new Array(0);
                var14 = var5.bind(var7)(var3, var0);
                var5 = _closure1_slot7;
                var0 = 13;
                var0 = var16[var0];
                var0 = var13.bind(var4)(var0);
                var3 = var0.Provider;
                var0 = {};
                var0.value = var6;
                var7 = _closure1_slot0;
                var6 = 14;
                var6 = var16[var6];
                var6 = var7.bind(var4)(var6);
                var6 = var6.ScheduleUpdateContext;
                var7 = var6.Provider;
                var6 = {};
                var6.value = var8;
                var8 = 15;
                var8 = var16[var8];
                var8 = var13.bind(var4)(var8);
                var9 = var8.Provider;
                var8 = {};
                var8.value = var11;
                var10 = var16[var10];
                var10 = var13.bind(var4)(var10);
                var11 = var10.Provider;
                var10 = {};
                var10.value = var12;
                var12 = 16;
                var12 = var16[var12];
                var12 = var13.bind(var4)(var12);
                var13 = var12.Provider;
                var12 = {};
                var16 = null;
                if (!(var16 != var15)) {
                    _fun17057_ip = 1161;
                    continue _fun17057
                }
            case 1158:
                var14 = var15;
            case 1161:
                var12.value = var14;
                var16 = _closure1_slot7;
                var15 = _closure1_slot1;
                var18 = _closure1_slot2;
                var14 = 17;
                var14 = var18[var14];
                var15 = var15.bind(var4)(var14);
                var14 = {};
                var14.children = var17;
                var14 = var16.bind(var4)(var15, var14);
                var12.children = var14;
                var12 = var5.bind(var4)(var13, var12);
                var10.children = var12;
                var10 = var5.bind(var4)(var11, var10);
                var8.children = var10;
                var8 = var5.bind(var4)(var9, var8);
                var6.children = var8;
                var6 = var5.bind(var4)(var7, var6);
                var0.children = var6;
                var7 = var5.bind(var4)(var3, var0);
                var0 = var7;
                if (!var2) {
                    _fun17057_ip = 1337;
                    continue _fun17057
                }
            case 1257:
                var3 = _closure1_slot7;
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 18;
                var1 = var8[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.Provider;
                var1 = {};
                var1.value = var4;
                var5 = 19;
                var5 = var8[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.Provider;
                var5 = {};
                var5.value = var4;
                var5.children = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1337:
                return var0;
        }
    };
    var1 = var3.bind(var4)(var1);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 29, 31, 33, 1483, 1484, 1485, 1486, 1487, 1474, 1488, 1489, 1490, 1492, 1493, 1491, 1494, 1495, 1496, 1497]);