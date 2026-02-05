// modules/interaction_components/native/components/useSearchableSelectComponent.tsx
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
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/interaction_components/native/components/useSearchableSelectComponent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var0 = var1.selectActionComponent;
        var _closure2_slot0 = var0;
        var14 = var1.containerId;
        var13 = var1.guildId;
        var3 = var1.queryOptions;
        var _closure2_slot1 = var3;
        var1 = var1.onSubmit;
        var _closure2_slot2 = var1;
        var9 = _closure1_slot4;
        var5 = var9.useState;
        var1 = '';
        var1 = var5.bind(var9)(var1);
        var11 = _closure1_slot3;
        var8 = undefined;
        var7 = 2;
        var1 = var11.bind(var8)(var1, var7);
        var5 = 0;
        var10 = var1[var5];
        var _closure2_slot3 = var10;
        var6 = 1;
        var1 = var1[var6];
        var12 = _closure1_slot0;
        var4 = _closure1_slot2;
        var4 = var4[var7];
        var12 = var12.bind(var8)(var4);
        var4 = var12.getInitialSnowflakeSelectOptions;
        var4 = var4.bind(var12)(var0, var14, var13);
        var _closure2_slot4 = var4;
        var12 = var9.useState;
        var4 = function() { // Environment: var2
            var0 = global;
            var2 = var0.Map;
            var3 = _closure2_slot4;
            var1 = var3.map;
            var0 = function(arg0) { // Environment: var0
                var1 = arg0;
                var2 = var1.value;
                var0 = new Array(2);
                var0[0] = var2;
                var0[1] = var1;
                return var0;
            };
            var4 = var1.bind(var3)(var0);
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var5 = var1;
            var0 = new var5[var2](var4, var3);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var4 = var12.bind(var9)(var4);
        var7 = var11.bind(var8)(var4, var7);
        var4 = var7[var5];
        var _closure2_slot5 = var4;
        var7 = var7[var6];
        var _closure2_slot6 = var7;
        var8 = var9.useMemo;
        var7 = new Array(2);
        var7[0] = var10;
        var7[1] = var3;
        var3 = function() { // Environment: var2
            var2 = _closure2_slot1;
            var1 = _closure2_slot3;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var3 = var8.bind(var9)(var3, var7);
        var0 = var0.maxValues;
        var0 = var0 > var6;
        var _closure2_slot7 = var0;
        var0 = function arg0() {
            var3 = arg0;
            var2 = {};
            var1 = _closure2_slot0;
            var1 = var1.type;
            var2.type = var1;
            var1 = var3.values;
            var6 = var1.bind(var3)();
            var1 = new Array(0);
            var5 = 0;
            var7 = var1;
            var3 = arraySpread(var7, var6, var5);
            var2.selectedOptions = var1;
            var1 = _closure2_slot2;
            var0 = undefined;
            var1 = var1.bind(var0)(var2);
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 3;
            var1 = var3[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.hideActionSheet;
            var1 = var1.bind(var2)();
            return var0;
        };
        var _closure2_slot8 = var0;
        var0 = {};
        var0.options = var3;
        var3 = var4.values;
        var16 = var3.bind(var4)();
        var3 = new Array(0);
        var17 = var3;
        var15 = 0;
        var4 = arraySpread(var17, var16, var15);
        var0.selectedOptions = var3;
        var3 = function arg0() {
            var2 = _closure2_slot5;
            var1 = var2.has;
            var0 = arg0;
            var0 = var0.value;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.isSelected = var3;
        var3 = function arg0, arg1() {
            _fun79405: for (var _fun79405_ip = 0;;) switch (_fun79405_ip) {
                case 0:
                    var4 = arg1;
                    var _closure3_slot0 = var4;
                    var5 = _closure2_slot5;
                    var3 = var5.has;
                    var2 = var4.value;
                    var2 = var3.bind(var5)(var2);
                    var _closure3_slot1 = var2;
                    var3 = _closure2_slot7;
                    if (var3) {
                        _fun79405_ip = 136;
                        continue _fun79405
                    }
                case 42:
                    var5 = _closure2_slot8;
                    var3 = global;
                    var3 = var3.Map;
                    if (var2) {
                        _fun79405_ip = 107;
                        continue _fun79405
                    }
                case 57:
                    var7 = var4.value;
                    var6 = new Array(2);
                    var6[0] = var7;
                    var6[1] = var4;
                    var4 = new Array(1);
                    var4[0] = var6;
                    var6 = var3.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var3
                        }
                    });
                    var9 = var6;
                    var8 = var4;
                    var4 = new var9[var3](var8, var7);
                    var4 = var4 instanceof Object ? var4 : var6;
                    _fun79405_ip = 127;
                    continue _fun79405;
                case 107:
                    var6 = var3.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var3
                        }
                    });
                    var9 = var6;
                    var3 = new var9[var3](var8);
                    var4 = var3 instanceof Object ? var3 : var6;
                case 127:
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    _fun79405_ip = 186;
                    continue _fun79405;
                case 136:
                    var2 = !var2;
                    if (!var2) {
                        _fun79405_ip = 165;
                        continue _fun79405
                    }
                case 142:
                    var3 = _closure2_slot5;
                    var4 = var3.size;
                    var3 = _closure2_slot0;
                    var3 = var3.maxValues;
                    var2 = var4 >= var3;
                case 165:
                    if (var2) {
                        _fun79405_ip = 186;
                        continue _fun79405
                    }
                case 168:
                    var2 = _closure2_slot6;
                    var1 = undefined;
                    var0 = function(arg0) { // Environment: var0
                        _fun79406: for (var _fun79406_ip = 0;;) switch (_fun79406_ip) {
                            case 0:
                                var0 = global;
                                var2 = var0.Map;
                                var0 = var2.prototype;
                                var1 = Object.create(var0, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var6 = arg0;
                                var7 = var1;
                                var0 = new var7[var2](var6, var5);
                                var0 = var0 instanceof Object ? var0 : var1;
                                var2 = _closure3_slot1;
                                if (var2) {
                                    _fun79406_ip = 63;
                                    continue _fun79406
                                }
                            case 41:
                                var4 = var0.set;
                                var3 = _closure3_slot0;
                                var2 = var3.value;
                                var2 = var4.bind(var0)(var2, var3);
                                _fun79406_ip = 82;
                                continue _fun79406;
                            case 63:
                                var2 = var0.delete;
                                var1 = _closure3_slot0;
                                var1 = var1.value;
                                var1 = var2.bind(var0)(var1);
                            case 82:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var1)(var0);
                case 186:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.onPressOptionItem = var3;
        var2 = function() {
            var2 = _closure2_slot8;
            var1 = _closure2_slot5;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0.submitSelection = var2;
        var0.setQuery = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 6853, 3278, 2]);