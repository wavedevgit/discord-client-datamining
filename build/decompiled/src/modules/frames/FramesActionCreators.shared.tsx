// modules/frames/FramesActionCreators.shared.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _launchFrame, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun63772: for (var _fun63772_ip = 0;;) switch (_fun63772_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun63772_ip = 380;
                            continue _fun63772
                        }
                    case 10:
                        var1 = arg0;
                        var7 = var1.applicationId;
                        var6 = undefined;
                        var5 = undefined;
                        SaveGenerator(address = 26);
                    case 24:
                        return var6;
                    case 26:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun63772_ip = 377;
                            continue _fun63772
                        }
                    case 35:
                        var9 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var8 = 1;
                        var2 = var2[var8];
                        var10 = var9.bind(var6)(var2);
                        var9 = var10.dispatch;
                        var2 = {};
                        var11 = 'FRAME_LAUNCH_START';
                        var2.type = var11;
                        var11 = var7;
                        var2.applicationId = var11;
                        var2 = var9.bind(var10)(var2);
                    case 87: // try_start_0
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var2 = 2;
                        var2 = var10[var2];
                        var10 = var9.bind(var6)(var2);
                        var9 = var10.createProxyTicket;
                        var2 = var7;
                        var2 = var9.bind(var10)(var2);
                        SaveGenerator(address = 125);
                    case 123:
                        return var2;
                    case 125:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 9);
                        if (var9) {
                            _fun63772_ip = 233;
                            continue _fun63772
                        }
                    case 131:
                        var11 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var10 = 3;
                        var10 = var9[var10];
                        var12 = var11.bind(var6)(var10);
                        var10 = var12.leaveCurrentEmbeddedActivity;
                        var10 = var10.bind(var12)();
                        var10 = 4;
                        var10 = var9[var10];
                        var11 = var11.bind(var6)(var10);
                        var10 = var11.leaveCurrentFrame;
                        var10 = var10.bind(var11)();
                        var10 = _closure1_slot1;
                        var9 = var9[var8];
                        var11 = var10.bind(var6)(var9);
                        var10 = var11.dispatch;
                        var9 = {};
                        var12 = 'FRAME_LAUNCH';
                        var9.type = var12;
                        var12 = var7;
                        var9.applicationId = var12;
                        var9.proxyTicket = var2;
                        var9 = var10.bind(var11)(var9);
                    case 230: // try_end0
                        return var6;
                    case 233:
                        return var2;
                    case 236: // catch_target0
                        CatchBlockStart(arg_register = 11);
                        var3 = var11;
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var2 = 5;
                        var2 = var10[var2];
                        var2 = var9.bind(var6)(var2);
                        var5 = var2.bind(var6)();
                        var9 = _closure1_slot0;
                        var2 = 6;
                        var2 = var10[var2];
                        var10 = var9.bind(var6)(var2);
                        var9 = var10.getActivityLaunchErrorInfo;
                        var2 = var7;
                        var2 = var9.bind(var10)(var11, var2);
                        SaveGenerator(address = 300);
                    case 298:
                        return var2;
                    case 300:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 9);
                        if (var9) {
                            _fun63772_ip = 374;
                            continue _fun63772
                        }
                    case 306:
                        var10 = var5;
                        var9 = var10.showLaunchErrorModal;
                        var5 = var2.message;
                        var5 = var9.bind(var10)(var5);
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var8];
                        var6 = var5.bind(var6)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var8 = 'FRAME_LAUNCH_FAIL';
                        var4.type = var8;
                        var4.applicationId = var7;
                        var4.error = var3;
                        var4 = var5.bind(var6)(var4);
                        throw var3;
                    case 374:
                        return var2;
                    case 377:
                        return var1;
                    case 380:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot4 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot4 = var0;
    var0 = function() { // Original name: _refreshProxyTicket, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun63775: for (var _fun63775_ip = 0;;) switch (_fun63775_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun63775_ip = 542;
                            continue _fun63775
                        }
                    case 10:
                        var1 = arg0;
                        var6 = var1.applicationId;
                        var5 = undefined;
                        var4 = undefined;
                        SaveGenerator(address = 26);
                    case 24:
                        return var5;
                    case 26:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun63775_ip = 539;
                            continue _fun63775
                        }
                    case 35:
                        var8 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var7 = 1;
                        var2 = var2[var7];
                        var10 = var8.bind(var5)(var2);
                        var9 = var10.dispatch;
                        var2 = {
                            'type': 'FRAME_SET_PROXY_TICKET_REFRESHING',
                            'applicationId': null,
                            'refreshing': true
                        };
                        var8 = var6;
                        var2.applicationId = var8;
                        var8 = true;
                        var2 = var9.bind(var10)(var2);
                    case 93: // try_start_0 // try_start_1
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var2 = 2;
                        var2 = var10[var2];
                        var10 = var9.bind(var5)(var2);
                        var9 = var10.createProxyTicket;
                        var2 = var6;
                        var2 = var9.bind(var10)(var2);
                        SaveGenerator(address = 131);
                    case 129:
                        return var2;
                    case 131:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 9);
                        if (var9) {
                            _fun63775_ip = 241;
                            continue _fun63775
                        }
                    case 137:
                        var10 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var9 = var9[var7];
                        var11 = var10.bind(var5)(var9);
                        var10 = var11.dispatch;
                        var9 = {};
                        var12 = 'FRAME_UPDATE_PROXY_TICKET';
                        var9.type = var12;
                        var12 = var6;
                        var9.applicationId = var12;
                        var9.proxyTicket = var2;
                        var9 = var10.bind(var11)(var9);
                    case 188: // try_end0 // try_end1
                        var10 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var9 = var9[var7];
                        var11 = var10.bind(var5)(var9);
                        var10 = var11.dispatch;
                        var9 = {
                            'type': 'FRAME_SET_PROXY_TICKET_REFRESHING',
                            'applicationId': null,
                            'refreshing': false
                        };
                        var12 = var6;
                        var9.applicationId = var12;
                        var9 = var10.bind(var11)(var9);
                        return var8;
                    case 241:
                        var9 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var8 = var8[var7];
                        var10 = var9.bind(var5)(var8);
                        var9 = var10.dispatch;
                        var8 = {
                            'type': 'FRAME_SET_PROXY_TICKET_REFRESHING',
                            'applicationId': null,
                            'refreshing': false
                        };
                        var11 = var6;
                        var8.applicationId = var11;
                        var8 = var9.bind(var10)(var8);
                        return var2;
                    case 294: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register = 10);
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var2 = 5;
                        var2 = var9[var2];
                        var2 = var8.bind(var5)(var2);
                        var4 = var2.bind(var5)();
                        var8 = _closure1_slot0;
                        var2 = 6;
                        var2 = var9[var2];
                        var9 = var8.bind(var5)(var2);
                        var8 = var9.getActivityLaunchErrorInfo;
                        var2 = var6;
                        var2 = var8.bind(var9)(var10, var2);
                        SaveGenerator(address = 355);
                    case 353:
                        return var2;
                    case 355:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 8);
                        if (var8) {
                            _fun63775_ip = 435;
                            continue _fun63775
                        }
                    case 361:
                        var9 = var4;
                        var8 = var9.showLaunchErrorModal;
                        var4 = var2.message;
                        var4 = var8.bind(var9)(var4);
                    case 380: // try_end2
                        var8 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var7];
                        var10 = var8.bind(var5)(var4);
                        var9 = var10.dispatch;
                        var8 = {
                            'type': 'FRAME_SET_PROXY_TICKET_REFRESHING',
                            'applicationId': null,
                            'refreshing': false
                        };
                        var4 = var6;
                        var8.applicationId = var4;
                        var4 = false;
                        var8 = var9.bind(var10)(var8);
                        return var4;
                    case 435:
                        var8 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var7];
                        var9 = var8.bind(var5)(var4);
                        var8 = var9.dispatch;
                        var4 = {
                            'type': 'FRAME_SET_PROXY_TICKET_REFRESHING',
                            'applicationId': null,
                            'refreshing': false
                        };
                        var10 = var6;
                        var4.applicationId = var10;
                        var4 = var8.bind(var9)(var4);
                        return var2;
                    case 488: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 2);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var7];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {
                            'type': 'FRAME_SET_PROXY_TICKET_REFRESHING',
                            'applicationId': null,
                            'refreshing': false
                        };
                        var3.applicationId = var6;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
                    case 539:
                        return var1;
                    case 542:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
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
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/frames/FramesActionCreators.shared.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: launchFrame, environment: var1
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.launchFrame = var3;
    var3 = function(arg0) { // Original name: stopFrame, environment: var1
        var0 = arg0;
        var4 = var0.applicationId;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var5 = 'FRAME_STOP';
        var1.type = var5;
        var1.applicationId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.stopFrame = var3;
    var3 = function(arg0) { // Original name: updateFrameLayoutMode, environment: var1
        var0 = arg0;
        var5 = var0.applicationId;
        var4 = var0.layoutMode;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var6 = 'FRAME_UPDATE_LAYOUT_MODE';
        var1.type = var6;
        var1.applicationId = var5;
        var1.layoutMode = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateFrameLayoutMode = var3;
    var3 = function(arg0) { // Original name: updateFramePanelMode, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'FRAME_SET_PANEL_MODE';
        var1.type = var4;
        var4 = arg0;
        var1.activityPanelMode = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateFramePanelMode = var3;
    var1 = function() { // Original name: refreshProxyTicket, environment: var1
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.refreshProxyTicket = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 806, 7875, 7904, 7878, 7905, 7920, 2]);