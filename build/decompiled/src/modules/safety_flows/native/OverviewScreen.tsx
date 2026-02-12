// modules/safety_flows/native/OverviewScreen.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot4 = var7;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var3 = {};
    var10 = {
        'margin': 'auto',
        'overflow': 'visible',
        'justifyContent': 'center',
        'textAlign': 'center',
        'alignItems': 'center'
    };
    var3.content = var10;
    var10 = {
        'textAlign': 'center',
        'textTransform': 'uppercase',
        'lineHeight': 50
    };
    var3.title = var10;
    var3 = var8.bind(var9)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot7 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/safety_flows/native/OverviewScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun118543: for (var _fun118543_ip = 0;;) switch (_fun118543_ip) {
            case 0:
                var0 = _closure1_slot6;
                var3 = undefined;
                var14 = var0.bind(var3)();
                var13 = _closure1_slot0;
                var21 = _closure1_slot2;
                var0 = 4;
                var0 = var21[var0];
                var1 = var13.bind(var3)(var0);
                var0 = var1.useSafetyFlowTask;
                var0 = var0.bind(var1)();
                var15 = var0.task;
                var _closure2_slot0 = var15;
                var0 = 5;
                var0 = var21[var0];
                var1 = var13.bind(var3)(var0);
                var0 = var1.useNavigation;
                var0 = var0.bind(var1)();
                var _closure2_slot1 = var0;
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var15;
                var1[1] = var0;
                var0 = function() { // Environment: var20
                    _fun118544: for (var _fun118544_ip = 0;;) switch (_fun118544_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.getScreensForTaskType;
                            var2 = _closure2_slot0;
                            var2 = var2.task_type;
                            var4 = var3.bind(var4)(var2);
                            var5 = null;
                            var2 = var5 != var4;
                            if (!var2) {
                                _fun118544_ip = 69;
                                continue _fun118544
                            }
                        case 58:
                            var6 = var4.length;
                            var3 = 0;
                            var2 = var6 > var3;
                        case 69:
                            if (!var2) {
                                _fun118544_ip = 82;
                                continue _fun118544
                            }
                        case 72:
                            var3 = 0;
                            var3 = var4[var3];
                            var2 = var5 != var3;
                        case 82:
                            if (!var2) {
                                _fun118544_ip = 105;
                                continue _fun118544
                            }
                        case 85:
                            var3 = _closure2_slot1;
                            var2 = var3.push;
                            var1 = 0;
                            var1 = var4[var1];
                            var1 = var2.bind(var3)(var1);
                        case 105:
                            return var0;
                    }
                };
                var12 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot5;
                var0 = 7;
                var0 = var21[var0];
                var0 = var13.bind(var3)(var0);
                var1 = var0.ModalScreen;
                var0 = {};
                var6 = _closure1_slot4;
                var4 = 8;
                var4 = var21[var4];
                var4 = var13.bind(var3)(var4);
                var5 = var4.ModalContent;
                var4 = {};
                var18 = 9;
                var7 = var21[var18];
                var7 = var13.bind(var3)(var7);
                var9 = var7.Stack;
                var7 = {};
                var22 = _closure1_slot1;
                var11 = 10;
                var10 = var21[var11];
                var10 = var22.bind(var3)(var10);
                var10 = var10.spacing;
                var10 = var10.PX_16;
                var7.spacing = var10;
                var10 = var14.content;
                var7.style = var10;
                var16 = 11;
                var10 = var21[var16];
                var10 = var13.bind(var3)(var10);
                var19 = var10.Text;
                var10 = {};
                var17 = 'display-lg';
                var10.variant = var17;
                var14 = var14.title;
                var10.style = var14;
                var14 = 12;
                var17 = var21[var14];
                var17 = var13.bind(var3)(var17);
                var25 = var17.intl;
                var24 = var25.string;
                var17 = 13;
                var23 = var21[var17];
                var23 = var22.bind(var3)(var23);
                var23 = var23.RRamMH;
                var23 = var24.bind(var25)(var23);
                var10.children = var23;
                var19 = var6.bind(var3)(var19, var10);
                var10 = new Array(3);
                var10[0] = var19;
                var19 = var21[var16];
                var19 = var13.bind(var3)(var19);
                var23 = var19.Text;
                var19 = {
                    'variant': 'text-md/medium',
                    'color': 'text-strong'
                };
                var24 = var21[var14];
                var24 = var13.bind(var3)(var24);
                var26 = var24.intl;
                var25 = var26.string;
                var24 = var21[var17];
                var24 = var22.bind(var3)(var24);
                var24 = var24.I2Ctk1;
                var24 = var25.bind(var26)(var24);
                var19.children = var24;
                var19 = var6.bind(var3)(var23, var19);
                var10[1] = var19;
                var18 = var21[var18];
                var18 = var13.bind(var3)(var18);
                var19 = var18.Stack;
                var18 = {};
                var11 = var21[var11];
                var11 = var22.bind(var3)(var11);
                var11 = var11.spacing;
                var11 = var11.PX_8;
                var18.spacing = var11;
                var11 = 14;
                var11 = var21[var11];
                var11 = var13.bind(var3)(var11);
                var13 = var11.TableRowGroup;
                var11 = {};
                var22 = var15.flow_context;
                var21 = null;
                var23 = var21 == var22;
                var15 = undefined;
                if (var23) {
                    _fun118543_ip = 518;
                    continue _fun118543
                }
            case 486:
                var22 = var22.tasks;
                var21 = var21 == var22;
                var15 = undefined;
                if (var21) {
                    _fun118543_ip = 518;
                    continue _fun118543
                }
            case 501:
                var21 = var22.map;
                var20 = function(arg0, arg1) { // Environment: var20
                    var0 = arg0;
                    var4 = _closure1_slot4;
                    var2 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 15;
                    var1 = var7[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure1_slot0;
                    var5 = 16;
                    var5 = var7[var5];
                    var5 = var6.bind(var3)(var5);
                    var6 = var5.TASK_TYPE_TO_TITLE;
                    var5 = var0.task_type;
                    var5 = var6[var5];
                    var1.tip = var5;
                    var6 = arg1;
                    var5 = 1;
                    var5 = var6 + var5;
                    var1.index = var5;
                    var0 = var0.task_type;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var15 = var21.bind(var22)(var20);
            case 518:
                var11.children = var15;
                var11 = var6.bind(var3)(var13, var11);
                var20 = new Array(2);
                var20[0] = var11;
                var11 = _closure1_slot4;
                var15 = _closure1_slot0;
                var13 = _closure1_slot2;
                var16 = var13[var16];
                var16 = var15.bind(var3)(var16);
                var22 = var16.Text;
                var21 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-muted'
                };
                var16 = var13[var14];
                var16 = var15.bind(var3)(var16);
                var25 = var16.intl;
                var24 = var25.string;
                var16 = _closure1_slot1;
                var23 = var13[var17];
                var23 = var16.bind(var3)(var23);
                var23 = var23["0TnUrG"];
                var23 = var24.bind(var25)(var23);
                var21.children = var23;
                var21 = var11.bind(var3)(var22, var21);
                var20[1] = var21;
                var18.children = var20;
                var18 = var2.bind(var3)(var19, var18);
                var10[2] = var18;
                var7.children = var10;
                var7 = var2.bind(var3)(var9, var7);
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot5;
                var5 = 17;
                var5 = var13[var5];
                var5 = var15.bind(var3)(var5);
                var6 = var5.ModalFooter;
                var5 = {};
                var9 = _closure1_slot7;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = 18;
                var9 = var13[var9];
                var9 = var15.bind(var3)(var9);
                var10 = var9.ModalActionButton;
                var9 = {};
                var18 = 'primary';
                var9.variant = var18;
                var14 = var13[var14];
                var14 = var15.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var13[var17];
                var13 = var16.bind(var3)(var13);
                var13 = var13.Ks6opt;
                var13 = var14.bind(var15)(var13);
                var9.text = var13;
                var9.onPress = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 15102, 15103, 1469, 15104, 6528, 6529, 4086, 671, 3938, 1234, 2118, 5343, 6521, 15098, 10318, 11239, 2]);