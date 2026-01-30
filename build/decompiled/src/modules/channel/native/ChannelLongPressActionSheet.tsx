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
    var0 = function() { // Original name: handleVoiceOrStageChannelConnectPress, environment: var1
        var0 = undefined;
        var3 = _closure1_slot33;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot32 = var0;
    var0 = function() { // Original name: _handleVoiceOrStageChannelConnectPress, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun72568: for (var _fun72568_ip = 0;;) switch (_fun72568_ip) {
                    case 0:
                        StartGenerator();
                        var4 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun72568_ip = 147;
                            continue _fun72568
                        }
                    case 13:
                        var1 = var4.isGuildStageVoice;
                        var3 = var1.bind(var4)();
                        var6 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var2 = 20;
                        var5 = var1[var2];
                        var2 = undefined;
                        var5 = var6.bind(var2)(var5);
                        if (var3) {
                            _fun72568_ip = 102;
                            continue _fun72568
                        }
                    case 51:
                        var3 = 21;
                        var6 = var1[var3];
                        var3 = var1.paths;
                        var3 = var5.bind(var2)(var6, var3);
                        SaveGenerator(address = 73);
                    case 71:
                        return var3;
                    case 73:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (var6) {
                            _fun72568_ip = 99;
                            continue _fun72568
                        }
                    case 79:
                        var7 = var3.openGuildVoiceModal;
                        var6 = 'Channel List';
                        var6 = var7.bind(var2)(var4, var6);
                        _fun72568_ip = 141;
                        continue _fun72568;
                    case 99:
                        return var3;
                    case 102:
                        var3 = 19;
                        var3 = var1[var3];
                        var1 = var1.paths;
                        var1 = var5.bind(var2)(var3, var1);
                        SaveGenerator(address = 124);
                    case 122:
                        return var1;
                    case 124:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun72568_ip = 144;
                            continue _fun72568
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
        _closure1_slot33 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot33 = var0;
    var0 = function(arg0) { // Original name: ChannelLongPressActionSheetConnected, environment: var1
        _fun72569: for (var _fun72569_ip = 0;;) switch (_fun72569_ip) {
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
                var10 = _closure1_slot2;
                var0 = 68;
                var2 = var10[var0];
                var4 = var5.bind(var3)(var2);
                var2 = 69;
                var2 = var10[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.CHANNEL_LONG_PRESS_MENU;
                var2 = var4.bind(var3)(var2);
                var4 = var2.analyticsLocations;
                var2 = var16.getGuildId;
                var6 = var2.bind(var16)();
                var _closure2_slot2 = var6;
                var9 = _closure1_slot0;
                var2 = 70;
                var5 = var10[var2];
                var13 = var9.bind(var3)(var5);
                var12 = var13.useStateFromStores;
                var5 = _closure1_slot16;
                var11 = new Array(1);
                var11[0] = var5;
                var5 = function() { // Environment: var7
                    var2 = _closure1_slot16;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var17 = var12.bind(var13)(var11, var5);
                var5 = var10[var2];
                var13 = var9.bind(var3)(var5);
                var12 = var13.useStateFromStoresObject;
                var5 = _closure1_slot17;
                var11 = new Array(1);
                var11[0] = var5;
                var5 = function() { // Environment: var7
                    var0 = {};
                    var5 = _closure1_slot17;
                    var3 = var5.can;
                    var2 = _closure1_slot28;
                    var2 = var2.MANAGE_CHANNELS;
                    var4 = _closure2_slot0;
                    var2 = var3.bind(var5)(var2, var4);
                    var0.canManageChannel = var2;
                    var5 = _closure1_slot17;
                    var3 = var5.can;
                    var2 = _closure1_slot28;
                    var2 = var2.CREATE_INSTANT_INVITE;
                    var2 = var3.bind(var5)(var2, var4);
                    var0.canCreateInstantInvite = var2;
                    var3 = _closure1_slot17;
                    var2 = var3.can;
                    var1 = _closure1_slot28;
                    var1 = var1.CONNECT;
                    var1 = var2.bind(var3)(var1, var4);
                    var0.canConnect = var1;
                    return var0;
                };
                var5 = var12.bind(var13)(var11, var5);
                var32 = var5.canManageChannel;
                var31 = var5.canCreateInstantInvite;
                var30 = var5.canConnect;
                var5 = 71;
                var5 = var10[var5];
                var10 = var9.bind(var3)(var5);
                var9 = var10.useOptInEnabledForGuild;
                var5 = null;
                if (!(var5 == var6)) {
                    _fun72569_ip = 232;
                    continue _fun72569
                }
            case 228:
                var6 = _closure1_slot27;
            case 232:
                var22 = var9.bind(var10)(var6);
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = var10[var2];
                var13 = var9.bind(var3)(var6);
                var12 = var13.useStateFromStoresObject;
                var6 = _closure1_slot20;
                var11 = new Array(1);
                var11[0] = var6;
                var6 = function() { // Environment: var7
                    _fun72572: for (var _fun72572_ip = 0;;) switch (_fun72572_ip) {
                        case 0:
                            var0 = {};
                            var7 = _closure1_slot20;
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
                                _fun72572_ip = 87;
                                continue _fun72572
                            }
                        case 57:
                            var8 = _closure1_slot20;
                            var7 = var8.isChannelOptedIn;
                            var5 = _closure2_slot2;
                            var4 = _closure2_slot0;
                            var4 = var4.parent_id;
                            var3 = var7.bind(var8)(var5, var4);
                        case 87:
                            var0.isParentOptedIn = var3;
                            var4 = _closure1_slot20;
                            var3 = var4.isFavorite;
                            var5 = _closure2_slot2;
                            if (!(var6 == var5)) {
                                _fun72572_ip = 116;
                                continue _fun72572
                            }
                        case 110:
                            var2 = _closure1_slot29;
                            _fun72572_ip = 120;
                            continue _fun72572;
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
                var6 = var12.bind(var13)(var11, var6);
                var21 = var6.isOptedIn;
                var20 = var6.isParentOptedIn;
                var19 = var6.isFavorited;
                var6 = var10[var2];
                var13 = var9.bind(var3)(var6);
                var12 = var13.useStateFromStores;
                var6 = _closure1_slot5;
                var11 = new Array(1);
                var11[0] = var6;
                var6 = function() { // Environment: var7
                    _fun72573: for (var _fun72573_ip = 0;;) switch (_fun72573_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun72573_ip = 119;
                                continue _fun72573
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
                            var1 = 72;
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
                var18 = var12.bind(var13)(var11, var6);
                var6 = var10[var2];
                var13 = var9.bind(var3)(var6);
                var12 = var13.useStateFromStores;
                var6 = _closure1_slot20;
                var11 = new Array(1);
                var11[0] = var6;
                var6 = function() { // Environment: var7
                    var3 = _closure1_slot20;
                    var2 = var3.isChannelMuted;
                    var1 = _closure2_slot2;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var29 = var12.bind(var13)(var11, var6);
                var6 = var10[var2];
                var13 = var9.bind(var3)(var6);
                var12 = var13.useStateFromStores;
                var6 = _closure1_slot8;
                var11 = new Array(1);
                var11[0] = var6;
                var6 = function() { // Environment: var7
                    _fun72575: for (var _fun72575_ip = 0;;) switch (_fun72575_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun72575_ip = 48;
                                continue _fun72575
                            }
                        case 16:
                            var4 = _closure1_slot8;
                            var3 = var4.hasThreadsForChannel;
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var3.bind(var4)(var2, var1);
                        case 48:
                            return var0;
                    }
                };
                var27 = var12.bind(var13)(var11, var6);
                var6 = var10[var2];
                var13 = var9.bind(var3)(var6);
                var12 = var13.useStateFromStores;
                var6 = _closure1_slot13;
                var11 = new Array(1);
                var11[0] = var6;
                var6 = function() { // Environment: var7
                    var2 = _closure1_slot13;
                    var1 = var2.isCollapsed;
                    var0 = _closure2_slot0;
                    var0 = var0.parent_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var25 = var12.bind(var13)(var11, var6);
                var6 = var10[var2];
                var13 = var9.bind(var3)(var6);
                var12 = var13.useStateFromStores;
                var6 = _closure1_slot15;
                var11 = new Array(1);
                var11[0] = var6;
                var6 = function() { // Environment: var7
                    var2 = _closure1_slot15;
                    var1 = var2.isCollapsed;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var24 = var12.bind(var13)(var11, var6);
                var6 = var10[var2];
                var13 = var9.bind(var3)(var6);
                var12 = var13.useStateFromStores;
                var6 = _closure1_slot7;
                var11 = new Array(1);
                var11[0] = var6;
                var6 = function() { // Environment: var7
                    var2 = _closure1_slot7;
                    var1 = var2.isLive;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var23 = var12.bind(var13)(var11, var6);
                var12 = _closure1_slot1;
                var6 = 27;
                var6 = var10[var6];
                var6 = var12.bind(var3)(var6);
                var11 = true;
                var13 = var6.bind(var3)(var16, var11);
                var6 = 73;
                var6 = var10[var6];
                var6 = var12.bind(var3)(var6);
                var26 = var6.bind(var3)(var16);
                var6 = 74;
                var6 = var10[var6];
                var6 = var9.bind(var3)(var6);
                var9 = var6.DeveloperMode;
                var6 = var9.useSetting;
                var10 = var6.bind(var9)();
                _closure2_slot3 = var10;
                if (!(var5 == var17)) {
                    _fun72569_ip = 681;
                    continue _fun72569
                }
            case 614:
                var12 = _closure1_slot31;
                var9 = _closure1_slot1;
                var28 = _closure1_slot2;
                var14 = 76;
                var6 = var28[var14];
                var9 = var9.bind(var3)(var6);
                var6 = {};
                var15 = _closure1_slot0;
                var14 = var28[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.AvatarSizes;
                var14 = var14.LARGE;
                var6.size = var14;
                var6.channel = var16;
                var14 = var12.bind(var3)(var9, var6);
                _fun72569_ip = 746;
                continue _fun72569;
            case 681:
                var12 = _closure1_slot31;
                var9 = _closure1_slot1;
                var28 = _closure1_slot2;
                var15 = 75;
                var6 = var28[var15];
                var9 = var9.bind(var3)(var6);
                var6 = {};
                var6.guild = var17;
                var17 = _closure1_slot0;
                var15 = var28[var15];
                var15 = var17.bind(var3)(var15);
                var15 = var15.GuildIconSizes;
                var15 = var15.LARGE;
                var6.size = var15;
                var14 = var12.bind(var3)(var9, var6);
            case 746:
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var2];
                var15 = var9.bind(var3)(var6);
                var12 = var15.useStateFromStores;
                var6 = _closure1_slot21;
                var9 = new Array(1);
                var9[0] = var6;
                var6 = function() { // Environment: var7
                    var1 = _closure1_slot21;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var33 = var12.bind(var15)(var9, var6);
                var28 = var5 != var33;
                if (!var28) {
                    _fun72569_ip = 816;
                    continue _fun72569
                }
            case 800:
                var9 = var16.isOwner;
                var6 = var33.id;
                var28 = var9.bind(var16)(var6);
            case 816:
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = var9[var2];
                var17 = var6.bind(var3)(var2);
                var15 = var17.useStateFromStoresObject;
                var2 = _closure1_slot20;
                var12 = new Array(1);
                var12[0] = var2;
                var2 = function() { // Environment: var7
                    var0 = {};
                    var5 = _closure1_slot20;
                    var4 = var5.isMessagesFavorite;
                    var1 = _closure2_slot0;
                    var3 = var1.id;
                    var3 = var4.bind(var5)(var3);
                    var0.isMessagesFavorited = var3;
                    var3 = _closure1_slot20;
                    var2 = var3.isAddedToMessages;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0.isAddedToMessages = var1;
                    return var0;
                };
                var2 = var15.bind(var17)(var12, var2);
                var17 = var2.isMessagesFavorited;
                var12 = var2.isAddedToMessages;
                var2 = 77;
                var2 = var9[var2];
                var6 = var6.bind(var3)(var2);
                var2 = var6.useVoiceActivityNotificationSettingsExperiment;
                var15 = var2.bind(var6)(var16);
                var9 = var5 != var33;
                if (!var9) {
                    _fun72569_ip = 932;
                    continue _fun72569
                }
            case 906:
                var2 = var33.isStaff;
                var2 = var2.bind(var33)();
                if (var2) {
                    _fun72569_ip = 929;
                    continue _fun72569
                }
            case 919:
                var6 = var33.isStaffPersonal;
                var2 = var6.bind(var33)();
            case 929:
                var9 = var2;
            case 932:
                var6 = _closure1_slot0;
                var33 = _closure1_slot2;
                var2 = 78;
                var2 = var33[var2];
                var6 = var6.bind(var3)(var2);
                var2 = var6.useInappropriateConversationsTiers;
                var33 = var2.bind(var6)(var16);
                var6 = var5 == var33;
                var2 = undefined;
                if (var6) {
                    _fun72569_ip = 978;
                    continue _fun72569
                }
            case 972:
                var2 = var33.isTier1;
            case 978:
                var6 = var5 != var2;
                if (!var6) {
                    _fun72569_ip = 1001;
                    continue _fun72569
                }
            case 985:
                var2 = var5 != var33;
                if (!var2) {
                    _fun72569_ip = 998;
                    continue _fun72569
                }
            case 992:
                var2 = var33.isTier1;
            case 998:
                var6 = !var2;
            case 1001:
                var34 = var5 == var33;
                var2 = undefined;
                if (var34) {
                    _fun72569_ip = 1016;
                    continue _fun72569
                }
            case 1010:
                var2 = var33.isTier2;
            case 1016:
                var2 = var5 != var2;
                if (!var2) {
                    _fun72569_ip = 1039;
                    continue _fun72569
                }
            case 1023:
                var5 = var5 != var33;
                if (!var5) {
                    _fun72569_ip = 1036;
                    continue _fun72569
                }
            case 1030:
                var5 = var33.isTier2;
            case 1036:
                var2 = !var5;
            case 1039:
                var5 = {};
                var5.channel = var16;
                var5.canManageChannel = var32;
                var5.canCreateInstantInvite = var31;
                var5.canConnect = var30;
                var5.developerMode = var10;
                var5.isMuted = var29;
                var5.isOwner = var28;
                var5.hasThreads = var27;
                var5.isNsfwGated = var26;
                var5.isInCollapsedCategory = var25;
                var5.isCollapsedVoiceChannel = var24;
                var5.isLiveStageChannel = var23;
                var5.isOptInEnabled = var22;
                var5.isOptedIn = var21;
                var5.isParentOptedIn = var20;
                var5.isFavorited = var19;
                var5.isInFavoritesSection = var18;
                var5.isMessagesFavorited = var17;
                var5.isInVoiceActivityNotificationExperiment = var15;
                var5.isAddedToMessages = var12;
                var5.isAddToMessagesEnabled = var9;
                var5.canMarkAsTier1InappropriateConversation = var6;
                var5.canMarkAsTier2InappropriateConversation = var2;
                var5.analyticsLocations = var4;
                var2 = function(arg0) { // Original name: getActionSheetButtons, environment: var7
                    _fun72581: for (var _fun72581_ip = 0;;) switch (_fun72581_ip) {
                        case 0:
                            var0 = arg0;
                            var13 = var0.channel;
                            var _closure3_slot0 = var13;
                            var6 = var0.canManageChannel;
                            var20 = var0.canCreateInstantInvite;
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
                            var31 = var0.isOptedIn;
                            var _closure3_slot2 = var31;
                            var33 = var0.isParentOptedIn;
                            var28 = var0.isFavorited;
                            var _closure3_slot3 = var28;
                            var25 = var0.isInFavoritesSection;
                            var26 = var0.isMessagesFavorited;
                            var _closure3_slot4 = var26;
                            var18 = var0.isInVoiceActivityNotificationExperiment;
                            var22 = var0.isAddedToMessages;
                            var _closure3_slot5 = var22;
                            var5 = var0.isAddToMessagesEnabled;
                            var23 = var0.canMarkAsTier1InappropriateConversation;
                            var19 = var0.canMarkAsTier2InappropriateConversation;
                            var0 = var0.analyticsLocations;
                            var _closure3_slot6 = var0;
                            var11 = undefined;
                            var _closure3_slot7 = var11;
                            var0 = new Array(0);
                            var24 = {};
                            var2 = 'dm';
                            var24.sectionKey = var2;
                            var2 = new Array(0);
                            var24.buttons = var2;
                            var2 = var13.isDM;
                            var2 = var2.bind(var13)();
                            if (!var2) {
                                _fun72581_ip = 436;
                                continue _fun72581
                            }
                        case 222:
                            var7 = var24.buttons;
                            var4 = var7.push;
                            var2 = {};
                            var29 = _closure1_slot0;
                            var30 = _closure1_slot2;
                            var27 = 22;
                            var32 = var30[var27];
                            var32 = var29.bind(var11)(var32);
                            var35 = var32.intl;
                            var34 = var35.string;
                            var32 = var30[var27];
                            var32 = var29.bind(var11)(var32);
                            var32 = var32.t;
                            var32 = var32.LYju5J;
                            var32 = var34.bind(var35)(var32);
                            var2.label = var32;
                            var32 = 23;
                            var32 = var30[var32];
                            var32 = var29.bind(var11)(var32);
                            var32 = var32.UserCircleIcon;
                            var2.IconComponent = var32;
                            var32 = function() { // Original name: onPress, environment: var8
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 24;
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
                            var2.onPress = var32;
                            var2 = var4.bind(var7)(var2);
                            var7 = var24.buttons;
                            var4 = var7.push;
                            var2 = {};
                            var32 = var30[var27];
                            var32 = var29.bind(var11)(var32);
                            var34 = var32.intl;
                            var32 = var34.string;
                            var27 = var30[var27];
                            var27 = var29.bind(var11)(var27);
                            var27 = var27.t;
                            var27 = var27.jsvgc3;
                            var27 = var32.bind(var34)(var27);
                            var2.label = var27;
                            var27 = 25;
                            var27 = var30[var27];
                            var27 = var29.bind(var11)(var27);
                            var27 = var27.UserMinusIcon;
                            var2.IconComponent = var27;
                            var27 = function() { // Original name: onPress, environment: var8
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 26;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.closePrivateChannel;
                                var1 = _closure3_slot0;
                                var2 = var1.id;
                                var6 = _closure1_slot19;
                                var5 = var6.getCurrentlySelectedChannelId;
                                var5 = var5.bind(var6)();
                                var1 = var1.id;
                                var1 = var5 === var1;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var2.onPress = var27;
                            var2 = var4.bind(var7)(var2);
                        case 436:
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
                                _fun72581_ip = 825;
                                continue _fun72581
                            }
                        case 496:
                            var30 = var2.buttons;
                            var27 = var30.push;
                            var7 = {};
                            var35 = _closure1_slot0;
                            var36 = _closure1_slot2;
                            var29 = 22;
                            var34 = var36[var29];
                            var34 = var35.bind(var11)(var34);
                            var38 = var34.intl;
                            var37 = var38.string;
                            var34 = var36[var29];
                            var34 = var35.bind(var11)(var34);
                            var34 = var34.t;
                            var34 = var34["26C4oi"];
                            var34 = var37.bind(var38)(var34);
                            var7.label = var34;
                            var34 = 25;
                            var34 = var36[var34];
                            var34 = var35.bind(var11)(var34);
                            var34 = var34.UserMinusIcon;
                            var7.IconComponent = var34;
                            var34 = true;
                            var7.isDestructive = var34;
                            var34 = function() { // Original name: onPress, environment: var8
                                _fun72584: for (var _fun72584_ip = 0;;) switch (_fun72584_ip) {
                                    case 0:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 27;
                                        var3 = var1[var0];
                                        var0 = undefined;
                                        var8 = var2.bind(var0)(var3);
                                        var7 = var8.computeChannelName;
                                        var4 = _closure3_slot0;
                                        var6 = _closure1_slot21;
                                        var3 = _closure1_slot18;
                                        var10 = var7.bind(var8)(var4, var6, var3);
                                        var8 = 22;
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
                                            _fun72584_ip = 284;
                                            continue _fun72584
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
                                        var1 = 28;
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
                                        var4 = function() { // Original name: onConfirm, environment: var4
                                            var2 = _closure1_slot1;
                                            var1 = _closure1_slot2;
                                            var0 = 26;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var4 = var2.bind(var0)(var1);
                                            var3 = var4.closePrivateChannel;
                                            var1 = _closure3_slot0;
                                            var2 = var1.id;
                                            var6 = _closure1_slot19;
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
                            var7.onPress = var34;
                            var7 = var27.bind(var30)(var7);
                            var30 = var4.buttons;
                            var27 = var30.push;
                            var7 = {};
                            var34 = var36[var29];
                            var34 = var35.bind(var11)(var34);
                            var38 = var34.intl;
                            var37 = var38.string;
                            var34 = var36[var29];
                            var34 = var35.bind(var11)(var34);
                            var34 = var34.t;
                            var34 = var34["1r5E+m"];
                            var34 = var37.bind(var38)(var34);
                            var7.label = var34;
                            var34 = 29;
                            var34 = var36[var34];
                            var34 = var35.bind(var11)(var34);
                            var34 = var34.PencilIcon;
                            var7.IconComponent = var34;
                            var34 = function() { // Original name: onPress, environment: var8
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 30;
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
                            var7.onPress = var34;
                            var7 = var27.bind(var30)(var7);
                            if (!var3) {
                                _fun72581_ip = 825;
                                continue _fun72581
                            }
                        case 718:
                            var27 = var4.buttons;
                            var7 = var27.push;
                            var3 = {};
                            var30 = _closure1_slot0;
                            var32 = _closure1_slot2;
                            var34 = var32[var29];
                            var34 = var30.bind(var11)(var34);
                            var35 = var34.intl;
                            var34 = var35.string;
                            var29 = var32[var29];
                            var29 = var30.bind(var11)(var29);
                            var29 = var29.t;
                            var29 = var29.OQ9MKu;
                            var29 = var34.bind(var35)(var29);
                            var3.label = var29;
                            var29 = 31;
                            var29 = var32[var29];
                            var29 = var30.bind(var11)(var29);
                            var29 = var29.LinkIcon;
                            var3.IconComponent = var29;
                            var29 = function() { // Original name: onPress, environment: var8
                                var4 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 32;
                                var3 = var1[var0];
                                var0 = undefined;
                                var4 = var4.bind(var0)(var3);
                                var3 = var4.pushLazy;
                                var5 = _closure1_slot0;
                                var2 = 20;
                                var2 = var1[var2];
                                var5 = var5.bind(var0)(var2);
                                var2 = 33;
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
                            var3.onPress = var29;
                            var3 = var7.bind(var27)(var3);
                        case 825:
                            var3 = var24.buttons;
                            var7 = var3.length;
                            var3 = 0;
                            if (!(var7 > var3)) {
                                _fun72581_ip = 852;
                                continue _fun72581
                            }
                        case 842:
                            var7 = var0.push;
                            var7 = var7.bind(var0)(var24);
                        case 852:
                            var7 = var13.getGuildId;
                            var24 = var7.bind(var13)();
                            _closure3_slot7 = var24;
                            var7 = {};
                            var27 = 'channel-actions';
                            var7.sectionKey = var27;
                            var27 = new Array(0);
                            var7.buttons = var27;
                            if (!var20) {
                                _fun72581_ip = 1004;
                                continue _fun72581
                            }
                        case 891:
                            var29 = var7.buttons;
                            var27 = var29.push;
                            var20 = {};
                            var32 = _closure1_slot0;
                            var34 = _closure1_slot2;
                            var30 = 22;
                            var35 = var34[var30];
                            var35 = var32.bind(var11)(var35);
                            var36 = var35.intl;
                            var35 = var36.string;
                            var30 = var34[var30];
                            var30 = var32.bind(var11)(var30);
                            var30 = var30.t;
                            var30 = var30.VINpSK;
                            var30 = var35.bind(var36)(var30);
                            var20.label = var30;
                            var30 = 34;
                            var30 = var34[var30];
                            var30 = var32.bind(var11)(var30);
                            var30 = var30.GroupPlusIcon;
                            var20.IconComponent = var30;
                            var30 = function() { // Original name: onPress, environment: var8
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 35;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.showInstantInviteActionSheet;
                                var2 = _closure3_slot0;
                                var1 = {};
                                var5 = _closure1_slot26;
                                var5 = var5.CONTEXT_MENU;
                                var1.source = var5;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var20.onPress = var30;
                            var20 = var27.bind(var29)(var20);
                        case 1004:
                            var20 = null;
                            if (!(var20 != var24)) {
                                _fun72581_ip = 1450;
                                continue _fun72581
                            }
                        case 1013:
                            var20 = var13.isThread;
                            var20 = var20.bind(var13)();
                            if (var20) {
                                _fun72581_ip = 1450;
                                continue _fun72581
                            }
                        case 1029:
                            var20 = var9;
                            if (!var20) {
                                _fun72581_ip = 1048;
                                continue _fun72581
                            }
                        case 1035:
                            var24 = var13.isCategory;
                            var24 = var24.bind(var13)();
                            var20 = !var24;
                        case 1048:
                            var24 = var28;
                            if (!var24) {
                                _fun72581_ip = 1057;
                                continue _fun72581
                            }
                        case 1054:
                            var24 = var25;
                        case 1057:
                            if (!var24) {
                                _fun72581_ip = 1073;
                                continue _fun72581
                            }
                        case 1060:
                            var25 = var13.isCategory;
                            var25 = var25.bind(var13)();
                            var24 = !var25;
                        case 1073:
                            if (var20) {
                                _fun72581_ip = 1079;
                                continue _fun72581
                            }
                        case 1076:
                            var20 = var24;
                        case 1079:
                            if (!var20) {
                                _fun72581_ip = 1222;
                                continue _fun72581
                            }
                        case 1085:
                            var25 = var7.buttons;
                            var24 = var25.push;
                            var20 = {};
                            var34 = _closure1_slot0;
                            var35 = _closure1_slot2;
                            var29 = 22;
                            var30 = var35[var29];
                            var30 = var34.bind(var11)(var30);
                            var32 = var30.intl;
                            var30 = var32.string;
                            var29 = var35[var29];
                            var29 = var34.bind(var11)(var29);
                            var29 = var29.t;
                            if (var28) {
                                _fun72581_ip = 1161;
                                continue _fun72581
                            }
                        case 1148:
                            var28 = var29["N2c/Un"];
                            var28 = var30.bind(var32)(var28);
                            _fun72581_ip = 1172;
                            continue _fun72581;
                        case 1161:
                            var29 = var29.z7I3gd;
                            var28 = var30.bind(var32)(var29);
                        case 1172:
                            var20.label = var28;
                            var28 = _closure1_slot0;
                            var29 = _closure1_slot2;
                            var27 = 36;
                            var27 = var29[var27];
                            var27 = var28.bind(var11)(var27);
                            var27 = var27.StarIcon;
                            var20.IconComponent = var27;
                            var27 = function() { // Original name: onPress, environment: var8
                                _fun72589: for (var _fun72589_ip = 0;;) switch (_fun72589_ip) {
                                    case 0:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var0 = 37;
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
                                        var10 = _closure1_slot24;
                                        var10 = var10.CHANNEL_ACTION_SHEET;
                                        var3.section = var10;
                                        var15 = var9;
                                        var11 = var3;
                                        var3 = var15[var8](var14, var13, var12, var11, var10);
                                        if (var2) {
                                            _fun72589_ip = 236;
                                            continue _fun72589
                                        }
                                    case 86:
                                        var2 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var1 = 38;
                                        var1 = var3[var1];
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.getRootNavigationRef;
                                        var3 = var1.bind(var2)();
                                        var5 = null;
                                        if (!(var5 != var3)) {
                                            _fun72589_ip = 236;
                                            continue _fun72589
                                        }
                                    case 122:
                                        var1 = var3.getCurrentRoute;
                                        var1 = var1.bind(var3)();
                                        var2 = var5 == var1;
                                        var6 = undefined;
                                        if (var2) {
                                            _fun72589_ip = 146;
                                            continue _fun72589
                                        }
                                    case 141:
                                        var6 = var1.name;
                                    case 146:
                                        var1 = var3.getCurrentRoute;
                                        var1 = var1.bind(var3)();
                                        var7 = var5 == var1;
                                        var2 = undefined;
                                        if (var7) {
                                            _fun72589_ip = 171;
                                            continue _fun72589
                                        }
                                    case 165:
                                        var2 = var1.params;
                                    case 171:
                                        var1 = 'guilds';
                                        var1 = var1 === var6;
                                        if (!var1) {
                                            _fun72589_ip = 204;
                                            continue _fun72589
                                        }
                                    case 182:
                                        var6 = var5 == var2;
                                        var5 = undefined;
                                        if (var6) {
                                            _fun72589_ip = 196;
                                            continue _fun72589
                                        }
                                    case 191:
                                        var5 = var2.guildId;
                                    case 196:
                                        var2 = _closure3_slot7;
                                        var1 = var5 === var2;
                                    case 204:
                                        if (!var1) {
                                            _fun72589_ip = 236;
                                            continue _fun72589
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
                            var20.onPress = var27;
                            var20 = var24.bind(var25)(var20);
                        case 1222:
                            if (!var9) {
                                _fun72581_ip = 1450;
                                continue _fun72581
                            }
                        case 1228:
                            var24 = var7.buttons;
                            var20 = var24.push;
                            var9 = {};
                            var27 = _closure1_slot0;
                            var28 = _closure1_slot2;
                            var25 = 22;
                            var29 = var28[var25];
                            var29 = var27.bind(var11)(var29);
                            var30 = var29.intl;
                            var29 = var30.string;
                            var25 = var28[var25];
                            var25 = var27.bind(var11)(var25);
                            var25 = var25.t;
                            if (var33) {
                                _fun72581_ip = 1395;
                                continue _fun72581
                            }
                        case 1291:
                            if (var31) {
                                _fun72581_ip = 1307;
                                continue _fun72581
                            }
                        case 1294:
                            var33 = var25["9mysCh"];
                            var33 = var29.bind(var30)(var33);
                            _fun72581_ip = 1320;
                            continue _fun72581;
                        case 1307:
                            var34 = var25["3zySTA"];
                            var33 = var29.bind(var30)(var34);
                        case 1320:
                            var9.label = var33;
                            var33 = _closure1_slot0;
                            var34 = _closure1_slot2;
                            if (var31) {
                                _fun72581_ip = 1355;
                                continue _fun72581
                            }
                        case 1335:
                            var31 = 40;
                            var31 = var34[var31];
                            var31 = var33.bind(var11)(var31);
                            var31 = var31.PlusLargeIcon;
                            _fun72581_ip = 1373;
                            continue _fun72581;
                        case 1355:
                            var32 = 39;
                            var32 = var34[var32];
                            var32 = var33.bind(var11)(var32);
                            var31 = var32.XSmallIcon;
                        case 1373:
                            var9.IconComponent = var31;
                            var31 = function() { // Original name: onPress, environment: var8
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 37;
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
                                var7 = _closure1_slot24;
                                var7 = var7.CHANNEL_ACTION_SHEET;
                                var1.section = var7;
                                var12 = var6;
                                var8 = var1;
                                var1 = var12[var5](var11, var10, var9, var8, var7);
                                return var0;
                            };
                            var9.onPress = var31;
                            var31 = var20.bind(var24)(var9);
                            _fun72581_ip = 1450;
                            continue _fun72581;
                        case 1395:
                            var25 = var25.jNphKT;
                            var25 = var29.bind(var30)(var25);
                            var9.label = var25;
                            var25 = 39;
                            var25 = var28[var25];
                            var25 = var27.bind(var11)(var25);
                            var25 = var25.XSmallIcon;
                            var9.IconComponent = var25;
                            var25 = function() { // Original name: onPress, environment: var8
                                _fun72590: for (var _fun72590_ip = 0;;) switch (_fun72590_ip) {
                                    case 0:
                                        var0 = _closure3_slot0;
                                        var2 = var0.parent_id;
                                        var0 = null;
                                        if (!(var0 != var2)) {
                                            _fun72590_ip = 92;
                                            continue _fun72590
                                        }
                                    case 19:
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var2 = 37;
                                        var3 = var3[var2];
                                        var2 = undefined;
                                        var5 = var4.bind(var2)(var3);
                                        var4 = var5.setOptInChannel;
                                        var9 = _closure3_slot7;
                                        var1 = _closure3_slot0;
                                        var8 = var1.parent_id;
                                        var1 = {};
                                        var0 = _closure1_slot24;
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
                            var9.onPress = var25;
                            var9 = var20.bind(var24)(var9);
                        case 1450:
                            var24 = _closure1_slot9;
                            var20 = var13.type;
                            var20 = var24.bind(var11)(var20);
                            if (var20) {
                                _fun72581_ip = 1484;
                                continue _fun72581
                            }
                        case 1470:
                            var25 = _closure1_slot10;
                            var24 = var13.type;
                            var20 = var25.bind(var11)(var24);
                        case 1484:
                            if (var20) {
                                _fun72581_ip = 1497;
                                continue _fun72581
                            }
                        case 1487:
                            var24 = var13.isForumLikeChannel;
                            var20 = var24.bind(var13)();
                        case 1497:
                            if (!var20) {
                                _fun72581_ip = 1617;
                                continue _fun72581
                            }
                        case 1500:
                            var25 = var7.buttons;
                            var24 = var25.push;
                            var20 = {};
                            var28 = _closure1_slot0;
                            var29 = _closure1_slot2;
                            var27 = 22;
                            var30 = var29[var27];
                            var30 = var28.bind(var11)(var30);
                            var31 = var30.intl;
                            var30 = var31.string;
                            var27 = var29[var27];
                            var27 = var28.bind(var11)(var27);
                            var27 = var27.t;
                            var27 = var27.WqhZss;
                            var27 = var30.bind(var31)(var27);
                            var20.label = var27;
                            var27 = 31;
                            var27 = var29[var27];
                            var27 = var28.bind(var11)(var27);
                            var27 = var27.LinkIcon;
                            var20.IconComponent = var27;
                            var27 = false;
                            var20.isDestructive = var27;
                            var27 = function() { // Original name: onPress, environment: var8
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 41;
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
                            var20.onPress = var27;
                            var20 = var24.bind(var25)(var20);
                        case 1617:
                            var20 = var13.isPrivate;
                            var20 = var20.bind(var13)();
                            if (!var20) {
                                _fun72581_ip = 1767;
                                continue _fun72581
                            }
                        case 1633:
                            var25 = var7.buttons;
                            var24 = var25.push;
                            var20 = {};
                            var30 = _closure1_slot0;
                            var31 = _closure1_slot2;
                            var27 = 22;
                            var28 = var31[var27];
                            var28 = var30.bind(var11)(var28);
                            var29 = var28.intl;
                            var28 = var29.string;
                            var27 = var31[var27];
                            var27 = var30.bind(var11)(var27);
                            var27 = var27.t;
                            if (var26) {
                                _fun72581_ip = 1706;
                                continue _fun72581
                            }
                        case 1693:
                            var26 = var27["N2c/Un"];
                            var26 = var28.bind(var29)(var26);
                            _fun72581_ip = 1717;
                            continue _fun72581;
                        case 1706:
                            var27 = var27.z7I3gd;
                            var26 = var28.bind(var29)(var27);
                        case 1717:
                            var20.label = var26;
                            var27 = _closure1_slot0;
                            var28 = _closure1_slot2;
                            var26 = 36;
                            var26 = var28[var26];
                            var26 = var27.bind(var11)(var26);
                            var26 = var26.StarIcon;
                            var20.IconComponent = var26;
                            var26 = function() { // Original name: onPress, environment: var8
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 37;
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
                            var20.onPress = var26;
                            var20 = var24.bind(var25)(var20);
                        case 1767:
                            var20 = {};
                            var24 = 'safety-warning-tooling';
                            var20.sectionKey = var24;
                            var24 = new Array(0);
                            var20.buttons = var24;
                            if (!var23) {
                                _fun72581_ip = 1904;
                                continue _fun72581
                            }
                        case 1792:
                            var25 = var20.buttons;
                            var24 = var25.push;
                            var23 = {};
                            var27 = _closure1_slot0;
                            var28 = _closure1_slot2;
                            var26 = 22;
                            var29 = var28[var26];
                            var29 = var27.bind(var11)(var29);
                            var30 = var29.intl;
                            var29 = var30.string;
                            var26 = var28[var26];
                            var26 = var27.bind(var11)(var26);
                            var26 = var26.t;
                            var26 = var26.EuzCET;
                            var26 = var29.bind(var30)(var26);
                            var23.label = var26;
                            var26 = 42;
                            var26 = var28[var26];
                            var26 = var27.bind(var11)(var26);
                            var26 = var26.WarningIcon;
                            var23.IconComponent = var26;
                            var26 = function() { // Original name: onPress, environment: var8
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 43;
                                var2 = var2[var0];
                                var0 = undefined;
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.markAsInappropriateConversation;
                                var2 = _closure3_slot0;
                                var2 = var2.id;
                                var1 = _closure1_slot6;
                                var1 = var1.INAPPROPRIATE_CONVERSATION_TIER_1;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var23.onPress = var26;
                            var23 = var24.bind(var25)(var23);
                        case 1904:
                            if (!var19) {
                                _fun72581_ip = 2019;
                                continue _fun72581
                            }
                        case 1907:
                            var24 = var20.buttons;
                            var23 = var24.push;
                            var19 = {};
                            var26 = _closure1_slot0;
                            var27 = _closure1_slot2;
                            var25 = 22;
                            var28 = var27[var25];
                            var28 = var26.bind(var11)(var28);
                            var29 = var28.intl;
                            var28 = var29.string;
                            var25 = var27[var25];
                            var25 = var26.bind(var11)(var25);
                            var25 = var25.t;
                            var25 = var25["tBw/1i"];
                            var25 = var28.bind(var29)(var25);
                            var19.label = var25;
                            var25 = 42;
                            var25 = var27[var25];
                            var25 = var26.bind(var11)(var25);
                            var25 = var25.WarningIcon;
                            var19.IconComponent = var25;
                            var25 = function() { // Original name: onPress, environment: var8
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 43;
                                var2 = var2[var0];
                                var0 = undefined;
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.markAsInappropriateConversation;
                                var2 = _closure3_slot0;
                                var2 = var2.id;
                                var1 = _closure1_slot6;
                                var1 = var1.INAPPROPRIATE_CONVERSATION_TIER_2;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var19.onPress = var25;
                            var19 = var23.bind(var24)(var19);
                        case 2019:
                            var19 = var20.buttons;
                            var19 = var19.length;
                            if (!(var19 > var3)) {
                                _fun72581_ip = 2044;
                                continue _fun72581
                            }
                        case 2034:
                            var19 = var0.push;
                            var19 = var19.bind(var0)(var20);
                        case 2044:
                            if (!var5) {
                                _fun72581_ip = 2061;
                                continue _fun72581
                            }
                        case 2047:
                            var20 = _closure1_slot9;
                            var19 = var13.type;
                            var5 = var20.bind(var11)(var19);
                        case 2061:
                            if (!var5) {
                                _fun72581_ip = 2205;
                                continue _fun72581
                            }
                        case 2067:
                            var20 = var7.buttons;
                            var19 = var20.push;
                            var5 = {};
                            var26 = _closure1_slot0;
                            var27 = _closure1_slot2;
                            var23 = 22;
                            var24 = var27[var23];
                            var24 = var26.bind(var11)(var24);
                            var25 = var24.intl;
                            var24 = var25.string;
                            var23 = var27[var23];
                            var23 = var26.bind(var11)(var23);
                            var23 = var23.t;
                            if (var22) {
                                _fun72581_ip = 2142;
                                continue _fun72581
                            }
                        case 2127:
                            var22 = var23.LOp2MR;
                            var22 = var24.bind(var25)(var22);
                            _fun72581_ip = 2155;
                            continue _fun72581;
                        case 2142:
                            var23 = var23.n7rKhb;
                            var22 = var24.bind(var25)(var23);
                        case 2155:
                            var5.label = var22;
                            var23 = _closure1_slot0;
                            var24 = _closure1_slot2;
                            var22 = 44;
                            var22 = var24[var22];
                            var22 = var23.bind(var11)(var22);
                            var22 = var22.ChatIcon;
                            var5.IconComponent = var22;
                            var22 = function() { // Original name: onPress, environment: var8
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 37;
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
                            var5.onPress = var22;
                            var5 = var19.bind(var20)(var5);
                        case 2205:
                            var5 = var7.buttons;
                            var5 = var5.length;
                            if (!(var5 > var3)) {
                                _fun72581_ip = 2230;
                                continue _fun72581
                            }
                        case 2220:
                            var5 = var0.push;
                            var5 = var5.bind(var0)(var7);
                        case 2230:
                            var7 = {};
                            var5 = 'notifications';
                            var7.sectionKey = var5;
                            var5 = new Array(0);
                            var7.buttons = var5;
                            var19 = _closure1_slot11;
                            var5 = var13.type;
                            var5 = var19.bind(var11)(var5);
                            if (var5) {
                                _fun72581_ip = 2277;
                                continue _fun72581
                            }
                        case 2267:
                            var19 = var13.isCategory;
                            var5 = var19.bind(var13)();
                        case 2277:
                            if (var5) {
                                _fun72581_ip = 2290;
                                continue _fun72581
                            }
                        case 2280:
                            var19 = var13.isForumLikeChannel;
                            var5 = var19.bind(var13)();
                        case 2290:
                            if (!var5) {
                                _fun72581_ip = 2403;
                                continue _fun72581
                            }
                        case 2293:
                            var20 = var7.buttons;
                            var19 = var20.push;
                            var5 = {};
                            var23 = _closure1_slot0;
                            var24 = _closure1_slot2;
                            var22 = 22;
                            var25 = var24[var22];
                            var25 = var23.bind(var11)(var25);
                            var26 = var25.intl;
                            var25 = var26.string;
                            var22 = var24[var22];
                            var22 = var23.bind(var11)(var22);
                            var22 = var22.t;
                            var22 = var22.e6RscS;
                            var22 = var25.bind(var26)(var22);
                            var5.label = var22;
                            var22 = 45;
                            var22 = var24[var22];
                            var22 = var23.bind(var11)(var22);
                            var22 = var22.EyeIcon;
                            var5.IconComponent = var22;
                            var22 = function() { // Original name: onPress, environment: var8
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 46;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.ackChannel;
                                var2 = _closure3_slot0;
                                var1 = {};
                                var6 = _closure1_slot24;
                                var6 = var6.CHANNEL_ACTION_SHEET;
                                var1.section = var6;
                                var6 = _closure1_slot23;
                                var6 = var6.MARK_CHANNEL_AS_READ_BUTTON;
                                var1.object = var6;
                                var5 = _closure1_slot22;
                                var5 = var5.ACK_MANUAL;
                                var1.objectType = var5;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var5.onPress = var22;
                            var5 = var19.bind(var20)(var5);
                        case 2403:
                            var19 = _closure1_slot12;
                            var5 = var13.type;
                            var5 = var19.bind(var11)(var5);
                            if (var5) {
                                _fun72581_ip = 2465;
                                continue _fun72581
                            }
                        case 2420:
                            var5 = var13.isCategory;
                            var5 = var5.bind(var13)();
                            if (var5) {
                                _fun72581_ip = 2465;
                                continue _fun72581
                            }
                        case 2433:
                            if (!var18) {
                                _fun72581_ip = 2449;
                                continue _fun72581
                            }
                        case 2436:
                            var5 = var13.isGuildVoice;
                            var5 = var5.bind(var13)();
                            if (var5) {
                                _fun72581_ip = 2465;
                                continue _fun72581
                            }
                        case 2449:
                            var5 = var13.isForumLikeChannel;
                            var5 = var5.bind(var13)();
                            if (!var5) {
                                _fun72581_ip = 3122;
                                continue _fun72581
                            }
                        case 2465:
                            var22 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var23 = 22;
                            var19 = var5[var23];
                            var19 = var22.bind(var11)(var19);
                            var20 = var19.intl;
                            var19 = var20.string;
                            var5 = var5[var23];
                            var5 = var22.bind(var11)(var5);
                            var5 = var5.t;
                            if (var21) {
                                _fun72581_ip = 2821;
                                continue _fun72581
                            }
                        case 2515:
                            var21 = var5.tbeRRJ;
                            var22 = var19.bind(var20)(var21);
                            var21 = var13.isCategory;
                            var21 = var21.bind(var13)();
                            if (var21) {
                                _fun72581_ip = 2699;
                                continue _fun72581
                            }
                        case 2544:
                            var21 = var13.isDM;
                            var21 = var21.bind(var13)();
                            if (var21) {
                                _fun72581_ip = 2643;
                                continue _fun72581
                            }
                        case 2557:
                            var21 = var13.isGroupDM;
                            var21 = var21.bind(var13)();
                            if (var21) {
                                _fun72581_ip = 2643;
                                continue _fun72581
                            }
                        case 2570:
                            var21 = var13.isThread;
                            var21 = var21.bind(var13)();
                            var25 = var22;
                            if (!var21) {
                                _fun72581_ip = 2753;
                                continue _fun72581
                            }
                        case 2589:
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
                            _fun72581_ip = 2753;
                            continue _fun72581;
                        case 2643:
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
                            _fun72581_ip = 2753;
                            continue _fun72581;
                        case 2699:
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
                        case 2753:
                            var24 = var7.buttons;
                            var22 = var24.push;
                            var21 = {};
                            var21.label = var25;
                            var26 = _closure1_slot0;
                            var27 = _closure1_slot2;
                            var25 = 47;
                            var25 = var27[var25];
                            var25 = var26.bind(var11)(var25);
                            var25 = var25.BellSlashIcon;
                            var21.IconComponent = var25;
                            var25 = function() { // Original name: onPress, environment: var8
                                _fun72599: for (var _fun72599_ip = 0;;) switch (_fun72599_ip) {
                                    case 0:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var0 = 38;
                                        var2 = var2[var0];
                                        var0 = undefined;
                                        var3 = var3.bind(var0)(var2);
                                        var2 = var3.getRootNavigationRef;
                                        var4 = var2.bind(var3)();
                                        var2 = null;
                                        var2 = var2 != var4;
                                        if (!var2) {
                                            _fun72599_ip = 54;
                                            continue _fun72599
                                        }
                                    case 44:
                                        var3 = var4.isReady;
                                        var2 = var3.bind(var4)();
                                    case 54:
                                        if (!var2) {
                                            _fun72599_ip = 118;
                                            continue _fun72599
                                        }
                                    case 57:
                                        var3 = var4.navigate;
                                        var2 = {};
                                        var5 = _closure3_slot0;
                                        var5 = var5.id;
                                        var2.channelId = var5;
                                        var1 = _closure1_slot30;
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
                            _fun72581_ip = 3122;
                            continue _fun72581;
                        case 2821:
                            var5 = var5.OYefme;
                            var19 = var19.bind(var20)(var5);
                            var5 = var13.isCategory;
                            var5 = var5.bind(var13)();
                            if (var5) {
                                _fun72581_ip = 3005;
                                continue _fun72581
                            }
                        case 2850:
                            var5 = var13.isDM;
                            var5 = var5.bind(var13)();
                            if (var5) {
                                _fun72581_ip = 2949;
                                continue _fun72581
                            }
                        case 2863:
                            var5 = var13.isGroupDM;
                            var5 = var5.bind(var13)();
                            if (var5) {
                                _fun72581_ip = 2949;
                                continue _fun72581
                            }
                        case 2876:
                            var5 = var13.isThread;
                            var5 = var5.bind(var13)();
                            var21 = var19;
                            if (!var5) {
                                _fun72581_ip = 3059;
                                continue _fun72581
                            }
                        case 2895:
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
                            _fun72581_ip = 3059;
                            continue _fun72581;
                        case 2949:
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
                            _fun72581_ip = 3059;
                            continue _fun72581;
                        case 3005:
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
                        case 3059:
                            var20 = var7.buttons;
                            var19 = var20.push;
                            var5 = {};
                            var5.label = var21;
                            var22 = _closure1_slot0;
                            var23 = _closure1_slot2;
                            var21 = 48;
                            var21 = var23[var21];
                            var21 = var22.bind(var11)(var21);
                            var21 = var21.BellIcon;
                            var5.IconComponent = var21;
                            var21 = function() { // Original name: onPress, environment: var8
                                var2 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var0 = 49;
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
                                var7 = 50;
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
                        case 3122:
                            var19 = _closure1_slot9;
                            var5 = var13.type;
                            var5 = var19.bind(var11)(var5);
                            if (var5) {
                                _fun72581_ip = 3149;
                                continue _fun72581
                            }
                        case 3139:
                            var19 = var13.isCategory;
                            var5 = var19.bind(var13)();
                        case 3149:
                            if (var5) {
                                _fun72581_ip = 3162;
                                continue _fun72581
                            }
                        case 3152:
                            var19 = var13.isGuildStageVoice;
                            var5 = var19.bind(var13)();
                        case 3162:
                            if (var5) {
                                _fun72581_ip = 3181;
                                continue _fun72581
                            }
                        case 3165:
                            if (!var18) {
                                _fun72581_ip = 3178;
                                continue _fun72581
                            }
                        case 3168:
                            var19 = var13.isGuildVoice;
                            var18 = var19.bind(var13)();
                        case 3178:
                            var5 = var18;
                        case 3181:
                            if (var5) {
                                _fun72581_ip = 3194;
                                continue _fun72581
                            }
                        case 3184:
                            var18 = var13.isForumLikeChannel;
                            var5 = var18.bind(var13)();
                        case 3194:
                            if (!var5) {
                                _fun72581_ip = 3314;
                                continue _fun72581
                            }
                        case 3197:
                            var19 = var7.buttons;
                            var18 = var19.push;
                            var5 = {};
                            var21 = _closure1_slot0;
                            var22 = _closure1_slot2;
                            var20 = 22;
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
                            var20 = 51;
                            var20 = var22[var20];
                            var20 = var21.bind(var11)(var20);
                            var20 = var20.ChannelNotificationIcon;
                            var5.IconComponent = var20;
                            var20 = true;
                            var5.disableColor = var20;
                            var20 = function() { // Original name: onPress, environment: var8
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 52;
                                var5 = var3[var1];
                                var0 = undefined;
                                var6 = var2.bind(var0)(var5);
                                var5 = var6.setSection;
                                var4 = _closure1_slot25;
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
                        case 3314:
                            var5 = var7.buttons;
                            var5 = var5.length;
                            if (!(var5 > var3)) {
                                _fun72581_ip = 3339;
                                continue _fun72581
                            }
                        case 3329:
                            var5 = var0.push;
                            var5 = var5.bind(var0)(var7);
                        case 3339:
                            var7 = {};
                            var5 = 'threads';
                            var7.sectionKey = var5;
                            var5 = new Array(0);
                            var7.buttons = var5;
                            var5 = var13.isThread;
                            var5 = var5.bind(var13)();
                            if (var5) {
                                _fun72581_ip = 3382;
                                continue _fun72581
                            }
                        case 3372:
                            var18 = var13.isForumLikeChannel;
                            var5 = var18.bind(var13)();
                        case 3382:
                            if (var5) {
                                _fun72581_ip = 3388;
                                continue _fun72581
                            }
                        case 3385:
                            var5 = !var17;
                        case 3388:
                            if (var5) {
                                _fun72581_ip = 3394;
                                continue _fun72581
                            }
                        case 3391:
                            var5 = var15;
                        case 3394:
                            if (var5) {
                                _fun72581_ip = 3507;
                                continue _fun72581
                            }
                        case 3397:
                            var17 = var7.buttons;
                            var15 = var17.push;
                            var5 = {};
                            var19 = _closure1_slot0;
                            var20 = _closure1_slot2;
                            var18 = 22;
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
                            var18 = 53;
                            var18 = var20[var18];
                            var18 = var19.bind(var11)(var18);
                            var18 = var18.ThreadIcon;
                            var5.IconComponent = var18;
                            var18 = function() { // Original name: onPress, environment: var8
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 54;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = _closure3_slot0;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var5.onPress = var18;
                            var5 = var15.bind(var17)(var5);
                        case 3507:
                            var5 = var7.buttons;
                            var5 = var5.length;
                            if (!(var5 > var3)) {
                                _fun72581_ip = 3532;
                                continue _fun72581
                            }
                        case 3522:
                            var5 = var0.push;
                            var5 = var5.bind(var0)(var7);
                        case 3532:
                            var7 = {};
                            var5 = 'voice';
                            var7.sectionKey = var5;
                            var5 = new Array(0);
                            var7.buttons = var5;
                            var15 = _closure1_slot10;
                            var5 = var13.type;
                            var5 = var15.bind(var11)(var5);
                            if (!var5) {
                                _fun72581_ip = 3572;
                                continue _fun72581
                            }
                        case 3569:
                            var5 = !var14;
                        case 3572:
                            if (!var5) {
                                _fun72581_ip = 3716;
                                continue _fun72581
                            }
                        case 3578:
                            var15 = var7.buttons;
                            var14 = var15.push;
                            var5 = {};
                            var20 = _closure1_slot0;
                            var21 = _closure1_slot2;
                            var17 = 22;
                            var18 = var21[var17];
                            var18 = var20.bind(var11)(var18);
                            var19 = var18.intl;
                            var18 = var19.string;
                            var17 = var21[var17];
                            var17 = var20.bind(var11)(var17);
                            var17 = var17.t;
                            if (var16) {
                                _fun72581_ip = 3653;
                                continue _fun72581
                            }
                        case 3638:
                            var16 = var17.LxzNiu;
                            var16 = var18.bind(var19)(var16);
                            _fun72581_ip = 3666;
                            continue _fun72581;
                        case 3653:
                            var17 = var17.JYF2Oa;
                            var16 = var18.bind(var19)(var17);
                        case 3666:
                            var5.label = var16;
                            var17 = _closure1_slot0;
                            var18 = _closure1_slot2;
                            var16 = 23;
                            var16 = var18[var16];
                            var16 = var17.bind(var11)(var16);
                            var16 = var16.UserCircleIcon;
                            var5.IconComponent = var16;
                            var16 = function() { // Original name: onPress, environment: var8
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 55;
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
                        case 3716:
                            var5 = var13.isGuildVocal;
                            var5 = var5.bind(var13)();
                            if (!var5) {
                                _fun72581_ip = 4012;
                                continue _fun72581
                            }
                        case 3732:
                            var5 = var13.isGuildStageVoice;
                            var22 = var5.bind(var13)();
                            var15 = var7.buttons;
                            var14 = var15.push;
                            var5 = {};
                            var17 = _closure1_slot0;
                            var18 = _closure1_slot2;
                            var16 = 22;
                            var19 = var18[var16];
                            var19 = var17.bind(var11)(var19);
                            var21 = var19.intl;
                            var20 = var21.string;
                            var19 = var18[var16];
                            var19 = var17.bind(var11)(var19);
                            var19 = var19.t;
                            if (var22) {
                                _fun72581_ip = 3860;
                                continue _fun72581
                            }
                        case 3802:
                            var22 = var19.ZXxLQg;
                            var22 = var20.bind(var21)(var22);
                            var5.label = var22;
                            var22 = 44;
                            var22 = var18[var22];
                            var22 = var17.bind(var11)(var22);
                            var22 = var22.ChatIcon;
                            var5.IconComponent = var22;
                            var22 = function() { // Original name: onPress, environment: var8
                                var3 = _closure1_slot32;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var3 = var3.bind(var0)(var1);
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 59;
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
                            _fun72581_ip = 4012;
                            continue _fun72581;
                        case 3860:
                            var19 = var19["7vb2cc"];
                            var19 = var20.bind(var21)(var19);
                            var5.label = var19;
                            var19 = 56;
                            var19 = var18[var19];
                            var19 = var17.bind(var11)(var19);
                            var19 = var19.StageIcon;
                            var5.IconComponent = var19;
                            var19 = function() { // Original name: onPress, environment: var8
                                var2 = _closure1_slot32;
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
                            var16 = 44;
                            var16 = var18[var16];
                            var16 = var17.bind(var11)(var16);
                            var16 = var16.ChatIcon;
                            var5.IconComponent = var16;
                            var16 = function() { // Original name: onPress, environment: var8
                                var4 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 57;
                                var3 = var1[var0];
                                var0 = undefined;
                                var5 = var4.bind(var0)(var3);
                                var3 = var5.hideActionSheet;
                                var3 = var3.bind(var5)();
                                var3 = 32;
                                var3 = var1[var3];
                                var4 = var4.bind(var0)(var3);
                                var3 = var4.pushLazy;
                                var5 = _closure1_slot0;
                                var2 = 20;
                                var2 = var1[var2];
                                var5 = var5.bind(var0)(var2);
                                var2 = 58;
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
                        case 4012:
                            var5 = var13.isGuildStageVoice;
                            var5 = var5.bind(var13)();
                            if (!var5) {
                                _fun72581_ip = 4028;
                                continue _fun72581
                            }
                        case 4025:
                            var5 = var12;
                        case 4028:
                            if (!var5) {
                                _fun72581_ip = 4034;
                                continue _fun72581
                            }
                        case 4031:
                            var5 = var10;
                        case 4034:
                            if (!var5) {
                                _fun72581_ip = 4154;
                                continue _fun72581
                            }
                        case 4037:
                            var12 = var7.buttons;
                            var10 = var12.push;
                            var5 = {};
                            var15 = _closure1_slot0;
                            var16 = _closure1_slot2;
                            var14 = 22;
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
                            var14 = 60;
                            var14 = var16[var14];
                            var14 = var15.bind(var11)(var14);
                            var14 = var14.FlagIcon;
                            var5.IconComponent = var14;
                            var14 = true;
                            var5.isDestructive = var14;
                            var14 = function() { // Original name: onPress, environment: var8
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 61;
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
                        case 4154:
                            var5 = var7.buttons;
                            var5 = var5.length;
                            if (!(var5 > var3)) {
                                _fun72581_ip = 4179;
                                continue _fun72581
                            }
                        case 4169:
                            var5 = var0.push;
                            var5 = var5.bind(var0)(var7);
                        case 4179:
                            var5 = {};
                            var7 = 'admin-actions';
                            var5.sectionKey = var7;
                            var7 = new Array(0);
                            var5.buttons = var7;
                            if (!var6) {
                                _fun72581_ip = 4588;
                                continue _fun72581
                            }
                        case 4207:
                            var10 = var5.buttons;
                            var7 = var10.push;
                            var6 = {};
                            var12 = var13.isCategory;
                            var12 = var12.bind(var13)();
                            var17 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var18 = 22;
                            var15 = var14[var18];
                            var15 = var17.bind(var11)(var15);
                            var16 = var15.intl;
                            var15 = var16.string;
                            var14 = var14[var18];
                            var14 = var17.bind(var11)(var14);
                            var14 = var14.t;
                            if (var12) {
                                _fun72581_ip = 4292;
                                continue _fun72581
                            }
                        case 4277:
                            var12 = var14["3gUsJb"];
                            var12 = var15.bind(var16)(var12);
                            _fun72581_ip = 4305;
                            continue _fun72581;
                        case 4292:
                            var14 = var14.zdPFs9;
                            var12 = var15.bind(var16)(var14);
                        case 4305:
                            var6.label = var12;
                            var14 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            var12 = 62;
                            var12 = var15[var12];
                            var12 = var14.bind(var11)(var12);
                            var12 = var12.SettingsIcon;
                            var6.IconComponent = var12;
                            var12 = function() { // Original name: onPress, environment: var8
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 52;
                                var5 = var3[var1];
                                var0 = undefined;
                                var6 = var2.bind(var0)(var5);
                                var5 = var6.setSection;
                                var4 = _closure1_slot25;
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
                            var7 = _closure1_slot9;
                            var6 = var13.type;
                            var6 = var7.bind(var11)(var6);
                            if (var6) {
                                _fun72581_ip = 4382;
                                continue _fun72581
                            }
                        case 4372:
                            var7 = var13.isForumLikeChannel;
                            var6 = var7.bind(var13)();
                        case 4382:
                            if (var6) {
                                _fun72581_ip = 4395;
                                continue _fun72581
                            }
                        case 4385:
                            var7 = var13.isGuildVoice;
                            var6 = var7.bind(var13)();
                        case 4395:
                            if (var6) {
                                _fun72581_ip = 4408;
                                continue _fun72581
                            }
                        case 4398:
                            var7 = var13.isCategory;
                            var6 = var7.bind(var13)();
                        case 4408:
                            if (!var6) {
                                _fun72581_ip = 4588;
                                continue _fun72581
                            }
                        case 4414:
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
                                _fun72581_ip = 4494;
                                continue _fun72581
                            }
                        case 4481:
                            var12 = var14.dEaPc4;
                            var12 = var15.bind(var16)(var12);
                            _fun72581_ip = 4505;
                            continue _fun72581;
                        case 4494:
                            var14 = var14["fUYU+j"];
                            var12 = var15.bind(var16)(var14);
                        case 4505:
                            var6.label = var12;
                            var12 = var13.isCategory;
                            var12 = var12.bind(var13)();
                            var14 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            if (var12) {
                                _fun72581_ip = 4550;
                                continue _fun72581
                            }
                        case 4530:
                            var12 = 63;
                            var12 = var15[var12];
                            var12 = var14.bind(var11)(var12);
                            var12 = var12.CopyIcon;
                            _fun72581_ip = 4568;
                            continue _fun72581;
                        case 4550:
                            var13 = 40;
                            var13 = var15[var13];
                            var13 = var14.bind(var11)(var13);
                            var12 = var13.PlusLargeIcon;
                        case 4568:
                            var6.IconComponent = var12;
                            var12 = function() { // Original name: onPress, environment: var8
                                _fun72608: for (var _fun72608_ip = 0;;) switch (_fun72608_ip) {
                                    case 0:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 64;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var6 = var2.bind(var0)(var1);
                                        var5 = var6.open;
                                        var2 = _closure3_slot0;
                                        var1 = var2.isCategory;
                                        var1 = var1.bind(var2)();
                                        var4 = undefined;
                                        if (var1) {
                                            _fun72608_ip = 62;
                                            continue _fun72608
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
                                            _fun72608_ip = 101;
                                            continue _fun72608
                                        }
                                    case 93:
                                        var2 = var1.parent_id;
                                        _fun72608_ip = 106;
                                        continue _fun72608;
                                    case 101:
                                        var2 = var1.id;
                                    case 106:
                                        var8 = _closure3_slot0;
                                        var1 = var8.isCategory;
                                        var8 = var1.bind(var8)();
                                        var1 = undefined;
                                        if (var8) {
                                            _fun72608_ip = 134;
                                            continue _fun72608
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
                        case 4588:
                            if (!var1) {
                                _fun72581_ip = 4703;
                                continue _fun72581
                            }
                        case 4591:
                            var7 = var5.buttons;
                            var6 = var7.push;
                            var1 = {};
                            var10 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var9 = 22;
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
                            var9 = 65;
                            var9 = var12[var9];
                            var9 = var10.bind(var11)(var9);
                            var9 = var9.IdIcon;
                            var1.IconComponent = var9;
                            var8 = function() { // Original name: onPress, environment: var8
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 66;
                                var1 = var3[var0];
                                var0 = undefined;
                                var5 = var2.bind(var0)(var1);
                                var4 = var5.copy;
                                var1 = _closure3_slot0;
                                var1 = var1.id;
                                var1 = var4.bind(var5)(var1);
                                var1 = 67;
                                var1 = var3[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.presentIdCopied;
                                var1 = var1.bind(var2)();
                                return var0;
                            };
                            var1.onPress = var8;
                            var1 = var6.bind(var7)(var1);
                        case 4703:
                            var1 = var5.buttons;
                            var1 = var1.length;
                            if (!(var1 > var3)) {
                                _fun72581_ip = 4728;
                                continue _fun72581
                            }
                        case 4718:
                            var1 = var0.push;
                            var1 = var1.bind(var0)(var5);
                        case 4728:
                            var1 = var4.buttons;
                            var1 = var1.length;
                            if (!(var1 > var3)) {
                                _fun72581_ip = 4753;
                                continue _fun72581
                            }
                        case 4743:
                            var1 = var0.push;
                            var1 = var1.bind(var0)(var4);
                        case 4753:
                            var1 = var2.buttons;
                            var1 = var1.length;
                            if (!(var1 > var3)) {
                                _fun72581_ip = 4778;
                                continue _fun72581
                            }
                        case 4768:
                            var1 = var0.push;
                            var1 = var1.bind(var0)(var2);
                        case 4778:
                            return var0;
                    }
                };
                var9 = var2.bind(var3)(var5);
                _closure2_slot4 = var9;
                var2 = var16.isGroupDM;
                var2 = var2.bind(var16)();
                var12 = undefined;
                if (!var2) {
                    _fun72569_ip = 1274;
                    continue _fun72569
                }
            case 1191:
                var5 = _closure1_slot0;
                var17 = _closure1_slot2;
                var2 = 22;
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
            case 1274:
                var6 = _closure1_slot4;
                var5 = var6.useEffect;
                var15 = var9.length;
                var2 = new Array(3);
                var2[0] = var15;
                var2[1] = var10;
                var2[2] = var1;
                var1 = function() { // Environment: var7
                    _fun72610: for (var _fun72610_ip = 0;;) switch (_fun72610_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var2 = var1.length;
                            var1 = 0;
                            var1 = var1 !== var2;
                            if (var1) {
                                _fun72610_ip = 25;
                                continue _fun72610
                            }
                        case 21:
                            var1 = _closure2_slot3;
                        case 25:
                            if (var1) {
                                _fun72610_ip = 38;
                                continue _fun72610
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
                var2 = _closure1_slot31;
                var10 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = var15[var0];
                var0 = var10.bind(var3)(var0);
                var1 = var0.AnalyticsLocationProvider;
                var0 = {};
                var0.value = var4;
                var6 = _closure1_slot31;
                var4 = 79;
                var4 = var15[var4];
                var4 = var10.bind(var3)(var4);
                var5 = var4.ActionSheet;
                var4 = {};
                var4.showGradient = var11;
                var11 = 80;
                var11 = var15[var11];
                var16 = var10.bind(var3)(var11);
                var11 = var16.isMetaQuest;
                var11 = var11.bind(var16)();
                var4.startExpanded = var11;
                var11 = _closure1_slot31;
                var8 = 81;
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
                    var4 = _closure1_slot31;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 82;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.ActionSheetRow;
                    var2 = var1.Group;
                    var1 = {};
                    var7 = var0.buttons;
                    var6 = var7.map;
                    var5 = function(arg0, arg1) { // Environment: var5
                        _fun72612: for (var _fun72612_ip = 0;;) switch (_fun72612_ip) {
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
                                    _fun72612_ip = 59;
                                    continue _fun72612
                                }
                            case 55:
                                var14 = 'danger';
                            case 59:
                                var4 = _closure1_slot31;
                                var7 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var6 = 82;
                                var1 = var12[var6];
                                var3 = undefined;
                                var1 = var7.bind(var3)(var1);
                                var2 = var1.ActionSheetRow;
                                var1 = {};
                                var1.variant = var14;
                                var1.label = var13;
                                var8 = _closure1_slot31;
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
                                var0 = function() { // Original name: onPress, environment: var0
                                    _fun72613: for (var _fun72613_ip = 0;;) switch (_fun72613_ip) {
                                        case 0:
                                            var2 = _closure4_slot0;
                                            var1 = null;
                                            if (!(var1 != var2)) {
                                                _fun72613_ip = 23;
                                                continue _fun72613
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
    var _closure1_slot34 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.SafetyWarningTypes;
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
    var7 = var3.isGuildTextChannelType;
    var _closure1_slot9 = var7;
    var7 = var3.isGuildVocalChannelType;
    var _closure1_slot10 = var7;
    var7 = var3.isReadableType;
    var _closure1_slot11 = var7;
    var3 = var3.isTextChannel;
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
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
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticsObjectTypes;
    var _closure1_slot22 = var6;
    var6 = var3.AnalyticsObjects;
    var _closure1_slot23 = var6;
    var6 = var3.AnalyticsSections;
    var _closure1_slot24 = var6;
    var6 = var3.ChannelSettingsSections;
    var _closure1_slot25 = var6;
    var6 = var3.InstantInviteSources;
    var _closure1_slot26 = var6;
    var6 = var3.NULL_STRING_GUILD_ID;
    var _closure1_slot27 = var6;
    var6 = var3.Permissions;
    var _closure1_slot28 = var6;
    var3 = var3.ZERO_STRING_GUILD_ID;
    var _closure1_slot29 = var3;
    var3 = 17;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelDetailsNavigatorScreens;
    var _closure1_slot30 = var3;
    var3 = 18;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot31 = var3;
    var3 = 83;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel/native/ChannelLongPressActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ChannelLongPressActionSheet, environment: var1
        _fun72614: for (var _fun72614_ip = 0;;) switch (_fun72614_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.channelId;
                var _closure2_slot0 = var2;
                var5 = var1.onClose;
                var _closure2_slot1 = var5;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 70;
                var2 = var4[var2];
                var4 = undefined;
                var7 = var3.bind(var4)(var2);
                var6 = var7.useStateFromStores;
                var2 = _closure1_slot14;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot14;
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
                    _fun72616: for (var _fun72616_ip = 0;;) switch (_fun72616_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun72616_ip = 23;
                                continue _fun72616
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
                    _fun72614_ip = 151;
                    continue _fun72614
                }
            case 126:
                var3 = _closure1_slot31;
                var2 = _closure1_slot34;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 4512, 8958, 1377, 4188, 1376, 4530, 1372, 4531, 1410, 3050, 3059, 1661, 4266, 1613, 660, 8947, 33, 5872, 1307, 7839, 1234, 9059, 7313, 3211, 3905, 4754, 3962, 7476, 9061, 3213, 4524, 9081, 8594, 8290, 8522, 4656, 3879, 4694, 9104, 9106, 6405, 9021, 4800, 7503, 4537, 8715, 8132, 4660, 4657, 9107, 6426, 4802, 8946, 9109, 4822, 3237, 9110, 7841, 8890, 6454, 5330, 3217, 8095, 7690, 5252, 3106, 5687, 5540, 566, 4542, 4532, 8862, 1348, 7356, 5413, 8706, 9111, 5170, 4065, 5174, 7695, 2]);