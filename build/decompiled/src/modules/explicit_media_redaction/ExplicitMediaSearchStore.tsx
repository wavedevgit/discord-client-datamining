// modules/explicit_media_redaction/ExplicitMediaSearchStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun39353: for (var _fun39353_ip = 0;;) switch (_fun39353_ip) {
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
                _fun39353_ip = 74;
                continue _fun39353;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var4 = var0.channel_id;
        var3 = var0.id;
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = '';
        var0 = ':';
        var0 = var2.bind(var1)(var4, var0, var3);
        return var0;
    };
    var _closure1_slot9 = var0;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.data;
        var0 = {};
        _closure1_slot7 = var0;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var2 = var0.messages;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                var2 = arg0;
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var5 = arg0;
                    var3 = _closure1_slot7;
                    var2 = _closure1_slot9;
                    var0 = undefined;
                    var2 = var2.bind(var0)(var5);
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 5;
                    var1 = var6[var1];
                    var4 = var4.bind(var0)(var1);
                    var1 = var4.createMessageRecord;
                    var1 = var1.bind(var4)(var5);
                    var3[var2] = var1;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var0 = function() {
        var0 = {};
        _closure1_slot7 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var1);
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
    var1 = {};
    var _closure1_slot7 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun39363: for (var _fun39363_ip = 0;;) switch (_fun39363_ip) {
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
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun39363_ip = 69;
                        continue _fun39363
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun39363_ip = 105;
                    continue _fun39363;
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
        var5 = _closure1_slot6;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot3;
        var4 = {};
        var5 = 'getMessage';
        var4.key = var5;
        var0 = function arg0, arg1() {
            var1 = _closure1_slot7;
            var3 = _closure1_slot9;
            var2 = {};
            var0 = arg0;
            var2.id = var0;
            var0 = arg1;
            var2.channel_id = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2);
            var0 = var1[var0];
            return var0;
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'SearchMessageStore';
    var7.displayName = var1;
    var1 = 8;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var1.SEARCH_MESSAGES_SUCCESS = var8;
    var1.MOD_VIEW_SEARCH_MESSAGES_SUCCESS = var8;
    var8 = function arg0() {
        _fun39365: for (var _fun39365_ip = 0;;) switch (_fun39365_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.message;
                var1 = var7.id;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun39365_ip = 125;
                    continue _fun39365
                }
            case 19:
                var1 = var7.channel_id;
                if (!(var0 != var1)) {
                    _fun39365_ip = 125;
                    continue _fun39365
                }
            case 28:
                var2 = _closure1_slot9;
                var5 = undefined;
                var3 = var2.bind(var5)(var7);
                var2 = _closure1_slot7;
                var6 = var2[var3];
                var0 = var0 != var6;
                if (!var0) {
                    _fun39365_ip = 123;
                    continue _fun39365
                }
            case 57:
                var2 = _closure1_slot7;
                var4 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 5;
                var1 = var8[var1];
                var5 = var4.bind(var5)(var1);
                var4 = var5.updateMessageRecord;
                var1 = {};
                var8 = var7.attachments;
                var1.attachments = var8;
                var7 = var7.embeds;
                var1.embeds = var7;
                var1 = var4.bind(var5)(var6, var1);
                var2[var3] = var1;
                var0 = true;
            case 123:
                return var0;
            case 125:
                var0 = false;
                return var0;
        }
    };
    var1.MESSAGE_UPDATE = var8;
    var8 = function() {
        var1 = _closure1_slot10;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.LOGOUT = var8;
    var8 = function() {
        var1 = _closure1_slot10;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.CONNECTION_OPEN = var8;
    var3 = function arg0() {
        _fun39368: for (var _fun39368_ip = 0;;) switch (_fun39368_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.messageId;
                var0 = var0.channelId;
                var3 = _closure1_slot9;
                var2 = {};
                var2.id = var4;
                var2.channel_id = var0;
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = _closure1_slot7;
                var5 = var2[var3];
                var2 = null;
                if (!(var2 != var5)) {
                    _fun39368_ip = 90;
                    continue _fun39368
                }
            case 51:
                var2 = _closure1_slot7;
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 6;
                var1 = var6[var1];
                var4 = var4.bind(var0)(var1);
                var1 = var4.handleExplicitMediaScanTimeoutForMessage;
                var1 = var1.bind(var4)(var5);
                var2[var3] = var1;
            case 90:
                return var0;
        }
    };
    var1.MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT = var3;
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
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/explicit_media_redaction/ExplicitMediaSearchStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3972, 4256, 566, 806, 2]);