// modules/settings/native/renderer/SettingSegmentedControlRenderer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun89095: for (var _fun89095_ip = 0;;) switch (_fun89095_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun89095_ip = 46;
                    continue _fun89095
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun89095_ip = 55;
                    continue _fun89095
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun89095_ip = 345;
                    continue _fun89095
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun89095_ip = 323;
                    continue _fun89095
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun89095_ip = 283;
                    continue _fun89095
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun89095_ip = 270;
                    continue _fun89095
                }
            case 110:
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
                    _fun89095_ip = 163;
                    continue _fun89095
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun89095_ip = 179;
                    continue _fun89095
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun89095_ip = 249;
                    continue _fun89095
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun89095_ip = 249;
                    continue _fun89095
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun89095_ip = 234;
                    continue _fun89095
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun89095_ip = 247;
                    continue _fun89095
                }
            case 234:
                var8 = _closure1_slot13;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun89095_ip = 265;
                continue _fun89095;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun89095_ip = 283;
                continue _fun89095;
            case 270:
                var6 = _closure1_slot13;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun89095_ip = 323;
                    continue _fun89095
                }
            case 289:
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
            case 323:
                if (!var3) {
                    _fun89095_ip = 330;
                    continue _fun89095
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun89096: for (var _fun89096_ip = 0;;) switch (_fun89096_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun89096_ip = 56;
                                continue _fun89096
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
                            _fun89096_ip = 67;
                            continue _fun89096;
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
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1() {
        _fun89097: for (var _fun89097_ip = 0;;) switch (_fun89097_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun89097_ip = 23;
                    continue _fun89097
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun89097_ip = 33;
                    continue _fun89097
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
                    _fun89097_ip = 70;
                    continue _fun89097
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun89097_ip = 55;
                    continue _fun89097
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var9 = 1;
    var6 = var5[var9];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NodeType;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var6 = var3.Fragment;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var10 = 7;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.paddingHorizontal = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var8.paddingTop = var10;
    var3.controlContainer = var8;
    var8 = {};
    var8.flex = var9;
    var3.pageContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/settings/native/renderer/SettingSegmentedControlRenderer.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var1 = var1.node;
        var2 = var1.defaultIndex;
        var _closure2_slot0 = var2;
        var10 = var1.settings;
        var _closure2_slot1 = var10;
        var1 = _closure1_slot11;
        var3 = undefined;
        var8 = var1.bind(var3)();
        var9 = _closure1_slot4;
        var1 = var9.useState;
        var5 = 0;
        var1 = var1.bind(var9)(var5);
        var11 = _closure1_slot3;
        var6 = 2;
        var1 = var11.bind(var3)(var1, var6);
        var7 = var1[var5];
        var2 = 1;
        var1 = var1[var2];
        var _closure2_slot2 = var1;
        var12 = var9.useState;
        var1 = function() { // Environment: var0
            _fun89099: for (var _fun89099_ip = 0;;) switch (_fun89099_ip) {
                case 0:
                    var3 = _closure1_slot6;
                    var2 = var3.getField;
                    var0 = 'selected';
                    var4 = var2.bind(var3)(var0);
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun89099_ip = 159;
                        continue _fun89099
                    }
                case 31:
                    var2 = _closure2_slot1;
                    var0 = var2.indexOf;
                    var0 = var0.bind(var2)(var4);
                    var6 = -1;
                    if (!(var6 === var0)) {
                        _fun89099_ip = 168;
                        continue _fun89099
                    }
                case 59:
                    var2 = _closure1_slot12;
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 8;
                    var1 = var5[var1];
                    var5 = undefined;
                    var3 = var3.bind(var5)(var1);
                    var1 = var3.getAncestors;
                    var1 = var1.bind(var3)(var4);
                    var4 = var2.bind(var5)(var1);
                    var2 = var4.bind(var5)();
                    var1 = var2.done;
                    var3 = var2;
                    if (var1) {
                        _fun89099_ip = 159;
                        continue _fun89099
                    }
                case 116:
                    var8 = var3.value;
                    var2 = _closure2_slot1;
                    var1 = var2.indexOf;
                    var1 = var1.bind(var2)(var8);
                    if (!(var6 === var1)) {
                        _fun89099_ip = 157;
                        continue _fun89099
                    }
                case 140:
                    var8 = var4.bind(var5)();
                    var2 = var8.done;
                    var3 = var8;
                    if (var2) {
                        _fun89099_ip = 159;
                        continue _fun89099
                    }
                case 155:
                    _fun89099_ip = 116;
                    continue _fun89099;
                case 157:
                    return var1;
                case 159:
                    var1 = _closure2_slot0;
                    return var1;
                case 168:
                    return var0;
            }
        };
        var1 = var12.bind(var9)(var1);
        var1 = var11.bind(var3)(var1, var6);
        var6 = var1[var5];
        var1 = var1[var2];
        var5 = var9.useCallback;
        var2 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.nativeEvent;
            var0 = var0.layout;
            var2 = var0.width;
            var1 = _closure2_slot2;
            var0 = undefined;
            var1 = var1.bind(var0)(var2);
            return var0;
        };
        var1 = new Array(0);
        var5 = var5.bind(var9)(var2, var1);
        var2 = var9.useMemo;
        var1 = new Array(1);
        var1[0] = var10;
        var0 = function() { // Environment: var0
            var0 = new Array(0);
            var _closure3_slot0 = var0;
            var3 = _closure2_slot1;
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                var5 = arg0;
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 9;
                var1 = var10[var0];
                var0 = undefined;
                var1 = var8.bind(var0)(var1);
                var1 = var1.SETTING_RENDERER_CONFIG;
                var1 = var1[var5];
                var3 = _closure1_slot1;
                var2 = 10;
                var2 = var10[var2];
                var6 = var3.bind(var0)(var2);
                var7 = var1.type;
                var2 = _closure1_slot7;
                var2 = var2.ROUTE;
                var3 = global;
                var3 = var3.HermesInternal;
                var9 = var3.concat;
                var3 = 'Invalid setting type for segmented control: ';
                var3 = var9.bind(var3)(var5);
                var2 = var7 === var2;
                var2 = var6.bind(var0)(var2, var3);
                var9 = var1.title;
                var2 = var1.screen;
                var1 = var2.getComponent;
                var6 = var1.bind(var2)();
                var3 = _closure3_slot0;
                var2 = var3.push;
                var1 = {};
                var7 = 11;
                var7 = var10[var7];
                var8 = var8.bind(var0)(var7);
                var7 = var8.transformSettingTitle;
                var7 = var7.bind(var8)(var9);
                var1.label = var7;
                var1.id = var5;
                var5 = _closure1_slot8;
                var4 = {};
                var4 = var5.bind(var0)(var6, var4);
                var1.page = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var10 = var2.bind(var9)(var0, var1);
        var9 = _closure1_slot0;
        var11 = _closure1_slot2;
        var0 = 12;
        var0 = var11[var0];
        var2 = var9.bind(var3)(var0);
        var1 = var2.useSegmentedControlState;
        var0 = {};
        var0.items = var10;
        var0.pageWidth = var7;
        var0.defaultIndex = var6;
        var10 = var1.bind(var2)(var0);
        var2 = _closure1_slot10;
        var1 = _closure1_slot9;
        var0 = {};
        var7 = _closure1_slot8;
        var6 = _closure1_slot5;
        var4 = {};
        var12 = var8.controlContainer;
        var4.style = var12;
        var4.onLayout = var5;
        var5 = 13;
        var5 = var11[var5];
        var5 = var9.bind(var3)(var5);
        var12 = var5.SegmentedControl;
        var5 = {};
        var5.state = var10;
        var5 = var7.bind(var3)(var12, var5);
        var4.children = var5;
        var5 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = {};
        var8 = var8.pageContainer;
        var5.style = var8;
        var8 = 14;
        var8 = var11[var8];
        var8 = var9.bind(var3)(var8);
        var9 = var8.SegmentedControlPages;
        var8 = {};
        var8.state = var10;
        var8 = var7.bind(var3)(var9, var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 10193, 9000, 33, 1297, 671, 11558, 10197, 44, 10196, 7798, 8191, 7806, 2]);