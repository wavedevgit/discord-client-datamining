// modules/forums/native/composer/ForumComposerModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
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
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var6 = var5[var3];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DraftType;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var9 = 9;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var9;
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = function arg0() {
        var4 = arg0;
        var3 = _closure1_slot1;
        var5 = _closure1_slot3;
        var2 = 13;
        var6 = var5[var2];
        var0 = undefined;
        var8 = var3.bind(var0)(var6);
        var7 = var8.clearDraft;
        var1 = _closure1_slot8;
        var6 = var1.ThreadSettings;
        var6 = var7.bind(var8)(var4, var6);
        var2 = var5[var2];
        var7 = var3.bind(var0)(var2);
        var6 = var7.clearDraft;
        var2 = var1.ChannelMessage;
        var2 = var6.bind(var7)(var4, var2);
        var2 = 14;
        var2 = var5[var2];
        var3 = var3.bind(var0)(var2);
        var2 = var3.clearAll;
        var1 = var1.ChannelMessage;
        var1 = var2.bind(var3)(var4, var1);
        return var0;
    };
    var _closure1_slot13 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/composer/ForumComposerModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun73758: for (var _fun73758_ip = 0;;) switch (_fun73758_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.parentChannelId;
                var _closure2_slot0 = var11;
                var9 = var1.threadId;
                var _closure2_slot1 = var9;
                var2 = var1.messageId;
                var _closure2_slot2 = var2;
                var10 = var1.isEdit;
                var4 = undefined;
                if (!(var10 === var4)) {
                    _fun73758_ip = 48;
                    continue _fun73758
                }
            case 46:
                var10 = false;
            case 48:
                var _closure2_slot3 = var10;
                var2 = var1.analyticsLocations;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var1 = _closure1_slot12;
                var8 = var1.bind(var4)();
                var12 = _closure1_slot1;
                var3 = _closure1_slot3;
                var6 = 15;
                var1 = var3[var6];
                var1 = var12.bind(var4)(var1);
                var1 = var1.bind(var4)(var2);
                var5 = var1.analyticsLocations;
                var2 = _closure1_slot0;
                var1 = 16;
                var13 = var3[var1];
                var18 = var2.bind(var4)(var13);
                var17 = var18.useStateFromStores;
                var13 = _closure1_slot6;
                var16 = new Array(1);
                var16[0] = var13;
                var15 = new Array(1);
                var15[0] = var11;
                var14 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var15 = var17.bind(var18)(var16, var14, var15);
                _closure2_slot4 = var15;
                var14 = var3[var1];
                var17 = var2.bind(var4)(var14);
                var16 = var17.useStateFromStores;
                var14 = new Array(1);
                var14[0] = var13;
                var13 = new Array(1);
                var13[0] = var9;
                var9 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14 = var16.bind(var17)(var14, var9, var13);
                var9 = 17;
                var9 = var3[var9];
                var9 = var12.bind(var4)(var9);
                var12 = var9.bind(var4)(var11);
                var9 = var3[var1];
                var16 = var2.bind(var4)(var9);
                var13 = var16.useStateFromStores;
                var9 = _closure1_slot10;
                var11 = new Array(1);
                var11[0] = var9;
                var9 = function() { // Environment: var0
                    _fun73761: for (var _fun73761_ip = 0;;) switch (_fun73761_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var3 = null;
                            var2 = var3 != var0;
                            var0 = null;
                            if (!var2) {
                                _fun73761_ip = 59;
                                continue _fun73761
                            }
                        case 18:
                            var2 = _closure2_slot2;
                            var2 = var3 != var2;
                            var0 = null;
                            if (!var2) {
                                _fun73761_ip = 59;
                                continue _fun73761
                            }
                        case 31:
                            var3 = _closure1_slot10;
                            var2 = var3.getMessage;
                            var1 = _closure2_slot1;
                            var1 = var2.bind(var3)(var1);
                            var0 = var1.firstMessage;
                        case 59:
                            return var0;
                    }
                };
                var13 = var13.bind(var16)(var11, var9);
                var1 = var3[var1];
                var16 = var2.bind(var4)(var1);
                var11 = var16.useStateFromStores;
                var1 = _closure1_slot5;
                var9 = new Array(1);
                var9[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.isOpen;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var9 = var11.bind(var16)(var9, var1);
                var11 = function arg0() {
                    _fun73763: for (var _fun73763_ip = 0;;) switch (_fun73763_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun73763_ip = 700;
                                continue _fun73763
                            }
                        case 18:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var6 = arg0;
                            if (var6) {
                                _fun73763_ip = 663;
                                continue _fun73763
                            }
                        case 38:
                            var6 = 19;
                            var7 = var3[var6];
                            var6 = undefined;
                            var9 = var4.bind(var6)(var7);
                            var8 = var9.setKeyboardType;
                            var7 = {};
                            var10 = 20;
                            var10 = var3[var10];
                            var10 = var4.bind(var6)(var10);
                            var10 = var10.KeyboardTypes;
                            var10 = var10.SYSTEM;
                            var7.type = var10;
                            var7 = var8.bind(var9)(var7);
                            var10 = _closure1_slot7;
                            var8 = var10.getDraft;
                            var9 = _closure2_slot0;
                            var7 = _closure1_slot8;
                            var7 = var7.ChannelMessage;
                            var7 = var8.bind(var10)(var9, var7);
                            var8 = var10.getThreadSettings;
                            var9 = var8.bind(var10)(var9);
                            if (!(var2 == var9)) {
                                _fun73763_ip = 188;
                                continue _fun73763
                            }
                        case 138:
                            var11 = _closure1_slot7;
                            var10 = var11.getThreadDraftWithParentMessageId;
                            var12 = _closure1_slot1;
                            var13 = _closure1_slot3;
                            var8 = 21;
                            var8 = var13[var8];
                            var13 = var12.bind(var6)(var8);
                            var12 = var13.castChannelIdAsMessageId;
                            var8 = _closure2_slot0;
                            var8 = var12.bind(var13)(var8);
                            var9 = var10.bind(var11)(var8);
                        case 188:
                            var12 = _closure1_slot9;
                            var11 = var12.getUploads;
                            var10 = _closure2_slot0;
                            var8 = _closure1_slot8;
                            var8 = var8.ChannelMessage;
                            var8 = var11.bind(var12)(var10, var8);
                            var10 = _closure2_slot3;
                            if (var10) {
                                _fun73763_ip = 618;
                                continue _fun73763
                            }
                        case 228:
                            var10 = var7.length;
                            var7 = 0;
                            if (!(!(var10 > var7))) {
                                _fun73763_ip = 288;
                                continue _fun73763
                            }
                        case 239:
                            var8 = var8.length;
                            if (!(!(var8 > var7))) {
                                _fun73763_ip = 288;
                                continue _fun73763
                            }
                        case 248:
                            var10 = var2 == var9;
                            var8 = undefined;
                            if (var10) {
                                _fun73763_ip = 262;
                                continue _fun73763
                            }
                        case 257:
                            var8 = var9.name;
                        case 262:
                            var9 = var2 != var8;
                            var2 = '';
                            if (!var9) {
                                _fun73763_ip = 276;
                                continue _fun73763
                            }
                        case 273:
                            var2 = var8;
                        case 276:
                            var2 = var2.length;
                            if (!(var2 > var7)) {
                                _fun73763_ip = 618;
                                continue _fun73763
                            }
                        case 288:
                            var2 = {};
                            var7 = function() {
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var0 = 22;
                                var1 = var3[var0];
                                var0 = undefined;
                                var5 = var2.bind(var0)(var1);
                                var4 = var5.maybeTrackForumNewPostDraftCreated;
                                var1 = {};
                                var7 = _closure2_slot4;
                                var7 = var7.guild_id;
                                var1.guildId = var7;
                                var6 = _closure2_slot4;
                                var6 = var6.id;
                                var1.channelId = var6;
                                var1 = var4.bind(var5)(var1);
                                var1 = 18;
                                var1 = var3[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.closeCreateForumPostModal;
                                var1 = var1.bind(var2)();
                                return var0;
                            };
                            var2.onConfirm = var7;
                            var5 = function() {
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var0 = 18;
                                var2 = var2[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.closeCreateForumPostModal;
                                var2 = var2.bind(var3)();
                                var2 = _closure1_slot13;
                                var1 = _closure2_slot0;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var2.onCancel = var5;
                            var9 = var2.onConfirm;
                            var8 = var2.onCancel;
                            var5 = _closure1_slot2;
                            var14 = _closure1_slot3;
                            var2 = 10;
                            var2 = var14[var2];
                            var5 = var5.bind(var6)(var2);
                            var2 = var5.dismissGlobalKeyboard;
                            var2 = var2.bind(var5)();
                            var5 = _closure1_slot1;
                            var2 = 11;
                            var2 = var14[var2];
                            var7 = var5.bind(var6)(var2);
                            var5 = var7.show;
                            var2 = {};
                            var13 = _closure1_slot0;
                            var10 = 12;
                            var11 = var14[var10];
                            var11 = var13.bind(var6)(var11);
                            var15 = var11.intl;
                            var12 = var15.string;
                            var11 = var14[var10];
                            var11 = var13.bind(var6)(var11);
                            var11 = var11.t;
                            var11 = var11.Fz1512;
                            var11 = var12.bind(var15)(var11);
                            var2.title = var11;
                            var11 = var14[var10];
                            var11 = var13.bind(var6)(var11);
                            var15 = var11.intl;
                            var12 = var15.string;
                            var11 = var14[var10];
                            var11 = var13.bind(var6)(var11);
                            var11 = var11.t;
                            var11 = var11.YBgepz;
                            var11 = var12.bind(var15)(var11);
                            var2.body = var11;
                            var11 = var14[var10];
                            var11 = var13.bind(var6)(var11);
                            var15 = var11.intl;
                            var12 = var15.string;
                            var11 = var14[var10];
                            var11 = var13.bind(var6)(var11);
                            var11 = var11.t;
                            var11 = var11.Rnli6C;
                            var11 = var12.bind(var15)(var11);
                            var2.confirmText = var11;
                            var11 = var14[var10];
                            var11 = var13.bind(var6)(var11);
                            var12 = var11.intl;
                            var11 = var12.string;
                            var10 = var14[var10];
                            var10 = var13.bind(var6)(var10);
                            var10 = var10.t;
                            var10 = var10["3NnH6V"];
                            var10 = var11.bind(var12)(var10);
                            var2.cancelText = var10;
                            var2.onConfirm = var9;
                            var2.onCancel = var8;
                            var8 = true;
                            var2.hideActionSheet = var8;
                            var2.isDismissable = var8;
                            var2 = var5.bind(var7)(var2);
                            _fun73763_ip = 700;
                            continue _fun73763;
                        case 618:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var2 = 18;
                            var2 = var7[var2];
                            var5 = var5.bind(var6)(var2);
                            var2 = var5.closeCreateForumPostModal;
                            var2 = var2.bind(var5)();
                            var5 = _closure1_slot13;
                            var2 = _closure2_slot0;
                            var2 = var5.bind(var6)(var2);
                            _fun73763_ip = 700;
                            continue _fun73763;
                        case 663:
                            var2 = 18;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.closeCreateForumPostModal;
                            var3 = var3.bind(var4)();
                            var1 = _closure1_slot13;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                        case 700:
                            var0 = undefined;
                            return var0;
                    }
                };
                _closure2_slot5 = var11;
                var1 = 23;
                var1 = var3[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useNavigatorBackPressHandler;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var0 = false;
                    var0 = var2.bind(var1)(var0);
                    var0 = true;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var2 = null;
                var1 = var2 == var15;
                var0 = null;
                if (var1) {
                    _fun73758_ip = 554;
                    continue _fun73758
                }
            case 361:
                var1 = var15.isForumLikeChannel;
                var1 = var1.bind(var15)();
                var0 = null;
                if (!var1) {
                    _fun73758_ip = 554;
                    continue _fun73758
                }
            case 379:
                if (var10) {
                    _fun73758_ip = 394;
                    continue _fun73758
                }
            case 382:
                var1 = var2 == var12;
                var0 = null;
                if (var1) {
                    _fun73758_ip = 554;
                    continue _fun73758
                }
            case 394:
                if (!var10) {
                    _fun73758_ip = 409;
                    continue _fun73758
                }
            case 397:
                var1 = var2 == var13;
                var0 = null;
                if (var1) {
                    _fun73758_ip = 554;
                    continue _fun73758
                }
            case 409:
                var3 = _closure1_slot11;
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var6];
                var1 = var2.bind(var4)(var1);
                var2 = var1.AnalyticsLocationProvider;
                var1 = {};
                var1.value = var5;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var8.container;
                var5.style = var8;
                var8 = undefined;
                if (!var9) {
                    _fun73758_ip = 468;
                    continue _fun73758
                }
            case 462:
                var8 = 'no-hide-descendants';
            case 468:
                var5.importantForAccessibility = var8;
                var9 = _closure1_slot11;
                var8 = _closure1_slot1;
                var16 = _closure1_slot3;
                var7 = 24;
                var7 = var16[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var7.parentChannel = var15;
                var7.thread = var14;
                var7.message = var13;
                var7.threadSettingsDraft = var12;
                var7.onClose = var11;
                var7.isEdit = var10;
                var7 = var9.bind(var4)(var8, var7);
                var5.children = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 554:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 8603, 1372, 3992, 3991, 5641, 33, 1297, 671, 1582, 3927, 1234, 6476, 7602, 5721, 566, 9030, 9246, 1467, 1567, 21, 6464, 4703, 9248, 2]);