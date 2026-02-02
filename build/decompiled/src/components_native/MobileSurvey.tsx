// components_native/MobileSurvey.tsx
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
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot6 = var3;
    var9 = 4;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.marginLeft = var9;
    var3.confirmIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/MobileSurvey.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun109682: for (var _fun109682_ip = 0;;) switch (_fun109682_ip) {
            case 0:
                var0 = _closure1_slot8;
                var4 = undefined;
                var0 = var0.bind(var4)();
                var _closure2_slot0 = var0;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 6;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var2 = var3.useStateFromStores;
                var0 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var5
                    var1 = _closure1_slot5;
                    var0 = var1.getCurrentSurvey;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = var2.bind(var3)(var1, var0);
                var _closure2_slot1 = var7;
                var3 = _closure1_slot4;
                var2 = var3.useEffect;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function() { // Environment: var5
                    _fun109684: for (var _fun109684_ip = 0;;) switch (_fun109684_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun109684_ip = 86;
                                continue _fun109684
                            }
                        case 13:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 7;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.track;
                            var0 = _closure1_slot6;
                            var2 = var0.OPEN_MODAL;
                            var0 = {};
                            var5 = 'survey';
                            var0.type = var5;
                            var0 = var3.bind(var4)(var2, var0);
                            var0 = function() { // Environment: var0
                                var3 = _closure1_slot3;
                                var2 = undefined;
                                var1 = function*() { // Environment: var0
                                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                                        _fun109687: for (var _fun109687_ip = 0;;) switch (_fun109687_ip) {
                                            case 0:
                                                StartGenerator();
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun109687_ip = 71;
                                                    continue _fun109687
                                                }
                                            case 7:
                                                var3 = _closure1_slot0;
                                                var2 = _closure1_slot2;
                                                var1 = 8;
                                                var1 = var2[var1];
                                                var2 = undefined;
                                                var4 = var3.bind(var2)(var1);
                                                var3 = var4.surveySeen;
                                                var1 = _closure2_slot1;
                                                var1 = var1.key;
                                                var1 = var3.bind(var4)(var1);
                                                SaveGenerator(address = 59);
                                            case 57:
                                                return var1;
                                            case 59:
                                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                                if (var3) {
                                                    _fun109687_ip = 68;
                                                    continue _fun109687
                                                }
                                            case 65:
                                                return var2;
                                            case 68:
                                                return var1;
                                            case 71:
                                                return var0;
                                        }
                                    };
                                    return var0;
                                };
                                var1 = var3.bind(var2)(var1);
                                var _closure4_slot0 = var1;
                                var0 = function() { // Environment: var0
                                    var0 = undefined;
                                    var3 = _closure4_slot0;
                                    var2 = var3.apply;
                                    var0 = arguments;
                                    var1 = var0;
                                    var0 = this;
                                    var0 = var2.bind(var3)(var0, var1);
                                    return var0;
                                };
                                return var0;
                            };
                            var0 = var0.bind(var1)();
                            var0 = var0.bind(var1)();
                        case 86:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                var0 = null;
                var1 = var0 != var7;
                if (!var1) {
                    _fun109682_ip = 260;
                    continue _fun109682
                }
            case 115:
                var3 = _closure1_slot7;
                var2 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 9;
                var1 = var10[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var8 = var7.prompt;
                var1.body = var8;
                var7 = var7.cta;
                var1.confirmText = var7;
                var9 = _closure1_slot0;
                var6 = 10;
                var7 = var10[var6];
                var7 = var9.bind(var4)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.f3Pet9;
                var6 = var7.bind(var8)(var6);
                var1.cancelText = var6;
                var6 = function() {
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 11;
                    var1 = var4[var0];
                    var0 = undefined;
                    var6 = var3.bind(var0)(var1);
                    var5 = var6.openURL;
                    var1 = _closure2_slot1;
                    var3 = var1.url;
                    var3 = var5.bind(var6)(var3);
                    var3 = _closure1_slot0;
                    var2 = 8;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.surveyHide;
                    var2 = var1.key;
                    var1 = false;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var1.onConfirm = var6;
                var6 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.surveyHide;
                    var0 = _closure2_slot1;
                    var1 = var0.key;
                    var0 = true;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1.onCancel = var6;
                var5 = function() {
                    var3 = _closure1_slot7;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 12;
                    var0 = var6[var4];
                    var2 = undefined;
                    var1 = var5.bind(var2)(var0);
                    var0 = {};
                    var7 = _closure2_slot0;
                    var7 = var7.confirmIcon;
                    var0.style = var7;
                    var7 = 13;
                    var7 = var6[var7];
                    var7 = var5.bind(var2)(var7);
                    var7 = var7.unsafe_rawColors;
                    var7 = var7.WHITE;
                    var0.color = var7;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var4 = var4.Sizes;
                    var4 = var4.SMALL;
                    var0.size = var4;
                    var4 = 14;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var0.source = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var1.renderConfirmRightIcon = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 260:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 11179, 660, 33, 1297, 566, 795, 11180, 3898, 1234, 3105, 4047, 671, 5742, 2]);