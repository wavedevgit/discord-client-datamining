// modules/autocompleter/record/InAppNavigationRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var0 = function() {
        _fun49454: for (var _fun49454_ip = 0;;) switch (_fun49454_ip) {
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
                _fun49454_ip = 74;
                continue _fun49454;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 5;
    var1 = var6[var1];
    var4 = var4.bind(var0)(var1);
    var1 = 6;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.Routes;
    var _closure1_slot5 = var1;
    var1 = 7;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.RewardFilterTypes;
    var _closure1_slot6 = var1;
    var1 = {};
    var7 = 'SHOP';
    var1.SHOP = var7;
    var7 = 'SHOP_ORBS_TAB';
    var1.SHOP_ORBS_TAB = var7;
    var7 = 'NITRO_HOME';
    var1.NITRO_HOME = var7;
    var7 = 'QUEST_HOME';
    var1.QUEST_HOME = var7;
    var7 = 'QUEST_ORBS';
    var1.QUEST_ORBS = var7;
    var7 = 'APPS_HOME';
    var1.APPS_HOME = var7;
    var7 = 'SETTINGS';
    var1.SETTINGS = var7;
    var7 = 'PLAYGROUND';
    var1.PLAYGROUND = var7;
    var _closure1_slot7 = var1;
    var3 = function(arg0) { // Environment: var3
        var4 = function arg0() {
            _fun49458: for (var _fun49458_ip = 0;;) switch (_fun49458_ip) {
                case 0:
                    var1 = arg0;
                    var4 = this;
                    var0 = _closure1_slot0;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = _closure1_slot3;
                    var9 = var0.bind(var3)(var2);
                    var2 = _closure1_slot2;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun49458_ip = 65;
                        continue _fun49458
                    }
                case 52:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var3);
                    _fun49458_ip = 103;
                    continue _fun49458;
                case 65:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var3)(var4);
                    var6 = var5.constructor;
                    var5 = new Array(0);
                    var0 = var7.bind(var8)(var9, var5, var6);
                case 103:
                    var0 = var2.bind(var3)(var4, var0);
                    var3 = var1.collectionId;
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun49458_ip = 128;
                        continue _fun49458
                    }
                case 121:
                    var2 = var1.type;
                    _fun49458_ip = 167;
                    continue _fun49458;
                case 128:
                    var7 = var1.type;
                    var6 = var1.collectionId;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var5 = var3.concat;
                    var4 = '';
                    var3 = '_';
                    var2 = var5.bind(var4)(var7, var3, var6);
                case 167:
                    var0.id = var2;
                    var2 = var1.path;
                    var0.path = var2;
                    var2 = var1.type;
                    var0.type = var2;
                    var2 = var1.label;
                    var0.label = var2;
                    var2 = var1.collectionId;
                    var0.collectionId = var2;
                    var1 = var1.IconComponent;
                    var0.IconComponent = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var0 = {};
        var5 = 'fromType';
        var0.key = var5;
        var1 = function arg0, arg1, arg2, arg3, arg4() {
            _fun49459: for (var _fun49459_ip = 0;;) switch (_fun49459_ip) {
                case 0:
                    var3 = arg0;
                    var4 = arg1;
                    var2 = arg2;
                    var0 = _closure1_slot7;
                    var0 = var0.SHOP;
                    if (!(var0 !== var3)) {
                        _fun49459_ip = 709;
                        continue _fun49459
                    }
                case 29:
                    var0 = _closure1_slot7;
                    var0 = var0.NITRO_HOME;
                    if (!(var0 !== var3)) {
                        _fun49459_ip = 646;
                        continue _fun49459
                    }
                case 46:
                    var0 = _closure1_slot7;
                    var0 = var0.QUEST_HOME;
                    if (!(var0 !== var3)) {
                        _fun49459_ip = 583;
                        continue _fun49459
                    }
                case 63:
                    var0 = _closure1_slot7;
                    var0 = var0.APPS_HOME;
                    if (!(var0 !== var3)) {
                        _fun49459_ip = 520;
                        continue _fun49459
                    }
                case 80:
                    var0 = _closure1_slot7;
                    var0 = var0.SETTINGS;
                    if (!(var0 !== var3)) {
                        _fun49459_ip = 438;
                        continue _fun49459
                    }
                case 97:
                    var0 = _closure1_slot7;
                    var0 = var0.PLAYGROUND;
                    if (!(var0 !== var3)) {
                        _fun49459_ip = 347;
                        continue _fun49459
                    }
                case 114:
                    var0 = _closure1_slot7;
                    var0 = var0.SHOP_ORBS_TAB;
                    if (!(var0 !== var3)) {
                        _fun49459_ip = 284;
                        continue _fun49459
                    }
                case 131:
                    var0 = _closure1_slot7;
                    var0 = var0.QUEST_ORBS;
                    if (!(var0 !== var3)) {
                        _fun49459_ip = 181;
                        continue _fun49459
                    }
                case 145:
                    var0 = global;
                    var5 = var0.Error;
                    var0 = var5.prototype;
                    var3 = Object.create(var0, {
                        constructor: {
                            value: var5
                        }
                    });
                    var12 = 'Unhandled InAppNavigationType';
                    var13 = var3;
                    var0 = new var13[var5](var12, var11);
                    var0 = var0 instanceof Object ? var0 : var3;
                    throw var0;
                case 181:
                    var5 = _closure2_slot0;
                    var0 = {};
                    var3 = _closure1_slot5;
                    var9 = var3.QUEST_HOME_V2;
                    var3 = _closure1_slot6;
                    var8 = var3.VIRTUAL_CURRENCY;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var7 = var3.concat;
                    var6 = '';
                    var3 = '?filter=';
                    var3 = var7.bind(var6)(var9, var3, var8);
                    var0.path = var3;
                    var3 = _closure1_slot7;
                    var3 = var3.QUEST_ORBS;
                    var0.type = var3;
                    var3 = var5.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var5
                        }
                    });
                    var13 = var3;
                    var12 = var0;
                    var0 = new var13[var5](var12, var11);
                    var0 = var0 instanceof Object ? var0 : var3;
                    return var0;
                case 284:
                    var5 = _closure2_slot0;
                    var0 = {};
                    var3 = _closure1_slot5;
                    var3 = var3.COLLECTIBLES_SHOP;
                    var0.path = var3;
                    var3 = _closure1_slot7;
                    var3 = var3.SHOP_ORBS_TAB;
                    var0.type = var3;
                    var3 = var5.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var5
                        }
                    });
                    var13 = var3;
                    var12 = var0;
                    var0 = new var13[var5](var12, var11);
                    var0 = var0 instanceof Object ? var0 : var3;
                    return var0;
                case 347:
                    var5 = _closure2_slot0;
                    var0 = {};
                    var6 = null;
                    var3 = var4;
                    if (!(var6 == var4)) {
                        _fun49459_ip = 375;
                        continue _fun49459
                    }
                case 365:
                    var6 = _closure1_slot5;
                    var3 = var6.APP;
                case 375:
                    var0.path = var3;
                    var3 = _closure1_slot7;
                    var3 = var3.PLAYGROUND;
                    var0.type = var3;
                    var0.label = var2;
                    var3 = arg3;
                    var0.collectionId = var3;
                    var3 = arg4;
                    var0.IconComponent = var3;
                    var3 = var5.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var5
                        }
                    });
                    var13 = var3;
                    var12 = var0;
                    var0 = new var13[var5](var12, var11);
                    var0 = var0 instanceof Object ? var0 : var3;
                    return var0;
                case 438:
                    var3 = _closure2_slot0;
                    var0 = {};
                    var5 = null;
                    if (!(var5 == var4)) {
                        _fun49459_ip = 472;
                        continue _fun49459
                    }
                case 453:
                    var7 = _closure1_slot5;
                    var6 = var7.SETTINGS;
                    var5 = 'account';
                    var4 = var6.bind(var7)(var5);
                case 472:
                    var0.path = var4;
                    var0.label = var2;
                    var2 = _closure1_slot7;
                    var2 = var2.SETTINGS;
                    var0.type = var2;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var13 = var2;
                    var12 = var0;
                    var0 = new var13[var3](var12, var11);
                    var0 = var0 instanceof Object ? var0 : var2;
                    return var0;
                case 520:
                    var3 = _closure2_slot0;
                    var0 = {};
                    var2 = _closure1_slot5;
                    var2 = var2.GLOBAL_DISCOVERY_APPS;
                    var0.path = var2;
                    var2 = _closure1_slot7;
                    var2 = var2.APPS_HOME;
                    var0.type = var2;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var13 = var2;
                    var12 = var0;
                    var0 = new var13[var3](var12, var11);
                    var0 = var0 instanceof Object ? var0 : var2;
                    return var0;
                case 583:
                    var3 = _closure2_slot0;
                    var0 = {};
                    var2 = _closure1_slot5;
                    var2 = var2.QUEST_HOME_V2;
                    var0.path = var2;
                    var2 = _closure1_slot7;
                    var2 = var2.QUEST_HOME;
                    var0.type = var2;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var13 = var2;
                    var12 = var0;
                    var0 = new var13[var3](var12, var11);
                    var0 = var0 instanceof Object ? var0 : var2;
                    return var0;
                case 646:
                    var3 = _closure2_slot0;
                    var0 = {};
                    var2 = _closure1_slot5;
                    var2 = var2.NITRO_HOME;
                    var0.path = var2;
                    var2 = _closure1_slot7;
                    var2 = var2.NITRO_HOME;
                    var0.type = var2;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var13 = var2;
                    var12 = var0;
                    var0 = new var13[var3](var12, var11);
                    var0 = var0 instanceof Object ? var0 : var2;
                    return var0;
                case 709:
                    var2 = _closure2_slot0;
                    var0 = {};
                    var3 = _closure1_slot5;
                    var3 = var3.COLLECTIBLES_SHOP;
                    var0.path = var3;
                    var1 = _closure1_slot7;
                    var1 = var1.SHOP;
                    var0.type = var1;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var13 = var1;
                    var12 = var0;
                    var0 = new var13[var2](var12, var11);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = null;
        var0 = var2.bind(var3)(var4, var0, var1);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/autocompleter/record/InAppNavigationRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.InAppNavigationRecord = var3;
    var2.InAppNavigationType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1629, 660, 5233, 2]);