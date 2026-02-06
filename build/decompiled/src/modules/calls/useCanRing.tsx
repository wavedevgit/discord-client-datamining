// modules/calls/useCanRing.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function arg0() {
        _fun64680: for (var _fun64680_ip = 0;;) switch (_fun64680_ip) {
            case 0:
                var10 = arguments[1];
                var6 = arguments[2];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var5 = undefined;
                if (!(var10 === var5)) {
                    _fun64680_ip = 27;
                    continue _fun64680
                }
            case 21:
                var10 = 'useCanRingToGuildVoiceChannel';
            case 27:
                var _closure2_slot1 = var6;
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 9;
                var2 = var7[var1];
                var11 = var3.bind(var5)(var2);
                var9 = var11.useStateFromStores;
                var2 = _closure1_slot8;
                var8 = new Array(1);
                var8[0] = var2;
                var2 = function() { // Environment: var0
                    _fun64681: for (var _fun64681_ip = 0;;) switch (_fun64681_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = null;
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun64681_ip = 55;
                                continue _fun64681
                            }
                        case 16:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var3 = 11;
                            var3 = var4[var3];
                            var4 = undefined;
                            var3 = var5.bind(var4)(var3);
                            var2 = _closure2_slot1;
                            var1 = _closure1_slot8;
                            var0 = var3.bind(var4)(var2, var1);
                        case 55:
                            return var0;
                    }
                };
                var2 = var9.bind(var11)(var8, var2);
                var1 = var7[var1];
                var8 = var3.bind(var5)(var1);
                var3 = var8.useStateFromStores;
                var9 = _closure1_slot6;
                var1 = new Array(2);
                var1[0] = var9;
                var9 = _closure1_slot7;
                var1[1] = var9;
                var0 = function() { // Environment: var0
                    _fun64682: for (var _fun64682_ip = 0;;) switch (_fun64682_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var2 = null;
                            var1 = var2 == var1;
                            var3 = undefined;
                            if (var1) {
                                _fun64682_ip = 27;
                                continue _fun64682
                            }
                        case 18:
                            var1 = _closure2_slot1;
                            var3 = var1.guild_id;
                        case 27:
                            if (!(var2 != var3)) {
                                _fun64682_ip = 92;
                                continue _fun64682
                            }
                        case 31:
                            var5 = _closure1_slot6;
                            var4 = var5.getMember;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var4.bind(var5)(var3, var0);
                            var0 = var2 != var0;
                            var2 = _closure1_slot7;
                            var1 = var2.getCheck;
                            var1 = var1.bind(var2)(var3);
                            var1 = var1.canChat;
                            if (!var0) {
                                _fun64682_ip = 90;
                                continue _fun64682
                            }
                        case 87:
                            var0 = var1;
                        case 90:
                            return var0;
                        case 92:
                            var0 = false;
                            return var0;
                    }
                };
                var3 = var3.bind(var8)(var1, var0);
                var1 = _closure1_slot1;
                var0 = 12;
                var0 = var7[var0];
                var1 = var1.bind(var5)(var0);
                var7 = null;
                var8 = var7 == var6;
                var0 = undefined;
                if (var8) {
                    _fun64680_ip = 159;
                    continue _fun64680
                }
            case 154:
                var0 = var6.id;
            case 159:
                var0 = var1.bind(var5)(var0);
                var1 = var0.needSubscriptionToAccess;
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 10;
                var0 = var9[var0];
                var9 = var8.bind(var5)(var0);
                var8 = var9.useExperiment;
                var0 = {};
                var12 = var7 == var6;
                var11 = undefined;
                if (var12) {
                    _fun64680_ip = 212;
                    continue _fun64680
                }
            case 207:
                var11 = var6.guild_id;
            case 212:
                var0.guildId = var11;
                var0.location = var10;
                var0 = var8.bind(var9)(var0);
                var0 = var0.enabled;
                var7 = var7 == var6;
                var5 = undefined;
                if (var7) {
                    _fun64680_ip = 244;
                    continue _fun64680
                }
            case 239:
                var5 = var6.type;
            case 244:
                var4 = _closure1_slot11;
                var4 = var4.GUILD_VOICE;
                var4 = var5 === var4;
                if (!var0) {
                    _fun64680_ip = 264;
                    continue _fun64680
                }
            case 261:
                var0 = var4;
            case 264:
                if (!var0) {
                    _fun64680_ip = 270;
                    continue _fun64680
                }
            case 267:
                var0 = var3;
            case 270:
                if (!var0) {
                    _fun64680_ip = 276;
                    continue _fun64680
                }
            case 273:
                var0 = var2;
            case 276:
                if (!var0) {
                    _fun64680_ip = 282;
                    continue _fun64680
                }
            case 279:
                var0 = !var1;
            case 282:
                return var0;
        }
    };
    var _closure1_slot13 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.ChannelTypes;
    var _closure1_slot11 = var7;
    var4 = var4.ChannelTypesSets;
    var _closure1_slot12 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/calls/useCanRing.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        _fun64683: for (var _fun64683_ip = 0;;) switch (_fun64683_ip) {
            case 0:
                var3 = arg0;
                var7 = arguments[1];
                var _closure2_slot0 = var3;
                var6 = undefined;
                if (!(var7 === var6)) {
                    _fun64683_ip = 22;
                    continue _fun64683
                }
            case 18:
                var7 = 'useCanRing';
            case 22:
                var1 = arguments[2];
                var _closure2_slot1 = var1;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 9;
                var4 = var9[var2];
                var11 = var8.bind(var6)(var4);
                var10 = var11.useStateFromStores;
                var4 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var10.bind(var11)(var5, var4);
                var4 = var9[var2];
                var12 = var8.bind(var6)(var4);
                var11 = var12.useStateFromStores;
                var4 = _closure1_slot3;
                var10 = new Array(1);
                var10[0] = var4;
                var4 = function() { // Environment: var0
                    var1 = _closure1_slot3;
                    var0 = var1.getId;
                    var1 = var0.bind(var1)();
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1 === var0;
                    return var0;
                };
                var4 = var11.bind(var12)(var10, var4);
                var2 = var9[var2];
                var9 = var8.bind(var6)(var2);
                var8 = var9.useStateFromStores;
                var10 = _closure1_slot9;
                var2 = new Array(1);
                var2[0] = var10;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot9;
                    var1 = var2.isFriend;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var8.bind(var9)(var2, var0);
                var2 = null;
                var8 = var2 == var5;
                var10 = undefined;
                if (var8) {
                    _fun64683_ip = 170;
                    continue _fun64683
                }
            case 165:
                var10 = var5.type;
            case 170:
                var2 = var2 != var10;
                if (!var2) {
                    _fun64683_ip = 197;
                    continue _fun64683
                }
            case 177:
                var8 = _closure1_slot12;
                var9 = var8.CALLABLE;
                var8 = var9.has;
                var2 = var8.bind(var9)(var10);
            case 197:
                var1 = _closure1_slot13;
                var1 = var1.bind(var6)(var3, var7, var5);
                if (!var0) {
                    _fun64683_ip = 214;
                    continue _fun64683
                }
            case 211:
                var0 = !var4;
            case 214:
                if (!var0) {
                    _fun64683_ip = 226;
                    continue _fun64683
                }
            case 217:
                var4 = var3.bot;
                var0 = !var4;
            case 226:
                if (!var0) {
                    _fun64683_ip = 238;
                    continue _fun64683
                }
            case 229:
                var4 = var3.system;
                var0 = !var4;
            case 238:
                if (!var0) {
                    _fun64683_ip = 250;
                    continue _fun64683
                }
            case 241:
                var3 = var3.isProvisional;
                var0 = !var3;
            case 250:
                if (!var0) {
                    _fun64683_ip = 262;
                    continue _fun64683
                }
            case 253:
                if (var1) {
                    _fun64683_ip = 259;
                    continue _fun64683
                }
            case 256:
                var1 = var2;
            case 259:
                var0 = var1;
            case 262:
                return var0;
        }
    };
    var2.useCanRing = var4;
    var3 = function arg0() {
        _fun64687: for (var _fun64687_ip = 0;;) switch (_fun64687_ip) {
            case 0:
                var1 = arg0;
                var0 = _closure1_slot12;
                var4 = var0.CALLABLE;
                var3 = var4.has;
                var0 = var1.type;
                var4 = var3.bind(var4)(var0);
                var3 = var1.type;
                var0 = _closure1_slot11;
                var0 = var0.GUILD_VOICE;
                if (var4) {
                    _fun64687_ip = 180;
                    continue _fun64687
                }
            case 52:
                if (!(var3 !== var0)) {
                    _fun64687_ip = 60;
                    continue _fun64687
                }
            case 56:
                var0 = false;
                return var0;
            case 60:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 10;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.getCurrentConfig;
                var0 = {};
                var5 = var1.guild_id;
                var0.guildId = var5;
                var5 = 'ring';
                var0.location = var5;
                var0 = var3.bind(var4)(var0);
                var0 = var0.enabled;
                var6 = _closure1_slot10;
                var5 = var6.getVoiceState;
                var4 = var1.guild_id;
                var7 = _closure1_slot3;
                var3 = var7.getId;
                var3 = var3.bind(var7)();
                var3 = var5.bind(var6)(var4, var3);
                if (!var0) {
                    _fun64687_ip = 161;
                    continue _fun64687
                }
            case 155:
                var4 = null;
                var0 = var4 != var3;
            case 161:
                if (!var0) {
                    _fun64687_ip = 178;
                    continue _fun64687
                }
            case 164:
                var4 = var3.channelId;
                var3 = var1.id;
                var0 = var4 === var3;
            case 178:
                return var0;
            case 180:
                var4 = _closure1_slot4;
                var3 = var4.getCall;
                var0 = var1.id;
                var3 = var3.bind(var4)(var0);
                var4 = null;
                var0 = var4 != var3;
                if (!var0) {
                    _fun64687_ip = 218;
                    continue _fun64687
                }
            case 209:
                var3 = var3.messageId;
                var0 = var4 != var3;
            case 218:
                if (!var0) {
                    _fun64687_ip = 246;
                    continue _fun64687
                }
            case 221:
                var3 = _closure1_slot4;
                var2 = var3.isCallUnavailable;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                var0 = !var1;
            case 246:
                return var0;
        }
    };
    var2.canRingUsersInChannel = var3;
    var2.useCanRingToGuildVoiceChannel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 3477, 1372, 1681, 4235, 3093, 3102, 3523, 660, 566, 3963, 4244, 4794, 2]);