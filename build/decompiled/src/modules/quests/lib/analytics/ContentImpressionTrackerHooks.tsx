// modules/quests/lib/analytics/ContentImpressionTrackerHooks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function() {
        _fun47361: for (var _fun47361_ip = 0;;) switch (_fun47361_ip) {
            case 0:
                var3 = _closure1_slot3;
                var2 = var3.useContext;
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var4.bind(var0)(var1);
                var1 = var1.QuestImpressionContext;
                var1 = var2.bind(var3)(var1);
                var2 = null;
                var2 = var2 == var1;
                if (var2) {
                    _fun47361_ip = 60;
                    continue _fun47361
                }
            case 55:
                var0 = var1.current;
            case 60:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var8 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/lib/analytics/ContentImpressionTrackerHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        _fun47362: for (var _fun47362_ip = 0;;) switch (_fun47362_ip) {
            case 0:
                var5 = arg0;
                var _closure2_slot0 = var5;
                var1 = 'questOrQuests';
                var2 = var1 in var5;
                var3 = undefined;
                var6 = undefined;
                if (!var2) {
                    _fun47362_ip = 30;
                    continue _fun47362
                }
            case 24:
                var6 = var5.questOrQuests;
            case 30:
                var2 = 'adContentId';
                var2 = var2 in var5;
                var4 = undefined;
                if (!var2) {
                    _fun47362_ip = 49;
                    continue _fun47362
                }
            case 43:
                var4 = var5.adContentId;
            case 49:
                var2 = function arg0, arg1() {
                    var5 = arg0;
                    var4 = arg1;
                    var _closure3_slot0 = var5;
                    var _closure3_slot1 = var4;
                    var3 = _closure1_slot3;
                    var2 = var3.useMemo;
                    var1 = new Array(2);
                    var1[0] = var5;
                    var1[1] = var4;
                    var0 = function() { // Environment: var0
                        _fun47364: for (var _fun47364_ip = 0;;) switch (_fun47364_ip) {
                            case 0:
                                var0 = _closure3_slot1;
                                var2 = null;
                                if (!(var2 == var0)) {
                                    _fun47364_ip = 93;
                                    continue _fun47364
                                }
                            case 13:
                                var0 = _closure3_slot0;
                                if (!(var2 == var0)) {
                                    _fun47364_ip = 27;
                                    continue _fun47364
                                }
                            case 21:
                                var0 = new Array(0);
                                _fun47364_ip = 91;
                                continue _fun47364;
                            case 27:
                                var2 = global;
                                var4 = var2.Array;
                                var3 = var4.isArray;
                                var2 = _closure3_slot0;
                                var2 = var3.bind(var4)(var2);
                                var5 = _closure3_slot0;
                                if (var2) {
                                    _fun47364_ip = 71;
                                    continue _fun47364
                                }
                            case 56:
                                var3 = var5.id;
                                var2 = new Array(1);
                                var2[0] = var3;
                                _fun47364_ip = 88;
                                continue _fun47364;
                            case 71:
                                var4 = var5.map;
                                var3 = function(arg0) { // Environment: var3
                                    var0 = arg0;
                                    var0 = var0.id;
                                    return var0;
                                };
                                var2 = var4.bind(var5)(var3);
                            case 88:
                                var0 = var2;
                            case 91:
                                _fun47364_ip = 108;
                                continue _fun47364;
                            case 93:
                                var2 = _closure3_slot1;
                                var1 = new Array(1);
                                var1[0] = var2;
                                var0 = var1;
                            case 108:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var6 = var2.bind(var3)(var6, var4);
                var _closure2_slot1 = var6;
                var1 = var1 in var5;
                if (var1) {
                    _fun47362_ip = 79;
                    continue _fun47362
                }
            case 71:
                var4 = var5.adCreativeType;
                _fun47362_ip = 114;
                continue _fun47362;
            case 79:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 2;
                var1 = var7[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.AdCreativeType;
                var4 = var1.QUEST;
            case 114:
                var _closure2_slot2 = var4;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(3);
                var1[0] = var6;
                var5 = var5.questContent;
                var1[1] = var5;
                var1[2] = var4;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var1 = _closure2_slot1;
                    var0.adContentIds = var1;
                    var1 = _closure2_slot0;
                    var1 = var1.questContent;
                    var0.questContent = var1;
                    var7 = var0.adContentIds;
                    var5 = var0.questContent;
                    var1 = new Array(0);
                    var6 = 0;
                    var8 = var1;
                    var0 = arraySpread(var8, var7, var6);
                    var0 = var1.sort;
                    var1 = var0.bind(var1)();
                    var0 = var1.join;
                    var4 = '_';
                    var3 = var0.bind(var1)(var4);
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var1 = var0.concat;
                    var0 = '';
                    var1 = var1.bind(var0)(var3, var4, var5);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 2;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.AdCreativeType;
                    var0 = var0.QUEST;
                    var0 = {};
                    var3 = _closure2_slot1;
                    var0.adContentIds = var3;
                    var2 = _closure2_slot2;
                    var0.adCreativeType = var2;
                    var0.key = var1;
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useAdContentImpressionTrackerProps = var4;
    var4 = function arg0() {
        var0 = arg0;
        var9 = var0.adContentIds;
        var _closure2_slot0 = var9;
        var3 = var0.adCreativeType;
        var _closure2_slot1 = var3;
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 3;
        var5 = var4[var2];
        var2 = undefined;
        var8 = var6.bind(var2)(var5);
        var7 = var8.useStateFromStores;
        var5 = _closure1_slot4;
        var6 = new Array(1);
        var6[0] = var5;
        var5 = new Array(2);
        var5[0] = var9;
        var5[1] = var3;
        var3 = function() { // Environment: var1
            _fun47368: for (var _fun47368_ip = 0;;) switch (_fun47368_ip) {
                case 0:
                    var4 = _closure2_slot1;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 2;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var5.bind(var0)(var3);
                    var0 = var0.AdCreativeType;
                    var3 = var0.QUEST;
                    var0 = null;
                    if (!(var4 === var3)) {
                        _fun47368_ip = 93;
                        continue _fun47368
                    }
                case 50:
                    var3 = _closure2_slot0;
                    var4 = var3.length;
                    var3 = 1;
                    var0 = null;
                    if (!(var3 === var4)) {
                        _fun47368_ip = 93;
                        continue _fun47368
                    }
                case 68:
                    var3 = _closure1_slot4;
                    var2 = var3.getQuest;
                    var4 = _closure2_slot0;
                    var1 = 0;
                    var1 = var4[var1];
                    var0 = var2.bind(var3)(var1);
                case 93:
                    return var0;
            }
        };
        var7 = var7.bind(var8)(var6, var3, var5);
        var _closure2_slot2 = var7;
        var6 = _closure1_slot3;
        var5 = var6.useMemo;
        var3 = new Array(1);
        var3[0] = var7;
        var1 = function() { // Environment: var1
            _fun47369: for (var _fun47369_ip = 0;;) switch (_fun47369_ip) {
                case 0:
                    var2 = _closure2_slot2;
                    var0 = null;
                    var2 = var0 == var2;
                    if (var2) {
                        _fun47369_ip = 56;
                        continue _fun47369
                    }
                case 16:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.getQuestStatus;
                    var1 = _closure2_slot2;
                    var0 = var2.bind(var3)(var1);
                case 56:
                    return var0;
            }
        };
        var1 = var5.bind(var6)(var1, var3);
        var3 = _closure1_slot1;
        var0 = 5;
        var0 = var4[var0];
        var0 = var3.bind(var2)(var0);
        var0 = var0.bind(var2)(var1);
        var0 = var1 !== var0;
        return var0;
    };
    var2.useQuestStatusChanged = var4;
    var2.useQuestImpression = var3;
    var1 = function() {
        _fun47370: for (var _fun47370_ip = 0;;) switch (_fun47370_ip) {
            case 0:
                var1 = _closure1_slot5;
                var0 = undefined;
                var2 = var1.bind(var0)();
                var1 = null;
                var1 = var1 == var2;
                if (var1) {
                    _fun47370_ip = 32;
                    continue _fun47370
                }
            case 22:
                var1 = var2.getId;
                var0 = var1.bind(var2)();
            case 32:
                return var0;
        }
    };
    var2.useQuestImpressionId = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 5226, 5305, 566, 5277, 5306, 5307, 2]);