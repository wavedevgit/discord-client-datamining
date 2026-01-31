// modules/quests/lib/analytics/AnalyticsActions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var0 = function arg0, arg1() {
        _fun46859: for (var _fun46859_ip = 0;;) switch (_fun46859_ip) {
            case 0:
                var1 = arg0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 6;
                var0 = var3[var0];
                var3 = undefined;
                var0 = var4.bind(var3)(var0);
                var5 = var0.AdSessionIdExperiment;
                var4 = var5.getConfig;
                var0 = {};
                var6 = 'quest_analytics';
                var0.location = var6;
                var4 = var4.bind(var5)(var0);
                var0 = arg1;
                if (var0) {
                    _fun46859_ip = 124;
                    continue _fun46859
                }
            case 63:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 7;
                var0 = var6[var0];
                var5 = var5.bind(var3)(var0);
                var0 = var5.getActiveSessionUnsafe;
                var6 = var0.bind(var5)();
                var0 = null;
                var7 = var0 == var6;
                var5 = undefined;
                if (var7) {
                    _fun46859_ip = 110;
                    continue _fun46859
                }
            case 104:
                var5 = var6.uuid;
            case 110:
                var6 = var0 != var5;
                var0 = null;
                if (!var6) {
                    _fun46859_ip = 122;
                    continue _fun46859
                }
            case 119:
                var0 = var5;
            case 122:
                _fun46859_ip = 198;
                continue _fun46859;
            case 124:
                var4 = var4.use_ad_session_id;
                if (var4) {
                    _fun46859_ip = 195;
                    continue _fun46859
                }
            case 133:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 7;
                var2 = var5[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.getActiveSessionUnsafe;
                var4 = var2.bind(var4)();
                var2 = null;
                var5 = var2 == var4;
                var3 = undefined;
                if (var5) {
                    _fun46859_ip = 180;
                    continue _fun46859
                }
            case 174:
                var3 = var4.uuid;
            case 180:
                var4 = var2 != var3;
                var2 = null;
                if (!var4) {
                    _fun46859_ip = 192;
                    continue _fun46859
                }
            case 189:
                var2 = var3;
            case 192:
                var1 = var2;
            case 195:
                var0 = var1;
            case 198:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0, arg1, arg2() {
        var4 = arg1;
        var3 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 8;
        var0 = var5[var0];
        var2 = undefined;
        var7 = var3.bind(var2)(var0);
        var6 = var7.getOrRefreshAdSession;
        var0 = arg2;
        var0 = var6.bind(var7)(var0);
        var8 = var0.uuid;
        var0 = {};
        var0.client_ad_session_id = var8;
        var7 = _closure1_slot11;
        var1 = 9;
        var6 = var5[var1];
        var9 = var3.bind(var2)(var6);
        var6 = var9.isBillableQuestContent;
        var6 = var6.bind(var9)(var4);
        var6 = var7.bind(var2)(var8, var6);
        var0.billing_session_id = var6;
        var1 = var5[var1];
        var3 = var3.bind(var2)(var1);
        var2 = var3.getAdDecisionData;
        var1 = arg0;
        var10 = var2.bind(var3)(var1, var4);
        var11 = var0;
        var1 = copyDataProperties(var11, var10);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun46861: for (var _fun46861_ip = 0;;) switch (_fun46861_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var2 = var1.id;
                var0.quest_id = var2;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 10;
                var3 = var6[var3];
                var5 = undefined;
                var8 = var4.bind(var5)(var3);
                var7 = var8.getQuestType;
                var3 = var1.config;
                var3 = var7.bind(var8)(var3);
                var0.quest_type = var3;
                var3 = var1.config;
                var3 = var3.application;
                var3 = var3.id;
                var0.game_id = var3;
                var3 = var1.config;
                var3 = var3.application;
                var3 = var3.name;
                var0.game_name = var3;
                var3 = 11;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.getAllApplicationIds;
                var3 = var3.bind(var4)(var1);
                var4 = null;
                if (!(var4 == var3)) {
                    _fun46861_ip = 136;
                    continue _fun46861
                }
            case 132:
                var3 = new Array(0);
            case 136:
                var0.application_ids = var3;
                var4 = _closure1_slot12;
                var3 = var1.id;
                var2 = arg1;
                var1 = arg2;
                var10 = var4.bind(var5)(var3, var2, var1);
                var11 = var0;
                var1 = copyDataProperties(var11, var10);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        var5 = arg0;
        var0 = {};
        var0.ad_content_id = var5;
        var1 = arg1;
        var0.creative_type = var1;
        var4 = _closure1_slot12;
        var3 = undefined;
        var2 = arg2;
        var1 = arg3;
        var7 = var4.bind(var3)(var5, var2, var1);
        var8 = var0;
        var1 = copyDataProperties(var8, var7);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function arg0, arg1() {
        _fun46863: for (var _fun46863_ip = 0;;) switch (_fun46863_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var1 = arguments[2];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun46863_ip = 17;
                    continue _fun46863
                }
            case 15:
                var1 = false;
            case 17:
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 12;
                var2 = var7[var2];
                var7 = var3.bind(var0)(var2);
                var3 = var7.isQuestPreviewToolEnabled;
                var2 = {};
                var8 = _closure1_slot7;
                var8 = var8.QUEST_PREVIEW_TOOL;
                var2.location = var8;
                var2 = var3.bind(var7)(var2);
                if (!var2) {
                    _fun46863_ip = 109;
                    continue _fun46863
                }
            case 70:
                var3 = _closure1_slot5;
                var2 = var3.getLayers;
                var7 = var2.bind(var3)();
                var3 = var7.includes;
                var2 = _closure1_slot9;
                var2 = var2.USER_SETTINGS;
                var2 = var3.bind(var7)(var2);
                if (var2) {
                    _fun46863_ip = 210;
                    continue _fun46863
                }
            case 109:
                var2 = _closure1_slot4;
                var2 = var2.isLoggingAnalyticsEvents;
                var2 = arguments[3];
                if (var2) {
                    _fun46863_ip = 210;
                    continue _fun46863
                }
            case 125:
                var3 = _closure1_slot10;
                var2 = var3.has;
                var3 = var2.bind(var3)(var5);
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                if (var1) {
                    _fun46863_ip = 183;
                    continue _fun46863
                }
            case 150:
                var1 = 14;
                var1 = var6[var1];
                var8 = var2.bind(var0)(var1);
                var7 = var8.track;
                var1 = {};
                var1.flush = var3;
                var1 = var7.bind(var8)(var5, var4, var1);
                _fun46863_ip = 210;
                continue _fun46863;
            case 183:
                var1 = 13;
                var1 = var6[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.trackWithMetadata;
                var1 = var1.bind(var2)(var5, var4, var3);
                return var1;
            case 210:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var4 = function arg0() {
        _fun46864: for (var _fun46864_ip = 0;;) switch (_fun46864_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.questId;
                var5 = var1.event;
                var6 = var1.properties;
                var4 = var1.trackGuildAndChannelMetadata;
                var9 = var1.shouldExtendSession;
                var0 = undefined;
                if (!(var9 === var0)) {
                    _fun46864_ip = 41;
                    continue _fun46864
                }
            case 39:
                var9 = false;
            case 41:
                var8 = var1.sourceQuestContent;
                var1 = _closure1_slot6;
                var2 = var1.quests;
                var1 = var2.get;
                var1 = var1.bind(var2)(var3);
                var2 = null;
                if (!(var2 != var1)) {
                    _fun46864_ip = 131;
                    continue _fun46864
                }
            case 76:
                var3 = _closure1_slot15;
                var2 = {};
                var7 = _closure1_slot13;
                var12 = var7.bind(var0)(var1, var8, var9);
                var13 = var2;
                var7 = copyDataProperties(var13, var12);
                var13 = var2;
                var12 = var6;
                var6 = copyDataProperties(var13, var12);
                var10 = var1.preview;
                var14 = undefined;
                var13 = var5;
                var12 = var2;
                var11 = var4;
                var1 = var14[var3](var13, var12, var11, var10, var9);
            case 131:
                return var0;
        }
    };
    var _closure1_slot16 = var4;
    var3 = function arg0() {
        _fun46865: for (var _fun46865_ip = 0;;) switch (_fun46865_ip) {
            case 0:
                var2 = arg0;
                var10 = var2.adContentId;
                var9 = var2.adCreativeType;
                var5 = var2.event;
                var1 = var2.properties;
                var4 = var2.trackGuildAndChannelMetadata;
                var8 = var2.shouldExtendSession;
                var0 = undefined;
                if (!(var8 === var0)) {
                    _fun46865_ip = 47;
                    continue _fun46865
                }
            case 45:
                var8 = false;
            case 47:
                var12 = var2.sourceQuestContent;
                var3 = _closure1_slot15;
                var2 = {};
                var6 = _closure1_slot14;
                var15 = undefined;
                var14 = var10;
                var13 = var9;
                var11 = var8;
                var13 = var15[var6](var14, var13, var12, var11, var10);
                var14 = var2;
                var6 = copyDataProperties(var14, var13);
                var14 = var2;
                var13 = var1;
                var1 = copyDataProperties(var14, var13);
                var11 = false;
                var15 = undefined;
                var14 = var5;
                var13 = var2;
                var12 = var4;
                var1 = var15[var3](var14, var13, var12, var11, var10);
                return var0;
        }
    };
    var _closure1_slot17 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun46868: for (var _fun46868_ip = 0;;) switch (_fun46868_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun46868_ip = 156;
                            continue _fun46868
                        }
                    case 13:
                        var2 = {};
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 15;
                        var1 = var9[var1];
                        var6 = undefined;
                        var7 = var8.bind(var6)(var1);
                        var4 = var7.getAdUser;
                        var1 = 16;
                        var1 = var9[var1];
                        var8 = var8.bind(var6)(var1);
                        var1 = var8.getQuestContentName;
                        var1 = var1.bind(var8)(var5);
                        var1 = var4.bind(var7)(var1);
                        SaveGenerator(address = 78);
                    case 76:
                        return var1;
                    case 78:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun46868_ip = 153;
                            continue _fun46868
                        }
                    case 84:
                        var2.adUser = var1;
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 9;
                        var8 = var7[var3];
                        var9 = var4.bind(var6)(var8);
                        var8 = var9.getAdMetadataRaw;
                        var8 = var8.bind(var9)(var5);
                        var2.adMetadataRaw = var8;
                        var3 = var7[var3];
                        var4 = var4.bind(var6)(var3);
                        var3 = var4.getAdMetadataSealed;
                        var3 = var3.bind(var4)(var5);
                        var2.adMetadataSealed = var3;
                        return var2;
                    case 153:
                        return var1;
                    case 156:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot18 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot20;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun46872: for (var _fun46872_ip = 0;;) switch (_fun46872_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun46872_ip = 405;
                            continue _fun46872
                        }
                    case 13:
                        var16 = var1.questContent;
                        var15 = var1.questContentPosition;
                        var14 = var1.questContentRowIndex;
                        var11 = var1.questContentCTA;
                        var10 = var1.impressionId;
                        var9 = undefined;
                        SaveGenerator(address = 49);
                    case 47:
                        return var9;
                    case 49:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun46872_ip = 402;
                            continue _fun46872
                        }
                    case 58:
                        var2 = function() {
                            var0 = undefined;
                            var3 = _closure1_slot18;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var2 = var2.bind(var9)(var16);
                        SaveGenerator(address = 74);
                    case 72:
                        return var2;
                    case 74:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun46872_ip = 399;
                            continue _fun46872
                        }
                    case 83:
                        var8 = var2.adUser;
                        var6 = var2.adMetadataRaw;
                        var4 = var2.adMetadataSealed;
                        var3 = {};
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var5 = 16;
                        var5 = var13[var5];
                        var12 = var12.bind(var9)(var5);
                        var5 = var12.getContentProperties;
                        var18 = var5.bind(var12)(var16, var15, var14);
                        var19 = var3;
                        var5 = copyDataProperties(var19, var18);
                        var12 = _closure1_slot1;
                        var5 = 17;
                        var5 = var13[var5];
                        var5 = var12.bind(var9)(var5);
                        var18 = var5.bind(var9)();
                        var19 = var3;
                        var5 = copyDataProperties(var19, var18);
                        var5 = 'cta_name';
                        var3[var5] = var11;
                        var5 = 'impression_id';
                        var3[var5] = var10;
                        var5 = null;
                        var10 = var5 != var8;
                        var11 = null;
                        if (!var10) {
                            _fun46872_ip = 243;
                            continue _fun46872
                        }
                    case 202:
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var10 = 18;
                        var10 = var13[var10];
                        var12 = var12.bind(var9)(var10);
                        var10 = var12.isIOS;
                        var10 = var10.bind(var12)();
                        var11 = null;
                        if (!var10) {
                            _fun46872_ip = 243;
                            continue _fun46872
                        }
                    case 237:
                        var11 = var8.advertisingId;
                    case 243:
                        var10 = 'apple_advertising_id';
                        var3[var10] = var11;
                        var11 = var5 != var8;
                        var10 = null;
                        if (!var11) {
                            _fun46872_ip = 304;
                            continue _fun46872
                        }
                    case 263:
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var11 = 18;
                        var11 = var13[var11];
                        var12 = var12.bind(var9)(var11);
                        var11 = var12.isAndroid;
                        var11 = var11.bind(var12)();
                        var10 = null;
                        if (!var11) {
                            _fun46872_ip = 304;
                            continue _fun46872
                        }
                    case 298:
                        var10 = var8.advertisingId;
                    case 304:
                        var8 = 'android_advertising_id';
                        var3[var8] = var10;
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 19;
                        var7 = var10[var7];
                        var8 = var8.bind(var9)(var7);
                        var7 = var8.v4;
                        var8 = var7.bind(var8)();
                        var7 = 'click_id';
                        var3[var7] = var8;
                        var8 = var5 != var6;
                        var7 = null;
                        if (!var8) {
                            _fun46872_ip = 366;
                            continue _fun46872
                        }
                    case 363:
                        var7 = var6;
                    case 366:
                        var6 = 'metadata_raw';
                        var3[var6] = var7;
                        var6 = var5 != var4;
                        var5 = null;
                        if (!var6) {
                            _fun46872_ip = 387;
                            continue _fun46872
                        }
                    case 384:
                        var5 = var4;
                    case 387:
                        var4 = 'metadata_sealed';
                        var3[var4] = var5;
                        return var3;
                    case 399:
                        return var2;
                    case 402:
                        return var1;
                    case 405:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot20 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun46876: for (var _fun46876_ip = 0;;) switch (_fun46876_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun46876_ip = 391;
                            continue _fun46876
                        }
                    case 13:
                        var2 = var1.questId;
                        var9 = var1.questContent;
                        var16 = var1.questContentCTA;
                        var19 = var1.questContentPosition;
                        var17 = var1.questContentRowIndex;
                        var15 = var1.impressionId;
                        var8 = var1.trackGuildAndChannelMetadata;
                        var6 = var1.sourceQuestContent;
                        var3 = undefined;
                        SaveGenerator(address = 67);
                    case 65:
                        return var3;
                    case 67:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun46876_ip = 388;
                            continue _fun46876
                        }
                    case 76:
                        var5 = _closure1_slot6;
                        var4 = var5.getQuest;
                        var18 = var4.bind(var5)(var2);
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var10 = 9;
                        var11 = var4[var10];
                        var12 = var5.bind(var3)(var11);
                        var11 = var12.getAdTrafficMetadataRaw;
                        var14 = var11.bind(var12)(var9, var2);
                        var4 = var4[var10];
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.getAdTrafficMetadataSealed;
                        var12 = var4.bind(var5)(var9, var2);
                        var5 = _closure1_slot16;
                        var4 = {};
                        var4.questId = var2;
                        var2 = _closure1_slot8;
                        var2 = var2.QUEST_CONTENT_CLICKED;
                        var4.event = var2;
                        var11 = {};
                        var13 = _closure1_slot19;
                        var2 = {};
                        var2.questContent = var9;
                        var2.questContentPosition = var19;
                        var2.questContentRowIndex = var17;
                        var2.questContentCTA = var16;
                        var2.impressionId = var15;
                        var2 = var13.bind(var3)(var2);
                        SaveGenerator(address = 215);
                    case 213:
                        return var2;
                    case 215:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 13);
                        if (var13) {
                            _fun46876_ip = 385;
                            continue _fun46876
                        }
                    case 224:
                        var22 = var11;
                        var21 = var2;
                        var13 = copyDataProperties(var22, var21);
                        var13 = null;
                        var15 = var13 != var18;
                        var16 = null;
                        if (!var15) {
                            _fun46876_ip = 276;
                            continue _fun46876
                        }
                    case 245:
                        var17 = _closure1_slot0;
                        var19 = _closure1_slot2;
                        var15 = 16;
                        var15 = var19[var15];
                        var17 = var17.bind(var3)(var15);
                        var15 = var17.getQuestStatus;
                        var16 = var15.bind(var17)(var18);
                    case 276:
                        var15 = 'quest_status';
                        var11[var15] = var16;
                        var16 = var13 != var14;
                        var15 = null;
                        if (!var16) {
                            _fun46876_ip = 299;
                            continue _fun46876
                        }
                    case 296:
                        var15 = var14;
                    case 299:
                        var14 = 'traffic_metadata_raw';
                        var11[var14] = var15;
                        var14 = var13 != var12;
                        var13 = null;
                        if (!var14) {
                            _fun46876_ip = 320;
                            continue _fun46876
                        }
                    case 317:
                        var13 = var12;
                    case 320:
                        var12 = 'traffic_metadata_sealed';
                        var11[var12] = var13;
                        var4.properties = var11;
                        var4.trackGuildAndChannelMetadata = var8;
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var7 = var7[var10];
                        var8 = var8.bind(var3)(var7);
                        var7 = var8.isBillableQuestContent;
                        var7 = var7.bind(var8)(var9);
                        var4.shouldExtendSession = var7;
                        var4.sourceQuestContent = var6;
                        var4 = var5.bind(var3)(var4);
                        return var3;
                    case 385:
                        return var2;
                    case 388:
                        return var1;
                    case 391:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot21 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun46879: for (var _fun46879_ip = 0;;) switch (_fun46879_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun46879_ip = 227;
                            continue _fun46879
                        }
                    case 13:
                        var10 = var1.adContentId;
                        var2 = var1.adCreativeType;
                        var9 = var1.questContent;
                        var12 = var1.questContentCTA;
                        var14 = var1.questContentPosition;
                        var13 = var1.questContentRowIndex;
                        var11 = var1.impressionId;
                        var8 = var1.trackGuildAndChannelMetadata;
                        var6 = var1.sourceQuestContent;
                        var3 = undefined;
                        SaveGenerator(address = 73);
                    case 71:
                        return var3;
                    case 73:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun46879_ip = 224;
                            continue _fun46879
                        }
                    case 82:
                        var5 = _closure1_slot17;
                        var4 = {};
                        var4.adContentId = var10;
                        var4.adCreativeType = var2;
                        var2 = _closure1_slot8;
                        var2 = var2.QUEST_CONTENT_CLICKED;
                        var4.event = var2;
                        var10 = _closure1_slot19;
                        var2 = {};
                        var2.questContent = var9;
                        var2.questContentPosition = var14;
                        var2.questContentRowIndex = var13;
                        var2.questContentCTA = var12;
                        var2.impressionId = var11;
                        var2 = var10.bind(var3)(var2);
                        SaveGenerator(address = 156);
                    case 154:
                        return var2;
                    case 156:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 10);
                        if (var10) {
                            _fun46879_ip = 221;
                            continue _fun46879
                        }
                    case 162:
                        var4.properties = var2;
                        var4.trackGuildAndChannelMetadata = var8;
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 9;
                        var7 = var10[var7];
                        var8 = var8.bind(var3)(var7);
                        var7 = var8.isBillableQuestContent;
                        var7 = var7.bind(var8)(var9);
                        var4.shouldExtendSession = var7;
                        var4.sourceQuestContent = var6;
                        var4 = var5.bind(var3)(var4);
                        return var3;
                    case 221:
                        return var2;
                    case 224:
                        return var1;
                    case 227:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot22 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot22 = var0;
    var5 = global;
    var11 = var5.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var8);
    var0 = 0;
    var8 = var7[var0];
    var0 = undefined;
    var8 = var9.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var7[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var7[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var7[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var7[var8];
    var8 = var6.bind(var0)(var8);
    var8 = var8.QuestsExperimentLocations;
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var7[var8];
    var9 = var6.bind(var0)(var8);
    var8 = var9.AnalyticEvents;
    var _closure1_slot8 = var8;
    var9 = var9.Layers;
    var _closure1_slot9 = var9;
    var9 = var5.Set;
    var10 = var8.QUEST_CONTENT_VIEWED;
    var5 = new Array(2);
    var5[0] = var10;
    var8 = var8.QUEST_CONTENT_CLICKED;
    var5[1] = var8;
    var8 = var9.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var9
        }
    });
    var15 = var8;
    var14 = var5;
    var5 = new var15[var9](var14, var13);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot10 = var5;
    var5 = 20;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/lib/analytics/AnalyticsActions.tsx';
    var5 = var6.bind(var7)(var5);
    var2.trackQuestEvent = var4;
    var2.trackAdContentEvent = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot21;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.trackQuestContentClicked = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot22;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.trackAdContentClicked = var3;
    var3 = function arg0() {
        var0 = arg0;
        var7 = var0.questContent;
        var3 = var0.sourceQuestContent;
        var8 = var0.questId;
        var6 = var0.mode;
        var5 = var0.prevMode;
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 16;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getContentProperties;
        var7 = var1.bind(var2)(var7);
        var2 = _closure1_slot16;
        var1 = {};
        var1.questId = var8;
        var4 = _closure1_slot8;
        var4 = var4.QUEST_BAR_MODE_CHANGED;
        var1.event = var4;
        var4 = {};
        var8 = var7.content_id;
        var4.content_id = var8;
        var7 = var7.content_name;
        var4.content_name = var7;
        var4.mode = var6;
        var4.previous_mode = var5;
        var1.properties = var4;
        var1.sourceQuestContent = var3;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var2.trackQuestBarOrDockModeChange = var3;
    var1 = function arg0, arg1() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 13;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot8;
        var2 = var1.QUEST_EMBED_FALLBACK_VIEWED;
        var1 = {};
        var5 = arg0;
        var1.quest_id = var5;
        var5 = arg1;
        var1.reason = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackQuestEmbedFallbackViewed = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 803, 5225, 5189, 5191, 660, 5226, 4278, 5227, 5201, 5228, 5229, 5233, 4266, 795, 5234, 5239, 5240, 478, 491, 2]);