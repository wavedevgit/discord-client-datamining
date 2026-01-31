// modules/guild_scheduled_events/useGuildHasLiveChannelNotice.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildScheduledEventEntityTypes;
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot12 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/useGuildHasLiveChannelNotice.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: useGuildHasLiveChannelNotice, environment: var1
        _fun101913: for (var _fun101913_ip = 0;;) switch (_fun101913_ip) {
            case 0:
                var10 = arg0;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 10;
                var0 = var4[var0];
                var7 = undefined;
                var0 = var3.bind(var7)(var0);
                var4 = var0.bind(var7)(var10);
                var5 = _closure1_slot7;
                var3 = var5.getChannel;
                var0 = 0;
                var6 = var4[var0];
                var4 = null;
                var8 = var4 == var6;
                var0 = undefined;
                if (var8) {
                    _fun101913_ip = 66;
                    continue _fun101913
                }
            case 61:
                var0 = var6.id;
            case 66:
                var0 = var3.bind(var5)(var0);
                var _closure2_slot0 = var0;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 11;
                var3 = var8[var5];
                var12 = var6.bind(var7)(var3);
                var11 = var12.useStateFromStores;
                var3 = _closure1_slot5;
                var9 = new Array(1);
                var9[0] = var3;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var1
                    _fun101914: for (var _fun101914_ip = 0;;) switch (_fun101914_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var1 = var2.getStageInstanceByChannel;
                            var4 = _closure2_slot0;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun101914_ip = 40;
                                continue _fun101914
                            }
                        case 31:
                            var3 = _closure2_slot0;
                            var0 = var3.id;
                        case 40:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var3 = var11.bind(var12)(var9, var0, var3);
                var _closure2_slot1 = var3;
                var0 = 12;
                var0 = var8[var0];
                var9 = var6.bind(var7)(var0);
                var0 = var9.useGuildActiveEvent;
                var0 = var0.bind(var9)(var10);
                var _closure2_slot2 = var0;
                var5 = var8[var5];
                var7 = var6.bind(var7)(var5);
                var6 = var7.useStateFromStoresObject;
                var2 = _closure1_slot10;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = new Array(2);
                var2[0] = var3;
                var2[1] = var0;
                var1 = function() { // Environment: var1
                    _fun101915: for (var _fun101915_ip = 0;;) switch (_fun101915_ip) {
                        case 0:
                            var0 = {};
                            var6 = _closure1_slot10;
                            var3 = var6.isLiveChannelNoticeHidden;
                            var2 = {};
                            var4 = _closure2_slot1;
                            var7 = null;
                            var9 = var7 == var4;
                            var8 = undefined;
                            if (var9) {
                                _fun101915_ip = 44;
                                continue _fun101915
                            }
                        case 35:
                            var9 = _closure2_slot1;
                            var8 = var9.id;
                        case 44:
                            var2.stageId = var8;
                            var2 = var3.bind(var6)(var2);
                            var0.isStageNoticeHidden = var2;
                            var3 = _closure1_slot10;
                            var2 = var3.isLiveChannelNoticeHidden;
                            var1 = {};
                            var6 = _closure2_slot2;
                            var6 = var7 == var6;
                            var4 = undefined;
                            if (var6) {
                                _fun101915_ip = 93;
                                continue _fun101915
                            }
                        case 84:
                            var5 = _closure2_slot2;
                            var4 = var5.id;
                        case 93:
                            var1.eventId = var4;
                            var1 = var2.bind(var3)(var1);
                            var0.isEventNoticeHidden = var1;
                            return var0;
                    }
                };
                var1 = var6.bind(var7)(var5, var1, var2);
                var2 = var1.isStageNoticeHidden;
                var1 = var1.isEventNoticeHidden;
                if (!(var4 == var0)) {
                    _fun101913_ip = 246;
                    continue _fun101913
                }
            case 234:
                var0 = var4 != var3;
                if (!var0) {
                    _fun101913_ip = 244;
                    continue _fun101913
                }
            case 241:
                var0 = !var2;
            case 244:
                _fun101913_ip = 261;
                continue _fun101913;
            case 246:
                if (!(var4 == var3)) {
                    _fun101913_ip = 255;
                    continue _fun101913
                }
            case 250:
                var1 = !var1;
                _fun101913_ip = 258;
                continue _fun101913;
            case 255:
                var1 = !var2;
            case 258:
                var0 = var1;
            case 261:
                return var0;
        }
    };
    var2.useGuildHasLiveChannelNotice = var3;
    var1 = function(arg0) { // Original name: useGuildLiveChannelNoticeInfo, environment: var1
        _fun101916: for (var _fun101916_ip = 0;;) switch (_fun101916_ip) {
            case 0:
                var9 = arg0;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 13;
                var2 = var6[var2];
                var7 = undefined;
                var3 = var4.bind(var7)(var2);
                var2 = var3.useActiveEventOrStageInstanceChannel;
                var5 = var2.bind(var3)(var9);
                var _closure2_slot0 = var5;
                var10 = 11;
                var2 = var6[var10];
                var11 = var4.bind(var7)(var2);
                var8 = var11.useStateFromStores;
                var2 = _closure1_slot8;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    _fun101917: for (var _fun101917_ip = 0;;) switch (_fun101917_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun101917_ip = 49;
                                continue _fun101917
                            }
                        case 16:
                            var4 = _closure1_slot8;
                            var3 = var4.can;
                            var2 = _closure1_slot12;
                            var2 = var2.CONNECT;
                            var1 = _closure2_slot0;
                            var0 = var3.bind(var4)(var2, var1);
                        case 49:
                            return var0;
                    }
                };
                var8 = var8.bind(var11)(var3, var2);
                var _closure2_slot1 = var8;
                var2 = 12;
                var2 = var6[var2];
                var3 = var4.bind(var7)(var2);
                var2 = var3.useGuildActiveEvent;
                var2 = var2.bind(var3)(var9);
                var3 = var6[var10];
                var13 = var4.bind(var7)(var3);
                var12 = var13.useStateFromStores;
                var3 = _closure1_slot5;
                var11 = new Array(1);
                var11[0] = var3;
                var9 = new Array(1);
                var9[0] = var5;
                var3 = function() { // Environment: var0
                    _fun101918: for (var _fun101918_ip = 0;;) switch (_fun101918_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var1 = var2.getStageInstanceByChannel;
                            var4 = _closure2_slot0;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun101918_ip = 40;
                                continue _fun101918
                            }
                        case 31:
                            var3 = _closure2_slot0;
                            var0 = var3.id;
                        case 40:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var11 = var12.bind(var13)(var11, var3, var9);
                var3 = 14;
                var3 = var6[var3];
                var9 = var4.bind(var7)(var3);
                var6 = var9.useActualStageSpeakerCount;
                var3 = null;
                var12 = var3 == var5;
                var4 = undefined;
                if (var12) {
                    _fun101916_ip = 196;
                    continue _fun101916
                }
            case 191:
                var4 = var5.id;
            case 196:
                var6 = var6.bind(var9)(var4);
                var4 = 0;
                var4 = var6 > var4;
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var10];
                var13 = var9.bind(var7)(var6);
                var12 = var13.useStateFromStores;
                var6 = _closure1_slot9;
                var9 = new Array(1);
                var9[0] = var6;
                var6 = function() { // Environment: var0
                    _fun101919: for (var _fun101919_ip = 0;;) switch (_fun101919_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun101919_ip = 49;
                                continue _fun101919
                            }
                        case 16:
                            var3 = _closure1_slot9;
                            var2 = var3.getVoiceStatesForChannel;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.length;
                            var1 = 0;
                            var0 = var2 > var1;
                        case 49:
                            return var0;
                    }
                };
                var9 = var12.bind(var13)(var9, var6);
                var6 = false;
                var _closure2_slot2 = var6;
                if (!(var3 != var5)) {
                    _fun101916_ip = 268;
                    continue _fun101916
                }
            case 264:
                if (!(var3 == var11)) {
                    _fun101916_ip = 293;
                    continue _fun101916
                }
            case 268:
                var11 = var3 != var5;
                if (!var11) {
                    _fun101916_ip = 279;
                    continue _fun101916
                }
            case 275:
                var11 = var3 != var2;
            case 279:
                var6 = false;
                if (!var11) {
                    _fun101916_ip = 300;
                    continue _fun101916
                }
            case 284:
                _closure2_slot2 = var9;
                var6 = var9;
                _fun101916_ip = 300;
                continue _fun101916;
            case 293:
                _closure2_slot2 = var4;
                var6 = var4;
            case 300:
                var9 = _closure1_slot0;
                var4 = _closure1_slot2;
                var11 = var4[var10];
                var14 = var9.bind(var7)(var11);
                var13 = var14.useStateFromStores;
                var11 = _closure1_slot4;
                var12 = new Array(1);
                var12[0] = var11;
                var11 = new Array(1);
                var11[0] = var5;
                var5 = function() { // Environment: var0
                    _fun101920: for (var _fun101920_ip = 0;;) switch (_fun101920_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun101920_ip = 84;
                                continue _fun101920
                            }
                        case 16:
                            var4 = _closure1_slot4;
                            var3 = var4.getParticipantCount;
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 15;
                            var5 = var5[var1];
                            var1 = undefined;
                            var1 = var6.bind(var1)(var5);
                            var1 = var1.StageChannelParticipantNamedIndex;
                            var1 = var1.AUDIENCE;
                            var2 = var3.bind(var4)(var2, var1);
                            var1 = 0;
                            var0 = var2 > var1;
                        case 84:
                            return var0;
                    }
                };
                var5 = var13.bind(var14)(var12, var5, var11);
                var _closure2_slot3 = var5;
                var4 = var4[var10];
                var11 = var9.bind(var7)(var4);
                var10 = var11.useStateFromStores;
                var4 = _closure1_slot6;
                var9 = new Array(1);
                var9[0] = var4;
                var4 = function() { // Environment: var0
                    _fun101921: for (var _fun101921_ip = 0;;) switch (_fun101921_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun101921_ip = 54;
                                continue _fun101921
                            }
                        case 16:
                            var3 = _closure1_slot6;
                            var2 = var3.getAllApplicationStreamsForChannel;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.length;
                            var1 = 0;
                            var0 = var2 > var1;
                        case 54:
                            return var0;
                    }
                };
                var4 = var10.bind(var11)(var9, var4);
                var _closure2_slot4 = var4;
                var3 = var3 == var2;
                var7 = undefined;
                if (var3) {
                    _fun101916_ip = 418;
                    continue _fun101916
                }
            case 412:
                var7 = var2.entity_type;
            case 418:
                var _closure2_slot5 = var7;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(5);
                var1[0] = var8;
                var1[1] = var7;
                var1[2] = var6;
                var1[3] = var5;
                var1[4] = var4;
                var0 = function() { // Environment: var0
                    _fun101922: for (var _fun101922_ip = 0;;) switch (_fun101922_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure2_slot5;
                            var2 = _closure1_slot11;
                            var2 = var2.EXTERNAL;
                            var2 = var3 === var2;
                            if (var2) {
                                _fun101922_ip = 33;
                                continue _fun101922
                            }
                        case 29:
                            var2 = _closure2_slot1;
                        case 33:
                            var0.hasButton = var2;
                            var2 = _closure2_slot2;
                            var0.hasSpeakers = var2;
                            var2 = _closure2_slot3;
                            var0.hasAudience = var2;
                            var1 = _closure2_slot4;
                            var0.hasStream = var1;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useGuildLiveChannelNoticeInfo = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4209, 1377, 3673, 1372, 3050, 3485, 13246, 1378, 483, 13247, 566, 8042, 13248, 8371, 5624, 2]);