// modules/bug_reporter/native/BugReportUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun70845: for (var _fun70845_ip = 0;;) switch (_fun70845_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun70845_ip = 46;
                    continue _fun70845
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun70845_ip = 55;
                    continue _fun70845
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun70845_ip = 345;
                    continue _fun70845
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun70845_ip = 323;
                    continue _fun70845
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun70845_ip = 283;
                    continue _fun70845
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun70845_ip = 270;
                    continue _fun70845
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun70845_ip = 163;
                    continue _fun70845
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun70845_ip = 179;
                    continue _fun70845
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun70845_ip = 249;
                    continue _fun70845
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun70845_ip = 249;
                    continue _fun70845
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun70845_ip = 234;
                    continue _fun70845
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun70845_ip = 247;
                    continue _fun70845
                }
            case 234:
                var8 = _closure1_slot4;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun70845_ip = 265;
                continue _fun70845;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun70845_ip = 283;
                continue _fun70845;
            case 270:
                var6 = _closure1_slot4;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun70845_ip = 323;
                    continue _fun70845
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun70845_ip = 330;
                    continue _fun70845
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun70846: for (var _fun70846_ip = 0;;) switch (_fun70846_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun70846_ip = 56;
                                continue _fun70846
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun70846_ip = 67;
                            continue _fun70846;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = function arg0, arg1() {
        _fun70847: for (var _fun70847_ip = 0;;) switch (_fun70847_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun70847_ip = 23;
                    continue _fun70847
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun70847_ip = 33;
                    continue _fun70847
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun70847_ip = 70;
                    continue _fun70847
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun70847_ip = 55;
                    continue _fun70847
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun70850: for (var _fun70850_ip = 0;;) switch (_fun70850_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun70850_ip = 202;
                            continue _fun70850
                        }
                    case 10:
                        var2 = undefined;
                        var8 = undefined;
                        var9 = undefined;
                        var10 = undefined;
                        var11 = undefined;
                        var1 = new Array(0);
                        var4 = _closure1_slot3;
                        var3 = arg0;
                        var3 = var4.bind(var2)(var3);
                        var9 = var3;
                        var3 = var3.bind(var2)();
                        var8 = var3;
                        var3 = var3.done;
                        var6 = 1;
                        var5 = 2;
                        if (var3) {
                            _fun70850_ip = 199;
                            continue _fun70850
                        }
                    case 66:
                        var3 = var8;
                        var10 = var3.value;
                    case 74: // try_start_0
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var12 = var3[var6];
                        var13 = var4.bind(var2)(var12);
                        var12 = var13.v4;
                        var11 = var12.bind(var13)();
                        var3 = var3[var5];
                        var12 = var4.bind(var2)(var3);
                        var4 = var12.getFileInfo;
                        var3 = var10;
                        var3 = var4.bind(var12)(var3);
                        SaveGenerator(address = 128);
                    case 126:
                        return var3;
                    case 128:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun70850_ip = 191;
                            continue _fun70850
                        }
                    case 134:
                        var13 = var1;
                        var12 = var13.push;
                        var4 = {};
                        var4.file = var3;
                        var14 = var11;
                        var4.name = var14;
                        var14 = var3.name;
                        var4.filename = var14;
                        var4 = var12.bind(var13)(var4);
                    case 171: // try_end0
                        var4 = var9;
                        var4 = var4.bind(var2)();
                        var8 = var4;
                        var4 = var4.done;
                        if (var4) {
                            _fun70850_ip = 199;
                            continue _fun70850
                        }
                    case 189:
                        _fun70850_ip = 66;
                        continue _fun70850;
                    case 191:
                        return var3;
                    case 194: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        return var2;
                    case 199:
                        return var1;
                    case 202:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/bug_reporter/native/BugReportUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.getAttachments = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 491, 4012, 2]);