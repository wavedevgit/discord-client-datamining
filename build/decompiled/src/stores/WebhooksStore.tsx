// stores/WebhooksStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() {
        _fun109206: for (var _fun109206_ip = 0;;) switch (_fun109206_ip) {
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
                _fun109206_ip = 76;
                continue _fun109206;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0, arg1() {
        _fun109209: for (var _fun109209_ip = 0;;) switch (_fun109209_ip) {
            case 0:
                var4 = arg1;
                var0 = null;
                if (!(var0 == var4)) {
                    _fun109209_ip = 13;
                    continue _fun109209
                }
            case 9:
                var4 = 'guild';
            case 13:
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var2 = '';
                var1 = arg0;
                var0 = ':';
                var0 = var3.bind(var2)(var1, var0, var4);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        _fun109210: for (var _fun109210_ip = 0;;) switch (_fun109210_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot8;
                var3 = var2[var1];
                var2 = null;
                if (!(var2 == var3)) {
                    _fun109210_ip = 30;
                    continue _fun109210
                }
            case 20:
                var3 = _closure1_slot8;
                var2 = {};
                var3[var1] = var2;
            case 30:
                var0 = _closure1_slot8;
                var0 = var0[var1];
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var7 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var3 = var0.webhook;
        var1 = _closure1_slot12;
        var0 = undefined;
        var2 = var1.bind(var0)(var2);
        var1 = var3.id;
        var2[var1] = var3;
        return var0;
    };
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = {};
    var _closure1_slot8 = var1;
    var1 = {};
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun109213: for (var _fun109213_ip = 0;;) switch (_fun109213_ip) {
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
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun109213_ip = 69;
                        continue _fun109213
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun109213_ip = 105;
                    continue _fun109213;
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
        var0 = 'isFetching';
        var4.key = var0;
        var0 = function arg0, arg1() {
            var1 = _closure1_slot9;
            var4 = _closure1_slot11;
            var3 = undefined;
            var2 = arg0;
            var0 = arg1;
            var0 = var4.bind(var3)(var2, var0);
            var1 = var1[var0];
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getWebhooksForGuild';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 6;
            var1 = var3[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = var2.values;
            var3 = _closure1_slot12;
            var0 = arg0;
            var0 = var3.bind(var4)(var0);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getWebhooksForChannel';
        var4.key = var6;
        var6 = function arg0, arg1() {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 6;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var4.bind(var3)(var2);
            var4 = _closure1_slot12;
            var1 = arg0;
            var1 = var4.bind(var3)(var1);
            var2 = var2.bind(var3)(var1);
            var1 = var2.values;
            var2 = var1.bind(var2)();
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.channel_id;
                var0 = _closure3_slot0;
                var0 = var1 === var0;
                return var0;
            };
            var1 = var1.bind(var2)(var0);
            var0 = var1.value;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'error';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot7;
            return var0;
        };
        var4.get = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'WebhooksStore';
    var6.displayName = var1;
    var1 = 8;
    var1 = var4[var1];
    var11 = var5.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        _fun109219: for (var _fun109219_ip = 0;;) switch (_fun109219_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var3 = var0.channelId;
                var _closure2_slot0 = var3;
                var7 = var0.webhooks;
                var6 = var0.error;
                var0 = undefined;
                var _closure2_slot1 = var0;
                var5 = null;
                if (!(var5 == var7)) {
                    _fun109219_ip = 148;
                    continue _fun109219
                }
            case 42:
                if (!(var5 == var6)) {
                    _fun109219_ip = 118;
                    continue _fun109219
                }
            case 46:
                var1 = var5 != var3;
                if (!var1) {
                    _fun109219_ip = 68;
                    continue _fun109219
                }
            case 53:
                var8 = _closure1_slot8;
                var8 = var8[var4];
                var1 = var5 != var8;
            case 68:
                if (!var1) {
                    _fun109219_ip = 291;
                    continue _fun109219
                }
            case 74:
                var _closure1_slot7 = var5;
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var1 = 5;
                var1 = var9[var1];
                var8 = var8.bind(var0)(var1);
                var1 = var8.fetchForChannel;
                var1 = var1.bind(var8)(var4, var3);
                _fun109219_ip = 291;
                continue _fun109219;
            case 118:
                _closure1_slot7 = var6;
                var6 = _closure1_slot9;
                var1 = _closure1_slot11;
                var1 = var1.bind(var0)(var4, var3);
                var1 = delete var6[var1];
                _fun109219_ip = 291;
                continue _fun109219;
            case 148:
                _closure1_slot7 = var5;
                var6 = new Array(0);
                if (!(var5 != var3)) {
                    _fun109219_ip = 232;
                    continue _fun109219
                }
            case 163:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var5 = 6;
                var5 = var9[var5];
                var8 = var8.bind(var0)(var5);
                var5 = _closure1_slot12;
                var5 = var5.bind(var0)(var4);
                var8 = var8.bind(var0)(var5);
                var5 = var8.values;
                var9 = var5.bind(var8)();
                var8 = var9.filter;
                var5 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.channel_id;
                    var0 = _closure2_slot0;
                    var0 = var1 !== var0;
                    return var0;
                };
                var8 = var8.bind(var9)(var5);
                var5 = var8.value;
                var6 = var5.bind(var8)();
            case 232:
                var8 = _closure1_slot8;
                var5 = {};
                var8[var4] = var5;
                _closure2_slot1 = var5;
                var5 = var6.concat;
                var6 = var5.bind(var6)(var7);
                var5 = var6.forEach;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var2 = _closure2_slot1;
                    var1 = var0.id;
                    var2[var1] = var0;
                    return var0;
                };
                var2 = var5.bind(var6)(var2);
                var2 = _closure1_slot9;
                var1 = _closure1_slot11;
                var1 = var1.bind(var0)(var4, var3);
                var1 = delete var2[var1];
            case 291:
                return var0;
        }
    };
    var1.WEBHOOKS_UPDATE = var8;
    var8 = function arg0() {
        var0 = arg0;
        var4 = var0.guildId;
        var2 = var0.channelId;
        var3 = _closure1_slot9;
        var1 = _closure1_slot11;
        var0 = undefined;
        var2 = var1.bind(var0)(var4, var2);
        var1 = true;
        var3[var2] = var1;
        return var0;
    };
    var1.WEBHOOKS_FETCHING = var8;
    var1.WEBHOOK_CREATE = var7;
    var1.WEBHOOK_UPDATE = var7;
    var3 = function arg0() {
        var0 = arg0;
        var3 = var0.guildId;
        var2 = var0.webhookId;
        var1 = _closure1_slot12;
        var0 = undefined;
        var1 = var1.bind(var0)(var3);
        var1 = delete var1[var2];
        return var0;
    };
    var1.WEBHOOK_DELETE = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var6](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/WebhooksStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 14015, 22, 566, 806, 2]);