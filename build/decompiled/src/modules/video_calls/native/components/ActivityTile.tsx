// modules/video_calls/native/components/ActivityTile.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun64771: for (var _fun64771_ip = 0;;) switch (_fun64771_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.participant;
                var _closure2_slot0 = var10;
                var19 = var0.style;
                var9 = var0.channel;
                var _closure2_slot1 = var9;
                var6 = var0.onSingleTap;
                var _closure2_slot2 = var6;
                var4 = undefined;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var0 = function() {
                    var0 = undefined;
                    var3 = _closure2_slot9;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var _closure2_slot8 = var0;
                var0 = function() {
                    var3 = undefined;
                    var0 = undefined;
                    var2 = _closure1_slot3;
                    var1 = function*() { // Environment: var1
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun64775: for (var _fun64775_ip = 0;;) switch (_fun64775_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun64775_ip = 175;
                                        continue _fun64775
                                    }
                                case 10:
                                    var1 = _closure2_slot4;
                                    var4 = null;
                                    var1 = var4 != var1;
                                    if (!var1) {
                                        _fun64775_ip = 34;
                                        continue _fun64775
                                    }
                                case 26:
                                    var3 = _closure2_slot3;
                                    var1 = var4 != var3;
                                case 34:
                                    if (!var1) {
                                        _fun64775_ip = 167;
                                        continue _fun64775
                                    }
                                case 40:
                                    var4 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var1 = 25;
                                    var1 = var5[var1];
                                    var5 = undefined;
                                    var4 = var4.bind(var5)(var1);
                                    var1 = {};
                                    var6 = _closure2_slot4;
                                    var6 = var6.applicationId;
                                    var1.applicationId = var6;
                                    var6 = _closure2_slot1;
                                    var6 = var6.id;
                                    var1.activityChannelId = var6;
                                    var6 = _closure2_slot6;
                                    var6 = var6.location;
                                    var1.locationObject = var6;
                                    var6 = _closure2_slot5;
                                    var1.analyticsLocations = var6;
                                    var1 = var4.bind(var5)(var1);
                                    SaveGenerator(address = 126);
                                case 124:
                                    return var1;
                                case 126:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun64775_ip = 172;
                                        continue _fun64775
                                    }
                                case 132:
                                    var4 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var3 = 26;
                                    var3 = var6[var3];
                                    var4 = var4.bind(var5)(var3);
                                    var3 = var4.setOrientationLockState;
                                    var2 = _closure2_slot3;
                                    var2 = var3.bind(var4)(var2);
                                case 167:
                                    var2 = undefined;
                                    return var2;
                                case 172:
                                    return var1;
                                case 175:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var3 = var2.bind(var3)(var1);
                    _closure2_slot9 = var3;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var _closure2_slot9 = var0;
                var22 = function() {
                    _fun64776: for (var _fun64776_ip = 0;;) switch (_fun64776_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 27;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = {};
                            var4 = _closure2_slot7;
                            var2.embeddedActivityJoinability = var4;
                            var4 = _closure2_slot8;
                            var2.handleCanJoin = var4;
                            var2 = var3.bind(var0)(var2);
                            var3 = _closure2_slot2;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun64776_ip = 71;
                                continue _fun64776
                            }
                        case 63:
                            var1 = _closure2_slot2;
                            var1 = var1.bind(var0)();
                        case 71:
                            return var0;
                    }
                };
                var0 = _closure1_slot14;
                var7 = var0.bind(var4)();
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 16;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var5 = var10.applicationId;
                var0 = new Array(1);
                var0[0] = var5;
                var3 = var3.bind(var4)(var0);
                var0 = _closure1_slot4;
                var5 = 1;
                var0 = var0.bind(var4)(var3, var5);
                var3 = 0;
                var12 = var0[var3];
                _closure2_slot3 = var12;
                var0 = function arg0() {
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.useStateFromStoresArray;
                    var4 = _closure1_slot7;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = function() { // Environment: var0
                        var0 = _closure3_slot0;
                        var2 = var0.participants;
                        var0 = global;
                        var1 = var0.Array;
                        var0 = var1.from;
                        var2 = var0.bind(var1)(var2);
                        var1 = var2.map;
                        var0 = function(arg0) { // Environment: var0
                            var2 = _closure1_slot7;
                            var1 = var2.getUser;
                            var0 = arg0;
                            var0 = var0.userId;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var2 = var1.bind(var2)(var0);
                        var1 = var2.filter;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 15;
                        var3 = var3[var0];
                        var0 = undefined;
                        var0 = var4.bind(var0)(var3);
                        var0 = var0.isNotNullish;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var25 = var0.bind(var4)(var10);
                var0 = 17;
                var0 = var2[var0];
                var11 = var1.bind(var4)(var0);
                var10 = var11.getName;
                var0 = var9.getGuildId;
                var2 = var0.bind(var9)();
                var1 = var9.id;
                var14 = null;
                var13 = var14 == var25;
                var0 = undefined;
                if (var13) {
                    _fun64771_ip = 214;
                    continue _fun64771
                }
            case 210:
                var0 = var25[var3];
            case 214:
                var11 = var10.bind(var11)(var2, var1, var0);
                if (!(var14 == var11)) {
                    _fun64771_ip = 269;
                    continue _fun64771
                }
            case 225:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 18;
                var0 = var2[var0];
                var2 = var1.bind(var4)(var0);
                var1 = var2.getName;
                var10 = var14 == var25;
                var0 = undefined;
                if (var10) {
                    _fun64771_ip = 264;
                    continue _fun64771
                }
            case 260:
                var0 = var25[var3];
            case 264:
                var11 = var1.bind(var2)(var0);
            case 269:
                var15 = _closure1_slot1;
                var10 = _closure1_slot2;
                var0 = 19;
                var0 = var10[var0];
                var0 = var15.bind(var4)(var0);
                var1 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var0 = 14;
                var0 = var10[var0];
                var16 = var2.bind(var4)(var0);
                var13 = var16.useStateFromStores;
                var0 = _closure1_slot6;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var24
                    var2 = _closure1_slot6;
                    var1 = var2.getEmbeddedActivitiesForChannel;
                    var0 = _closure2_slot1;
                    var0 = var0.id;
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.find;
                    var0 = function(arg0) { // Environment: var0
                        _fun64781: for (var _fun64781_ip = 0;;) switch (_fun64781_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.applicationId;
                                var3 = _closure2_slot3;
                                var0 = null;
                                var3 = var0 == var3;
                                var0 = undefined;
                                if (var3) {
                                    _fun64781_ip = 35;
                                    continue _fun64781
                                }
                            case 26:
                                var2 = _closure2_slot3;
                                var0 = var2.id;
                            case 35:
                                var0 = var1 === var0;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var13.bind(var16)(var3, var0);
                _closure2_slot4 = var3;
                var0 = 20;
                var0 = var10[var0];
                var13 = var15.bind(var4)(var0);
                var0 = 21;
                var0 = var10[var0];
                var0 = var15.bind(var4)(var0);
                var0 = var0.ACTIVITY_TILE;
                var0 = var13.bind(var4)(var0);
                var0 = var0.analyticsLocations;
                _closure2_slot5 = var0;
                var0 = 22;
                var0 = var10[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.useAnalyticsContext;
                var0 = var0.bind(var2)();
                _closure2_slot6 = var0;
                var0 = var14 == var12;
                var20 = undefined;
                if (var0) {
                    _fun64771_ip = 426;
                    continue _fun64771
                }
            case 421:
                var20 = var12.name;
            case 426:
                if (!(var14 == var20)) {
                    _fun64771_ip = 487;
                    continue _fun64771
                }
            case 430:
                var13 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 23;
                var2 = var15[var0];
                var2 = var13.bind(var4)(var2);
                var10 = var2.intl;
                var2 = var10.string;
                var0 = var15[var0];
                var0 = var13.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0.WCNe7F;
                var20 = var2.bind(var10)(var0);
            case 487:
                var2 = _closure1_slot7;
                var0 = var2.getCurrentUser;
                var0 = var0.bind(var2)();
                var2 = var14 == var0;
                var13 = undefined;
                if (var2) {
                    _fun64771_ip = 514;
                    continue _fun64771
                }
            case 509:
                var13 = var0.id;
            case 514:
                var0 = var14 != var1;
                if (!var0) {
                    _fun64771_ip = 544;
                    continue _fun64771
                }
            case 521:
                var2 = var1.id;
                var10 = var14 == var12;
                var1 = undefined;
                if (var10) {
                    _fun64771_ip = 540;
                    continue _fun64771
                }
            case 535:
                var1 = var12.id;
            case 540:
                var0 = var2 === var1;
            case 544:
                if (var0) {
                    _fun64771_ip = 585;
                    continue _fun64771
                }
            case 547:
                var1 = var14 != var13;
                if (!var1) {
                    _fun64771_ip = 582;
                    continue _fun64771
                }
            case 554:
                var10 = var14 == var3;
                var2 = undefined;
                if (var10) {
                    _fun64771_ip = 579;
                    continue _fun64771
                }
            case 563:
                var10 = var3.userIds;
                var3 = var10.has;
                var2 = var3.bind(var10)(var13);
            case 579:
                var1 = var2;
            case 582:
                var0 = var1;
            case 585:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var3 = 24;
                var1 = var1[var3];
                var10 = var2.bind(var4)(var1);
                var2 = var10.useEmbeddedActivityJoinability;
                var1 = {};
                var15 = _closure1_slot7;
                var13 = var15.getCurrentUser;
                var15 = var13.bind(var15)();
                var16 = var14 == var15;
                var13 = undefined;
                if (var16) {
                    _fun64771_ip = 640;
                    continue _fun64771
                }
            case 635:
                var13 = var15.id;
            case 640:
                var1.userId = var13;
                var13 = var9.id;
                var1.channelId = var13;
                var1.application = var12;
                var16 = var2.bind(var10)(var1);
                _closure2_slot7 = var16;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var1 = var2.bind(var4)(var1);
                var1 = var1.EmbeddedActivityJoinability;
                var15 = var1.CAN_JOIN;
                var1 = var25.length;
                if (!(!(var1 > var5))) {
                    _fun64771_ip = 770;
                    continue _fun64771
                }
            case 704:
                var2 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 23;
                var3 = var13[var1];
                var3 = var2.bind(var4)(var3);
                var10 = var3.intl;
                var3 = var10.formatToPlainString;
                var1 = var13[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.t;
                var2 = var1["7Uuia2"];
                var1 = {};
                var1.username = var11;
                var26 = var3.bind(var10)(var2, var1);
                _fun64771_ip = 846;
                continue _fun64771;
            case 770:
                var2 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 23;
                var3 = var13[var1];
                var3 = var2.bind(var4)(var3);
                var10 = var3.intl;
                var3 = var10.formatToPlainString;
                var1 = var13[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.t;
                var2 = var1.cpe6CK;
                var1 = {};
                var1.username = var11;
                var11 = var25.length;
                var11 = var11 - var5;
                var1.count = var11;
                var26 = var3.bind(var10)(var2, var1);
            case 846:
                if (var0) {
                    _fun64771_ip = 1420;
                    continue _fun64771
                }
            case 852:
                var2 = _closure1_slot11;
                var18 = _closure1_slot0;
                var23 = _closure1_slot2;
                var0 = 28;
                var0 = var23[var0];
                var0 = var18.bind(var4)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var3 = 'button';
                var0.accessibilityRole = var3;
                var21 = 23;
                var3 = var23[var21];
                var3 = var18.bind(var4)(var3);
                var13 = var3.intl;
                var11 = var13.formatToPlainString;
                var3 = var23[var21];
                var3 = var18.bind(var4)(var3);
                var3 = var3.t;
                var10 = var3.Yw5Hr2;
                var3 = {};
                var3.applicationName = var20;
                var3 = var11.bind(var13)(var10, var3);
                var0.accessibilityLabel = var3;
                var3 = _closure1_slot13;
                var0.androidRippleConfig = var3;
                var0.onPress = var22;
                var3 = var7.pressableOpacity;
                var0.style = var3;
                var11 = _closure1_slot10;
                var17 = _closure1_slot1;
                var3 = 30;
                var3 = var23[var3];
                var10 = var17.bind(var4)(var3);
                var3 = {};
                var3.application = var12;
                var12 = 'cover';
                var3.resizeMode = var12;
                var10 = var11.bind(var4)(var10, var3);
                var3 = new Array(2);
                var3[0] = var10;
                var12 = _closure1_slot11;
                var11 = _closure1_slot5;
                var10 = {};
                var27 = var7.activityPreview;
                var13 = new Array(2);
                var13[0] = var27;
                var13[1] = var19;
                var10.style = var13;
                var19 = _closure1_slot10;
                var27 = 31;
                var13 = var23[var27];
                var17 = var17.bind(var4)(var13);
                var13 = {};
                var28 = -6;
                var13.offsetAmount = var28;
                var28 = var7.overflow;
                var13.overflowStyle = var28;
                var27 = var23[var27];
                var27 = var18.bind(var4)(var27);
                var27 = var27.OverflowText;
                var13.overflowComponent = var27;
                var13.items = var25;
                var25 = 4;
                var13.max = var25;
                var24 = function arg0, arg1() {
                    _fun64782: for (var _fun64782_ip = 0;;) switch (_fun64782_ip) {
                        case 0:
                            var3 = _closure1_slot10;
                            var1 = _closure1_slot1;
                            var0 = _closure1_slot2;
                            var8 = 13;
                            var0 = var0[var8];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var4 = arg0;
                            var0.user = var4;
                            var4 = _closure2_slot0;
                            var5 = var4.guildId;
                            var4 = null;
                            var6 = var4 != var5;
                            var4 = undefined;
                            if (!var6) {
                                _fun64782_ip = 64;
                                continue _fun64782
                            }
                        case 61:
                            var4 = var5;
                        case 64:
                            var0.guildId = var4;
                            var4 = _closure1_slot12;
                            var0.size = var4;
                            var5 = arg1;
                            var4 = undefined;
                            if (var5) {
                                _fun64782_ip = 176;
                                continue _fun64782
                            }
                        case 84:
                            var5 = {};
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var10 = var6[var8];
                            var10 = var7.bind(var2)(var10);
                            var10 = var10.AVATAR_SIZE_MAP;
                            var9 = _closure1_slot12;
                            var10 = var10[var9];
                            var9 = 2;
                            var10 = var10 / var9;
                            var9 = 3;
                            var9 = var10 + var9;
                            var5.radius = var9;
                            var6 = var6[var8];
                            var6 = var7.bind(var2)(var6);
                            var6 = var6.CutoutDirection;
                            var6 = var6.RIGHT;
                            var5.direction = var6;
                            var6 = -6;
                            var5.inset = var6;
                            var4 = var5;
                        case 176:
                            var0.cutout = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var13.renderItem = var24;
                var17 = var19.bind(var4)(var17, var13);
                var13 = new Array(4);
                var13[0] = var17;
                var25 = _closure1_slot10;
                var17 = 32;
                var19 = var23[var17];
                var19 = var18.bind(var4)(var19);
                var24 = var19.LegacyText;
                var19 = {};
                var27 = var7.subtitleText;
                var19.style = var27;
                var27 = 2;
                var19.numberOfLines = var27;
                var19.children = var26;
                var19 = var25.bind(var4)(var24, var19);
                var13[1] = var19;
                var19 = _closure1_slot10;
                var17 = var23[var17];
                var17 = var18.bind(var4)(var17);
                var18 = var17.LegacyText;
                var17 = {};
                var23 = var7.titleText;
                var17.style = var23;
                var17.children = var20;
                var17 = var19.bind(var4)(var18, var17);
                var13[2] = var17;
                var14 = null;
                if (!(var16 === var15)) {
                    _fun64771_ip = 1390;
                    continue _fun64771
                }
            case 1259:
                var17 = _closure1_slot10;
                var19 = _closure1_slot1;
                var20 = _closure1_slot2;
                var18 = 33;
                var15 = var20[var18];
                var16 = var19.bind(var4)(var15);
                var15 = {};
                var15.onPress = var22;
                var22 = var7.button;
                var15.style = var22;
                var24 = _closure1_slot0;
                var22 = var20[var21];
                var22 = var24.bind(var4)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var20[var21];
                var21 = var24.bind(var4)(var21);
                var21 = var21.t;
                var21 = var21["4i2vj+"];
                var21 = var22.bind(var23)(var21);
                var15.text = var21;
                var18 = var20[var18];
                var18 = var19.bind(var4)(var18);
                var18 = var18.Colors;
                var18 = var18.GREY;
                var15.color = var18;
                var18 = 100;
                var15.cornerRadius = var18;
                var14 = var17.bind(var4)(var16, var15);
            case 1390:
                var13[3] = var14;
                var10.children = var13;
                var10 = var12.bind(var4)(var11, var10);
                var3[1] = var10;
                var0.children = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun64771_ip = 1539;
                continue _fun64771;
            case 1420:
                var3 = _closure1_slot10;
                var2 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 28;
                var1 = var10[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var11 = 'box-only';
                var1.pointerEvents = var11;
                var7 = var7.activityViewContainer;
                var1.style = var7;
                var1.onPress = var6;
                var1.activeOpacity = var5;
                var7 = _closure1_slot10;
                var6 = _closure1_slot1;
                var5 = 29;
                var5 = var10[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5.channel = var9;
                var8 = _closure1_slot9;
                var8 = var8.PIP;
                var5.layoutMode = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1539:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var7 = true;
    var3.value = var7;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var14 = 1;
    var3 = var5[var14];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var11 = 4;
    var3 = var5[var11];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var13 = var3.Fonts;
    var3 = var3.ThemeTypes;
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityLayoutMode;
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.getThemedRippleConfig;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.jsx;
    var _closure1_slot10 = var8;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AvatarSizes;
    var12 = var3.XSMALL;
    var _closure1_slot12 = var12;
    var3 = {};
    var3.foreground = var7;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'width': '100%',
        'height': '100%',
        'backgroundColor': null,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var9 = 12;
    var15 = var5[var9];
    var15 = var10.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var15;
    var3.pressableOpacity = var8;
    var8 = {
        'flex': 1,
        'opacity': 0.6
    };
    var15 = var5[var9];
    var15 = var10.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BLACK;
    var8.backgroundColor = var15;
    var3.overlay = var8;
    var8 = {
        'alignItems': 'center',
        'display': 'flex',
        'width': '100%',
        'padding': 16
    };
    var3.activityPreview = var8;
    var8 = {};
    var8.flex = var14;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var14;
    var3.activityViewContainer = var8;
    var8 = {
        'fontSize': 16,
        'lineHeight': 24,
        'color': null,
        'fontFamily': null,
        'textAlign': 'center',
        'marginLeft': 16,
        'marginRight': 16
    };
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_DEFAULT;
    var8.color = var14;
    var14 = var13.DISPLAY_EXTRABOLD;
    var8.fontFamily = var14;
    var3.titleText = var8;
    var8 = {
        'fontSize': 14,
        'lineHeight': 18,
        'color': null,
        'fontFamily': null,
        'textAlign': 'center',
        'marginLeft': 16,
        'marginRight': 16
    };
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_DEFAULT;
    var8.color = var14;
    var13 = var13.PRIMARY_NORMAL;
    var8.fontFamily = var13;
    var3.subtitleText = var8;
    var8 = {};
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var8.borderRadius = var13;
    var8.borderWidth = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var8.borderColor = var11;
    var3.iconWrapper = var8;
    var8 = {};
    var11 = 13;
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var11 = var11.AVATAR_SIZE_MAP;
    var11 = var11[var12];
    var8.height = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_MOD_NORMAL;
    var8.backgroundColor = var9;
    var3.overflow = var8;
    var8 = {
        'marginTop': 8,
        'borderRadius': 100,
        'alignSelf': 'center',
        'paddingHorizontal': 24
    };
    var3.button = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = 35;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/components/ActivityTile.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var3 = _closure1_slot10;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 34;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.ThemeContextProvider;
        var0 = {};
        var5 = _closure1_slot8;
        var5 = var5.DARK;
        var0.theme = var5;
        var6 = _closure1_slot10;
        var5 = _closure1_slot15;
        var4 = {};
        var8 = arg0;
        var9 = var4;
        var7 = copyDataProperties(var9, var8);
        var4 = var6.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1371, 1621, 660, 3457, 4874, 33, 5452, 1297, 671, 5454, 566, 1304, 6884, 3961, 3236, 8055, 5726, 5579, 8045, 1234, 7964, 7966, 8057, 7963, 4902, 8058, 8070, 8072, 4876, 4873, 3159, 2]);