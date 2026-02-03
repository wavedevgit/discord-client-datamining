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
    var10 = true;
    var3.value = var10;
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
    var8 = {};
    var9 = false;
    var8.enableTracking = var9;
    var3.defaultConfig = var8;
    var8 = {};
    var9 = {};
    var9.enableTracking = var10;
    var8[1] = var9;
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
        _fun77661: for (var _fun77661_ip = 0;;) switch (_fun77661_ip) {
            case 0:
                var7 = arg0;
                var3 = arg1;
                var1 = _closure1_slot7;
                var4 = var1.GUILD_TEXTUAL;
                var2 = var4.has;
                var1 = var7.type;
                var1 = var2.bind(var4)(var1);
                if (!var1) {
                    _fun77661_ip = 383;
                    continue _fun77661
                }
            case 42:
                var1 = var3.ready;
                if (!var1) {
                    _fun77661_ip = 383;
                    continue _fun77661
                }
            case 54:
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                var _closure2_slot0 = var1;
                var10 = null;
                if (!(var10 != var1)) {
                    _fun77661_ip = 383;
                    continue _fun77661
                }
            case 80:
                var4 = _closure1_slot3;
                var2 = var4.getMentionCount;
                var1 = var7.id;
                var6 = var2.bind(var4)(var1);
                var1 = 0;
                if (!(!(var6 <= var1))) {
                    _fun77661_ip = 383;
                    continue _fun77661
                }
            case 109:
                var8 = _closure1_slot8;
                var4 = var8.getConfig;
                var2 = {};
                var9 = 'trackMentionsOnInitialUnreadChannelLoad';
                var2.location = var9;
                var2 = var4.bind(var8)(var2);
                var2 = var2.enableTracking;
                if (!var2) {
                    _fun77661_ip = 383;
                    continue _fun77661
                }
            case 148:
                var8 = _closure1_slot3;
                var4 = var8.ackMessageId;
                var2 = var7.id;
                var2 = var4.bind(var8)(var2);
                var _closure2_slot1 = var2;
                var4 = var10 != var2;
                if (!(var10 == var2)) {
                    _fun77661_ip = 272;
                    continue _fun77661
                }
            case 180:
                var9 = _closure1_slot2;
                var8 = var9.getGuild;
                var2 = var7.guild_id;
                var2 = var8.bind(var9)(var2);
                var8 = var10 != var2;
                if (!var8) {
                    _fun77661_ip = 216;
                    continue _fun77661
                }
            case 206:
                var9 = var2.joinedAt;
                var8 = var10 != var9;
            case 216:
                if (!var8) {
                    _fun77661_ip = 272;
                    continue _fun77661
                }
            case 219:
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var8 = 5;
                var9 = var9[var8];
                var8 = undefined;
                var9 = var10.bind(var8)(var9);
                var8 = var9.fromTimestamp;
                var10 = var2.joinedAt;
                var2 = var10.getTime;
                var2 = var2.bind(var10)();
                var2 = var8.bind(var9)(var2);
                _closure2_slot1 = var2;
            case 272:
                var _closure2_slot2 = var1;
                var2 = var3.forAll;
                var1 = function(arg0) { // Environment: var5
                    _fun77662: for (var _fun77662_ip = 0;;) switch (_fun77662_ip) {
                        case 0:
                            var5 = arg0;
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var7 = var2.bind(var0)(var1);
                            var6 = var7.compare;
                            var4 = var5.id;
                            var1 = _closure2_slot1;
                            var4 = var6.bind(var7)(var4, var1);
                            var1 = 0;
                            var1 = var4 > var1;
                            if (!var1) {
                                _fun77662_ip = 75;
                                continue _fun77662
                            }
                        case 61:
                            var4 = _closure1_slot4;
                            var3 = _closure2_slot0;
                            var1 = var4.bind(var0)(var5, var3);
                        case 75:
                            if (!var1) {
                                _fun77662_ip = 89;
                                continue _fun77662
                            }
                        case 78:
                            var1 = _closure2_slot2;
                            var1 = var1 + 1;
                            _closure2_slot2 = var1;
                        case 89:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.track;
                var0 = _closure1_slot6;
                var1 = var0.CHANNEL_WITH_UNREAD_MENTIONS_LOADED;
                var0 = {};
                var8 = var7.id;
                var0.channel_id = var8;
                var7 = var7.type;
                var0.channel_type = var7;
                var0.total_badge_count = var6;
                var5 = _closure2_slot2;
                var0.loaded_mention_count = var5;
                var0.has_previous_ack = var4;
                var0 = var2.bind(var3)(var1, var0);
            case 383:
                var0 = undefined;
                return var0;
        }
    };
    var2.trackMentionsOnInitialUnreadChannelScroll = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 3938, 1613, 660, 1301, 21, 795, 2]);