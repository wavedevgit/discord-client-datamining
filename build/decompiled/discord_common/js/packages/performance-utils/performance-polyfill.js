// ../discord_common/js/packages/performance-utils/performance-polyfill.js
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun7231: for (var _fun7231_ip = 0;;) switch (_fun7231_ip) {
        case 0:
            var3 = global;
            var1 = global;
            var2 = var1.Date;
            var2 = var2.now;
            var5 = var1.Date;
            if (var2) {
                _fun7231_ip = 52;
                continue _fun7231
            }
        case 27:
            var2 = var5.prototype;
            var4 = Object.create(var2, {
                constructor: {
                    value: var5
                }
            });
            var9 = var4;
            var2 = new var9[var5](var8);
            var2 = var2 instanceof Object ? var2 : var4;
            var2 = var2 - 0;
            _fun7231_ip = 61;
            continue _fun7231;
        case 52:
            var4 = var5.now;
            var2 = var4.bind(var5)();
        case 61:
            var _closure1_slot0 = var2;
            var2 = var3.performance;
            if (var2) {
                _fun7231_ip = 76;
                continue _fun7231
            }
        case 74:
            var2 = {};
        case 76:
            var _closure1_slot1 = var2;
            var4 = new Array(0);
            var _closure1_slot2 = var4;
            var4 = {};
            var _closure1_slot3 = var4;
            var4 = function arg0, arg1() {
                _fun7232: for (var _fun7232_ip = 0;;) switch (_fun7232_ip) {
                    case 0:
                        var5 = arg0;
                        var4 = arg1;
                        var0 = _closure1_slot2;
                        var2 = var0.length;
                        var0 = new Array(0);
                        var1 = 0;
                        var6 = var1 < var2;
                        if (!var6) {
                            _fun7232_ip = 72;
                            continue _fun7232
                        }
                    case 31:
                        var6 = _closure1_slot2;
                        var6 = var6[var1];
                        var6 = var6[var5];
                        if (!(var6 == var4)) {
                            _fun7232_ip = 65;
                            continue _fun7232
                        }
                    case 47:
                        var7 = var0.push;
                        var6 = _closure1_slot2;
                        var6 = var6[var1];
                        var6 = var7.bind(var0)(var6);
                    case 65:
                        var1 = var1 + 1;
                        if (var1 < var2) {
                            _fun7232_ip = 31;
                            continue _fun7232
                        }
                    case 72:
                        return var0;
                }
            };
            var _closure1_slot4 = var4;
            var4 = function arg0, arg1() {
                _fun7233: for (var _fun7233_ip = 0;;) switch (_fun7233_ip) {
                    case 0:
                        var7 = arg0;
                        var6 = arg1;
                        var0 = _closure1_slot2;
                        var0 = var0.length;
                        var1 = parseFloat(var0);
                        var4 = var1 - 1;
                        var3 = 1;
                        var0 = undefined;
                        var2 = var0 !== var6;
                        if (!var1) {
                            _fun7233_ip = 103;
                            continue _fun7233
                        }
                    case 36:
                        var1 = _closure1_slot2;
                        var9 = var1[var4];
                        var1 = var9.entryType;
                        var1 = var1 != var7;
                        if (var1) {
                            _fun7233_ip = 75;
                            continue _fun7233
                        }
                    case 57:
                        var8 = var2;
                        if (!var8) {
                            _fun7233_ip = 72;
                            continue _fun7233
                        }
                    case 63:
                        var9 = var9.name;
                        var8 = var9 != var6;
                    case 72:
                        var1 = var8;
                    case 75:
                        if (var1) {
                            _fun7233_ip = 94;
                            continue _fun7233
                        }
                    case 78:
                        var8 = _closure1_slot2;
                        var1 = var8.splice;
                        var1 = var1.bind(var8)(var4, var3);
                    case 94:
                        var1 = parseFloat(var4);
                        var4 = var1 - 1;
                        if (var1) {
                            _fun7233_ip = 36;
                            continue _fun7233
                        }
                    case 103:
                        return var0;
                }
            };
            var _closure1_slot5 = var4;
            var4 = var2.now;
            if (var4) {
                _fun7231_ip = 158;
                continue _fun7231
            }
        case 120:
            var4 = var2.webkitNow;
            if (var4) {
                _fun7231_ip = 135;
                continue _fun7231
            }
        case 129:
            var4 = var2.mozNow;
        case 135:
            if (var4) {
                _fun7231_ip = 144;
                continue _fun7231
            }
        case 138:
            var4 = var2.msNow;
        case 144:
            if (var4) {
                _fun7231_ip = 152;
                continue _fun7231
            }
        case 147:
            var4 = function() { // Environment: var0
                _fun7234: for (var _fun7234_ip = 0;;) switch (_fun7234_ip) {
                    case 0:
                        var1 = global;
                        var0 = var1.Date;
                        var0 = var0.now;
                        var2 = var1.Date;
                        if (var0) {
                            _fun7234_ip = 47;
                            continue _fun7234
                        }
                    case 22:
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var3 = var1;
                        var0 = new var3[var2](var2);
                        var0 = var0 instanceof Object ? var0 : var1;
                        var1 = var0 - 0;
                        _fun7234_ip = 56;
                        continue _fun7234;
                    case 47:
                        var0 = var2.now;
                        var1 = var0.bind(var2)();
                    case 56:
                        var0 = _closure1_slot0;
                        var0 = var1 - var0;
                        return var0;
                }
            };
        case 152:
            var2.now = var4;
        case 158:
            var4 = var2.mark;
            if (var4) {
                _fun7231_ip = 187;
                continue _fun7231
            }
        case 167:
            var4 = var2.webkitMark;
            if (var4) {
                _fun7231_ip = 181;
                continue _fun7231
            }
        case 176:
            var4 = function(arg0) { // Environment: var0
                var2 = arg0;
                var1 = {};
                var1.name = var2;
                var0 = 'mark';
                var1.entryType = var0;
                var4 = _closure1_slot1;
                var3 = var4.now;
                var3 = var3.bind(var4)();
                var1.startTime = var3;
                var3 = 0;
                var1.duration = var3;
                var4 = _closure1_slot2;
                var3 = var4.push;
                var3 = var3.bind(var4)(var1);
                var0 = _closure1_slot3;
                var0[var2] = var1;
                var0 = undefined;
                return var0;
            };
        case 181:
            var2.mark = var4;
        case 187:
            var4 = var2.measure;
            if (var4) {
                _fun7231_ip = 216;
                continue _fun7231
            }
        case 196:
            var4 = var2.webkitMeasure;
            if (var4) {
                _fun7231_ip = 210;
                continue _fun7231
            }
        case 205:
            var4 = function(arg0, arg1, arg2) { // Environment: var0
                _fun7236: for (var _fun7236_ip = 0;;) switch (_fun7236_ip) {
                    case 0:
                        var2 = arg1;
                        var1 = arg2;
                        var0 = undefined;
                        if (!(var0 !== var1)) {
                            _fun7236_ip = 30;
                            continue _fun7236
                        }
                    case 12:
                        var3 = _closure1_slot3;
                        var3 = var3[var1];
                        if (!(var0 !== var3)) {
                            _fun7236_ip = 216;
                            continue _fun7236
                        }
                    case 30:
                        if (!(var0 !== var2)) {
                            _fun7236_ip = 49;
                            continue _fun7236
                        }
                    case 34:
                        var3 = _closure1_slot3;
                        var3 = var3[var2];
                        if (!(var0 !== var3)) {
                            _fun7236_ip = 166;
                            continue _fun7236
                        }
                    case 49:
                        var4 = _closure1_slot3;
                        var4 = var4[var2];
                        var7 = 0;
                        if (!var4) {
                            _fun7236_ip = 79;
                            continue _fun7236
                        }
                    case 65:
                        var4 = _closure1_slot3;
                        var4 = var4[var2];
                        var7 = var4.startTime;
                    case 79:
                        var4 = _closure1_slot3;
                        var4 = var4[var1];
                        if (var4) {
                            _fun7236_ip = 105;
                            continue _fun7236
                        }
                    case 90:
                        var5 = _closure1_slot1;
                        var4 = var5.now;
                        var6 = var4.bind(var5)();
                        _fun7236_ip = 119;
                        continue _fun7236;
                    case 105:
                        var4 = _closure1_slot3;
                        var4 = var4[var1];
                        var6 = var4.startTime;
                    case 119:
                        var5 = _closure1_slot2;
                        var4 = var5.push;
                        var3 = {};
                        var8 = arg0;
                        var3.name = var8;
                        var8 = 'measure';
                        var3.entryType = var8;
                        var3.startTime = var7;
                        var6 = var6 - var7;
                        var3.duration = var6;
                        var3 = var4.bind(var5)(var3);
                        return var0;
                    case 166:
                        var0 = global;
                        var3 = var0.SyntaxError;
                        var0 = "Failed to execute 'measure' on 'Performance': The mark '";
                        var4 = var0 + var2;
                        var0 = var3.prototype;
                        var2 = Object.create(var0, {
                            constructor: {
                                value: var3
                            }
                        });
                        var0 = "' does not exist.";
                        var9 = var4 + var0;
                        var10 = var2;
                        var0 = new var10[var3](var9, var8);
                        var0 = var0 instanceof Object ? var0 : var2;
                        throw var0;
                    case 216:
                        var0 = global;
                        var2 = var0.SyntaxError;
                        var0 = "Failed to execute 'measure' on 'Performance': The mark '";
                        var3 = var0 + var1;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var0 = "' does not exist.";
                        var9 = var3 + var0;
                        var10 = var1;
                        var0 = new var10[var2](var9, var8);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
        case 210:
            var2.measure = var4;
        case 216:
            var4 = var2.getEntriesByType;
            if (var4) {
                _fun7231_ip = 245;
                continue _fun7231
            }
        case 225:
            var4 = var2.webkitGetEntriesByType;
            if (var4) {
                _fun7231_ip = 239;
                continue _fun7231
            }
        case 234:
            var4 = function(arg0) { // Environment: var0
                var3 = _closure1_slot4;
                var2 = undefined;
                var1 = 'entryType';
                var0 = arg0;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
        case 239:
            var2.getEntriesByType = var4;
        case 245:
            var4 = var2.getEntriesByName;
            if (var4) {
                _fun7231_ip = 274;
                continue _fun7231
            }
        case 254:
            var4 = var2.webkitGetEntriesByName;
            if (var4) {
                _fun7231_ip = 268;
                continue _fun7231
            }
        case 263:
            var4 = function(arg0) { // Environment: var0
                var3 = _closure1_slot4;
                var2 = undefined;
                var1 = 'name';
                var0 = arg0;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
        case 268:
            var2.getEntriesByName = var4;
        case 274:
            var4 = var2.clearMarks;
            if (var4) {
                _fun7231_ip = 303;
                continue _fun7231
            }
        case 283:
            var4 = var2.webkitClearMarks;
            if (var4) {
                _fun7231_ip = 297;
                continue _fun7231
            }
        case 292:
            var4 = function(arg0) { // Environment: var0
                var3 = _closure1_slot5;
                var0 = undefined;
                var2 = 'mark';
                var1 = arg0;
                var1 = var3.bind(var0)(var2, var1);
                return var0;
            };
        case 297:
            var2.clearMarks = var4;
        case 303:
            var4 = var2.clearMeasures;
            if (var4) {
                _fun7231_ip = 332;
                continue _fun7231
            }
        case 312:
            var4 = var2.webkitClearMeasures;
            if (var4) {
                _fun7231_ip = 326;
                continue _fun7231
            }
        case 321:
            var4 = function(arg0) { // Environment: var0
                var3 = _closure1_slot5;
                var0 = undefined;
                var2 = 'measure';
                var1 = arg0;
                var1 = var3.bind(var0)(var2, var1);
                return var0;
            };
        case 326:
            var2.clearMeasures = var4;
        case 332:
            var3.performance = var2;
            var2 = var1.define;
            var3 = 'function';
            var2 = typeof var2;
            var2 = var3 === var2;
            if (!var2) {
                _fun7231_ip = 388;
                continue _fun7231
            }
        case 358:
            var3 = var1.define;
            var3 = var3.amd;
            if (var3) {
                _fun7231_ip = 385;
                continue _fun7231
            }
        case 373:
            var4 = var1.define;
            var3 = var4.ajs;
        case 385:
            var2 = var3;
        case 388:
            if (!var2) {
                _fun7231_ip = 419;
                continue _fun7231
            }
        case 391:
            var4 = var1.define;
            var3 = undefined;
            var2 = 'performance';
            var1 = new Array(0);
            var0 = function() { // Environment: var0
                var0 = _closure1_slot1;
                return var0;
            };
            var0 = var4.bind(var3)(var2, var1, var0);
        case 419:
            var1 = arg6;
            var0 = 0;
            var2 = var1[var0];
            var1 = arg1;
            var0 = undefined;
            var3 = var1.bind(var0)(var2);
            var2 = var3.fileFinishedImporting;
            var1 = '../discord_common/js/packages/performance-utils/performance-polyfill.js';
            var1 = var2.bind(var3)(var1);
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);