// modules/channel/native/ChannelLongPressActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot34;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot33 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun72596: for (var _fun72596_ip = 0;;) switch (_fun72596_ip) {
                    case 0:
                        StartGenerator();
                        var4 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun72596_ip = 147;
                            continue _fun72596
                        }
                    case 13:
                        var1 = var4.isGuildStageVoice;
                        var3 = var1.bind(var4)();
                        var6 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var2 = 21;
                        var5 = var1[var2];
                        var2 = undefined;
                        var5 = var6.bind(var2)(var5);
                        if (var3) {
                            _fun72596_ip = 102;
                            continue _fun72596
                        }
                    case 51:
                        var3 = 22;
                        var6 = var1[var3];
                        var3 = var1.paths;
                        var3 = var5.bind(var2)(var6, var3);
                        SaveGenerator(address = 73);
                    case 71:
                        return var3;
                    case 73:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (var6) {
                            _fun72596_ip = 99;
                            continue _fun72596
                        }
                    case 79:
                        var7 = var3.openGuildVoiceModal;
                        var6 = 'Channel List';
                        var6 = var7.bind(var2)(var4, var6);
                        _fun72596_ip = 141;
                        continue _fun72596;
                    case 99:
                        return var3;
                    case 102:
                        var3 = 20;
                        var3 = var1[var3];
                        var1 = var1.paths;
                        var1 = var5.bind(var2)(var3, var1);
                        SaveGenerator(address = 124);
                    case 122:
                        return var1;
                    case 124:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun72596_ip = 144;
                            continue _fun72596
                        }
                    case 130:
                        var3 = var1.connectAndOpen;
                        var3 = var3.bind(var2)(var4);
                    case 141:
                        return var2;
                    case 144:
                        return var1;
                    case 147:
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
    var0 = function arg0() {
        _fun72597: for (var _fun72597_ip = 0;;) switch (_fun72597_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.channel;
                var _closure2_slot0 = var16;
                var1 = var0.onClose;
                var _closure2_slot1 = var1;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var5 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 71;
                var2 = var9[var0];
                var4 = var5.bind(var3)(var2);
                var2 = 72;
                var2 = var9[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.CHANNEL_LONG_PRESS_MENU;
                var2 = var4.bind(var3)(var2);
                var4 = var2.analyticsLocations;
                var2 = var16.getGuildId;
                var5 = var2.bind(var16)();
                var _closure2_slot2 = var5;
                var6 = _closure1_slot0;
                var34 = 73;
                var2 = var9[var34];
                var12 = var6.bind(var3)(var2);
                var11 = var12.useStateFromStores;
                var2 = _closure1_slot17;
                var10 = new Array(1);
                var10[0] = var2;
                var2 = function() { // Environment: var7
                    var2 = _closure1_slot17;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var15 = var11.bind(var12)(var10, var2);
                var2 = var9[var34];
                var12 = var6.bind(var3)(var2);
                var11 = var12.useStateFromStoresObject;
                var2 = _closure1_slot18;
                var10 = new Array(1);
                var10[0] = var2;
                var2 = function() { // Environment: var7
                    var0 = {};
                    var5 = _closure1_slot18;
                    var3 = var5.can;
                    var2 = _closure1_slot29;
                    var2 = var2.MANAGE_CHANNELS;
                    var4 = _closure2_slot0;
                    var2 = var3.bind(var5)(var2, var4);
                    var0.canManageChannel = var2;
                    var5 = _closure1_slot18;
                    var3 = var5.can;
                    var2 = _closure1_slot29;
                    var2 = var2.CREATE_INSTANT_INVITE;
                    var2 = var3.bind(var5)(var2, var4);
                    var0.canCreateInstantInvite = var2;
                    var3 = _closure1_slot18;
                    var2 = var3.can;
                    var1 = _closure1_slot29;
                    var1 = var1.CONNECT;
                    var1 = var2.bind(var3)(var1, var4);
                    var0.canConnect = var1;
                    return var0;
                };
                var2 = var11.bind(var12)(var10, var2);
                var33 = var2.canManageChannel;
                var32 = var2.canCreateInstantInvite;
                var31 = var2.canConnect;
                var2 = 74;
                var2 = var9[var2];
                var9 = var6.bind(var3)(var2);
                var6 = var9.useOptInEnabledForGuild;
                var2 = null;
                if (!(var2 == var5)) {
                    _fun72597_ip = 232;
                    continue _fun72597
                }
            case 228:
                var5 = _closure1_slot28;
            case 232:
                var23 = var6.bind(var9)(var5);
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = var9[var34];
                var12 = var6.bind(var3)(var5);
                var11 = var12.useStateFromStoresObject;
                var5 = _closure1_slot21;
                var10 = new Array(1);
                var10[0] = var5;
                var5 = function() { // Environment: var7
                    _fun72600: for (var _fun72600_ip = 0;;) switch (_fun72600_ip) {
                        case 0:
                            var0 = {};
                            var7 = _closure1_slot21;
                            var6 = var7.isChannelOptedIn;
                            var5 = _closure2_slot2;
                            var3 = _closure2_slot0;
                            var4 = var3.id;
                            var4 = var6.bind(var7)(var5, var4);
                            var0.isOptedIn = var4;
                            var3 = var3.parent_id;
                            var6 = null;
                            var3 = var6 != var3;
                            if (!var3) {
                                _fun72600_ip = 87;
                                continue _fun72600
                            }
                        case 57:
                            var8 = _closure1_slot21;
                            var7 = var8.isChannelOptedIn;
                            var5 = _closure2_slot2;
                            var4 = _closure2_slot0;
                            var4 = var4.parent_id;
                            var3 = var7.bind(var8)(var5, var4);
                        case 87:
                            var0.isParentOptedIn = var3;
                            var4 = _closure1_slot21;
                            var3 = var4.isFavorite;
                            var5 = _closure2_slot2;
                            if (!(var6 == var5)) {
                                _fun72600_ip = 116;
                                continue _fun72600
                            }
                        case 110:
                            var2 = _closure1_slot30;
                            _fun72600_ip = 120;
                            continue _fun72600;
                        case 116:
                            var2 = _closure2_slot2;
                        case 120:
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var1 = var3.bind(var4)(var2, var1);
                            var0.isFavorited = var1;
                            return var0;
                    }
                };
                var5 = var11.bind(var12)(var10, var5);
                var22 = var5.isOptedIn;
                var21 = var5.isParentOptedIn;
                var20 = var5.isFavorited;
                var5 = var9[var34];
                var12 = var6.bind(var3)(var5);
                var11 = var12.useStateFromStores;
                var5 = _closure1_slot5;
                var10 = new Array(1);
                var10[0] = var5;
                var5 = function() { // Environment: var7
                    _fun72601: for (var _fun72601_ip = 0;;) switch (_fun72601_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun72601_ip = 119;
                                continue _fun72601
                            }
                        case 13: // try_start_0
                            var4 = _closure1_slot5;
                            var3 = var4.getGuildWithoutChangingGuildActionRows;
                            var2 = _closure2_slot2;
                            var2 = var3.bind(var4)(var2);
                            var3 = var2.guildChannels;
                            var2 = var3.getCategoryFromSection;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 75;
                            var4 = var4[var1];
                            var1 = undefined;
                            var1 = var5.bind(var1)(var4);
                            var1 = var1.SECTION_INDEX_FAVORITES;
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.getShownChannelIds;
                            var2 = var1.bind(var2)();
                            var1 = var2.includes;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                        case 111: // try_end0
                            return var0;
                        case 113: // catch_target0
                            CatchBlockStart(arg_register = 0);
                            var0 = false;
                            return var0;
                        case 119:
                            var0 = false;
                            return var0;
                    }
                };
                var19 = var11.bind(var12)(var10, var5);
                var5 = var9[var34];
                var12 = var6.bind(var3)(var5);
                var11 = var12.useStateFromStores;
                var5 = _closure1_slot21;
                var10 = new Array(1);
                var10[0] = var5;
                var5 = function() { // Environment: var7
                    var3 = _closure1_slot21;
                    var2 = var3.isChannelMuted;
                    var1 = _closure2_slot2;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var30 = var11.bind(var12)(var10, var5);
                var5 = var9[var34];
                var12 = var6.bind(var3)(var5);
                var11 = var12.useStateFromStores;
                var5 = _closure1_slot9;
                var10 = new Array(1);
                var10[0] = var5;
                var5 = function() { // Environment: var7
                    _fun72603: for (var _fun72603_ip = 0;;) switch (_fun72603_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun72603_ip = 48;
                                continue _fun72603
                            }
                        case 16:
                            var4 = _closure1_slot9;
                            var3 = var4.hasThreadsForChannel;
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var3.bind(var4)(var2, var1);
                        case 48:
                            return var0;
                    }
                };
                var28 = var11.bind(var12)(var10, var5);
                var5 = var9[var34];
                var12 = var6.bind(var3)(var5);
                var11 = var12.useStateFromStores;
                var5 = _closure1_slot14;
                var10 = new Array(1);
                var10[0] = var5;
                var5 = function() { // Environment: var7
                    var2 = _closure1_slot14;
                    var1 = var2.isCollapsed;
                    var0 = _closure2_slot0;
                    var0 = var0.parent_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var26 = var11.bind(var12)(var10, var5);
                var5 = var9[var34];
                var12 = var6.bind(var3)(var5);
                var11 = var12.useStateFromStores;
                var5 = _closure1_slot16;
                var10 = new Array(1);
                var10[0] = var5;
                var5 = function() { // Environment: var7
                    var2 = _closure1_slot16;
                    var1 = var2.isCollapsed;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var25 = var11.bind(var12)(var10, var5);
                var5 = var9[var34];
                var12 = var6.bind(var3)(var5);
                var11 = var12.useStateFromStores;
                var5 = _closure1_slot8;
                var10 = new Array(1);
                var10[0] = var5;
                var5 = function() { // Environment: var7
                    var2 = _closure1_slot8;
                    var1 = var2.isLive;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var24 = var11.bind(var12)(var10, var5);
                var10 = _closure1_slot1;
                var5 = 28;
                var5 = var9[var5];
                var5 = var10.bind(var3)(var5);
                var11 = true;
                var13 = var5.bind(var3)(var16, var11);
                var5 = 76;
                var5 = var9[var5];
                var5 = var10.bind(var3)(var5);
                var27 = var5.bind(var3)(var16);
                var5 = 77;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.DeveloperMode;
                var5 = var6.useSetting;
                var10 = var5.bind(var6)();
                _closure2_slot3 = var10;
                if (!(var2 == var15)) {
                    _fun72597_ip = 681;
                    continue _fun72597
                }
            case 614:
                var9 = _closure1_slot32;
                var6 = _closure1_slot1;
                var17 = _closure1_slot2;
                var12 = 79;
                var5 = var17[var12];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var14 = _closure1_slot0;
                var12 = var17[var12];
                var12 = var14.bind(var3)(var12);
                var12 = var12.AvatarSizes;
                var12 = var12.LARGE;
                var5.size = var12;
                var5.channel = var16;
                var14 = var9.bind(var3)(var6, var5);
                _fun72597_ip = 746;
                continue _fun72597;
            case 681:
                var9 = _closure1_slot32;
                var6 = _closure1_slot1;
                var17 = _closure1_slot2;
                var12 = 78;
                var5 = var17[var12];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.guild = var15;
                var15 = _closure1_slot0;
                var12 = var17[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.GuildIconSizes;
                var12 = var12.LARGE;
                var5.size = var12;
                var14 = var9.bind(var3)(var6, var5);
            case 746:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var34];
                var12 = var6.bind(var3)(var5);
                var9 = var12.useStateFromStores;
                var5 = _closure1_slot22;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var7
                    var1 = _closure1_slot22;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var9 = var9.bind(var12)(var6, var5);
                var29 = var2 != var9;
                if (!var29) {
                    _fun72597_ip = 816;
                    continue _fun72597
                }
            case 800:
                var6 = var16.isOwner;
                var5 = var9.id;
                var29 = var6.bind(var16)(var5);
            case 816:
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = var12[var34];
                var18 = var6.bind(var3)(var5);
                var17 = var18.useStateFromStoresObject;
                var5 = _closure1_slot21;
                var15 = new Array(1);
                var15[0] = var5;
                var5 = function() { // Environment: var7
                    var0 = {};
                    var5 = _closure1_slot21;
                    var4 = var5.isMessagesFavorite;
                    var1 = _closure2_slot0;
                    var3 = var1.id;
                    var3 = var4.bind(var5)(var3);
                    var0.isMessagesFavorited = var3;
                    var3 = _closure1_slot21;
                    var2 = var3.isAddedToMessages;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0.isAddedToMessages = var1;
                    return var0;
                };
                var5 = var17.bind(var18)(var15, var5);
                var18 = var5.isMessagesFavorited;
                var15 = var5.isAddedToMessages;
                var5 = 80;
                var5 = var12[var5];
                var6 = var6.bind(var3)(var5);
                var5 = var6.useVoiceActivityNotificationSettingsExperiment;
                var17 = var5.bind(var6)(var16);
                var12 = var2 != var9;
                if (!var12) {
                    _fun72597_ip = 932;
                    continue _fun72597
                }
            case 906:
                var5 = var9.isStaff;
                var5 = var5.bind(var9)();
                if (var5) {
                    _fun72597_ip = 929;
                    continue _fun72597
                }
            case 919:
                var6 = var9.isStaffPersonal;
                var5 = var6.bind(var9)();
            case 929:
                var12 = var5;
            case 932:
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 81;
                var5 = var9[var5];
                var6 = var6.bind(var3)(var5);
                var5 = var6.useInappropriateConversationsTiers;
                var5 = var5.bind(var6)(var16);
                var9 = var2 == var5;
                var6 = undefined;
                if (var9) {
                    _fun72597_ip = 978;
                    continue _fun72597
                }
            case 972:
                var6 = var5.isTier1;
            case 978:
                var9 = var2 != var6;
                if (!var9) {
                    _fun72597_ip = 1001;
                    continue _fun72597
                }
            case 985:
                var6 = var2 != var5;
                if (!var6) {
                    _fun72597_ip = 998;
                    continue _fun72597
                }
            case 992:
                var6 = var5.isTier1;
            case 998:
                var9 = !var6;
            case 1001:
                var35 = var2 == var5;
                var6 = undefined;
                if (var35) {
                    _fun72597_ip = 1016;
                    continue _fun72597
                }
            case 1010:
                var6 = var5.isTier2;
            case 1016:
                var6 = var2 != var6;
                if (!var6) {
                    _fun72597_ip = 1039;
                    continue _fun72597
                }
            case 1023:
                var2 = var2 != var5;
                if (!var2) {
                    _fun72597_ip = 1036;
                    continue _fun72597
                }
            case 1030:
                var2 = var5.isTier2;
            case 1036:
                var6 = !var2;
            case 1039:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var34];
                var35 = var5.bind(var3)(var2);
                var34 = var35.useStateFromStores;
                var2 = _closure1_slot6;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var7
                    var2 = _closure1_slot6;
                    var1 = var2.isChannelNudged;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var34.bind(var35)(var5, var2);
                var5 = {};
                var5.channel = var16;
                var5.canManageChannel = var33;
                var5.canCreateInstantInvite = var32;
                var5.canConnect = var31;
                var5.developerMode = var10;
                var5.isMuted = var30;
                var5.isOwner = var29;
                var5.hasThreads = var28;
                var5.isNsfwGated = var27;
                var5.isInCollapsedCategory = var26;
                var5.isCollapsedVoiceChannel = var25;
                var5.isLiveStageChannel = var24;
                var5.isOptInEnabled = var23;
                var5.isOptedIn = var22;
                var5.isParentOptedIn = var21;
                var5.isFavorited = var20;
                var5.isInFavoritesSection = var19;
                var5.isMessagesFavorited = var18;
                var5.isInVoiceActivityNotificationExperiment = var17;
                var5.isAddedToMessages = var15;
                var5.isAddToMessagesEnabled = var12;
                var5.canMarkAsTier1InappropriateConversation = var9;
                var5.canMarkAsTier2InappropriateConversation = var6;
                var5.isReplyNudged = var2;
                var5.analyticsLocations = var4;
                var2 = function arg0() {
                    _fun72610: for (var _fun72610_ip = 0;;) switch (_fun72610_ip) {
                        case 0:
                            var0 = arg0;
                            var13 = var0.channel;
                            var _closure3_slot0 = var13;
                            var6 = var0.canManageChannel;
                            var22 = var0.canCreateInstantInvite;
                            var10 = var0.canConnect;
                            var1 = var0.developerMode;
                            var21 = var0.isMuted;
                            var _closure3_slot1 = var21;
                            var3 = var0.isOwner;
                            var17 = var0.hasThreads;
                            var15 = var0.isNsfwGated;
                            var14 = var0.isInCollapsedCategory;
                            var16 = var0.isCollapsedVoiceChannel;
                            var12 = var0.isLiveStageChannel;
                            var9 = var0.isOptInEnabled;
                            var32 = var0.isOptedIn;
                            var _closure3_slot2 = var32;
                            var34 = var0.isParentOptedIn;
                            var29 = var0.isFavorited;
                            var _closure3_slot3 = var29;
                            var26 = var0.isInFavoritesSection;
                            var27 = var0.isMessagesFavorited;
                            var _closure3_slot4 = var27;
                            var18 = var0.isInVoiceActivityNotificationExperiment;
                            var23 = var0.isAddedToMessages;
                            var _closure3_slot5 = var23;
                            var5 = var0.isAddToMessagesEnabled;
                            var24 = var0.canMarkAsTier1InappropriateConversation;
                            var20 = var0.canMarkAsTier2InappropriateConversation;
                            var19 = var0.isReplyNudged;
                            var0 = var0.analyticsLocations;
                            var _closure3_slot6 = var0;
                            var11 = undefined;
                            var _closure3_slot7 = var11;
                            var0 = new Array(0);
                            var25 = {};
                            var2 = 'dm';
                            var25.sectionKey = var2;
                            var2 = new Array(0);
                            var25.buttons = var2;
                            var2 = var13.isDM;
                            var2 = var2.bind(var13)();
                            if (!var2) {
                                _fun72610_ip = 442;
                                continue _fun72610
                            }
                        case 228:
                            var7 = var25.buttons;
                            var4 = var7.push;
                            var2 = {};
                            var30 = _closure1_slot0;
                            var31 = _closure1_slot2;
                            var28 = 23;
                            var33 = var31[var28];
                            var33 = var30.bind(var11)(var33);
                            var36 = var33.intl;
                            var35 = var36.string;
                            var33 = var31[var28];
                            var33 = var30.bind(var11)(var33);
                            var33 = var33.t;
                            var33 = var33.LYju5J;
                            var33 = var35.bind(var36)(var33);
                            var2.label = var33;
                            var33 = 24;
                            var33 = var31[var33];
                            var33 = var30.bind(var11)(var33);
                            var33 = var33.UserCircleIcon;
                            var2.IconComponent = var33;
                            var33 = function() {
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 25;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = {};
                                var4 = _closure3_slot0;
                                var5 = var4.getRecipientId;
                                var5 = var5.bind(var4)();
                                var1.userId = var5;
                                var4 = var4.id;
                                var1.channelId = var4;
                                var3 = _closure3_slot6;
                                var1.sourceAnalyticsLocations = var3;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var2.onPress = var33;
                            var2 = var4.bind(var7)(var2);
                            var7 = var25.buttons;
                            var4 = var7.push;
                            var2 = {};
                            var33 = var31[var28];
                            var33 = var30.bind(var11)(var33);
                            var35 = var33.intl;
                            var33 = var35.string;
                            var28 = var31[var28];
                            var28 = var30.bind(var11)(var28);
                            var28 = var28.t;
                            var28 = var28.jsvgc3;
                            var28 = var33.bind(var35)(var28);
                            var2.label = var28;
                            var28 = 26;
                            var28 = var31[var28];
                            var28 = var30.bind(var11)(var28);
                            var28 = var28.UserMinusIcon;
                            var2.IconComponent = var28;
                            var28 = function() {
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 27;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.closePrivateChannel;
                                var1 = _closure3_slot0;
                                var2 = var1.id;
                                var6 = _closure1_slot20;
                                var5 = var6.getCurrentlySelectedChannelId;
                                var5 = var5.bind(var6)();
                                var1 = var1.id;
                                var1 = var5 === var1;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var2.onPress = var28;
                            var2 = var4.bind(var7)(var2);
                        case 442:
                            var4 = {};
                            var2 = 'gdm';
                            var4.sectionKey = var2;
                            var2 = new Array(0);
                            var4.buttons = var2;
                            var2 = {};
                            var7 = 'gdm-destructive';
                            var2.sectionKey = var7;
                            var7 = new Array(0);
                            var2.buttons = var7;
                            var7 = var13.isGroupDM;
                            var7 = var7.bind(var13)();
                            if (!var7) {
                                _fun72610_ip = 831;
                                continue _fun72610
                            }
                        case 502:
                            var31 = var2.buttons;
                            var28 = var31.push;
                            var7 = {};
                            var36 = _closure1_slot0;
                            var37 = _closure1_slot2;
                            var30 = 23;
                            var35 = var37[var30];
                            var35 = var36.bind(var11)(var35);
                            var39 = var35.intl;
                            var38 = var39.string;
                            var35 = var37[var30];
                            var35 = var36.bind(var11)(var35);
                            var35 = var35.t;
                            var35 = var35["26C4oi"];
                            var35 = var38.bind(var39)(var35);
                            var7.label = var35;
                            var35 = 26;
                            var35 = var37[var35];
                            var35 = var36.bind(var11)(var35);
                            var35 = var35.UserMinusIcon;
                            var7.IconComponent = var35;
                            var35 = true;
                            var7.isDestructive = var35;
                            var35 = function() {
                                _fun72613: for (var _fun72613_ip = 0;;) switch (_fun72613_ip) {
                                    case 0:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 28;
                                        var3 = var1[var0];
                                        var0 = undefined;
                                        var8 = var2.bind(var0)(var3);
                                        var7 = var8.computeChannelName;
                                        var4 = _closure3_slot0;
                                        var6 = _closure1_slot22;
                                        var3 = _closure1_slot19;
                                        var10 = var7.bind(var8)(var4, var6, var3);
                                        var8 = 23;
                                        var3 = var1[var8];
                                        var3 = var2.bind(var0)(var3);
                                        var9 = var3.intl;
                                        var7 = var9.formatToPlainString;
                                        var3 = var1[var8];
                                        var3 = var2.bind(var0)(var3);
                                        var3 = var3.t;
                                        var6 = var3.hJ5Ap4;
                                        var3 = {};
                                        var3.name = var10;
                                        var3 = var7.bind(var9)(var6, var3);
                                        var6 = var1[var8];
                                        var6 = var2.bind(var0)(var6);
                                        var7 = var6.intl;
                                        var6 = var7.format;
                                        var1 = var1[var8];
                                        var1 = var2.bind(var0)(var1);
                                        var1 = var1.t;
                                        var2 = var1.SSIVOu;
                                        var1 = {};
                                        var1.name = var10;
                                        var6 = var6.bind(var7)(var2, var1);
                                        var1 = var4.isManaged;
                                        var1 = var1.bind(var4)();
                                        var7 = var3;
                                        if (!var1) {
                                            _fun72613_ip = 284;
                                            continue _fun72613
                                        }
                                    case 174:
                                        var3 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var2 = var1[var8];
                                        var2 = var3.bind(var0)(var2);
                                        var11 = var2.intl;
                                        var9 = var11.formatToPlainString;
                                        var2 = var1[var8];
                                        var2 = var3.bind(var0)(var2);
                                        var2 = var2.t;
                                        var4 = var2.hVGjEW;
                                        var2 = {};
                                        var2.name = var10;
                                        var7 = var9.bind(var11)(var4, var2);
                                        var4 = var1[var8];
                                        var4 = var3.bind(var0)(var4);
                                        var9 = var4.intl;
                                        var4 = var9.format;
                                        var1 = var1[var8];
                                        var1 = var3.bind(var0)(var1);
                                        var1 = var1.t;
                                        var3 = var1.IK1Qvs;
                                        var1 = {};
                                        var1.name = var10;
                                        var6 = var4.bind(var9)(var3, var1);
                                    case 284:
                                        var2 = _closure1_slot1;
                                        var4 = _closure1_slot2;
                                        var1 = 29;
                                        var1 = var4[var1];
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.show;
                                        var1 = {};
                                        var1.title = var7;
                                        var1.body = var6;
                                        var7 = _closure1_slot0;
                                        var5 = var4[var8];
                                        var5 = var7.bind(var0)(var5);
                                        var9 = var5.intl;
                                        var6 = var9.string;
                                        var5 = var4[var8];
                                        var5 = var7.bind(var0)(var5);
                                        var5 = var5.t;
                                        var5 = var5.p89ACt;
                                        var5 = var6.bind(var9)(var5);
                                        var1.confirmText = var5;
                                        var5 = var4[var8];
                                        var5 = var7.bind(var0)(var5);
                                        var6 = var5.intl;
                                        var5 = var6.string;
                                        var4 = var4[var8];
                                        var4 = var7.bind(var0)(var4);
                                        var4 = var4.t;
                                        var4 = var4.gm1Vej;
                                        var4 = var5.bind(var6)(var4);
                                        var1.cancelText = var4;
                                        var4 = function() {
                                            var2 = _closure1_slot1;
                                            var1 = _closure1_slot2;
                                            var0 = 27;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var4 = var2.bind(var0)(var1);
                                            var3 = var4.closePrivateChannel;
                                            var1 = _closure3_slot0;
                                            var2 = var1.id;
                                            var6 = _closure1_slot20;
                                            var5 = var6.getCurrentlySelectedChannelId;
                                            var5 = var5.bind(var6)();
                                            var1 = var1.id;
                                            var1 = var5 === var1;
                                            var1 = var3.bind(var4)(var2, var1);
                                            return var0;
                                        };
                                        var1.onConfirm = var4;
                                        var1 = var2.bind(var3)(var1);
                                        return var0;
                                }
                            };
                            var7.onPress = var35;
                            var7 = var28.bind(var31)(var7);
                            var31 = var4.buttons;
                            var28 = var31.push;
                            var7 = {};
                            var35 = var37[var30];
                            var35 = var36.bind(var11)(var35);
                            var39 = var35.intl;
                            var38 = var39.string;
                            var35 = var37[var30];
                            var35 = var36.bind(var11)(var35);
                            var35 = var35.t;
                            var35 = var35["1r5E+m"];
                            var35 = var38.bind(var39)(var35);
                            var7.label = var35;
                            var35 = 30;
                            var35 = var37[var35];
                            var35 = var36.bind(var11)(var35);
                            var35 = var35.PencilIcon;
                            var7.IconComponent = var35;
                            var35 = function() {
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 31;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = {};
                                var3 = _closure3_slot0;
                                var3 = var3.id;
                                var1.channelId = var3;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var7.onPress = var35;
                            var7 = var28.bind(var31)(var7);
                            if (!var3) {
                                _fun72610_ip = 831;
                                continue _fun72610
                            }
                        case 724:
                            var28 = var4.buttons;
                            var7 = var28.push;
                            var3 = {};
                            var31 = _closure1_slot0;
                            var33 = _closure1_slot2;
                            var35 = var33[var30];
                            var35 = var31.bind(var11)(var35);
                            var36 = var35.intl;
                            var35 = var36.string;
                            var30 = var33[var30];
                            var30 = var31.bind(var11)(var30);
                            var30 = var30.t;
                            var30 = var30.OQ9MKu;
                            var30 = var35.bind(var36)(var30);
                            var3.label = var30;
                            var30 = 32;
                            var30 = var33[var30];
                            var30 = var31.bind(var11)(var30);
                            var30 = var30.LinkIcon;
                            var3.IconComponent = var30;
                            var30 = function() {
                                var4 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 33;
                                var3 = var1[var0];
                                var0 = undefined;
                                var4 = var4.bind(var0)(var3);
                                var3 = var4.pushLazy;
                                var5 = _closure1_slot0;
                                var2 = 21;
                                var2 = var1[var2];
                                var5 = var5.bind(var0)(var2);
                                var2 = 34;
                                var2 = var1[var2];
                                var1 = var1.paths;
                                var2 = var5.bind(var0)(var2, var1);
                                var1 = {};
                                var5 = _closure3_slot0;
                                var5 = var5.id;
                                var1.channelId = var5;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var3.onPress = var30;
                            var3 = var7.bind(var28)(var3);
                        case 831:
                            var3 = var25.buttons;
                            var7 = var3.length;
                            var3 = 0;
                            if (!(var7 > var3)) {
                                _fun72610_ip = 858;
                                continue _fun72610
                            }
                        case 848:
                            var7 = var0.push;
                            var7 = var7.bind(var0)(var25);
                        case 858:
                            var7 = var13.getGuildId;
                            var25 = var7.bind(var13)();
                            _closure3_slot7 = var25;
                            var7 = {};
                            var28 = 'channel-actions';
                            var7.sectionKey = var28;
                            var28 = new Array(0);
                            var7.buttons = var28;
                            if (!var22) {
                                _fun72610_ip = 1010;
                                continue _fun72610
                            }
                        case 897:
                            var30 = var7.buttons;
                            var28 = var30.push;
                            var22 = {};
                            var33 = _closure1_slot0;
                            var35 = _closure1_slot2;
                            var31 = 23;
                            var36 = var35[var31];
                            var36 = var33.bind(var11)(var36);
                            var37 = var36.intl;
                            var36 = var37.string;
                            var31 = var35[var31];
                            var31 = var33.bind(var11)(var31);
                            var31 = var31.t;
                            var31 = var31.VINpSK;
                            var31 = var36.bind(var37)(var31);
                            var22.label = var31;
                            var31 = 35;
                            var31 = var35[var31];
                            var31 = var33.bind(var11)(var31);
                            var31 = var31.GroupPlusIcon;
                            var22.IconComponent = var31;
                            var31 = function() {
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 36;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.showInstantInviteActionSheet;
                                var2 = _closure3_slot0;
                                var1 = {};
                                var5 = _closure1_slot27;
                                var5 = var5.CONTEXT_MENU;
                                var1.source = var5;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var22.onPress = var31;
                            var22 = var28.bind(var30)(var22);
                        case 1010:
                            var22 = null;
                            if (!(var22 != var25)) {
                                _fun72610_ip = 1456;
                                continue _fun72610
                            }
                        case 1019:
                            var22 = var13.isThread;
                            var22 = var22.bind(var13)();
                            if (var22) {
                                _fun72610_ip = 1456;
                                continue _fun72610
                            }
                        case 1035:
                            var22 = var9;
                            if (!var22) {
                                _fun72610_ip = 1054;
                                continue _fun72610
                            }
                        case 1041:
                            var25 = var13.isCategory;
                            var25 = var25.bind(var13)();
                            var22 = !var25;
                        case 1054:
                            var25 = var29;
                            if (!var25) {
                                _fun72610_ip = 1063;
                                continue _fun72610
                            }
                        case 1060:
                            var25 = var26;
                        case 1063:
                            if (!var25) {
                                _fun72610_ip = 1079;
                                continue _fun72610
                            }
                        case 1066:
                            var26 = var13.isCategory;
                            var26 = var26.bind(var13)();
                            var25 = !var26;
                        case 1079:
                            if (var22) {
                                _fun72610_ip = 1085;
                                continue _fun72610
                            }
                        case 1082:
                            var22 = var25;
                        case 1085:
                            if (!var22) {
                                _fun72610_ip = 1228;
                                continue _fun72610
                            }
                        case 1091:
                            var26 = var7.buttons;
                            var25 = var26.push;
                            var22 = {};
                            var35 = _closure1_slot0;
                            var36 = _closure1_slot2;
                            var30 = 23;
                            var31 = var36[var30];
                            var31 = var35.bind(var11)(var31);
                            var33 = var31.intl;
                            var31 = var33.string;
                            var30 = var36[var30];
                            var30 = var35.bind(var11)(var30);
                            var30 = var30.t;
                            if (var29) {
                                _fun72610_ip = 1167;
                                continue _fun72610
                            }
                        case 1154:
                            var29 = var30["N2c/Un"];
                            var29 = var31.bind(var33)(var29);
                            _fun72610_ip = 1178;
                            continue _fun72610;
                        case 1167:
                            var30 = var30.z7I3gd;
                            var29 = var31.bind(var33)(var30);
                        case 1178:
                            var22.label = var29;
                            var29 = _closure1_slot0;
                            var30 = _closure1_slot2;
                            var28 = 37;
                            var28 = var30[var28];
                            var28 = var29.bind(var11)(var28);
                            var28 = var28.StarIcon;
                            var22.IconComponent = var28;
                            var28 = function() {
                                _fun72618: for (var _fun72618_ip = 0;;) switch (_fun72618_ip) {
                                    case 0:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var0 = 38;
                                        var2 = var2[var0];
                                        var0 = undefined;
                                        var9 = var3.bind(var0)(var2);
                                        var8 = var9.setIsFavorite;
                                        var14 = _closure3_slot7;
                                        var2 = _closure3_slot0;
                                        var13 = var2.id;
                                        var2 = _closure3_slot3;
                                        var12 = !var2;
                                        var3 = {};
                                        var10 = _closure1_slot25;
                                        var10 = var10.CHANNEL_ACTION_SHEET;
                                        var3.section = var10;
                                        var15 = var9;
                                        var11 = var3;
                                        var3 = var15[var8](var14, var13, var12, var11, var10);
                                        if (var2) {
                                            _fun72618_ip = 236;
                                            continue _fun72618
                                        }
                                    case 86:
                                        var2 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var1 = 39;
                                        var1 = var3[var1];
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.getRootNavigationRef;
                                        var3 = var1.bind(var2)();
                                        var5 = null;
                                        if (!(var5 != var3)) {
                                            _fun72618_ip = 236;
                                            continue _fun72618
                                        }
                                    case 122:
                                        var1 = var3.getCurrentRoute;
                                        var1 = var1.bind(var3)();
                                        var2 = var5 == var1;
                                        var6 = undefined;
                                        if (var2) {
                                            _fun72618_ip = 146;
                                            continue _fun72618
                                        }
                                    case 141:
                                        var6 = var1.name;
                                    case 146:
                                        var1 = var3.getCurrentRoute;
                                        var1 = var1.bind(var3)();
                                        var7 = var5 == var1;
                                        var2 = undefined;
                                        if (var7) {
                                            _fun72618_ip = 171;
                                            continue _fun72618
                                        }
                                    case 165:
                                        var2 = var1.params;
                                    case 171:
                                        var1 = 'guilds';
                                        var1 = var1 === var6;
                                        if (!var1) {
                                            _fun72618_ip = 204;
                                            continue _fun72618
                                        }
                                    case 182:
                                        var6 = var5 == var2;
                                        var5 = undefined;
                                        if (var6) {
                                            _fun72618_ip = 196;
                                            continue _fun72618
                                        }
                                    case 191:
                                        var5 = var2.guildId;
                                    case 196:
                                        var2 = _closure3_slot7;
                                        var1 = var5 === var2;
                                    case 204:
                                        if (!var1) {
                                            _fun72618_ip = 236;
                                            continue _fun72618
                                        }
                                    case 207:
                                        var2 = var3.setParams;
                                        var1 = {};
                                        var4 = _closure3_slot0;
                                        var4 = var4.id;
                                        var1.jumpToChannelId = var4;
                                        var1 = var2.bind(var3)(var1);
                                    case 236:
                                        return var0;
                                }
                            };
                            var22.onPress = var28;
                            var22 = var25.bind(var26)(var22);
                        case 1228:
                            if (!var9) {
                                _fun72610_ip = 1456;
                                continue _fun72610
                            }
                        case 1234:
                            var25 = var7.buttons;
                            var22 = var25.push;
                            var9 = {};
                            var28 = _closure1_slot0;
                            var29 = _closure1_slot2;
                            var26 = 23;
                            var30 = var29[var26];
                            var30 = var28.bind(var11)(var30);
                            var31 = var30.intl;
                            var30 = var31.string;
                            var26 = var29[var26];
                            var26 = var28.bind(var11)(var26);
                            var26 = var26.t;
                            if (var34) {
                                _fun72610_ip = 1401;
                                continue _fun72610
                            }
                        case 1297:
                            if (var32) {
                                _fun72610_ip = 1313;
                                continue _fun72610
                            }
                        case 1300:
                            var34 = var26["9mysCh"];
                            var34 = var30.bind(var31)(var34);
                            _fun72610_ip = 1326;
                            continue _fun72610;
                        case 1313:
                            var35 = var26["3zySTA"];
                            var34 = var30.bind(var31)(var35);
                        case 1326:
                            var9.label = var34;
                            var34 = _closure1_slot0;
                            var35 = _closure1_slot2;
                            if (var32) {
                                _fun72610_ip = 1361;
                                continue _fun72610
                            }
                        case 1341:
                            var32 = 41;
                            var32 = var35[var32];
                            var32 = var34.bind(var11)(var32);
                            var32 = var32.PlusLargeIcon;
                            _fun72610_ip = 1379;
                            continue _fun72610;
                        case 1361:
                            var33 = 40;
                            var33 = var35[var33];
                            var33 = var34.bind(var11)(var33);
                            var32 = var33.XSmallIcon;
                        case 1379:
                            var9.IconComponent = var32;
                            var32 = function() {
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 38;
                                var1 = var1[var0];
                                var0 = undefined;
                                var6 = var2.bind(var0)(var1);
                                var5 = var6.setOptInChannel;
                                var11 = _closure3_slot7;
                                var2 = _closure3_slot0;
                                var10 = var2.id;
                                var1 = _closure3_slot2;
                                var9 = !var1;
                                var1 = {};
                                var7 = _closure1_slot25;
                                var7 = var7.CHANNEL_ACTION_SHEET;
                                var1.section = var7;
                                var12 = var6;
                                var8 = var1;
                                var1 = var12[var5](var11, var10, var9, var8, var7);
                                return var0;
                            };
                            var9.onPress = var32;
                            var32 = var22.bind(var25)(var9);
                            _fun72610_ip = 1456;
                            continue _fun72610;
                        case 1401:
                            var26 = var26.jNphKT;
                            var26 = var30.bind(var31)(var26);
                            var9.label = var26;
                            var26 = 40;
                            var26 = var29[var26];
                            var26 = var28.bind(var11)(var26);
                            var26 = var26.XSmallIcon;
                            var9.IconComponent = var26;
                            var26 = function() {
                                _fun72619: for (var _fun72619_ip = 0;;) switch (_fun72619_ip) {
                                    case 0:
                                        var0 = _closure3_slot0;
                                        var2 = var0.parent_id;
                                        var0 = null;
                                        if (!(var0 != var2)) {
                                            _fun72619_ip = 92;
                                            continue _fun72619
                                        }
                                    case 19:
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var2 = 38;
                                        var3 = var3[var2];
                                        var2 = undefined;
                                        var5 = var4.bind(var2)(var3);
                                        var4 = var5.setOptInChannel;
                                        var9 = _closure3_slot7;
                                        var1 = _closure3_slot0;
                                        var8 = var1.parent_id;
                                        var1 = {};
                                        var0 = _closure1_slot25;
                                        var0 = var0.CHANNEL_ACTION_SHEET;
                                        var1.section = var0;
                                        var7 = false;
                                        var10 = var5;
                                        var6 = var1;
                                        var0 = var10[var4](var9, var8, var7, var6, var5);
                                    case 92:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var9.onPress = var26;
                            var9 = var22.bind(var25)(var9);
                        case 1456:
                            var25 = _closure1_slot10;
                            var22 = var13.type;
                            var22 = var25.bind(var11)(var22);
                            if (var22) {
                                _fun72610_ip = 1490;
                                continue _fun72610
                            }
                        case 1476:
                            var26 = _closure1_slot11;
                            var25 = var13.type;
                            var22 = var26.bind(var11)(var25);
                        case 1490:
                            if (var22) {
                                _fun72610_ip = 1503;
                                continue _fun72610
                            }
                        case 1493:
                            var25 = var13.isForumLikeChannel;
                            var22 = var25.bind(var13)();
                        case 1503:
                            if (!var22) {
                                _fun72610_ip = 1623;
                                continue _fun72610
                            }
                        case 1506:
                            var26 = var7.buttons;
                            var25 = var26.push;
                            var22 = {};
                            var29 = _closure1_slot0;
                            var30 = _closure1_slot2;
                            var28 = 23;
                            var31 = var30[var28];
                            var31 = var29.bind(var11)(var31);
                            var32 = var31.intl;
                            var31 = var32.string;
                            var28 = var30[var28];
                            var28 = var29.bind(var11)(var28);
                            var28 = var28.t;
                            var28 = var28.WqhZss;
                            var28 = var31.bind(var32)(var28);
                            var22.label = var28;
                            var28 = 32;
                            var28 = var30[var28];
                            var28 = var29.bind(var11)(var28);
                            var28 = var28.LinkIcon;
                            var22.IconComponent = var28;
                            var28 = false;
                            var22.isDestructive = var28;
                            var28 = function() {
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 42;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.copyGuildChannelOrThreadLink;
                                var1 = _closure3_slot0;
                                var2 = var1.guild_id;
                                var1 = var1.id;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var22.onPress = var28;
                            var22 = var25.bind(var26)(var22);
                        case 1623:
                            var22 = var13.isPrivate;
                            var22 = var22.bind(var13)();
                            if (!var22) {
                                _fun72610_ip = 1773;
                                continue _fun72610
                            }
                        case 1639:
                            var26 = var7.buttons;
                            var25 = var26.push;
                            var22 = {};
                            var31 = _closure1_slot0;
                            var32 = _closure1_slot2;
                            var28 = 23;
                            var29 = var32[var28];
                            var29 = var31.bind(var11)(var29);
                            var30 = var29.intl;
                            var29 = var30.string;
                            var28 = var32[var28];
                            var28 = var31.bind(var11)(var28);
                            var28 = var28.t;
                            if (var27) {
                                _fun72610_ip = 1712;
                                continue _fun72610
                            }
                        case 1699:
                            var27 = var28["N2c/Un"];
                            var27 = var29.bind(var30)(var27);
                            _fun72610_ip = 1723;
                            continue _fun72610;
                        case 1712:
                            var28 = var28.z7I3gd;
                            var27 = var29.bind(var30)(var28);
                        case 1723:
                            var22.label = var27;
                            var28 = _closure1_slot0;
                            var29 = _closure1_slot2;
                            var27 = 37;
                            var27 = var29[var27];
                            var27 = var28.bind(var11)(var27);
                            var27 = var27.StarIcon;
                            var22.IconComponent = var27;
                            var27 = function() {
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 38;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.setMessagesFavorite;
                                var2 = _closure3_slot0;
                                var2 = var2.id;
                                var1 = _closure3_slot4;
                                var1 = !var1;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var22.onPress = var27;
                            var22 = var25.bind(var26)(var22);
                        case 1773:
                            var22 = {};
                            var25 = 'safety-warning-tooling';
                            var22.sectionKey = var25;
                            var25 = new Array(0);
                            var22.buttons = var25;
                            if (!var24) {
                                _fun72610_ip = 1910;
                                continue _fun72610
                            }
                        case 1798:
                            var26 = var22.buttons;
                            var25 = var26.push;
                            var24 = {};
                            var28 = _closure1_slot0;
                            var29 = _closure1_slot2;
                            var27 = 23;
                            var30 = var29[var27];
                            var30 = var28.bind(var11)(var30);
                            var31 = var30.intl;
                            var30 = var31.string;
                            var27 = var29[var27];
                            var27 = var28.bind(var11)(var27);
                            var27 = var27.t;
                            var27 = var27.EuzCET;
                            var27 = var30.bind(var31)(var27);
                            var24.label = var27;
                            var27 = 43;
                            var27 = var29[var27];
                            var27 = var28.bind(var11)(var27);
                            var27 = var27.WarningIcon;
                            var24.IconComponent = var27;
                            var27 = function() {
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 44;
                                var2 = var2[var0];
                                var0 = undefined;
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.markAsInappropriateConversation;
                                var2 = _closure3_slot0;
                                var2 = var2.id;
                                var1 = _closure1_slot7;
                                var1 = var1.INAPPROPRIATE_CONVERSATION_TIER_1;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var24.onPress = var27;
                            var24 = var25.bind(var26)(var24);
                        case 1910:
                            if (!var20) {
                                _fun72610_ip = 2025;
                                continue _fun72610
                            }
                        case 1913:
                            var25 = var22.buttons;
                            var24 = var25.push;
                            var20 = {};
                            var27 = _closure1_slot0;
                            var28 = _closure1_slot2;
                            var26 = 23;
                            var29 = var28[var26];
                            var29 = var27.bind(var11)(var29);
                            var30 = var29.intl;
                            var29 = var30.string;
                            var26 = var28[var26];
                            var26 = var27.bind(var11)(var26);
                            var26 = var26.t;
                            var26 = var26["tBw/1i"];
                            var26 = var29.bind(var30)(var26);
                            var20.label = var26;
                            var26 = 43;
                            var26 = var28[var26];
                            var26 = var27.bind(var11)(var26);
                            var26 = var26.WarningIcon;
                            var20.IconComponent = var26;
                            var26 = function() {
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 44;
                                var2 = var2[var0];
                                var0 = undefined;
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.markAsInappropriateConversation;
                                var2 = _closure3_slot0;
                                var2 = var2.id;
                                var1 = _closure1_slot7;
                                var1 = var1.INAPPROPRIATE_CONVERSATION_TIER_2;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var20.onPress = var26;
                            var20 = var24.bind(var25)(var20);
                        case 2025:
                            var20 = var22.buttons;
                            var20 = var20.length;
                            if (!(var20 > var3)) {
                                _fun72610_ip = 2050;
                                continue _fun72610
                            }
                        case 2040:
                            var20 = var0.push;
                            var20 = var20.bind(var0)(var22);
                        case 2050:
                            if (!var5) {
                                _fun72610_ip = 2067;
                                continue _fun72610
                            }
                        case 2053:
                            var22 = _closure1_slot10;
                            var20 = var13.type;
                            var5 = var22.bind(var11)(var20);
                        case 2067:
                            if (!var5) {
                                _fun72610_ip = 2211;
                                continue _fun72610
                            }
                        case 2073:
                            var22 = var7.buttons;
                            var20 = var22.push;
                            var5 = {};
                            var27 = _closure1_slot0;
                            var28 = _closure1_slot2;
                            var24 = 23;
                            var25 = var28[var24];
                            var25 = var27.bind(var11)(var25);
                            var26 = var25.intl;
                            var25 = var26.string;
                            var24 = var28[var24];
                            var24 = var27.bind(var11)(var24);
                            var24 = var24.t;
                            if (var23) {
                                _fun72610_ip = 2148;
                                continue _fun72610
                            }
                        case 2133:
                            var23 = var24.LOp2MR;
                            var23 = var25.bind(var26)(var23);
                            _fun72610_ip = 2161;
                            continue _fun72610;
                        case 2148:
                            var24 = var24.n7rKhb;
                            var23 = var25.bind(var26)(var24);
                        case 2161:
                            var5.label = var23;
                            var24 = _closure1_slot0;
                            var25 = _closure1_slot2;
                            var23 = 45;
                            var23 = var25[var23];
                            var23 = var24.bind(var11)(var23);
                            var23 = var23.ChatIcon;
                            var5.IconComponent = var23;
                            var23 = function() {
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 38;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.setAddToMessages;
                                var2 = _closure3_slot0;
                                var2 = var2.id;
                                var1 = _closure3_slot5;
                                var1 = !var1;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var5.onPress = var23;
                            var5 = var20.bind(var22)(var5);
                        case 2211:
                            var5 = var7.buttons;
                            var5 = var5.length;
                            if (!(var5 > var3)) {
                                _fun72610_ip = 2236;
                                continue _fun72610
                            }
                        case 2226:
                            var5 = var0.push;
                            var5 = var5.bind(var0)(var7);
                        case 2236:
                            var7 = {};
                            var5 = 'notifications';
                            var7.sectionKey = var5;
                            var5 = new Array(0);
                            var7.buttons = var5;
                            var20 = _closure1_slot12;
                            var5 = var13.type;
                            var5 = var20.bind(var11)(var5);
                            if (var5) {
                                _fun72610_ip = 2283;
                                continue _fun72610
                            }
                        case 2273:
                            var20 = var13.isCategory;
                            var5 = var20.bind(var13)();
                        case 2283:
                            if (var5) {
                                _fun72610_ip = 2296;
                                continue _fun72610
                            }
                        case 2286:
                            var20 = var13.isForumLikeChannel;
                            var5 = var20.bind(var13)();
                        case 2296:
                            if (!var5) {
                                _fun72610_ip = 2409;
                                continue _fun72610
                            }
                        case 2299:
                            var22 = var7.buttons;
                            var20 = var22.push;
                            var5 = {};
                            var24 = _closure1_slot0;
                            var25 = _closure1_slot2;
                            var23 = 23;
                            var26 = var25[var23];
                            var26 = var24.bind(var11)(var26);
                            var27 = var26.intl;
                            var26 = var27.string;
                            var23 = var25[var23];
                            var23 = var24.bind(var11)(var23);
                            var23 = var23.t;
                            var23 = var23.e6RscS;
                            var23 = var26.bind(var27)(var23);
                            var5.label = var23;
                            var23 = 46;
                            var23 = var25[var23];
                            var23 = var24.bind(var11)(var23);
                            var23 = var23.EyeIcon;
                            var5.IconComponent = var23;
                            var23 = function() {
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 47;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.ackChannel;
                                var2 = _closure3_slot0;
                                var1 = {};
                                var6 = _closure1_slot25;
                                var6 = var6.CHANNEL_ACTION_SHEET;
                                var1.section = var6;
                                var6 = _closure1_slot24;
                                var6 = var6.MARK_CHANNEL_AS_READ_BUTTON;
                                var1.object = var6;
                                var5 = _closure1_slot23;
                                var5 = var5.ACK_MANUAL;
                                var1.objectType = var5;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var5.onPress = var23;
                            var5 = var20.bind(var22)(var5);
                        case 2409:
                            var5 = var13.isDM;
                            var5 = var5.bind(var13)();
                            if (!var5) {
                                _fun72610_ip = 2425;
                                continue _fun72610
                            }
                        case 2422:
                            var5 = var19;
                        case 2425:
                            if (!var5) {
                                _fun72610_ip = 2540;
                                continue _fun72610
                            }
                        case 2428:
                            var20 = var7.buttons;
                            var19 = var20.push;
                            var5 = {};
                            var23 = _closure1_slot0;
                            var24 = _closure1_slot2;
                            var22 = 23;
                            var25 = var24[var22];
                            var25 = var23.bind(var11)(var25);
                            var26 = var25.intl;
                            var25 = var26.string;
                            var22 = var24[var22];
                            var22 = var23.bind(var11)(var22);
                            var22 = var22.t;
                            var22 = var22.q62UVy;
                            var22 = var25.bind(var26)(var22);
                            var5.label = var22;
                            var22 = 48;
                            var22 = var24[var22];
                            var22 = var23.bind(var11)(var22);
                            var22 = var22.ChatXIcon;
                            var5.IconComponent = var22;
                            var22 = function() {
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 49;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.clearReplyNudge;
                                var1 = _closure3_slot0;
                                var1 = var1.id;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var5.onPress = var22;
                            var5 = var19.bind(var20)(var5);
                        case 2540:
                            var19 = _closure1_slot13;
                            var5 = var13.type;
                            var5 = var19.bind(var11)(var5);
                            if (var5) {
                                _fun72610_ip = 2602;
                                continue _fun72610
                            }
                        case 2557:
                            var5 = var13.isCategory;
                            var5 = var5.bind(var13)();
                            if (var5) {
                                _fun72610_ip = 2602;
                                continue _fun72610
                            }
                        case 2570:
                            if (!var18) {
                                _fun72610_ip = 2586;
                                continue _fun72610
                            }
                        case 2573:
                            var5 = var13.isGuildVoice;
                            var5 = var5.bind(var13)();
                            if (var5) {
                                _fun72610_ip = 2602;
                                continue _fun72610
                            }
                        case 2586:
                            var5 = var13.isForumLikeChannel;
                            var5 = var5.bind(var13)();
                            if (!var5) {
                                _fun72610_ip = 3259;
                                continue _fun72610
                            }
                        case 2602:
                            var22 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var23 = 23;
                            var19 = var5[var23];
                            var19 = var22.bind(var11)(var19);
                            var20 = var19.intl;
                            var19 = var20.string;
                            var5 = var5[var23];
                            var5 = var22.bind(var11)(var5);
                            var5 = var5.t;
                            if (var21) {
                                _fun72610_ip = 2958;
                                continue _fun72610
                            }
                        case 2652:
                            var21 = var5.tbeRRJ;
                            var22 = var19.bind(var20)(var21);
                            var21 = var13.isCategory;
                            var21 = var21.bind(var13)();
                            if (var21) {
                                _fun72610_ip = 2836;
                                continue _fun72610
                            }
                        case 2681:
                            var21 = var13.isDM;
                            var21 = var21.bind(var13)();
                            if (var21) {
                                _fun72610_ip = 2780;
                                continue _fun72610
                            }
                        case 2694:
                            var21 = var13.isGroupDM;
                            var21 = var21.bind(var13)();
                            if (var21) {
                                _fun72610_ip = 2780;
                                continue _fun72610
                            }
                        case 2707:
                            var21 = var13.isThread;
                            var21 = var21.bind(var13)();
                            var25 = var22;
                            if (!var21) {
                                _fun72610_ip = 2890;
                                continue _fun72610
                            }
                        case 2726:
                            var26 = _closure1_slot0;
                            var21 = _closure1_slot2;
                            var22 = var21[var23];
                            var22 = var26.bind(var11)(var22);
                            var24 = var22.intl;
                            var22 = var24.string;
                            var21 = var21[var23];
                            var21 = var26.bind(var11)(var21);
                            var21 = var21.t;
                            var21 = var21.bUUd8q;
                            var25 = var22.bind(var24)(var21);
                            _fun72610_ip = 2890;
                            continue _fun72610;
                        case 2780:
                            var26 = _closure1_slot0;
                            var21 = _closure1_slot2;
                            var22 = var21[var23];
                            var22 = var26.bind(var11)(var22);
                            var24 = var22.intl;
                            var22 = var24.string;
                            var21 = var21[var23];
                            var21 = var26.bind(var11)(var21);
                            var21 = var21.t;
                            var21 = var21.LO3kaK;
                            var25 = var22.bind(var24)(var21);
                            _fun72610_ip = 2890;
                            continue _fun72610;
                        case 2836:
                            var26 = _closure1_slot0;
                            var21 = _closure1_slot2;
                            var22 = var21[var23];
                            var22 = var26.bind(var11)(var22);
                            var24 = var22.intl;
                            var22 = var24.string;
                            var21 = var21[var23];
                            var21 = var26.bind(var11)(var21);
                            var21 = var21.t;
                            var21 = var21.pNMCg2;
                            var25 = var22.bind(var24)(var21);
                        case 2890:
                            var24 = var7.buttons;
                            var22 = var24.push;
                            var21 = {};
                            var21.label = var25;
                            var26 = _closure1_slot0;
                            var27 = _closure1_slot2;
                            var25 = 50;
                            var25 = var27[var25];
                            var25 = var26.bind(var11)(var25);
                            var25 = var25.BellSlashIcon;
                            var21.IconComponent = var25;
                            var25 = function() {
                                _fun72629: for (var _fun72629_ip = 0;;) switch (_fun72629_ip) {
                                    case 0:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var0 = 39;
                                        var2 = var2[var0];
                                        var0 = undefined;
                                        var3 = var3.bind(var0)(var2);
                                        var2 = var3.getRootNavigationRef;
                                        var4 = var2.bind(var3)();
                                        var2 = null;
                                        var2 = var2 != var4;
                                        if (!var2) {
                                            _fun72629_ip = 54;
                                            continue _fun72629
                                        }
                                    case 44:
                                        var3 = var4.isReady;
                                        var2 = var3.bind(var4)();
                                    case 54:
                                        if (!var2) {
                                            _fun72629_ip = 118;
                                            continue _fun72629
                                        }
                                    case 57:
                                        var3 = var4.navigate;
                                        var2 = {};
                                        var5 = _closure3_slot0;
                                        var5 = var5.id;
                                        var2.channelId = var5;
                                        var1 = _closure1_slot31;
                                        var1 = var1.MUTE;
                                        var2.initialRouteName = var1;
                                        var1 = 'channel-long-press-sheet';
                                        var2.source = var1;
                                        var1 = 'sidebar';
                                        var1 = var3.bind(var4)(var1, var2);
                                    case 118:
                                        return var0;
                                }
                            };
                            var21.onPress = var25;
                            var21 = var22.bind(var24)(var21);
                            _fun72610_ip = 3259;
                            continue _fun72610;
                        case 2958:
                            var5 = var5.OYefme;
                            var19 = var19.bind(var20)(var5);
                            var5 = var13.isCategory;
                            var5 = var5.bind(var13)();
                            if (var5) {
                                _fun72610_ip = 3142;
                                continue _fun72610
                            }
                        case 2987:
                            var5 = var13.isDM;
                            var5 = var5.bind(var13)();
                            if (var5) {
                                _fun72610_ip = 3086;
                                continue _fun72610
                            }
                        case 3000:
                            var5 = var13.isGroupDM;
                            var5 = var5.bind(var13)();
                            if (var5) {
                                _fun72610_ip = 3086;
                                continue _fun72610
                            }
                        case 3013:
                            var5 = var13.isThread;
                            var5 = var5.bind(var13)();
                            var21 = var19;
                            if (!var5) {
                                _fun72610_ip = 3196;
                                continue _fun72610
                            }
                        case 3032:
                            var22 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var19 = var5[var23];
                            var19 = var22.bind(var11)(var19);
                            var20 = var19.intl;
                            var19 = var20.string;
                            var5 = var5[var23];
                            var5 = var22.bind(var11)(var5);
                            var5 = var5.t;
                            var5 = var5["Cq/TzF"];
                            var21 = var19.bind(var20)(var5);
                            _fun72610_ip = 3196;
                            continue _fun72610;
                        case 3086:
                            var22 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var19 = var5[var23];
                            var19 = var22.bind(var11)(var19);
                            var20 = var19.intl;
                            var19 = var20.string;
                            var5 = var5[var23];
                            var5 = var22.bind(var11)(var5);
                            var5 = var5.t;
                            var5 = var5["s5/5fm"];
                            var21 = var19.bind(var20)(var5);
                            _fun72610_ip = 3196;
                            continue _fun72610;
                        case 3142:
                            var22 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var19 = var5[var23];
                            var19 = var22.bind(var11)(var19);
                            var20 = var19.intl;
                            var19 = var20.string;
                            var5 = var5[var23];
                            var5 = var22.bind(var11)(var5);
                            var5 = var5.t;
                            var5 = var5.olaBeG;
                            var21 = var19.bind(var20)(var5);
                        case 3196:
                            var20 = var7.buttons;
                            var19 = var20.push;
                            var5 = {};
                            var5.label = var21;
                            var22 = _closure1_slot0;
                            var23 = _closure1_slot2;
                            var21 = 51;
                            var21 = var23[var21];
                            var21 = var22.bind(var11)(var21);
                            var21 = var21.BellIcon;
                            var5.IconComponent = var21;
                            var21 = function() {
                                var2 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var0 = 52;
                                var1 = var9[var0];
                                var0 = undefined;
                                var6 = var2.bind(var0)(var1);
                                var5 = var6.updateChannelOverrideSettings;
                                var2 = _closure3_slot0;
                                var3 = var2.getGuildId;
                                var4 = var3.bind(var2)();
                                var12 = var2.id;
                                var2 = {};
                                var1 = _closure3_slot1;
                                var8 = !var1;
                                var2.muted = var8;
                                var8 = _closure1_slot0;
                                var7 = 53;
                                var7 = var9[var7];
                                var7 = var8.bind(var0)(var7);
                                var8 = var7.NotificationLabel;
                                var7 = var8.muted;
                                var1 = !var1;
                                var10 = var7.bind(var8)(var1);
                                var14 = var6;
                                var13 = var4;
                                var11 = var2;
                                var1 = var14[var5](var13, var12, var11, var10, var9);
                                return var0;
                            };
                            var5.onPress = var21;
                            var5 = var19.bind(var20)(var5);
                        case 3259:
                            var19 = _closure1_slot10;
                            var5 = var13.type;
                            var5 = var19.bind(var11)(var5);
                            if (var5) {
                                _fun72610_ip = 3286;
                                continue _fun72610
                            }
                        case 3276:
                            var19 = var13.isCategory;
                            var5 = var19.bind(var13)();
                        case 3286:
                            if (var5) {
                                _fun72610_ip = 3299;
                                continue _fun72610
                            }
                        case 3289:
                            var19 = var13.isGuildStageVoice;
                            var5 = var19.bind(var13)();
                        case 3299:
                            if (var5) {
                                _fun72610_ip = 3318;
                                continue _fun72610
                            }
                        case 3302:
                            if (!var18) {
                                _fun72610_ip = 3315;
                                continue _fun72610
                            }
                        case 3305:
                            var19 = var13.isGuildVoice;
                            var18 = var19.bind(var13)();
                        case 3315:
                            var5 = var18;
                        case 3318:
                            if (var5) {
                                _fun72610_ip = 3331;
                                continue _fun72610
                            }
                        case 3321:
                            var18 = var13.isForumLikeChannel;
                            var5 = var18.bind(var13)();
                        case 3331:
                            if (!var5) {
                                _fun72610_ip = 3451;
                                continue _fun72610
                            }
                        case 3334:
                            var19 = var7.buttons;
                            var18 = var19.push;
                            var5 = {};
                            var21 = _closure1_slot0;
                            var22 = _closure1_slot2;
                            var20 = 23;
                            var23 = var22[var20];
                            var23 = var21.bind(var11)(var23);
                            var24 = var23.intl;
                            var23 = var24.string;
                            var20 = var22[var20];
                            var20 = var21.bind(var11)(var20);
                            var20 = var20.t;
                            var20 = var20.h850Ss;
                            var20 = var23.bind(var24)(var20);
                            var5.label = var20;
                            var20 = 54;
                            var20 = var22[var20];
                            var20 = var21.bind(var11)(var20);
                            var20 = var20.ChannelNotificationIcon;
                            var5.IconComponent = var20;
                            var20 = true;
                            var5.disableColor = var20;
                            var20 = function() {
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 55;
                                var5 = var3[var1];
                                var0 = undefined;
                                var6 = var2.bind(var0)(var5);
                                var5 = var6.setSection;
                                var4 = _closure1_slot26;
                                var4 = var4.NOTIFICATIONS;
                                var4 = var5.bind(var6)(var4);
                                var1 = var3[var1];
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.open;
                                var1 = _closure3_slot0;
                                var1 = var1.id;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var5.onPress = var20;
                            var5 = var18.bind(var19)(var5);
                        case 3451:
                            var5 = var7.buttons;
                            var5 = var5.length;
                            if (!(var5 > var3)) {
                                _fun72610_ip = 3476;
                                continue _fun72610
                            }
                        case 3466:
                            var5 = var0.push;
                            var5 = var5.bind(var0)(var7);
                        case 3476:
                            var7 = {};
                            var5 = 'threads';
                            var7.sectionKey = var5;
                            var5 = new Array(0);
                            var7.buttons = var5;
                            var5 = var13.isThread;
                            var5 = var5.bind(var13)();
                            if (var5) {
                                _fun72610_ip = 3519;
                                continue _fun72610
                            }
                        case 3509:
                            var18 = var13.isForumLikeChannel;
                            var5 = var18.bind(var13)();
                        case 3519:
                            if (var5) {
                                _fun72610_ip = 3525;
                                continue _fun72610
                            }
                        case 3522:
                            var5 = !var17;
                        case 3525:
                            if (var5) {
                                _fun72610_ip = 3531;
                                continue _fun72610
                            }
                        case 3528:
                            var5 = var15;
                        case 3531:
                            if (var5) {
                                _fun72610_ip = 3644;
                                continue _fun72610
                            }
                        case 3534:
                            var17 = var7.buttons;
                            var15 = var17.push;
                            var5 = {};
                            var19 = _closure1_slot0;
                            var20 = _closure1_slot2;
                            var18 = 23;
                            var21 = var20[var18];
                            var21 = var19.bind(var11)(var21);
                            var22 = var21.intl;
                            var21 = var22.string;
                            var18 = var20[var18];
                            var18 = var19.bind(var11)(var18);
                            var18 = var18.t;
                            var18 = var18.B2panI;
                            var18 = var21.bind(var22)(var18);
                            var5.label = var18;
                            var18 = 56;
                            var18 = var20[var18];
                            var18 = var19.bind(var11)(var18);
                            var18 = var18.ThreadIcon;
                            var5.IconComponent = var18;
                            var18 = function() {
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 57;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = _closure3_slot0;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var5.onPress = var18;
                            var5 = var15.bind(var17)(var5);
                        case 3644:
                            var5 = var7.buttons;
                            var5 = var5.length;
                            if (!(var5 > var3)) {
                                _fun72610_ip = 3669;
                                continue _fun72610
                            }
                        case 3659:
                            var5 = var0.push;
                            var5 = var5.bind(var0)(var7);
                        case 3669:
                            var7 = {};
                            var5 = 'voice';
                            var7.sectionKey = var5;
                            var5 = new Array(0);
                            var7.buttons = var5;
                            var15 = _closure1_slot11;
                            var5 = var13.type;
                            var5 = var15.bind(var11)(var5);
                            if (!var5) {
                                _fun72610_ip = 3709;
                                continue _fun72610
                            }
                        case 3706:
                            var5 = !var14;
                        case 3709:
                            if (!var5) {
                                _fun72610_ip = 3853;
                                continue _fun72610
                            }
                        case 3715:
                            var15 = var7.buttons;
                            var14 = var15.push;
                            var5 = {};
                            var20 = _closure1_slot0;
                            var21 = _closure1_slot2;
                            var17 = 23;
                            var18 = var21[var17];
                            var18 = var20.bind(var11)(var18);
                            var19 = var18.intl;
                            var18 = var19.string;
                            var17 = var21[var17];
                            var17 = var20.bind(var11)(var17);
                            var17 = var17.t;
                            if (var16) {
                                _fun72610_ip = 3790;
                                continue _fun72610
                            }
                        case 3775:
                            var16 = var17.LxzNiu;
                            var16 = var18.bind(var19)(var16);
                            _fun72610_ip = 3803;
                            continue _fun72610;
                        case 3790:
                            var17 = var17.JYF2Oa;
                            var16 = var18.bind(var19)(var17);
                        case 3803:
                            var5.label = var16;
                            var17 = _closure1_slot0;
                            var18 = _closure1_slot2;
                            var16 = 24;
                            var16 = var18[var16];
                            var16 = var17.bind(var11)(var16);
                            var16 = var16.UserCircleIcon;
                            var5.IconComponent = var16;
                            var16 = function() {
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 58;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.update;
                                var1 = _closure3_slot0;
                                var1 = var1.id;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var5.onPress = var16;
                            var5 = var14.bind(var15)(var5);
                        case 3853:
                            var5 = var13.isGuildVocal;
                            var5 = var5.bind(var13)();
                            if (!var5) {
                                _fun72610_ip = 4149;
                                continue _fun72610
                            }
                        case 3869:
                            var5 = var13.isGuildStageVoice;
                            var22 = var5.bind(var13)();
                            var15 = var7.buttons;
                            var14 = var15.push;
                            var5 = {};
                            var17 = _closure1_slot0;
                            var18 = _closure1_slot2;
                            var16 = 23;
                            var19 = var18[var16];
                            var19 = var17.bind(var11)(var19);
                            var21 = var19.intl;
                            var20 = var21.string;
                            var19 = var18[var16];
                            var19 = var17.bind(var11)(var19);
                            var19 = var19.t;
                            if (var22) {
                                _fun72610_ip = 3997;
                                continue _fun72610
                            }
                        case 3939:
                            var22 = var19.ZXxLQg;
                            var22 = var20.bind(var21)(var22);
                            var5.label = var22;
                            var22 = 45;
                            var22 = var18[var22];
                            var22 = var17.bind(var11)(var22);
                            var22 = var22.ChatIcon;
                            var5.IconComponent = var22;
                            var22 = function() {
                                var3 = _closure1_slot33;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var3 = var3.bind(var0)(var1);
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 62;
                                var2 = var4[var2];
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.updateChatOpen;
                                var2 = var1.id;
                                var1 = true;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var5.onPress = var22;
                            var22 = var14.bind(var15)(var5);
                            _fun72610_ip = 4149;
                            continue _fun72610;
                        case 3997:
                            var19 = var19["7vb2cc"];
                            var19 = var20.bind(var21)(var19);
                            var5.label = var19;
                            var19 = 59;
                            var19 = var18[var19];
                            var19 = var17.bind(var11)(var19);
                            var19 = var19.StageIcon;
                            var5.IconComponent = var19;
                            var19 = function() {
                                var2 = _closure1_slot33;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var5.onPress = var19;
                            var5 = var14.bind(var15)(var5);
                            var15 = var7.buttons;
                            var14 = var15.push;
                            var5 = {};
                            var19 = var18[var16];
                            var19 = var17.bind(var11)(var19);
                            var20 = var19.intl;
                            var19 = var20.string;
                            var16 = var18[var16];
                            var16 = var17.bind(var11)(var16);
                            var16 = var16.t;
                            var16 = var16.ZXxLQg;
                            var16 = var19.bind(var20)(var16);
                            var5.label = var16;
                            var16 = 45;
                            var16 = var18[var16];
                            var16 = var17.bind(var11)(var16);
                            var16 = var16.ChatIcon;
                            var5.IconComponent = var16;
                            var16 = function() {
                                var4 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 60;
                                var3 = var1[var0];
                                var0 = undefined;
                                var5 = var4.bind(var0)(var3);
                                var3 = var5.hideActionSheet;
                                var3 = var3.bind(var5)();
                                var3 = 33;
                                var3 = var1[var3];
                                var4 = var4.bind(var0)(var3);
                                var3 = var4.pushLazy;
                                var5 = _closure1_slot0;
                                var2 = 21;
                                var2 = var1[var2];
                                var5 = var5.bind(var0)(var2);
                                var2 = 61;
                                var2 = var1[var2];
                                var1 = var1.paths;
                                var2 = var5.bind(var0)(var2, var1);
                                var1 = {};
                                var5 = _closure3_slot0;
                                var1.channel = var5;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var5.onPress = var16;
                            var5 = var14.bind(var15)(var5);
                        case 4149:
                            var5 = var13.isGuildStageVoice;
                            var5 = var5.bind(var13)();
                            if (!var5) {
                                _fun72610_ip = 4165;
                                continue _fun72610
                            }
                        case 4162:
                            var5 = var12;
                        case 4165:
                            if (!var5) {
                                _fun72610_ip = 4171;
                                continue _fun72610
                            }
                        case 4168:
                            var5 = var10;
                        case 4171:
                            if (!var5) {
                                _fun72610_ip = 4291;
                                continue _fun72610
                            }
                        case 4174:
                            var12 = var7.buttons;
                            var10 = var12.push;
                            var5 = {};
                            var15 = _closure1_slot0;
                            var16 = _closure1_slot2;
                            var14 = 23;
                            var17 = var16[var14];
                            var17 = var15.bind(var11)(var17);
                            var18 = var17.intl;
                            var17 = var18.string;
                            var14 = var16[var14];
                            var14 = var15.bind(var11)(var14);
                            var14 = var14.t;
                            var14 = var14["+78Pfm"];
                            var14 = var17.bind(var18)(var14);
                            var5.label = var14;
                            var14 = 63;
                            var14 = var16[var14];
                            var14 = var15.bind(var11)(var14);
                            var14 = var14.FlagIcon;
                            var5.IconComponent = var14;
                            var14 = true;
                            var5.isDestructive = var14;
                            var14 = function() {
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 64;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.showReportModalForStageChannel;
                                var1 = _closure3_slot0;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var5.onPress = var14;
                            var5 = var10.bind(var12)(var5);
                        case 4291:
                            var5 = var7.buttons;
                            var5 = var5.length;
                            if (!(var5 > var3)) {
                                _fun72610_ip = 4316;
                                continue _fun72610
                            }
                        case 4306:
                            var5 = var0.push;
                            var5 = var5.bind(var0)(var7);
                        case 4316:
                            var5 = {};
                            var7 = 'admin-actions';
                            var5.sectionKey = var7;
                            var7 = new Array(0);
                            var5.buttons = var7;
                            if (!var6) {
                                _fun72610_ip = 4725;
                                continue _fun72610
                            }
                        case 4344:
                            var10 = var5.buttons;
                            var7 = var10.push;
                            var6 = {};
                            var12 = var13.isCategory;
                            var12 = var12.bind(var13)();
                            var17 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var18 = 23;
                            var15 = var14[var18];
                            var15 = var17.bind(var11)(var15);
                            var16 = var15.intl;
                            var15 = var16.string;
                            var14 = var14[var18];
                            var14 = var17.bind(var11)(var14);
                            var14 = var14.t;
                            if (var12) {
                                _fun72610_ip = 4429;
                                continue _fun72610
                            }
                        case 4414:
                            var12 = var14["3gUsJb"];
                            var12 = var15.bind(var16)(var12);
                            _fun72610_ip = 4442;
                            continue _fun72610;
                        case 4429:
                            var14 = var14.zdPFs9;
                            var12 = var15.bind(var16)(var14);
                        case 4442:
                            var6.label = var12;
                            var14 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            var12 = 65;
                            var12 = var15[var12];
                            var12 = var14.bind(var11)(var12);
                            var12 = var12.SettingsIcon;
                            var6.IconComponent = var12;
                            var12 = function() {
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 55;
                                var5 = var3[var1];
                                var0 = undefined;
                                var6 = var2.bind(var0)(var5);
                                var5 = var6.setSection;
                                var4 = _closure1_slot26;
                                var4 = var4.OVERVIEW;
                                var4 = var5.bind(var6)(var4);
                                var1 = var3[var1];
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.open;
                                var1 = _closure3_slot0;
                                var1 = var1.id;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var6.onPress = var12;
                            var6 = var7.bind(var10)(var6);
                            var7 = _closure1_slot10;
                            var6 = var13.type;
                            var6 = var7.bind(var11)(var6);
                            if (var6) {
                                _fun72610_ip = 4519;
                                continue _fun72610
                            }
                        case 4509:
                            var7 = var13.isForumLikeChannel;
                            var6 = var7.bind(var13)();
                        case 4519:
                            if (var6) {
                                _fun72610_ip = 4532;
                                continue _fun72610
                            }
                        case 4522:
                            var7 = var13.isGuildVoice;
                            var6 = var7.bind(var13)();
                        case 4532:
                            if (var6) {
                                _fun72610_ip = 4545;
                                continue _fun72610
                            }
                        case 4535:
                            var7 = var13.isCategory;
                            var6 = var7.bind(var13)();
                        case 4545:
                            if (!var6) {
                                _fun72610_ip = 4725;
                                continue _fun72610
                            }
                        case 4551:
                            var10 = var5.buttons;
                            var7 = var10.push;
                            var6 = {};
                            var12 = var13.isCategory;
                            var12 = var12.bind(var13)();
                            var17 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var15 = var14[var18];
                            var15 = var17.bind(var11)(var15);
                            var16 = var15.intl;
                            var15 = var16.string;
                            var14 = var14[var18];
                            var14 = var17.bind(var11)(var14);
                            var14 = var14.t;
                            if (var12) {
                                _fun72610_ip = 4631;
                                continue _fun72610
                            }
                        case 4618:
                            var12 = var14.dEaPc4;
                            var12 = var15.bind(var16)(var12);
                            _fun72610_ip = 4642;
                            continue _fun72610;
                        case 4631:
                            var14 = var14["fUYU+j"];
                            var12 = var15.bind(var16)(var14);
                        case 4642:
                            var6.label = var12;
                            var12 = var13.isCategory;
                            var12 = var12.bind(var13)();
                            var14 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            if (var12) {
                                _fun72610_ip = 4687;
                                continue _fun72610
                            }
                        case 4667:
                            var12 = 66;
                            var12 = var15[var12];
                            var12 = var14.bind(var11)(var12);
                            var12 = var12.CopyIcon;
                            _fun72610_ip = 4705;
                            continue _fun72610;
                        case 4687:
                            var13 = 41;
                            var13 = var15[var13];
                            var13 = var14.bind(var11)(var13);
                            var12 = var13.PlusLargeIcon;
                        case 4705:
                            var6.IconComponent = var12;
                            var12 = function() {
                                _fun72638: for (var _fun72638_ip = 0;;) switch (_fun72638_ip) {
                                    case 0:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 67;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var6 = var2.bind(var0)(var1);
                                        var5 = var6.open;
                                        var2 = _closure3_slot0;
                                        var1 = var2.isCategory;
                                        var1 = var1.bind(var2)();
                                        var4 = undefined;
                                        if (var1) {
                                            _fun72638_ip = 62;
                                            continue _fun72638
                                        }
                                    case 53:
                                        var1 = _closure3_slot0;
                                        var4 = var1.type;
                                    case 62:
                                        var2 = _closure3_slot0;
                                        var1 = var2.getGuildId;
                                        var3 = var1.bind(var2)();
                                        var1 = var2.isCategory;
                                        var2 = var1.bind(var2)();
                                        var1 = _closure3_slot0;
                                        if (var2) {
                                            _fun72638_ip = 101;
                                            continue _fun72638
                                        }
                                    case 93:
                                        var2 = var1.parent_id;
                                        _fun72638_ip = 106;
                                        continue _fun72638;
                                    case 101:
                                        var2 = var1.id;
                                    case 106:
                                        var8 = _closure3_slot0;
                                        var1 = var8.isCategory;
                                        var8 = var1.bind(var8)();
                                        var1 = undefined;
                                        if (var8) {
                                            _fun72638_ip = 134;
                                            continue _fun72638
                                        }
                                    case 125:
                                        var7 = _closure3_slot0;
                                        var1 = var7.id;
                                    case 134:
                                        var13 = var6;
                                        var12 = var4;
                                        var11 = var3;
                                        var10 = var2;
                                        var9 = var1;
                                        var1 = var13[var5](var12, var11, var10, var9, var8);
                                        return var0;
                                }
                            };
                            var6.onPress = var12;
                            var6 = var7.bind(var10)(var6);
                        case 4725:
                            if (!var1) {
                                _fun72610_ip = 4840;
                                continue _fun72610
                            }
                        case 4728:
                            var7 = var5.buttons;
                            var6 = var7.push;
                            var1 = {};
                            var10 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var9 = 23;
                            var13 = var12[var9];
                            var13 = var10.bind(var11)(var13);
                            var14 = var13.intl;
                            var13 = var14.string;
                            var9 = var12[var9];
                            var9 = var10.bind(var11)(var9);
                            var9 = var9.t;
                            var9 = var9.gFHI3k;
                            var9 = var13.bind(var14)(var9);
                            var1.label = var9;
                            var9 = 68;
                            var9 = var12[var9];
                            var9 = var10.bind(var11)(var9);
                            var9 = var9.IdIcon;
                            var1.IconComponent = var9;
                            var8 = function() {
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 69;
                                var1 = var3[var0];
                                var0 = undefined;
                                var5 = var2.bind(var0)(var1);
                                var4 = var5.copy;
                                var1 = _closure3_slot0;
                                var1 = var1.id;
                                var1 = var4.bind(var5)(var1);
                                var1 = 70;
                                var1 = var3[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.presentIdCopied;
                                var1 = var1.bind(var2)();
                                return var0;
                            };
                            var1.onPress = var8;
                            var1 = var6.bind(var7)(var1);
                        case 4840:
                            var1 = var5.buttons;
                            var1 = var1.length;
                            if (!(var1 > var3)) {
                                _fun72610_ip = 4865;
                                continue _fun72610
                            }
                        case 4855:
                            var1 = var0.push;
                            var1 = var1.bind(var0)(var5);
                        case 4865:
                            var1 = var4.buttons;
                            var1 = var1.length;
                            if (!(var1 > var3)) {
                                _fun72610_ip = 4890;
                                continue _fun72610
                            }
                        case 4880:
                            var1 = var0.push;
                            var1 = var1.bind(var0)(var4);
                        case 4890:
                            var1 = var2.buttons;
                            var1 = var1.length;
                            if (!(var1 > var3)) {
                                _fun72610_ip = 4915;
                                continue _fun72610
                            }
                        case 4905:
                            var1 = var0.push;
                            var1 = var1.bind(var0)(var2);
                        case 4915:
                            return var0;
                    }
                };
                var9 = var2.bind(var3)(var5);
                _closure2_slot4 = var9;
                var2 = var16.isGroupDM;
                var2 = var2.bind(var16)();
                var12 = undefined;
                if (!var2) {
                    _fun72597_ip = 1326;
                    continue _fun72597
                }
            case 1243:
                var5 = _closure1_slot0;
                var17 = _closure1_slot2;
                var2 = 23;
                var6 = var17[var2];
                var6 = var5.bind(var3)(var6);
                var15 = var6.intl;
                var6 = var15.formatToPlainString;
                var2 = var17[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.t;
                var5 = var2.ABMKx3;
                var2 = {};
                var16 = var16.recipients;
                var17 = var16.length;
                var16 = 1;
                var16 = var17 + var16;
                var2.members = var16;
                var12 = var6.bind(var15)(var5, var2);
            case 1326:
                var6 = _closure1_slot4;
                var5 = var6.useEffect;
                var15 = var9.length;
                var2 = new Array(3);
                var2[0] = var15;
                var2[1] = var10;
                var2[2] = var1;
                var1 = function() { // Environment: var7
                    _fun72640: for (var _fun72640_ip = 0;;) switch (_fun72640_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var2 = var1.length;
                            var1 = 0;
                            var1 = var1 !== var2;
                            if (var1) {
                                _fun72640_ip = 25;
                                continue _fun72640
                            }
                        case 21:
                            var1 = _closure2_slot3;
                        case 25:
                            if (var1) {
                                _fun72640_ip = 38;
                                continue _fun72640
                            }
                        case 28:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 38:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var5.bind(var6)(var1, var2);
                var2 = _closure1_slot32;
                var10 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = var15[var0];
                var0 = var10.bind(var3)(var0);
                var1 = var0.AnalyticsLocationProvider;
                var0 = {};
                var0.value = var4;
                var6 = _closure1_slot32;
                var4 = 82;
                var4 = var15[var4];
                var4 = var10.bind(var3)(var4);
                var5 = var4.ActionSheet;
                var4 = {};
                var4.showGradient = var11;
                var11 = 83;
                var11 = var15[var11];
                var16 = var10.bind(var3)(var11);
                var11 = var16.isMetaQuest;
                var11 = var11.bind(var16)();
                var4.startExpanded = var11;
                var11 = _closure1_slot32;
                var8 = 84;
                var8 = var15[var8];
                var8 = var10.bind(var3)(var8);
                var10 = var8.ActionSheetIconHeader;
                var8 = {};
                var8.icon = var14;
                var8.title = var13;
                var8.subtitle = var12;
                var8 = var11.bind(var3)(var10, var8);
                var4.header = var8;
                var8 = var9.map;
                var7 = function(arg0) { // Environment: var7
                    var0 = arg0;
                    var4 = _closure1_slot32;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 85;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.ActionSheetRow;
                    var2 = var1.Group;
                    var1 = {};
                    var7 = var0.buttons;
                    var6 = var7.map;
                    var5 = function(arg0, arg1) { // Environment: var5
                        _fun72642: for (var _fun72642_ip = 0;;) switch (_fun72642_ip) {
                            case 0:
                                var2 = arg0;
                                var13 = var2.label;
                                var11 = var2.IconComponent;
                                var10 = var2.iconStyle;
                                var5 = var2.trailing;
                                var1 = var2.isDestructive;
                                var3 = var2.onPress;
                                var _closure4_slot0 = var3;
                                var9 = var2.disableColor;
                                var14 = 'default';
                                if (!var1) {
                                    _fun72642_ip = 59;
                                    continue _fun72642
                                }
                            case 55:
                                var14 = 'danger';
                            case 59:
                                var4 = _closure1_slot32;
                                var7 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var6 = 85;
                                var1 = var12[var6];
                                var3 = undefined;
                                var1 = var7.bind(var3)(var1);
                                var2 = var1.ActionSheetRow;
                                var1 = {};
                                var1.variant = var14;
                                var1.label = var13;
                                var8 = _closure1_slot32;
                                var6 = var12[var6];
                                var6 = var7.bind(var3)(var6);
                                var6 = var6.ActionSheetRow;
                                var7 = var6.Icon;
                                var6 = {};
                                var6.IconComponent = var11;
                                var6.style = var10;
                                var6.disableColor = var9;
                                var6 = var8.bind(var3)(var7, var6);
                                var1.icon = var6;
                                var1.trailing = var5;
                                var0 = function() {
                                    _fun72643: for (var _fun72643_ip = 0;;) switch (_fun72643_ip) {
                                        case 0:
                                            var2 = _closure4_slot0;
                                            var1 = null;
                                            if (!(var1 != var2)) {
                                                _fun72643_ip = 23;
                                                continue _fun72643
                                            }
                                        case 13:
                                            var1 = _closure4_slot0;
                                            var0 = undefined;
                                            var0 = var1.bind(var0)();
                                        case 23:
                                            var1 = _closure2_slot1;
                                            var0 = undefined;
                                            var1 = var1.bind(var0)();
                                            return var0;
                                    }
                                };
                                var1.onPress = var0;
                                var0 = arg1;
                                var0 = var4.bind(var3)(var2, var1, var0);
                                return var0;
                        }
                    };
                    var5 = var6.bind(var7)(var5);
                    var1.children = var5;
                    var0 = var0.sectionKey;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var7 = var8.bind(var9)(var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot35 = var0;
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
    var3 = arg3;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.SafetyWarningTypes;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.isGuildTextChannelType;
    var _closure1_slot10 = var7;
    var7 = var3.isGuildVocalChannelType;
    var _closure1_slot11 = var7;
    var7 = var3.isReadableType;
    var _closure1_slot12 = var7;
    var3 = var3.isTextChannel;
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot16 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot17 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot18 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot19 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot20 = var3;
    var3 = 15;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot21 = var3;
    var3 = 16;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot22 = var3;
    var3 = 17;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticsObjectTypes;
    var _closure1_slot23 = var6;
    var6 = var3.AnalyticsObjects;
    var _closure1_slot24 = var6;
    var6 = var3.AnalyticsSections;
    var _closure1_slot25 = var6;
    var6 = var3.ChannelSettingsSections;
    var _closure1_slot26 = var6;
    var6 = var3.InstantInviteSources;
    var _closure1_slot27 = var6;
    var6 = var3.NULL_STRING_GUILD_ID;
    var _closure1_slot28 = var6;
    var6 = var3.Permissions;
    var _closure1_slot29 = var6;
    var3 = var3.ZERO_STRING_GUILD_ID;
    var _closure1_slot30 = var3;
    var3 = 18;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelDetailsNavigatorScreens;
    var _closure1_slot31 = var3;
    var3 = 19;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot32 = var3;
    var3 = 86;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel/native/ChannelLongPressActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun72644: for (var _fun72644_ip = 0;;) switch (_fun72644_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.channelId;
                var _closure2_slot0 = var2;
                var5 = var1.onClose;
                var _closure2_slot1 = var5;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 73;
                var2 = var4[var2];
                var4 = undefined;
                var7 = var3.bind(var4)(var2);
                var6 = var7.useStateFromStores;
                var2 = _closure1_slot15;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot15;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var6.bind(var7)(var3, var2);
                var _closure2_slot2 = var6;
                var7 = _closure1_slot4;
                var3 = var7.useEffect;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var0 = function() { // Environment: var0
                    _fun72646: for (var _fun72646_ip = 0;;) switch (_fun72646_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun72646_ip = 23;
                                continue _fun72646
                            }
                        case 13:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 23:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var3.bind(var7)(var0, var2);
                var0 = null;
                var2 = var0 != var6;
                if (!var2) {
                    _fun72644_ip = 151;
                    continue _fun72644
                }
            case 126:
                var3 = _closure1_slot32;
                var2 = _closure1_slot35;
                var1 = {};
                var1.channel = var6;
                var1.onClose = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 151:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 4515, 8295, 8960, 1377, 4190, 1376, 4533, 1372, 4534, 1410, 3052, 3061, 1661, 4269, 1613, 660, 8949, 33, 5875, 1307, 7840, 1234, 9061, 7314, 3213, 3906, 4757, 3964, 7477, 9063, 3215, 4527, 9083, 8596, 8291, 8524, 4659, 3881, 4697, 9106, 9108, 6408, 9023, 4803, 7504, 4540, 9109, 9111, 8717, 8133, 4663, 4660, 9112, 6429, 4805, 8948, 9114, 4825, 3239, 9115, 7842, 8892, 6457, 5333, 3219, 8096, 7691, 5255, 3108, 5690, 5543, 566, 4545, 4535, 8864, 1348, 7357, 5416, 8708, 9116, 5173, 4067, 5177, 7696, 2]);