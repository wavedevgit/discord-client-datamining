// modules/debug/serializePushNotifcationLogs.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.DEVICE_TOKEN;
    var _closure1_slot2 = var6;
    var3 = var3.DEVICE_VOIP_TOKEN;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/debug/serializePushNotifcationLogs.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: serializePushNotificationLogs, environment: var1
        _fun70126: for (var _fun70126_ip = 0;;) switch (_fun70126_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var _closure2_slot0 = var1;
                var3 = var2.length;
                var1 = 0;
                if (!(var1 !== var3)) {
                    _fun70126_ip = 242;
                    continue _fun70126
                }
            case 26:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 1;
                var7 = var6[var3];
                var4 = undefined;
                var7 = var5.bind(var4)(var7);
                var9 = var7.Storage;
                var8 = var9.get;
                var7 = _closure1_slot2;
                var8 = var8.bind(var9)(var7);
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var4 = var3.Storage;
                var3 = var4.get;
                var1 = _closure1_slot3;
                var7 = var3.bind(var4)(var1);
                var1 = null;
                var3 = var1 != var8;
                var6 = '';
                var5 = var6;
                if (!var3) {
                    _fun70126_ip = 140;
                    continue _fun70126
                }
            case 116:
                var3 = global;
                var3 = var3.HermesInternal;
                var4 = var3.concat;
                var3 = 'Device Token: ';
                var5 = var4.bind(var3)(var8);
            case 140:
                var1 = var1 != var7;
                var4 = var6;
                if (!var1) {
                    _fun70126_ip = 174;
                    continue _fun70126
                }
            case 150:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var1 = 'Device Voip Token: ';
                var4 = var3.bind(var1)(var7);
            case 174:
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    _fun70127: for (var _fun70127_ip = 0;;) switch (_fun70127_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.silent;
                            var8 = 'Displayed';
                            if (!var0) {
                                _fun70127_ip = 24;
                                continue _fun70127
                            }
                        case 18:
                            var8 = 'Silent';
                        case 24:
                            var0 = _closure2_slot0;
                            if (var0) {
                                _fun70127_ip = 76;
                                continue _fun70127
                            }
                        case 34:
                            var5 = var1.title;
                            var4 = var1.content;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var3 = var0.concat;
                            var2 = '';
                            var0 = ' - ';
                            var7 = var3.bind(var2)(var5, var0, var4);
                            _fun70127_ip = 116;
                            continue _fun70127;
                        case 76:
                            var5 = var1.channelId;
                            var4 = var1.messageId;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var3 = var0.concat;
                            var2 = '';
                            var0 = ' - ';
                            var7 = var3.bind(var2)(var5, var0, var4);
                        case 116:
                            var0 = global;
                            var4 = var0.Date;
                            var15 = var1.receivedTimestamp;
                            var3 = var4.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var16 = var3;
                            var2 = new var16[var4](var15, var14);
                            var3 = var2 instanceof Object ? var2 : var3;
                            var2 = var3.toISOString;
                            var15 = var2.bind(var3)();
                            var13 = var1.type;
                            var0 = var0.HermesInternal;
                            var4 = var0.concat;
                            var16 = '';
                            var14 = ' [';
                            var12 = '] ';
                            var10 = ' - ';
                            var11 = var8;
                            var9 = var7;
                            var0 = var16[var4](var15, var14, var13, var12, var11, var10, var9, var8);
                            return var0;
                    }
                };
                var1 = var1.bind(var2)(var0);
                var0 = var1.join;
                var3 = '\n';
                var10 = var0.bind(var1)(var3);
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var11 = '\n\n';
                var15 = var6;
                var14 = var5;
                var13 = var3;
                var12 = var4;
                var0 = var15[var1](var14, var13, var12, var11, var10, var9);
                return var0;
            case 242:
                var0 = 'No logs';
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 587, 2]);