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
    var1 = function arg0, arg1() {
        _fun77807: for (var _fun77807_ip = 0;;) switch (_fun77807_ip) {
            case 0:
                var8 = arg0;
                var9 = arg1;
                var0 = _closure1_slot7;
                var4 = var0.GUILD_TEXTUAL;
                var3 = var4.has;
                var0 = var8.type;
                var0 = var3.bind(var4)(var0);
                if (!var0) {
                    _fun77807_ip = 48;
                    continue _fun77807
                }
            case 39:
                var0 = var9.ready;
                if (var0) {
                    _fun77807_ip = 52;
                    continue _fun77807
                }
            case 48:
                var0 = null;
                return var0;
            case 52:
                var3 = _closure1_slot5;
                var0 = var3.getCurrentUser;
                var3 = var0.bind(var3)();
                var _closure2_slot0 = var3;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun77807_ip = 408;
                    continue _fun77807
                }
            case 78:
                var5 = _closure1_slot3;
                var4 = var5.getMentionCount;
                var3 = var8.id;
                var7 = var4.bind(var5)(var3);
                var4 = 0;
                if (!(!(var7 <= var4))) {
                    _fun77807_ip = 406;
                    continue _fun77807
                }
            case 107:
                var6 = _closure1_slot8;
                var5 = var6.getConfig;
                var3 = {};
                var10 = 'trackMentionsOnInitialUnreadChannelLoad';
                var3.location = var10;
                var5 = var5.bind(var6)(var3);
                var3 = var5.enableTracking;
                var5 = var5.enableNavigation;
                var _closure2_slot1 = var5;
                if (var3) {
                    _fun77807_ip = 158;
                    continue _fun77807
                }
            case 153:
                if (var5) {
                    _fun77807_ip = 158;
                    continue _fun77807
                }
            case 156:
                return var0;
            case 158:
                var10 = _closure1_slot3;
                var6 = var10.ackMessageId;
                var5 = var8.id;
                var5 = var6.bind(var10)(var5);
                var _closure2_slot2 = var5;
                var6 = var0 != var5;
                if (!(var0 == var5)) {
                    _fun77807_ip = 282;
                    continue _fun77807
                }
            case 190:
                var11 = _closure1_slot2;
                var10 = var11.getGuild;
                var5 = var8.guild_id;
                var5 = var10.bind(var11)(var5);
                var10 = var0 != var5;
                if (!var10) {
                    _fun77807_ip = 226;
                    continue _fun77807
                }
            case 216:
                var11 = var5.joinedAt;
                var10 = var0 != var11;
            case 226:
                if (!var10) {
                    _fun77807_ip = 282;
                    continue _fun77807
                }
            case 229:
                var12 = _closure1_slot0;
                var11 = _closure1_slot1;
                var10 = 5;
                var11 = var11[var10];
                var10 = undefined;
                var11 = var12.bind(var10)(var11);
                var10 = var11.fromTimestamp;
                var12 = var5.joinedAt;
                var5 = var12.getTime;
                var5 = var5.bind(var12)();
                var5 = var10.bind(var11)(var5);
                _closure2_slot2 = var5;
            case 282:
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var0;
                var5 = var9.forAll;
                var4 = function(arg0) { // Environment: var1
                    _fun77808: for (var _fun77808_ip = 0;;) switch (_fun77808_ip) {
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
                                _fun77808_ip = 75;
                                continue _fun77808
                            }
                        case 61:
                            var7 = _closure1_slot4;
                            var4 = _closure2_slot0;
                            var3 = var7.bind(var0)(var1, var4);
                        case 75:
                            if (!var3) {
                                _fun77808_ip = 166;
                                continue _fun77808
                            }
                        case 78:
                            var3 = _closure2_slot3;
                            var3 = var3 + 1;
                            _closure2_slot3 = var3;
                            var3 = _closure2_slot1;
                            if (!var3) {
                                _fun77808_ip = 154;
                                continue _fun77808
                            }
                        case 96:
                            var7 = _closure2_slot4;
                            var4 = null;
                            var4 = var4 == var7;
                            if (var4) {
                                _fun77808_ip = 151;
                                continue _fun77808
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
                                _fun77808_ip = 166;
                                continue _fun77808
                            }
                        case 157:
                            var1 = var1.id;
                            _closure2_slot4 = var1;
                        case 166:
                            return var0;
                    }
                };
                var4 = var5.bind(var9)(var4);
                if (!var3) {
                    _fun77807_ip = 400;
                    continue _fun77807
                }
            case 311:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
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
            case 400:
                var1 = _closure2_slot4;
                return var1;
            case 406:
                return var0;
            case 408:
                return var0;
        }
    };
    var2.getAndTrackOldestUnreadMentionOnLoad = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 3947, 1621, 660, 1301, 21, 795, 2]);