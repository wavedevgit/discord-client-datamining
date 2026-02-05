// modules/main_tabs_v2/native/tabs/messages/items/channel/useMessagesItemChannelWave.tsx
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
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot7 = var6;
    var6 = var3.ME;
    var _closure1_slot8 = var6;
    var3 = var3.Routes;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageSendLocation;
    var _closure1_slot10 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/tabs/messages/items/channel/useMessagesItemChannelWave.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun101413: for (var _fun101413_ip = 0;;) switch (_fun101413_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var6 = _closure1_slot5;
                var2 = var6.useState;
                var1 = false;
                var4 = var2.bind(var6)(var1);
                var2 = _closure1_slot4;
                var8 = undefined;
                var1 = 2;
                var2 = var2.bind(var8)(var4, var1);
                var1 = 0;
                var7 = var2[var1];
                var _closure2_slot1 = var7;
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot2 = var1;
                var4 = var6.useCallback;
                var2 = _closure1_slot3;
                var1 = function*() { // Environment: var5
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun101415: for (var _fun101415_ip = 0;;) switch (_fun101415_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun101415_ip = 410;
                                    continue _fun101415
                                }
                            case 10:
                                var2 = _closure2_slot1;
                                if (var2) {
                                    _fun101415_ip = 405;
                                    continue _fun101415
                                }
                            case 23:
                                var4 = _closure2_slot2;
                                var3 = undefined;
                                var2 = true;
                                var2 = var4.bind(var3)(var2);
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var4 = 6;
                                var4 = var7[var4];
                                var7 = var6.bind(var3)(var4);
                                var6 = var7.transitionTo;
                                var10 = _closure1_slot9;
                                var9 = var10.CHANNEL;
                                var8 = _closure1_slot8;
                                var4 = _closure2_slot0;
                                var4 = var4.id;
                                var4 = var9.bind(var10)(var8, var4);
                                var4 = var6.bind(var7)(var4);
                            case 99: // try_start_0
                                var6 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var4 = 7;
                                var4 = var7[var4];
                                var10 = var6.bind(var3)(var4);
                                var9 = var10.sendStickers;
                                var4 = _closure2_slot0;
                                var16 = var4.id;
                                var7 = {};
                                var4 = _closure1_slot10;
                                var4 = var4.SEND_WAVE;
                                var7.location = var4;
                                var15 = ['749054660769218631'];
                                var14 = '';
                                var17 = var10;
                                var13 = var7;
                                var4 = var17[var9](var16, var15, var14, var13, var12);
                                SaveGenerator(address = 178);
                            case 176:
                                return var4;
                            case 178:
                                ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                                if (var6) {
                                    _fun101415_ip = 189;
                                    continue _fun101415
                                }
                            case 184: // try_end0
                                _fun101415_ip = 341;
                                continue _fun101415;
                            case 189:
                                return var4;
                            case 192: // catch_target0
                                CatchBlockStart(arg_register = 6);
                                var5 = var6;
                                var6 = var6.ok;
                                var4 = var6;
                                if (var6) {
                                    _fun101415_ip = 224;
                                    continue _fun101415
                                }
                            case 209:
                                var6 = var5.status;
                                var5 = 429;
                                var4 = var5 !== var6;
                            case 224:
                                if (var4) {
                                    _fun101415_ip = 341;
                                    continue _fun101415
                                }
                            case 227:
                                var8 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var4 = 8;
                                var4 = var9[var4];
                                var6 = var8.bind(var3)(var4);
                                var5 = var6.open;
                                var4 = {};
                                var7 = 'HANDLE_WAVE_PRESS_TOAST';
                                var4.key = var7;
                                var12 = _closure1_slot0;
                                var7 = 9;
                                var10 = var9[var7];
                                var10 = var12.bind(var3)(var10);
                                var11 = var10.intl;
                                var10 = var11.string;
                                var7 = var9[var7];
                                var7 = var12.bind(var3)(var7);
                                var7 = var7.t;
                                var7 = var7.Whhv4w;
                                var7 = var10.bind(var11)(var7);
                                var4.content = var7;
                                var7 = 10;
                                var7 = var9[var7];
                                var7 = var8.bind(var3)(var7);
                                var4.icon = var7;
                                var4 = var5.bind(var6)(var4);
                            case 341:
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var4 = 11;
                                var4 = var6[var4];
                                var6 = var5.bind(var3)(var4);
                                var5 = var6.track;
                                var2 = _closure1_slot7;
                                var4 = var2.WAVE_CTA_CLICKED;
                                var2 = {};
                                var7 = 'Messages Tab';
                                var2.source = var7;
                                var2 = var5.bind(var6)(var4, var2);
                                var2 = _closure2_slot2;
                                var1 = false;
                                var1 = var2.bind(var3)(var1);
                            case 405:
                                var1 = undefined;
                                return var1;
                            case 410:
                                return var0;
                        }
                    };
                    return var0;
                };
                var2 = var2.bind(var8)(var1);
                var9 = var0.id;
                var1 = new Array(2);
                var1[0] = var9;
                var1[1] = var7;
                var1 = var4.bind(var6)(var2, var1);
                var2 = var0.isDM;
                var2 = var2.bind(var0)();
                if (!var2) {
                    _fun101413_ip = 134;
                    continue _fun101413
                }
            case 121:
                var4 = var0.isSystemDM;
                var4 = var4.bind(var0)();
                var2 = !var4;
            case 134:
                if (!var2) {
                    _fun101413_ip = 164;
                    continue _fun101413
                }
            case 137:
                var7 = var0.rawRecipients;
                var6 = var7.some;
                var4 = function(arg0) { // Environment: var5
                    var0 = arg0;
                    var0 = var0.bot;
                    return var0;
                };
                var4 = var6.bind(var7)(var4);
                var2 = !var4;
            case 164:
                var4 = null;
                var6 = null;
                if (!var2) {
                    _fun101413_ip = 181;
                    continue _fun101413
                }
            case 171:
                var7 = var0.getRecipientId;
                var6 = var7.bind(var0)();
            case 181:
                var _closure2_slot3 = var6;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 12;
                var6 = var9[var6];
                var11 = var7.bind(var8)(var6);
                var10 = var11.useStateFromStores;
                var12 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var12;
                var5 = function() { // Environment: var5
                    _fun101417: for (var _fun101417_ip = 0;;) switch (_fun101417_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun101417_ip = 38;
                                continue _fun101417
                            }
                        case 16:
                            var3 = _closure1_slot6;
                            var2 = var3.isFriend;
                            var1 = _closure2_slot3;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var6 = var10.bind(var11)(var6, var5);
                var13 = _closure1_slot1;
                var3 = 13;
                var3 = var9[var3];
                var10 = var13.bind(var8)(var3);
                var5 = var10.extractTimestamp;
                var3 = var0.id;
                var5 = var5.bind(var10)(var3);
                var3 = 14;
                var3 = var9[var3];
                var12 = var7.bind(var8)(var3);
                var11 = var12.isWithinInterval;
                var3 = 15;
                var10 = var9[var3];
                var10 = var13.bind(var8)(var10);
                var10 = var10.bind(var8)();
                var3 = var9[var3];
                var3 = var13.bind(var8)(var3);
                var5 = var3.bind(var8)(var5);
                var3 = 1814400000;
                var5 = var11.bind(var12)(var10, var5, var3);
                var3 = 16;
                var3 = var9[var3];
                var7 = var7.bind(var8)(var3);
                var3 = var7.useStrangerDangerWarning;
                var0 = var0.id;
                var3 = var3.bind(var7)(var0);
                var0 = {};
                if (!var2) {
                    _fun101413_ip = 364;
                    continue _fun101413
                }
            case 361:
                var2 = var6;
            case 364:
                if (!var2) {
                    _fun101413_ip = 374;
                    continue _fun101413
                }
            case 367:
                var6 = arg1;
                var2 = var4 == var6;
            case 374:
                if (!var2) {
                    _fun101413_ip = 380;
                    continue _fun101413
                }
            case 377:
                var2 = var5;
            case 380:
                if (!var2) {
                    _fun101413_ip = 387;
                    continue _fun101413
                }
            case 383:
                var2 = var4 == var3;
            case 387:
                var0.waveShouldShow = var2;
                var0.wavePressed = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 3100, 660, 1346, 1220, 6546, 3148, 1234, 10513, 795, 566, 21, 3132, 3045, 9832, 2]);