// modules/user_profile/native/BotUserProfileOverflowMenu.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot8 = var6;
    var6 = var3.ApplicationFlags;
    var _closure1_slot9 = var6;
    var3 = var3.RelationshipTypes;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.BLOCK_CONFIRMATION_ACTION_SHEET_KEY;
    var _closure1_slot11 = var6;
    var3 = var3.IGNORE_CONFIRMATION_ACTION_SHEET_KEY;
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot13 = var3;
    var3 = 39;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/BotUserProfileOverflowMenu.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: BotUserProfileOverflowMenu, environment: var1
        _fun92244: for (var _fun92244_ip = 0;;) switch (_fun92244_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.application;
                var _closure2_slot0 = var13;
                var11 = var0.user;
                var _closure2_slot1 = var11;
                var3 = var0.channel;
                var _closure2_slot2 = var3;
                var4 = undefined;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var _closure2_slot12 = var4;
                var _closure2_slot13 = var4;
                var1 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 8;
                var5 = var15[var0];
                var9 = var1.bind(var4)(var5);
                var8 = var9.useStateFromStoresObject;
                var5 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var7
                    var0 = {};
                    var3 = _closure1_slot5;
                    var4 = var3.getRelationshipType;
                    var1 = _closure2_slot1;
                    var2 = var1.id;
                    var2 = var4.bind(var3)(var2);
                    var0.relationshipType = var2;
                    var2 = var3.isIgnored;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0.isIgnored = var1;
                    return var0;
                };
                var5 = var8.bind(var9)(var6, var5);
                var14 = var5.relationshipType;
                var12 = var5.isIgnored;
                var0 = var15[var0];
                var8 = var1.bind(var4)(var0);
                var6 = var8.useStateFromStores;
                var0 = _closure1_slot6;
                var5 = new Array(2);
                var5[0] = var0;
                var0 = _closure1_slot4;
                var5[1] = var0;
                var0 = function() { // Environment: var7
                    var2 = _closure1_slot4;
                    var1 = var2.getChannel;
                    var3 = _closure1_slot6;
                    var0 = var3.getChannelId;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var6.bind(var8)(var5, var0);
                var _closure2_slot3 = var6;
                var0 = 9;
                var0 = var15[var0];
                var8 = var1.bind(var4)(var0);
                var5 = var8.isIarUserReportingEnabled;
                var0 = 'User Profile Options - Mobile';
                var8 = var5.bind(var8)(var0);
                var0 = 10;
                var0 = var15[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.useUserProfileAnalyticsContext;
                var0 = var0.bind(var1)();
                var9 = var0.context;
                var _closure2_slot4 = var9;
                var0 = var0.trackUserProfileAction;
                var _closure2_slot5 = var0;
                var10 = _closure1_slot1;
                var1 = 11;
                var0 = var15[var1];
                var5 = var10.bind(var4)(var0);
                var0 = 12;
                var0 = var15[var0];
                var0 = var10.bind(var4)(var0);
                var0 = var0.USER_PROFILE_OVERFLOW_MENU;
                var0 = var5.bind(var4)(var0);
                var5 = var0.analyticsLocations;
                var _closure2_slot6 = var5;
                var0 = var0.newestAnalyticsLocation;
                var _closure2_slot7 = var0;
                var10 = _closure1_slot7;
                var0 = var10.getCurrentUser;
                var0 = var0.bind(var10)();
                var _closure2_slot8 = var0;
                var16 = _closure1_slot3;
                var15 = var16.useCallback;
                var0 = var11.id;
                var10 = new Array(4);
                var10[0] = var0;
                var0 = null;
                var18 = var0 == var3;
                var17 = undefined;
                if (var18) {
                    _fun92244_ip = 355;
                    continue _fun92244
                }
            case 350:
                var17 = var3.id;
            case 355:
                var10[1] = var17;
                var10[2] = var9;
                var10[3] = var5;
                var9 = function(arg0) { // Environment: var7
                    _fun92247: for (var _fun92247_ip = 0;;) switch (_fun92247_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 13;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = {};
                            var6 = _closure2_slot4;
                            var7 = var1;
                            var4 = copyDataProperties(var7, var6);
                            var5 = arg0;
                            var4 = 'showGuildProfile';
                            var1[var4] = var5;
                            var4 = _closure2_slot1;
                            var5 = var4.id;
                            var4 = 'userId';
                            var1[var4] = var5;
                            var5 = _closure2_slot2;
                            var4 = null;
                            var4 = var4 == var5;
                            var5 = undefined;
                            if (var4) {
                                _fun92247_ip = 95;
                                continue _fun92247
                            }
                        case 86:
                            var4 = _closure2_slot2;
                            var5 = var4.id;
                        case 95:
                            var4 = 'channelId';
                            var1[var4] = var5;
                            var4 = _closure2_slot6;
                            var3 = 'sourceAnalyticsLocations';
                            var1[var3] = var4;
                            var4 = true;
                            var3 = 'ignoreBlockedSpeedBump';
                            var1[var3] = var4;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var9 = var15.bind(var16)(var9, var10);
                _closure2_slot9 = var9;
                var10 = new Array(0);
                var9 = new Array(0);
                var11 = var11.id;
                _closure2_slot10 = var11;
                var15 = var0 == var3;
                var11 = undefined;
                if (var15) {
                    _fun92244_ip = 420;
                    continue _fun92244
                }
            case 410:
                var15 = var3.getGuildId;
                var11 = var15.bind(var3)();
            case 420:
                _closure2_slot11 = var11;
                var11 = _closure1_slot10;
                var11 = var11.BLOCKED;
                var11 = var14 === var11;
                if (!var12) {
                    _fun92244_ip = 528;
                    continue _fun92244
                }
            case 441:
                if (var11) {
                    _fun92244_ip = 528;
                    continue _fun92244
                }
            case 444:
                var14 = var9.push;
                var12 = {};
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var15 = 14;
                var16 = var19[var15];
                var16 = var18.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var19[var15];
                var15 = var18.bind(var4)(var15);
                var15 = var15.t;
                var15 = var15["8wXU9B"];
                var15 = var16.bind(var17)(var15);
                var12.label = var15;
                var15 = function() { // Original name: action, environment: var7
                    _fun92248: for (var _fun92248_ip = 0;;) switch (_fun92248_ip) {
                        case 0:
                            var3 = _closure2_slot5;
                            var2 = {};
                            var0 = 'UNIGNORE';
                            var2.action = var0;
                            var0 = _closure2_slot6;
                            var2.analyticsLocations = var0;
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 15;
                            var2 = var4[var2];
                            var6 = var3.bind(var0)(var2);
                            var5 = var6.unignoreUser;
                            var4 = _closure2_slot10;
                            var3 = _closure2_slot7;
                            var7 = _closure2_slot2;
                            var2 = null;
                            var7 = var2 == var7;
                            var2 = undefined;
                            if (var7) {
                                _fun92248_ip = 96;
                                continue _fun92248
                            }
                        case 87:
                            var7 = _closure2_slot2;
                            var2 = var7.id;
                        case 96:
                            var2 = var5.bind(var6)(var4, var3, var2);
                            var1 = _closure2_slot9;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var12.action = var15;
                var12 = var14.bind(var9)(var12);
                _fun92244_ip = 613;
                continue _fun92244;
            case 528:
                if (var11) {
                    _fun92244_ip = 613;
                    continue _fun92244
                }
            case 531:
                var14 = var9.push;
                var12 = {};
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var15 = 14;
                var16 = var19[var15];
                var16 = var18.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var19[var15];
                var15 = var18.bind(var4)(var15);
                var15 = var15.t;
                var15 = var15.ytCpKs;
                var15 = var16.bind(var17)(var15);
                var12.label = var15;
                var15 = function() { // Original name: action, environment: var7
                    var3 = _closure2_slot5;
                    var2 = {};
                    var0 = 'IGNORE';
                    var2.action = var0;
                    var0 = _closure2_slot6;
                    var2.analyticsLocations = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 16;
                    var3 = var8[var3];
                    var6 = var4.bind(var0)(var3);
                    var5 = var6.openLazy;
                    var7 = _closure1_slot0;
                    var3 = 18;
                    var3 = var8[var3];
                    var9 = var7.bind(var0)(var3);
                    var3 = 17;
                    var4 = var8[var3];
                    var3 = var8.paths;
                    var4 = var9.bind(var0)(var4, var3);
                    var12 = _closure1_slot12;
                    var2 = {};
                    var1 = _closure2_slot10;
                    var2.userId = var1;
                    var1 = function() { // Original name: onSuccess, environment: var1
                        var1 = _closure2_slot9;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var2.onSuccess = var1;
                    var1 = 19;
                    var1 = var8[var1];
                    var1 = var7.bind(var0)(var1);
                    var1 = var1.ImpressionNames;
                    var1 = var1.IGNORE_USER_CONFIRMATION;
                    var2.impressionName = var1;
                    var10 = 'stack';
                    var14 = var6;
                    var13 = var4;
                    var11 = var2;
                    var1 = var14[var5](var13, var12, var11, var10, var9);
                    return var0;
                };
                var12.action = var15;
                var12 = var14.bind(var9)(var12);
            case 613:
                if (!var11) {
                    _fun92244_ip = 698;
                    continue _fun92244
                }
            case 616:
                var14 = var9.push;
                var12 = {};
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var15 = 14;
                var16 = var19[var15];
                var16 = var18.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var19[var15];
                var15 = var18.bind(var4)(var15);
                var15 = var15.t;
                var15 = var15.XyHpKH;
                var15 = var16.bind(var17)(var15);
                var12.label = var15;
                var15 = function() { // Original name: action, environment: var7
                    _fun92251: for (var _fun92251_ip = 0;;) switch (_fun92251_ip) {
                        case 0:
                            var3 = _closure2_slot5;
                            var2 = {};
                            var0 = 'UNBLOCK';
                            var2.action = var0;
                            var0 = _closure2_slot6;
                            var2.analyticsLocations = var0;
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 15;
                            var2 = var4[var2];
                            var7 = var3.bind(var0)(var2);
                            var6 = var7.unblockUser;
                            var5 = _closure2_slot10;
                            var2 = {};
                            var8 = _closure2_slot7;
                            var2.location = var8;
                            var2 = var6.bind(var7)(var5, var2);
                            var2 = 20;
                            var2 = var4[var2];
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.showUnblockSuccessToast;
                            var3 = _closure2_slot10;
                            var6 = _closure2_slot2;
                            var2 = null;
                            var6 = var2 == var6;
                            var2 = undefined;
                            if (var6) {
                                _fun92251_ip = 128;
                                continue _fun92251
                            }
                        case 119:
                            var6 = _closure2_slot2;
                            var2 = var6.id;
                        case 128:
                            var2 = var4.bind(var5)(var3, var2);
                            var1 = _closure2_slot9;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var12.action = var15;
                var12 = var14.bind(var9)(var12);
            case 698:
                if (var11) {
                    _fun92244_ip = 1005;
                    continue _fun92244
                }
            case 704:
                var14 = var9.push;
                var11 = {};
                var17 = _closure1_slot0;
                var12 = _closure1_slot2;
                var18 = 14;
                var15 = var12[var18];
                var15 = var17.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var12 = var12[var18];
                var12 = var17.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12.l4Emac;
                var12 = var15.bind(var16)(var12);
                var11.label = var12;
                var12 = 'destructive';
                var11.variant = var12;
                var15 = function() { // Original name: action, environment: var7
                    _fun92252: for (var _fun92252_ip = 0;;) switch (_fun92252_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var1 = {};
                            var0 = 'BLOCK';
                            var1.action = var0;
                            var0 = _closure2_slot6;
                            var1.analyticsLocations = var0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var3 = 16;
                            var3 = var2[var3];
                            var6 = var4.bind(var0)(var3);
                            var5 = var6.openLazy;
                            var4 = _closure1_slot0;
                            var3 = 18;
                            var3 = var2[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = 21;
                            var3 = var2[var3];
                            var2 = var2.paths;
                            var4 = var4.bind(var0)(var3, var2);
                            var3 = _closure1_slot11;
                            var2 = {};
                            var7 = _closure2_slot10;
                            var2.userId = var7;
                            var9 = _closure2_slot2;
                            var7 = null;
                            var9 = var7 == var9;
                            var7 = undefined;
                            if (var9) {
                                _fun92252_ip = 134;
                                continue _fun92252
                            }
                        case 125:
                            var8 = _closure2_slot2;
                            var7 = var8.id;
                        case 134:
                            var2.channelId = var7;
                            var7 = function() { // Original name: onSuccess, environment: var7
                                var1 = _closure2_slot9;
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var2.onSuccess = var7;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 19;
                            var1 = var8[var1];
                            var1 = var7.bind(var0)(var1);
                            var1 = var1.ImpressionNames;
                            var1 = var1.BLOCK_USER_CONFIRMATION;
                            var2.impressionName = var1;
                            var10 = 'stack';
                            var14 = var6;
                            var13 = var4;
                            var12 = var3;
                            var11 = var2;
                            var1 = var14[var5](var13, var12, var11, var10, var9);
                            return var0;
                    }
                };
                var11.action = var15;
                var11 = var14.bind(var9)(var11);
                if (var8) {
                    _fun92244_ip = 920;
                    continue _fun92244
                }
            case 799:
                var11 = _closure1_slot0;
                var14 = _closure1_slot2;
                var8 = 24;
                var8 = var14[var8];
                var11 = var11.bind(var4)(var8);
                var8 = var11.isAndroid;
                var8 = var8.bind(var11)();
                if (!var8) {
                    _fun92244_ip = 1005;
                    continue _fun92244
                }
            case 835:
                var11 = var9.push;
                var8 = {};
                var17 = _closure1_slot0;
                var14 = _closure1_slot2;
                var15 = var14[var18];
                var15 = var17.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var18];
                var14 = var17.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.TbHyMG;
                var14 = var15.bind(var16)(var14);
                var8.label = var14;
                var8.variant = var12;
                var14 = function() { // Original name: action, environment: var7
                    var2 = _closure2_slot5;
                    var1 = {};
                    var0 = 'REPORT';
                    var1.action = var0;
                    var0 = _closure2_slot6;
                    var1.analyticsLocations = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 25;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.alertUserReported;
                    var2 = var2.bind(var3)();
                    var3 = _closure1_slot1;
                    var2 = 26;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot8;
                    var2 = var1.TNS_USER_REPORT_SUBMITTED;
                    var1 = {};
                    var5 = _closure2_slot10;
                    var1.reported_user_id = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var8.action = var14;
                var8 = var11.bind(var9)(var8);
                _fun92244_ip = 1005;
                continue _fun92244;
            case 920:
                var11 = var9.push;
                var8 = {};
                var17 = _closure1_slot0;
                var14 = _closure1_slot2;
                var15 = var14[var18];
                var15 = var17.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var18];
                var14 = var17.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.jhJzez;
                var14 = var15.bind(var16)(var14);
                var8.label = var14;
                var8.variant = var12;
                var12 = function() { // Original name: action, environment: var7
                    _fun92254: for (var _fun92254_ip = 0;;) switch (_fun92254_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var1 = {};
                            var0 = 'REPORT';
                            var1.action = var0;
                            var0 = _closure2_slot6;
                            var1.analyticsLocations = var0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var3 = _closure2_slot11;
                            var2 = '@me';
                            var1 = undefined;
                            if (!(var2 !== var3)) {
                                _fun92254_ip = 65;
                                continue _fun92254
                            }
                        case 49:
                            var3 = _closure2_slot11;
                            var2 = null;
                            var1 = undefined;
                            if (!(var2 !== var3)) {
                                _fun92254_ip = 65;
                                continue _fun92254
                            }
                        case 61:
                            var1 = _closure2_slot11;
                        case 65:
                            var4 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var3 = 16;
                            var3 = var8[var3];
                            var6 = var4.bind(var0)(var3);
                            var5 = var6.openLazy;
                            var3 = _closure1_slot0;
                            var2 = 18;
                            var2 = var8[var2];
                            var9 = var3.bind(var0)(var2);
                            var2 = 22;
                            var4 = var8[var2];
                            var2 = var8.paths;
                            var4 = var9.bind(var0)(var4, var2);
                            var2 = 23;
                            var2 = var8[var2];
                            var2 = var3.bind(var0)(var2);
                            var3 = var2.BOT_REPORT_CHOOSER_KEY;
                            var2 = {};
                            var8 = _closure2_slot1;
                            var2.user = var8;
                            var8 = 'UserProfileOverflowMenu';
                            var2.entrypoint = var8;
                            var2.contextualGuildId = var1;
                            var8 = _closure2_slot2;
                            var1 = null;
                            var8 = var1 == var8;
                            var1 = undefined;
                            if (var8) {
                                _fun92254_ip = 196;
                                continue _fun92254
                            }
                        case 187:
                            var7 = _closure2_slot2;
                            var1 = var7.id;
                        case 196:
                            var2.contextualChannelId = var1;
                            var10 = 'replaceAll';
                            var14 = var6;
                            var13 = var4;
                            var12 = var3;
                            var11 = var2;
                            var1 = var14[var5](var13, var12, var11, var10, var9);
                            return var0;
                    }
                };
                var8.action = var12;
                var8 = var11.bind(var9)(var8);
            case 1005:
                var11 = var10.push;
                var8 = {};
                var17 = _closure1_slot0;
                var12 = _closure1_slot2;
                var14 = 14;
                var15 = var12[var14];
                var15 = var17.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var12 = var12[var14];
                var12 = var17.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12.y5MwJy;
                var12 = var15.bind(var16)(var12);
                var8.label = var12;
                var12 = function() { // Original name: action, environment: var7
                    var3 = _closure2_slot5;
                    var2 = {};
                    var0 = 'COPY_USERNAME';
                    var2.action = var0;
                    var0 = _closure2_slot6;
                    var2.analyticsLocations = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var5 = 27;
                    var5 = var4[var5];
                    var6 = var3.bind(var0)(var5);
                    var5 = var6.copy;
                    var7 = _closure1_slot1;
                    var2 = 28;
                    var2 = var4[var2];
                    var9 = var7.bind(var0)(var2);
                    var8 = var9.getUserTag;
                    var7 = _closure2_slot1;
                    var2 = {
                        'decoration': 'never',
                        'identifiable': 'always'
                    };
                    var2 = var8.bind(var9)(var7, var2);
                    var2 = var5.bind(var6)(var2);
                    var2 = 29;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.presentUsernameCopied;
                    var2 = var2.bind(var3)();
                    var1 = _closure2_slot9;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var8.action = var12;
                var8 = var11.bind(var10)(var8);
                if (!(var0 != var13)) {
                    _fun92244_ip = 1263;
                    continue _fun92244
                }
            case 1094:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 30;
                var8 = var12[var8];
                var15 = var11.bind(var4)(var8);
                var12 = var15.hasFlag;
                var8 = var13.flags;
                var16 = var0 != var8;
                var11 = 0;
                if (!var16) {
                    _fun92244_ip = 1137;
                    continue _fun92244
                }
            case 1134:
                var11 = var8;
            case 1137:
                var8 = _closure1_slot9;
                var8 = var8.EMBEDDED;
                var8 = var12.bind(var15)(var11, var8);
                _closure2_slot12 = var8;
                var16 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 31;
                var8 = var12[var8];
                var11 = var16.bind(var4)(var8);
                var8 = var11.getInstallAppPropsFromProfileApplication;
                var8 = var8.bind(var11)(var13);
                _closure2_slot13 = var8;
                var11 = var10.push;
                var8 = {};
                var13 = var12[var14];
                var13 = var16.bind(var4)(var13);
                var15 = var13.intl;
                var13 = var15.string;
                var12 = var12[var14];
                var12 = var16.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12.WqhZss;
                var12 = var13.bind(var15)(var12);
                var8.label = var12;
                var12 = function() { // Original name: action, environment: var7
                    _fun92257: for (var _fun92257_ip = 0;;) switch (_fun92257_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var1 = {};
                            var0 = 'COPY_APP_LINK';
                            var1.action = var0;
                            var0 = _closure2_slot6;
                            var1.analyticsLocations = var0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var2 = _closure2_slot12;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 32;
                            var3 = var5[var3];
                            var4 = var4.bind(var0)(var3);
                            if (var2) {
                                _fun92257_ip = 104;
                                continue _fun92257
                            }
                        case 65:
                            var3 = var4.getApplicationInstallURL;
                            var2 = {};
                            var5 = _closure2_slot0;
                            var5 = var5.id;
                            var2.id = var5;
                            var9 = _closure2_slot13;
                            var10 = var2;
                            var5 = copyDataProperties(var10, var9);
                            var5 = var3.bind(var4)(var2);
                            _fun92257_ip = 159;
                            continue _fun92257;
                        case 104:
                            var3 = var4.getActivityLaunchURL;
                            var2 = {};
                            var6 = _closure2_slot0;
                            var6 = var6.id;
                            var2.applicationId = var6;
                            var8 = _closure2_slot8;
                            var6 = null;
                            var8 = var6 == var8;
                            var6 = undefined;
                            if (var8) {
                                _fun92257_ip = 149;
                                continue _fun92257
                            }
                        case 140:
                            var7 = _closure2_slot8;
                            var6 = var7.id;
                        case 149:
                            var2.referrerId = var6;
                            var5 = var3.bind(var4)(var2);
                        case 159:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 27;
                            var1 = var3[var1];
                            var4 = var2.bind(var0)(var1);
                            var1 = var4.copy;
                            var1 = var1.bind(var4)(var5);
                            var1 = 29;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.presentLinkCopied;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                var8.action = var12;
                var8 = var11.bind(var10)(var8);
            case 1263:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 33;
                var8 = var12[var8];
                var8 = var11.bind(var4)(var8);
                var11 = var8.DeveloperMode;
                var8 = var11.getSetting;
                var8 = var8.bind(var11)();
                if (!var8) {
                    _fun92244_ip = 1381;
                    continue _fun92244
                }
            case 1302:
                var11 = var10.push;
                var8 = {};
                var16 = _closure1_slot0;
                var12 = _closure1_slot2;
                var13 = var12[var14];
                var13 = var16.bind(var4)(var13);
                var15 = var13.intl;
                var13 = var15.string;
                var12 = var12[var14];
                var12 = var16.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12["/AXYnE"];
                var12 = var13.bind(var15)(var12);
                var8.label = var12;
                var12 = function() { // Original name: action, environment: var7
                    var3 = _closure2_slot5;
                    var2 = {};
                    var0 = 'COPY_USER_ID';
                    var2.action = var0;
                    var0 = _closure2_slot6;
                    var2.analyticsLocations = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 27;
                    var2 = var4[var2];
                    var6 = var3.bind(var0)(var2);
                    var5 = var6.copy;
                    var2 = _closure2_slot10;
                    var2 = var5.bind(var6)(var2);
                    var2 = 29;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.presentIdCopied;
                    var2 = var2.bind(var3)();
                    var1 = _closure2_slot9;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var8.action = var12;
                var8 = var11.bind(var10)(var8);
            case 1381:
                var3 = var0 != var3;
                if (!var3) {
                    _fun92244_ip = 1392;
                    continue _fun92244
                }
            case 1388:
                var3 = var0 != var6;
            case 1392:
                if (!var3) {
                    _fun92244_ip = 1474;
                    continue _fun92244
                }
            case 1395:
                var6 = var10.push;
                var3 = {};
                var13 = _closure1_slot0;
                var8 = _closure1_slot2;
                var11 = var8[var14];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var8 = var8[var14];
                var8 = var13.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.PHjkRE;
                var8 = var11.bind(var12)(var8);
                var3.label = var8;
                var8 = function() { // Original name: action, environment: var7
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 34;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = _closure2_slot10;
                    var0.userId = var4;
                    var4 = _closure2_slot3;
                    var0.selectedChannel = var4;
                    var4 = _closure2_slot9;
                    var0.showUserProfile = var4;
                    var3 = _closure2_slot6;
                    var0.analyticsLocations = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3.action = var8;
                var3 = var6.bind(var10)(var3);
            case 1474:
                var3 = var10.length;
                var6 = 0;
                if (!(var6 === var3)) {
                    _fun92244_ip = 1496;
                    continue _fun92244
                }
            case 1485:
                var3 = var9.length;
                var0 = null;
                if (!(var6 !== var3)) {
                    _fun92244_ip = 1593;
                    continue _fun92244
                }
            case 1496:
                var3 = _closure1_slot13;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = var8[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.AnalyticsLocationProvider;
                var1 = {};
                var1.value = var5;
                var5 = 35;
                var5 = var8[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.ContextMenu;
                var5 = {};
                var8 = new Array(2);
                var8[0] = var10;
                var8[1] = var9;
                var5.items = var8;
                var7 = function(arg0) { // Original name: children, environment: var7
                    var2 = arg0;
                    var7 = var2.ref;
                    var0 = null;
                    var1 = Object.create(var0);
                    var0 = 0;
                    var1.ref = var0;
                    var13 = {};
                    var12 = var2;
                    var11 = var1;
                    var12 = copyDataProperties(var13, var12, var11);
                    var3 = _closure1_slot13;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 36;
                    var0 = var8[var0];
                    var2 = undefined;
                    var0 = var5.bind(var2)(var0);
                    var1 = var0.IconButton;
                    var0 = {};
                    var0.ref = var7;
                    var13 = var0;
                    var4 = copyDataProperties(var13, var12);
                    var7 = 'sm';
                    var4 = 'size';
                    var0[var4] = var7;
                    var9 = 'secondary-overlay';
                    var4 = 'variant';
                    var0[var4] = var9;
                    var4 = 14;
                    var9 = var8[var4];
                    var9 = var5.bind(var2)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var4 = var8[var4];
                    var4 = var5.bind(var2)(var4);
                    var4 = var4.t;
                    var4 = var4["+zofAD"];
                    var9 = var9.bind(var10)(var4);
                    var4 = 'accessibilityLabel';
                    var0[var4] = var9;
                    var4 = 37;
                    var4 = var8[var4];
                    var4 = var5.bind(var2)(var4);
                    var5 = var4.MoreHorizontalIcon;
                    var4 = {};
                    var4.size = var7;
                    var7 = _closure1_slot1;
                    var6 = 38;
                    var6 = var8[var6];
                    var6 = var7.bind(var2)(var6);
                    var6 = var6.colors;
                    var6 = var6.WHITE;
                    var4.color = var6;
                    var5 = var3.bind(var2)(var5, var4);
                    var4 = 'icon';
                    var0[var4] = var5;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var5.children = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1593:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 3059, 1661, 1613, 660, 10459, 33, 566, 11955, 6931, 5684, 5536, 7310, 1234, 7979, 3237, 10464, 1307, 481, 5882, 10463, 11956, 11956, 478, 8958, 795, 5246, 3195, 3106, 1384, 4629, 7784, 1348, 11957, 8888, 7468, 8889, 671, 2]);