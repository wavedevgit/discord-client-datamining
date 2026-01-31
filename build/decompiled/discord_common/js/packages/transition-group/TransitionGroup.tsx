// ../discord_common/js/packages/transition-group/TransitionGroup.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0) { // Original name: _toPropertyKey, environment: var1
        _fun80907: for (var _fun80907_ip = 0;;) switch (_fun80907_ip) {
            case 0:
                var6 = arg0;
                var3 = 'object';
                var0 = typeof var6;
                var1 = var6;
                if (!(var3 === var0)) {
                    _fun80907_ip = 119;
                    continue _fun80907
                }
            case 17:
                var1 = var6;
                if (!var1) {
                    _fun80907_ip = 119;
                    continue _fun80907
                }
            case 23:
                var0 = global;
                var2 = var0.Symbol;
                var2 = var2.toPrimitive;
                var5 = var6[var2];
                var4 = undefined;
                if (!(var4 === var5)) {
                    _fun80907_ip = 60;
                    continue _fun80907
                }
            case 47:
                var2 = var0.String;
                var1 = var2.bind(var4)(var6);
                _fun80907_ip = 119;
                continue _fun80907;
            case 60:
                var4 = var5.call;
                var2 = 'string';
                var4 = var4.bind(var5)(var6, var2);
                var2 = typeof var4;
                var1 = var4;
                if (!(var3 === var2)) {
                    _fun80907_ip = 119;
                    continue _fun80907
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
                    _fun80907_ip = 136;
                    continue _fun80907
                }
            case 133:
                var0 = '' + var1;
            case 136:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun80908: for (var _fun80908_ip = 0;;) switch (_fun80908_ip) {
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
            case 72: // try_end0
                _fun80908_ip = 76;
                continue _fun80908;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot8 = var3;
    var3 = var3.Component;
    var1 = function(arg0) { // Environment: var1
        var4 = function(arg0) { // Original name: TransitionGroup, environment: var0
            _fun80912: for (var _fun80912_ip = 0;;) switch (_fun80912_ip) {
                case 0:
                    var2 = arg0;
                    var6 = this;
                    var0 = _closure1_slot3;
                    var4 = _closure2_slot0;
                    var5 = undefined;
                    var0 = var0.bind(var5)(var6, var4);
                    var11 = new Array(1);
                    var11[0] = var2;
                    var0 = _closure1_slot6;
                    var10 = var0.bind(var5)(var4);
                    var4 = _closure1_slot5;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var5)();
                    if (var0) {
                        _fun80912_ip = 75;
                        continue _fun80912
                    }
                case 62:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var6, var11);
                    _fun80912_ip = 109;
                    continue _fun80912;
                case 75:
                    var7 = global;
                    var9 = var7.Reflect;
                    var8 = var9.construct;
                    var7 = _closure1_slot6;
                    var7 = var7.bind(var5)(var6);
                    var7 = var7.constructor;
                    var0 = var8.bind(var9)(var10, var11, var7);
                case 109:
                    var0 = var4.bind(var5)(var6, var0);
                    var _closure3_slot0 = var0;
                    var4 = {};
                    var0._keyChildMapping = var4;
                    var1 = function(arg0, arg1) { // Environment: var1
                        var0 = _closure3_slot0;
                        var2 = var0._keyChildMapping;
                        var1 = arg1;
                        var0 = arg0;
                        var2[var0] = var1;
                        var0 = undefined;
                        return var0;
                    };
                    var0.addChildRef = var1;
                    var1 = {};
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var3 = 7;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.getChildMapping;
                    var2 = var2.children;
                    var2 = var3.bind(var4)(var2);
                    var1.children = var2;
                    var2 = true;
                    var1.firstRender = var2;
                    var0.state = var1;
                    var1 = global;
                    var1 = var1.Set;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var15 = var2;
                    var1 = new var15[var1](var14);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var0._currentlyTransitioningKeys = var1;
                    var1 = new Array(0);
                    var0._keysToEnter = var1;
                    var1 = new Array(0);
                    var0._keysToLeave = var1;
                    var1 = false;
                    var0._isMounted = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'componentDidMount';
        var5.key = var1;
        var1 = function() { // Original name: value, environment: var0
            _fun80914: for (var _fun80914_ip = 0;;) switch (_fun80914_ip) {
                case 0:
                    var6 = this;
                    var0 = true;
                    var6._isMounted = var0;
                    var0 = var6.state;
                    var5 = var0.children;
                    var0 = var6.props;
                    var0 = var0.transitionAppear;
                    if (!var0) {
                        _fun80914_ip = 80;
                        continue _fun80914
                    }
                case 35:
                    var3 = var5;
                    for (var0 in var3)
                        case 46: {
                            case 55: var8 = var0;
                            var7 = var5[var8];
                            if (!var7) {
                                _fun80914_ip = 46;
                                continue _fun80914
                            }
                            case 65: var7 = var6.performAppear;
                            var7 = var7.bind(var6)(var8);
                            _fun80914_ip = 46;
                            continue _fun80914;
                        }
                case 80:
                    var0 = undefined;
                    return var0;
            }
        };
        var5.value = var1;
        var1 = new Array(10);
        var1[0] = var5;
        var5 = {};
        var6 = 'componentWillUnmount';
        var5.key = var6;
        var6 = function() { // Original name: value, environment: var0
            var0 = this;
            var1 = false;
            var0._isMounted = var1;
            var1 = {};
            var0._keyChildMapping = var1;
            var1 = var0.state;
            var0 = {};
            var1.children = var0;
            var0 = undefined;
            return var0;
        };
        var5.value = var6;
        var1[1] = var5;
        var5 = {};
        var6 = 'componentDidUpdate';
        var5.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var0
            _fun80916: for (var _fun80916_ip = 0;;) switch (_fun80916_ip) {
                case 0:
                    var0 = arg0;
                    var3 = this;
                    var2 = var0.children;
                    var1 = var3.props;
                    var1 = var1.children;
                    if (!(var2 === var1)) {
                        _fun80916_ip = 70;
                        continue _fun80916
                    }
                case 25:
                    var2 = var0.transitionAppear;
                    var1 = var3.props;
                    var1 = var1.transitionAppear;
                    if (!(var2 === var1)) {
                        _fun80916_ip = 70;
                        continue _fun80916
                    }
                case 46:
                    var1 = var0.transitionLeave;
                    var0 = var3.props;
                    var0 = var0.transitionLeave;
                    if (!(var1 !== var0)) {
                        _fun80916_ip = 346;
                        continue _fun80916
                    }
                case 70:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var7 = 7;
                    var1 = var1[var7];
                    var6 = undefined;
                    var4 = var2.bind(var6)(var1);
                    var2 = var4.getChildMapping;
                    var1 = var3.props;
                    var1 = var1.children;
                    var4 = var2.bind(var4)(var1);
                    var1 = arg1;
                    var2 = var1.children;
                    var1 = var3.props;
                    var1 = var1.transitionEnter;
                    if (var1) {
                        _fun80916_ip = 167;
                        continue _fun80916
                    }
                case 138:
                    var1 = var3._keysToEnter;
                    var5 = var1.length;
                    var1 = 0;
                    if (!(var5 > var1)) {
                        _fun80916_ip = 186;
                        continue _fun80916
                    }
                case 155:
                    var1 = new Array(0);
                    var3._keysToEnter = var1;
                    _fun80916_ip = 186;
                    continue _fun80916;
                case 167:
                    var5 = var3._enqueueTransitions;
                    var1 = var3._keysToEnter;
                    var1 = var5.bind(var3)(var4, var2, var1);
                case 186:
                    var1 = var3.props;
                    var5 = var1.transitionLeave;
                    var1 = var3._enqueueTransitions;
                    if (var5) {
                        _fun80916_ip = 333;
                        continue _fun80916
                    }
                case 209:
                    var8 = new Array(0);
                    var5 = var1.bind(var3)(var2, var4, var8);
                    var5 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var0 = var0[var7];
                    var5 = var5.bind(var6)(var0);
                    var0 = var5.mergeChildMappings;
                    var7 = var0.bind(var5)(var2, var4);
                    var6 = var8.length;
                    var5 = 0;
                    var9 = var5 < var6;
                    var0 = 0;
                    if (!var9) {
                        _fun80916_ip = 280;
                        continue _fun80916
                    }
                case 265:
                    var9 = var8[var0];
                    var9 = delete var7[var9];
                    var0 = var0 + 1;
                    if (var0 < var6) {
                        _fun80916_ip = 265;
                        continue _fun80916
                    }
                case 280:
                    var0 = var3._isMounted;
                    if (!var0) {
                        _fun80916_ip = 306;
                        continue _fun80916
                    }
                case 289:
                    var6 = var3.setState;
                    var0 = {};
                    var0.children = var7;
                    var0 = var6.bind(var3)(var0);
                case 306:
                    var0 = var3._keysToLeave;
                    var0 = var0.length;
                    if (!(var0 > var5)) {
                        _fun80916_ip = 346;
                        continue _fun80916
                    }
                case 321:
                    var0 = new Array(0);
                    var3._keysToLeave = var0;
                    _fun80916_ip = 346;
                    continue _fun80916;
                case 333:
                    var0 = var3._keysToLeave;
                    var0 = var1.bind(var3)(var2, var4, var0);
                case 346:
                    var0 = var3._keysToEnter;
                    var0 = var0.length;
                    var1 = 0;
                    if (!(var0 > var1)) {
                        _fun80916_ip = 396;
                        continue _fun80916
                    }
                case 363:
                    var4 = var3._keysToEnter;
                    var0 = new Array(0);
                    var3._keysToEnter = var0;
                    var2 = var4.forEach;
                    var0 = var3.performEnter;
                    var0 = var2.bind(var4)(var0, var3);
                case 396:
                    var0 = var3._keysToLeave;
                    var0 = var0.length;
                    if (!(var0 > var1)) {
                        _fun80916_ip = 444;
                        continue _fun80916
                    }
                case 411:
                    var2 = var3._keysToLeave;
                    var0 = new Array(0);
                    var3._keysToLeave = var0;
                    var1 = var2.forEach;
                    var0 = var3.performLeave;
                    var0 = var1.bind(var2)(var0, var3);
                case 444:
                    var0 = undefined;
                    return var0;
            }
        };
        var5.value = var6;
        var1[2] = var5;
        var5 = {};
        var6 = '_enqueueTransitions';
        var5.key = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: value, environment: var0
            _fun80917: for (var _fun80917_ip = 0;;) switch (_fun80917_ip) {
                case 0:
                    var8 = arg0;
                    var7 = arg1;
                    var6 = arg2;
                    var5 = this;
                    var3 = var8;
                    for (var0 in var3)
                        case 23: {
                            case 32: var10 = var0;
                            var11 = var7;
                            if (!var11) {
                                _fun80917_ip = 52;
                                continue _fun80917
                            }
                            case 41: var9 = var7.hasOwnProperty;
                            var11 = var9.bind(var7)(var10);
                            case 52: var9 = var8[var10];
                            var9 = !var9;
                            if (var9) {
                                _fun80917_ip = 65;
                                continue _fun80917
                            }
                            case 62: var9 = var11;
                            case 65: if (var9) {
                                _fun80917_ip = 84;
                                continue _fun80917
                            }
                            case 68: var12 = var5._currentlyTransitioningKeys;
                            var11 = var12.has;
                            var9 = var11.bind(var12)(var10);
                            case 84: if (var9) {
                                _fun80917_ip = 23;
                                continue _fun80917
                            }
                            case 87: var9 = var6.push;
                            var9 = var9.bind(var6)(var10);
                            _fun80917_ip = 23;
                            continue _fun80917;
                        }
                case 99:
                    var0 = undefined;
                    return var0;
            }
        };
        var5.value = var6;
        var1[3] = var5;
        var5 = {};
        var6 = '_perform';
        var5.key = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: value, environment: var0
            _fun80918: for (var _fun80918_ip = 0;;) switch (_fun80918_ip) {
                case 0:
                    var4 = arg0;
                    var1 = arg1;
                    var5 = arguments[3];
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var _closure3_slot1 = var4;
                    var0 = arg2;
                    var _closure3_slot2 = var0;
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun80918_ip = 37;
                        continue _fun80918
                    }
                case 35:
                    var5 = false;
                case 37:
                    var _closure3_slot3 = var5;
                    var6 = var2._currentlyTransitioningKeys;
                    var5 = var6.add;
                    var5 = var5.bind(var6)(var4);
                    var3 = function() { // Original name: callback, environment: var3
                        var4 = _closure3_slot0;
                        var3 = var4._handleDonePerform;
                        var2 = _closure3_slot1;
                        var1 = _closure3_slot2;
                        var0 = _closure3_slot3;
                        var0 = var3.bind(var4)(var2, var1, var0);
                        return var0;
                    };
                    var2 = var2._keyChildMapping;
                    var2 = var2[var4];
                    var5 = null;
                    if (!(var5 != var2)) {
                        _fun80918_ip = 88;
                        continue _fun80918
                    }
                case 80:
                    var4 = var2[var1];
                    if (!(var5 == var4)) {
                        _fun80918_ip = 94;
                        continue _fun80918
                    }
                case 88:
                    var4 = var3.bind(var0)();
                    _fun80918_ip = 103;
                    continue _fun80918;
                case 94:
                    var1 = var2[var1];
                    var1 = var1.bind(var2)(var3);
                case 103:
                    return var0;
            }
        };
        var5.value = var6;
        var1[4] = var5;
        var5 = {};
        var6 = '_handleDonePerform';
        var5.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var0
            _fun80920: for (var _fun80920_ip = 0;;) switch (_fun80920_ip) {
                case 0:
                    var3 = arg0;
                    var5 = arg1;
                    var6 = arguments[2];
                    var2 = this;
                    var _closure3_slot0 = var3;
                    var0 = undefined;
                    if (!(var6 === var0)) {
                        _fun80920_ip = 26;
                        continue _fun80920
                    }
                case 24:
                    var6 = false;
                case 26:
                    var4 = var2._keyChildMapping;
                    var7 = var4[var3];
                    var4 = null;
                    var8 = var4 != var7;
                    if (!var8) {
                        _fun80920_ip = 53;
                        continue _fun80920
                    }
                case 45:
                    var9 = var7[var5];
                    var8 = var4 != var9;
                case 53:
                    if (!var8) {
                        _fun80920_ip = 64;
                        continue _fun80920
                    }
                case 56:
                    var5 = var7[var5];
                    var5 = var5.bind(var7)();
                case 64:
                    var7 = var2._currentlyTransitioningKeys;
                    var5 = var7.delete;
                    var5 = var5.bind(var7)(var3);
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 7;
                    var5 = var8[var5];
                    var8 = var7.bind(var0)(var5);
                    var7 = var8.getChildMapping;
                    var5 = var2.props;
                    var5 = var5.children;
                    var5 = var7.bind(var8)(var5);
                    if (var6) {
                        _fun80920_ip = 161;
                        continue _fun80920
                    }
                case 127:
                    var6 = var4 != var5;
                    if (!var6) {
                        _fun80920_ip = 145;
                        continue _fun80920
                    }
                case 134:
                    var7 = var5.hasOwnProperty;
                    var6 = var7.bind(var5)(var3);
                case 145:
                    if (var6) {
                        _fun80920_ip = 210;
                        continue _fun80920
                    }
                case 148:
                    var6 = var2.performLeave;
                    var6 = var6.bind(var2)(var3);
                    _fun80920_ip = 210;
                    continue _fun80920;
                case 161:
                    if (!(var4 != var5)) {
                        _fun80920_ip = 179;
                        continue _fun80920
                    }
                case 165:
                    var4 = var5.hasOwnProperty;
                    var4 = var4.bind(var5)(var3);
                    if (var4) {
                        _fun80920_ip = 199;
                        continue _fun80920
                    }
                case 179:
                    var4 = var2.setState;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var4 = var0.children;
                        var2 = _closure3_slot0;
                        var0 = var4[var2];
                        var0 = {};
                        var3 = _closure1_slot2;
                        var5 = new Array(1);
                        var5[0] = var2;
                        var2 = var5.map;
                        var1 = _closure1_slot9;
                        var2 = var2.bind(var5)(var1);
                        var1 = undefined;
                        var1 = var3.bind(var1)(var4, var2);
                        var0.children = var1;
                        return var0;
                    };
                    var1 = var4.bind(var2)(var1);
                    _fun80920_ip = 210;
                    continue _fun80920;
                case 199:
                    var1 = var2.performEnter;
                    var1 = var1.bind(var2)(var3);
                case 210:
                    return var0;
            }
        };
        var5.value = var6;
        var1[5] = var5;
        var5 = {};
        var6 = 'performAppear';
        var5.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var0
            var4 = this;
            var3 = var4._perform;
            var2 = arg0;
            var1 = 'componentWillAppear';
            var0 = 'componentDidAppear';
            var0 = var3.bind(var4)(var2, var1, var0);
            var0 = undefined;
            return var0;
        };
        var5.value = var6;
        var1[6] = var5;
        var5 = {};
        var6 = 'performEnter';
        var5.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var0
            var4 = this;
            var3 = var4._perform;
            var2 = arg0;
            var1 = 'componentWillEnter';
            var0 = 'componentDidEnter';
            var0 = var3.bind(var4)(var2, var1, var0);
            var0 = undefined;
            return var0;
        };
        var5.value = var6;
        var1[7] = var5;
        var5 = {};
        var6 = 'performLeave';
        var5.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var0
            var5 = this;
            var4 = var5._perform;
            var9 = arg0;
            var8 = 'componentWillLeave';
            var7 = 'componentDidLeave';
            var6 = true;
            var10 = var5;
            var0 = var10[var4](var9, var8, var7, var6, var5);
            var0 = undefined;
            return var0;
        };
        var5.value = var6;
        var1[8] = var5;
        var5 = {};
        var6 = 'render';
        var5.key = var6;
        var6 = function() { // Original name: value, environment: var0
            _fun80925: for (var _fun80925_ip = 0;;) switch (_fun80925_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var2 = var1.props;
                    var3 = var2.childFactory;
                    var _closure3_slot1 = var3;
                    var4 = var2.component;
                    var2 = var1.state;
                    var2 = var2.children;
                    var _closure3_slot2 = var2;
                    var3 = new Array(0);
                    var _closure3_slot3 = var3;
                    var10 = function(arg0) { // Original name: _loop, environment: var0
                        _fun80926: for (var _fun80926_ip = 0;;) switch (_fun80926_ip) {
                            case 0:
                                var6 = arg0;
                                var _closure4_slot0 = var6;
                                var1 = _closure3_slot2;
                                var9 = var1[var6];
                                var10 = null;
                                var1 = var10 != var9;
                                if (!var1) {
                                    _fun80926_ip = 47;
                                    continue _fun80926
                                }
                            case 29:
                                var3 = _closure1_slot8;
                                var2 = var3.isValidElement;
                                var1 = var2.bind(var3)(var9);
                            case 47:
                                if (!var1) {
                                    _fun80926_ip = 122;
                                    continue _fun80926
                                }
                            case 50:
                                var2 = _closure3_slot3;
                                var1 = var2.push;
                                var5 = _closure1_slot8;
                                var4 = var5.cloneElement;
                                var8 = _closure3_slot1;
                                var3 = var9;
                                if (!(var10 != var8)) {
                                    _fun80926_ip = 94;
                                    continue _fun80926
                                }
                            case 83:
                                var8 = _closure3_slot1;
                                var0 = undefined;
                                var3 = var8.bind(var0)(var9);
                            case 94:
                                var0 = {};
                                var7 = function(arg0) { // Original name: ref, environment: var7
                                    var3 = _closure3_slot0;
                                    var2 = var3.addChildRef;
                                    var1 = _closure4_slot0;
                                    var0 = arg0;
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                                };
                                var0.ref = var7;
                                var0.key = var6;
                                var0 = var4.bind(var5)(var3, var0);
                                var0 = var1.bind(var2)(var0);
                            case 122:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var8 = var2;
                    var2 = undefined;
                    for (var5 in var8)
                        case 72: {
                            case 81: var11 = var5;
                            var11 = var10.bind(var2)(var11);
                            _fun80925_ip = 72;
                            continue _fun80925;
                        }
                case 91:
                    var2 = {};
                    var13 = var1.props;
                    var14 = var2;
                    var1 = copyDataProperties(var14, var13);
                    var _closure3_slot4 = var2;
                    var1 = global;
                    var6 = var1.Object;
                    var5 = var6.keys;
                    var1 = _closure2_slot0;
                    var1 = var1.defaultProps;
                    var5 = var5.bind(var6)(var1);
                    var1 = var5.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var1 = _closure3_slot4;
                        var0 = arg0;
                        var0 = delete var1[var0];
                        return var0;
                    };
                    var0 = var1.bind(var5)(var0);
                    var1 = _closure1_slot8;
                    var0 = var1.createElement;
                    var0 = var0.bind(var1)(var4, var2, var3);
                    return var0;
            }
        };
        var5.value = var6;
        var1[9] = var5;
        var5 = {};
        var6 = 'getDerivedStateFromProps';
        var5.key = var6;
        var0 = function(arg0, arg1) { // Original name: getDerivedStateFromProps, environment: var0
            _fun80929: for (var _fun80929_ip = 0;;) switch (_fun80929_ip) {
                case 0:
                    var0 = arg1;
                    var5 = var0.children;
                    var3 = var0.firstRender;
                    var1 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var7 = 7;
                    var0 = var0[var7];
                    var6 = undefined;
                    var4 = var1.bind(var6)(var0);
                    var1 = var4.getChildMapping;
                    var0 = arg0;
                    var0 = var0.children;
                    var4 = var1.bind(var4)(var0);
                    var0 = {};
                    var1 = var4;
                    if (var3) {
                        _fun80929_ip = 95;
                        continue _fun80929
                    }
                case 66:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var3 = var3.bind(var6)(var2);
                    var2 = var3.mergeChildMappings;
                    var1 = var2.bind(var3)(var5, var4);
                case 95:
                    var0.children = var1;
                    var1 = false;
                    var0.firstRender = var1;
                    return var0;
            }
        };
        var5.value = var0;
        var0 = new Array(1);
        var0[0] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = {
        'component': 'span',
        'transitionAppear': true,
        'transitionLeave': true,
        'transitionEnter': true,
        'childFactory': null
    };
    var1.defaultProps = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/transition-group/TransitionGroup.tsx';
    var3 = var4.bind(var5)(var3);
    var2.TransitionGroup = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 6, 7, 15, 17, 18, 31, 10270, 2]);