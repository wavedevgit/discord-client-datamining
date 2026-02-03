// modules/safety_flows/native/tasks/ResendVerificationCodeButton.tsx
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
    var3 = var3.Pressable;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/safety_flows/native/tasks/ResendVerificationCodeButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun117757: for (var _fun117757_ip = 0;;) switch (_fun117757_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.flowId;
                var _closure2_slot0 = var5;
                var7 = var1.setLoading;
                var _closure2_slot1 = var7;
                var4 = _closure1_slot5;
                var1 = var4.useState;
                var6 = 0;
                var9 = var1.bind(var4)(var6);
                var2 = _closure1_slot4;
                var3 = undefined;
                var1 = 2;
                var2 = var2.bind(var3)(var9, var1);
                var11 = var2[var6];
                var _closure2_slot2 = var11;
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot3 = var1;
                var9 = var4.useEffect;
                var2 = new Array(1);
                var2[0] = var11;
                var1 = function() { // Environment: var0
                    _fun117758: for (var _fun117758_ip = 0;;) switch (_fun117758_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = 0;
                            if (!(!(var2 > var1))) {
                                _fun117758_ip = 19;
                                continue _fun117758
                            }
                        case 15:
                            var1 = undefined;
                            return var1;
                        case 19:
                            var1 = global;
                            var4 = var1.setInterval;
                            var3 = undefined;
                            var2 = function() { // Environment: var0
                                var2 = _closure2_slot3;
                                var0 = undefined;
                                var1 = function(arg0) { // Environment: var1
                                    var1 = arg0;
                                    var0 = 1;
                                    var0 = var1 - var0;
                                    return var0;
                                };
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = 1000;
                            var1 = var4.bind(var3)(var2, var1);
                            var _closure3_slot0 = var1;
                            var0 = function() { // Environment: var0
                                var0 = global;
                                var2 = var0.clearInterval;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            return var0;
                    }
                };
                var1 = var9.bind(var4)(var1, var2);
                var2 = var4.useCallback;
                var1 = _closure1_slot3;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun117763: for (var _fun117763_ip = 0;;) switch (_fun117763_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun117763_ip = 333;
                                    continue _fun117763
                                }
                            case 10:
                                var3 = _closure2_slot2;
                                var1 = 0;
                                if (!(!(var3 > var1))) {
                                    _fun117763_ip = 328;
                                    continue _fun117763
                                }
                            case 26:
                                var3 = _closure2_slot1;
                                var4 = undefined;
                                var1 = true;
                                var1 = var3.bind(var4)(var1);
                            case 39: // try_start_0 // try_start_1
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var1 = 5;
                                var1 = var6[var1];
                                var6 = var5.bind(var4)(var1);
                                var5 = var6.resendVerificationCode;
                                var1 = _closure2_slot0;
                                var1 = var5.bind(var6)(var1);
                                SaveGenerator(address = 81);
                            case 79:
                                return var1;
                            case 81:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun117763_ip = 134;
                                    continue _fun117763
                                }
                            case 87:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var3 = 6;
                                var3 = var6[var3];
                                var5 = var5.bind(var4)(var3);
                                var3 = var5.showVerificationSent;
                                var3 = var3.bind(var5)();
                                var5 = _closure2_slot3;
                                var3 = 30;
                                var3 = var5.bind(var4)(var3);
                            case 129: // try_end0
                                _fun117763_ip = 300;
                                continue _fun117763;
                            case 134: // try_end1
                                var5 = _closure2_slot1;
                                var3 = false;
                                var3 = var5.bind(var4)(var3);
                                return var1;
                            case 148: // try_start_2 // catch_target0
                                CatchBlockStart(arg_register = 1);
                                var9 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var1 = 7;
                                var1 = var8[var1];
                                var5 = var9.bind(var4)(var1);
                                var3 = var5.open;
                                var1 = {};
                                var7 = 'SAFETY_FLOWS_VERIFY_EMAIL_ERROR';
                                var1.key = var7;
                                var7 = _closure1_slot0;
                                var6 = 8;
                                var6 = var8[var6];
                                var6 = var7.bind(var4)(var6);
                                var11 = var6.intl;
                                var10 = var11.string;
                                var6 = 9;
                                var6 = var8[var6];
                                var6 = var9.bind(var4)(var6);
                                var6 = var6["3AXMYu"];
                                var6 = var10.bind(var11)(var6);
                                var1.content = var6;
                                var6 = 10;
                                var6 = var8[var6];
                                var6 = var9.bind(var4)(var6);
                                var1.icon = var6;
                                var6 = 11;
                                var6 = var8[var6];
                                var6 = var7.bind(var4)(var6);
                                var6 = var6.XLargeIcon;
                                var1.IconComponent = var6;
                                var6 = 'icon-feedback-critical';
                                var1.iconColor = var6;
                                var1 = var3.bind(var5)(var1);
                            case 300: // try_end2
                                var3 = _closure2_slot1;
                                var1 = false;
                                var1 = var3.bind(var4)(var1);
                                _fun117763_ip = 328;
                                continue _fun117763;
                            case 313: // catch_target1 // catch_target2
                                CatchBlockStart(arg_register = 1);
                                var3 = _closure2_slot1;
                                var2 = false;
                                var2 = var3.bind(var4)(var2);
                                throw var1;
                            case 328:
                                var1 = undefined;
                                return var1;
                            case 333:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var1.bind(var3)(var0);
                var0 = new Array(3);
                var0[0] = var7;
                var0[1] = var11;
                var0[2] = var5;
                var4 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot7;
                var1 = _closure1_slot6;
                var0 = {};
                var0.onPress = var4;
                var4 = var11 > var6;
                var0.disabled = var4;
                var4 = 'button';
                var0.accessibilityRole = var4;
                var13 = _closure1_slot0;
                var7 = _closure1_slot2;
                var9 = 8;
                var4 = var7[var9];
                var4 = var13.bind(var3)(var4);
                var10 = var4.intl;
                var5 = var10.string;
                var14 = _closure1_slot1;
                var12 = 9;
                var4 = var7[var12];
                var4 = var14.bind(var3)(var4);
                var4 = var4.ah0EUu;
                var4 = var5.bind(var10)(var4);
                var0.accessibilityLabel = var4;
                var4 = 12;
                var4 = var7[var4];
                var4 = var13.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-link',
                    'accessibilityLabel': null,
                    'importantForAccessibility': 'no'
                };
                var10 = var7[var9];
                var10 = var13.bind(var3)(var10);
                var13 = var10.intl;
                var10 = var13.string;
                var7 = var7[var12];
                var7 = var14.bind(var3)(var7);
                var7 = var7.ah0EUu;
                var7 = var10.bind(var13)(var7);
                var4.accessibilityLabel = var7;
                if (!(!(var11 > var6))) {
                    _fun117757_ip = 371;
                    continue _fun117757
                }
            case 318:
                var10 = _closure1_slot0;
                var6 = _closure1_slot2;
                var7 = var6[var9];
                var7 = var10.bind(var3)(var7);
                var10 = var7.intl;
                var7 = var10.string;
                var13 = _closure1_slot1;
                var6 = var6[var12];
                var6 = var13.bind(var3)(var6);
                var6 = var6.ah0EUu;
                var6 = var7.bind(var10)(var6);
                _fun117757_ip = 432;
                continue _fun117757;
            case 371:
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var9 = var7[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.format;
                var8 = _closure1_slot1;
                var7 = var7[var12];
                var7 = var8.bind(var3)(var7);
                var8 = var7["2+Lyn0"];
                var7 = {};
                var7.countdown = var11;
                var6 = var9.bind(var10)(var8, var7);
            case 432:
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 33, 15000, 3138, 3139, 1234, 2107, 10531, 3255, 3932, 2]);