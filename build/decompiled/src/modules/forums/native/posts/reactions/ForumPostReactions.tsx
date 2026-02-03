// modules/forums/native/posts/reactions/ForumPostReactions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 8;
    var8.marginEnd = var9;
    var3.reactionButtonContainer = var8;
    var8 = {};
    var9 = 4;
    var8.marginEnd = var9;
    var3.actionBarReaction = var8;
    var8 = {};
    var9 = 'row';
    var8.flexDirection = var9;
    var3.container = var8;
    var8 = {};
    var9 = 'auto';
    var8.marginLeft = var9;
    var3.mostCommonContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/posts/reactions/ForumPostReactions.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun77163: for (var _fun77163_ip = 0;;) switch (_fun77163_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.thread;
                var _closure2_slot0 = var10;
                var3 = var0.parentChannel;
                var8 = var0.firstMessage;
                var14 = var0.containerWidth;
                var13 = var0.containerStyle;
                var11 = var0.reactionContainerStyle;
                var _closure2_slot1 = var11;
                var0 = _closure1_slot6;
                var4 = undefined;
                var9 = var0.bind(var4)();
                var _closure2_slot2 = var9;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 4;
                var0 = var2[var0];
                var0 = var1.bind(var4)(var0);
                var0 = var0.bind(var4)(var10);
                var6 = var0.disableReactionCreates;
                var12 = 28;
                if (!var6) {
                    _fun77163_ip = 105;
                    continue _fun77163
                }
            case 103:
                var12 = 0;
            case 105:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var2[var0];
                var2 = var1.bind(var4)(var0);
                var1 = var2.useMaxPossibleForumPostReactions;
                var0 = {
                    'containerWidth': null,
                    'reactionEmojiWidth': 46,
                    'digitWidth': 7.5
                };
                var12 = var14 - var12;
                var0.containerWidth = var12;
                var0.message = var8;
                var0.parentChannel = var3;
                var0 = var1.bind(var2)(var0);
                var12 = var0.reactions;
                var14 = var0.additionalReactionCount;
                var0 = var12.length;
                var8 = 0;
                if (!(var8 === var0)) {
                    _fun77163_ip = 200;
                    continue _fun77163
                }
            case 192:
                var0 = null;
                if (var6) {
                    _fun77163_ip = 398;
                    continue _fun77163
                }
            case 200:
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var15 = var9.container;
                var9 = new Array(2);
                var9[0] = var15;
                var9[1] = var13;
                var1.style = var9;
                var9 = var12.map;
                var5 = function(arg0) { // Environment: var5
                    _fun77164: for (var _fun77164_ip = 0;;) switch (_fun77164_ip) {
                        case 0:
                            var5 = arg0;
                            var4 = _closure1_slot4;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 6;
                            var0 = var2[var0];
                            var3 = undefined;
                            var0 = var1.bind(var3)(var0);
                            var2 = var0.ForumPostReactionButton;
                            var1 = {};
                            var6 = _closure2_slot2;
                            var7 = var6.reactionButtonContainer;
                            var6 = new Array(2);
                            var6[0] = var7;
                            var7 = _closure2_slot1;
                            var6[1] = var7;
                            var1.containerStyle = var6;
                            var0 = _closure2_slot0;
                            var1.thread = var0;
                            var1.reaction = var5;
                            var0 = false;
                            var1.animateCount = var0;
                            var0 = var5.emoji;
                            var0 = var0.id;
                            var6 = null;
                            if (!(var6 == var0)) {
                                _fun77164_ip = 123;
                                continue _fun77164
                            }
                        case 112:
                            var5 = var5.emoji;
                            var0 = var5.name;
                        case 123:
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var9 = var9.bind(var12)(var5);
                var5 = new Array(3);
                var5[0] = var9;
                var8 = var14 > var8;
                if (!var8) {
                    _fun77163_ip = 321;
                    continue _fun77163
                }
            case 263:
                var13 = _closure1_slot4;
                var12 = _closure1_slot0;
                var15 = _closure1_slot2;
                var9 = 6;
                var9 = var15[var9];
                var9 = var12.bind(var4)(var9);
                var12 = var9.AdditionalReactionCount;
                var9 = {};
                var9.count = var14;
                var9.containerStyle = var11;
                var14 = var10.id;
                var9.threadId = var14;
                var8 = var13.bind(var4)(var12, var9);
            case 321:
                var5[1] = var8;
                var6 = !var6;
                if (!var6) {
                    _fun77163_ip = 384;
                    continue _fun77163
                }
            case 331:
                var9 = _closure1_slot4;
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 6;
                var7 = var12[var7];
                var7 = var8.bind(var4)(var7);
                var8 = var7.AddReactionButton;
                var7 = {};
                var7.containerStyle = var11;
                var10 = var10.id;
                var7.threadId = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 384:
                var5[2] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 398:
                return var0;
        }
    };
    var2.MaxForumPostReactions = var3;
    var3 = function arg0() {
        _fun77165: for (var _fun77165_ip = 0;;) switch (_fun77165_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.thread;
                var _closure2_slot0 = var10;
                var3 = var0.parentChannel;
                var8 = var0.firstMessage;
                var14 = var0.containerStyle;
                var12 = var0.reactionContainerStyle;
                var _closure2_slot1 = var12;
                var0 = _closure1_slot6;
                var4 = undefined;
                var11 = var0.bind(var4)();
                var _closure2_slot2 = var11;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 4;
                var0 = var2[var0];
                var0 = var1.bind(var4)(var0);
                var0 = var0.bind(var4)(var10);
                var6 = var0.disableReactionCreates;
                var1 = _closure1_slot0;
                var0 = 5;
                var0 = var2[var0];
                var2 = var1.bind(var4)(var0);
                var1 = var2.useSomeForumPostReactions;
                var0 = {};
                var0.message = var8;
                var0.parentChannel = var3;
                var3 = false;
                var0.sorted = var3;
                var3 = 2;
                if (!var6) {
                    _fun77165_ip = 140;
                    continue _fun77165
                }
            case 137:
                var3 = 3;
            case 140:
                var0.count = var3;
                var0 = var1.bind(var2)(var0);
                var13 = var0.reactions;
                var15 = var0.additionalNonUniqueReactionCount;
                var0 = var13.length;
                var8 = 0;
                if (!(var8 === var0)) {
                    _fun77165_ip = 181;
                    continue _fun77165
                }
            case 173:
                var0 = null;
                if (var6) {
                    _fun77165_ip = 415;
                    continue _fun77165
                }
            case 181:
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var16 = var11.container;
                var9 = new Array(2);
                var9[0] = var16;
                var9[1] = var14;
                var1.style = var9;
                var9 = var13.map;
                var5 = function(arg0) { // Environment: var5
                    _fun77166: for (var _fun77166_ip = 0;;) switch (_fun77166_ip) {
                        case 0:
                            var5 = arg0;
                            var4 = _closure1_slot4;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 6;
                            var0 = var2[var0];
                            var3 = undefined;
                            var0 = var1.bind(var3)(var0);
                            var2 = var0.ForumPostReactionButton;
                            var1 = {};
                            var6 = _closure2_slot2;
                            var7 = var6.actionBarReaction;
                            var6 = new Array(2);
                            var6[0] = var7;
                            var7 = _closure2_slot1;
                            var6[1] = var7;
                            var1.containerStyle = var6;
                            var0 = _closure2_slot0;
                            var1.thread = var0;
                            var1.reaction = var5;
                            var0 = false;
                            var1.animateCount = var0;
                            var0 = var5.emoji;
                            var0 = var0.id;
                            var6 = null;
                            if (!(var6 == var0)) {
                                _fun77166_ip = 123;
                                continue _fun77166
                            }
                        case 112:
                            var5 = var5.emoji;
                            var0 = var5.name;
                        case 123:
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var9 = var9.bind(var13)(var5);
                var5 = new Array(3);
                var5[0] = var9;
                var8 = var15 > var8;
                if (!var8) {
                    _fun77165_ip = 320;
                    continue _fun77165
                }
            case 244:
                var14 = _closure1_slot4;
                var13 = _closure1_slot0;
                var16 = _closure1_slot2;
                var9 = 6;
                var9 = var16[var9];
                var9 = var13.bind(var4)(var9);
                var13 = var9.AdditionalReactionCount;
                var9 = {};
                var9.count = var15;
                var16 = var11.actionBarReaction;
                var15 = new Array(2);
                var15[0] = var16;
                var15[1] = var12;
                var9.containerStyle = var15;
                var15 = var10.id;
                var9.threadId = var15;
                var8 = var14.bind(var4)(var13, var9);
            case 320:
                var5[1] = var8;
                var6 = !var6;
                if (!var6) {
                    _fun77165_ip = 401;
                    continue _fun77165
                }
            case 330:
                var9 = _closure1_slot4;
                var8 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 6;
                var7 = var13[var7];
                var7 = var8.bind(var4)(var7);
                var8 = var7.AddReactionButton;
                var7 = {};
                var13 = var11.actionBarReaction;
                var11 = new Array(2);
                var11[0] = var13;
                var11[1] = var12;
                var7.containerStyle = var11;
                var10 = var10.id;
                var7.threadId = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 401:
                var5[2] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 415:
                return var0;
        }
    };
    var2.ForumPostActionBarReactions = var3;
    var1 = function arg0() {
        _fun77167: for (var _fun77167_ip = 0;;) switch (_fun77167_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.thread;
                var11 = var0.parentChannel;
                var10 = var0.firstMessage;
                var6 = var0.locationAnalyticsObject;
                var0 = _closure1_slot6;
                var5 = undefined;
                var9 = var0.bind(var5)();
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 4;
                var0 = var7[var0];
                var0 = var1.bind(var5)(var0);
                var0 = var0.bind(var5)(var8);
                var1 = var0.disableReactionCreates;
                var3 = var0.disableReactionUpdates;
                var4 = _closure1_slot0;
                var0 = 5;
                var0 = var7[var0];
                var7 = var4.bind(var5)(var0);
                var4 = var7.useSomeForumPostReactions;
                var0 = {};
                var0.parentChannel = var11;
                var0.message = var10;
                var0 = var4.bind(var7)(var0);
                var4 = var0.reactions;
                var0 = 0;
                var7 = var4[var0];
                var0 = null;
                if (!(var0 != var7)) {
                    _fun77167_ip = 232;
                    continue _fun77167
                }
            case 133:
                if (var3) {
                    _fun77167_ip = 232;
                    continue _fun77167
                }
            case 136:
                var3 = var7.me;
                if (var3) {
                    _fun77167_ip = 151;
                    continue _fun77167
                }
            case 145:
                var3 = var7.me_burst;
            case 151:
                if (!var1) {
                    _fun77167_ip = 159;
                    continue _fun77167
                }
            case 154:
                var1 = null;
                if (!var3) {
                    _fun77167_ip = 230;
                    continue _fun77167
                }
            case 159:
                var4 = _closure1_slot4;
                var3 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 6;
                var2 = var10[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.ForumPostReactionButton;
                var2 = {};
                var9 = var9.mostCommonContainer;
                var2.containerStyle = var9;
                var2.thread = var8;
                var2.reaction = var7;
                var2.locationAnalyticsObject = var6;
                var6 = false;
                var2.animateCount = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 230:
                return var1;
            case 232:
                return var0;
        }
    };
    var2.MostCommonForumPostReaction = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 9224, 8916, 9766, 2]);