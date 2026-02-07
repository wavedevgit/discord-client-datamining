// modules/quests/lib/analytics/ContentImpressionTracker.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var0 = function arg0, arg1() {
        var0 = global;
        var0 = var0.HermesInternal;
        var4 = var0.concat;
        var3 = '';
        var2 = arg0;
        var1 = '_';
        var0 = arg1;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var _closure1_slot16 = var0;
    var3 = global;
    var9 = var3.Object;
    var5 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var4 = var8.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var5 = var7[var4];
    var4 = arg3;
    var5 = var4.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var4 = 4;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var8 = var4.HEARTBEAT_SECONDS;
    var _closure1_slot8 = var8;
    var8 = var4.MIN_QUEST_VIEW_TIME_SECONDS;
    var _closure1_slot9 = var8;
    var4 = var4.MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot12 = var4;
    var3 = var3.Set;
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var13 = var4;
    var3 = new var13[var3](var12);
    var3 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot13 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot5;
        var2 = function arg0() {
            _fun47884: for (var _fun47884_ip = 0;;) switch (_fun47884_ip) {
                case 0:
                    var1 = arg0;
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var _closure3_slot1 = var2;
                    var5 = _closure1_slot4;
                    var4 = _closure2_slot0;
                    var0 = undefined;
                    var4 = var5.bind(var0)(var2, var4);
                    var4 = false;
                    var2.isRunning = var4;
                    var4 = function(arg0) { // Environment: var3
                        _fun47885: for (var _fun47885_ip = 0;;) switch (_fun47885_ip) {
                            case 0:
                                var3 = _closure1_slot0;
                                var0 = _closure1_slot2;
                                var7 = 8;
                                var2 = var0[var7];
                                var0 = undefined;
                                var5 = var3.bind(var0)(var2);
                                var4 = var5.getQuestPlacementFromQuestContent;
                                var2 = _closure3_slot0;
                                var2 = var2.questContent;
                                var5 = var4.bind(var5)(var2);
                                var2 = null;
                                var2 = var2 != var5;
                                if (!var2) {
                                    _fun47885_ip = 96;
                                    continue _fun47885
                                }
                            case 58:
                                var6 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var4 = var4[var7];
                                var6 = var6.bind(var0)(var4);
                                var4 = var6.isBillableQuestContent;
                                var3 = _closure3_slot0;
                                var3 = var3.questContent;
                                var2 = var4.bind(var6)(var3);
                            case 96:
                                if (!var2) {
                                    _fun47885_ip = 126;
                                    continue _fun47885
                                }
                            case 99:
                                var3 = _closure1_slot13;
                                var2 = var3.add;
                                var4 = _closure1_slot16;
                                var1 = arg0;
                                var1 = var4.bind(var0)(var1, var5);
                                var1 = var2.bind(var3)(var1);
                            case 126:
                                return var0;
                        }
                    };
                    var2.trackViewedPlacement = var4;
                    var4 = function(arg0) { // Environment: var3
                        _fun47886: for (var _fun47886_ip = 0;;) switch (_fun47886_ip) {
                            case 0:
                                var1 = _closure1_slot0;
                                var0 = _closure1_slot2;
                                var5 = 8;
                                var0 = var0[var5];
                                var4 = undefined;
                                var6 = var1.bind(var4)(var0);
                                var3 = var6.getQuestPlacementFromQuestContent;
                                var0 = _closure3_slot0;
                                var0 = var0.questContent;
                                var9 = var3.bind(var6)(var0);
                                var0 = null;
                                var0 = var0 != var9;
                                if (!var0) {
                                    _fun47886_ip = 88;
                                    continue _fun47886
                                }
                            case 58:
                                var7 = _closure1_slot13;
                                var6 = var7.has;
                                var8 = _closure1_slot16;
                                var3 = arg0;
                                var3 = var8.bind(var4)(var3, var9);
                                var3 = var6.bind(var7)(var3);
                                var0 = !var3;
                            case 88:
                                if (!var0) {
                                    _fun47886_ip = 129;
                                    continue _fun47886
                                }
                            case 91:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var2 = var2[var5];
                                var3 = var3.bind(var4)(var2);
                                var2 = var3.isBillableQuestContent;
                                var1 = _closure3_slot0;
                                var1 = var1.questContent;
                                var0 = var2.bind(var3)(var1);
                            case 129:
                                return var0;
                        }
                    };
                    var2.shouldExtendSession = var4;
                    var5 = _closure1_slot3;
                    var4 = function*() { // Environment: var3
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun47888: for (var _fun47888_ip = 0;;) switch (_fun47888_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun47888_ip = 491;
                                        continue _fun47888
                                    }
                                case 12:
                                    var2 = undefined;
                                    var _closure5_slot0 = var2;
                                    var _closure5_slot1 = var2;
                                    var11 = _closure1_slot0;
                                    var12 = _closure1_slot2;
                                    var5 = 8;
                                    var1 = var12[var5];
                                    var9 = var11.bind(var2)(var1);
                                    var8 = var9.getAdMetadataRaw;
                                    var1 = _closure3_slot1;
                                    var7 = var1.questContent;
                                    var10 = var8.bind(var9)(var7);
                                    var5 = var12[var5];
                                    var8 = var11.bind(var2)(var5);
                                    var7 = var8.getAdMetadataSealed;
                                    var5 = var1.questContent;
                                    var8 = var7.bind(var8)(var5);
                                    var5 = 9;
                                    var5 = var12[var5];
                                    var7 = var11.bind(var2)(var5);
                                    var5 = var7.getAdUser;
                                    var9 = 10;
                                    var9 = var12[var9];
                                    var11 = var11.bind(var2)(var9);
                                    var9 = var11.getQuestContentName;
                                    var1 = var1.questContent;
                                    var1 = var9.bind(var11)(var1);
                                    var1 = var5.bind(var7)(var1);
                                    SaveGenerator(address = 151);
                                case 149:
                                    return var1;
                                case 151:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                    if (var5) {
                                        _fun47888_ip = 488;
                                        continue _fun47888
                                    }
                                case 160:
                                    var5 = {};
                                    var7 = _closure3_slot1;
                                    var9 = var7.trackGuildAndChannelMetadata;
                                    var5.trackGuildAndChannelMetadata = var9;
                                    var9 = var7.sourceQuestContent;
                                    var5.sourceQuestContent = var9;
                                    _closure5_slot0 = var5;
                                    var5 = {};
                                    var9 = var7.minViewTimeSeconds;
                                    var5.min_view_time_seconds = var9;
                                    var9 = var7.minViewportPercentage;
                                    var5.min_viewport_percentage = var9;
                                    var7 = var7.triggeredByStatusChange;
                                    var5.triggered_by_status_change = var7;
                                    var7 = null;
                                    var11 = var7 != var1;
                                    var9 = null;
                                    if (!var11) {
                                        _fun47888_ip = 283;
                                        continue _fun47888
                                    }
                                case 242:
                                    var12 = _closure1_slot0;
                                    var13 = _closure1_slot2;
                                    var11 = 11;
                                    var11 = var13[var11];
                                    var12 = var12.bind(var2)(var11);
                                    var11 = var12.isIOS;
                                    var11 = var11.bind(var12)();
                                    var9 = null;
                                    if (!var11) {
                                        _fun47888_ip = 283;
                                        continue _fun47888
                                    }
                                case 277:
                                    var9 = var1.advertisingId;
                                case 283:
                                    var5.apple_advertising_id = var9;
                                    var11 = var7 != var1;
                                    var9 = null;
                                    if (!var11) {
                                        _fun47888_ip = 340;
                                        continue _fun47888
                                    }
                                case 299:
                                    var12 = _closure1_slot0;
                                    var13 = _closure1_slot2;
                                    var11 = 11;
                                    var11 = var13[var11];
                                    var12 = var12.bind(var2)(var11);
                                    var11 = var12.isAndroid;
                                    var11 = var11.bind(var12)();
                                    var9 = null;
                                    if (!var11) {
                                        _fun47888_ip = 340;
                                        continue _fun47888
                                    }
                                case 334:
                                    var9 = var1.advertisingId;
                                case 340:
                                    var5.android_advertising_id = var9;
                                    var11 = var7 != var10;
                                    var9 = null;
                                    if (!var11) {
                                        _fun47888_ip = 357;
                                        continue _fun47888
                                    }
                                case 354:
                                    var9 = var10;
                                case 357:
                                    var5.metadata_raw = var9;
                                    var9 = var7 != var8;
                                    var7 = null;
                                    if (!var9) {
                                        _fun47888_ip = 374;
                                        continue _fun47888
                                    }
                                case 371:
                                    var7 = var8;
                                case 374:
                                    var5.metadata_sealed = var7;
                                    var9 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    var7 = 12;
                                    var7 = var8[var7];
                                    var7 = var9.bind(var2)(var7);
                                    var14 = var7.bind(var2)();
                                    var15 = var5;
                                    var7 = copyDataProperties(var15, var14);
                                    var7 = _closure1_slot0;
                                    var6 = 13;
                                    var6 = var8[var6];
                                    var8 = var7.bind(var2)(var6);
                                    var7 = var8.getBrandSafetyContext;
                                    var4 = _closure3_slot1;
                                    var6 = var4.questContent;
                                    var14 = var7.bind(var8)(var6);
                                    var15 = var5;
                                    var6 = copyDataProperties(var15, var14);
                                    _closure5_slot1 = var5;
                                    var4 = var4.entity;
                                    var5 = var4.adContentIds;
                                    var4 = var5.forEach;
                                    var3 = function(arg0, arg1) { // Environment: var3
                                        _fun47889: for (var _fun47889_ip = 0;;) switch (_fun47889_ip) {
                                            case 0:
                                                var3 = arg0;
                                                var2 = arg1;
                                                var0 = _closure3_slot1;
                                                var1 = var0.shouldExtendSession;
                                                var14 = var1.bind(var0)(var3);
                                                var1 = var0.trackViewedPlacement;
                                                var1 = var1.bind(var0)(var3);
                                                var0 = var0.entity;
                                                var3 = var0.adCreativeType;
                                                var5 = _closure1_slot0;
                                                var1 = _closure1_slot2;
                                                var0 = 14;
                                                var1 = var1[var0];
                                                var0 = undefined;
                                                var1 = var5.bind(var0)(var1);
                                                var1 = var1.AdCreativeType;
                                                var1 = var1.QUEST;
                                                if (!(var3 !== var1)) {
                                                    _fun47889_ip = 377;
                                                    continue _fun47889
                                                }
                                            case 91:
                                                var9 = _closure3_slot1;
                                                var1 = var9.entity;
                                                var1 = var1.adContentIds;
                                                var10 = var1[var2];
                                                var3 = _closure1_slot0;
                                                var5 = _closure1_slot2;
                                                var1 = 15;
                                                var1 = var5[var1];
                                                var6 = var3.bind(var0)(var1);
                                                var1 = var6.getQuestLogger;
                                                var11 = var1.bind(var6)();
                                                var8 = var11.info;
                                                var21 = var9.minViewTimeSeconds;
                                                var1 = 10;
                                                var1 = var5[var1];
                                                var12 = var3.bind(var0)(var1);
                                                var6 = var12.getQuestContentName;
                                                var1 = var9.questContent;
                                                var19 = var6.bind(var12)(var1);
                                                var1 = global;
                                                var1 = var1.HermesInternal;
                                                var13 = var1.concat;
                                                var24 = '';
                                                var22 = ' ad content viewed for at least ';
                                                var20 = 's at ';
                                                var23 = var10;
                                                var6 = var24[var13](var23, var22, var21, var20, var19, var18);
                                                var1 = {};
                                                var12 = var9.id;
                                                var1.impressionId = var12;
                                                var1 = var8.bind(var11)(var6, var1);
                                                var1 = 16;
                                                var1 = var5[var1];
                                                var5 = var3.bind(var0)(var1);
                                                var3 = var5.trackAdContentEvent;
                                                var1 = {};
                                                var22 = _closure5_slot0;
                                                var23 = var1;
                                                var8 = copyDataProperties(var23, var22);
                                                var8 = 'shouldExtendSession';
                                                var1[var8] = var14;
                                                var8 = 'adContentId';
                                                var1[var8] = var10;
                                                var8 = var9.entity;
                                                var10 = var8.adCreativeType;
                                                var8 = 'adCreativeType';
                                                var1[var8] = var10;
                                                var8 = _closure1_slot11;
                                                var10 = var8.QUEST_CONTENT_VIEWED;
                                                var8 = 'event';
                                                var1[var8] = var10;
                                                var8 = {};
                                                var22 = _closure5_slot1;
                                                var23 = var8;
                                                var6 = copyDataProperties(var23, var22);
                                                var6 = var9.commonProperties;
                                                var22 = var6.bind(var9)();
                                                var23 = var8;
                                                var6 = copyDataProperties(var23, var22);
                                                var6 = 'properties';
                                                var1[var6] = var8;
                                                var1 = var3.bind(var5)(var1);
                                                _fun47889_ip = 842;
                                                continue _fun47889;
                                            case 377:
                                                var1 = _closure3_slot1;
                                                var1 = var1.entity;
                                                var1 = var1.adContentIds;
                                                var13 = var1[var2];
                                                var2 = _closure1_slot7;
                                                var1 = var2.getQuest;
                                                var10 = var1.bind(var2)(var13);
                                                var2 = _closure1_slot0;
                                                var3 = _closure1_slot2;
                                                var1 = 15;
                                                var1 = var3[var1];
                                                var2 = var2.bind(var0)(var1);
                                                var1 = var2.getQuestLogger;
                                                var5 = var1.bind(var2)();
                                                var3 = var5.info;
                                                var6 = null;
                                                var2 = var6 == var10;
                                                var1 = undefined;
                                                if (var2) {
                                                    _fun47889_ip = 476;
                                                    continue _fun47889
                                                }
                                            case 459:
                                                var2 = var10.config;
                                                var2 = var2.messages;
                                                var1 = var2.questName;
                                            case 476:
                                                var18 = var13;
                                                if (!(var6 != var1)) {
                                                    _fun47889_ip = 486;
                                                    continue _fun47889
                                                }
                                            case 483:
                                                var18 = var1;
                                            case 486:
                                                var8 = _closure3_slot1;
                                                var21 = var8.minViewTimeSeconds;
                                                var12 = _closure1_slot0;
                                                var11 = _closure1_slot2;
                                                var1 = 10;
                                                var1 = var11[var1];
                                                var9 = var12.bind(var0)(var1);
                                                var2 = var9.getQuestContentName;
                                                var1 = var8.questContent;
                                                var19 = var2.bind(var9)(var1);
                                                var1 = global;
                                                var1 = var1.HermesInternal;
                                                var15 = var1.concat;
                                                var24 = '';
                                                var22 = ' Quest viewed for at least ';
                                                var20 = 's at ';
                                                var23 = var18;
                                                var2 = var24[var15](var23, var22, var21, var20, var19, var18);
                                                var1 = {};
                                                var9 = var8.id;
                                                var1.impressionId = var9;
                                                var1 = var3.bind(var5)(var2, var1);
                                                var1 = 16;
                                                var1 = var11[var1];
                                                var3 = var12.bind(var0)(var1);
                                                var2 = var3.trackQuestEvent;
                                                var1 = {};
                                                var22 = _closure5_slot0;
                                                var23 = var1;
                                                var5 = copyDataProperties(var23, var22);
                                                var5 = 'shouldExtendSession';
                                                var1[var5] = var14;
                                                var5 = 'questId';
                                                var1[var5] = var13;
                                                var5 = _closure1_slot11;
                                                var13 = var5.QUEST_CONTENT_VIEWED;
                                                var5 = 'event';
                                                var1[var5] = var13;
                                                var5 = {};
                                                var22 = _closure5_slot1;
                                                var23 = var5;
                                                var9 = copyDataProperties(var23, var22);
                                                var9 = var8.commonProperties;
                                                var22 = var9.bind(var8)(var10);
                                                var23 = var5;
                                                var9 = copyDataProperties(var23, var22);
                                                var9 = 8;
                                                var11 = var11[var9];
                                                var13 = var12.bind(var0)(var11);
                                                var12 = var13.getAdTrafficMetadataRaw;
                                                var11 = var8.questContent;
                                                var14 = var6 == var10;
                                                var8 = undefined;
                                                if (var14) {
                                                    _fun47889_ip = 727;
                                                    continue _fun47889
                                                }
                                            case 722:
                                                var8 = var10.id;
                                            case 727:
                                                var8 = var12.bind(var13)(var11, var8);
                                                var12 = var6 != var8;
                                                var11 = null;
                                                if (!var12) {
                                                    _fun47889_ip = 745;
                                                    continue _fun47889
                                                }
                                            case 742:
                                                var11 = var8;
                                            case 745:
                                                var8 = 'traffic_metadata_raw';
                                                var5[var8] = var11;
                                                var8 = _closure1_slot0;
                                                var7 = _closure1_slot2;
                                                var7 = var7[var9];
                                                var9 = var8.bind(var0)(var7);
                                                var8 = var9.getAdTrafficMetadataSealed;
                                                var4 = _closure3_slot1;
                                                var7 = var4.questContent;
                                                var11 = var6 == var10;
                                                var4 = undefined;
                                                if (var11) {
                                                    _fun47889_ip = 801;
                                                    continue _fun47889
                                                }
                                            case 796:
                                                var4 = var10.id;
                                            case 801:
                                                var4 = var8.bind(var9)(var7, var4);
                                                var7 = var6 != var4;
                                                var6 = null;
                                                if (!var7) {
                                                    _fun47889_ip = 819;
                                                    continue _fun47889
                                                }
                                            case 816:
                                                var6 = var4;
                                            case 819:
                                                var4 = 'traffic_metadata_sealed';
                                                var5[var4] = var6;
                                                var4 = 'properties';
                                                var1[var4] = var5;
                                                var1 = var2.bind(var3)(var1);
                                            case 842:
                                                return var0;
                                        }
                                    };
                                    var3 = var4.bind(var5)(var3);
                                    return var2;
                                case 488:
                                    return var1;
                                case 491:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var4 = var5.bind(var0)(var4);
                    var2.onMinViewTimeReached = var4;
                    var4 = function() { // Environment: var3
                        _fun47890: for (var _fun47890_ip = 0;;) switch (_fun47890_ip) {
                            case 0:
                                var6 = arguments[0];
                                var0 = undefined;
                                if (!(var6 === var0)) {
                                    _fun47890_ip = 13;
                                    continue _fun47890
                                }
                            case 11:
                                var6 = false;
                            case 13:
                                var _closure4_slot0 = var6;
                                var _closure4_slot1 = var0;
                                var _closure4_slot2 = var0;
                                var _closure4_slot3 = var0;
                                var3 = _closure3_slot0;
                                var4 = var3.lastBeatTime;
                                var3 = null;
                                if (!(var3 != var4)) {
                                    _fun47890_ip = 188;
                                    continue _fun47890
                                }
                            case 51:
                                var3 = global;
                                var7 = var3.Math;
                                var5 = var7.round;
                                var4 = var3.Date;
                                var3 = var4.now;
                                var8 = var3.bind(var4)();
                                var3 = _closure3_slot0;
                                var4 = var3.lastBeatTime;
                                var4 = var8 - var4;
                                var5 = var5.bind(var7)(var4);
                                _closure4_slot1 = var5;
                                var4 = {};
                                var7 = var3.trackGuildAndChannelMetadata;
                                var4.trackGuildAndChannelMetadata = var7;
                                var7 = var3.sourceQuestContent;
                                var4.sourceQuestContent = var7;
                                _closure4_slot2 = var4;
                                var4 = {};
                                var4.is_termination_beat = var6;
                                var4.viewed_time_ms = var5;
                                var5 = var3.triggeredByStatusChange;
                                var4.triggered_by_status_change = var5;
                                _closure4_slot3 = var4;
                                var3 = var3.entity;
                                var4 = var3.adContentIds;
                                var3 = var4.forEach;
                                var2 = function(arg0, arg1) { // Environment: var2
                                    _fun47891: for (var _fun47891_ip = 0;;) switch (_fun47891_ip) {
                                        case 0:
                                            var2 = arg1;
                                            var0 = _closure3_slot0;
                                            var0 = var0.entity;
                                            var3 = var0.adCreativeType;
                                            var4 = _closure1_slot0;
                                            var1 = _closure1_slot2;
                                            var0 = 14;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var1 = var4.bind(var0)(var1);
                                            var1 = var1.AdCreativeType;
                                            var1 = var1.QUEST;
                                            if (!(var3 !== var1)) {
                                                _fun47891_ip = 352;
                                                continue _fun47891
                                            }
                                        case 66:
                                            var1 = _closure3_slot0;
                                            var1 = var1.entity;
                                            var1 = var1.adContentIds;
                                            var10 = var1[var2];
                                            var3 = _closure1_slot0;
                                            var4 = _closure1_slot2;
                                            var1 = 15;
                                            var1 = var4[var1];
                                            var3 = var3.bind(var0)(var1);
                                            var1 = var3.getQuestLogger;
                                            var8 = var1.bind(var3)();
                                            var4 = var8.info;
                                            var1 = _closure4_slot0;
                                            var14 = '';
                                            var13 = var14;
                                            if (!var1) {
                                                _fun47891_ip = 145;
                                                continue _fun47891
                                            }
                                        case 139:
                                            var13 = 'terminal ';
                                        case 145:
                                            var17 = _closure4_slot1;
                                            var1 = global;
                                            var1 = var1.HermesInternal;
                                            var11 = var1.concat;
                                            var20 = ' ad content impression ';
                                            var18 = 'heartbeat: ';
                                            var16 = 'ms since last heartbeat';
                                            var22 = var14;
                                            var21 = var10;
                                            var19 = var13;
                                            var3 = var22[var11](var21, var20, var19, var18, var17, var16, var15);
                                            var1 = {};
                                            var9 = _closure3_slot0;
                                            var11 = var9.id;
                                            var1.impressionId = var11;
                                            var1 = var4.bind(var8)(var3, var1);
                                            var3 = _closure1_slot0;
                                            var4 = _closure1_slot2;
                                            var1 = 16;
                                            var1 = var4[var1];
                                            var4 = var3.bind(var0)(var1);
                                            var3 = var4.trackAdContentEvent;
                                            var1 = {};
                                            var20 = _closure4_slot2;
                                            var21 = var1;
                                            var8 = copyDataProperties(var21, var20);
                                            var8 = 'adContentId';
                                            var1[var8] = var10;
                                            var8 = var9.entity;
                                            var10 = var8.adCreativeType;
                                            var8 = 'adCreativeType';
                                            var1[var8] = var10;
                                            var8 = _closure1_slot11;
                                            var10 = var8.QUEST_CONTENT_VIEW_TIME;
                                            var8 = 'event';
                                            var1[var8] = var10;
                                            var8 = {};
                                            var20 = _closure4_slot3;
                                            var21 = var8;
                                            var7 = copyDataProperties(var21, var20);
                                            var7 = var9.commonProperties;
                                            var20 = var7.bind(var9)();
                                            var21 = var8;
                                            var7 = copyDataProperties(var21, var20);
                                            var7 = 'properties';
                                            var1[var7] = var8;
                                            var1 = var3.bind(var4)(var1);
                                            _fun47891_ip = 666;
                                            continue _fun47891;
                                        case 352:
                                            var1 = _closure3_slot0;
                                            var1 = var1.entity;
                                            var1 = var1.adContentIds;
                                            var9 = var1[var2];
                                            var2 = _closure1_slot7;
                                            var1 = var2.getQuest;
                                            var7 = var1.bind(var2)(var9);
                                            var2 = _closure1_slot0;
                                            var3 = _closure1_slot2;
                                            var1 = 15;
                                            var1 = var3[var1];
                                            var2 = var2.bind(var0)(var1);
                                            var1 = var2.getQuestLogger;
                                            var8 = var1.bind(var2)();
                                            var3 = var8.info;
                                            var2 = null;
                                            var4 = var2 == var7;
                                            var1 = undefined;
                                            if (var4) {
                                                _fun47891_ip = 451;
                                                continue _fun47891
                                            }
                                        case 434:
                                            var4 = var7.config;
                                            var4 = var4.messages;
                                            var1 = var4.questName;
                                        case 451:
                                            var15 = var9;
                                            if (!(var2 != var1)) {
                                                _fun47891_ip = 461;
                                                continue _fun47891
                                            }
                                        case 458:
                                            var15 = var1;
                                        case 461:
                                            var1 = _closure4_slot0;
                                            var14 = '';
                                            var13 = var14;
                                            if (!var1) {
                                                _fun47891_ip = 484;
                                                continue _fun47891
                                            }
                                        case 478:
                                            var13 = 'terminal ';
                                        case 484:
                                            var17 = _closure4_slot1;
                                            var1 = global;
                                            var1 = var1.HermesInternal;
                                            var11 = var1.concat;
                                            var20 = ' Quest impression ';
                                            var18 = 'heartbeat: ';
                                            var16 = 'ms since last heartbeat';
                                            var22 = var14;
                                            var21 = var15;
                                            var19 = var13;
                                            var2 = var22[var11](var21, var20, var19, var18, var17, var16, var15);
                                            var1 = {};
                                            var6 = _closure3_slot0;
                                            var10 = var6.id;
                                            var1.impressionId = var10;
                                            var1 = var3.bind(var8)(var2, var1);
                                            var2 = _closure1_slot0;
                                            var3 = _closure1_slot2;
                                            var1 = 16;
                                            var1 = var3[var1];
                                            var3 = var2.bind(var0)(var1);
                                            var2 = var3.trackQuestEvent;
                                            var1 = {};
                                            var20 = _closure4_slot2;
                                            var21 = var1;
                                            var8 = copyDataProperties(var21, var20);
                                            var8 = 'questId';
                                            var1[var8] = var9;
                                            var5 = _closure1_slot11;
                                            var8 = var5.QUEST_CONTENT_VIEW_TIME;
                                            var5 = 'event';
                                            var1[var5] = var8;
                                            var5 = {};
                                            var20 = _closure4_slot3;
                                            var21 = var5;
                                            var4 = copyDataProperties(var21, var20);
                                            var4 = var6.commonProperties;
                                            var20 = var4.bind(var6)(var7);
                                            var21 = var5;
                                            var4 = copyDataProperties(var21, var20);
                                            var4 = 'properties';
                                            var1[var4] = var5;
                                            var1 = var2.bind(var3)(var1);
                                        case 666:
                                            return var0;
                                    }
                                };
                                var2 = var3.bind(var4)(var2);
                            case 188:
                                var2 = _closure3_slot0;
                                var1 = global;
                                var3 = var1.Date;
                                var1 = var3.now;
                                var1 = var1.bind(var3)();
                                var2.lastBeatTime = var1;
                                return var0;
                        }
                    };
                    var2.beat = var4;
                    var4 = function(arg0) { // Environment: var3
                        _fun47892: for (var _fun47892_ip = 0;;) switch (_fun47892_ip) {
                            case 0:
                                var6 = arg0;
                                var0 = {};
                                var2 = _closure3_slot0;
                                var3 = var2.id;
                                var0.impression_id = var3;
                                var2 = var2.isQuestEnrollmentBlocked;
                                var0.is_quest_enrollment_blocked = var2;
                                var2 = null;
                                var3 = var2 == var6;
                                var4 = undefined;
                                var2 = undefined;
                                if (var3) {
                                    _fun47892_ip = 82;
                                    continue _fun47892
                                }
                            case 48:
                                var5 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var3 = 10;
                                var3 = var7[var3];
                                var5 = var5.bind(var4)(var3);
                                var3 = var5.getQuestStatus;
                                var2 = var3.bind(var5)(var6);
                            case 82:
                                var0.quest_status = var2;
                                var3 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var2 = 10;
                                var2 = var5[var2];
                                var5 = var3.bind(var4)(var2);
                                var4 = var5.getContentProperties;
                                var1 = _closure3_slot0;
                                var3 = var1.questContent;
                                var2 = var1.questContentPosition;
                                var1 = var1.questContentRowIndex;
                                var9 = var4.bind(var5)(var3, var2, var1);
                                var10 = var0;
                                var1 = copyDataProperties(var10, var9);
                                return var0;
                        }
                    };
                    var2.commonProperties = var4;
                    var4 = function(arg0) { // Environment: var3
                        var0 = arg0;
                        var3 = var0.triggeredByStatusChange;
                        var1 = _closure3_slot0;
                        var0 = var1.stop;
                        var0 = var0.bind(var1)();
                        var2 = _closure2_slot0;
                        var0 = {};
                        var4 = var1.questContent;
                        var0.questContent = var4;
                        var4 = var1.questContentRowIndex;
                        var0.questContentRowIndex = var4;
                        var4 = var1.questContentPosition;
                        var0.questContentPosition = var4;
                        var4 = var1.trackGuildAndChannelMetadata;
                        var0.trackGuildAndChannelMetadata = var4;
                        var0.triggeredByStatusChange = var3;
                        var3 = var1.isQuestEnrollmentBlocked;
                        var0.isQuestEnrollmentBlocked = var3;
                        var3 = var1.sourceQuestContent;
                        var0.sourceQuestContent = var3;
                        var5 = var1.entity;
                        var6 = var0;
                        var1 = copyDataProperties(var6, var5);
                        var1 = var2.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var2
                            }
                        });
                        var7 = var1;
                        var6 = var0;
                        var0 = new var7[var2](var6, var5);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var2.clone = var4;
                    var4 = function() { // Environment: var3
                        _fun47894: for (var _fun47894_ip = 0;;) switch (_fun47894_ip) {
                            case 0:
                                var4 = _closure3_slot0;
                                var3 = var4.stop;
                                var0 = false;
                                var0 = var3.bind(var4)(var0);
                                var5 = global;
                                var3 = var5.Date;
                                var0 = var3.now;
                                var0 = var0.bind(var3)();
                                var4.lastBeatTime = var0;
                                var8 = var5.window;
                                var7 = var8.setInterval;
                                var0 = _closure1_slot8;
                                var9 = 1000;
                                var3 = var9 * var0;
                                var0 = function() { // Environment: var2
                                    var1 = _closure3_slot0;
                                    var0 = var1.beat;
                                    var0 = var0.bind(var1)();
                                    return var0;
                                };
                                var0 = var7.bind(var8)(var0, var3);
                                var4.heartbeatTimeoutId = var0;
                                var8 = var5.window;
                                var7 = var8.setTimeout;
                                var3 = var4.onMinViewTimeReached;
                                var0 = var4.minViewTimeSeconds;
                                var0 = var9 * var0;
                                var0 = var7.bind(var8)(var3, var0);
                                var4.minViewTimeReachedTimeoutId = var0;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var3 = 8;
                                var9 = var8[var3];
                                var0 = undefined;
                                var11 = var7.bind(var0)(var9);
                                var10 = var11.getAdMetadataRaw;
                                var9 = var4.questContent;
                                var9 = var10.bind(var11)(var9);
                                var3 = var8[var3];
                                var8 = var7.bind(var0)(var3);
                                var7 = var8.getAdMetadataSealed;
                                var3 = var4.questContent;
                                var7 = var7.bind(var8)(var3);
                                var3 = {};
                                var8 = var4.trackGuildAndChannelMetadata;
                                var3.trackGuildAndChannelMetadata = var8;
                                var8 = var4.sourceQuestContent;
                                var3.sourceQuestContent = var8;
                                var _closure4_slot0 = var3;
                                var3 = {};
                                var4 = var4.triggeredByStatusChange;
                                var3.triggered_by_status_change = var4;
                                var4 = null;
                                var10 = var4 != var9;
                                var8 = null;
                                if (!var10) {
                                    _fun47894_ip = 250;
                                    continue _fun47894
                                }
                            case 247:
                                var8 = var9;
                            case 250:
                                var3.metadata_raw = var8;
                                var8 = var4 != var7;
                                var4 = null;
                                if (!var8) {
                                    _fun47894_ip = 267;
                                    continue _fun47894
                                }
                            case 264:
                                var4 = var7;
                            case 267:
                                var3.metadata_sealed = var4;
                                var _closure4_slot1 = var3;
                                var3 = _closure3_slot0;
                                var3 = var3.entity;
                                var4 = var3.adContentIds;
                                var3 = var4.forEach;
                                var2 = function(arg0, arg1) { // Environment: var2
                                    _fun47896: for (var _fun47896_ip = 0;;) switch (_fun47896_ip) {
                                        case 0:
                                            var2 = arg1;
                                            var0 = _closure3_slot0;
                                            var0 = var0.entity;
                                            var3 = var0.adCreativeType;
                                            var5 = _closure1_slot0;
                                            var1 = _closure1_slot2;
                                            var0 = 14;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var1 = var5.bind(var0)(var1);
                                            var1 = var1.AdCreativeType;
                                            var1 = var1.QUEST;
                                            if (!(var3 !== var1)) {
                                                _fun47896_ip = 331;
                                                continue _fun47896
                                            }
                                        case 66:
                                            var9 = _closure3_slot0;
                                            var1 = var9.entity;
                                            var1 = var1.adContentIds;
                                            var10 = var1[var2];
                                            var3 = _closure1_slot0;
                                            var5 = _closure1_slot2;
                                            var1 = 15;
                                            var1 = var5[var1];
                                            var6 = var3.bind(var0)(var1);
                                            var1 = var6.getQuestLogger;
                                            var11 = var1.bind(var6)();
                                            var8 = var11.info;
                                            var1 = 10;
                                            var1 = var5[var1];
                                            var12 = var3.bind(var0)(var1);
                                            var6 = var12.getQuestContentName;
                                            var1 = var9.questContent;
                                            var13 = var6.bind(var12)(var1);
                                            var1 = global;
                                            var1 = var1.HermesInternal;
                                            var12 = var1.concat;
                                            var6 = '';
                                            var1 = ' ad content became visible at ';
                                            var6 = var12.bind(var6)(var10, var1, var13);
                                            var1 = {};
                                            var12 = var9.id;
                                            var1.impressionId = var12;
                                            var1 = var8.bind(var11)(var6, var1);
                                            var1 = 16;
                                            var1 = var5[var1];
                                            var5 = var3.bind(var0)(var1);
                                            var3 = var5.trackAdContentEvent;
                                            var1 = {};
                                            var17 = _closure4_slot0;
                                            var18 = var1;
                                            var8 = copyDataProperties(var18, var17);
                                            var8 = 'adContentId';
                                            var1[var8] = var10;
                                            var8 = var9.entity;
                                            var10 = var8.adCreativeType;
                                            var8 = 'adCreativeType';
                                            var1[var8] = var10;
                                            var8 = _closure1_slot11;
                                            var10 = var8.QUEST_CONTENT_LOADED;
                                            var8 = 'event';
                                            var1[var8] = var10;
                                            var8 = {};
                                            var17 = _closure4_slot1;
                                            var18 = var8;
                                            var6 = copyDataProperties(var18, var17);
                                            var6 = var9.commonProperties;
                                            var17 = var6.bind(var9)();
                                            var18 = var8;
                                            var6 = copyDataProperties(var18, var17);
                                            var6 = 'properties';
                                            var1[var6] = var8;
                                            var1 = var3.bind(var5)(var1);
                                            _fun47896_ip = 775;
                                            continue _fun47896;
                                        case 331:
                                            var1 = _closure3_slot0;
                                            var1 = var1.entity;
                                            var1 = var1.adContentIds;
                                            var13 = var1[var2];
                                            var2 = _closure1_slot7;
                                            var1 = var2.getQuest;
                                            var10 = var1.bind(var2)(var13);
                                            var2 = _closure1_slot0;
                                            var3 = _closure1_slot2;
                                            var1 = 15;
                                            var1 = var3[var1];
                                            var2 = var2.bind(var0)(var1);
                                            var1 = var2.getQuestLogger;
                                            var5 = var1.bind(var2)();
                                            var3 = var5.info;
                                            var6 = null;
                                            var2 = var6 == var10;
                                            var1 = undefined;
                                            if (var2) {
                                                _fun47896_ip = 430;
                                                continue _fun47896
                                            }
                                        case 413:
                                            var2 = var10.config;
                                            var2 = var2.messages;
                                            var1 = var2.questName;
                                        case 430:
                                            var15 = var13;
                                            if (!(var6 != var1)) {
                                                _fun47896_ip = 440;
                                                continue _fun47896
                                            }
                                        case 437:
                                            var15 = var1;
                                        case 440:
                                            var12 = _closure1_slot0;
                                            var11 = _closure1_slot2;
                                            var1 = 10;
                                            var1 = var11[var1];
                                            var9 = var12.bind(var0)(var1);
                                            var2 = var9.getQuestContentName;
                                            var8 = _closure3_slot0;
                                            var1 = var8.questContent;
                                            var14 = var2.bind(var9)(var1);
                                            var1 = global;
                                            var1 = var1.HermesInternal;
                                            var9 = var1.concat;
                                            var2 = '';
                                            var1 = ' Quest became visible at ';
                                            var2 = var9.bind(var2)(var15, var1, var14);
                                            var1 = {};
                                            var9 = var8.id;
                                            var1.impressionId = var9;
                                            var1 = var3.bind(var5)(var2, var1);
                                            var1 = 16;
                                            var1 = var11[var1];
                                            var3 = var12.bind(var0)(var1);
                                            var2 = var3.trackQuestEvent;
                                            var1 = {};
                                            var17 = _closure4_slot0;
                                            var18 = var1;
                                            var5 = copyDataProperties(var18, var17);
                                            var5 = 'questId';
                                            var1[var5] = var13;
                                            var5 = _closure1_slot11;
                                            var13 = var5.QUEST_CONTENT_LOADED;
                                            var5 = 'event';
                                            var1[var5] = var13;
                                            var5 = {};
                                            var17 = _closure4_slot1;
                                            var18 = var5;
                                            var9 = copyDataProperties(var18, var17);
                                            var9 = var8.commonProperties;
                                            var17 = var9.bind(var8)(var10);
                                            var18 = var5;
                                            var9 = copyDataProperties(var18, var17);
                                            var9 = 8;
                                            var11 = var11[var9];
                                            var13 = var12.bind(var0)(var11);
                                            var12 = var13.getAdTrafficMetadataRaw;
                                            var11 = var8.questContent;
                                            var14 = var6 == var10;
                                            var8 = undefined;
                                            if (var14) {
                                                _fun47896_ip = 660;
                                                continue _fun47896
                                            }
                                        case 655:
                                            var8 = var10.id;
                                        case 660:
                                            var8 = var12.bind(var13)(var11, var8);
                                            var12 = var6 != var8;
                                            var11 = null;
                                            if (!var12) {
                                                _fun47896_ip = 678;
                                                continue _fun47896
                                            }
                                        case 675:
                                            var11 = var8;
                                        case 678:
                                            var8 = 'traffic_metadata_raw';
                                            var5[var8] = var11;
                                            var8 = _closure1_slot0;
                                            var7 = _closure1_slot2;
                                            var7 = var7[var9];
                                            var9 = var8.bind(var0)(var7);
                                            var8 = var9.getAdTrafficMetadataSealed;
                                            var4 = _closure3_slot0;
                                            var7 = var4.questContent;
                                            var11 = var6 == var10;
                                            var4 = undefined;
                                            if (var11) {
                                                _fun47896_ip = 734;
                                                continue _fun47896
                                            }
                                        case 729:
                                            var4 = var10.id;
                                        case 734:
                                            var4 = var8.bind(var9)(var7, var4);
                                            var7 = var6 != var4;
                                            var6 = null;
                                            if (!var7) {
                                                _fun47896_ip = 752;
                                                continue _fun47896
                                            }
                                        case 749:
                                            var6 = var4;
                                        case 752:
                                            var4 = 'traffic_metadata_sealed';
                                            var5[var4] = var6;
                                            var4 = 'properties';
                                            var1[var4] = var5;
                                            var1 = var2.bind(var3)(var1);
                                        case 775:
                                            return var0;
                                    }
                                };
                                var2 = var3.bind(var4)(var2);
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 17;
                                var2 = var4[var2];
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.isEligibleForQuestsClientMonitoring;
                                var2 = 'QuestImpressionTracker';
                                var2 = var3.bind(var4)(var2);
                                if (!var2) {
                                    _fun47894_ip = 483;
                                    continue _fun47894
                                }
                            case 350:
                                var3 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var2 = 18;
                                var2 = var8[var2];
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.increment;
                                var2 = {};
                                var7 = _closure1_slot0;
                                var6 = 19;
                                var6 = var8[var6];
                                var6 = var7.bind(var0)(var6);
                                var6 = var6.MetricEvents;
                                var6 = var6.QUEST_CONTENT_IMPRESSION;
                                var2.name = var6;
                                var6 = 10;
                                var6 = var8[var6];
                                var8 = var7.bind(var0)(var6);
                                var7 = var8.getQuestContentName;
                                var6 = _closure3_slot0;
                                var6 = var6.questContent;
                                var7 = var7.bind(var8)(var6);
                                var5 = var5.HermesInternal;
                                var6 = var5.concat;
                                var5 = 'quest_content:';
                                var6 = var6.bind(var5)(var7);
                                var5 = new Array(1);
                                var5[0] = var6;
                                var2.tags = var5;
                                var2 = var3.bind(var4)(var2);
                            case 483:
                                var2 = _closure3_slot0;
                                var1 = true;
                                var2.isRunning = var1;
                                return var0;
                        }
                    };
                    var2.start = var4;
                    var3 = function() { // Environment: var3
                        _fun47897: for (var _fun47897_ip = 0;;) switch (_fun47897_ip) {
                            case 0:
                                var1 = arguments[0];
                                var0 = undefined;
                                if (!(var1 === var0)) {
                                    _fun47897_ip = 11;
                                    continue _fun47897
                                }
                            case 9:
                                var1 = true;
                            case 11:
                                if (!var1) {
                                    _fun47897_ip = 34;
                                    continue _fun47897
                                }
                            case 14:
                                var3 = _closure3_slot0;
                                var2 = var3.beat;
                                var1 = true;
                                var1 = var2.bind(var3)(var1);
                            case 34:
                                var2 = _closure3_slot0;
                                var2.lastBeatTime = var0;
                                var1 = global;
                                var4 = var1.clearInterval;
                                var3 = var2.heartbeatTimeoutId;
                                var3 = var4.bind(var0)(var3);
                                var3 = var1.clearTimeout;
                                var1 = var2.minViewTimeReachedTimeoutId;
                                var1 = var3.bind(var0)(var1);
                                var1 = false;
                                var2.isRunning = var1;
                                return var0;
                        }
                    };
                    var2.stop = var3;
                    var4 = var1.adContentIds;
                    var3 = var1.adCreativeType;
                    var14 = var1.questContent;
                    var9 = var1.triggeredByStatusChange;
                    var10 = var1.trackGuildAndChannelMetadata;
                    var13 = var1.questContentPosition;
                    var8 = var1.questContentRowIndex;
                    var12 = var1.minViewTimeSeconds;
                    if (!(var0 === var12)) {
                        _fun47884_ip = 199;
                        continue _fun47884
                    }
                case 195:
                    var12 = _closure1_slot9;
                case 199:
                    var7 = var1.isQuestEnrollmentBlocked;
                    var1 = var1.sourceQuestContent;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var15 = 20;
                    var15 = var6[var15];
                    var16 = var5.bind(var0)(var15);
                    var15 = var16.v4;
                    var15 = var15.bind(var16)();
                    var2.id = var15;
                    var2.questContent = var14;
                    var2.questContentPosition = var13;
                    var2.minViewTimeSeconds = var12;
                    var11 = _closure1_slot10;
                    var2.minViewportPercentage = var11;
                    var2.trackGuildAndChannelMetadata = var10;
                    var2.triggeredByStatusChange = var9;
                    var2.questContentRowIndex = var8;
                    var2.isQuestEnrollmentBlocked = var7;
                    var2.sourceQuestContent = var1;
                    var1 = 14;
                    var1 = var6[var1];
                    var1 = var5.bind(var0)(var1);
                    var1 = var1.AdCreativeType;
                    var1 = var1.QUEST;
                    var1 = {};
                    var1.adContentIds = var4;
                    var1.adCreativeType = var3;
                    var2.entity = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'getId';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0.id;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'getQuestContentPosition';
        var0.key = var5;
        var4 = function() {
            var0 = this;
            var0 = var0.questContentPosition;
            return var0;
        };
        var0.value = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var4 = var3.bind(var0)();
    var _closure1_slot14 = var4;
    var3 = var5.createContext;
    var3 = var3.bind(var5)(var0);
    var _closure1_slot15 = var3;
    var5 = 24;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/lib/analytics/ContentImpressionTracker.tsx';
    var5 = var6.bind(var7)(var5);
    var2.QuestContentImpression = var4;
    var2.QuestImpressionContext = var3;
    var1 = function arg0() {
        var7 = arg0;
        var _closure2_slot0 = var7;
        var14 = var7.visible;
        var _closure2_slot1 = var14;
        var12 = var7.visibleChanged;
        var _closure2_slot2 = var12;
        var15 = var7.focused;
        var _closure2_slot3 = var15;
        var6 = var7.reference;
        var13 = var7.focusedChanged;
        var _closure2_slot4 = var13;
        var9 = var7.sourceQuestContent;
        var _closure2_slot5 = var9;
        var4 = _closure1_slot0;
        var16 = _closure1_slot2;
        var2 = 21;
        var2 = var16[var2];
        var3 = undefined;
        var5 = var4.bind(var3)(var2);
        var2 = var5.useQuestStatusChanged;
        var11 = var2.bind(var5)(var7);
        var _closure2_slot6 = var11;
        var8 = _closure1_slot6;
        var5 = var8.useRef;
        var2 = null;
        var5 = var5.bind(var8)(var2);
        var _closure2_slot7 = var5;
        var2 = 22;
        var2 = var16[var2];
        var18 = var4.bind(var3)(var2);
        var17 = var18.useStateFromStores;
        var2 = _closure1_slot7;
        var10 = new Array(1);
        var10[0] = var2;
        var4 = function() { // Environment: var1
            var0 = _closure1_slot7;
            var1 = var0.questEnrollmentBlockedUntil;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var2 = new Array(0);
        var10 = var17.bind(var18)(var10, var4, var2);
        var _closure2_slot8 = var10;
        var4 = _closure1_slot1;
        var2 = 23;
        var2 = var16[var2];
        var4 = var4.bind(var3)(var2);
        var2 = function() { // Environment: var1
            var0 = function() { // Environment: var0
                _fun47903: for (var _fun47903_ip = 0;;) switch (_fun47903_ip) {
                    case 0:
                        var1 = _closure2_slot7;
                        var2 = var1.current;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun47903_ip = 37;
                            continue _fun47903
                        }
                    case 18:
                        var0 = _closure2_slot7;
                        var1 = var0.current;
                        var0 = var1.stop;
                        var0 = var0.bind(var1)();
                    case 37:
                        var0 = undefined;
                        return var0;
                }
            };
            return var0;
        };
        var2 = var4.bind(var3)(var2);
        var4 = var8.useEffect;
        var2 = new Array(14);
        var2[0] = var15;
        var2[1] = var14;
        var2[2] = var13;
        var2[3] = var12;
        var12 = var7.adContentIds;
        var2[4] = var12;
        var12 = var7.questContent;
        var2[5] = var12;
        var12 = var7.questContentPosition;
        var2[6] = var12;
        var12 = var7.questContentRowIndex;
        var2[7] = var12;
        var12 = var7.trackGuildAndChannelMetadata;
        var2[8] = var12;
        var2[9] = var11;
        var11 = var7.minViewTimeSeconds;
        var2[10] = var11;
        var2[11] = var10;
        var2[12] = var9;
        var9 = var7.adCreativeType;
        var2[13] = var9;
        var1 = function() { // Environment: var1
            _fun47904: for (var _fun47904_ip = 0;;) switch (_fun47904_ip) {
                case 0:
                    var4 = _closure2_slot3;
                    if (!var4) {
                        _fun47904_ip = 14;
                        continue _fun47904
                    }
                case 10:
                    var4 = _closure2_slot1;
                case 14:
                    var1 = _closure2_slot2;
                    if (var1) {
                        _fun47904_ip = 25;
                        continue _fun47904
                    }
                case 21:
                    var1 = _closure2_slot4;
                case 25:
                    if (var1) {
                        _fun47904_ip = 32;
                        continue _fun47904
                    }
                case 28:
                    var1 = _closure2_slot6;
                case 32:
                    if (!var1) {
                        _fun47904_ip = 38;
                        continue _fun47904
                    }
                case 35:
                    var1 = var4;
                case 38:
                    var2 = var1;
                    if (var2) {
                        _fun47904_ip = 64;
                        continue _fun47904
                    }
                case 44:
                    var3 = _closure2_slot2;
                    if (var3) {
                        _fun47904_ip = 55;
                        continue _fun47904
                    }
                case 51:
                    var3 = _closure2_slot4;
                case 55:
                    if (!var3) {
                        _fun47904_ip = 61;
                        continue _fun47904
                    }
                case 58:
                    var3 = !var4;
                case 61:
                    var2 = var3;
                case 64:
                    if (var2) {
                        _fun47904_ip = 71;
                        continue _fun47904
                    }
                case 67:
                    var2 = _closure2_slot6;
                case 71:
                    if (!var2) {
                        _fun47904_ip = 89;
                        continue _fun47904
                    }
                case 74:
                    var3 = _closure2_slot7;
                    var4 = var3.current;
                    var3 = null;
                    var2 = var3 != var4;
                case 89:
                    if (!var2) {
                        _fun47904_ip = 111;
                        continue _fun47904
                    }
                case 92:
                    var2 = _closure2_slot7;
                    var3 = var2.current;
                    var2 = var3.stop;
                    var2 = var2.bind(var3)();
                case 111:
                    if (!var1) {
                        _fun47904_ip = 341;
                        continue _fun47904
                    }
                case 117:
                    var4 = {};
                    var1 = _closure2_slot8;
                    var4.isQuestEnrollmentBlocked = var1;
                    var2 = _closure2_slot0;
                    var1 = var2.minViewTimeSeconds;
                    var4.minViewTimeSeconds = var1;
                    var1 = var2.questContent;
                    var4.questContent = var1;
                    var1 = var2.questContentPosition;
                    var4.questContentPosition = var1;
                    var1 = var2.questContentRowIndex;
                    var4.questContentRowIndex = var1;
                    var1 = _closure2_slot5;
                    var4.sourceQuestContent = var1;
                    var1 = var2.trackGuildAndChannelMetadata;
                    var4.trackGuildAndChannelMetadata = var1;
                    var1 = _closure2_slot6;
                    var4.triggeredByStatusChange = var1;
                    var1 = var2.adCreativeType;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 14;
                    var5 = var5[var3];
                    var3 = undefined;
                    var3 = var6.bind(var3)(var5);
                    var3 = var3.AdCreativeType;
                    var3 = var3.QUEST;
                    var0 = _closure2_slot7;
                    var3 = _closure1_slot14;
                    var1 = {};
                    var8 = var1;
                    var7 = var4;
                    var4 = copyDataProperties(var8, var7);
                    var5 = var2.adContentIds;
                    var4 = 'adContentIds';
                    var1[var4] = var5;
                    var4 = var2.adCreativeType;
                    var2 = 'adCreativeType';
                    var1[var2] = var4;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var9 = var2;
                    var8 = var1;
                    var1 = new var9[var3](var8, var7);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var0.current = var1;
                    var1 = var0.current;
                    var0 = var1.start;
                    var0 = var0.bind(var1)();
                case 341:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var4.bind(var8)(var1, var2);
        var2 = _closure1_slot12;
        var0 = _closure1_slot15;
        var1 = var0.Provider;
        var0 = {};
        var0.value = var5;
        var4 = var7.children;
        var4 = var4.bind(var7)(var6, var5);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.QuestContentImpressionTracker = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 31, 5278, 5360, 660, 33, 5290, 5324, 5329, 478, 5330, 5361, 5357, 5292, 5313, 5363, 4263, 4268, 491, 5356, 566, 4103, 2]);