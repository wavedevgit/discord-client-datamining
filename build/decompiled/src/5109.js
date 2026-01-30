// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun45742: for (var _fun45742_ip = 0;;) switch (_fun45742_ip) {
        case 0:
            var2 = exports;
            var3 = this;
            var0 = require;
            var _closure1_slot0 = var0;
            var0 = dependencyMap;
            var _closure1_slot1 = var0;
            var0 = var3;
            if (!var0) {
                _fun45742_ip = 34;
                continue _fun45742
            }
        case 28:
            var0 = var3.__extends;
        case 34:
            if (var0) {
                _fun45742_ip = 51;
                continue _fun45742
            }
        case 37:
            var3 = function(arg0, arg1) { // Original name: extendStatics, environment: var1
                _fun45743: for (var _fun45743_ip = 0;;) switch (_fun45743_ip) {
                    case 0:
                        var1 = global;
                        var2 = var1.Object;
                        var3 = var2.setPrototypeOf;
                        if (var3) {
                            _fun45743_ip = 47;
                            continue _fun45743
                        }
                    case 19:
                        var2 = var1.Array;
                        var1 = new Array(0);
                        var1 = Object.create(var1);
                        var1 = var1 instanceof var2;
                        if (!var1) {
                            _fun45743_ip = 44;
                            continue _fun45743
                        }
                    case 39:
                        var1 = function(arg0, arg1) { // Environment: var0
                            var1 = arg1;
                            var0 = arg0;
                            var0.__proto__ = var1;
                            var0 = undefined;
                            return var0;
                        };
                    case 44:
                        var3 = var1;
                    case 47:
                        if (var3) {
                            _fun45743_ip = 55;
                            continue _fun45743
                        }
                    case 50:
                        var3 = function(arg0, arg1) { // Environment: var0
                            _fun45745: for (var _fun45745_ip = 0;;) switch (_fun45745_ip) {
                                case 0:
                                    var7 = arg0;
                                    var6 = arg1;
                                    var4 = var6;
                                    var0 = global;
                                    for (var1 in var4)
                                        case 19: {
                                            case 28: var9 = var1;
                                            var8 = var0.Object;
                                            var8 = var8.prototype;
                                            var10 = var8.hasOwnProperty;
                                            var8 = var10.call;
                                            var8 = var8.bind(var10)(var6, var9);
                                            if (!var8) {
                                                _fun45745_ip = 19;
                                                continue _fun45745
                                            }
                                            case 62: var8 = var6[var9];
                                            var7[var9] = var8;
                                            _fun45745_ip = 19;
                                            continue _fun45745;
                                        }
                                case 72:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                    case 55:
                        _closure1_slot2 = var3;
                        var2 = undefined;
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot2 = var3;
            var0 = function(arg0, arg1) { // Environment: var1
                _fun45746: for (var _fun45746_ip = 0;;) switch (_fun45746_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = arg1;
                        var _closure2_slot0 = var2;
                        var1 = function() { // Original name: __, environment: var0
                            var1 = _closure2_slot0;
                            var0 = this;
                            var0.constructor = var1;
                            var0 = undefined;
                            return var0;
                        };
                        var4 = 'function';
                        var0 = typeof var3;
                        if (!(var4 !== var0)) {
                            _fun45746_ip = 34;
                            continue _fun45746
                        }
                    case 28:
                        var0 = null;
                        if (!(var0 === var3)) {
                            _fun45746_ip = 114;
                            continue _fun45746
                        }
                    case 34:
                        var4 = _closure1_slot2;
                        var0 = undefined;
                        var4 = var4.bind(var0)(var2, var3);
                        var4 = null;
                        if (!(var4 !== var3)) {
                            _fun45746_ip = 88;
                            continue _fun45746
                        }
                    case 55:
                        var4 = var3.prototype;
                        var1.prototype = var4;
                        var4 = var1.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var1
                            }
                        });
                        var8 = var4;
                        var1 = new var8[var1](var7);
                        var1 = var1 instanceof Object ? var1 : var4;
                        _fun45746_ip = 106;
                        continue _fun45746;
                    case 88:
                        var4 = global;
                        var5 = var4.Object;
                        var4 = var5.create;
                        var1 = var4.bind(var5)(var3);
                    case 106:
                        var2.prototype = var1;
                        return var0;
                    case 114:
                        var0 = global;
                        var2 = var0.TypeError;
                        var1 = var0.String;
                        var0 = undefined;
                        var1 = var1.bind(var0)(var3);
                        var0 = 'Class extends value ';
                        var3 = var0 + var1;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var0 = ' is not a constructor or null';
                        var7 = var3 + var0;
                        var8 = var1;
                        var0 = new var8[var2](var7, var6);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
        case 51:
            var _closure1_slot3 = var0;
            var0 = global;
            var5 = var0.Object;
            var4 = var5.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var5)(var2, var0, var3);
            var0 = undefined;
            var2.BaseDataProvider = var0;
            var3 = function() { // Environment: var1
                var0 = function(arg0, arg1) { // Original name: BaseDataProvider, environment: var1
                    _fun45749: for (var _fun45749_ip = 0;;) switch (_fun45749_ip) {
                        case 0:
                            var0 = arg1;
                            var1 = this;
                            var2 = 0;
                            var1._firstIndexToProcess = var2;
                            var1._size = var2;
                            var2 = new Array(0);
                            var1._data = var2;
                            var2 = false;
                            var1._hasStableIds = var2;
                            var1._requiresDataChangeHandling = var2;
                            var2 = arg0;
                            var1.rowHasChanged = var2;
                            if (var0) {
                                _fun45749_ip = 71;
                                continue _fun45749
                            }
                        case 56:
                            var2 = function(arg0) { // Environment: var2
                                var1 = arg0;
                                var0 = var1.toString;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var1.getStableId = var2;
                            _fun45749_ip = 85;
                            continue _fun45749;
                        case 71:
                            var1.getStableId = var0;
                            var0 = true;
                            var1._hasStableIds = var0;
                        case 85:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var0.prototype;
                var2 = function(arg0) { // Environment: var1
                    var0 = this;
                    var1 = var0._data;
                    var0 = arg0;
                    var0 = var1[var0];
                    return var0;
                };
                var3.getDataForIndex = var2;
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    var0 = this;
                    var0 = var0._data;
                    return var0;
                };
                var3.getAllData = var2;
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    var0 = this;
                    var0 = var0._size;
                    return var0;
                };
                var3.getSize = var2;
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    var0 = this;
                    var0 = var0._hasStableIds;
                    return var0;
                };
                var3.hasStableIds = var2;
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    var0 = this;
                    var0 = var0._requiresDataChangeHandling;
                    return var0;
                };
                var3.requiresDataChangeHandling = var2;
                var3 = var0.prototype;
                var2 = function() { // Environment: var1
                    var0 = this;
                    var0 = var0._firstIndexToProcess;
                    return var0;
                };
                var3.getFirstIndexToProcessInternal = var2;
                var2 = var0.prototype;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun45757: for (var _fun45757_ip = 0;;) switch (_fun45757_ip) {
                        case 0:
                            var2 = arg0;
                            var11 = arg1;
                            var3 = this;
                            var4 = var3.newInstance;
                            var1 = var3.rowHasChanged;
                            var5 = var3._hasStableIds;
                            var9 = undefined;
                            var0 = undefined;
                            if (!var5) {
                                _fun45757_ip = 40;
                                continue _fun45757
                            }
                        case 34:
                            var0 = var3.getStableId;
                        case 40:
                            var0 = var4.bind(var3)(var1, var0);
                            var1 = var2.length;
                            var4 = global;
                            var7 = var4.Math;
                            var6 = var7.min;
                            var5 = var3._size;
                            var7 = var6.bind(var7)(var5, var1);
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var8 = 0;
                            var5 = var5[var8];
                            var5 = var6.bind(var9)(var5);
                            var6 = var5.ObjectUtil;
                            var5 = var6.isNullOrUndefined;
                            var5 = var5.bind(var6)(var11);
                            if (var5) {
                                _fun45757_ip = 171;
                                continue _fun45757
                            }
                        case 118:
                            var6 = var4.Math;
                            var5 = var6.max;
                            var10 = var4.Math;
                            var9 = var10.min;
                            var4 = var3._data;
                            var4 = var4.length;
                            var4 = var9.bind(var10)(var11, var4);
                            var4 = var5.bind(var6)(var4, var8);
                            var0._firstIndexToProcess = var4;
                            _fun45757_ip = 264;
                            continue _fun45757;
                        case 171:
                            var5 = var8 < var7;
                            var4 = 0;
                            if (!var5) {
                                _fun45757_ip = 258;
                                continue _fun45757
                            }
                        case 180:
                            var9 = var3.rowHasChanged;
                            var5 = var3._data;
                            var6 = var5[var8];
                            var5 = var2[var8];
                            var5 = var9.bind(var3)(var6, var5);
                            var6 = 0;
                            var4 = 0;
                            if (var5) {
                                _fun45757_ip = 258;
                                continue _fun45757
                            }
                        case 213:
                            var8 = var6 + 1;
                            var4 = var8;
                            if (!(var8 < var7)) {
                                _fun45757_ip = 258;
                                continue _fun45757
                            }
                        case 223:
                            var10 = var3.rowHasChanged;
                            var5 = var3._data;
                            var9 = var5[var8];
                            var5 = var2[var8];
                            var5 = var10.bind(var3)(var9, var5);
                            var6 = var8;
                            var4 = var6;
                            if (!var5) {
                                _fun45757_ip = 213;
                                continue _fun45757
                            }
                        case 258:
                            var0._firstIndexToProcess = var4;
                        case 264:
                            var4 = var0._firstIndexToProcess;
                            var3 = var3._data;
                            var3 = var3.length;
                            if (!(var4 !== var3)) {
                                _fun45757_ip = 293;
                                continue _fun45757
                            }
                        case 285:
                            var3 = true;
                            var0._requiresDataChangeHandling = var3;
                        case 293:
                            var0._data = var2;
                            var0._size = var1;
                            return var0;
                    }
                };
                var2.cloneWithRows = var1;
                return var0;
            };
            var3 = var3.bind(var0)();
            var2.BaseDataProvider = var3;
            var1 = function(arg0) { // Environment: var1
                var4 = arg0;
                var _closure2_slot0 = var4;
                var0 = function() { // Original name: DataProvider, environment: var1
                    _fun45759: for (var _fun45759_ip = 0;;) switch (_fun45759_ip) {
                        case 0:
                            var1 = this;
                            var2 = undefined;
                            var4 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 !== var4;
                            if (!var0) {
                                _fun45759_ip = 38;
                                continue _fun45759
                            }
                        case 21:
                            var4 = _closure2_slot0;
                            var3 = var4.apply;
                            var2 = arguments;
                            var0 = var3.bind(var4)(var1, var2);
                        case 38:
                            if (var0) {
                                _fun45759_ip = 44;
                                continue _fun45759
                            }
                        case 41:
                            var0 = var1;
                        case 44:
                            return var0;
                    }
                };
                var _closure2_slot1 = var0;
                var3 = _closure1_slot3;
                var2 = undefined;
                var2 = var3.bind(var2)(var0, var4);
                var2 = var0.prototype;
                var1 = function(arg0, arg1) { // Environment: var1
                    var3 = _closure2_slot1;
                    var0 = var3.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var3
                        }
                    });
                    var5 = arg0;
                    var4 = arg1;
                    var6 = var1;
                    var0 = new var6[var3](var5, var4, var3);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var2.newInstance = var1;
                return var0;
            };
            var1 = var1.bind(var0)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [5110]);