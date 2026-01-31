// modules/activities/EmbeddedActivitiesActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var0 = function() { // Original name: _runPrimaryAppCommandOrJoinEmbeddedActivity, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun62890: for (var _fun62890_ip = 0;;) switch (_fun62890_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun62890_ip = 1940;
                            continue _fun62890
                        }
                    case 15:
                        var13 = var1.channelId;
                        var12 = var1.applicationId;
                        var8 = var1.isStart;
                        var30 = var1.analyticsLocations;
                        var29 = var1.locationObject;
                        var18 = var1.embeddedActivitiesManager;
                        var31 = var1.componentId;
                        var23 = var1.commandOrigin;
                        var22 = var1.sectionName;
                        var21 = var1.source;
                        var20 = var1.onExecutedCallback;
                        var28 = var1.referrerId;
                        var34 = var1.customId;
                        var27 = var1.inviterUserId;
                        var19 = var1.onConfirmActivityLaunchChecksAlertOpen;
                        var9 = undefined;
                        var16 = undefined;
                        var11 = undefined;
                        var2 = undefined;
                        var14 = undefined;
                        var33 = undefined;
                        var32 = undefined;
                        var15 = undefined;
                        var25 = undefined;
                        var5 = undefined;
                        SaveGenerator(address = 126);
                    case 124:
                        return var9;
                    case 126:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun62890_ip = 1937;
                            continue _fun62890
                        }
                    case 135:
                        var17 = _closure1_slot10;
                        var10 = var17.getChannel;
                        var3 = var13;
                        var3 = var10.bind(var17)(var3);
                        var16 = var3;
                        var10 = null;
                        var3 = var10 == var3;
                        var17 = undefined;
                        if (var3) {
                            _fun62890_ip = 182;
                            continue _fun62890
                        }
                    case 169:
                        var24 = var16;
                        var3 = var24.getGuildId;
                        var17 = var3.bind(var24)();
                    case 182:
                        var24 = var10 != var17;
                        var3 = undefined;
                        if (!var24) {
                            _fun62890_ip = 194;
                            continue _fun62890
                        }
                    case 191:
                        var3 = var17;
                    case 194:
                        var11 = var3;
                        if (!(var10 == var3)) {
                            _fun62890_ip = 239;
                            continue _fun62890
                        }
                    case 201:
                        var3 = var16;
                        var17 = var10 == var3;
                        var3 = undefined;
                        if (var17) {
                            _fun62890_ip = 226;
                            continue _fun62890
                        }
                    case 213:
                        var24 = var16;
                        var17 = var24.isPrivate;
                        var3 = var17.bind(var24)();
                    case 226:
                        if (!(var10 != var3)) {
                            _fun62890_ip = 1932;
                            continue _fun62890
                        }
                    case 233:
                        if (!var3) {
                            _fun62890_ip = 1932;
                            continue _fun62890
                        }
                    case 239:
                        var24 = _closure1_slot5;
                        var17 = var24.getApplication;
                        var3 = var12;
                        var26 = var17.bind(var24)(var3);
                        var17 = var10 != var26;
                        var3 = var17;
                        if (!var17) {
                            _fun62890_ip = 298;
                            continue _fun62890
                        }
                    case 267:
                        var24 = _closure1_slot0;
                        var35 = _closure1_slot2;
                        var17 = 19;
                        var17 = var35[var17];
                        var24 = var24.bind(var9)(var17);
                        var17 = var24.canLaunchFrame;
                        var3 = var17.bind(var24)(var26);
                    case 298:
                        var2 = var3;
                        var17 = _closure1_slot0;
                        var24 = _closure1_slot2;
                        var3 = 20;
                        var3 = var24[var3];
                        var17 = var17.bind(var9)(var3);
                        var3 = var17.createNonce;
                        var14 = var3.bind(var17)();
                    case 331: // try_start_0
                        var24 = _closure1_slot7;
                        var17 = var24.getWindowOpen;
                        var3 = _closure1_slot23;
                        var3 = var3.ACTIVITY_POPOUT;
                        var3 = var17.bind(var24)(var3);
                        var17 = _closure1_slot0;
                        var24 = _closure1_slot2;
                        var3 = 21;
                        var3 = var24[var3];
                        var26 = var17.bind(var9)(var3);
                        var3 = var26.leaveCurrentFrame;
                        var3 = var3.bind(var26)();
                        var3 = 22;
                        var3 = var24[var3];
                        var24 = var17.bind(var9)(var3);
                        var17 = var24.tryLaunchAsFrame;
                        var3 = {};
                        var26 = var12;
                        var3.applicationId = var26;
                        var3 = var17.bind(var24)(var3);
                        if (var3) {
                            _fun62890_ip = 1597;
                            continue _fun62890
                        }
                    case 424:
                        var24 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var17 = 23;
                        var3 = var3[var17];
                        var26 = var24.bind(var9)(var3);
                        var24 = var26.dispatch;
                        var3 = {};
                        var35 = 'EMBEDDED_ACTIVITY_LAUNCH_START';
                        var3.type = var35;
                        var35 = var14;
                        var3.nonce = var35;
                        var35 = var12;
                        var3.applicationId = var35;
                        var35 = var13;
                        var36 = var10 != var35;
                        var35 = null;
                        if (!var36) {
                            _fun62890_ip = 489;
                            continue _fun62890
                        }
                    case 486:
                        var35 = var13;
                    case 489:
                        var3.channelId = var35;
                        var3.componentId = var31;
                        var31 = var30;
                        var3.analyticsLocations = var31;
                        var31 = var21;
                        var3.source = var31;
                        var31 = var23;
                        var3.commandOrigin = var31;
                        var31 = var27;
                        var3.inviterUserId = var31;
                        var31 = {};
                        var31.customId = var34;
                        var34 = var28;
                        var31.referrerId = var34;
                        var3.launchParams = var31;
                        var3 = var24.bind(var26)(var3);
                        var26 = _closure1_slot41;
                        var24 = var12;
                        var3 = var13;
                        var31 = var10 != var3;
                        var3 = undefined;
                        if (!var31) {
                            _fun62890_ip = 576;
                            continue _fun62890
                        }
                    case 573:
                        var3 = var13;
                    case 576:
                        var3 = var26.bind(var9)(var24, var3);
                        SaveGenerator(address = 586);
                    case 584:
                        return var3;
                    case 586:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 24);
                        if (var24) {
                            _fun62890_ip = 1594;
                            continue _fun62890
                        }
                    case 595:
                        var33 = var3;
                        var26 = _closure1_slot1;
                        var24 = _closure1_slot2;
                        var24 = var24[var17];
                        var31 = var26.bind(var9)(var24);
                        var26 = var31.dispatch;
                        var24 = {};
                        var34 = 'EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET';
                        var24.type = var34;
                        var34 = var12;
                        var24.applicationId = var34;
                        var34 = var13;
                        var35 = var10 != var34;
                        var34 = null;
                        if (!var35) {
                            _fun62890_ip = 652;
                            continue _fun62890
                        }
                    case 649:
                        var34 = var13;
                    case 652:
                        var24.channelId = var34;
                        var24.proxyTicket = var33;
                        var24 = var26.bind(var31)(var24);
                        var26 = _closure1_slot13;
                        var24 = var26.getCurrentUser;
                        var24 = var24.bind(var26)();
                        var32 = var24;
                        if (!(var10 != var24)) {
                            _fun62890_ip = 854;
                            continue _fun62890
                        }
                    case 689:
                        var26 = _closure1_slot1;
                        var31 = _closure1_slot2;
                        var24 = 24;
                        var24 = var31[var24];
                        var26 = var26.bind(var9)(var24);
                        var24 = {};
                        var31 = var8;
                        var33 = _closure1_slot19;
                        if (var31) {
                            _fun62890_ip = 729;
                            continue _fun62890
                        }
                    case 721:
                        var31 = var33.JOIN;
                        _fun62890_ip = 735;
                        continue _fun62890;
                    case 729:
                        var31 = var33.LAUNCH;
                    case 735:
                        var24.type = var31;
                        var31 = var32;
                        var33 = var10 == var31;
                        var31 = undefined;
                        if (var33) {
                            _fun62890_ip = 756;
                            continue _fun62890
                        }
                    case 751:
                        var31 = var32.id;
                    case 756:
                        var24.userId = var31;
                        var31 = var11;
                        var24.guildId = var31;
                        var31 = var13;
                        var24.channelId = var31;
                        var31 = var16;
                        var32 = var10 == var31;
                        var31 = undefined;
                        if (var32) {
                            _fun62890_ip = 794;
                            continue _fun62890
                        }
                    case 786:
                        var32 = var16;
                        var31 = var32.type;
                    case 794:
                        var24.channelType = var31;
                        var31 = var12;
                        var24.applicationId = var31;
                        var24.locationObject = var29;
                        var29 = var30;
                        if (!(var10 == var29)) {
                            _fun62890_ip = 824;
                            continue _fun62890
                        }
                    case 818:
                        var29 = new Array(0);
                        _fun62890_ip = 827;
                        continue _fun62890;
                    case 824:
                        var29 = var30;
                    case 827:
                        var24.analyticsLocations = var29;
                        var29 = var21;
                        var24.source = var29;
                        var24.referrerId = var28;
                        var24.inviterUserId = var27;
                        var24 = var26.bind(var9)(var24);
                    case 854:
                        var24 = var8;
                        if (var24) {
                            _fun62890_ip = 1031;
                            continue _fun62890
                        }
                    case 863:
                        var26 = {};
                        var24 = var12;
                        var26.applicationId = var24;
                        var24 = var13;
                        var26.channelId = var24;
                        var24 = var18;
                        var26.embeddedActivitiesManager = var24;
                        var24 = var8;
                        var26.isStart = var24;
                        var24 = var11;
                        var26.guildId = var24;
                        var24 = function() { // Original name: joinEmbeddedActivity, environment: var4
                            var0 = undefined;
                            var3 = _closure1_slot32;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var24 = var24.bind(var9)(var26);
                        SaveGenerator(address = 916);
                    case 914:
                        return var24;
                    case 916:
                        ResumeGenerator(result_out_reg = 24, return_bool_out_reg = 26);
                        if (var26) {
                            _fun62890_ip = 1028;
                            continue _fun62890
                        }
                    case 922:
                        var25 = var24;
                        var26 = var20;
                        if (!(var10 != var26)) {
                            _fun62890_ip = 939;
                            continue _fun62890
                        }
                    case 932:
                        var26 = var20;
                        var26 = var26.bind(var9)();
                    case 939:
                        var26 = var25;
                        var27 = var26.result;
                        var26 = 'failure';
                        if (!(var26 === var27)) {
                            _fun62890_ip = 1293;
                            continue _fun62890
                        }
                    case 959:
                        var27 = _closure1_slot1;
                        var29 = _closure1_slot2;
                        var26 = 25;
                        var28 = var29[var26];
                        var28 = var27.bind(var9)(var28);
                        var26 = var29[var26];
                        var26 = var27.bind(var9)(var26);
                        var26 = var26.Reasons;
                        var38 = var26.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED;
                        var37 = var25.reason;
                        var26 = var28.prototype;
                        var26 = Object.create(var26, {
                            constructor: {
                                value: var28
                            }
                        });
                        var39 = var26;
                        var25 = new var39[var28](var38, var37, var36);
                        var25 = var25 instanceof Object ? var25 : var26;
                        throw var25;
                    case 1028: // try_end0
                        return var24;
                    case 1031: // try_start_1
                        var24 = var13;
                        if (!(var10 != var24)) {
                            _fun62890_ip = 1531;
                            continue _fun62890
                        }
                    case 1041:
                        var26 = var12;
                        var27 = var16;
                        var16 = var10 == var27;
                        var24 = undefined;
                        if (var16) {
                            _fun62890_ip = 1061;
                            continue _fun62890
                        }
                    case 1056:
                        var24 = var27.type;
                    case 1061:
                        var16 = _closure1_slot21;
                        var16 = var16.GUILD_VOICE;
                        var16 = var24 === var16;
                        var25 = _closure1_slot5;
                        var24 = var25.getApplication;
                        var24 = var24.bind(var25)(var26);
                        var25 = var10 != var24;
                        if (!var25) {
                            _fun62890_ip = 1144;
                            continue _fun62890
                        }
                    case 1097:
                        var28 = _closure1_slot0;
                        var29 = _closure1_slot2;
                        var26 = 29;
                        var26 = var29[var26];
                        var29 = var28.bind(var9)(var26);
                        var28 = var29.hasFlag;
                        var26 = var24.flags;
                        var24 = _closure1_slot20;
                        var24 = var24.EMBEDDED;
                        var25 = var28.bind(var29)(var26, var24);
                    case 1144:
                        var26 = _closure1_slot0;
                        var28 = _closure1_slot2;
                        var24 = 30;
                        var24 = var28[var24];
                        var26 = var26.bind(var9)(var24);
                        var24 = var26.isActivityInTextSupportedForChannel;
                        var24 = var24.bind(var26)(var27);
                        if (!var16) {
                            _fun62890_ip = 1181;
                            continue _fun62890
                        }
                    case 1178:
                        var16 = var25;
                    case 1181:
                        if (var16) {
                            _fun62890_ip = 1187;
                            continue _fun62890
                        }
                    case 1184:
                        var16 = var24;
                    case 1187:
                        if (!var16) {
                            _fun62890_ip = 1531;
                            continue _fun62890
                        }
                    case 1193:
                        var16 = {};
                        var24 = var12;
                        var16.applicationId = var24;
                        var24 = var14;
                        var16.nonce = var24;
                        var24 = var13;
                        var16.channelId = var24;
                        var24 = var11;
                        var16.guildId = var24;
                        var16.commandOrigin = var23;
                        var16.sectionName = var22;
                        var16.source = var21;
                        var16.onExecutedCallback = var20;
                        var16.onConfirmActivityLaunchChecksAlertOpen = var19;
                        var16.embeddedActivitiesManager = var18;
                        var4 = function() { // Original name: maybeSendPrimaryAppCommand, environment: var4
                            var0 = undefined;
                            var3 = _closure1_slot31;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var4 = var4.bind(var9)(var16);
                        SaveGenerator(address = 1267);
                    case 1265:
                        return var4;
                    case 1267:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 16);
                        if (var16) {
                            _fun62890_ip = 1528;
                            continue _fun62890
                        }
                    case 1276:
                        var15 = var4;
                        var18 = var4.result;
                        var16 = 'failure';
                        if (!(var16 !== var18)) {
                            _fun62890_ip = 1369;
                            continue _fun62890
                        }
                    case 1293:
                        var18 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var16 = var16[var17];
                        var19 = var18.bind(var9)(var16);
                        var18 = var19.dispatch;
                        var16 = {};
                        var20 = 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS';
                        var16.type = var20;
                        var20 = var14;
                        var16.nonce = var20;
                        var20 = var12;
                        var16.applicationId = var20;
                        var20 = var13;
                        var21 = var10 != var20;
                        var20 = null;
                        if (!var21) {
                            _fun62890_ip = 1355;
                            continue _fun62890
                        }
                    case 1352:
                        var20 = var13;
                    case 1355:
                        var16.channelId = var20;
                        var16 = var18.bind(var19)(var16);
                    case 1364: // try_end1
                        var16 = true;
                        return var16;
                    case 1369: // try_start_2
                        var16 = var15.reason;
                        var15 = _closure1_slot27;
                        var15 = var15.FAILED_ACTIVITY_LAUNCH_CHECKS;
                        if (!(var16 !== var15)) {
                            _fun62890_ip = 1452;
                            continue _fun62890
                        }
                    case 1389:
                        var16 = _closure1_slot1;
                        var19 = _closure1_slot2;
                        var15 = 25;
                        var18 = var19[var15];
                        var18 = var16.bind(var9)(var18);
                        var15 = var19[var15];
                        var15 = var16.bind(var9)(var15);
                        var15 = var15.Reasons;
                        var38 = var15.PRIMARY_APP_COMMAND_NOT_FOUND;
                        var16 = var18.prototype;
                        var16 = Object.create(var16, {
                            constructor: {
                                value: var18
                            }
                        });
                        var39 = var16;
                        var15 = new var39[var18](var38, var37);
                        var15 = var15 instanceof Object ? var15 : var16;
                        throw var15;
                    case 1452:
                        var16 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var15 = var15[var17];
                        var17 = var16.bind(var9)(var15);
                        var16 = var17.dispatch;
                        var15 = {};
                        var18 = 'EMBEDDED_ACTIVITY_LAUNCH_CANCEL';
                        var15.type = var18;
                        var18 = var14;
                        var15.nonce = var18;
                        var18 = var12;
                        var15.applicationId = var18;
                        var18 = var13;
                        var19 = var10 != var18;
                        var18 = null;
                        if (!var19) {
                            _fun62890_ip = 1514;
                            continue _fun62890
                        }
                    case 1511:
                        var18 = var13;
                    case 1514:
                        var15.channelId = var18;
                        var15 = var16.bind(var17)(var15);
                    case 1523: // try_end2
                        var15 = false;
                        return var15;
                    case 1528:
                        return var4;
                    case 1531: // try_start_3
                        var15 = _closure1_slot1;
                        var17 = _closure1_slot2;
                        var4 = 25;
                        var16 = var17[var4];
                        var16 = var15.bind(var9)(var16);
                        var4 = var17[var4];
                        var4 = var15.bind(var9)(var4);
                        var4 = var4.Reasons;
                        var38 = var4.INVALID_CHANNEL;
                        var15 = var16.prototype;
                        var15 = Object.create(var15, {
                            constructor: {
                                value: var16
                            }
                        });
                        var39 = var15;
                        var4 = new var39[var16](var38, var37);
                        var4 = var4 instanceof Object ? var4 : var15;
                        throw var4;
                    case 1594: // try_end3
                        return var3;
                    case 1597:
                        var3 = true;
                        return var3;
                    case 1602: // catch_target0 // catch_target1 // catch_target2 // catch_target3
                        CatchBlockStart(arg_register = 7);
                        if (var2) {
                            _fun62890_ip = 1927;
                            continue _fun62890
                        }
                    case 1610:
                        var2 = var11;
                        if (!(var10 == var2)) {
                            _fun62890_ip = 1651;
                            continue _fun62890
                        }
                    case 1617:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 26;
                        var2 = var4[var2];
                        var2 = var3.bind(var9)(var2);
                        var2 = var2.EmbeddedActivityLocationKind;
                        var2 = var2.PRIVATE_CHANNEL;
                        _fun62890_ip = 1683;
                        continue _fun62890;
                    case 1651:
                        var4 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var3 = 26;
                        var3 = var15[var3];
                        var3 = var4.bind(var9)(var3);
                        var3 = var3.EmbeddedActivityLocationKind;
                        var2 = var3.GUILD_CHANNEL;
                    case 1683:
                        var5 = var2;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 23;
                        var2 = var4[var2];
                        var4 = var3.bind(var9)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var15 = 'EMBEDDED_ACTIVITY_LAUNCH_FAIL';
                        var2.type = var15;
                        var2.nonce = var14;
                        var2.applicationId = var12;
                        var12 = var13;
                        var14 = var10 != var12;
                        var12 = null;
                        if (!var14) {
                            _fun62890_ip = 1745;
                            continue _fun62890
                        }
                    case 1742:
                        var12 = var13;
                    case 1745:
                        var2.channelId = var12;
                        var12 = var11;
                        var12 = var10 != var12;
                        var10 = null;
                        if (!var12) {
                            _fun62890_ip = 1764;
                            continue _fun62890
                        }
                    case 1761:
                        var10 = var11;
                    case 1764:
                        var2.guildId = var10;
                        var2.isStart = var8;
                        var10 = var7;
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var8 = 25;
                        var8 = var12[var8];
                        var8 = var11.bind(var9)(var8);
                        var8 = var10 instanceof var8;
                        if (var8) {
                            _fun62890_ip = 1905;
                            continue _fun62890
                        }
                    case 1803:
                        var11 = var7;
                        var12 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var10 = 27;
                        var8 = var8[var10];
                        var8 = var12.bind(var9)(var8);
                        var8 = var11 instanceof var8;
                        if (var8) {
                            _fun62890_ip = 1905;
                            continue _fun62890
                        }
                    case 1833:
                        var11 = var7;
                        var12 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var8 = 28;
                        var8 = var13[var8];
                        var8 = var12.bind(var9)(var8);
                        var8 = var11 instanceof var8;
                        if (var8) {
                            _fun62890_ip = 1905;
                            continue _fun62890
                        }
                    case 1863:
                        var8 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var10];
                        var9 = var8.bind(var9)(var6);
                        var38 = var7;
                        var8 = var9.prototype;
                        var8 = Object.create(var8, {
                            constructor: {
                                value: var9
                            }
                        });
                        var39 = var8;
                        var6 = new var39[var9](var38, var37);
                        var6 = var6 instanceof Object ? var6 : var8;
                        _fun62890_ip = 1908;
                        continue _fun62890;
                    case 1905:
                        var6 = var7;
                    case 1908:
                        var2.error = var6;
                        var2.locationKind = var5;
                        var2 = var3.bind(var4)(var2);
                        var2 = false;
                        return var2;
                    case 1927:
                        var2 = false;
                        return var2;
                    case 1932:
                        var2 = false;
                        return var2;
                    case 1937:
                        return var1;
                    case 1940:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot30 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot30 = var0;
    var0 = function() { // Original name: _maybeSendPrimaryAppCommand, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun62895: for (var _fun62895_ip = 0;;) switch (_fun62895_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun62895_ip = 962;
                            continue _fun62895
                        }
                    case 15:
                        var5 = var1.applicationId;
                        var16 = var5;
                        var _closure4_slot0 = var5;
                        var5 = var1.nonce;
                        var _closure4_slot1 = var5;
                        var5 = var1.channelId;
                        var9 = var5;
                        var _closure4_slot2 = var5;
                        var5 = var1.guildId;
                        var17 = var5;
                        var _closure4_slot3 = var5;
                        var5 = var1.commandOrigin;
                        var _closure4_slot4 = var5;
                        var5 = var1.sectionName;
                        var _closure4_slot5 = var5;
                        var5 = var1.source;
                        var _closure4_slot6 = var5;
                        var5 = var1.onExecutedCallback;
                        var _closure4_slot7 = var5;
                        var10 = var1.onConfirmActivityLaunchChecksAlertOpen;
                        var12 = var1.embeddedActivitiesManager;
                        var7 = undefined;
                        var24 = undefined;
                        var _closure4_slot8 = var7;
                        var4 = undefined;
                        var14 = undefined;
                        var _closure4_slot9 = var7;
                        var _closure4_slot10 = var7;
                        var15 = undefined;
                        var18 = undefined;
                        var13 = undefined;
                        var11 = undefined;
                        SaveGenerator(address = 144);
                    case 142:
                        return var7;
                    case 144:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun62895_ip = 959;
                            continue _fun62895
                        }
                    case 153:
                        var8 = null;
                        var24 = null;
                        _closure4_slot8 = var8;
                    case 161: // try_start_0
                        var19 = _closure1_slot1;
                        var20 = _closure1_slot2;
                        var3 = 31;
                        var3 = var20[var3];
                        var20 = var19.bind(var7)(var3);
                        var19 = var9;
                        var3 = var16;
                        var3 = var20.bind(var7)(var19, var3);
                        SaveGenerator(address = 200);
                    case 198:
                        return var3;
                    case 200:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 19);
                        if (var19) {
                            _fun62895_ip = 882;
                            continue _fun62895
                        }
                    case 209:
                        var24 = var3;
                        _closure4_slot8 = var3;
                    case 216: // try_end0
                        var19 = var24;
                        var20 = var19.handler;
                        var21 = _closure1_slot0;
                        var22 = _closure1_slot2;
                        var19 = 32;
                        var19 = var22[var19];
                        var19 = var21.bind(var7)(var19);
                        var19 = var19.ApplicationCommandHandler;
                        var19 = var19.APP_HANDLER;
                        var19 = var20 !== var19;
                        var4 = var19;
                        if (var19) {
                            _fun62895_ip = 500;
                            continue _fun62895
                        }
                    case 270:
                        var21 = _closure1_slot24;
                        var20 = var21.includes;
                        var19 = var16;
                        var19 = var20.bind(var21)(var19);
                        if (var19) {
                            _fun62895_ip = 500;
                            continue _fun62895
                        }
                    case 293:
                        var19 = var9;
                        if (!(var8 != var19)) {
                            _fun62895_ip = 339;
                            continue _fun62895
                        }
                    case 300:
                        var20 = _closure1_slot4;
                        var19 = {};
                        var21 = 'channel';
                        var19.type = var21;
                        var21 = var9;
                        var19.channelId = var21;
                        var19 = var20.bind(var7)(var19);
                        SaveGenerator(address = 330);
                    case 328:
                        return var19;
                    case 330:
                        ResumeGenerator(result_out_reg = 19, return_bool_out_reg = 20);
                        if (var20) {
                            _fun62895_ip = 497;
                            continue _fun62895
                        }
                    case 339:
                        var21 = _closure1_slot4;
                        var20 = {};
                        var22 = 'user';
                        var20.type = var22;
                        var20 = var21.bind(var7)(var20);
                        SaveGenerator(address = 362);
                    case 360:
                        return var20;
                    case 362:
                        ResumeGenerator(result_out_reg = 20, return_bool_out_reg = 21);
                        if (var21) {
                            _fun62895_ip = 494;
                            continue _fun62895
                        }
                    case 371:
                        var23 = _closure1_slot10;
                        var22 = var23.getChannel;
                        var21 = var9;
                        var25 = var22.bind(var23)(var21);
                        var22 = _closure1_slot0;
                        var23 = _closure1_slot2;
                        var21 = 33;
                        var21 = var23[var21];
                        var23 = var22.bind(var7)(var21);
                        var22 = var23.installApplicationOnDemandIfNeeded;
                        var21 = {};
                        var26 = var16;
                        var21.applicationId = var26;
                        var21.channel = var25;
                        var24 = var24.integration_types;
                        var21.commandIntegrationTypes = var24;
                        var21 = var22.bind(var23)(var21);
                        SaveGenerator(address = 447);
                    case 445:
                        return var21;
                    case 447:
                        ResumeGenerator(result_out_reg = 21, return_bool_out_reg = 22);
                        if (var22) {
                            _fun62895_ip = 491;
                            continue _fun62895
                        }
                    case 453:
                        var22 = var21.isAuthorized;
                        if (var22) {
                            _fun62895_ip = 500;
                            continue _fun62895
                        }
                    case 462:
                        var22 = {};
                        var23 = 'failure';
                        var22.result = var23;
                        var23 = _closure1_slot27;
                        var23 = var23.UNAUTHORIZED;
                        var22.reason = var23;
                        return var22;
                    case 491:
                        return var21;
                    case 494:
                        return var20;
                    case 497:
                        return var19;
                    case 500:
                        var20 = _closure1_slot10;
                        var19 = var20.getChannel;
                        var9 = var19.bind(var20)(var9);
                        var14 = var9;
                        _closure4_slot9 = var9;
                        var9 = var17;
                        var19 = var8 != var9;
                        var9 = null;
                        if (!var19) {
                            _fun62895_ip = 547;
                            continue _fun62895
                        }
                    case 533:
                        var20 = _closure1_slot11;
                        var19 = var20.getGuild;
                        var9 = var19.bind(var20)(var17);
                    case 547:
                        _closure4_slot10 = var9;
                        var9 = var14;
                        if (!(var8 != var9)) {
                            _fun62895_ip = 853;
                            continue _fun62895
                        }
                    case 561:
                        if (!var4) {
                            _fun62895_ip = 790;
                            continue _fun62895
                        }
                    case 567:
                        var17 = _closure1_slot5;
                        var9 = var17.getApplication;
                        var4 = var16;
                        var15 = var9.bind(var17)(var4);
                        var9 = _closure1_slot15;
                        var4 = var9.getCurrentEmbeddedActivity;
                        var4 = var4.bind(var9)();
                        var18 = var4;
                        var13 = undefined;
                        var9 = var8 == var4;
                        var4 = undefined;
                        if (var9) {
                            _fun62895_ip = 621;
                            continue _fun62895
                        }
                    case 613:
                        var9 = var18;
                        var4 = var9.applicationId;
                    case 621:
                        if (!(var8 != var4)) {
                            _fun62895_ip = 657;
                            continue _fun62895
                        }
                    case 625:
                        var17 = _closure1_slot5;
                        var9 = var17.getApplication;
                        var4 = var18;
                        var19 = var8 == var4;
                        var4 = undefined;
                        if (var19) {
                            _fun62895_ip = 652;
                            continue _fun62895
                        }
                    case 647:
                        var4 = var18.applicationId;
                    case 652:
                        var13 = var9.bind(var17)(var4);
                    case 657:
                        var9 = _closure1_slot13;
                        var4 = var9.getCurrentUser;
                        var4 = var4.bind(var9)();
                        var11 = var4;
                        if (!(var8 != var4)) {
                            _fun62895_ip = 790;
                            continue _fun62895
                        }
                    case 677:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var4 = 34;
                        var4 = var9[var4];
                        var9 = var8.bind(var7)(var4);
                        var8 = var9.confirmActivityLaunchChecks;
                        var4 = {};
                        var4.applicationId = var16;
                        var4.application = var15;
                        var4.channel = var14;
                        var4.currentEmbeddedApplication = var13;
                        var4.embeddedActivitiesManager = var12;
                        var4.user = var11;
                        var4.onConfirmActivityLaunchChecksAlertOpen = var10;
                        var10 = false;
                        var4.shouldClosePopoutOnLeaveCurrentEmbeddedApplication = var10;
                        var4 = var8.bind(var9)(var4);
                        SaveGenerator(address = 752);
                    case 750:
                        return var4;
                    case 752:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 8);
                        if (var8) {
                            _fun62895_ip = 850;
                            continue _fun62895
                        }
                    case 758:
                        if (var4) {
                            _fun62895_ip = 790;
                            continue _fun62895
                        }
                    case 761:
                        var8 = {};
                        var9 = 'failure';
                        var8.result = var9;
                        var9 = _closure1_slot27;
                        var9 = var9.FAILED_ACTIVITY_LAUNCH_CHECKS;
                        var8.reason = var9;
                        return var8;
                    case 790:
                        var8 = global;
                        var9 = var8.Promise;
                        var8 = var9.prototype;
                        var8 = Object.create(var8, {
                            constructor: {
                                value: var9
                            }
                        });
                        var28 = function(arg0, arg1) { // Environment: var6
                            var0 = arg0;
                            var _closure5_slot0 = var0;
                            var0 = arg1;
                            var _closure5_slot1 = var0;
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 35;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = {};
                            var5 = _closure4_slot8;
                            var1.command = var5;
                            var5 = {};
                            var1.optionValues = var5;
                            var5 = {};
                            var6 = _closure4_slot9;
                            var5.channel = var6;
                            var6 = _closure4_slot10;
                            var5.guild = var6;
                            var1.context = var5;
                            var5 = _closure4_slot4;
                            var1.commandOrigin = var5;
                            var5 = _closure4_slot5;
                            var1.sectionName = var5;
                            var4 = _closure4_slot6;
                            var1.source = var4;
                            var3 = function() { // Original name: interactionLifecycleOptionsFactory, environment: var3
                                var0 = {};
                                var2 = _closure4_slot1;
                                var0.nonce = var2;
                                var2 = function() { // Original name: onSuccess, environment: var1
                                    _fun62898: for (var _fun62898_ip = 0;;) switch (_fun62898_ip) {
                                        case 0:
                                            var2 = _closure4_slot7;
                                            var1 = null;
                                            if (!(var1 != var2)) {
                                                _fun62898_ip = 23;
                                                continue _fun62898
                                            }
                                        case 13:
                                            var1 = _closure4_slot7;
                                            var0 = undefined;
                                            var0 = var1.bind(var0)();
                                        case 23:
                                            var1 = _closure5_slot0;
                                            var0 = undefined;
                                            var1 = var1.bind(var0)();
                                            return var0;
                                    }
                                };
                                var0.onSuccess = var2;
                                var1 = function(arg0, arg1, arg2, arg3) { // Original name: onFailure, environment: var1
                                    _fun62899: for (var _fun62899_ip = 0;;) switch (_fun62899_ip) {
                                        case 0:
                                            var5 = arg0;
                                            var6 = arg1;
                                            var3 = arg2;
                                            var8 = arg3;
                                            var0 = _closure4_slot7;
                                            var2 = null;
                                            if (!(var2 != var0)) {
                                                _fun62899_ip = 35;
                                                continue _fun62899
                                            }
                                        case 25:
                                            var1 = _closure4_slot7;
                                            var0 = undefined;
                                            var0 = var1.bind(var0)();
                                        case 35:
                                            var7 = _closure1_slot1;
                                            var4 = _closure1_slot2;
                                            var0 = 36;
                                            var4 = var4[var0];
                                            var0 = undefined;
                                            var10 = var7.bind(var0)(var4);
                                            var9 = var10.track;
                                            var4 = _closure1_slot18;
                                            var7 = var4.ACTIVITY_INTERACTION_CALLBACK_ERROR;
                                            var4 = {};
                                            var12 = _closure4_slot2;
                                            var4.channel_id = var12;
                                            var12 = _closure4_slot3;
                                            var4.guild_id = var12;
                                            var12 = _closure4_slot0;
                                            var4.application_id = var12;
                                            var12 = _closure4_slot9;
                                            var13 = var2 == var12;
                                            var12 = undefined;
                                            if (var13) {
                                                _fun62899_ip = 124;
                                                continue _fun62899
                                            }
                                        case 115:
                                            var13 = _closure4_slot9;
                                            var12 = var13.type;
                                        case 124:
                                            var4.channel_type = var12;
                                            var4.error_code = var5;
                                            var4.error_message = var6;
                                            var4.error_status = var3;
                                            var4.error_reason_code = var8;
                                            var11 = _closure4_slot6;
                                            var4.source = var11;
                                            var4 = var9.bind(var10)(var7, var4);
                                            if (!(var2 != var5)) {
                                                _fun62899_ip = 180;
                                                continue _fun62899
                                            }
                                        case 169:
                                            if (!(var2 != var6)) {
                                                _fun62899_ip = 180;
                                                continue _fun62899
                                            }
                                        case 173:
                                            if (!(var2 == var3)) {
                                                _fun62899_ip = 349;
                                                continue _fun62899
                                            }
                                        case 180:
                                            if (!(var2 != var8)) {
                                                _fun62899_ip = 217;
                                                continue _fun62899
                                            }
                                        case 184:
                                            var4 = _closure1_slot1;
                                            var2 = _closure1_slot2;
                                            var9 = 28;
                                            var2 = var2[var9];
                                            var2 = var4.bind(var0)(var2);
                                            var2 = var2.ReasonCodes;
                                            var2 = var8 in var2;
                                            if (var2) {
                                                _fun62899_ip = 295;
                                                continue _fun62899
                                            }
                                        case 217:
                                            var4 = _closure5_slot1;
                                            var7 = _closure1_slot1;
                                            var11 = _closure1_slot2;
                                            var2 = 28;
                                            var10 = var11[var2];
                                            var10 = var7.bind(var0)(var10);
                                            var2 = var11[var2];
                                            var2 = var7.bind(var0)(var2);
                                            var2 = var2.ReasonCodes;
                                            var15 = var2.UNKNOWN;
                                            var7 = var10.prototype;
                                            var7 = Object.create(var7, {
                                                constructor: {
                                                    value: var10
                                                }
                                            });
                                            var16 = var7;
                                            var2 = new var16[var10](var15, var14);
                                            var2 = var2 instanceof Object ? var2 : var7;
                                            var2 = var4.bind(var0)(var2);
                                            _fun62899_ip = 424;
                                            continue _fun62899;
                                        case 295:
                                            var4 = _closure5_slot1;
                                            var7 = _closure1_slot1;
                                            var2 = _closure1_slot2;
                                            var2 = var2[var9];
                                            var2 = var7.bind(var0)(var2);
                                            var7 = var2.prototype;
                                            var7 = Object.create(var7, {
                                                constructor: {
                                                    value: var2
                                                }
                                            });
                                            var16 = var7;
                                            var15 = var8;
                                            var2 = new var16[var2](var15, var14);
                                            var2 = var2 instanceof Object ? var2 : var7;
                                            var2 = var4.bind(var0)(var2);
                                            _fun62899_ip = 424;
                                            continue _fun62899;
                                        case 349:
                                            var2 = _closure5_slot1;
                                            var4 = _closure1_slot1;
                                            var7 = _closure1_slot2;
                                            var1 = 27;
                                            var1 = var7[var1];
                                            var4 = var4.bind(var0)(var1);
                                            var1 = {};
                                            var1.status = var3;
                                            var3 = {};
                                            var3.message = var6;
                                            var3.code = var5;
                                            var1.body = var3;
                                            var3 = var4.prototype;
                                            var3 = Object.create(var3, {
                                                constructor: {
                                                    value: var4
                                                }
                                            });
                                            var16 = var3;
                                            var15 = var1;
                                            var1 = new var16[var4](var15, var14);
                                            var1 = var1 instanceof Object ? var1 : var3;
                                            var1 = var2.bind(var0)(var1);
                                        case 424:
                                            return var0;
                                    }
                                };
                                var0.onFailure = var1;
                                return var0;
                            };
                            var1.interactionLifecycleOptionsFactory = var3;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var29 = var8;
                        var6 = new var29[var9](var28, var27);
                        var6 = var6 instanceof Object ? var6 : var8;
                        SaveGenerator(address = 827);
                    case 825:
                        return var6;
                    case 827:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 8);
                        if (var8) {
                            _fun62895_ip = 847;
                            continue _fun62895
                        }
                    case 833:
                        var8 = {};
                        var9 = 'success';
                        var8.result = var9;
                        return var8;
                    case 847:
                        return var6;
                    case 850:
                        return var4;
                    case 853:
                        var4 = {};
                        var6 = 'failure';
                        var4.result = var6;
                        var5 = _closure1_slot27;
                        var5 = var5.NO_CHANNEL;
                        var4.reason = var5;
                        return var4;
                    case 882:
                        return var3;
                    case 885: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var2 = var3;
                        var5 = var3.message;
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 31;
                        var4 = var8[var4];
                        var4 = var6.bind(var7)(var4);
                        var4 = var4.NO_PRIMARY_APP_COMMAND_ERROR;
                        if (!(var5 !== var4)) {
                            _fun62895_ip = 930;
                            continue _fun62895
                        }
                    case 928:
                        throw var2;
                    case 930:
                        var2 = {};
                        var4 = 'failure';
                        var2.result = var4;
                        var3 = _closure1_slot27;
                        var3 = var3.NO_PRIMARY_APP_COMMAND;
                        var2.reason = var3;
                        return var2;
                    case 959:
                        return var1;
                    case 962:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot31 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot31 = var0;
    var0 = function() { // Original name: _joinEmbeddedActivity, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun62902: for (var _fun62902_ip = 0;;) switch (_fun62902_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun62902_ip = 1324;
                            continue _fun62902
                        }
                    case 13:
                        var20 = var1.applicationId;
                        var19 = var1.channelId;
                        var13 = var1.embeddedActivitiesManager;
                        var4 = var1.isStart;
                        var16 = var1.guildId;
                        var8 = undefined;
                        SaveGenerator(address = 46);
                    case 44:
                        return var8;
                    case 46:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun62902_ip = 1321;
                            continue _fun62902
                        }
                    case 55:
                        var5 = _closure1_slot9;
                        var2 = var5.getSessionId;
                        var17 = var2.bind(var5)();
                        var5 = _closure1_slot13;
                        var2 = var5.getCurrentUser;
                        var12 = var2.bind(var5)();
                        var15 = null;
                        if (!(var15 != var20)) {
                            _fun62902_ip = 1292;
                            continue _fun62902
                        }
                    case 94:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 37;
                        var2 = var6[var2];
                        var2 = var5.bind(var8)(var2);
                        var2 = var2.bind(var8)(var20, var19);
                        SaveGenerator(address = 124);
                    case 122:
                        return var2;
                    case 124:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun62902_ip = 1289;
                            continue _fun62902
                        }
                    case 133:
                        if (!(var15 != var12)) {
                            _fun62902_ip = 1260;
                            continue _fun62902
                        }
                    case 140:
                        if (!(var15 != var2)) {
                            _fun62902_ip = 1260;
                            continue _fun62902
                        }
                    case 147:
                        if (!(var15 != var19)) {
                            _fun62902_ip = 1231;
                            continue _fun62902
                        }
                    case 154:
                        var6 = _closure1_slot10;
                        var5 = var6.getChannel;
                        var11 = var5.bind(var6)(var19);
                        if (!(var15 != var11)) {
                            _fun62902_ip = 1202;
                            continue _fun62902
                        }
                    case 175:
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var9 = 38;
                        var6 = var5[var9];
                        var14 = var7.bind(var8)(var6);
                        var10 = var14.getEmbeddedActivityLaunchability;
                        var6 = {};
                        var6.channelId = var19;
                        var18 = _closure1_slot10;
                        var6.ChannelStore = var18;
                        var18 = _closure1_slot11;
                        var6.GuildStore = var18;
                        var18 = _closure1_slot12;
                        var6.PermissionStore = var18;
                        var18 = _closure1_slot14;
                        var6.VoiceStateStore = var18;
                        var6 = var10.bind(var14)(var6);
                        var5 = var5[var9];
                        var5 = var7.bind(var8)(var5);
                        var5 = var5.EmbeddedActivityLaunchability;
                        var5 = var5.CAN_LAUNCH;
                        if (!(var6 === var5)) {
                            _fun62902_ip = 906;
                            continue _fun62902
                        }
                    case 276:
                        var7 = _closure1_slot15;
                        var5 = var7.getCurrentEmbeddedActivity;
                        var18 = var5.bind(var7)();
                        var7 = var15 == var18;
                        var5 = undefined;
                        if (var7) {
                            _fun62902_ip = 304;
                            continue _fun62902
                        }
                    case 299:
                        var5 = var18.applicationId;
                    case 304:
                        var5 = var15 != var5;
                        var10 = undefined;
                        if (!var5) {
                            _fun62902_ip = 342;
                            continue _fun62902
                        }
                    case 313:
                        var14 = _closure1_slot5;
                        var7 = var14.getApplication;
                        var21 = var15 == var18;
                        var5 = undefined;
                        if (var21) {
                            _fun62902_ip = 337;
                            continue _fun62902
                        }
                    case 332:
                        var5 = var18.applicationId;
                    case 337:
                        var10 = var7.bind(var14)(var5);
                    case 342:
                        if (!var4) {
                            _fun62902_ip = 449;
                            continue _fun62902
                        }
                    case 345:
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var4 = 34;
                        var4 = var7[var4];
                        var7 = var5.bind(var8)(var4);
                        var5 = var7.confirmActivityLaunchChecks;
                        var4 = {};
                        var4.applicationId = var20;
                        var4.application = var2;
                        var4.channel = var11;
                        var4.currentEmbeddedApplication = var10;
                        var4.embeddedActivitiesManager = var13;
                        var4.user = var12;
                        var4 = var5.bind(var7)(var4);
                        SaveGenerator(address = 408);
                    case 406:
                        return var4;
                    case 408:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                        if (var5) {
                            _fun62902_ip = 903;
                            continue _fun62902
                        }
                    case 417:
                        if (var4) {
                            _fun62902_ip = 449;
                            continue _fun62902
                        }
                    case 420:
                        var5 = {};
                        var7 = 'failure';
                        var5.result = var7;
                        var7 = _closure1_slot28;
                        var7 = var7.FAILED_ACTIVITY_LAUNCH_CHECKS;
                        var5.reason = var7;
                        return var5;
                    case 449:
                        if (!(var15 != var11)) {
                            _fun62902_ip = 664;
                            continue _fun62902
                        }
                    case 456:
                        var7 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var5 = 42;
                        var5 = var12[var5];
                        var7 = var7.bind(var8)(var5);
                        var5 = var11.id;
                        var7 = var7.bind(var8)(var5);
                        var13 = _closure1_slot16;
                        var12 = var13.includes;
                        var5 = var11.type;
                        var5 = var12.bind(var13)(var5);
                        if (var7) {
                            _fun62902_ip = 574;
                            continue _fun62902
                        }
                    case 508:
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var7 = 30;
                        var7 = var13[var7];
                        var12 = var12.bind(var8)(var7);
                        var7 = var12.isActivitiesInTextEnabled;
                        var7 = var7.bind(var12)(var11);
                        if (!var7) {
                            _fun62902_ip = 545;
                            continue _fun62902
                        }
                    case 542:
                        if (var5) {
                            _fun62902_ip = 664;
                            continue _fun62902
                        }
                    case 545:
                        var5 = {};
                        var7 = 'failure';
                        var5.result = var7;
                        var7 = _closure1_slot28;
                        var7 = var7.AIT_NOT_ENABLED_FOR_USER;
                        var5.reason = var7;
                        return var5;
                    case 574:
                        var7 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var5 = 43;
                        var5 = var12[var5];
                        var7 = var7.bind(var8)(var5);
                        var5 = {};
                        var11 = var11.id;
                        var5.channelId = var11;
                        var10 = var15 != var10;
                        var5.bypassChangeModal = var10;
                        var5 = var7.bind(var8)(var5);
                        SaveGenerator(address = 623);
                    case 621:
                        return var5;
                    case 623:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 7);
                        if (var7) {
                            _fun62902_ip = 900;
                            continue _fun62902
                        }
                    case 632:
                        if (var5) {
                            _fun62902_ip = 664;
                            continue _fun62902
                        }
                    case 635:
                        var7 = {};
                        var10 = 'failure';
                        var7.result = var10;
                        var10 = _closure1_slot28;
                        var10 = var10.NOT_CONNECTED_TO_VOICE_CHANNEL;
                        var7.reason = var10;
                        return var7;
                    case 664:
                        var13 = {
                            'trackedActionData': null,
                            'retries': 3,
                            'oldFormErrors': true,
                            'rejectWithError': true
                        };
                        var7 = {};
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var10 = 44;
                        var10 = var12[var10];
                        var10 = var11.bind(var8)(var10);
                        var10 = var10.NetworkActionNames;
                        var10 = var10.EMBEDDED_ACTIVITIES_LAUNCH;
                        var7.event = var10;
                        var10 = {};
                        var10.guild_id = var16;
                        var10.channel_id = var19;
                        var10.application_id = var20;
                        var10.session_id = var17;
                        var7.properties = var10;
                        var13.trackedActionData = var7;
                        if (!(var15 == var19)) {
                            _fun62902_ip = 780;
                            continue _fun62902
                        }
                    case 752:
                        var10 = {};
                        var7 = 'failure';
                        var10.result = var7;
                        var7 = _closure1_slot28;
                        var7 = var7.OTHER;
                        var10.reason = var7;
                        _fun62902_ip = 894;
                        continue _fun62902;
                    case 780:
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var7 = 45;
                        var7 = var12[var7];
                        var12 = var11.bind(var8)(var7);
                        var11 = var12.post;
                        var7 = {};
                        var18 = _closure1_slot22;
                        var14 = var18.ACTIVITY_CHANNEL_LAUNCH;
                        var14 = var14.bind(var18)(var19, var20);
                        var7.url = var14;
                        var14 = {};
                        var14.session_id = var17;
                        var17 = var15 != var16;
                        var15 = undefined;
                        if (!var17) {
                            _fun62902_ip = 847;
                            continue _fun62902
                        }
                    case 844:
                        var15 = var16;
                    case 847:
                        var14.guild_id = var15;
                        var7.body = var14;
                        var23 = var7;
                        var22 = var13;
                        var13 = copyDataProperties(var23, var22);
                        var7 = var11.bind(var12)(var7);
                        SaveGenerator(address = 874);
                    case 872:
                        return var7;
                    case 874:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 11);
                        if (var11) {
                            _fun62902_ip = 897;
                            continue _fun62902
                        }
                    case 880:
                        var11 = {};
                        var12 = 'success';
                        var11.result = var12;
                        var10 = var11;
                    case 894:
                        return var10;
                    case 897:
                        return var7;
                    case 900:
                        return var5;
                    case 903:
                        return var4;
                    case 906:
                        var4 = _closure1_slot28;
                        var5 = var4.LAUNCHABILITY_CHECK_FAILED_OTHER;
                        var7 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var9];
                        var4 = var7.bind(var8)(var4);
                        var4 = var4.EmbeddedActivityLaunchability;
                        var4 = var4.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
                        if (!(var6 !== var4)) {
                            _fun62902_ip = 1143;
                            continue _fun62902
                        }
                    case 952:
                        var7 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var9];
                        var4 = var7.bind(var8)(var4);
                        var4 = var4.EmbeddedActivityLaunchability;
                        var4 = var4.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
                        if (!(var6 === var4)) {
                            _fun62902_ip = 1183;
                            continue _fun62902
                        }
                    case 988:
                        var4 = _closure1_slot28;
                        var5 = var4.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
                        var7 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var6 = 40;
                        var6 = var14[var6];
                        var9 = var7.bind(var8)(var6);
                        var7 = var9.show;
                        var6 = {};
                        var13 = _closure1_slot0;
                        var10 = 41;
                        var11 = var14[var10];
                        var11 = var13.bind(var8)(var11);
                        var15 = var11.intl;
                        var12 = var15.string;
                        var11 = var14[var10];
                        var11 = var13.bind(var8)(var11);
                        var11 = var11.t;
                        var11 = var11["IOy+I5"];
                        var11 = var12.bind(var15)(var11);
                        var6.title = var11;
                        var11 = var14[var10];
                        var11 = var13.bind(var8)(var11);
                        var12 = var11.intl;
                        var11 = var12.string;
                        var10 = var14[var10];
                        var10 = var13.bind(var8)(var10);
                        var10 = var10.t;
                        var10 = var10.UXoQTp;
                        var10 = var11.bind(var12)(var10);
                        var6.body = var10;
                        var10 = false;
                        var6.hideActionSheet = var10;
                        var6 = var7.bind(var9)(var6);
                        _fun62902_ip = 1183;
                        continue _fun62902;
                    case 1143:
                        var4 = _closure1_slot28;
                        var5 = var4.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var6 = 39;
                        var6 = var9[var6];
                        var7 = var7.bind(var8)(var6);
                        var6 = var7.showActivitiesInvalidPermissionsAlert;
                        var6 = var6.bind(var7)();
                    case 1183:
                        var4 = {};
                        var6 = 'failure';
                        var4.result = var6;
                        var4.reason = var5;
                        return var4;
                    case 1202:
                        var4 = {};
                        var5 = 'failure';
                        var4.result = var5;
                        var5 = _closure1_slot28;
                        var5 = var5.INVALID_CHANNEL;
                        var4.reason = var5;
                        return var4;
                    case 1231:
                        var4 = {};
                        var5 = 'failure';
                        var4.result = var5;
                        var5 = _closure1_slot28;
                        var5 = var5.INVALID_CHANNEL;
                        var4.reason = var5;
                        return var4;
                    case 1260:
                        var4 = {};
                        var5 = 'failure';
                        var4.result = var5;
                        var5 = _closure1_slot28;
                        var5 = var5.UNKNOWN_USER_OR_APPLICATION;
                        var4.reason = var5;
                        return var4;
                    case 1289:
                        return var2;
                    case 1292:
                        var2 = {};
                        var4 = 'failure';
                        var2.result = var4;
                        var3 = _closure1_slot28;
                        var3 = var3.NO_APPLICATION_ID;
                        var2.reason = var3;
                        return var2;
                    case 1321:
                        return var1;
                    case 1324:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot32 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot32 = var0;
    var5 = function(arg0) { // Original name: stopEmbeddedActivity, environment: var1
        _fun62903: for (var _fun62903_ip = 0;;) switch (_fun62903_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.location;
                var8 = var0.applicationId;
                var _closure2_slot0 = var8;
                var9 = var0.showFeedback;
                var0 = undefined;
                if (!(var9 === var0)) {
                    _fun62903_ip = 33;
                    continue _fun62903
                }
            case 31:
                var9 = true;
            case 33:
                var4 = _closure1_slot15;
                var3 = var4.getSelfEmbeddedActivityForLocation;
                var11 = var3.bind(var4)(var6);
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 23;
                var3 = var5[var3];
                var7 = var4.bind(var0)(var3);
                var5 = var7.dispatch;
                var3 = {};
                var4 = 'EMBEDDED_ACTIVITY_CLOSE';
                var3.type = var4;
                var3.applicationId = var8;
                var3.location = var6;
                var4 = null;
                var12 = var4 == var11;
                var10 = undefined;
                if (var12) {
                    _fun62903_ip = 111;
                    continue _fun62903
                }
            case 105:
                var10 = var11.launchId;
            case 111:
                var3.instanceId = var10;
                var3.showFeedback = var9;
                var3 = var5.bind(var7)(var3);
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 46;
                var3 = var7[var3];
                var5 = var5.bind(var0)(var3);
                var3 = var5.getEmbeddedActivityLocationChannelId;
                var3 = var3.bind(var5)(var6);
                if (!(var4 != var3)) {
                    _fun62903_ip = 345;
                    continue _fun62903
                }
            case 164:
                var6 = _closure1_slot6;
                var5 = var6.getSelectedParticipantId;
                var5 = var5.bind(var6)(var3);
                var7 = _closure1_slot13;
                var6 = var7.getCurrentUser;
                var7 = var6.bind(var7)();
                var9 = var4 == var7;
                var6 = undefined;
                if (var9) {
                    _fun62903_ip = 206;
                    continue _fun62903
                }
            case 201:
                var6 = var7.id;
            case 206:
                var9 = _closure1_slot15;
                var7 = var9.getEmbeddedActivitiesForChannel;
                var9 = var7.bind(var9)(var3);
                var7 = var9.find;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.applicationId;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var9 = var7.bind(var9)(var2);
                if (!(var4 != var9)) {
                    _fun62903_ip = 347;
                    continue _fun62903
                }
            case 240:
                if (!(var4 != var6)) {
                    _fun62903_ip = 347;
                    continue _fun62903
                }
            case 244:
                var2 = '';
                if (!(var2 !== var6)) {
                    _fun62903_ip = 347;
                    continue _fun62903
                }
            case 252:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 47;
                var2 = var7[var2];
                var7 = var6.bind(var0)(var2);
                var6 = var7.getEmbeddedActivityParticipantId;
                var2 = {};
                var2.applicationId = var8;
                var10 = var4 == var9;
                var8 = undefined;
                if (var10) {
                    _fun62903_ip = 299;
                    continue _fun62903
                }
            case 293:
                var8 = var9.compositeInstanceId;
            case 299:
                var2.instanceId = var8;
                var2 = var6.bind(var7)(var2);
                if (!(var5 === var2)) {
                    _fun62903_ip = 345;
                    continue _fun62903
                }
            case 313:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 48;
                var1 = var5[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.selectParticipant;
                var1 = var1.bind(var2)(var3, var4);
            case 345:
                return var0;
            case 347:
                return var0;
        }
    };
    var _closure1_slot33 = var5;
    var0 = function() { // Original name: _fetchDeveloperApplications, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun62907: for (var _fun62907_ip = 0;;) switch (_fun62907_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun62907_ip = 321;
                            continue _fun62907
                        }
                    case 10: // try_start_0
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var6 = 23;
                        var1 = var5[var6];
                        var4 = undefined;
                        var7 = var3.bind(var4)(var1);
                        var3 = var7.dispatch;
                        var1 = {};
                        var8 = 'DEVELOPER_ACTIVITY_SHELF_FETCH_START';
                        var1.type = var8;
                        var1 = var3.bind(var7)(var1);
                        var3 = _closure1_slot0;
                        var1 = 49;
                        var1 = var5[var1];
                        var1 = var3.bind(var4)(var1);
                        var5 = var1.HTTP;
                        var3 = var5.get;
                        var1 = {};
                        var7 = _closure1_slot22;
                        var7 = var7.APPLICATIONS_WITH_ASSETS;
                        var1.url = var7;
                        var8 = {};
                        var7 = true;
                        var8.with_team_applications = var7;
                        var1.query = var8;
                        var1.oldFormErrors = var7;
                        var1.rejectWithError = var7;
                        var1 = var3.bind(var5)(var1);
                        SaveGenerator(address = 133);
                    case 131:
                        return var1;
                    case 133:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun62907_ip = 264;
                            continue _fun62907
                        }
                    case 142:
                        var3 = var1.body;
                        var5 = var3.applications;
                        var7 = var5.map;
                        var3 = function(arg0) { // Environment: var3
                            var2 = _closure1_slot8;
                            var1 = var2.createFromServer;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var10 = var7.bind(var5)(var3);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var7 = var2[var6];
                        var9 = var3.bind(var4)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var11 = 'DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS';
                        var7.type = var11;
                        var7.applications = var10;
                        var10 = var1.body;
                        var10 = var10.assets;
                        var7.assets = var10;
                        var7 = var8.bind(var9)(var7);
                        var2 = var2[var6];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'APPLICATIONS_FETCH_SUCCESS';
                        var2.type = var6;
                        var2.applications = var5;
                        var2 = var3.bind(var4)(var2);
                    case 262: // try_end0
                        _fun62907_ip = 316;
                        continue _fun62907;
                    case 264:
                        return var1;
                    case 267: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 23;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL';
                        var1.type = var4;
                        var1 = var2.bind(var3)(var1);
                    case 316:
                        var1 = undefined;
                        return var1;
                    case 321:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot34 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot34 = var0;
    var0 = function() { // Original name: _uploadImageAttachment, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun62911: for (var _fun62911_ip = 0;;) switch (_fun62911_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun62911_ip = 354;
                            continue _fun62911
                        }
                    case 10:
                        var9 = arg0;
                        var3 = arg1;
                        var7 = arg2;
                    case 19: // try_start_0
                        var6 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var5 = 23;
                        var1 = var1[var5];
                        var4 = undefined;
                        var8 = var6.bind(var4)(var1);
                        var6 = var8.dispatch;
                        var1 = {};
                        var10 = 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START';
                        var1.type = var10;
                        var1 = var6.bind(var8)(var1);
                        var6 = var3;
                        var1 = null;
                        var1 = var1 != var6;
                        var8 = undefined;
                        if (!var1) {
                            _fun62911_ip = 89;
                            continue _fun62911
                        }
                    case 80:
                        var1 = {};
                        var1.channel_id = var3;
                        var8 = var1;
                    case 89:
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 49;
                        var1 = var6[var1];
                        var1 = var3.bind(var4)(var1);
                        var6 = var1.HTTP;
                        var3 = var6.post;
                        var1 = {};
                        var11 = _closure1_slot22;
                        var10 = var11.APPLICATION_UPLOAD_ATTACHMENT;
                        var9 = var10.bind(var11)(var9);
                        var1.url = var9;
                        var1.query = var8;
                        var8 = {};
                        var9 = 'file';
                        var8.name = var9;
                        var8.file = var7;
                        var7 = new Array(1);
                        var7[0] = var8;
                        var1.attachments = var7;
                        var7 = true;
                        var1.rejectWithError = var7;
                        var1 = var3.bind(var6)(var1);
                        SaveGenerator(address = 189);
                    case 187:
                        return var1;
                    case 189:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun62911_ip = 264;
                            continue _fun62911
                        }
                    case 195:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var5];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS';
                        var2.type = var5;
                        var5 = var1.body;
                        var5 = var5.attachment;
                        var2.attachment = var5;
                        var2 = var3.bind(var4)(var2);
                        var2 = var1.body;
                        var2 = var2.attachment;
                    case 261: // try_end0
                        return var2;
                    case 264:
                        return var1;
                    case 267: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 23;
                        var1 = var5[var1];
                        var2 = undefined;
                        var7 = var4.bind(var2)(var1);
                        var6 = var7.dispatch;
                        var1 = {};
                        var8 = 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL';
                        var1.type = var8;
                        var1 = var6.bind(var7)(var1);
                        var1 = 27;
                        var1 = var5[var1];
                        var1 = var4.bind(var2)(var1);
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var13 = var2;
                        var12 = var3;
                        var1 = new var13[var1](var12, var11);
                        var1 = var1 instanceof Object ? var1 : var2;
                        return var1;
                    case 354:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot35 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot35 = var0;
    var0 = function() { // Original name: _fetchShelf, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun62914: for (var _fun62914_ip = 0;;) switch (_fun62914_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun62914_ip = 982;
                            continue _fun62914
                        }
                    case 15:
                        var5 = var1.guildId;
                        var7 = var5;
                        var _closure4_slot0 = var5;
                        var5 = var1.force;
                        var6 = undefined;
                        if (!(var5 === var6)) {
                            _fun62914_ip = 41;
                            continue _fun62914
                        }
                    case 39:
                        var5 = false;
                    case 41:
                        var4 = undefined;
                        var3 = undefined;
                        var _closure4_slot1 = var6;
                        var _closure4_slot2 = var6;
                        var18 = undefined;
                        var17 = undefined;
                        var8 = undefined;
                        var14 = undefined;
                        var11 = undefined;
                        var10 = undefined;
                        SaveGenerator(address = 69);
                    case 67:
                        return var6;
                    case 69:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun62914_ip = 979;
                            continue _fun62914
                        }
                    case 78:
                        var15 = _closure1_slot15;
                        var13 = var15.getShelfActivities;
                        var12 = var7;
                        var15 = var13.bind(var15)(var12);
                        var4 = var15;
                        var13 = var15.map;
                        var12 = function(arg0) { // Environment: var9
                            var2 = _closure1_slot5;
                            var1 = var2.getApplication;
                            var0 = arg0;
                            var0 = var0.application_id;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var15 = var13.bind(var15)(var12);
                        var13 = var15.filter;
                        var16 = _closure1_slot0;
                        var19 = _closure1_slot2;
                        var12 = 50;
                        var12 = var19[var12];
                        var12 = var16.bind(var6)(var12);
                        var12 = var12.isNotNullish;
                        var3 = var13.bind(var15)(var12);
                        if (var5) {
                            _fun62914_ip = 456;
                            continue _fun62914
                        }
                    case 159:
                        var13 = _closure1_slot15;
                        var12 = var13.shouldFetchShelf;
                        var5 = var7;
                        var5 = var12.bind(var13)(var5);
                        if (var5) {
                            _fun62914_ip = 456;
                            continue _fun62914
                        }
                    case 183:
                        var13 = _closure1_slot15;
                        var12 = var13.getShelfFetchStatus;
                        var5 = var7;
                        var5 = var12.bind(var13)(var5);
                        var12 = null;
                        if (!(var12 != var5)) {
                            _fun62914_ip = 432;
                            continue _fun62914
                        }
                    case 210:
                        var5 = var5.isFetching;
                        if (!var5) {
                            _fun62914_ip = 432;
                            continue _fun62914
                        }
                    case 222:
                        var5 = global;
                        var16 = var5.Promise;
                        var13 = var16.prototype;
                        var15 = Object.create(var13, {
                            constructor: {
                                value: var16
                            }
                        });
                        var23 = function(arg0) { // Environment: var9
                            var6 = _closure1_slot29;
                            var5 = var6.bind;
                            var4 = _closure4_slot0;
                            var3 = null;
                            var2 = arg0;
                            var2 = var5.bind(var6)(var3, var4, var2);
                            _closure4_slot1 = var2;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 23;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.subscribe;
                            var2 = _closure4_slot1;
                            var1 = 'EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS';
                            var1 = var3.bind(var4)(var1, var2);
                            return var0;
                        };
                        var24 = var15;
                        var13 = new var24[var16](var23, var22);
                        var19 = var13 instanceof Object ? var13 : var15;
                        var16 = var5.Promise;
                        var13 = var16.prototype;
                        var15 = Object.create(var13, {
                            constructor: {
                                value: var16
                            }
                        });
                        var23 = function(arg0) { // Environment: var9
                            var6 = _closure1_slot29;
                            var5 = var6.bind;
                            var4 = _closure4_slot0;
                            var3 = null;
                            var2 = arg0;
                            var2 = var5.bind(var6)(var3, var4, var2);
                            _closure4_slot2 = var2;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 23;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.subscribe;
                            var2 = _closure4_slot2;
                            var1 = 'EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL';
                            var1 = var3.bind(var4)(var1, var2);
                            return var0;
                        };
                        var24 = var15;
                        var13 = new var24[var16](var23, var22);
                        var16 = var13 instanceof Object ? var13 : var15;
                        var15 = var5.Promise;
                        var13 = var15.race;
                        var5 = new Array(2);
                        var5[0] = var19;
                        var5[1] = var16;
                        var5 = var13.bind(var15)(var5);
                        SaveGenerator(address = 319);
                    case 317:
                        return var5;
                    case 319:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 13);
                        if (var13) {
                            _fun62914_ip = 453;
                            continue _fun62914
                        }
                    case 328:
                        var13 = _closure4_slot1;
                        if (!(var12 != var13)) {
                            _fun62914_ip = 380;
                            continue _fun62914
                        }
                    case 336:
                        var15 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var13 = 23;
                        var13 = var16[var13];
                        var19 = var15.bind(var6)(var13);
                        var16 = var19.unsubscribe;
                        var15 = _closure4_slot1;
                        var13 = 'EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS';
                        var13 = var16.bind(var19)(var13, var15);
                        _closure4_slot1 = var12;
                    case 380:
                        var13 = _closure4_slot2;
                        if (!(var12 != var13)) {
                            _fun62914_ip = 432;
                            continue _fun62914
                        }
                    case 388:
                        var15 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var13 = 23;
                        var13 = var16[var13];
                        var19 = var15.bind(var6)(var13);
                        var16 = var19.unsubscribe;
                        var15 = _closure4_slot2;
                        var13 = 'EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL';
                        var13 = var16.bind(var19)(var13, var15);
                        _closure4_slot2 = var12;
                    case 432:
                        var12 = {};
                        var13 = var4;
                        var12.activityConfigs = var13;
                        var13 = var3;
                        var12.applications = var13;
                        return var12;
                    case 453:
                        return var5;
                    case 456: // try_start_0
                        var12 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var13 = 23;
                        var5 = var5[var13];
                        var16 = var12.bind(var6)(var5);
                        var15 = var16.dispatch;
                        var12 = {};
                        var5 = 'EMBEDDED_ACTIVITY_FETCH_SHELF';
                        var12.type = var5;
                        var5 = var7;
                        var12.guildId = var5;
                        var12 = var15.bind(var16)(var12);
                        var12 = undefined;
                        if (!(var6 !== var5)) {
                            _fun62914_ip = 534;
                            continue _fun62914
                        }
                    case 509:
                        var15 = var7;
                        var5 = '';
                        var12 = undefined;
                        if (!(var5 !== var15)) {
                            _fun62914_ip = 534;
                            continue _fun62914
                        }
                    case 522:
                        var5 = {};
                        var15 = var7;
                        var5.guild_id = var15;
                        var12 = var5;
                    case 534:
                        var15 = _closure1_slot1;
                        var21 = _closure1_slot2;
                        var5 = 45;
                        var5 = var21[var5];
                        var16 = var15.bind(var6)(var5);
                        var15 = var16.get;
                        var5 = {
                            'url': null,
                            'query': null,
                            'trackedActionData': null,
                            'retries': 0,
                            'oldFormErrors': true,
                            'rejectWithError': true
                        };
                        var19 = _closure1_slot22;
                        var19 = var19.ACTIVITY_SHELF;
                        var5.url = var19;
                        var5.query = var12;
                        var12 = {};
                        var20 = _closure1_slot0;
                        var19 = 44;
                        var19 = var21[var19];
                        var19 = var20.bind(var6)(var19);
                        var19 = var19.NetworkActionNames;
                        var19 = var19.EMBEDDED_ACTIVITIES_FETCH_SHELF;
                        var12.event = var19;
                        var19 = {};
                        var20 = var7;
                        var19.guild_id = var20;
                        var12.properties = var19;
                        var5.trackedActionData = var12;
                        var12 = 0;
                        var5 = var15.bind(var16)(var5);
                        SaveGenerator(address = 661);
                    case 659:
                        return var5;
                    case 661:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 15);
                        if (var15) {
                            _fun62914_ip = 915;
                            continue _fun62914
                        }
                    case 670:
                        var14 = var5;
                        var15 = var5.body;
                        var16 = var15.activities;
                        var18 = var16;
                        var15 = null;
                        if (!(var15 == var16)) {
                            _fun62914_ip = 699;
                            continue _fun62914
                        }
                    case 693:
                        var16 = new Array(0);
                        _fun62914_ip = 702;
                        continue _fun62914;
                    case 699:
                        var16 = var18;
                    case 702:
                        var11 = var16;
                        var16 = var14;
                        var16 = var16.body;
                        var16 = var16.applications;
                        var17 = var16;
                        if (!(var15 == var16)) {
                            _fun62914_ip = 732;
                            continue _fun62914
                        }
                    case 726:
                        var16 = new Array(0);
                        _fun62914_ip = 735;
                        continue _fun62914;
                    case 732:
                        var16 = var17;
                    case 735:
                        var10 = var16;
                        var14 = var14.body;
                        var14 = var14.assets;
                        var8 = var14;
                        if (!(var15 == var14)) {
                            _fun62914_ip = 760;
                            continue _fun62914
                        }
                    case 756:
                        var17 = {};
                        _fun62914_ip = 763;
                        continue _fun62914;
                    case 760:
                        var17 = var8;
                    case 763:
                        var14 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var8 = var8[var13];
                        var16 = var14.bind(var6)(var8);
                        var15 = var16.dispatch;
                        var14 = {};
                        var8 = 'EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS';
                        var14.type = var8;
                        var8 = var7;
                        var14.guildId = var8;
                        var8 = var11;
                        var14.activities = var8;
                        var8 = var10;
                        var14.applications = var8;
                        var14.assets = var17;
                        var14 = var15.bind(var16)(var14);
                        var8 = var8.length;
                        if (!(var8 > var12)) {
                            _fun62914_ip = 882;
                            continue _fun62914
                        }
                    case 837:
                        var12 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var8 = var8[var13];
                        var13 = var12.bind(var6)(var8);
                        var12 = var13.dispatch;
                        var8 = {};
                        var14 = 'APPLICATIONS_FETCH_SUCCESS';
                        var8.type = var14;
                        var14 = var10;
                        var8.applications = var14;
                        var8 = var12.bind(var13)(var8);
                    case 882:
                        var8 = {};
                        var8.activityConfigs = var11;
                        var11 = var10;
                        var10 = var11.map;
                        var9 = function(arg0) { // Environment: var9
                            var2 = _closure1_slot8;
                            var1 = var2.createFromServer;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var9 = var10.bind(var11)(var9);
                        var8.applications = var9;
                    case 912: // try_end0
                        return var8;
                    case 915:
                        return var5;
                    case 918: // catch_target0
                        CatchBlockStart(arg_register = 5);
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var2 = 23;
                        var2 = var8[var2];
                        var6 = var5.bind(var6)(var2);
                        var5 = var6.dispatch;
                        var2 = {};
                        var8 = 'EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL';
                        var2.type = var8;
                        var2.guildId = var7;
                        var2 = var5.bind(var6)(var2);
                        var2 = {};
                        var2.activityConfigs = var4;
                        var2.applications = var3;
                        return var2;
                    case 979:
                        return var1;
                    case 982:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot36 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot36 = var0;
    var0 = function() { // Original name: _sendEmbeddedActivityInvite, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun62921: for (var _fun62921_ip = 0;;) switch (_fun62921_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun62921_ip = 202;
                            continue _fun62921
                        }
                    case 13:
                        var10 = var1.activityChannelId;
                        var9 = var1.invitedChannelId;
                        var11 = var1.applicationId;
                        var8 = var1.location;
                        var7 = var1.inviteAnalyticsMetadata;
                        var3 = undefined;
                        SaveGenerator(address = 49);
                    case 47:
                        return var3;
                    case 49:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun62921_ip = 199;
                            continue _fun62921
                        }
                    case 58:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 51;
                        var2 = var6[var2];
                        var6 = var5.bind(var3)(var2);
                        var5 = var6.createInvite;
                        var2 = {};
                        var12 = _closure1_slot26;
                        var12 = var12.EMBEDDED_APPLICATION;
                        var2.target_type = var12;
                        var2.target_application_id = var11;
                        var2 = var5.bind(var6)(var10, var2, var8);
                        SaveGenerator(address = 120);
                    case 118:
                        return var2;
                    case 120:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun62921_ip = 196;
                            continue _fun62921
                        }
                    case 126:
                        var6 = _closure1_slot10;
                        var5 = var6.getChannel;
                        var6 = var5.bind(var6)(var9);
                        var5 = null;
                        if (!(var5 != var6)) {
                            _fun62921_ip = 193;
                            continue _fun62921
                        }
                    case 146:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 52;
                        var4 = var6[var4];
                        var6 = var5.bind(var3)(var4);
                        var5 = var6.sendInvite;
                        var15 = var2.code;
                        var17 = var6;
                        var16 = var9;
                        var14 = var8;
                        var13 = var7;
                        var4 = var17[var5](var16, var15, var14, var13, var12);
                    case 193:
                        return var3;
                    case 196:
                        return var2;
                    case 199:
                        return var1;
                    case 202:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot37 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot37 = var0;
    var0 = function() { // Original name: _sendEmbeddedActivityInviteUser, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun62924: for (var _fun62924_ip = 0;;) switch (_fun62924_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun62924_ip = 218;
                            continue _fun62924
                        }
                    case 15:
                        var10 = var1.channelId;
                        var11 = var1.applicationId;
                        var7 = var1.userId;
                        var9 = var1.location;
                        var _closure4_slot0 = var9;
                        var4 = var1.inviteAnalyticsMetadata;
                        var _closure4_slot1 = var4;
                        var1 = var1.prefixedContent;
                        var _closure4_slot2 = var1;
                        var4 = undefined;
                        var _closure4_slot3 = var4;
                        SaveGenerator(address = 69);
                    case 67:
                        return var4;
                    case 69:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun62924_ip = 215;
                            continue _fun62924
                        }
                    case 78:
                        var6 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var2 = 51;
                        var2 = var8[var2];
                        var8 = var6.bind(var4)(var2);
                        var6 = var8.createInvite;
                        var2 = {};
                        var12 = _closure1_slot26;
                        var12 = var12.EMBEDDED_APPLICATION;
                        var2.target_type = var12;
                        var2.target_application_id = var11;
                        var2 = var6.bind(var8)(var10, var2, var9);
                        SaveGenerator(address = 140);
                    case 138:
                        return var2;
                    case 140:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun62924_ip = 212;
                            continue _fun62924
                        }
                    case 146:
                        _closure4_slot3 = var2;
                        var6 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var5 = 53;
                        var5 = var8[var5];
                        var6 = var6.bind(var4)(var5);
                        var5 = var6.ensurePrivateChannel;
                        var6 = var5.bind(var6)(var7);
                        var5 = var6.then;
                        var3 = function(arg0) { // Environment: var3
                            _fun62925: for (var _fun62925_ip = 0;;) switch (_fun62925_ip) {
                                case 0:
                                    var7 = arg0;
                                    var1 = _closure1_slot10;
                                    var0 = var1.getChannel;
                                    var8 = var0.bind(var1)(var7);
                                    var3 = null;
                                    if (!(var3 != var8)) {
                                        _fun62925_ip = 143;
                                        continue _fun62925
                                    }
                                case 26:
                                    var0 = _closure4_slot2;
                                    var3 = var3 != var0;
                                    var0 = undefined;
                                    var6 = undefined;
                                    if (!var3) {
                                        _fun62925_ip = 85;
                                        continue _fun62925
                                    }
                                case 44:
                                    var4 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var3 = 54;
                                    var3 = var5[var3];
                                    var5 = var4.bind(var0)(var3);
                                    var4 = var5.parse;
                                    var3 = _closure4_slot2;
                                    var3 = var4.bind(var5)(var8, var3);
                                    var6 = var3.content;
                                case 85:
                                    var3 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var2 = 52;
                                    var2 = var4[var2];
                                    var5 = var3.bind(var0)(var2);
                                    var4 = var5.sendInvite;
                                    var2 = _closure4_slot3;
                                    var12 = var2.code;
                                    var11 = _closure4_slot0;
                                    var10 = _closure4_slot1;
                                    var14 = var5;
                                    var13 = var7;
                                    var9 = var6;
                                    var1 = var14[var4](var13, var12, var11, var10, var9, var8);
                                    return var0;
                                case 143:
                                    var0 = global;
                                    var2 = var0.Error;
                                    var0 = var2.prototype;
                                    var1 = Object.create(var0, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var13 = 'Private channel not found';
                                    var14 = var1;
                                    var0 = new var14[var2](var13, var12);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    throw var0;
                            }
                        };
                        var3 = var5.bind(var6)(var3);
                        SaveGenerator(address = 200);
                    case 198:
                        return var3;
                    case 200:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun62924_ip = 209;
                            continue _fun62924
                        }
                    case 206:
                        return var4;
                    case 209:
                        return var3;
                    case 212:
                        return var2;
                    case 215:
                        return var1;
                    case 218:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot38 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot38 = var0;
    var0 = function() { // Original name: _validateTestMode, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun62928: for (var _fun62928_ip = 0;;) switch (_fun62928_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun62928_ip = 108;
                            continue _fun62928
                        }
                    case 7:
                        var4 = undefined;
                        var2 = undefined;
                        var6 = _closure1_slot22;
                        var5 = var6.ACTIVITY_TEST_MODE;
                        var3 = arg0;
                        var2 = var5.bind(var6)(var3);
                    case 32: // try_start_0
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 49;
                        var1 = var5[var1];
                        var1 = var3.bind(var4)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.get;
                        var1 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': true
                        };
                        var1.url = var2;
                        var2 = true;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 89);
                    case 87:
                        return var1;
                    case 89:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun62928_ip = 98;
                            continue _fun62928
                        }
                    case 95: // try_end0
                        return var2;
                    case 98:
                        return var1;
                    case 101: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var1 = false;
                        return var1;
                    case 108:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot39 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot39 = var0;
    var4 = function(arg0) { // Original name: updateActivityPanelMode, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 23;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'EMBEDDED_ACTIVITY_SET_PANEL_MODE';
        var1.type = var4;
        var4 = arg0;
        var1.activityPanelMode = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot40 = var4;
    var3 = function() { // Original name: createProxyTicket, environment: var1
        var0 = undefined;
        var3 = _closure1_slot42;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot41 = var3;
    var0 = function() { // Original name: _createProxyTicket, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun62933: for (var _fun62933_ip = 0;;) switch (_fun62933_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun62933_ip = 126;
                            continue _fun62933
                        }
                    case 10:
                        var4 = {};
                        var2 = null;
                        if (!(var2 != var1)) {
                            _fun62933_ip = 24;
                            continue _fun62933
                        }
                    case 18:
                        var4.channel_id = var1;
                    case 24:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 49;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.post;
                        var1 = {};
                        var7 = _closure1_slot22;
                        var6 = var7.APPLICATION_PROXY_TICKET;
                        var5 = arg0;
                        var5 = var6.bind(var7)(var5);
                        var1.url = var5;
                        var1.body = var4;
                        var4 = true;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 103);
                    case 101:
                        return var1;
                    case 103:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun62933_ip = 123;
                            continue _fun62933
                        }
                    case 109:
                        var2 = var1.body;
                        var2 = var2.ticket;
                        return var2;
                    case 123:
                        return var1;
                    case 126:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot42 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot42 = var0;
    var0 = function() { // Original name: _refreshProxyTicket, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun62936: for (var _fun62936_ip = 0;;) switch (_fun62936_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun62936_ip = 776;
                            continue _fun62936
                        }
                    case 13:
                        var5 = var3;
                        var13 = arg1;
                        var4 = undefined;
                        var7 = undefined;
                        var8 = undefined;
                        var10 = undefined;
                        var11 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var6 = 23;
                        var1 = var1[var6];
                        var12 = var11.bind(var4)(var1);
                        var11 = var12.dispatch;
                        var1 = {
                            'type': 'EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING',
                            'applicationId': null,
                            'refreshing': true
                        };
                        var1.applicationId = var3;
                        var3 = true;
                        var1 = var11.bind(var12)(var1);
                    case 82: // try_start_0 // try_start_1
                        var12 = _closure1_slot41;
                        var11 = var5;
                        var14 = var13;
                        var1 = null;
                        var14 = var1 != var14;
                        var1 = undefined;
                        if (!var14) {
                            _fun62936_ip = 106;
                            continue _fun62936
                        }
                    case 103:
                        var1 = var13;
                    case 106:
                        var1 = var12.bind(var4)(var11, var1);
                        SaveGenerator(address = 116);
                    case 114:
                        return var1;
                    case 116:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 11);
                        if (var11) {
                            _fun62936_ip = 272;
                            continue _fun62936
                        }
                    case 125:
                        var12 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var14 = var11[var6];
                        var17 = var12.bind(var4)(var14);
                        var16 = var17.dispatch;
                        var14 = {};
                        var15 = 'EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET';
                        var14.type = var15;
                        var15 = var5;
                        var14.applicationId = var15;
                        var18 = var13;
                        var14.channelId = var18;
                        var14.proxyTicket = var1;
                        var14 = var16.bind(var17)(var14);
                        var11 = var11[var6];
                        var14 = var12.bind(var4)(var11);
                        var12 = var14.dispatch;
                        var11 = {};
                        var16 = 'EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET';
                        var11.type = var16;
                        var11.applicationId = var15;
                        var11.proxyTicket = var1;
                        var11 = var12.bind(var14)(var11);
                    case 219: // try_end0 // try_end1
                        var12 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var11 = var11[var6];
                        var14 = var12.bind(var4)(var11);
                        var12 = var14.dispatch;
                        var11 = {
                            'type': 'EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING',
                            'applicationId': null,
                            'refreshing': false
                        };
                        var15 = var5;
                        var11.applicationId = var15;
                        var11 = var12.bind(var14)(var11);
                        return var3;
                    case 272:
                        var11 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var6];
                        var12 = var11.bind(var4)(var3);
                        var11 = var12.dispatch;
                        var3 = {
                            'type': 'EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING',
                            'applicationId': null,
                            'refreshing': false
                        };
                        var14 = var5;
                        var3.applicationId = var14;
                        var3 = var11.bind(var12)(var3);
                        return var1;
                    case 325: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register = 9);
                        var11 = _closure1_slot10;
                        var3 = var11.getChannel;
                        var1 = var13;
                        var1 = var3.bind(var11)(var1);
                        var8 = var1;
                        var3 = null;
                        var11 = var3 == var1;
                        var1 = undefined;
                        if (var11) {
                            _fun62936_ip = 363;
                            continue _fun62936
                        }
                    case 358:
                        var1 = var8.guild_id;
                    case 363:
                        var7 = var1;
                        var8 = var3 != var1;
                        var1 = null;
                        if (!var8) {
                            _fun62936_ip = 378;
                            continue _fun62936
                        }
                    case 375:
                        var1 = var7;
                    case 378:
                        var10 = var1;
                        if (!(var3 == var1)) {
                            _fun62936_ip = 419;
                            continue _fun62936
                        }
                    case 385:
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 26;
                        var1 = var7[var1];
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.EmbeddedActivityLocationKind;
                        var8 = var1.PRIVATE_CHANNEL;
                        _fun62936_ip = 451;
                        continue _fun62936;
                    case 419:
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 26;
                        var1 = var7[var1];
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.EmbeddedActivityLocationKind;
                        var8 = var1.GUILD_CHANNEL;
                    case 451:
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var1 = var12[var6];
                        var7 = var11.bind(var4)(var1);
                        var3 = var7.dispatch;
                        var1 = {};
                        var14 = 'EMBEDDED_ACTIVITY_LAUNCH_FAIL';
                        var1.type = var14;
                        var15 = _closure1_slot0;
                        var14 = 20;
                        var14 = var12[var14];
                        var15 = var15.bind(var4)(var14);
                        var14 = var15.createNonce;
                        var14 = var14.bind(var15)();
                        var1.nonce = var14;
                        var14 = var5;
                        var1.applicationId = var14;
                        var1.channelId = var13;
                        var1.guildId = var10;
                        var1.locationKind = var8;
                        var10 = var9;
                        var8 = 25;
                        var8 = var12[var8];
                        var8 = var11.bind(var4)(var8);
                        var8 = var10 instanceof var8;
                        if (var8) {
                            _fun62936_ip = 658;
                            continue _fun62936
                        }
                    case 556:
                        var10 = var9;
                        var12 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var11 = 27;
                        var8 = var8[var11];
                        var8 = var12.bind(var4)(var8);
                        var8 = var10 instanceof var8;
                        if (var8) {
                            _fun62936_ip = 658;
                            continue _fun62936
                        }
                    case 586:
                        var10 = var9;
                        var12 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var8 = 28;
                        var8 = var13[var8];
                        var8 = var12.bind(var4)(var8);
                        var8 = var10 instanceof var8;
                        if (var8) {
                            _fun62936_ip = 658;
                            continue _fun62936
                        }
                    case 616:
                        var10 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var8 = var8[var11];
                        var11 = var10.bind(var4)(var8);
                        var20 = var9;
                        var10 = var11.prototype;
                        var10 = Object.create(var10, {
                            constructor: {
                                value: var11
                            }
                        });
                        var21 = var10;
                        var8 = new var21[var11](var20, var19);
                        var8 = var8 instanceof Object ? var8 : var10;
                        _fun62936_ip = 661;
                        continue _fun62936;
                    case 658:
                        var8 = var9;
                    case 661:
                        var1.error = var8;
                        var1 = var3.bind(var7)(var1);
                    case 670: // try_end2
                        var3 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var1 = var1[var6];
                        var8 = var3.bind(var4)(var1);
                        var7 = var8.dispatch;
                        var3 = {
                            'type': 'EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING',
                            'applicationId': null,
                            'refreshing': false
                        };
                        var1 = var5;
                        var3.applicationId = var1;
                        var1 = false;
                        var3 = var7.bind(var8)(var3);
                        return var1;
                    case 725: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {
                            'type': 'EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING',
                            'applicationId': null,
                            'refreshing': false
                        };
                        var2.applicationId = var5;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 776:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot43 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot43 = var0;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var6);
    var20 = 0;
    var6 = var8[var20];
    var0 = undefined;
    var6 = var9.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var19 = 1;
    var6 = var8[var19];
    var6 = var7.bind(var0)(var6);
    var6 = var6.getOrFetchApplicationCommandIndexForTarget;
    var _closure1_slot4 = var6;
    var18 = 2;
    var6 = var8[var18];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var17 = 3;
    var6 = var8[var17];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var16 = 4;
    var6 = var8[var16];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var15 = 5;
    var6 = var8[var15];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var14 = 6;
    var6 = var8[var14];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot9 = var6;
    var12 = 7;
    var6 = var8[var12];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot10 = var6;
    var11 = 8;
    var6 = var8[var11];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot11 = var6;
    var10 = 9;
    var6 = var8[var10];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot12 = var6;
    var6 = 10;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot13 = var6;
    var6 = 11;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot14 = var6;
    var6 = 12;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot15 = var6;
    var6 = 13;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES;
    var _closure1_slot16 = var6;
    var6 = 14;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.ActivityPanelModes;
    var _closure1_slot17 = var6;
    var6 = 15;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var9 = var6.AnalyticEvents;
    var _closure1_slot18 = var9;
    var9 = var6.AnalyticsGameOpenTypes;
    var _closure1_slot19 = var9;
    var9 = var6.ApplicationFlags;
    var _closure1_slot20 = var9;
    var9 = var6.ChannelTypes;
    var _closure1_slot21 = var9;
    var9 = var6.Endpoints;
    var _closure1_slot22 = var9;
    var6 = var6.PopoutWindowKeys;
    var _closure1_slot23 = var6;
    var6 = 16;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.INSTALL_LESS_APP_IDS;
    var _closure1_slot24 = var6;
    var6 = 17;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.ContentDismissActionType;
    var _closure1_slot25 = var6;
    var6 = 18;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.InviteTargetTypes;
    var _closure1_slot26 = var6;
    var6 = {};
    var6.NO_PRIMARY_APP_COMMAND = var19;
    var9 = 'NO_PRIMARY_APP_COMMAND';
    var6[var19] = var9;
    var6.UNAUTHORIZED = var18;
    var9 = 'UNAUTHORIZED';
    var6[var18] = var9;
    var6.NO_CHANNEL = var17;
    var9 = 'NO_CHANNEL';
    var6[var17] = var9;
    var6.FAILED_ACTIVITY_LAUNCH_CHECKS = var16;
    var9 = 'FAILED_ACTIVITY_LAUNCH_CHECKS';
    var6[var16] = var9;
    var _closure1_slot27 = var6;
    var6 = {};
    var6.OTHER = var20;
    var13 = 'OTHER';
    var6[var20] = var13;
    var6.NO_APPLICATION_ID = var19;
    var13 = 'NO_APPLICATION_ID';
    var6[var19] = var13;
    var6.UNKNOWN_USER_OR_APPLICATION = var18;
    var13 = 'UNKNOWN_USER_OR_APPLICATION';
    var6[var18] = var13;
    var6.INVALID_CHANNEL = var17;
    var13 = 'INVALID_CHANNEL';
    var6[var17] = var13;
    var6.LAUNCHABILITY_CHECK_FAILED_OTHER = var16;
    var13 = 'LAUNCHABILITY_CHECK_FAILED_OTHER';
    var6[var16] = var13;
    var6.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = var15;
    var13 = 'NO_USE_EMBEDDED_ACTIVITIES_PERMISSION';
    var6[var15] = var13;
    var6.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = var14;
    var13 = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS';
    var6[var14] = var13;
    var6.FAILED_ACTIVITY_LAUNCH_CHECKS = var12;
    var6[var12] = var9;
    var6.NOT_CONNECTED_TO_VOICE_CHANNEL = var11;
    var9 = 'NOT_CONNECTED_TO_VOICE_CHANNEL';
    var6[var11] = var9;
    var6.AIT_NOT_ENABLED_FOR_USER = var10;
    var9 = 'AIT_NOT_ENABLED_FOR_USER';
    var6[var10] = var9;
    var _closure1_slot28 = var6;
    var6 = function(arg0, arg1, arg2) { // Original name: handleFetchDone, environment: var1
        _fun62937: for (var _fun62937_ip = 0;;) switch (_fun62937_ip) {
            case 0:
                var3 = arg0;
                var0 = arg2;
                var1 = var0.guildId;
                var0 = var1 === var3;
                if (var0) {
                    _fun62937_ip = 34;
                    continue _fun62937
                }
            case 18:
                var2 = null;
                var1 = var2 == var1;
                if (!var1) {
                    _fun62937_ip = 31;
                    continue _fun62937
                }
            case 27:
                var1 = var2 == var3;
            case 31:
                var0 = var1;
            case 34:
                if (!var0) {
                    _fun62937_ip = 46;
                    continue _fun62937
                }
            case 37:
                var1 = arg1;
                var0 = undefined;
                var0 = var1.bind(var0)();
            case 46:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot29 = var6;
    var6 = 57;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/activities/EmbeddedActivitiesActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function(arg0) { // Original name: maybeDisconnectFromCurrentActivity, environment: var1
        _fun62938: for (var _fun62938_ip = 0;;) switch (_fun62938_ip) {
            case 0:
                var3 = _closure1_slot15;
                var2 = var3.getSelfEmbeddedActivityForLocation;
                var0 = arg0;
                var0 = var2.bind(var3)(var0);
                var2 = null;
                if (!(var2 != var0)) {
                    _fun62938_ip = 65;
                    continue _fun62938
                }
            case 27:
                var2 = _closure1_slot33;
                var1 = {};
                var3 = var0.location;
                var1.location = var3;
                var0 = var0.applicationId;
                var1.applicationId = var0;
                var0 = false;
                var1.showFeedback = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
            case 65:
                var0 = undefined;
                return var0;
        }
    };
    var2.maybeDisconnectFromCurrentActivity = var6;
    var6 = function() { // Original name: runPrimaryAppCommandOrJoinEmbeddedActivity, environment: var1
        var0 = undefined;
        var3 = _closure1_slot30;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.runPrimaryAppCommandOrJoinEmbeddedActivity = var6;
    var2.stopEmbeddedActivity = var5;
    var5 = function() { // Original name: requestRespondToSeriousThermalState, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 23;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'EMBEDDED_ACTIVITY_REQUEST_RESPOND_TO_SERIOUS_THERMAL_STATE';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.requestRespondToSeriousThermalState = var5;
    var5 = function() { // Original name: consumeRequestToReactToSeriousThermalState, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 23;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'EMBEDDED_ACTIVITY_CONSUME_RESPOND_TO_SERIOUS_THERMAL_STATE_REQUEST';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.consumeRequestToReactToSeriousThermalState = var5;
    var5 = function() { // Original name: disregardSeriousThermalState, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 23;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'EMBEDDED_ACTIVITY_DISREGARD_SERIOUS_THERMAL_STATE';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.disregardSeriousThermalState = var5;
    var5 = function() { // Original name: fetchDeveloperApplications, environment: var1
        var0 = undefined;
        var3 = _closure1_slot34;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchDeveloperApplications = var5;
    var5 = function() { // Original name: uploadImageAttachment, environment: var1
        var0 = undefined;
        var3 = _closure1_slot35;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.uploadImageAttachment = var5;
    var5 = function() { // Original name: fetchShelf, environment: var1
        var0 = undefined;
        var3 = _closure1_slot36;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchShelf = var5;
    var5 = function() { // Original name: sendEmbeddedActivityInvite, environment: var1
        var0 = undefined;
        var3 = _closure1_slot37;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.sendEmbeddedActivityInvite = var5;
    var5 = function() { // Original name: sendEmbeddedActivityInviteUser, environment: var1
        var0 = undefined;
        var3 = _closure1_slot38;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.sendEmbeddedActivityInviteUser = var5;
    var5 = function() { // Original name: dismissNewActivityIndicator, environment: var1
        _fun62948: for (var _fun62948_ip = 0;;) switch (_fun62948_ip) {
            case 0:
                var6 = arguments[0];
                var0 = undefined;
                if (!(var6 === var0)) {
                    _fun62948_ip = 22;
                    continue _fun62948
                }
            case 9:
                var1 = _closure1_slot25;
                var6 = var1.INDIRECT_ACTION;
            case 22:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 55;
                var1 = var3[var1];
                var5 = var2.bind(var0)(var1);
                var4 = var5.markVersionedDismissibleContentAsDismissed;
                var1 = 56;
                var1 = var3[var1];
                var1 = var2.bind(var0)(var1);
                var1 = var1.DismissibleContent;
                var3 = var1.ACTIVITIES_VOICE_LAUNCHER_BADGE;
                var1 = global;
                var7 = var1.Math;
                var2 = var7.floor;
                var1 = var1.Date;
                var8 = var1.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var1
                    }
                });
                var12 = var8;
                var1 = new var12[var1](var11);
                var8 = var1 instanceof Object ? var1 : var8;
                var1 = var8.getTime;
                var8 = var1.bind(var8)();
                var1 = 1000;
                var1 = var8 / var1;
                var2 = var2.bind(var7)(var1);
                var1 = {};
                var1.dismissAction = var6;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var0;
        }
    };
    var2.dismissNewActivityIndicator = var5;
    var5 = function() { // Original name: validateTestMode, environment: var1
        var0 = undefined;
        var3 = _closure1_slot39;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.validateTestMode = var5;
    var2.updateActivityPanelMode = var4;
    var4 = function(arg0) { // Original name: updateFocusedActivityLayout, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 23;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT';
        var1.type = var4;
        var4 = arg0;
        var1.focusedActivityLayout = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateFocusedActivityLayout = var4;
    var4 = function() { // Original name: openActivityPopoutWindow, environment: var1
        var3 = _closure1_slot40;
        var0 = _closure1_slot17;
        var2 = var0.ACTIVITY_POPOUT_WINDOW;
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 23;
        var1 = var3[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'ACTIVITY_POPOUT_WINDOW_OPEN';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.openActivityPopoutWindow = var4;
    var4 = function(arg0) { // Original name: updateActivityPopoutWindowLayout, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 23;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT';
        var1.type = var4;
        var4 = arg0;
        var1.layout = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateActivityPopoutWindowLayout = var4;
    var2.createProxyTicket = var3;
    var1 = function() { // Original name: refreshProxyTicket, environment: var1
        var0 = undefined;
        var3 = _closure1_slot43;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.refreshProxyTicket = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 4637, 3413, 3907, 7875, 3414, 1216, 1372, 1410, 3050, 1613, 3480, 1371, 3416, 7876, 660, 3444, 1369, 3294, 4635, 6506, 7877, 7914, 806, 7943, 7920, 7932, 3311, 6757, 1384, 6781, 7944, 1636, 7945, 7931, 7946, 795, 7929, 7951, 7924, 3962, 1234, 7918, 7938, 481, 4489, 3040, 3912, 7840, 507, 1304, 5860, 6488, 3904, 5550, 1360, 1358, 2]);