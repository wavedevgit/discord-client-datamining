// utils/native/FilePickerUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun75446: for (var _fun75446_ip = 0;;) switch (_fun75446_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arguments[0];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun75446_ip = 452;
                            continue _fun75446
                        }
                    case 13:
                        var2 = undefined;
                        if (!(var1 === var2)) {
                            _fun75446_ip = 21;
                            continue _fun75446
                        }
                    case 19:
                        var1 = {};
                    case 21:
                        var1 = var1.pickMultiple;
                        if (!(var1 === var2)) {
                            _fun75446_ip = 33;
                            continue _fun75446
                        }
                    case 31:
                        var1 = true;
                    case 33:
                        var7 = var1;
                        SaveGenerator(address = 40);
                    case 38:
                        return var2;
                    case 40:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun75446_ip = 449;
                            continue _fun75446
                        }
                    case 49: // try_start_0
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var3 = 2;
                        var3 = var9[var3];
                        var5 = var6.bind(var2)(var3);
                        var4 = var5.pick;
                        var3 = 3;
                        var3 = var9[var3];
                        var6 = var6.bind(var2)(var3);
                        var3 = var6.isIOS;
                        var3 = var3.bind(var6)();
                        var6 = {};
                        var6.allowMultiSelection = var7;
                        if (var3) {
                            _fun75446_ip = 125;
                            continue _fun75446
                        }
                    case 110:
                        var3 = 'import';
                        var6.mode = var3;
                        var3 = var6;
                        _fun75446_ip = 136;
                        continue _fun75446;
                    case 125:
                        var7 = 'open';
                        var6.mode = var7;
                        var3 = var6;
                    case 136:
                        var3 = var4.bind(var5)(var3);
                        SaveGenerator(address = 145);
                    case 143:
                        return var3;
                    case 145:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun75446_ip = 154;
                            continue _fun75446
                        }
                    case 151: // try_end0
                        return var3;
                    case 154:
                        return var3;
                    case 157: // catch_target0
                        CatchBlockStart(arg_register = 6);
                        var8 = var6;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var7 = 2;
                        var4 = var4[var7];
                        var5 = var5.bind(var2)(var4);
                        var4 = var5.isErrorWithCode;
                        var4 = var4.bind(var5)(var6);
                        if (!var4) {
                            _fun75446_ip = 243;
                            continue _fun75446
                        }
                    case 199:
                        var4 = var8;
                        var5 = var4.code;
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var7];
                        var4 = var6.bind(var2)(var4);
                        var4 = var4.errorCodes;
                        var4 = var4.OPERATION_CANCELED;
                        if (!(var5 !== var4)) {
                            _fun75446_ip = 446;
                            continue _fun75446
                        }
                    case 243:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var4 = 4;
                        var4 = var10[var4];
                        var7 = var9.bind(var2)(var4);
                        var6 = var7.trackWithMetadata;
                        var4 = _closure1_slot4;
                        var5 = var4.MOBILE_FILE_PICKER_ERROR;
                        var4 = {};
                        var11 = global;
                        var12 = var11.JSON;
                        var11 = var12.stringify;
                        var8 = var11.bind(var12)(var8);
                        var4.error_message = var8;
                        var4 = var6.bind(var7)(var5, var4);
                        var4 = _closure1_slot1;
                        var3 = 5;
                        var3 = var10[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.show;
                        var3 = {};
                        var6 = 6;
                        var7 = var10[var6];
                        var7 = var9.bind(var2)(var7);
                        var11 = var7.intl;
                        var8 = var11.string;
                        var7 = var10[var6];
                        var7 = var9.bind(var2)(var7);
                        var7 = var7.t;
                        var7 = var7.rWHepR;
                        var7 = var8.bind(var11)(var7);
                        var3.title = var7;
                        var7 = var10[var6];
                        var7 = var9.bind(var2)(var7);
                        var8 = var7.intl;
                        var7 = var8.string;
                        var6 = var10[var6];
                        var6 = var9.bind(var2)(var6);
                        var6 = var6.t;
                        var6 = var6.fZRH9P;
                        var6 = var7.bind(var8)(var6);
                        var3.body = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 446:
                        return var2;
                    case 449:
                        return var1;
                    case 452:
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot4 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/native/FilePickerUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.handleDocumentSelection = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 9519, 478, 4266, 3895, 1234, 2]);