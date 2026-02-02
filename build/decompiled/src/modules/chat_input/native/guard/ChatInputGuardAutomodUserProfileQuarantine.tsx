// modules/chat_input/native/guard/ChatInputGuardAutomodUserProfileQuarantine.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildMemberFlags;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun90667: for (var _fun90667_ip = 0;;) switch (_fun90667_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.guildId;
                var _closure2_slot0 = var9;
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 5;
                var2 = var4[var2];
                var3 = undefined;
                var10 = var1.bind(var3)(var2);
                var8 = var10.useStateFromStores;
                var2 = _closure1_slot4;
                var7 = new Array(2);
                var7[0] = var2;
                var2 = _closure1_slot5;
                var7[1] = var2;
                var6 = new Array(1);
                var6[0] = var9;
                var2 = function() { // Environment: var0
                    _fun90668: for (var _fun90668_ip = 0;;) switch (_fun90668_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun90668_ip = 85;
                                continue _fun90668
                            }
                        case 13:
                            var2 = _closure1_slot4;
                            var1 = var2.getId;
                            var5 = var1.bind(var2)();
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var1 = var2.getAutomodQuarantinedGuildMemberFlags;
                            var4 = _closure1_slot5;
                            var3 = var4.getMember;
                            var0 = _closure2_slot0;
                            var0 = var3.bind(var4)(var0, var5);
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        case 85:
                            var0 = global;
                            var0 = var0.Set;
                            var1 = var0.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var8 = var1;
                            var0 = new var8[var0](var7);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                    }
                };
                var2 = var8.bind(var10)(var7, var2, var6);
                var8 = _closure1_slot3;
                var7 = var8.useCallback;
                var6 = new Array(1);
                var6[0] = var9;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openAutomodProfileQuarantineAlert;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var8 = var7.bind(var8)(var0, var6);
                var0 = 6;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getAutomodReason;
                var1 = var0.bind(var1)(var2);
                var0 = _closure1_slot6;
                var0 = var0.AUTOMOD_QUARANTINED_SERVER_TAG;
                if (!(var1 !== var0)) {
                    _fun90667_ip = 210;
                    continue _fun90667
                }
            case 153:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 8;
                var2 = var7[var0];
                var2 = var6.bind(var3)(var2);
                var4 = var2.intl;
                var2 = var4.string;
                var0 = var7[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["/PGQf0"];
                var6 = var2.bind(var4)(var0);
                _fun90667_ip = 265;
                continue _fun90667;
            case 210:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 8;
                var2 = var9[var0];
                var2 = var7.bind(var3)(var2);
                var4 = var2.intl;
                var2 = var4.string;
                var0 = var9[var0];
                var0 = var7.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.Viksoo;
                var6 = var2.bind(var4)(var0);
            case 265:
                var0 = _closure1_slot6;
                var0 = var0.AUTOMOD_QUARANTINED_SERVER_TAG;
                if (!(var1 !== var0)) {
                    _fun90667_ip = 338;
                    continue _fun90667
                }
            case 279:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 8;
                var1 = var7[var0];
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var7[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["8HW7r9"];
                var4 = var1.bind(var2)(var0);
                _fun90667_ip = 395;
                continue _fun90667;
            case 338:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 8;
                var1 = var9[var0];
                var1 = var7.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var9[var0];
                var0 = var7.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.ml72ZU;
                var4 = var1.bind(var2)(var0);
            case 395:
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 9;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var9 = 'simple-action';
                var0.type = var9;
                var0.actionOnPress = var8;
                var0.actionLabel = var6;
                var6 = _closure1_slot0;
                var5 = 10;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.ChatXIcon;
                var5 = {};
                var5 = var2.bind(var3)(var6, var5);
                var0.icon = var5;
                var0.message = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat_input/native/guard/ChatInputGuardAutomodUserProfileQuarantine.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1216, 1672, 3040, 33, 566, 3058, 10035, 1234, 11727, 9109, 2]);