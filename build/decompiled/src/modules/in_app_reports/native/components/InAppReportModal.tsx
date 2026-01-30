// modules/in_app_reports/native/components/InAppReportModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: getScreens, environment: var1
        var1 = arg0;
        var0 = var1.nodeMap;
        var _closure2_slot0 = var0;
        var0 = var1.reportType;
        var _closure2_slot1 = var0;
        var0 = var1.reportSubType;
        var _closure2_slot2 = var0;
        var0 = var1.successNodeId;
        var _closure2_slot3 = var0;
        var0 = var1.failNodeId;
        var _closure2_slot4 = var0;
        var0 = var1.callbacks;
        var1 = var1.reportId;
        var _closure2_slot5 = var1;
        var1 = var0.closeModal;
        var _closure2_slot6 = var1;
        var1 = var0.addOnCloseCallback;
        var _closure2_slot7 = var1;
        var1 = var0.onSubmit;
        var _closure2_slot8 = var1;
        var0 = var0.onNavigate;
        var _closure2_slot9 = var0;
        var0 = {};
        var2 = _closure1_slot6;
        var1 = {};
        var4 = function() { // Original name: headerRight, environment: var3
            var3 = _closure1_slot7;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var0 = 5;
            var0 = var8[var0];
            var2 = undefined;
            var0 = var7.bind(var2)(var0);
            var1 = var0.HeaderActionButton;
            var0 = {};
            var5 = _closure1_slot1;
            var4 = 6;
            var4 = var8[var4];
            var4 = var5.bind(var2)(var4);
            var0.source = var4;
            var4 = _closure2_slot6;
            var0.onPress = var4;
            var4 = 7;
            var5 = var8[var4];
            var5 = var7.bind(var2)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var8[var4];
            var4 = var7.bind(var2)(var4);
            var4 = var4.t;
            var4 = var4.cpT0Cq;
            var4 = var5.bind(var6)(var4);
            var0.accessibilityLabel = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var1.headerRight = var4;
        var4 = function() { // Original name: headerTitle, environment: var3
            var0 = null;
            return var0;
        };
        var1.headerTitle = var4;
        var4 = true;
        var1.fullscreen = var4;
        var3 = function(arg0) { // Original name: render, environment: var3
            var4 = arg0;
            var _closure3_slot0 = var4;
            var3 = _closure1_slot7;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 8;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var9 = var0;
            var8 = var4;
            var4 = copyDataProperties(var9, var8);
            var7 = _closure2_slot0;
            var6 = 'nodeMap';
            var0[var6] = var7;
            var7 = _closure2_slot1;
            var6 = 'reportType';
            var0[var6] = var7;
            var7 = _closure2_slot2;
            var6 = 'reportSubType';
            var0[var6] = var7;
            var7 = _closure2_slot3;
            var6 = 'successNodeId';
            var0[var6] = var7;
            var7 = _closure2_slot4;
            var6 = 'failNodeId';
            var0[var6] = var7;
            var6 = function(arg0) { // Original name: onSubmit, environment: var5
                var2 = _closure2_slot8;
                var0 = _closure3_slot0;
                var5 = var0.history;
                var1 = new Array(1);
                var4 = 0;
                var6 = var1;
                var3 = arraySpread(var6, var5, var4);
                var0 = arg0;
                var1[var3] = var0;
                var0 = 1;
                var0 = var3 + var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var5 = 'onSubmit';
            var0[var5] = var6;
            var6 = _closure2_slot6;
            var5 = 'closeModal';
            var0[var5] = var6;
            var6 = _closure2_slot7;
            var5 = 'addOnCloseCallback';
            var0[var5] = var6;
            var6 = _closure2_slot5;
            var5 = 'reportId';
            var0[var5] = var6;
            var5 = _closure2_slot9;
            var4 = 'onNavigate';
            var0[var4] = var5;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var1.render = var3;
        var0[var2] = var1;
        return var0;
    };
    var _closure1_slot8 = var0;
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
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.IN_APP_REPORTS_NODE;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_reports/native/components/InAppReportModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: InAppReportModal, environment: var1
        _fun53670: for (var _fun53670_ip = 0;;) switch (_fun53670_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.reportType;
                var _closure2_slot0 = var1;
                var1 = var2.menu;
                var _closure2_slot1 = var1;
                var3 = var2.afterSubmit;
                var _closure2_slot2 = var3;
                var2 = var2.isEligibleForFeedback;
                var _closure2_slot3 = var2;
                var2 = var1.nodes;
                var _closure2_slot4 = var2;
                var2 = var1.root_node_id;
                var _closure2_slot5 = var2;
                var2 = var1.success_node_id;
                var _closure2_slot6 = var2;
                var1 = var1.fail_node_id;
                var _closure2_slot7 = var1;
                var5 = _closure1_slot5;
                var2 = var5.useState;
                var4 = undefined;
                var2 = var2.bind(var5)(var4);
                var9 = _closure1_slot4;
                var8 = 2;
                var2 = var9.bind(var4)(var2, var8);
                var7 = 0;
                var6 = var2[var7];
                var _closure2_slot8 = var6;
                var3 = 1;
                var2 = var2[var3];
                var _closure2_slot9 = var2;
                var2 = var5.useState;
                var2 = var2.bind(var5)(var4);
                var2 = var9.bind(var4)(var2, var8);
                var10 = var2[var7];
                var _closure2_slot10 = var10;
                var2 = var2[var3];
                var _closure2_slot11 = var2;
                var10 = var5.useState;
                var2 = new Array(0);
                var2 = var10.bind(var5)(var2);
                var2 = var9.bind(var4)(var2, var8);
                var10 = var2[var7];
                var _closure2_slot12 = var10;
                var2 = var2[var3];
                var _closure2_slot13 = var2;
                var10 = var5.useState;
                var2 = new Array(0);
                var2 = var10.bind(var5)(var2);
                var2 = var9.bind(var4)(var2, var8);
                var7 = var2[var7];
                var _closure2_slot14 = var7;
                var2 = var2[var3];
                var _closure2_slot15 = var2;
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 9;
                var2 = var7[var2];
                var3 = var3.bind(var4)(var2);
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getOrFetchLinkedUsers;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                var2 = function(arg0) { // Original name: addOnCloseCallback, environment: var0
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var2 = _closure2_slot15;
                    var0 = undefined;
                    var1 = function(arg0) { // Environment: var1
                        var0 = new Array(1);
                        var4 = arg0;
                        var3 = 0;
                        var5 = var0;
                        var2 = arraySpread(var5, var4, var3);
                        var1 = _closure3_slot0;
                        var0[var2] = var1;
                        var1 = 1;
                        var1 = var2 + var1;
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var _closure2_slot16 = var2;
                var7 = function() { // Original name: closeModal, environment: var0
                    _fun53674: for (var _fun53674_ip = 0;;) switch (_fun53674_ip) {
                        case 0:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 11;
                            var1 = var6[var4];
                            var0 = undefined;
                            var10 = var5.bind(var0)(var1);
                            var9 = var10.trackCloseReportModalAnalytics;
                            var8 = _closure2_slot0;
                            var7 = _closure2_slot12;
                            var3 = _closure2_slot8;
                            var3 = var9.bind(var10)(var8, var7, var3);
                            var3 = 12;
                            var3 = var6[var3];
                            var5 = var5.bind(var0)(var3);
                            var3 = var5.hideReportModal;
                            var3 = var3.bind(var5)();
                            var6 = _closure2_slot14;
                            var5 = var6.forEach;
                            var3 = function(arg0) { // Environment: var3
                                var1 = arg0;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                                return var0;
                            };
                            var3 = var5.bind(var6)(var3);
                            var3 = _closure2_slot3;
                            if (!var3) {
                                _fun53674_ip = 140;
                                continue _fun53674
                            }
                        case 103:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var4];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.showInAppReportsFeedbackModal;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot8;
                            var1 = var3.bind(var4)(var2, var1);
                        case 140:
                            return var0;
                    }
                };
                var _closure2_slot17 = var7;
                var3 = var5.useMemo;
                var2 = new Array(2);
                var2[0] = var7;
                var2[1] = var6;
                var0 = function() { // Environment: var0
                    _fun53676: for (var _fun53676_ip = 0;;) switch (_fun53676_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var1 = _closure2_slot5;
                            var8 = var2[var1];
                            var1 = null;
                            if (!(var1 != var8)) {
                                _fun53676_ip = 198;
                                continue _fun53676
                            }
                        case 26:
                            var1 = function() { // Environment: var6
                                var3 = _closure1_slot3;
                                var2 = undefined;
                                var1 = function*(arg0) { // Environment: var0
                                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                        _fun53679: for (var _fun53679_ip = 0;;) switch (_fun53679_ip) {
                                            case 0:
                                                StartGenerator();
                                                var6 = arg0;
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun53679_ip = 183;
                                                    continue _fun53679
                                                }
                                            case 13:
                                                var3 = _closure1_slot0;
                                                var2 = _closure1_slot2;
                                                var1 = 11;
                                                var1 = var2[var1];
                                                var2 = undefined;
                                                var7 = var3.bind(var2)(var1);
                                                var5 = var7.submitReport;
                                                var4 = _closure2_slot1;
                                                var1 = _closure2_slot0;
                                                var1 = var5.bind(var7)(var4, var1, var6);
                                                SaveGenerator(address = 66);
                                            case 64:
                                                return var1;
                                            case 66:
                                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                                if (var4) {
                                                    _fun53679_ip = 180;
                                                    continue _fun53679
                                                }
                                            case 72:
                                                var5 = null;
                                                var4 = var5 == var1;
                                                var7 = undefined;
                                                if (var4) {
                                                    _fun53679_ip = 103;
                                                    continue _fun53679
                                                }
                                            case 83:
                                                var4 = var1.body;
                                                var8 = var5 == var4;
                                                var7 = undefined;
                                                if (var8) {
                                                    _fun53679_ip = 103;
                                                    continue _fun53679
                                                }
                                            case 97:
                                                var7 = var4.report_id;
                                            case 103:
                                                if (!(var5 != var7)) {
                                                    _fun53679_ip = 116;
                                                    continue _fun53679
                                                }
                                            case 107:
                                                var4 = _closure2_slot9;
                                                var4 = var4.bind(var2)(var7);
                                            case 116:
                                                var7 = var6.length;
                                                var4 = 1;
                                                var4 = var7 - var4;
                                                var4 = var6[var4];
                                                var6 = _closure2_slot11;
                                                var7 = _closure2_slot4;
                                                var4 = var4.nodeRef;
                                                var4 = var7[var4];
                                                var4 = var4.report_type;
                                                var4 = var6.bind(var2)(var4);
                                                var4 = _closure2_slot2;
                                                if (!(var5 != var4)) {
                                                    _fun53679_ip = 177;
                                                    continue _fun53679
                                                }
                                            case 169:
                                                var3 = _closure2_slot2;
                                                var3 = var3.bind(var2)();
                                            case 177:
                                                return var2;
                                            case 180:
                                                return var1;
                                            case 183:
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
                            var4 = undefined;
                            var7 = var1.bind(var4)();
                            var1 = {};
                            var5 = {};
                            var3 = _closure1_slot6;
                            var5.name = var3;
                            var3 = {};
                            var3.node = var8;
                            var8 = new Array(0);
                            var3.history = var8;
                            var5.params = var3;
                            var3 = new Array(1);
                            var3[0] = var5;
                            var1.initialStack = var3;
                            var3 = _closure1_slot8;
                            var2 = {};
                            var5 = _closure2_slot4;
                            var2.nodeMap = var5;
                            var5 = _closure2_slot0;
                            var2.reportType = var5;
                            var5 = _closure2_slot10;
                            var2.reportSubType = var5;
                            var5 = _closure2_slot6;
                            var2.successNodeId = var5;
                            var5 = _closure2_slot7;
                            var2.failNodeId = var5;
                            var5 = {};
                            var5.onSubmit = var7;
                            var7 = _closure2_slot17;
                            var5.closeModal = var7;
                            var7 = _closure2_slot16;
                            var5.addOnCloseCallback = var7;
                            var6 = function(arg0) { // Original name: onNavigate, environment: var6
                                var0 = arg0;
                                var _closure4_slot0 = var0;
                                var2 = _closure2_slot13;
                                var0 = undefined;
                                var1 = function(arg0) { // Environment: var1
                                    var0 = new Array(1);
                                    var4 = arg0;
                                    var3 = 0;
                                    var5 = var0;
                                    var2 = arraySpread(var5, var4, var3);
                                    var1 = _closure4_slot0;
                                    var0[var2] = var1;
                                    var1 = 1;
                                    var1 = var2 + var1;
                                    return var0;
                                };
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var5.onNavigate = var6;
                            var2.callbacks = var5;
                            var5 = _closure2_slot8;
                            var2.reportId = var5;
                            var2 = var3.bind(var4)(var2);
                            var1.screens = var2;
                            return var1;
                        case 198:
                            var1 = _closure2_slot17;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                            var0 = {};
                            return var0;
                    }
                };
                var0 = var3.bind(var5)(var0, var2);
                var5 = var0.initialStack;
                var6 = var0.screens;
                var3 = null;
                var2 = var3 == var5;
                var0 = null;
                if (var2) {
                    _fun53670_ip = 452;
                    continue _fun53670
                }
            case 343:
                var2 = var3 == var6;
                var0 = null;
                if (var2) {
                    _fun53670_ip = 452;
                    continue _fun53670
                }
            case 352:
                var3 = _closure1_slot7;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 13;
                var1 = var9[var1];
                var1 = var8.bind(var4)(var1);
                var2 = var1.Navigator;
                var1 = {};
                var1.screens = var6;
                var1.initialRouteStack = var5;
                var5 = 7;
                var6 = var9[var5];
                var6 = var8.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5["13/7kX"];
                var5 = var6.bind(var7)(var5);
                var1.headerBackTitle = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 452:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 6460, 33, 5283, 5284, 1234, 6461, 4062, 4621, 6458, 6456, 5747, 2]);