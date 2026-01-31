// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = ['type', 'level', 'message', 'args', 'tag', 'date'];
    var _closure1_slot3 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var2, var4, var3);
    var3 = ['trace', 'debug', 'info', 'warn', 'error', 'fatal'];
    var _closure1_slot4 = var3;
    var3 = {
        'silent': 'trace',
        'fatal': 'fatal',
        'error': 'error',
        'warn': 'warn',
        'log': 'info',
        'info': 'info',
        'success': 'info',
        'fail': 'error',
        'ready': 'info',
        'start': 'info',
        'box': 'info',
        'debug': 'debug',
        'trace': 'trace',
        'verbose': 'debug',
        'critical': 'fatal',
        'notice': 'info'
    };
    var _closure1_slot5 = var3;
    var3 = {
        0: 'fatal',
        1: 'warn',
        2: 'info',
        3: 'info',
        4: 'debug',
        5: 'trace'
    };
    var _closure1_slot6 = var3;
    var1 = function() {
        _fun9832: for (var _fun9832_ip = 0;;) switch (_fun9832_ip) {
            case 0:
                var4 = undefined;
                var3 = undefined;
                var0 = arguments.length;
                var2 = 0;
                if (!(var0 > var2)) {
                    _fun9832_ip = 23;
                    continue _fun9832
                }
            case 15:
                var0 = arguments[var2];
                if (!(var4 === var0)) {
                    _fun9832_ip = 27;
                    continue _fun9832
                }
            case 23:
                var0 = {};
                _fun9832_ip = 31;
                continue _fun9832;
            case 27:
                var0 = arguments[var2];
            case 31:
                var2 = global;
                var4 = var2.Set;
                var2 = var0.levels;
                var3 = null;
                if (!(var3 == var2)) {
                    _fun9832_ip = 58;
                    continue _fun9832
                }
            case 51:
                var2 = _closure1_slot4;
            case 58:
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = var3;
                var5 = var2;
                var2 = new var6[var4](var5, var4);
                var2 = var2 instanceof Object ? var2 : var3;
                var _closure2_slot0 = var2;
                var0 = var0.client;
                var _closure2_slot1 = var0;
                var0 = {};
                var1 = function arg0() {
                    _fun9833: for (var _fun9833_ip = 0;;) switch (_fun9833_ip) {
                        case 0:
                            var5 = arg0;
                            var7 = var5.type;
                            var2 = var5.level;
                            var9 = var5.message;
                            var14 = var5.args;
                            var8 = var5.tag;
                            var0 = var5.date;
                            var4 = _closure1_slot2;
                            var3 = _closure1_slot3;
                            var0 = undefined;
                            var4 = var4.bind(var0)(var5, var3);
                            var5 = _closure2_slot1;
                            if (var5) {
                                _fun9833_ip = 95;
                                continue _fun9833
                            }
                        case 65:
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot1;
                            var6 = 1;
                            var6 = var11[var6];
                            var10 = var10.bind(var0)(var6);
                            var6 = var10.getClient;
                            var5 = var6.bind(var10)();
                        case 95:
                            if (!var5) {
                                _fun9833_ip = 441;
                                continue _fun9833
                            }
                        case 101:
                            var6 = 'debug';
                            var10 = 'verbose';
                            if (!(var10 !== var7)) {
                                _fun9833_ip = 174;
                                continue _fun9833
                            }
                        case 113:
                            var6 = 'trace';
                            var10 = 'silent';
                            if (!(var10 !== var7)) {
                                _fun9833_ip = 174;
                                continue _fun9833
                            }
                        case 125:
                            if (!var7) {
                                _fun9833_ip = 139;
                                continue _fun9833
                            }
                        case 128:
                            var10 = _closure1_slot5;
                            var6 = var10[var7];
                            if (var6) {
                                _fun9833_ip = 174;
                                continue _fun9833
                            }
                        case 139:
                            var11 = 'info';
                            var12 = 'number';
                            var10 = typeof var2;
                            var6 = var11;
                            if (!(var12 === var10)) {
                                _fun9833_ip = 174;
                                continue _fun9833
                            }
                        case 157:
                            var10 = _closure1_slot6;
                            var10 = var10[var2];
                            var6 = var11;
                            if (!var10) {
                                _fun9833_ip = 174;
                                continue _fun9833
                            }
                        case 171:
                            var6 = var10;
                        case 174:
                            var10 = _closure2_slot0;
                            var3 = var10.has;
                            var3 = var3.bind(var10)(var6);
                            if (!var3) {
                                _fun9833_ip = 441;
                                continue _fun9833
                            }
                        case 194:
                            var3 = var5.getOptions;
                            var5 = var3.bind(var5)();
                            var10 = var5.normalizeDepth;
                            var3 = 3;
                            var13 = var3;
                            if (!(var0 !== var10)) {
                                _fun9833_ip = 223;
                                continue _fun9833
                            }
                        case 220:
                            var13 = var10;
                        case 223:
                            var5 = var5.normalizeMaxBreadth;
                            var12 = 1000;
                            if (!(var0 !== var5)) {
                                _fun9833_ip = 242;
                                continue _fun9833
                            }
                        case 239:
                            var12 = var5;
                        case 242:
                            var10 = new Array(0);
                            if (!var9) {
                                _fun9833_ip = 259;
                                continue _fun9833
                            }
                        case 249:
                            var5 = var10.push;
                            var5 = var5.bind(var10)(var9);
                        case 259:
                            var5 = var14;
                            if (!var5) {
                                _fun9833_ip = 276;
                                continue _fun9833
                            }
                        case 265:
                            var11 = var14.length;
                            var9 = 0;
                            var5 = var11 > var9;
                        case 276:
                            if (!var5) {
                                _fun9833_ip = 322;
                                continue _fun9833
                            }
                        case 279:
                            var9 = var10.push;
                            var11 = _closure1_slot0;
                            var15 = _closure1_slot1;
                            var5 = 2;
                            var5 = var15[var5];
                            var11 = var11.bind(var0)(var5);
                            var5 = var11.formatConsoleArgs;
                            var5 = var5.bind(var11)(var14, var13, var12);
                            var5 = var9.bind(var10)(var5);
                        case 322:
                            var9 = var10.join;
                            var5 = ' ';
                            var5 = var9.bind(var10)(var5);
                            var9 = 'auto.log.consola';
                            var4['sentry.origin'] = var9;
                            if (!var8) {
                                _fun9833_ip = 359;
                                continue _fun9833
                            }
                        case 353:
                            var4['consola.tag'] = var8;
                        case 359:
                            if (!var7) {
                                _fun9833_ip = 368;
                                continue _fun9833
                            }
                        case 362:
                            var4['consola.type'] = var7;
                        case 368:
                            var7 = null;
                            var7 = var7 != var2;
                            if (!var7) {
                                _fun9833_ip = 388;
                                continue _fun9833
                            }
                        case 377:
                            var9 = 'number';
                            var8 = typeof var2;
                            var7 = var9 === var8;
                        case 388:
                            if (!var7) {
                                _fun9833_ip = 397;
                                continue _fun9833
                            }
                        case 391:
                            var4['consola.level'] = var2;
                        case 397:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var3];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3._INTERNAL_captureLog;
                            var1 = {};
                            var1.level = var6;
                            var1.message = var5;
                            var1.attributes = var4;
                            var1 = var2.bind(var3)(var1);
                        case 441:
                            return var0;
                    }
                };
                var0.log = var1;
                return var0;
        }
    };
    var2.createConsolaReporter = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 847, 949, 875]);