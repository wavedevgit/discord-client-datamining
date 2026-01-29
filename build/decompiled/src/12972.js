// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var3 = function(arg0, arg1) { // Original name: _shouldDropEvent, environment: var1
        _fun99973: for (var _fun99973_ip = 0;;) switch (_fun99973_ip) {
            case 0:
                var7 = arg0;
                var6 = arg1;
                var1 = !var6;
                var0 = !var1;
                if (var1) {
                    _fun99973_ip = 206;
                    continue _fun99973
                }
            case 18:
                var4 = var7.message;
                var1 = var6.message;
                if (var4) {
                    _fun99973_ip = 36;
                    continue _fun99973
                }
            case 31:
                var2 = false;
                if (!var1) {
                    _fun99973_ip = 95;
                    continue _fun99973
                }
            case 36:
                if (!var4) {
                    _fun99973_ip = 44;
                    continue _fun99973
                }
            case 39:
                var2 = false;
                if (!var1) {
                    _fun99973_ip = 95;
                    continue _fun99973
                }
            case 44:
                if (var4) {
                    _fun99973_ip = 52;
                    continue _fun99973
                }
            case 47:
                var2 = false;
                if (var1) {
                    _fun99973_ip = 95;
                    continue _fun99973
                }
            case 52:
                var2 = false;
                if (!(var4 === var1)) {
                    _fun99973_ip = 95;
                    continue _fun99973
                }
            case 58:
                var5 = _closure1_slot4;
                var4 = undefined;
                var5 = var5.bind(var4)(var7, var6);
                var2 = false;
                if (!var5) {
                    _fun99973_ip = 95;
                    continue _fun99973
                }
            case 78:
                var1 = _closure1_slot3;
                var1 = var1.bind(var4)(var7, var6);
                var2 = false;
                if (!var1) {
                    _fun99973_ip = 95;
                    continue _fun99973
                }
            case 93:
                var2 = true;
            case 95:
                var1 = !var2;
                var1 = !var1;
                if (var2) {
                    _fun99973_ip = 203;
                    continue _fun99973
                }
            case 104:
                var2 = _closure1_slot5;
                var5 = undefined;
                var9 = var2.bind(var5)(var6);
                var8 = var2.bind(var5)(var7);
                var2 = false;
                if (!var9) {
                    _fun99973_ip = 197;
                    continue _fun99973
                }
            case 128:
                var2 = false;
                if (!var8) {
                    _fun99973_ip = 197;
                    continue _fun99973
                }
            case 133:
                var11 = var9.type;
                var10 = var8.type;
                var2 = false;
                if (!(var11 === var10)) {
                    _fun99973_ip = 197;
                    continue _fun99973
                }
            case 149:
                var9 = var9.value;
                var8 = var8.value;
                var2 = false;
                if (!(var9 === var8)) {
                    _fun99973_ip = 197;
                    continue _fun99973
                }
            case 165:
                var8 = _closure1_slot4;
                var8 = var8.bind(var5)(var7, var6);
                var2 = false;
                if (!var8) {
                    _fun99973_ip = 197;
                    continue _fun99973
                }
            case 180:
                var3 = _closure1_slot3;
                var3 = var3.bind(var5)(var7, var6);
                var2 = false;
                if (!var3) {
                    _fun99973_ip = 197;
                    continue _fun99973
                }
            case 195:
                var2 = true;
            case 197:
                var2 = !var2;
                var1 = !var2;
            case 203:
                var0 = var1;
            case 206:
                return var0;
        }
    };
    var _closure1_slot2 = var3;
    var0 = function(arg0, arg1) { // Original name: _isSameStacktrace, environment: var1
        _fun99974: for (var _fun99974_ip = 0;;) switch (_fun99974_ip) {
            case 0:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 1;
                var3 = var4[var0];
                var1 = undefined;
                var6 = var2.bind(var1)(var3);
                var5 = var6.getFramesFromEvent;
                var3 = arg0;
                var3 = var5.bind(var6)(var3);
                var0 = var4[var0];
                var2 = var2.bind(var1)(var0);
                var1 = var2.getFramesFromEvent;
                var0 = arg1;
                var2 = var1.bind(var2)(var0);
                if (var3) {
                    _fun99974_ip = 72;
                    continue _fun99974
                }
            case 65:
                if (var2) {
                    _fun99974_ip = 72;
                    continue _fun99974
                }
            case 68:
                var0 = true;
                return var0;
            case 72:
                if (!var3) {
                    _fun99974_ip = 78;
                    continue _fun99974
                }
            case 75:
                if (!var2) {
                    _fun99974_ip = 84;
                    continue _fun99974
                }
            case 78:
                if (var3) {
                    _fun99974_ip = 88;
                    continue _fun99974
                }
            case 81:
                if (!var2) {
                    _fun99974_ip = 88;
                    continue _fun99974
                }
            case 84:
                var0 = false;
                return var0;
            case 88:
                var1 = var2.length;
                var0 = var3.length;
                if (!(var1 === var0)) {
                    _fun99974_ip = 208;
                    continue _fun99974
                }
            case 102:
                var0 = var2.length;
                var1 = 0;
                var0 = var1 < var0;
                if (!var0) {
                    _fun99974_ip = 200;
                    continue _fun99974
                }
            case 116:
                var4 = var2[var1];
                var0 = var3[var1];
                var6 = var4.filename;
                var5 = var0.filename;
                if (!(var6 === var5)) {
                    _fun99974_ip = 204;
                    continue _fun99974
                }
            case 140:
                var6 = var4.lineno;
                var5 = var0.lineno;
                if (!(var6 === var5)) {
                    _fun99974_ip = 204;
                    continue _fun99974
                }
            case 156:
                var6 = var4.colno;
                var5 = var0.colno;
                if (!(var6 === var5)) {
                    _fun99974_ip = 204;
                    continue _fun99974
                }
            case 172:
                var4 = var4.function;
                var0 = var0.function;
                if (!(var4 === var0)) {
                    _fun99974_ip = 204;
                    continue _fun99974
                }
            case 188:
                var1 = var1 + 1;
                var0 = var2.length;
                if (var1 < var0) {
                    _fun99974_ip = 116;
                    continue _fun99974
                }
            case 200:
                var0 = true;
                return var0;
            case 204:
                var0 = false;
                return var0;
            case 208:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = function(arg0, arg1) { // Original name: _isSameFingerprint, environment: var1
        _fun99975: for (var _fun99975_ip = 0;;) switch (_fun99975_ip) {
            case 0:
                var1 = undefined;
                var0 = undefined;
                var2 = arg0;
                var2 = var2.fingerprint;
                var1 = var2;
                var3 = arg1;
                var0 = var3.fingerprint;
                if (var2) {
                    _fun99975_ip = 38;
                    continue _fun99975
                }
            case 28:
                var2 = var0;
                if (var2) {
                    _fun99975_ip = 38;
                    continue _fun99975
                }
            case 34:
                var2 = true;
                return var2;
            case 38:
                var2 = var1;
                if (!var2) {
                    _fun99975_ip = 50;
                    continue _fun99975
                }
            case 44:
                var2 = var0;
                if (!var2) {
                    _fun99975_ip = 62;
                    continue _fun99975
                }
            case 50:
                var2 = var1;
                if (var2) {
                    _fun99975_ip = 66;
                    continue _fun99975
                }
            case 56:
                var2 = var0;
                if (!var2) {
                    _fun99975_ip = 66;
                    continue _fun99975
                }
            case 62:
                var2 = false;
                return var2;
            case 66: // try_start_0
                var2 = var1;
                var1 = var2.join;
                var3 = '';
                var1 = var1.bind(var2)(var3);
                var2 = var0;
                var0 = var2.join;
                var0 = var0.bind(var2)(var3);
            case 96: // try_end0
                var0 = var1 !== var0;
                var0 = !var0;
                return var0;
            case 105: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function(arg0) { // Original name: _getExceptionFromEvent, environment: var1
        _fun99976: for (var _fun99976_ip = 0;;) switch (_fun99976_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.exception;
                if (!var0) {
                    _fun99976_ip = 23;
                    continue _fun99976
                }
            case 12:
                var2 = var1.exception;
                var0 = var2.values;
            case 23:
                if (!var0) {
                    _fun99976_ip = 43;
                    continue _fun99976
                }
            case 26:
                var1 = var1.exception;
                var2 = var1.values;
                var1 = 0;
                var0 = var2[var1];
            case 43:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 2;
    var4 = var4[var0];
    var0 = undefined;
    var5 = var5.bind(var0)(var4);
    var4 = var5.defineIntegration;
    var1 = function() { // Original name: _dedupeIntegration, environment: var1
        var0 = {};
        var1 = 'Dedupe';
        var0.name = var1;
        var1 = function(arg0) { // Original name: processEvent, environment: var1
            _fun99978: for (var _fun99978_ip = 0;;) switch (_fun99978_ip) {
                case 0:
                    var1 = arg0;
                    var0 = var1;
                    var1 = var1.type;
                    if (var1) {
                        _fun99978_ip = 132;
                        continue _fun99978
                    }
                case 14: // try_start_0
                    var5 = _closure1_slot2;
                    var4 = var0;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var2 = var5.bind(var3)(var4, var2);
                    if (var2) {
                        _fun99978_ip = 44;
                        continue _fun99978
                    }
                case 42: // try_end0
                    _fun99978_ip = 120;
                    continue _fun99978;
                case 44: // try_start_1
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 0;
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.DEBUG_BUILD;
                    if (!var2) {
                        _fun99978_ip = 114;
                        continue _fun99978
                    }
                case 72:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 1;
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var3 = var1.logger;
                    var2 = var3.warn;
                    var1 = 'Event dropped due to being a duplicate of previously captured event.';
                    var1 = var2.bind(var3)(var1);
                case 114: // try_end1
                    var1 = null;
                    return var1;
                case 118: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register = 1);
                case 120:
                    var1 = var0;
                    var _closure2_slot0 = var1;
                    return var1;
                case 132:
                    return var0;
            }
        };
        var0.processEvent = var1;
        return var0;
    };
    var1 = var4.bind(var5)(var1);
    var2._shouldDropEvent = var3;
    var2.dedupeIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12928, 12862, 12951]);