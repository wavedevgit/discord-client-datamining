// modules/safety_flows/native/tasks/VerifyEmailScreen.tsx
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/safety_flows/native/tasks/VerifyEmailScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: _default, environment: var1
        _fun117806: for (var _fun117806_ip = 0;;) switch (_fun117806_ip) {
            case 0:
                var20 = _closure1_slot0;
                var15 = _closure1_slot2;
                var1 = 4;
                var1 = var15[var1];
                var3 = undefined;
                var2 = var20.bind(var3)(var1);
                var1 = var2.useSafetyFlowTask;
                var1 = var1.bind(var2)();
                var13 = var1.task;
                var1 = 5;
                var1 = var15[var1];
                var2 = var20.bind(var3)(var1);
                var1 = var2.useOnTaskComplete;
                var9 = var1.bind(var2)();
                var _closure2_slot0 = var9;
                var7 = _closure1_slot5;
                var1 = var7.useRef;
                var2 = '';
                var1 = var1.bind(var7)(var2);
                var _closure2_slot1 = var1;
                var1 = var7.useState;
                var1 = var1.bind(var7)(var2);
                var10 = _closure1_slot4;
                var8 = 2;
                var1 = var10.bind(var3)(var1, var8);
                var6 = 0;
                var17 = var1[var6];
                var _closure2_slot2 = var17;
                var2 = 1;
                var16 = var1[var2];
                var1 = var7.useState;
                var11 = false;
                var1 = var1.bind(var7)(var11);
                var1 = var10.bind(var3)(var1, var8);
                var5 = var1[var6];
                var14 = var1[var2];
                var _closure2_slot3 = var14;
                var1 = var7.useState;
                var1 = var1.bind(var7)(var11);
                var1 = var10.bind(var3)(var1, var8);
                var8 = var1[var6];
                var _closure2_slot4 = var8;
                var1 = var1[var2];
                var _closure2_slot5 = var1;
                var6 = var7.useCallback;
                var2 = _closure1_slot3;
                var1 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun117808: for (var _fun117808_ip = 0;;) switch (_fun117808_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun117808_ip = 284;
                                    continue _fun117808
                                }
                            case 10:
                                var1 = undefined;
                                var5 = undefined;
                                var3 = _closure2_slot1;
                                var4 = var3.current;
                                var5 = var4;
                                var3 = null;
                                if (!(var3 != var4)) {
                                    _fun117808_ip = 281;
                                    continue _fun117808
                                }
                            case 38:
                                var4 = var5;
                                var3 = '';
                                if (!(var3 !== var4)) {
                                    _fun117808_ip = 281;
                                    continue _fun117808
                                }
                            case 52: // try_start_0
                                var3 = _closure2_slot3;
                                var4 = true;
                                var3 = var3.bind(var1)(var4);
                                var3 = _closure2_slot5;
                                var3 = var3.bind(var1)(var4);
                                var4 = _closure2_slot0;
                                var3 = {};
                                var3.verification_code = var5;
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var5 = 6;
                                var5 = var7[var5];
                                var5 = var6.bind(var1)(var5);
                                var5 = var5.TaskInputType;
                                var5 = var5.VerificationCode;
                                var3.type = var5;
                                var3 = var4.bind(var1)(var3);
                                SaveGenerator(address = 133);
                            case 131:
                                return var3;
                            case 133:
                                ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun117808_ip = 155;
                                    continue _fun117808
                                }
                            case 139:
                                var5 = _closure2_slot3;
                                var4 = false;
                                var4 = var5.bind(var1)(var4);
                            case 150: // try_end0
                                _fun117808_ip = 281;
                                continue _fun117808;
                            case 155:
                                return var3;
                            case 158: // catch_target0
                                CatchBlockStart(arg_register = 3);
                                var4 = _closure2_slot3;
                                var3 = false;
                                var4 = var4.bind(var1)(var3);
                                var2 = _closure2_slot5;
                                var2 = var2.bind(var1)(var3);
                                var8 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var2 = 7;
                                var2 = var9[var2];
                                var4 = var8.bind(var1)(var2);
                                var3 = var4.open;
                                var2 = {};
                                var6 = 'SAFETY_FLOWS_VERIFY_EMAIL_ERROR';
                                var2.key = var6;
                                var6 = _closure1_slot0;
                                var5 = 8;
                                var5 = var9[var5];
                                var5 = var6.bind(var1)(var5);
                                var7 = var5.intl;
                                var6 = var7.string;
                                var5 = 9;
                                var5 = var9[var5];
                                var5 = var8.bind(var1)(var5);
                                var5 = var5.PfbG6H;
                                var5 = var6.bind(var7)(var5);
                                var2.content = var5;
                                var2 = var3.bind(var4)(var2);
                            case 281:
                                return var1;
                            case 284:
                                return var0;
                        }
                    };
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = new Array(1);
                var1[0] = var9;
                var6 = var6.bind(var7)(var2, var1);
                var _closure2_slot6 = var6;
                var9 = var7.useEffect;
                var2 = new Array(1);
                var2[0] = var17;
                var1 = function() { // Environment: var0
                    var1 = _closure2_slot1;
                    var0 = _closure2_slot2;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var1 = var9.bind(var7)(var1, var2);
                var2 = var7.useEffect;
                var1 = new Array(3);
                var1[0] = var17;
                var1[1] = var8;
                var1[2] = var6;
                var0 = function() { // Environment: var0
                    _fun117810: for (var _fun117810_ip = 0;;) switch (_fun117810_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var2 = var1.length;
                            var1 = 6;
                            var1 = var1 !== var2;
                            if (var1) {
                                _fun117810_ip = 26;
                                continue _fun117810
                            }
                        case 22:
                            var1 = _closure2_slot4;
                        case 26:
                            if (var1) {
                                _fun117810_ip = 39;
                                continue _fun117810
                            }
                        case 29:
                            var1 = _closure2_slot6;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 39:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var7)(var0, var1);
                var2 = _closure1_slot6;
                var12 = _closure1_slot1;
                var0 = 10;
                var0 = var15[var0];
                var1 = var12.bind(var3)(var0);
                var0 = {};
                var19 = 8;
                var7 = var15[var19];
                var7 = var20.bind(var3)(var7);
                var9 = var7.intl;
                var8 = var9.string;
                var18 = 9;
                var7 = var15[var18];
                var7 = var12.bind(var3)(var7);
                var7 = var7["Qm6K/s"];
                var7 = var8.bind(var9)(var7);
                var0.title = var7;
                var7 = var15[var19];
                var7 = var20.bind(var3)(var7);
                var9 = var7.intl;
                var8 = var9.string;
                var7 = var15[var18];
                var7 = var12.bind(var3)(var7);
                var7 = var7.wq2RDq;
                var7 = var8.bind(var9)(var7);
                var0.action = var7;
                var0.onAction = var6;
                var0.submitting = var5;
                var6 = _closure1_slot7;
                var8 = 11;
                var4 = var15[var8];
                var4 = var20.bind(var3)(var4);
                var5 = var4.Stack;
                var4 = {};
                var10 = 12;
                var7 = var15[var10];
                var7 = var12.bind(var3)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_16;
                var4.spacing = var7;
                var7 = 13;
                var7 = var15[var7];
                var7 = var20.bind(var3)(var7);
                var9 = var7.Text;
                var7 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-subtle'
                };
                var11 = var15[var19];
                var11 = var20.bind(var3)(var11);
                var22 = var11.intl;
                var21 = var22.string;
                var11 = var15[var18];
                var11 = var12.bind(var3)(var11);
                var11 = var11.aveKoG;
                var11 = var21.bind(var22)(var11);
                var7.children = var11;
                var9 = var2.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var8 = var15[var8];
                var8 = var20.bind(var3)(var8);
                var9 = var8.Stack;
                var8 = {};
                var10 = var15[var10];
                var10 = var12.bind(var3)(var10);
                var10 = var10.spacing;
                var10 = var10.PX_8;
                var8.spacing = var10;
                var10 = 14;
                var10 = var15[var10];
                var10 = var20.bind(var3)(var10);
                var11 = var10.TextInput;
                var10 = {
                    'placeholder': null,
                    'maxLength': 6,
                    'returnKeyType': 'done'
                };
                var19 = var15[var19];
                var19 = var20.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var15[var18];
                var18 = var12.bind(var3)(var18);
                var18 = var18.d9Ykjr;
                var18 = var19.bind(var20)(var18);
                var10.placeholder = var18;
                var10.value = var17;
                var10.onChange = var16;
                var11 = var2.bind(var3)(var11, var10);
                var10 = new Array(2);
                var10[0] = var11;
                var11 = 15;
                var11 = var15[var11];
                var12 = var12.bind(var3)(var11);
                var11 = {};
                var11.setLoading = var14;
                var14 = var13.flow_context;
                var13 = null;
                var15 = var13 == var14;
                var13 = undefined;
                if (var15) {
                    _fun117806_ip = 743;
                    continue _fun117806
                }
            case 737:
                var13 = var14.flow_id;
            case 743:
                var11.flowId = var13;
                var11 = var2.bind(var3)(var12, var11);
                var10[1] = var11;
                var8.children = var10;
                var8 = var6.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 33, 14971, 14972, 14967, 3107, 1234, 2075, 14976, 4039, 671, 3900, 5363, 14978, 2]);