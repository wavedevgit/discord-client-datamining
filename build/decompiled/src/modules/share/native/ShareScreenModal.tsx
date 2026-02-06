// modules/share/native/ShareScreenModal.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativeModules;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SHARE_SCREEN_MODAL_KEY;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'ShareScreenModal';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot10 = var3;
    var3 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 8;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.popWithKey;
        var1 = _closure1_slot8;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot11 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/share/native/ShareScreenModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun96445: for (var _fun96445_ip = 0;;) switch (_fun96445_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.text;
                var _closure2_slot0 = var9;
                var7 = var1.channelId;
                var _closure2_slot1 = var7;
                var15 = var1.shareId;
                var _closure2_slot2 = var15;
                var1 = var1.attachmentManifest;
                var _closure2_slot3 = var1;
                var3 = undefined;
                var _closure2_slot8 = var3;
                var12 = _closure1_slot5;
                var5 = var12.useState;
                var2 = null;
                var5 = var5.bind(var12)(var2);
                var13 = _closure1_slot4;
                var11 = 2;
                var5 = var13.bind(var3)(var5, var11);
                var6 = 0;
                var8 = var5[var6];
                var _closure2_slot4 = var8;
                var10 = 1;
                var5 = var5[var10];
                var _closure2_slot5 = var5;
                var14 = var12.useEffect;
                var5 = new Array(2);
                var5[0] = var15;
                var5[1] = var1;
                var1 = function() { // Environment: var0
                    var1 = function() {
                        var3 = undefined;
                        var0 = undefined;
                        var2 = _closure1_slot3;
                        var1 = function*() { // Environment: var1
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun96449: for (var _fun96449_ip = 0;;) switch (_fun96449_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun96449_ip = 116;
                                            continue _fun96449
                                        }
                                    case 7:
                                        var2 = _closure2_slot2;
                                        var1 = undefined;
                                        if (!(var1 !== var2)) {
                                            _fun96449_ip = 113;
                                            continue _fun96449
                                        }
                                    case 20:
                                        var2 = _closure2_slot3;
                                        if (!(var1 !== var2)) {
                                            _fun96449_ip = 113;
                                            continue _fun96449
                                        }
                                    case 28: // try_start_0
                                        var2 = _closure1_slot6;
                                        var6 = var2.ShareManager;
                                        var5 = var6.sharedAttachments;
                                        var4 = _closure2_slot2;
                                        var2 = _closure2_slot3;
                                        var2 = var5.bind(var6)(var4, var2);
                                        SaveGenerator(address = 67);
                                    case 65:
                                        return var2;
                                    case 67:
                                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                                        if (var4) {
                                            _fun96449_ip = 84;
                                            continue _fun96449
                                        }
                                    case 73:
                                        var3 = _closure2_slot5;
                                        var3 = var3.bind(var1)(var2);
                                    case 82: // try_end0
                                        _fun96449_ip = 113;
                                        continue _fun96449;
                                    case 84:
                                        return var2;
                                    case 87: // catch_target0
                                        CatchBlockStart(arg_register = 5);
                                        var4 = _closure1_slot10;
                                        var3 = var4.error;
                                        var2 = 'Error fetching attachments:';
                                        var2 = var3.bind(var4)(var2, var5);
                                    case 113:
                                        return var1;
                                    case 116:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var3 = var2.bind(var3)(var1);
                        _closure3_slot0 = var3;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var _closure3_slot0 = var1;
                    var1 = function() {
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var1 = !var1;
                    return var0;
                };
                var1 = var14.bind(var12)(var1, var5);
                var5 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 9;
                var1 = var14[var1];
                var15 = var5.bind(var3)(var1);
                var14 = var15.useStateFromStores;
                var1 = _closure1_slot7;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var14.bind(var15)(var5, var1);
                var _closure2_slot6 = var1;
                var5 = var12.useState;
                var5 = var5.bind(var12)(var2);
                var5 = var13.bind(var3)(var5, var11);
                var6 = var5[var6];
                var5 = var5[var10];
                var _closure2_slot7 = var5;
                var11 = var12.useEffect;
                var10 = new Array(2);
                var10[0] = var7;
                var10[1] = var1;
                var5 = function() { // Environment: var0
                    var1 = function() {
                        var3 = undefined;
                        var0 = undefined;
                        var2 = _closure1_slot3;
                        var1 = function*() { // Environment: var1
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun96455: for (var _fun96455_ip = 0;;) switch (_fun96455_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun96455_ip = 123;
                                            continue _fun96455
                                        }
                                    case 7:
                                        var1 = _closure2_slot1;
                                        var3 = null;
                                        if (!(var3 != var1)) {
                                            _fun96455_ip = 118;
                                            continue _fun96455
                                        }
                                    case 20:
                                        var1 = _closure2_slot6;
                                        if (!(var3 == var1)) {
                                            _fun96455_ip = 118;
                                            continue _fun96455
                                        }
                                    case 28: // try_start_0
                                        var4 = _closure1_slot1;
                                        var3 = _closure1_slot2;
                                        var1 = 10;
                                        var1 = var3[var1];
                                        var3 = undefined;
                                        var5 = var4.bind(var3)(var1);
                                        var4 = var5.fetchChannel;
                                        var1 = _closure2_slot1;
                                        var1 = var4.bind(var5)(var1);
                                        SaveGenerator(address = 72);
                                    case 70:
                                        return var1;
                                    case 72:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                        if (var4) {
                                            _fun96455_ip = 89;
                                            continue _fun96455
                                        }
                                    case 78:
                                        var2 = _closure2_slot7;
                                        var2 = var2.bind(var3)(var1);
                                    case 87: // try_end0
                                        _fun96455_ip = 118;
                                        continue _fun96455;
                                    case 89:
                                        return var1;
                                    case 92: // catch_target0
                                        CatchBlockStart(arg_register = 4);
                                        var3 = _closure1_slot10;
                                        var2 = var3.error;
                                        var1 = 'Error fetching channel:';
                                        var1 = var2.bind(var3)(var1, var4);
                                    case 118:
                                        var1 = undefined;
                                        return var1;
                                    case 123:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var3 = var2.bind(var3)(var1);
                        _closure3_slot0 = var3;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var _closure3_slot0 = var1;
                    var1 = function() {
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var1 = !var1;
                    return var0;
                };
                var5 = var11.bind(var12)(var5, var10);
                if (!(var2 != var1)) {
                    _fun96445_ip = 251;
                    continue _fun96445
                }
            case 248:
                var6 = var1;
            case 251:
                _closure2_slot8 = var6;
                var5 = _closure1_slot5;
                var2 = var5.useMemo;
                var1 = new Array(4);
                var1[0] = var9;
                var1[1] = var8;
                var1[2] = var7;
                var1[3] = var6;
                var0 = function() { // Environment: var0
                    _fun96457: for (var _fun96457_ip = 0;;) switch (_fun96457_ip) {
                        case 0:
                            var0 = {};
                            var2 = _closure2_slot0;
                            var0.text = var2;
                            var2 = _closure2_slot4;
                            var4 = null;
                            if (!(var4 == var2)) {
                                _fun96457_ip = 29;
                                continue _fun96457
                            }
                        case 23:
                            var2 = new Array(0);
                            _fun96457_ip = 33;
                            continue _fun96457;
                        case 29:
                            var2 = _closure2_slot4;
                        case 33:
                            var0.attachments = var2;
                            var2 = _closure2_slot8;
                            if (!(var4 != var2)) {
                                _fun96457_ip = 253;
                                continue _fun96457
                            }
                        case 49:
                            var2 = _closure2_slot8;
                            var5 = var2.type;
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 11;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var6.bind(var2)(var3);
                            var3 = var3.ChannelTypes;
                            var3 = var3.DM;
                            if (!(var5 === var3)) {
                                _fun96457_ip = 241;
                                continue _fun96457
                            }
                        case 102:
                            var3 = _closure2_slot8;
                            if (!var3) {
                                _fun96457_ip = 147;
                                continue _fun96457
                            }
                        case 109:
                            var5 = 'recipients';
                            var5 = var5 in var3;
                            if (!var5) {
                                _fun96457_ip = 147;
                                continue _fun96457
                            }
                        case 120:
                            var5 = global;
                            var6 = var5.Array;
                            var5 = var6.isArray;
                            var3 = var3.recipients;
                            var3 = var5.bind(var6)(var3);
                            if (var3) {
                                _fun96457_ip = 217;
                                continue _fun96457
                            }
                        case 147:
                            var5 = _closure2_slot8;
                            var3 = var5;
                            if (!var3) {
                                _fun96457_ip = 165;
                                continue _fun96457
                            }
                        case 157:
                            var6 = 'recipient';
                            var3 = var6 in var5;
                        case 165:
                            if (!var3) {
                                _fun96457_ip = 182;
                                continue _fun96457
                            }
                        case 168:
                            var6 = var5.recipient;
                            var5 = 'id';
                            var3 = var5 in var6;
                        case 182:
                            if (!var3) {
                                _fun96457_ip = 239;
                                continue _fun96457
                            }
                        case 185:
                            var3 = _closure2_slot8;
                            var3 = var3.recipient;
                            var4 = var4 == var3;
                            var2 = undefined;
                            if (var4) {
                                _fun96457_ip = 209;
                                continue _fun96457
                            }
                        case 204:
                            var2 = var3.id;
                        case 209:
                            var0.targetUserId = var2;
                            _fun96457_ip = 239;
                            continue _fun96457;
                        case 217:
                            var2 = _closure2_slot8;
                            var3 = var2.recipients;
                            var2 = 0;
                            var2 = var3[var2];
                            var0.targetUserId = var2;
                        case 239:
                            return var0;
                        case 241:
                            var1 = _closure2_slot1;
                            var0.targetChannelId = var1;
                            return var0;
                        case 253:
                            return var0;
                    }
                };
                var5 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot9;
                var1 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 12;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.sharedContent = var5;
                var4 = _closure1_slot11;
                var0.onClose = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1372, 12545, 33, 3, 4562, 566, 3947, 790, 12588, 2]);