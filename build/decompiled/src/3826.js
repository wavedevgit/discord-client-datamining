// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var6 = function(arg0) { // Original name: buildWorkletsHash, environment: var5
        var0 = global;
        var2 = var0.Object;
        var1 = var2.values;
        var0 = arg0;
        var3 = var1.bind(var2)(var0);
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            var0 = arg1;
            var1 = var0.__workletHash;
            var0 = var1.toString;
            var1 = var0.bind(var1)();
            var0 = arg0;
            var0 = var0 + var1;
            return var0;
        };
        var0 = '';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot5 = var6;
    var0 = function(arg0, arg1) { // Original name: areWorkletsEqual, environment: var5
        _fun34676: for (var _fun34676_ip = 0;;) switch (_fun34676_ip) {
            case 0:
                var3 = arg0;
                var0 = arg1;
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var0;
                var4 = var3.__workletHash;
                var2 = var0.__workletHash;
                if (!(var4 !== var2)) {
                    _fun34676_ip = 34;
                    continue _fun34676
                }
            case 30:
                var2 = false;
                return var2;
            case 34:
                var2 = global;
                var5 = var2.Object;
                var4 = var5.keys;
                var3 = var3.__closure;
                var3 = var4.bind(var5)(var3);
                var4 = var2.Object;
                var2 = var4.keys;
                var0 = var0.__closure;
                var0 = var2.bind(var4)(var0);
                var2 = var3.length;
                var0 = var0.length;
                var0 = var2 === var0;
                if (!var0) {
                    _fun34676_ip = 111;
                    continue _fun34676
                }
            case 95:
                var2 = var3.every;
                var1 = function(arg0) { // Environment: var1
                    _fun34677: for (var _fun34677_ip = 0;;) switch (_fun34677_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = _closure2_slot1;
                            var0 = var0.__closure;
                            var0 = var3 in var0;
                            if (!var0) {
                                _fun34677_ip = 52;
                                continue _fun34677
                            }
                        case 22:
                            var2 = _closure2_slot0;
                            var2 = var2.__closure;
                            var2 = var2[var3];
                            var1 = _closure2_slot1;
                            var1 = var1.__closure;
                            var1 = var1[var3];
                            var0 = var2 === var1;
                        case 52:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1);
            case 111:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var0 = {};
    var1 = "function isAnimated_Pnpm_utilsTs1(prop){const isAnimated_Pnpm_utilsTs1=this._recur;if(Array.isArray(prop)){return prop.some(isAnimated_Pnpm_utilsTs1);}else if(typeof prop==='object'&&prop!==null){if(prop.onFrame!==undefined){return true;}else{return Object.values(prop).some(isAnimated_Pnpm_utilsTs1);}}return false;}";
    var0.code = var1;
    var4 = function(arg0) { // Original name: isAnimated, environment: var5
        _fun34678: for (var _fun34678_ip = 0;;) switch (_fun34678_ip) {
            case 0:
                var3 = arg0;
                var2 = global;
                var1 = var2.Array;
                var0 = var1.isArray;
                var0 = var0.bind(var1)(var3);
                if (var0) {
                    _fun34678_ip = 101;
                    continue _fun34678
                }
            case 24:
                var1 = 'object';
                var0 = typeof var3;
                var0 = var1 === var0;
                if (!var0) {
                    _fun34678_ip = 44;
                    continue _fun34678
                }
            case 38:
                var1 = null;
                var0 = var1 !== var3;
            case 44:
                if (!var0) {
                    _fun34678_ip = 99;
                    continue _fun34678
                }
            case 47:
                var4 = var3.onFrame;
                var1 = undefined;
                var1 = var1 !== var4;
                if (var1) {
                    _fun34678_ip = 96;
                    continue _fun34678
                }
            case 62:
                var4 = var2.Object;
                var2 = var4.values;
                var5 = var2.bind(var4)(var3);
                var4 = var5.some;
                var2 = _closure1_slot2;
                var1 = var4.bind(var5)(var2);
            case 96:
                var0 = var1;
            case 99:
                _fun34678_ip = 119;
                continue _fun34678;
            case 101:
                var2 = var3.some;
                var1 = _closure1_slot2;
                var0 = var2.bind(var3)(var1);
            case 119:
                return var0;
        }
    };
    var _closure1_slot2 = var4;
    var1 = {};
    var4.__closure = var1;
    var1 = 4296700641760.0;
    var4.__workletHash = var1;
    var4.__initData = var0;
    var0 = {};
    var1 = 'function shallowEqual_Pnpm_utilsTs2(a,b){const aKeys=Object.keys(a);const bKeys=Object.keys(b);if(aKeys.length!==bKeys.length){return false;}for(let i=0;i<aKeys.length;i++){if(a[aKeys[i]]!==b[aKeys[i]]){return false;}}return true;}';
    var0.code = var1;
    var _closure1_slot3 = var0;
    var1 = function() { // Environment: var5
        var0 = function(arg0, arg1) { // Original name: shallowEqual, environment: var0
            _fun34680: for (var _fun34680_ip = 0;;) switch (_fun34680_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var0 = global;
                    var2 = var0.Object;
                    var1 = var2.keys;
                    var2 = var1.bind(var2)(var4);
                    var1 = var0.Object;
                    var0 = var1.keys;
                    var0 = var0.bind(var1)(var3);
                    var1 = var2.length;
                    var0 = var0.length;
                    if (!(var1 === var0)) {
                        _fun34680_ip = 108;
                        continue _fun34680
                    }
                case 54:
                    var0 = var2.length;
                    var1 = 0;
                    var0 = var1 < var0;
                    if (!var0) {
                        _fun34680_ip = 100;
                        continue _fun34680
                    }
                case 68:
                    var0 = var2[var1];
                    var5 = var4[var0];
                    var0 = var2[var1];
                    var0 = var3[var0];
                    if (!(var5 === var0)) {
                        _fun34680_ip = 104;
                        continue _fun34680
                    }
                case 88:
                    var1 = var1 + 1;
                    var0 = var2.length;
                    if (var1 < var0) {
                        _fun34680_ip = 68;
                        continue _fun34680
                    }
                case 100:
                    var0 = true;
                    return var0;
                case 104:
                    var0 = false;
                    return var0;
                case 108:
                    var0 = false;
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 6945711106539.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot3;
        var0.__initData = var1;
        return var0;
    };
    var0 = undefined;
    var3 = var1.bind(var0)();
    var1 = {};
    var7 = 'function validateAnimatedStyles_Pnpm_utilsTs3(styles){if(typeof styles!==\'object\'){throw new ReanimatedError("`useAnimatedStyle` has to return an object, found "+typeof styles+" instead.");}else if(Array.isArray(styles)){throw new ReanimatedError(\'`useAnimatedStyle` has to return an object and cannot return static styles combined with dynamic ones. Please do merging where a component receives props.\');}}';
    var1.code = var7;
    var _closure1_slot4 = var1;
    var1 = function() { // Environment: var5
        var0 = function(arg0) { // Original name: validateAnimatedStyles, environment: var0
            _fun34682: for (var _fun34682_ip = 0;;) switch (_fun34682_ip) {
                case 0:
                    var2 = arg0;
                    var4 = typeof var2;
                    var0 = 'object';
                    if (!(var0 === var4)) {
                        _fun34682_ip = 98;
                        continue _fun34682
                    }
                case 14:
                    var0 = global;
                    var1 = var0.Array;
                    var0 = var1.isArray;
                    var0 = var0.bind(var1)(var2);
                    if (var0) {
                        _fun34682_ip = 39;
                        continue _fun34682
                    }
                case 35:
                    var0 = undefined;
                    return var0;
                case 39:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 1;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.ReanimatedError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var6 = '`useAnimatedStyle` has to return an object and cannot return static styles combined with dynamic ones. Please do merging where a component receives props.';
                    var7 = var1;
                    var0 = new var7[var2](var6, var5);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 98:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 1;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.ReanimatedError;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var3 = var0.concat;
                    var1 = '`useAnimatedStyle` has to return an object, found ';
                    var0 = ' instead.';
                    var6 = var3.bind(var1)(var4, var0);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var7 = var1;
                    var0 = new var7[var2](var6, var5);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 9250446401049.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot4;
        var0.__initData = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.buildWorkletsHash = var6;
    var6 = function(arg0, arg1) { // Original name: buildDependencies, environment: var5
        _fun34683: for (var _fun34683_ip = 0;;) switch (_fun34683_ip) {
            case 0:
                var1 = arg0;
                var0 = global;
                var3 = var0.Object;
                var2 = var3.values;
                var0 = arg1;
                var3 = var2.bind(var3)(var0);
                var2 = var3.filter;
                var0 = function(arg0) { // Environment: var0
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var1 !== var0;
                    return var0;
                };
                var5 = var2.bind(var3)(var0);
                var0 = var5;
                if (!var1) {
                    _fun34683_ip = 74;
                    continue _fun34683
                }
            case 47:
                var3 = var1.push;
                var4 = _closure1_slot5;
                var2 = undefined;
                var2 = var4.bind(var2)(var5);
                var2 = var3.bind(var1)(var2);
                var0 = var1;
            case 74:
                return var0;
        }
    };
    var2.buildDependencies = var6;
    var5 = function(arg0, arg1) { // Original name: areDependenciesEqual, environment: var5
        _fun34685: for (var _fun34685_ip = 0;;) switch (_fun34685_ip) {
            case 0:
                var10 = arg0;
                var9 = arg1;
                var0 = global;
                var1 = var0.Object;
                var1 = var1.is;
                var2 = 'function';
                var1 = typeof var1;
                if (!(var2 !== var1)) {
                    _fun34685_ip = 40;
                    continue _fun34685
                }
            case 31:
                var8 = function(arg0, arg1) { // Original name: is, environment: var1
                    _fun34686: for (var _fun34686_ip = 0;;) switch (_fun34686_ip) {
                        case 0:
                            var5 = arg0;
                            var4 = arg1;
                            var0 = var5 === var4;
                            if (!var0) {
                                _fun34686_ip = 40;
                                continue _fun34686
                            }
                        case 13:
                            var1 = 0;
                            var1 = var1 !== var5;
                            if (var1) {
                                _fun34686_ip = 37;
                                continue _fun34686
                            }
                        case 22:
                            var2 = 1;
                            var3 = var2 / var5;
                            var2 = var2 / var4;
                            var1 = var3 === var2;
                        case 37:
                            var0 = var1;
                        case 40:
                            if (var0) {
                                _fun34686_ip = 85;
                                continue _fun34686
                            }
                        case 43:
                            var2 = global;
                            var3 = var2.Number;
                            var1 = var3.isNaN;
                            var1 = var1.bind(var3)(var5);
                            if (!var1) {
                                _fun34686_ip = 82;
                                continue _fun34686
                            }
                        case 65:
                            var3 = var2.Number;
                            var2 = var3.isNaN;
                            var1 = var2.bind(var3)(var4);
                        case 82:
                            var0 = var1;
                        case 85:
                            return var0;
                    }
                };
                _fun34685_ip = 52;
                continue _fun34685;
            case 40:
                var0 = var0.Object;
                var8 = var0.is;
            case 52:
                var0 = false;
                if (!var10) {
                    _fun34685_ip = 225;
                    continue _fun34685
                }
            case 60:
                var0 = false;
                if (!var9) {
                    _fun34685_ip = 225;
                    continue _fun34685
                }
            case 68:
                var2 = var9.length;
                var1 = var10.length;
                var0 = false;
                if (!(var2 === var1)) {
                    _fun34685_ip = 225;
                    continue _fun34685
                }
            case 87:
                var1 = var9.length;
                var6 = 0;
                var1 = var6 < var1;
                var3 = undefined;
                var2 = 0;
                var0 = true;
                if (!var1) {
                    _fun34685_ip = 225;
                    continue _fun34685
                }
            case 110:
                var12 = var10[var2];
                var11 = var9[var2];
                var1 = var8.bind(var3)(var12, var11);
                if (var1) {
                    _fun34685_ip = 208;
                    continue _fun34685
                }
            case 127:
                var13 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var13 = var13.bind(var3)(var1);
                var1 = var13.isWorkletFunction;
                var1 = var1.bind(var13)(var12);
                var0 = false;
                if (!var1) {
                    _fun34685_ip = 225;
                    continue _fun34685
                }
            case 160:
                var13 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var13 = var13.bind(var3)(var1);
                var1 = var13.isWorkletFunction;
                var1 = var1.bind(var13)(var11);
                var0 = false;
                if (!var1) {
                    _fun34685_ip = 225;
                    continue _fun34685
                }
            case 193:
                var1 = _closure1_slot6;
                var1 = var1.bind(var3)(var12, var11);
                var0 = false;
                if (!var1) {
                    _fun34685_ip = 225;
                    continue _fun34685
                }
            case 208:
                var2 = var2 + 1;
                var1 = var9.length;
                var1 = var2 < var1;
                var0 = true;
                if (var1) {
                    _fun34685_ip = 110;
                    continue _fun34685
                }
            case 225:
                return var0;
        }
    };
    var2.areDependenciesEqual = var5;
    var2.isAnimated = var4;
    var2.shallowEqual = var3;
    var2.validateAnimatedStyles = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3705, 3691]);