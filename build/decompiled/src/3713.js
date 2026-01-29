// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun33210: for (var _fun33210_ip = 0;;) switch (_fun33210_ip) {
        case 0:
            var5 = require;
            var7 = metroImportDefault;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var7;
            var _closure1_slot2 = var6;
            var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
                _fun33211: for (var _fun33211_ip = 0;;) switch (_fun33211_ip) {
                    case 0:
                    case 2: // try_start_0
                        var1 = global;
                        var2 = var1.Boolean;
                        var2 = var2.prototype;
                        var3 = var2.valueOf;
                        var2 = var3.call;
                        var7 = var1.Reflect;
                        var6 = var7.construct;
                        var5 = var1.Boolean;
                        var4 = new Array(0);
                        var1 = function() { // Environment: var0
                            var0 = undefined;
                            return var0;
                        };
                        var1 = var6.bind(var7)(var5, var4, var1);
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        var _closure2_slot0 = var1;
                    case 70: // try_end0
                        _fun33211_ip = 74;
                        continue _fun33211;
                    case 72: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 74:
                        var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot16 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot16 = var0;
            var0 = function(arg0) { // Original name: filterOutAnimatedStyles, environment: var1
                _fun33214: for (var _fun33214_ip = 0;;) switch (_fun33214_ip) {
                    case 0:
                        var5 = arg0;
                        var0 = var5;
                        if (!var0) {
                            _fun33214_ip = 90;
                            continue _fun33214
                        }
                    case 11:
                        var1 = global;
                        var3 = var1.Array;
                        var1 = var3.isArray;
                        var1 = var1.bind(var3)(var5);
                        if (var1) {
                            _fun33214_ip = 57;
                            continue _fun33214
                        }
                    case 32:
                        var3 = null;
                        var1 = var5;
                        if (!(var3 != var5)) {
                            _fun33214_ip = 55;
                            continue _fun33214
                        }
                    case 41:
                        var3 = var5.viewDescriptors;
                        var1 = var5;
                        if (!var3) {
                            _fun33214_ip = 55;
                            continue _fun33214
                        }
                    case 53:
                        var1 = {};
                    case 55:
                        _fun33214_ip = 87;
                        continue _fun33214;
                    case 57:
                        var4 = var5.filter;
                        var3 = function(arg0) { // Environment: var2
                            _fun33215: for (var _fun33215_ip = 0;;) switch (_fun33215_ip) {
                                case 0:
                                    var2 = arg0;
                                    var0 = var2;
                                    if (!var0) {
                                        _fun33215_ip = 17;
                                        continue _fun33215
                                    }
                                case 9:
                                    var1 = 'viewDescriptors';
                                    var0 = var1 in var2;
                                case 17:
                                    var0 = !var0;
                                    return var0;
                            }
                        };
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.map;
                        var2 = function(arg0) { // Environment: var2
                            _fun33216: for (var _fun33216_ip = 0;;) switch (_fun33216_ip) {
                                case 0:
                                    var3 = arg0;
                                    var0 = global;
                                    var1 = var0.Array;
                                    var0 = var1.isArray;
                                    var1 = var0.bind(var1)(var3);
                                    var0 = var3;
                                    if (!var1) {
                                        _fun33216_ip = 41;
                                        continue _fun33216
                                    }
                                case 27:
                                    var2 = _closure1_slot17;
                                    var1 = undefined;
                                    var0 = var2.bind(var1)(var3);
                                case 41:
                                    return var0;
                            }
                        };
                        var1 = var3.bind(var4)(var2);
                    case 87:
                        var0 = var1;
                    case 90:
                        return var0;
                }
            };
            var _closure1_slot17 = var0;
            var0 = global;
            var8 = var0.Object;
            var4 = var8.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var8)(var2, var0, var3);
            var3 = 0;
            var4 = var6[var3];
            var0 = undefined;
            var4 = var7.bind(var0)(var4);
            var _closure1_slot3 = var4;
            var4 = 1;
            var4 = var6[var4];
            var4 = var7.bind(var0)(var4);
            var _closure1_slot4 = var4;
            var4 = 2;
            var4 = var6[var4];
            var4 = var7.bind(var0)(var4);
            var _closure1_slot5 = var4;
            var4 = 3;
            var4 = var6[var4];
            var4 = var7.bind(var0)(var4);
            var _closure1_slot6 = var4;
            var4 = 4;
            var4 = var6[var4];
            var4 = var7.bind(var0)(var4);
            var _closure1_slot7 = var4;
            var4 = 5;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var4 = 6;
            var4 = var6[var4];
            var4 = var7.bind(var0)(var4);
            var _closure1_slot8 = var4;
            var4 = 7;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var7 = var4.Platform;
            var4 = var4.processColor;
            var _closure1_slot9 = var4;
            var4 = 8;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var4 = var4.jsx;
            var _closure1_slot10 = var4;
            var4 = 9;
            var7 = var6[var4];
            var8 = var5.bind(var0)(var7);
            var7 = var8.isWeb;
            var7 = var7.bind(var8)();
            var _closure1_slot11 = var7;
            var8 = var6[var4];
            var9 = var5.bind(var0)(var8);
            var8 = var9.isJest;
            var8 = var8.bind(var9)();
            var _closure1_slot12 = var8;
            var8 = var6[var4];
            var9 = var5.bind(var0)(var8);
            var8 = var9.isReact19;
            var8 = var8.bind(var9)();
            var _closure1_slot13 = var8;
            var8 = var6[var4];
            var9 = var5.bind(var0)(var8);
            var8 = var9.shouldBeUseWeb;
            var8 = var8.bind(var9)();
            var _closure1_slot14 = var8;
            if (!var7) {
                _fun33210_ip = 354;
                continue _fun33210
            }
        case 332:
            var7 = 10;
            var7 = var6[var7];
            var8 = var5.bind(var0)(var7);
            var7 = var8.configureWebLayoutAnimations;
            var7 = var7.bind(var8)();
        case 354:
            var4 = var6[var4];
            var7 = var5.bind(var0)(var4);
            var4 = var7.isFabric;
            var4 = var4.bind(var7)();
            if (!var4) {
                _fun33210_ip = 404;
                continue _fun33210
            }
        case 376:
            var4 = 11;
            var4 = var6[var4];
            var6 = var5.bind(var0)(var4);
            var5 = var6.setNodeRemovalCallback;
            var4 = function(arg0, arg1) { // Environment: var1
                _fun33217: for (var _fun33217_ip = 0;;) switch (_fun33217_ip) {
                    case 0:
                        var4 = arg0;
                        var3 = _closure1_slot0;
                        var0 = _closure1_slot2;
                        var5 = 12;
                        var2 = var0[var5];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var3 = var2.ComponentRegistry;
                        var2 = var3.getComponent;
                        var2 = var2.bind(var3)(var4);
                        var3 = var2;
                        if (!var3) {
                            _fun33217_ip = 57;
                            continue _fun33217
                        }
                    case 51:
                        var3 = var2._willUnmount;
                    case 57:
                        if (!var3) {
                            _fun33217_ip = 118;
                            continue _fun33217
                        }
                    case 60:
                        var3 = arg1;
                        if (var3) {
                            _fun33217_ip = 110;
                            continue _fun33217
                        }
                    case 66:
                        var3 = var2._detachStyles;
                        var3 = var3.bind(var2)();
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var5];
                        var1 = var3.bind(var0)(var1);
                        var3 = var1.ComponentRegistry;
                        var1 = var3.unregister;
                        var1 = var1.bind(var3)(var4);
                    case 110:
                        var1 = false;
                        var2._willUnmount = var1;
                    case 118:
                        return var0;
                }
            };
            var4 = var5.bind(var6)(var4);
        case 404:
            var _closure1_slot15 = var3;
            var1 = function(arg0, arg1) { // Original name: createAnimatedComponent, environment: var1
                _fun33218: for (var _fun33218_ip = 0;;) switch (_fun33218_ip) {
                    case 0:
                        var2 = arg0;
                        var _closure2_slot0 = var2;
                        var1 = arg1;
                        var _closure2_slot1 = var1;
                        var3 = _closure1_slot13;
                        if (var3) {
                            _fun33218_ip = 126;
                            continue _fun33218
                        }
                    case 26:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 13;
                        var3 = var5[var3];
                        var6 = undefined;
                        var5 = var4.bind(var6)(var3);
                        var4 = 'function';
                        var3 = typeof var2;
                        var4 = var4 !== var3;
                        if (var4) {
                            _fun33218_ip = 84;
                            continue _fun33218
                        }
                    case 62:
                        var3 = var2.prototype;
                        if (!var3) {
                            _fun33218_ip = 81;
                            continue _fun33218
                        }
                    case 70:
                        var7 = var2.prototype;
                        var3 = var7.isReactComponent;
                    case 81:
                        var4 = var3;
                    case 84:
                        var9 = var2.name;
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var8 = var3.concat;
                        var7 = "Looks like you're passing a function component `";
                        var3 = '` to `createAnimatedComponent` function which supports only class components. Please wrap your function component with `React.forwardRef()` or use a class component instead.';
                        var3 = var8.bind(var7)(var9, var3);
                        var3 = var5.bind(var6)(var4, var3);
                    case 126:
                        var3 = _closure1_slot8;
                        var5 = var3.Component;
                        var3 = function(arg0) { // Environment: var0
                            var3 = function(arg0) { // Original name: AnimatedComponent, environment: var5
                                _fun33220: for (var _fun33220_ip = 0;;) switch (_fun33220_ip) {
                                    case 0:
                                        var3 = this;
                                        var0 = _closure1_slot3;
                                        var2 = _closure3_slot0;
                                        var4 = undefined;
                                        var0 = var0.bind(var4)(var3, var2);
                                        var10 = new Array(1);
                                        var0 = arg0;
                                        var10[0] = var0;
                                        var0 = _closure1_slot6;
                                        var9 = var0.bind(var4)(var2);
                                        var2 = _closure1_slot5;
                                        var0 = _closure1_slot16;
                                        var0 = var0.bind(var4)();
                                        if (var0) {
                                            _fun33220_ip = 75;
                                            continue _fun33220
                                        }
                                    case 62:
                                        var0 = var9.apply;
                                        var0 = var0.bind(var9)(var3, var10);
                                        _fun33220_ip = 109;
                                        continue _fun33220;
                                    case 75:
                                        var5 = global;
                                        var8 = var5.Reflect;
                                        var7 = var8.construct;
                                        var5 = _closure1_slot6;
                                        var5 = var5.bind(var4)(var3);
                                        var5 = var5.constructor;
                                        var0 = var7.bind(var8)(var9, var10, var5);
                                    case 109:
                                        var0 = var2.bind(var4)(var3, var0);
                                        var _closure4_slot0 = var0;
                                        var3 = null;
                                        var0._styles = var3;
                                        var2 = true;
                                        var0._isFirstRender = var2;
                                        var2 = {};
                                        var5 = {};
                                        var2.value = var5;
                                        var0.jestAnimatedStyle = var2;
                                        var2 = {};
                                        var5 = {};
                                        var2.value = var5;
                                        var0.jestAnimatedProps = var2;
                                        var0._componentRef = var3;
                                        var2 = false;
                                        var0._hasAnimatedRef = var2;
                                        var0._componentDOMRef = var3;
                                        var0._sharedElementTransition = var3;
                                        var5 = _closure1_slot1;
                                        var7 = _closure1_slot2;
                                        var8 = 14;
                                        var8 = var7[var8];
                                        var8 = var5.bind(var4)(var8);
                                        var9 = var8.prototype;
                                        var9 = Object.create(var9, {
                                            constructor: {
                                                value: var8
                                            }
                                        });
                                        var14 = var9;
                                        var8 = new var14[var8](var13);
                                        var8 = var8 instanceof Object ? var8 : var9;
                                        var0._jsPropsUpdater = var8;
                                        var9 = _closure1_slot0;
                                        var8 = 15;
                                        var8 = var7[var8];
                                        var8 = var9.bind(var4)(var8);
                                        var8 = var8.InlinePropManager;
                                        var10 = var8.prototype;
                                        var10 = Object.create(var10, {
                                            constructor: {
                                                value: var8
                                            }
                                        });
                                        var14 = var10;
                                        var8 = new var14[var8](var13);
                                        var8 = var8 instanceof Object ? var8 : var10;
                                        var0._InlinePropManager = var8;
                                        var8 = 16;
                                        var8 = var7[var8];
                                        var8 = var9.bind(var4)(var8);
                                        var8 = var8.PropsFilter;
                                        var9 = var8.prototype;
                                        var9 = Object.create(var9, {
                                            constructor: {
                                                value: var8
                                            }
                                        });
                                        var14 = var9;
                                        var8 = new var14[var8](var13);
                                        var8 = var8 instanceof Object ? var8 : var9;
                                        var0._PropsFilter = var8;
                                        var8 = _closure1_slot15;
                                        var8 = parseFloat(var8);
                                        var9 = var8 + 1;
                                        _closure1_slot15 = var9;
                                        var0.reanimatedID = var8;
                                        var0._willUnmount = var2;
                                        var2 = function(arg0) { // Environment: var6
                                            _fun33221: for (var _fun33221_ip = 0;;) switch (_fun33221_ip) {
                                                case 0:
                                                    var2 = arg0;
                                                    if (!var2) {
                                                        _fun33221_ip = 15;
                                                        continue _fun33221
                                                    }
                                                case 6:
                                                    var0 = var2.getAnimatableRef;
                                                    if (var0) {
                                                        _fun33221_ip = 87;
                                                        continue _fun33221
                                                    }
                                                case 15:
                                                    var1 = _closure1_slot14;
                                                    var0 = var2;
                                                    if (!var1) {
                                                        _fun33221_ip = 112;
                                                        continue _fun33221
                                                    }
                                                case 28:
                                                    if (!var2) {
                                                        _fun33221_ip = 40;
                                                        continue _fun33221
                                                    }
                                                case 31:
                                                    var1 = var2.elementRef;
                                                    if (var1) {
                                                        _fun33221_ip = 58;
                                                        continue _fun33221
                                                    }
                                                case 40:
                                                    var1 = _closure4_slot0;
                                                    var1._componentDOMRef = var2;
                                                    var0 = var2;
                                                    _fun33221_ip = 112;
                                                    continue _fun33221;
                                                case 58:
                                                    var3 = _closure4_slot0;
                                                    var1 = var2.elementRef;
                                                    var1 = var1.current;
                                                    var3._componentDOMRef = var1;
                                                    var0 = var2;
                                                    _fun33221_ip = 112;
                                                    continue _fun33221;
                                                case 87:
                                                    var3 = _closure4_slot0;
                                                    var1 = true;
                                                    var3._hasAnimatedRef = var1;
                                                    var1 = var2.getAnimatableRef;
                                                    var0 = var1.bind(var2)();
                                                case 112:
                                                    return var0;
                                            }
                                        };
                                        var0._resolveComponentRef = var2;
                                        var2 = 17;
                                        var2 = var7[var2];
                                        var5 = var5.bind(var4)(var2);
                                        var2 = {};
                                        var7 = function() { // Original name: getForwardedRef, environment: var6
                                            var0 = _closure4_slot0;
                                            var0 = var0.props;
                                            var0 = var0.forwardedRef;
                                            return var0;
                                        };
                                        var2.getForwardedRef = var7;
                                        var6 = function(arg0) { // Original name: setLocalRef, environment: var6
                                            _fun33223: for (var _fun33223_ip = 0;;) switch (_fun33223_ip) {
                                                case 0:
                                                    var3 = arg0;
                                                    if (!var3) {
                                                        _fun33223_ip = 306;
                                                        continue _fun33223
                                                    }
                                                case 9:
                                                    var0 = _closure4_slot0;
                                                    var0 = var0._componentRef;
                                                    if (!(var3 !== var0)) {
                                                        _fun33223_ip = 55;
                                                        continue _fun33223
                                                    }
                                                case 26:
                                                    var2 = _closure4_slot0;
                                                    var0 = var2._resolveComponentRef;
                                                    var0 = var0.bind(var2)(var3);
                                                    var2._componentRef = var0;
                                                    var0 = undefined;
                                                    var2._viewInfo = var0;
                                                case 55:
                                                    var0 = _closure4_slot0;
                                                    var3 = var0.props;
                                                    var4 = var3.layout;
                                                    var2 = var3.entering;
                                                    var0 = var3.exiting;
                                                    var3 = var3.sharedTransitionTag;
                                                    if (var4) {
                                                        _fun33223_ip = 103;
                                                        continue _fun33223
                                                    }
                                                case 91:
                                                    if (var2) {
                                                        _fun33223_ip = 103;
                                                        continue _fun33223
                                                    }
                                                case 94:
                                                    if (var0) {
                                                        _fun33223_ip = 103;
                                                        continue _fun33223
                                                    }
                                                case 97:
                                                    if (!var3) {
                                                        _fun33223_ip = 306;
                                                        continue _fun33223
                                                    }
                                                case 103:
                                                    var4 = _closure1_slot14;
                                                    if (var4) {
                                                        _fun33223_ip = 151;
                                                        continue _fun33223
                                                    }
                                                case 113:
                                                    var6 = _closure1_slot0;
                                                    var5 = _closure1_slot2;
                                                    var4 = 11;
                                                    var5 = var5[var4];
                                                    var4 = undefined;
                                                    var7 = var6.bind(var4)(var5);
                                                    var6 = var7.enableLayoutAnimations;
                                                    var5 = true;
                                                    var4 = false;
                                                    var4 = var6.bind(var7)(var5, var4);
                                                case 151:
                                                    if (!var3) {
                                                        _fun33223_ip = 168;
                                                        continue _fun33223
                                                    }
                                                case 154:
                                                    var4 = _closure4_slot0;
                                                    var3 = var4._configureSharedTransition;
                                                    var3 = var3.bind(var4)();
                                                case 168:
                                                    var3 = _closure4_slot0;
                                                    var5 = var3.context;
                                                    var3 = null;
                                                    var6 = var3 == var5;
                                                    var4 = undefined;
                                                    var3 = undefined;
                                                    if (var6) {
                                                        _fun33223_ip = 195;
                                                        continue _fun33223
                                                    }
                                                case 190:
                                                    var3 = var5.current;
                                                case 195:
                                                    var2 = !var2;
                                                    if (var2) {
                                                        _fun33223_ip = 231;
                                                        continue _fun33223
                                                    }
                                                case 201:
                                                    var6 = _closure1_slot0;
                                                    var7 = _closure1_slot2;
                                                    var5 = 9;
                                                    var5 = var7[var5];
                                                    var6 = var6.bind(var4)(var5);
                                                    var5 = var6.isFabric;
                                                    var2 = var5.bind(var6)();
                                                case 231:
                                                    if (var2) {
                                                        _fun33223_ip = 237;
                                                        continue _fun33223
                                                    }
                                                case 234:
                                                    var2 = var3;
                                                case 237:
                                                    if (var2) {
                                                        _fun33223_ip = 244;
                                                        continue _fun33223
                                                    }
                                                case 240:
                                                    var2 = _closure1_slot11;
                                                case 244:
                                                    if (var2) {
                                                        _fun33223_ip = 306;
                                                        continue _fun33223
                                                    }
                                                case 247:
                                                    var3 = _closure4_slot0;
                                                    var2 = var3._configureLayoutAnimation;
                                                    var1 = _closure1_slot0;
                                                    var5 = _closure1_slot2;
                                                    var0 = 18;
                                                    var0 = var5[var0];
                                                    var0 = var1.bind(var4)(var0);
                                                    var0 = var0.LayoutAnimationType;
                                                    var1 = var0.ENTERING;
                                                    var0 = var3.props;
                                                    var0 = var0.entering;
                                                    var0 = var2.bind(var3)(var1, var0);
                                                case 306:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var2.setLocalRef = var6;
                                        var2 = var5.bind(var4)(var2);
                                        var0._setComponentRef = var2;
                                        var2 = _closure1_slot12;
                                        if (!var2) {
                                            _fun33220_ip = 444;
                                            continue _fun33220
                                        }
                                    case 416:
                                        var2 = {};
                                        var5 = {};
                                        var2.value = var5;
                                        var0.jestAnimatedStyle = var2;
                                        var2 = {};
                                        var5 = {};
                                        var2.value = var5;
                                        var0.jestAnimatedProps = var2;
                                    case 444:
                                        var2 = {};
                                        var5 = {};
                                        var2.reanimatedProps = var5;
                                        var0.state = var2;
                                        var2 = var0.context;
                                        var5 = var3 == var2;
                                        var3 = undefined;
                                        if (var5) {
                                            _fun33220_ip = 478;
                                            continue _fun33220
                                        }
                                    case 473:
                                        var3 = var2.current;
                                    case 478:
                                        var5 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var2 = 9;
                                        var2 = var6[var2];
                                        var5 = var5.bind(var4)(var2);
                                        var2 = var5.isFabric;
                                        var2 = var2.bind(var5)();
                                        if (!var2) {
                                            _fun33220_ip = 514;
                                            continue _fun33220
                                        }
                                    case 511:
                                        var2 = !var3;
                                    case 514:
                                        if (!var2) {
                                            _fun33220_ip = 572;
                                            continue _fun33220
                                        }
                                    case 517:
                                        var3 = var0._configureLayoutAnimation;
                                        var2 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var1 = 18;
                                        var1 = var5[var1];
                                        var1 = var2.bind(var4)(var1);
                                        var1 = var1.LayoutAnimationType;
                                        var2 = var1.ENTERING;
                                        var1 = var0.props;
                                        var1 = var1.entering;
                                        var1 = var3.bind(var0)(var2, var1);
                                    case 572:
                                        return var0;
                                }
                            };
                            var _closure3_slot0 = var3;
                            var4 = _closure1_slot7;
                            var2 = undefined;
                            var1 = arg0;
                            var1 = var4.bind(var2)(var3, var1);
                            var1 = _closure1_slot4;
                            var4 = {};
                            var0 = 'componentDidMount';
                            var4.key = var0;
                            var0 = function() { // Original name: componentDidMount, environment: var5
                                _fun33224: for (var _fun33224_ip = 0;;) switch (_fun33224_ip) {
                                    case 0:
                                        var1 = this;
                                        var0 = _closure1_slot11;
                                        if (var0) {
                                            _fun33224_ip = 77;
                                            continue _fun33224
                                        }
                                    case 13:
                                        var4 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var0 = 19;
                                        var2 = var2[var0];
                                        var0 = undefined;
                                        var0 = var4.bind(var0)(var2);
                                        var4 = var0.NativeEventsManager;
                                        var13 = _closure2_slot1;
                                        var2 = var4.prototype;
                                        var2 = Object.create(var2, {
                                            constructor: {
                                                value: var4
                                            }
                                        });
                                        var15 = var2;
                                        var14 = var1;
                                        var0 = new var15[var4](var14, var13, var12);
                                        var0 = var0 instanceof Object ? var0 : var2;
                                        var1._NativeEventsManager = var0;
                                    case 77:
                                        var4 = var1._NativeEventsManager;
                                        var0 = null;
                                        if (!(var0 != var4)) {
                                            _fun33224_ip = 99;
                                            continue _fun33224
                                        }
                                    case 89:
                                        var2 = var4.attachEvents;
                                        var2 = var2.bind(var4)();
                                    case 99:
                                        var4 = var1._jsPropsUpdater;
                                        var2 = var4.addOnJSPropsChangeListener;
                                        var2 = var2.bind(var4)(var1);
                                        var2 = var1._attachAnimatedStyles;
                                        var2 = var2.bind(var1)();
                                        var5 = var1._InlinePropManager;
                                        var4 = var5.attachInlineProps;
                                        var2 = var1._getViewInfo;
                                        var2 = var2.bind(var1)();
                                        var2 = var4.bind(var5)(var1, var2);
                                        var2 = var1.getComponentViewTag;
                                        var5 = var2.bind(var1)();
                                        var2 = -1;
                                        if (!(var2 !== var5)) {
                                            _fun33224_ip = 216;
                                            continue _fun33224
                                        }
                                    case 176:
                                        var6 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var2 = 12;
                                        var4 = var4[var2];
                                        var2 = undefined;
                                        var2 = var6.bind(var2)(var4);
                                        var4 = var2.ComponentRegistry;
                                        var2 = var4.register;
                                        var2 = var2.bind(var4)(var5, var1);
                                    case 216:
                                        var9 = var1._configureLayoutAnimation;
                                        var6 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var11 = 18;
                                        var7 = var4[var11];
                                        var2 = undefined;
                                        var7 = var6.bind(var2)(var7);
                                        var7 = var7.LayoutAnimationType;
                                        var8 = var7.LAYOUT;
                                        var7 = var1.props;
                                        var7 = var7.layout;
                                        var7 = var9.bind(var1)(var8, var7);
                                        var7 = var1._configureLayoutAnimation;
                                        var4 = var4[var11];
                                        var4 = var6.bind(var2)(var4);
                                        var4 = var4.LayoutAnimationType;
                                        var6 = var4.EXITING;
                                        var4 = var1.props;
                                        var4 = var4.exiting;
                                        var4 = var7.bind(var1)(var6, var4);
                                        var4 = _closure1_slot11;
                                        if (!var4) {
                                            _fun33224_ip = 619;
                                            continue _fun33224
                                        }
                                    case 327:
                                        var4 = var1._componentDOMRef;
                                        if (!var4) {
                                            _fun33224_ip = 619;
                                            continue _fun33224
                                        }
                                    case 339:
                                        var4 = var1._componentDOMRef;
                                        var7 = var4.dummyClone;
                                        if (!(var0 != var7)) {
                                            _fun33224_ip = 394;
                                            continue _fun33224
                                        }
                                    case 355:
                                        var6 = var7.firstChild;
                                        if (!var6) {
                                            _fun33224_ip = 394;
                                            continue _fun33224
                                        }
                                    case 364:
                                        var8 = var4.appendChild;
                                        var6 = var7.firstChild;
                                        var6 = var8.bind(var4)(var6);
                                        if (!(var0 != var7)) {
                                            _fun33224_ip = 394;
                                            continue _fun33224
                                        }
                                    case 385:
                                        var6 = var7.firstChild;
                                        if (var6) {
                                            _fun33224_ip = 364;
                                            continue _fun33224
                                        }
                                    case 394:
                                        var6 = delete var4.dummyClone;
                                        var6 = var1.props;
                                        var6 = var6.exiting;
                                        if (!var6) {
                                            _fun33224_ip = 444;
                                            continue _fun33224
                                        }
                                    case 413:
                                        var7 = _closure1_slot0;
                                        var8 = _closure1_slot2;
                                        var6 = 10;
                                        var6 = var8[var6];
                                        var7 = var7.bind(var2)(var6);
                                        var6 = var7.saveSnapshot;
                                        var6 = var6.bind(var7)(var4);
                                    case 444:
                                        var6 = var1.props;
                                        var6 = var6.entering;
                                        if (var6) {
                                            _fun33224_ip = 468;
                                            continue _fun33224
                                        }
                                    case 458:
                                        var6 = false;
                                        var1._isFirstRender = var6;
                                        return var2;
                                    case 468:
                                        var8 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var7 = 10;
                                        var6 = var6[var7];
                                        var9 = var8.bind(var2)(var6);
                                        var8 = var9.getReducedMotionFromConfig;
                                        var6 = var1.props;
                                        var6 = var6.entering;
                                        var6 = var8.bind(var9)(var6);
                                        if (var6) {
                                            _fun33224_ip = 734;
                                            continue _fun33224
                                        }
                                    case 516:
                                        var8 = var1.context;
                                        var9 = var0 == var8;
                                        var6 = undefined;
                                        if (var9) {
                                            _fun33224_ip = 535;
                                            continue _fun33224
                                        }
                                    case 530:
                                        var6 = var8.current;
                                    case 535:
                                        if (var6) {
                                            _fun33224_ip = 596;
                                            continue _fun33224
                                        }
                                    case 538:
                                        var10 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var7 = var6[var7];
                                        var9 = var10.bind(var2)(var7);
                                        var8 = var9.startWebLayoutAnimation;
                                        var7 = var1.props;
                                        var6 = var6[var11];
                                        var6 = var10.bind(var2)(var6);
                                        var6 = var6.LayoutAnimationType;
                                        var6 = var6.ENTERING;
                                        var6 = var8.bind(var9)(var7, var4, var6);
                                        _fun33224_ip = 619;
                                        continue _fun33224;
                                    case 596:
                                        var6 = var4.style;
                                        if (!var6) {
                                            _fun33224_ip = 619;
                                            continue _fun33224
                                        }
                                    case 604:
                                        var6 = var4.style;
                                        var4 = 'initial';
                                        var6.visibility = var4;
                                    case 619:
                                        var4 = _closure1_slot14;
                                        var4 = !var4;
                                        if (!var4) {
                                            _fun33224_ip = 659;
                                            continue _fun33224
                                        }
                                    case 629:
                                        var7 = _closure1_slot0;
                                        var8 = _closure1_slot2;
                                        var6 = 9;
                                        var6 = var8[var6];
                                        var7 = var7.bind(var2)(var6);
                                        var6 = var7.isFabric;
                                        var4 = var6.bind(var7)();
                                    case 659:
                                        if (!var4) {
                                            _fun33224_ip = 668;
                                            continue _fun33224
                                        }
                                    case 662:
                                        var4 = var1._willUnmount;
                                    case 668:
                                        if (!var4) {
                                            _fun33224_ip = 682;
                                            continue _fun33224
                                        }
                                    case 671:
                                        var7 = 'number';
                                        var6 = typeof var5;
                                        var4 = var7 === var6;
                                    case 682:
                                        if (!var4) {
                                            _fun33224_ip = 724;
                                            continue _fun33224
                                        }
                                    case 685:
                                        var4 = false;
                                        var1._willUnmount = var4;
                                        var4 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var3 = 11;
                                        var3 = var6[var3];
                                        var4 = var4.bind(var2)(var3);
                                        var3 = var4.unmarkNodeAsRemovable;
                                        var3 = var3.bind(var4)(var5);
                                    case 724:
                                        var3 = false;
                                        var1._isFirstRender = var3;
                                        return var2;
                                    case 734:
                                        var2 = false;
                                        var1._isFirstRender = var2;
                                        var1 = var1.props;
                                        var4 = var1.entering;
                                        var3 = var4.callbackV;
                                        var0 = var0 == var3;
                                        if (var0) {
                                            _fun33224_ip = 779;
                                            continue _fun33224
                                        }
                                    case 766:
                                        var2 = var3.call;
                                        var1 = true;
                                        var0 = var2.bind(var3)(var4, var1);
                                    case 779:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var4.value = var0;
                            var0 = new Array(14);
                            var0[0] = var4;
                            var4 = {};
                            var6 = 'componentWillUnmount';
                            var4.key = var6;
                            var6 = function() { // Original name: componentWillUnmount, environment: var5
                                _fun33225: for (var _fun33225_ip = 0;;) switch (_fun33225_ip) {
                                    case 0:
                                        var0 = this;
                                        var3 = var0._NativeEventsManager;
                                        var1 = null;
                                        if (!(var1 != var3)) {
                                            _fun33225_ip = 27;
                                            continue _fun33225
                                        }
                                    case 15:
                                        var2 = var3.detachEvents;
                                        var2 = var2.bind(var3)();
                                    case 27:
                                        var3 = var0._jsPropsUpdater;
                                        var2 = var3.removeOnJSPropsChangeListener;
                                        var2 = var2.bind(var3)(var0);
                                        var2 = var0.getComponentViewTag;
                                        var6 = var2.bind(var0)();
                                        var3 = _closure1_slot14;
                                        if (var3) {
                                            _fun33225_ip = 111;
                                            continue _fun33225
                                        }
                                    case 66:
                                        var5 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var3 = 9;
                                        var4 = var4[var3];
                                        var3 = undefined;
                                        var4 = var5.bind(var3)(var4);
                                        var3 = var4.isFabric;
                                        var3 = var3.bind(var4)();
                                        if (!var3) {
                                            _fun33225_ip = 111;
                                            continue _fun33225
                                        }
                                    case 101:
                                        var3 = true;
                                        var0._willUnmount = var3;
                                        _fun33225_ip = 121;
                                        continue _fun33225;
                                    case 111:
                                        var3 = var0._detachStyles;
                                        var3 = var3.bind(var0)();
                                    case 121:
                                        var4 = var0._InlinePropManager;
                                        var3 = var4.detachInlineProps;
                                        var3 = var3.bind(var4)();
                                        var3 = var0.props;
                                        var3 = var3.sharedTransitionTag;
                                        if (!var3) {
                                            _fun33225_ip = 166;
                                            continue _fun33225
                                        }
                                    case 153:
                                        var4 = var0._configureSharedTransition;
                                        var3 = true;
                                        var3 = var4.bind(var0)(var3);
                                    case 166:
                                        var7 = var0._sharedElementTransition;
                                        if (!(var1 != var7)) {
                                            _fun33225_ip = 200;
                                            continue _fun33225
                                        }
                                    case 176:
                                        var5 = var7.unregisterTransition;
                                        var3 = var0.getComponentViewTag;
                                        var4 = var3.bind(var0)();
                                        var3 = true;
                                        var3 = var5.bind(var7)(var4, var3);
                                    case 200:
                                        var3 = var0.props;
                                        var3 = var3.exiting;
                                        var4 = _closure1_slot14;
                                        if (var4) {
                                            _fun33225_ip = 250;
                                            continue _fun33225
                                        }
                                    case 218:
                                        var8 = _closure1_slot0;
                                        var7 = _closure1_slot2;
                                        var5 = 9;
                                        var7 = var7[var5];
                                        var5 = undefined;
                                        var7 = var8.bind(var5)(var7);
                                        var5 = var7.isFabric;
                                        var4 = var5.bind(var7)();
                                    case 250:
                                        if (var4) {
                                            _fun33225_ip = 263;
                                            continue _fun33225
                                        }
                                    case 253:
                                        var5 = -1;
                                        var4 = var5 === var6;
                                    case 263:
                                        if (var4) {
                                            _fun33225_ip = 305;
                                            continue _fun33225
                                        }
                                    case 266:
                                        var7 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var4 = 12;
                                        var5 = var5[var4];
                                        var4 = undefined;
                                        var4 = var7.bind(var4)(var5);
                                        var5 = var4.ComponentRegistry;
                                        var4 = var5.unregister;
                                        var4 = var4.bind(var5)(var6);
                                    case 305:
                                        var4 = _closure1_slot11;
                                        if (!var4) {
                                            _fun33225_ip = 327;
                                            continue _fun33225
                                        }
                                    case 312:
                                        var4 = var0._componentDOMRef;
                                        if (!var4) {
                                            _fun33225_ip = 327;
                                            continue _fun33225
                                        }
                                    case 321:
                                        if (var3) {
                                            _fun33225_ip = 537;
                                            continue _fun33225
                                        }
                                    case 327:
                                        if (!var3) {
                                            _fun33225_ip = 663;
                                            continue _fun33225
                                        }
                                    case 333:
                                        var4 = _closure1_slot11;
                                        if (var4) {
                                            _fun33225_ip = 663;
                                            continue _fun33225
                                        }
                                    case 343:
                                        var5 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var4 = 9;
                                        var4 = var6[var4];
                                        var7 = undefined;
                                        var5 = var5.bind(var7)(var4);
                                        var4 = var5.isFabric;
                                        var4 = var4.bind(var5)();
                                        if (var4) {
                                            _fun33225_ip = 663;
                                            continue _fun33225
                                        }
                                    case 381:
                                        var4 = 'getReduceMotion';
                                        var4 = var4 in var3;
                                        if (!var4) {
                                            _fun33225_ip = 409;
                                            continue _fun33225
                                        }
                                    case 392:
                                        var4 = var3.getReduceMotion;
                                        var5 = 'function';
                                        var4 = typeof var4;
                                        if (!(var5 !== var4)) {
                                            _fun33225_ip = 441;
                                            continue _fun33225
                                        }
                                    case 409:
                                        var5 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var4 = 21;
                                        var4 = var6[var4];
                                        var5 = var5.bind(var7)(var4);
                                        var4 = var5.getReduceMotionFromConfig;
                                        var4 = var4.bind(var5)();
                                        _fun33225_ip = 482;
                                        continue _fun33225;
                                    case 441:
                                        var6 = _closure1_slot0;
                                        var8 = _closure1_slot2;
                                        var5 = 21;
                                        var5 = var8[var5];
                                        var8 = var6.bind(var7)(var5);
                                        var6 = var8.getReduceMotionFromConfig;
                                        var5 = var3.getReduceMotion;
                                        var5 = var5.bind(var3)();
                                        var4 = var6.bind(var8)(var5);
                                    case 482:
                                        if (var4) {
                                            _fun33225_ip = 663;
                                            continue _fun33225
                                        }
                                    case 488:
                                        var5 = var0._configureLayoutAnimation;
                                        var6 = _closure1_slot0;
                                        var8 = _closure1_slot2;
                                        var4 = 18;
                                        var4 = var8[var4];
                                        var4 = var6.bind(var7)(var4);
                                        var4 = var4.LayoutAnimationType;
                                        var4 = var4.EXITING;
                                        var4 = var5.bind(var0)(var4, var3);
                                        _fun33225_ip = 663;
                                        continue _fun33225;
                                    case 537:
                                        var6 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var4 = 10;
                                        var5 = var5[var4];
                                        var10 = undefined;
                                        var6 = var6.bind(var10)(var5);
                                        var5 = var6.getReducedMotionFromConfig;
                                        var5 = var5.bind(var6)(var3);
                                        if (var5) {
                                            _fun33225_ip = 768;
                                            continue _fun33225
                                        }
                                    case 576:
                                        var9 = _closure1_slot0;
                                        var11 = _closure1_slot2;
                                        var5 = 20;
                                        var5 = var11[var5];
                                        var6 = var9.bind(var10)(var5);
                                        var5 = var6.addHTMLMutationObserver;
                                        var5 = var5.bind(var6)();
                                        var4 = var11[var4];
                                        var8 = var9.bind(var10)(var4);
                                        var7 = var8.startWebLayoutAnimation;
                                        var6 = var0.props;
                                        var5 = var0._componentDOMRef;
                                        var4 = 18;
                                        var4 = var11[var4];
                                        var4 = var9.bind(var10)(var4);
                                        var4 = var4.LayoutAnimationType;
                                        var4 = var4.EXITING;
                                        var4 = var7.bind(var8)(var6, var5, var4);
                                    case 663:
                                        var4 = var0._viewInfo;
                                        var6 = var1 == var4;
                                        var0 = undefined;
                                        var5 = undefined;
                                        if (var6) {
                                            _fun33225_ip = 686;
                                            continue _fun33225
                                        }
                                    case 680:
                                        var5 = var4.shadowNodeWrapper;
                                    case 686:
                                        var4 = _closure1_slot14;
                                        var4 = !var4;
                                        if (!var4) {
                                            _fun33225_ip = 726;
                                            continue _fun33225
                                        }
                                    case 696:
                                        var7 = _closure1_slot0;
                                        var8 = _closure1_slot2;
                                        var6 = 9;
                                        var6 = var8[var6];
                                        var7 = var7.bind(var0)(var6);
                                        var6 = var7.isFabric;
                                        var4 = var6.bind(var7)();
                                    case 726:
                                        if (!var4) {
                                            _fun33225_ip = 732;
                                            continue _fun33225
                                        }
                                    case 729:
                                        var4 = var5;
                                    case 732:
                                        if (!var4) {
                                            _fun33225_ip = 766;
                                            continue _fun33225
                                        }
                                    case 735:
                                        var4 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var2 = 11;
                                        var2 = var6[var2];
                                        var4 = var4.bind(var0)(var2);
                                        var2 = var4.markNodeAsRemovable;
                                        var2 = var2.bind(var4)(var5);
                                    case 766:
                                        return var0;
                                    case 768:
                                        var0 = var3.callbackV;
                                        var0 = var1 == var0;
                                        if (var0) {
                                            _fun33225_ip = 794;
                                            continue _fun33225
                                        }
                                    case 781:
                                        var2 = var3.callbackV;
                                        var1 = true;
                                        var0 = var2.bind(var3)(var1);
                                    case 794:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var4.value = var6;
                            var0[1] = var4;
                            var4 = {};
                            var6 = 'getComponentViewTag';
                            var4.key = var6;
                            var6 = function() { // Original name: getComponentViewTag, environment: var5
                                var1 = this;
                                var0 = var1._getViewInfo;
                                var0 = var0.bind(var1)();
                                var0 = var0.viewTag;
                                return var0;
                            };
                            var4.value = var6;
                            var0[2] = var4;
                            var4 = {};
                            var6 = '_detachStyles';
                            var4.key = var6;
                            var6 = function() { // Original name: _detachStyles, environment: var5
                                _fun33227: for (var _fun33227_ip = 0;;) switch (_fun33227_ip) {
                                    case 0:
                                        var2 = this;
                                        var0 = undefined;
                                        var1 = undefined;
                                        var3 = var2.getComponentViewTag;
                                        var4 = var3.bind(var2)();
                                        var1 = var4;
                                        var3 = -1;
                                        if (!(var3 !== var4)) {
                                            _fun33227_ip = 149;
                                            continue _fun33227
                                        }
                                    case 30:
                                        var4 = var2._styles;
                                        var3 = null;
                                        if (!(var3 !== var4)) {
                                            _fun33227_ip = 149;
                                            continue _fun33227
                                        }
                                    case 42:
                                        var6 = var2._styles;
                                        var4 = var6;
                                        var5 = var4[Symbol.iterator];
                                        var4 = var5().next;
                                    case 54:
                                        var6 = var4().value;
                                        var7 = var5;
                                        if (!(var7 !== var0)) {
                                            _fun33227_ip = 94;
                                            continue _fun33227
                                        }
                                    case 65: // try_start_0
                                        var8 = var6.viewDescriptors;
                                        var7 = var8.remove;
                                        var6 = var1;
                                        var6 = var7.bind(var8)(var6);
                                    case 85: // try_end0
                                        _fun33227_ip = 54;
                                        continue _fun33227;
                                    case 87: // catch_target0
                                        CatchBlockStart(arg_register = 4);
                                        var5.return();
                                        throw var4;
                                    case 94:
                                        var4 = var2.props;
                                        var4 = var4.animatedProps;
                                        var3 = var3 != var4;
                                        if (!var3) {
                                            _fun33227_ip = 118;
                                            continue _fun33227
                                        }
                                    case 112:
                                        var3 = var4.viewDescriptors;
                                    case 118:
                                        if (!var3) {
                                            _fun33227_ip = 149;
                                            continue _fun33227
                                        }
                                    case 121:
                                        var2 = var2.props;
                                        var2 = var2.animatedProps;
                                        var3 = var2.viewDescriptors;
                                        var2 = var3.remove;
                                        var1 = var2.bind(var3)(var1);
                                    case 149:
                                        return var0;
                                }
                            };
                            var4.value = var6;
                            var0[3] = var4;
                            var4 = {};
                            var6 = '_updateFromNative';
                            var4.key = var6;
                            var6 = function(arg0) { // Original name: _updateFromNative, environment: var5
                                _fun33228: for (var _fun33228_ip = 0;;) switch (_fun33228_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var0 = this;
                                        var2 = _closure2_slot1;
                                        var6 = null;
                                        if (!(var6 != var2)) {
                                            _fun33228_ip = 32;
                                            continue _fun33228
                                        }
                                    case 19:
                                        var2 = _closure2_slot1;
                                        var2 = var2.setNativeProps;
                                        if (var2) {
                                            _fun33228_ip = 71;
                                            continue _fun33228
                                        }
                                    case 32:
                                        var4 = var0._componentRef;
                                        var2 = var6 == var4;
                                        if (var2) {
                                            _fun33228_ip = 55;
                                            continue _fun33228
                                        }
                                    case 45:
                                        var5 = var4.setNativeProps;
                                        var2 = var6 == var5;
                                    case 55:
                                        if (var2) {
                                            _fun33228_ip = 93;
                                            continue _fun33228
                                        }
                                    case 58:
                                        var2 = var4.setNativeProps;
                                        var2 = var2.bind(var4)(var3);
                                        _fun33228_ip = 93;
                                        continue _fun33228;
                                    case 71:
                                        var2 = _closure2_slot1;
                                        var1 = var2.setNativeProps;
                                        var0 = var0._componentRef;
                                        var0 = var1.bind(var2)(var0, var3);
                                    case 93:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var4.value = var6;
                            var0[4] = var4;
                            var4 = {};
                            var6 = '_updateReanimatedProps';
                            var4.key = var6;
                            var6 = function(arg0) { // Original name: _updateReanimatedProps, environment: var5
                                _fun33229: for (var _fun33229_ip = 0;;) switch (_fun33229_ip) {
                                    case 0:
                                        var17 = arg0;
                                        var2 = this;
                                        var4 = _closure2_slot1;
                                        var3 = null;
                                        if (!(var3 != var4)) {
                                            _fun33229_ip = 39;
                                            continue _fun33229
                                        }
                                    case 21:
                                        var1 = _closure2_slot1;
                                        var1 = var1.disableReactSync;
                                        if (var1) {
                                            _fun33229_ip = 205;
                                            continue _fun33229
                                        }
                                    case 39:
                                        var16 = {};
                                        var _closure4_slot0 = var16;
                                        var14 = var17;
                                        var9 = undefined;
                                        var8 = 'padding';
                                        var7 = 'margin';
                                        var6 = 'bottom';
                                        var5 = 'top';
                                        var4 = 'string';
                                        var3 = 'Color';
                                        var1 = 'color';
                                        for (var11 in var14)
                                            case 89: {
                                                case 98: var19 = var11;
                                                var21 = var17[var19];
                                                if (!(var1 !== var19)) {
                                                    _fun33229_ip = 123;
                                                    continue _fun33229
                                                }
                                                case 109: var18 = var19.endsWith;
                                                var18 = var18.bind(var19)(var3);
                                                if (!var18) {
                                                    _fun33229_ip = 133;
                                                    continue _fun33229
                                                }
                                                case 123: if (!var21) {
                                                    _fun33229_ip = 133;
                                                    continue _fun33229
                                                }
                                                case 126: var18 = typeof var21;
                                                if (!(var4 !== var18)) {
                                                    _fun33229_ip = 174;
                                                    continue _fun33229
                                                }
                                                case 133: if (!(var5 !== var19)) {
                                                    _fun33229_ip = 172;
                                                    continue _fun33229
                                                }
                                                case 137: if (!(var6 !== var19)) {
                                                    _fun33229_ip = 172;
                                                    continue _fun33229
                                                }
                                                case 141: var18 = var19.startsWith;
                                                var18 = var18.bind(var19)(var7);
                                                if (var18) {
                                                    _fun33229_ip = 172;
                                                    continue _fun33229
                                                }
                                                case 155: var18 = var19.startsWith;
                                                var20 = var18.bind(var19)(var8);
                                                var18 = var21;
                                                if (!var20) {
                                                    _fun33229_ip = 183;
                                                    continue _fun33229
                                                }
                                                case 172: return var9;
                                                case 174: var20 = _closure1_slot9;
                                                var18 = var20.bind(var9)(var21);
                                                case 183: var16[var19] = var18;
                                                _fun33229_ip = 89;
                                                continue _fun33229;
                                            }
                                    case 189:
                                        var1 = var2.setState;
                                        var0 = function(arg0) { // Environment: var0
                                            var0 = {};
                                            var1 = global;
                                            var5 = var1.Object;
                                            var4 = var5.assign;
                                            var1 = arg0;
                                            var3 = var1.reanimatedProps;
                                            var2 = _closure4_slot0;
                                            var1 = {};
                                            var1 = var4.bind(var5)(var1, var3, var2);
                                            var0.reanimatedProps = var1;
                                            return var0;
                                        };
                                        var0 = var1.bind(var2)(var0);
                                    case 205:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var4.value = var6;
                            var0[5] = var4;
                            var4 = {};
                            var6 = '_getViewInfo';
                            var4.key = var6;
                            var6 = function() { // Original name: _getViewInfo, environment: var5
                                _fun33231: for (var _fun33231_ip = 0;;) switch (_fun33231_ip) {
                                    case 0:
                                        var0 = this;
                                        var1 = var0._viewInfo;
                                        var9 = undefined;
                                        if (!(var9 === var1)) {
                                            _fun33231_ip = 294;
                                            continue _fun33231
                                        }
                                    case 18:
                                        var2 = _closure1_slot14;
                                        if (var2) {
                                            _fun33231_ip = 223;
                                            continue _fun33231
                                        }
                                    case 31:
                                        var3 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var2 = 22;
                                        var2 = var4[var2];
                                        var3 = var3.bind(var9)(var2);
                                        var2 = var3.findHostInstance;
                                        var8 = var2.bind(var3)(var0);
                                        var4 = _closure1_slot0;
                                        var7 = _closure1_slot2;
                                        if (var8) {
                                            _fun33231_ip = 119;
                                            continue _fun33231
                                        }
                                    case 73:
                                        var2 = 23;
                                        var2 = var7[var2];
                                        var2 = var4.bind(var9)(var2);
                                        var5 = var2.ReanimatedError;
                                        var2 = var5.prototype;
                                        var3 = Object.create(var2, {
                                            constructor: {
                                                value: var5
                                            }
                                        });
                                        var12 = 'Cannot find host instance for this component. Maybe it renders nothing?';
                                        var13 = var3;
                                        var2 = new var13[var5](var12, var11);
                                        var2 = var2 instanceof Object ? var2 : var3;
                                        throw var2;
                                    case 119:
                                        var2 = 24;
                                        var2 = var7[var2];
                                        var3 = var4.bind(var9)(var2);
                                        var2 = var3.getViewInfo;
                                        var2 = var2.bind(var3)(var8);
                                        var6 = var2.viewTag;
                                        var5 = var2.viewName;
                                        var3 = var2.viewConfig;
                                        var2 = 9;
                                        var2 = var7[var2];
                                        var4 = var4.bind(var9)(var2);
                                        var2 = var4.isFabric;
                                        var7 = var2.bind(var4)();
                                        var4 = null;
                                        if (!var7) {
                                            _fun33231_ip = 219;
                                            continue _fun33231
                                        }
                                    case 187:
                                        var7 = _closure1_slot0;
                                        var10 = _closure1_slot2;
                                        var1 = 25;
                                        var1 = var10[var1];
                                        var7 = var7.bind(var9)(var1);
                                        var1 = var7.getShadowNodeWrapperFromRef;
                                        var4 = var1.bind(var7)(var0, var8);
                                    case 219:
                                        var2 = null;
                                        _fun33231_ip = 241;
                                        continue _fun33231;
                                    case 223:
                                        var6 = var0._componentRef;
                                        var2 = var0._componentDOMRef;
                                        var5 = null;
                                        var3 = null;
                                        var4 = null;
                                    case 241:
                                        var1 = {};
                                        var1.viewTag = var6;
                                        var1.viewName = var5;
                                        var1.shadowNodeWrapper = var4;
                                        var1.viewConfig = var3;
                                        var0._viewInfo = var1;
                                        if (!var2) {
                                            _fun33231_ip = 286;
                                            continue _fun33231
                                        }
                                    case 272:
                                        var1 = var0._viewInfo;
                                        var1.DOMElement = var2;
                                    case 286:
                                        var1 = var0._viewInfo;
                                        return var1;
                                    case 294:
                                        var0 = var0._viewInfo;
                                        return var0;
                                }
                            };
                            var4.value = var6;
                            var0[6] = var4;
                            var4 = {};
                            var6 = '_attachAnimatedStyles';
                            var4.key = var6;
                            var6 = function() { // Original name: _attachAnimatedStyles, environment: var5
                                _fun33232: for (var _fun33232_ip = 0;;) switch (_fun33232_ip) {
                                    case 0:
                                        var1 = this;
                                        var0 = undefined;
                                        var13 = undefined;
                                        var _closure4_slot0 = var1;
                                        var2 = var1.props;
                                        var2 = var2.style;
                                        if (var2) {
                                            _fun33232_ip = 32;
                                            continue _fun33232
                                        }
                                    case 26:
                                        var15 = new Array(0);
                                        _fun33232_ip = 86;
                                        continue _fun33232;
                                    case 32:
                                        var3 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var2 = 26;
                                        var2 = var4[var2];
                                        var4 = var3.bind(var0)(var2);
                                        var3 = var4.flattenArray;
                                        var2 = var1.props;
                                        var2 = var2.style;
                                        var3 = var3.bind(var4)(var2);
                                        var2 = function(arg0) { // Original name: onlyAnimatedStyles, environment: var7
                                            var2 = arg0;
                                            var1 = var2.filter;
                                            var0 = function(arg0) { // Environment: var0
                                                _fun33234: for (var _fun33234_ip = 0;;) switch (_fun33234_ip) {
                                                    case 0:
                                                        var1 = arg0;
                                                        var0 = null;
                                                        var2 = var0 == var1;
                                                        var0 = undefined;
                                                        if (var2) {
                                                            _fun33234_ip = 20;
                                                            continue _fun33234
                                                        }
                                                    case 14:
                                                        var0 = var1.viewDescriptors;
                                                    case 20:
                                                        return var0;
                                                }
                                            };
                                            var0 = var1.bind(var2)(var0);
                                            return var0;
                                        };
                                        var15 = var2.bind(var0)(var3);
                                    case 86:
                                        var _closure4_slot1 = var15;
                                        var2 = var1.props;
                                        var8 = var2.animatedProps;
                                        var14 = var1._styles;
                                        var1._styles = var15;
                                        var3 = var1._animatedProps;
                                        var1._animatedProps = var8;
                                        var2 = var1._getViewInfo;
                                        var2 = var2.bind(var1)();
                                        var6 = var2.viewTag;
                                        var _closure4_slot2 = var6;
                                        var5 = var2.viewName;
                                        var _closure4_slot3 = var5;
                                        var4 = var2.shadowNodeWrapper;
                                        var _closure4_slot4 = var4;
                                        var11 = var2.viewConfig;
                                        var2 = var1.props;
                                        var10 = var2.animatedProps;
                                        var2 = null;
                                        var12 = var2 == var10;
                                        var9 = undefined;
                                        if (var12) {
                                            _fun33232_ip = 199;
                                            continue _fun33232
                                        }
                                    case 193:
                                        var9 = var10.viewDescriptors;
                                    case 199:
                                        if (var9) {
                                            _fun33232_ip = 207;
                                            continue _fun33232
                                        }
                                    case 202:
                                        var9 = var15.length;
                                    case 207:
                                        if (!var9) {
                                            _fun33232_ip = 213;
                                            continue _fun33232
                                        }
                                    case 210:
                                        var9 = var11;
                                    case 213:
                                        if (!var9) {
                                            _fun33232_ip = 250;
                                            continue _fun33232
                                        }
                                    case 216:
                                        var10 = _closure1_slot0;
                                        var12 = _closure1_slot2;
                                        var9 = 27;
                                        var9 = var12[var9];
                                        var10 = var10.bind(var0)(var9);
                                        var9 = var10.adaptViewConfig;
                                        var9 = var9.bind(var10)(var11);
                                    case 250:
                                        var10 = global;
                                        var9 = var10.Set;
                                        var11 = var9.prototype;
                                        var11 = Object.create(var11, {
                                            constructor: {
                                                value: var9
                                            }
                                        });
                                        var20 = var11;
                                        var19 = var15;
                                        var9 = new var20[var9](var19, var18);
                                        var9 = var9 instanceof Object ? var9 : var11;
                                        var12 = function(arg0) { // Original name: isStyleAttached, environment: var7
                                            var0 = arg0;
                                            var2 = var0.viewDescriptors;
                                            var1 = var2.has;
                                            var0 = _closure4_slot2;
                                            var0 = var1.bind(var2)(var0);
                                            return var0;
                                        };
                                        var _closure4_slot5 = var12;
                                        if (!var14) {
                                            _fun33232_ip = 382;
                                            continue _fun33232
                                        }
                                    case 293:
                                        var11 = var15.length;
                                        var16 = 1;
                                        if (!(var16 === var11)) {
                                            _fun33232_ip = 343;
                                            continue _fun33232
                                        }
                                    case 305:
                                        var11 = var14.length;
                                        if (!(var16 === var11)) {
                                            _fun33232_ip = 343;
                                            continue _fun33232
                                        }
                                    case 314:
                                        var11 = 0;
                                        var16 = var15[var11];
                                        var15 = var14[var11];
                                        if (!(var16 === var15)) {
                                            _fun33232_ip = 343;
                                            continue _fun33232
                                        }
                                    case 328:
                                        var11 = var14[var11];
                                        var11 = var12.bind(var0)(var11);
                                        if (var11) {
                                            _fun33232_ip = 631;
                                            continue _fun33232
                                        }
                                    case 343:
                                        var13 = function(arg0) { // Original name: _loop, environment: var7
                                            _fun33236: for (var _fun33236_ip = 0;;) switch (_fun33236_ip) {
                                                case 0:
                                                    var1 = arg0;
                                                    var _closure5_slot0 = var1;
                                                    var4 = _closure4_slot1;
                                                    var3 = var4.some;
                                                    var2 = function(arg0) { // Environment: var2
                                                        _fun33237: for (var _fun33237_ip = 0;;) switch (_fun33237_ip) {
                                                            case 0:
                                                                var3 = arg0;
                                                                var0 = _closure5_slot0;
                                                                var0 = var3 !== var0;
                                                                if (var0) {
                                                                    _fun33237_ip = 34;
                                                                    continue _fun33237
                                                                }
                                                            case 17:
                                                                var2 = _closure4_slot5;
                                                                var1 = undefined;
                                                                var1 = var2.bind(var1)(var3);
                                                                var0 = !var1;
                                                            case 34:
                                                                var0 = !var0;
                                                                return var0;
                                                        }
                                                    };
                                                    var2 = var3.bind(var4)(var2);
                                                    if (var2) {
                                                        _fun33236_ip = 56;
                                                        continue _fun33236
                                                    }
                                                case 35:
                                                    var2 = var1.viewDescriptors;
                                                    var1 = var2.remove;
                                                    var0 = _closure4_slot2;
                                                    var0 = var1.bind(var2)(var0);
                                                case 56:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var11 = var14;
                                        var12 = var11[Symbol.iterator];
                                        var11 = var12().next;
                                    case 354:
                                        var15 = var11().value;
                                        var14 = var12;
                                        if (!(var14 !== var0)) {
                                            _fun33232_ip = 382;
                                            continue _fun33232
                                        }
                                    case 365: // try_start_0
                                        var14 = var13;
                                        var14 = var14.bind(var0)(var15);
                                    case 373: // try_end0
                                        _fun33232_ip = 354;
                                        continue _fun33232;
                                    case 375: // catch_target0
                                        CatchBlockStart(arg_register = 11);
                                        var12.return();
                                        throw var11;
                                    case 382:
                                        var11 = var8;
                                        if (!var11) {
                                            _fun33232_ip = 395;
                                            continue _fun33232
                                        }
                                    case 388:
                                        var11 = _closure1_slot12;
                                    case 395:
                                        if (!var11) {
                                            _fun33232_ip = 504;
                                            continue _fun33232
                                        }
                                    case 398:
                                        var11 = var1.jestAnimatedProps;
                                        var15 = var10.Object;
                                        var14 = var15.assign;
                                        var10 = var1.jestAnimatedProps;
                                        var13 = var10.value;
                                        var10 = var2 == var8;
                                        var12 = undefined;
                                        if (var10) {
                                            _fun33232_ip = 455;
                                            continue _fun33232
                                        }
                                    case 435:
                                        var10 = var8.initial;
                                        var16 = var2 == var10;
                                        var12 = undefined;
                                        if (var16) {
                                            _fun33232_ip = 455;
                                            continue _fun33232
                                        }
                                    case 450:
                                        var12 = var10.value;
                                    case 455:
                                        var10 = {};
                                        var10 = var14.bind(var15)(var10, var13, var12);
                                        var11.value = var10;
                                        var10 = var2 != var8;
                                        if (!var10) {
                                            _fun33232_ip = 483;
                                            continue _fun33232
                                        }
                                    case 477:
                                        var10 = var8.jestAnimatedValues;
                                    case 483:
                                        if (!var10) {
                                            _fun33232_ip = 504;
                                            continue _fun33232
                                        }
                                    case 486:
                                        var10 = var8.jestAnimatedValues;
                                        var8 = var1.jestAnimatedProps;
                                        var10.current = var8;
                                    case 504:
                                        var8 = var9.forEach;
                                        var7 = function(arg0) { // Environment: var7
                                            _fun33238: for (var _fun33238_ip = 0;;) switch (_fun33238_ip) {
                                                case 0:
                                                    var1 = arg0;
                                                    var4 = var1.viewDescriptors;
                                                    var3 = var4.add;
                                                    var2 = {};
                                                    var5 = _closure4_slot2;
                                                    var2.tag = var5;
                                                    var5 = _closure4_slot3;
                                                    var2.name = var5;
                                                    var5 = _closure4_slot4;
                                                    var2.shadowNodeWrapper = var5;
                                                    var2 = var3.bind(var4)(var2);
                                                    var2 = _closure1_slot12;
                                                    if (!var2) {
                                                        _fun33238_ip = 137;
                                                        continue _fun33238
                                                    }
                                                case 59:
                                                    var0 = _closure4_slot0;
                                                    var3 = var0.jestAnimatedStyle;
                                                    var2 = global;
                                                    var7 = var2.Object;
                                                    var6 = var7.assign;
                                                    var2 = var0.jestAnimatedStyle;
                                                    var5 = var2.value;
                                                    var2 = var1.initial;
                                                    var4 = var2.value;
                                                    var2 = {};
                                                    var2 = var6.bind(var7)(var2, var5, var4);
                                                    var3.value = var2;
                                                    var1 = var1.jestAnimatedValues;
                                                    var0 = var0.jestAnimatedStyle;
                                                    var1.current = var0;
                                                case 137:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var7 = var8.bind(var9)(var7);
                                        var7 = var3;
                                        if (!var7) {
                                            _fun33232_ip = 540;
                                            continue _fun33232
                                        }
                                    case 525:
                                        var8 = var1.props;
                                        var8 = var8.animatedProps;
                                        var7 = var3 !== var8;
                                    case 540:
                                        if (!var7) {
                                            _fun33232_ip = 560;
                                            continue _fun33232
                                        }
                                    case 543:
                                        var7 = var3.viewDescriptors;
                                        var3 = var7.remove;
                                        var3 = var3.bind(var7)(var6);
                                    case 560:
                                        var3 = var1.props;
                                        var3 = var3.animatedProps;
                                        var2 = var2 != var3;
                                        if (!var2) {
                                            _fun33232_ip = 584;
                                            continue _fun33232
                                        }
                                    case 578:
                                        var2 = var3.viewDescriptors;
                                    case 584:
                                        if (!var2) {
                                            _fun33232_ip = 629;
                                            continue _fun33232
                                        }
                                    case 587:
                                        var1 = var1.props;
                                        var1 = var1.animatedProps;
                                        var3 = var1.viewDescriptors;
                                        var2 = var3.add;
                                        var1 = {};
                                        var1.tag = var6;
                                        var1.name = var5;
                                        var1.shadowNodeWrapper = var4;
                                        var1 = var2.bind(var3)(var1);
                                    case 629:
                                        return var0;
                                    case 631:
                                        return var0;
                                }
                            };
                            var4.value = var6;
                            var0[7] = var4;
                            var4 = {};
                            var6 = 'componentDidUpdate';
                            var4.key = var6;
                            var6 = function(arg0, arg1, arg2) { // Original name: componentDidUpdate, environment: var5
                                _fun33239: for (var _fun33239_ip = 0;;) switch (_fun33239_ip) {
                                    case 0:
                                        var6 = arg0;
                                        var7 = arg2;
                                        var1 = this;
                                        var11 = var1._configureLayoutAnimation;
                                        var4 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var0 = 18;
                                        var8 = var5[var0];
                                        var2 = undefined;
                                        var8 = var4.bind(var2)(var8);
                                        var8 = var8.LayoutAnimationType;
                                        var10 = var8.LAYOUT;
                                        var8 = var1.props;
                                        var9 = var8.layout;
                                        var8 = var6.layout;
                                        var8 = var11.bind(var1)(var10, var9, var8);
                                        var8 = var1._configureLayoutAnimation;
                                        var0 = var5[var0];
                                        var0 = var4.bind(var2)(var0);
                                        var0 = var0.LayoutAnimationType;
                                        var5 = var0.EXITING;
                                        var0 = var1.props;
                                        var4 = var0.exiting;
                                        var0 = var6.exiting;
                                        var0 = var8.bind(var1)(var5, var4, var0);
                                        var0 = var1.props;
                                        var0 = var0.sharedTransitionTag;
                                        var0 = var2 === var0;
                                        if (!var0) {
                                            _fun33239_ip = 155;
                                            continue _fun33239
                                        }
                                    case 145:
                                        var4 = var6.sharedTransitionTag;
                                        var0 = var2 === var4;
                                    case 155:
                                        if (var0) {
                                            _fun33239_ip = 168;
                                            continue _fun33239
                                        }
                                    case 158:
                                        var0 = var1._configureSharedTransition;
                                        var0 = var0.bind(var1)();
                                    case 168:
                                        var5 = var1._NativeEventsManager;
                                        var0 = null;
                                        if (!(var0 != var5)) {
                                            _fun33239_ip = 193;
                                            continue _fun33239
                                        }
                                    case 180:
                                        var4 = var5.updateEvents;
                                        var4 = var4.bind(var5)(var6);
                                    case 193:
                                        var4 = var1._attachAnimatedStyles;
                                        var4 = var4.bind(var1)();
                                        var6 = var1._InlinePropManager;
                                        var5 = var6.attachInlineProps;
                                        var4 = var1._getViewInfo;
                                        var4 = var4.bind(var1)();
                                        var4 = var5.bind(var6)(var1, var4);
                                        var4 = _closure1_slot11;
                                        if (!var4) {
                                            _fun33239_ip = 249;
                                            continue _fun33239
                                        }
                                    case 238:
                                        var5 = var1.props;
                                        var4 = var5.exiting;
                                    case 249:
                                        if (!var4) {
                                            _fun33239_ip = 258;
                                            continue _fun33239
                                        }
                                    case 252:
                                        var4 = var1._componentDOMRef;
                                    case 258:
                                        if (!var4) {
                                            _fun33239_ip = 298;
                                            continue _fun33239
                                        }
                                    case 261:
                                        var5 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var4 = 10;
                                        var4 = var6[var4];
                                        var6 = var5.bind(var2)(var4);
                                        var5 = var6.saveSnapshot;
                                        var4 = var1._componentDOMRef;
                                        var4 = var5.bind(var6)(var4);
                                    case 298:
                                        var4 = _closure1_slot11;
                                        if (!var4) {
                                            _fun33239_ip = 408;
                                            continue _fun33239
                                        }
                                    case 305:
                                        if (!var7) {
                                            _fun33239_ip = 408;
                                            continue _fun33239
                                        }
                                    case 308:
                                        var4 = var1.props;
                                        var4 = var4.layout;
                                        if (!var4) {
                                            _fun33239_ip = 408;
                                            continue _fun33239
                                        }
                                    case 322:
                                        var6 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var5 = 10;
                                        var4 = var4[var5];
                                        var8 = var6.bind(var2)(var4);
                                        var6 = var8.getReducedMotionFromConfig;
                                        var4 = var1.props;
                                        var4 = var4.layout;
                                        var4 = var6.bind(var8)(var4);
                                        if (var4) {
                                            _fun33239_ip = 410;
                                            continue _fun33239
                                        }
                                    case 367:
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var3 = var3[var5];
                                        var6 = var4.bind(var2)(var3);
                                        var5 = var6.tryActivateLayoutTransition;
                                        var4 = var1.props;
                                        var3 = var1._componentDOMRef;
                                        var3 = var5.bind(var6)(var4, var3, var7);
                                    case 408:
                                        return var2;
                                    case 410:
                                        var1 = var1.props;
                                        var4 = var1.layout;
                                        var3 = var4.callbackV;
                                        var0 = var0 == var3;
                                        if (var0) {
                                            _fun33239_ip = 447;
                                            continue _fun33239
                                        }
                                    case 434:
                                        var2 = var3.call;
                                        var1 = true;
                                        var0 = var2.bind(var3)(var4, var1);
                                    case 447:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var4.value = var6;
                            var0[8] = var4;
                            var4 = {};
                            var6 = '_configureLayoutAnimation';
                            var4.key = var6;
                            var6 = function(arg0, arg1, arg2) { // Original name: _configureLayoutAnimation, environment: var5
                                _fun33240: for (var _fun33240_ip = 0;;) switch (_fun33240_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var2 = arg1;
                                        var1 = arg2;
                                        var5 = this;
                                        var0 = _closure1_slot11;
                                        if (var0) {
                                            _fun33240_ip = 276;
                                            continue _fun33240
                                        }
                                    case 25:
                                        if (!(var2 !== var1)) {
                                            _fun33240_ip = 276;
                                            continue _fun33240
                                        }
                                    case 32:
                                        var0 = var5._isReducedMotion;
                                        var0 = var0.bind(var5)(var2);
                                        var9 = var2;
                                        if (!var0) {
                                            _fun33240_ip = 60;
                                            continue _fun33240
                                        }
                                    case 51:
                                        var0 = undefined;
                                        var9 = undefined;
                                        if (var1) {
                                            _fun33240_ip = 60;
                                            continue _fun33240
                                        }
                                    case 58:
                                        return var0;
                                    case 60:
                                        var1 = _closure1_slot0;
                                        var7 = _closure1_slot2;
                                        var0 = 28;
                                        var0 = var7[var0];
                                        var11 = undefined;
                                        var3 = var1.bind(var11)(var0);
                                        var2 = var3.updateLayoutAnimations;
                                        var0 = 9;
                                        var0 = var7[var0];
                                        var1 = var1.bind(var11)(var0);
                                        var0 = var1.isFabric;
                                        var0 = var0.bind(var1)();
                                        if (!var0) {
                                            _fun33240_ip = 149;
                                            continue _fun33240
                                        }
                                    case 113:
                                        var1 = _closure1_slot0;
                                        var7 = _closure1_slot2;
                                        var0 = 18;
                                        var0 = var7[var0];
                                        var0 = var1.bind(var11)(var0);
                                        var0 = var0.LayoutAnimationType;
                                        var0 = var0.ENTERING;
                                        if (!(var4 !== var0)) {
                                            _fun33240_ip = 161;
                                            continue _fun33240
                                        }
                                    case 149:
                                        var0 = var5.getComponentViewTag;
                                        var1 = var0.bind(var5)();
                                        _fun33240_ip = 167;
                                        continue _fun33240;
                                    case 161:
                                        var1 = var5.reanimatedID;
                                    case 167:
                                        var0 = var9;
                                        if (!var0) {
                                            _fun33240_ip = 269;
                                            continue _fun33240
                                        }
                                    case 173:
                                        var10 = _closure1_slot0;
                                        var12 = _closure1_slot2;
                                        var6 = 29;
                                        var6 = var12[var6];
                                        var8 = var10.bind(var11)(var6);
                                        var7 = var8.maybeBuild;
                                        var6 = 18;
                                        var6 = var12[var6];
                                        var6 = var10.bind(var11)(var6);
                                        var6 = var6.LayoutAnimationType;
                                        var10 = var6.LAYOUT;
                                        var6 = undefined;
                                        if (!(var4 !== var10)) {
                                            _fun33240_ip = 250;
                                            continue _fun33240
                                        }
                                    case 229:
                                        var5 = var5.props;
                                        var10 = null;
                                        var10 = var10 == var5;
                                        var6 = undefined;
                                        if (var10) {
                                            _fun33240_ip = 250;
                                            continue _fun33240
                                        }
                                    case 245:
                                        var6 = var5.style;
                                    case 250:
                                        var5 = _closure3_slot0;
                                        var5 = var5.displayName;
                                        var0 = var7.bind(var8)(var9, var6, var5);
                                    case 269:
                                        var0 = var2.bind(var3)(var1, var4, var0);
                                    case 276:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var4.value = var6;
                            var0[9] = var4;
                            var4 = {};
                            var6 = '_configureSharedTransition';
                            var4.key = var6;
                            var6 = function() { // Original name: _configureSharedTransition, environment: var5
                                _fun33241: for (var _fun33241_ip = 0;;) switch (_fun33241_ip) {
                                    case 0:
                                        var2 = this;
                                        var0 = undefined;
                                        var3 = undefined;
                                        var4 = arguments.length;
                                        var1 = 0;
                                        var6 = var4 > var1;
                                        if (!var6) {
                                            _fun33241_ip = 27;
                                            continue _fun33241
                                        }
                                    case 19:
                                        var4 = arguments[var1];
                                        var6 = var0 !== var4;
                                    case 27:
                                        if (!var6) {
                                            _fun33241_ip = 34;
                                            continue _fun33241
                                        }
                                    case 30:
                                        var6 = arguments[var1];
                                    case 34:
                                        var1 = _closure1_slot11;
                                        if (var1) {
                                            _fun33241_ip = 209;
                                            continue _fun33241
                                        }
                                    case 47:
                                        var1 = var2.props;
                                        var5 = var1.sharedTransitionTag;
                                        if (var5) {
                                            _fun33241_ip = 103;
                                            continue _fun33241
                                        }
                                    case 61:
                                        var8 = var2._sharedElementTransition;
                                        var1 = null;
                                        if (!(var1 != var8)) {
                                            _fun33241_ip = 95;
                                            continue _fun33241
                                        }
                                    case 73:
                                        var7 = var8.unregisterTransition;
                                        var4 = var2.getComponentViewTag;
                                        var4 = var4.bind(var2)();
                                        var4 = var7.bind(var8)(var4, var6);
                                    case 95:
                                        var2._sharedElementTransition = var1;
                                        return var0;
                                    case 103:
                                        var1 = var2.props;
                                        var1 = var1.sharedTransitionStyle;
                                        var4 = null;
                                        if (!(var4 == var1)) {
                                            _fun33241_ip = 128;
                                            continue _fun33241
                                        }
                                    case 122:
                                        var1 = var2._sharedElementTransition;
                                    case 128:
                                        if (!(var4 == var1)) {
                                            _fun33241_ip = 178;
                                            continue _fun33241
                                        }
                                    case 132:
                                        var4 = _closure1_slot0;
                                        var7 = _closure1_slot2;
                                        var3 = 30;
                                        var3 = var7[var3];
                                        var3 = var4.bind(var0)(var3);
                                        var3 = var3.SharedTransition;
                                        var4 = var3.prototype;
                                        var4 = Object.create(var4, {
                                            constructor: {
                                                value: var3
                                            }
                                        });
                                        var12 = var4;
                                        var3 = new var12[var3](var11);
                                        var1 = var3 instanceof Object ? var3 : var4;
                                    case 178:
                                        var4 = var1.registerTransition;
                                        var3 = var2.getComponentViewTag;
                                        var3 = var3.bind(var2)();
                                        var3 = var4.bind(var1)(var3, var5, var6);
                                        var2._sharedElementTransition = var1;
                                    case 209:
                                        return var0;
                                }
                            };
                            var4.value = var6;
                            var0[10] = var4;
                            var4 = {};
                            var6 = '_isReducedMotion';
                            var4.key = var6;
                            var6 = function(arg0) { // Original name: _isReducedMotion, environment: var5
                                _fun33242: for (var _fun33242_ip = 0;;) switch (_fun33242_ip) {
                                    case 0:
                                        var4 = arg0;
                                        if (!var4) {
                                            _fun33242_ip = 34;
                                            continue _fun33242
                                        }
                                    case 6:
                                        var0 = 'getReduceMotion';
                                        var0 = var0 in var4;
                                        if (!var0) {
                                            _fun33242_ip = 34;
                                            continue _fun33242
                                        }
                                    case 17:
                                        var0 = var4.getReduceMotion;
                                        var1 = 'function';
                                        var0 = typeof var0;
                                        if (!(var1 !== var0)) {
                                            _fun33242_ip = 71;
                                            continue _fun33242
                                        }
                                    case 34:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 21;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var1);
                                        var0 = var1.getReduceMotionFromConfig;
                                        var0 = var0.bind(var1)();
                                        _fun33242_ip = 117;
                                        continue _fun33242;
                                    case 71:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var1 = 21;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var3 = var3.bind(var1)(var2);
                                        var2 = var3.getReduceMotionFromConfig;
                                        var1 = var4.getReduceMotion;
                                        var1 = var1.bind(var4)();
                                        var0 = var2.bind(var3)(var1);
                                    case 117:
                                        return var0;
                                }
                            };
                            var4.value = var6;
                            var0[11] = var4;
                            var4 = {};
                            var6 = 'getSnapshotBeforeUpdate';
                            var4.key = var6;
                            var6 = function() { // Original name: getSnapshotBeforeUpdate, environment: var5
                                _fun33243: for (var _fun33243_ip = 0;;) switch (_fun33243_ip) {
                                    case 0:
                                        var1 = this;
                                        var2 = _closure1_slot11;
                                        var3 = null;
                                        var0 = null;
                                        if (!var2) {
                                            _fun33243_ip = 75;
                                            continue _fun33243
                                        }
                                    case 17:
                                        var2 = var1.props;
                                        var2 = var2.layout;
                                        var0 = null;
                                        if (!var2) {
                                            _fun33243_ip = 75;
                                            continue _fun33243
                                        }
                                    case 33:
                                        var2 = var1._componentDOMRef;
                                        var4 = var3 != var2;
                                        var0 = null;
                                        if (!var4) {
                                            _fun33243_ip = 75;
                                            continue _fun33243
                                        }
                                    case 48:
                                        var2 = var2.getBoundingClientRect;
                                        var0 = null;
                                        if (!var2) {
                                            _fun33243_ip = 75;
                                            continue _fun33243
                                        }
                                    case 59:
                                        var2 = var1._componentDOMRef;
                                        var1 = var2.getBoundingClientRect;
                                        var0 = var1.bind(var2)();
                                    case 75:
                                        return var0;
                                }
                            };
                            var4.value = var6;
                            var0[12] = var4;
                            var4 = {};
                            var6 = 'render';
                            var4.key = var6;
                            var5 = function() { // Original name: render, environment: var5
                                _fun33244: for (var _fun33244_ip = 0;;) switch (_fun33244_ip) {
                                    case 0:
                                        var0 = this;
                                        var2 = var0._PropsFilter;
                                        var1 = var2.filterNonAnimatedProps;
                                        var10 = var1.bind(var2)(var0);
                                        var2 = _closure1_slot12;
                                        if (!var2) {
                                            _fun33244_ip = 56;
                                            continue _fun33244
                                        }
                                    case 32:
                                        var2 = var0.jestAnimatedStyle;
                                        var10.jestAnimatedStyle = var2;
                                        var2 = var0.jestAnimatedProps;
                                        var10.jestAnimatedProps = var2;
                                    case 56:
                                        var2 = var0._isFirstRender;
                                        if (!var2) {
                                            _fun33244_ip = 69;
                                            continue _fun33244
                                        }
                                    case 65:
                                        var2 = _closure1_slot11;
                                    case 69:
                                        if (!var2) {
                                            _fun33244_ip = 78;
                                            continue _fun33244
                                        }
                                    case 72:
                                        var2 = var10.entering;
                                    case 78:
                                        if (!var2) {
                                            _fun33244_ip = 123;
                                            continue _fun33244
                                        }
                                    case 81:
                                        var5 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var3 = 10;
                                        var4 = var4[var3];
                                        var3 = undefined;
                                        var5 = var5.bind(var3)(var4);
                                        var4 = var5.getReducedMotionFromConfig;
                                        var3 = var10.entering;
                                        var3 = var4.bind(var5)(var3);
                                        var2 = !var3;
                                    case 123:
                                        if (!var2) {
                                            _fun33244_ip = 238;
                                            continue _fun33244
                                        }
                                    case 126:
                                        var2 = global;
                                        var5 = var2.Array;
                                        var4 = var5.isArray;
                                        var3 = var10.style;
                                        var3 = var4.bind(var5)(var3);
                                        if (var3) {
                                            _fun33244_ip = 198;
                                            continue _fun33244
                                        }
                                    case 152:
                                        var6 = var2.Object;
                                        var5 = var6.assign;
                                        var4 = var10.style;
                                        var2 = null;
                                        if (!(var2 == var4)) {
                                            _fun33244_ip = 176;
                                            continue _fun33244
                                        }
                                    case 174:
                                        var4 = {};
                                    case 176:
                                        var3 = {};
                                        var2 = 'hidden';
                                        var3.visibility = var2;
                                        var2 = {};
                                        var2 = var5.bind(var6)(var2, var4, var3);
                                        _fun33244_ip = 232;
                                        continue _fun33244;
                                    case 198:
                                        var5 = var10.style;
                                        var4 = var5.concat;
                                        var6 = {};
                                        var3 = 'hidden';
                                        var6.visibility = var3;
                                        var3 = new Array(1);
                                        var3[0] = var6;
                                        var2 = var4.bind(var5)(var3);
                                    case 232:
                                        var10.style = var2;
                                    case 238:
                                        var4 = var0.context;
                                        var2 = null;
                                        var5 = var2 == var4;
                                        var3 = undefined;
                                        var2 = undefined;
                                        if (var5) {
                                            _fun33244_ip = 261;
                                            continue _fun33244
                                        }
                                    case 256:
                                        var2 = var4.current;
                                    case 261:
                                        var4 = undefined;
                                        if (var2) {
                                            _fun33244_ip = 329;
                                            continue _fun33244
                                        }
                                    case 266:
                                        var5 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var2 = 9;
                                        var2 = var6[var2];
                                        var5 = var5.bind(var3)(var2);
                                        var2 = var5.isFabric;
                                        var2 = var2.bind(var5)();
                                        var4 = undefined;
                                        if (!var2) {
                                            _fun33244_ip = 329;
                                            continue _fun33244
                                        }
                                    case 301:
                                        var6 = var0.reanimatedID;
                                        var2 = global;
                                        var2 = var2.HermesInternal;
                                        var5 = var2.concat;
                                        var2 = '';
                                        var4 = var5.bind(var2)(var6);
                                    case 329:
                                        var2 = _closure1_slot12;
                                        if (var2) {
                                            _fun33244_ip = 340;
                                            continue _fun33244
                                        }
                                    case 336:
                                        var9 = {};
                                        _fun33244_ip = 404;
                                        continue _fun33244;
                                    case 340:
                                        var2 = {};
                                        var5 = var0.props;
                                        var5 = var5.style;
                                        if (!var5) {
                                            _fun33244_ip = 374;
                                            continue _fun33244
                                        }
                                    case 355:
                                        var7 = _closure1_slot17;
                                        var6 = var0.props;
                                        var6 = var6.style;
                                        var5 = var7.bind(var3)(var6);
                                    case 374:
                                        var2.jestInlineStyle = var5;
                                        var5 = var0.jestAnimatedStyle;
                                        var2.jestAnimatedStyle = var5;
                                        var5 = var0.jestAnimatedProps;
                                        var2.jestAnimatedProps = var5;
                                        var9 = var2;
                                    case 404:
                                        var2 = _closure1_slot10;
                                        var1 = _closure2_slot0;
                                        var5 = global;
                                        var8 = var5.Object;
                                        var7 = var8.assign;
                                        var6 = {};
                                        var6.nativeID = var4;
                                        var4 = var0.state;
                                        var14 = var4.reanimatedProps;
                                        var4 = {};
                                        var0 = var0._setComponentRef;
                                        var4.ref = var0;
                                        var0 = {};
                                        var11 = false;
                                        var0.collapsable = var11;
                                        var18 = var8;
                                        var17 = var6;
                                        var16 = var10;
                                        var15 = var9;
                                        var13 = var4;
                                        var12 = var0;
                                        var0 = var18[var7](var17, var16, var15, var14, var13, var12, var11);
                                        var0 = var2.bind(var3)(var1, var0);
                                        return var0;
                                }
                            };
                            var4.value = var5;
                            var0[13] = var4;
                            var0 = var1.bind(var2)(var3, var0);
                            return var0;
                        };
                        var4 = undefined;
                        var5 = var3.bind(var4)(var5);
                        var _closure2_slot2 = var5;
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 31;
                        var3 = var7[var3];
                        var3 = var6.bind(var4)(var3);
                        var3 = var3.SkipEnteringContext;
                        var5.contextType = var3;
                        var8 = var2.displayName;
                        if (var8) {
                            _fun33218_ip = 197;
                            continue _fun33218
                        }
                    case 192:
                        var8 = var2.name;
                    case 197:
                        if (var8) {
                            _fun33218_ip = 204;
                            continue _fun33218
                        }
                    case 200:
                        var8 = 'Component';
                    case 204:
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var7 = var3.concat;
                        var6 = 'AnimatedComponent(';
                        var3 = ')';
                        var3 = var7.bind(var6)(var8, var3);
                        var5.displayName = var3;
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 32;
                        var1 = var5[var1];
                        var3 = var3.bind(var4)(var1);
                        var1 = var3.componentWithRef;
                        var0 = function(arg0, arg1) { // Environment: var0
                            _fun33245: for (var _fun33245_ip = 0;;) switch (_fun33245_ip) {
                                case 0:
                                    var1 = arg1;
                                    var3 = _closure1_slot10;
                                    var2 = _closure2_slot2;
                                    var0 = global;
                                    var6 = var0.Object;
                                    var5 = var6.assign;
                                    var4 = null;
                                    if (!(var4 !== var1)) {
                                        _fun33245_ip = 46;
                                        continue _fun33245
                                    }
                                case 36:
                                    var0 = {};
                                    var0.forwardedRef = var1;
                                    var4 = var0;
                                case 46:
                                    var1 = {};
                                    var0 = arg0;
                                    var1 = var5.bind(var6)(var1, var0, var4);
                                    var0 = undefined;
                                    var0 = var3.bind(var0)(var2, var1);
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var3)(var0);
                        var1 = var2.displayName;
                        if (var1) {
                            _fun33218_ip = 288;
                            continue _fun33218
                        }
                    case 283:
                        var1 = var2.name;
                    case 288:
                        if (var1) {
                            _fun33218_ip = 295;
                            continue _fun33218
                        }
                    case 291:
                        var1 = 'Component';
                    case 295:
                        var0.displayName = var1;
                        return var0;
                }
            };
            var2.createAnimatedComponent = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3714, 31, 27, 33, 3681, 3732, 3722, 3773, 44, 3774, 3775, 3782, 3784, 3703, 3785, 3765, 3718, 3707, 3689, 3787, 3706, 3776, 3778, 3788, 3789, 3790, 3812, 3813]);