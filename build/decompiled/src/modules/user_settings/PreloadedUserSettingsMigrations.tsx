// modules/user_settings/PreloadedUserSettingsMigrations.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun97877: for (var _fun97877_ip = 0;;) switch (_fun97877_ip) {
            case 0:
                var1 = arg0;
                var5 = arg1;
                var0 = var1.userContent;
                var2 = null;
                if (!(var2 == var0)) {
                    _fun97877_ip = 77;
                    continue _fun97877
                }
            case 18:
                var0 = {};
                var3 = global;
                var3 = var3.Uint8Array;
                var4 = var3.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var3
                    }
                });
                var10 = var4;
                var3 = new var10[var3](var9);
                var3 = var3 instanceof Object ? var3 : var4;
                var0.dismissedContents = var3;
                var3 = '0';
                var0.lastReceivedChangelogId = var3;
                var3 = {};
                var0.recurringDismissibleContentStates = var3;
                var1.userContent = var0;
            case 77:
                var0 = var1.userContent;
                var0 = var0.dismissedContents;
                if (!(var2 == var0)) {
                    _fun97877_ip = 133;
                    continue _fun97877
                }
            case 93:
                var2 = var1.userContent;
                var0 = global;
                var0 = var0.Uint8Array;
                var3 = var0.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var0
                    }
                });
                var10 = var3;
                var0 = new var10[var0](var9);
                var0 = var0 instanceof Object ? var0 : var3;
                var2.dismissedContents = var0;
            case 133:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var7 = 3;
                var0 = var0[var7];
                var6 = undefined;
                var4 = var2.bind(var6)(var0);
                var2 = var4.hasBit;
                var0 = var1.userContent;
                var0 = var0.dismissedContents;
                var2 = var2.bind(var4)(var0, var5);
                var0 = false;
                if (var2) {
                    _fun97877_ip = 242;
                    continue _fun97877
                }
            case 187:
                var2 = var1.userContent;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var7];
                var4 = var4.bind(var6)(var3);
                var3 = var4.addBit;
                var1 = var1.userContent;
                var1 = var1.dismissedContents;
                var1 = var3.bind(var4)(var1, var5);
                var2.dismissedContents = var1;
                var0 = true;
            case 242:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun97878: for (var _fun97878_ip = 0;;) switch (_fun97878_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 4;
                var0 = var3[var0];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var3 = var0.HotspotStore;
                var2 = var3.hasHiddenHotspot;
                var0 = arg1;
                var0 = var2.bind(var3)(var0);
                var2 = !var0;
                var0 = !var2;
                if (var2) {
                    _fun97878_ip = 70;
                    continue _fun97878
                }
            case 54:
                var3 = _closure1_slot6;
                var2 = arg0;
                var1 = arg2;
                var0 = var3.bind(var4)(var2, var1);
            case 70:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.ChannelNoticeTypes;
    var _closure1_slot4 = var1;
    var1 = 2;
    var3 = var5[var1];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MULTIACCOUNT_TOOLTIP_SEEN_KEY;
    var _closure1_slot5 = var3;
    var3 = {};
    var3.version = var1;
    var1 = function arg0() {
        _fun97879: for (var _fun97879_ip = 0;;) switch (_fun97879_ip) {
            case 0:
                var16 = arg0;
                var1 = {};
                var0 = 'Recent Mentions';
                var1.Mentions = var0;
                var0 = 'Inbox';
                var1.Unreads = var0;
                var0 = var16.inbox;
                var15 = null;
                if (!(var15 == var0)) {
                    _fun97879_ip = 470;
                    continue _fun97879
                }
            case 48:
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 5;
                var2 = var0[var6];
                var13 = undefined;
                var2 = var4.bind(var13)(var2);
                var3 = var2.InboxSettings;
                var2 = var3.create;
                var2 = var2.bind(var3)();
                var16.inbox = var2;
                var3 = 6;
                var0 = var0[var3];
                var0 = var4.bind(var13)(var0);
                var7 = var0.Storage;
                var5 = var7.get;
                var4 = 'seenInboxTutorial';
                var0 = false;
                var4 = var5.bind(var7)(var4, var0);
                if (!var4) {
                    _fun97879_ip = 144;
                    continue _fun97879
                }
            case 134:
                var4 = true;
                var2.viewedTutorial = var4;
                var0 = true;
            case 144:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var3];
                var4 = var5.bind(var13)(var4);
                var7 = var4.Storage;
                var5 = var7.get;
                var4 = 'recentsButtonTab2';
                var4 = var5.bind(var7)(var4);
                if (!(var15 != var4)) {
                    _fun97879_ip = 265;
                    continue _fun97879
                }
            case 187:
                var1 = var1.Mentions;
                if (!(var4 !== var1)) {
                    _fun97879_ip = 228;
                    continue _fun97879
                }
            case 197:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var4.bind(var13)(var1);
                var1 = var1.InboxTab;
                var1 = var1.UNREADS;
                _fun97879_ip = 257;
                continue _fun97879;
            case 228:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var6];
                var4 = var5.bind(var13)(var4);
                var4 = var4.InboxTab;
                var1 = var4.MENTIONS;
            case 257:
                var2.currentTab = var1;
                var0 = true;
            case 265:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var1 = var2.bind(var13)(var1);
                var3 = var1.Storage;
                var2 = var3.get;
                var1 = 'unread-messages-collapsed-channels';
                var12 = var2.bind(var3)(var1);
                if (!(var15 == var12)) {
                    _fun97879_ip = 310;
                    continue _fun97879
                }
            case 308:
                var12 = {};
            case 310:
                var10 = var12;
                var5 = 7;
                var4 = '0';
                var3 = var0;
                var2 = undefined;
                var1 = undefined;
                var0 = var3;
                for (var7 in var10)
                    case 343: {
                        var19 = var3;
                        var0 = var19;
                        case 358: var21 = var7;
                        var18 = var12[var21];
                        var3 = var19;
                        if (!var18) {
                            _fun97879_ip = 343;
                            continue _fun97879
                        }
                        case 371: var20 = _closure1_slot3;
                        var18 = var20.getChannel;
                        var18 = var18.bind(var20)(var21);
                        var3 = var19;
                        var1 = var18;
                        if (var15 == var1) {
                            _fun97879_ip = 343;
                            continue _fun97879
                        }
                        case 395: var20 = _closure1_slot0;
                        var19 = _closure1_slot2;
                        var19 = var19[var5];
                        var23 = var20.bind(var13)(var19);
                        var22 = var23.mutateUserChannelSettings;
                        var2 = var18.guild_id;
                        var19 = var15 != var2;
                        var21 = var4;
                        if (!var19) {
                            _fun97879_ip = 436;
                            continue _fun97879
                        }
                        case 433: var21 = var2;
                        case 436: var25 = var18.id;
                        var24 = function(arg0) { // Environment: var17
                            var1 = true;
                            var0 = arg0;
                            var0.collapsedInInbox = var1;
                            var0 = undefined;
                            return var0;
                        };
                        var28 = var23;
                        var27 = var16;
                        var26 = var21;
                        var19 = var28[var22](var27, var26, var25, var24, var23);
                        var3 = true;
                        var1 = var18;
                        _fun97879_ip = 343;
                        continue _fun97879;
                    }
            case 468:
                return var0;
            case 470:
                var0 = false;
                return var0;
        }
    };
    var3.run = var1;
    var1 = function() {
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 6;
        var4 = var3[var1];
        var0 = undefined;
        var4 = var2.bind(var0)(var4);
        var6 = var4.Storage;
        var5 = var6.remove;
        var4 = 'seenInboxTutorial';
        var4 = var5.bind(var6)(var4);
        var4 = var3[var1];
        var4 = var2.bind(var0)(var4);
        var6 = var4.Storage;
        var5 = var6.remove;
        var4 = 'recentsButtonTab2';
        var4 = var5.bind(var6)(var4);
        var1 = var3[var1];
        var1 = var2.bind(var0)(var1);
        var3 = var1.Storage;
        var2 = var3.remove;
        var1 = 'unread-messages-collapsed-channels';
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.cleanup = var1;
    var1 = new Array(19);
    var1[0] = var3;
    var3 = {};
    var6 = 3;
    var3.version = var6;
    var6 = function arg0() {
        _fun97882: for (var _fun97882_ip = 0;;) switch (_fun97882_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 8;
                var0 = var4[var0];
                var6 = undefined;
                var0 = var1.bind(var6)(var0);
                var5 = var0.PersistedStore;
                var4 = var5.migrateAndReadStoreState;
                var1 = new Array(1);
                var0 = function() { // Environment: var0
                    _fun97883: for (var _fun97883_ip = 0;;) switch (_fun97883_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var3 = var1.Storage;
                            var2 = var3.get;
                            var1 = 'EmojiDiversitySurrogate';
                            var1 = var2.bind(var3)(var1);
                            if (var1) {
                                _fun97883_ip = 56;
                                continue _fun97883
                            }
                        case 52:
                            var1 = '';
                        case 56:
                            var0.diversitySurrogate = var1;
                            return var0;
                    }
                };
                var1[0] = var0;
                var0 = 'EmojiStore';
                var0 = var4.bind(var5)(var0, var1);
                var1 = var0.state;
                var5 = null;
                if (!(var5 != var1)) {
                    _fun97882_ip = 260;
                    continue _fun97882
                }
            case 83:
                var0 = var1.diversitySurrogate;
                var4 = var5 != var0;
                if (!var4) {
                    _fun97882_ip = 110;
                    continue _fun97882
                }
            case 96:
                var7 = var1.diversitySurrogate;
                var0 = '';
                var4 = var0 !== var7;
            case 110:
                var0 = false;
                if (!var4) {
                    _fun97882_ip = 258;
                    continue _fun97882
                }
            case 118:
                var4 = var2.textAndImages;
                if (!(var5 == var4)) {
                    _fun97882_ip = 169;
                    continue _fun97882
                }
            case 128:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 5;
                var4 = var8[var4];
                var4 = var7.bind(var6)(var4);
                var7 = var4.TextAndImagesSettings;
                var4 = var7.create;
                var4 = var4.bind(var7)();
                var2.textAndImages = var4;
            case 169:
                var4 = var2.textAndImages;
                var4 = var4.diversitySurrogate;
                if (!(var5 == var4)) {
                    _fun97882_ip = 232;
                    continue _fun97882
                }
            case 185:
                var4 = var2.textAndImages;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 9;
                var3 = var7[var3];
                var3 = var5.bind(var6)(var3);
                var5 = var3.StringValue;
                var3 = var5.create;
                var3 = var3.bind(var5)();
                var4.diversitySurrogate = var3;
            case 232:
                var2 = var2.textAndImages;
                var2 = var2.diversitySurrogate;
                var1 = var1.diversitySurrogate;
                var2.value = var1;
                var0 = true;
            case 258:
                return var0;
            case 260:
                var0 = false;
                return var0;
        }
    };
    var3.run = var6;
    var6 = function() {
        var0 = undefined;
        return var0;
    };
    var3.cleanup = var6;
    var1[1] = var3;
    var3 = {};
    var6 = 4;
    var3.version = var6;
    var6 = function arg0() {
        _fun97885: for (var _fun97885_ip = 0;;) switch (_fun97885_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 6;
                var0 = var3[var0];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var3 = var0.Storage;
                var2 = var3.get;
                var0 = 'HAS_SEEN_HUB_UPSELL';
                var2 = var2.bind(var3)(var0);
                var0 = true;
                var2 = var0 === var2;
                if (var2) {
                    _fun97885_ip = 114;
                    continue _fun97885
                }
            case 56:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 4;
                var3 = var7[var0];
                var3 = var6.bind(var4)(var3);
                var5 = var3.HotspotStore;
                var3 = var5.hasHiddenHotspot;
                var0 = var7[var0];
                var0 = var6.bind(var4)(var0);
                var0 = var0.HotspotLocations;
                var0 = var0.HUB_SECOND_EMAIL_CONNECTION_UPSELL;
                var2 = var3.bind(var5)(var0);
            case 114:
                var0 = false;
                if (!var2) {
                    _fun97885_ip = 164;
                    continue _fun97885
                }
            case 119:
                var3 = _closure1_slot6;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 10;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.DismissibleContent;
                var2 = var1.HUB_WAITLIST_UPSELL;
                var1 = arg0;
                var0 = var3.bind(var4)(var1, var2);
            case 164:
                return var0;
        }
    };
    var3.run = var6;
    var6 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var3 = var1.Storage;
        var2 = var3.remove;
        var1 = 'HAS_SEEN_HUB_UPSELL';
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.cleanup = var6;
    var1[2] = var3;
    var3 = {};
    var6 = 5;
    var3.version = var6;
    var6 = function arg0() {
        _fun97887: for (var _fun97887_ip = 0;;) switch (_fun97887_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.textAndImages;
                var0 = null;
                if (!(var0 == var1)) {
                    _fun97887_ip = 55;
                    continue _fun97887
                }
            case 15:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 5;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var4 = var3.TextAndImagesSettings;
                var3 = var4.create;
                var1 = var3.bind(var4)();
            case 55:
                var2.textAndImages = var1;
                var1 = var2.notifications;
                if (!(var0 == var1)) {
                    _fun97887_ip = 111;
                    continue _fun97887
                }
            case 71:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 5;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var4 = var3.NotificationSettings;
                var3 = var4.create;
                var1 = var3.bind(var4)();
            case 111:
                var2.notifications = var1;
                var1 = var2.privacy;
                if (!(var0 == var1)) {
                    _fun97887_ip = 167;
                    continue _fun97887
                }
            case 127:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 5;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var4 = var3.PrivacySettings;
                var3 = var4.create;
                var1 = var3.bind(var4)();
            case 167:
                var2.privacy = var1;
                var1 = var2.voiceAndVideo;
                if (!(var0 == var1)) {
                    _fun97887_ip = 223;
                    continue _fun97887
                }
            case 183:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 5;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var4 = var3.VoiceAndVideoSettings;
                var3 = var4.create;
                var1 = var3.bind(var4)();
            case 223:
                var2.voiceAndVideo = var1;
                var1 = var2.gameLibrary;
                if (!(var0 == var1)) {
                    _fun97887_ip = 279;
                    continue _fun97887
                }
            case 239:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 5;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var4 = var3.GameLibrarySettings;
                var3 = var4.create;
                var1 = var3.bind(var4)();
            case 279:
                var2.gameLibrary = var1;
                var1 = var2.debug;
                if (!(var0 == var1)) {
                    _fun97887_ip = 335;
                    continue _fun97887
                }
            case 295:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 5;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var4 = var3.DebugSettings;
                var3 = var4.create;
                var1 = var3.bind(var4)();
            case 335:
                var2.debug = var1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 6;
                var3 = var4[var3];
                var4 = undefined;
                var3 = var5.bind(var4)(var3);
                var6 = var3.Storage;
                var5 = var6.get;
                var3 = 'UserSettingsStore';
                var5 = var5.bind(var6)(var3);
                if (!(var0 == var5)) {
                    _fun97887_ip = 394;
                    continue _fun97887
                }
            case 392:
                var5 = {};
            case 394:
                var3 = var5.useRichChatTextBox;
                var6 = 'boolean';
                var3 = typeof var3;
                var0 = false;
                if (!(var6 === var3)) {
                    _fun97887_ip = 475;
                    continue _fun97887
                }
            case 413:
                var7 = var2.textAndImages;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 9;
                var3 = var9[var3];
                var3 = var8.bind(var4)(var3);
                var9 = var3.BoolValue;
                var8 = var9.create;
                var3 = {};
                var10 = var5.useRichChatTextBox;
                var3.value = var10;
                var3 = var8.bind(var9)(var3);
                var7.useRichChatInput = var3;
                var0 = true;
            case 475:
                var3 = var5.renderSpoilers;
                var7 = 'string';
                var3 = typeof var3;
                if (!(var7 === var3)) {
                    _fun97887_ip = 554;
                    continue _fun97887
                }
            case 492:
                var7 = var2.textAndImages;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 9;
                var3 = var9[var3];
                var3 = var8.bind(var4)(var3);
                var9 = var3.StringValue;
                var8 = var9.create;
                var3 = {};
                var10 = var5.renderSpoilers;
                var3.value = var10;
                var3 = var8.bind(var9)(var3);
                var7.renderSpoilers = var3;
                var0 = true;
            case 554:
                var3 = var5.useThreadSidebar;
                var3 = typeof var3;
                if (!(var6 === var3)) {
                    _fun97887_ip = 629;
                    continue _fun97887
                }
            case 567:
                var7 = var2.textAndImages;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 9;
                var3 = var9[var3];
                var3 = var8.bind(var4)(var3);
                var9 = var3.BoolValue;
                var8 = var9.create;
                var3 = {};
                var10 = var5.useThreadSidebar;
                var3.value = var10;
                var3 = var8.bind(var9)(var3);
                var7.useThreadSidebar = var3;
                var0 = true;
            case 629:
                var3 = var5.showInAppNotifications;
                var3 = typeof var3;
                if (!(var6 === var3)) {
                    _fun97887_ip = 704;
                    continue _fun97887
                }
            case 642:
                var7 = var2.notifications;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 9;
                var3 = var9[var3];
                var3 = var8.bind(var4)(var3);
                var9 = var3.BoolValue;
                var8 = var9.create;
                var3 = {};
                var10 = var5.showInAppNotifications;
                var3.value = var10;
                var3 = var8.bind(var9)(var3);
                var7.showInAppNotifications = var3;
                var0 = true;
            case 704:
                var8 = var5.emojiPickerCollapsedSections;
                var3 = global;
                var7 = var3.Array;
                var7 = var8 instanceof var7;
                if (!var7) {
                    _fun97887_ip = 745;
                    continue _fun97887
                }
            case 725:
                var8 = var2.textAndImages;
                var7 = var5.emojiPickerCollapsedSections;
                var8.emojiPickerCollapsedSections = var7;
                var0 = true;
            case 745:
                var7 = var5.stickerPickerCollapsedSections;
                var3 = var3.Array;
                var3 = var7 instanceof var3;
                if (!var3) {
                    _fun97887_ip = 784;
                    continue _fun97887
                }
            case 764:
                var7 = var2.textAndImages;
                var3 = var5.stickerPickerCollapsedSections;
                var7.stickerPickerCollapsedSections = var3;
                var0 = true;
            case 784:
                var3 = var5.viewImageDescriptions;
                var3 = typeof var3;
                if (!(var6 === var3)) {
                    _fun97887_ip = 859;
                    continue _fun97887
                }
            case 797:
                var7 = var2.textAndImages;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 9;
                var3 = var9[var3];
                var3 = var8.bind(var4)(var3);
                var9 = var3.BoolValue;
                var8 = var9.create;
                var3 = {};
                var10 = var5.viewImageDescriptions;
                var3.value = var10;
                var3 = var8.bind(var9)(var3);
                var7.viewImageDescriptions = var3;
                var0 = true;
            case 859:
                var3 = var5.showCommandSuggestions;
                var3 = typeof var3;
                if (!(var6 === var3)) {
                    _fun97887_ip = 934;
                    continue _fun97887
                }
            case 872:
                var7 = var2.textAndImages;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 9;
                var3 = var9[var3];
                var3 = var8.bind(var4)(var3);
                var9 = var3.BoolValue;
                var8 = var9.create;
                var3 = {};
                var10 = var5.showCommandSuggestions;
                var3.value = var10;
                var3 = var8.bind(var9)(var3);
                var7.showCommandSuggestions = var3;
                var0 = true;
            case 934:
                var3 = var5.alwaysPreviewVideo;
                var3 = typeof var3;
                if (!(var6 === var3)) {
                    _fun97887_ip = 1009;
                    continue _fun97887
                }
            case 947:
                var7 = var2.voiceAndVideo;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 9;
                var3 = var9[var3];
                var3 = var8.bind(var4)(var3);
                var9 = var3.BoolValue;
                var8 = var9.create;
                var3 = {};
                var10 = var5.alwaysPreviewVideo;
                var3.value = var10;
                var3 = var8.bind(var9)(var3);
                var7.alwaysPreviewVideo = var3;
                var0 = true;
            case 1009:
                var3 = var5.notifyFriendsOnGoLive;
                var3 = typeof var3;
                if (!(var6 === var3)) {
                    _fun97887_ip = 1084;
                    continue _fun97887
                }
            case 1022:
                var7 = var2.notifications;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 9;
                var3 = var9[var3];
                var3 = var8.bind(var4)(var3);
                var9 = var3.BoolValue;
                var8 = var9.create;
                var3 = {};
                var10 = var5.notifyFriendsOnGoLive;
                var3.value = var10;
                var3 = var8.bind(var9)(var3);
                var7.notifyFriendsOnGoLive = var3;
                var0 = true;
            case 1084:
                var3 = var5.installShortcutDesktop;
                var3 = typeof var3;
                if (!(var6 === var3)) {
                    _fun97887_ip = 1159;
                    continue _fun97887
                }
            case 1097:
                var7 = var2.gameLibrary;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 9;
                var3 = var9[var3];
                var3 = var8.bind(var4)(var3);
                var9 = var3.BoolValue;
                var8 = var9.create;
                var3 = {};
                var10 = var5.installShortcutDesktop;
                var3.value = var10;
                var3 = var8.bind(var9)(var3);
                var7.installShortcutDesktop = var3;
                var0 = true;
            case 1159:
                var3 = var5.installShortcutStartMenu;
                var3 = typeof var3;
                if (!(var6 === var3)) {
                    _fun97887_ip = 1234;
                    continue _fun97887
                }
            case 1172:
                var7 = var2.gameLibrary;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 9;
                var3 = var9[var3];
                var3 = var8.bind(var4)(var3);
                var9 = var3.BoolValue;
                var8 = var9.create;
                var3 = {};
                var10 = var5.installShortcutStartMenu;
                var3.value = var10;
                var3 = var8.bind(var9)(var3);
                var7.installShortcutStartMenu = var3;
                var0 = true;
            case 1234:
                var3 = var5.allowActivityPartyPrivacyFriends;
                var3 = typeof var3;
                if (!(var6 === var3)) {
                    _fun97887_ip = 1309;
                    continue _fun97887
                }
            case 1247:
                var7 = var2.privacy;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 9;
                var3 = var9[var3];
                var3 = var8.bind(var4)(var3);
                var9 = var3.BoolValue;
                var8 = var9.create;
                var3 = {};
                var10 = var5.allowActivityPartyPrivacyFriends;
                var3.value = var10;
                var3 = var8.bind(var9)(var3);
                var7.allowActivityPartyPrivacyFriends = var3;
                var0 = true;
            case 1309:
                var3 = var5.allowActivityPartyPrivacyVoiceChannel;
                var3 = typeof var3;
                if (!(var6 === var3)) {
                    _fun97887_ip = 1384;
                    continue _fun97887
                }
            case 1322:
                var7 = var2.privacy;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 9;
                var3 = var9[var3];
                var3 = var8.bind(var4)(var3);
                var9 = var3.BoolValue;
                var8 = var9.create;
                var3 = {};
                var10 = var5.allowActivityPartyPrivacyVoiceChannel;
                var3.value = var10;
                var3 = var8.bind(var9)(var3);
                var7.allowActivityPartyPrivacyVoiceChannel = var3;
                var0 = true;
            case 1384:
                var3 = var5.rtcPanelShowVoiceStates;
                var3 = typeof var3;
                if (!(var6 === var3)) {
                    _fun97887_ip = 1459;
                    continue _fun97887
                }
            case 1397:
                var2 = var2.debug;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 9;
                var1 = var6[var1];
                var1 = var3.bind(var4)(var1);
                var4 = var1.BoolValue;
                var3 = var4.create;
                var1 = {};
                var5 = var5.rtcPanelShowVoiceStates;
                var1.value = var5;
                var1 = var3.bind(var4)(var1);
                var2.rtcPanelShowVoiceStates = var1;
                var0 = true;
            case 1459:
                return var0;
        }
    };
    var3.run = var6;
    var6 = function() {
        var0 = undefined;
        return var0;
    };
    var3.cleanup = var6;
    var1[3] = var3;
    var3 = {};
    var6 = 7;
    var3.version = var6;
    var6 = function arg0() {
        var4 = _closure1_slot7;
        var1 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 4;
        var0 = var5[var0];
        var3 = undefined;
        var0 = var1.bind(var3)(var0);
        var0 = var0.HotspotLocations;
        var2 = var0.APPLICATION_COMMAND_TOOLTIP;
        var0 = 10;
        var0 = var5[var0];
        var0 = var1.bind(var3)(var0);
        var0 = var0.DismissibleContent;
        var1 = var0.APPLICATION_COMMAND_TOOLTIP;
        var0 = arg0;
        var0 = var4.bind(var3)(var0, var2, var1);
        return var0;
    };
    var3.run = var6;
    var6 = function() {
        var0 = undefined;
        return var0;
    };
    var3.cleanup = var6;
    var1[4] = var3;
    var3 = {};
    var6 = 8;
    var3.version = var6;
    var6 = function arg0() {
        var4 = _closure1_slot7;
        var1 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 4;
        var0 = var5[var0];
        var3 = undefined;
        var0 = var1.bind(var3)(var0);
        var0 = var0.HotspotLocations;
        var2 = var0.CHANNEL_BANNER_MEMBER_LIST_NOTICE;
        var0 = 10;
        var0 = var5[var0];
        var0 = var1.bind(var3)(var0);
        var0 = var0.DismissibleContent;
        var1 = var0.CHANNELINFO_CHANNELBANNER_NOTICE;
        var0 = arg0;
        var0 = var4.bind(var3)(var0, var2, var1);
        return var0;
    };
    var3.run = var6;
    var6 = function() {
        var0 = undefined;
        return var0;
    };
    var3.cleanup = var6;
    var1[5] = var3;
    var3 = {};
    var6 = 9;
    var3.version = var6;
    var6 = function arg0() {
        _fun97893: for (var _fun97893_ip = 0;;) switch (_fun97893_ip) {
            case 0:
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 4;
                var3 = var1[var0];
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var5 = var3.HotspotStore;
                var3 = var5.hasHiddenHotspot;
                var1 = var1[var0];
                var1 = var6.bind(var4)(var1);
                var1 = var1.HotspotLocations;
                var1 = var1.MULTI_ACCOUNT_TOOLTIP;
                var1 = var3.bind(var5)(var1);
                if (!var1) {
                    _fun97893_ip = 111;
                    continue _fun97893
                }
            case 66:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 6;
                var1 = var5[var1];
                var1 = var3.bind(var4)(var1);
                var6 = var1.Storage;
                var5 = var6.set;
                var3 = _closure1_slot5;
                var1 = 'true';
                var1 = var5.bind(var6)(var3, var1);
            case 111:
                var3 = _closure1_slot7;
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = var5[var0];
                var0 = var1.bind(var4)(var0);
                var0 = var0.HotspotLocations;
                var2 = var0.MULTI_ACCOUNT_TOOLTIP;
                var0 = 10;
                var0 = var5[var0];
                var0 = var1.bind(var4)(var0);
                var0 = var0.DismissibleContent;
                var1 = var0.ACCOUNT_MULTIACCOUNT_TOOLTIP;
                var0 = arg0;
                var0 = var3.bind(var4)(var0, var2, var1);
                return var0;
        }
    };
    var3.run = var6;
    var6 = function() {
        var0 = undefined;
        return var0;
    };
    var3.cleanup = var6;
    var1[6] = var3;
    var3 = {};
    var6 = 10;
    var3.version = var6;
    var6 = function arg0() {
        _fun97895: for (var _fun97895_ip = 0;;) switch (_fun97895_ip) {
            case 0:
                var5 = arg0;
                var8 = _closure1_slot7;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 4;
                var0 = var6[var0];
                var4 = undefined;
                var0 = var3.bind(var4)(var0);
                var0 = var0.HotspotLocations;
                var1 = var0.HUB_LINK_CHANNEL_NOTICE;
                var7 = 10;
                var0 = var6[var7];
                var0 = var3.bind(var4)(var0);
                var0 = var0.DismissibleContent;
                var0 = var0.CHANNEL_NOTICE_HUBLINK;
                var0 = var8.bind(var4)(var5, var1, var0);
                var1 = 6;
                var1 = var6[var1];
                var1 = var3.bind(var4)(var1);
                var6 = var1.Storage;
                var3 = var6.get;
                var1 = 'channelNotices';
                var6 = var3.bind(var6)(var1);
                var1 = null;
                if (!(var1 == var6)) {
                    _fun97895_ip = 117;
                    continue _fun97895
                }
            case 115:
                var6 = {};
            case 117:
                var1 = _closure1_slot4;
                var1 = var1.INVITE;
                var1 = var6[var1];
                var3 = false;
                var1 = var3 === var1;
                if (!var1) {
                    _fun97895_ip = 179;
                    continue _fun97895
                }
            case 140:
                var9 = _closure1_slot6;
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var10.bind(var4)(var8);
                var8 = var8.DismissibleContent;
                var8 = var8.CHANNEL_NOTICE_INVITE;
                var1 = var9.bind(var4)(var5, var8);
            case 179:
                if (!var1) {
                    _fun97895_ip = 184;
                    continue _fun97895
                }
            case 182:
                var0 = true;
            case 184:
                var1 = _closure1_slot4;
                var1 = var1.QUICKSWITCHER;
                var1 = var6[var1];
                var1 = var3 === var1;
                if (!var1) {
                    _fun97895_ip = 244;
                    continue _fun97895
                }
            case 205:
                var9 = _closure1_slot6;
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var7];
                var8 = var10.bind(var4)(var8);
                var8 = var8.DismissibleContent;
                var8 = var8.CHANNEL_NOTICE_QUICKSWITCHER;
                var1 = var9.bind(var4)(var5, var8);
            case 244:
                if (!var1) {
                    _fun97895_ip = 249;
                    continue _fun97895
                }
            case 247:
                var0 = true;
            case 249:
                var1 = _closure1_slot4;
                var1 = var1.GUILD_BOOSTING;
                var1 = var6[var1];
                var1 = var3 === var1;
                if (!var1) {
                    _fun97895_ip = 309;
                    continue _fun97895
                }
            case 270:
                var3 = _closure1_slot6;
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.DismissibleContent;
                var2 = var2.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION;
                var1 = var3.bind(var4)(var5, var2);
            case 309:
                if (!var1) {
                    _fun97895_ip = 314;
                    continue _fun97895
                }
            case 312:
                var0 = true;
            case 314:
                return var0;
        }
    };
    var3.run = var6;
    var6 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var3 = var1.Storage;
        var2 = var3.remove;
        var1 = 'channelNotices';
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.cleanup = var6;
    var1[7] = var3;
    var3 = {};
    var6 = 11;
    var3.version = var6;
    var6 = function arg0() {
        _fun97897: for (var _fun97897_ip = 0;;) switch (_fun97897_ip) {
            case 0:
                var5 = arg0;
                var6 = _closure1_slot7;
                var8 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = 4;
                var3 = var0[var2];
                var4 = undefined;
                var3 = var8.bind(var4)(var3);
                var3 = var3.HotspotLocations;
                var3 = var3.GUILD_EVENT_UPSELL;
                var7 = 10;
                var0 = var0[var7];
                var0 = var8.bind(var4)(var0);
                var0 = var0.DismissibleContent;
                var0 = var0.GUILD_HEADER_EVENT_UPSELL;
                var3 = var6.bind(var4)(var5, var3, var0);
                var0 = false;
                if (!var3) {
                    _fun97897_ip = 82;
                    continue _fun97897
                }
            case 80:
                var0 = true;
            case 82:
                var3 = _closure1_slot7;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = var1[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.HotspotLocations;
                var2 = var2.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP;
                var1 = var1[var7];
                var1 = var6.bind(var4)(var1);
                var1 = var1.DismissibleContent;
                var1 = var1.GUILD_HEADER_ANIMATED_GUILD_BANNER;
                var1 = var3.bind(var4)(var5, var2, var1);
                if (!var1) {
                    _fun97897_ip = 148;
                    continue _fun97897
                }
            case 146:
                var0 = true;
            case 148:
                return var0;
        }
    };
    var3.run = var6;
    var6 = function() {
        var0 = undefined;
        return var0;
    };
    var3.cleanup = var6;
    var1[8] = var3;
    var6 = {};
    var3 = 12;
    var6.version = var3;
    var8 = function arg0() {
        _fun97899: for (var _fun97899_ip = 0;;) switch (_fun97899_ip) {
            case 0:
                var5 = arg0;
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 6;
                var0 = var0[var6];
                var4 = undefined;
                var0 = var1.bind(var4)(var0);
                var3 = var0.Storage;
                var1 = var3.get;
                var0 = 'hideNag';
                var1 = var1.bind(var3)(var0);
                if (!var1) {
                    _fun97899_ip = 95;
                    continue _fun97899
                }
            case 53:
                var3 = _closure1_slot6;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 10;
                var0 = var8[var0];
                var0 = var7.bind(var4)(var0);
                var0 = var0.DismissibleContent;
                var0 = var0.NAGBAR_NOTICE_DOWNLOAD;
                var1 = var3.bind(var4)(var5, var0);
            case 95:
                var0 = false;
                if (!var1) {
                    _fun97899_ip = 102;
                    continue _fun97899
                }
            case 100:
                var0 = true;
            case 102:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var3.bind(var4)(var1);
                var7 = var1.Storage;
                var3 = var7.get;
                var1 = 'hideConnectSpotify';
                var1 = var3.bind(var7)(var1);
                if (!var1) {
                    _fun97899_ip = 186;
                    continue _fun97899
                }
            case 144:
                var7 = _closure1_slot6;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 10;
                var3 = var9[var3];
                var3 = var8.bind(var4)(var3);
                var3 = var3.DismissibleContent;
                var3 = var3.NAGBAR_NOTICE_CONNECT_SPOTIFY;
                var1 = var7.bind(var4)(var5, var3);
            case 186:
                if (!var1) {
                    _fun97899_ip = 191;
                    continue _fun97899
                }
            case 189:
                var0 = true;
            case 191:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var3.bind(var4)(var1);
                var6 = var1.Storage;
                var3 = var6.get;
                var1 = 'hideConnectPlayStation';
                var1 = var3.bind(var6)(var1);
                if (!var1) {
                    _fun97899_ip = 275;
                    continue _fun97899
                }
            case 233:
                var3 = _closure1_slot6;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 10;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.DismissibleContent;
                var2 = var2.NAGBAR_NOTICE_CONNECT_PLAYSTATION;
                var1 = var3.bind(var4)(var5, var2);
            case 275:
                if (!var1) {
                    _fun97899_ip = 280;
                    continue _fun97899
                }
            case 278:
                var0 = true;
            case 280:
                return var0;
        }
    };
    var6.run = var8;
    var8 = function() {
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 6;
        var4 = var3[var1];
        var0 = undefined;
        var4 = var2.bind(var0)(var4);
        var6 = var4.Storage;
        var5 = var6.remove;
        var4 = 'hideNag';
        var4 = var5.bind(var6)(var4);
        var4 = var3[var1];
        var4 = var2.bind(var0)(var4);
        var6 = var4.Storage;
        var5 = var6.remove;
        var4 = 'hideConnectSpotify';
        var4 = var5.bind(var6)(var4);
        var1 = var3[var1];
        var1 = var2.bind(var0)(var1);
        var3 = var1.Storage;
        var2 = var3.remove;
        var1 = 'hideConnectPlayStation';
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var6.cleanup = var8;
    var1[9] = var6;
    var6 = {};
    var8 = 13;
    var6.version = var8;
    var8 = function arg0() {
        _fun97901: for (var _fun97901_ip = 0;;) switch (_fun97901_ip) {
            case 0:
                var5 = arg0;
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 6;
                var0 = var0[var6];
                var4 = undefined;
                var0 = var1.bind(var4)(var0);
                var3 = var0.Storage;
                var1 = var3.get;
                var0 = 'hidePremiumPromo';
                var1 = var1.bind(var3)(var0);
                if (!var1) {
                    _fun97901_ip = 95;
                    continue _fun97901
                }
            case 53:
                var3 = _closure1_slot6;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 10;
                var0 = var8[var0];
                var0 = var7.bind(var4)(var0);
                var0 = var0.DismissibleContent;
                var0 = var0.NAGBAR_NOTICE_PREMIUM_PROMO;
                var1 = var3.bind(var4)(var5, var0);
            case 95:
                var0 = false;
                if (!var1) {
                    _fun97901_ip = 102;
                    continue _fun97901
                }
            case 100:
                var0 = true;
            case 102:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var3.bind(var4)(var1);
                var7 = var1.Storage;
                var3 = var7.get;
                var1 = 'hidePremiumTier2TrialEnding';
                var1 = var3.bind(var7)(var1);
                if (!var1) {
                    _fun97901_ip = 186;
                    continue _fun97901
                }
            case 144:
                var7 = _closure1_slot6;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 10;
                var3 = var9[var3];
                var3 = var8.bind(var4)(var3);
                var3 = var3.DismissibleContent;
                var3 = var3.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING;
                var1 = var7.bind(var4)(var5, var3);
            case 186:
                if (!var1) {
                    _fun97901_ip = 191;
                    continue _fun97901
                }
            case 189:
                var0 = true;
            case 191:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var3.bind(var4)(var1);
                var6 = var1.Storage;
                var3 = var6.get;
                var1 = 'hidePremiumReactivateNotice';
                var1 = var3.bind(var6)(var1);
                if (!var1) {
                    _fun97901_ip = 275;
                    continue _fun97901
                }
            case 233:
                var3 = _closure1_slot6;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 10;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.DismissibleContent;
                var2 = var2.NAGBAR_NOTICE_PREMIUM_REACTIVATE;
                var1 = var3.bind(var4)(var5, var2);
            case 275:
                if (!var1) {
                    _fun97901_ip = 280;
                    continue _fun97901
                }
            case 278:
                var0 = true;
            case 280:
                return var0;
        }
    };
    var6.run = var8;
    var8 = function() {
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 6;
        var4 = var3[var1];
        var0 = undefined;
        var4 = var2.bind(var0)(var4);
        var6 = var4.Storage;
        var5 = var6.remove;
        var4 = 'hidePremiumPromo';
        var4 = var5.bind(var6)(var4);
        var4 = var3[var1];
        var4 = var2.bind(var0)(var4);
        var6 = var4.Storage;
        var5 = var6.remove;
        var4 = 'hidePremiumTier2TrialEnding';
        var4 = var5.bind(var6)(var4);
        var1 = var3[var1];
        var1 = var2.bind(var0)(var1);
        var3 = var1.Storage;
        var2 = var3.remove;
        var1 = 'hidePremiumReactivateNotice';
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var6.cleanup = var8;
    var1[10] = var6;
    var6 = {};
    var8 = 14;
    var6.version = var8;
    var8 = function arg0() {
        var4 = _closure1_slot7;
        var1 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 4;
        var0 = var5[var0];
        var3 = undefined;
        var0 = var1.bind(var3)(var0);
        var0 = var0.HotspotLocations;
        var2 = var0.ACTIVITY_BEB_TUTORIAL;
        var0 = 10;
        var0 = var5[var0];
        var0 = var1.bind(var3)(var0);
        var0 = var0.DismissibleContent;
        var1 = var0.ACTIVITIES_TUTORIAL_COACH_MARK;
        var0 = arg0;
        var0 = var4.bind(var3)(var0, var2, var1);
        return var0;
    };
    var6.run = var8;
    var8 = function() {
        var0 = undefined;
        return var0;
    };
    var6.cleanup = var8;
    var1[11] = var6;
    var6 = {};
    var8 = 15;
    var6.version = var8;
    var8 = function arg0() {
        var4 = _closure1_slot7;
        var1 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 4;
        var0 = var5[var0];
        var3 = undefined;
        var0 = var1.bind(var3)(var0);
        var0 = var0.HotspotLocations;
        var2 = var0.NOW_PLAYING_CONSENT_CARD;
        var0 = 10;
        var0 = var5[var0];
        var0 = var1.bind(var3)(var0);
        var0 = var0.DismissibleContent;
        var1 = var0.NOW_PLAYING_CONSENT_CARD;
        var0 = arg0;
        var0 = var4.bind(var3)(var0, var2, var1);
        return var0;
    };
    var6.run = var8;
    var8 = function() {
        var0 = undefined;
        return var0;
    };
    var6.cleanup = var8;
    var1[12] = var6;
    var6 = {};
    var8 = 16;
    var6.version = var8;
    var8 = function arg0() {
        _fun97907: for (var _fun97907_ip = 0;;) switch (_fun97907_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 6;
                var0 = var4[var0];
                var4 = undefined;
                var0 = var3.bind(var4)(var0);
                var5 = var0.Storage;
                var3 = var5.get;
                var0 = 'PromotionsPersistedStore';
                var0 = var3.bind(var5)(var0);
                var6 = null;
                if (!(var6 != var0)) {
                    _fun97907_ip = 206;
                    continue _fun97907
                }
            case 59:
                var0 = var0._state;
                var5 = var0.lastDismissedOutboundPromotionStartDate;
                var0 = var6 != var5;
                if (!var0) {
                    _fun97907_ip = 145;
                    continue _fun97907
                }
            case 78:
                var3 = var2.userContent;
                if (!(var6 == var3)) {
                    _fun97907_ip = 129;
                    continue _fun97907
                }
            case 88:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 5;
                var3 = var8[var3];
                var3 = var7.bind(var4)(var3);
                var7 = var3.UserContentSettings;
                var3 = var7.create;
                var3 = var3.bind(var7)();
                var2.userContent = var3;
            case 129:
                var3 = var2.userContent;
                var3 = var3.lastDismissedOutboundPromotionStartDate;
                var0 = var6 == var3;
            case 145:
                if (!var0) {
                    _fun97907_ip = 204;
                    continue _fun97907
                }
            case 148:
                var2 = var2.userContent;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 9;
                var1 = var6[var1];
                var1 = var3.bind(var4)(var1);
                var4 = var1.StringValue;
                var3 = var4.create;
                var1 = {};
                var1.value = var5;
                var1 = var3.bind(var4)(var1);
                var2.lastDismissedOutboundPromotionStartDate = var1;
                var0 = true;
            case 204:
                return var0;
            case 206:
                var0 = false;
                return var0;
        }
    };
    var6.run = var8;
    var8 = function() {
        var0 = undefined;
        return var0;
    };
    var6.cleanup = var8;
    var1[13] = var6;
    var6 = {};
    var8 = 17;
    var6.version = var8;
    var8 = function arg0() {
        _fun97909: for (var _fun97909_ip = 0;;) switch (_fun97909_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 8;
                var0 = var4[var0];
                var4 = undefined;
                var0 = var3.bind(var4)(var0);
                var5 = var0.PersistedStore;
                var3 = var5.migrateAndReadStoreState;
                var0 = 'ExpressionSuggestionsPersistedStore';
                var6 = null;
                var0 = var3.bind(var5)(var0, var6);
                var0 = var0.state;
                if (!(var6 != var0)) {
                    _fun97909_ip = 207;
                    continue _fun97909
                }
            case 66:
                var5 = var0.expressionSuggestionsEnabled;
                var0 = var6 != var5;
                if (!var0) {
                    _fun97909_ip = 146;
                    continue _fun97909
                }
            case 79:
                var3 = var2.textAndImages;
                if (!(var6 == var3)) {
                    _fun97909_ip = 130;
                    continue _fun97909
                }
            case 89:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 5;
                var3 = var8[var3];
                var3 = var7.bind(var4)(var3);
                var7 = var3.TextAndImagesSettings;
                var3 = var7.create;
                var3 = var3.bind(var7)();
                var2.textAndImages = var3;
            case 130:
                var3 = var2.textAndImages;
                var3 = var3.expressionSuggestionsEnabled;
                var0 = var6 == var3;
            case 146:
                if (!var0) {
                    _fun97909_ip = 205;
                    continue _fun97909
                }
            case 149:
                var2 = var2.textAndImages;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 9;
                var1 = var6[var1];
                var1 = var3.bind(var4)(var1);
                var4 = var1.BoolValue;
                var3 = var4.create;
                var1 = {};
                var1.value = var5;
                var1 = var3.bind(var4)(var1);
                var2.expressionSuggestionsEnabled = var1;
                var0 = true;
            case 205:
                return var0;
            case 207:
                var0 = false;
                return var0;
        }
    };
    var6.run = var8;
    var8 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var3 = var1.Storage;
        var2 = var3.remove;
        var1 = 'ExpressionSuggestionsPersistedStore';
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var6.cleanup = var8;
    var1[14] = var6;
    var6 = {};
    var8 = 18;
    var6.version = var8;
    var8 = function arg0() {
        _fun97911: for (var _fun97911_ip = 0;;) switch (_fun97911_ip) {
            case 0:
                var5 = arg0;
                var6 = _closure1_slot7;
                var8 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = 4;
                var3 = var0[var2];
                var4 = undefined;
                var3 = var8.bind(var4)(var3);
                var3 = var3.HotspotLocations;
                var3 = var3.GUILD_DELETE_FEEDBACK;
                var7 = 10;
                var0 = var0[var7];
                var0 = var8.bind(var4)(var0);
                var0 = var0.DismissibleContent;
                var0 = var0.GUILD_DELETE_FEEDBACK;
                var3 = var6.bind(var4)(var5, var3, var0);
                var0 = false;
                if (!var3) {
                    _fun97911_ip = 82;
                    continue _fun97911
                }
            case 80:
                var0 = true;
            case 82:
                var3 = _closure1_slot7;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = var1[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.HotspotLocations;
                var2 = var2.GUILD_LEAVE_FEEDBACK;
                var1 = var1[var7];
                var1 = var6.bind(var4)(var1);
                var1 = var1.DismissibleContent;
                var1 = var1.GUILD_LEAVE_FEEDBACK;
                var1 = var3.bind(var4)(var5, var2, var1);
                if (!var1) {
                    _fun97911_ip = 148;
                    continue _fun97911
                }
            case 146:
                var0 = true;
            case 148:
                return var0;
        }
    };
    var6.run = var8;
    var8 = function() {
        var0 = undefined;
        return var0;
    };
    var6.cleanup = var8;
    var1[15] = var6;
    var6 = {};
    var8 = 19;
    var6.version = var8;
    var8 = function arg0() {
        _fun97913: for (var _fun97913_ip = 0;;) switch (_fun97913_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 6;
                var0 = var3[var0];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var3 = var0.Storage;
                var2 = var3.get;
                var0 = 'forumHelperCardStorageKey';
                var0 = var2.bind(var3)(var0);
                var2 = null;
                var2 = var2 != var0;
                if (!var2) {
                    _fun97913_ip = 59;
                    continue _fun97913
                }
            case 56:
                var2 = var0;
            case 59:
                var0 = false;
                if (!var2) {
                    _fun97913_ip = 109;
                    continue _fun97913
                }
            case 64:
                var3 = _closure1_slot6;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 10;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.DismissibleContent;
                var2 = var1.FORUM_CHANNEL_HELPER_CARD;
                var1 = arg0;
                var0 = var3.bind(var4)(var1, var2);
            case 109:
                return var0;
        }
    };
    var6.run = var8;
    var8 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var3 = var1.Storage;
        var2 = var3.remove;
        var1 = 'forumHelperCardStorageKey';
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var6.cleanup = var8;
    var1[16] = var6;
    var6 = {};
    var8 = 20;
    var6.version = var8;
    var8 = function arg0() {
        _fun97915: for (var _fun97915_ip = 0;;) switch (_fun97915_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 6;
                var1 = var1[var7];
                var4 = undefined;
                var1 = var3.bind(var4)(var1);
                var3 = var1.Storage;
                var1 = var3.get;
                var6 = 'lastChangeLogId';
                var1 = var1.bind(var3)(var6);
                var5 = null;
                if (!(var5 != var1)) {
                    _fun97915_ip = 284;
                    continue _fun97915
                }
            case 59:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 11;
                var3 = var9[var3];
                var8 = var8.bind(var4)(var3);
                var3 = var8.isSnowflake;
                var3 = var3.bind(var8)(var1);
                if (var3) {
                    _fun97915_ip = 131;
                    continue _fun97915
                }
            case 93:
                var8 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var7];
                var3 = var8.bind(var4)(var3);
                var8 = var3.Storage;
                var3 = var8.remove;
                var3 = var3.bind(var8)(var6);
                var3 = false;
                return var3;
            case 131:
                var3 = var0.userContent;
                if (!(var5 != var3)) {
                    _fun97915_ip = 227;
                    continue _fun97915
                }
            case 141:
                var3 = var0.userContent;
                if (!(var5 != var3)) {
                    _fun97915_ip = 268;
                    continue _fun97915
                }
            case 151:
                var3 = var0.userContent;
                var3 = var3.lastReceivedChangelogId;
                if (!(var5 != var3)) {
                    _fun97915_ip = 268;
                    continue _fun97915
                }
            case 167:
                var3 = var0.userContent;
                var5 = var3.lastReceivedChangelogId;
                var3 = '0';
                if (!(var3 !== var5)) {
                    _fun97915_ip = 268;
                    continue _fun97915
                }
            case 189:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var7];
                var3 = var5.bind(var4)(var3);
                var5 = var3.Storage;
                var3 = var5.remove;
                var3 = var3.bind(var5)(var6);
                var3 = false;
                return var3;
            case 227:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 5;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.UserContentSettings;
                var2 = var3.create;
                var2 = var2.bind(var3)();
                var0.userContent = var2;
            case 268:
                var0 = var0.userContent;
                var0.lastReceivedChangelogId = var1;
                var0 = true;
                return var0;
            case 284:
                var0 = false;
                return var0;
        }
    };
    var6.run = var8;
    var8 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var3 = var1.Storage;
        var2 = var3.remove;
        var1 = 'lastChangeLogId';
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var6.cleanup = var8;
    var1[17] = var6;
    var6 = {};
    var8 = 21;
    var6.version = var8;
    var8 = function arg0() {
        _fun97917: for (var _fun97917_ip = 0;;) switch (_fun97917_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.appearance;
                var1 = null;
                var1 = var1 == var0;
                var4 = undefined;
                var3 = undefined;
                if (var1) {
                    _fun97917_ip = 28;
                    continue _fun97917
                }
            case 22:
                var3 = var0.uiDensity;
            case 28:
                var6 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 5;
                var0 = var0[var5];
                var0 = var6.bind(var4)(var0);
                var0 = var0.UIDensity;
                var0 = var0.COMPACT;
                var0 = var3 === var0;
                if (!var0) {
                    _fun97917_ip = 113;
                    continue _fun97917
                }
            case 70:
                var2 = var2.appearance;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.UIDensity;
                var1 = var1.DEFAULT;
                var2.uiDensity = var1;
                var0 = true;
            case 113:
                return var0;
        }
    };
    var6.run = var8;
    var7 = function() {
        var0 = undefined;
        return var0;
    };
    var6.cleanup = var7;
    var1[18] = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/PreloadedUserSettingsMigrations.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 660, 10300, 1357, 8341, 1311, 587, 1344, 566, 1342, 1358, 4544, 2]);