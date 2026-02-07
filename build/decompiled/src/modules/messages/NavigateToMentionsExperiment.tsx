// modules/messages/NavigateToMentionsExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.shouldBadgeMessage;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot6 = var6;
    var3 = var3.ChannelTypesSets;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createApexExperiment;
    var3 = {
        'name': '2026-01-red-dot-navigate-to-mentions',
        'kind': 'user'
    };
    var8 = {
        'enableTracking': false,
        'enableNavigation': false
    };
    var3.defaultConfig = var8;
    var8 = {};
    var9 = {
        'enableTracking': true,
        'enableNavigation': false
    };
    var8[1] = var9;
    var9 = {
        'enableTracking': true,
        'enableNavigation': true
    };
    var8[2] = var9;
    var3.variations = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/NavigateToMentionsExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun74161: for (var _fun74161_ip = 0;;) switch (_fun74161_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.channel;
                var11 = var0.messages;
                var3 = var0.track;
                var5 = undefined;
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var5;
                var _closure2_slot2 = var5;
                var _closure2_slot3 = var5;
                var _closure2_slot4 = var5;
                var0 = _closure1_slot7;
                var6 = var0.GUILD_TEXTUAL;
                var4 = var6.has;
                var0 = var8.type;
                var0 = var4.bind(var6)(var0);
                if (!var0) {
                    _fun74161_ip = 480;
                    continue _fun74161
                }
            case 77:
                var0 = _closure1_slot7;
                var6 = var0.THREADS;
                var4 = var6.has;
                var0 = var8.type;
                var0 = var4.bind(var6)(var0);
                if (var0) {
                    _fun74161_ip = 480;
                    continue _fun74161
                }
            case 108:
                var0 = var11.ready;
                if (!var0) {
                    _fun74161_ip = 480;
                    continue _fun74161
                }
            case 120:
                var4 = _closure1_slot5;
                var0 = var4.getCurrentUser;
                var4 = var0.bind(var4)();
                _closure2_slot0 = var4;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun74161_ip = 478;
                    continue _fun74161
                }
            case 146:
                var7 = _closure1_slot3;
                var6 = var7.getMentionCount;
                var4 = var8.id;
                var7 = var6.bind(var7)(var4);
                var9 = 0;
                if (!(!(var7 <= var9))) {
                    _fun74161_ip = 476;
                    continue _fun74161
                }
            case 175:
                var10 = _closure1_slot8;
                var6 = var10.getConfig;
                var4 = {};
                var12 = 'trackMentionsOnInitialUnreadChannelLoad';
                var4.location = var12;
                var6 = var6.bind(var10)(var4);
                var4 = var6.enableTracking;
                var6 = var6.enableNavigation;
                _closure2_slot1 = var6;
                if (var4) {
                    _fun74161_ip = 226;
                    continue _fun74161
                }
            case 221:
                if (var6) {
                    _fun74161_ip = 226;
                    continue _fun74161
                }
            case 224:
                return var0;
            case 226:
                var12 = _closure1_slot3;
                var10 = var12.ackMessageId;
                var6 = var8.id;
                var10 = var10.bind(var12)(var6);
                _closure2_slot2 = var10;
                var6 = var0 != var10;
                if (!(var0 == var10)) {
                    _fun74161_ip = 348;
                    continue _fun74161
                }
            case 258:
                var13 = _closure1_slot2;
                var12 = var13.getGuild;
                var10 = var8.guild_id;
                var10 = var12.bind(var13)(var10);
                var12 = var0 != var10;
                if (!var12) {
                    _fun74161_ip = 294;
                    continue _fun74161
                }
            case 284:
                var13 = var10.joinedAt;
                var12 = var0 != var13;
            case 294:
                if (!var12) {
                    _fun74161_ip = 348;
                    continue _fun74161
                }
            case 297:
                var13 = _closure1_slot0;
                var14 = _closure1_slot1;
                var12 = 5;
                var12 = var14[var12];
                var13 = var13.bind(var5)(var12);
                var12 = var13.fromTimestamp;
                var14 = var10.joinedAt;
                var10 = var14.getTime;
                var10 = var10.bind(var14)();
                var10 = var12.bind(var13)(var10);
                _closure2_slot2 = var10;
            case 348:
                _closure2_slot3 = var9;
                _closure2_slot4 = var0;
                var10 = var11.forAll;
                var9 = function(arg0) { // Environment: var1
                    _fun74162: for (var _fun74162_ip = 0;;) switch (_fun74162_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var8 = 5;
                            var2 = var0[var8];
                            var0 = undefined;
                            var7 = var3.bind(var0)(var2);
                            var6 = var7.compare;
                            var4 = var1.id;
                            var3 = _closure2_slot2;
                            var3 = var6.bind(var7)(var4, var3);
                            var6 = 0;
                            var3 = var3 > var6;
                            if (!var3) {
                                _fun74162_ip = 75;
                                continue _fun74162
                            }
                        case 61:
                            var7 = _closure1_slot4;
                            var4 = _closure2_slot0;
                            var3 = var7.bind(var0)(var1, var4);
                        case 75:
                            if (!var3) {
                                _fun74162_ip = 166;
                                continue _fun74162
                            }
                        case 78:
                            var3 = _closure2_slot3;
                            var3 = var3 + 1;
                            _closure2_slot3 = var3;
                            var3 = _closure2_slot1;
                            if (!var3) {
                                _fun74162_ip = 154;
                                continue _fun74162
                            }
                        case 96:
                            var7 = _closure2_slot4;
                            var4 = null;
                            var4 = var4 == var7;
                            if (var4) {
                                _fun74162_ip = 151;
                                continue _fun74162
                            }
                        case 109:
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var5 = var5[var8];
                            var9 = var7.bind(var0)(var5);
                            var8 = var9.compare;
                            var7 = var1.id;
                            var5 = _closure2_slot4;
                            var5 = var8.bind(var9)(var7, var5);
                            var4 = var5 < var6;
                        case 151:
                            var3 = var4;
                        case 154:
                            if (!var3) {
                                _fun74162_ip = 166;
                                continue _fun74162
                            }
                        case 157:
                            var1 = var1.id;
                            _closure2_slot4 = var1;
                        case 166:
                            return var0;
                    }
                };
                var9 = var10.bind(var11)(var9);
                if (!var3) {
                    _fun74161_ip = 380;
                    continue _fun74161
                }
            case 377:
                var3 = var4;
            case 380:
                if (!var3) {
                    _fun74161_ip = 470;
                    continue _fun74161
                }
            case 383:
                var4 = _closure1_slot0;
                var9 = _closure1_slot1;
                var3 = 6;
                var3 = var9[var3];
                var5 = var4.bind(var5)(var3);
                var4 = var5.track;
                var2 = _closure1_slot6;
                var3 = var2.CHANNEL_WITH_UNREAD_MENTIONS_LOADED;
                var2 = {};
                var9 = var8.id;
                var2.channel_id = var9;
                var8 = var8.type;
                var2.channel_type = var8;
                var2.total_badge_count = var7;
                var7 = _closure2_slot3;
                var2.loaded_mention_count = var7;
                var2.has_previous_ack = var6;
                var2 = var4.bind(var5)(var3, var2);
            case 470:
                var1 = _closure2_slot4;
                return var1;
            case 476:
                return var0;
            case 478:
                return var0;
            case 480:
                var0 = null;
                return var0;
        }
    };
    var2.getOldestUnreadMentionOnLoad = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 3948, 1621, 660, 1301, 21, 795, 2]);