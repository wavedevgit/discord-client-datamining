// modules/interaction_components/native/actions/StringSelectActionComponent.tsx
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/interaction_components/native/actions/StringSelectActionComponent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun87262: for (var _fun87262_ip = 0;;) switch (_fun87262_ip) {
            case 0:
                var6 = arg0;
                var _closure2_slot0 = var6;
                var13 = var6.type;
                var _closure2_slot1 = var13;
                var14 = var6.options;
                var _closure2_slot2 = var14;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 2;
                var1 = var7[var1];
                var3 = undefined;
                var5 = var2.bind(var3)(var1);
                var1 = var5.getSelectPlaceholder;
                var9 = var1.bind(var5)(var6);
                var10 = _closure1_slot3;
                var8 = var10.useMemo;
                var5 = new Array(1);
                var5[0] = var14;
                var1 = function() { // Environment: var4
                    var3 = _closure2_slot2;
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.default;
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.value;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var8.bind(var10)(var1, var5);
                var1 = 3;
                var1 = var7[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useComponentStateContext;
                var5 = var1.bind(var2)();
                var _closure2_slot3 = var5;
                var2 = _closure1_slot1;
                var1 = 4;
                var1 = var7[var1];
                var8 = var2.bind(var3)(var1);
                var1 = null;
                var7 = var1 == var5;
                var2 = undefined;
                if (var7) {
                    _fun87262_ip = 152;
                    continue _fun87262
                }
            case 146:
                var2 = var5.modal;
            case 152:
                var7 = var1 != var2;
                var2 = 'StringSelectActionComponent must be rendered inside a modal ComponentStateContext';
                var2 = var8.bind(var3)(var7, var2);
                var7 = var5.useComponentState;
                var2 = var11.length;
                var10 = 0;
                var8 = var2 > var10;
                var2 = undefined;
                if (!var8) {
                    _fun87262_ip = 203;
                    continue _fun87262
                }
            case 190:
                var8 = {};
                var8.type = var13;
                var8.values = var11;
                var2 = var8;
            case 203:
                var7 = var7.bind(var5)(var6, var2);
                var2 = var7.state;
                var _closure2_slot4 = var2;
                var8 = var7.visualState;
                var7 = var7.executeStateUpdate;
                var _closure2_slot5 = var7;
                var12 = _closure1_slot3;
                var11 = var12.useMemo;
                var7 = new Array(3);
                var7[0] = var14;
                var7[1] = var13;
                var7[2] = var2;
                var2 = function() { // Environment: var4
                    _fun87266: for (var _fun87266_ip = 0;;) switch (_fun87266_ip) {
                        case 0:
                            var3 = _closure2_slot4;
                            var2 = null;
                            var2 = var2 == var3;
                            var3 = undefined;
                            if (var2) {
                                _fun87266_ip = 29;
                                continue _fun87266
                            }
                        case 20:
                            var2 = _closure2_slot4;
                            var3 = var2.type;
                        case 29:
                            var2 = _closure2_slot1;
                            if (!(var3 !== var2)) {
                                _fun87266_ip = 43;
                                continue _fun87266
                            }
                        case 37:
                            var3 = new Array(0);
                            _fun87266_ip = 52;
                            continue _fun87266;
                        case 43:
                            var1 = _closure2_slot4;
                            var3 = var1.values;
                        case 52:
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var2 = _closure2_slot2;
                                var1 = var2.findIndex;
                                var0 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var1 = var0.value;
                                    var0 = _closure4_slot0;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.filter;
                            var0 = function(arg0) { // Environment: var0
                                var1 = -1;
                                var0 = arg0;
                                var0 = var1 !== var0;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var7 = var11.bind(var12)(var2, var7);
                var2 = var5.modal;
                var2 = var2.customId;
                var _closure2_slot6 = var2;
                var2 = var5.getParents;
                var5 = var2.bind(var5)(var6);
                var11 = var1 == var5;
                var2 = undefined;
                if (var11) {
                    _fun87262_ip = 312;
                    continue _fun87262
                }
            case 308:
                var2 = var5[var10];
            case 312:
                var1 = var1 == var2;
                var10 = undefined;
                if (var1) {
                    _fun87262_ip = 326;
                    continue _fun87262
                }
            case 321:
                var10 = var2.type;
            case 326:
                var5 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 5;
                var1 = var11[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.ComponentType;
                var5 = var1.LABEL;
                var1 = undefined;
                if (!(var10 === var5)) {
                    _fun87262_ip = 367;
                    continue _fun87262
                }
            case 364:
                var1 = var2;
            case 367:
                var _closure2_slot7 = var1;
                var2 = _closure1_slot4;
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 6;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var5 = {};
                var16 = var5;
                var15 = var6;
                var6 = copyDataProperties(var16, var15);
                var6 = 'placeholder';
                var5[var6] = var9;
                var6 = 'state';
                var5[var6] = var8;
                var6 = 'selectedOptions';
                var5[var6] = var7;
                var0.model = var5;
                var4 = function() {
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var3 = var1[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 9;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 8;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var7 = _closure2_slot6;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = 'StringSelectComponentActionSheet:';
                    var2 = var2.bind(var1)(var7);
                    var1 = {};
                    var7 = _closure2_slot0;
                    var1.selectionActionComponent = var7;
                    var7 = _closure2_slot7;
                    var1.labelComponent = var7;
                    var7 = _closure2_slot3;
                    var7 = var7.channelId;
                    var1.channelId = var7;
                    var7 = _closure2_slot6;
                    var1.containerId = var7;
                    var6 = _closure2_slot5;
                    var1.onSubmit = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var0.onTap = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 3974, 6822, 44, 1645, 11281, 3278, 10090, 1307, 2]);