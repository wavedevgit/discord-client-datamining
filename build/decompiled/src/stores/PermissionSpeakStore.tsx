// stores/PermissionSpeakStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun96003: for (var _fun96003_ip = 0;;) switch (_fun96003_ip) {
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
                _fun96003_ip = 76;
                continue _fun96003;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var1 = {};
    var7 = true;
    var1.value = var7;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = false;
    var _closure1_slot11 = var1;
    var _closure1_slot12 = var7;
    var _closure1_slot13 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun96007: for (var _fun96007_ip = 0;;) switch (_fun96007_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun96007_ip = 69;
                        continue _fun96007
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun96007_ip = 105;
                    continue _fun96007;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            _fun96008: for (var _fun96008_ip = 0;;) switch (_fun96008_ip) {
                case 0:
                    var4 = this;
                    var3 = var4.waitFor;
                    var1 = _closure1_slot7;
                    var0 = _closure1_slot8;
                    var0 = var3.bind(var4)(var1, var0);
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var4 = var1.Storage;
                    var3 = var4.get;
                    var1 = 'hideSuppressWarning';
                    var1 = var3.bind(var4)(var1);
                    if (var1) {
                        _fun96008_ip = 77;
                        continue _fun96008
                    }
                case 73:
                    var1 = _closure1_slot13;
                case 77:
                    _closure1_slot13 = var1;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'isAFKChannel';
        var4.key = var6;
        var6 = function() {
            _fun96009: for (var _fun96009_ip = 0;;) switch (_fun96009_ip) {
                case 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getChannel;
                    var0 = _closure1_slot10;
                    var2 = var2.bind(var3)(var0);
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun96009_ip = 75;
                        continue _fun96009
                    }
                case 27:
                    var4 = _closure1_slot8;
                    var3 = var4.getGuild;
                    var1 = var2.getGuildId;
                    var1 = var1.bind(var2)();
                    var1 = var3.bind(var4)(var1);
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun96009_ip = 73;
                        continue _fun96009
                    }
                case 58:
                    var2 = var2.id;
                    var1 = var1.afkChannelId;
                    var0 = var2 === var1;
                case 73:
                    return var0;
                case 75:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'shouldShowWarning';
        var4.key = var6;
        var5 = function() {
            _fun96010: for (var _fun96010_ip = 0;;) switch (_fun96010_ip) {
                case 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getChannel;
                    var0 = _closure1_slot10;
                    var3 = var2.bind(var3)(var0);
                    var0 = null;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun96010_ip = 40;
                        continue _fun96010
                    }
                case 30:
                    var2 = var3.isGuildStageVoice;
                    var0 = var2.bind(var3)();
                case 40:
                    if (var0) {
                        _fun96010_ip = 47;
                        continue _fun96010
                    }
                case 43:
                    var0 = _closure1_slot12;
                case 47:
                    var0 = !var0;
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'PermissionSpeakStore';
    var7.displayName = var1;
    var1 = 9;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        var0 = arg0;
        var0 = var0.sessionId;
        var _closure1_slot9 = var0;
        var0 = false;
        _closure1_slot11 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var8;
    var8 = function() {
        var0 = null;
        _closure1_slot9 = var0;
        var _closure1_slot10 = var0;
        var0 = true;
        _closure1_slot12 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_CLOSED = var8;
    var8 = function arg0() {
        var0 = arg0;
        var3 = var0.voiceStates;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun96014: for (var _fun96014_ip = 0;;) switch (_fun96014_ip) {
                case 0:
                    var0 = arg0;
                    var1 = arg1;
                    var4 = _closure1_slot9;
                    var3 = var1.sessionId;
                    if (!(var4 === var3)) {
                        _fun96014_ip = 118;
                        continue _fun96014
                    }
                case 23:
                    var4 = _closure1_slot11;
                    var3 = var1.suppress;
                    if (!(var4 !== var3)) {
                        _fun96014_ip = 54;
                        continue _fun96014
                    }
                case 37:
                    var3 = var1.suppress;
                    _closure1_slot11 = var3;
                    var3 = !var3;
                    _closure1_slot12 = var3;
                case 54:
                    var4 = _closure1_slot10;
                    var3 = var1.channelId;
                    if (!(var4 !== var3)) {
                        _fun96014_ip = 87;
                        continue _fun96014
                    }
                case 67:
                    var3 = var1.channelId;
                    _closure1_slot10 = var3;
                    var3 = _closure1_slot11;
                    var3 = !var3;
                    _closure1_slot12 = var3;
                case 87:
                    var3 = _closure1_slot13;
                    if (var3) {
                        _fun96014_ip = 105;
                        continue _fun96014
                    }
                case 94:
                    var4 = var1.channelId;
                    var1 = null;
                    var3 = var1 == var4;
                case 105:
                    var1 = true;
                    var0 = true;
                    if (!var3) {
                        _fun96014_ip = 118;
                        continue _fun96014
                    }
                case 112:
                    _closure1_slot12 = var1;
                    var0 = true;
                case 118:
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.VOICE_STATE_UPDATES = var8;
    var3 = function arg0() {
        _fun96015: for (var _fun96015_ip = 0;;) switch (_fun96015_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.forever;
                var1 = true;
                _closure1_slot12 = var1;
                if (!var2) {
                    _fun96015_ip = 74;
                    continue _fun96015
                }
            case 21:
                _closure1_slot13 = var1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.Storage;
                var2 = var3.set;
                var1 = _closure1_slot13;
                var0 = 'hideSuppressWarning';
                var0 = var2.bind(var3)(var0, var1);
            case 74:
                var0 = undefined;
                return var0;
        }
    };
    var1.PERMISSION_CLEAR_SUPPRESS_WARNING = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var7](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/PermissionSpeakStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1372, 1410, 587, 566, 806, 2]);