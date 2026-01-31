// modules/voice_calls/native/components/OngoingCallStatusLabel.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_calls/native/components/OngoingCallStatusLabel.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        _fun69381: for (var _fun69381_ip = 0;;) switch (_fun69381_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.style;
                var4 = var0.channel;
                var2 = var0.voiceState;
                var1 = var0.useAllAloneText;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun69381_ip = 33;
                    continue _fun69381
                }
            case 31:
                var1 = true;
            case 33:
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun69382: for (var _fun69382_ip = 0;;) switch (_fun69382_ip) {
                        case 0:
                            var11 = arg0;
                            var5 = arg1;
                            var1 = arguments[2];
                            var _closure3_slot0 = var11;
                            var6 = undefined;
                            if (!(var1 === var6)) {
                                _fun69382_ip = 23;
                                continue _fun69382
                            }
                        case 21:
                            var1 = true;
                        case 23:
                            var _closure3_slot1 = var6;
                            var4 = _closure1_slot3;
                            var3 = var4.getId;
                            var12 = var3.bind(var4)();
                            _closure3_slot1 = var12;
                            var8 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 5;
                            var3 = var4[var3];
                            var10 = var8.bind(var6)(var3);
                            var9 = var10.useStateFromStores;
                            var3 = _closure1_slot5;
                            var7 = new Array(2);
                            var7[0] = var3;
                            var3 = _closure1_slot4;
                            var7[1] = var3;
                            var3 = new Array(2);
                            var3[0] = var12;
                            var3[1] = var11;
                            var0 = function() { // Environment: var0
                                _fun69383: for (var _fun69383_ip = 0;;) switch (_fun69383_ip) {
                                    case 0:
                                        var0 = _closure3_slot0;
                                        var2 = null;
                                        if (!(var2 != var0)) {
                                            _fun69383_ip = 147;
                                            continue _fun69383
                                        }
                                    case 16:
                                        var0 = global;
                                        var6 = var0.Object;
                                        var5 = var6.values;
                                        var8 = _closure1_slot5;
                                        var7 = var8.getVoiceStatesForChannel;
                                        var0 = _closure3_slot0;
                                        var3 = var0.id;
                                        var3 = var7.bind(var8)(var3);
                                        var3 = var5.bind(var6)(var3);
                                        var5 = _closure1_slot4;
                                        var4 = var5.getCall;
                                        var0 = var0.id;
                                        var0 = var4.bind(var5)(var0);
                                        var2 = var2 != var0;
                                        if (!var2) {
                                            _fun69383_ip = 105;
                                            continue _fun69383
                                        }
                                    case 88:
                                        var0 = var0.ringing;
                                        var4 = var0.length;
                                        var0 = 0;
                                        var2 = var4 > var0;
                                    case 105:
                                        var0 = !var2;
                                        if (var2) {
                                            _fun69383_ip = 123;
                                            continue _fun69383
                                        }
                                    case 111:
                                        var4 = var3.length;
                                        var2 = 1;
                                        var0 = var2 === var4;
                                    case 123:
                                        if (!var0) {
                                            _fun69383_ip = 145;
                                            continue _fun69383
                                        }
                                    case 126:
                                        var2 = 0;
                                        var2 = var3[var2];
                                        var2 = var2.userId;
                                        var1 = _closure3_slot1;
                                        var0 = var2 === var1;
                                    case 145:
                                        return var0;
                                    case 147:
                                        var0 = false;
                                        return var0;
                                }
                            };
                            var3 = var9.bind(var10)(var7, var0, var3);
                            var7 = 6;
                            var0 = var4[var7];
                            var0 = var8.bind(var6)(var0);
                            var10 = var0.intl;
                            var9 = var10.string;
                            var0 = var4[var7];
                            var0 = var8.bind(var6)(var0);
                            var0 = var0.t;
                            var0 = var0["1zFMqU"];
                            var0 = var9.bind(var10)(var0);
                            var9 = 7;
                            var4 = var4[var9];
                            var4 = var8.bind(var6)(var4);
                            var4 = var4.CallStates;
                            var4 = var4.DISCONNECTING;
                            if (!(var4 !== var5)) {
                                _fun69382_ip = 419;
                                continue _fun69382
                            }
                        case 199:
                            var8 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var9];
                            var4 = var8.bind(var6)(var4);
                            var4 = var4.CallStates;
                            var4 = var4.CONNECTED;
                            if (!(var4 !== var5)) {
                                _fun69382_ip = 419;
                                continue _fun69382
                            }
                        case 235:
                            var8 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var9];
                            var4 = var8.bind(var6)(var4);
                            var4 = var4.CallStates;
                            var4 = var4.RINGING;
                            if (!(var4 !== var5)) {
                                _fun69382_ip = 363;
                                continue _fun69382
                            }
                        case 268:
                            var8 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var9];
                            var4 = var8.bind(var6)(var4);
                            var4 = var4.CallStates;
                            var4 = var4.DISCONNECTED;
                            if (!(var4 === var5)) {
                                _fun69382_ip = 536;
                                continue _fun69382
                            }
                        case 304:
                            var9 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var5 = var4[var7];
                            var5 = var9.bind(var6)(var5);
                            var8 = var5.intl;
                            var5 = var8.string;
                            var4 = var4[var7];
                            var4 = var9.bind(var6)(var4);
                            var4 = var4.t;
                            var4 = var4["w//7ET"];
                            var0 = var5.bind(var8)(var4);
                            _fun69382_ip = 536;
                            continue _fun69382;
                        case 363:
                            var9 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var5 = var4[var7];
                            var5 = var9.bind(var6)(var5);
                            var8 = var5.intl;
                            var5 = var8.string;
                            var4 = var4[var7];
                            var4 = var9.bind(var6)(var4);
                            var4 = var4.t;
                            var4 = var4.Xuzre8;
                            var0 = var5.bind(var8)(var4);
                            _fun69382_ip = 536;
                            continue _fun69382;
                        case 419:
                            if (!var3) {
                                _fun69382_ip = 425;
                                continue _fun69382
                            }
                        case 422:
                            if (var1) {
                                _fun69382_ip = 479;
                                continue _fun69382
                            }
                        case 425:
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var3 = var1[var7];
                            var3 = var5.bind(var6)(var3);
                            var4 = var3.intl;
                            var3 = var4.string;
                            var1 = var1[var7];
                            var1 = var5.bind(var6)(var1);
                            var1 = var1.t;
                            var1 = var1["NGg/fm"];
                            var1 = var3.bind(var4)(var1);
                            _fun69382_ip = 533;
                            continue _fun69382;
                        case 479:
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var3 = var2[var7];
                            var3 = var5.bind(var6)(var3);
                            var4 = var3.intl;
                            var3 = var4.string;
                            var2 = var2[var7];
                            var2 = var5.bind(var6)(var2);
                            var2 = var2.t;
                            var2 = var2.xNeSms;
                            var1 = var3.bind(var4)(var2);
                        case 533:
                            var0 = var1;
                        case 536:
                            return var0;
                    }
                };
                var4 = var0.bind(var3)(var4, var2, var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 8;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.style = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1216, 3434, 3480, 33, 566, 1234, 8648, 1295, 2]);