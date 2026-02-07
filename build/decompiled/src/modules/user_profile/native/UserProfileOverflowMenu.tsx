// modules/user_profile/native/UserProfileOverflowMenu.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot9 = var6;
    var6 = var3.AVATAR_MAX_SIZE;
    var _closure1_slot10 = var6;
    var6 = var3.NOOP;
    var _closure1_slot11 = var6;
    var3 = var3.RelationshipTypes;
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ParticipantTypes;
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.BLOCK_CONFIRMATION_ACTION_SHEET_KEY;
    var _closure1_slot14 = var6;
    var3 = var3.IGNORE_CONFIRMATION_ACTION_SHEET_KEY;
    var _closure1_slot15 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot16 = var3;
    var3 = 51;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileOverflowMenu.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92609: for (var _fun92609_ip = 0;;) switch (_fun92609_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.user;
                var _closure2_slot0 = var17;
                var21 = var0.currentUser;
                var25 = var0.displayProfile;
                var _closure2_slot1 = var25;
                var3 = var0.channel;
                var _closure2_slot2 = var3;
                var4 = undefined;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var _closure2_slot12 = var4;
                var _closure2_slot13 = var4;
                var _closure2_slot14 = var4;
                var _closure2_slot15 = var4;
                var1 = _closure1_slot0;
                var11 = _closure1_slot2;
                var22 = 10;
                var0 = var11[var22];
                var8 = var1.bind(var4)(var0);
                var6 = var8.useStateFromStoresObject;
                var10 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var10;
                var0 = function() { // Environment: var7
                    var0 = {};
                    var3 = _closure1_slot7;
                    var4 = var3.getRelationshipType;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var2 = var4.bind(var3)(var2);
                    var0.relationshipType = var2;
                    var2 = var3.isIgnored;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0.isIgnored = var1;
                    return var0;
                };
                var0 = var6.bind(var8)(var5, var0);
                var19 = var0.relationshipType;
                var14 = var0.isIgnored;
                var0 = var11[var22];
                var8 = var1.bind(var4)(var0);
                var6 = var8.useStateFromStoresObject;
                var0 = _closure1_slot8;
                var5 = new Array(2);
                var5[0] = var0;
                var0 = _closure1_slot6;
                var5[1] = var0;
                var0 = function() { // Environment: var7
                    var0 = {};
                    var3 = _closure1_slot6;
                    var2 = var3.getChannel;
                    var4 = _closure1_slot8;
                    var1 = var4.getChannelId;
                    var1 = var1.bind(var4)();
                    var1 = var2.bind(var3)(var1);
                    var0.selectedChannel = var1;
                    var1 = var4.getVoiceChannelId;
                    var1 = var1.bind(var4)();
                    var0.selectedVoiceChannelId = var1;
                    var2 = var3.getChannel;
                    var1 = var4.getVoiceChannelId;
                    var1 = var1.bind(var4)();
                    var1 = var2.bind(var3)(var1);
                    var0.selectedVoiceChannel = var1;
                    return var0;
                };
                var0 = var6.bind(var8)(var5, var0);
                var8 = var0.selectedChannel;
                var _closure2_slot3 = var8;
                var26 = var0.selectedVoiceChannelId;
                var _closure2_slot4 = var26;
                var27 = var0.selectedVoiceChannel;
                var _closure2_slot5 = var27;
                var0 = 11;
                var0 = var11[var0];
                var5 = var1.bind(var4)(var0);
                var1 = var5.useServerInviteRows;
                var0 = var17.id;
                var5 = var1.bind(var5)(var0);
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1.bind(var4)(var5, var0);
                var6 = 0;
                var5 = var1[var6];
                var0 = 1;
                var1 = var1[var0];
                var9 = var10.getNickname;
                var0 = var17.id;
                var9 = var9.bind(var10)(var0);
                var0 = null;
                var20 = var0 != var9;
                var10 = _closure1_slot1;
                var9 = 12;
                var9 = var11[var9];
                var10 = var10.bind(var4)(var9);
                var9 = var17.id;
                var12 = var10.bind(var4)(var9);
                if (!var12) {
                    _fun92609_ip = 348;
                    continue _fun92609
                }
            case 330:
                var5 = var5.length;
                var1 = var1.length;
                var1 = var5 + var1;
                var12 = var1 > var6;
            case 348:
                var5 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 13;
                var1 = var13[var1];
                var10 = var5.bind(var4)(var1);
                var9 = var10.isIarUserReportingEnabled;
                var1 = 'User Profile Options - Mobile';
                var15 = var9.bind(var10)(var1);
                var1 = 14;
                var1 = var13[var1];
                var5 = var5.bind(var4)(var1);
                var1 = var5.useUserProfileAnalyticsContext;
                var1 = var1.bind(var5)();
                var9 = var1.context;
                _closure2_slot6 = var9;
                var1 = var1.trackUserProfileAction;
                _closure2_slot7 = var1;
                var11 = _closure1_slot1;
                var1 = 15;
                var5 = var13[var1];
                var10 = var11.bind(var4)(var5);
                var5 = 16;
                var5 = var13[var5];
                var5 = var11.bind(var4)(var5);
                var5 = var5.USER_PROFILE_OVERFLOW_MENU;
                var10 = var10.bind(var4)(var5);
                var5 = var10.analyticsLocations;
                _closure2_slot8 = var5;
                var10 = var10.newestAnalyticsLocation;
                _closure2_slot9 = var10;
                var10 = 17;
                var10 = var13[var10];
                var13 = var11.bind(var4)(var10);
                var11 = var17.id;
                var16 = var0 == var3;
                var10 = undefined;
                if (var16) {
                    _fun92609_ip = 516;
                    continue _fun92609
                }
            case 511:
                var10 = var3.guild_id;
            case 516:
                var24 = var13.bind(var4)(var11, var10);
                var11 = _closure1_slot0;
                var18 = _closure1_slot2;
                var10 = 18;
                var10 = var18[var10];
                var11 = var11.bind(var4)(var10);
                var10 = var11.useCanRing;
                var16 = 'UserProfileOverflowMenu';
                var11 = var10.bind(var11)(var17, var16, var26);
                _closure2_slot10 = var11;
                var13 = _closure1_slot1;
                var10 = 19;
                var10 = var18[var10];
                var18 = var13.bind(var4)(var10);
                var13 = var18.useExperiment;
                var10 = {};
                var28 = var0 == var27;
                var23 = undefined;
                if (var28) {
                    _fun92609_ip = 603;
                    continue _fun92609
                }
            case 598:
                var23 = var27.guild_id;
            case 603:
                var10.guildId = var23;
                var10.location = var16;
                var10 = var13.bind(var18)(var10);
                var10 = var10.enabled;
                _closure2_slot11 = var10;
                var23 = _closure1_slot1;
                var13 = _closure1_slot2;
                var18 = 20;
                var18 = var13[var18];
                var28 = var23.bind(var4)(var18);
                var23 = var28.useExperiment;
                var18 = {};
                var18.location = var16;
                var16 = {};
                var29 = false;
                var16.autoTrackExposure = var29;
                var16 = var23.bind(var28)(var18, var16);
                var16 = var16.tidaWebformEnabled;
                var18 = _closure1_slot0;
                var13 = var13[var22];
                var23 = var18.bind(var4)(var13);
                var22 = var23.useStateFromStoresObject;
                var13 = _closure1_slot5;
                var18 = new Array(1);
                var18[0] = var13;
                var13 = function() { // Environment: var7
                    _fun92612: for (var _fun92612_ip = 0;;) switch (_fun92612_ip) {
                        case 0:
                            var3 = _closure2_slot10;
                            if (!var3) {
                                _fun92612_ip = 20;
                                continue _fun92612
                            }
                        case 10:
                            var2 = _closure2_slot4;
                            var1 = null;
                            var3 = var1 != var2;
                        case 20:
                            var1 = null;
                            var2 = null;
                            if (!var3) {
                                _fun92612_ip = 59;
                                continue _fun92612
                            }
                        case 27:
                            var5 = _closure1_slot5;
                            var4 = var5.getParticipant;
                            var3 = _closure2_slot4;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var2 = var4.bind(var5)(var3, var0);
                        case 59:
                            var0 = {};
                            var3 = var1 != var2;
                            var0.userIsInCall = var3;
                            var1 = var1 != var2;
                            if (!var1) {
                                _fun92612_ip = 99;
                                continue _fun92612
                            }
                        case 77:
                            var4 = var2.type;
                            var3 = _closure1_slot13;
                            var3 = var3.USER;
                            var1 = var4 === var3;
                        case 99:
                            if (!var1) {
                                _fun92612_ip = 108;
                                continue _fun92612
                            }
                        case 102:
                            var1 = var2.ringing;
                        case 108:
                            var0.isUserRinging = var1;
                            return var0;
                    }
                };
                var18 = var22.bind(var23)(var18, var13);
                var13 = var18.userIsInCall;
                _closure2_slot12 = var13;
                var22 = var18.isUserRinging;
                if (!var11) {
                    _fun92609_ip = 745;
                    continue _fun92609
                }
            case 741:
                var11 = var0 != var26;
            case 745:
                if (!var11) {
                    _fun92609_ip = 760;
                    continue _fun92609
                }
            case 748:
                var18 = !var13;
                if (var18) {
                    _fun92609_ip = 757;
                    continue _fun92609
                }
            case 754:
                var18 = var22;
            case 757:
                var11 = var18;
            case 760:
                var22 = _closure1_slot1;
                var29 = _closure1_slot2;
                var18 = 21;
                var18 = var29[var18];
                var23 = var22.bind(var4)(var18);
                var22 = {};
                var28 = _closure1_slot0;
                var18 = 22;
                var30 = var29[var18];
                var30 = var28.bind(var4)(var30);
                var30 = var30.ImpressionTypes;
                var30 = var30.MENU;
                var22.type = var30;
                var18 = var29[var18];
                var18 = var28.bind(var4)(var18);
                var18 = var18.ImpressionNames;
                var18 = var18.RING_TO_GUILD_VC_MENU_ITEM_SHOWN;
                var22.name = var18;
                var18 = {};
                var18.voice_channel_id = var26;
                var28 = var0 == var27;
                var26 = undefined;
                if (var28) {
                    _fun92609_ip = 860;
                    continue _fun92609
                }
            case 855:
                var26 = var27.guild_id;
            case 860:
                var18.voice_guild_id = var26;
                var22.properties = var18;
                var18 = {};
                if (!var10) {
                    _fun92609_ip = 880;
                    continue _fun92609
                }
            case 877:
                var10 = var11;
            case 880:
                var10 = !var10;
                var18.disableTrack = var10;
                var26 = var17.id;
                var10 = new Array(1);
                var10[0] = var26;
                var10 = var23.bind(var4)(var22, var18, var10);
                var22 = _closure1_slot4;
                var18 = var22.useCallback;
                var23 = var17.id;
                var10 = new Array(4);
                var10[0] = var23;
                var26 = var0 == var3;
                var23 = undefined;
                if (var26) {
                    _fun92609_ip = 944;
                    continue _fun92609
                }
            case 939:
                var23 = var3.id;
            case 944:
                var10[1] = var23;
                var10[2] = var9;
                var10[3] = var5;
                var9 = function(arg0) { // Environment: var7
                    _fun92613: for (var _fun92613_ip = 0;;) switch (_fun92613_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 23;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = {};
                            var6 = _closure2_slot6;
                            var7 = var1;
                            var4 = copyDataProperties(var7, var6);
                            var5 = arg0;
                            var4 = 'showGuildProfile';
                            var1[var4] = var5;
                            var4 = _closure2_slot0;
                            var5 = var4.id;
                            var4 = 'userId';
                            var1[var4] = var5;
                            var5 = _closure2_slot2;
                            var4 = null;
                            var4 = var4 == var5;
                            var5 = undefined;
                            if (var4) {
                                _fun92613_ip = 95;
                                continue _fun92613
                            }
                        case 86:
                            var4 = _closure2_slot2;
                            var5 = var4.id;
                        case 95:
                            var4 = 'channelId';
                            var1[var4] = var5;
                            var4 = _closure2_slot8;
                            var3 = 'sourceAnalyticsLocations';
                            var1[var3] = var4;
                            var4 = true;
                            var3 = 'ignoreBlockedSpeedBump';
                            var1[var3] = var4;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var9 = var18.bind(var22)(var9, var10);
                _closure2_slot13 = var9;
                var10 = new Array(0);
                var9 = new Array(0);
                var23 = var17.id;
                _closure2_slot14 = var23;
                var18 = var21.id;
                var22 = var0 == var3;
                var17 = undefined;
                if (var22) {
                    _fun92609_ip = 1014;
                    continue _fun92609
                }
            case 1004:
                var22 = var3.getGuildId;
                var17 = var22.bind(var3)();
            case 1014:
                _closure2_slot15 = var17;
                var17 = _closure1_slot12;
                var17 = var17.BLOCKED;
                var17 = var19 === var17;
                var26 = var0 == var25;
                var22 = undefined;
                if (var26) {
                    _fun92609_ip = 1046;
                    continue _fun92609
                }
            case 1041:
                var22 = var25.guildId;
            case 1046:
                if (!(var0 != var22)) {
                    _fun92609_ip = 1134;
                    continue _fun92609
                }
            case 1050:
                var26 = var10.push;
                var22 = {};
                var30 = _closure1_slot0;
                var31 = _closure1_slot2;
                var27 = 24;
                var28 = var31[var27];
                var28 = var30.bind(var4)(var28);
                var29 = var28.intl;
                var28 = var29.string;
                var27 = var31[var27];
                var27 = var30.bind(var4)(var27);
                var27 = var27.t;
                var27 = var27.GISTta;
                var27 = var28.bind(var29)(var27);
                var22.label = var27;
                var27 = function() {
                    var3 = _closure2_slot7;
                    var2 = {};
                    var0 = 'PRESS_VIEW_MAIN_PROFILE';
                    var2.action = var0;
                    var0 = _closure2_slot8;
                    var2.analyticsLocations = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure2_slot13;
                    var1 = false;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var22.action = var27;
                var22 = var26.bind(var10)(var22);
            case 1134:
                var26 = var0 == var24;
                var22 = undefined;
                if (var26) {
                    _fun92609_ip = 1148;
                    continue _fun92609
                }
            case 1143:
                var22 = var24.guildId;
            case 1148:
                var22 = var0 != var22;
                if (!var22) {
                    _fun92609_ip = 1173;
                    continue _fun92609
                }
            case 1155:
                var26 = var0 == var25;
                var24 = undefined;
                if (var26) {
                    _fun92609_ip = 1169;
                    continue _fun92609
                }
            case 1164:
                var24 = var25.guildId;
            case 1169:
                var22 = var0 == var24;
            case 1173:
                if (!var22) {
                    _fun92609_ip = 1260;
                    continue _fun92609
                }
            case 1176:
                var24 = var10.push;
                var22 = {};
                var28 = _closure1_slot0;
                var29 = _closure1_slot2;
                var25 = 24;
                var26 = var29[var25];
                var26 = var28.bind(var4)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var25 = var29[var25];
                var25 = var28.bind(var4)(var25);
                var25 = var25.t;
                var25 = var25.DisZzB;
                var25 = var26.bind(var27)(var25);
                var22.label = var25;
                var25 = function() {
                    var3 = _closure2_slot7;
                    var2 = {};
                    var0 = 'PRESS_VIEW_SERVER_PROFILE';
                    var2.action = var0;
                    var0 = _closure2_slot8;
                    var2.analyticsLocations = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var1 = _closure2_slot13;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var22.action = var25;
                var22 = var24.bind(var10)(var22);
            case 1260:
                if (!(var18 !== var23)) {
                    _fun92609_ip = 2194;
                    continue _fun92609
                }
            case 1267:
                var18 = var0 != var3;
                if (!var18) {
                    _fun92609_ip = 1287;
                    continue _fun92609
                }
            case 1274:
                var22 = var3.isThread;
                var22 = var22.bind(var3)();
                var18 = !var22;
            case 1287:
                if (!var18) {
                    _fun92609_ip = 1306;
                    continue _fun92609
                }
            case 1290:
                var22 = var3.isOwner;
                var21 = var21.id;
                var18 = var22.bind(var3)(var21);
            case 1306:
                var22 = undefined;
                if (!var18) {
                    _fun92609_ip = 1324;
                    continue _fun92609
                }
            case 1311:
                var21 = var3.recipients;
                var18 = var0 != var21;
                var22 = var21;
            case 1324:
                if (!var18) {
                    _fun92609_ip = 1337;
                    continue _fun92609
                }
            case 1327:
                var21 = var22.includes;
                var18 = var21.bind(var22)(var23);
            case 1337:
                if (!var18) {
                    _fun92609_ip = 1434;
                    continue _fun92609
                }
            case 1340:
                var21 = var9.push;
                var18 = {};
                var25 = _closure1_slot0;
                var26 = _closure1_slot2;
                var22 = 24;
                var23 = var26[var22];
                var23 = var25.bind(var4)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var26[var22];
                var22 = var25.bind(var4)(var22);
                var22 = var22.t;
                var22 = var22["n5zMI+"];
                var22 = var23.bind(var24)(var22);
                var18.label = var22;
                var22 = 'destructive';
                var18.variant = var22;
                var22 = function() {
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 25;
                    var1 = var3[var0];
                    var0 = undefined;
                    var6 = var2.bind(var0)(var1);
                    var5 = var6.removeRecipient;
                    var4 = _closure2_slot2;
                    var4 = var4.id;
                    var1 = _closure2_slot14;
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = 26;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var18.action = var22;
                var18 = var21.bind(var9)(var18);
            case 1434:
                var18 = _closure1_slot12;
                var18 = var18.FRIEND;
                if (!(var19 === var18)) {
                    _fun92609_ip = 1546;
                    continue _fun92609
                }
            case 1448:
                var19 = var10.push;
                var18 = {};
                var24 = _closure1_slot0;
                var25 = _closure1_slot2;
                var21 = 24;
                var22 = var25[var21];
                var22 = var24.bind(var4)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var25[var21];
                var21 = var24.bind(var4)(var21);
                var21 = var21.t;
                if (var20) {
                    _fun92609_ip = 1515;
                    continue _fun92609
                }
            case 1502:
                var20 = var21.BGYkaH;
                var20 = var22.bind(var23)(var20);
                _fun92609_ip = 1526;
                continue _fun92609;
            case 1515:
                var21 = var21["8pOYUE"];
                var20 = var22.bind(var23)(var21);
            case 1526:
                var18.label = var20;
                var20 = function() {
                    var2 = _closure2_slot7;
                    var1 = {};
                    var0 = 'PRESS_SET_FRIEND_NICKNAME';
                    var1.action = var0;
                    var0 = _closure2_slot8;
                    var1.analyticsLocations = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var4 = 27;
                    var4 = var3[var4];
                    var6 = var2.bind(var0)(var4);
                    var5 = var6.pushLazy;
                    var4 = _closure1_slot0;
                    var1 = 29;
                    var1 = var3[var1];
                    var8 = var4.bind(var0)(var1);
                    var1 = 28;
                    var4 = var3[var1];
                    var1 = var3.paths;
                    var4 = var8.bind(var0)(var4, var1);
                    var1 = {};
                    var8 = _closure2_slot14;
                    var1.userId = var8;
                    var7 = _closure2_slot13;
                    var1.showUserProfile = var7;
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = 26;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var18.action = var20;
                var18 = var19.bind(var10)(var18);
            case 1546:
                if (!var14) {
                    _fun92609_ip = 1636;
                    continue _fun92609
                }
            case 1549:
                if (var17) {
                    _fun92609_ip = 1636;
                    continue _fun92609
                }
            case 1552:
                var18 = var9.push;
                var14 = {};
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var19 = 24;
                var20 = var23[var19];
                var20 = var22.bind(var4)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var23[var19];
                var19 = var22.bind(var4)(var19);
                var19 = var19.t;
                var19 = var19["8wXU9B"];
                var19 = var20.bind(var21)(var19);
                var14.label = var19;
                var19 = function() {
                    _fun92618: for (var _fun92618_ip = 0;;) switch (_fun92618_ip) {
                        case 0:
                            var3 = _closure2_slot7;
                            var2 = {};
                            var0 = 'UNIGNORE';
                            var2.action = var0;
                            var0 = _closure2_slot8;
                            var2.analyticsLocations = var0;
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 30;
                            var2 = var4[var2];
                            var6 = var3.bind(var0)(var2);
                            var5 = var6.unignoreUser;
                            var4 = _closure2_slot14;
                            var3 = _closure2_slot9;
                            var7 = _closure2_slot2;
                            var2 = null;
                            var7 = var2 == var7;
                            var2 = undefined;
                            if (var7) {
                                _fun92618_ip = 96;
                                continue _fun92618
                            }
                        case 87:
                            var7 = _closure2_slot2;
                            var2 = var7.id;
                        case 96:
                            var2 = var5.bind(var6)(var4, var3, var2);
                            var1 = _closure2_slot13;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var14.action = var19;
                var14 = var18.bind(var9)(var14);
                _fun92609_ip = 1721;
                continue _fun92609;
            case 1636:
                if (var17) {
                    _fun92609_ip = 1721;
                    continue _fun92609
                }
            case 1639:
                var18 = var9.push;
                var14 = {};
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var19 = 24;
                var20 = var23[var19];
                var20 = var22.bind(var4)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var23[var19];
                var19 = var22.bind(var4)(var19);
                var19 = var19.t;
                var19 = var19.ytCpKs;
                var19 = var20.bind(var21)(var19);
                var14.label = var19;
                var19 = function() {
                    _fun92619: for (var _fun92619_ip = 0;;) switch (_fun92619_ip) {
                        case 0:
                            var2 = _closure2_slot7;
                            var1 = {};
                            var0 = 'IGNORE';
                            var1.action = var0;
                            var0 = _closure2_slot8;
                            var1.analyticsLocations = var0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var3 = 26;
                            var3 = var2[var3];
                            var6 = var4.bind(var0)(var3);
                            var5 = var6.openLazy;
                            var4 = _closure1_slot0;
                            var3 = 29;
                            var3 = var2[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = 31;
                            var3 = var2[var3];
                            var2 = var2.paths;
                            var4 = var4.bind(var0)(var3, var2);
                            var3 = _closure1_slot15;
                            var2 = {};
                            var7 = _closure2_slot14;
                            var2.userId = var7;
                            var9 = _closure2_slot2;
                            var7 = null;
                            var9 = var7 == var9;
                            var7 = undefined;
                            if (var9) {
                                _fun92619_ip = 134;
                                continue _fun92619
                            }
                        case 125:
                            var8 = _closure2_slot2;
                            var7 = var8.id;
                        case 134:
                            var2.channelId = var7;
                            var7 = _closure1_slot11;
                            var2.onSuccess = var7;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 22;
                            var1 = var8[var1];
                            var1 = var7.bind(var0)(var1);
                            var1 = var1.ImpressionNames;
                            var1 = var1.IGNORE_USER_CONFIRMATION;
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
                var14.action = var19;
                var14 = var18.bind(var9)(var14);
            case 1721:
                var14 = var9.push;
                if (var17) {
                    _fun92609_ip = 2117;
                    continue _fun92609
                }
            case 1732:
                var17 = {};
                var22 = _closure1_slot0;
                var18 = _closure1_slot2;
                var21 = 24;
                var19 = var18[var21];
                var19 = var22.bind(var4)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var18[var21];
                var18 = var22.bind(var4)(var18);
                var18 = var18.t;
                var18 = var18.l4Emac;
                var18 = var19.bind(var20)(var18);
                var17.label = var18;
                var18 = 'destructive';
                var17.variant = var18;
                var19 = function() {
                    _fun92621: for (var _fun92621_ip = 0;;) switch (_fun92621_ip) {
                        case 0:
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 26;
                            var3 = var2[var0];
                            var0 = undefined;
                            var6 = var4.bind(var0)(var3);
                            var5 = var6.openLazy;
                            var4 = _closure1_slot0;
                            var3 = 29;
                            var3 = var2[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = 33;
                            var3 = var2[var3];
                            var2 = var2.paths;
                            var4 = var4.bind(var0)(var3, var2);
                            var3 = _closure1_slot14;
                            var2 = {};
                            var7 = _closure2_slot14;
                            var2.userId = var7;
                            var9 = _closure2_slot2;
                            var7 = null;
                            var9 = var7 == var9;
                            var7 = undefined;
                            if (var9) {
                                _fun92621_ip = 106;
                                continue _fun92621
                            }
                        case 97:
                            var8 = _closure2_slot2;
                            var7 = var8.id;
                        case 106:
                            var2.channelId = var7;
                            var7 = function() {
                                _fun92622: for (var _fun92622_ip = 0;;) switch (_fun92622_ip) {
                                    case 0:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 32;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var4 = var2.bind(var0)(var1);
                                        var3 = var4.showBlockSuccessToast;
                                        var2 = _closure2_slot14;
                                        var6 = _closure2_slot2;
                                        var1 = null;
                                        var6 = var1 == var6;
                                        var1 = undefined;
                                        if (var6) {
                                            _fun92622_ip = 62;
                                            continue _fun92622
                                        }
                                    case 53:
                                        var5 = _closure2_slot2;
                                        var1 = var5.id;
                                    case 62:
                                        var1 = var3.bind(var4)(var2, var1);
                                        return var0;
                                }
                            };
                            var2.onSuccess = var7;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 22;
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
                var17.action = var19;
                var17 = var14.bind(var9)(var17);
                if (var15) {
                    _fun92609_ip = 1943;
                    continue _fun92609
                }
            case 1822:
                var17 = _closure1_slot0;
                var19 = _closure1_slot2;
                var15 = 35;
                var15 = var19[var15];
                var17 = var17.bind(var4)(var15);
                var15 = var17.isAndroid;
                var15 = var15.bind(var17)();
                if (!var15) {
                    _fun92609_ip = 2028;
                    continue _fun92609
                }
            case 1858:
                var17 = var9.push;
                var15 = {};
                var23 = _closure1_slot0;
                var19 = _closure1_slot2;
                var20 = var19[var21];
                var20 = var23.bind(var4)(var20);
                var22 = var20.intl;
                var20 = var22.string;
                var19 = var19[var21];
                var19 = var23.bind(var4)(var19);
                var19 = var19.t;
                var19 = var19.TbHyMG;
                var19 = var20.bind(var22)(var19);
                var15.label = var19;
                var15.variant = var18;
                var19 = function() {
                    var2 = _closure2_slot7;
                    var1 = {};
                    var0 = 'REPORT';
                    var1.action = var0;
                    var0 = _closure2_slot8;
                    var1.analyticsLocations = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 36;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.alertUserReported;
                    var2 = var2.bind(var3)();
                    var3 = _closure1_slot1;
                    var2 = 37;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot9;
                    var2 = var1.TNS_USER_REPORT_SUBMITTED;
                    var1 = {};
                    var5 = _closure2_slot14;
                    var1.reported_user_id = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var15.action = var19;
                var15 = var17.bind(var9)(var15);
                _fun92609_ip = 2028;
                continue _fun92609;
            case 1943:
                var17 = var9.push;
                var15 = {};
                var23 = _closure1_slot0;
                var19 = _closure1_slot2;
                var20 = var19[var21];
                var20 = var23.bind(var4)(var20);
                var22 = var20.intl;
                var20 = var22.string;
                var19 = var19[var21];
                var19 = var23.bind(var4)(var19);
                var19 = var19.t;
                var19 = var19.wqHXNt;
                var19 = var20.bind(var22)(var19);
                var15.label = var19;
                var15.variant = var18;
                var18 = function() {
                    _fun92623: for (var _fun92623_ip = 0;;) switch (_fun92623_ip) {
                        case 0:
                            var3 = _closure2_slot7;
                            var1 = {};
                            var0 = 'REPORT';
                            var1.action = var0;
                            var0 = _closure2_slot8;
                            var1.analyticsLocations = var0;
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var3 = _closure2_slot15;
                            var1 = '@me';
                            var6 = undefined;
                            if (!(var1 !== var3)) {
                                _fun92623_ip = 65;
                                continue _fun92623
                            }
                        case 49:
                            var3 = _closure2_slot15;
                            var1 = null;
                            var6 = undefined;
                            if (!(var1 !== var3)) {
                                _fun92623_ip = 65;
                                continue _fun92623
                            }
                        case 61:
                            var6 = _closure2_slot15;
                        case 65:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var4 = 34;
                            var4 = var3[var4];
                            var5 = var5.bind(var0)(var4);
                            var4 = var5.showReportModalForUser;
                            var2 = _closure2_slot0;
                            var2 = var4.bind(var5)(var2, var6);
                            var2 = _closure1_slot1;
                            var1 = 26;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                var15.action = var18;
                var15 = var17.bind(var9)(var15);
            case 2028:
                if (!var12) {
                    _fun92609_ip = 2194;
                    continue _fun92609
                }
            case 2034:
                var15 = var10.push;
                var12 = {};
                var20 = _closure1_slot0;
                var17 = _closure1_slot2;
                var18 = var17[var21];
                var18 = var20.bind(var4)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var17[var21];
                var17 = var20.bind(var4)(var17);
                var17 = var17.t;
                var17 = var17.Sd8Ixw;
                var17 = var18.bind(var19)(var17);
                var12.label = var17;
                var17 = function() {
                    var3 = _closure2_slot7;
                    var2 = {};
                    var0 = 'PRESS_INVITE_TO_SERVER';
                    var2.action = var0;
                    var0 = _closure2_slot8;
                    var2.analyticsLocations = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.showGuildInviteActionSheet;
                    var2 = _closure2_slot14;
                    var1 = _closure2_slot9;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var12.action = var17;
                var12 = var15.bind(var10)(var12);
                _fun92609_ip = 2194;
                continue _fun92609;
            case 2117:
                var12 = {};
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var15 = 24;
                var17 = var20[var15];
                var17 = var19.bind(var4)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var15 = var20[var15];
                var15 = var19.bind(var4)(var15);
                var15 = var15.t;
                var15 = var15.XyHpKH;
                var15 = var17.bind(var18)(var15);
                var12.label = var15;
                var15 = function() {
                    _fun92620: for (var _fun92620_ip = 0;;) switch (_fun92620_ip) {
                        case 0:
                            var2 = _closure2_slot7;
                            var1 = {};
                            var0 = 'UNBLOCK';
                            var1.action = var0;
                            var0 = _closure2_slot8;
                            var1.analyticsLocations = var0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 30;
                            var1 = var3[var1];
                            var7 = var2.bind(var0)(var1);
                            var6 = var7.unblockUser;
                            var4 = _closure2_slot14;
                            var1 = {};
                            var8 = _closure2_slot9;
                            var1.location = var8;
                            var1 = var6.bind(var7)(var4, var1);
                            var1 = _closure2_slot13;
                            var1 = var1.bind(var0)();
                            var1 = 32;
                            var1 = var3[var1];
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.showUnblockSuccessToast;
                            var2 = _closure2_slot14;
                            var6 = _closure2_slot2;
                            var1 = null;
                            var6 = var1 == var6;
                            var1 = undefined;
                            if (var6) {
                                _fun92620_ip = 136;
                                continue _fun92620
                            }
                        case 127:
                            var5 = _closure2_slot2;
                            var1 = var5.id;
                        case 136:
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var12.action = var15;
                var12 = var14.bind(var9)(var12);
            case 2194:
                if (!var11) {
                    _fun92609_ip = 2295;
                    continue _fun92609
                }
            case 2197:
                var12 = var10.push;
                var11 = {};
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var14 = 24;
                var15 = var19[var14];
                var15 = var18.bind(var4)(var15);
                var17 = var15.intl;
                var15 = var17.string;
                var14 = var19[var14];
                var14 = var18.bind(var4)(var14);
                var14 = var14.t;
                if (var13) {
                    _fun92609_ip = 2264;
                    continue _fun92609
                }
            case 2251:
                var13 = var14.bHa9kN;
                var13 = var15.bind(var17)(var13);
                _fun92609_ip = 2275;
                continue _fun92609;
            case 2264:
                var14 = var14.ygslb0;
                var13 = var15.bind(var17)(var14);
            case 2275:
                var11.label = var13;
                var13 = function() {
                    _fun92626: for (var _fun92626_ip = 0;;) switch (_fun92626_ip) {
                        case 0:
                            var3 = _closure2_slot7;
                            var2 = {};
                            var4 = _closure2_slot12;
                            var0 = 'RING';
                            if (!var4) {
                                _fun92626_ip = 28;
                                continue _fun92626
                            }
                        case 22:
                            var0 = 'STOP_RINGING';
                        case 28:
                            var2.action = var0;
                            var0 = _closure2_slot8;
                            var2.analyticsLocations = var0;
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var3 = _closure2_slot12;
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var4 = 38;
                            var4 = var6[var4];
                            var4 = var5.bind(var0)(var4);
                            if (var3) {
                                _fun92626_ip = 204;
                                continue _fun92626
                            }
                        case 81:
                            var7 = var4.ring;
                            var6 = _closure2_slot4;
                            var3 = _closure2_slot0;
                            var3 = var3.id;
                            var5 = new Array(1);
                            var5[0] = var3;
                            var3 = 'user_profile_overflow_menu';
                            var3 = var7.bind(var4)(var6, var5, var3);
                            var3 = _closure2_slot11;
                            if (!var3) {
                                _fun92626_ip = 138;
                                continue _fun92626
                            }
                        case 128:
                            var6 = _closure2_slot5;
                            var5 = null;
                            var3 = var5 != var6;
                        case 138:
                            if (!var3) {
                                _fun92626_ip = 237;
                                continue _fun92626
                            }
                        case 141:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 26;
                            var3 = var5[var3];
                            var6 = var6.bind(var0)(var3);
                            var3 = var6.hideActionSheet;
                            var3 = var3.bind(var6)();
                            var3 = _closure1_slot0;
                            var2 = 39;
                            var2 = var5[var2];
                            var5 = var3.bind(var0)(var2);
                            var3 = var5.openChannelCallModal;
                            var2 = _closure2_slot5;
                            var2 = var3.bind(var5)(var2);
                            _fun92626_ip = 237;
                            continue _fun92626;
                        case 204:
                            var3 = var4.stopRinging;
                            var2 = _closure2_slot4;
                            var1 = _closure2_slot0;
                            var5 = var1.id;
                            var1 = new Array(1);
                            var1[0] = var5;
                            var1 = var3.bind(var4)(var2, var1);
                        case 237:
                            return var0;
                    }
                };
                var11.action = var13;
                var11 = var12.bind(var10)(var11);
            case 2295:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var11 = 40;
                var11 = var13[var11];
                var11 = var12.bind(var4)(var11);
                var12 = var11.DeveloperMode;
                var11 = var12.getSetting;
                var11 = var11.bind(var12)();
                var12 = var11;
                if (!var12) {
                    _fun92609_ip = 2340;
                    continue _fun92609
                }
            case 2337:
                var12 = var16;
            case 2340:
                if (var12) {
                    _fun92609_ip = 2425;
                    continue _fun92609
                }
            case 2343:
                var13 = var10.push;
                var12 = {};
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var14 = 24;
                var15 = var19[var14];
                var15 = var18.bind(var4)(var15);
                var17 = var15.intl;
                var15 = var17.string;
                var14 = var19[var14];
                var14 = var18.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.y5MwJy;
                var14 = var15.bind(var17)(var14);
                var12.label = var14;
                var14 = function() {
                    var3 = _closure2_slot7;
                    var2 = {};
                    var0 = 'COPY_USERNAME';
                    var2.action = var0;
                    var0 = _closure2_slot8;
                    var2.analyticsLocations = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var5 = 41;
                    var5 = var4[var5];
                    var6 = var3.bind(var0)(var5);
                    var5 = var6.copy;
                    var7 = _closure1_slot1;
                    var2 = 42;
                    var2 = var4[var2];
                    var9 = var7.bind(var0)(var2);
                    var8 = var9.getUserTag;
                    var7 = _closure2_slot0;
                    var2 = {
                        'decoration': 'never',
                        'identifiable': 'always'
                    };
                    var2 = var8.bind(var9)(var7, var2);
                    var2 = var5.bind(var6)(var2);
                    var2 = 43;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.presentUsernameCopied;
                    var2 = var2.bind(var3)();
                    var1 = _closure2_slot13;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var12.action = var14;
                var12 = var13.bind(var10)(var12);
            case 2425:
                if (!var11) {
                    _fun92609_ip = 2546;
                    continue _fun92609
                }
            case 2428:
                var12 = var10.push;
                var11 = {};
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var13 = 24;
                var14 = var18[var13];
                var14 = var17.bind(var4)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var18[var13];
                var13 = var17.bind(var4)(var13);
                var13 = var13.t;
                if (var16) {
                    _fun92609_ip = 2515;
                    continue _fun92609
                }
            case 2482:
                var16 = var13["/AXYnE"];
                var16 = var14.bind(var15)(var16);
                var11.label = var16;
                var16 = function() {
                    var3 = _closure2_slot7;
                    var2 = {};
                    var0 = 'COPY_USER_ID';
                    var2.action = var0;
                    var0 = _closure2_slot8;
                    var2.analyticsLocations = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 41;
                    var2 = var4[var2];
                    var6 = var3.bind(var0)(var2);
                    var5 = var6.copy;
                    var2 = _closure2_slot14;
                    var2 = var5.bind(var6)(var2);
                    var2 = 43;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.presentIdCopied;
                    var2 = var2.bind(var3)();
                    var1 = _closure2_slot13;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var11.action = var16;
                var16 = var12.bind(var10)(var11);
                _fun92609_ip = 2546;
                continue _fun92609;
            case 2515:
                var13 = var13.QvQeLv;
                var13 = var14.bind(var15)(var13);
                var11.label = var13;
                var13 = function() {
                    _fun92628: for (var _fun92628_ip = 0;;) switch (_fun92628_ip) {
                        case 0:
                            var4 = new Array(0);
                            var3 = var4.push;
                            var2 = {};
                            var10 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var9 = 24;
                            var7 = var6[var9];
                            var0 = undefined;
                            var7 = var10.bind(var0)(var7);
                            var11 = var7.intl;
                            var8 = var11.string;
                            var7 = var6[var9];
                            var7 = var10.bind(var0)(var7);
                            var7 = var7.t;
                            var7 = var7.y5MwJy;
                            var7 = var8.bind(var11)(var7);
                            var2.label = var7;
                            var7 = function() {
                                var3 = _closure2_slot7;
                                var2 = {};
                                var0 = 'COPY_USERNAME';
                                var2.action = var0;
                                var0 = _closure2_slot8;
                                var2.analyticsLocations = var0;
                                var0 = undefined;
                                var2 = var3.bind(var0)(var2);
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var5 = 41;
                                var5 = var4[var5];
                                var6 = var3.bind(var0)(var5);
                                var5 = var6.copy;
                                var7 = _closure1_slot1;
                                var2 = 42;
                                var2 = var4[var2];
                                var9 = var7.bind(var0)(var2);
                                var8 = var9.getUserTag;
                                var7 = _closure2_slot0;
                                var2 = {
                                    'decoration': 'never',
                                    'identifiable': 'always'
                                };
                                var2 = var8.bind(var9)(var7, var2);
                                var2 = var5.bind(var6)(var2);
                                var2 = 43;
                                var2 = var4[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.presentUsernameCopied;
                                var2 = var2.bind(var3)();
                                var1 = _closure2_slot13;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var2.onPress = var7;
                            var2 = var3.bind(var4)(var2);
                            var3 = var4.push;
                            var2 = {};
                            var7 = var6[var9];
                            var7 = var10.bind(var0)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var6 = var6[var9];
                            var6 = var10.bind(var0)(var6);
                            var6 = var6.t;
                            var6 = var6["/AXYnE"];
                            var6 = var7.bind(var8)(var6);
                            var2.label = var6;
                            var6 = function() {
                                var3 = _closure2_slot7;
                                var2 = {};
                                var0 = 'COPY_USER_ID';
                                var2.action = var0;
                                var0 = _closure2_slot8;
                                var2.analyticsLocations = var0;
                                var0 = undefined;
                                var2 = var3.bind(var0)(var2);
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 41;
                                var2 = var4[var2];
                                var6 = var3.bind(var0)(var2);
                                var5 = var6.copy;
                                var2 = _closure2_slot14;
                                var2 = var5.bind(var6)(var2);
                                var2 = 43;
                                var2 = var4[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.presentIdCopied;
                                var2 = var2.bind(var3)();
                                var1 = _closure2_slot13;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var2.onPress = var6;
                            var2 = var3.bind(var4)(var2);
                            var3 = _closure2_slot0;
                            var6 = var3.avatar;
                            var3 = null;
                            if (!(var3 != var6)) {
                                _fun92628_ip = 264;
                                continue _fun92628
                            }
                        case 183:
                            var7 = var4.push;
                            var6 = {};
                            var12 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var10 = var8[var9];
                            var10 = var12.bind(var0)(var10);
                            var11 = var10.intl;
                            var10 = var11.string;
                            var8 = var8[var9];
                            var8 = var12.bind(var0)(var8);
                            var8 = var8.t;
                            var8 = var8.gERDvM;
                            var8 = var10.bind(var11)(var8);
                            var6.label = var8;
                            var8 = function() {
                                _fun92631: for (var _fun92631_ip = 0;;) switch (_fun92631_ip) {
                                    case 0:
                                        var3 = _closure2_slot7;
                                        var2 = {};
                                        var0 = 'COPY_AVATAR_IMAGE_LINK';
                                        var2.action = var0;
                                        var0 = _closure2_slot8;
                                        var2.analyticsLocations = var0;
                                        var0 = undefined;
                                        var2 = var3.bind(var0)(var2);
                                        var4 = _closure1_slot1;
                                        var5 = _closure1_slot2;
                                        var3 = 44;
                                        var3 = var5[var3];
                                        var7 = var4.bind(var0)(var3);
                                        var6 = var7.getUserAvatarURL;
                                        var5 = _closure2_slot0;
                                        var4 = _closure1_slot10;
                                        var3 = true;
                                        var6 = var6.bind(var7)(var5, var3, var4);
                                        var3 = null;
                                        if (!(var3 != var6)) {
                                            _fun92631_ip = 140;
                                            continue _fun92631
                                        }
                                    case 87:
                                        var3 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var2 = 41;
                                        var2 = var4[var2];
                                        var5 = var3.bind(var0)(var2);
                                        var2 = var5.copy;
                                        var2 = var2.bind(var5)(var6);
                                        var2 = 43;
                                        var2 = var4[var2];
                                        var3 = var3.bind(var0)(var2);
                                        var2 = var3.presentLinkCopied;
                                        var2 = var2.bind(var3)();
                                    case 140:
                                        var1 = _closure2_slot13;
                                        var1 = var1.bind(var0)();
                                        return var0;
                                }
                            };
                            var6.onPress = var8;
                            var6 = var7.bind(var4)(var6);
                        case 264:
                            var6 = _closure2_slot1;
                            if (!(var3 != var6)) {
                                _fun92628_ip = 396;
                                continue _fun92628
                            }
                        case 275:
                            var7 = _closure2_slot1;
                            var6 = var7.getBannerURL;
                            var2 = {};
                            var8 = true;
                            var2.canAnimate = var8;
                            var8 = _closure1_slot10;
                            var2.size = var8;
                            var2 = var6.bind(var7)(var2);
                            var _closure3_slot0 = var2;
                            if (!(var3 != var2)) {
                                _fun92628_ip = 396;
                                continue _fun92628
                            }
                        case 315:
                            var3 = var4.push;
                            var2 = {};
                            var10 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var7 = var6[var9];
                            var7 = var10.bind(var0)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var6 = var6[var9];
                            var6 = var10.bind(var0)(var6);
                            var6 = var6.t;
                            var6 = var6.hsNv0R;
                            var6 = var7.bind(var8)(var6);
                            var2.label = var6;
                            var5 = function() {
                                var3 = _closure2_slot7;
                                var2 = {};
                                var0 = 'COPY_BANNER_IMAGE_LINK';
                                var2.action = var0;
                                var0 = _closure2_slot8;
                                var2.analyticsLocations = var0;
                                var0 = undefined;
                                var2 = var3.bind(var0)(var2);
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 41;
                                var2 = var4[var2];
                                var6 = var3.bind(var0)(var2);
                                var5 = var6.copy;
                                var2 = _closure3_slot0;
                                var2 = var5.bind(var6)(var2);
                                var2 = 43;
                                var2 = var4[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.presentLinkCopied;
                                var2 = var2.bind(var3)();
                                var1 = _closure2_slot13;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var2.onPress = var5;
                            var2 = var3.bind(var4)(var2);
                        case 396:
                            var8 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 45;
                            var1 = var5[var1];
                            var3 = var8.bind(var0)(var1);
                            var2 = var3.showSimpleActionSheet;
                            var1 = {};
                            var1.options = var4;
                            var4 = 'copy-info';
                            var1.key = var4;
                            var4 = {};
                            var6 = var5[var9];
                            var6 = var8.bind(var0)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var5[var9];
                            var5 = var8.bind(var0)(var5);
                            var5 = var5.t;
                            var5 = var5.QvQeLv;
                            var5 = var6.bind(var7)(var5);
                            var4.title = var5;
                            var1.header = var4;
                            var4 = 'stack';
                            var1.stackingBehavior = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var11.action = var13;
                var11 = var12.bind(var10)(var11);
            case 2546:
                var3 = var0 != var3;
                if (!var3) {
                    _fun92609_ip = 2557;
                    continue _fun92609
                }
            case 2553:
                var3 = var0 != var8;
            case 2557:
                if (!var3) {
                    _fun92609_ip = 2642;
                    continue _fun92609
                }
            case 2560:
                var8 = var10.push;
                var3 = {};
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var11 = 24;
                var12 = var15[var11];
                var12 = var14.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11.PHjkRE;
                var11 = var12.bind(var13)(var11);
                var3.label = var11;
                var11 = function() {
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 46;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = _closure2_slot14;
                    var0.userId = var4;
                    var4 = _closure2_slot3;
                    var0.selectedChannel = var4;
                    var4 = _closure2_slot13;
                    var0.showUserProfile = var4;
                    var3 = _closure2_slot8;
                    var0.analyticsLocations = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3.action = var11;
                var3 = var8.bind(var10)(var3);
            case 2642:
                var3 = var10.length;
                if (!(var6 === var3)) {
                    _fun92609_ip = 2662;
                    continue _fun92609
                }
            case 2651:
                var3 = var9.length;
                var0 = null;
                if (!(var6 !== var3)) {
                    _fun92609_ip = 2758;
                    continue _fun92609
                }
            case 2662:
                var3 = _closure1_slot16;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = var8[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.AnalyticsLocationProvider;
                var1 = {};
                var1.value = var5;
                var5 = 47;
                var5 = var8[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.ContextMenu;
                var5 = {};
                var8 = new Array(2);
                var8[0] = var10;
                var8[1] = var9;
                var5.items = var8;
                var7 = function arg0() {
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
                    var3 = _closure1_slot16;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 48;
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
                    var4 = 24;
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
                    var4 = 49;
                    var4 = var8[var4];
                    var4 = var5.bind(var2)(var4);
                    var5 = var4.MoreHorizontalIcon;
                    var4 = {};
                    var4.size = var7;
                    var7 = _closure1_slot1;
                    var6 = 50;
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
            case 2758:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 3949, 1372, 3102, 1672, 660, 3524, 9898, 33, 566, 12051, 12057, 12026, 7045, 5777, 5631, 7025, 8099, 3962, 8472, 5264, 481, 7421, 1234, 3946, 3279, 4561, 12058, 1307, 8091, 9900, 5975, 9899, 6560, 478, 9086, 795, 8090, 7947, 1348, 5343, 3237, 3149, 1417, 7801, 12028, 9016, 7579, 9017, 671, 2]);