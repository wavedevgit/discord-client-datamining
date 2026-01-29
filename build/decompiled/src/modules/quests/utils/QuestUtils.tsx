// modules/quests/utils/QuestUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun46834: for (var _fun46834_ip = 0;;) switch (_fun46834_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun46834_ip = 45;
                    continue _fun46834
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun46834_ip = 54;
                    continue _fun46834
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun46834_ip = 342;
                    continue _fun46834
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun46834_ip = 322;
                    continue _fun46834
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun46834_ip = 282;
                    continue _fun46834
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun46834_ip = 269;
                    continue _fun46834
                }
            case 109:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun46834_ip = 162;
                    continue _fun46834
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun46834_ip = 178;
                    continue _fun46834
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun46834_ip = 248;
                    continue _fun46834
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun46834_ip = 248;
                    continue _fun46834
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun46834_ip = 233;
                    continue _fun46834
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun46834_ip = 246;
                    continue _fun46834
                }
            case 233:
                var8 = _closure1_slot10;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun46834_ip = 264;
                continue _fun46834;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun46834_ip = 282;
                continue _fun46834;
            case 269:
                var6 = _closure1_slot10;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun46834_ip = 322;
                    continue _fun46834
                }
            case 288:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 322:
                if (!var3) {
                    _fun46834_ip = 329;
                    continue _fun46834
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun46835: for (var _fun46835_ip = 0;;) switch (_fun46835_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun46835_ip = 56;
                                continue _fun46835
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun46835_ip = 67;
                            continue _fun46835;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 342:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun46836: for (var _fun46836_ip = 0;;) switch (_fun46836_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun46836_ip = 23;
                    continue _fun46836
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun46836_ip = 33;
                    continue _fun46836
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun46836_ip = 70;
                    continue _fun46836
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun46836_ip = 55;
                    continue _fun46836
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var4 = function(arg0) { // Original name: isSponsoredPlayQuest, environment: var1
        _fun46837: for (var _fun46837_ip = 0;;) switch (_fun46837_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun46837_ip = 66;
                    continue _fun46837
                }
            case 9:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.getDesktopApplicationIds;
                var1 = var1.bind(var2)(var3);
                var0 = var0 != var1;
                if (!var0) {
                    _fun46837_ip = 64;
                    continue _fun46837
                }
            case 52:
                var2 = var1.length;
                var1 = 1;
                var0 = var2 > var1;
            case 64:
                return var0;
            case 66:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot11 = var4;
    var3 = function(arg0, arg1) { // Original name: hasVariant, environment: var1
        var0 = global;
        var2 = var0.Set;
        var0 = arg0;
        var0 = var0.config;
        var3 = var0.features;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var2 = var0 instanceof Object ? var0 : var1;
        var1 = var2.has;
        var0 = arg1;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot12 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.DISCORD_APPLICATION_ID;
    var _closure1_slot7 = var8;
    var5 = var5.QuestVariants;
    var _closure1_slot8 = var5;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/utils/QuestUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.isSponsoredPlayQuest = var4;
    var4 = function(arg0) { // Original name: isPlayAnyActivityQuest, environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getPlayActivityApplicationId;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        var0 = _closure1_slot7;
        var0 = var1 === var0;
        return var0;
    };
    var2.isPlayAnyActivityQuest = var4;
    var2.hasVariant = var3;
    var3 = function(arg0) { // Original name: canLaunchActivity, environment: var1
        _fun46840: for (var _fun46840_ip = 0;;) switch (_fun46840_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 6;
                var0 = var0[var6];
                var5 = undefined;
                var3 = var3.bind(var5)(var0);
                var0 = var3.isInGameQuest;
                var0 = var0.bind(var3)(var2);
                if (var0) {
                    _fun46840_ip = 70;
                    continue _fun46840
                }
            case 42:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var4 = var4.bind(var5)(var3);
                var3 = var4.hasPlayActivityTask;
                var0 = var3.bind(var4)(var2);
            case 70:
                if (!var0) {
                    _fun46840_ip = 104;
                    continue _fun46840
                }
            case 73:
                var2 = var2.config;
                var3 = var2.features;
                var2 = var3.includes;
                var1 = _closure1_slot8;
                var1 = var1.START_QUEST_CTA;
                var0 = var2.bind(var3)(var1);
            case 104:
                return var0;
        }
    };
    var2.canLaunchActivity = var3;
    var3 = function(arg0, arg1) { // Original name: filterQuestsForSocialEntrypoints, environment: var1
        _fun46841: for (var _fun46841_ip = 0;;) switch (_fun46841_ip) {
            case 0:
                var12 = arg1;
                var0 = global;
                var0 = var0.Map;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var23 = var1;
                var0 = new var23[var0](var22);
                var0 = var0 instanceof Object ? var0 : var1;
                var2 = _closure1_slot9;
                var10 = undefined;
                var1 = arg0;
                var9 = var2.bind(var10)(var1);
                var2 = var9.bind(var10)();
                var1 = var2.done;
                var8 = 6;
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = var2;
                var3 = undefined;
                var2 = undefined;
                if (var1) {
                    _fun46841_ip = 297;
                    continue _fun46841
                }
            case 81:
                var13 = var4.value;
                var1 = _closure1_slot2;
                var1 = var1.bind(var10)(var13, var7);
                var18 = var1[var6];
                var17 = var1[var5];
                var1 = _closure1_slot11;
                var1 = var1.bind(var10)(var17);
                var14 = var3;
                var13 = var2;
                if (var1) {
                    _fun46841_ip = 273;
                    continue _fun46841
                }
            case 125:
                var15 = _closure1_slot12;
                var1 = _closure1_slot8;
                var1 = var1.NON_GAMING_PLAY_QUEST;
                var1 = var15.bind(var10)(var17, var1);
                var14 = var3;
                var13 = var2;
                if (var1) {
                    _fun46841_ip = 273;
                    continue _fun46841
                }
            case 154:
                var15 = _closure1_slot9;
                var16 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var8];
                var16 = var16.bind(var10)(var1);
                var1 = var16.getQuestTaskTypes;
                var1 = var1.bind(var16)(var17);
                var1 = var15.bind(var10)(var1);
                var16 = var1.bind(var10)();
                var15 = var16.done;
                var19 = var16;
                var14 = var19;
                var13 = var1;
                if (var15) {
                    _fun46841_ip = 273;
                    continue _fun46841
                }
            case 212:
                var16 = var19.value;
                var15 = var12.has;
                var16 = var15.bind(var12)(var16);
                var15 = var19;
                if (var16) {
                    _fun46841_ip = 256;
                    continue _fun46841
                }
            case 233:
                var20 = var1.bind(var10)();
                var16 = var20.done;
                var19 = var20;
                var14 = var19;
                var13 = var1;
                if (var16) {
                    _fun46841_ip = 273;
                    continue _fun46841
                }
            case 254:
                _fun46841_ip = 212;
                continue _fun46841;
            case 256:
                var16 = var0.set;
                var16 = var16.bind(var0)(var18, var17);
                var14 = var15;
                var13 = var1;
            case 273:
                var15 = var9.bind(var10)();
                var1 = var15.done;
                var3 = var14;
                var2 = var13;
                var4 = var15;
                if (!var1) {
                    _fun46841_ip = 81;
                    continue _fun46841
                }
            case 297:
                return var0;
        }
    };
    var2.filterQuestsForSocialEntrypoints = var3;
    var3 = function(arg0) { // Original name: isShareableQuest, environment: var1
        var0 = arg0;
        var1 = var0.sharePolicy;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 7;
        var2 = var2[var0];
        var0 = undefined;
        var0 = var3.bind(var0)(var2);
        var0 = var0.QuestSharePolicy;
        var0 = var0.NOT_SHAREABLE;
        var0 = var1 !== var0;
        return var0;
    };
    var2.isShareableQuest = var3;
    var3 = function(arg0, arg1) { // Original name: isStreamingAndCanWatch, environment: var1
        _fun46843: for (var _fun46843_ip = 0;;) switch (_fun46843_ip) {
            case 0:
                var7 = arg1;
                var1 = null;
                var0 = arg0;
                var0 = var1 != var0;
                if (!var0) {
                    _fun46843_ip = 19;
                    continue _fun46843
                }
            case 15:
                var0 = var1 != var7;
            case 19:
                if (!var0) {
                    _fun46843_ip = 85;
                    continue _fun46843
                }
            case 22:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 8;
                var3 = var3[var2];
                var2 = undefined;
                var6 = var4.bind(var2)(var3);
                var5 = var6.canWatchStream;
                var11 = _closure1_slot6;
                var10 = _closure1_slot4;
                var9 = _closure1_slot5;
                var8 = _closure1_slot3;
                var13 = var6;
                var12 = var7;
                var2 = var13[var5](var12, var11, var10, var9, var8, var7);
                var1 = 0;
                var0 = var2[var1];
            case 85:
                return var0;
        }
    };
    var2.isStreamingAndCanWatch = var3;
    var3 = function(arg0) { // Original name: getQuestType, environment: var1
        _fun46844: for (var _fun46844_ip = 0;;) switch (_fun46844_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 6;
                var0 = var3[var0];
                var3 = undefined;
                var4 = var2.bind(var3)(var0);
                var2 = var4.hasWatchVideoTasks;
                var0 = {};
                var5 = arg0;
                var0.config = var5;
                var0 = var2.bind(var4)(var0);
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 9;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.QuestType;
                if (var0) {
                    _fun46844_ip = 82;
                    continue _fun46844
                }
            case 74:
                var0 = var1.GAMEPLAY;
                _fun46844_ip = 88;
                continue _fun46844;
            case 82:
                var0 = var1.VIDEO;
            case 88:
                return var0;
        }
    };
    var2.getQuestType = var3;
    var1 = function(arg0, arg1) { // Original name: isQuestFeaturedByTakeover, environment: var1
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg0;
        var2 = var1.ctaQuests;
        var1 = var2.some;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.questId;
            var0 = _closure2_slot0;
            var0 = var1 === var0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isQuestFeaturedByTakeover = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 3478, 1410, 3050, 3480, 5184, 5222, 5223, 5224, 5225, 2]);