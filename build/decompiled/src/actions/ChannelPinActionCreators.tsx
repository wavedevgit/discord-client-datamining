// actions/ChannelPinActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var6 = var5[var1];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.FetchState;
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.AbortCodes;
    var _closure1_slot6 = var6;
    var6 = var1.Endpoints;
    var _closure1_slot7 = var6;
    var1 = var1.MAX_PINS_PER_CHANNEL;
    var _closure1_slot8 = var1;
    var1 = {};
    var6 = function(arg0, arg1) { // Original name: pinMessage, environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun75635: for (var _fun75635_ip = 0;;) switch (_fun75635_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun75635_ip = 180;
                            continue _fun75635
                        }
                    case 12:
                        var2 = undefined;
                        var _closure4_slot0 = var2;
                        var1 = _closure2_slot0;
                        var10 = var1.id;
                        var4 = var1.name;
                        _closure4_slot0 = var4;
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 3;
                        var4 = var6[var4];
                        var5 = var5.bind(var2)(var4);
                        var4 = var5.unarchiveThreadIfNecessary;
                        var1 = var1.id;
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 82);
                    case 80:
                        return var1;
                    case 82:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun75635_ip = 177;
                            continue _fun75635
                        }
                    case 88:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 4;
                        var4 = var6[var4];
                        var4 = var5.bind(var2)(var4);
                        var6 = var4.HTTP;
                        var5 = var6.put;
                        var4 = {};
                        var9 = _closure1_slot7;
                        var8 = var9.PIN;
                        var7 = _closure2_slot1;
                        var7 = var8.bind(var9)(var10, var7);
                        var4.url = var7;
                        var7 = true;
                        var4.rejectWithError = var7;
                        var5 = var5.bind(var6)(var4);
                        var4 = var5.catch;
                        var3 = function(arg0) { // Environment: var3
                            _fun75636: for (var _fun75636_ip = 0;;) switch (_fun75636_ip) {
                                case 0:
                                    var9 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 5;
                                    var2 = var1[var0];
                                    var0 = undefined;
                                    var2 = var9.bind(var0)(var2);
                                    var4 = var2.APIError;
                                    var2 = var4.prototype;
                                    var3 = Object.create(var2, {
                                        constructor: {
                                            value: var4
                                        }
                                    });
                                    var13 = arg0;
                                    var14 = var3;
                                    var2 = new var14[var4](var13, var12);
                                    var4 = var2 instanceof Object ? var2 : var3;
                                    var2 = var4.code;
                                    var8 = 6;
                                    var3 = var1[var8];
                                    var3 = var9.bind(var0)(var3);
                                    var7 = var3.intl;
                                    var6 = var7.string;
                                    var3 = var1[var8];
                                    var3 = var9.bind(var0)(var3);
                                    var3 = var3.t;
                                    var3 = var3.j2d6Km;
                                    var6 = var6.bind(var7)(var3);
                                    var3 = var1[var8];
                                    var3 = var9.bind(var0)(var3);
                                    var7 = var3.intl;
                                    var3 = var7.string;
                                    var1 = var1[var8];
                                    var1 = var9.bind(var0)(var1);
                                    var1 = var1.t;
                                    var1 = var1.fEptJP;
                                    var1 = var3.bind(var7)(var1);
                                    var3 = null;
                                    var7 = var6;
                                    var6 = var1;
                                    if (!(var3 != var2)) {
                                        _fun75636_ip = 1104;
                                        continue _fun75636
                                    }
                                case 165:
                                    var1 = _closure1_slot6;
                                    var1 = var1.TOO_MANY_PINS_IN_CHANNEL;
                                    if (!(var1 !== var2)) {
                                        _fun75636_ip = 921;
                                        continue _fun75636
                                    }
                                case 182:
                                    var1 = _closure1_slot6;
                                    var1 = var1.INVALID_ACCESS;
                                    if (!(var1 !== var2)) {
                                        _fun75636_ip = 816;
                                        continue _fun75636
                                    }
                                case 199:
                                    var1 = _closure1_slot6;
                                    var1 = var1.INVALID_PIN_MESSAGE_CHANNEL;
                                    if (!(var1 !== var2)) {
                                        _fun75636_ip = 711;
                                        continue _fun75636
                                    }
                                case 216:
                                    var1 = _closure1_slot6;
                                    var1 = var1.INVALID_THREAD_ARCHIVE_STATE;
                                    if (!(var1 !== var2)) {
                                        _fun75636_ip = 606;
                                        continue _fun75636
                                    }
                                case 233:
                                    var1 = _closure1_slot6;
                                    var1 = var1.INVALID_ACTION_SYSTEM_MESSAGE;
                                    if (!(var1 !== var2)) {
                                        _fun75636_ip = 501;
                                        continue _fun75636
                                    }
                                case 250:
                                    var1 = _closure1_slot6;
                                    var1 = var1.UNKNOWN_MESSAGE;
                                    if (!(var1 !== var2)) {
                                        _fun75636_ip = 396;
                                        continue _fun75636
                                    }
                                case 267:
                                    var10 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var2 = var1[var8];
                                    var2 = var10.bind(var0)(var2);
                                    var9 = var2.intl;
                                    var2 = var9.string;
                                    var1 = var1[var8];
                                    var1 = var10.bind(var0)(var1);
                                    var1 = var1.t;
                                    var1 = var1.HI88Q3;
                                    var2 = var2.bind(var9)(var1);
                                    var1 = var4.getAnyErrorMessage;
                                    var1 = var1.bind(var4)();
                                    if (!(var3 == var1)) {
                                        _fun75636_ip = 385;
                                        continue _fun75636
                                    }
                                case 333:
                                    var10 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var4 = var3[var8];
                                    var4 = var10.bind(var0)(var4);
                                    var9 = var4.intl;
                                    var4 = var9.string;
                                    var3 = var3[var8];
                                    var3 = var10.bind(var0)(var3);
                                    var3 = var3.t;
                                    var3 = var3.fEptJP;
                                    var1 = var4.bind(var9)(var3);
                                case 385:
                                    var6 = var1;
                                    var7 = var2;
                                    _fun75636_ip = 1104;
                                    continue _fun75636;
                                case 396:
                                    var9 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var2 = var1[var8];
                                    var2 = var9.bind(var0)(var2);
                                    var4 = var2.intl;
                                    var3 = var4.string;
                                    var2 = var1[var8];
                                    var2 = var9.bind(var0)(var2);
                                    var2 = var2.t;
                                    var2 = var2.fkqPro;
                                    var7 = var3.bind(var4)(var2);
                                    var3 = var1[var8];
                                    var3 = var9.bind(var0)(var3);
                                    var4 = var3.intl;
                                    var3 = var4.string;
                                    var1 = var1[var8];
                                    var1 = var9.bind(var0)(var1);
                                    var1 = var1.t;
                                    var1 = var1.H6fRIg;
                                    var6 = var3.bind(var4)(var1);
                                    _fun75636_ip = 1104;
                                    continue _fun75636;
                                case 501:
                                    var9 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var2 = var1[var8];
                                    var2 = var9.bind(var0)(var2);
                                    var4 = var2.intl;
                                    var3 = var4.string;
                                    var2 = var1[var8];
                                    var2 = var9.bind(var0)(var2);
                                    var2 = var2.t;
                                    var2 = var2["zV0/FC"];
                                    var7 = var3.bind(var4)(var2);
                                    var3 = var1[var8];
                                    var3 = var9.bind(var0)(var3);
                                    var4 = var3.intl;
                                    var3 = var4.string;
                                    var1 = var1[var8];
                                    var1 = var9.bind(var0)(var1);
                                    var1 = var1.t;
                                    var1 = var1.C4a7xI;
                                    var6 = var3.bind(var4)(var1);
                                    _fun75636_ip = 1104;
                                    continue _fun75636;
                                case 606:
                                    var9 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var2 = var1[var8];
                                    var2 = var9.bind(var0)(var2);
                                    var4 = var2.intl;
                                    var3 = var4.string;
                                    var2 = var1[var8];
                                    var2 = var9.bind(var0)(var2);
                                    var2 = var2.t;
                                    var2 = var2.fu6Lbl;
                                    var7 = var3.bind(var4)(var2);
                                    var3 = var1[var8];
                                    var3 = var9.bind(var0)(var3);
                                    var4 = var3.intl;
                                    var3 = var4.string;
                                    var1 = var1[var8];
                                    var1 = var9.bind(var0)(var1);
                                    var1 = var1.t;
                                    var1 = var1.FmrcZM;
                                    var6 = var3.bind(var4)(var1);
                                    _fun75636_ip = 1104;
                                    continue _fun75636;
                                case 711:
                                    var9 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var2 = var1[var8];
                                    var2 = var9.bind(var0)(var2);
                                    var4 = var2.intl;
                                    var3 = var4.string;
                                    var2 = var1[var8];
                                    var2 = var9.bind(var0)(var2);
                                    var2 = var2.t;
                                    var2 = var2["Q5G6+m"];
                                    var7 = var3.bind(var4)(var2);
                                    var3 = var1[var8];
                                    var3 = var9.bind(var0)(var3);
                                    var4 = var3.intl;
                                    var3 = var4.string;
                                    var1 = var1[var8];
                                    var1 = var9.bind(var0)(var1);
                                    var1 = var1.t;
                                    var1 = var1["5hgPfC"];
                                    var6 = var3.bind(var4)(var1);
                                    _fun75636_ip = 1104;
                                    continue _fun75636;
                                case 816:
                                    var9 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var2 = var1[var8];
                                    var2 = var9.bind(var0)(var2);
                                    var4 = var2.intl;
                                    var3 = var4.string;
                                    var2 = var1[var8];
                                    var2 = var9.bind(var0)(var2);
                                    var2 = var2.t;
                                    var2 = var2["25gfQX"];
                                    var7 = var3.bind(var4)(var2);
                                    var3 = var1[var8];
                                    var3 = var9.bind(var0)(var3);
                                    var4 = var3.intl;
                                    var3 = var4.string;
                                    var1 = var1[var8];
                                    var1 = var9.bind(var0)(var1);
                                    var1 = var1.t;
                                    var1 = var1.QNnTwN;
                                    var6 = var3.bind(var4)(var1);
                                    _fun75636_ip = 1104;
                                    continue _fun75636;
                                case 921:
                                    var4 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var2 = var1[var8];
                                    var2 = var4.bind(var0)(var2);
                                    var3 = var2.intl;
                                    var2 = var3.string;
                                    var1 = var1[var8];
                                    var1 = var4.bind(var0)(var1);
                                    var1 = var1.t;
                                    var1 = var1.HI88Q3;
                                    var2 = var2.bind(var3)(var1);
                                    var3 = _closure2_slot0;
                                    var1 = var3.isPrivate;
                                    var1 = var1.bind(var3)();
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var9 = var3[var8];
                                    var9 = var4.bind(var0)(var9);
                                    var10 = var9.intl;
                                    var9 = var10.formatToPlainString;
                                    var3 = var3[var8];
                                    var3 = var4.bind(var0)(var3);
                                    var3 = var3.t;
                                    if (var1) {
                                        _fun75636_ip = 1073;
                                        continue _fun75636
                                    }
                                case 1034:
                                    var4 = var3.NnO1S5;
                                    var1 = {};
                                    var11 = _closure1_slot8;
                                    var1.maxPins = var11;
                                    var11 = _closure4_slot0;
                                    var1.channelName = var11;
                                    var1 = var9.bind(var10)(var4, var1);
                                    _fun75636_ip = 1098;
                                    continue _fun75636;
                                case 1073:
                                    var4 = var3.Q89oQU;
                                    var3 = {};
                                    var11 = _closure1_slot8;
                                    var3.maxPins = var11;
                                    var1 = var9.bind(var10)(var4, var3);
                                case 1098:
                                    var6 = var1;
                                    var7 = var2;
                                case 1104:
                                    var2 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var1 = 7;
                                    var1 = var4[var1];
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.show;
                                    var1 = {};
                                    var1.title = var7;
                                    var1.body = var6;
                                    var7 = _closure1_slot0;
                                    var5 = var4[var8];
                                    var5 = var7.bind(var0)(var5);
                                    var6 = var5.intl;
                                    var5 = var6.string;
                                    var4 = var4[var8];
                                    var4 = var7.bind(var0)(var4);
                                    var4 = var4.t;
                                    var4 = var4.BddRzS;
                                    var4 = var5.bind(var6)(var4);
                                    var1.confirmText = var4;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                            }
                        };
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 177:
                        return var1;
                    case 180:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.pinMessage = var6;
    var6 = function(arg0, arg1) { // Original name: unpinMessage, environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun75639: for (var _fun75639_ip = 0;;) switch (_fun75639_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun75639_ip = 175;
                            continue _fun75639
                        }
                    case 10:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 3;
                        var1 = var2[var1];
                        var2 = undefined;
                        var4 = var3.bind(var2)(var1);
                        var3 = var4.unarchiveThreadIfNecessary;
                        var1 = _closure2_slot0;
                        var1 = var1.id;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 62);
                    case 60:
                        return var1;
                    case 62:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun75639_ip = 172;
                            continue _fun75639
                        }
                    case 68:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 4;
                        var3 = var5[var3];
                        var3 = var4.bind(var2)(var3);
                        var5 = var3.HTTP;
                        var4 = var5.del;
                        var3 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': true
                        };
                        var9 = _closure1_slot7;
                        var8 = var9.PIN;
                        var7 = _closure2_slot0;
                        var7 = var7.id;
                        var6 = _closure2_slot1;
                        var6 = var8.bind(var9)(var7, var6);
                        var3.url = var6;
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.catch;
                        var3 = function() { // Environment: var3
                            var1 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var0 = 7;
                            var0 = var9[var0];
                            var8 = undefined;
                            var2 = var1.bind(var8)(var0);
                            var1 = var2.show;
                            var0 = {};
                            var7 = _closure1_slot0;
                            var4 = 6;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var10 = var5.intl;
                            var6 = var10.string;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var5 = var5.t;
                            var5 = var5.xFjByk;
                            var5 = var6.bind(var10)(var5);
                            var0.title = var5;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var10 = var5.intl;
                            var6 = var10.string;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var5 = var5.t;
                            var5 = var5["0R/Toc"];
                            var5 = var6.bind(var10)(var5);
                            var0.body = var5;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var10 = var5.intl;
                            var6 = var10.string;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var5 = var5.t;
                            var5 = var5["7NqTJn"];
                            var5 = var6.bind(var10)(var5);
                            var0.confirmText = var5;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var9[var4];
                            var4 = var7.bind(var8)(var4);
                            var4 = var4.t;
                            var4 = var4["ETE/oC"];
                            var4 = var5.bind(var6)(var4);
                            var0.cancelText = var4;
                            var4 = _closure1_slot9;
                            var7 = var4.unpinMessage;
                            var6 = var7.bind;
                            var5 = _closure1_slot9;
                            var4 = _closure2_slot0;
                            var3 = _closure2_slot1;
                            var3 = var6.bind(var7)(var5, var4, var3);
                            var0.onConfirm = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 172:
                        return var1;
                    case 175:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.unpinMessage = var6;
    var6 = function(arg0) { // Original name: ackPins, environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CHANNEL_PINS_ACK';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.ackPins = var6;
    var6 = function(arg0, arg1) { // Original name: fetchPins, environment: var3
        _fun75642: for (var _fun75642_ip = 0;;) switch (_fun75642_ip) {
            case 0:
                var10 = arg0;
                var2 = arg1;
                var _closure2_slot0 = var10;
                var6 = null;
                var4 = var6 == var2;
                var0 = undefined;
                var3 = undefined;
                if (var4) {
                    _fun75642_ip = 31;
                    continue _fun75642
                }
            case 25:
                var3 = var2.reset;
            case 31:
                var11 = var6 != var3;
                if (!var11) {
                    _fun75642_ip = 41;
                    continue _fun75642
                }
            case 38:
                var11 = var3;
            case 41:
                var4 = var6 == var2;
                var3 = undefined;
                if (var4) {
                    _fun75642_ip = 55;
                    continue _fun75642
                }
            case 50:
                var3 = var2.limit;
            case 55:
                var4 = var6 != var3;
                var7 = 25;
                if (!var4) {
                    _fun75642_ip = 68;
                    continue _fun75642
                }
            case 65:
                var7 = var3;
            case 68:
                var3 = var6 == var2;
                var8 = undefined;
                if (var3) {
                    _fun75642_ip = 83;
                    continue _fun75642
                }
            case 77:
                var8 = var2.before;
            case 83:
                var2 = var11;
                if (var2) {
                    _fun75642_ip = 253;
                    continue _fun75642
                }
            case 92:
                var5 = _closure1_slot4;
                var3 = var5.getPins;
                var5 = var3.bind(var5)(var10);
                var9 = var6 == var5;
                var3 = true;
                if (var9) {
                    _fun75642_ip = 250;
                    continue _fun75642
                }
            case 122:
                var9 = var5.state;
                var12 = _closure1_slot5;
                var12 = var12.FAILED;
                var3 = true;
                if (!(var12 !== var9)) {
                    _fun75642_ip = 250;
                    continue _fun75642
                }
            case 143:
                var12 = _closure1_slot5;
                var12 = var12.LOADING;
                var3 = false;
                if (!(var12 !== var9)) {
                    _fun75642_ip = 250;
                    continue _fun75642
                }
            case 159:
                var12 = _closure1_slot5;
                var12 = var12.LOADED_FINISHED;
                var3 = false;
                if (!(var12 !== var9)) {
                    _fun75642_ip = 250;
                    continue _fun75642
                }
            case 175:
                var4 = _closure1_slot5;
                var4 = var4.LOADED_HAS_MORE;
                var3 = undefined;
                if (!(var4 === var9)) {
                    _fun75642_ip = 250;
                    continue _fun75642
                }
            case 191:
                if (!(var6 != var8)) {
                    _fun75642_ip = 230;
                    continue _fun75642
                }
            case 195:
                var12 = var5.items;
                var9 = var12.at;
                var4 = -1;
                var4 = var9.bind(var12)(var4);
                var4 = var4.pinnedAt;
                var4 = var4 === var8;
                _fun75642_ip = 247;
                continue _fun75642;
            case 230:
                var5 = var5.items;
                var9 = var5.length;
                var5 = 0;
                var4 = var5 === var9;
            case 247:
                var3 = var4;
            case 250:
                var2 = var3;
            case 253:
                if (!var2) {
                    _fun75642_ip = 440;
                    continue _fun75642
                }
            case 259:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 8;
                var2 = var4[var2];
                var9 = var3.bind(var0)(var2);
                var3 = var9.dispatch;
                var2 = {};
                var12 = 'LOAD_PINNED_MESSAGES';
                var2.type = var12;
                var2.channelId = var10;
                var2.reset = var11;
                var2 = var3.bind(var9)(var2);
                var3 = _closure1_slot0;
                var2 = 4;
                var2 = var4[var2];
                var2 = var3.bind(var0)(var2);
                var4 = var2.HTTP;
                var3 = var4.get;
                var2 = {
                    'url': null,
                    'query': null,
                    'retries': 2,
                    'oldFormErrors': true,
                    'rejectWithError': true
                };
                var9 = _closure1_slot7;
                var5 = var9.PINS;
                var5 = var5.bind(var9)(var10);
                var2.url = var5;
                var5 = {};
                var5.limit = var7;
                var7 = var6 == var8;
                var6 = undefined;
                if (var7) {
                    _fun75642_ip = 399;
                    continue _fun75642
                }
            case 389:
                var7 = var8.toISOString;
                var6 = var7.bind(var8)();
            case 399:
                var5.before = var6;
                var2.query = var5;
                var4 = var3.bind(var4)(var2);
                var3 = var4.then;
                var2 = function(arg0) { // Environment: var1
                    var4 = arg0;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var5 = 'LOAD_PINNED_MESSAGES_SUCCESS';
                    var1.type = var5;
                    var5 = var4.body;
                    var5 = var5.items;
                    var1.pins = var5;
                    var5 = _closure2_slot0;
                    var1.channelId = var5;
                    var4 = var4.body;
                    var4 = var4.has_more;
                    var1.hasMore = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'LOAD_PINNED_MESSAGES_FAILURE';
                    var1.type = var4;
                    var4 = _closure2_slot0;
                    var1.channelId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = var3.bind(var4)(var2, var1);
            case 440:
                return var0;
        }
    };
    var1.fetchPins = var6;
    var _closure1_slot9 = var1;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/ChannelPinActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 9569, 660, 6425, 507, 3309, 1234, 3956, 806, 2]);