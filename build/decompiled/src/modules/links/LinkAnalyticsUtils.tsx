// modules/links/LinkAnalyticsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var3
        _fun51500: for (var _fun51500_ip = 0;;) switch (_fun51500_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun51500_ip = 45;
                    continue _fun51500
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun51500_ip = 54;
                    continue _fun51500
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun51500_ip = 342;
                    continue _fun51500
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun51500_ip = 322;
                    continue _fun51500
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun51500_ip = 282;
                    continue _fun51500
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun51500_ip = 269;
                    continue _fun51500
                }
            case 109:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun51500_ip = 162;
                    continue _fun51500
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun51500_ip = 178;
                    continue _fun51500
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun51500_ip = 248;
                    continue _fun51500
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun51500_ip = 248;
                    continue _fun51500
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun51500_ip = 233;
                    continue _fun51500
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun51500_ip = 246;
                    continue _fun51500
                }
            case 233:
                var8 = _closure1_slot7;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun51500_ip = 264;
                continue _fun51500;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun51500_ip = 282;
                continue _fun51500;
            case 269:
                var6 = _closure1_slot7;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun51500_ip = 322;
                    continue _fun51500
                }
            case 288:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 322:
                if (!var3) {
                    _fun51500_ip = 329;
                    continue _fun51500
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun51501: for (var _fun51501_ip = 0;;) switch (_fun51501_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun51501_ip = 56;
                                continue _fun51501
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun51501_ip = 67;
                            continue _fun51501;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 342:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var3
        _fun51502: for (var _fun51502_ip = 0;;) switch (_fun51502_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun51502_ip = 23;
                    continue _fun51502
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun51502_ip = 33;
                    continue _fun51502
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun51502_ip = 70;
                    continue _fun51502
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun51502_ip = 55;
                    continue _fun51502
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function(arg0) { // Original name: getDiscordLinkTypeFromMetadata, environment: var3
        _fun51503: for (var _fun51503_ip = 0;;) switch (_fun51503_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun51503_ip = 32;
                    continue _fun51503
                }
            case 14:
                var2 = var0.channelId;
                if (!(var1 != var2)) {
                    _fun51503_ip = 32;
                    continue _fun51503
                }
            case 23:
                var2 = var0.messageId;
                if (!(var1 == var2)) {
                    _fun51503_ip = 80;
                    continue _fun51503
                }
            case 32:
                var2 = var0.guildId;
                if (!(var1 != var2)) {
                    _fun51503_ip = 50;
                    continue _fun51503
                }
            case 41:
                var0 = var0.channelId;
                if (!(var1 == var0)) {
                    _fun51503_ip = 65;
                    continue _fun51503
                }
            case 50:
                var0 = _closure1_slot4;
                var0 = var0.UNKNOWN;
                _fun51503_ip = 78;
                continue _fun51503;
            case 65:
                var1 = _closure1_slot4;
                var0 = var1.CHANNEL;
            case 78:
                _fun51503_ip = 93;
                continue _fun51503;
            case 80:
                var1 = _closure1_slot4;
                var0 = var1.MESSAGE;
            case 93:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function(arg0, arg1) { // Original name: getDiscordLinkType, environment: var3
        _fun51504: for (var _fun51504_ip = 0;;) switch (_fun51504_ip) {
            case 0:
                var8 = arg0;
                var2 = arg1;
                var7 = null;
                if (!(var7 == var2)) {
                    _fun51504_ip = 16;
                    continue _fun51504
                }
            case 12:
                if (!(var7 != var8)) {
                    _fun51504_ip = 113;
                    continue _fun51504
                }
            case 16:
                if (!(var7 != var2)) {
                    _fun51504_ip = 36;
                    continue _fun51504
                }
            case 20:
                var1 = _closure1_slot8;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                _fun51504_ip = 111;
                continue _fun51504;
            case 36:
                var3 = _closure1_slot6;
                var1 = _closure1_slot5;
                var6 = undefined;
                var5 = var3.bind(var6)(var1);
                var3 = var5.bind(var6)();
                var1 = var3.done;
                var4 = var3;
                if (var1) {
                    _fun51504_ip = 98;
                    continue _fun51504
                }
            case 69:
                var1 = var4.value;
                var1 = var1.bind(var6)(var8);
                if (!(var7 == var1)) {
                    _fun51504_ip = 108;
                    continue _fun51504
                }
            case 83:
                var9 = var5.bind(var6)();
                var3 = var9.done;
                var4 = var9;
                if (!var3) {
                    _fun51504_ip = 69;
                    continue _fun51504
                }
            case 98:
                var2 = _closure1_slot4;
                var1 = var2.UNKNOWN;
            case 108:
                var0 = var1;
            case 111:
                _fun51504_ip = 126;
                continue _fun51504;
            case 113:
                var1 = _closure1_slot4;
                var0 = var1.UNKNOWN;
            case 126:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.AnalyticEvents;
    var _closure1_slot3 = var1;
    var1 = {};
    var6 = 'Discord Message Link';
    var1.MESSAGE = var6;
    var6 = 'Discord Channel Link';
    var1.CHANNEL = var6;
    var6 = 'Discord Server Invite';
    var1.SERVER_INVITE = var6;
    var6 = 'Discord Gift Link';
    var1.GIFT = var6;
    var6 = 'Unknown';
    var1.UNKNOWN = var6;
    var6 = 'Discord Discovery Link';
    var1.DISCOVERY = var6;
    var _closure1_slot4 = var1;
    var1 = new Array(3);
    var6 = function(arg0) { // Environment: var3
        _fun51505: for (var _fun51505_ip = 0;;) switch (_fun51505_ip) {
            case 0:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isInvite;
                var0 = arg0;
                var2 = var2.bind(var3)(var0);
                var0 = null;
                if (!var2) {
                    _fun51505_ip = 54;
                    continue _fun51505
                }
            case 44:
                var1 = _closure1_slot4;
                var0 = var1.SERVER_INVITE;
            case 54:
                return var0;
        }
    };
    var1[0] = var6;
    var6 = function(arg0) { // Environment: var3
        _fun51506: for (var _fun51506_ip = 0;;) switch (_fun51506_ip) {
            case 0:
                var1 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 2;
                var0 = var3[var0];
                var4 = undefined;
                var3 = var1.bind(var4)(var0);
                var1 = var3.safeParseWithQuery;
                var0 = arg0;
                var1 = var1.bind(var3)(var0);
                var0 = null;
                if (!(var0 != var1)) {
                    _fun51506_ip = 131;
                    continue _fun51506
                }
            case 45:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 3;
                var3 = var6[var3];
                var5 = var5.bind(var4)(var3);
                var3 = var5.tryParseChannelPath;
                var1 = var1.path;
                var5 = var3.bind(var5)(var1);
                var3 = var0 == var5;
                var1 = null;
                if (var3) {
                    _fun51506_ip = 129;
                    continue _fun51506
                }
            case 91:
                var3 = _closure1_slot8;
                var2 = {};
                var6 = var5.guildId;
                var2.guildId = var6;
                var6 = var5.channelId;
                var2.channelId = var6;
                var5 = var5.messageId;
                var2.messageId = var5;
                var1 = var3.bind(var4)(var2);
            case 129:
                return var1;
            case 131:
                return var0;
        }
    };
    var1[1] = var6;
    var6 = function(arg0) { // Environment: var3
        _fun51507: for (var _fun51507_ip = 0;;) switch (_fun51507_ip) {
            case 0:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isDiscoveryLink;
                var0 = arg0;
                var2 = var2.bind(var3)(var0);
                var0 = null;
                if (!var2) {
                    _fun51507_ip = 54;
                    continue _fun51507
                }
            case 44:
                var1 = _closure1_slot4;
                var0 = var1.DISCOVERY;
            case 54:
                return var0;
        }
    };
    var1[2] = var6;
    var _closure1_slot5 = var1;
    var1 = {};
    var6 = function(arg0) { // Original name: trackDiscordLinkClicked, environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot3;
        var2 = var1.LINK_CLICKED;
        var1 = {};
        var6 = true;
        var1.is_discord_link = var6;
        var6 = _closure1_slot8;
        var5 = arg0;
        var5 = var6.bind(var0)(var5);
        var1.discord_link_type = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.trackDiscordLinkClicked = var6;
    var6 = function(arg0, arg1) { // Original name: trackLinkClicked, environment: var3
        _fun51509: for (var _fun51509_ip = 0;;) switch (_fun51509_ip) {
            case 0:
                var8 = arg0;
                var7 = arg1;
                var4 = null;
                if (!(var4 == var8)) {
                    _fun51509_ip = 16;
                    continue _fun51509
                }
            case 12:
                if (!(var4 != var7)) {
                    _fun51509_ip = 130;
                    continue _fun51509
                }
            case 16:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 2;
                var0 = var2[var0];
                var6 = undefined;
                var2 = var1.bind(var6)(var0);
                var1 = var2.isDiscordUrl;
                var0 = true;
                var9 = var1.bind(var2)(var8, var0);
                if (var9) {
                    _fun51509_ip = 62;
                    continue _fun51509
                }
            case 58:
                var9 = var4 != var7;
            case 62:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 4;
                var0 = var2[var0];
                var3 = var1.bind(var6)(var0);
                var2 = var3.track;
                var0 = _closure1_slot3;
                var1 = var0.LINK_CLICKED;
                var0 = {};
                var0.is_discord_link = var9;
                var4 = null;
                if (!var9) {
                    _fun51509_ip = 119;
                    continue _fun51509
                }
            case 109:
                var5 = _closure1_slot9;
                var4 = var5.bind(var6)(var8, var7);
            case 119:
                var0.discord_link_type = var4;
                var0 = var2.bind(var3)(var1, var0);
            case 130:
                var0 = undefined;
                return var0;
        }
    };
    var1.trackLinkClicked = var6;
    var3 = function(arg0) { // Original name: trackAnnouncementMessageLinkClicked, environment: var3
        var0 = arg0;
        var9 = var0.messageId;
        var8 = var0.channelId;
        var7 = var0.guildId;
        var6 = var0.sourceChannelId;
        var5 = var0.sourceGuildId;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 4;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot3;
        var2 = var1.ANNOUNCEMENT_MESSAGE_LINK_CLICKED;
        var1 = {};
        var1.message_id = var9;
        var1.channel_id = var8;
        var1.guild_id = var7;
        var1.source_channel_id = var6;
        var1.source_guild_id = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.trackAnnouncementMessageLinkClicked = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/links/LinkAnalyticsUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 5854, 1457, 3422, 795, 2]);