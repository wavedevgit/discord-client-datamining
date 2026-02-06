// modules/forums/native/ForumPost.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        var0 = arg0;
        var10 = var0.firstMessage;
        var9 = var0.hasUnreads;
        var14 = var0.isNew;
        var15 = var0.media;
        var8 = var0.parentChannel;
        var11 = var0.thread;
        var3 = _closure1_slot8;
        var2 = _closure1_slot7;
        var1 = {};
        var13 = _closure1_slot6;
        var6 = _closure1_slot1;
        var12 = _closure1_slot2;
        var0 = 5;
        var4 = var12[var0];
        var0 = undefined;
        var7 = var6.bind(var0)(var4);
        var4 = {};
        var4.thread = var11;
        var4.hasUnreads = var9;
        var4.isNew = var14;
        var7 = var13.bind(var0)(var7, var4);
        var4 = new Array(3);
        var4[0] = var7;
        var14 = _closure1_slot6;
        var7 = 6;
        var7 = var12[var7];
        var13 = var6.bind(var0)(var7);
        var7 = {};
        var7.thread = var11;
        var7.hasUnreads = var9;
        var7.media = var15;
        var7 = var14.bind(var0)(var13, var7);
        var4[1] = var7;
        var7 = _closure1_slot6;
        var5 = 7;
        var5 = var12[var5];
        var6 = var6.bind(var0)(var5);
        var5 = {};
        var5.thread = var11;
        var5.firstMessage = var10;
        var5.hasUnreads = var9;
        var5.parentChannel = var8;
        var5 = var7.bind(var0)(var6, var5);
        var4[2] = var5;
        var1.children = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = function arg0() {
        _fun89534: for (var _fun89534_ip = 0;;) switch (_fun89534_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.threadId;
                var _closure2_slot0 = var2;
                var7 = var1.style;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 8;
                var2 = var4[var1];
                var5 = undefined;
                var10 = var3.bind(var5)(var2);
                var9 = var10.useStateFromStores;
                var2 = _closure1_slot3;
                var8 = new Array(1);
                var8[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot3;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var15 = var9.bind(var10)(var8, var2);
                var8 = _closure1_slot1;
                var2 = 9;
                var2 = var4[var2];
                var9 = var8.bind(var5)(var2);
                var12 = null;
                var8 = var12 != var15;
                var2 = '[Forum Post] The thread should not be null here. A store must have missed an update.';
                var2 = var9.bind(var5)(var8, var2);
                var8 = var15.parent_id;
                var _closure2_slot1 = var8;
                var2 = _closure1_slot5;
                var2 = var2.bind(var5)(var8);
                var2 = var2.layoutType;
                var8 = var4[var1];
                var11 = var3.bind(var5)(var8);
                var10 = var11.useStateFromStores;
                var8 = _closure1_slot3;
                var9 = new Array(1);
                var9[0] = var8;
                var8 = function() { // Environment: var0
                    var2 = _closure1_slot3;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14 = var10.bind(var11)(var9, var8);
                var8 = 10;
                var8 = var4[var8];
                var9 = var3.bind(var5)(var8);
                var8 = var9.useFirstForumPostMessage;
                var8 = var8.bind(var9)(var15);
                var13 = var8.firstMessage;
                var _closure2_slot2 = var13;
                var17 = var8.loaded;
                var8 = 11;
                var9 = var4[var8];
                var10 = var3.bind(var5)(var9);
                var9 = var10.useForumPostReadStates;
                var10 = var9.bind(var10)(var15);
                var9 = var10.isNew;
                var11 = var10.hasUnreads;
                var8 = var4[var8];
                var16 = var3.bind(var5)(var8);
                var10 = var16.useForumPostFirstMessageMarkup;
                var8 = {};
                var8.firstMessage = var13;
                var8.hasUnreads = var11;
                var8 = var10.bind(var16)(var8);
                var20 = var8.content;
                var16 = var8.hasSpoilerEmbeds;
                var8 = 14;
                var10 = var4[var8];
                var18 = var3.bind(var5)(var10);
                var10 = var18.useForumPostMediaThumbnail;
                var18 = var10.bind(var18)(var13, var14, var16);
                var8 = var4[var8];
                var10 = var3.bind(var5)(var8);
                var8 = var10.useFirstMediaIsEmbed;
                var19 = var8.bind(var10)(var13, var16);
                var1 = var4[var1];
                var4 = var3.bind(var5)(var1);
                var3 = var4.useStateFromStoresObject;
                var8 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var8;
                var0 = function() { // Environment: var0
                    _fun89537: for (var _fun89537_ip = 0;;) switch (_fun89537_ip) {
                        case 0:
                            var0 = {};
                            var1 = _closure2_slot2;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun89537_ip = 40;
                                continue _fun89537
                            }
                        case 18:
                            var6 = _closure1_slot4;
                            var5 = var6.isBlockedForMessage;
                            var4 = _closure2_slot2;
                            var1 = var5.bind(var6)(var4);
                        case 40:
                            var0.isBlocked = var1;
                            var1 = _closure2_slot2;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun89537_ip = 78;
                                continue _fun89537
                            }
                        case 56:
                            var4 = _closure1_slot4;
                            var3 = var4.isIgnoredForMessage;
                            var2 = _closure2_slot2;
                            var1 = var3.bind(var4)(var2);
                        case 78:
                            var0.isIgnored = var1;
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var1, var0);
                var10 = var0.isBlocked;
                var1 = var0.isIgnored;
                var0 = null;
                if (!var17) {
                    _fun89534_ip = 861;
                    continue _fun89534
                }
            case 396:
                if (var10) {
                    _fun89534_ip = 709;
                    continue _fun89534
                }
            case 402:
                if (var1) {
                    _fun89534_ip = 709;
                    continue _fun89534
                }
            case 408:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 15;
                var1 = var4[var1];
                var1 = var3.bind(var5)(var1);
                var1 = var1.ForumLayout;
                var1 = var1.GRID;
                if (!(var2 === var1)) {
                    _fun89534_ip = 458;
                    continue _fun89534
                }
            case 444:
                var2 = var18.length;
                var1 = 0;
                if (!(!(var2 > var1))) {
                    _fun89534_ip = 602;
                    continue _fun89534
                }
            case 458:
                var3 = _closure1_slot6;
                var2 = _closure1_slot0;
                var21 = _closure1_slot2;
                var1 = 12;
                var1 = var21[var1];
                var1 = var2.bind(var5)(var1);
                var2 = var1.ForumPostPressableContainer;
                var1 = {};
                var1.style = var7;
                var4 = var15.id;
                var1.threadId = var4;
                var16 = _closure1_slot6;
                var8 = _closure1_slot1;
                var4 = 13;
                var4 = var21[var4];
                var8 = var8.bind(var5)(var4);
                var4 = {};
                var4.thread = var15;
                var4.parentChannel = var14;
                var4.firstMessage = var13;
                var4.messageContent = var20;
                var20 = 0;
                var20 = var18[var20];
                var4.media = var20;
                var4.isEmbed = var19;
                var4.hasUnreads = var11;
                var4.isNew = var9;
                var4.firstMessageLoaded = var17;
                var17 = false;
                var4.isLocalDeviceMedia = var17;
                var4 = var16.bind(var5)(var8, var4);
                var1.children = var4;
                var1 = var3.bind(var5)(var2, var1);
                _fun89534_ip = 704;
                continue _fun89534;
            case 602:
                var4 = _closure1_slot6;
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 12;
                var2 = var8[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.ForumPostPressableContainer;
                var2 = {};
                var2.style = var7;
                var8 = var15.id;
                var2.threadId = var8;
                var17 = _closure1_slot6;
                var16 = _closure1_slot9;
                var8 = {};
                var8.thread = var15;
                var8.media = var18;
                var8.parentChannel = var14;
                var8.firstMessage = var13;
                var8.hasUnreads = var11;
                var8.isNew = var9;
                var8 = var17.bind(var5)(var16, var8);
                var2.children = var8;
                var1 = var4.bind(var5)(var3, var2);
            case 704:
                _fun89534_ip = 858;
                continue _fun89534;
            case 709:
                var4 = _closure1_slot6;
                var3 = _closure1_slot0;
                var16 = _closure1_slot2;
                var2 = 12;
                var2 = var16[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.ForumPostPressableContainer;
                var2 = {};
                var2.style = var7;
                var7 = var15.id;
                var2.threadId = var7;
                var8 = _closure1_slot6;
                var7 = _closure1_slot1;
                var6 = 13;
                var6 = var16[var6];
                var7 = var7.bind(var5)(var6);
                var6 = {};
                var6.thread = var15;
                var6.parentChannel = var14;
                var6.firstMessage = var13;
                var6.messageContent = var12;
                var6.media = var12;
                var6.hasUnreads = var11;
                var6.isNew = var9;
                var9 = true;
                var6.firstMessageLoaded = var9;
                var9 = false;
                var6.isLocalDeviceMedia = var9;
                var9 = 'ignored';
                if (!var10) {
                    _fun89534_ip = 837;
                    continue _fun89534
                }
            case 833:
                var9 = 'blocked';
            case 837:
                var6.senderModifier = var9;
                var6 = var8.bind(var5)(var7, var6);
                var2.children = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 858:
                var0 = var1;
            case 861:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var6[var0];
    var3 = arg3;
    var0 = undefined;
    var7 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.useForumChannelStore;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot6 = var4;
    var4 = var3.Fragment;
    var _closure1_slot7 = var4;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var4 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun89538: for (var _fun89538_ip = 0;;) switch (_fun89538_ip) {
            case 0:
                var5 = arg0;
                var _closure2_slot0 = var5;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 8;
                var2 = var4[var2];
                var4 = undefined;
                var6 = var3.bind(var4)(var2);
                var3 = var6.useStateFromStores;
                var7 = _closure1_slot3;
                var2 = new Array(1);
                var2[0] = var7;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot3;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.threadId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var3.bind(var6)(var2, var0);
                var0 = null;
                var2 = var0 == var2;
                if (var2) {
                    _fun89538_ip = 99;
                    continue _fun89538
                }
            case 73:
                var3 = _closure1_slot6;
                var2 = _closure1_slot10;
                var1 = {};
                var9 = var1;
                var8 = var5;
                var5 = copyDataProperties(var9, var8);
                var0 = var3.bind(var4)(var2, var1);
            case 99:
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/ForumPost.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function arg0() {
        _fun89540: for (var _fun89540_ip = 0;;) switch (_fun89540_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.style;
                var8 = var0.localDeviceMedia;
                var0 = var0.threadId;
                var _closure2_slot0 = var0;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var7 = 8;
                var0 = var3[var7];
                var4 = undefined;
                var11 = var2.bind(var4)(var0);
                var10 = var11.useStateFromStores;
                var0 = _closure1_slot3;
                var9 = new Array(1);
                var9[0] = var0;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot3;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14 = var10.bind(var11)(var9, var0);
                var _closure2_slot1 = var14;
                var9 = _closure1_slot1;
                var0 = 9;
                var0 = var3[var0];
                var11 = var9.bind(var4)(var0);
                var0 = null;
                var10 = var0 != var14;
                var9 = '[Forum Post] The thread should not be null here. A store must have missed an update.';
                var9 = var11.bind(var4)(var10, var9);
                var7 = var3[var7];
                var10 = var2.bind(var4)(var7);
                var9 = var10.useStateFromStores;
                var11 = _closure1_slot3;
                var7 = new Array(1);
                var7[0] = var11;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot3;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var0.parent_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var13 = var9.bind(var10)(var7, var1);
                var1 = 10;
                var1 = var3[var1];
                var7 = var2.bind(var4)(var1);
                var1 = var7.useFirstForumPostMessage;
                var1 = var1.bind(var7)(var14);
                var12 = var1.firstMessage;
                var9 = var1.loaded;
                var1 = 11;
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useForumPostFirstMessageMarkup;
                var1 = {};
                var1.firstMessage = var12;
                var10 = false;
                var1.hasUnreads = var10;
                var1 = var2.bind(var3)(var1);
                var11 = var1.content;
                if (!var9) {
                    _fun89540_ip = 359;
                    continue _fun89540
                }
            case 238:
                var3 = _closure1_slot6;
                var2 = _closure1_slot0;
                var15 = _closure1_slot2;
                var1 = 12;
                var1 = var15[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.ForumPostDisabledContainer;
                var1 = {};
                var1.style = var6;
                var7 = _closure1_slot6;
                var6 = _closure1_slot1;
                var5 = 13;
                var5 = var15[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5.thread = var14;
                var5.parentChannel = var13;
                var5.firstMessage = var12;
                var5.messageContent = var11;
                var5.media = var8;
                var8 = true;
                var5.hasUnreads = var8;
                var5.isNew = var10;
                var5.firstMessageLoaded = var9;
                var5.isLocalDeviceMedia = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 359:
                return var0;
        }
    };
    var2.ForumPostListDisabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 3102, 11641, 33, 11642, 11646, 11657, 566, 44, 9803, 8943, 11663, 11664, 8914, 1382, 2]);