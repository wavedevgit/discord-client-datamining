// modules/rpc/helpers/validateOpenInviteDialog.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.RPCErrors;
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/helpers/validateOpenInviteDialog.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun98603: for (var _fun98603_ip = 0;;) switch (_fun98603_ip) {
            case 0:
                var2 = _closure1_slot3;
                var1 = var2.getConnectedFrame;
                var1 = var1.bind(var2)();
                var2 = null;
                if (!(var2 == var1)) {
                    _fun98603_ip = 402;
                    continue _fun98603
                }
            case 26:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 4;
                var3 = var4[var3];
                var4 = undefined;
                var3 = var5.bind(var4)(var3);
                var3 = var3.bind(var4)();
                if (!(var2 != var3)) {
                    _fun98603_ip = 334;
                    continue _fun98603
                }
            case 59:
                var7 = _closure1_slot4;
                var6 = var7.getGuild;
                var5 = var3.getGuildId;
                var5 = var5.bind(var3)();
                var5 = var6.bind(var7)(var5);
                if (!(var2 != var5)) {
                    _fun98603_ip = 238;
                    continue _fun98603
                }
            case 90:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 6;
                var2 = var7[var2];
                var7 = var6.bind(var4)(var2);
                var6 = var7.canViewInviteModal;
                var2 = _closure1_slot5;
                var2 = var6.bind(var7)(var2, var5, var3);
                if (var2) {
                    _fun98603_ip = 221;
                    continue _fun98603
                }
            case 130:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 5;
                var2 = var7[var2];
                var8 = var6.bind(var4)(var2);
                var7 = {};
                var2 = _closure1_slot6;
                var2 = var2.INVALID_PERMISSIONS;
                var7.errorCode = var2;
                var9 = var3.id;
                var2 = global;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var2 = 'No invite permissions for ';
                var11 = var6.bind(var2)(var9);
                var6 = var8.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var8
                    }
                });
                var13 = var6;
                var12 = var7;
                var2 = new var13[var8](var12, var11, var10);
                var2 = var2 instanceof Object ? var2 : var6;
                throw var2;
            case 221:
                var2 = {};
                var2.frame = var4;
                var2.channel = var3;
                var2.guild = var5;
                return var2;
            case 238:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 5;
                var2 = var6[var2];
                var6 = var5.bind(var4)(var2);
                var5 = {};
                var2 = _closure1_slot6;
                var2 = var2.INVALID_CHANNEL;
                var5.errorCode = var2;
                var2 = var3.getGuildId;
                var7 = var2.bind(var3)();
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = 'Invalid guild ';
                var11 = var3.bind(var2)(var7);
                var3 = var6.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var6
                    }
                });
                var13 = var3;
                var12 = var5;
                var2 = new var13[var6](var12, var11, var10);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
            case 334:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 5;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var3 = {};
                var0 = _closure1_slot6;
                var0 = var0.INVALID_CHANNEL;
                var3.errorCode = var0;
                var0 = var4.prototype;
                var2 = Object.create(var0, {
                    constructor: {
                        value: var4
                    }
                });
                var11 = 'Invalid channel';
                var13 = var2;
                var12 = var3;
                var0 = new var13[var4](var12, var11, var10);
                var0 = var0 instanceof Object ? var0 : var2;
                throw var0;
            case 402:
                var0 = {};
                var0.frame = var1;
                var1 = undefined;
                var0.channel = var1;
                var0.guild = var1;
                return var0;
        }
    };
    var2.validateOpenInviteDialog = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7987, 1410, 3093, 660, 12854, 7998, 8238, 2]);