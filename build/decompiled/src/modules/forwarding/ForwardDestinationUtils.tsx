// modules/forwarding/ForwardDestinationUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function(arg0) { // Original name: messageHasCheckpoint, environment: var1
        _fun54710: for (var _fun54710_ip = 0;;) switch (_fun54710_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.components;
                var0 = var0.length;
                var2 = 0;
                var0 = var0 > var2;
                if (!var0) {
                    _fun54710_ip = 79;
                    continue _fun54710
                }
            case 23:
                var1 = var1.components;
                var1 = var1[var2];
                var2 = var1.type;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 13;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.ComponentType;
                var1 = var1.CHECKPOINT_CARD;
                var0 = var2 === var1;
            case 79:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var3 = function(arg0, arg1) { // Original name: isRatelimitedInChannel, environment: var1
        _fun54711: for (var _fun54711_ip = 0;;) switch (_fun54711_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var1 = var5.rateLimitPerUser;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun54711_ip = 33;
                    continue _fun54711
                }
            case 21:
                var2 = var5.rateLimitPerUser;
                var1 = 0;
                var0 = var2 > var1;
            case 33:
                if (!var0) {
                    _fun54711_ip = 89;
                    continue _fun54711
                }
            case 36:
                var3 = var4.can;
                var1 = _closure1_slot12;
                var1 = var1.MANAGE_CHANNELS;
                var1 = var3.bind(var4)(var1, var5);
                if (var1) {
                    _fun54711_ip = 86;
                    continue _fun54711
                }
            case 64:
                var3 = var4.can;
                var2 = _closure1_slot12;
                var2 = var2.MANAGE_MESSAGES;
                var1 = var3.bind(var4)(var2, var5);
            case 86:
                var0 = !var1;
            case 89:
                return var0;
        }
    };
    var _closure1_slot14 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var8 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.ChannelRecordBase;
    var _closure1_slot4 = var8;
    var8 = var4.isGuildChannelType;
    var _closure1_slot5 = var8;
    var4 = var4.createChannelRecord;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.MessageFlags;
    var _closure1_slot11 = var7;
    var4 = var4.Permissions;
    var _closure1_slot12 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forwarding/ForwardDestinationUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg0) { // Original name: useSelectedDestinationChannel, environment: var1
        var7 = arg0;
        var3 = var7.map;
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var2 = 8;
        var2 = var6[var2];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var2 = var2.getChannelIdFromDestinationId;
        var7 = var3.bind(var7)(var2);
        var3 = var7.find;
        var2 = 9;
        var2 = var6[var2];
        var2 = var5.bind(var4)(var2);
        var2 = var2.isNotNullish;
        var2 = var3.bind(var7)(var2);
        var _closure2_slot0 = var2;
        var3 = 10;
        var3 = var6[var3];
        var6 = var5.bind(var4)(var3);
        var5 = var6.useStateFromStores;
        var3 = _closure1_slot7;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            var2 = _closure1_slot7;
            var1 = var2.getChannel;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4 = var5.bind(var6)(var4, var2, var3);
        var _closure2_slot1 = var4;
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun54714: for (var _fun54714_ip = 0;;) switch (_fun54714_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun54714_ip = 77;
                        continue _fun54714
                    }
                case 13:
                    var3 = _closure1_slot6;
                    var2 = {};
                    var4 = '1';
                    var2.id = var4;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 11;
                    var4 = var4[var0];
                    var0 = undefined;
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.ChannelTypes;
                    var4 = var4.DM;
                    var2.type = var4;
                    var0 = var3.bind(var0)(var2);
                    _fun54714_ip = 81;
                    continue _fun54714;
                case 77:
                    var0 = _closure2_slot1;
                case 81:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useSelectedDestinationChannel = var4;
    var4 = function(arg0, arg1, arg2, arg3) { // Original name: getDestinationIsUnavailable, environment: var1
        _fun54715: for (var _fun54715_ip = 0;;) switch (_fun54715_ip) {
            case 0:
                var3 = arg0;
                var13 = arg1;
                var5 = arg2;
                var4 = arg3;
                var _closure2_slot0 = var5;
                var0 = _closure1_slot4;
                var9 = var5 instanceof var0;
                var10 = null;
                if (!(var10 != var4)) {
                    _fun54715_ip = 49;
                    continue _fun54715
                }
            case 35:
                var0 = undefined;
                var0 = var4.bind(var0)(var5);
                if (!(var10 == var0)) {
                    _fun54715_ip = 1038;
                    continue _fun54715
                }
            case 49:
                if (!(var10 != var3)) {
                    _fun54715_ip = 1034;
                    continue _fun54715
                }
            case 56:
                var4 = _closure1_slot13;
                var6 = undefined;
                var8 = var4.bind(var6)(var3);
                var4 = var3.messageSnapshots;
                var4 = var4.length;
                var7 = 0;
                var4 = var4 > var7;
                if (!var4) {
                    _fun54715_ip = 111;
                    continue _fun54715
                }
            case 87:
                var12 = _closure1_slot13;
                var11 = var3.messageSnapshots;
                var11 = var11[var7];
                var11 = var11.message;
                var4 = var12.bind(var6)(var11);
            case 111:
                if (!(var10 == var13)) {
                    _fun54715_ip = 121;
                    continue _fun54715
                }
            case 115:
                if (!var8) {
                    _fun54715_ip = 1034;
                    continue _fun54715
                }
            case 121:
                var11 = _closure1_slot0;
                var10 = _closure1_slot1;
                var12 = 14;
                var10 = var10[var12];
                var11 = var11.bind(var6)(var10);
                var10 = var11.isChannelOrGuildNSFW;
                var10 = var10.bind(var11)(var13);
                if (!var10) {
                    _fun54715_ip = 254;
                    continue _fun54715
                }
            case 155:
                if (!var9) {
                    _fun54715_ip = 189;
                    continue _fun54715
                }
            case 158:
                var11 = _closure1_slot0;
                var10 = _closure1_slot1;
                var10 = var10[var12];
                var11 = var11.bind(var6)(var10);
                var10 = var11.isChannelOrGuildNSFW;
                var10 = var10.bind(var11)(var5);
                if (var10) {
                    _fun54715_ip = 254;
                    continue _fun54715
                }
            case 189:
                var10 = {};
                var14 = _closure1_slot0;
                var15 = _closure1_slot1;
                var11 = 15;
                var12 = var15[var11];
                var12 = var14.bind(var6)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var6)(var11);
                var11 = var11.t;
                var11 = var11.KgPx1D;
                var11 = var12.bind(var13)(var11);
                var10.label = var11;
                return var10;
            case 254:
                if (!var9) {
                    _fun54715_ip = 1034;
                    continue _fun54715
                }
            case 260:
                var10 = _closure1_slot5;
                var9 = var5.type;
                var9 = var10.bind(var6)(var9);
                if (!var9) {
                    _fun54715_ip = 1034;
                    continue _fun54715
                }
            case 280:
                var9 = var3.attachments;
                var9 = var9.length;
                if (!(!(var9 > var7))) {
                    _fun54715_ip = 320;
                    continue _fun54715
                }
            case 295:
                var11 = var3.messageSnapshots;
                var10 = var11.some;
                var9 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.message;
                    var0 = var0.attachments;
                    var1 = var0.length;
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var9 = var10.bind(var11)(var9);
                if (!var9) {
                    _fun54715_ip = 412;
                    continue _fun54715
                }
            case 320:
                var11 = _closure1_slot8;
                var10 = var11.can;
                var9 = _closure1_slot12;
                var9 = var9.ATTACH_FILES;
                var9 = var10.bind(var11)(var9, var5);
                if (var9) {
                    _fun54715_ip = 412;
                    continue _fun54715
                }
            case 349:
                var9 = {};
                var13 = _closure1_slot0;
                var14 = _closure1_slot1;
                var10 = 15;
                var11 = var14[var10];
                var11 = var13.bind(var6)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var6)(var10);
                var10 = var10.t;
                var10 = var10.P7yvbm;
                var10 = var11.bind(var12)(var10);
                var9.label = var10;
                return var9;
            case 412:
                var9 = var3.embeds;
                var9 = var9.length;
                if (!(!(var9 > var7))) {
                    _fun54715_ip = 455;
                    continue _fun54715
                }
            case 427:
                var11 = var3.messageSnapshots;
                var10 = var11.some;
                var9 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.message;
                    var0 = var0.embeds;
                    var1 = var0.length;
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var9 = var10.bind(var11)(var9);
                if (!var9) {
                    _fun54715_ip = 588;
                    continue _fun54715
                }
            case 455:
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var11 = 16;
                var9 = var9[var11];
                var12 = var10.bind(var6)(var9);
                var10 = var12.canEmbedLinks;
                var9 = _closure1_slot8;
                var9 = var10.bind(var12)(var5, var9);
                if (var9) {
                    _fun54715_ip = 588;
                    continue _fun54715
                }
            case 494:
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var11];
                var10 = var10.bind(var6)(var9);
                var9 = var10.shouldStripEmbeds;
                var9 = var9.bind(var10)(var3);
                if (var9) {
                    _fun54715_ip = 588;
                    continue _fun54715
                }
            case 525:
                var9 = {};
                var13 = _closure1_slot0;
                var14 = _closure1_slot1;
                var10 = 15;
                var11 = var14[var10];
                var11 = var13.bind(var6)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var6)(var10);
                var10 = var10.t;
                var10 = var10.Wr4RIX;
                var10 = var11.bind(var12)(var10);
                var9.label = var10;
                return var9;
            case 588:
                if (var8) {
                    _fun54715_ip = 594;
                    continue _fun54715
                }
            case 591:
                if (!var4) {
                    _fun54715_ip = 696;
                    continue _fun54715
                }
            case 594:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var4 = 16;
                var4 = var9[var4];
                var9 = var8.bind(var6)(var4);
                var8 = var9.canEmbedLinks;
                var4 = _closure1_slot8;
                var4 = var8.bind(var9)(var5, var4);
                if (var4) {
                    _fun54715_ip = 696;
                    continue _fun54715
                }
            case 633:
                var4 = {};
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var8 = 15;
                var9 = var12[var8];
                var9 = var11.bind(var6)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8.Wr4RIX;
                var8 = var9.bind(var10)(var8);
                var4.label = var8;
                return var4;
            case 696:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var4 = 12;
                var4 = var9[var4];
                var8 = var8.bind(var6)(var4);
                var4 = var8.getMessageStickers;
                var17 = var4.bind(var8)(var3);
                var8 = new Array(0);
                var18 = var8;
                var16 = 0;
                var16 = arraySpread(var18, var17, var16);
                var11 = var3.messageSnapshots;
                var10 = var11.flatMap;
                var4 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var2 = var0.message;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var0 = var1.getMessageStickers;
                    var0 = var0.bind(var1)(var2);
                    return var0;
                };
                var17 = var10.bind(var11)(var4);
                var18 = var8;
                var4 = arraySpread(var18, var17, var16);
                var4 = var8.length;
                if (!(var4 > var7)) {
                    _fun54715_ip = 891;
                    continue _fun54715
                }
            case 778:
                var9 = _closure1_slot8;
                var7 = var9.can;
                var4 = _closure1_slot12;
                var4 = var4.USE_EXTERNAL_STICKERS;
                var4 = var7.bind(var9)(var4, var5);
                if (var4) {
                    _fun54715_ip = 891;
                    continue _fun54715
                }
            case 807:
                var7 = var8.some;
                var4 = function(arg0) { // Environment: var1
                    _fun54719: for (var _fun54719_ip = 0;;) switch (_fun54719_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var4 = _closure1_slot3;
                            var2 = var4.getStickerById;
                            var0 = arg0;
                            var0 = var0.id;
                            var2 = var2.bind(var4)(var0);
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun54719_ip = 81;
                                continue _fun54719
                            }
                        case 42:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var3 = 12;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var3 = var4.isGuildSticker;
                            var3 = var3.bind(var4)(var2);
                            var3 = !var3;
                            var0 = !var3;
                        case 81:
                            if (!var0) {
                                _fun54719_ip = 106;
                                continue _fun54719
                            }
                        case 84:
                            var2 = var2.guild_id;
                            var1 = var1.guild_id;
                            var1 = var2 !== var1;
                            if (var1) {
                                _fun54719_ip = 103;
                                continue _fun54719
                            }
                        case 101:
                            var1 = undefined;
                        case 103:
                            var0 = var1;
                        case 106:
                            return var0;
                    }
                };
                var4 = var7.bind(var8)(var4);
                if (!var4) {
                    _fun54715_ip = 891;
                    continue _fun54715
                }
            case 826:
                var4 = {};
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var7 = 15;
                var8 = var11[var7];
                var8 = var10.bind(var6)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var6)(var7);
                var7 = var7.t;
                var7 = var7["0Yyrua"];
                var7 = var8.bind(var9)(var7);
                var4.label = var7;
                return var4;
            case 891:
                var7 = var3.hasFlag;
                var4 = _closure1_slot11;
                var4 = var4.IS_VOICE_MESSAGE;
                var4 = var7.bind(var3)(var4);
                if (var4) {
                    _fun54715_ip = 940;
                    continue _fun54715
                }
            case 915:
                var4 = var3.messageSnapshots;
                var3 = var4.some;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var2 = var0.message;
                    var1 = var2.hasFlag;
                    var0 = _closure1_slot11;
                    var0 = var0.IS_VOICE_MESSAGE;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var3.bind(var4)(var1);
                if (!var1) {
                    _fun54715_ip = 1034;
                    continue _fun54715
                }
            case 940:
                var4 = _closure1_slot8;
                var3 = var4.can;
                var1 = _closure1_slot12;
                var1 = var1.SEND_VOICE_MESSAGES;
                var1 = var3.bind(var4)(var1, var5);
                if (var1) {
                    _fun54715_ip = 1034;
                    continue _fun54715
                }
            case 969:
                var1 = {};
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 15;
                var3 = var7[var2];
                var3 = var5.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.quj4DY;
                var2 = var3.bind(var4)(var2);
                var1.label = var2;
                return var1;
            case 1034:
                var1 = undefined;
                return var1;
            case 1038:
                return var0;
        }
    };
    var2.getDestinationIsUnavailable = var4;
    var2.isRatelimitedInChannel = var3;
    var1 = function(arg0) { // Original name: useDestinationNamesWithSlowmode, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var6 = _closure1_slot1;
        var2 = 10;
        var7 = var6[var2];
        var3 = undefined;
        var10 = var4.bind(var3)(var7);
        var9 = var10.useStateFromStoresArray;
        var7 = _closure1_slot7;
        var8 = new Array(2);
        var8[0] = var7;
        var7 = _closure1_slot8;
        var8[1] = var7;
        var7 = new Array(1);
        var7[0] = var5;
        var5 = function() { // Environment: var0
            var3 = _closure2_slot0;
            var2 = var3.map;
            var1 = function(arg0) { // Environment: var0
                _fun54723: for (var _fun54723_ip = 0;;) switch (_fun54723_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.type;
                        var3 = var0.id;
                        var1 = 'channel';
                        var0 = null;
                        if (!(var1 === var2)) {
                            _fun54723_ip = 40;
                            continue _fun54723
                        }
                    case 23:
                        var2 = _closure1_slot7;
                        var1 = var2.getChannel;
                        var0 = var1.bind(var2)(var3);
                    case 40:
                        return var0;
                }
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 9;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.isNotNullish;
            var2 = var2.bind(var3)(var1);
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                var3 = _closure1_slot14;
                var2 = _closure1_slot8;
                var1 = undefined;
                var0 = arg0;
                var0 = var3.bind(var1)(var0, var2);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5 = var9.bind(var10)(var8, var5, var7);
        var _closure2_slot1 = var5;
        var2 = var6[var2];
        var4 = var4.bind(var3)(var2);
        var3 = var4.useStateFromStoresArray;
        var6 = _closure1_slot10;
        var2 = new Array(2);
        var2[0] = var6;
        var1 = _closure1_slot9;
        var2[1] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var2 = _closure2_slot1;
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.computeChannelName;
                var8 = _closure1_slot10;
                var7 = _closure1_slot9;
                var9 = arg0;
                var6 = true;
                var10 = var5;
                var0 = var10[var4](var9, var8, var7, var6, var5);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useDestinationNamesWithSlowmode = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 5555, 1376, 1372, 3050, 3059, 1613, 660, 6584, 1304, 566, 790, 3958, 1636, 4514, 1234, 3956, 4754, 2]);