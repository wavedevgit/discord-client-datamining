// modules/app_launcher/native/base_components/CommandRowButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/base_components/CommandRowButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun107765: for (var _fun107765_ip = 0;;) switch (_fun107765_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.command;
                var _closure2_slot0 = var13;
                var8 = var0.context;
                var11 = var0.beforeExecuteCommand;
                var _closure2_slot1 = var11;
                var14 = var0.onExecuteCommand;
                var _closure2_slot2 = var14;
                var9 = var0.tryExecuteCommand;
                var _closure2_slot3 = var9;
                var10 = var0.sectionName;
                var _closure2_slot4 = var10;
                var4 = undefined;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var0 = var13.options;
                var1 = null;
                if (!(var1 == var0)) {
                    _fun107765_ip = 89;
                    continue _fun107765
                }
            case 85:
                var0 = new Array(0);
            case 89:
                var0 = var0.length;
                var3 = 0;
                var0 = var0 > var3;
                var7 = _closure1_slot4;
                var6 = var7.useState;
                var5 = false;
                var12 = var6.bind(var7)(var5);
                var6 = _closure1_slot3;
                var5 = 2;
                var5 = var6.bind(var4)(var12, var5);
                var6 = var5[var3];
                var3 = 1;
                var3 = var5[var3];
                _closure2_slot5 = var3;
                var5 = _closure1_slot0;
                var12 = _closure1_slot1;
                var3 = 4;
                var3 = var12[var3];
                var5 = var5.bind(var4)(var3);
                var3 = var5.useCommandContext;
                var12 = var3.bind(var5)(var8);
                _closure2_slot6 = var12;
                var8 = var7.useCallback;
                var5 = _closure1_slot2;
                var3 = function*() { // Environment: var2
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun107767: for (var _fun107767_ip = 0;;) switch (_fun107767_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun107767_ip = 245;
                                    continue _fun107767
                                }
                            case 10:
                                var3 = _closure2_slot5;
                                var4 = undefined;
                                var1 = true;
                                var1 = var3.bind(var4)(var1);
                                var1 = _closure2_slot1;
                                var5 = null;
                                if (!(var5 != var1)) {
                                    _fun107767_ip = 44;
                                    continue _fun107767
                                }
                            case 36:
                                var1 = _closure2_slot1;
                                var1 = var1.bind(var4)();
                            case 44: // try_start_0
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot1;
                                var1 = 5;
                                var1 = var9[var1];
                                var6 = var8.bind(var4)(var1);
                                var3 = var6.executeAppLauncherCommand;
                                var1 = {};
                                var13 = _closure2_slot0;
                                var1.command = var13;
                                var7 = 6;
                                var7 = var9[var7];
                                var12 = var8.bind(var4)(var7);
                                var11 = var12.parseOptionValuesForSend;
                                var7 = _closure2_slot6;
                                var10 = var7.channel;
                                var7 = {};
                                var7 = var11.bind(var12)(var10, var13, var7);
                                var1.optionValues = var7;
                                var7 = _closure2_slot6;
                                var1.context = var7;
                                var7 = _closure2_slot4;
                                var1.sectionName = var7;
                                var7 = 7;
                                var7 = var9[var7];
                                var7 = var8.bind(var4)(var7);
                                var7 = var7.CommandOrigin;
                                var7 = var7.APP_LAUNCHER_APPLICATION_VIEW;
                                var1.commandOrigin = var7;
                                var1 = var3.bind(var6)(var1);
                                SaveGenerator(address = 180);
                            case 178:
                                return var1;
                            case 180:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun107767_ip = 216;
                                    continue _fun107767
                                }
                            case 186:
                                var3 = _closure2_slot2;
                                if (!(var5 != var3)) {
                                    _fun107767_ip = 202;
                                    continue _fun107767
                                }
                            case 194:
                                var3 = _closure2_slot2;
                                var3 = var3.bind(var4)();
                            case 202: // try_end0
                                var5 = _closure2_slot5;
                                var3 = false;
                                var3 = var5.bind(var4)(var3);
                                return var4;
                            case 216:
                                var5 = _closure2_slot5;
                                var3 = false;
                                var3 = var5.bind(var4)(var3);
                                return var1;
                            case 230: // catch_target0
                                CatchBlockStart(arg_register = 1);
                                var3 = _closure2_slot5;
                                var2 = false;
                                var2 = var3.bind(var4)(var2);
                                throw var1;
                            case 245:
                                return var0;
                        }
                    };
                    return var0;
                };
                var5 = var5.bind(var4)(var3);
                var3 = new Array(5);
                var3[0] = var14;
                var3[1] = var13;
                var3[2] = var12;
                var3[3] = var11;
                var3[4] = var10;
                var8 = var8.bind(var7)(var5, var3);
                _closure2_slot7 = var8;
                var5 = var7.useCallback;
                var3 = new Array(2);
                var3[0] = var9;
                var3[1] = var8;
                var2 = function() { // Environment: var2
                    _fun107768: for (var _fun107768_ip = 0;;) switch (_fun107768_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun107768_ip = 25;
                                continue _fun107768
                            }
                        case 13:
                            var2 = _closure2_slot7;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            _fun107768_ip = 40;
                            continue _fun107768;
                        case 25:
                            var2 = _closure2_slot3;
                            var1 = _closure2_slot7;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 40:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = var5.bind(var7)(var2, var3);
                var3 = _closure1_slot5;
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                if (var0) {
                    _fun107765_ip = 428;
                    continue _fun107765
                }
            case 285:
                var0 = 9;
                var0 = var5[var0];
                var0 = var2.bind(var4)(var0);
                var1 = var0.Button;
                var0 = {
                    'size': 'sm',
                    'text': null,
                    'onPress': null,
                    'icon': null,
                    'iconPosition': 'end',
                    'grow': false,
                    'variant': 'tertiary'
                };
                var9 = 'sm';
                var8 = 10;
                var10 = var5[var8];
                var10 = var2.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var8 = var5[var8];
                var8 = var2.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.TXNS7S;
                var8 = var10.bind(var11)(var8);
                var0.text = var8;
                var0.onPress = var7;
                var7 = 11;
                var7 = var5[var7];
                var7 = var2.bind(var4)(var7);
                var8 = var7.SendMessageIcon;
                var7 = {};
                var7.size = var9;
                var7 = var3.bind(var4)(var8, var7);
                var0.icon = var7;
                var0.disabled = var6;
                var0 = var3.bind(var4)(var1, var0);
                _fun107765_ip = 454;
                continue _fun107765;
            case 428:
                var1 = 8;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.TableRowArrow;
                var1 = {};
                var0 = var3.bind(var4)(var2, var1);
            case 454:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 33, 11648, 4673, 11704, 4547, 4906, 4084, 1234, 3256, 2]);