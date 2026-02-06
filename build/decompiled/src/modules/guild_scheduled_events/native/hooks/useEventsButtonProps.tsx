// modules/guild_scheduled_events/native/hooks/useEventsButtonProps.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
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
    var3 = var3.ReadStateTypes;
    var _closure1_slot6 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/native/hooks/useEventsButtonProps.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun89947: for (var _fun89947_ip = 0;;) switch (_fun89947_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 4;
                var5 = var8[var2];
                var9 = undefined;
                var11 = var3.bind(var9)(var5);
                var10 = var11.useStateFromStoresObject;
                var5 = _closure1_slot4;
                var7 = new Array(1);
                var7[0] = var5;
                var5 = var4.id;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var1
                    var0 = {};
                    var4 = _closure1_slot4;
                    var6 = var4.hasUnread;
                    var2 = _closure2_slot0;
                    var5 = var2.id;
                    var1 = _closure1_slot6;
                    var3 = var1.GUILD_EVENT;
                    var3 = var6.bind(var4)(var5, var3);
                    var0.hasUnread = var3;
                    var3 = var4.getMentionCount;
                    var2 = var2.id;
                    var1 = var1.GUILD_EVENT;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.mentionCount = var1;
                    return var0;
                };
                var5 = var10.bind(var11)(var7, var5, var6);
                var7 = var5.hasUnread;
                var6 = var5.mentionCount;
                var2 = var8[var2];
                var10 = var3.bind(var9)(var2);
                var5 = var10.useStateFromStores;
                var2 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot5;
                    var1 = var2.isMuteScheduledEventsEnabled;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var5.bind(var10)(var3, var2);
                var5 = _closure1_slot1;
                var2 = 5;
                var2 = var8[var2];
                var5 = var5.bind(var9)(var2);
                var2 = var4.id;
                var12 = var5.bind(var9)(var2);
                var8 = _closure1_slot3;
                var10 = var8.useCallback;
                var5 = new Array(1);
                var5[0] = var4;
                var2 = function() { // Environment: var1
                    _fun89950: for (var _fun89950_ip = 0;;) switch (_fun89950_ip) {
                        case 0:
                            var1 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 6;
                            var0 = var3[var0];
                            var4 = undefined;
                            var5 = var1.bind(var4)(var0);
                            var3 = var5.shouldShowMembershipVerificationGate;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var3.bind(var5)(var0);
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            if (var0) {
                                _fun89950_ip = 88;
                                continue _fun89950
                            }
                        case 59:
                            var0 = 8;
                            var0 = var5[var0];
                            var6 = var3.bind(var4)(var0);
                            var2 = var6.openGuildEventListActionSheet;
                            var0 = _closure2_slot0;
                            var0 = var2.bind(var6)(var0);
                            _fun89950_ip = 120;
                            continue _fun89950;
                        case 88:
                            var2 = 7;
                            var2 = var5[var2];
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.openMemberVerificationModal;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 120:
                            return var0;
                    }
                };
                var2 = var10.bind(var8)(var2, var5);
                var5 = var8.useCallback;
                var10 = var4.id;
                var4 = new Array(1);
                var4[0] = var10;
                var1 = function() { // Environment: var1
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var3 = var1[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 11;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 10;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var6 = _closure2_slot0;
                    var7 = var6.id;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = 'UpcomingEventsLongPress-';
                    var2 = var2.bind(var1)(var7);
                    var1 = {};
                    var6 = var6.id;
                    var1.guildId = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var1 = var5.bind(var8)(var1, var4);
                var5 = var12.length;
                var4 = 0;
                if (!(!(var5 > var4))) {
                    _fun89947_ip = 285;
                    continue _fun89947
                }
            case 228:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 12;
                var5 = var11[var4];
                var5 = var10.bind(var9)(var5);
                var8 = var5.intl;
                var5 = var8.string;
                var4 = var11[var4];
                var4 = var10.bind(var9)(var4);
                var4 = var4.t;
                var4 = var4.tlopTM;
                var4 = var5.bind(var8)(var4);
                _fun89947_ip = 353;
                continue _fun89947;
            case 285:
                var8 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 12;
                var10 = var13[var5];
                var10 = var8.bind(var9)(var10);
                var11 = var10.intl;
                var10 = var11.formatToPlainString;
                var5 = var13[var5];
                var5 = var8.bind(var9)(var5);
                var5 = var5.t;
                var8 = var5.IBdqSu;
                var5 = {};
                var12 = var12.length;
                var5.number = var12;
                var4 = var10.bind(var11)(var8, var5);
            case 353:
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var10 = 13;
                var5 = var5[var10];
                var5 = var8.bind(var9)(var5);
                var5 = var5.ChannelModes;
                var5 = var5.DEFAULT;
                var8 = var7;
                if (!var8) {
                    _fun89947_ip = 394;
                    continue _fun89947
                }
            case 391:
                var8 = !var3;
            case 394:
                if (!var8) {
                    _fun89947_ip = 426;
                    continue _fun89947
                }
            case 397:
                var8 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var10];
                var0 = var8.bind(var9)(var0);
                var0 = var0.ChannelModes;
                var5 = var0.UNREAD_IMPORTANT;
            case 426:
                var0 = {};
                var0.hasUnread = var7;
                var0.mentionCount = var6;
                var0.mode = var5;
                var0.name = var4;
                var0.eventsMuted = var3;
                var0.handlePress = var2;
                var0.handleLongPress = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3949, 4304, 4305, 566, 8108, 4827, 7470, 8123, 3280, 11714, 1307, 1234, 11717, 2]);