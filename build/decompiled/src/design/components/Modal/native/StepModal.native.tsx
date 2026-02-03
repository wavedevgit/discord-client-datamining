// design/components/Modal/native/StepModal.native.tsx
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
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = '100%';
    var8.height = var9;
    var3.container = var8;
    var8 = {
        'flexDirection': 'column',
        'alignItems': 'center',
        'justifyContent': 'center',
        'top': 0,
        'left': 0,
        'right': 0
    };
    var9 = 5;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.NAV_BAR_HEIGHT;
    var8.height = var9;
    var3.stepContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Modal/native/StepModal.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun88252: for (var _fun88252_ip = 0;;) switch (_fun88252_ip) {
            case 0:
                var3 = arg0;
                var12 = var3.steps;
                var _closure2_slot0 = var12;
                var6 = var3.onWillFocus;
                var _closure2_slot1 = var6;
                var11 = null;
                var2 = Object.create(var11);
                var9 = 0;
                var2.steps = var9;
                var2.onWillFocus = var9;
                var20 = {};
                var19 = var3;
                var18 = var2;
                var14 = copyDataProperties(var20, var19, var18);
                var1 = _closure1_slot8;
                var3 = undefined;
                var7 = var1.bind(var3)();
                var2 = _closure1_slot1;
                var13 = _closure1_slot2;
                var1 = 6;
                var1 = var13[var1];
                var1 = var2.bind(var3)(var1);
                var15 = var1.bind(var3)();
                var5 = _closure1_slot4;
                var1 = var5.useState;
                var8 = var1.bind(var5)(var9);
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var3)(var8, var1);
                var10 = var2[var9];
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot2 = var1;
                var2 = var5.useCallback;
                var1 = new Array(2);
                var1[0] = var6;
                var1[1] = var12;
                var0 = function(arg0) { // Environment: var0
                    _fun88253: for (var _fun88253_ip = 0;;) switch (_fun88253_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = var2.route;
                            var5 = _closure2_slot2;
                            var0 = _closure2_slot0;
                            var4 = null;
                            var7 = var4 == var0;
                            var0 = undefined;
                            var6 = undefined;
                            if (var7) {
                                _fun88253_ip = 53;
                                continue _fun88253
                            }
                        case 33:
                            var8 = _closure2_slot0;
                            var7 = var8.indexOf;
                            var3 = var3.name;
                            var6 = var7.bind(var8)(var3);
                        case 53:
                            var7 = var4 != var6;
                            var3 = 0;
                            if (!var7) {
                                _fun88253_ip = 65;
                                continue _fun88253
                            }
                        case 62:
                            var3 = var6;
                        case 65:
                            var3 = var5.bind(var0)(var3);
                            var3 = _closure2_slot1;
                            if (!(var4 != var3)) {
                                _fun88253_ip = 87;
                                continue _fun88253
                            }
                        case 78:
                            var1 = _closure2_slot1;
                            var1 = var1.bind(var0)(var2);
                        case 87:
                            return var0;
                    }
                };
                var16 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot7;
                var1 = _closure1_slot5;
                var0 = {};
                var5 = var7.container;
                var0.style = var5;
                var6 = _closure1_slot6;
                var8 = _closure1_slot0;
                var4 = 7;
                var4 = var13[var4];
                var4 = var8.bind(var3)(var4);
                var5 = var4.Modal;
                var4 = {};
                var20 = var4;
                var19 = var14;
                var14 = copyDataProperties(var20, var19);
                var14 = 'onWillFocus';
                var4[var14] = var16;
                var16 = {};
                var14 = 5;
                var14 = var13[var14];
                var14 = var8.bind(var3)(var14);
                var17 = var14.NAV_BAR_HEIGHT;
                var14 = var15.top;
                var14 = var17 + var14;
                var16.height = var14;
                var14 = 'headerStyle';
                var4[var14] = var16;
                var16 = true;
                var14 = 'hideTitle';
                var4[var14] = var16;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var14 = var7.stepContainer;
                var7 = new Array(2);
                var7[0] = var14;
                var14 = {};
                var15 = var15.top;
                var14.marginTop = var15;
                var7[1] = var14;
                var5.style = var7;
                var7 = 'box-none';
                var5.pointerEvents = var7;
                var7 = 8;
                var7 = var13[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.ModalStepIndicator;
                var7 = {};
                var7.currentStep = var10;
                var13 = var11 == var12;
                var10 = undefined;
                if (var13) {
                    _fun88252_ip = 381;
                    continue _fun88252
                }
            case 376:
                var10 = var12.length;
            case 381:
                var11 = var11 != var10;
                var9 = 0;
                if (!var11) {
                    _fun88252_ip = 393;
                    continue _fun88252
                }
            case 390:
                var9 = var10;
            case 393:
                var7.totalSteps = var9;
                var7 = var6.bind(var3)(var8, var7);
                var5.children = var7;
                var5 = var6.bind(var3)(var1, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.StepModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 4698, 1568, 7497, 11421, 2]);