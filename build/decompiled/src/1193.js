// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun12955: for (var _fun12955_ip = 0;;) switch (_fun12955_ip) {
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
                _fun12955_ip = 74;
                continue _fun12955;
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
    var0 = function(arg0, arg1) { // Original name: getTouchedComponentInfo, environment: var1
        _fun12958: for (var _fun12958_ip = 0;;) switch (_fun12958_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.elementType;
                var7 = undefined;
                var2 = null;
                var8 = undefined;
                if (!(var2 !== var1)) {
                    _fun12958_ip = 30;
                    continue _fun12958
                }
            case 19:
                var8 = undefined;
                if (!(var7 !== var1)) {
                    _fun12958_ip = 30;
                    continue _fun12958
                }
            case 25:
                var8 = var1.displayName;
            case 30:
                var6 = var0.memoizedProps;
                if (var6) {
                    _fun12958_ip = 55;
                    continue _fun12958
                }
            case 39:
                var0 = undefined;
                if (!var8) {
                    _fun12958_ip = 53;
                    continue _fun12958
                }
            case 44:
                var1 = {};
                var1.name = var8;
                var0 = var1;
            case 53:
                _fun12958_ip = 155;
                continue _fun12958;
            case 55:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 8;
                var1 = var3[var1];
                var3 = var2.bind(var7)(var1);
                var2 = var3.dropUndefinedKeys;
                var1 = {};
                var5 = _closure1_slot18;
                var5 = var5.bind(var7)(var6);
                if (var5) {
                    _fun12958_ip = 101;
                    continue _fun12958
                }
            case 98:
                var5 = var8;
            case 101:
                var1.name = var5;
                var5 = _closure1_slot19;
                var5 = var5.bind(var7)(var6);
                var1.element = var5;
                var5 = _closure1_slot20;
                var5 = var5.bind(var7)(var6);
                var1.file = var5;
                var5 = _closure1_slot21;
                var4 = arg1;
                var4 = var5.bind(var7)(var6, var4);
                var1.label = var4;
                var0 = var2.bind(var3)(var1);
            case 155:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function(arg0) { // Original name: getComponentName, environment: var1
        _fun12959: for (var _fun12959_ip = 0;;) switch (_fun12959_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot12;
                var0 = var2[var0];
                var3 = 'string';
                var0 = typeof var0;
                var0 = var3 === var0;
                if (!var0) {
                    _fun12959_ip = 47;
                    continue _fun12959
                }
            case 28:
                var3 = _closure1_slot12;
                var3 = var2[var3];
                var4 = var3.length;
                var3 = 0;
                var0 = var4 > var3;
            case 47:
                if (!var0) {
                    _fun12959_ip = 66;
                    continue _fun12959
                }
            case 50:
                var3 = _closure1_slot12;
                var4 = var2[var3];
                var3 = 'unknown';
                var0 = var3 !== var4;
            case 66:
                if (!var0) {
                    _fun12959_ip = 77;
                    continue _fun12959
                }
            case 69:
                var1 = _closure1_slot12;
                var0 = var2[var1];
            case 77:
                if (var0) {
                    _fun12959_ip = 82;
                    continue _fun12959
                }
            case 80:
                var0 = undefined;
            case 82:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function(arg0) { // Original name: getElementName, environment: var1
        _fun12960: for (var _fun12960_ip = 0;;) switch (_fun12960_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot13;
                var0 = var2[var0];
                var3 = 'string';
                var0 = typeof var0;
                var0 = var3 === var0;
                if (!var0) {
                    _fun12960_ip = 47;
                    continue _fun12960
                }
            case 28:
                var3 = _closure1_slot13;
                var3 = var2[var3];
                var4 = var3.length;
                var3 = 0;
                var0 = var4 > var3;
            case 47:
                if (!var0) {
                    _fun12960_ip = 66;
                    continue _fun12960
                }
            case 50:
                var3 = _closure1_slot13;
                var4 = var2[var3];
                var3 = 'unknown';
                var0 = var3 !== var4;
            case 66:
                if (!var0) {
                    _fun12960_ip = 77;
                    continue _fun12960
                }
            case 69:
                var1 = _closure1_slot13;
                var0 = var2[var1];
            case 77:
                if (var0) {
                    _fun12960_ip = 82;
                    continue _fun12960
                }
            case 80:
                var0 = undefined;
            case 82:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function(arg0) { // Original name: getFileName, environment: var1
        _fun12961: for (var _fun12961_ip = 0;;) switch (_fun12961_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot14;
                var0 = var2[var0];
                var3 = 'string';
                var0 = typeof var0;
                var0 = var3 === var0;
                if (!var0) {
                    _fun12961_ip = 47;
                    continue _fun12961
                }
            case 28:
                var3 = _closure1_slot14;
                var3 = var2[var3];
                var4 = var3.length;
                var3 = 0;
                var0 = var4 > var3;
            case 47:
                if (!var0) {
                    _fun12961_ip = 66;
                    continue _fun12961
                }
            case 50:
                var3 = _closure1_slot14;
                var4 = var2[var3];
                var3 = 'unknown';
                var0 = var3 !== var4;
            case 66:
                if (!var0) {
                    _fun12961_ip = 77;
                    continue _fun12961
                }
            case 69:
                var1 = _closure1_slot14;
                var0 = var2[var1];
            case 77:
                if (var0) {
                    _fun12961_ip = 82;
                    continue _fun12961
                }
            case 80:
                var0 = undefined;
            case 82:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function(arg0, arg1) { // Original name: getLabelValue, environment: var1
        _fun12962: for (var _fun12962_ip = 0;;) switch (_fun12962_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var0 = _closure1_slot11;
                var0 = var2[var0];
                var6 = 'string';
                var0 = typeof var0;
                if (!(var6 === var0)) {
                    _fun12962_ip = 47;
                    continue _fun12962
                }
            case 28:
                var0 = _closure1_slot11;
                var0 = var2[var0];
                var4 = var0.length;
                var0 = 0;
                if (!(!(var4 > var0))) {
                    _fun12962_ip = 95;
                    continue _fun12962
                }
            case 47:
                var4 = typeof var3;
                var0 = undefined;
                if (!(var6 === var4)) {
                    _fun12962_ip = 93;
                    continue _fun12962
                }
            case 56:
                var4 = var2[var3];
                var4 = typeof var4;
                var0 = undefined;
                if (!(var6 === var4)) {
                    _fun12962_ip = 93;
                    continue _fun12962
                }
            case 69:
                var4 = var2[var3];
                var6 = var4.length;
                var4 = 0;
                var4 = var6 > var4;
                var0 = undefined;
                if (!var4) {
                    _fun12962_ip = 93;
                    continue _fun12962
                }
            case 89:
                var0 = var2[var3];
            case 93:
                _fun12962_ip = 103;
                continue _fun12962;
            case 95:
                var1 = _closure1_slot11;
                var0 = var2[var1];
            case 103:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
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
    var _closure1_slot2 = var3;
    var8 = 1;
    var3 = var6[var8];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var4 = var6[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot8 = var3;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var6 = var4.StyleSheet;
    var4 = var4.View;
    var _closure1_slot9 = var4;
    var5 = var6.create;
    var4 = {};
    var7 = {};
    var7.flex = var8;
    var4.wrapperView = var7;
    var4 = var5.bind(var6)(var4);
    var _closure1_slot10 = var4;
    var4 = 'sentry-label';
    var _closure1_slot11 = var4;
    var4 = 'data-sentry-component';
    var _closure1_slot12 = var4;
    var4 = 'data-sentry-element';
    var _closure1_slot13 = var4;
    var4 = 'data-sentry-source-file';
    var _closure1_slot14 = var4;
    var4 = var3.Component;
    var3 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: TouchEventBoundary, environment: var5
            _fun12964: for (var _fun12964_ip = 0;;) switch (_fun12964_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot16;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun12964_ip = 69;
                        continue _fun12964
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun12964_ip = 105;
                    continue _fun12964;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = 'TouchEventBoundary';
                    var0.name = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'componentDidMount';
        var4.key = var0;
        var0 = function() { // Original name: componentDidMount, environment: var5
            _fun12965: for (var _fun12965_ip = 0;;) switch (_fun12965_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 8;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.getClient;
                    var4 = var2.bind(var3)();
                    var2 = null;
                    var5 = var2 == var4;
                    var3 = undefined;
                    if (var5) {
                        _fun12965_ip = 52;
                        continue _fun12965
                    }
                case 46:
                    var3 = var4.addIntegration;
                case 52:
                    var2 = var2 === var3;
                    if (var2) {
                        _fun12965_ip = 63;
                        continue _fun12965
                    }
                case 59:
                    var2 = var0 === var3;
                case 63:
                    if (var2) {
                        _fun12965_ip = 116;
                        continue _fun12965
                    }
                case 66:
                    var2 = var3.call;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 9;
                    var1 = var6[var1];
                    var6 = var5.bind(var0)(var1);
                    var5 = var6.createIntegration;
                    var1 = this;
                    var1 = var1.name;
                    var1 = var5.bind(var6)(var1);
                    var1 = var2.bind(var3)(var4, var1);
                case 116:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var6 = function() { // Original name: render, environment: var5
            var0 = this;
            var4 = _closure1_slot8;
            var3 = var4.createElement;
            var2 = _closure1_slot9;
            var1 = {};
            var5 = _closure1_slot10;
            var5 = var5.wrapperView;
            var1.style = var5;
            var6 = var0._onTouchStart;
            var5 = var6.bind;
            var5 = var5.bind(var6)(var0);
            var1.onTouchStart = var5;
            var0 = var0.props;
            var0 = var0.children;
            var0 = var3.bind(var4)(var2, var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = '_logTouchEvent';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: _logTouchEvent, environment: var5
            _fun12967: for (var _fun12967_ip = 0;;) switch (_fun12967_ip) {
                case 0:
                    var2 = arg0;
                    var5 = arg1;
                    var1 = this;
                    var0 = 0;
                    var0 = var2[var0];
                    if (var0) {
                        _fun12967_ip = 70;
                        continue _fun12967
                    }
                case 18:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 8;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var6.bind(var3)(var4);
                    var6 = var3.debug;
                    var4 = var6.warn;
                    var3 = '[TouchEvents] No root component found in touch path.';
                    var3 = var4.bind(var6)(var3);
                    _fun12967_ip = 317;
                    continue _fun12967;
                case 70:
                    if (var5) {
                        _fun12967_ip = 148;
                        continue _fun12967
                    }
                case 73:
                    var6 = var0.name;
                    var7 = var0.file;
                    var4 = '';
                    var3 = var4;
                    if (!var7) {
                        _fun12967_ip = 129;
                        continue _fun12967
                    }
                case 94:
                    var9 = var0.file;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var8 = var0.concat;
                    var7 = ' (';
                    var0 = ')';
                    var3 = var8.bind(var7)(var9, var0);
                case 129:
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var0 = var0.concat;
                    var5 = var0.bind(var4)(var6, var3);
                case 148:
                    var3 = {};
                    var0 = var1.props;
                    var0 = var0.breadcrumbCategory;
                    var3.category = var0;
                    var0 = {};
                    var0.path = var2;
                    var3.data = var0;
                    var0 = 'info';
                    var3.level = var0;
                    var0 = global;
                    var2 = var0.HermesInternal;
                    var4 = var2.concat;
                    var2 = 'Touch event within element: ';
                    var2 = var4.bind(var2)(var5);
                    var3.message = var2;
                    var1 = var1.props;
                    var1 = var1.breadcrumbType;
                    var3.type = var1;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 8;
                    var6 = var5[var1];
                    var2 = undefined;
                    var7 = var4.bind(var2)(var6);
                    var6 = var7.addBreadcrumb;
                    var6 = var6.bind(var7)(var3);
                    var1 = var5[var1];
                    var1 = var4.bind(var2)(var1);
                    var2 = var1.debug;
                    var1 = var2.log;
                    var4 = var3.message;
                    var0 = var0.HermesInternal;
                    var3 = var0.concat;
                    var0 = '[TouchEvents] ';
                    var0 = var3.bind(var0)(var4);
                    var0 = var1.bind(var2)(var0);
                case 317:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = '_isNameIgnored';
        var4.key = var6;
        var6 = function(arg0) { // Original name: _isNameIgnored, environment: var5
            _fun12968: for (var _fun12968_ip = 0;;) switch (_fun12968_ip) {
                case 0:
                    var1 = this;
                    var2 = arg0;
                    var _closure3_slot0 = var2;
                    var2 = var1.props;
                    var3 = var2.ignoreNames;
                    if (var3) {
                        _fun12968_ip = 30;
                        continue _fun12968
                    }
                case 26:
                    var3 = new Array(0);
                case 30:
                    var2 = var1.props;
                    var4 = var2.ignoredDisplayNames;
                    var2 = var3;
                    if (!var4) {
                        _fun12968_ip = 92;
                        continue _fun12968
                    }
                case 47:
                    var5 = new Array(0);
                    var4 = var5.concat;
                    var7 = _closure1_slot2;
                    var6 = undefined;
                    var3 = var7.bind(var6)(var3);
                    var1 = var1.props;
                    var1 = var1.ignoredDisplayNames;
                    var1 = var7.bind(var6)(var1);
                    var2 = var4.bind(var5)(var3, var1);
                case 92:
                    var1 = var2.some;
                    var0 = function(arg0) { // Environment: var0
                        _fun12969: for (var _fun12969_ip = 0;;) switch (_fun12969_ip) {
                            case 0:
                                var4 = arg0;
                                var1 = 'string';
                                var0 = typeof var4;
                                var0 = var1 === var0;
                                if (!var0) {
                                    _fun12969_ip = 28;
                                    continue _fun12969
                                }
                            case 17:
                                var1 = _closure3_slot0;
                                var0 = var1 === var4;
                            case 28:
                                if (var0) {
                                    _fun12969_ip = 67;
                                    continue _fun12969
                                }
                            case 31:
                                var1 = global;
                                var1 = var1.RegExp;
                                var1 = var4 instanceof var1;
                                if (!var1) {
                                    _fun12969_ip = 64;
                                    continue _fun12969
                                }
                            case 46:
                                var3 = _closure3_slot0;
                                var2 = var3.match;
                                var1 = var2.bind(var3)(var4);
                            case 64:
                                var0 = var1;
                            case 67:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = '_onTouchStart';
        var4.key = var6;
        var6 = function(arg0) { // Original name: _onTouchStart, environment: var5
            _fun12970: for (var _fun12970_ip = 0;;) switch (_fun12970_ip) {
                case 0:
                    var0 = arg0;
                    var2 = this;
                    var1 = var0._targetInst;
                    if (!var1) {
                        _fun12970_ip = 415;
                        continue _fun12970
                    }
                case 18:
                    var8 = var0._targetInst;
                    var1 = new Array(0);
                    if (!var8) {
                        _fun12970_ip = 232;
                        continue _fun12970
                    }
                case 34:
                    var0 = var2.props;
                    var0 = var0.maxComponentTreeSize;
                    if (!var0) {
                        _fun12970_ip = 232;
                        continue _fun12970
                    }
                case 51:
                    var3 = var1.length;
                    var0 = var2.props;
                    var0 = var0.maxComponentTreeSize;
                    if (!(var3 < var0)) {
                        _fun12970_ip = 232;
                        continue _fun12970
                    }
                case 74:
                    var0 = var8.elementType;
                    var7 = undefined;
                    var6 = null;
                    var3 = undefined;
                    if (!(var6 !== var0)) {
                        _fun12970_ip = 101;
                        continue _fun12970
                    }
                case 90:
                    var3 = undefined;
                    if (!(var7 !== var0)) {
                        _fun12970_ip = 101;
                        continue _fun12970
                    }
                case 96:
                    var3 = var0.displayName;
                case 101:
                    var0 = _closure2_slot0;
                    var0 = var0.displayName;
                    if (!(var3 !== var0)) {
                        _fun12970_ip = 232;
                        continue _fun12970
                    }
                case 120:
                    var3 = _closure1_slot17;
                    var0 = var2.props;
                    var0 = var0.labelName;
                    var3 = var3.bind(var7)(var8, var0);
                    var0 = var2._pushIfNotIgnored;
                    var0 = var0.bind(var2)(var1, var3);
                    var8 = var8.return;
                    if (!var8) {
                        _fun12970_ip = 232;
                        continue _fun12970
                    }
                case 162:
                    var0 = var2.props;
                    var0 = var0.maxComponentTreeSize;
                    if (!var0) {
                        _fun12970_ip = 232;
                        continue _fun12970
                    }
                case 176:
                    var3 = var1.length;
                    var0 = var2.props;
                    var0 = var0.maxComponentTreeSize;
                    if (!(var3 < var0)) {
                        _fun12970_ip = 232;
                        continue _fun12970
                    }
                case 196:
                    var0 = var8.elementType;
                    var3 = undefined;
                    if (!(var6 !== var0)) {
                        _fun12970_ip = 219;
                        continue _fun12970
                    }
                case 208:
                    var3 = undefined;
                    if (!(var3 !== var0)) {
                        _fun12970_ip = 219;
                        continue _fun12970
                    }
                case 214:
                    var3 = var0.displayName;
                case 219:
                    var0 = _closure2_slot0;
                    var0 = var0.displayName;
                    if (var3 !== var0) {
                        _fun12970_ip = 120;
                        continue _fun12970
                    }
                case 232:
                    var3 = var1.find;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.label;
                        return var0;
                    };
                    var0 = var3.bind(var1)(var0);
                    var5 = undefined;
                    var3 = null;
                    var4 = undefined;
                    if (!(var3 !== var0)) {
                        _fun12970_ip = 270;
                        continue _fun12970
                    }
                case 259:
                    var4 = undefined;
                    if (!(var4 !== var0)) {
                        _fun12970_ip = 270;
                        continue _fun12970
                    }
                case 265:
                    var4 = var0.label;
                case 270:
                    var3 = var1.length;
                    var0 = 0;
                    if (!(var3 > var0)) {
                        _fun12970_ip = 293;
                        continue _fun12970
                    }
                case 281:
                    var0 = var2._logTouchEvent;
                    var0 = var0.bind(var2)(var1, var4);
                case 293:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var1 = 10;
                    var1 = var7[var1];
                    var3 = var6.bind(var5)(var1);
                    var2 = var3.startUserInteractionSpan;
                    var1 = {};
                    var1.elementId = var4;
                    var4 = 11;
                    var4 = var7[var4];
                    var4 = var6.bind(var5)(var4);
                    var4 = var4.UI_ACTION_TOUCH;
                    var1.op = var4;
                    var3 = var2.bind(var3)(var1);
                    if (!var3) {
                        _fun12970_ip = 415;
                        continue _fun12970
                    }
                case 359:
                    var2 = var3.setAttribute;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var0 = 8;
                    var0 = var6[var0];
                    var0 = var4.bind(var5)(var0);
                    var1 = var0.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                    var0 = 12;
                    var0 = var6[var0];
                    var0 = var4.bind(var5)(var0);
                    var0 = var0.SPAN_ORIGIN_AUTO_INTERACTION;
                    var0 = var2.bind(var3)(var1, var0);
                case 415:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = '_pushIfNotIgnored';
        var4.key = var6;
        var5 = function(arg0, arg1) { // Original name: _pushIfNotIgnored, environment: var5
            _fun12972: for (var _fun12972_ip = 0;;) switch (_fun12972_ip) {
                case 0:
                    var7 = arg0;
                    var6 = arg1;
                    var8 = this;
                    var1 = !var6;
                    var0 = !var1;
                    if (var1) {
                        _fun12972_ip = 218;
                        continue _fun12972
                    }
                case 21:
                    var1 = var6.name;
                    var2 = !var1;
                    if (!var2) {
                        _fun12972_ip = 40;
                        continue _fun12972
                    }
                case 32:
                    var1 = var6.label;
                    var2 = !var1;
                case 40:
                    var1 = !var2;
                    if (var2) {
                        _fun12972_ip = 215;
                        continue _fun12972
                    }
                case 49:
                    var2 = var6.name;
                    var2 = !var2;
                    if (var2) {
                        _fun12972_ip = 79;
                        continue _fun12972
                    }
                case 60:
                    var4 = var8._isNameIgnored;
                    var3 = var6.name;
                    var3 = var4.bind(var8)(var3);
                    var2 = !var3;
                case 79:
                    if (!var2) {
                        _fun12972_ip = 212;
                        continue _fun12972
                    }
                case 85:
                    var3 = var6.label;
                    var3 = !var3;
                    if (var3) {
                        _fun12972_ip = 115;
                        continue _fun12972
                    }
                case 96:
                    var5 = var8._isNameIgnored;
                    var4 = var6.label;
                    var4 = var5.bind(var8)(var4);
                    var3 = !var4;
                case 115:
                    if (!var3) {
                        _fun12972_ip = 209;
                        continue _fun12972
                    }
                case 118:
                    var5 = var7.length;
                    var4 = 0;
                    var5 = var5 > var4;
                    if (!var5) {
                        _fun12972_ip = 188;
                        continue _fun12972
                    }
                case 132:
                    var4 = global;
                    var10 = var4.JSON;
                    var9 = var10.stringify;
                    var11 = var7.length;
                    var8 = 1;
                    var8 = var11 - var8;
                    var8 = var7[var8];
                    var8 = var9.bind(var10)(var8);
                    var9 = var4.JSON;
                    var4 = var9.stringify;
                    var4 = var4.bind(var9)(var6);
                    var5 = var8 === var4;
                case 188:
                    var4 = !var5;
                    if (var5) {
                        _fun12972_ip = 206;
                        continue _fun12972
                    }
                case 194:
                    var5 = var7.push;
                    var5 = var5.bind(var7)(var6);
                    var4 = true;
                case 206:
                    var3 = var4;
                case 209:
                    var2 = var3;
                case 212:
                    var1 = var2;
                case 215:
                    var0 = var1;
                case 218:
                    return var0;
            }
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var _closure1_slot15 = var3;
    var4 = '__Sentry.TouchEventBoundary';
    var3.displayName = var4;
    var4 = {
        'breadcrumbCategory': 'touch',
        'breadcrumbType': 'user',
        'ignoreNames': null,
        'maxComponentTreeSize': 20
    };
    var5 = new Array(0);
    var4.ignoreNames = var5;
    var3.defaultProps = var4;
    var2.TouchEventBoundary = var3;
    var1 = function(arg0, arg1) { // Original name: withTouchEventBoundary, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var0 = function(arg0) { // Original name: WrappedComponent, environment: var0
            _fun12974: for (var _fun12974_ip = 0;;) switch (_fun12974_ip) {
                case 0:
                    var4 = _closure1_slot8;
                    var3 = var4.createElement;
                    var2 = _closure1_slot15;
                    var0 = global;
                    var9 = var0.Object;
                    var8 = var9.assign;
                    var7 = _closure2_slot1;
                    var1 = null;
                    if (!(var1 == var7)) {
                        _fun12974_ip = 47;
                        continue _fun12974
                    }
                case 43:
                    var7 = {};
                    _fun12974_ip = 51;
                    continue _fun12974;
                case 47:
                    var7 = _closure2_slot1;
                case 51:
                    var1 = {};
                    var1 = var8.bind(var9)(var1, var7);
                    var7 = _closure1_slot8;
                    var6 = var7.createElement;
                    var5 = _closure2_slot0;
                    var10 = var0.Object;
                    var9 = var10.assign;
                    var8 = {};
                    var0 = arg0;
                    var0 = var9.bind(var10)(var8, var0);
                    var0 = var6.bind(var7)(var5, var0);
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
            }
        };
        var1 = 'WithTouchEventBoundary';
        var0.displayName = var1;
        return var0;
    };
    var2.withTouchEventBoundary = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 6, 7, 15, 17, 18, 31, 27, 817, 1191, 1164, 1154, 1157]);