// components_native/warnings/GuildNSFW.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = ['modalType'];
    var _closure1_slot3 = var0;
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
    var _closure1_slot4 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/warnings/GuildNSFW.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun91286: for (var _fun91286_ip = 0;;) switch (_fun91286_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 4;
                var2 = var6[var2];
                var3 = undefined;
                var8 = var5.bind(var3)(var2);
                var7 = var8.useStateFromStores;
                var2 = _closure1_slot6;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var9
                    var2 = _closure1_slot6;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var0.guildId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var7.bind(var8)(var4, var2);
                var4 = 5;
                var4 = var6[var4];
                var5 = var5.bind(var3)(var4);
                var4 = var5.useAgeGateVerifyContentForGuild;
                var6 = var4.bind(var5)(var2);
                var7 = var6.modalType;
                var5 = _closure1_slot4;
                var4 = _closure1_slot3;
                var8 = var5.bind(var3)(var6, var4);
                var5 = function() {
                    _fun91288: for (var _fun91288_ip = 0;;) switch (_fun91288_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var5 = var2.bind(var0)(var1);
                            var4 = var5.nsfwReturnToSafety;
                            var2 = _closure2_slot0;
                            var3 = var2.guildId;
                            var3 = var4.bind(var5)(var3);
                            var3 = var2.onReturnToSafety;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun91288_ip = 74;
                                continue _fun91288
                            }
                        case 60:
                            var2 = _closure2_slot0;
                            var1 = var2.onReturnToSafety;
                            var1 = var1.bind(var2)();
                        case 74:
                            return var0;
                    }
                };
                var11 = _closure1_slot5;
                var10 = var11.useCallback;
                var6 = function() { // Environment: var9
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 7;
                    var1 = var6[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.showAgeVerificationGetStartedModal;
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = 8;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.AgeVerificationModalEntryPoint;
                    var4 = var4.NSFW_GUILD;
                    var1.entryPoint = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4 = new Array(0);
                var6 = var10.bind(var11)(var6, var4);
                var4 = {};
                var13 = var4;
                var12 = var8;
                var8 = copyDataProperties(var13, var12);
                var8 = null;
                var10 = var8 == var2;
                var8 = undefined;
                if (var10) {
                    _fun91286_ip = 168;
                    continue _fun91286
                }
            case 163:
                var8 = var2.id;
            case 168:
                var2 = 'guildId';
                var4[var2] = var8;
                var2 = var1.channelId;
                var1 = 'channelId';
                var4[var1] = var2;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = 9;
                var10 = var1[var8];
                var10 = var2.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var8 = var1[var8];
                var8 = var2.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["/g10LC"];
                var10 = var10.bind(var11)(var8);
                var8 = 'disagreement';
                var4[var8] = var10;
                var8 = 8;
                var1 = var1[var8];
                var1 = var2.bind(var3)(var1);
                var1 = var1.NsfwSpaceWarningModalType;
                var1 = var1.NSFW_CHANNEL_AGE_VERIFY;
                if (!(var1 !== var7)) {
                    _fun91286_ip = 486;
                    continue _fun91286
                }
            case 288:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var1 = var2.bind(var3)(var1);
                var1 = var1.NsfwSpaceWarningModalType;
                var1 = var1.GUILD_LARGE_SERVER;
                if (!(var1 !== var7)) {
                    _fun91286_ip = 486;
                    continue _fun91286
                }
            case 324:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var1 = var2.bind(var3)(var1);
                var1 = var1.NsfwSpaceWarningModalType;
                var1 = var1.NSFW_CHANNEL_UNDERAGE;
                if (!(var1 !== var7)) {
                    _fun91286_ip = 423;
                    continue _fun91286
                }
            case 357:
                var8 = _closure1_slot7;
                var2 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 10;
                var1 = var10[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.modalType = var7;
                var9 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.nsfwAgree;
                    var1 = _closure2_slot0;
                    var1 = var1.guildId;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1.onAgree = var9;
                var1.onDisagree = var5;
                var13 = var1;
                var12 = var4;
                var9 = copyDataProperties(var13, var12);
                var1 = var8.bind(var3)(var2, var1);
                return var1;
            case 423:
                var8 = _closure1_slot7;
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 10;
                var1 = var9[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.modalType = var7;
                var9 = 'primary';
                var1.disagreementButtonVariant = var9;
                var1.onDisagree = var5;
                var13 = var1;
                var12 = var4;
                var9 = copyDataProperties(var13, var12);
                var1 = var8.bind(var3)(var2, var1);
                return var1;
            case 486:
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 10;
                var0 = var8[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.modalType = var7;
                var0.onAgree = var6;
                var0.onDisagree = var5;
                var13 = var0;
                var12 = var4;
                var4 = copyDataProperties(var13, var12);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 1410, 33, 566, 4551, 4679, 5936, 4555, 1234, 11876, 2]);