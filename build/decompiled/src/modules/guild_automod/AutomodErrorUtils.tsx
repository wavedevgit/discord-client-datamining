// modules/guild_automod/AutomodErrorUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var0 = function arg0, arg1, arg2() {
        _fun54065: for (var _fun54065_ip = 0;;) switch (_fun54065_ip) {
            case 0:
                var3 = arg0;
                var5 = arg2;
                var1 = _closure1_slot5;
                var2 = undefined;
                var0 = arg1;
                var8 = var1.bind(var2)(var0);
                var1 = _closure1_slot4;
                var0 = _closure1_slot11;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun54065_ip = 51;
                    continue _fun54065
                }
            case 38:
                var0 = var8.apply;
                var0 = var0.bind(var8)(var3, var5);
                _fun54065_ip = 92;
                continue _fun54065;
            case 51:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                if (var5) {
                    _fun54065_ip = 71;
                    continue _fun54065
                }
            case 67:
                var5 = new Array(0);
            case 71:
                var4 = _closure1_slot5;
                var4 = var4.bind(var2)(var3);
                var4 = var4.constructor;
                var0 = var6.bind(var7)(var8, var5, var4);
            case 92:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function() {
        _fun54066: for (var _fun54066_ip = 0;;) switch (_fun54066_ip) {
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
                _fun54066_ip = 74;
                continue _fun54066;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var4 = function arg0, arg1() {
        _fun54069: for (var _fun54069_ip = 0;;) switch (_fun54069_ip) {
            case 0:
                var1 = arg0;
                var6 = arg1;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun54069_ip = 340;
                    continue _fun54069
                }
            case 15:
                var4 = var1.code;
                var1 = var1.message;
                var5 = _closure1_slot9;
                var3 = var5.has;
                var3 = var3.bind(var5)(var4);
                if (var3) {
                    _fun54069_ip = 47;
                    continue _fun54069
                }
            case 45:
                return var0;
            case 47:
                if (!(var0 == var1)) {
                    _fun54069_ip = 338;
                    continue _fun54069
                }
            case 54:
                if (!(var0 != var6)) {
                    _fun54069_ip = 336;
                    continue _fun54069
                }
            case 61:
                var5 = _closure1_slot7;
                var3 = var5.getChannel;
                var5 = var3.bind(var5)(var6);
                if (!(var0 != var5)) {
                    _fun54069_ip = 95;
                    continue _fun54069
                }
            case 79:
                var3 = var5.isThread;
                var3 = var3.bind(var5)();
                if (var3) {
                    _fun54069_ip = 277;
                    continue _fun54069
                }
            case 95:
                if (!(var0 != var5)) {
                    _fun54069_ip = 112;
                    continue _fun54069
                }
            case 99:
                var3 = var5.isForumPost;
                var3 = var3.bind(var5)();
                if (var3) {
                    _fun54069_ip = 129;
                    continue _fun54069
                }
            case 112:
                if (!(var0 != var5)) {
                    _fun54069_ip = 157;
                    continue _fun54069
                }
            case 116:
                var3 = var5.isForumLikeChannel;
                var3 = var3.bind(var5)();
                if (!var3) {
                    _fun54069_ip = 157;
                    continue _fun54069
                }
            case 129:
                var3 = _closure1_slot8;
                var3 = var3.AUTOMOD_TITLE_BLOCKED;
                if (!(var4 !== var3)) {
                    _fun54069_ip = 218;
                    continue _fun54069
                }
            case 143:
                var3 = _closure1_slot8;
                var3 = var3.AUTOMOD_MESSAGE_BLOCKED;
                if (!(var4 !== var3)) {
                    _fun54069_ip = 159;
                    continue _fun54069
                }
            case 157:
                return var0;
            case 159:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 8;
                var4 = var8[var3];
                var6 = undefined;
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.ipgKDg;
                var3 = var4.bind(var5)(var3);
                return var3;
            case 218:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 8;
                var4 = var8[var3];
                var6 = undefined;
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.ipgKDg;
                var3 = var4.bind(var5)(var3);
                return var3;
            case 277:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 8;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.DVdG9E;
                var2 = var3.bind(var4)(var2);
                return var2;
            case 336:
                return var0;
            case 338:
                return var1;
            case 340:
                return var0;
        }
    };
    var _closure1_slot12 = var4;
    var3 = function arg0() {
        _fun54070: for (var _fun54070_ip = 0;;) switch (_fun54070_ip) {
            case 0:
                var4 = arg0;
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var0 = var4.message;
                var0 = var0.channelId;
                var2 = var2.bind(var3)(var0);
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 9;
                var0 = var5[var0];
                var5 = undefined;
                var3 = var3.bind(var5)(var0);
                var0 = var3.isMessageDataEdit;
                var0 = var0.bind(var3)(var4);
                if (var0) {
                    _fun54070_ip = 296;
                    continue _fun54070
                }
            case 69:
                var0 = null;
                if (!(var0 != var2)) {
                    _fun54070_ip = 91;
                    continue _fun54070
                }
            case 75:
                var3 = var2.isThread;
                var3 = var3.bind(var2)();
                if (var3) {
                    _fun54070_ip = 239;
                    continue _fun54070
                }
            case 91:
                if (!(var0 != var2)) {
                    _fun54070_ip = 108;
                    continue _fun54070
                }
            case 95:
                var3 = var2.isForumPost;
                var3 = var3.bind(var2)();
                if (var3) {
                    _fun54070_ip = 182;
                    continue _fun54070
                }
            case 108:
                if (!(var0 != var2)) {
                    _fun54070_ip = 125;
                    continue _fun54070
                }
            case 112:
                var0 = var2.isForumLikeChannel;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun54070_ip = 182;
                    continue _fun54070
                }
            case 125:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 8;
                var2 = var6[var0];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var0 = var6[var0];
                var0 = var4.bind(var5)(var0);
                var0 = var0.t;
                var0 = var0.zQ69pv;
                var0 = var2.bind(var3)(var0);
                _fun54070_ip = 237;
                continue _fun54070;
            case 182:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 8;
                var3 = var7[var2];
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.ipgKDg;
                var0 = var3.bind(var4)(var2);
            case 237:
                _fun54070_ip = 294;
                continue _fun54070;
            case 239:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 8;
                var3 = var7[var2];
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.DVdG9E;
                var0 = var3.bind(var4)(var2);
            case 294:
                _fun54070_ip = 353;
                continue _fun54070;
            case 296:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 8;
                var2 = var6[var1];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1.bU6o0z;
                var0 = var2.bind(var3)(var1);
            case 353:
                return var0;
        }
    };
    var _closure1_slot13 = var3;
    var5 = global;
    var11 = var5.Object;
    var8 = var11.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var11)(var2, var0, var6);
    var0 = 0;
    var6 = var10[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var10[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var10[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var10[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 4;
    var6 = var10[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 5;
    var6 = var10[var6];
    var11 = var7.bind(var0)(var6);
    var6 = 6;
    var6 = var10[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 7;
    var6 = var10[var6];
    var6 = var9.bind(var0)(var6);
    var8 = var6.AbortCodes;
    var _closure1_slot8 = var8;
    var6 = var5.Error;
    var7 = var11.bind(var0)(var6);
    var6 = function(arg0) { // Environment: var1
        var2 = function() {
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot3;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot10;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot2;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var7 = var6.bind(var0)(var7);
    var6 = var5.Error;
    var11 = var11.bind(var0)(var6);
    var6 = function(arg0) { // Environment: var1
        var2 = function() {
            var4 = this;
            var3 = undefined;
            var0 = undefined;
            var5 = _closure1_slot3;
            var2 = _closure2_slot0;
            var5 = var5.bind(var3)(var4, var2);
            var1 = _closure1_slot10;
            var0 = arguments;
            var0 = var1.bind(var3)(var4, var2, var0);
            return var0;
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot2;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var6 = var6.bind(var0)(var11);
    var11 = var5.Set;
    var12 = var8.AUTOMOD_MESSAGE_BLOCKED;
    var5 = new Array(3);
    var5[0] = var12;
    var12 = var8.AUTOMOD_TITLE_BLOCKED;
    var5[1] = var12;
    var8 = var8.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE;
    var5[2] = var8;
    var8 = var11.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var11
        }
    });
    var16 = var8;
    var15 = var5;
    var5 = new var16[var11](var15, var14);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot9 = var5;
    var8 = 10;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/guild_automod/AutomodErrorUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var2.InvalidKeywordError = var7;
    var2.InvalidRegexPatternError = var6;
    var2.AUTOMOD_ERROR_CODES = var5;
    var2.getAutomodErrorMessageFromErrorResponse = var4;
    var2.getAutomodErrorMessageFromMessageData = var3;
    var1 = function arg0, arg1() {
        _fun54075: for (var _fun54075_ip = 0;;) switch (_fun54075_ip) {
            case 0:
                var3 = arg0;
                var1 = _closure1_slot12;
                var6 = undefined;
                var0 = arg1;
                var0 = var1.bind(var6)(var0);
                var1 = null;
                if (!(var1 == var0)) {
                    _fun54075_ip = 99;
                    continue _fun54075
                }
            case 26:
                if (!(var1 != var3)) {
                    _fun54075_ip = 41;
                    continue _fun54075
                }
            case 30:
                var1 = _closure1_slot13;
                var1 = var1.bind(var6)(var3);
                _fun54075_ip = 96;
                continue _fun54075;
            case 41:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 8;
                var3 = var7[var2];
                var3 = var5.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.zQ69pv;
                var1 = var3.bind(var4)(var2);
            case 96:
                var0 = var1;
            case 99:
                return var0;
        }
    };
    var2.getAutomodErrorMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 162, 1372, 660, 1234, 4301, 2]);