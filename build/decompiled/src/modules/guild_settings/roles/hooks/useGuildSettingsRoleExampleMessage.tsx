// modules/guild_settings/roles/hooks/useGuildSettingsRoleExampleMessage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var5;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageStates;
    var _closure1_slot6 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/roles/hooks/useGuildSettingsRoleExampleMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useGuildSettingsRoleExampleMessage, environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot4;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun116002: for (var _fun116002_ip = 0;;) switch (_fun116002_ip) {
                case 0:
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var0 = 3;
                    var0 = var5[var0];
                    var4 = undefined;
                    var3 = var9.bind(var4)(var0);
                    var2 = var3.createMessageRecord;
                    var0 = {};
                    var7 = _closure1_slot1;
                    var6 = 4;
                    var6 = var5[var6];
                    var7 = var7.bind(var4)(var6);
                    var6 = {};
                    var8 = '1337';
                    var6.channelId = var8;
                    var8 = _closure2_slot0;
                    var6.content = var8;
                    var10 = var7.bind(var4)(var6);
                    var11 = var0;
                    var6 = copyDataProperties(var11, var10);
                    var6 = _closure1_slot6;
                    var7 = var6.SENT;
                    var6 = 'state';
                    var0[var6] = var7;
                    var7 = '31337';
                    var6 = 'id';
                    var0[var6] = var7;
                    var0 = var2.bind(var3)(var0);
                    var6 = _closure1_slot5;
                    var2 = {
                        'id': '313337',
                        'username': null,
                        'discriminator': '0000',
                        'bot': false
                    };
                    var3 = 5;
                    var7 = var5[var3];
                    var7 = var9.bind(var4)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var3 = var5[var3];
                    var3 = var9.bind(var4)(var3);
                    var3 = var3.t;
                    var3 = var3.cqpybK;
                    var3 = var7.bind(var8)(var3);
                    var2.username = var3;
                    var3 = var6.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var6
                        }
                    });
                    var12 = var3;
                    var11 = var2;
                    var2 = new var12[var6](var11, var10);
                    var3 = var2 instanceof Object ? var2 : var3;
                    var0.author = var3;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.insertStaticUser;
                    var1 = var1.bind(var2)(var3);
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun116002_ip = 285;
                        continue _fun116002
                    }
                case 258:
                    var0.author = var1;
                    var2 = var0.author;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var0 = 7;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var2.getAvatarURL = var1;
                case 285:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useGuildSettingsRoleExampleMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1620, 660, 3931, 6505, 1234, 6915, 14734, 2]);