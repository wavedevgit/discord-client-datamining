// modules/quests/native/QuestDock/QuestDockStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun46689: for (var _fun46689_ip = 0;;) switch (_fun46689_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun46689_ip = 74;
                continue _fun46689;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.QuestDockMode;
    var _closure1_slot9 = var1;
    var1 = var1.COLLAPSED;
    var _closure1_slot2 = var1;
    var1 = null;
    var _closure1_slot3 = var1;
    var1 = false;
    var _closure1_slot10 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: QuestDockStore, environment: var5
            _fun46693: for (var _fun46693_ip = 0;;) switch (_fun46693_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot6;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun46693_ip = 69;
                        continue _fun46693
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun46693_ip = 105;
                    continue _fun46693;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun46694: for (var _fun46694_ip = 0;;) switch (_fun46694_ip) {
                case 0:
                    var0 = arg0;
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun46694_ip = 84;
                        continue _fun46694
                    }
                case 9:
                    var0 = var0.questDockSoftDismissedAt;
                    _closure1_slot3 = var0;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 6;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.isSoftDismissed;
                    var0 = _closure1_slot3;
                    var0 = var2.bind(var3)(var0);
                    var2 = _closure1_slot9;
                    if (var0) {
                        _fun46694_ip = 74;
                        continue _fun46694
                    }
                case 66:
                    var0 = var2.COLLAPSED;
                    _fun46694_ip = 80;
                    continue _fun46694;
                case 74:
                    var0 = var2.SOFT_DISMISSED;
                case 80:
                    _closure1_slot2 = var0;
                case 84:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = {};
            var2 = _closure1_slot2;
            var0.prevRestingQuestDockMode = var2;
            var1 = _closure1_slot3;
            var0.questDockSoftDismissedAt = var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'prevRestingQuestDockMode';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot2;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'questDockSoftDismissedAt';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot3;
            return var0;
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isVisible';
        var4.key = var6;
        var5 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot10;
            return var0;
        };
        var4.get = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'QuestDockStore';
    var7.displayName = var1;
    var7.persistKey = var1;
    var1 = 8;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function(arg0) { // Original name: handlePrevRestingQuestDockModeUpdate, environment: var3
        _fun46699: for (var _fun46699_ip = 0;;) switch (_fun46699_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.mode;
                var0 = _closure1_slot2;
                var0 = var3 !== var0;
                var3 = var1.mode;
                _closure1_slot2 = var3;
                if (!var0) {
                    _fun46699_ip = 73;
                    continue _fun46699
                }
            case 31:
                var4 = var1.mode;
                var1 = _closure1_slot9;
                var3 = var1.SOFT_DISMISSED;
                var1 = null;
                if (!(var4 === var3)) {
                    _fun46699_ip = 69;
                    continue _fun46699
                }
            case 52:
                var3 = global;
                var4 = var3.Date;
                var3 = var4.now;
                var1 = var3.bind(var4)();
            case 69:
                _closure1_slot3 = var1;
            case 73:
                return var0;
        }
    };
    var1.QUESTS_PREV_RESTING_QUEST_DOCK_MODE_UPDATE = var8;
    var8 = function() { // Original name: handleResetSoftDismissal, environment: var3
        var0 = _closure1_slot9;
        var0 = var0.COLLAPSED;
        _closure1_slot2 = var0;
        var0 = null;
        _closure1_slot3 = var0;
        var0 = undefined;
        return var0;
    };
    var1.QUESTS_DOCK_RESET_SOFT_DISMISSAL = var8;
    var3 = function(arg0) { // Original name: handleQuestDockVisibilityOverrideUpdate, environment: var3
        var0 = arg0;
        var1 = var0.isVisible;
        _closure1_slot10 = var1;
        var0 = undefined;
        return var0;
    };
    var1.QUESTS_DOCK_OVERRIDE_VISIBILITY_UPDATE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestDock/QuestDockStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 5191, 5215, 566, 806, 2]);