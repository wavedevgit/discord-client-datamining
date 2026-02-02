// modules/chat_input/native/guard/ChatInputGuardReadonly.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 15;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.compare;
        var5 = _closure1_slot8;
        var4 = var5.lastMessageId;
        var1 = arg1;
        var1 = var1.id;
        var1 = var4.bind(var5)(var1);
        var5 = _closure1_slot8;
        var4 = var5.lastMessageId;
        var0 = arg0;
        var0 = var0.id;
        var0 = var4.bind(var5)(var0);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot13 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isTextChannel;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var8 = var5[var3];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot5 = var8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TextAreaCta;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AnalyticEvents;
    var _closure1_slot10 = var7;
    var3 = var3.Permissions;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot12 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var1 = var0.channel;
        var0 = function arg0, arg1() {
            _fun90673: for (var _fun90673_ip = 0;;) switch (_fun90673_ip) {
                case 0:
                    var5 = arg0;
                    var _closure3_slot0 = var5;
                    var1 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 9;
                    var6 = var4[var0];
                    var8 = undefined;
                    var9 = var1.bind(var8)(var6);
                    var7 = var9.useMemberActionsForChannel;
                    var6 = arg1;
                    var6 = var7.bind(var9)(var5, var6);
                    var6 = var6.channelAction;
                    var0 = var4[var0];
                    var4 = var1.bind(var8)(var0);
                    var1 = var4.useNextMemberAction;
                    var9 = null;
                    var7 = var9 == var6;
                    var0 = undefined;
                    if (var7) {
                        _fun90673_ip = 86;
                        continue _fun90673
                    }
                case 81:
                    var0 = var6.channelId;
                case 86:
                    var0 = var1.bind(var4)(var5, var0);
                    var _closure3_slot1 = var0;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 10;
                    var0 = var5[var1];
                    var10 = var4.bind(var8)(var0);
                    var7 = var10.useStateFromStores;
                    var0 = _closure1_slot4;
                    var6 = new Array(1);
                    var6[0] = var0;
                    var0 = function() { // Environment: var2
                        _fun90674: for (var _fun90674_ip = 0;;) switch (_fun90674_ip) {
                            case 0:
                                var2 = _closure1_slot4;
                                var1 = var2.getChannel;
                                var4 = _closure3_slot1;
                                var0 = null;
                                var4 = var0 == var4;
                                var0 = undefined;
                                if (var4) {
                                    _fun90674_ip = 39;
                                    continue _fun90674
                                }
                            case 30:
                                var3 = _closure3_slot1;
                                var0 = var3.channelId;
                            case 39:
                                var0 = var1.bind(var2)(var0);
                                return var0;
                        }
                    };
                    var7 = var7.bind(var10)(var6, var0);
                    var _closure3_slot2 = var7;
                    var0 = var5[var1];
                    var11 = var4.bind(var8)(var0);
                    var10 = var11.useStateFromStoresArray;
                    var0 = _closure1_slot5;
                    var6 = new Array(1);
                    var6[0] = var0;
                    var0 = function() { // Environment: var2
                        var3 = _closure1_slot5;
                        var2 = var3.getChannels;
                        var1 = _closure3_slot0;
                        var2 = var2.bind(var3)(var1);
                        var1 = _closure1_slot6;
                        var3 = var2[var1];
                        var2 = var3.map;
                        var1 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var0 = var0.channel;
                            return var0;
                        };
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.sort;
                        var0 = _closure1_slot13;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var10.bind(var11)(var6, var0);
                    var _closure3_slot3 = var0;
                    var1 = var5[var1];
                    var6 = var4.bind(var8)(var1);
                    var5 = var6.useStateFromStoresArray;
                    var1 = _closure1_slot7;
                    var4 = new Array(1);
                    var4[0] = var1;
                    var1 = new Array(1);
                    var1[0] = var0;
                    var0 = function() { // Environment: var2
                        var3 = _closure3_slot3;
                        var2 = var3.filter;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 11;
                        var4 = var4[var1];
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4);
                        var1 = var1.isNotNullish;
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.filter;
                        var1 = function(arg0) { // Environment: var0
                            var2 = _closure1_slot3;
                            var0 = arg0;
                            var1 = var0.type;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.filter;
                        var0 = function(arg0) { // Environment: var0
                            var3 = _closure1_slot7;
                            var2 = var3.can;
                            var0 = _closure1_slot11;
                            var1 = var0.SEND_MESSAGES;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var11 = var5.bind(var6)(var4, var0, var1);
                    var _closure3_slot4 = var11;
                    if (!(var9 == var7)) {
                        _fun90673_ip = 446;
                        continue _fun90673
                    }
                case 254:
                    var0 = var11.length;
                    var10 = 0;
                    if (!(var10 !== var0)) {
                        _fun90673_ip = 366;
                        continue _fun90673
                    }
                case 265:
                    var0 = {};
                    var4 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var1 = 12;
                    var5 = var12[var1];
                    var5 = var4.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.formatToPlainString;
                    var1 = var12[var1];
                    var1 = var4.bind(var8)(var1);
                    var1 = var1.t;
                    var4 = var1.q1krfU;
                    var1 = {};
                    var10 = var11[var10];
                    var11 = var9 == var10;
                    var9 = undefined;
                    if (var11) {
                        _fun90673_ip = 337;
                        continue _fun90673
                    }
                case 332:
                    var9 = var10.name;
                case 337:
                    var1.channelName = var9;
                    var1 = var5.bind(var6)(var4, var1);
                    var0.text = var1;
                    var1 = function() {
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var0 = 13;
                        var2 = var3[var0];
                        var0 = undefined;
                        var6 = var4.bind(var0)(var2);
                        var5 = var6.trackWithMetadata;
                        var2 = _closure1_slot10;
                        var4 = var2.TEXT_AREA_CTA_CLICKED;
                        var2 = {};
                        var7 = _closure1_slot9;
                        var7 = var7.CHANNEL_LINK;
                        var2.cta_type = var7;
                        var2 = var5.bind(var6)(var4, var2);
                        var2 = _closure1_slot0;
                        var1 = 14;
                        var1 = var3[var1];
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.transitionToGuild;
                        var2 = _closure3_slot0;
                        var5 = _closure3_slot4;
                        var1 = 0;
                        var1 = var5[var1];
                        var1 = var1.id;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var0.handlePress = var1;
                    _fun90673_ip = 444;
                    continue _fun90673;
                case 366:
                    var1 = {};
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 12;
                    var5 = var10[var4];
                    var5 = var9.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var10[var4];
                    var4 = var9.bind(var8)(var4);
                    var4 = var4.t;
                    var4 = var4["gHD/nZ"];
                    var4 = var5.bind(var6)(var4);
                    var1.text = var4;
                    var4 = function() {
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var0 = 13;
                        var2 = var3[var0];
                        var0 = undefined;
                        var6 = var4.bind(var0)(var2);
                        var5 = var6.trackWithMetadata;
                        var2 = _closure1_slot10;
                        var4 = var2.TEXT_AREA_CTA_CLICKED;
                        var2 = {};
                        var7 = _closure1_slot9;
                        var7 = var7.CHANNEL_LIST;
                        var2.cta_type = var7;
                        var2 = var5.bind(var6)(var4, var2);
                        var2 = _closure1_slot0;
                        var1 = 14;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.transitionToGuild;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var1.handlePress = var4;
                    var0 = var1;
                case 444:
                    _fun90673_ip = 535;
                    continue _fun90673;
                case 446:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 12;
                    var5 = var9[var3];
                    var5 = var4.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.formatToPlainString;
                    var3 = var9[var3];
                    var3 = var4.bind(var8)(var3);
                    var3 = var3.t;
                    var4 = var3.q1krfU;
                    var3 = {};
                    var7 = var7.name;
                    var3.channelName = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var1.text = var3;
                    var2 = function() {
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var0 = 13;
                        var2 = var3[var0];
                        var0 = undefined;
                        var6 = var4.bind(var0)(var2);
                        var5 = var6.trackWithMetadata;
                        var2 = _closure1_slot10;
                        var4 = var2.TEXT_AREA_CTA_CLICKED;
                        var2 = {};
                        var7 = _closure1_slot9;
                        var7 = var7.CHANNEL_LINK;
                        var2.cta_type = var7;
                        var2 = var5.bind(var6)(var4, var2);
                        var2 = _closure1_slot0;
                        var1 = 14;
                        var1 = var3[var1];
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.transitionToGuild;
                        var2 = _closure3_slot0;
                        var1 = _closure3_slot2;
                        var1 = var1.id;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var1.handlePress = var2;
                    var0 = var1;
                case 535:
                    return var0;
            }
        };
        var3 = undefined;
        var0 = var0.bind(var3)(var2, var1);
        var4 = var0.text;
        var6 = var0.handlePress;
        var2 = _closure1_slot12;
        var1 = _closure1_slot1;
        var9 = _closure1_slot2;
        var0 = 16;
        var0 = var9[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var7 = 'simple-action';
        var0.type = var7;
        var0.actionOnPress = var6;
        var8 = _closure1_slot0;
        var5 = 12;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5["9cs5LM"];
        var5 = var6.bind(var7)(var5);
        var0.actionLabel = var5;
        var0.message = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat_input/native/guard/ChatInputGuardReadonly.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1376, 1372, 1662, 3052, 3908, 11561, 660, 33, 11617, 566, 1304, 1234, 4268, 1220, 21, 11727, 2]);