// modules/user_profile/native/UserProfileAboutMeCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var5;
    var0 = function(arg0) { // Original name: Heading, environment: var1
        var0 = arg0;
        var4 = var0.children;
        var2 = var0.themeType;
        var1 = _closure1_slot17;
        var3 = undefined;
        var1 = var1.bind(var3)(var2);
        var5 = var1.headingVariant;
        var6 = var1.headingSpacing;
        var2 = _closure1_slot12;
        var1 = _closure1_slot0;
        var7 = _closure1_slot3;
        var0 = 10;
        var0 = var7[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.Text;
        var0 = {
            'accessibilityRole': 'header',
            'variant': null,
            'color': 'text-default'
        };
        var0.variant = var5;
        var5 = {};
        var5.marginBottom = var6;
        var0.style = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = function(arg0) { // Original name: TextWithIcon, environment: var1
        var0 = arg0;
        var6 = var0.icon;
        var8 = var0.children;
        var1 = var0.themeType;
        var4 = var0.accessibilityLabel;
        var0 = _closure1_slot18;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var0 = _closure1_slot17;
        var0 = var0.bind(var3)(var1);
        var9 = var0.textVariant;
        var11 = var0.columnGap;
        var2 = _closure1_slot13;
        var1 = _closure1_slot5;
        var0 = {};
        var10 = var7.textWithIcon;
        var7 = new Array(2);
        var7[0] = var10;
        var10 = {};
        var10.columnGap = var11;
        var7[1] = var10;
        var0.style = var7;
        var7 = true;
        var0.accessible = var7;
        var0.accessibilityLabel = var4;
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot12;
        var6 = _closure1_slot0;
        var10 = _closure1_slot3;
        var5 = 10;
        var5 = var10[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {};
        var5.variant = var9;
        var9 = 'text-default';
        var5.color = var9;
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function(arg0) { // Original name: Bio, environment: var1
        _fun61064: for (var _fun61064_ip = 0;;) switch (_fun61064_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.userId;
                var3 = var0.displayProfile;
                var1 = var0.pendingBio;
                var13 = var0.themeType;
                var9 = var0.lineClamp;
                var0 = _closure1_slot17;
                var4 = undefined;
                var0 = var0.bind(var4)(var13);
                var10 = var0.textVariant;
                var2 = null;
                var0 = var2 == var3;
                var12 = undefined;
                if (var0) {
                    _fun61064_ip = 76;
                    continue _fun61064
                }
            case 63:
                var0 = var3.getPreviewBio;
                var12 = var0.bind(var3)(var1);
            case 76:
                var1 = var2 == var12;
                var0 = null;
                if (var1) {
                    _fun61064_ip = 262;
                    continue _fun61064
                }
            case 88:
                var1 = '';
                var0 = null;
                if (!(var1 !== var12)) {
                    _fun61064_ip = 262;
                    continue _fun61064
                }
            case 101:
                var3 = _closure1_slot13;
                var2 = _closure1_slot5;
                var1 = {};
                var8 = _closure1_slot12;
                var7 = _closure1_slot19;
                var5 = {};
                var5.themeType = var13;
                var17 = _closure1_slot0;
                var13 = _closure1_slot3;
                var14 = 11;
                var15 = var13[var14];
                var15 = var17.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var13[var14];
                var14 = var17.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.jGoPJT;
                var14 = var15.bind(var16)(var14);
                var5.children = var14;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot12;
                var7 = _closure1_slot1;
                var6 = 12;
                var6 = var13[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var6.bio = var12;
                var6.userId = var11;
                var6.textVariant = var10;
                var6.lineClamp = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 262:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function(arg0) { // Original name: MemberJoinDates, environment: var1
        _fun61065: for (var _fun61065_ip = 0;;) switch (_fun61065_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.userId;
                var _closure2_slot0 = var12;
                var2 = var1.guildId;
                var _closure2_slot1 = var2;
                var21 = var1.themeType;
                var1 = _closure1_slot18;
                var3 = undefined;
                var8 = var1.bind(var3)();
                var1 = _closure1_slot17;
                var1 = var1.bind(var3)(var21);
                var16 = var1.textVariant;
                var11 = var1.columnGap;
                var1 = _closure1_slot0;
                var2 = _closure1_slot3;
                var5 = 13;
                var4 = var2[var5];
                var9 = var1.bind(var3)(var4);
                var7 = var9.useStateFromStores;
                var4 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var0
                    var0 = _closure1_slot6;
                    var0 = var0.locale;
                    return var0;
                };
                var4 = var7.bind(var9)(var6, var4);
                var6 = var2[var5];
                var10 = var1.bind(var3)(var6);
                var9 = var10.useStateFromStores;
                var6 = _closure1_slot8;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var0
                    _fun61067: for (var _fun61067_ip = 0;;) switch (_fun61067_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun61067_ip = 37;
                                continue _fun61067
                            }
                        case 16:
                            var3 = _closure1_slot8;
                            var2 = var3.getGuild;
                            var1 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1);
                        case 37:
                            return var0;
                    }
                };
                var22 = var9.bind(var10)(var7, var6);
                var5 = var2[var5];
                var7 = var1.bind(var3)(var5);
                var6 = var7.useStateFromStores;
                var9 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var9;
                var0 = function() { // Environment: var0
                    _fun61068: for (var _fun61068_ip = 0;;) switch (_fun61068_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun61068_ip = 43;
                                continue _fun61068
                            }
                        case 16:
                            var4 = _closure1_slot7;
                            var3 = var4.getMember;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var0 = var3.bind(var4)(var2, var1);
                        case 43:
                            return var0;
                    }
                };
                var5 = var6.bind(var7)(var5, var0);
                var0 = 14;
                var6 = var2[var0];
                var9 = var1.bind(var3)(var6);
                var7 = var9.getCreatedAtDate;
                var10 = _closure1_slot1;
                var6 = 15;
                var6 = var2[var6];
                var10 = var10.bind(var3)(var6);
                var6 = var10.extractTimestamp;
                var6 = var6.bind(var10)(var12);
                var12 = var7.bind(var9)(var6, var4);
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.getCreatedAtDate;
                var10 = null;
                var6 = var10 == var5;
                var0 = undefined;
                if (var6) {
                    _fun61065_ip = 268;
                    continue _fun61065
                }
            case 262:
                var0 = var5.joinedAt;
            case 268:
                var17 = var1.bind(var2)(var0, var4);
                var2 = _closure1_slot13;
                var1 = _closure1_slot5;
                var0 = {};
                var6 = _closure1_slot12;
                var5 = _closure1_slot19;
                var4 = {};
                var4.themeType = var21;
                var14 = _closure1_slot0;
                var13 = _closure1_slot3;
                var23 = 11;
                var7 = var13[var23];
                var7 = var14.bind(var3)(var7);
                var15 = var7.intl;
                var9 = var15.string;
                var7 = var13[var23];
                var7 = var14.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.a6XYD9;
                var7 = var9.bind(var15)(var7);
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot13;
                var6 = _closure1_slot5;
                var5 = {};
                var9 = var8.memberJoinDates;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = {};
                var9.columnGap = var11;
                var8[1] = var9;
                var5.style = var8;
                var11 = _closure1_slot12;
                var9 = _closure1_slot20;
                var8 = {};
                var8.themeType = var21;
                var19 = _closure1_slot12;
                var15 = 16;
                var15 = var13[var15];
                var15 = var14.bind(var3)(var15);
                var18 = var15.ClydeIcon;
                var15 = {};
                var24 = 'xs';
                var15.size = var24;
                var15 = var19.bind(var3)(var18, var15);
                var8.icon = var15;
                var15 = var13[var23];
                var15 = var14.bind(var3)(var15);
                var18 = var15.intl;
                var15 = var18.formatToPlainString;
                var13 = var13[var23];
                var13 = var14.bind(var3)(var13);
                var13 = var13.t;
                var14 = var13["9t7w53"];
                var13 = {};
                var13.date = var12;
                var13 = var15.bind(var18)(var14, var13);
                var8.accessibilityLabel = var13;
                var8.children = var12;
                var9 = var11.bind(var3)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = var10 != var22;
                if (!var9) {
                    _fun61065_ip = 557;
                    continue _fun61065
                }
            case 553:
                var9 = var10 != var17;
            case 557:
                if (!var9) {
                    _fun61065_ip = 808;
                    continue _fun61065
                }
            case 563:
                var12 = _closure1_slot13;
                var11 = _closure1_slot14;
                var10 = {};
                var15 = _closure1_slot12;
                var19 = _closure1_slot0;
                var18 = _closure1_slot3;
                var13 = 10;
                var13 = var18[var13];
                var13 = var19.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {};
                var13.variant = var16;
                var16 = 'text-default';
                var13.color = var16;
                var16 = _closure1_slot9;
                var13.children = var16;
                var14 = var15.bind(var3)(var14, var13);
                var13 = new Array(2);
                var13[0] = var14;
                var16 = _closure1_slot12;
                var15 = _closure1_slot20;
                var14 = {};
                var14.themeType = var21;
                var24 = _closure1_slot12;
                var21 = _closure1_slot1;
                var25 = 17;
                var20 = var18[var25];
                var21 = var21.bind(var3)(var20);
                var20 = {};
                var20.guild = var22;
                var25 = var18[var25];
                var25 = var19.bind(var3)(var25);
                var25 = var25.GuildIconSizes;
                var25 = var25.XXSMALL;
                var20.size = var25;
                var20 = var24.bind(var3)(var21, var20);
                var14.icon = var20;
                var20 = var18[var23];
                var20 = var19.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.formatToPlainString;
                var18 = var18[var23];
                var18 = var19.bind(var3)(var18);
                var18 = var18.t;
                var19 = var18.FdLNDK;
                var18 = {};
                var22 = var22.name;
                var18.guildName = var22;
                var18.date = var17;
                var18 = var20.bind(var21)(var19, var18);
                var14.accessibilityLabel = var18;
                var14.children = var17;
                var14 = var16.bind(var3)(var15, var14);
                var13[1] = var14;
                var10.children = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 808:
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function(arg0) { // Original name: BotSlashCommands, environment: var1
        _fun61069: for (var _fun61069_ip = 0;;) switch (_fun61069_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.applicationId;
                var6 = var0.channel;
                var _closure2_slot0 = var6;
                var8 = var0.commandIds;
                var12 = var0.themeType;
                var0 = _closure1_slot18;
                var4 = undefined;
                var14 = var0.bind(var4)();
                var1 = _closure1_slot1;
                var10 = _closure1_slot3;
                var0 = 18;
                var0 = var10[var0];
                var0 = var1.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var0 = var0.analyticsLocations;
                var _closure2_slot1 = var0;
                var2 = _closure1_slot0;
                var1 = 19;
                var1 = var10[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useUserProfileAnalyticsContext;
                var1 = var1.bind(var2)();
                var5 = var1.context;
                var _closure2_slot2 = var5;
                var11 = _closure1_slot4;
                var3 = var11.useMemo;
                var2 = new Array(1);
                var2[0] = var6;
                var1 = function() { // Environment: var13
                    var0 = {};
                    var1 = _closure2_slot0;
                    var0.channel = var1;
                    var1 = 'channel';
                    var0.type = var1;
                    return var0;
                };
                var3 = var3.bind(var11)(var1, var2);
                var2 = _closure1_slot2;
                var1 = 20;
                var1 = var10[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useCommandsForApplication;
                var2 = var1.bind(var2)(var3, var9, var8);
                var1 = var2.commands;
                var _closure2_slot3 = var1;
                var8 = var2.application;
                var _closure2_slot4 = var8;
                var9 = _closure1_slot4;
                var3 = var9.useMemo;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var13
                    _fun61071: for (var _fun61071_ip = 0;;) switch (_fun61071_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = null;
                            var2 = var0 == var2;
                            var0 = undefined;
                            if (var2) {
                                _fun61071_ip = 39;
                                continue _fun61071
                            }
                        case 18:
                            var3 = _closure2_slot3;
                            var2 = var3.filter;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.nsfw;
                                var0 = true;
                                var0 = var0 !== var1;
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1);
                        case 39:
                            return var0;
                    }
                };
                var16 = var3.bind(var9)(var1, var2);
                var3 = _closure1_slot4;
                var2 = var3.useCallback;
                var1 = new Array(5);
                var1[0] = var8;
                var9 = var6.id;
                var1[1] = var9;
                var6 = var6.guild_id;
                var1[2] = var6;
                var1[3] = var5;
                var1[4] = var0;
                var0 = function() { // Environment: var13
                    _fun61073: for (var _fun61073_ip = 0;;) switch (_fun61073_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun61073_ip = 213;
                                continue _fun61073
                            }
                        case 18:
                            var2 = _closure2_slot4;
                            var2 = var2.bot;
                            if (!(var1 != var2)) {
                                _fun61073_ip = 213;
                                continue _fun61073
                            }
                        case 35:
                            var2 = _closure2_slot4;
                            var2 = var2.bot;
                            var2 = var2.id;
                            var _closure3_slot0 = var2;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var2 = 21;
                            var2 = var3[var2];
                            var3 = undefined;
                            var4 = var4.bind(var3)(var2);
                            var2 = var4.getBestActiveInput;
                            var4 = var2.bind(var4)();
                            if (!(var1 != var4)) {
                                _fun61073_ip = 188;
                                continue _fun61073
                            }
                        case 93:
                            var2 = var4.openCustomKeyboard;
                            var1 = {};
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var5 = 22;
                            var5 = var9[var5];
                            var5 = var8.bind(var3)(var5);
                            var5 = var5.KeyboardTypes;
                            var5 = var5.APP_LAUNCHER;
                            var1.type = var5;
                            var5 = {};
                            var7 = _closure1_slot11;
                            var7 = var7.APPLICATION_VIEW;
                            var5.initialRouteName = var7;
                            var7 = true;
                            var5.initiallyExpanded = var7;
                            var6 = _closure2_slot4;
                            var5.application = var6;
                            var6 = function() { // Original name: onPressBack, environment: var0
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot3;
                                var0 = 23;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = {};
                                var6 = _closure2_slot2;
                                var7 = var1;
                                var4 = copyDataProperties(var7, var6);
                                var5 = _closure3_slot0;
                                var4 = 'userId';
                                var1[var4] = var5;
                                var4 = _closure2_slot0;
                                var5 = var4.id;
                                var4 = 'channelId';
                                var1[var4] = var5;
                                var4 = _closure2_slot1;
                                var3 = 'sourceAnalyticsLocations';
                                var1[var3] = var4;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var5.onPressBack = var6;
                            var1.context = var5;
                            var1 = var2.bind(var4)(var1);
                        case 188:
                            var1 = global;
                            var2 = var1.setTimeout;
                            var1 = function() { // Environment: var0
                                _fun61075: for (var _fun61075_ip = 0;;) switch (_fun61075_ip) {
                                    case 0:
                                        var3 = _closure1_slot0;
                                        var4 = _closure1_slot3;
                                        var0 = 23;
                                        var2 = var4[var0];
                                        var0 = undefined;
                                        var6 = var3.bind(var0)(var2);
                                        var5 = var6.getUserProfileActionSheetKey;
                                        var2 = _closure3_slot0;
                                        var6 = var5.bind(var6)(var2);
                                        var5 = _closure1_slot1;
                                        var2 = 24;
                                        var2 = var4[var2];
                                        var5 = var5.bind(var0)(var2);
                                        var2 = var5.hideActionSheet;
                                        var2 = var2.bind(var5)(var6);
                                        var2 = 25;
                                        var2 = var4[var2];
                                        var3 = var3.bind(var0)(var2);
                                        var2 = var3.getRootNavigationRef;
                                        var4 = var2.bind(var3)();
                                        var3 = null;
                                        if (!(var3 != var4)) {
                                            _fun61075_ip = 256;
                                            continue _fun61075
                                        }
                                    case 101:
                                        var2 = var4.isReady;
                                        var2 = var2.bind(var4)();
                                        if (!var2) {
                                            _fun61075_ip = 256;
                                            continue _fun61075
                                        }
                                    case 117:
                                        var2 = var4.getState;
                                        var5 = var2.bind(var4)();
                                        var6 = var3 == var5;
                                        var2 = undefined;
                                        if (var6) {
                                            _fun61075_ip = 156;
                                            continue _fun61075
                                        }
                                    case 136:
                                        var5 = var5.routes;
                                        var6 = var3 == var5;
                                        var2 = undefined;
                                        if (var6) {
                                            _fun61075_ip = 156;
                                            continue _fun61075
                                        }
                                    case 151:
                                        var2 = var5.length;
                                    case 156:
                                        var5 = var3 != var2;
                                        var3 = 0;
                                        if (!var5) {
                                            _fun61075_ip = 168;
                                            continue _fun61075
                                        }
                                    case 165:
                                        var3 = var2;
                                    case 168:
                                        var2 = 1;
                                        if (!(var3 > var2)) {
                                            _fun61075_ip = 192;
                                            continue _fun61075
                                        }
                                    case 175:
                                        var5 = var4.goBack;
                                        var5 = var5.bind(var4)();
                                        var3 = var3 - 1;
                                        if (var3 > var2) {
                                            _fun61075_ip = 175;
                                            continue _fun61075
                                        }
                                    case 192:
                                        var3 = _closure1_slot0;
                                        var4 = _closure1_slot3;
                                        var2 = 26;
                                        var2 = var4[var2];
                                        var3 = var3.bind(var0)(var2);
                                        var2 = var3.transitionTo;
                                        var6 = _closure1_slot10;
                                        var5 = var6.CHANNEL;
                                        var1 = _closure2_slot0;
                                        var4 = var1.guild_id;
                                        var1 = var1.id;
                                        var1 = var5.bind(var6)(var4, var1);
                                        var1 = var2.bind(var3)(var1);
                                    case 256:
                                        return var0;
                                }
                            };
                            var0 = 300;
                            var0 = var2.bind(var3)(var1, var0);
                        case 213:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10 = var2.bind(var3)(var0, var1);
                var9 = null;
                var1 = var9 == var16;
                var0 = null;
                if (var1) {
                    _fun61069_ip = 586;
                    continue _fun61069
                }
            case 285:
                var2 = var16.length;
                var1 = 0;
                var0 = null;
                if (!(var1 !== var2)) {
                    _fun61069_ip = 586;
                    continue _fun61069
                }
            case 301:
                var3 = _closure1_slot13;
                var2 = _closure1_slot5;
                var1 = {};
                var11 = _closure1_slot12;
                var6 = _closure1_slot19;
                var5 = {};
                var5.themeType = var12;
                var19 = _closure1_slot0;
                var12 = _closure1_slot3;
                var15 = 11;
                var17 = var12[var15];
                var17 = var19.bind(var4)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var12 = var12[var15];
                var12 = var19.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12["0hKkS+"];
                var12 = var17.bind(var18)(var12);
                var5.children = var12;
                var6 = var11.bind(var4)(var6, var5);
                var5 = new Array(3);
                var5[0] = var6;
                var12 = _closure1_slot12;
                var11 = _closure1_slot5;
                var6 = {};
                var14 = var14.slashCommands;
                var6.style = var14;
                var14 = var16.map;
                var13 = function(arg0) { // Environment: var13
                    var0 = arg0;
                    var4 = _closure1_slot12;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 27;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure2_slot4;
                    var1.application = var6;
                    var5 = _closure2_slot0;
                    var1.channel = var5;
                    var1.command = var0;
                    var0 = var0.id;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var13 = var14.bind(var16)(var13);
                var6.children = var13;
                var6 = var12.bind(var4)(var11, var6);
                var5[1] = var6;
                var6 = var9 != var8;
                if (!var6) {
                    _fun61069_ip = 465;
                    continue _fun61069
                }
            case 455:
                var8 = var8.bot;
                var6 = var9 != var8;
            case 465:
                if (!var6) {
                    _fun61069_ip = 572;
                    continue _fun61069
                }
            case 468:
                var9 = _closure1_slot12;
                var14 = _closure1_slot0;
                var11 = _closure1_slot3;
                var7 = 28;
                var7 = var11[var7];
                var7 = var14.bind(var4)(var7);
                var8 = var7.Button;
                var7 = {
                    'size': 'sm',
                    'variant': 'tertiary'
                };
                var12 = var11[var15];
                var12 = var14.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var11[var15];
                var11 = var14.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11.VEfKyb;
                var11 = var12.bind(var13)(var11);
                var7.text = var11;
                var7.onPress = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 572:
                var5[2] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 586:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.DIVIDER_DOT;
    var _closure1_slot9 = var6;
    var6 = var3.UserProfileThemeTypes;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Routes;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AppLauncherRouteName;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot12 = var7;
    var7 = var3.jsxs;
    var _closure1_slot13 = var7;
    var3 = var3.Fragment;
    var _closure1_slot14 = var3;
    var3 = {
        'headingVariant': 'text-sm/semibold',
        'textVariant': 'text-md/normal',
        'headingSpacing': 8,
        'rowGap': 24,
        'columnGap': 6
    };
    var _closure1_slot15 = var3;
    var3 = {};
    var7 = var6.PREVIEW;
    var6 = {
        'headingVariant': 'text-xs/semibold',
        'textVariant': 'text-sm/normal',
        'headingSpacing': 4,
        'rowGap': 12,
        'columnGap': 3
    };
    var3[var7] = var6;
    var _closure1_slot16 = var3;
    var3 = function(arg0) { // Original name: getStyleConfig, environment: var1
        _fun61077: for (var _fun61077_ip = 0;;) switch (_fun61077_ip) {
            case 0:
                var2 = arg0;
                var0 = undefined;
                if (!var2) {
                    _fun61077_ip = 19;
                    continue _fun61077
                }
            case 8:
                var1 = _closure1_slot16;
                var0 = var1[var2];
            case 19:
                var1 = null;
                if (!(var1 == var0)) {
                    _fun61077_ip = 32;
                    continue _fun61077
                }
            case 25:
                var0 = _closure1_slot15;
            case 32:
                return var0;
        }
    };
    var _closure1_slot17 = var3;
    var3 = 9;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'column';
    var8.flexDirection = var9;
    var3.card = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.textWithIcon = var8;
    var8 = {
        'flexDirection': 'row',
        'flexWrap': 'wrap'
    };
    var3.memberJoinDates = var8;
    var8 = {
        'flex': 1,
        'flexDirection': 'row',
        'flexWrap': 'wrap',
        'marginBottom': 12
    };
    var3.slashCommands = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot18 = var3;
    var3 = 30;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileAboutMeCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: UserProfileAboutMeCard, environment: var1
        _fun61078: for (var _fun61078_ip = 0;;) switch (_fun61078_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.userId;
                var14 = var0.displayProfile;
                var11 = var0.channel;
                var15 = var0.pendingBio;
                var12 = var0.bioLineClamp;
                var9 = var0.themeType;
                var5 = var0.style;
                var0 = _closure1_slot18;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var0 = _closure1_slot17;
                var0 = var0.bind(var3)(var9);
                var16 = var0.rowGap;
                var7 = null;
                var0 = var7 == var14;
                var10 = undefined;
                if (var0) {
                    _fun61078_ip = 86;
                    continue _fun61078
                }
            case 81:
                var10 = var14.application;
            case 86:
                var2 = _closure1_slot13;
                var1 = _closure1_slot1;
                var8 = _closure1_slot3;
                var0 = 29;
                var0 = var8[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var8 = var4.card;
                var4 = new Array(3);
                var4[0] = var8;
                var8 = {};
                var8.rowGap = var16;
                var4[1] = var8;
                var4[2] = var5;
                var0.style = var4;
                var8 = _closure1_slot12;
                var5 = _closure1_slot21;
                var4 = {};
                var4.userId = var13;
                var4.displayProfile = var14;
                var4.pendingBio = var15;
                var4.themeType = var9;
                var4.lineClamp = var12;
                var5 = var8.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var12 = _closure1_slot12;
                var8 = _closure1_slot22;
                var5 = {};
                var5.userId = var13;
                var15 = var7 == var14;
                var13 = undefined;
                if (var15) {
                    _fun61078_ip = 221;
                    continue _fun61078
                }
            case 216:
                var13 = var14.guildId;
            case 221:
                var5.guildId = var13;
                var5.themeType = var9;
                var5 = var12.bind(var3)(var8, var5);
                var4[1] = var5;
                var8 = var7 == var10;
                var5 = undefined;
                if (var8) {
                    _fun61078_ip = 255;
                    continue _fun61078
                }
            case 249:
                var5 = var10.popularApplicationCommandIds;
            case 255:
                var5 = var7 != var5;
                if (!var5) {
                    _fun61078_ip = 266;
                    continue _fun61078
                }
            case 262:
                var5 = var7 != var11;
            case 266:
                if (!var5) {
                    _fun61078_ip = 314;
                    continue _fun61078
                }
            case 269:
                var8 = _closure1_slot12;
                var7 = _closure1_slot23;
                var6 = {};
                var12 = var10.id;
                var6.applicationId = var12;
                var6.channel = var11;
                var10 = var10.popularApplicationCommandIds;
                var6.commandIds = var10;
                var6.themeType = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 314:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1676, 1672, 1410, 6921, 660, 1468, 33, 1297, 3901, 1234, 7558, 566, 4485, 21, 7559, 7356, 5687, 6934, 7561, 3677, 1567, 7313, 3237, 3879, 1220, 7686, 4043, 7702, 2]);