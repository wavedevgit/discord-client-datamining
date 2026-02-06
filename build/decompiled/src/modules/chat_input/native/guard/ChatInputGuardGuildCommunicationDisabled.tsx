// modules/chat_input/native/guard/ChatInputGuardGuildCommunicationDisabled.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun90753: for (var _fun90753_ip = 0;;) switch (_fun90753_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guildMember;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 3;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.useCommunicationDisabledCountdownCleanup;
                var1 = var1.bind(var2)(var0);
                var2 = var0.communicationDisabledUntil;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun90753_ip = 90;
                    continue _fun90753
                }
            case 57:
                var0 = global;
                var0 = var0.Date;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var14 = var1;
                var13 = var2;
                var0 = new var14[var0](var13, var12);
                var4 = var0 instanceof Object ? var0 : var1;
                _fun90753_ip = 118;
                continue _fun90753;
            case 90:
                var0 = global;
                var0 = var0.Date;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var14 = var1;
                var0 = new var14[var0](var13);
                var4 = var0 instanceof Object ? var0 : var1;
            case 118:
                var2 = _closure1_slot4;
                var1 = _closure1_slot1;
                var10 = _closure1_slot2;
                var0 = 4;
                var0 = var10[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var5 = 'simple-action';
                var0.type = var5;
                var6 = _closure1_slot0;
                var5 = 5;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var7 = var5.ClockWarningIcon;
                var5 = {};
                var5 = var2.bind(var3)(var7, var5);
                var0.icon = var5;
                var5 = 6;
                var7 = var10[var5];
                var7 = var6.bind(var3)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var5];
                var7 = var6.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.VSpdzK;
                var7 = var8.bind(var11)(var7);
                var0.message = var7;
                var7 = var10[var5];
                var7 = var6.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.format;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.t;
                var6 = var5["4ZwD5G"];
                var5 = {};
                var9 = _closure1_slot3;
                var5.link = var9;
                var5 = var7.bind(var8)(var6, var5);
                var0.subtext = var5;
                var0.countdown = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat_input/native/guard/ChatInputGuardGuildCommunicationDisabled.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1683, 33, 11807, 11794, 10149, 1234, 2]);