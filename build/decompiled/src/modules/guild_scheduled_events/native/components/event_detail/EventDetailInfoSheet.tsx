// modules/guild_scheduled_events/native/components/event_detail/EventDetailInfoSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function() { // Original name: closeGuildEventInfoActionSheet, environment: var3
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 14;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.hideActionSheet;
        var1 = _closure1_slot11;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot16 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.AGE_VERIFICATION_STAGE_CHANNEL_TYPES;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.GUILD_EVENT_INFO_ACTION_SHEET_KEY;
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var12 = var4.Fonts;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var7 = var4.jsxs;
    var _closure1_slot13 = var7;
    var4 = var4.Fragment;
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 12;
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9.paddingHorizontal = var13;
    var4.eventContainer = var9;
    var9 = {};
    var13 = 19;
    var9.paddingTop = var13;
    var4.eventHeader = var9;
    var9 = {};
    var13 = 13;
    var14 = var6[var13];
    var17 = var11.bind(var0)(var14);
    var16 = var12.DISPLAY_EXTRABOLD;
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var15 = var14.MOBILE_TEXT_HEADING_PRIMARY;
    var14 = 20;
    var19 = var17.bind(var0)(var16, var15, var14);
    var20 = var9;
    var14 = copyDataProperties(var20, var19);
    var4.eventTitle = var9;
    var9 = {};
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var9.paddingTop = var14;
    var4.controlsContainer = var9;
    var9 = {};
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var9.paddingTop = var14;
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var9.paddingBottom = var14;
    var4.eventTitleContainer = var9;
    var9 = {};
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var9.paddingTop = var14;
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var9.paddingBottom = var14;
    var4.eventDescriptionContainer = var9;
    var9 = {};
    var13 = var6[var13];
    var15 = var11.bind(var0)(var13);
    var14 = var12.PRIMARY_MEDIUM;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var13 = var12.TEXT_SUBTLE;
    var12 = 14;
    var19 = var15.bind(var0)(var14, var13, var12);
    var20 = var9;
    var12 = copyDataProperties(var20, var19);
    var4.guildTextStyle = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9.paddingTop = var12;
    var12 = 'row';
    var9.flexDirection = var12;
    var4.interestedContainer = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var9.marginRight = var10;
    var4.interestedIcon = var9;
    var9 = {};
    var10 = 16;
    var9.marginTop = var10;
    var4.ageVerificationContainer = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/native/components/event_detail/EventDetailInfoSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: EventDetailInfoSheet, environment: var3
        _fun66121: for (var _fun66121_ip = 0;;) switch (_fun66121_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.guildEvent;
                var _closure2_slot0 = var11;
                var13 = var0.safeBottomPadding;
                var4 = var0.onLayout;
                var1 = var0.onCloseActionSheet;
                var _closure2_slot1 = var1;
                var9 = var0.recurrenceId;
                var0 = var0.onRecurrencePress;
                var _closure2_slot2 = var0;
                var0 = _closure1_slot15;
                var3 = undefined;
                var17 = var0.bind(var3)();
                var22 = _closure1_slot0;
                var20 = _closure1_slot2;
                var0 = 15;
                var1 = var20[var0];
                var7 = var22.bind(var3)(var1);
                var5 = var7.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var10
                    var0 = _closure1_slot5;
                    var0 = var0.roleStyle;
                    return var0;
                };
                var1 = var5.bind(var7)(var2, var1);
                var _closure2_slot3 = var1;
                var1 = var20[var0];
                var8 = var22.bind(var3)(var1);
                var7 = var8.useStateFromStores;
                var1 = _closure1_slot8;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = var11.channel_id;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var10
                    _fun66123: for (var _fun66123_ip = 0;;) switch (_fun66123_ip) {
                        case 0:
                            var2 = _closure1_slot8;
                            var0 = var2.isConnected;
                            var0 = var0.bind(var2)();
                            if (!var0) {
                                _fun66123_ip = 50;
                                continue _fun66123
                            }
                        case 20:
                            var2 = _closure1_slot8;
                            var1 = var2.getChannelId;
                            var2 = var1.bind(var2)();
                            var1 = _closure2_slot0;
                            var1 = var1.channel_id;
                            var0 = var2 === var1;
                        case 50:
                            return var0;
                    }
                };
                var19 = var7.bind(var8)(var5, var1, var2);
                var8 = 16;
                var1 = var20[var8];
                var5 = var22.bind(var3)(var1);
                var2 = var5.recurrenceRuleFromServer;
                var1 = var11.recurrence_rule;
                var12 = var2.bind(var5)(var1);
                var7 = _closure1_slot3;
                var5 = var7.useEffect;
                var1 = var11.guild_id;
                var2 = new Array(2);
                var2[0] = var1;
                var1 = var11.id;
                var2[1] = var1;
                var1 = function() { // Environment: var10
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 17;
                    var1 = var4[var2];
                    var0 = undefined;
                    var9 = var3.bind(var0)(var1);
                    var8 = var9.getGuildEventUserCounts;
                    var1 = _closure2_slot0;
                    var7 = var1.guild_id;
                    var6 = var1.id;
                    var5 = new Array(0);
                    var5 = var8.bind(var9)(var7, var6, var5);
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.getGuildEventsForCurrentUser;
                    var1 = var1.guild_id;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = var5.bind(var7)(var1, var2);
                var2 = _closure1_slot1;
                var1 = 18;
                var1 = var20[var1];
                var5 = var2.bind(var3)(var1);
                var2 = var11.guild_id;
                var1 = var11.id;
                var26 = var5.bind(var3)(var2, var1, var9);
                var1 = var20[var0];
                var7 = var22.bind(var3)(var1);
                var5 = var7.useStateFromStores;
                var1 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var10
                    var2 = _closure1_slot7;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var0.guild_id;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var16 = var5.bind(var7)(var2, var1);
                var0 = var20[var0];
                var7 = var22.bind(var3)(var0);
                var5 = var7.useStateFromStoresObject;
                var0 = _closure1_slot9;
                var2 = new Array(2);
                var2[0] = var0;
                var0 = _closure1_slot6;
                var2[1] = var0;
                var1 = new Array(1);
                var1[0] = var11;
                var0 = function() { // Environment: var10
                    _fun66126: for (var _fun66126_ip = 0;;) switch (_fun66126_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = var0.creator_id;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun66126_ip = 35;
                                continue _fun66126
                            }
                        case 19:
                            var0 = {
                                'creator': null,
                                'creatorMember': null
                            };
                            _fun66126_ip = 105;
                            continue _fun66126;
                        case 35:
                            var1 = {};
                            var6 = _closure1_slot9;
                            var5 = var6.getUser;
                            var2 = _closure2_slot0;
                            var4 = var2.creator_id;
                            var4 = var5.bind(var6)(var4);
                            var1.creator = var4;
                            var5 = _closure1_slot6;
                            var4 = var5.getMember;
                            var3 = var2.guild_id;
                            var2 = var2.creator_id;
                            var2 = var4.bind(var5)(var3, var2);
                            var1.creatorMember = var2;
                            var0 = var1;
                        case 105:
                            return var0;
                    }
                };
                var0 = var5.bind(var7)(var2, var0, var1);
                var25 = var0.creator;
                var _closure2_slot4 = var25;
                var0 = var0.creatorMember;
                var _closure2_slot5 = var0;
                var2 = _closure1_slot13;
                var1 = _closure1_slot4;
                var0 = {};
                var7 = var17.eventContainer;
                var5 = new Array(2);
                var5[0] = var7;
                var7 = {};
                var8 = var13 + var8;
                var7.paddingBottom = var8;
                var5[1] = var7;
                var0.style = var5;
                var0.onLayout = var4;
                var14 = _closure1_slot12;
                var18 = 19;
                var4 = var20[var18];
                var4 = var22.bind(var3)(var4);
                var5 = var4.GuildEventCardHeader;
                var4 = {
                    'event': null,
                    'style': null,
                    'showUserCount': false,
                    'showEndDate': true,
                    'showCreator': false
                };
                var4.event = var11;
                var7 = var17.eventHeader;
                var4.style = var7;
                var15 = true;
                var4.recurrenceId = var9;
                var5 = var14.bind(var3)(var5, var4);
                var4 = new Array(10);
                var4[0] = var5;
                var5 = var20[var18];
                var5 = var22.bind(var3)(var5);
                var7 = var5.GuildEventCardTitle;
                var5 = {};
                var5.event = var11;
                var8 = var17.eventTitle;
                var5.textStyle = var8;
                var8 = var17.eventTitleContainer;
                var5.style = var8;
                var5 = var14.bind(var3)(var7, var5);
                var4[1] = var5;
                var5 = var20[var18];
                var5 = var22.bind(var3)(var5);
                var7 = var5.GuildEventCardSimpleGuildInfo;
                var5 = {};
                var5.event = var11;
                var8 = var17.guildTextStyle;
                var5.textStyle = var8;
                var5 = var14.bind(var3)(var7, var5);
                var4[2] = var5;
                var5 = var20[var18];
                var5 = var22.bind(var3)(var5);
                var7 = var5.GuildEventSimpleLocation;
                var5 = {};
                var5.event = var11;
                var5 = var14.bind(var3)(var7, var5);
                var4[3] = var5;
                var5 = {};
                var7 = var17.interestedContainer;
                var5.style = var7;
                var7 = 20;
                var7 = var20[var7];
                var7 = var22.bind(var3)(var7);
                var8 = var7.BellIcon;
                var7 = {};
                var13 = 'sm';
                var7.size = var13;
                var13 = var17.interestedIcon;
                var7.style = var13;
                var8 = var14.bind(var3)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var21 = 21;
                var8 = var20[var21];
                var8 = var22.bind(var3)(var8);
                var13 = var8.Text;
                var8 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var28 = 22;
                var23 = var20[var28];
                var23 = var22.bind(var3)(var23);
                var24 = var23.intl;
                var23 = var24.format;
                var20 = var20[var28];
                var20 = var22.bind(var3)(var20);
                var20 = var20.t;
                var22 = var20["+DLsD8"];
                var20 = {};
                var20.count = var26;
                var20 = var23.bind(var24)(var22, var20);
                var8.children = var20;
                var8 = var14.bind(var3)(var13, var8);
                var7[1] = var8;
                var5.children = var7;
                var5 = var2.bind(var3)(var1, var5);
                var4[4] = var5;
                var5 = null;
                var7 = var5 != var25;
                if (!var7) {
                    _fun66121_ip = 836;
                    continue _fun66121
                }
            case 833:
                var7 = var16;
            case 836:
                if (!var7) {
                    _fun66121_ip = 1067;
                    continue _fun66121
                }
            case 842:
                var14 = _closure1_slot13;
                var13 = _closure1_slot4;
                var8 = {};
                var20 = var17.interestedContainer;
                var8.style = var20;
                var23 = _closure1_slot12;
                var22 = _closure1_slot1;
                var24 = _closure1_slot2;
                var26 = 23;
                var20 = var24[var26];
                var22 = var22.bind(var3)(var20);
                var20 = {};
                var20.user = var25;
                var25 = var11.guild_id;
                var20.guildId = var25;
                var25 = _closure1_slot0;
                var26 = var24[var26];
                var26 = var25.bind(var3)(var26);
                var26 = var26.AvatarSizes;
                var26 = var26.XSMALL_20;
                var20.size = var26;
                var26 = var17.interestedIcon;
                var20.style = var26;
                var22 = var23.bind(var3)(var22, var20);
                var20 = new Array(2);
                var20[0] = var22;
                var21 = var24[var21];
                var21 = var25.bind(var3)(var21);
                var22 = var21.Text;
                var21 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var26 = var24[var28];
                var26 = var25.bind(var3)(var26);
                var27 = var26.intl;
                var26 = var27.format;
                var24 = var24[var28];
                var24 = var25.bind(var3)(var24);
                var24 = var24.t;
                var25 = var24["66DLFs"];
                var24 = {};
                var28 = function() { // Original name: usernameHook, environment: var10
                    _fun66127: for (var _fun66127_ip = 0;;) switch (_fun66127_ip) {
                        case 0:
                            var3 = _closure1_slot13;
                            var2 = _closure1_slot14;
                            var1 = {};
                            var4 = _closure2_slot3;
                            var0 = 'dot';
                            var0 = var0 === var4;
                            if (!var0) {
                                _fun66127_ip = 60;
                                continue _fun66127
                            }
                        case 31:
                            var4 = _closure2_slot5;
                            var5 = null;
                            var6 = var5 == var4;
                            var4 = undefined;
                            if (var6) {
                                _fun66127_ip = 56;
                                continue _fun66127
                            }
                        case 46:
                            var6 = _closure2_slot5;
                            var4 = var6.colorString;
                        case 56:
                            var0 = var5 != var4;
                        case 60:
                            if (!var0) {
                                _fun66127_ip = 135;
                                continue _fun66127
                            }
                        case 63:
                            var7 = _closure1_slot12;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 24;
                            var4 = var6[var4];
                            var6 = undefined;
                            var4 = var5.bind(var6)(var4);
                            var5 = var4.RoleDot;
                            var4 = {};
                            var8 = 'small';
                            var4.size = var8;
                            var8 = _closure2_slot5;
                            var11 = var8.colorString;
                            var4.color = var11;
                            var8 = var8.colorStrings;
                            var4.colors = var8;
                            var0 = var7.bind(var6)(var5, var4);
                        case 135:
                            var4 = new Array(2);
                            var4[0] = var0;
                            var7 = _closure1_slot12;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 25;
                            var5 = var5[var0];
                            var0 = undefined;
                            var5 = var6.bind(var0)(var5);
                            var6 = var5.LegacyText;
                            var5 = {};
                            var8 = _closure2_slot5;
                            var11 = null;
                            var12 = var11 != var8;
                            var8 = undefined;
                            if (!var12) {
                                _fun66127_ip = 244;
                                continue _fun66127
                            }
                        case 192:
                            var13 = _closure2_slot3;
                            var12 = 'username';
                            var8 = undefined;
                            if (!(var12 === var13)) {
                                _fun66127_ip = 244;
                                continue _fun66127
                            }
                        case 206:
                            var12 = _closure2_slot5;
                            var12 = var12.colorString;
                            var12 = var11 != var12;
                            var8 = undefined;
                            if (!var12) {
                                _fun66127_ip = 244;
                                continue _fun66127
                            }
                        case 225:
                            var12 = {};
                            var13 = _closure2_slot5;
                            var13 = var13.colorString;
                            var12.color = var13;
                            var8 = var12;
                        case 244:
                            var5.style = var8;
                            var8 = _closure2_slot5;
                            var12 = var11 == var8;
                            var8 = undefined;
                            if (var12) {
                                _fun66127_ip = 271;
                                continue _fun66127
                            }
                        case 261:
                            var12 = _closure2_slot5;
                            var8 = var12.nick;
                        case 271:
                            if (!(var11 == var8)) {
                                _fun66127_ip = 310;
                                continue _fun66127
                            }
                        case 275:
                            var11 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var10 = 26;
                            var10 = var12[var10];
                            var11 = var11.bind(var0)(var10);
                            var10 = var11.getName;
                            var9 = _closure2_slot4;
                            var8 = var10.bind(var11)(var9);
                        case 310:
                            var5.children = var8;
                            var5 = var7.bind(var0)(var6, var5);
                            var4[1] = var5;
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var24.usernameHook = var28;
                var24 = var26.bind(var27)(var25, var24);
                var21.children = var24;
                var21 = var23.bind(var3)(var22, var21);
                var20[1] = var21;
                var8.children = var20;
                var7 = var14.bind(var3)(var13, var8);
            case 1067:
                var4[5] = var7;
                var13 = _closure1_slot12;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var18];
                var7 = var8.bind(var3)(var7);
                var8 = var7.GuildEventCardDescription;
                var7 = {};
                var7.event = var11;
                var14 = var17.eventDescriptionContainer;
                var7.style = var14;
                var7 = var13.bind(var3)(var8, var7);
                var4[6] = var7;
                var13 = _closure1_slot10;
                var8 = var13.has;
                var7 = var11.entity_type;
                var7 = var8.bind(var13)(var7);
                if (!var7) {
                    _fun66121_ip = 1282;
                    continue _fun66121
                }
            case 1151:
                var14 = _closure1_slot12;
                var13 = _closure1_slot1;
                var22 = _closure1_slot2;
                var20 = 27;
                var8 = var22[var20];
                var13 = var13.bind(var3)(var8);
                var8 = {};
                var8.noBackground = var15;
                var21 = _closure1_slot0;
                var15 = var22[var20];
                var15 = var21.bind(var3)(var15);
                var15 = var15.DividerPosition;
                var23 = var15.TOP;
                var15 = new Array(2);
                var15[0] = var23;
                var20 = var22[var20];
                var20 = var21.bind(var3)(var20);
                var20 = var20.DividerPosition;
                var20 = var20.BOTTOM;
                var15[1] = var20;
                var8.divider = var15;
                var15 = function() { // Original name: onConfirmPress, environment: var10
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.hideAllActionSheets;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8.onConfirmPress = var15;
                var15 = var11.channel_id;
                var8.channelId = var15;
                var15 = var17.ageVerificationContainer;
                var8.style = var15;
                var7 = var14.bind(var3)(var13, var8);
            case 1282:
                var4[7] = var7;
                var13 = _closure1_slot13;
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var7 = 28;
                var7 = var14[var7];
                var7 = var15.bind(var3)(var7);
                var8 = var7.ButtonGroup;
                var7 = {};
                var20 = 'horizontal';
                var7.direction = var20;
                var17 = var17.controlsContainer;
                var7.style = var17;
                var17 = _closure1_slot12;
                var14 = var14[var18];
                var14 = var15.bind(var3)(var14);
                var15 = var14.GuildEventCardPrimaryAction;
                var14 = {};
                var14.event = var11;
                var20 = function() { // Original name: onCloseAction, environment: var10
                    _fun66129: for (var _fun66129_ip = 0;;) switch (_fun66129_ip) {
                        case 0:
                            var1 = _closure1_slot16;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            var3 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun66129_ip = 34;
                                continue _fun66129
                            }
                        case 26:
                            var1 = _closure2_slot1;
                            var1 = var1.bind(var0)();
                        case 34:
                            return var0;
                    }
                };
                var14.onCloseAction = var20;
                var14.isConnected = var19;
                var14.recurrenceId = var9;
                var15 = var17.bind(var3)(var15, var14);
                var14 = new Array(3);
                var14[0] = var15;
                var15 = null;
                if (!var16) {
                    _fun66121_ip = 1444;
                    continue _fun66121
                }
            case 1404:
                var19 = _closure1_slot12;
                var17 = _closure1_slot0;
                var16 = _closure1_slot2;
                var16 = var16[var18];
                var16 = var17.bind(var3)(var16);
                var17 = var16.GuildEventShareAction;
                var16 = {};
                var16.event = var11;
                var15 = var19.bind(var3)(var17, var16);
            case 1444:
                var14[1] = var15;
                var17 = _closure1_slot12;
                var16 = _closure1_slot0;
                var15 = _closure1_slot2;
                var15 = var15[var18];
                var15 = var16.bind(var3)(var15);
                var16 = var15.GuildEventModeratorAction;
                var15 = {};
                var15.event = var11;
                var15.recurrenceId = var9;
                var15 = var17.bind(var3)(var16, var15);
                var14[2] = var15;
                var7.children = var14;
                var7 = var13.bind(var3)(var8, var7);
                var4[8] = var7;
                var5 = var5 != var12;
                if (!var5) {
                    _fun66121_ip = 1591;
                    continue _fun66121
                }
            case 1518:
                var8 = _closure1_slot12;
                var7 = _closure1_slot1;
                var13 = _closure1_slot2;
                var6 = 29;
                var6 = var13[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var13 = var11.guild_id;
                var6.guildId = var13;
                var6.recurrenceRule = var12;
                var11 = var11.id;
                var6.guildEventId = var11;
                var10 = function(arg0) { // Original name: onRecurrencePress, environment: var10
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var6.onRecurrencePress = var10;
                var6.activeRecurrenceId = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 1591:
                var4[9] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.closeGuildEventInfoActionSheet = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 1672, 1410, 3477, 1613, 1378, 8059, 483, 33, 1297, 671, 4644, 3237, 566, 8064, 8137, 8136, 8126, 8132, 3901, 1234, 5413, 8154, 4838, 3195, 5892, 6404, 8155, 2]);