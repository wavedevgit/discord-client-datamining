// modules/calls/native/usePrivateChannelCall.tsx
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
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/calls/native/usePrivateChannelCall.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1, arg2) { // Original name: usePrivateChannelCall, environment: var1
        var7 = arg0;
        var6 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var _closure2_slot2 = var5;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 3;
        var0 = var4[var0];
        var8 = undefined;
        var10 = var3.bind(var8)(var0);
        var9 = var10.useStateFromStoresObject;
        var0 = _closure1_slot5;
        var4 = new Array(1);
        var4[0] = var0;
        var3 = new Array(2);
        var3[0] = var6;
        var3[1] = var7;
        var0 = function() { // Environment: var1
            _fun92016: for (var _fun92016_ip = 0;;) switch (_fun92016_ip) {
                case 0:
                    var4 = _closure1_slot5;
                    var3 = var4.getChannel;
                    var5 = var4.getDMFromUserId;
                    var0 = _closure2_slot0;
                    var0 = var5.bind(var4)(var0);
                    var5 = var3.bind(var4)(var0);
                    var0 = null;
                    if (!(var0 != var5)) {
                        _fun92016_ip = 121;
                        continue _fun92016
                    }
                case 41:
                    var0 = var5.isPrivate;
                    var0 = var0.bind(var5)();
                    if (!var0) {
                        _fun92016_ip = 121;
                        continue _fun92016
                    }
                case 54:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 5;
                    var0 = var4[var0];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var0);
                    var0 = _closure2_slot1;
                    var3 = var3.bind(var4)(var5, var0);
                    var0 = {};
                    var4 = var3.text;
                    var0.text = var4;
                    var4 = var3.accessibilityHint;
                    var0.accessibilityHint = var4;
                    var3 = var3.inCall;
                    var0.inCall = var3;
                    return var0;
                case 121:
                    var0 = {};
                    var3 = _closure2_slot1;
                    var9 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var7 = 4;
                    var5 = var4[var7];
                    var6 = undefined;
                    var5 = var9.bind(var6)(var5);
                    var8 = var5.intl;
                    var5 = var8.string;
                    var4 = var4[var7];
                    var4 = var9.bind(var6)(var4);
                    var4 = var4.t;
                    if (var3) {
                        _fun92016_ip = 189;
                        continue _fun92016
                    }
                case 176:
                    var3 = var4["EZgS+9"];
                    var3 = var5.bind(var8)(var3);
                    _fun92016_ip = 200;
                    continue _fun92016;
                case 189:
                    var4 = var4["7AWk50"];
                    var3 = var5.bind(var8)(var4);
                case 200:
                    var0.text = var3;
                    var1 = _closure2_slot1;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = var2[var7];
                    var3 = var5.bind(var6)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var2[var7];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.t;
                    if (var1) {
                        _fun92016_ip = 265;
                        continue _fun92016
                    }
                case 252:
                    var1 = var2.focH1t;
                    var1 = var3.bind(var4)(var1);
                    _fun92016_ip = 276;
                    continue _fun92016;
                case 265:
                    var2 = var2.oCqlGG;
                    var1 = var3.bind(var4)(var2);
                case 276:
                    var0.accessibilityHint = var1;
                    var1 = false;
                    var0.inCall = var1;
                    return var0;
            }
        };
        var4 = var9.bind(var10)(var4, var0, var3);
        var9 = var4.text;
        var3 = var4.accessibilityHint;
        var0 = {};
        var0.text = var9;
        var4 = var4.inCall;
        var0.inCall = var4;
        var0.accessibilityHint = var3;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = _closure1_slot3;
        var1 = function*() { // Environment: var1
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun92018: for (var _fun92018_ip = 0;;) switch (_fun92018_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun92018_ip = 199;
                            continue _fun92018
                        }
                    case 10:
                        var5 = _closure1_slot5;
                        var4 = var5.getChannel;
                        var6 = var5.getDMFromUserId;
                        var1 = _closure2_slot0;
                        var1 = var6.bind(var5)(var1);
                        var7 = var4.bind(var5)(var1);
                        var4 = null;
                        if (!(var4 == var7)) {
                            _fun92018_ip = 112;
                            continue _fun92018
                        }
                    case 51:
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 6;
                        var5 = var5[var1];
                        var1 = undefined;
                        var6 = var6.bind(var1)(var5);
                        var5 = var6.ensurePrivateChannel;
                        var1 = _closure2_slot0;
                        var1 = var5.bind(var6)(var1);
                        SaveGenerator(address = 92);
                    case 90:
                        return var1;
                    case 92:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun92018_ip = 196;
                            continue _fun92018
                        }
                    case 98:
                        var6 = _closure1_slot5;
                        var5 = var6.getChannel;
                        var7 = var5.bind(var6)(var1);
                    case 112:
                        var5 = var4 != var7;
                        if (!var5) {
                            _fun92018_ip = 129;
                            continue _fun92018
                        }
                    case 119:
                        var6 = var7.isPrivate;
                        var5 = var6.bind(var7)();
                    case 129:
                        if (!var5) {
                            _fun92018_ip = 173;
                            continue _fun92018
                        }
                    case 132:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 5;
                        var3 = var6[var3];
                        var6 = undefined;
                        var5 = var5.bind(var6)(var3);
                        var3 = _closure2_slot1;
                        var5 = var5.bind(var6)(var7, var3);
                        var3 = var5.onPress;
                        var3 = var3.bind(var5)();
                    case 173:
                        var3 = _closure2_slot2;
                        if (!(var4 != var3)) {
                            _fun92018_ip = 191;
                            continue _fun92018
                        }
                    case 181:
                        var3 = _closure2_slot2;
                        var2 = undefined;
                        var2 = var3.bind(var2)();
                    case 191:
                        var2 = undefined;
                        return var2;
                    case 196:
                        return var1;
                    case 199:
                        return var0;
                }
            };
            return var0;
        };
        var2 = var2.bind(var8)(var1);
        var1 = new Array(3);
        var1[0] = var7;
        var1[1] = var6;
        var1[2] = var5;
        var1 = var3.bind(var4)(var2, var1);
        var0.handlePress = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 1372, 566, 1234, 8961, 3904, 2]);