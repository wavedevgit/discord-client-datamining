// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun1314: for (var _fun1314_ip = 0;;) switch (_fun1314_ip) {
        case 0:
            var0 = global;
            var2 = exports;
            var1 = require;
            var _closure1_slot0 = var1;
            var1 = metroImportDefault;
            var _closure1_slot1 = var1;
            var1 = dependencyMap;
            var _closure1_slot2 = var1;
            var1 = function arg0, arg1() {
                _fun1315: for (var _fun1315_ip = 0;;) switch (_fun1315_ip) {
                    case 0:
                        var6 = arg1;
                        var4 = global;
                        var2 = var4.console;
                        var1 = var2.error;
                        var0 = var4.HermesInternal;
                        var7 = var0.concat;
                        var5 = "[ReactNative Architecture][JS] '";
                        var3 = arg0;
                        var0 = "' is not available in the new React Native architecture.";
                        var3 = var7.bind(var5)(var3, var0);
                        var0 = '';
                        if (!var6) {
                            _fun1315_ip = 77;
                            continue _fun1315
                        }
                    case 55:
                        var4 = var4.HermesInternal;
                        var5 = var4.concat;
                        var4 = ' ';
                        var0 = var5.bind(var4)(var6);
                    case 77:
                        var0 = var3 + var0;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure1_slot11 = var1;
            var5 = global;
            var7 = var5.Object;
            var6 = var7.defineProperty;
            var4 = {};
            var1 = true;
            var4.value = var1;
            var1 = '__esModule';
            var1 = var6.bind(var7)(var2, var1, var4);
            var6 = var0.RN$LegacyInterop_UIManager_getConstants;
            var _closure1_slot5 = var6;
            var1 = false;
            var _closure1_slot3 = var1;
            var1 = {};
            var _closure1_slot4 = var1;
            var4 = function() { // Environment: var3
                _fun1316: for (var _fun1316_ip = 0;;) switch (_fun1316_ip) {
                    case 0:
                        var1 = _closure1_slot3;
                        if (var1) {
                            _fun1316_ip = 54;
                            continue _fun1316
                        }
                    case 10:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 0;
                        var1 = var2[var1];
                        var2 = undefined;
                        var3 = var3.bind(var2)(var1);
                        var1 = _closure1_slot5;
                        var1 = var3.bind(var2)(var1);
                        var1 = var1.bind(var2)();
                        _closure1_slot4 = var1;
                        var1 = true;
                        _closure1_slot3 = var1;
                    case 54:
                        var0 = _closure1_slot4;
                        return var0;
                }
            };
            var _closure1_slot6 = var4;
            var1 = var0.RN$LegacyInterop_UIManager_getConstantsForViewManager;
            var _closure1_slot7 = var1;
            var0 = var0.RN$LegacyInterop_UIManager_getDefaultEventTypes;
            var _closure1_slot8 = var0;
            var1 = function() { // Environment: var3
                var1 = false;
                var _closure2_slot0 = var1;
                var1 = null;
                var _closure2_slot1 = var1;
                var0 = function() { // Environment: var0
                    _fun1318: for (var _fun1318_ip = 0;;) switch (_fun1318_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (var1) {
                                _fun1318_ip = 57;
                                continue _fun1318
                            }
                        case 10:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 0;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var1 = _closure1_slot8;
                            var1 = var3.bind(var2)(var1);
                            var1 = var1.bind(var2)();
                            _closure2_slot1 = var1;
                            var1 = true;
                            _closure2_slot0 = var1;
                        case 57:
                            var0 = _closure2_slot1;
                            return var0;
                    }
                };
                return var0;
            };
            var0 = undefined;
            var1 = var1.bind(var0)();
            var _closure1_slot9 = var1;
            var13 = {};
            var1 = function arg0, arg1() {
                var2 = _closure1_slot11;
                var0 = undefined;
                var1 = 'measure';
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var13.measure = var1;
            var1 = function arg0, arg1() {
                var2 = _closure1_slot11;
                var0 = undefined;
                var1 = 'measureInWindow';
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var13.measureInWindow = var1;
            var1 = function arg0, arg1, arg2, arg3() {
                var2 = _closure1_slot11;
                var0 = undefined;
                var1 = 'measureLayout';
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var13.measureLayout = var1;
            var1 = function arg0, arg1, arg2() {
                var2 = _closure1_slot11;
                var0 = undefined;
                var1 = 'measureLayoutRelativeToParent';
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var13.measureLayoutRelativeToParent = var1;
            var1 = function arg0, arg1, arg2() {
                var2 = _closure1_slot11;
                var0 = undefined;
                var1 = 'dispatchViewManagerCommand';
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var13.dispatchViewManagerCommand = var1;
            var12 = {};
            var1 = function arg0, arg1, arg2, arg3() {
                var2 = _closure1_slot11;
                var0 = undefined;
                var1 = 'createView';
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var12.createView = var1;
            var1 = function arg0, arg1, arg2() {
                var2 = _closure1_slot11;
                var0 = undefined;
                var1 = 'updateView';
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var12.updateView = var1;
            var1 = function arg0, arg1() {
                var2 = _closure1_slot11;
                var0 = undefined;
                var1 = 'setChildren';
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var12.setChildren = var1;
            var1 = function arg0, arg1, arg2, arg3, arg4, arg5() {
                var2 = _closure1_slot11;
                var0 = undefined;
                var1 = 'manageChildren';
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var12.manageChildren = var1;
            var1 = function arg0, arg1() {
                var2 = _closure1_slot11;
                var0 = undefined;
                var1 = 'setJSResponder';
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var12.setJSResponder = var1;
            var1 = function() {
                var2 = _closure1_slot11;
                var0 = undefined;
                var1 = 'clearJSResponder';
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var12.clearJSResponder = var1;
            var11 = {};
            var1 = function arg0() {
                _fun1330: for (var _fun1330_ip = 0;;) switch (_fun1330_ip) {
                    case 0:
                        var0 = _closure1_slot7;
                        if (var0) {
                            _fun1330_ip = 29;
                            continue _fun1330
                        }
                    case 10:
                        var3 = _closure1_slot11;
                        var2 = undefined;
                        var0 = 'getConstantsForViewManager';
                        var0 = var3.bind(var2)(var0);
                        var0 = {};
                        _fun1330_ip = 43;
                        continue _fun1330;
                    case 29:
                        var3 = _closure1_slot7;
                        var2 = undefined;
                        var1 = arg0;
                        var0 = var3.bind(var2)(var1);
                    case 43:
                        return var0;
                }
            };
            var11.getConstantsForViewManager = var1;
            var1 = function() {
                _fun1331: for (var _fun1331_ip = 0;;) switch (_fun1331_ip) {
                    case 0:
                        var0 = _closure1_slot8;
                        if (var0) {
                            _fun1331_ip = 31;
                            continue _fun1331
                        }
                    case 10:
                        var3 = _closure1_slot11;
                        var2 = undefined;
                        var0 = 'getDefaultEventTypes';
                        var0 = var3.bind(var2)(var0);
                        var0 = new Array(0);
                        _fun1331_ip = 41;
                        continue _fun1331;
                    case 31:
                        var2 = _closure1_slot9;
                        var1 = undefined;
                        var0 = var2.bind(var1)();
                    case 41:
                        return var0;
                }
            };
            var11.getDefaultEventTypes = var1;
            var1 = function arg0() {
                var0 = undefined;
                return var0;
            };
            var11.setLayoutAnimationEnabledExperimental = var1;
            var1 = function arg0, arg1() {
                _fun1333: for (var _fun1333_ip = 0;;) switch (_fun1333_ip) {
                    case 0:
                        var8 = arg0;
                        var5 = arg1;
                        var4 = 'focus';
                        var0 = 8;
                        if (!(var5 !== var0)) {
                            _fun1333_ip = 98;
                            continue _fun1333
                        }
                    case 17:
                        var4 = 'windowStateChange';
                        var0 = 32;
                        if (!(var5 !== var0)) {
                            _fun1333_ip = 98;
                            continue _fun1333
                        }
                    case 30:
                        var4 = 'click';
                        var0 = 1;
                        if (!(var5 !== var0)) {
                            _fun1333_ip = 98;
                            continue _fun1333
                        }
                    case 41:
                        var4 = 'viewHoverEnter';
                        var0 = 128;
                        if (!(var5 !== var0)) {
                            _fun1333_ip = 98;
                            continue _fun1333
                        }
                    case 54:
                        var0 = global;
                        var2 = var0.console;
                        var1 = var2.error;
                        var0 = var0.HermesInternal;
                        var3 = var0.concat;
                        var0 = 'sendAccessibilityEvent() dropping event: Called with unsupported eventType: ';
                        var0 = var3.bind(var0)(var5);
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    case 98:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var0 = 0;
                        var2 = var5[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var3 = _closure1_slot0;
                        var1 = 1;
                        var1 = var5[var1];
                        var3 = var3.bind(var0)(var1);
                        var1 = var3.getFabricUIManager;
                        var1 = var1.bind(var3)();
                        var3 = var2.bind(var0)(var1);
                        var1 = var3.findShadowNodeByTag_DEPRECATED;
                        var2 = var1.bind(var3)(var8);
                        if (var2) {
                            _fun1333_ip = 209;
                            continue _fun1333
                        }
                    case 167:
                        var1 = global;
                        var6 = var1.console;
                        var5 = var6.error;
                        var1 = var1.HermesInternal;
                        var7 = var1.concat;
                        var1 = 'sendAccessibilityEvent() dropping event: Cannot find view with tag #';
                        var1 = var7.bind(var1)(var8);
                        var1 = var5.bind(var6)(var1);
                        _fun1333_ip = 221;
                        continue _fun1333;
                    case 209:
                        var1 = var3.sendAccessibilityEvent;
                        var1 = var1.bind(var3)(var2, var4);
                    case 221:
                        return var0;
                }
            };
            var11.sendAccessibilityEvent = var1;
            var10 = var5.Object;
            var9 = var10.assign;
            var8 = {};
            var1 = function arg0() {
                _fun1334: for (var _fun1334_ip = 0;;) switch (_fun1334_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = _closure1_slot5;
                        if (var0) {
                            _fun1334_ip = 99;
                            continue _fun1334
                        }
                    case 13:
                        var5 = _closure1_slot11;
                        var0 = global;
                        var3 = var0.HermesInternal;
                        var6 = var3.concat;
                        var4 = "getViewManagerConfig('";
                        var3 = "')";
                        var4 = var6.bind(var4)(var1, var3);
                        var0 = var0.HermesInternal;
                        var7 = var0.concat;
                        var12 = "If '";
                        var10 = "' has a ViewManager and you want to retrieve its native ViewConfig, please turn on the native ViewConfig interop layer. If you want to see if this component is registered with React Native, please call hasViewManagerConfig('";
                        var8 = "') instead.";
                        var11 = var1;
                        var9 = var1;
                        var3 = var12[var7](var11, var10, var9, var8, var7);
                        var0 = undefined;
                        var0 = var5.bind(var0)(var4, var3);
                        var0 = null;
                        return var0;
                    case 99:
                        var3 = _closure1_slot6;
                        var0 = undefined;
                        var0 = var3.bind(var0)();
                        var3 = var0[var1];
                        var3 = !var3;
                        if (!var3) {
                            _fun1334_ip = 129;
                            continue _fun1334
                        }
                    case 119:
                        var4 = _closure1_slot10;
                        var3 = var4.getConstantsForViewManager;
                    case 129:
                        if (!var3) {
                            _fun1334_ip = 151;
                            continue _fun1334
                        }
                    case 132:
                        var3 = _closure1_slot10;
                        var2 = var3.getConstantsForViewManager;
                        var2 = var2.bind(var3)(var1);
                        var0[var1] = var2;
                    case 151:
                        var0 = var0[var1];
                        return var0;
                }
            };
            var8.getViewManagerConfig = var1;
            var1 = function arg0() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.unstable_hasComponent;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var8.hasViewManagerConfig = var1;
            var1 = function() {
                _fun1336: for (var _fun1336_ip = 0;;) switch (_fun1336_ip) {
                    case 0:
                        var0 = _closure1_slot5;
                        if (var0) {
                            _fun1336_ip = 29;
                            continue _fun1336
                        }
                    case 10:
                        var3 = _closure1_slot11;
                        var2 = undefined;
                        var0 = 'getConstants';
                        var0 = var3.bind(var2)(var0);
                        var0 = null;
                        _fun1336_ip = 39;
                        continue _fun1336;
                    case 29:
                        var2 = _closure1_slot6;
                        var1 = undefined;
                        var0 = var2.bind(var1)();
                    case 39:
                        return var0;
                }
            };
            var8.getConstants = var1;
            var1 = function arg0, arg1, arg2() {
                _fun1337: for (var _fun1337_ip = 0;;) switch (_fun1337_ip) {
                    case 0:
                        var11 = arg0;
                        var7 = arg1;
                        var0 = arg2;
                        var _closure2_slot0 = var0;
                        var6 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 0;
                        var5 = var4[var3];
                        var0 = undefined;
                        var5 = var6.bind(var0)(var5);
                        var6 = _closure1_slot0;
                        var2 = 1;
                        var4 = var4[var2];
                        var6 = var6.bind(var0)(var4);
                        var4 = var6.getFabricUIManager;
                        var4 = var4.bind(var6)();
                        var6 = var5.bind(var0)(var4);
                        var _closure2_slot1 = var6;
                        var4 = var6.findShadowNodeByTag_DEPRECATED;
                        var5 = var4.bind(var6)(var11);
                        if (var5) {
                            _fun1337_ip = 130;
                            continue _fun1337
                        }
                    case 88:
                        var4 = global;
                        var9 = var4.console;
                        var8 = var9.error;
                        var4 = var4.HermesInternal;
                        var10 = var4.concat;
                        var4 = 'findSubviewIn() noop: Cannot find view with reactTag ';
                        var4 = var10.bind(var4)(var11);
                        var4 = var8.bind(var9)(var4);
                        _fun1337_ip = 159;
                        continue _fun1337;
                    case 130:
                        var4 = var6.findNodeAtPoint;
                        var14 = var7[var3];
                        var13 = var7[var2];
                        var12 = function(arg0) { // Environment: var1
                            _fun1338: for (var _fun1338_ip = 0;;) switch (_fun1338_ip) {
                                case 0:
                                    var1 = arg0;
                                    var2 = null;
                                    if (!(var2 == var1)) {
                                        _fun1338_ip = 37;
                                        continue _fun1338
                                    }
                                case 11:
                                    var2 = global;
                                    var4 = var2.console;
                                    var3 = var4.error;
                                    var2 = 'findSubviewIn(): Cannot find node at point';
                                    var2 = var3.bind(var4)(var2);
                                    _fun1338_ip = 124;
                                    continue _fun1338;
                                case 37:
                                    var2 = var1.stateNode;
                                    var3 = var2.node;
                                    if (var3) {
                                        _fun1338_ip = 78;
                                        continue _fun1338
                                    }
                                case 52:
                                    var2 = global;
                                    var5 = var2.console;
                                    var4 = var5.error;
                                    var2 = 'findSubviewIn(): Cannot find node at point';
                                    var2 = var4.bind(var5)(var2);
                                    _fun1338_ip = 124;
                                    continue _fun1338;
                                case 78:
                                    var1 = var1.stateNode;
                                    var1 = var1.canonical;
                                    var1 = var1.nativeTag;
                                    var _closure3_slot0 = var1;
                                    var2 = _closure2_slot1;
                                    var1 = var2.measure;
                                    var0 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Environment: var0
                                        var6 = _closure2_slot0;
                                        var11 = _closure3_slot0;
                                        var0 = undefined;
                                        var10 = arg4;
                                        var9 = arg5;
                                        var8 = arg2;
                                        var7 = arg3;
                                        var12 = undefined;
                                        var1 = var12[var6](var11, var10, var9, var8, var7, var6);
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var3, var0);
                                case 124:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var16 = var6;
                        var15 = var5;
                        var1 = var16[var4](var15, var14, var13, var12, var11);
                    case 159:
                        return var0;
                }
            };
            var8.findSubviewIn = var1;
            var1 = function arg0, arg1, arg2() {
                _fun1340: for (var _fun1340_ip = 0;;) switch (_fun1340_ip) {
                    case 0:
                        var7 = arg0;
                        var8 = arg1;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var0 = 0;
                        var2 = var4[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var3 = _closure1_slot0;
                        var1 = 1;
                        var1 = var4[var1];
                        var3 = var3.bind(var0)(var1);
                        var1 = var3.getFabricUIManager;
                        var1 = var1.bind(var3)();
                        var4 = var2.bind(var0)(var1);
                        var1 = var4.findShadowNodeByTag_DEPRECATED;
                        var3 = var1.bind(var4)(var7);
                        if (var3) {
                            _fun1340_ip = 117;
                            continue _fun1340
                        }
                    case 75:
                        var1 = global;
                        var5 = var1.console;
                        var2 = var5.error;
                        var1 = var1.HermesInternal;
                        var6 = var1.concat;
                        var1 = 'viewIsDescendantOf() noop: Cannot find view with reactTag ';
                        var1 = var6.bind(var1)(var7);
                        var1 = var2.bind(var5)(var1);
                        _fun1340_ip = 214;
                        continue _fun1340;
                    case 117:
                        var1 = var4.findShadowNodeByTag_DEPRECATED;
                        var2 = var1.bind(var4)(var8);
                        if (var2) {
                            _fun1340_ip = 173;
                            continue _fun1340
                        }
                    case 131:
                        var1 = global;
                        var6 = var1.console;
                        var5 = var6.error;
                        var1 = var1.HermesInternal;
                        var7 = var1.concat;
                        var1 = 'viewIsDescendantOf() noop: Cannot find view with ancestorReactTag ';
                        var1 = var7.bind(var1)(var8);
                        var1 = var5.bind(var6)(var1);
                        _fun1340_ip = 214;
                        continue _fun1340;
                    case 173:
                        var1 = var4.compareDocumentPosition;
                        var2 = var1.bind(var4)(var2, var3);
                        var1 = 16;
                        var1 = var1 & var2;
                        var2 = new Array(1);
                        var1 = !var1;
                        var1 = !var1;
                        var2[0] = var1;
                        var1 = arg2;
                        var1 = var1.bind(var0)(var2);
                    case 214:
                        return var0;
                }
            };
            var8.viewIsDescendantOf = var1;
            var1 = function arg0, arg1, arg2() {
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 0;
                var2 = var4[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var3 = _closure1_slot0;
                var1 = 1;
                var1 = var4[var1];
                var3 = var3.bind(var0)(var1);
                var1 = var3.getFabricUIManager;
                var1 = var1.bind(var3)();
                var5 = var2.bind(var0)(var1);
                var4 = var5.configureNextLayoutAnimation;
                var3 = arg0;
                var2 = arg1;
                var1 = arg2;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var0;
            };
            var8.configureNextLayoutAnimation = var1;
            var19 = {};
            var17 = {};
            var20 = var10;
            var18 = var13;
            var16 = var11;
            var15 = var12;
            var14 = var8;
            var1 = var20[var9](var19, var18, var17, var16, var15, var14, var13);
            var _closure1_slot10 = var1;
            if (!var6) {
                _fun1314_ip = 480;
                continue _fun1314
            }
        case 395:
            var6 = var5.Object;
            var5 = var6.keys;
            var4 = var4.bind(var0)();
            var6 = var5.bind(var6)(var4);
            var5 = var6.forEach;
            var4 = function(arg0) { // Environment: var3
                var3 = arg0;
                var2 = _closure1_slot10;
                var1 = _closure1_slot6;
                var0 = undefined;
                var1 = var1.bind(var0)();
                var1 = var1[var3];
                var2[var3] = var1;
                return var0;
            };
            var4 = var5.bind(var6)(var4);
            var4 = var1.getConstants;
            var4 = var4.bind(var1)();
            var4 = var4.ViewManagerNames;
            if (!var4) {
                _fun1314_ip = 480;
                continue _fun1314
            }
        case 449:
            var4 = var1.getConstants;
            var4 = var4.bind(var1)();
            var5 = var4.ViewManagerNames;
            var4 = var5.forEach;
            var3 = function(arg0) { // Environment: var3
                var4 = arg0;
                var _closure2_slot0 = var4;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 3;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = _closure1_slot10;
                var1 = {};
                var5 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 0;
                    var1 = var2[var1];
                    var2 = undefined;
                    var1 = var3.bind(var2)(var1);
                    var0 = _closure1_slot10;
                    var0 = var0.getConstantsForViewManager;
                    var1 = var1.bind(var2)(var0);
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1.get = var5;
                var1 = var3.bind(var0)(var2, var4, var1);
                return var0;
            };
            var3 = var4.bind(var5)(var3);
        case 480:
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [48, 49, 51, 50]);