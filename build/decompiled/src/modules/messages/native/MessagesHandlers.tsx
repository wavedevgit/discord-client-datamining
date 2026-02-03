// modules/messages/native/MessagesHandlers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var0 = function arg0() {
        _fun77774: for (var _fun77774_ip = 0;;) switch (_fun77774_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.type;
                var1 = _closure1_slot54;
                var1 = var1.THREAD_STARTER_MESSAGE;
                if (!(var3 === var1)) {
                    _fun77774_ip = 37;
                    continue _fun77774
                }
            case 25:
                var3 = var0.messageReference;
                var1 = null;
                if (!(var1 == var3)) {
                    _fun77774_ip = 85;
                    continue _fun77774
                }
            case 37:
                var3 = var0.messageSnapshots;
                var3 = var3.length;
                var5 = 0;
                if (!(!(var3 > var5))) {
                    _fun77774_ip = 62;
                    continue _fun77774
                }
            case 54:
                var3 = var0.codedLinks;
                _fun77774_ip = 83;
                continue _fun77774;
            case 62:
                var4 = var0.messageSnapshots;
                var4 = var4[var5];
                var4 = var4.message;
                var3 = var4.codedLinks;
            case 83:
                return var3;
            case 85:
                var3 = _closure1_slot17;
                var2 = var3.getMessageByReference;
                var0 = var0.messageReference;
                var0 = var2.bind(var3)(var0);
                var0 = var0.message;
                if (!(var1 != var0)) {
                    _fun77774_ip = 123;
                    continue _fun77774
                }
            case 115:
                var0 = var0.codedLinks;
                return var0;
            case 123:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot69 = var0;
    var0 = ['messageId'];
    var _closure1_slot4 = var0;
    var0 = ['messageId'];
    var _closure1_slot5 = var0;
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
    var _closure1_slot6 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 8;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot14 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isGuildScheduledEventActive;
    var _closure1_slot15 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot16 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot17 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot18 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot19 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isGuildVocalChannelType;
    var _closure1_slot20 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isGuildLurker;
    var _closure1_slot21 = var3;
    var3 = 15;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot22 = var3;
    var3 = 16;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot23 = var3;
    var3 = 17;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot24 = var3;
    var3 = 18;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot25 = var3;
    var3 = 19;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot26 = var3;
    var3 = 20;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot27 = var3;
    var3 = 21;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot28 = var3;
    var3 = 22;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot29 = var3;
    var3 = 23;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot30 = var3;
    var3 = 24;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot31 = var3;
    var3 = 25;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot32 = var3;
    var3 = 26;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot33 = var3;
    var3 = 27;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot34 = var3;
    var3 = 28;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot35 = var3;
    var3 = 29;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot36 = var3;
    var3 = 30;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SeparatorAction;
    var _closure1_slot37 = var3;
    var3 = 31;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityActionTypes;
    var _closure1_slot38 = var6;
    var6 = var3.ActivityFlags;
    var _closure1_slot39 = var6;
    var6 = var3.ActivityTypes;
    var _closure1_slot40 = var6;
    var6 = var3.AnalyticEvents;
    var _closure1_slot41 = var6;
    var6 = var3.AnalyticsGameOpenTypes;
    var _closure1_slot42 = var6;
    var6 = var3.AnalyticsLocations;
    var _closure1_slot43 = var6;
    var6 = var3.AnalyticsObjects;
    var _closure1_slot44 = var6;
    var6 = var3.AnalyticsObjectTypes;
    var _closure1_slot45 = var6;
    var6 = var3.AnalyticsPages;
    var _closure1_slot46 = var6;
    var6 = var3.AnalyticsSections;
    var _closure1_slot47 = var6;
    var6 = var3.ChannelTypes;
    var _closure1_slot48 = var6;
    var6 = var3.GuildFeatures;
    var _closure1_slot49 = var6;
    var6 = var3.LinkingTypes;
    var _closure1_slot50 = var6;
    var6 = var3.ME;
    var _closure1_slot51 = var6;
    var6 = var3.MessageFlags;
    var _closure1_slot52 = var6;
    var6 = var3.MessageStates;
    var _closure1_slot53 = var6;
    var6 = var3.MessageTypes;
    var _closure1_slot54 = var6;
    var6 = var3.Permissions;
    var _closure1_slot55 = var6;
    var6 = var3.Routes;
    var _closure1_slot56 = var6;
    var6 = var3.UpsellTypes;
    var _closure1_slot57 = var6;
    var6 = var3.UserSettingsSections;
    var _closure1_slot58 = var6;
    var3 = var3.WebBrowserType;
    var _closure1_slot59 = var3;
    var3 = 32;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StaticChannelRoute;
    var _closure1_slot60 = var3;
    var3 = 33;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ExpressionPickerViewType;
    var _closure1_slot61 = var3;
    var3 = 34;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildOnboardingTab;
    var _closure1_slot62 = var3;
    var3 = 35;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CHANNELS_AND_ROLES_MODAL_KEY;
    var _closure1_slot63 = var3;
    var3 = 36;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.InviteTypes;
    var _closure1_slot64 = var3;
    var3 = 37;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.PremiumTypes;
    var _closure1_slot65 = var6;
    var3 = var3.PremiumUpsellTypes;
    var _closure1_slot66 = var3;
    var3 = 38;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SafetySystemNotificationCtaType;
    var _closure1_slot67 = var3;
    var3 = 39;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.OpenThreadAnalyticsLocations;
    var _closure1_slot68 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot10;
        var2 = function arg0() {
            var2 = this;
            var _closure3_slot0 = var2;
            var _closure3_slot1 = var2;
            var4 = _closure1_slot9;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = arg0;
            var2.getParams = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77777: for (var _fun77777_ip = 0;;) switch (_fun77777_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        if (!(var0 != var3)) {
                            _fun77777_ip = 88;
                            continue _fun77777
                        }
                    case 9:
                        var1 = _closure3_slot0;
                        var1 = var1.params;
                        var2 = var1.getMessage;
                        var1 = undefined;
                        var4 = var2.bind(var1)(var3);
                        if (!(var0 != var4)) {
                            _fun77777_ip = 86;
                            continue _fun77777
                        }
                    case 39:
                        var3 = _closure1_slot23;
                        var2 = var3.getChannel;
                        var1 = var4.channel_id;
                        var3 = var2.bind(var3)(var1);
                        var2 = var0 == var3;
                        var1 = null;
                        if (var2) {
                            _fun77777_ip = 84;
                            continue _fun77777
                        }
                    case 70:
                        var2 = {};
                        var2.message = var4;
                        var2.messageChannel = var3;
                        var1 = var2;
                    case 84:
                        return var1;
                    case 86:
                        return var0;
                    case 88:
                        return var0;
                }
            };
            var2.getMessageData = var3;
            var3 = function() { // Environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var0 = 40;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.isAlertOrActionSheetOpen;
                var0 = _closure3_slot0;
                var0 = var0.params;
                var0 = var0.selectedChannelId;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var2.isModalOrActionsheetObstructing = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77779: for (var _fun77779_ip = 0;;) switch (_fun77779_ip) {
                    case 0:
                        var1 = arg0;
                        var1 = var1.nativeEvent;
                        var _closure4_slot0 = var1;
                        var3 = _closure3_slot0;
                        var2 = var3.getMessageData;
                        var1 = var1.id;
                        var2 = var2.bind(var3)(var1);
                        var _closure4_slot1 = var2;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun77779_ip = 108;
                            continue _fun77779
                        }
                    case 48:
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var2 = 42;
                        var2 = var1[var2];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = 41;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var2 = var3.bind(var4)(var2, var1);
                        var1 = var2.then;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var2 = var0.handleMessagesTapImage;
                            var1 = {};
                            var3 = _closure4_slot0;
                            var1.tapImageData = var3;
                            var3 = false;
                            var1.allowWithinModal = var3;
                            var0 = _closure4_slot1;
                            var3 = var0.message;
                            var1.message = var3;
                            var0 = var0.messageChannel;
                            var1.messageChannel = var0;
                            var0 = _closure3_slot0;
                            var0 = var0.params;
                            var0 = var0.selectedChannelId;
                            var1.selectedChannelId = var0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                    case 108:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleTapImage = var3;
            var3 = function() { // Environment: var1
                var3 = _closure1_slot8;
                var2 = undefined;
                var1 = function*(arg0) { // Environment: var0
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun77783: for (var _fun77783_ip = 0;;) switch (_fun77783_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun77783_ip = 1858;
                                    continue _fun77783
                                }
                            case 10:
                                var1 = undefined;
                                var6 = undefined;
                                var7 = undefined;
                                var4 = undefined;
                                var13 = undefined;
                                var3 = _closure3_slot1;
                                var2 = var3.isModalOrActionsheetObstructing;
                                var2 = var2.bind(var3)();
                                if (var2) {
                                    _fun77783_ip = 1855;
                                    continue _fun77783
                                }
                            case 43:
                                var5 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var3 = 43;
                                var3 = var8[var3];
                                var8 = var5.bind(var1)(var3);
                                var5 = var8.getNativeSyntheticEventData;
                                var3 = arg0;
                                var3 = var5.bind(var8)(var3);
                                var5 = var3.data;
                                var3 = var5.channelId;
                                var6 = var3;
                                var7 = var5.guildId;
                                var4 = var5.messageId;
                                var5 = null;
                                var3 = var5 != var3;
                                var8 = null;
                                if (!var3) {
                                    _fun77783_ip = 131;
                                    continue _fun77783
                                }
                            case 114:
                                var11 = _closure1_slot23;
                                var10 = var11.getChannel;
                                var3 = var6;
                                var8 = var10.bind(var11)(var3);
                            case 131:
                                var11 = _closure1_slot27;
                                var3 = var11.getGuild;
                                var10 = var7;
                                var3 = var3.bind(var11)(var10);
                                var12 = _closure1_slot1;
                                var14 = _closure1_slot3;
                                var11 = 44;
                                var11 = var14[var11];
                                var14 = var12.bind(var1)(var11);
                                var12 = var14.trackDiscordLinkClicked;
                                var11 = {};
                                var11.guildId = var10;
                                var15 = var6;
                                var11.channelId = var15;
                                var15 = var4;
                                var11.messageId = var15;
                                var11 = var12.bind(var14)(var11);
                                if (!(var5 != var10)) {
                                    _fun77783_ip = 250;
                                    continue _fun77783
                                }
                            case 203:
                                var10 = var6;
                                if (!(var5 != var10)) {
                                    _fun77783_ip = 250;
                                    continue _fun77783
                                }
                            case 210:
                                var11 = _closure1_slot0;
                                var12 = _closure1_slot3;
                                var10 = 45;
                                var10 = var12[var10];
                                var12 = var11.bind(var1)(var10);
                                var11 = var12.isStaticRouteIconType;
                                var10 = var6;
                                var10 = var11.bind(var12)(var10);
                                if (var10) {
                                    _fun77783_ip = 1031;
                                    continue _fun77783
                                }
                            case 250:
                                var10 = var4;
                                if (!(var5 != var10)) {
                                    _fun77783_ip = 264;
                                    continue _fun77783
                                }
                            case 257:
                                if (!(var5 == var8)) {
                                    _fun77783_ip = 956;
                                    continue _fun77783
                                }
                            case 264:
                                if (!(var5 != var8)) {
                                    _fun77783_ip = 278;
                                    continue _fun77783
                                }
                            case 268:
                                var10 = var7;
                                if (!(var5 == var10)) {
                                    _fun77783_ip = 710;
                                    continue _fun77783
                                }
                            case 278:
                                var10 = var6;
                                if (!(var5 != var10)) {
                                    _fun77783_ip = 295;
                                    continue _fun77783
                                }
                            case 285:
                                var10 = var7;
                                if (!(var5 == var10)) {
                                    _fun77783_ip = 547;
                                    continue _fun77783
                                }
                            case 295:
                                if (!(var5 != var8)) {
                                    _fun77783_ip = 312;
                                    continue _fun77783
                                }
                            case 299:
                                var10 = var8.isPrivate;
                                var10 = var10.bind(var8)();
                                if (var10) {
                                    _fun77783_ip = 406;
                                    continue _fun77783
                                }
                            case 312:
                                var10 = var6;
                                var10 = var5 != var10;
                                if (!var10) {
                                    _fun77783_ip = 329;
                                    continue _fun77783
                                }
                            case 322:
                                var11 = var7;
                                var10 = var5 == var11;
                            case 329:
                                if (!var10) {
                                    _fun77783_ip = 1855;
                                    continue _fun77783
                                }
                            case 335:
                                var11 = _closure1_slot1;
                                var12 = _closure1_slot3;
                                var10 = 53;
                                var10 = var12[var10];
                                var12 = var11.bind(var1)(var10);
                                var16 = _closure1_slot56;
                                var15 = var16.CHANNEL;
                                var14 = var7;
                                var11 = var6;
                                var10 = var4;
                                var11 = var15.bind(var16)(var14, var11, var10);
                                var10 = {
                                    'navigationReplace': false,
                                    'openChannel': true
                                };
                                var10 = var12.bind(var1)(var11, var10);
                                _fun77783_ip = 1855;
                                continue _fun77783;
                            case 406:
                                var11 = _closure3_slot1;
                                var10 = var11.getParams;
                                var10 = var10.bind(var11)();
                                var10 = var10.chatInputRef;
                                var11 = var10.current;
                                if (!(var5 != var11)) {
                                    _fun77783_ip = 445;
                                    continue _fun77783
                                }
                            case 435:
                                var10 = var11.dismissKeyboard;
                                var10 = var10.bind(var11)();
                            case 445:
                                var11 = _closure1_slot1;
                                var12 = _closure1_slot3;
                                var10 = 57;
                                var10 = var12[var10];
                                var14 = var11.bind(var1)(var10);
                                var11 = var14.selectVoiceChannel;
                                var10 = var6;
                                var10 = var11.bind(var14)(var10);
                                var11 = _closure1_slot0;
                                var10 = 58;
                                var10 = var12[var10];
                                var11 = var11.bind(var1)(var10);
                                var10 = var11.isVoicePanelEnabled;
                                var10 = var10.bind(var11)();
                                if (var10) {
                                    _fun77783_ip = 1855;
                                    continue _fun77783
                                }
                            case 511:
                                var11 = _closure1_slot0;
                                var12 = _closure1_slot3;
                                var10 = 55;
                                var10 = var12[var10];
                                var11 = var11.bind(var1)(var10);
                                var10 = var11.openChannelCallModal;
                                var10 = var10.bind(var11)(var8);
                                _fun77783_ip = 1855;
                                continue _fun77783;
                            case 547:
                                var13 = false;
                                if (!(var5 != var3)) {
                                    _fun77783_ip = 565;
                                    continue _fun77783
                                }
                            case 553:
                                var10 = _closure1_slot21;
                                var10 = var10.bind(var1)(var3);
                                if (!var10) {
                                    _fun77783_ip = 639;
                                    continue _fun77783
                                }
                            case 565: // try_start_0
                                var11 = _closure1_slot2;
                                var12 = _closure1_slot3;
                                var10 = 56;
                                var10 = var12[var10];
                                var15 = var11.bind(var1)(var10);
                                var14 = var15.startLurking;
                                var12 = var7;
                                var11 = {};
                                var10 = var6;
                                var11.channelId = var10;
                                var10 = var4;
                                var11.messageId = var10;
                                var10 = {};
                                var10 = var14.bind(var15)(var12, var10, var11);
                                SaveGenerator(address = 623);
                            case 621:
                                return var10;
                            case 623:
                                ResumeGenerator(result_out_reg = 10, return_bool_out_reg = 11);
                                if (var11) {
                                    _fun77783_ip = 634;
                                    continue _fun77783
                                }
                            case 629:
                                var13 = true;
                            case 631: // try_end0
                                return var1;
                            case 634:
                                return var10;
                            case 637: // catch_target0
                                CatchBlockStart(arg_register = 10);
                            case 639:
                                var11 = _closure1_slot1;
                                var12 = _closure1_slot3;
                                var10 = 53;
                                var10 = var12[var10];
                                var12 = var11.bind(var1)(var10);
                                var16 = _closure1_slot56;
                                var15 = var16.CHANNEL;
                                var14 = var7;
                                var11 = var6;
                                var10 = var4;
                                var11 = var15.bind(var16)(var14, var11, var10);
                                var10 = {};
                                var10.navigationReplace = var13;
                                var13 = true;
                                var10.openChannel = var13;
                                var10 = var12.bind(var1)(var11, var10);
                                _fun77783_ip = 1855;
                                continue _fun77783;
                            case 710:
                                var11 = _closure1_slot20;
                                var10 = var8.type;
                                var10 = var11.bind(var1)(var10);
                                if (!var10) {
                                    _fun77783_ip = 761;
                                    continue _fun77783
                                }
                            case 727:
                                var11 = _closure1_slot0;
                                var12 = _closure1_slot3;
                                var10 = 54;
                                var10 = var12[var10];
                                var11 = var11.bind(var1)(var10);
                                var10 = var11.canViewChannel;
                                var10 = var10.bind(var11)(var8);
                                if (var10) {
                                    _fun77783_ip = 830;
                                    continue _fun77783
                                }
                            case 761:
                                var11 = _closure1_slot1;
                                var12 = _closure1_slot3;
                                var10 = 53;
                                var10 = var12[var10];
                                var12 = var11.bind(var1)(var10);
                                var14 = _closure1_slot56;
                                var13 = var14.CHANNEL;
                                var11 = var7;
                                var10 = var8.id;
                                var11 = var13.bind(var14)(var11, var10);
                                var10 = {
                                    'navigationReplace': false,
                                    'openChannel': true
                                };
                                var10 = var12.bind(var1)(var11, var10);
                                _fun77783_ip = 1855;
                                continue _fun77783;
                            case 830:
                                var11 = var8.type;
                                var10 = _closure1_slot48;
                                var10 = var10.GUILD_STAGE_VOICE;
                                if (!(var11 === var10)) {
                                    _fun77783_ip = 881;
                                    continue _fun77783
                                }
                            case 849:
                                var12 = _closure1_slot30;
                                var11 = var12.can;
                                var10 = _closure1_slot55;
                                var10 = var10.CONNECT;
                                var10 = var11.bind(var12)(var10, var8);
                                if (var10) {
                                    _fun77783_ip = 881;
                                    continue _fun77783
                                }
                            case 878:
                                return var1;
                            case 881:
                                var10 = _closure3_slot1;
                                var9 = var10.getParams;
                                var9 = var9.bind(var10)();
                                var9 = var9.chatInputRef;
                                var10 = var9.current;
                                if (!(var5 != var10)) {
                                    _fun77783_ip = 920;
                                    continue _fun77783
                                }
                            case 910:
                                var9 = var10.dismissKeyboard;
                                var9 = var9.bind(var10)();
                            case 920:
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot3;
                                var9 = 55;
                                var9 = var11[var9];
                                var10 = var10.bind(var1)(var9);
                                var9 = var10.openChannelCallModal;
                                var9 = var9.bind(var10)(var8);
                                _fun77783_ip = 1855;
                                continue _fun77783;
                            case 956:
                                var10 = _closure1_slot1;
                                var11 = _closure1_slot3;
                                var9 = 53;
                                var9 = var11[var9];
                                var10 = var10.bind(var1)(var9);
                                var13 = _closure1_slot56;
                                var12 = var13.CHANNEL;
                                var11 = var8.guild_id;
                                var9 = var8.id;
                                var8 = var4;
                                var9 = var12.bind(var13)(var11, var9, var8);
                                var8 = {
                                    'navigationReplace': false,
                                    'openChannel': true
                                };
                                var8 = var10.bind(var1)(var9, var8);
                                _fun77783_ip = 1855;
                                continue _fun77783;
                            case 1031:
                                if (!(var5 != var3)) {
                                    _fun77783_ip = 1852;
                                    continue _fun77783
                                }
                            case 1038:
                                var9 = var6;
                                var8 = 'browse';
                                if (!(var8 !== var9)) {
                                    _fun77783_ip = 1726;
                                    continue _fun77783
                                }
                            case 1054:
                                var8 = 'customize';
                                if (!(var8 !== var9)) {
                                    _fun77783_ip = 1594;
                                    continue _fun77783
                                }
                            case 1067:
                                var8 = 'home';
                                if (!(var8 !== var9)) {
                                    _fun77783_ip = 1497;
                                    continue _fun77783
                                }
                            case 1078:
                                var8 = 'guide';
                                if (!(var8 !== var9)) {
                                    _fun77783_ip = 1497;
                                    continue _fun77783
                                }
                            case 1091:
                                var8 = 'linked-roles';
                                if (!(var8 !== var9)) {
                                    _fun77783_ip = 1137;
                                    continue _fun77783
                                }
                            case 1101:
                                var9 = _closure1_slot0;
                                var10 = _closure1_slot3;
                                var8 = 52;
                                var8 = var10[var8];
                                var9 = var9.bind(var1)(var8);
                                var8 = var9.assertNever;
                                var6 = var8.bind(var9)(var6);
                                _fun77783_ip = 1855;
                                continue _fun77783;
                            case 1137:
                                var10 = var4;
                                if (!(var5 == var10)) {
                                    _fun77783_ip = 1224;
                                    continue _fun77783
                                }
                            case 1144:
                                var8 = _closure1_slot1;
                                var4 = _closure1_slot3;
                                var6 = 46;
                                var6 = var4[var6];
                                var9 = var8.bind(var1)(var6);
                                var8 = var9.pushLazy;
                                var11 = _closure1_slot0;
                                var6 = 42;
                                var6 = var4[var6];
                                var11 = var11.bind(var1)(var6);
                                var6 = 51;
                                var6 = var4[var6];
                                var4 = var4.paths;
                                var6 = var11.bind(var1)(var6, var4);
                                var4 = {};
                                var11 = var7;
                                var4.guildId = var11;
                                var4 = var8.bind(var9)(var6, var4);
                                _fun77783_ip = 1855;
                                continue _fun77783;
                            case 1224:
                                var8 = _closure1_slot25;
                                var6 = var8.getSelfMember;
                                var4 = var7;
                                var4 = var6.bind(var8)(var4);
                                if (!(var5 != var4)) {
                                    _fun77783_ip = 1494;
                                    continue _fun77783
                                }
                            case 1249:
                                var9 = _closure1_slot26;
                                var8 = var9.getRole;
                                var6 = var7;
                                var10 = var8.bind(var9)(var6, var10);
                                if (!(var5 != var10)) {
                                    _fun77783_ip = 1414;
                                    continue _fun77783
                                }
                            case 1275:
                                var6 = var4.roles;
                                var5 = var6.includes;
                                var4 = var10.id;
                                var4 = var5.bind(var6)(var4);
                                if (var4) {
                                    _fun77783_ip = 1414;
                                    continue _fun77783
                                }
                            case 1299:
                                var6 = _closure1_slot1;
                                var4 = _closure1_slot3;
                                var5 = 49;
                                var5 = var4[var5];
                                var9 = var6.bind(var1)(var5);
                                var8 = var9.openLazy;
                                var6 = _closure1_slot0;
                                var5 = 42;
                                var5 = var4[var5];
                                var6 = var6.bind(var1)(var5);
                                var5 = 50;
                                var5 = var4[var5];
                                var4 = var4.paths;
                                var6 = var6.bind(var1)(var5, var4);
                                var11 = var10.id;
                                var4 = global;
                                var4 = var4.HermesInternal;
                                var5 = var4.concat;
                                var4 = 'GuildRoleConnectionsConnectAccountsActionSheet-';
                                var5 = var5.bind(var4)(var11);
                                var4 = {};
                                var4.role = var10;
                                var10 = var7;
                                var4.guildId = var10;
                                var4 = var8.bind(var9)(var6, var5, var4);
                                _fun77783_ip = 1855;
                                continue _fun77783;
                            case 1414:
                                var6 = _closure1_slot1;
                                var4 = _closure1_slot3;
                                var5 = 46;
                                var5 = var4[var5];
                                var8 = var6.bind(var1)(var5);
                                var6 = var8.pushLazy;
                                var9 = _closure1_slot0;
                                var5 = 42;
                                var5 = var4[var5];
                                var9 = var9.bind(var1)(var5);
                                var5 = 51;
                                var5 = var4[var5];
                                var4 = var4.paths;
                                var5 = var9.bind(var1)(var5, var4);
                                var4 = {};
                                var9 = var7;
                                var4.guildId = var9;
                                var4 = var6.bind(var8)(var5, var4);
                                _fun77783_ip = 1855;
                                continue _fun77783;
                            case 1494:
                                return var1;
                            case 1497:
                                var6 = var3.features;
                                var5 = var6.has;
                                var4 = _closure1_slot49;
                                var4 = var4.COMMUNITY;
                                var4 = var5.bind(var6)(var4);
                                if (var4) {
                                    _fun77783_ip = 1529;
                                    continue _fun77783
                                }
                            case 1526:
                                return var1;
                            case 1529:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot3;
                                var4 = 48;
                                var4 = var6[var4];
                                var6 = var5.bind(var1)(var4);
                                var5 = var6.transitionTo;
                                var10 = _closure1_slot56;
                                var9 = var10.CHANNEL;
                                var8 = var7;
                                var4 = _closure1_slot60;
                                var4 = var4.GUILD_HOME;
                                var4 = var9.bind(var10)(var8, var4);
                                var4 = var5.bind(var6)(var4);
                                _fun77783_ip = 1855;
                                continue _fun77783;
                            case 1594:
                                var6 = var3.features;
                                var5 = var6.has;
                                var4 = _closure1_slot49;
                                var4 = var4.COMMUNITY;
                                var4 = var5.bind(var6)(var4);
                                if (var4) {
                                    _fun77783_ip = 1626;
                                    continue _fun77783
                                }
                            case 1623:
                                return var1;
                            case 1626:
                                var6 = _closure1_slot1;
                                var4 = _closure1_slot3;
                                var5 = 46;
                                var5 = var4[var5];
                                var9 = var6.bind(var1)(var5);
                                var8 = var9.pushLazy;
                                var6 = _closure1_slot0;
                                var5 = 42;
                                var5 = var4[var5];
                                var6 = var6.bind(var1)(var5);
                                var5 = 47;
                                var5 = var4[var5];
                                var4 = var4.paths;
                                var6 = var6.bind(var1)(var5, var4);
                                var5 = {};
                                var4 = var7;
                                var5.guildId = var4;
                                var4 = _closure1_slot62;
                                var4 = var4.CUSTOMIZE;
                                var5.defaultTab = var4;
                                var4 = _closure1_slot63;
                                var4 = var8.bind(var9)(var6, var5, var4);
                                _fun77783_ip = 1855;
                                continue _fun77783;
                            case 1726:
                                var5 = var3.features;
                                var4 = var5.has;
                                var3 = _closure1_slot49;
                                var3 = var3.COMMUNITY;
                                var3 = var4.bind(var5)(var3);
                                if (var3) {
                                    _fun77783_ip = 1758;
                                    continue _fun77783
                                }
                            case 1755:
                                return var1;
                            case 1758:
                                var5 = _closure1_slot1;
                                var3 = _closure1_slot3;
                                var4 = 46;
                                var4 = var3[var4];
                                var6 = var5.bind(var1)(var4);
                                var5 = var6.pushLazy;
                                var8 = _closure1_slot0;
                                var4 = 42;
                                var4 = var3[var4];
                                var8 = var8.bind(var1)(var4);
                                var4 = 47;
                                var4 = var3[var4];
                                var3 = var3.paths;
                                var4 = var8.bind(var1)(var4, var3);
                                var3 = {};
                                var3.guildId = var7;
                                var7 = _closure1_slot62;
                                var7 = var7.BROWSE;
                                var3.defaultTab = var7;
                                var2 = _closure1_slot63;
                                var2 = var5.bind(var6)(var4, var3, var2);
                                _fun77783_ip = 1855;
                                continue _fun77783;
                            case 1852:
                                return var1;
                            case 1855:
                                return var1;
                            case 1858:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var3.bind(var2)(var1);
                var _closure4_slot0 = var1;
                var0 = function() { // Environment: var0
                    var0 = undefined;
                    var3 = _closure4_slot0;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                return var0;
            };
            var3 = var3.bind(var0)();
            var2.handleTapChannel = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77785: for (var _fun77785_ip = 0;;) switch (_fun77785_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 43;
                        var2 = var2[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.getNativeSyntheticEventData;
                        var2 = arg0;
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.data;
                        var5 = var2.guildId;
                        var4 = var2.channelId;
                        var3 = var2.messageId;
                        var6 = var2.originalLink;
                        var7 = _closure3_slot0;
                        var2 = var7.isModalOrActionsheetObstructing;
                        var2 = var2.bind(var7)();
                        if (var2) {
                            _fun77785_ip = 180;
                            continue _fun77785
                        }
                    case 85:
                        var2 = null;
                        if (!(var2 == var4)) {
                            _fun77785_ip = 95;
                            continue _fun77785
                        }
                    case 91:
                        if (!(var2 != var6)) {
                            _fun77785_ip = 180;
                            continue _fun77785
                        }
                    case 95:
                        if (!(var2 == var6)) {
                            _fun77785_ip = 132;
                            continue _fun77785
                        }
                    case 99:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var7 = 59;
                        var7 = var9[var7];
                        var8 = var8.bind(var0)(var7);
                        var7 = var8.getChannelPermalink;
                        var6 = var7.bind(var8)(var5, var4, var3);
                    case 132:
                        if (!(var2 != var6)) {
                            _fun77785_ip = 180;
                            continue _fun77785
                        }
                    case 136:
                        var2 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var1 = 60;
                        var1 = var7[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = {};
                        var1.urlString = var6;
                        var1.guildId = var5;
                        var1.channelId = var4;
                        var1.messageId = var3;
                        var1 = var2.bind(var0)(var1);
                    case 180:
                        return var0;
                }
            };
            var2.handleLongPressChannel = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77786: for (var _fun77786_ip = 0;;) switch (_fun77786_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var0 = var1.isModalOrActionsheetObstructing;
                        var0 = var0.bind(var1)();
                        if (var0) {
                            _fun77786_ip = 65;
                            continue _fun77786
                        }
                    case 20:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 61;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var2 = var0.contentHandlers;
                        var1 = var2.onTapAttachmentLink;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                    case 65:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleTapAttachmentLink = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77787: for (var _fun77787_ip = 0;;) switch (_fun77787_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var0 = var1.isModalOrActionsheetObstructing;
                        var0 = var0.bind(var1)();
                        if (var0) {
                            _fun77787_ip = 65;
                            continue _fun77787
                        }
                    case 20:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 61;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var2 = var0.contentHandlers;
                        var1 = var2.onLongPressAttachmentLink;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                    case 65:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleLongPressAttachmentLink = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77788: for (var _fun77788_ip = 0;;) switch (_fun77788_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 43;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.getNativeSyntheticEventData;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                        var1 = var1.data;
                        var6 = var1.channelId;
                        var5 = var1.messageId;
                        var2 = _closure1_slot23;
                        var1 = var2.getChannel;
                        var3 = var1.bind(var2)(var6);
                        var _closure4_slot0 = var3;
                        var1 = null;
                        var1 = var1 != var3;
                        if (!var1) {
                            _fun77788_ip = 93;
                            continue _fun77788
                        }
                    case 83:
                        var2 = var3.isPrivate;
                        var1 = var2.bind(var3)();
                    case 93:
                        if (!var1) {
                            _fun77788_ip = 390;
                            continue _fun77788
                        }
                    case 99:
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 62;
                        var1 = var7[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.checkIsCallActive;
                        var1 = var1.bind(var2)(var6, var5);
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        if (var1) {
                            _fun77788_ip = 367;
                            continue _fun77788
                        }
                    case 145:
                        var1 = 63;
                        var1 = var4[var1];
                        var6 = var2.bind(var0)(var1);
                        var5 = var6.showSimpleActionSheet;
                        var1 = {};
                        var7 = 'CallTap';
                        var1.key = var7;
                        var8 = {};
                        var10 = 64;
                        var7 = var4[var10];
                        var7 = var2.bind(var0)(var7);
                        var12 = var7.intl;
                        var11 = var12.string;
                        var7 = var4[var10];
                        var7 = var2.bind(var0)(var7);
                        var7 = var7.t;
                        var7 = var7.focH1t;
                        var7 = var11.bind(var12)(var7);
                        var8.label = var7;
                        var7 = 65;
                        var7 = var4[var7];
                        var7 = var2.bind(var0)(var7);
                        var7 = var7.PhoneCallIcon;
                        var8.IconComponent = var7;
                        var7 = function() {
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 55;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.handleStartCall;
                            var1 = _closure4_slot0;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var8.onPress = var7;
                        var7 = new Array(2);
                        var7[0] = var8;
                        var8 = {};
                        var11 = var4[var10];
                        var11 = var2.bind(var0)(var11);
                        var12 = var11.intl;
                        var11 = var12.string;
                        var10 = var4[var10];
                        var10 = var2.bind(var0)(var10);
                        var10 = var10.t;
                        var10 = var10.oCqlGG;
                        var10 = var11.bind(var12)(var10);
                        var8.label = var10;
                        var10 = 66;
                        var10 = var4[var10];
                        var10 = var2.bind(var0)(var10);
                        var10 = var10.VideoIcon;
                        var8.IconComponent = var10;
                        var9 = function() {
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 55;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.handleStartCall;
                            var2 = _closure4_slot0;
                            var1 = true;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                        };
                        var8.onPress = var9;
                        var7[1] = var8;
                        var1.options = var7;
                        var1 = var5.bind(var6)(var1);
                        _fun77788_ip = 390;
                        continue _fun77788;
                    case 367:
                        var1 = 55;
                        var1 = var4[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.handleJoinCall;
                        var1 = var1.bind(var2)(var3);
                    case 390:
                        return var0;
                }
            };
            var2.handleTapCall = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77791: for (var _fun77791_ip = 0;;) switch (_fun77791_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var0 = var1.isModalOrActionsheetObstructing;
                        var0 = var0.bind(var1)();
                        if (var0) {
                            _fun77791_ip = 65;
                            continue _fun77791
                        }
                    case 20:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 61;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var2 = var0.contentHandlers;
                        var1 = var2.onTapMention;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                    case 65:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleTapMention = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77792: for (var _fun77792_ip = 0;;) switch (_fun77792_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var0 = 43;
                        var1 = var3[var0];
                        var0 = undefined;
                        var6 = var2.bind(var0)(var1);
                        var5 = var6.getNativeSyntheticEventData;
                        var1 = arg0;
                        var1 = var5.bind(var6)(var1);
                        var8 = var1.channelId;
                        var5 = var1.commandName;
                        var _closure4_slot0 = var5;
                        var6 = var1.commandId;
                        var _closure4_slot1 = var6;
                        var7 = _closure3_slot0;
                        var1 = var7.getParams;
                        var1 = var1.bind(var7)();
                        var7 = var1.chatInputRef;
                        var _closure4_slot2 = var7;
                        var1 = 67;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.handleTapCommandMention;
                        var1 = {};
                        var1.channelId = var8;
                        var10 = var7.current;
                        var7 = null;
                        var9 = var7 == var10;
                        var8 = undefined;
                        if (var9) {
                            _fun77792_ip = 143;
                            continue _fun77792
                        }
                    case 133:
                        var9 = var10.getText;
                        var8 = var9.bind(var10)();
                    case 143:
                        var9 = var7 != var8;
                        var7 = '';
                        if (!var9) {
                            _fun77792_ip = 157;
                            continue _fun77792
                        }
                    case 154:
                        var7 = var8;
                    case 157:
                        var1.currentText = var7;
                        var1.commandId = var6;
                        var1.commandName = var5;
                        var5 = function arg0() {
                            _fun77793: for (var _fun77793_ip = 0;;) switch (_fun77793_ip) {
                                case 0:
                                    var0 = _closure4_slot2;
                                    var3 = var0.current;
                                    var0 = null;
                                    var1 = var0 == var3;
                                    var0 = undefined;
                                    if (var1) {
                                        _fun77793_ip = 37;
                                        continue _fun77793
                                    }
                                case 23:
                                    var2 = var3.openCustomKeyboard;
                                    var1 = arg0;
                                    var0 = var2.bind(var3)(var1);
                                case 37:
                                    return var0;
                            }
                        };
                        var1.onOpenCustomKeyboard = var5;
                        var4 = function() {
                            _fun77794: for (var _fun77794_ip = 0;;) switch (_fun77794_ip) {
                                case 0:
                                    var3 = _closure1_slot1;
                                    var4 = _closure1_slot3;
                                    var0 = 49;
                                    var2 = var4[var0];
                                    var0 = undefined;
                                    var5 = var3.bind(var0)(var2);
                                    var2 = var5.hideActionSheet;
                                    var2 = var2.bind(var5)();
                                    var2 = 68;
                                    var2 = var4[var2];
                                    var2 = var3.bind(var0)(var2);
                                    var2 = var2.bind(var0)();
                                    var3 = _closure4_slot2;
                                    var4 = var3.current;
                                    var6 = null;
                                    if (!(var6 != var4)) {
                                        _fun77794_ip = 79;
                                        continue _fun77794
                                    }
                                case 69:
                                    var3 = var4.openSystemKeyboard;
                                    var3 = var3.bind(var4)();
                                case 79:
                                    var3 = _closure4_slot2;
                                    var7 = var3.current;
                                    var3 = var6 == var7;
                                    var5 = var7;
                                    if (var3) {
                                        _fun77794_ip = 115;
                                        continue _fun77794
                                    }
                                case 98:
                                    var4 = var7.getApplicationCommandManager;
                                    var4 = var4.bind(var7)();
                                    var3 = var6 == var4;
                                    var5 = var4;
                                case 115:
                                    if (var3) {
                                        _fun77794_ip = 171;
                                        continue _fun77794
                                    }
                                case 118:
                                    var4 = var5.setPartialCommand;
                                    var3 = _closure4_slot1;
                                    var2 = _closure4_slot0;
                                    var6 = _closure1_slot0;
                                    var7 = _closure1_slot3;
                                    var1 = 69;
                                    var1 = var7[var1];
                                    var1 = var6.bind(var0)(var1);
                                    var1 = var1.ApplicationCommandTriggerLocations;
                                    var1 = var1.MENTION;
                                    var1 = var4.bind(var5)(var3, var2, var1);
                                case 171:
                                    return var0;
                            }
                        };
                        var1.onSetCommand = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                }
            };
            var2.handleTapCommandMention = var3;
            var3 = function(arg0) { // Environment: var1
                var0 = arg0;
                var0 = var0.nativeEvent;
                var4 = var0.commandName;
                var3 = var0.commandId;
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var0 = 67;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.handleLongPressCommandMention;
                var1 = var1.bind(var2)(var4, var3);
                return var0;
            };
            var2.handleLongPressCommandMention = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77796: for (var _fun77796_ip = 0;;) switch (_fun77796_ip) {
                    case 0:
                        var0 = arg0;
                        var4 = var0.url;
                        var6 = var0.node;
                        var0 = null;
                        if (!(var0 != var6)) {
                            _fun77796_ip = 59;
                            continue _fun77796
                        }
                    case 20:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var2 = 70;
                        var2 = var3[var2];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var2);
                        var2 = var5.isLinkTrusted;
                        var2 = var2.bind(var5)(var6);
                        if (var2) {
                            _fun77796_ip = 63;
                            continue _fun77796
                        }
                    case 59:
                        var2 = false;
                        return var2;
                    case 63:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var2 = 71;
                        var2 = var6[var2];
                        var2 = var5.bind(var3)(var2);
                        var2 = var2.bind(var3)(var4);
                        var2 = var2.payload;
                        var5 = var2.type;
                        var4 = _closure1_slot50;
                        var4 = var4.INVITE;
                        if (!(var5 === var4)) {
                            _fun77796_ip = 224;
                            continue _fun77796
                        }
                    case 113:
                        var4 = var2.inviteCode;
                        if (!(var0 != var4)) {
                            _fun77796_ip = 220;
                            continue _fun77796
                        }
                    case 123:
                        var5 = _closure1_slot28;
                        var4 = var5.getInvite;
                        var2 = var2.inviteCode;
                        var2 = var4.bind(var5)(var2);
                        var4 = var0 == var2;
                        if (var4) {
                            _fun77796_ip = 185;
                            continue _fun77796
                        }
                    case 151:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var0 = 72;
                        var0 = var6[var0];
                        var5 = var5.bind(var3)(var0);
                        var0 = var5.isGuildScheduledEventInviteEmbed;
                        var0 = var0.bind(var5)(var2);
                        var4 = !var0;
                    case 185:
                        var0 = !var4;
                        if (var4) {
                            _fun77796_ip = 218;
                            continue _fun77796
                        }
                    case 191:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var1 = 73;
                        var1 = var5[var1];
                        var1 = var4.bind(var3)(var1);
                        var1 = var1.bind(var3)(var2);
                        var0 = true;
                    case 218:
                        return var0;
                    case 220:
                        var0 = false;
                        return var0;
                    case 224:
                        var0 = false;
                        return var0;
                }
            };
            var2.handleTapGuildEventLink = var3;
            var3 = function(arg0) { // Environment: var1
                var0 = arg0;
                var0 = var0.nativeEvent;
                var _closure4_slot0 = var0;
                var3 = _closure3_slot0;
                var2 = var3.getMessageData;
                var0 = var0.data;
                var0 = var0.messageId;
                var0 = var2.bind(var3)(var0);
                var _closure4_slot1 = var0;
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 42;
                var3 = var2[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = 74;
                var3 = var2[var3];
                var2 = var2.paths;
                var3 = var4.bind(var0)(var3, var2);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var1
                    _fun77798: for (var _fun77798_ip = 0;;) switch (_fun77798_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.handleMessagesTapLink;
                            var1 = {};
                            var0 = false;
                            var1.allowWithinModal = var0;
                            var0 = _closure3_slot0;
                            var3 = var0.params;
                            var3 = var3.chatInputRef;
                            var1.chatInputRef = var3;
                            var0 = var0.handleTransitionToThread;
                            var1.handleTransitionToThread = var0;
                            var0 = _closure4_slot1;
                            var6 = null;
                            var7 = var6 == var0;
                            var0 = undefined;
                            var5 = undefined;
                            if (var7) {
                                _fun77798_ip = 82;
                                continue _fun77798
                            }
                        case 73:
                            var7 = _closure4_slot1;
                            var5 = var7.message;
                        case 82:
                            var1.message = var5;
                            var5 = _closure4_slot1;
                            var6 = var6 == var5;
                            var5 = undefined;
                            if (var6) {
                                _fun77798_ip = 109;
                                continue _fun77798
                            }
                        case 99:
                            var6 = _closure4_slot1;
                            var5 = var6.messageChannel;
                        case 109:
                            var1.messageChannel = var5;
                            var4 = _closure3_slot0;
                            var4 = var4.params;
                            var4 = var4.selectedChannelId;
                            var1.selectedChannelId = var4;
                            var3 = _closure4_slot0;
                            var1.tapLinkData = var3;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var2.handleTapLink = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77799: for (var _fun77799_ip = 0;;) switch (_fun77799_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var0 = var1.isModalOrActionsheetObstructing;
                        var0 = var0.bind(var1)();
                        if (var0) {
                            _fun77799_ip = 65;
                            continue _fun77799
                        }
                    case 20:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 61;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var2 = var0.contentHandlers;
                        var1 = var2.onLongPressLink;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                    case 65:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleLongPressLink = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77800: for (var _fun77800_ip = 0;;) switch (_fun77800_ip) {
                    case 0:
                        var1 = arg0;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var0 = 43;
                        var3 = var3[var0];
                        var0 = undefined;
                        var4 = var4.bind(var0)(var3);
                        var3 = var4.getNativeSyntheticEventData;
                        var3 = var3.bind(var4)(var1);
                        var9 = var3.reaction;
                        var7 = var3.messageId;
                        var6 = var3.isBurst;
                        var5 = _closure3_slot0;
                        var4 = var5.isModalOrActionsheetObstructing;
                        var4 = var4.bind(var5)();
                        if (var4) {
                            _fun77800_ip = 201;
                            continue _fun77800
                        }
                    case 79:
                        var4 = _closure3_slot0;
                        var3 = var4.getMessageData;
                        var3 = var3.bind(var4)(var7);
                        var5 = null;
                        if (!(var5 != var3)) {
                            _fun77800_ip = 201;
                            continue _fun77800
                        }
                    case 100:
                        var4 = var3.messageChannel;
                        var3 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var2 = 75;
                        var2 = var8[var2];
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.handleAddOrRemoveReaction;
                        var8 = var5 != var9;
                        var5 = null;
                        if (!var8) {
                            _fun77800_ip = 171;
                            continue _fun77800
                        }
                    case 141:
                        var8 = {};
                        var15 = var8;
                        var14 = var9;
                        var10 = copyDataProperties(var15, var14);
                        var10 = var9.emoji;
                        var9 = 'emoji';
                        var8[var9] = var10;
                        var5 = var8;
                    case 171:
                        var1 = var1.nativeEvent;
                        var11 = var1.location;
                        var16 = var3;
                        var15 = var7;
                        var14 = var4;
                        var13 = var5;
                        var12 = var6;
                        var1 = var16[var2](var15, var14, var13, var12, var11, var10);
                    case 201:
                        return var0;
                }
            };
            var2.handleTapReaction = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77801: for (var _fun77801_ip = 0;;) switch (_fun77801_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 43;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.getNativeSyntheticEventData;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                        var6 = var1.messageId;
                        var4 = var1.channelId;
                        var2 = _closure3_slot0;
                        var1 = var2.isModalOrActionsheetObstructing;
                        var1 = var1.bind(var2)();
                        if (var1) {
                            _fun77801_ip = 146;
                            continue _fun77801
                        }
                    case 69:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 76;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.handleViewReactions;
                        var1 = {};
                        var1.messageId = var6;
                        var1.channelId = var4;
                        var4 = {};
                        var6 = _closure1_slot44;
                        var6 = var6.CHANNEL;
                        var4.object = var6;
                        var5 = _closure1_slot45;
                        var5 = var5.REACTION_OVERFLOW;
                        var4.objectType = var5;
                        var1.location = var4;
                        var1 = var2.bind(var3)(var1);
                    case 146:
                        return var0;
                }
            };
            var2.handleTapReactionOverflow = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77802: for (var _fun77802_ip = 0;;) switch (_fun77802_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 43;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.getNativeSyntheticEventData;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                        var7 = var1.reaction;
                        var8 = var1.messageId;
                        var6 = var1.channelId;
                        var4 = var1.isBurst;
                        var2 = _closure3_slot0;
                        var1 = var2.isModalOrActionsheetObstructing;
                        var1 = var1.bind(var2)();
                        if (var1) {
                            _fun77802_ip = 183;
                            continue _fun77802
                        }
                    case 81:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 76;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.handleViewReactions;
                        var1 = {};
                        var1.messageId = var8;
                        var1.channelId = var6;
                        var6 = null;
                        var8 = var6 != var7;
                        if (!var8) {
                            _fun77802_ip = 132;
                            continue _fun77802
                        }
                    case 126:
                        var6 = var7.emoji;
                    case 132:
                        var1.emoji = var6;
                        var1.isSelectedBurst = var4;
                        var4 = {};
                        var6 = _closure1_slot44;
                        var6 = var6.CHANNEL;
                        var4.object = var6;
                        var5 = _closure1_slot45;
                        var5 = var5.REACTION;
                        var4.objectType = var5;
                        var1.location = var4;
                        var1 = var2.bind(var3)(var1);
                    case 183:
                        return var0;
                }
            };
            var2.handleLongPressReaction = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77803: for (var _fun77803_ip = 0;;) switch (_fun77803_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 43;
                        var2 = var2[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.getNativeSyntheticEventData;
                        var2 = arg0;
                        var2 = var3.bind(var4)(var2);
                        var6 = var2.sticker;
                        var5 = var2.messageId;
                        var3 = _closure3_slot0;
                        var2 = var3.getMessageData;
                        var5 = var2.bind(var3)(var5);
                        var2 = null;
                        if (!(var2 != var5)) {
                            _fun77803_ip = 143;
                            continue _fun77803
                        }
                    case 74:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 77;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.showStickerDetailActionSheet;
                        var1 = {};
                        var1.renderableSticker = var6;
                        var5 = var5.messageChannel;
                        var1.channel = var5;
                        var4 = _closure3_slot0;
                        var4 = var4.params;
                        var4 = var4.chatInputRef;
                        var1.chatInputRef = var4;
                        var1 = var2.bind(var3)(var1);
                    case 143:
                        return var0;
                }
            };
            var2.handleOpenSticker = var3;
            var3 = function(arg0) { // Environment: var1
                var4 = _closure3_slot0;
                var3 = var4.handleOpenProfile;
                var2 = _closure1_slot1;
                var1 = _closure1_slot3;
                var0 = 78;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var1 = var1.AVATAR;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = arg0;
                var1 = var3.bind(var4)(var1, var2);
                return var0;
            };
            var2.handleTapAvatar = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77805: for (var _fun77805_ip = 0;;) switch (_fun77805_ip) {
                    case 0:
                        var4 = arg0;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 79;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.isIOS;
                        var2 = var2.bind(var3)();
                        if (var2) {
                            _fun77805_ip = 413;
                            continue _fun77805
                        }
                    case 44:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var2 = 43;
                        var2 = var5[var2];
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.getNativeSyntheticEventData;
                        var2 = var2.bind(var3)(var4);
                        var7 = var2.userId;
                        var6 = var2.messageId;
                        var5 = _closure3_slot0;
                        var3 = var5.getMessageData;
                        var5 = var3.bind(var5)(var6);
                        var8 = null;
                        if (!(var8 != var5)) {
                            _fun77805_ip = 466;
                            continue _fun77805
                        }
                    case 112:
                        var3 = var5.message;
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot3;
                        var6 = 80;
                        var6 = var10[var6];
                        var6 = var9.bind(var0)(var6);
                        var6 = var6.bind(var0)(var3);
                        if (!var6) {
                            _fun77805_ip = 163;
                            continue _fun77805
                        }
                    case 145:
                        var3 = var3.messageReference;
                        var3 = var3.guild_id;
                        if (!(var8 == var3)) {
                            _fun77805_ip = 361;
                            continue _fun77805
                        }
                    case 163:
                        if (!(var8 != var7)) {
                            _fun77805_ip = 466;
                            continue _fun77805
                        }
                    case 170:
                        var6 = _closure1_slot36;
                        var3 = var6.getUser;
                        var10 = var3.bind(var6)(var7);
                        var6 = _closure3_slot0;
                        var3 = var6.getParams;
                        var3 = var3.bind(var6)();
                        var3 = var3.chatInputRef;
                        var9 = var5.messageChannel;
                        var5 = var9.isPrivate;
                        var7 = var5.bind(var9)();
                        var11 = _closure1_slot30;
                        var6 = var11.can;
                        var5 = _closure1_slot55;
                        var5 = var5.SEND_MESSAGES;
                        var6 = var6.bind(var11)(var5, var9);
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot3;
                        var5 = 81;
                        var5 = var12[var5];
                        var11 = var11.bind(var0)(var5);
                        var5 = var11.computeIsReadOnlyThread;
                        var5 = var5.bind(var11)(var9);
                        if (!(var0 !== var10)) {
                            _fun77805_ip = 466;
                            continue _fun77805
                        }
                    case 285:
                        if (var7) {
                            _fun77805_ip = 294;
                            continue _fun77805
                        }
                    case 288:
                        if (!var6) {
                            _fun77805_ip = 466;
                            continue _fun77805
                        }
                    case 294:
                        if (var5) {
                            _fun77805_ip = 466;
                            continue _fun77805
                        }
                    case 300:
                        var7 = var3.current;
                        if (!(var8 != var7)) {
                            _fun77805_ip = 466;
                            continue _fun77805
                        }
                    case 312:
                        var6 = var7.insertText;
                        var5 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var3 = 82;
                        var3 = var11[var3];
                        var5 = var5.bind(var0)(var3);
                        var3 = var5.getMentionTextWithUser;
                        var5 = var3.bind(var5)(var9, var10);
                        var3 = true;
                        var3 = var6.bind(var7)(var5, var8, var3);
                        _fun77805_ip = 466;
                        continue _fun77805;
                    case 361:
                        var5 = _closure3_slot0;
                        var3 = var5.handleOpenProfile;
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var2 = 78;
                        var2 = var7[var2];
                        var2 = var6.bind(var0)(var2);
                        var6 = var2.USERNAME;
                        var2 = new Array(1);
                        var2[0] = var6;
                        var2 = var3.bind(var5)(var4, var2);
                        _fun77805_ip = 466;
                        continue _fun77805;
                    case 413:
                        var3 = _closure3_slot0;
                        var2 = var3.handleOpenProfile;
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var1 = 78;
                        var1 = var6[var1];
                        var1 = var5.bind(var0)(var1);
                        var5 = var1.USERNAME;
                        var1 = new Array(1);
                        var1[0] = var5;
                        var1 = var2.bind(var3)(var4, var1);
                    case 466:
                        return var0;
                }
            };
            var2.handleTapUsername = var3;
            var3 = function(arg0) { // Environment: var1
                var4 = _closure3_slot0;
                var3 = var4.handleOpenProfile;
                var2 = _closure1_slot1;
                var1 = _closure1_slot3;
                var0 = 78;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var1 = var1.USERNAME;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = arg0;
                var1 = var3.bind(var4)(var1, var2);
                return var0;
            };
            var2.handleLongPressUsername = var3;
            var3 = function(arg0, arg1) { // Environment: var1
                _fun77807: for (var _fun77807_ip = 0;;) switch (_fun77807_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var0 = 43;
                        var0 = var3[var0];
                        var5 = undefined;
                        var3 = var2.bind(var5)(var0);
                        var2 = var3.getNativeSyntheticEventData;
                        var0 = arg0;
                        var0 = var2.bind(var3)(var0);
                        var4 = var0.messageId;
                        var9 = var0.userId;
                        var2 = _closure3_slot0;
                        var0 = var2.getMessageData;
                        var0 = var0.bind(var2)(var4);
                        var2 = null;
                        if (!(var2 != var0)) {
                            _fun77807_ip = 450;
                            continue _fun77807
                        }
                    case 76:
                        var6 = var0.messageChannel;
                        var0 = var0.message;
                        var7 = var2 != var9;
                        var3 = undefined;
                        if (!var7) {
                            _fun77807_ip = 111;
                            continue _fun77807
                        }
                    case 96:
                        var8 = _closure1_slot36;
                        var7 = var8.getUser;
                        var3 = var7.bind(var8)(var9);
                    case 111:
                        var8 = var3;
                        if (!(var2 != var4)) {
                            _fun77807_ip = 389;
                            continue _fun77807
                        }
                    case 121:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var7 = 83;
                        var7 = var10[var7];
                        var9 = var9.bind(var5)(var7);
                        var7 = var9.isPublicSystemMessage;
                        var7 = var7.bind(var9)(var0);
                        if (var7) {
                            _fun77807_ip = 670;
                            continue _fun77807
                        }
                    case 158:
                        var9 = var3;
                        if (!(var2 == var3)) {
                            _fun77807_ip = 191;
                            continue _fun77807
                        }
                    case 165:
                        var10 = _closure1_slot36;
                        var7 = var10.getUser;
                        var3 = var0.author;
                        var3 = var3.id;
                        var9 = var7.bind(var10)(var3);
                    case 191:
                        var7 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var11 = 80;
                        var3 = var3[var11];
                        var3 = var7.bind(var5)(var3);
                        var3 = var3.bind(var5)(var0);
                        if (!var3) {
                            _fun77807_ip = 237;
                            continue _fun77807
                        }
                    case 219:
                        var3 = var0.messageReference;
                        var7 = var3.guild_id;
                        if (!(var2 == var7)) {
                            _fun77807_ip = 569;
                            continue _fun77807
                        }
                    case 237:
                        var10 = var0.type;
                        var3 = _closure1_slot54;
                        var3 = var3.THREAD_STARTER_MESSAGE;
                        var8 = var9;
                        if (!(var10 === var3)) {
                            _fun77807_ip = 389;
                            continue _fun77807
                        }
                    case 262:
                        var3 = var0.messageReference;
                        var8 = var9;
                        if (!(var2 != var3)) {
                            _fun77807_ip = 389;
                            continue _fun77807
                        }
                    case 275:
                        var10 = var0.messageReference;
                        var3 = _closure1_slot17;
                        var0 = var3.getMessageByReference;
                        var0 = var0.bind(var3)(var10);
                        var8 = var9;
                        if (!(var2 != var0)) {
                            _fun77807_ip = 389;
                            continue _fun77807
                        }
                    case 303:
                        var3 = var0.message;
                        var8 = var9;
                        if (!(var2 != var3)) {
                            _fun77807_ip = 389;
                            continue _fun77807
                        }
                    case 315:
                        var10 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var3 = var3[var11];
                        var10 = var10.bind(var5)(var3);
                        var3 = var0.message;
                        var3 = var10.bind(var5)(var3);
                        var8 = var9;
                        if (!var3) {
                            _fun77807_ip = 389;
                            continue _fun77807
                        }
                    case 348:
                        var3 = var0.message;
                        var3 = var3.messageReference;
                        var8 = var9;
                        if (!(var2 != var3)) {
                            _fun77807_ip = 389;
                            continue _fun77807
                        }
                    case 366:
                        var3 = var0.message;
                        var3 = var3.messageReference;
                        var3 = var3.guild_id;
                        var8 = var9;
                        if (!(var2 == var3)) {
                            _fun77807_ip = 452;
                            continue _fun77807
                        }
                    case 389:
                        if (!(var2 != var8)) {
                            _fun77807_ip = 450;
                            continue _fun77807
                        }
                    case 393:
                        var3 = _closure1_slot1;
                        var9 = _closure1_slot3;
                        var2 = 86;
                        var2 = var9[var2];
                        var3 = var3.bind(var5)(var2);
                        var2 = {};
                        var8 = var8.id;
                        var2.userId = var8;
                        var6 = var6.id;
                        var2.channelId = var6;
                        var2.messageId = var4;
                        var4 = arg1;
                        var2.sourceAnalyticsLocations = var4;
                        var2 = var3.bind(var5)(var2);
                    case 450:
                        return var5;
                    case 452:
                        var0 = var0.message;
                        var0 = var0.messageReference;
                        var8 = var0.guild_id;
                        var3 = _closure1_slot1;
                        var0 = _closure1_slot3;
                        var2 = 49;
                        var2 = var0[var2];
                        var6 = var3.bind(var5)(var2);
                        var4 = var6.openLazy;
                        var3 = _closure1_slot0;
                        var2 = 42;
                        var2 = var0[var2];
                        var3 = var3.bind(var5)(var2);
                        var2 = 85;
                        var2 = var0[var2];
                        var0 = var0.paths;
                        var3 = var3.bind(var5)(var2, var0);
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var2 = var0.concat;
                        var0 = 'GuildProfileActionSheet:';
                        var2 = var2.bind(var0)(var8);
                        var0 = {};
                        var0.guildId = var8;
                        var0 = var4.bind(var6)(var3, var2, var0);
                        var0 = undefined;
                        return var0;
                    case 569:
                        var3 = _closure1_slot1;
                        var0 = _closure1_slot3;
                        var2 = 49;
                        var2 = var0[var2];
                        var6 = var3.bind(var5)(var2);
                        var4 = var6.openLazy;
                        var3 = _closure1_slot0;
                        var2 = 42;
                        var2 = var0[var2];
                        var3 = var3.bind(var5)(var2);
                        var2 = 85;
                        var2 = var0[var2];
                        var0 = var0.paths;
                        var3 = var3.bind(var5)(var2, var0);
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var2 = var0.concat;
                        var0 = 'GuildProfileActionSheet:';
                        var2 = var2.bind(var0)(var7);
                        var0 = {};
                        var0.guildId = var7;
                        var0 = var4.bind(var6)(var3, var2, var0);
                        var0 = undefined;
                        return var0;
                    case 670:
                        var3 = _closure1_slot1;
                        var0 = _closure1_slot3;
                        var2 = 49;
                        var2 = var0[var2];
                        var3 = var3.bind(var5)(var2);
                        var2 = var3.openLazy;
                        var4 = _closure1_slot0;
                        var1 = 42;
                        var1 = var0[var1];
                        var4 = var4.bind(var5)(var1);
                        var1 = 84;
                        var1 = var0[var1];
                        var0 = var0.paths;
                        var1 = var4.bind(var5)(var1, var0);
                        var0 = 'PublicGuildAnnouncementProfile';
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleOpenProfile = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77808: for (var _fun77808_ip = 0;;) switch (_fun77808_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 43;
                        var2 = var2[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.getNativeSyntheticEventData;
                        var2 = arg0;
                        var2 = var3.bind(var4)(var2);
                        var7 = var2.messageId;
                        var4 = _closure3_slot0;
                        var3 = var4.getMessageData;
                        var4 = var3.bind(var4)(var7);
                        var3 = null;
                        if (!(var3 != var4)) {
                            _fun77808_ip = 192;
                            continue _fun77808
                        }
                    case 71:
                        var5 = var4.messageChannel;
                        var4 = var5.getGuildId;
                        var5 = var4.bind(var5)();
                        if (!(var3 != var7)) {
                            _fun77808_ip = 192;
                            continue _fun77808
                        }
                    case 91:
                        if (!(var3 != var5)) {
                            _fun77808_ip = 192;
                            continue _fun77808
                        }
                    case 95:
                        var6 = _closure3_slot0;
                        var4 = var6.getParams;
                        var4 = var4.bind(var6)();
                        var4 = var4.chatInputRef;
                        var4 = var4.current;
                        if (!(var3 != var4)) {
                            _fun77808_ip = 134;
                            continue _fun77808
                        }
                    case 124:
                        var3 = var4.blur;
                        var3 = var3.bind(var4)();
                    case 134:
                        var4 = _closure3_slot0;
                        var3 = var4.handleTransitionToThread;
                        var6 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var2 = 87;
                        var2 = var8[var2];
                        var6 = var6.bind(var0)(var2);
                        var2 = var6.castMessageIdAsChannelId;
                        var2 = var2.bind(var6)(var7);
                        var1 = _closure1_slot68;
                        var1 = var1.EMBED;
                        var1 = var3.bind(var4)(var5, var2, var1);
                    case 192:
                        return var0;
                }
            };
            var2.handleTapThreadEmbed = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77809: for (var _fun77809_ip = 0;;) switch (_fun77809_ip) {
                    case 0:
                        var0 = arg0;
                        var0 = var0.nativeEvent;
                        var3 = var0.originId;
                        var2 = _closure3_slot0;
                        var0 = var2.getMessageData;
                        var3 = var0.bind(var2)(var3);
                        var2 = null;
                        if (!(var2 != var3)) {
                            _fun77809_ip = 120;
                            continue _fun77809
                        }
                    case 41:
                        var0 = var3.messageChannel;
                        var3 = var3.message;
                        var4 = var0.getGuildId;
                        var4 = var4.bind(var0)();
                        if (!(var2 == var4)) {
                            _fun77809_ip = 73;
                            continue _fun77809
                        }
                    case 66:
                        var4 = _closure1_slot51;
                    case 73:
                        var5 = var3.messageReference;
                        var6 = var2 == var5;
                        var3 = undefined;
                        if (var6) {
                            _fun77809_ip = 94;
                            continue _fun77809
                        }
                    case 88:
                        var3 = var5.message_id;
                    case 94:
                        if (!(var2 != var3)) {
                            _fun77809_ip = 120;
                            continue _fun77809
                        }
                    case 98:
                        var2 = _closure3_slot0;
                        var1 = var2.handleTransitionToMessage;
                        var0 = var0.id;
                        var0 = var1.bind(var2)(var4, var0, var3);
                    case 120:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleTapReply = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77810: for (var _fun77810_ip = 0;;) switch (_fun77810_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 43;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var2 = var4.getNativeSyntheticEventData;
                        var1 = arg0;
                        var1 = var2.bind(var4)(var1);
                        var6 = var1.channelId;
                        var4 = var1.messageId;
                        var5 = var1.summaryId;
                        var2 = _closure3_slot0;
                        var1 = var2.getMessageData;
                        var1 = var1.bind(var2)(var4);
                        var2 = null;
                        if (!(var2 != var1)) {
                            _fun77810_ip = 179;
                            continue _fun77810
                        }
                    case 79:
                        var4 = _closure1_slot18;
                        var1 = var4.findSummary;
                        var1 = var1.bind(var4)(var6, var5);
                        if (!(var2 != var1)) {
                            _fun77810_ip = 179;
                            continue _fun77810
                        }
                    case 99:
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var4 = 49;
                        var4 = var2[var4];
                        var5 = var5.bind(var0)(var4);
                        var4 = var5.openLazy;
                        var6 = _closure1_slot0;
                        var3 = 42;
                        var3 = var2[var3];
                        var6 = var6.bind(var0)(var3);
                        var3 = 88;
                        var3 = var2[var3];
                        var2 = var2.paths;
                        var3 = var6.bind(var0)(var3, var2);
                        var2 = {};
                        var2.summary = var1;
                        var1 = 'SummaryActionSheet';
                        var1 = var4.bind(var5)(var3, var1, var2);
                    case 179:
                        return var0;
                }
            };
            var2.handleTapSummary = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77811: for (var _fun77811_ip = 0;;) switch (_fun77811_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 43;
                        var2 = var2[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.getNativeSyntheticEventData;
                        var2 = arg0;
                        var2 = var3.bind(var4)(var2);
                        var7 = var2.messageId;
                        var4 = var2.channelId;
                        var3 = var2.summaryId;
                        var5 = _closure3_slot0;
                        var2 = var5.getMessageData;
                        var2 = var2.bind(var5)(var7);
                        var7 = null;
                        if (!(var7 != var2)) {
                            _fun77811_ip = 167;
                            continue _fun77811
                        }
                    case 79:
                        var5 = var2.messageChannel;
                        var2 = var2.message;
                        var8 = var5.getGuildId;
                        var8 = var8.bind(var5)();
                        if (!(var7 == var8)) {
                            _fun77811_ip = 108;
                            continue _fun77811
                        }
                    case 104:
                        var8 = _closure1_slot51;
                    case 108:
                        var7 = _closure3_slot0;
                        var6 = var7.handleTransitionToMessage;
                        var5 = var5.id;
                        var2 = var2.id;
                        var2 = var6.bind(var7)(var8, var5, var2);
                        var2 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var1 = 89;
                        var1 = var5[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.setSelectedSummary;
                        var1 = var1.bind(var2)(var4, var3);
                    case 167:
                        return var0;
                }
            };
            var2.handleTapSummaryJump = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77812: for (var _fun77812_ip = 0;;) switch (_fun77812_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 43;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.getNativeSyntheticEventData;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                        var3 = var1.messageId;
                        var14 = var1.mediaIndex;
                        var13 = var1.mediaType;
                        var16 = var1.componentId;
                        var11 = var1.componentMediaIndex;
                        var2 = _closure3_slot0;
                        var1 = var2.getMessageData;
                        var1 = var1.bind(var2)(var3);
                        var5 = null;
                        if (!(var5 != var1)) {
                            _fun77812_ip = 424;
                            continue _fun77812
                        }
                    case 95:
                        var9 = var1.messageChannel;
                        var7 = var1.message;
                        var2 = _closure3_slot0;
                        var1 = var2.isModalOrActionsheetObstructing;
                        var1 = var1.bind(var2)();
                        if (var1) {
                            _fun77812_ip = 424;
                            continue _fun77812
                        }
                    case 126:
                        var4 = _closure1_slot36;
                        var2 = var4.getUser;
                        var1 = var7.author;
                        var1 = var1.id;
                        var4 = var2.bind(var4)(var1);
                        if (!(var5 == var4)) {
                            _fun77812_ip = 178;
                            continue _fun77812
                        }
                    case 156:
                        var2 = var7.state;
                        var1 = _closure1_slot53;
                        var1 = var1.SEND_FAILED;
                        if (!(var2 === var1)) {
                            _fun77812_ip = 424;
                            continue _fun77812
                        }
                    case 178:
                        var2 = _closure1_slot35;
                        var1 = var2.getUploaderFileForMessageId;
                        var1 = var1.bind(var2)(var3);
                        if (!(var5 != var1)) {
                            _fun77812_ip = 219;
                            continue _fun77812
                        }
                    case 197:
                        var2 = var7.state;
                        var1 = _closure1_slot53;
                        var1 = var1.SEND_FAILED;
                        if (!(var2 === var1)) {
                            _fun77812_ip = 424;
                            continue _fun77812
                        }
                    case 219:
                        var2 = _closure1_slot0;
                        var12 = _closure1_slot3;
                        var1 = 75;
                        var1 = var12[var1];
                        var6 = var2.bind(var0)(var1);
                        var3 = var6.getLongPressSelectedMedia;
                        var1 = 90;
                        var1 = var12[var1];
                        var15 = var2.bind(var0)(var1);
                        var1 = var15.asComponentId;
                        var18 = var1.bind(var15)(var16);
                        var22 = var6;
                        var21 = var7;
                        var20 = var14;
                        var19 = var13;
                        var17 = var11;
                        var6 = var22[var3](var21, var20, var19, var18, var17, var16);
                        var1 = 91;
                        var1 = var12[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.showLongPressMessageActionSheet;
                        var1 = {};
                        var11 = {};
                        var13 = _closure1_slot47;
                        var13 = var13.CHANNEL;
                        var11.section = var13;
                        var13 = _closure1_slot44;
                        var13 = var13.MESSAGE;
                        var11.object = var13;
                        var1.analyticsLocation = var11;
                        var11 = _closure1_slot1;
                        var10 = 92;
                        var10 = var12[var10];
                        var10 = var11.bind(var0)(var10);
                        var10 = var10.bind(var0)(var9);
                        var1.canAddNewReactions = var10;
                        var1.channel = var9;
                        var8 = _closure3_slot0;
                        var8 = var8.params;
                        var8 = var8.chatInputRef;
                        var1.chatInputRef = var8;
                        var1.message = var7;
                        var7 = var5 != var6;
                        var5 = undefined;
                        if (!var7) {
                            _fun77812_ip = 410;
                            continue _fun77812
                        }
                    case 407:
                        var5 = var6;
                    case 410:
                        var1.selectedMedia = var5;
                        var1.user = var4;
                        var1 = var2.bind(var3)(var1);
                    case 424:
                        return var0;
                }
            };
            var2.handleLongPressMessage = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77813: for (var _fun77813_ip = 0;;) switch (_fun77813_ip) {
                    case 0:
                        var4 = arg0;
                        var6 = _closure3_slot0;
                        var0 = var6.params;
                        var5 = var0.chatInputRef;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 43;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.getNativeSyntheticEventData;
                        var2 = var2.bind(var3)(var4);
                        var3 = var2.messageId;
                        var2 = var6.getMessageData;
                        var2 = var2.bind(var6)(var3);
                        var3 = null;
                        if (!(var3 != var2)) {
                            _fun77813_ip = 241;
                            continue _fun77813
                        }
                    case 83:
                        var6 = var2.messageChannel;
                        var7 = var2.message;
                        var2 = var4.nativeEvent;
                        var2 = var2.triggerHaptic;
                        if (!var2) {
                            _fun77813_ip = 162;
                            continue _fun77813
                        }
                    case 109:
                        var8 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var2 = 93;
                        var2 = var11[var2];
                        var9 = var8.bind(var0)(var2);
                        var8 = var9.triggerHapticFeedback;
                        var10 = _closure1_slot1;
                        var2 = 94;
                        var2 = var11[var2];
                        var2 = var10.bind(var0)(var2);
                        var2 = var2.IMPACT_LIGHT;
                        var2 = var8.bind(var9)(var2);
                    case 162:
                        var2 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var1 = 95;
                        var1 = var8[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = {};
                        var1.message = var7;
                        var1.channel = var6;
                        var1.chatInputRef = var5;
                        var4 = var4.nativeEvent;
                        var4 = var4.location;
                        var5 = var3 != var4;
                        var3 = 'message_swipe';
                        if (!var5) {
                            _fun77813_ip = 224;
                            continue _fun77813
                        }
                    case 221:
                        var3 = var4;
                    case 224:
                        var1.actionSource = var3;
                        var3 = true;
                        var1.invertible = var3;
                        var1 = var2.bind(var0)(var1);
                    case 241:
                        return var0;
                }
            };
            var2.handleInitiateReply = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77814: for (var _fun77814_ip = 0;;) switch (_fun77814_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 43;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.getNativeSyntheticEventData;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                        var3 = var1.messageId;
                        var2 = _closure3_slot0;
                        var1 = var2.getMessageData;
                        var1 = var1.bind(var2)(var3);
                        var2 = null;
                        if (!(var2 != var1)) {
                            _fun77814_ip = 261;
                            continue _fun77814
                        }
                    case 71:
                        var2 = var1.messageChannel;
                        var1 = var1.message;
                        var4 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var3 = 93;
                        var3 = var8[var3];
                        var6 = var4.bind(var0)(var3);
                        var4 = var6.triggerHapticFeedback;
                        var7 = _closure1_slot1;
                        var3 = 94;
                        var3 = var8[var3];
                        var3 = var7.bind(var0)(var3);
                        var3 = var3.IMPACT_LIGHT;
                        var3 = var4.bind(var6)(var3);
                        var4 = var1.hasFlag;
                        var3 = _closure1_slot52;
                        var3 = var3.HAS_THREAD;
                        var3 = var4.bind(var1)(var3);
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        if (var3) {
                            _fun77814_ip = 200;
                            continue _fun77814
                        }
                    case 167:
                        var3 = 96;
                        var3 = var7[var3];
                        var8 = var4.bind(var0)(var3);
                        var6 = var8.handleCreateThread;
                        var3 = 'Message Shortcut';
                        var3 = var6.bind(var8)(var2, var1, var3);
                        _fun77814_ip = 261;
                        continue _fun77814;
                    case 200:
                        var3 = 48;
                        var3 = var7[var3];
                        var4 = var4.bind(var0)(var3);
                        var3 = var4.transitionToGuild;
                        var2 = var2.guild_id;
                        var6 = _closure1_slot1;
                        var5 = 87;
                        var5 = var7[var5];
                        var6 = var6.bind(var0)(var5);
                        var5 = var6.castMessageIdAsChannelId;
                        var1 = var1.id;
                        var1 = var5.bind(var6)(var1);
                        var1 = var3.bind(var4)(var2, var1);
                    case 261:
                        return var0;
                }
            };
            var2.handleInitiateThread = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77815: for (var _fun77815_ip = 0;;) switch (_fun77815_ip) {
                    case 0:
                        var4 = _closure3_slot0;
                        var0 = var4.params;
                        var7 = var0.chatInputRef;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 43;
                        var2 = var2[var0];
                        var0 = undefined;
                        var5 = var3.bind(var0)(var2);
                        var3 = var5.getNativeSyntheticEventData;
                        var2 = arg0;
                        var2 = var3.bind(var5)(var2);
                        var3 = var2.messageId;
                        var2 = var4.getMessageData;
                        var3 = var2.bind(var4)(var3);
                        var2 = null;
                        if (!(var2 != var3)) {
                            _fun77815_ip = 197;
                            continue _fun77815
                        }
                    case 80:
                        var6 = var3.messageChannel;
                        var5 = var3.message;
                        var4 = _closure1_slot36;
                        var3 = var4.getCurrentUser;
                        var4 = var3.bind(var4)();
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot3;
                        var3 = 97;
                        var3 = var9[var3];
                        var3 = var8.bind(var0)(var3);
                        var8 = var2 == var4;
                        var2 = undefined;
                        if (var8) {
                            _fun77815_ip = 138;
                            continue _fun77815
                        }
                    case 133:
                        var2 = var4.id;
                    case 138:
                        var2 = var3.bind(var0)(var5, var2);
                        if (!var2) {
                            _fun77815_ip = 197;
                            continue _fun77815
                        }
                    case 147:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 96;
                        var1 = var3[var1];
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.handleEdit;
                        var11 = 'message_swipe';
                        var10 = true;
                        var15 = var4;
                        var14 = var5;
                        var13 = var6;
                        var12 = var7;
                        var1 = var15[var3](var14, var13, var12, var11, var10, var9);
                    case 197:
                        return var0;
                }
            };
            var2.handleInitiateEdit = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77816: for (var _fun77816_ip = 0;;) switch (_fun77816_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 43;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.getNativeSyntheticEventData;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                        var4 = var1.messageId;
                        var3 = _closure3_slot0;
                        var1 = var3.getMessageData;
                        var3 = var1.bind(var3)(var4);
                        var1 = null;
                        if (!(var1 != var3)) {
                            _fun77816_ip = 429;
                            continue _fun77816
                        }
                    case 71:
                        var4 = var3.messageChannel;
                        var7 = var3.message;
                        var3 = var4.getGuildId;
                        var4 = var3.bind(var4)();
                        if (!(var1 != var7)) {
                            _fun77816_ip = 429;
                            continue _fun77816
                        }
                    case 99:
                        if (!(var1 != var4)) {
                            _fun77816_ip = 429;
                            continue _fun77816
                        }
                    case 106:
                        var5 = var7.type;
                        var3 = _closure1_slot54;
                        var3 = var3.GUILD_BOOST;
                        if (!(var3 !== var5)) {
                            _fun77816_ip = 323;
                            continue _fun77816
                        }
                    case 128:
                        var3 = _closure1_slot54;
                        var3 = var3.GUILD_BOOST_TIER_1;
                        if (!(var3 !== var5)) {
                            _fun77816_ip = 323;
                            continue _fun77816
                        }
                    case 145:
                        var3 = _closure1_slot54;
                        var3 = var3.GUILD_BOOST_TIER_2;
                        if (!(var3 !== var5)) {
                            _fun77816_ip = 323;
                            continue _fun77816
                        }
                    case 162:
                        var3 = _closure1_slot54;
                        var3 = var3.GUILD_BOOST_TIER_3;
                        if (!(var3 !== var5)) {
                            _fun77816_ip = 323;
                            continue _fun77816
                        }
                    case 179:
                        var3 = _closure1_slot54;
                        var3 = var3.AUTO_MODERATION_ACTION;
                        if (!(var3 === var5)) {
                            _fun77816_ip = 429;
                            continue _fun77816
                        }
                    case 196:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var8 = 100;
                        var3 = var3[var8];
                        var5 = var5.bind(var0)(var3);
                        var3 = var5.isAutomodMessageRecord;
                        var3 = var3.bind(var5)(var7);
                        if (!var3) {
                            _fun77816_ip = 429;
                            continue _fun77816
                        }
                    case 233:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var3 = var3[var8];
                        var5 = var5.bind(var0)(var3);
                        var3 = var5.extractAutomodMessageFields;
                        var3 = var3.bind(var5)(var7);
                        var7 = var3.embedChannel;
                        var5 = var3.flaggedMessageId;
                        var3 = var1 != var5;
                        if (!var3) {
                            _fun77816_ip = 284;
                            continue _fun77816
                        }
                    case 280:
                        var3 = var1 != var7;
                    case 284:
                        if (!var3) {
                            _fun77816_ip = 429;
                            continue _fun77816
                        }
                    case 290:
                        var3 = _closure3_slot0;
                        var2 = var3.handleTransitionToMessage;
                        var8 = var1 == var7;
                        var1 = undefined;
                        if (var8) {
                            _fun77816_ip = 314;
                            continue _fun77816
                        }
                    case 309:
                        var1 = var7.id;
                    case 314:
                        var1 = var2.bind(var3)(var4, var1, var5);
                        _fun77816_ip = 429;
                        continue _fun77816;
                    case 323:
                        var2 = _closure1_slot2;
                        var3 = _closure1_slot3;
                        var1 = 98;
                        var1 = var3[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.openApplyBoostModal;
                        var1 = var1.bind(var2)(var4);
                        var2 = _closure1_slot1;
                        var1 = 99;
                        var1 = var3[var1];
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.trackWithMetadata;
                        var1 = _closure1_slot41;
                        var2 = var1.PREMIUM_GUILD_PROMOTION_OPENED;
                        var1 = {};
                        var5 = {};
                        var7 = _closure1_slot47;
                        var7 = var7.CHANNEL_TEXT_AREA;
                        var5.section = var7;
                        var6 = _closure1_slot44;
                        var6 = var6.BOOST_ANNOUNCEMENT_UPSELL;
                        var5.object = var6;
                        var1.location = var5;
                        var1 = var3.bind(var4)(var2, var1);
                    case 429:
                        return var0;
                }
            };
            var2.handleTapMessage = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77817: for (var _fun77817_ip = 0;;) switch (_fun77817_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 43;
                        var2 = var2[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.getNativeSyntheticEventData;
                        var2 = arg0;
                        var2 = var3.bind(var4)(var2);
                        var4 = var2.messageId;
                        var3 = _closure3_slot0;
                        var2 = var3.getMessageData;
                        var2 = var2.bind(var3)(var4);
                        var3 = null;
                        if (!(var3 != var2)) {
                            _fun77817_ip = 111;
                            continue _fun77817
                        }
                    case 68:
                        var4 = var2.messageChannel;
                        var3 = var2.message;
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var1 = 101;
                        var1 = var5[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.handleAddDefaultDoubleTapReaction;
                        var1 = var1.bind(var2)(var3, var4);
                    case 111:
                        return var0;
                }
            };
            var2.handleDoubleTapMessage = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77818: for (var _fun77818_ip = 0;;) switch (_fun77818_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0.nativeEvent;
                        var3 = _closure3_slot0;
                        var2 = var3.isModalOrActionsheetObstructing;
                        var2 = var2.bind(var3)();
                        if (var2) {
                            _fun77818_ip = 157;
                            continue _fun77818
                        }
                    case 32:
                        var3 = var1.type;
                        var4 = _closure1_slot37;
                        var4 = var4.LOAD_MORE_BEFORE;
                        if (!(var4 !== var3)) {
                            _fun77818_ip = 137;
                            continue _fun77818
                        }
                    case 54:
                        var4 = _closure1_slot37;
                        var4 = var4.LOAD_MORE_AFTER;
                        if (!(var4 !== var3)) {
                            _fun77818_ip = 115;
                            continue _fun77818
                        }
                    case 68:
                        var2 = _closure1_slot37;
                        var2 = var2.TOGGLE_BLOCKED_MESSAGES;
                        if (!(var2 === var3)) {
                            _fun77818_ip = 157;
                            continue _fun77818
                        }
                    case 82:
                        var3 = var1.context;
                        var2 = null;
                        if (!(var2 != var3)) {
                            _fun77818_ip = 157;
                            continue _fun77818
                        }
                    case 93:
                        var3 = _closure3_slot0;
                        var2 = var3.handleReveal;
                        var1 = var1.context;
                        var1 = var2.bind(var3)(var1);
                        _fun77818_ip = 157;
                        continue _fun77818;
                    case 115:
                        var1 = _closure3_slot0;
                        var2 = var1.params;
                        var1 = var2.loadMoreAfter;
                        var1 = var1.bind(var2)();
                        _fun77818_ip = 157;
                        continue _fun77818;
                    case 137:
                        var0 = _closure3_slot0;
                        var1 = var0.params;
                        var0 = var1.loadMoreBefore;
                        var0 = var0.bind(var1)();
                    case 157:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleTapSeparator = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77819: for (var _fun77819_ip = 0;;) switch (_fun77819_ip) {
                    case 0:
                        var0 = arg0;
                        var0 = var0.nativeEvent;
                        var2 = var0.uploaderId;
                        var _closure4_slot0 = var2;
                        var3 = var0.itemId;
                        var0 = _closure3_slot0;
                        var0 = var0.params;
                        var4 = var0.uploads;
                        var0 = null;
                        if (!(var0 != var4)) {
                            _fun77819_ip = 155;
                            continue _fun77819
                        }
                    case 52:
                        var2 = var4.find;
                        var1 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var1 = var0.id;
                            var0 = _closure4_slot0;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var2 = var2.bind(var4)(var1);
                        if (!(var0 != var2)) {
                            _fun77819_ip = 155;
                            continue _fun77819
                        }
                    case 73:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var1 = 93;
                        var1 = var5[var1];
                        var4 = undefined;
                        var7 = var6.bind(var4)(var1);
                        var6 = var7.triggerHapticFeedback;
                        var1 = _closure1_slot1;
                        var0 = 94;
                        var0 = var5[var0];
                        var0 = var1.bind(var4)(var0);
                        var0 = var0.IMPACT_LIGHT;
                        var0 = var6.bind(var7)(var0);
                        var0 = 102;
                        var0 = var5[var0];
                        var1 = var1.bind(var4)(var0);
                        var0 = var1.cancelUploadItem;
                        var0 = var0.bind(var1)(var2, var3);
                    case 155:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleTapCancelUploadItem = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77821: for (var _fun77821_ip = 0;;) switch (_fun77821_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0.author;
                        var2 = null;
                        if (!(var2 != var1)) {
                            _fun77821_ip = 90;
                            continue _fun77821
                        }
                    case 15:
                        var0 = var1.id;
                        if (!(var2 != var0)) {
                            _fun77821_ip = 90;
                            continue _fun77821
                        }
                    case 24:
                        var4 = _closure1_slot31;
                        var3 = var4.findActivity;
                        var2 = var1.id;
                        var1 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var1 = var0.type;
                            var0 = _closure1_slot40;
                            var0 = var0.LISTENING;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var2 = var3.bind(var4)(var2, var1);
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 103;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var3.bind(var0)(var1);
                        var0 = var1.openTrack;
                        var0 = var0.bind(var1)(var2);
                    case 90:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleTapSpotifyResource = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77823: for (var _fun77823_ip = 0;;) switch (_fun77823_ip) {
                    case 0:
                        var5 = arg0;
                        var18 = var5.author;
                        var0 = var5.activity;
                        var16 = var5.application;
                        var7 = null;
                        if (!(var7 != var18)) {
                            _fun77823_ip = 734;
                            continue _fun77823
                        }
                    case 29:
                        if (!(var7 != var0)) {
                            _fun77823_ip = 734;
                            continue _fun77823
                        }
                    case 36:
                        if (!(var7 != var16)) {
                            _fun77823_ip = 734;
                            continue _fun77823
                        }
                    case 43:
                        var0 = var18.id;
                        if (!(var7 != var0)) {
                            _fun77823_ip = 734;
                            continue _fun77823
                        }
                    case 55:
                        var10 = var5.channel_id;
                        var1 = _closure1_slot23;
                        var0 = var1.getChannel;
                        var12 = var0.bind(var1)(var10);
                        var9 = var16.id;
                        var13 = var16.deeplink_uri;
                        var2 = _closure1_slot31;
                        var1 = var2.getApplicationActivity;
                        var0 = var18.id;
                        var8 = var1.bind(var2)(var0, var9);
                        if (!(var7 == var8)) {
                            _fun77823_ip = 313;
                            continue _fun77823
                        }
                    case 116:
                        if (!(var7 != var13)) {
                            _fun77823_ip = 734;
                            continue _fun77823
                        }
                    case 123:
                        var1 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var0 = 108;
                        var0 = var3[var0];
                        var2 = undefined;
                        var11 = var1.bind(var2)(var0);
                        var6 = var11.openURL;
                        var0 = _closure1_slot59;
                        var0 = var0.SAFARI;
                        var0 = var6.bind(var11)(var13, var0);
                        var0 = 107;
                        var0 = var3[var0];
                        var1 = var1.bind(var2)(var0);
                        var0 = {};
                        var3 = _closure1_slot42;
                        var3 = var3.PLAY;
                        var0.type = var3;
                        var3 = _closure1_slot43;
                        var3 = var3.MESSAGE_EMBED;
                        var0.source = var3;
                        var3 = var5.author;
                        var3 = var3.id;
                        var0.userId = var3;
                        var6 = var7 == var12;
                        var3 = undefined;
                        if (var6) {
                            _fun77823_ip = 238;
                            continue _fun77823
                        }
                    case 233:
                        var3 = var12.guild_id;
                    case 238:
                        var0.guildId = var3;
                        var0.channelId = var10;
                        var3 = var16.id;
                        var0.applicationId = var3;
                        var3 = var5.id;
                        var0.messageId = var3;
                        var6 = _closure1_slot1;
                        var11 = _closure1_slot3;
                        var3 = 78;
                        var3 = var11[var3];
                        var3 = var6.bind(var2)(var3);
                        var6 = var3.INVITE_EMBED;
                        var3 = new Array(1);
                        var3[0] = var6;
                        var0.analyticsLocations = var3;
                        var0 = var1.bind(var2)(var0);
                        _fun77823_ip = 734;
                        continue _fun77823;
                    case 313:
                        var17 = var8.session_id;
                        if (!(var7 != var17)) {
                            _fun77823_ip = 738;
                            continue _fun77823
                        }
                    case 326:
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 104;
                        var0 = var2[var0];
                        var2 = undefined;
                        var1 = var1.bind(var2)(var0);
                        var0 = var1.getRemoteJoinableActivityPlatform;
                        var3 = var0.bind(var1)(var8);
                        var0 = var7 != var3;
                        var11 = undefined;
                        if (!var0) {
                            _fun77823_ip = 391;
                            continue _fun77823
                        }
                    case 368:
                        var1 = var8.party;
                        var6 = var7 == var1;
                        var0 = undefined;
                        if (var6) {
                            _fun77823_ip = 388;
                            continue _fun77823
                        }
                    case 383:
                        var0 = var1.id;
                    case 388:
                        var11 = var0;
                    case 391:
                        var0 = var8.flags;
                        var6 = var7 != var0;
                        if (!var6) {
                            _fun77823_ip = 450;
                            continue _fun77823
                        }
                    case 403:
                        var1 = _closure1_slot0;
                        var13 = _closure1_slot3;
                        var0 = 105;
                        var0 = var13[var0];
                        var14 = var1.bind(var2)(var0);
                        var13 = var14.hasFlag;
                        var1 = var8.flags;
                        var0 = _closure1_slot39;
                        var0 = var0.EMBEDDED;
                        var6 = var13.bind(var14)(var1, var0);
                    case 450:
                        var1 = _closure1_slot1;
                        var13 = _closure1_slot3;
                        var0 = 106;
                        var0 = var13[var0];
                        var15 = var1.bind(var2)(var0);
                        var14 = var15.join;
                        var0 = {};
                        var18 = var18.id;
                        var0.userId = var18;
                        var0.sessionId = var17;
                        var0.application = var16;
                        var0.channelId = var10;
                        var16 = var5.id;
                        var0.messageId = var16;
                        var0.applicationActivity = var8;
                        var0.remotePartyId = var11;
                        var0.embedded = var6;
                        var11 = _closure1_slot43;
                        var6 = var11.MESSAGE_EMBED;
                        var0.source = var6;
                        var6 = 78;
                        var16 = var13[var6];
                        var16 = var1.bind(var2)(var16);
                        var17 = var16.INVITE_EMBED;
                        var16 = new Array(1);
                        var16[0] = var17;
                        var0.analyticsLocations = var16;
                        var0 = var14.bind(var15)(var0);
                        var0 = 107;
                        var0 = var13[var0];
                        var1 = var1.bind(var2)(var0);
                        var0 = {};
                        var13 = _closure1_slot42;
                        var13 = var13.JOIN;
                        var0.type = var13;
                        var11 = var11.MESSAGE_EMBED;
                        var0.source = var11;
                        var11 = var5.author;
                        var11 = var11.id;
                        var0.userId = var11;
                        var13 = var7 == var12;
                        var11 = undefined;
                        if (var13) {
                            _fun77823_ip = 642;
                            continue _fun77823
                        }
                    case 637:
                        var11 = var12.guild_id;
                    case 642:
                        var0.guildId = var11;
                        var0.channelId = var10;
                        var0.applicationId = var9;
                        var8 = var8.party;
                        var9 = var7 == var8;
                        var7 = undefined;
                        if (var9) {
                            _fun77823_ip = 674;
                            continue _fun77823
                        }
                    case 669:
                        var7 = var8.id;
                    case 674:
                        var0.partyId = var7;
                        var5 = var5.id;
                        var0.messageId = var5;
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var4 = var4[var6];
                        var4 = var5.bind(var2)(var4);
                        var5 = var4.INVITE_EMBED;
                        var4 = new Array(1);
                        var4[0] = var5;
                        var0.analyticsLocations = var4;
                        var0.remoteJoinPlatform = var3;
                        var0 = var1.bind(var2)(var0);
                    case 734:
                        var0 = undefined;
                        return var0;
                    case 738:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleTapActivityResource = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77824: for (var _fun77824_ip = 0;;) switch (_fun77824_ip) {
                    case 0:
                        var2 = arg0;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var0 = 109;
                        var3 = var3[var0];
                        var0 = undefined;
                        var4 = var4.bind(var0)(var3);
                        var3 = var4.canFulfillStreamRequest;
                        var6 = true;
                        var5 = var3.bind(var4)(var2, var6);
                        var4 = _closure1_slot7;
                        var3 = 1;
                        var4 = var4.bind(var0)(var5, var3);
                        var3 = 0;
                        var3 = var4[var3];
                        if (!var3) {
                            _fun77824_ip = 152;
                            continue _fun77824
                        }
                    case 64:
                        var4 = _closure1_slot23;
                        var3 = var4.getChannel;
                        var2 = var2.channel_id;
                        var5 = var3.bind(var4)(var2);
                        var2 = null;
                        if (!(var2 != var5)) {
                            _fun77824_ip = 152;
                            continue _fun77824
                        }
                    case 89:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 110;
                        var4 = var3[var1];
                        var7 = var2.bind(var0)(var4);
                        var4 = var7.getOSRequirement;
                        var8 = var4.bind(var7)();
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.getStreamPressHandler;
                        var9 = false;
                        var12 = var3;
                        var11 = var5;
                        var10 = true;
                        var1 = var12[var2](var11, var10, var9, var8, var7);
                        var1 = var1.bind(var0)();
                    case 152:
                        return var0;
                }
            };
            var2.handleTapStreamRequest = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77825: for (var _fun77825_ip = 0;;) switch (_fun77825_ip) {
                    case 0:
                        var5 = arg0;
                        var2 = var5.author;
                        var1 = var5.application;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun77825_ip = 140;
                            continue _fun77825
                        }
                    case 20:
                        if (!(var0 != var1)) {
                            _fun77825_ip = 140;
                            continue _fun77825
                        }
                    case 24:
                        var2 = var2.id;
                        if (!(var0 != var2)) {
                            _fun77825_ip = 140;
                            continue _fun77825
                        }
                    case 33:
                        var6 = _closure1_slot34;
                        var4 = var6.getApplicationActivity;
                        var2 = var1.id;
                        var1 = true;
                        var4 = var4.bind(var6)(var2, var1);
                        if (!(var0 != var4)) {
                            _fun77825_ip = 140;
                            continue _fun77825
                        }
                    case 63:
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var0 = 111;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.sendActivityInvite;
                        var0 = {};
                        var5 = var5.channel_id;
                        var0.channelId = var5;
                        var5 = _closure1_slot38;
                        var5 = var5.JOIN;
                        var0.type = var5;
                        var0.activity = var4;
                        var3 = _closure1_slot43;
                        var3 = var3.MESSAGE_EMBED;
                        var0.location = var3;
                        var0 = var1.bind(var2)(var0);
                    case 140:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleTapActivityInviteToJoin = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77826: for (var _fun77826_ip = 0;;) switch (_fun77826_ip) {
                    case 0:
                        var0 = arg0;
                        var8 = var0.invite;
                        var5 = var0.isMember;
                        var1 = var0.primary;
                        var2 = var0.secondary;
                        var7 = var0.guildEventId;
                        var6 = var0.recurrenceId;
                        var0 = null;
                        if (!(var0 != var8)) {
                            _fun77826_ip = 68;
                            continue _fun77826
                        }
                    case 45:
                        var4 = var8.guild_scheduled_event;
                        var9 = var0 == var4;
                        var3 = undefined;
                        if (var9) {
                            _fun77826_ip = 65;
                            continue _fun77826
                        }
                    case 60:
                        var3 = var4.id;
                    case 65:
                        var7 = var3;
                    case 68:
                        var9 = _closure1_slot14;
                        var3 = var9.getGuildScheduledEvent;
                        var3 = var3.bind(var9)(var7);
                        if (!(var0 != var3)) {
                            _fun77826_ip = 444;
                            continue _fun77826
                        }
                    case 93:
                        if (!(var0 != var7)) {
                            _fun77826_ip = 444;
                            continue _fun77826
                        }
                    case 100:
                        if (var5) {
                            _fun77826_ip = 146;
                            continue _fun77826
                        }
                    case 103:
                        if (!(var0 != var8)) {
                            _fun77826_ip = 146;
                            continue _fun77826
                        }
                    case 107:
                        var10 = _closure1_slot1;
                        var9 = _closure1_slot3;
                        var5 = 73;
                        var5 = var9[var5];
                        var9 = undefined;
                        var5 = var10.bind(var9)(var5);
                        var5 = var5.bind(var9)(var8);
                        var5 = {};
                        var9 = 'accept';
                        var5.action = var9;
                        return var5;
                    case 146:
                        if (var2) {
                            _fun77826_ip = 305;
                            continue _fun77826
                        }
                    case 152:
                        if (!var1) {
                            _fun77826_ip = 169;
                            continue _fun77826
                        }
                    case 155:
                        var2 = _closure1_slot15;
                        var9 = undefined;
                        var2 = var2.bind(var9)(var3);
                        if (var2) {
                            _fun77826_ip = 258;
                            continue _fun77826
                        }
                    case 169:
                        var10 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var2 = 113;
                        var5 = var5[var2];
                        var2 = undefined;
                        var11 = var10.bind(var2)(var5);
                        if (var1) {
                            _fun77826_ip = 218;
                            continue _fun77826
                        }
                    case 194:
                        var1 = var11.transitionToEventDetailsFromInvite;
                        var1 = var1.bind(var11)(var3, var6);
                        var1 = {};
                        var2 = 'transition';
                        var1.action = var2;
                        _fun77826_ip = 256;
                        continue _fun77826;
                    case 218:
                        var10 = var11.handleGuildScheduledEventRsvp;
                        var5 = var3.id;
                        var2 = var3.guild_id;
                        var2 = var10.bind(var11)(var5, var6, var2);
                        var2 = {};
                        var5 = 'rsvp';
                        var2.action = var5;
                        var1 = var2;
                    case 256:
                        _fun77826_ip = 303;
                        continue _fun77826;
                    case 258:
                        var5 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var2 = 113;
                        var2 = var10[var2];
                        var5 = var5.bind(var9)(var2);
                        var2 = var5.transitionToEventDetailsFromInvite;
                        var2 = var2.bind(var5)(var3, var6);
                        var2 = {};
                        var5 = 'transition';
                        var2.action = var5;
                        var1 = var2;
                    case 303:
                        return var1;
                    case 305:
                        var1 = var0 != var8;
                        var6 = null;
                        if (!var1) {
                            _fun77826_ip = 364;
                            continue _fun77826
                        }
                    case 314:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 112;
                        var2 = var2[var1];
                        var1 = undefined;
                        var5 = var5.bind(var1)(var2);
                        var2 = var5.generateInviteKeyFromExtraData;
                        var1 = {};
                        var8 = var8.code;
                        var1.baseCode = var8;
                        var1.guildScheduledEventId = var7;
                        var6 = var2.bind(var5)(var1);
                    case 364:
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var1 = 113;
                        var1 = var5[var1];
                        var5 = undefined;
                        var2 = var2.bind(var5)(var1);
                        var1 = var2.openShareEvent;
                        var7 = var0 != var6;
                        var0 = undefined;
                        if (!var7) {
                            _fun77826_ip = 426;
                            continue _fun77826
                        }
                    case 401:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var4 = 114;
                        var4 = var8[var4];
                        var4 = var7.bind(var5)(var4);
                        var0 = var4.bind(var5)(var6);
                    case 426:
                        var0 = var1.bind(var2)(var3, var0);
                        var0 = {};
                        var1 = 'share';
                        var0.action = var1;
                        return var0;
                    case 444:
                        var0 = {};
                        var1 = 'noop';
                        var0.action = var1;
                        return var0;
                }
            };
            var2.handleTapGuildEventInvite = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77827: for (var _fun77827_ip = 0;;) switch (_fun77827_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 115;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.isMetaQuest;
                        var2 = var2.bind(var3)();
                        if (var2) {
                            _fun77827_ip = 174;
                            continue _fun77827
                        }
                    case 41:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var2 = 116;
                        var2 = var4[var2];
                        var6 = var3.bind(var0)(var2);
                        var5 = var6.findQuestOrReplacement;
                        var2 = _closure1_slot16;
                        var4 = var2.quests;
                        var3 = var2.excludedQuests;
                        var2 = arg0;
                        var4 = var5.bind(var6)(var2, var4, var3);
                        var2 = null;
                        if (!(var2 == var4)) {
                            _fun77827_ip = 131;
                            continue _fun77827
                        }
                    case 99:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var2 = 117;
                        var2 = var5[var2];
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.openQuestHome;
                        var2 = var2.bind(var3)();
                        _fun77827_ip = 174;
                        continue _fun77827;
                    case 131:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 117;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.openQuestHome;
                        var1 = {};
                        var4 = var4.id;
                        var1.scrollToQuestId = var4;
                        var1 = var2.bind(var3)(var1);
                    case 174:
                        return var0;
                }
            };
            var2._questsEmbedOnPress = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77828: for (var _fun77828_ip = 0;;) switch (_fun77828_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 115;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.isMetaQuest;
                        var4 = var2.bind(var3)();
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        if (var4) {
                            _fun77828_ip = 453;
                            continue _fun77828
                        }
                    case 49:
                        var4 = 116;
                        var4 = var3[var4];
                        var9 = var2.bind(var0)(var4);
                        var8 = var9.findQuestOrReplacement;
                        var4 = _closure1_slot16;
                        var7 = var4.quests;
                        var6 = var4.excludedQuests;
                        var5 = arg0;
                        var6 = var8.bind(var9)(var5, var7, var6);
                        var4 = var4.questEnrollmentBlockedUntil;
                        var5 = null;
                        var4 = var5 != var4;
                        if (!(var5 == var6)) {
                            _fun77828_ip = 144;
                            continue _fun77828
                        }
                    case 109:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var7 = 117;
                        var7 = var9[var7];
                        var8 = var8.bind(var0)(var7);
                        var7 = var8.openQuestHome;
                        var7 = var7.bind(var8)();
                        _fun77828_ip = 475;
                        continue _fun77828;
                    case 144:
                        if (var4) {
                            _fun77828_ip = 408;
                            continue _fun77828
                        }
                    case 150:
                        var7 = var6.userStatus;
                        var8 = var5 == var7;
                        var4 = undefined;
                        if (var8) {
                            _fun77828_ip = 171;
                            continue _fun77828
                        }
                    case 165:
                        var4 = var7.enrolledAt;
                    case 171:
                        var4 = var5 != var4;
                        var5 = var6.config;
                        var7 = var5.expiresAt;
                        var5 = global;
                        var5 = var5.Date;
                        var8 = var5.prototype;
                        var8 = Object.create(var8, {
                            constructor: {
                                value: var5
                            }
                        });
                        var16 = var8;
                        var5 = new var16[var5](var15);
                        var8 = var5 instanceof Object ? var5 : var8;
                        var5 = var8.toISOString;
                        var5 = var5.bind(var8)();
                        var5 = var7 < var5;
                        if (var4) {
                            _fun77828_ip = 234;
                            continue _fun77828
                        }
                    case 231:
                        var4 = var5;
                    case 234:
                        if (var4) {
                            _fun77828_ip = 363;
                            continue _fun77828
                        }
                    case 240:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var4 = 118;
                        var4 = var11[var4];
                        var8 = var10.bind(var0)(var4);
                        var7 = var8.enrollInQuest;
                        var5 = var6.id;
                        var4 = {};
                        var9 = 119;
                        var12 = var11[var9];
                        var12 = var10.bind(var0)(var12);
                        var12 = var12.QuestContent;
                        var12 = var12.QUEST_EMBED_MOBILE;
                        var4.questContent = var12;
                        var12 = 120;
                        var12 = var11[var12];
                        var12 = var10.bind(var0)(var12);
                        var12 = var12.QuestContentCTA;
                        var12 = var12.ACCEPT_QUEST;
                        var4.questContentCTA = var12;
                        var9 = var11[var9];
                        var9 = var10.bind(var0)(var9);
                        var9 = var9.QuestContent;
                        var9 = var9.QUEST_EMBED_MOBILE;
                        var4.sourceQuestContent = var9;
                        var4 = var7.bind(var8)(var5, var4);
                    case 363:
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var4 = 117;
                        var4 = var7[var4];
                        var7 = var5.bind(var0)(var4);
                        var5 = var7.openQuestHome;
                        var4 = {};
                        var8 = var6.id;
                        var4.scrollToQuestId = var8;
                        var4 = var5.bind(var7)(var4);
                        _fun77828_ip = 475;
                        continue _fun77828;
                    case 408:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var1 = 117;
                        var1 = var5[var1];
                        var5 = var4.bind(var0)(var1);
                        var4 = var5.openQuestHome;
                        var1 = {};
                        var6 = var6.id;
                        var1.scrollToQuestId = var6;
                        var1 = var4.bind(var5)(var1);
                        _fun77828_ip = 475;
                        continue _fun77828;
                    case 453:
                        var1 = 117;
                        var1 = var3[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.openDiscordQuestsFAQ;
                        var1 = var1.bind(var2)();
                    case 475:
                        return var0;
                }
            };
            var2._questsEmbedOnAccept = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77829: for (var _fun77829_ip = 0;;) switch (_fun77829_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 43;
                        var2 = var2[var0];
                        var0 = undefined;
                        var5 = var3.bind(var0)(var2);
                        var3 = var5.getNativeSyntheticEventData;
                        var2 = arg0;
                        var2 = var3.bind(var5)(var2);
                        var7 = var2.messageId;
                        var8 = var2.index;
                        var9 = var2.primary;
                        var6 = var2.secondary;
                        var5 = _closure3_slot0;
                        var3 = var5.getMessageData;
                        var3 = var3.bind(var5)(var7);
                        var11 = null;
                        if (!(var11 != var3)) {
                            _fun77829_ip = 765;
                            continue _fun77829
                        }
                    case 90:
                        var5 = var3.message;
                        var7 = _closure3_slot0;
                        var3 = var7.getParams;
                        var3 = var3.bind(var7)();
                        var3 = var3.chatInputRef;
                        var7 = var3.current;
                        if (!(var11 != var7)) {
                            _fun77829_ip = 134;
                            continue _fun77829
                        }
                    case 124:
                        var3 = var7.dismissKeyboard;
                        var3 = var3.bind(var7)();
                    case 134:
                        var3 = _closure1_slot69;
                        var7 = var3.bind(var0)(var5);
                        var10 = var11 == var7;
                        var3 = undefined;
                        if (var10) {
                            _fun77829_ip = 156;
                            continue _fun77829
                        }
                    case 152:
                        var3 = var7[var8];
                    case 156:
                        if (!(var11 != var3)) {
                            _fun77829_ip = 765;
                            continue _fun77829
                        }
                    case 163:
                        var8 = var3.type;
                        var10 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var12 = 121;
                        var7 = var7[var12];
                        var7 = var10.bind(var0)(var7);
                        var7 = var7.CodedLinkType;
                        var7 = var7.INVITE;
                        if (!(var8 !== var7)) {
                            _fun77829_ip = 270;
                            continue _fun77829
                        }
                    case 204:
                        var8 = var3.type;
                        var10 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var7 = var7[var12];
                        var7 = var10.bind(var0)(var7);
                        var7 = var7.CodedLinkType;
                        var7 = var7.QUESTS_EMBED;
                        if (!(var8 === var7)) {
                            _fun77829_ip = 765;
                            continue _fun77829
                        }
                    case 245:
                        var10 = _closure3_slot0;
                        var8 = var10._questsEmbedOnAccept;
                        var7 = var3.code;
                        var7 = var8.bind(var10)(var7);
                        _fun77829_ip = 765;
                        continue _fun77829;
                    case 270:
                        var8 = _closure1_slot28;
                        var7 = var8.getInvite;
                        var3 = var3.code;
                        var8 = var7.bind(var8)(var3);
                        if (!(var11 != var8)) {
                            _fun77829_ip = 767;
                            continue _fun77829
                        }
                    case 297:
                        var7 = _closure1_slot22;
                        var3 = var7.getId;
                        var14 = var3.bind(var7)();
                        var10 = _closure1_slot25;
                        var7 = var10.isMember;
                        var12 = var11 == var8;
                        var3 = undefined;
                        if (var12) {
                            _fun77829_ip = 349;
                            continue _fun77829
                        }
                    case 330:
                        var12 = var8.guild;
                        var13 = var11 == var12;
                        var3 = undefined;
                        if (var13) {
                            _fun77829_ip = 349;
                            continue _fun77829
                        }
                    case 344:
                        var3 = var12.id;
                    case 349:
                        var10 = var7.bind(var10)(var3, var14);
                        var3 = false;
                        if (!var10) {
                            _fun77829_ip = 542;
                            continue _fun77829
                        }
                    case 363:
                        var7 = var8.roles;
                        var7 = var11 != var7;
                        var3 = false;
                        if (!var7) {
                            _fun77829_ip = 542;
                            continue _fun77829
                        }
                    case 381:
                        var7 = var8.roles;
                        var13 = var7.length;
                        var7 = 0;
                        var7 = var13 > var7;
                        var3 = false;
                        if (!var7) {
                            _fun77829_ip = 542;
                            continue _fun77829
                        }
                    case 406:
                        var13 = var8.guild;
                        var15 = var11 == var13;
                        var7 = undefined;
                        if (var15) {
                            _fun77829_ip = 425;
                            continue _fun77829
                        }
                    case 420:
                        var7 = var13.id;
                    case 425:
                        var7 = var11 != var7;
                        var3 = false;
                        if (!var7) {
                            _fun77829_ip = 542;
                            continue _fun77829
                        }
                    case 434:
                        var13 = _closure1_slot25;
                        var12 = var13.getMember;
                        var7 = var8.guild;
                        var7 = var7.id;
                        var13 = var12.bind(var13)(var7, var14);
                        var7 = global;
                        var12 = var7.Set;
                        var14 = var11 == var13;
                        var7 = undefined;
                        if (var14) {
                            _fun77829_ip = 483;
                            continue _fun77829
                        }
                    case 477:
                        var7 = var13.roles;
                    case 483:
                        if (!(var11 == var7)) {
                            _fun77829_ip = 491;
                            continue _fun77829
                        }
                    case 487:
                        var7 = new Array(0);
                    case 491:
                        var11 = var12.prototype;
                        var11 = Object.create(var11, {
                            constructor: {
                                value: var12
                            }
                        });
                        var18 = var11;
                        var17 = var7;
                        var7 = new var18[var12](var17, var16);
                        var7 = var7 instanceof Object ? var7 : var11;
                        var _closure4_slot0 = var7;
                        var11 = var8.roles;
                        var7 = var11.some;
                        var4 = function(arg0) { // Environment: var4
                            var2 = _closure4_slot0;
                            var1 = var2.has;
                            var0 = arg0;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                            var0 = !var0;
                            return var0;
                        };
                        var3 = var7.bind(var11)(var4);
                    case 542:
                        var7 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var4 = 72;
                        var4 = var11[var4];
                        var7 = var7.bind(var0)(var4);
                        var4 = var7.isGuildScheduledEventInviteEmbed;
                        var4 = var4.bind(var7)(var8);
                        if (var4) {
                            _fun77829_ip = 624;
                            continue _fun77829
                        }
                    case 576:
                        if (!var10) {
                            _fun77829_ip = 603;
                            continue _fun77829
                        }
                    case 579:
                        if (var3) {
                            _fun77829_ip = 603;
                            continue _fun77829
                        }
                    case 582:
                        var4 = _closure3_slot0;
                        var3 = var4.handleTransitionToInviteChannel;
                        var3 = var3.bind(var4)(var8);
                        var7 = 'transition';
                        _fun77829_ip = 666;
                        continue _fun77829;
                    case 603:
                        var4 = _closure3_slot0;
                        var3 = var4.handleAcceptInstantInvite;
                        var3 = var3.bind(var4)(var8);
                        var7 = 'accept';
                        _fun77829_ip = 666;
                        continue _fun77829;
                    case 624:
                        var4 = _closure3_slot0;
                        var3 = var4.handleTapGuildEventInvite;
                        var2 = {};
                        var2.invite = var8;
                        var2.isMember = var10;
                        var2.primary = var9;
                        var2.secondary = var6;
                        var2 = var3.bind(var4)(var2);
                        var7 = var2.action;
                    case 666:
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var2 = 122;
                        var2 = var6[var2];
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.trackInviteEmbedActioned;
                        var2 = {};
                        var2.invite = var8;
                        var2.action = var7;
                        var7 = var5.author;
                        var7 = var7.id;
                        var2.inviter_id = var7;
                        var5 = var5.id;
                        var2.invite_message_id = var5;
                        var5 = _closure1_slot1;
                        var1 = 78;
                        var1 = var6[var1];
                        var1 = var5.bind(var0)(var1);
                        var5 = var1.INVITE_EMBED;
                        var1 = new Array(1);
                        var1[0] = var5;
                        var1 = var3.bind(var4)(var2, var1);
                    case 765:
                        return var0;
                    case 767:
                        return var0;
                }
            };
            var2.handleTapInviteEmbedAccept = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77831: for (var _fun77831_ip = 0;;) switch (_fun77831_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 43;
                        var2 = var2[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.getNativeSyntheticEventData;
                        var2 = arg0;
                        var2 = var3.bind(var4)(var2);
                        var6 = var2.messageId;
                        var5 = var2.index;
                        var9 = var2.primary;
                        var8 = var2.secondary;
                        var4 = _closure3_slot0;
                        var3 = var4.getMessageData;
                        var3 = var3.bind(var4)(var6);
                        var7 = null;
                        if (!(var7 != var3)) {
                            _fun77831_ip = 1806;
                            continue _fun77831
                        }
                    case 88:
                        var11 = var3.message;
                        var4 = _closure3_slot0;
                        var3 = var4.getParams;
                        var3 = var3.bind(var4)();
                        var3 = var3.chatInputRef;
                        var4 = var3.current;
                        if (!(var7 != var4)) {
                            _fun77831_ip = 132;
                            continue _fun77831
                        }
                    case 122:
                        var3 = var4.dismissKeyboard;
                        var3 = var3.bind(var4)();
                    case 132:
                        var3 = _closure1_slot69;
                        var4 = var3.bind(var0)(var11);
                        var6 = var7 == var4;
                        var3 = undefined;
                        if (var6) {
                            _fun77831_ip = 154;
                            continue _fun77831
                        }
                    case 150:
                        var3 = var4[var5];
                    case 154:
                        if (!(var7 != var3)) {
                            _fun77831_ip = 1806;
                            continue _fun77831
                        }
                    case 161:
                        var5 = _closure1_slot22;
                        var4 = var5.getId;
                        var10 = var4.bind(var5)();
                        var5 = var3.type;
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var12 = 121;
                        var4 = var4[var12];
                        var4 = var6.bind(var0)(var4);
                        var4 = var4.CodedLinkType;
                        var4 = var4.INVITE;
                        if (!(var5 !== var4)) {
                            _fun77831_ip = 1366;
                            continue _fun77831
                        }
                    case 219:
                        var5 = var3.type;
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var12];
                        var4 = var6.bind(var0)(var4);
                        var4 = var4.CodedLinkType;
                        var4 = var4.EMBEDDED_ACTIVITY_INVITE;
                        if (!(var5 !== var4)) {
                            _fun77831_ip = 1366;
                            continue _fun77831
                        }
                    case 260:
                        var5 = var3.type;
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var12];
                        var4 = var6.bind(var0)(var4);
                        var4 = var4.CodedLinkType;
                        var4 = var4.TEMPLATE;
                        if (!(var5 !== var4)) {
                            _fun77831_ip = 1325;
                            continue _fun77831
                        }
                    case 301:
                        var5 = var3.type;
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var12];
                        var4 = var6.bind(var0)(var4);
                        var4 = var4.CodedLinkType;
                        var4 = var4.BUILD_OVERRIDE;
                        if (!(var5 !== var4)) {
                            _fun77831_ip = 1284;
                            continue _fun77831
                        }
                    case 342:
                        var5 = var3.type;
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var12];
                        var4 = var6.bind(var0)(var4);
                        var4 = var4.CodedLinkType;
                        var4 = var4.MANUAL_BUILD_OVERRIDE;
                        if (!(var5 !== var4)) {
                            _fun77831_ip = 1284;
                            continue _fun77831
                        }
                    case 383:
                        var5 = var3.type;
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var12];
                        var4 = var6.bind(var0)(var4);
                        var4 = var4.CodedLinkType;
                        var4 = var4.EXPERIMENT;
                        if (!(var5 !== var4)) {
                            _fun77831_ip = 1180;
                            continue _fun77831
                        }
                    case 424:
                        var5 = var3.type;
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var12];
                        var4 = var6.bind(var0)(var4);
                        var4 = var4.CodedLinkType;
                        var4 = var4.EVENT;
                        if (!(var5 !== var4)) {
                            _fun77831_ip = 1060;
                            continue _fun77831
                        }
                    case 465:
                        var5 = var3.type;
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var12];
                        var4 = var6.bind(var0)(var4);
                        var4 = var4.CodedLinkType;
                        var4 = var4.CHANNEL_LINK;
                        if (!(var5 !== var4)) {
                            _fun77831_ip = 981;
                            continue _fun77831
                        }
                    case 506:
                        var5 = var3.type;
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var12];
                        var4 = var6.bind(var0)(var4);
                        var4 = var4.CodedLinkType;
                        var4 = var4.APP_DIRECTORY_PROFILE;
                        if (!(var5 !== var4)) {
                            _fun77831_ip = 865;
                            continue _fun77831
                        }
                    case 547:
                        var5 = var3.type;
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var12];
                        var4 = var6.bind(var0)(var4);
                        var4 = var4.CodedLinkType;
                        var4 = var4.QUESTS_EMBED;
                        if (!(var5 !== var4)) {
                            _fun77831_ip = 840;
                            continue _fun77831
                        }
                    case 588:
                        var5 = var3.type;
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var12];
                        var4 = var6.bind(var0)(var4);
                        var4 = var4.CodedLinkType;
                        var4 = var4.APP_OAUTH2_LINK;
                        if (!(var5 === var4)) {
                            _fun77831_ip = 798;
                            continue _fun77831
                        }
                    case 629:
                        var6 = _closure1_slot11;
                        var5 = var6.getApplication;
                        var4 = var3.code;
                        var12 = var5.bind(var6)(var4);
                        if (!(var7 != var12)) {
                            _fun77831_ip = 796;
                            continue _fun77831
                        }
                    case 656:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var4 = 99;
                        var4 = var6[var4];
                        var14 = var5.bind(var0)(var4);
                        var13 = var14.trackWithMetadata;
                        var4 = _closure1_slot41;
                        var5 = var4.APP_OAUTH2_LINK_EMBED_CTA_CLICKED;
                        var4 = {};
                        var15 = var12.id;
                        var4.application_id = var15;
                        var4 = var13.bind(var14)(var5, var4);
                        var5 = _closure1_slot0;
                        var4 = 127;
                        var4 = var6[var4];
                        var6 = var5.bind(var0)(var4);
                        var5 = var6.installApplication;
                        var4 = {};
                        var13 = var12.id;
                        var4.applicationId = var13;
                        var13 = var12.customInstallUrl;
                        var4.customInstallUrl = var13;
                        var13 = var12.installParams;
                        var4.installParams = var13;
                        var12 = var12.integrationTypesConfig;
                        var4.integrationTypesConfig = var12;
                        var12 = 'app_oauth2_link_embed';
                        var4.source = var12;
                        var4 = var5.bind(var6)(var4);
                        _fun77831_ip = 1806;
                        continue _fun77831;
                    case 796:
                        return var0;
                    case 798:
                        var4 = global;
                        var5 = var4.Error;
                        var12 = var3.type;
                        var4 = var4.HermesInternal;
                        var6 = var4.concat;
                        var4 = 'Unknown coded link type: ';
                        var4 = var6.bind(var4)(var12);
                        var4 = var5.bind(var0)(var4);
                        throw var4;
                    case 840:
                        var6 = _closure3_slot0;
                        var5 = var6._questsEmbedOnPress;
                        var4 = var3.code;
                        var4 = var5.bind(var6)(var4);
                        _fun77831_ip = 1806;
                        continue _fun77831;
                    case 865:
                        var6 = _closure1_slot12;
                        var5 = var6.getApplication;
                        var4 = var3.code;
                        var12 = var5.bind(var6)(var4);
                        if (!(var7 != var12)) {
                            _fun77831_ip = 979;
                            continue _fun77831
                        }
                    case 889:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var4 = 127;
                        var4 = var6[var4];
                        var6 = var5.bind(var0)(var4);
                        var5 = var6.installApplication;
                        var4 = {};
                        var13 = var12.id;
                        var4.applicationId = var13;
                        var13 = var12.custom_install_url;
                        var4.customInstallUrl = var13;
                        var13 = var12.install_params;
                        var4.installParams = var13;
                        var12 = var12.integration_types_config;
                        var4.integrationTypesConfig = var12;
                        var12 = 'app_directory_profile_embed';
                        var4.source = var12;
                        var4 = var5.bind(var6)(var4);
                        _fun77831_ip = 1806;
                        continue _fun77831;
                    case 979:
                        return var0;
                    case 981:
                        var6 = var3.code;
                        var5 = var6.split;
                        var4 = '/';
                        var6 = var5.bind(var6)(var4);
                        var5 = _closure1_slot7;
                        var4 = 2;
                        var5 = var5.bind(var0)(var6, var4);
                        var4 = 0;
                        var13 = var5[var4];
                        var4 = 1;
                        var12 = var5[var4];
                        var6 = _closure3_slot0;
                        var5 = var6.handleTapVoiceChannelPreview;
                        var4 = {};
                        var4.guildId = var13;
                        var4.channelId = var12;
                        var4.message = var11;
                        var4 = var5.bind(var6)(var4);
                        _fun77831_ip = 1806;
                        continue _fun77831;
                    case 1060:
                        var6 = var3.code;
                        var5 = var6.split;
                        var4 = '-';
                        var6 = var5.bind(var6)(var4);
                        var5 = _closure1_slot7;
                        var4 = 3;
                        var5 = var5.bind(var0)(var6, var4);
                        var4 = 0;
                        var6 = var5[var4];
                        var4 = 1;
                        var12 = var5[var4];
                        var4 = 2;
                        var11 = var5[var4];
                        var5 = _closure1_slot25;
                        var4 = var5.isMember;
                        var13 = var4.bind(var5)(var6, var10);
                        var6 = _closure3_slot0;
                        var5 = var6.handleTapGuildEventInvite;
                        var4 = {};
                        var4.invite = var7;
                        var4.isMember = var13;
                        var4.primary = var9;
                        var4.secondary = var8;
                        var4.guildEventId = var12;
                        var4.recurrenceId = var11;
                        var4 = var5.bind(var6)(var4);
                        _fun77831_ip = 1806;
                        continue _fun77831;
                    case 1180:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var4 = 125;
                        var5 = var5[var4];
                        var11 = var6.bind(var0)(var5);
                        var6 = var11.getExperimentFromEmbedURL;
                        var5 = var3.code;
                        var11 = var6.bind(var11)(var5);
                        if (!(var7 != var11)) {
                            _fun77831_ip = 1282;
                            continue _fun77831
                        }
                    case 1220:
                        var5 = _closure1_slot0;
                        var12 = _closure1_slot3;
                        var4 = var12[var4];
                        var13 = var5.bind(var0)(var4);
                        var6 = var13.getExperimentTreatmentFromEmbedURL;
                        var4 = var3.code;
                        var6 = var6.bind(var13)(var4);
                        var4 = 126;
                        var4 = var12[var4];
                        var5 = var5.bind(var0)(var4);
                        var4 = var5.handleCodedLinkExperimentEmbedTap;
                        var4 = var4.bind(var5)(var11, var6);
                        _fun77831_ip = 1806;
                        continue _fun77831;
                    case 1282:
                        return var0;
                    case 1284:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var4 = 124;
                        var4 = var6[var4];
                        var6 = var5.bind(var0)(var4);
                        var5 = var6.toggleOverride;
                        var4 = var3.code;
                        var4 = var5.bind(var6)(var4);
                        _fun77831_ip = 1806;
                        continue _fun77831;
                    case 1325:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var4 = 123;
                        var4 = var6[var4];
                        var6 = var5.bind(var0)(var4);
                        var5 = var6.showModal;
                        var4 = var3.code;
                        var4 = var5.bind(var6)(var4);
                        _fun77831_ip = 1806;
                        continue _fun77831;
                    case 1366:
                        var5 = _closure1_slot28;
                        var4 = var5.getInvite;
                        var3 = var3.code;
                        var6 = var4.bind(var5)(var3);
                        var5 = _closure1_slot25;
                        var4 = var5.isMember;
                        var11 = var7 == var6;
                        var3 = undefined;
                        if (var11) {
                            _fun77831_ip = 1424;
                            continue _fun77831
                        }
                    case 1405:
                        var11 = var6.guild;
                        var12 = var7 == var11;
                        var3 = undefined;
                        if (var12) {
                            _fun77831_ip = 1424;
                            continue _fun77831
                        }
                    case 1419:
                        var3 = var11.id;
                    case 1424:
                        var10 = var4.bind(var5)(var3, var10);
                        if (!(var7 != var6)) {
                            _fun77831_ip = 1808;
                            continue _fun77831
                        }
                    case 1437:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var3 = 72;
                        var3 = var5[var3];
                        var4 = var4.bind(var0)(var3);
                        var3 = var4.isGuildScheduledEventInviteEmbed;
                        var3 = var3.bind(var4)(var6);
                        if (var3) {
                            _fun77831_ip = 1669;
                            continue _fun77831
                        }
                    case 1474:
                        var4 = var6.guild;
                        var5 = var7 == var4;
                        var3 = undefined;
                        if (var5) {
                            _fun77831_ip = 1493;
                            continue _fun77831
                        }
                    case 1488:
                        var3 = var4.id;
                    case 1493:
                        if (!(var7 == var3)) {
                            _fun77831_ip = 1544;
                            continue _fun77831
                        }
                    case 1497:
                        var4 = _closure3_slot0;
                        if (var10) {
                            _fun77831_ip = 1524;
                            continue _fun77831
                        }
                    case 1504:
                        var3 = var4.handleAcceptInstantInvite;
                        var3 = var3.bind(var4)(var6);
                        var5 = 'accept';
                        _fun77831_ip = 1711;
                        continue _fun77831;
                    case 1524:
                        var3 = var4.handleTransitionToInviteChannel;
                        var3 = var3.bind(var4)(var6);
                        var5 = 'transition';
                        _fun77831_ip = 1711;
                        continue _fun77831;
                    case 1544:
                        var11 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var4 = 49;
                        var4 = var3[var4];
                        var13 = var11.bind(var0)(var4);
                        var12 = var13.openLazy;
                        var11 = _closure1_slot0;
                        var4 = 42;
                        var4 = var3[var4];
                        var11 = var11.bind(var0)(var4);
                        var4 = 85;
                        var4 = var3[var4];
                        var3 = var3.paths;
                        var11 = var11.bind(var0)(var4, var3);
                        var3 = var6.guild;
                        var14 = var3.id;
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var4 = var3.concat;
                        var3 = 'GuildProfileActionSheet:';
                        var4 = var4.bind(var3)(var14);
                        var3 = {};
                        var14 = var6.guild;
                        var14 = var14.id;
                        var3.guildId = var14;
                        var3 = var12.bind(var13)(var11, var4, var3);
                        var5 = 'show profile';
                        _fun77831_ip = 1711;
                        continue _fun77831;
                    case 1669:
                        var4 = _closure3_slot0;
                        var3 = var4.handleTapGuildEventInvite;
                        var2 = {};
                        var2.invite = var6;
                        var2.isMember = var10;
                        var2.primary = var9;
                        var2.secondary = var8;
                        var2 = var3.bind(var4)(var2);
                        var5 = var2.action;
                    case 1711:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var2 = 122;
                        var2 = var4[var2];
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.trackInviteServerClicked;
                        var8 = var7 == var6;
                        var2 = undefined;
                        if (var8) {
                            _fun77831_ip = 1765;
                            continue _fun77831
                        }
                    case 1746:
                        var6 = var6.guild;
                        var7 = var7 == var6;
                        var2 = undefined;
                        if (var7) {
                            _fun77831_ip = 1765;
                            continue _fun77831
                        }
                    case 1760:
                        var2 = var6.id;
                    case 1765:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var1 = 78;
                        var1 = var7[var1];
                        var1 = var6.bind(var0)(var1);
                        var6 = var1.INVITE_EMBED;
                        var1 = new Array(1);
                        var1[0] = var6;
                        var1 = var3.bind(var4)(var2, var5, var1);
                    case 1806:
                        return var0;
                    case 1808:
                        return var0;
                }
            };
            var2.handleTapInviteEmbed = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77832: for (var _fun77832_ip = 0;;) switch (_fun77832_ip) {
                    case 0:
                        var0 = arg0;
                        var5 = var0.guildId;
                        var4 = var0.channelId;
                        var12 = var0.message;
                        var2 = _closure1_slot33;
                        var1 = var2.getGuildId;
                        var11 = var1.bind(var2)();
                        var2 = _closure1_slot32;
                        var1 = var2.getChannelId;
                        var10 = var1.bind(var2)(var11);
                        var2 = _closure1_slot23;
                        var1 = var2.getChannel;
                        var6 = var1.bind(var2)(var4);
                        var1 = null;
                        if (!(var1 != var6)) {
                            _fun77832_ip = 397;
                            continue _fun77832
                        }
                    case 73:
                        var7 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var2 = 128;
                        var2 = var3[var2];
                        var3 = undefined;
                        var9 = var7.bind(var3)(var2);
                        var8 = var9.track;
                        var2 = _closure1_slot41;
                        var7 = var2.CHANNEL_LINK_PREVIEW_JOINED;
                        var2 = {};
                        var12 = var12.author;
                        var12 = var12.id;
                        var2.author_id = var12;
                        var2.link_guild_id = var5;
                        var2.link_channel_id = var4;
                        var12 = var6.type;
                        var2.link_channel_type = var12;
                        var2.guild_id = var11;
                        var2.channel_id = var10;
                        var2 = var8.bind(var9)(var7, var2);
                        var7 = _closure3_slot0;
                        var2 = var7.getParams;
                        var2 = var2.bind(var7)();
                        var2 = var2.chatInputRef;
                        var2 = var2.current;
                        if (!(var1 != var2)) {
                            _fun77832_ip = 210;
                            continue _fun77832
                        }
                    case 200:
                        var1 = var2.dismissKeyboard;
                        var1 = var1.bind(var2)();
                    case 210:
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 129;
                        var1 = var7[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.shouldShowAgeGateForVoiceChannel;
                        var1 = var1.bind(var2)(var4);
                        if (var1) {
                            _fun77832_ip = 350;
                            continue _fun77832
                        }
                    case 244:
                        var1 = var6.isGuildStageVoice;
                        var1 = var1.bind(var6)();
                        if (var1) {
                            _fun77832_ip = 317;
                            continue _fun77832
                        }
                    case 257:
                        var2 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var1 = 57;
                        var1 = var7[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.selectVoiceChannel;
                        var1 = var1.bind(var2)(var4);
                        var2 = _closure1_slot0;
                        var1 = 55;
                        var1 = var7[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.openChannelCallModal;
                        var1 = var1.bind(var2)(var6);
                        _fun77832_ip = 397;
                        continue _fun77832;
                    case 317:
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 130;
                        var1 = var7[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.connectAndOpen;
                        var1 = var1.bind(var2)(var6);
                        _fun77832_ip = 397;
                        continue _fun77832;
                    case 350:
                        var2 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var1 = 48;
                        var1 = var6[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.transitionTo;
                        var3 = _closure1_slot56;
                        var0 = var3.CHANNEL;
                        var0 = var0.bind(var3)(var5, var4);
                        var0 = var1.bind(var2)(var0);
                    case 397:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleTapVoiceChannelPreview = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77833: for (var _fun77833_ip = 0;;) switch (_fun77833_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 43;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var1);
                        var3 = var4.getNativeSyntheticEventData;
                        var1 = arg0;
                        var1 = var3.bind(var4)(var1);
                        var5 = var1.messageId;
                        var4 = _closure3_slot0;
                        var3 = var4.getMessageData;
                        var3 = var3.bind(var4)(var5);
                        var5 = null;
                        if (!(var5 != var3)) {
                            _fun77833_ip = 179;
                            continue _fun77833
                        }
                    case 68:
                        var3 = var3.message;
                        var4 = var3.activity;
                        if (!(var5 != var4)) {
                            _fun77833_ip = 179;
                            continue _fun77833
                        }
                    case 83:
                        var4 = var4.type;
                        var5 = _closure1_slot38;
                        var5 = var5.LISTEN;
                        if (!(var4 !== var5)) {
                            _fun77833_ip = 164;
                            continue _fun77833
                        }
                    case 102:
                        var5 = _closure1_slot38;
                        var5 = var5.JOIN;
                        if (!(var4 !== var5)) {
                            _fun77833_ip = 147;
                            continue _fun77833
                        }
                    case 116:
                        var2 = _closure1_slot38;
                        var2 = var2.STREAM_REQUEST;
                        if (!(var4 === var2)) {
                            _fun77833_ip = 179;
                            continue _fun77833
                        }
                    case 130:
                        var4 = _closure3_slot0;
                        var2 = var4.handleTapStreamRequest;
                        var2 = var2.bind(var4)(var3);
                        _fun77833_ip = 179;
                        continue _fun77833;
                    case 147:
                        var4 = _closure3_slot0;
                        var2 = var4.handleTapActivityResource;
                        var2 = var2.bind(var4)(var3);
                        _fun77833_ip = 179;
                        continue _fun77833;
                    case 164:
                        var2 = _closure3_slot0;
                        var1 = var2.handleTapSpotifyResource;
                        var1 = var1.bind(var2)(var3);
                    case 179:
                        return var0;
                }
            };
            var2.handleTapJoinActivity = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77834: for (var _fun77834_ip = 0;;) switch (_fun77834_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 43;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var1);
                        var3 = var4.getNativeSyntheticEventData;
                        var1 = arg0;
                        var1 = var3.bind(var4)(var1);
                        var5 = var1.messageId;
                        var4 = _closure3_slot0;
                        var3 = var4.getMessageData;
                        var3 = var3.bind(var4)(var5);
                        var5 = null;
                        if (!(var5 != var3)) {
                            _fun77834_ip = 216;
                            continue _fun77834
                        }
                    case 71:
                        var3 = var3.message;
                        var4 = var3.activity;
                        if (!(var5 != var4)) {
                            _fun77834_ip = 216;
                            continue _fun77834
                        }
                    case 89:
                        var4 = var4.type;
                        var5 = _closure1_slot38;
                        var5 = var5.LISTEN;
                        if (!(var4 !== var5)) {
                            _fun77834_ip = 201;
                            continue _fun77834
                        }
                    case 108:
                        var5 = _closure1_slot38;
                        var5 = var5.JOIN;
                        if (!(var4 !== var5)) {
                            _fun77834_ip = 184;
                            continue _fun77834
                        }
                    case 122:
                        var5 = _closure1_slot38;
                        var5 = var5.JOIN_REQUEST;
                        if (!(var4 !== var5)) {
                            _fun77834_ip = 167;
                            continue _fun77834
                        }
                    case 136:
                        var2 = _closure1_slot38;
                        var2 = var2.STREAM_REQUEST;
                        if (!(var4 === var2)) {
                            _fun77834_ip = 216;
                            continue _fun77834
                        }
                    case 150:
                        var4 = _closure3_slot0;
                        var2 = var4.handleTapStreamRequest;
                        var2 = var2.bind(var4)(var3);
                        _fun77834_ip = 216;
                        continue _fun77834;
                    case 167:
                        var4 = _closure3_slot0;
                        var2 = var4.handleTapActivityInviteToJoin;
                        var2 = var2.bind(var4)(var3);
                        _fun77834_ip = 216;
                        continue _fun77834;
                    case 184:
                        var4 = _closure3_slot0;
                        var2 = var4.handleTapActivityResource;
                        var2 = var2.bind(var4)(var3);
                        _fun77834_ip = 216;
                        continue _fun77834;
                    case 201:
                        var2 = _closure3_slot0;
                        var1 = var2.handleTapSpotifyResource;
                        var1 = var1.bind(var2)(var3);
                    case 216:
                        return var0;
                }
            };
            var2.handleTapJoinRichPresence = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77835: for (var _fun77835_ip = 0;;) switch (_fun77835_ip) {
                    case 0:
                        var4 = arg0;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 131;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.handleNSFWGuildInvite;
                        var1 = var1.bind(var2)(var4);
                        if (var1) {
                            _fun77835_ip = 319;
                            continue _fun77835
                        }
                    case 45:
                        var2 = var4.code;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun77835_ip = 319;
                            continue _fun77835
                        }
                    case 59:
                        var2 = var4.type;
                        var1 = _closure1_slot64;
                        var1 = var1.GUILD;
                        if (!(var2 === var1)) {
                            _fun77835_ip = 111;
                            continue _fun77835
                        }
                    case 78:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 132;
                        var1 = var3[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.isAtGuildCapAndNonPremium;
                        var1 = var1.bind(var2)();
                        if (var1) {
                            _fun77835_ip = 193;
                            continue _fun77835
                        }
                    case 111:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 122;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.acceptInvite;
                        var1 = {};
                        var4 = var4.code;
                        var1.inviteKey = var4;
                        var4 = {};
                        var6 = 'Invite Button Embed';
                        var4.location = var6;
                        var1.context = var4;
                        var4 = _closure3_slot0;
                        var4 = var4.handleTransitionToInviteChannel;
                        var1.callback = var4;
                        var1 = var2.bind(var3)(var1);
                        _fun77835_ip = 319;
                        continue _fun77835;
                    case 193:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var1 = 133;
                        var1 = var7[var1];
                        var3 = var6.bind(var0)(var1);
                        var2 = var3.handleShowUpsellAlert;
                        var1 = {};
                        var4 = _closure1_slot57;
                        var4 = var4.GUILD_CAP;
                        var1.initialUpsellKey = var4;
                        var4 = {};
                        var8 = _closure1_slot46;
                        var8 = var8.INVITE_EMBED;
                        var4.page = var8;
                        var1.analyticsLocation = var4;
                        var4 = 78;
                        var4 = var7[var4];
                        var4 = var6.bind(var0)(var4);
                        var6 = var4.INVITE_EMBED;
                        var4 = new Array(1);
                        var4[0] = var6;
                        var1.analyticsLocations = var4;
                        var4 = {};
                        var5 = _closure1_slot66;
                        var5 = var5.GUILD_CAP_MODAL_UPSELL;
                        var4.type = var5;
                        var1.analyticsProperties = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    case 319:
                        return var0;
                }
            };
            var2.handleAcceptInstantInvite = var3;
            var3 = function(arg0) { // Environment: var1
                var2 = _closure1_slot1;
                var1 = _closure1_slot3;
                var0 = 122;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.transitionToInviteSync;
                var1 = arg0;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var2.handleTransitionToInviteChannel = var3;
            var3 = function() { // Environment: var1
                var0 = undefined;
                return var0;
            };
            var2.handleTapGiftCodeEmbed = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77838: for (var _fun77838_ip = 0;;) switch (_fun77838_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 43;
                        var2 = var2[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.getNativeSyntheticEventData;
                        var2 = arg0;
                        var2 = var3.bind(var4)(var2);
                        var7 = var2.giftCode;
                        var4 = var2.messageId;
                        var3 = _closure1_slot36;
                        var2 = var3.getCurrentUser;
                        var2 = var2.bind(var3)();
                        var9 = null;
                        if (!(var9 != var2)) {
                            _fun77838_ip = 482;
                            continue _fun77838
                        }
                    case 72:
                        var2 = var2.verified;
                        if (var2) {
                            _fun77838_ip = 116;
                            continue _fun77838
                        }
                    case 81:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var2 = 134;
                        var2 = var5[var2];
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.open;
                        var2 = var2.bind(var3)();
                        _fun77838_ip = 482;
                        continue _fun77838;
                    case 116:
                        var3 = _closure1_slot24;
                        var2 = var3.get;
                        var2 = var2.bind(var3)(var7);
                        if (!(var9 != var2)) {
                            _fun77838_ip = 482;
                            continue _fun77838
                        }
                    case 137:
                        var2 = var2.giftStyle;
                        var2 = var9 != var2;
                        var8 = undefined;
                        if (!var2) {
                            _fun77838_ip = 170;
                            continue _fun77838
                        }
                    case 152:
                        var3 = _closure3_slot0;
                        var2 = var3.getMessageData;
                        var8 = var2.bind(var3)(var4);
                    case 170:
                        var2 = _closure3_slot0;
                        var2 = var2.params;
                        var4 = var2.paymentsBlocked;
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        if (var4) {
                            _fun77838_ip = 466;
                            continue _fun77838
                        }
                    case 203:
                        var4 = 128;
                        var4 = var3[var4];
                        var10 = var2.bind(var0)(var4);
                        var6 = var10.track;
                        var4 = _closure1_slot41;
                        var5 = var4.OPEN_MODAL;
                        var4 = {
                            'type': 'gift_accept',
                            'location': null
                        };
                        var4 = var6.bind(var10)(var5, var4);
                        var4 = 46;
                        var4 = var3[var4];
                        var6 = var2.bind(var0)(var4);
                        var5 = var6.pushLazy;
                        var4 = _closure1_slot0;
                        var1 = 42;
                        var1 = var3[var1];
                        var10 = var4.bind(var0)(var1);
                        var1 = 136;
                        var4 = var3[var1];
                        var1 = var3.paths;
                        var4 = var10.bind(var0)(var4, var1);
                        var1 = {};
                        var1.code = var7;
                        var10 = var9 != var8;
                        var7 = undefined;
                        if (!var10) {
                            _fun77838_ip = 327;
                            continue _fun77838
                        }
                    case 317:
                        var10 = var8.message;
                        var7 = var10.content;
                    case 327:
                        var1.customMessage = var7;
                        var10 = var9 == var8;
                        var7 = undefined;
                        if (var10) {
                            _fun77838_ip = 390;
                            continue _fun77838
                        }
                    case 341:
                        var10 = var8.message;
                        var11 = var9 == var10;
                        var7 = undefined;
                        if (var11) {
                            _fun77838_ip = 390;
                            continue _fun77838
                        }
                    case 355:
                        var10 = var10.giftInfo;
                        var11 = var9 == var10;
                        var7 = undefined;
                        if (var11) {
                            _fun77838_ip = 390;
                            continue _fun77838
                        }
                    case 370:
                        var10 = var10.sound;
                        var11 = var9 == var10;
                        var7 = undefined;
                        if (var11) {
                            _fun77838_ip = 390;
                            continue _fun77838
                        }
                    case 385:
                        var7 = var10.id;
                    case 390:
                        var1.soundId = var7;
                        var10 = var9 == var8;
                        var7 = undefined;
                        if (var10) {
                            _fun77838_ip = 453;
                            continue _fun77838
                        }
                    case 404:
                        var8 = var8.message;
                        var10 = var9 == var8;
                        var7 = undefined;
                        if (var10) {
                            _fun77838_ip = 453;
                            continue _fun77838
                        }
                    case 418:
                        var8 = var8.giftInfo;
                        var10 = var9 == var8;
                        var7 = undefined;
                        if (var10) {
                            _fun77838_ip = 453;
                            continue _fun77838
                        }
                    case 433:
                        var8 = var8.emoji;
                        var9 = var9 == var8;
                        var7 = undefined;
                        if (var9) {
                            _fun77838_ip = 453;
                            continue _fun77838
                        }
                    case 448:
                        var7 = var8.name;
                    case 453:
                        var1.emojiName = var7;
                        var1 = var5.bind(var6)(var4, var1);
                        _fun77838_ip = 482;
                        continue _fun77838;
                    case 466:
                        var1 = 135;
                        var1 = var3[var1];
                        var1 = var2.bind(var0)(var1);
                        var1 = var1.bind(var0)();
                    case 482:
                        return var0;
                }
            };
            var2.handleTapGiftCodeAccept = var3;
            var3 = function() { // Environment: var1
                _fun77839: for (var _fun77839_ip = 0;;) switch (_fun77839_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 137;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.canOpenPremiumPlanDirectlyForReferralTrial;
                        var1 = var1.bind(var2)();
                        if (var1) {
                            _fun77839_ip = 88;
                            continue _fun77839
                        }
                    case 38:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var1 = 139;
                        var1 = var4[var1];
                        var4 = var2.bind(var0)(var1);
                        var2 = var4.openUserSettings;
                        var1 = {};
                        var5 = _closure1_slot58;
                        var5 = var5.PREMIUM;
                        var1.screen = var5;
                        var1 = var2.bind(var4)(var1);
                        _fun77839_ip = 183;
                        continue _fun77839;
                    case 88:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var1 = 138;
                        var1 = var6[var1];
                        var2 = var5.bind(var0)(var1);
                        var1 = {};
                        var4 = {};
                        var7 = _closure1_slot46;
                        var7 = var7.REFERRAL_MESSAGE_EMBED;
                        var4.page = var7;
                        var1.analyticsLocation = var4;
                        var4 = 78;
                        var4 = var6[var4];
                        var4 = var5.bind(var0)(var4);
                        var5 = var4.REFERRAL_MESSAGE_EMBED;
                        var4 = new Array(1);
                        var4[0] = var5;
                        var1.analyticsLocations = var4;
                        var3 = _closure1_slot65;
                        var3 = var3.TIER_2;
                        var1.premiumType = var3;
                        var1 = var2.bind(var0)(var1);
                    case 183:
                        return var0;
                }
            };
            var2.handleTapReferralRedeem = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77840: for (var _fun77840_ip = 0;;) switch (_fun77840_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var0 = var1.isModalOrActionsheetObstructing;
                        var0 = var0.bind(var1)();
                        if (var0) {
                            _fun77840_ip = 65;
                            continue _fun77840
                        }
                    case 20:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 61;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var2 = var0.contentHandlers;
                        var1 = var2.onTapEmoji;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                    case 65:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleTapEmoji = var3;
            var3 = function(arg0) { // Environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var0 = 61;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var3 = var1.contentHandlers;
                var2 = var3.onTapTimestamp;
                var1 = arg0;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var2.handleTapTimestamp = var3;
            var3 = function(arg0) { // Environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var0 = 61;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var3 = var1.contentHandlers;
                var2 = var3.onTapInlineCode;
                var1 = arg0;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var2.handleTapInlineCode = var3;
            var3 = function(arg0) { // Environment: var1
                var0 = arg0;
                var0 = var0.nativeEvent;
                var4 = var0.roleName;
                var5 = var0.roleIconSource;
                var2 = _closure1_slot1;
                var1 = _closure1_slot3;
                var0 = 140;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.open;
                var1 = {};
                var6 = global;
                var6 = var6.HermesInternal;
                var7 = var6.concat;
                var6 = 'ROLE_NAME-';
                var6 = var7.bind(var6)(var4);
                var1.key = var6;
                var1.content = var4;
                var4 = {};
                var4.uri = var5;
                var1.icon = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var2.handleTapRoleIcon = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77844: for (var _fun77844_ip = 0;;) switch (_fun77844_ip) {
                    case 0:
                        var0 = arg0;
                        var0 = var0.nativeEvent;
                        var5 = var0.gameApplicationId;
                        var0 = var0.timestamp;
                        var2 = _closure3_slot0;
                        var1 = var2.isModalOrActionsheetObstructing;
                        var1 = var1.bind(var2)();
                        if (var1) {
                            _fun77844_ip = 130;
                            continue _fun77844
                        }
                    case 41:
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var3 = 49;
                        var3 = var1[var3];
                        var7 = undefined;
                        var4 = var4.bind(var7)(var3);
                        var3 = var4.openLazy;
                        var6 = _closure1_slot0;
                        var2 = 42;
                        var2 = var1[var2];
                        var6 = var6.bind(var7)(var2);
                        var2 = 141;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var2 = var6.bind(var7)(var2, var1);
                        var1 = {};
                        var1.applicationId = var5;
                        var1.messageTimestamp = var0;
                        var0 = 'MessageGameIconActionSheet';
                        var0 = var3.bind(var4)(var2, var0, var1);
                    case 130:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleTapGameIcon = var3;
            var3 = function() { // Environment: var1
                var5 = _closure1_slot1;
                var6 = _closure1_slot3;
                var0 = 140;
                var1 = var6[var0];
                var0 = undefined;
                var3 = var5.bind(var0)(var1);
                var2 = var3.open;
                var1 = {};
                var7 = 'SUPPRESS_NOTIFICATIONS_TOOLTIP';
                var1.key = var7;
                var9 = _closure1_slot0;
                var4 = 64;
                var7 = var6[var4];
                var7 = var9.bind(var0)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var4 = var6[var4];
                var4 = var9.bind(var0)(var4);
                var4 = var4.t;
                var4 = var4["RO/KYj"];
                var4 = var7.bind(var8)(var4);
                var1.content = var4;
                var4 = 142;
                var4 = var6[var4];
                var4 = var5.bind(var0)(var4);
                var1.icon = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var2.handleTapSuppressNotificationsIcon = var3;
            var3 = function(arg0) { // Environment: var1
                var9 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 43;
                var1 = var2[var0];
                var0 = undefined;
                var5 = var9.bind(var0)(var1);
                var4 = var5.getNativeSyntheticEventData;
                var1 = arg0;
                var1 = var4.bind(var5)(var1);
                var8 = var1.userId;
                var7 = var1.guildId;
                var6 = var1.channelId;
                var1 = var1.roleId;
                var4 = _closure1_slot1;
                var3 = 49;
                var3 = var2[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.openLazy;
                var3 = 42;
                var3 = var2[var3];
                var9 = var9.bind(var0)(var3);
                var3 = 143;
                var3 = var2[var3];
                var2 = var2.paths;
                var3 = var9.bind(var0)(var3, var2);
                var2 = {};
                var2.userId = var8;
                var2.guildId = var7;
                var2.channelId = var6;
                var2.roleId = var1;
                var1 = 'ConnectionsRoleMessageBadgeActionSheet';
                var1 = var4.bind(var5)(var3, var1, var2);
                return var0;
            };
            var2.handleTapConnectionsRoleTag = var3;
            var3 = function() { // Environment: var1
                var5 = _closure1_slot1;
                var6 = _closure1_slot3;
                var0 = 140;
                var1 = var6[var0];
                var0 = undefined;
                var3 = var5.bind(var0)(var1);
                var2 = var3.open;
                var1 = {};
                var7 = 'GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY';
                var1.key = var7;
                var9 = _closure1_slot0;
                var4 = 64;
                var7 = var6[var4];
                var7 = var9.bind(var0)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var4 = var6[var4];
                var4 = var9.bind(var0)(var4);
                var4 = var4.t;
                var4 = var4["AeYyL+"];
                var4 = var7.bind(var8)(var4);
                var1.content = var4;
                var4 = 142;
                var4 = var6[var4];
                var4 = var5.bind(var0)(var4);
                var1.icon = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var2.handleTapTimeoutIcon = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77848: for (var _fun77848_ip = 0;;) switch (_fun77848_ip) {
                    case 0:
                        var4 = arg0;
                        var1 = _closure3_slot0;
                        var0 = var1.getMessageData;
                        var0 = var0.bind(var1)(var4);
                        var3 = null;
                        if (!(var3 != var0)) {
                            _fun77848_ip = 100;
                            continue _fun77848
                        }
                    case 27:
                        var0 = var0.messageChannel;
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 144;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var6.bind(var1)(var2);
                        var1 = var2.revealMessage;
                        var0 = var0.id;
                        var5 = _closure3_slot0;
                        var5 = var5.params;
                        var5 = var5.revealedMessageId;
                        var3 = null;
                        if (!(var5 !== var4)) {
                            _fun77848_ip = 94;
                            continue _fun77848
                        }
                    case 91:
                        var3 = var4;
                    case 94:
                        var0 = var1.bind(var2)(var0, var3);
                    case 100:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleReveal = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77849: for (var _fun77849_ip = 0;;) switch (_fun77849_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 43;
                        var2 = var2[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.getNativeSyntheticEventData;
                        var2 = arg0;
                        var2 = var3.bind(var4)(var2);
                        var12 = var2.messageId;
                        var8 = var2.componentId;
                        var3 = _closure3_slot0;
                        var2 = var3.getMessageData;
                        var2 = var2.bind(var3)(var12);
                        var6 = null;
                        if (!(var6 != var2)) {
                            _fun77849_ip = 619;
                            continue _fun77849
                        }
                    case 77:
                        var5 = var2.messageChannel;
                        var11 = var2.message;
                        var4 = var11.applicationId;
                        if (!(var6 == var4)) {
                            _fun77849_ip = 108;
                            continue _fun77849
                        }
                    case 97:
                        var2 = var11.author;
                        var4 = var2.id;
                    case 108:
                        var10 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var3 = 145;
                        var3 = var2[var3];
                        var9 = var10.bind(var0)(var3);
                        var7 = var9.flattenComponents;
                        var3 = var11.components;
                        var7 = var7.bind(var9)(var3);
                        var3 = var7.get;
                        var9 = 90;
                        var2 = var2[var9];
                        var10 = var10.bind(var0)(var2);
                        var2 = var10.asComponentId;
                        var2 = var2.bind(var10)(var8);
                        var10 = var3.bind(var7)(var2);
                        var2 = var6 != var10;
                        if (!var2) {
                            _fun77849_ip = 226;
                            continue _fun77849
                        }
                    case 185:
                        var7 = var10.type;
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot3;
                        var3 = 146;
                        var3 = var14[var3];
                        var3 = var13.bind(var0)(var3);
                        var3 = var3.ComponentType;
                        var3 = var3.BUTTON;
                        var2 = var7 === var3;
                    case 226:
                        if (!var2) {
                            _fun77849_ip = 239;
                            continue _fun77849
                        }
                    case 229:
                        var3 = var10.customId;
                        var2 = var6 != var3;
                    case 239:
                        if (!var2) {
                            _fun77849_ip = 619;
                            continue _fun77849
                        }
                    case 245:
                        var3 = var10.style;
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var13 = 146;
                        var2 = var2[var13];
                        var2 = var6.bind(var0)(var2);
                        var2 = var2.ButtonStyle;
                        var2 = var2.PREMIUM;
                        if (!(var3 === var2)) {
                            _fun77849_ip = 483;
                            continue _fun77849
                        }
                    case 289:
                        var3 = _closure1_slot1;
                        var17 = _closure1_slot3;
                        var2 = 147;
                        var2 = var17[var2];
                        var6 = var3.bind(var0)(var2);
                        var3 = var6.show;
                        var2 = {};
                        var16 = _closure1_slot0;
                        var7 = 64;
                        var14 = var17[var7];
                        var14 = var16.bind(var0)(var14);
                        var18 = var14.intl;
                        var15 = var18.string;
                        var14 = var17[var7];
                        var14 = var16.bind(var0)(var14);
                        var14 = var14.t;
                        var14 = var14["ZtdF0+"];
                        var14 = var15.bind(var18)(var14);
                        var2.title = var14;
                        var14 = var17[var7];
                        var14 = var16.bind(var0)(var14);
                        var18 = var14.intl;
                        var15 = var18.string;
                        var14 = var17[var7];
                        var14 = var16.bind(var0)(var14);
                        var14 = var14.t;
                        var14 = var14["0BEZLT"];
                        var14 = var15.bind(var18)(var14);
                        var2.body = var14;
                        var14 = var17[var7];
                        var14 = var16.bind(var0)(var14);
                        var15 = var14.intl;
                        var14 = var15.string;
                        var7 = var17[var7];
                        var7 = var16.bind(var0)(var7);
                        var7 = var7.t;
                        var7 = var7.BddRzS;
                        var7 = var14.bind(var15)(var7);
                        var2.confirmText = var7;
                        var2 = var3.bind(var6)(var2);
                        _fun77849_ip = 619;
                        continue _fun77849;
                    case 483:
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var1 = 148;
                        var1 = var6[var1];
                        var3 = var7.bind(var0)(var1);
                        var2 = var3.executeMessageComponentInteraction;
                        var1 = {};
                        var13 = var6[var13];
                        var13 = var7.bind(var0)(var13);
                        var13 = var13.ComponentType;
                        var13 = var13.BUTTON;
                        var1.componentType = var13;
                        var1.messageId = var12;
                        var11 = var11.flags;
                        var1.messageFlags = var11;
                        var10 = var10.customId;
                        var1.customId = var10;
                        var6 = var6[var9];
                        var7 = var7.bind(var0)(var6);
                        var6 = var7.asComponentId;
                        var6 = var6.bind(var7)(var8);
                        var1.componentId = var6;
                        var1.applicationId = var4;
                        var4 = var5.id;
                        var1.channelId = var4;
                        var4 = var5.getGuildId;
                        var4 = var4.bind(var5)();
                        var1.guildId = var4;
                        var1 = var2.bind(var3)(var1);
                    case 619:
                        return var0;
                }
            };
            var2.handleTapButtonActionComponent = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77850: for (var _fun77850_ip = 0;;) switch (_fun77850_ip) {
                    case 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var0 = 43;
                        var3 = var3[var0];
                        var0 = undefined;
                        var5 = var4.bind(var0)(var3);
                        var4 = var5.getNativeSyntheticEventData;
                        var3 = arg0;
                        var3 = var4.bind(var5)(var3);
                        var8 = var3.messageId;
                        var _closure4_slot0 = var8;
                        var13 = var3.componentId;
                        var4 = _closure3_slot0;
                        var3 = var4.getMessageData;
                        var4 = var3.bind(var4)(var8);
                        var3 = null;
                        if (!(var3 != var4)) {
                            _fun77850_ip = 884;
                            continue _fun77850
                        }
                    case 83:
                        var6 = var4.messageChannel;
                        var5 = var4.message;
                        var4 = var5.flags;
                        var _closure4_slot1 = var4;
                        var4 = var5.applicationId;
                        if (!(var3 == var4)) {
                            _fun77850_ip = 123;
                            continue _fun77850
                        }
                    case 112:
                        var7 = var5.author;
                        var4 = var7.id;
                    case 123:
                        var _closure4_slot2 = var4;
                        var9 = var6.id;
                        var _closure4_slot3 = var9;
                        var4 = var6.getGuildId;
                        var4 = var4.bind(var6)();
                        var _closure4_slot4 = var4;
                        var12 = _closure1_slot0;
                        var14 = _closure1_slot3;
                        var11 = 145;
                        var6 = var14[var11];
                        var10 = var12.bind(var0)(var6);
                        var7 = var10.flattenComponents;
                        var6 = var5.components;
                        var10 = var7.bind(var10)(var6);
                        var7 = var10.get;
                        var6 = 90;
                        var6 = var14[var6];
                        var12 = var12.bind(var0)(var6);
                        var6 = var12.asComponentId;
                        var6 = var6.bind(var12)(var13);
                        var7 = var7.bind(var10)(var6);
                        var _closure4_slot5 = var7;
                        if (!(var3 != var7)) {
                            _fun77850_ip = 884;
                            continue _fun77850
                        }
                    case 231:
                        var10 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var6 = var6[var11];
                        var10 = var10.bind(var0)(var6);
                        var6 = var10.getParents;
                        var5 = var5.components;
                        var10 = var6.bind(var10)(var5, var7);
                        var5 = var3 == var10;
                        var6 = undefined;
                        if (var5) {
                            _fun77850_ip = 281;
                            continue _fun77850
                        }
                    case 275:
                        var5 = 0;
                        var6 = var10[var5];
                    case 281:
                        var3 = var3 == var6;
                        var11 = undefined;
                        if (var3) {
                            _fun77850_ip = 295;
                            continue _fun77850
                        }
                    case 290:
                        var11 = var6.type;
                    case 295:
                        var10 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var5 = 146;
                        var3 = var3[var5];
                        var3 = var10.bind(var0)(var3);
                        var3 = var3.ComponentType;
                        var10 = var3.LABEL;
                        var3 = undefined;
                        if (!(var11 === var10)) {
                            _fun77850_ip = 336;
                            continue _fun77850
                        }
                    case 333:
                        var3 = var6;
                    case 336:
                        var6 = {};
                        var6.channelId = var9;
                        var6.guildId = var4;
                        var6.containerId = var8;
                        var6.labelComponent = var3;
                        var1 = function arg0() {
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 148;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.executeMessageComponentInteraction;
                            var1 = {};
                            var5 = _closure4_slot5;
                            var5 = var5.type;
                            var1.componentType = var5;
                            var5 = _closure4_slot0;
                            var1.messageId = var5;
                            var5 = _closure4_slot1;
                            var1.messageFlags = var5;
                            var5 = _closure4_slot5;
                            var5 = var5.customId;
                            var1.customId = var5;
                            var5 = _closure4_slot5;
                            var5 = var5.id;
                            var1.componentId = var5;
                            var5 = _closure4_slot2;
                            var1.applicationId = var5;
                            var5 = _closure4_slot3;
                            var1.channelId = var5;
                            var4 = _closure4_slot4;
                            var1.guildId = var4;
                            var4 = arg0;
                            var1.localState = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var6.onSubmit = var1;
                        var3 = var7.type;
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var1 = var1[var5];
                        var1 = var4.bind(var0)(var1);
                        var1 = var1.ComponentType;
                        var1 = var1.STRING_SELECT;
                        if (!(var1 !== var3)) {
                            _fun77850_ip = 776;
                            continue _fun77850
                        }
                    case 409:
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var1 = var1[var5];
                        var1 = var4.bind(var0)(var1);
                        var1 = var1.ComponentType;
                        var1 = var1.USER_SELECT;
                        if (!(var1 !== var3)) {
                            _fun77850_ip = 666;
                            continue _fun77850
                        }
                    case 445:
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var1 = var1[var5];
                        var1 = var4.bind(var0)(var1);
                        var1 = var1.ComponentType;
                        var1 = var1.ROLE_SELECT;
                        if (!(var1 !== var3)) {
                            _fun77850_ip = 666;
                            continue _fun77850
                        }
                    case 481:
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var1 = var1[var5];
                        var1 = var4.bind(var0)(var1);
                        var1 = var1.ComponentType;
                        var1 = var1.MENTIONABLE_SELECT;
                        if (!(var1 !== var3)) {
                            _fun77850_ip = 666;
                            continue _fun77850
                        }
                    case 517:
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var1 = var1[var5];
                        var1 = var4.bind(var0)(var1);
                        var1 = var1.ComponentType;
                        var1 = var1.CHANNEL_SELECT;
                        if (!(var1 === var3)) {
                            _fun77850_ip = 884;
                            continue _fun77850
                        }
                    case 553:
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var3 = 49;
                        var3 = var1[var3];
                        var9 = var4.bind(var0)(var3);
                        var5 = var9.openLazy;
                        var4 = _closure1_slot0;
                        var3 = 42;
                        var3 = var1[var3];
                        var4 = var4.bind(var0)(var3);
                        var3 = 151;
                        var3 = var1[var3];
                        var1 = var1.paths;
                        var4 = var4.bind(var0)(var3, var1);
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var3 = var1.concat;
                        var1 = 'ChannelSelectComponentActionSheet:';
                        var3 = var3.bind(var1)(var8);
                        var1 = {};
                        var1.selectionActionComponent = var7;
                        var17 = var1;
                        var16 = var6;
                        var10 = copyDataProperties(var17, var16);
                        var1 = var5.bind(var9)(var4, var3, var1);
                        _fun77850_ip = 884;
                        continue _fun77850;
                    case 666:
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var3 = 49;
                        var3 = var1[var3];
                        var9 = var4.bind(var0)(var3);
                        var5 = var9.openLazy;
                        var4 = _closure1_slot0;
                        var3 = 42;
                        var3 = var1[var3];
                        var4 = var4.bind(var0)(var3);
                        var3 = 150;
                        var3 = var1[var3];
                        var1 = var1.paths;
                        var4 = var4.bind(var0)(var3, var1);
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var3 = var1.concat;
                        var1 = 'MentionableSelectComponentActionSheet:';
                        var3 = var3.bind(var1)(var8);
                        var1 = {};
                        var1.selectionActionComponent = var7;
                        var17 = var1;
                        var16 = var6;
                        var10 = copyDataProperties(var17, var16);
                        var1 = var5.bind(var9)(var4, var3, var1);
                        _fun77850_ip = 884;
                        continue _fun77850;
                    case 776:
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var3 = 49;
                        var3 = var1[var3];
                        var5 = var4.bind(var0)(var3);
                        var4 = var5.openLazy;
                        var3 = _closure1_slot0;
                        var2 = 42;
                        var2 = var1[var2];
                        var3 = var3.bind(var0)(var2);
                        var2 = 149;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var3 = var3.bind(var0)(var2, var1);
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var2 = var1.concat;
                        var1 = 'StringSelectComponentActionSheet:';
                        var2 = var2.bind(var1)(var8);
                        var1 = {};
                        var1.selectionActionComponent = var7;
                        var17 = var1;
                        var16 = var6;
                        var6 = copyDataProperties(var17, var16);
                        var1 = var4.bind(var5)(var3, var2, var1);
                    case 884:
                        return var0;
                }
            };
            var2.handleTapSelectActionComponent = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77852: for (var _fun77852_ip = 0;;) switch (_fun77852_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 43;
                        var2 = var2[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.getNativeSyntheticEventData;
                        var2 = arg0;
                        var2 = var3.bind(var4)(var2);
                        var4 = var2.messageId;
                        var5 = var2.stickerId;
                        var3 = _closure3_slot0;
                        var2 = var3.getMessageData;
                        var2 = var2.bind(var3)(var4);
                        var3 = null;
                        if (!(var3 != var2)) {
                            _fun77852_ip = 191;
                            continue _fun77852
                        }
                    case 74:
                        var4 = var2.messageChannel;
                        var3 = var2.message;
                        var6 = var3.type;
                        var2 = _closure1_slot54;
                        var2 = var2.USER_JOIN;
                        if (!(var6 !== var2)) {
                            _fun77852_ip = 158;
                            continue _fun77852
                        }
                    case 104:
                        var6 = var3.type;
                        var2 = _closure1_slot54;
                        var2 = var2.ROLE_SUBSCRIPTION_PURCHASE;
                        if (!(var6 === var2)) {
                            _fun77852_ip = 191;
                            continue _fun77852
                        }
                    case 123:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var2 = 153;
                        var2 = var7[var2];
                        var6 = var6.bind(var0)(var2);
                        var2 = var6.handleRoleSubscriptionPurchaseSystemMessageCtaClicked;
                        var2 = var2.bind(var6)(var4, var3, var5);
                        _fun77852_ip = 191;
                        continue _fun77852;
                    case 158:
                        var2 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var1 = 152;
                        var1 = var6[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.handleWelcomeCtaClicked;
                        var1 = var1.bind(var2)(var4, var3, var5);
                    case 191:
                        return var0;
                }
            };
            var2.handleTapWelcomeReply = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77853: for (var _fun77853_ip = 0;;) switch (_fun77853_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 43;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var2 = var4.getNativeSyntheticEventData;
                        var1 = arg0;
                        var1 = var2.bind(var4)(var1);
                        var4 = var1.messageId;
                        var2 = _closure3_slot0;
                        var1 = var2.getMessageData;
                        var1 = var1.bind(var2)(var4);
                        var2 = null;
                        if (!(var2 != var1)) {
                            _fun77853_ip = 185;
                            continue _fun77853
                        }
                    case 68:
                        var2 = var1.messageChannel;
                        var1 = var1.message;
                        var5 = var1.type;
                        var4 = _closure1_slot54;
                        var4 = var4.STAGE_RAISE_HAND;
                        if (!(var5 === var4)) {
                            _fun77853_ip = 185;
                            continue _fun77853
                        }
                    case 98:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var4 = 154;
                        var4 = var5[var4];
                        var8 = var6.bind(var0)(var4);
                        var7 = var8.setUserSuppress;
                        var4 = var1.author;
                        var6 = var4.id;
                        var4 = false;
                        var4 = var7.bind(var8)(var2, var6, var4);
                        var4 = _closure1_slot1;
                        var3 = 144;
                        var3 = var5[var3];
                        var5 = var4.bind(var0)(var3);
                        var4 = var5.deleteMessage;
                        var3 = var2.id;
                        var2 = var1.id;
                        var1 = true;
                        var1 = var4.bind(var5)(var3, var2, var1);
                    case 185:
                        return var0;
                }
            };
            var2.handleTapInviteToSpeak = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77854: for (var _fun77854_ip = 0;;) switch (_fun77854_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 43;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var2 = var4.getNativeSyntheticEventData;
                        var1 = arg0;
                        var1 = var2.bind(var4)(var1);
                        var4 = var1.messageId;
                        var7 = var1.channelId;
                        var5 = _closure3_slot0;
                        var2 = var5.isModalOrActionsheetObstructing;
                        var2 = var2.bind(var5)();
                        if (var2) {
                            _fun77854_ip = 635;
                            continue _fun77854
                        }
                    case 72:
                        var2 = _closure3_slot0;
                        var1 = var2.getMessageData;
                        var2 = var1.bind(var2)(var4);
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun77854_ip = 635;
                            continue _fun77854
                        }
                    case 96:
                        var4 = var2.message;
                        var2 = var2.messageChannel;
                        var8 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var5 = 100;
                        var6 = var6[var5];
                        var8 = var8.bind(var0)(var6);
                        var6 = var8.isAutomodMessageRecord;
                        var6 = var6.bind(var8)(var4);
                        if (!var6) {
                            _fun77854_ip = 635;
                            continue _fun77854
                        }
                    case 144:
                        var2 = var2.id;
                        if (!(var2 === var7)) {
                            _fun77854_ip = 635;
                            continue _fun77854
                        }
                    case 156:
                        var6 = _closure1_slot23;
                        var2 = var6.getChannel;
                        var8 = var2.bind(var6)(var7);
                        var7 = _closure1_slot27;
                        var6 = var7.getGuild;
                        var9 = var1 == var8;
                        var2 = undefined;
                        if (var9) {
                            _fun77854_ip = 193;
                            continue _fun77854
                        }
                    case 188:
                        var2 = var8.guild_id;
                    case 193:
                        var6 = var6.bind(var7)(var2);
                        if (!(var1 != var6)) {
                            _fun77854_ip = 635;
                            continue _fun77854
                        }
                    case 205:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var1 = var1[var5];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.isAutomodMessageRecord;
                        var1 = var1.bind(var2)(var4);
                        if (!var1) {
                            _fun77854_ip = 270;
                            continue _fun77854
                        }
                    case 236:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var1 = var1[var5];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.isAutomodNotification;
                        var1 = var1.bind(var2)(var4);
                        if (var1) {
                            _fun77854_ip = 464;
                            continue _fun77854
                        }
                    case 270:
                        var7 = _closure1_slot25;
                        var5 = var7.isMember;
                        var2 = var6.id;
                        var1 = var4.author;
                        var1 = var1.id;
                        var1 = var5.bind(var7)(var2, var1);
                        var2 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        if (var1) {
                            _fun77854_ip = 426;
                            continue _fun77854
                        }
                    case 313:
                        var1 = 140;
                        var1 = var5[var1];
                        var8 = var2.bind(var0)(var1);
                        var7 = var8.open;
                        var1 = {};
                        var9 = 'GUILD_AUTOMOD_ERROR_MESSAGE_NOT_MEMBER';
                        var1.key = var9;
                        var12 = _closure1_slot0;
                        var9 = 64;
                        var10 = var5[var9];
                        var10 = var12.bind(var0)(var10);
                        var11 = var10.intl;
                        var10 = var11.string;
                        var9 = var5[var9];
                        var9 = var12.bind(var0)(var9);
                        var9 = var9.t;
                        var9 = var9.UsD2YP;
                        var9 = var10.bind(var11)(var9);
                        var1.content = var9;
                        var9 = 142;
                        var9 = var5[var9];
                        var9 = var2.bind(var0)(var9);
                        var1.icon = var9;
                        var1 = var7.bind(var8)(var1);
                        _fun77854_ip = 635;
                        continue _fun77854;
                    case 426:
                        var1 = 158;
                        var1 = var5[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = {};
                        var5 = var4.author;
                        var1.user = var5;
                        var1.guild = var6;
                        var1 = var2.bind(var0)(var1);
                        _fun77854_ip = 635;
                        continue _fun77854;
                    case 464:
                        var5 = _closure1_slot13;
                        var2 = var5.getGuildIncident;
                        var1 = var6.id;
                        var9 = var2.bind(var5)(var1);
                        var1 = {};
                        var7 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var5 = 155;
                        var5 = var2[var5];
                        var5 = var7.bind(var0)(var5);
                        var5 = var5.GuildIncidentActionSources;
                        var5 = var5.MESSAGE;
                        var1.source = var5;
                        var5 = 156;
                        var5 = var2[var5];
                        var8 = var7.bind(var0)(var5);
                        var5 = var8.getIncidentAlertType;
                        var5 = var5.bind(var8)(var9);
                        var1.alertType = var5;
                        var4 = var4.id;
                        var1.messageId = var4;
                        var4 = _closure1_slot1;
                        var3 = 49;
                        var3 = var2[var3];
                        var5 = var4.bind(var0)(var3);
                        var4 = var5.openLazy;
                        var3 = 42;
                        var3 = var2[var3];
                        var7 = var7.bind(var0)(var3);
                        var3 = 157;
                        var3 = var2[var3];
                        var2 = var2.paths;
                        var3 = var7.bind(var0)(var3, var2);
                        var2 = {};
                        var2.guild = var6;
                        var2.analyticsData = var1;
                        var1 = 'GuildIncidentActionsActionSheet';
                        var1 = var4.bind(var5)(var3, var1, var2);
                    case 635:
                        return var0;
                }
            };
            var2.handleTapAutoModerationActions = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77855: for (var _fun77855_ip = 0;;) switch (_fun77855_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 43;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var2 = var4.getNativeSyntheticEventData;
                        var1 = arg0;
                        var2 = var2.bind(var4)(var1);
                        var1 = var2.messageId;
                        var8 = var2.channelId;
                        var4 = _closure3_slot0;
                        var2 = var4.getMessageData;
                        var2 = var2.bind(var4)(var1);
                        var4 = null;
                        if (!(var4 != var2)) {
                            _fun77855_ip = 379;
                            continue _fun77855
                        }
                    case 76:
                        var7 = var2.message;
                        var5 = var2.messageChannel;
                        var9 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var2 = 100;
                        var6 = var6[var2];
                        var9 = var9.bind(var0)(var6);
                        var6 = var9.isAutomodMessageRecord;
                        var6 = var6.bind(var9)(var7);
                        if (!var6) {
                            _fun77855_ip = 379;
                            continue _fun77855
                        }
                    case 124:
                        var5 = var5.id;
                        if (!(var5 === var8)) {
                            _fun77855_ip = 379;
                            continue _fun77855
                        }
                    case 136:
                        var6 = _closure1_slot23;
                        var5 = var6.getChannel;
                        var6 = var5.bind(var6)(var8);
                        if (!(var4 != var6)) {
                            _fun77855_ip = 379;
                            continue _fun77855
                        }
                    case 157:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var2];
                        var5 = var5.bind(var0)(var4);
                        var4 = var5.isAutomodMessageRecord;
                        var4 = var4.bind(var5)(var7);
                        if (!var4) {
                            _fun77855_ip = 219;
                            continue _fun77855
                        }
                    case 188:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var2];
                        var5 = var5.bind(var0)(var4);
                        var4 = var5.isAutomodNotification;
                        var4 = var4.bind(var5)(var7);
                        if (var4) {
                            _fun77855_ip = 291;
                            continue _fun77855
                        }
                    case 219:
                        var4 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var2 = var8[var2];
                        var5 = var4.bind(var0)(var2);
                        var2 = var5.extractAutomodMessageFields;
                        var2 = var2.bind(var5)(var7);
                        var11 = var2.decisionId;
                        var12 = var2.content;
                        var2 = 160;
                        var2 = var8[var2];
                        var4 = var4.bind(var0)(var2);
                        var2 = var4.openSubmitFeedback;
                        var14 = var4;
                        var13 = var1;
                        var10 = var6;
                        var2 = var14[var2](var13, var12, var11, var10, var9);
                        _fun77855_ip = 379;
                        continue _fun77855;
                    case 291:
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var4 = 49;
                        var4 = var2[var4];
                        var5 = var5.bind(var0)(var4);
                        var4 = var5.openLazy;
                        var7 = _closure1_slot0;
                        var3 = 42;
                        var3 = var2[var3];
                        var7 = var7.bind(var0)(var3);
                        var3 = 159;
                        var3 = var2[var3];
                        var2 = var2.paths;
                        var3 = var7.bind(var0)(var3, var2);
                        var2 = {};
                        var6 = var6.guild_id;
                        var2.guildId = var6;
                        var2.messageId = var1;
                        var1 = 'GuildRaidResolveActionSheet';
                        var1 = var4.bind(var5)(var3, var1, var2);
                    case 379:
                        return var0;
                }
            };
            var2.handleTapAutoModerationFeedback = var3;
            var3 = function(arg0, arg1, arg2) { // Environment: var1
                _fun77856: for (var _fun77856_ip = 0;;) switch (_fun77856_ip) {
                    case 0:
                        var3 = _closure1_slot23;
                        var2 = var3.getChannel;
                        var1 = arg1;
                        var3 = var2.bind(var3)(var1);
                        var1 = null;
                        if (!(var1 != var3)) {
                            _fun77856_ip = 76;
                            continue _fun77856
                        }
                    case 26:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 161;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.transitionToThread;
                        var0 = {};
                        var4 = arg2;
                        var0.source = var4;
                        var4 = false;
                        var0.navigationReplace = var4;
                        var0 = var1.bind(var2)(var3, var0);
                    case 76:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleTransitionToThread = var3;
            var3 = function(arg0, arg1, arg2) { // Environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var0 = 161;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.transitionToMessage;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
            };
            var2.handleTransitionToMessage = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77858: for (var _fun77858_ip = 0;;) switch (_fun77858_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 43;
                        var2 = var2[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.getNativeSyntheticEventData;
                        var2 = arg0;
                        var2 = var3.bind(var4)(var2);
                        var4 = var2.messageId;
                        var6 = var2.channelId;
                        var3 = _closure3_slot0;
                        var2 = var3.getMessageData;
                        var2 = var2.bind(var3)(var4);
                        var3 = null;
                        if (!(var3 != var2)) {
                            _fun77858_ip = 126;
                            continue _fun77858
                        }
                    case 73:
                        var4 = var2.messageChannel;
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var2 = 75;
                        var2 = var5[var2];
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.handleToggleFollowForumPost;
                        var5 = _closure1_slot19;
                        var1 = var5.hasJoined;
                        var1 = var1.bind(var5)(var6);
                        var1 = var2.bind(var3)(var4, var1);
                    case 126:
                        return var0;
                }
            };
            var2.handleTapFollowForumPost = var3;
            var3 = function(arg0) { // Environment: var1
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var0 = 43;
                var1 = var3[var0];
                var0 = undefined;
                var5 = var2.bind(var0)(var1);
                var4 = var5.getNativeSyntheticEventData;
                var1 = arg0;
                var1 = var4.bind(var5)(var1);
                var5 = var1.guildId;
                var4 = var1.channelId;
                var1 = 75;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.handleCopyLinkForumPost;
                var1 = {};
                var6 = _closure1_slot47;
                var6 = var6.CHANNEL;
                var1.section = var6;
                var1 = var2.bind(var3)(var5, var4, var1);
                return var0;
            };
            var2.handleTapShareForumPost = var3;
            var3 = function() { // Environment: var1
                var0 = undefined;
                return var0;
            };
            var2.handleTapSeeMore = var3;
            var3 = function(arg0) { // Environment: var1
                var0 = arg0;
                var0 = var0.nativeEvent;
                var5 = var0.text;
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var0 = 162;
                var1 = var3[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var1 = var4.copy;
                var1 = var1.bind(var4)(var5);
                var1 = 163;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.presentCopiedToClipboard;
                var1 = var1.bind(var2)();
                return var0;
            };
            var2.handleCopyText = var3;
            var3 = function(arg0) { // Environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var0 = 43;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.getNativeSyntheticEventData;
                var1 = arg0;
                var1 = var2.bind(var3)(var1);
                var3 = var1.messageId;
                var2 = _closure3_slot0;
                var1 = var2.getMessageData;
                var1 = var1.bind(var2)(var3);
                return var0;
            };
            var2.handleTapTag = var3;
            var3 = function() { // Environment: var1
                var2 = _closure1_slot1;
                var6 = _closure1_slot3;
                var0 = 140;
                var1 = var6[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.open;
                var1 = {};
                var5 = _closure3_slot0;
                var5 = var5.params;
                var8 = var5.selectedChannelId;
                var5 = global;
                var5 = var5.HermesInternal;
                var7 = var5.concat;
                var5 = 'FORUM_OP-';
                var5 = var7.bind(var5)(var8);
                var1.key = var5;
                var5 = _closure1_slot0;
                var4 = 164;
                var4 = var6[var4];
                var4 = var5.bind(var0)(var4);
                var4 = var4.getForumOriginalPoster;
                var1.content = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var2.handleTapOpTag = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77864: for (var _fun77864_ip = 0;;) switch (_fun77864_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 43;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var1);
                        var3 = var4.getNativeSyntheticEventData;
                        var1 = arg0;
                        var1 = var3.bind(var4)(var1);
                        var6 = var1.messageId;
                        var5 = var1.totalDurationSecs;
                        var4 = var1.startDurationSecs;
                        var8 = var1.isVoiceMessage;
                        var1 = var1.attachmentId;
                        var _closure4_slot0 = var1;
                        var3 = _closure3_slot0;
                        var1 = var3.getMessageData;
                        var1 = var1.bind(var3)(var6);
                        var3 = null;
                        if (!(var3 != var1)) {
                            _fun77864_ip = 296;
                            continue _fun77864
                        }
                    case 103:
                        if (!(var0 !== var8)) {
                            _fun77864_ip = 238;
                            continue _fun77864
                        }
                    case 110:
                        if (var8) {
                            _fun77864_ip = 238;
                            continue _fun77864
                        }
                    case 116:
                        var9 = var1.message;
                        var8 = var9.getContentMessage;
                        var8 = var8.bind(var9)();
                        var9 = var3 == var8;
                        var10 = undefined;
                        if (var9) {
                            _fun77864_ip = 163;
                            continue _fun77864
                        }
                    case 140:
                        var9 = var8.attachments;
                        var8 = var9.find;
                        var7 = function(arg0) { // Environment: var7
                            var0 = arg0;
                            var1 = var0.id;
                            var0 = _closure4_slot0;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var10 = var8.bind(var9)(var7);
                    case 163:
                        if (!(var3 != var10)) {
                            _fun77864_ip = 236;
                            continue _fun77864
                        }
                    case 167:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var3 = 166;
                        var3 = var8[var3];
                        var9 = var7.bind(var0)(var3);
                        var8 = var9.logMediaAttachmentPlaybackStarted;
                        var16 = var1.messageChannel;
                        var3 = var1.message;
                        var3 = var3.author;
                        var11 = var3.id;
                        var17 = var9;
                        var15 = var10;
                        var14 = var5;
                        var13 = var6;
                        var12 = var4;
                        var3 = var17[var8](var16, var15, var14, var13, var12, var11, var10);
                        _fun77864_ip = 296;
                        continue _fun77864;
                    case 236:
                        return var0;
                    case 238:
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var2 = 165;
                        var2 = var7[var2];
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.logVoiceMessagePlaybackStarted;
                        var1 = var1.message;
                        var1 = var1.author;
                        var13 = var1.id;
                        var17 = var3;
                        var16 = var6;
                        var15 = var5;
                        var14 = var4;
                        var1 = var17[var2](var16, var15, var14, var13, var12);
                    case 296:
                        return var0;
                }
            };
            var2.handleMediaAttachmentPlaybackStarted = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77866: for (var _fun77866_ip = 0;;) switch (_fun77866_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 43;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var1);
                        var3 = var4.getNativeSyntheticEventData;
                        var1 = arg0;
                        var1 = var3.bind(var4)(var1);
                        var7 = var1.messageId;
                        var6 = var1.totalDurationSecs;
                        var5 = var1.endDurationSecs;
                        var4 = var1.durationListeningSecs;
                        var9 = var1.isVoiceMessage;
                        var1 = var1.attachmentId;
                        var _closure4_slot0 = var1;
                        var3 = _closure3_slot0;
                        var1 = var3.getMessageData;
                        var1 = var1.bind(var3)(var7);
                        var3 = null;
                        if (!(var3 != var1)) {
                            _fun77866_ip = 301;
                            continue _fun77866
                        }
                    case 111:
                        if (!(var0 !== var9)) {
                            _fun77866_ip = 240;
                            continue _fun77866
                        }
                    case 118:
                        if (var9) {
                            _fun77866_ip = 240;
                            continue _fun77866
                        }
                    case 121:
                        var10 = var1.message;
                        var9 = var10.getContentMessage;
                        var9 = var9.bind(var10)();
                        var11 = var3 == var9;
                        var10 = undefined;
                        if (var11) {
                            _fun77866_ip = 168;
                            continue _fun77866
                        }
                    case 145:
                        var11 = var9.attachments;
                        var9 = var11.find;
                        var8 = function(arg0) { // Environment: var8
                            var0 = arg0;
                            var1 = var0.id;
                            var0 = _closure4_slot0;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var10 = var9.bind(var11)(var8);
                    case 168:
                        if (!(var3 != var10)) {
                            _fun77866_ip = 238;
                            continue _fun77866
                        }
                    case 172:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var3 = 166;
                        var3 = var9[var3];
                        var9 = var8.bind(var0)(var3);
                        var8 = var9.logMediaAttachmentPlaybackEnded;
                        var3 = var1.message;
                        var3 = var3.author;
                        var14 = var3.id;
                        var18 = var9;
                        var17 = var7;
                        var16 = var6;
                        var15 = var5;
                        var13 = var4;
                        var12 = var10;
                        var3 = var18[var8](var17, var16, var15, var14, var13, var12, var11);
                        _fun77866_ip = 301;
                        continue _fun77866;
                    case 238:
                        return var0;
                    case 240:
                        var3 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var2 = 165;
                        var2 = var8[var2];
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.logVoiceMessagePlaybackEnded;
                        var1 = var1.message;
                        var1 = var1.author;
                        var14 = var1.id;
                        var18 = var3;
                        var17 = var7;
                        var16 = var6;
                        var15 = var5;
                        var13 = var4;
                        var1 = var18[var2](var17, var16, var15, var14, var13, var12);
                    case 301:
                        return var0;
                }
            };
            var2.handleMediaAttachmentPlaybackEnded = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77868: for (var _fun77868_ip = 0;;) switch (_fun77868_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var0 = 43;
                        var1 = var3[var0];
                        var0 = undefined;
                        var6 = var2.bind(var0)(var1);
                        var5 = var6.getNativeSyntheticEventData;
                        var1 = arg0;
                        var1 = var5.bind(var6)(var1);
                        var9 = var1.messageId;
                        var5 = var1.errorMessage;
                        var1 = 165;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.logVoiceMessagePlaybackFailed;
                        var1 = null;
                        var6 = var1 != var5;
                        if (!var6) {
                            _fun77868_ip = 80;
                            continue _fun77868
                        }
                    case 77:
                        var1 = var5;
                    case 80:
                        var1 = var2.bind(var3)(var9, var1);
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var1 = 140;
                        var1 = var6[var1];
                        var3 = var5.bind(var0)(var1);
                        var2 = var3.open;
                        var1 = {};
                        var7 = global;
                        var7 = var7.HermesInternal;
                        var8 = var7.concat;
                        var7 = 'AUDIO_PLAYBACK_FAILED-';
                        var7 = var8.bind(var7)(var9);
                        var1.key = var7;
                        var9 = _closure1_slot0;
                        var4 = 64;
                        var7 = var6[var4];
                        var7 = var9.bind(var0)(var7);
                        var8 = var7.intl;
                        var7 = var8.string;
                        var4 = var6[var4];
                        var4 = var9.bind(var0)(var4);
                        var4 = var4.t;
                        var4 = var4.gRHMh8;
                        var4 = var7.bind(var8)(var4);
                        var1.content = var4;
                        var4 = 142;
                        var4 = var6[var4];
                        var4 = var5.bind(var0)(var4);
                        var1.icon = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                }
            };
            var2.handleVoiceMessagePlaybackFailed = var3;
            var3 = function() { // Environment: var1
                var3 = _closure1_slot8;
                var2 = undefined;
                var1 = function*(arg0) { // Environment: var0
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun77871: for (var _fun77871_ip = 0;;) switch (_fun77871_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun77871_ip = 344;
                                    continue _fun77871
                                }
                            case 10:
                                var1 = undefined;
                                var4 = undefined;
                                var2 = undefined;
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot3;
                                var5 = 43;
                                var5 = var7[var5];
                                var7 = var6.bind(var1)(var5);
                                var6 = var7.getNativeSyntheticEventData;
                                var5 = arg0;
                                var5 = var6.bind(var7)(var5);
                                var10 = var5.guildId;
                                var4 = var10;
                                var2 = var5.parentChannelId;
                                var6 = var5.threadId;
                                var5 = var5.messageId;
                                var9 = _closure1_slot25;
                                var8 = var9.isMember;
                                var11 = _closure1_slot36;
                                var7 = var11.getCurrentUser;
                                var11 = var7.bind(var11)();
                                var12 = null;
                                var13 = var12 == var11;
                                var7 = undefined;
                                if (var13) {
                                    _fun77871_ip = 117;
                                    continue _fun77871
                                }
                            case 112:
                                var7 = var11.id;
                            case 117:
                                var7 = var8.bind(var9)(var10, var7);
                                var10 = _closure1_slot23;
                                var9 = var10.getChannel;
                                var8 = var2;
                                var15 = var9.bind(var10)(var8);
                                var9 = _closure1_slot0;
                                var10 = _closure1_slot3;
                                var8 = 99;
                                var8 = var10[var8];
                                var11 = var9.bind(var1)(var8);
                                var10 = var11.trackWithMetadata;
                                var8 = _closure1_slot41;
                                var9 = var8.MEDIA_POST_PREVIEW_EMBED_CLICKED;
                                var8 = {};
                                var8.media_post_id = var6;
                                var12 = var12 != var15;
                                if (!var12) {
                                    _fun77871_ip = 221;
                                    continue _fun77871
                                }
                            case 190:
                                var14 = _closure1_slot0;
                                var16 = _closure1_slot3;
                                var13 = 54;
                                var13 = var16[var13];
                                var14 = var14.bind(var1)(var13);
                                var13 = var14.canViewChannel;
                                var12 = var13.bind(var14)(var15);
                            case 221:
                                var8.can_access = var12;
                                var8.is_member = var7;
                                var8 = var10.bind(var11)(var9, var8);
                                if (var7) {
                                    _fun77871_ip = 308;
                                    continue _fun77871
                                }
                            case 242: // try_start_0
                                var8 = _closure1_slot2;
                                var9 = _closure1_slot3;
                                var7 = 56;
                                var7 = var9[var7];
                                var10 = var8.bind(var1)(var7);
                                var9 = var10.startLurking;
                                var8 = var4;
                                var7 = {};
                                var4 = var2;
                                var7.channelId = var4;
                                var4 = {};
                                var4 = var9.bind(var10)(var8, var4, var7);
                                SaveGenerator(address = 293);
                            case 291:
                                return var4;
                            case 293:
                                ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 7);
                                if (var7) {
                                    _fun77871_ip = 301;
                                    continue _fun77871
                                }
                            case 299: // try_end0
                                _fun77871_ip = 341;
                                continue _fun77871;
                            case 301:
                                return var4;
                            case 304: // catch_target0
                                CatchBlockStart(arg_register = 4);
                                _fun77871_ip = 341;
                                continue _fun77871;
                            case 308:
                                var4 = _closure1_slot0;
                                var7 = _closure1_slot3;
                                var3 = 161;
                                var3 = var7[var3];
                                var4 = var4.bind(var1)(var3);
                                var3 = var4.tryTransitionToThreadMessage;
                                var2 = var3.bind(var4)(var2, var6, var5);
                            case 341:
                                return var1;
                            case 344:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var3.bind(var2)(var1);
                var _closure4_slot0 = var1;
                var0 = function() { // Environment: var0
                    var0 = undefined;
                    var3 = _closure4_slot0;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                return var0;
            };
            var3 = var3.bind(var0)();
            var2.handleTapPostPreviewEmbed = var3;
            var3 = function(arg0) { // Environment: var1
                var3 = _closure1_slot0;
                var6 = _closure1_slot3;
                var0 = 43;
                var2 = var6[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.getNativeSyntheticEventData;
                var2 = arg0;
                var2 = var3.bind(var4)(var2);
                var5 = var2.messageId;
                var3 = _closure1_slot2;
                var2 = 167;
                var2 = var6[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.dismissMediaPostSharePrompt;
                var4 = _closure1_slot1;
                var1 = 87;
                var1 = var6[var1];
                var4 = var4.bind(var0)(var1);
                var1 = var4.castMessageIdAsChannelId;
                var1 = var1.bind(var4)(var5);
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var2.handleTapDismissMediaPostSharePrompt = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77874: for (var _fun77874_ip = 0;;) switch (_fun77874_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 43;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var2 = var4.getNativeSyntheticEventData;
                        var1 = arg0;
                        var1 = var2.bind(var4)(var1);
                        var5 = var1.messageId;
                        var11 = var1.channelId;
                        var4 = var1.buttonType;
                        var2 = _closure1_slot23;
                        var1 = var2.getChannel;
                        var1 = var1.bind(var2)(var11);
                        var8 = null;
                        if (!(var8 != var1)) {
                            _fun77874_ip = 506;
                            continue _fun77874
                        }
                    case 80:
                        var6 = _closure1_slot29;
                        var2 = var6.getMessage;
                        var6 = var2.bind(var6)(var11, var5);
                        if (!(var8 != var6)) {
                            _fun77874_ip = 506;
                            continue _fun77874
                        }
                    case 103:
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot3;
                        var2 = 128;
                        var2 = var9[var2];
                        var10 = var7.bind(var0)(var2);
                        var9 = var10.track;
                        var2 = _closure1_slot41;
                        var7 = var2.CHANNEL_PROMPT_ACTION_CLICKED;
                        var2 = {};
                        var2.message_id = var5;
                        var2.channel_id = var11;
                        var11 = var1.guild_id;
                        var2.guild_id = var11;
                        var2.action_type = var4;
                        var2 = var9.bind(var10)(var7, var2);
                        var2 = 'camera';
                        if (!(var2 !== var4)) {
                            _fun77874_ip = 399;
                            continue _fun77874
                        }
                    case 180:
                        var2 = 'emoji';
                        if (!(var2 !== var4)) {
                            _fun77874_ip = 365;
                            continue _fun77874
                        }
                    case 191:
                        var2 = 'gif';
                        if (!(var2 === var4)) {
                            _fun77874_ip = 506;
                            continue _fun77874
                        }
                    case 202:
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var2 = 170;
                        var2 = var7[var2];
                        var7 = var4.bind(var0)(var2);
                        var4 = var7.createPendingReply;
                        var2 = {};
                        var2.message = var6;
                        var2.channel = var1;
                        var9 = true;
                        var2.shouldMention = var9;
                        var2 = var4.bind(var7)(var2);
                        var2 = _closure3_slot0;
                        var2 = var2.params;
                        var4 = var2.chatInputRef;
                        var2 = var8 == var4;
                        var7 = var4;
                        if (var2) {
                            _fun77874_ip = 291;
                            continue _fun77874
                        }
                    case 279:
                        var4 = var4.current;
                        var2 = var8 == var4;
                        var7 = var4;
                    case 291:
                        if (var2) {
                            _fun77874_ip = 506;
                            continue _fun77874
                        }
                    case 297:
                        var4 = var7.openCustomKeyboard;
                        var2 = {};
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var8 = 171;
                        var8 = var10[var8];
                        var8 = var9.bind(var0)(var8);
                        var8 = var8.KeyboardTypes;
                        var8 = var8.EXPRESSION;
                        var2.type = var8;
                        var8 = _closure1_slot61;
                        var8 = var8.GIF;
                        var2.context = var8;
                        var2 = var4.bind(var7)(var2);
                        _fun77874_ip = 506;
                        continue _fun77874;
                    case 365:
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var2 = 169;
                        var2 = var7[var2];
                        var4 = var4.bind(var0)(var2);
                        var2 = var4.sendRandomStickerOrEmoji;
                        var2 = var2.bind(var4)(var5, var1);
                        _fun77874_ip = 506;
                        continue _fun77874;
                    case 399:
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var4 = 49;
                        var4 = var2[var4];
                        var5 = var5.bind(var0)(var4);
                        var4 = var5.openLazy;
                        var7 = _closure1_slot0;
                        var3 = 42;
                        var3 = var2[var3];
                        var7 = var7.bind(var0)(var3);
                        var3 = 168;
                        var3 = var2[var3];
                        var2 = var2.paths;
                        var3 = var7.bind(var0)(var3, var2);
                        var2 = {};
                        var2.message = var6;
                        var2.channel = var1;
                        var1 = _closure3_slot0;
                        var1 = var1.params;
                        var1 = var1.chatInputRef;
                        var2.chatInputRef = var1;
                        var1 = 'ChannelPromptPhoto';
                        var1 = var4.bind(var5)(var3, var1, var2);
                    case 506:
                        return var0;
                }
            };
            var2.handleTapChannelPromptButton = var3;
            var3 = function(arg0) { // Environment: var1
                var9 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 43;
                var1 = var2[var0];
                var0 = undefined;
                var5 = var9.bind(var0)(var1);
                var4 = var5.getNativeSyntheticEventData;
                var1 = arg0;
                var1 = var4.bind(var5)(var1);
                var8 = var1.messageId;
                var7 = var1.channelId;
                var6 = var1.attachmentId;
                var1 = var1.embedId;
                var4 = _closure1_slot1;
                var3 = 49;
                var3 = var2[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.openLazy;
                var3 = 42;
                var3 = var2[var3];
                var9 = var9.bind(var0)(var3);
                var3 = 172;
                var3 = var2[var3];
                var2 = var2.paths;
                var3 = var9.bind(var0)(var3, var2);
                var2 = {};
                var2.messageId = var8;
                var2.channelId = var7;
                var2.attachmentId = var6;
                var2.embedId = var1;
                var1 = 'ExplicitMediaLearnMore';
                var1 = var4.bind(var5)(var3, var1, var2);
                return var0;
            };
            var2.handleTapObscuredMediaLearnMore = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77876: for (var _fun77876_ip = 0;;) switch (_fun77876_ip) {
                    case 0:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 43;
                        var3 = var2[var0];
                        var0 = undefined;
                        var6 = var5.bind(var0)(var3);
                        var4 = var6.getNativeSyntheticEventData;
                        var3 = arg0;
                        var3 = var4.bind(var6)(var3);
                        var4 = var3.messageId;
                        var4 = var3.channelId;
                        var4 = var3.isReveal;
                        var6 = var3.attachmentId;
                        var3 = var3.embedId;
                        var3 = 173;
                        var2 = var2[var3];
                        var5 = var5.bind(var0)(var2);
                        var2 = var5.shouldAgeVerifyForExplicitMedia;
                        var5 = var2.bind(var5)();
                        var2 = var4;
                        if (!var2) {
                            _fun77876_ip = 100;
                            continue _fun77876
                        }
                    case 97:
                        var2 = var5;
                    case 100:
                        if (!var2) {
                            _fun77876_ip = 169;
                            continue _fun77876
                        }
                    case 103:
                        var5 = _closure1_slot1;
                        var9 = _closure1_slot3;
                        var2 = 174;
                        var2 = var9[var2];
                        var6 = var5.bind(var0)(var2);
                        var5 = var6.showAgeVerificationGetStartedModal;
                        var2 = {};
                        var8 = _closure1_slot0;
                        var7 = 175;
                        var7 = var9[var7];
                        var7 = var8.bind(var0)(var7);
                        var7 = var7.AgeVerificationModalEntryPoint;
                        var7 = var7.OBSCURED_MEDIA;
                        var2.entryPoint = var7;
                        var2 = var5.bind(var6)(var2);
                    case 169:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var1 = var1[var3];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.trackToggleMediaObscurityV2;
                        var1 = {};
                        var1.obscure = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                }
            };
            var2.onTapObscuredMediaToggle = var3;
            var3 = function(arg0) { // Environment: var1
                var6 = _closure1_slot0;
                var1 = _closure1_slot3;
                var0 = 43;
                var3 = var1[var0];
                var0 = undefined;
                var5 = var6.bind(var0)(var3);
                var4 = var5.getNativeSyntheticEventData;
                var3 = arg0;
                var3 = var4.bind(var5)(var3);
                var5 = var3.classificationId;
                var3 = _closure1_slot1;
                var2 = 46;
                var2 = var1[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.pushLazy;
                var2 = 42;
                var2 = var1[var2];
                var6 = var6.bind(var0)(var2);
                var2 = 176;
                var2 = var1[var2];
                var1 = var1.paths;
                var2 = var6.bind(var0)(var2, var1);
                var1 = {};
                var1.classificationId = var5;
                var5 = true;
                var1.shouldRedirectToAccountStanding = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
            };
            var2.handleTapSafetyPolicyNoticeEmbed = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77878: for (var _fun77878_ip = 0;;) switch (_fun77878_ip) {
                    case 0:
                        var0 = arg0;
                        var0 = var0.nativeEvent;
                        var2 = var0.ctaType;
                        var4 = var0.ctaKey;
                        var0 = _closure1_slot67;
                        var0 = var0.POLICY_VIOLATION_DETAIL;
                        if (!(var0 !== var2)) {
                            _fun77878_ip = 101;
                            continue _fun77878
                        }
                    case 40:
                        var0 = _closure1_slot67;
                        var0 = var0.LEARN_MORE_LINK;
                        if (!(var0 === var2)) {
                            _fun77878_ip = 189;
                            continue _fun77878
                        }
                    case 57:
                        var0 = null;
                        if (!(var0 != var4)) {
                            _fun77878_ip = 189;
                            continue _fun77878
                        }
                    case 66:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var0 = 108;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var0 = var2.openURL;
                        var0 = var0.bind(var2)(var4);
                        _fun77878_ip = 189;
                        continue _fun77878;
                    case 101:
                        var0 = null;
                        if (!(var0 != var4)) {
                            _fun77878_ip = 189;
                            continue _fun77878
                        }
                    case 107:
                        var3 = _closure1_slot1;
                        var0 = _closure1_slot3;
                        var2 = 46;
                        var2 = var0[var2];
                        var6 = undefined;
                        var3 = var3.bind(var6)(var2);
                        var2 = var3.pushLazy;
                        var5 = _closure1_slot0;
                        var1 = 42;
                        var1 = var0[var1];
                        var5 = var5.bind(var6)(var1);
                        var1 = 176;
                        var1 = var0[var1];
                        var0 = var0.paths;
                        var1 = var5.bind(var6)(var1, var0);
                        var0 = {};
                        var0.classificationId = var4;
                        var4 = true;
                        var0.shouldRedirectToAccountStanding = var4;
                        var0 = var2.bind(var3)(var1, var0);
                    case 189:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.handleTapSafetySystemNotificationCta = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77879: for (var _fun77879_ip = 0;;) switch (_fun77879_ip) {
                    case 0:
                        var4 = _closure3_slot0;
                        var3 = var4.replaceCorrectMessageParams;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 43;
                        var2 = var2[var0];
                        var0 = undefined;
                        var6 = var5.bind(var0)(var2);
                        var5 = var6.castNativeSyntheticEventData;
                        var2 = arg0;
                        var2 = var5.bind(var6)(var2);
                        var3 = var3.bind(var4)(var2);
                        var2 = null;
                        if (!(var2 != var3)) {
                            _fun77879_ip = 94;
                            continue _fun77879
                        }
                    case 63:
                        var2 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 177;
                        var1 = var4[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.handlePollAnswerTapped;
                        var1 = var1.bind(var2)(var3);
                    case 94:
                        return var0;
                }
            };
            var2.handleTapPollAnswer = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77880: for (var _fun77880_ip = 0;;) switch (_fun77880_ip) {
                    case 0:
                        var4 = _closure3_slot0;
                        var3 = var4.replaceCorrectMessageParams;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 43;
                        var2 = var2[var0];
                        var0 = undefined;
                        var6 = var5.bind(var0)(var2);
                        var5 = var6.castNativeSyntheticEventData;
                        var2 = arg0;
                        var2 = var5.bind(var6)(var2);
                        var3 = var3.bind(var4)(var2);
                        var2 = null;
                        if (!(var2 != var3)) {
                            _fun77880_ip = 94;
                            continue _fun77880
                        }
                    case 63:
                        var2 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 177;
                        var1 = var4[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.handlePollSubmitVote;
                        var1 = var1.bind(var2)(var3);
                    case 94:
                        return var0;
                }
            };
            var2.handleTapPollSubmitVote = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77881: for (var _fun77881_ip = 0;;) switch (_fun77881_ip) {
                    case 0:
                        var4 = _closure3_slot0;
                        var3 = var4.replaceCorrectMessageParams;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 43;
                        var2 = var2[var0];
                        var0 = undefined;
                        var6 = var5.bind(var0)(var2);
                        var5 = var6.castNativeSyntheticEventData;
                        var2 = arg0;
                        var2 = var5.bind(var6)(var2);
                        var3 = var3.bind(var4)(var2);
                        var2 = null;
                        if (!(var2 != var3)) {
                            _fun77881_ip = 94;
                            continue _fun77881
                        }
                    case 63:
                        var2 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 177;
                        var1 = var4[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.handlePollActionTapped;
                        var1 = var1.bind(var2)(var3);
                    case 94:
                        return var0;
                }
            };
            var2.handleTapPollAction = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77882: for (var _fun77882_ip = 0;;) switch (_fun77882_ip) {
                    case 0:
                        var6 = _closure3_slot0;
                        var5 = var6.replaceCorrectMessageParams;
                        var7 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 43;
                        var2 = var2[var0];
                        var0 = undefined;
                        var8 = var7.bind(var0)(var2);
                        var7 = var8.castNativeSyntheticEventData;
                        var2 = arg0;
                        var2 = var7.bind(var8)(var2);
                        var5 = var5.bind(var6)(var2);
                        var _closure4_slot0 = var5;
                        var2 = null;
                        if (!(var2 != var5)) {
                            _fun77882_ip = 240;
                            continue _fun77882
                        }
                    case 72:
                        var7 = _closure3_slot0;
                        var6 = var7.getMessageData;
                        var4 = var5.messageId;
                        var4 = var6.bind(var7)(var4);
                        if (!(var2 != var4)) {
                            _fun77882_ip = 240;
                            continue _fun77882
                        }
                    case 99:
                        var9 = var4.message;
                        var4 = var4.messageChannel;
                        var7 = var9.attachments;
                        var6 = var7.findIndex;
                        var3 = function(arg0) { // Environment: var3
                            var0 = arg0;
                            var1 = var0.id;
                            var0 = _closure4_slot0;
                            var0 = var0.attachmentId;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var6 = var6.bind(var7)(var3);
                        if (!(var2 != var6)) {
                            _fun77882_ip = 240;
                            continue _fun77882
                        }
                    case 138:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 178;
                        var1 = var3[var1];
                        var8 = var2.bind(var0)(var1);
                        var7 = var8.extractMediaSourcesFromMessage;
                        var1 = var4.guild_id;
                        var7 = var7.bind(var8)(var9, var9, var1);
                        var1 = 179;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.openMediaModal;
                        var1 = {};
                        var1.initialSources = var7;
                        var1.initialIndex = var6;
                        var5 = var5.layout;
                        var1.originViewOrOriginLayout = var5;
                        var5 = 'Channel';
                        var1.analyticsSource = var5;
                        var4 = var4.id;
                        var1.channelId = var4;
                        var1 = var2.bind(var3)(var1);
                    case 240:
                        return var0;
                }
            };
            var2.handleLongPressPollImage = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77884: for (var _fun77884_ip = 0;;) switch (_fun77884_ip) {
                    case 0:
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 43;
                        var3 = var2[var0];
                        var0 = undefined;
                        var5 = var6.bind(var0)(var3);
                        var4 = var5.getNativeSyntheticEventData;
                        var3 = arg0;
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.messageId;
                        var3 = var5.channelId;
                        var5 = var5.callback;
                        var7 = 180;
                        var2 = var2[var7];
                        var2 = var6.bind(var0)(var2);
                        var2 = var2.CtaButtonType;
                        var2 = var2.MARK_AS_FALSE_POSITIVE;
                        if (!(var2 !== var5)) {
                            _fun77884_ip = 232;
                            continue _fun77884
                        }
                    case 86:
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var2 = var2[var7];
                        var2 = var6.bind(var0)(var2);
                        var2 = var2.CtaButtonType;
                        var2 = var2.AGE_VERIFICATION_RETRY;
                        if (!(var2 === var5)) {
                            _fun77884_ip = 264;
                            continue _fun77884
                        }
                    case 122:
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var2 = 174;
                        var2 = var8[var2];
                        var9 = var5.bind(var0)(var2);
                        var6 = var9.showAgeVerificationGetStartedModal;
                        var5 = {};
                        var7 = _closure1_slot0;
                        var2 = 175;
                        var10 = var8[var2];
                        var10 = var7.bind(var0)(var10);
                        var10 = var10.AgeVerificationModalEntryPoint;
                        var10 = var10.SYSTEM_DM_RETRY_BUTTON;
                        var5.entryPoint = var10;
                        var5 = var6.bind(var9)(var5);
                        var5 = var8[var2];
                        var6 = var7.bind(var0)(var5);
                        var5 = var6.trackAgeVerificationDmClicked;
                        var2 = var8[var2];
                        var2 = var7.bind(var0)(var2);
                        var2 = var2.AgeVerificationDmCta;
                        var2 = var2.RETRY;
                        var2 = var5.bind(var6)(var2, var3);
                        _fun77884_ip = 264;
                        continue _fun77884;
                    case 232:
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var1 = 181;
                        var1 = var5[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.handleSenderFalsePositiveFlow;
                        var1 = var1.bind(var2)(var3, var4);
                    case 264:
                        return var0;
                }
            };
            var2.handleTapCtaButton = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77885: for (var _fun77885_ip = 0;;) switch (_fun77885_ip) {
                    case 0:
                        var2 = arg0;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var0 = 43;
                        var3 = var4[var0];
                        var0 = undefined;
                        var6 = var5.bind(var0)(var3);
                        var3 = var6.getNativeSyntheticEventData;
                        var3 = var3.bind(var6)(var2);
                        var3 = var3.messageId;
                        var10 = 182;
                        var4 = var4[var10];
                        var5 = var5.bind(var0)(var4);
                        var4 = var5.getMessageAccessibilityActionFromLabel;
                        var2 = var2.nativeEvent;
                        var2 = var2.action;
                        var7 = var4.bind(var5)(var2);
                        var2 = _closure3_slot0;
                        var4 = var2.params;
                        var2 = var4.getMessage;
                        var8 = var4.chatInputRef;
                        var2 = var2.bind(var0)(var3);
                        var4 = null;
                        if (!(var4 != var2)) {
                            _fun77885_ip = 427;
                            continue _fun77885
                        }
                    case 117:
                        var9 = _closure1_slot23;
                        var6 = var9.getChannel;
                        var5 = var2.channel_id;
                        var5 = var6.bind(var9)(var5);
                        var9 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var6 = var6[var10];
                        var6 = var9.bind(var0)(var6);
                        var6 = var6.MessageAccessibilityAction;
                        var6 = var6.VIEW_PROFILE;
                        if (!(var6 !== var7)) {
                            _fun77885_ip = 350;
                            continue _fun77885
                        }
                    case 172:
                        var9 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var6 = var6[var10];
                        var6 = var9.bind(var0)(var6);
                        var6 = var6.MessageAccessibilityAction;
                        var6 = var6.REPLY;
                        if (!(var6 !== var7)) {
                            _fun77885_ip = 290;
                            continue _fun77885
                        }
                    case 205:
                        var9 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var6 = var6[var10];
                        var6 = var9.bind(var0)(var6);
                        var6 = var6.MessageAccessibilityAction;
                        var6 = var6.ADD_REACTION;
                        if (!(var6 === var7)) {
                            _fun77885_ip = 427;
                            continue _fun77885
                        }
                    case 241:
                        if (!(var4 != var5)) {
                            _fun77885_ip = 427;
                            continue _fun77885
                        }
                    case 248:
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var6 = 76;
                        var6 = var9[var6];
                        var9 = var7.bind(var0)(var6);
                        var7 = var9.handleAddNewReactions;
                        var6 = var2.id;
                        var6 = var7.bind(var9)(var5, var6);
                        _fun77885_ip = 427;
                        continue _fun77885;
                    case 290:
                        if (!(var4 != var5)) {
                            _fun77885_ip = 427;
                            continue _fun77885
                        }
                    case 297:
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot3;
                        var6 = 95;
                        var6 = var9[var6];
                        var7 = var7.bind(var0)(var6);
                        var6 = {};
                        var6.message = var2;
                        var6.channel = var5;
                        var6.chatInputRef = var8;
                        var8 = 'a11y_action';
                        var6.actionSource = var8;
                        var6 = var7.bind(var0)(var6);
                        _fun77885_ip = 427;
                        continue _fun77885;
                    case 350:
                        var7 = var4 == var2;
                        var6 = undefined;
                        if (var7) {
                            _fun77885_ip = 365;
                            continue _fun77885
                        }
                    case 359:
                        var6 = var2.author;
                    case 365:
                        if (!(var4 != var6)) {
                            _fun77885_ip = 427;
                            continue _fun77885
                        }
                    case 369:
                        var2 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var1 = 86;
                        var1 = var7[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = {};
                        var6 = var6.id;
                        var1.userId = var6;
                        var6 = var4 == var5;
                        var4 = undefined;
                        if (var6) {
                            _fun77885_ip = 414;
                            continue _fun77885
                        }
                    case 409:
                        var4 = var5.id;
                    case 414:
                        var1.channelId = var4;
                        var1.messageId = var3;
                        var1 = var2.bind(var0)(var1);
                    case 427:
                        return var0;
                }
            };
            var2.handleMessageAccessibilityAction = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77886: for (var _fun77886_ip = 0;;) switch (_fun77886_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 43;
                        var2 = var2[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.getNativeSyntheticEventData;
                        var2 = arg0;
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure3_slot0;
                        var4 = var3.params;
                        var3 = var4.getMessage;
                        var2 = var2.messageId;
                        var2 = var3.bind(var4)(var2);
                        var3 = null;
                        if (!(var3 != var2)) {
                            _fun77886_ip = 99;
                            continue _fun77886
                        }
                    case 74:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 183;
                        var1 = var4[var1];
                        var1 = var3.bind(var0)(var1);
                        var1 = var1.bind(var0)(var2);
                    case 99:
                        return var0;
                }
            };
            var2.handleTapForwardFooter = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77887: for (var _fun77887_ip = 0;;) switch (_fun77887_ip) {
                    case 0:
                        var6 = arg0;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 43;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.getNativeSyntheticEventData;
                        var5 = var2.bind(var3)(var6);
                        var2 = _closure3_slot0;
                        var4 = var2.params;
                        var3 = var4.getMessage;
                        var2 = var5.messageId;
                        var8 = var3.bind(var4)(var2);
                        var4 = null;
                        if (!(var4 != var8)) {
                            _fun77887_ip = 291;
                            continue _fun77887
                        }
                    case 77:
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var2 = 184;
                        var2 = var7[var2];
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.getInlineForwardOptions;
                        var5 = var2.bind(var3)(var8, var5);
                        if (!(var4 != var5)) {
                            _fun77887_ip = 291;
                            continue _fun77887
                        }
                    case 116:
                        var2 = global;
                        var3 = var2.Object;
                        var2 = var3.keys;
                        var2 = var2.bind(var3)(var5);
                        var7 = var2.length;
                        var2 = var6.nativeEvent;
                        var2 = var2.triggerHaptic;
                        if (!var2) {
                            _fun77887_ip = 207;
                            continue _fun77887
                        }
                    case 154:
                        var3 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var2 = 93;
                        var2 = var11[var2];
                        var9 = var3.bind(var0)(var2);
                        var3 = var9.triggerHapticFeedback;
                        var10 = _closure1_slot1;
                        var2 = 94;
                        var2 = var11[var2];
                        var2 = var10.bind(var0)(var2);
                        var2 = var2.IMPACT_LIGHT;
                        var2 = var3.bind(var9)(var2);
                    case 207:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 185;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.openForwardModal;
                        var1 = {};
                        var1.message = var8;
                        var6 = var6.nativeEvent;
                        var6 = var6.location;
                        var8 = var4 != var6;
                        var4 = 'inline-button';
                        if (!var8) {
                            _fun77887_ip = 266;
                            continue _fun77887
                        }
                    case 263:
                        var4 = var6;
                    case 266:
                        var1.source = var4;
                        var6 = 0;
                        var4 = undefined;
                        if (!(var6 !== var7)) {
                            _fun77887_ip = 281;
                            continue _fun77887
                        }
                    case 278:
                        var4 = var5;
                    case 281:
                        var1.forwardOptions = var4;
                        var1 = var2.bind(var3)(var1);
                    case 291:
                        return var0;
                }
            };
            var2.handleTapInlineForward = var3;
            var3 = function(arg0) { // Environment: var1
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var0 = 43;
                var2 = var4[var0];
                var0 = undefined;
                var5 = var3.bind(var0)(var2);
                var3 = var5.getNativeSyntheticEventData;
                var2 = arg0;
                var2 = var3.bind(var5)(var2);
                var3 = _closure1_slot1;
                var1 = 186;
                var1 = var4[var1];
                var1 = var3.bind(var0)(var1);
                var1 = var1.bind(var0)(var2);
                return var0;
            };
            var2.handleTapSoundmoji = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77889: for (var _fun77889_ip = 0;;) switch (_fun77889_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var0 = 43;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var1);
                        var3 = var4.getNativeSyntheticEventData;
                        var1 = arg0;
                        var6 = var3.bind(var4)(var1);
                        var4 = null;
                        var1 = var4 != var6;
                        if (!var1) {
                            _fun77889_ip = 57;
                            continue _fun77889
                        }
                    case 48:
                        var3 = var6.guildId;
                        var1 = var4 != var3;
                    case 57:
                        if (!var1) {
                            _fun77889_ip = 167;
                            continue _fun77889
                        }
                    case 60:
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var3 = 49;
                        var3 = var1[var3];
                        var5 = var4.bind(var0)(var3);
                        var4 = var5.openLazy;
                        var3 = _closure1_slot0;
                        var2 = 42;
                        var2 = var1[var2];
                        var3 = var3.bind(var0)(var2);
                        var2 = 85;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var3 = var3.bind(var0)(var2, var1);
                        var7 = var6.guildId;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var2 = var1.concat;
                        var1 = 'GuildProfileActionSheet:';
                        var2 = var2.bind(var1)(var7);
                        var1 = {};
                        var6 = var6.guildId;
                        var1.guildId = var6;
                        var1 = var4.bind(var5)(var3, var2, var1);
                    case 167:
                        return var0;
                }
            };
            var2.handleTapClanTagChiplet = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77890: for (var _fun77890_ip = 0;;) switch (_fun77890_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 43;
                        var2 = var2[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.getNativeSyntheticEventData;
                        var2 = arg0;
                        var5 = var3.bind(var4)(var2);
                        var3 = var5.messageId;
                        var4 = _closure1_slot6;
                        var2 = _closure1_slot4;
                        var4 = var4.bind(var0)(var5, var2);
                        var2 = _closure3_slot0;
                        var2 = var2.params;
                        var2 = var2.getMessage;
                        var5 = var2.bind(var0)(var3);
                        var2 = null;
                        if (!(var2 != var5)) {
                            _fun77890_ip = 158;
                            continue _fun77890
                        }
                    case 88:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 187;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.onTapContentInventoryEntryEmbed;
                        var1 = {};
                        var1.message = var5;
                        var5 = var4.authorId;
                        var1.authorId = var5;
                        var5 = var4.contentId;
                        var1.contentId = var5;
                        var4 = var4.tappedElement;
                        var1.tappedElement = var4;
                        var1 = var2.bind(var3)(var1);
                    case 158:
                        return var0;
                }
            };
            var2.handleTapContentInventoryEntryEmbed = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77891: for (var _fun77891_ip = 0;;) switch (_fun77891_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 43;
                        var2 = var2[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.getNativeSyntheticEventData;
                        var2 = arg0;
                        var5 = var3.bind(var4)(var2);
                        var3 = var5.messageId;
                        var4 = _closure1_slot6;
                        var2 = _closure1_slot5;
                        var4 = var4.bind(var0)(var5, var2);
                        var2 = _closure3_slot0;
                        var2 = var2.params;
                        var2 = var2.getMessage;
                        var5 = var2.bind(var0)(var3);
                        var2 = null;
                        if (!(var2 != var5)) {
                            _fun77891_ip = 136;
                            continue _fun77891
                        }
                    case 88:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 188;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.onTapCheckpointCard;
                        var1 = {};
                        var1.message = var5;
                        var4 = var4.authorId;
                        var1.authorId = var4;
                        var1 = var2.bind(var3)(var1);
                    case 136:
                        return var0;
                }
            };
            var2.handleTapCheckpointCard = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77892: for (var _fun77892_ip = 0;;) switch (_fun77892_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 43;
                        var2 = var2[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.getNativeSyntheticEventData;
                        var2 = arg0;
                        var4 = var3.bind(var4)(var2);
                        var2 = _closure3_slot0;
                        var2 = var2.params;
                        var3 = var2.getMessage;
                        var2 = var4.messageId;
                        var5 = var3.bind(var0)(var2);
                        var2 = null;
                        if (!(var2 != var5)) {
                            _fun77892_ip = 126;
                            continue _fun77892
                        }
                    case 74:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 189;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.handleTapAppMessageEmbed;
                        var1 = {};
                        var7 = var1;
                        var6 = var4;
                        var4 = copyDataProperties(var7, var6);
                        var4 = 'message';
                        var1[var4] = var5;
                        var1 = var2.bind(var3)(var1);
                    case 126:
                        return var0;
                }
            };
            var2.handleTapAppMessageEmbed = var3;
            var3 = function(arg0) { // Environment: var1
                _fun77893: for (var _fun77893_ip = 0;;) switch (_fun77893_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 43;
                        var2 = var2[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.getNativeSyntheticEventData;
                        var2 = arg0;
                        var4 = var3.bind(var4)(var2);
                        var2 = _closure3_slot0;
                        var2 = var2.params;
                        var3 = var2.getMessage;
                        var2 = var4.messageId;
                        var5 = var3.bind(var0)(var2);
                        var2 = null;
                        if (!(var2 != var5)) {
                            _fun77893_ip = 126;
                            continue _fun77893
                        }
                    case 74:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 190;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.handleTapPreviewSharedClientTheme;
                        var1 = {};
                        var7 = var1;
                        var6 = var4;
                        var4 = copyDataProperties(var7, var6);
                        var4 = 'message';
                        var1[var4] = var5;
                        var1 = var2.bind(var3)(var1);
                    case 126:
                        return var0;
                }
            };
            var2.handleTapPreviewSharedClientTheme = var3;
            var1 = function(arg0) { // Environment: var1
                _fun77894: for (var _fun77894_ip = 0;;) switch (_fun77894_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var0 = 43;
                        var2 = var2[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.getNativeSyntheticEventData;
                        var2 = arg0;
                        var4 = var3.bind(var4)(var2);
                        var2 = _closure3_slot0;
                        var2 = var2.params;
                        var3 = var2.getMessage;
                        var2 = var4.messageId;
                        var5 = var3.bind(var0)(var2);
                        var2 = null;
                        if (!(var2 != var5)) {
                            _fun77894_ip = 126;
                            continue _fun77894
                        }
                    case 74:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 191;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.handleSharedClientThemeViewed;
                        var1 = {};
                        var7 = var1;
                        var6 = var4;
                        var4 = copyDataProperties(var7, var6);
                        var4 = 'message';
                        var1[var4] = var5;
                        var1 = var2.bind(var3)(var1);
                    case 126:
                        return var0;
                }
            };
            var2.handleSharedClientThemeViewed = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'params';
        var0.key = var1;
        var1 = function() {
            var1 = this;
            var0 = var1.getParams;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.get = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'replaceCorrectMessageParams';
        var0.key = var5;
        var4 = function arg0() {
            _fun77896: for (var _fun77896_ip = 0;;) switch (_fun77896_ip) {
                case 0:
                    var6 = arg0;
                    var5 = this;
                    var0 = var5.params;
                    var2 = var0.getMessage;
                    var4 = var6.nativeEvent;
                    var1 = var4.messageId;
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun77896_ip = 44;
                        continue _fun77896
                    }
                case 42:
                    return var0;
                case 44:
                    var8 = var3.type;
                    var7 = _closure1_slot54;
                    var7 = var7.THREAD_STARTER_MESSAGE;
                    if (!(var8 !== var7)) {
                        _fun77896_ip = 108;
                        continue _fun77896
                    }
                case 66:
                    var10 = var3.id;
                    var9 = var3.channel_id;
                    var7 = {};
                    var12 = var7;
                    var11 = var4;
                    var8 = copyDataProperties(var12, var11);
                    var8 = 'messageId';
                    var7[var8] = var10;
                    var8 = 'channelId';
                    var7[var8] = var9;
                    return var7;
                case 108:
                    var3 = var3.messageReference;
                    if (!(var2 != var3)) {
                        _fun77896_ip = 270;
                        continue _fun77896
                    }
                case 121:
                    var9 = _closure1_slot29;
                    var8 = var9.getMessage;
                    var7 = var3.channel_id;
                    var1 = var3.message_id;
                    var1 = var8.bind(var9)(var7, var1);
                    if (!(var2 == var1)) {
                        _fun77896_ip = 224;
                        continue _fun77896
                    }
                case 152:
                    var2 = var5.handleLongPressMessage;
                    var1 = {};
                    var12 = var1;
                    var11 = var6;
                    var6 = copyDataProperties(var12, var11);
                    var7 = {};
                    var12 = var7;
                    var11 = var4;
                    var6 = copyDataProperties(var12, var11);
                    var8 = 0;
                    var6 = 'mediaIndex';
                    var7[var6] = var8;
                    var8 = '';
                    var6 = 'mediaType';
                    var7[var6] = var8;
                    var6 = 'nativeEvent';
                    var1[var6] = var7;
                    var1 = var2.bind(var5)(var1);
                    var1 = undefined;
                    _fun77896_ip = 268;
                    continue _fun77896;
                case 224:
                    var2 = {};
                    var12 = var2;
                    var11 = var4;
                    var4 = copyDataProperties(var12, var11);
                    var5 = var3.message_id;
                    var4 = 'messageId';
                    var2[var4] = var5;
                    var4 = var3.channel_id;
                    var3 = 'channelId';
                    var2[var3] = var4;
                    var1 = var2;
                case 268:
                    return var1;
                case 270:
                    return var0;
            }
        };
        var0.value = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 192;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/MessagesHandlers.tsx';
    var3 = var4.bind(var5)(var3);
    var2.MessagesHandlers = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 57, 5, 6, 7, 3454, 5345, 8730, 3334, 5226, 4268, 9257, 3093, 1376, 1416, 1216, 1372, 6858, 1681, 1674, 1410, 3323, 4249, 3091, 3610, 1670, 3213, 5657, 6614, 1621, 6517, 660, 1379, 1565, 4583, 4685, 3335, 1623, 5941, 1233, 9716, 9881, 1307, 9229, 5895, 7738, 4561, 9882, 1220, 3278, 9907, 9922, 1304, 5617, 3463, 7876, 5614, 4231, 7880, 4236, 9254, 9925, 6684, 7729, 1234, 7783, 8790, 7724, 7736, 4547, 9714, 3282, 3333, 9715, 9713, 9230, 9232, 9386, 5579, 478, 6753, 6697, 9275, 6751, 9926, 7377, 7350, 21, 9928, 9256, 3978, 9930, 7001, 3279, 3280, 9261, 9262, 9878, 9949, 4302, 4530, 6999, 10035, 7840, 10036, 1384, 4669, 7981, 3144, 10037, 8455, 9858, 3324, 8095, 6549, 4106, 5238, 10038, 5258, 5232, 5277, 3327, 5898, 10065, 10072, 3328, 10075, 7813, 795, 4551, 5911, 9045, 10084, 7610, 7463, 6869, 6874, 10085, 7050, 5922, 3148, 10086, 9231, 10087, 6526, 3974, 1645, 4003, 6792, 10090, 10092, 10096, 6702, 10097, 5916, 6731, 6729, 10098, 10102, 10130, 10131, 3943, 5291, 3147, 10140, 10141, 10142, 10143, 10144, 10147, 9264, 1567, 10148, 4256, 5932, 4555, 10150, 9662, 8856, 8854, 11579, 7693, 11581, 11582, 11583, 8891, 11584, 11586, 11589, 11590, 11595, 11597, 2]);