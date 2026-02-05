// modules/quests/lib/analytics/AnalyticsHooks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useQuestImpression;
        var4 = var2.bind(var3)();
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useCallback;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function(arg0) { // Environment: var0
            _fun47364: for (var _fun47364_ip = 0;;) switch (_fun47364_ip) {
                case 0:
                    var4 = arg0;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.trackQuestEvent;
                    var1 = {};
                    var9 = var1;
                    var8 = var4;
                    var5 = copyDataProperties(var9, var8);
                    var5 = {};
                    var8 = var4.properties;
                    var9 = var5;
                    var4 = copyDataProperties(var9, var8);
                    var7 = _closure2_slot0;
                    var6 = null;
                    var7 = var6 == var7;
                    var6 = undefined;
                    if (var7) {
                        _fun47364_ip = 93;
                        continue _fun47364
                    }
                case 79:
                    var7 = _closure2_slot0;
                    var4 = var7.getId;
                    var6 = var4.bind(var7)();
                case 93:
                    var4 = 'impression_id';
                    var5[var4] = var6;
                    var4 = 'properties';
                    var1[var4] = var5;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var3;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot5 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/lib/analytics/AnalyticsHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var2.useTrackQuestEventWithImpression = var3;
    var3 = function() {
        var3 = _closure1_slot6;
        var2 = undefined;
        var4 = var3.bind(var2)();
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useCallback;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var4 = var0.questId;
            var _closure3_slot0 = var4;
            var6 = var0.questContent;
            var _closure3_slot1 = var6;
            var2 = var0.questContentCTA;
            var _closure3_slot2 = var2;
            var2 = var0.questContentPosition;
            var _closure3_slot3 = var2;
            var2 = var0.questContentRowIndex;
            var _closure3_slot4 = var2;
            var2 = var0.trackGuildAndChannelMetadata;
            var _closure3_slot5 = var2;
            var0 = var0.sourceQuestContent;
            var _closure3_slot6 = var0;
            var3 = _closure1_slot4;
            var2 = var3.getQuest;
            var2 = var2.bind(var3)(var4);
            var _closure3_slot7 = var2;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 5;
            var3 = var7[var2];
            var0 = undefined;
            var8 = var5.bind(var0)(var3);
            var3 = var8.getAdMetadataRaw;
            var3 = var3.bind(var8)(var6);
            var _closure3_slot8 = var3;
            var3 = var7[var2];
            var8 = var5.bind(var0)(var3);
            var3 = var8.getAdMetadataSealed;
            var3 = var3.bind(var8)(var6);
            var _closure3_slot9 = var3;
            var3 = var7[var2];
            var8 = var5.bind(var0)(var3);
            var3 = var8.getAdTrafficMetadataRaw;
            var3 = var3.bind(var8)(var6, var4);
            var _closure3_slot10 = var3;
            var2 = var7[var2];
            var3 = var5.bind(var0)(var2);
            var2 = var3.getAdTrafficMetadataSealed;
            var2 = var2.bind(var3)(var6, var4);
            var _closure3_slot11 = var2;
            var2 = 6;
            var2 = var7[var2];
            var4 = var5.bind(var0)(var2);
            var3 = var4.getAdUser;
            var2 = 7;
            var2 = var7[var2];
            var5 = var5.bind(var0)(var2);
            var2 = var5.getQuestContentName;
            var2 = var2.bind(var5)(var6);
            var3 = var3.bind(var4)(var2);
            var2 = var3.then;
            var1 = function(arg0) { // Environment: var1
                _fun47367: for (var _fun47367_ip = 0;;) switch (_fun47367_ip) {
                    case 0:
                        var6 = arg0;
                        var2 = _closure2_slot0;
                        var1 = {};
                        var0 = _closure3_slot0;
                        var1.questId = var0;
                        var0 = _closure1_slot5;
                        var0 = var0.QUEST_CONTENT_CLICKED;
                        var1.event = var0;
                        var5 = {};
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var11 = 7;
                        var7 = var9[var11];
                        var0 = undefined;
                        var13 = var8.bind(var0)(var7);
                        var12 = var13.getContentProperties;
                        var10 = _closure3_slot1;
                        var8 = _closure3_slot3;
                        var7 = _closure3_slot4;
                        var15 = var12.bind(var13)(var10, var8, var7);
                        var16 = var5;
                        var7 = copyDataProperties(var16, var15);
                        var8 = _closure1_slot1;
                        var7 = 8;
                        var7 = var9[var7];
                        var7 = var8.bind(var0)(var7);
                        var15 = var7.bind(var0)();
                        var16 = var5;
                        var7 = copyDataProperties(var16, var15);
                        var8 = _closure3_slot2;
                        var7 = 'cta_name';
                        var5[var7] = var8;
                        var8 = _closure3_slot7;
                        var7 = null;
                        var8 = var7 != var8;
                        var9 = null;
                        if (!var8) {
                            _fun47367_ip = 185;
                            continue _fun47367
                        }
                    case 153:
                        var10 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var8 = var8[var11];
                        var11 = var10.bind(var0)(var8);
                        var10 = var11.getQuestStatus;
                        var8 = _closure3_slot7;
                        var9 = var10.bind(var11)(var8);
                    case 185:
                        var8 = 'quest_status';
                        var5[var8] = var9;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var8 = 9;
                        var8 = var10[var8];
                        var9 = var9.bind(var0)(var8);
                        var8 = var9.v4;
                        var9 = var8.bind(var9)();
                        var8 = 'click_id';
                        var5[var8] = var9;
                        var8 = var7 != var6;
                        var9 = null;
                        if (!var8) {
                            _fun47367_ip = 287;
                            continue _fun47367
                        }
                    case 246:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var8 = 10;
                        var8 = var11[var8];
                        var10 = var10.bind(var0)(var8);
                        var8 = var10.isIOS;
                        var8 = var8.bind(var10)();
                        var9 = null;
                        if (!var8) {
                            _fun47367_ip = 287;
                            continue _fun47367
                        }
                    case 281:
                        var9 = var6.advertisingId;
                    case 287:
                        var8 = 'apple_advertising_id';
                        var5[var8] = var9;
                        var9 = var7 != var6;
                        var8 = null;
                        if (!var9) {
                            _fun47367_ip = 348;
                            continue _fun47367
                        }
                    case 307:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var9 = 10;
                        var9 = var11[var9];
                        var10 = var10.bind(var0)(var9);
                        var9 = var10.isAndroid;
                        var9 = var9.bind(var10)();
                        var8 = null;
                        if (!var9) {
                            _fun47367_ip = 348;
                            continue _fun47367
                        }
                    case 342:
                        var8 = var6.advertisingId;
                    case 348:
                        var6 = 'android_advertising_id';
                        var5[var6] = var8;
                        var6 = _closure3_slot8;
                        var6 = var7 != var6;
                        var8 = null;
                        if (!var6) {
                            _fun47367_ip = 374;
                            continue _fun47367
                        }
                    case 370:
                        var8 = _closure3_slot8;
                    case 374:
                        var6 = 'metadata_raw';
                        var5[var6] = var8;
                        var6 = _closure3_slot9;
                        var6 = var7 != var6;
                        var8 = null;
                        if (!var6) {
                            _fun47367_ip = 400;
                            continue _fun47367
                        }
                    case 396:
                        var8 = _closure3_slot9;
                    case 400:
                        var6 = 'metadata_sealed';
                        var5[var6] = var8;
                        var6 = _closure3_slot10;
                        var6 = var7 != var6;
                        var8 = null;
                        if (!var6) {
                            _fun47367_ip = 426;
                            continue _fun47367
                        }
                    case 422:
                        var8 = _closure3_slot10;
                    case 426:
                        var6 = 'traffic_metadata_raw';
                        var5[var6] = var8;
                        var6 = _closure3_slot11;
                        var6 = var7 != var6;
                        var7 = null;
                        if (!var6) {
                            _fun47367_ip = 452;
                            continue _fun47367
                        }
                    case 448:
                        var7 = _closure3_slot11;
                    case 452:
                        var6 = 'traffic_metadata_sealed';
                        var5[var6] = var7;
                        var1.properties = var5;
                        var5 = _closure3_slot5;
                        var1.trackGuildAndChannelMetadata = var5;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 5;
                        var4 = var6[var4];
                        var6 = var5.bind(var0)(var4);
                        var5 = var6.isBillableQuestContent;
                        var4 = _closure3_slot1;
                        var4 = var5.bind(var6)(var4);
                        var1.shouldExtendSession = var4;
                        var3 = _closure3_slot6;
                        var1.sourceQuestContent = var3;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useTrackQuestContentClickedWithImpression = var3;
    var1 = function arg0, arg1() {
        var5 = arg0;
        var4 = arg1;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useEffect;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 4;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.trackQuestEmbedFallbackViewed;
            var2 = _closure2_slot1;
            var1 = _closure2_slot0;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = undefined;
        return var0;
    };
    var2.useQuestsEmbedFallbackAnalytics = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 5230, 660, 5308, 5265, 5242, 5276, 5281, 5282, 491, 478, 2]);