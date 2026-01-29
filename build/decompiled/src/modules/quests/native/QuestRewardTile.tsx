// modules/quests/native/QuestRewardTile.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useMemo;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AppState;
    var _closure1_slot6 = var7;
    var7 = var3.View;
    var _closure1_slot7 = var7;
    var3 = var3.StyleSheet;
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function() { // Environment: var1
        var0 = {};
        var1 = {
            'borderRadius': null,
            'display': 'flex',
            'justifyContent': 'center',
            'alignItems': 'center',
            'overflow': 'hidden'
        };
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var3 = 6;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.radii;
        var3 = var3.sm;
        var1.borderRadius = var3;
        var3 = 'center';
        var0.container = var1;
        var1 = {
            'overflow': 'hidden',
            'height': '100%',
            'width': '100%'
        };
        var0.video = var1;
        var1 = {
            'height': '100%',
            'width': '100%'
        };
        var0.image = var1;
        var1 = {};
        var2 = _closure1_slot8;
        var6 = var2.absoluteFillObject;
        var7 = var1;
        var2 = copyDataProperties(var7, var6);
        var2 = 'justifyContent';
        var1[var2] = var3;
        var2 = 'alignItems';
        var1[var2] = var3;
        var0.loader = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestRewardTile.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: QuestRewardTile, environment: var1
        _fun78298: for (var _fun78298_ip = 0;;) switch (_fun78298_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.quest;
                var _closure2_slot0 = var1;
                var16 = var2.height;
                var _closure2_slot1 = var16;
                var15 = var2.width;
                var _closure2_slot2 = var15;
                var7 = var2.style;
                var11 = var2.paused;
                var3 = undefined;
                if (!(var11 === var3)) {
                    _fun78298_ip = 52;
                    continue _fun78298
                }
            case 50:
                var11 = false;
            case 52:
                var4 = var2.withAnimation;
                if (!(var4 === var3)) {
                    _fun78298_ip = 95;
                    continue _fun78298
                }
            case 62:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 7;
                var2 = var6[var2];
                var5 = var5.bind(var3)(var2);
                var2 = var5.isIOS;
                var4 = var2.bind(var5)();
            case 95:
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 8;
                var2 = var8[var2];
                var9 = var6.bind(var3)(var2);
                var8 = var9.useStateFromStores;
                var2 = _closure1_slot9;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var0
                    var0 = _closure1_slot9;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var10 = var8.bind(var9)(var6, var2);
                var8 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var1;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getQuestPrimaryReward;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var8.bind(var3)(var2, var6);
                var8 = var2.name;
                var6 = null;
                if (!(var6 == var8)) {
                    _fun78298_ip = 205;
                    continue _fun78298
                }
            case 192:
                var6 = var2.messages;
                var6 = var6.name;
                _fun78298_ip = 210;
                continue _fun78298;
            case 205:
                var6 = var2.name;
            case 210:
                var8 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 10;
                    var2 = var6[var0];
                    var5 = undefined;
                    var4 = var1.bind(var5)(var2);
                    var3 = var4.getQuestAsset;
                    var2 = _closure2_slot0;
                    var0 = var6[var0];
                    var0 = var1.bind(var5)(var0);
                    var0 = var0.QuestAssetType;
                    var9 = var0.REWARD;
                    var7 = true;
                    var11 = var4;
                    var10 = var2;
                    var8 = undefined;
                    var0 = var11[var3](var10, var9, var8, var7, var6);
                    return var0;
                };
                var13 = var8.bind(var3)(var1, var2);
                _closure2_slot3 = var13;
                var1 = _closure1_slot11;
                var8 = var1.bind(var3)();
                var12 = _closure1_slot4;
                var2 = var12.useState;
                var1 = _closure1_slot6;
                var9 = var1.currentState;
                var1 = 'active';
                var1 = var1 === var9;
                var9 = var2.bind(var12)(var1);
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var3)(var9, var1);
                var1 = 0;
                var9 = var2[var1];
                var1 = 1;
                var1 = var2[var1];
                _closure2_slot4 = var1;
                var14 = var12.useEffect;
                var1 = var13.isAnimated;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    _fun78302: for (var _fun78302_ip = 0;;) switch (_fun78302_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var1 = var1.isAnimated;
                            if (var1) {
                                _fun78302_ip = 22;
                                continue _fun78302
                            }
                        case 18:
                            var1 = undefined;
                            return var1;
                        case 22:
                            var4 = _closure1_slot6;
                            var3 = var4.addEventListener;
                            var2 = 'change';
                            var1 = function(arg0) { // Environment: var0
                                var2 = _closure2_slot4;
                                var0 = undefined;
                                var3 = 'active';
                                var1 = arg0;
                                var1 = var3 === var1;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = var3.bind(var4)(var2, var1);
                            var _closure3_slot0 = var1;
                            var0 = function() { // Environment: var0
                                var1 = _closure3_slot0;
                                var0 = var1.remove;
                                var0 = var0.bind(var1)();
                                var0 = undefined;
                                return var0;
                            };
                            return var0;
                    }
                };
                var1 = var14.bind(var12)(var1, var2);
                var2 = var12.useMemo;
                var1 = new Array(3);
                var1[0] = var13;
                var1[1] = var15;
                var1[2] = var16;
                var0 = function() { // Environment: var0
                    var2 = global;
                    var5 = var2.Math;
                    var4 = var5.ceil;
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 11;
                    var0 = var6[var0];
                    var3 = undefined;
                    var0 = var7.bind(var3)(var0);
                    var0 = var0.bind(var3)();
                    var5 = var4.bind(var5)(var0);
                    var8 = var2.Math;
                    var7 = var8.ceil;
                    var4 = _closure2_slot2;
                    var4 = var7.bind(var8)(var4);
                    var4 = var4 * var5;
                    var8 = var2.Math;
                    var7 = var8.ceil;
                    var2 = _closure2_slot1;
                    var2 = var7.bind(var8)(var2);
                    var5 = var2 * var5;
                    var2 = _closure1_slot0;
                    var1 = 10;
                    var1 = var6[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.getAssetUrlWithMediaProxyQueryParams;
                    var0 = _closure2_slot3;
                    var1 = var0.url;
                    var0 = {};
                    var0.height = var5;
                    var0.width = var4;
                    var4 = 'webp';
                    var0.format = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var12 = var2.bind(var12)(var0, var1);
                var2 = _closure1_slot10;
                var1 = _closure1_slot7;
                var0 = {};
                var0.accessibilityLabel = var6;
                var14 = var8.container;
                var6 = new Array(3);
                var6[0] = var14;
                var14 = {};
                var14.height = var16;
                var14.width = var15;
                var6[1] = var14;
                var6[2] = var7;
                var0.style = var6;
                var6 = var13.isAnimated;
                if (!var6) {
                    _fun78298_ip = 436;
                    continue _fun78298
                }
            case 433:
                if (var4) {
                    _fun78298_ip = 490;
                    continue _fun78298
                }
            case 436:
                var7 = _closure1_slot10;
                var6 = _closure1_slot1;
                var14 = _closure1_slot2;
                var4 = 13;
                var4 = var14[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var14 = {};
                var14.uri = var12;
                var4.source = var14;
                var14 = var8.image;
                var4.style = var14;
                var4 = var7.bind(var3)(var6, var4);
                _fun78298_ip = 611;
                continue _fun78298;
            case 490:
                var7 = _closure1_slot10;
                var6 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = 12;
                var5 = var14[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.VideoComponent;
                var5 = {
                    'style': null,
                    'source': null,
                    'disableFocus': true,
                    'preventsDisplaySleepDuringVideoPlayback': false,
                    'importantForAccessibility': 'no-hide-descendants',
                    'poster': null,
                    'resizeMode': 'cover'
                };
                var8 = var8.video;
                var5.style = var8;
                var8 = {};
                var13 = var13.url;
                var8.uri = var13;
                var5.source = var8;
                var8 = true;
                var5.poster = var12;
                var9 = !var9;
                if (var9) {
                    _fun78298_ip = 580;
                    continue _fun78298
                }
            case 577:
                var9 = var11;
            case 580:
                if (var9) {
                    _fun78298_ip = 586;
                    continue _fun78298
                }
            case 583:
                var9 = var10;
            case 586:
                var5.paused = var9;
                var9 = 'mix';
                var5.mixWithOthers = var9;
                var5.muted = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 611:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 33, 1297, 671, 478, 566, 5242, 5241, 1586, 8796, 4660, 2]);