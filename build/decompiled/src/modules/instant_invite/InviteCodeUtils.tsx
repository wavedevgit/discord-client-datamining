// modules/instant_invite/InviteCodeUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function(arg0) { // Original name: generateInviteKeyFromExtraData, environment: var1
        _fun28245: for (var _fun28245_ip = 0;;) switch (_fun28245_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.baseCode;
                var6 = var0.guildScheduledEventId;
                var1 = null;
                var0 = var7;
                if (!(var1 != var6)) {
                    _fun28245_ip = 66;
                    continue _fun28245
                }
            case 24:
                var10 = _closure1_slot4;
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var13 = '';
                var11 = '?';
                var9 = '=';
                var12 = var7;
                var8 = var6;
                var0 = var13[var4](var12, var11, var10, var9, var8, var7);
            case 66:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 'event';
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/instant_invite/InviteCodeUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg0, arg1) { // Original name: generateInviteKeyFromUrlParams, environment: var1
        _fun28246: for (var _fun28246_ip = 0;;) switch (_fun28246_ip) {
            case 0:
                var0 = arg0;
                var6 = arg1;
                var1 = null;
                if (!(var1 != var6)) {
                    _fun28246_ip = 164;
                    continue _fun28246
                }
            case 15:
                var3 = undefined;
                var2 = undefined;
                var4 = var6.charAt;
                var1 = 0;
                var5 = var4.bind(var6)(var1);
                var4 = '?';
                var1 = var6;
                if (!(var4 === var5)) {
                    _fun28246_ip = 57;
                    continue _fun28246
                }
            case 43:
                var5 = var6.substring;
                var4 = 1;
                var1 = var5.bind(var6)(var4);
            case 57:
                var2 = var1;
            case 60: // try_start_0
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 1;
                var4 = var6[var4];
                var5 = var5.bind(var3)(var4);
                var4 = var5.parse;
                var5 = var4.bind(var5)(var2);
                var4 = _closure1_slot0;
                var2 = 2;
                var2 = var6[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.getFirstQueryStringValue;
                var1 = _closure1_slot4;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
            case 129: // try_end0
                var4 = var1;
                _fun28246_ip = 138;
                continue _fun28246;
            case 134: // catch_target0
                CatchBlockStart(arg_register = 1);
                var4 = undefined;
            case 138:
                var2 = _closure1_slot5;
                var1 = {};
                var1.baseCode = var0;
                var1.guildScheduledEventId = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 164:
                return var0;
        }
    };
    var2.generateInviteKeyFromUrlParams = var4;
    var2.generateInviteKeyFromExtraData = var3;
    var3 = function(arg0) { // Original name: parseExtraDataFromInviteKey, environment: var1
        _fun28247: for (var _fun28247_ip = 0;;) switch (_fun28247_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.split;
                var0 = '?';
                var1 = var1.bind(var2)(var0);
                var0 = _closure1_slot3;
                var6 = undefined;
                var7 = 2;
                var3 = var0.bind(var6)(var1, var7);
                var0 = 0;
                var1 = var3[var0];
                var0 = 1;
                var5 = var3[var0];
                var3 = null;
                if (!(var3 != var5)) {
                    _fun28247_ip = 128;
                    continue _fun28247
                }
            case 54:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = var3[var0];
                var4 = var4.bind(var6)(var0);
                var0 = var4.parse;
                var5 = var0.bind(var4)(var5);
                var0 = {};
                var0.baseCode = var1;
                var4 = _closure1_slot0;
                var3 = var3[var7];
                var4 = var4.bind(var6)(var3);
                var3 = var4.getFirstQueryStringValue;
                var2 = _closure1_slot4;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var0.guildScheduledEventId = var2;
                return var0;
            case 128:
                var0 = {};
                var0.baseCode = var1;
                return var0;
        }
    };
    var2.parseExtraDataFromInviteKey = var3;
    var1 = function(arg0) { // Original name: parseInviteCodeFromInviteKey, environment: var1
        var2 = arg0;
        var1 = var2.split;
        var0 = '?';
        var3 = var1.bind(var2)(var0);
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = 1;
        var1 = var2.bind(var1)(var3, var0);
        var0 = 0;
        var0 = var1[var0];
        return var0;
    };
    var2.parseInviteCodeFromInviteKey = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1454, 3284, 2]);