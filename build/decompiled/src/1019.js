// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function() { // Original name: disable, environment: var0
        var1 = false;
        _closure1_slot3 = var1;
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 0;
        var2 = var4[var1];
        var0 = undefined;
        var5 = var3.bind(var0)(var2);
        var2 = null;
        var5._37 = var2;
        var1 = var4[var1];
        var1 = var3.bind(var0)(var1);
        var1._87 = var2;
        return var0;
    };
    var _closure1_slot4 = var2;
    var3 = function(arg0, arg1) { // Original name: matchWhitelist, environment: var0
        var2 = arg1;
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = var2.some;
        var0 = function(arg0) { // Environment: var0
            var1 = _closure2_slot0;
            var0 = arg0;
            var0 = var1 instanceof var0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot5 = var3;
    var4 = global;
    var5 = var4.ReferenceError;
    var3 = new Array(3);
    var3[0] = var5;
    var5 = var4.TypeError;
    var3[1] = var5;
    var4 = var4.RangeError;
    var3[2] = var4;
    var _closure1_slot2 = var3;
    var3 = false;
    var _closure1_slot3 = var3;
    var1.disable = var2;
    var0 = function(arg0) { // Original name: enable, environment: var0
        _fun10420: for (var _fun10420_ip = 0;;) switch (_fun10420_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var2 = function(arg0) { // Original name: onUnhandled, environment: var1
                    _fun10421: for (var _fun10421_ip = 0;;) switch (_fun10421_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = _closure2_slot0;
                            var1 = var1.allRejections;
                            if (var1) {
                                _fun10421_ip = 64;
                                continue _fun10421
                            }
                        case 19:
                            var6 = _closure1_slot5;
                            var3 = _closure2_slot3;
                            var3 = var3[var4];
                            var5 = var3.error;
                            var3 = _closure2_slot0;
                            var3 = var3.whitelist;
                            if (var3) {
                                _fun10421_ip = 56;
                                continue _fun10421
                            }
                        case 52:
                            var3 = _closure1_slot2;
                        case 56:
                            var2 = undefined;
                            var1 = var6.bind(var2)(var5, var3);
                        case 64:
                            if (!var1) {
                                _fun10421_ip = 214;
                                continue _fun10421
                            }
                        case 70:
                            var1 = _closure2_slot3;
                            var2 = var1[var4];
                            var1 = _closure2_slot2;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot2 = var3;
                            var2.displayId = var1;
                            var1 = _closure2_slot0;
                            var1 = var1.onUnhandled;
                            var2 = _closure2_slot3;
                            var3 = var2[var4];
                            var2 = true;
                            var3.logged = var2;
                            if (var1) {
                                _fun10421_ip = 171;
                                continue _fun10421
                            }
                        case 127:
                            var1 = _closure2_slot3;
                            var1 = var1[var4];
                            var5 = var1.displayId;
                            var1 = _closure2_slot3;
                            var1 = var1[var4];
                            var3 = var1.error;
                            var2 = function(arg0, arg1) { // Original name: logError, environment: var1
                                _fun10422: for (var _fun10422_ip = 0;;) switch (_fun10422_ip) {
                                    case 0:
                                        var2 = arg1;
                                        var0 = global;
                                        var3 = var0.console;
                                        var1 = var3.warn;
                                        var4 = 'Possible Unhandled Promise Rejection (id: ';
                                        var0 = arg0;
                                        var4 = var4 + var0;
                                        var0 = '):';
                                        var0 = var4 + var0;
                                        var0 = var1.bind(var3)(var0);
                                        var0 = var2;
                                        if (!var0) {
                                            _fun10422_ip = 65;
                                            continue _fun10422
                                        }
                                    case 50:
                                        var1 = var2.stack;
                                        if (var1) {
                                            _fun10422_ip = 62;
                                            continue _fun10422
                                        }
                                    case 59:
                                        var1 = var2;
                                    case 62:
                                        var0 = var1;
                                    case 65:
                                        var2 = '' + var0;
                                        var1 = var2.split;
                                        var0 = '\n';
                                        var2 = var1.bind(var2)(var0);
                                        var1 = var2.forEach;
                                        var0 = function(arg0) { // Environment: var0
                                            var0 = global;
                                            var2 = var0.console;
                                            var1 = var2.warn;
                                            var3 = '  ';
                                            var0 = arg0;
                                            var0 = var3 + var0;
                                            var0 = var1.bind(var2)(var0);
                                            var0 = undefined;
                                            return var0;
                                        };
                                        var0 = var1.bind(var2)(var0);
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = undefined;
                            var1 = var2.bind(var1)(var5, var3);
                            _fun10421_ip = 214;
                            continue _fun10421;
                        case 171:
                            var3 = _closure2_slot0;
                            var2 = var3.onUnhandled;
                            var1 = _closure2_slot3;
                            var1 = var1[var4];
                            var1 = var1.displayId;
                            var0 = _closure2_slot3;
                            var0 = var0[var4];
                            var0 = var0.error;
                            var0 = var2.bind(var3)(var1, var0);
                        case 214:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot4 = var2;
                if (var0) {
                    _fun10420_ip = 23;
                    continue _fun10420
                }
            case 21:
                var0 = {};
            case 23:
                _closure2_slot0 = var0;
                var2 = _closure1_slot3;
                if (!var2) {
                    _fun10420_ip = 47;
                    continue _fun10420
                }
            case 37:
                var3 = _closure1_slot4;
                var2 = undefined;
                var2 = var3.bind(var2)();
            case 47:
                var2 = true;
                _closure1_slot3 = var2;
                var4 = 0;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var2 = {};
                var _closure2_slot3 = var2;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var5 = var2[var4];
                var0 = undefined;
                var6 = var3.bind(var0)(var5);
                var5 = function(arg0) { // Environment: var1
                    _fun10424: for (var _fun10424_ip = 0;;) switch (_fun10424_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0._65;
                            var1 = 2;
                            var1 = var1 === var2;
                            if (!var1) {
                                _fun10424_ip = 36;
                                continue _fun10424
                            }
                        case 19:
                            var3 = _closure2_slot3;
                            var2 = var0._51;
                            var1 = var3[var2];
                        case 36:
                            if (!var1) {
                                _fun10424_ip = 329;
                                continue _fun10424
                            }
                        case 42:
                            var3 = _closure2_slot3;
                            var2 = var0._51;
                            var2 = var3[var2];
                            var2 = var2.logged;
                            if (var2) {
                                _fun10424_ip = 108;
                                continue _fun10424
                            }
                        case 68:
                            var2 = global;
                            var4 = var2.clearTimeout;
                            var3 = _closure2_slot3;
                            var2 = var0._51;
                            var2 = var3[var2];
                            var3 = var2.timeout;
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            _fun10424_ip = 315;
                            continue _fun10424;
                        case 108:
                            var6 = var0._51;
                            var2 = _closure2_slot3;
                            var2 = var2[var6];
                            var2 = var2.logged;
                            if (!var2) {
                                _fun10424_ip = 315;
                                continue _fun10424
                            }
                        case 134:
                            var2 = _closure2_slot0;
                            var2 = var2.onHandled;
                            if (var2) {
                                _fun10424_ip = 272;
                                continue _fun10424
                            }
                        case 150:
                            var2 = _closure2_slot3;
                            var2 = var2[var6];
                            var2 = var2.onUnhandled;
                            if (var2) {
                                _fun10424_ip = 315;
                                continue _fun10424
                            }
                        case 170:
                            var2 = global;
                            var5 = var2.console;
                            var4 = var5.warn;
                            var3 = _closure2_slot3;
                            var3 = var3[var6];
                            var7 = var3.displayId;
                            var3 = 'Promise Rejection Handled (id: ';
                            var7 = var3 + var7;
                            var3 = '):';
                            var3 = var7 + var3;
                            var3 = var4.bind(var5)(var3);
                            var4 = var2.console;
                            var3 = var4.warn;
                            var2 = _closure2_slot3;
                            var2 = var2[var6];
                            var5 = var2.displayId;
                            var2 = '  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ';
                            var5 = var2 + var5;
                            var2 = '.';
                            var2 = var5 + var2;
                            var2 = var3.bind(var4)(var2);
                            _fun10424_ip = 315;
                            continue _fun10424;
                        case 272:
                            var5 = _closure2_slot0;
                            var4 = var5.onHandled;
                            var2 = _closure2_slot3;
                            var2 = var2[var6];
                            var3 = var2.displayId;
                            var2 = _closure2_slot3;
                            var2 = var2[var6];
                            var2 = var2.error;
                            var2 = var4.bind(var5)(var3, var2);
                        case 315:
                            var1 = _closure2_slot3;
                            var0 = var0._51;
                            var0 = delete var1[var0];
                        case 329:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6._37 = var5;
                var2 = var2[var4];
                var2 = var3.bind(var0)(var2);
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun10425: for (var _fun10425_ip = 0;;) switch (_fun10425_ip) {
                        case 0:
                            var3 = arg0;
                            var8 = arg1;
                            var1 = var3._40;
                            var0 = 0;
                            if (!(var0 === var1)) {
                                _fun10425_ip = 149;
                                continue _fun10425
                            }
                        case 21:
                            var0 = _closure2_slot1;
                            var0 = parseFloat(var0);
                            var1 = var0 + 1;
                            _closure2_slot1 = var1;
                            var3._51 = var0;
                            var2 = _closure2_slot3;
                            var1 = var3._51;
                            var0 = {};
                            var7 = null;
                            var0.displayId = var7;
                            var0.error = var8;
                            var5 = global;
                            var6 = var5.setTimeout;
                            var5 = _closure2_slot4;
                            var4 = var5.bind;
                            var3 = var3._51;
                            var5 = var4.bind(var5)(var7, var3);
                            var7 = _closure1_slot5;
                            var3 = _closure1_slot2;
                            var4 = undefined;
                            var7 = var7.bind(var4)(var8, var3);
                            var3 = 2000;
                            if (!var7) {
                                _fun10425_ip = 127;
                                continue _fun10425
                            }
                        case 124:
                            var3 = 100;
                        case 127:
                            var3 = var6.bind(var4)(var5, var3);
                            var0.timeout = var3;
                            var3 = false;
                            var0.logged = var3;
                            var2[var1] = var0;
                        case 149:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2._87 = var1;
                return var0;
        }
    };
    var1.enable = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1016]);