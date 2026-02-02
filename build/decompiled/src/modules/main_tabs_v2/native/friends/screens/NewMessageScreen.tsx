// modules/main_tabs_v2/native/friends/screens/NewMessageScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun107151: for (var _fun107151_ip = 0;;) switch (_fun107151_ip) {
        case 0:
            var4 = require;
            var10 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var10;
            var _closure1_slot2 = var5;
            var0 = function arg0, arg1() {
                _fun107152: for (var _fun107152_ip = 0;;) switch (_fun107152_ip) {
                    case 0:
                        var2 = arg0;
                        var _closure2_slot0 = var2;
                        var4 = global;
                        var1 = var4.Symbol;
                        var3 = 'undefined';
                        var1 = typeof var1;
                        var1 = var3 !== var1;
                        if (!var1) {
                            _fun107152_ip = 46;
                            continue _fun107152
                        }
                    case 30:
                        var3 = var4.Symbol;
                        var3 = var3.iterator;
                        var1 = var2[var3];
                    case 46:
                        if (var1) {
                            _fun107152_ip = 55;
                            continue _fun107152
                        }
                    case 49:
                        var1 = var2["@@iterator"];
                    case 55:
                        if (var1) {
                            _fun107152_ip = 345;
                            continue _fun107152
                        }
                    case 61:
                        var5 = var4.Array;
                        var3 = var5.isArray;
                        var5 = var3.bind(var5)(var2);
                        var3 = var1;
                        if (var5) {
                            _fun107152_ip = 323;
                            continue _fun107152
                        }
                    case 86:
                        var7 = undefined;
                        var5 = undefined;
                        if (!var2) {
                            _fun107152_ip = 283;
                            continue _fun107152
                        }
                    case 96:
                        var8 = 'string';
                        var6 = typeof var2;
                        if (!(var8 !== var6)) {
                            _fun107152_ip = 270;
                            continue _fun107152
                        }
                    case 110:
                        var6 = {};
                        var8 = var6.toString;
                        var6 = var8.call;
                        var10 = var6.bind(var8)(var2);
                        var9 = var10.slice;
                        var8 = 8;
                        var6 = -1;
                        var8 = var9.bind(var10)(var8, var6);
                        var6 = 'Object';
                        var6 = var6 === var8;
                        if (!var6) {
                            _fun107152_ip = 163;
                            continue _fun107152
                        }
                    case 158:
                        var6 = var2.constructor;
                    case 163:
                        var9 = var8;
                        if (!var6) {
                            _fun107152_ip = 179;
                            continue _fun107152
                        }
                    case 169:
                        var6 = var2.constructor;
                        var9 = var6.name;
                    case 179:
                        var6 = 'Map';
                        if (!(var6 !== var9)) {
                            _fun107152_ip = 249;
                            continue _fun107152
                        }
                    case 187:
                        var6 = 'Set';
                        if (!(var6 !== var9)) {
                            _fun107152_ip = 249;
                            continue _fun107152
                        }
                    case 195:
                        var6 = 'Arguments';
                        if (!(var6 !== var9)) {
                            _fun107152_ip = 234;
                            continue _fun107152
                        }
                    case 205:
                        var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                        var6 = var8.test;
                        var8 = var6.bind(var8)(var9);
                        var6 = undefined;
                        if (!var8) {
                            _fun107152_ip = 247;
                            continue _fun107152
                        }
                    case 234:
                        var8 = _closure1_slot23;
                        var6 = var8.bind(var7)(var2, var7);
                    case 247:
                        _fun107152_ip = 265;
                        continue _fun107152;
                    case 249:
                        var9 = var4.Array;
                        var8 = var9.from;
                        var6 = var8.bind(var9)(var2);
                    case 265:
                        var5 = var6;
                        _fun107152_ip = 283;
                        continue _fun107152;
                    case 270:
                        var6 = _closure1_slot23;
                        var5 = var6.bind(var7)(var2, var7);
                    case 283:
                        var3 = var5;
                        if (var3) {
                            _fun107152_ip = 323;
                            continue _fun107152
                        }
                    case 289:
                        var6 = var4.TypeError;
                        var4 = var6.prototype;
                        var5 = Object.create(var4, {
                            constructor: {
                                value: var6
                            }
                        });
                        var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                        var13 = var5;
                        var4 = new var13[var6](var12, var11);
                        var4 = var4 instanceof Object ? var4 : var5;
                        throw var4;
                    case 323:
                        if (!var3) {
                            _fun107152_ip = 330;
                            continue _fun107152
                        }
                    case 326:
                        _closure2_slot0 = var3;
                    case 330:
                        var3 = 0;
                        var _closure2_slot1 = var3;
                        var0 = function() { // Environment: var0
                            _fun107153: for (var _fun107153_ip = 0;;) switch (_fun107153_ip) {
                                case 0:
                                    var1 = _closure2_slot1;
                                    var0 = _closure2_slot0;
                                    var0 = var0.length;
                                    if (!(!(var1 >= var0))) {
                                        _fun107153_ip = 56;
                                        continue _fun107153
                                    }
                                case 20:
                                    var0 = {};
                                    var1 = false;
                                    var0.done = var1;
                                    var2 = _closure2_slot0;
                                    var1 = _closure2_slot1;
                                    var1 = parseFloat(var1);
                                    var3 = var1 + 1;
                                    _closure2_slot1 = var3;
                                    var1 = var2[var1];
                                    var0.value = var1;
                                    _fun107153_ip = 67;
                                    continue _fun107153;
                                case 56:
                                    var1 = {};
                                    var2 = true;
                                    var1.done = var2;
                                    var0 = var1;
                                case 67:
                                    return var0;
                            }
                        };
                        return var0;
                    case 345:
                        var0 = var1.call;
                        var2 = var0.bind(var1)(var2);
                        var1 = var2.next;
                        var0 = var1.bind;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                }
            };
            var _closure1_slot22 = var0;
            var0 = function arg0, arg1() {
                _fun107154: for (var _fun107154_ip = 0;;) switch (_fun107154_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var2 = undefined;
                        var0 = var0 == var2;
                        if (var0) {
                            _fun107154_ip = 23;
                            continue _fun107154
                        }
                    case 14:
                        var1 = var3.length;
                        var0 = var2 > var1;
                    case 23:
                        var1 = undefined;
                        if (!var0) {
                            _fun107154_ip = 33;
                            continue _fun107154
                        }
                    case 28:
                        var1 = var3.length;
                    case 33:
                        var0 = global;
                        var0 = var0.Array;
                        var0 = var0.bind(var2)(var1);
                        var2 = 0;
                        var4 = var2 < var1;
                        if (!var4) {
                            _fun107154_ip = 70;
                            continue _fun107154
                        }
                    case 55:
                        var4 = var3[var2];
                        var0[var2] = var4;
                        var2 = var2 + 1;
                        if (var2 < var1) {
                            _fun107154_ip = 55;
                            continue _fun107154
                        }
                    case 70:
                        return var0;
                }
            };
            var _closure1_slot23 = var0;
            var0 = function arg0, arg1() {
                _fun107155: for (var _fun107155_ip = 0;;) switch (_fun107155_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = arg1;
                        var1 = var0.recipients;
                        var2 = var1.length;
                        var0 = var4.length;
                        if (!(var2 === var0)) {
                            _fun107155_ip = 93;
                            continue _fun107155
                        }
                    case 26:
                        var0 = _closure1_slot22;
                        var3 = undefined;
                        var2 = var0.bind(var3)(var1);
                        var1 = var2.bind(var3)();
                        var0 = var1.done;
                        if (var0) {
                            _fun107155_ip = 89;
                            continue _fun107155
                        }
                    case 52:
                        var5 = var1.value;
                        var0 = var4.includes;
                        var0 = var0.bind(var4)(var5);
                        if (var0) {
                            _fun107155_ip = 74;
                            continue _fun107155
                        }
                    case 70:
                        var0 = false;
                        return var0;
                    case 74:
                        var5 = var2.bind(var3)();
                        var0 = var5.done;
                        var1 = var5;
                        if (!var0) {
                            _fun107155_ip = 52;
                            continue _fun107155
                        }
                    case 89:
                        var0 = true;
                        return var0;
                    case 93:
                        var0 = false;
                        return var0;
                }
            };
            var _closure1_slot24 = var0;
            var0 = function arg0() {
                _fun107156: for (var _fun107156_ip = 0;;) switch (_fun107156_ip) {
                    case 0:
                        var1 = arg0;
                        var _closure2_slot0 = var1;
                        var0 = var1.length;
                        var2 = 1;
                        if (!(var2 !== var0)) {
                            _fun107156_ip = 135;
                            continue _fun107156
                        }
                    case 21:
                        var4 = _closure1_slot10;
                        var3 = var4.getSortedChannels;
                        var5 = var3.bind(var4)();
                        var4 = _closure1_slot4;
                        var3 = undefined;
                        var0 = 2;
                        var0 = var4.bind(var3)(var5, var0);
                        var5 = 0;
                        var3 = var0[var5];
                        var4 = new Array(2);
                        var4[0] = var3;
                        var0 = var0[var2];
                        var4[1] = var0;
                        var0 = var4.length;
                        var0 = var5 < var0;
                        var2 = null;
                        if (!var0) {
                            _fun107156_ip = 126;
                            continue _fun107156
                        }
                    case 89:
                        var7 = var4[var5];
                        var3 = var7.find;
                        var0 = function(arg0) { // Environment: var6
                            _fun107157: for (var _fun107157_ip = 0;;) switch (_fun107157_ip) {
                                case 0:
                                    var0 = arg0;
                                    var3 = var0.channelId;
                                    var2 = _closure1_slot8;
                                    var0 = var2.getChannel;
                                    var4 = var0.bind(var2)(var3);
                                    var0 = null;
                                    var2 = var0 == var4;
                                    if (var2) {
                                        _fun107157_ip = 47;
                                        continue _fun107157
                                    }
                                case 34:
                                    var0 = var4.isPrivate;
                                    var0 = var0.bind(var4)();
                                    var2 = !var0;
                                case 47:
                                    var0 = !var2;
                                    if (var2) {
                                        _fun107157_ip = 72;
                                        continue _fun107157
                                    }
                                case 53:
                                    var3 = _closure1_slot24;
                                    var2 = _closure2_slot0;
                                    var1 = undefined;
                                    var0 = var3.bind(var1)(var2, var4);
                                case 72:
                                    return var0;
                            }
                        };
                        var0 = var3.bind(var7)(var0);
                        if (!(var2 == var0)) {
                            _fun107156_ip = 128;
                            continue _fun107156
                        }
                    case 114:
                        var5 = var5 + 1;
                        var3 = var4.length;
                        if (var5 < var3) {
                            _fun107156_ip = 89;
                            continue _fun107156
                        }
                    case 126:
                        return var2;
                    case 128:
                        var0 = var0.channelId;
                        return var0;
                    case 135:
                        var0 = 0;
                        var2 = var1[var0];
                        var1 = _closure1_slot8;
                        var0 = var1.getDMFromUserId;
                        var1 = var0.bind(var1)(var2);
                        var0 = null;
                        var2 = var0 != var1;
                        if (!var2) {
                            _fun107156_ip = 171;
                            continue _fun107156
                        }
                    case 168:
                        var0 = var1;
                    case 171:
                        return var0;
                }
            };
            var _closure1_slot25 = var0;
            var0 = function() {
                var4 = undefined;
                var0 = undefined;
                var3 = _closure1_slot3;
                var2 = function*(arg0) { // Environment: var2
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun107160: for (var _fun107160_ip = 0;;) switch (_fun107160_ip) {
                            case 0:
                                StartGenerator();
                                var2 = arg0;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun107160_ip = 115;
                                    continue _fun107160
                                }
                            case 10:
                                var3 = var2;
                                var1 = _closure1_slot25;
                                var6 = undefined;
                                var1 = var1.bind(var6)(var2);
                                var2 = null;
                                if (!(var2 == var1)) {
                                    _fun107160_ip = 112;
                                    continue _fun107160
                                }
                            case 33:
                                var5 = var3;
                                var7 = var5.length;
                                var5 = 1;
                                if (!(!(var7 > var5))) {
                                    _fun107160_ip = 109;
                                    continue _fun107160
                                }
                            case 48: // try_start_0
                                var5 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var4 = 16;
                                var4 = var7[var4];
                                var5 = var5.bind(var6)(var4);
                                var4 = var5.getDMChannel;
                                var6 = var3;
                                var3 = 0;
                                var3 = var6[var3];
                                var3 = var4.bind(var5)(var3);
                                SaveGenerator(address = 92);
                            case 90:
                                return var3;
                            case 92:
                                ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun107160_ip = 101;
                                    continue _fun107160
                                }
                            case 98: // try_end0
                                return var3;
                            case 101:
                                return var3;
                            case 104: // catch_target0
                                CatchBlockStart(arg_register = 3);
                                return var2;
                            case 109:
                                return var2;
                            case 112:
                                return var1;
                            case 115:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                _closure1_slot26 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot26 = var0;
            var0 = function arg0() {
                var3 = arg0;
                var _closure2_slot0 = var3;
                var5 = _closure1_slot5;
                var4 = var5.useState;
                var0 = null;
                var5 = var4.bind(var5)(var0);
                var4 = _closure1_slot4;
                var6 = undefined;
                var0 = 2;
                var5 = var4.bind(var6)(var5, var0);
                var0 = 0;
                var0 = var5[var0];
                var _closure2_slot1 = var0;
                var4 = 1;
                var4 = var5[var4];
                var _closure2_slot2 = var4;
                var8 = _closure1_slot5;
                var7 = var8.useEffect;
                var5 = new Array(1);
                var5[0] = var3;
                var4 = function() { // Environment: var1
                    var9 = function arg0() {
                        _fun107163: for (var _fun107163_ip = 0;;) switch (_fun107163_ip) {
                            case 0:
                                var0 = arg0;
                                var5 = var0.channel;
                                var3 = var5.id;
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 17;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var4.bind(var0)(var1);
                                var1 = var1.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                                if (!(var3 !== var1)) {
                                    _fun107163_ip = 103;
                                    continue _fun107163
                                }
                            case 48:
                                var1 = var5.isPrivate;
                                var1 = var1.bind(var5)();
                                if (!var1) {
                                    _fun107163_ip = 103;
                                    continue _fun107163
                                }
                            case 61:
                                var4 = _closure1_slot24;
                                var3 = _closure2_slot0;
                                var3 = var4.bind(var0)(var3, var5);
                                if (!var3) {
                                    _fun107163_ip = 103;
                                    continue _fun107163
                                }
                            case 81:
                                var3 = _closure1_slot25;
                                var2 = _closure2_slot0;
                                var2 = var3.bind(var0)(var2);
                                var1 = _closure2_slot2;
                                var1 = var1.bind(var0)(var2);
                            case 103:
                                return var0;
                        }
                    };
                    var _closure3_slot0 = var9;
                    var4 = function arg0() {
                        var0 = arg0;
                        var _closure4_slot0 = var0;
                        var2 = _closure2_slot2;
                        var0 = undefined;
                        var1 = function(arg0) { // Environment: var1
                            _fun107165: for (var _fun107165_ip = 0;;) switch (_fun107165_ip) {
                                case 0:
                                    var2 = arg0;
                                    var3 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 17;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var0 = var3.bind(var0)(var1);
                                    var1 = var0.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                                    var0 = var2;
                                    if (!(var0 !== var1)) {
                                        _fun107165_ip = 70;
                                        continue _fun107165
                                    }
                                case 41:
                                    var1 = _closure4_slot0;
                                    var1 = var1.channel;
                                    var3 = var1.id;
                                    var1 = null;
                                    if (!(var2 !== var3)) {
                                        _fun107165_ip = 67;
                                        continue _fun107165
                                    }
                                case 64:
                                    var1 = var2;
                                case 67:
                                    var0 = var1;
                                case 70:
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var _closure3_slot1 = var4;
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 18;
                    var6 = var5[var1];
                    var2 = undefined;
                    var8 = var3.bind(var2)(var6);
                    var7 = var8.subscribe;
                    var6 = 'CHANNEL_CREATE';
                    var6 = var7.bind(var8)(var6, var9);
                    var1 = var5[var1];
                    var3 = var3.bind(var2)(var1);
                    var2 = var3.subscribe;
                    var1 = 'CHANNEL_DELETE';
                    var1 = var2.bind(var3)(var1, var4);
                    var0 = function() { // Environment: var0
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 18;
                        var1 = var4[var2];
                        var0 = undefined;
                        var8 = var3.bind(var0)(var1);
                        var7 = var8.unsubscribe;
                        var6 = _closure3_slot0;
                        var5 = 'CHANNEL_CREATE';
                        var5 = var7.bind(var8)(var5, var6);
                        var2 = var4[var2];
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.unsubscribe;
                        var2 = _closure3_slot1;
                        var1 = 'CHANNEL_DELETE';
                        var1 = var3.bind(var4)(var1, var2);
                        return var0;
                    };
                    return var0;
                };
                var4 = var7.bind(var8)(var4, var5);
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 19;
                var4 = var7[var4];
                var7 = var5.bind(var6)(var4);
                var6 = var7.useStateFromStores;
                var4 = _closure1_slot8;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var1
                    var2 = _closure1_slot8;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var6.bind(var7)(var5, var4);
                var _closure2_slot3 = var5;
                var8 = _closure1_slot5;
                var7 = var8.useEffect;
                var6 = new Array(2);
                var6[0] = var3;
                var6[1] = var5;
                var4 = function() { // Environment: var1
                    _fun107168: for (var _fun107168_ip = 0;;) switch (_fun107168_ip) {
                        case 0:
                            var1 = function() {
                                var3 = undefined;
                                var0 = undefined;
                                var2 = _closure1_slot3;
                                var1 = function*() { // Environment: var1
                                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                                        _fun107171: for (var _fun107171_ip = 0;;) switch (_fun107171_ip) {
                                            case 0:
                                                StartGenerator();
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun107171_ip = 93;
                                                    continue _fun107171
                                                }
                                            case 7:
                                                var4 = _closure2_slot0;
                                                var1 = function() {
                                                    var0 = undefined;
                                                    var3 = _closure1_slot26;
                                                    var2 = var3.apply;
                                                    var0 = arguments;
                                                    var1 = var0;
                                                    var0 = this;
                                                    var0 = var2.bind(var3)(var0, var1);
                                                    return var0;
                                                };
                                                var2 = undefined;
                                                var1 = var1.bind(var2)(var4);
                                                SaveGenerator(address = 34);
                                            case 32:
                                                return var1;
                                            case 34:
                                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                                if (var4) {
                                                    _fun107171_ip = 90;
                                                    continue _fun107171
                                                }
                                            case 40:
                                                var4 = _closure2_slot2;
                                                var5 = null;
                                                var3 = var1;
                                                if (!(var5 == var3)) {
                                                    _fun107171_ip = 82;
                                                    continue _fun107171
                                                }
                                            case 53:
                                                var6 = _closure1_slot0;
                                                var7 = _closure1_slot2;
                                                var5 = 17;
                                                var5 = var7[var5];
                                                var5 = var6.bind(var2)(var5);
                                                var3 = var5.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                                            case 82:
                                                var3 = var4.bind(var2)(var3);
                                                return var2;
                                            case 90:
                                                return var1;
                                            case 93:
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
                            var1 = _closure2_slot0;
                            var3 = var1.length;
                            var1 = 0;
                            if (!(var1 === var3)) {
                                _fun107168_ip = 46;
                                continue _fun107168
                            }
                        case 31:
                            var4 = _closure2_slot2;
                            var3 = undefined;
                            var1 = null;
                            var1 = var4.bind(var3)(var1);
                            _fun107168_ip = 115;
                            continue _fun107168;
                        case 46:
                            var3 = _closure2_slot3;
                            var1 = null;
                            var1 = var1 != var3;
                            if (!var1) {
                                _fun107168_ip = 73;
                                continue _fun107168
                            }
                        case 59:
                            var4 = _closure2_slot3;
                            var3 = var4.isPrivate;
                            var1 = var3.bind(var4)();
                        case 73:
                            if (!var1) {
                                _fun107168_ip = 99;
                                continue _fun107168
                            }
                        case 76:
                            var5 = _closure1_slot24;
                            var4 = _closure2_slot0;
                            var3 = _closure2_slot3;
                            var2 = undefined;
                            var1 = var5.bind(var2)(var4, var3);
                        case 99:
                            if (var1) {
                                _fun107168_ip = 115;
                                continue _fun107168
                            }
                        case 102:
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
                            var0 = var1.bind(var0)();
                        case 115:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var7.bind(var8)(var4, var6);
                var7 = _closure1_slot5;
                var6 = var7.useEffect;
                var4 = new Array(2);
                var4[0] = var3;
                var4[1] = var0;
                var3 = function() { // Environment: var1
                    _fun107174: for (var _fun107174_ip = 0;;) switch (_fun107174_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var6 = null;
                            if (!(var6 != var0)) {
                                _fun107174_ip = 52;
                                continue _fun107174
                            }
                        case 13:
                            var1 = _closure2_slot1;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 17;
                            var2 = var2[var0];
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2);
                            var0 = var0.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                            if (!(var1 === var0)) {
                                _fun107174_ip = 74;
                                continue _fun107174
                            }
                        case 52:
                            var1 = _closure1_slot25;
                            var0 = _closure2_slot0;
                            var10 = undefined;
                            var0 = var1.bind(var10)(var0);
                            if (!(var6 != var0)) {
                                _fun107174_ip = 78;
                                continue _fun107174
                            }
                        case 74:
                            var0 = undefined;
                            return var0;
                        case 78:
                            var1 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var0 = 18;
                            var0 = var11[var0];
                            var2 = var1.bind(var10)(var0);
                            var1 = var2.dispatch;
                            var0 = {};
                            var3 = 'CHANNEL_CREATE';
                            var0.type = var3;
                            var5 = _closure1_slot7;
                            var3 = {};
                            var9 = _closure1_slot0;
                            var7 = 17;
                            var7 = var11[var7];
                            var7 = var9.bind(var10)(var7);
                            var7 = var7.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                            var3.id = var7;
                            var7 = _closure2_slot0;
                            var9 = var7.length;
                            var7 = 1;
                            if (!(var7 !== var9)) {
                                _fun107174_ip = 173;
                                continue _fun107174
                            }
                        case 161:
                            var7 = _closure1_slot14;
                            var7 = var7.GROUP_DM;
                            _fun107174_ip = 183;
                            continue _fun107174;
                        case 173:
                            var8 = _closure1_slot14;
                            var7 = var8.DM;
                        case 183:
                            var3.type = var7;
                            var7 = '';
                            var3.name = var7;
                            var3.guild_id = var6;
                            var4 = _closure2_slot0;
                            var3.recipients = var4;
                            var4 = var5.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var13 = var4;
                            var12 = var3;
                            var3 = new var13[var5](var12, var11);
                            var3 = var3 instanceof Object ? var3 : var4;
                            var0.channel = var3;
                            var0 = var1.bind(var2)(var0);
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var0 = 18;
                                var1 = var7[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.dispatch;
                                var1 = {};
                                var4 = 'CHANNEL_DELETE';
                                var1.type = var4;
                                var4 = {};
                                var6 = _closure1_slot0;
                                var5 = 17;
                                var5 = var7[var5];
                                var5 = var6.bind(var0)(var5);
                                var5 = var5.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                                var4.id = var5;
                                var4.guild_id = var0;
                                var4.parent_id = var0;
                                var1.channel = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            return var0;
                    }
                };
                var3 = var6.bind(var7)(var3, var4);
                var4 = _closure1_slot5;
                var3 = var4.useEffect;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() { // Environment: var1
                    _fun107176: for (var _fun107176_ip = 0;;) switch (_fun107176_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var0 = null;
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun107176_ip = 60;
                                continue _fun107176
                            }
                        case 16:
                            var1 = _closure2_slot3;
                            var2 = var1.id;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 17;
                            var3 = var3[var1];
                            var1 = undefined;
                            var1 = var5.bind(var1)(var3);
                            var1 = var1.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                            var0 = var2 === var1;
                        case 60:
                            if (!var0) {
                                _fun107176_ip = 143;
                                continue _fun107176
                            }
                        case 63:
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 18;
                            var0 = var2[var0];
                            var3 = undefined;
                            var2 = var1.bind(var3)(var0);
                            var1 = var2.dispatch;
                            var0 = {
                                'type': 'LOAD_MESSAGES_SUCCESS',
                                'channelId': null,
                                'messages': null,
                                'isBefore': false,
                                'isAfter': false,
                                'hasMoreBefore': false,
                                'hasMoreAfter': false,
                                'limit': 0,
                                'jump': null,
                                'isStale': false
                            };
                            var4 = _closure2_slot3;
                            var4 = var4.id;
                            var0.channelId = var4;
                            var4 = new Array(0);
                            var0.messages = var4;
                            var0.jump = var3;
                            var0 = var1.bind(var2)(var0);
                        case 143:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
            };
            var _closure1_slot27 = var0;
            var0 = function arg0() {
                _fun107177: for (var _fun107177_ip = 0;;) switch (_fun107177_ip) {
                    case 0:
                        var1 = arg0;
                        var7 = var1.title;
                        var8 = var1.numInGroup;
                        var _closure2_slot0 = var8;
                        var1 = _closure1_slot20;
                        var3 = undefined;
                        var4 = var1.bind(var3)();
                        var6 = _closure1_slot5;
                        var5 = var6.useMemo;
                        var2 = new Array(1);
                        var2[0] = var8;
                        var1 = function() { // Environment: var0
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 22;
                            var0 = var1[var0];
                            var1 = undefined;
                            var0 = var2.bind(var1)(var0);
                            var1 = var0.bind(var1)();
                            var2 = _closure2_slot0;
                            var0 = 1;
                            var0 = var2 + var0;
                            var0 = var1 - var0;
                            return var0;
                        };
                        var17 = var5.bind(var6)(var1, var2);
                        var5 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var1 = 11;
                        var1 = var11[var1];
                        var2 = var5.bind(var3)(var1);
                        var1 = var2.useAnimatedStyle;
                        var0 = function() {
                            _fun107179: for (var _fun107179_ip = 0;;) switch (_fun107179_ip) {
                                case 0:
                                    var1 = _closure2_slot0;
                                    var0 = 5;
                                    var4 = var1 >= var0;
                                    var0 = {};
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var6 = 23;
                                    var2 = var2[var6];
                                    var5 = undefined;
                                    var8 = var3.bind(var5)(var2);
                                    var7 = var8.withTiming;
                                    var2 = 0;
                                    if (!var4) {
                                        _fun107179_ip = 54;
                                        continue _fun107179
                                    }
                                case 51:
                                    var2 = 1;
                                case 54:
                                    var2 = var7.bind(var8)(var2);
                                    var0.opacity = var2;
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var1 = var1[var6];
                                    var2 = var2.bind(var5)(var1);
                                    var1 = var2.withTiming;
                                    var3 = 0;
                                    if (!var4) {
                                        _fun107179_ip = 93;
                                        continue _fun107179
                                    }
                                case 90:
                                    var3 = 20;
                                case 93:
                                    var1 = var1.bind(var2)(var3);
                                    var0.maxHeight = var1;
                                    return var0;
                            }
                        };
                        var6 = {};
                        var6.numInGroup = var8;
                        var8 = 5;
                        var6.NUM_IN_GROUP_THRESHOLD = var8;
                        var8 = 23;
                        var8 = var11[var8];
                        var8 = var5.bind(var3)(var8);
                        var8 = var8.withTiming;
                        var6.withTiming = var8;
                        var0.__closure = var6;
                        var6 = 12426216833792.0;
                        var0.__workletHash = var6;
                        var6 = _closure1_slot21;
                        var0.__initData = var6;
                        var10 = var1.bind(var2)(var0);
                        var0 = 0;
                        var8 = var0 === var17;
                        var2 = _closure1_slot18;
                        var1 = _closure1_slot6;
                        var0 = {};
                        var4 = var4.header;
                        var0.style = var4;
                        var6 = _closure1_slot17;
                        var4 = 24;
                        var4 = var11[var4];
                        var4 = var5.bind(var3)(var4);
                        var5 = var4.GenericHeaderTitle;
                        var4 = {};
                        var4.title = var7;
                        var5 = var6.bind(var3)(var5, var4);
                        var4 = new Array(2);
                        var4[0] = var5;
                        var7 = _closure1_slot17;
                        var6 = _closure1_slot19;
                        var5 = {};
                        var5.style = var10;
                        var10 = 'text-xs/medium';
                        var5.variant = var10;
                        var10 = 'text-muted';
                        if (!var8) {
                            _fun107177_ip = 277;
                            continue _fun107177
                        }
                    case 271:
                        var10 = 'text-feedback-critical';
                    case 277:
                        var5.color = var10;
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var9 = 25;
                        var10 = var13[var9];
                        var10 = var12.bind(var3)(var10);
                        var11 = var10.intl;
                        if (var8) {
                            _fun107177_ip = 373;
                            continue _fun107177
                        }
                    case 309:
                        var14 = var11.formatToPlainString;
                        var8 = var13[var9];
                        var8 = var12.bind(var3)(var8);
                        var8 = var8.t;
                        var10 = var8.HrSDPF;
                        var8 = {};
                        var15 = global;
                        var15 = var15.HermesInternal;
                        var16 = var15.concat;
                        var15 = '';
                        var15 = var16.bind(var15)(var17);
                        var8.number = var15;
                        var8 = var14.bind(var11)(var10, var8);
                        _fun107177_ip = 405;
                        continue _fun107177;
                    case 373:
                        var10 = var11.string;
                        var9 = var13[var9];
                        var9 = var12.bind(var3)(var9);
                        var9 = var9.t;
                        var9 = var9.yiQW1O;
                        var8 = var10.bind(var11)(var9);
                    case 405:
                        var5.children = var8;
                        var5 = var7.bind(var3)(var6, var5);
                        var4[1] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot28 = var0;
            var0 = function arg0() {
                var2 = arg0;
                var14 = var2.channelId;
                var _closure2_slot0 = var14;
                var1 = var2.navigateToChannel;
                var11 = var2.tagListInputRef;
                var2 = _closure1_slot20;
                var3 = undefined;
                var7 = var2.bind(var3)();
                var5 = _closure1_slot5;
                var4 = var5.useRef;
                var2 = null;
                var12 = var4.bind(var5)(var2);
                var6 = _closure1_slot5;
                var5 = var6.useEffect;
                var4 = new Array(1);
                var4[0] = var14;
                var2 = function() { // Environment: var0
                    _fun107181: for (var _fun107181_ip = 0;;) switch (_fun107181_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun107181_ip = 58;
                                continue _fun107181
                            }
                        case 13:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 16;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.preload;
                            var1 = _closure1_slot15;
                            var0 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1, var0);
                        case 58:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var5.bind(var6)(var2, var4);
                var0 = function arg0, arg1() {
                    var6 = arg0;
                    var5 = arg1;
                    var _closure3_slot0 = var6;
                    var _closure3_slot1 = var5;
                    var4 = _closure1_slot5;
                    var3 = var4.useCallback;
                    var2 = new Array(2);
                    var2[0] = var6;
                    var2[1] = var5;
                    var1 = function() { // Environment: var1
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 20;
                        var2 = var2[var0];
                        var0 = undefined;
                        var6 = var3.bind(var0)(var2);
                        var5 = var6.track;
                        var1 = _closure1_slot12;
                        var4 = var1.MESSAGE_COMPOSER_TRANSITIONED;
                        var3 = {};
                        var2 = _closure3_slot0;
                        var3.channel_id = var2;
                        var3 = var5.bind(var6)(var4, var3);
                        var1 = _closure3_slot1;
                        var1 = var1.bind(var0)(var2);
                        return var0;
                    };
                    var2 = var3.bind(var4)(var1, var2);
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 21;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var0 = var0.bind(var3)(var14, var1);
                var2 = _closure1_slot17;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var7.background;
                var0.style = var4;
                var6 = _closure1_slot18;
                var5 = _closure1_slot6;
                var4 = {};
                var7 = var7.container;
                var4.style = var7;
                var10 = _closure1_slot17;
                var9 = _closure1_slot1;
                var13 = _closure1_slot2;
                var7 = 26;
                var7 = var13[var7];
                var9 = var9.bind(var3)(var7);
                var7 = {
                    'guildId': null,
                    'channelId': null,
                    'chatInputRef': null,
                    'HACK_fixModalInteraction': true,
                    'alwaysRespectKeyboard': true,
                    'screenIndex': 'new-message'
                };
                var15 = _closure1_slot15;
                var7.guildId = var15;
                var7.channelId = var14;
                var7.chatInputRef = var12;
                var7.secondaryTextFieldRef = var11;
                var9 = var10.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var10 = _closure1_slot17;
                var12 = _closure1_slot0;
                var8 = 27;
                var8 = var13[var8];
                var8 = var12.bind(var3)(var8);
                var9 = var8.PortalKeyboardRenderer;
                var8 = {};
                var11 = 15;
                var11 = var13[var11];
                var12 = var12.bind(var3)(var11);
                var11 = var12.isAndroid;
                var11 = var11.bind(var12)();
                var8.portal = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var _closure1_slot29 = var0;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var0 = 0;
            var3 = var5[var0];
            var0 = undefined;
            var3 = var10.bind(var0)(var3);
            var _closure1_slot3 = var3;
            var11 = 1;
            var3 = var5[var11];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot4 = var3;
            var3 = 2;
            var6 = var5[var3];
            var3 = arg3;
            var3 = var3.bind(var0)(var6);
            var _closure1_slot5 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.View;
            var _closure1_slot6 = var3;
            var3 = 4;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.PrivateChannelRecord;
            var _closure1_slot7 = var3;
            var3 = 5;
            var3 = var5[var3];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot8 = var3;
            var3 = 6;
            var3 = var5[var3];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot9 = var3;
            var3 = 7;
            var3 = var5[var3];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot10 = var3;
            var3 = 8;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.UserRowModes;
            var _closure1_slot11 = var3;
            var3 = 9;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.AnalyticEvents;
            var _closure1_slot12 = var6;
            var6 = var3.AnalyticsSections;
            var _closure1_slot13 = var6;
            var6 = var3.ChannelTypes;
            var _closure1_slot14 = var6;
            var6 = var3.ME;
            var _closure1_slot15 = var6;
            var3 = var3.Routes;
            var _closure1_slot16 = var3;
            var3 = 10;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.jsx;
            var _closure1_slot17 = var6;
            var3 = var3.jsxs;
            var _closure1_slot18 = var3;
            var3 = 11;
            var3 = var5[var3];
            var7 = var10.bind(var0)(var3);
            var6 = var7.createAnimatedComponent;
            var3 = 12;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.Text;
            var3 = var6.bind(var7)(var3);
            var _closure1_slot19 = var3;
            var3 = 13;
            var3 = var5[var3];
            var7 = var4.bind(var0)(var3);
            var6 = var7.createStyles;
            var3 = {};
            var8 = {};
            var8.flex = var11;
            var3.container = var8;
            var8 = {};
            var8.flex = var11;
            var9 = 14;
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.BACKGROUND_BASE_LOW;
            var8.backgroundColor = var12;
            var3.background = var8;
            var8 = {};
            var12 = 'column';
            var8.flexDirection = var12;
            var12 = 15;
            var12 = var5[var12];
            var13 = var4.bind(var0)(var12);
            var12 = var13.isAndroid;
            var13 = var12.bind(var13)();
            var12 = 'center';
            if (!var13) {
                _fun107151_ip = 558;
                continue _fun107151
            }
        case 552:
            var12 = 'flex-start';
        case 558:
            var8.alignItems = var12;
            var3.header = var8;
            var8 = {};
            var12 = 24;
            var8.marginTop = var12;
            var3.loading = var8;
            var8 = {
                'flexGrow': 1,
                'justifyContent': 'center'
            };
            var3.emptyContainer = var8;
            var8 = {};
            var8.flexGrow = var11;
            var3.emptyKeyboardView = var8;
            var8 = {
                'marginBottom': null,
                'flexDirection': 'row',
                'justifyContent': 'center',
                'width': '100%'
            };
            var9 = var5[var9];
            var9 = var10.bind(var0)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_16;
            var8.marginBottom = var9;
            var3.addFriendsButtonContainer = var8;
            var3 = var6.bind(var7)(var3);
            var _closure1_slot20 = var3;
            var3 = {};
            var6 = 'function NewMessageScreenTsx1(){const{numInGroup,NUM_IN_GROUP_THRESHOLD,withTiming}=this.__closure;const show=numInGroup>=NUM_IN_GROUP_THRESHOLD;return{opacity:withTiming(show?1:0),maxHeight:withTiming(show?20:0)};}';
            var3.code = var6;
            var _closure1_slot21 = var3;
            var3 = 43;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/main_tabs_v2/native/friends/screens/NewMessageScreen.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function arg0() {
                _fun107184: for (var _fun107184_ip = 0;;) switch (_fun107184_ip) {
                    case 0:
                        var0 = arg0;
                        var23 = var0.navigation;
                        var _closure2_slot0 = var23;
                        var0 = var0.route;
                        var0 = var0.params;
                        var10 = var0.defaultSelectedUserId;
                        var0 = var0.sourcePage;
                        var _closure2_slot1 = var0;
                        var3 = undefined;
                        var _closure2_slot4 = var3;
                        var _closure2_slot5 = var3;
                        var _closure2_slot6 = var3;
                        var _closure2_slot7 = var3;
                        var _closure2_slot8 = var3;
                        var _closure2_slot9 = var3;
                        var _closure2_slot10 = var3;
                        var _closure2_slot11 = var3;
                        var0 = _closure1_slot20;
                        var22 = var0.bind(var3)();
                        var _closure2_slot2 = var22;
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var0 = 28;
                        var1 = var6[var0];
                        var4 = var5.bind(var3)(var1);
                        var1 = 29;
                        var1 = var6[var1];
                        var1 = var5.bind(var3)(var1);
                        var1 = var1.NEW_MESSAGE_COMPOSER;
                        var1 = var4.bind(var3)(var1);
                        var4 = var1.analyticsLocations;
                        var1 = 30;
                        var1 = var6[var1];
                        var7 = var5.bind(var3)(var1);
                        var1 = {};
                        var8 = true;
                        var1.includeKeyboardHeight = var8;
                        var1 = var7.bind(var3)(var1);
                        var9 = var1.insets;
                        var _closure2_slot3 = var9;
                        var1 = 31;
                        var1 = var6[var1];
                        var5 = var5.bind(var3)(var1);
                        var1 = function() { // Environment: var2
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 20;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.track;
                            var1 = _closure1_slot12;
                            var2 = var1.MESSAGE_COMPOSER_OPENED;
                            var1 = {};
                            var5 = _closure2_slot1;
                            var1.source_page = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                        };
                        var1 = var5.bind(var3)(var1);
                        var6 = _closure1_slot5;
                        var5 = var6.useState;
                        var21 = null;
                        if (!(var21 == var10)) {
                            _fun107184_ip = 222;
                            continue _fun107184
                        }
                    case 216:
                        var1 = new Array(0);
                        _fun107184_ip = 233;
                        continue _fun107184;
                    case 222:
                        var7 = new Array(1);
                        var7[0] = var10;
                        var1 = var7;
                    case 233:
                        var5 = var5.bind(var6)(var1);
                        var1 = _closure1_slot4;
                        var11 = 2;
                        var1 = var1.bind(var3)(var5, var11);
                        var5 = 0;
                        var14 = var1[var5];
                        _closure2_slot4 = var14;
                        var7 = 1;
                        var1 = var1[var7];
                        _closure2_slot5 = var1;
                        var6 = _closure1_slot5;
                        var1 = var6.useState;
                        var12 = false;
                        var6 = var1.bind(var6)(var12);
                        var1 = _closure1_slot4;
                        var6 = var1.bind(var3)(var6, var11);
                        var1 = var6[var5];
                        var6 = var6[var7];
                        _closure2_slot6 = var6;
                        var10 = _closure1_slot5;
                        var6 = var10.useState;
                        var10 = var6.bind(var10)(var12);
                        var6 = _closure1_slot4;
                        var6 = var6.bind(var3)(var10, var11);
                        var11 = var6[var5];
                        var6 = var6[var7];
                        _closure2_slot7 = var6;
                        var6 = _closure1_slot27;
                        var20 = var6.bind(var3)(var14);
                        _closure2_slot8 = var20;
                        var7 = _closure1_slot5;
                        var6 = var7.useRef;
                        var17 = var6.bind(var7)(var21);
                        var12 = _closure1_slot5;
                        var10 = var12.useLayoutEffect;
                        var7 = new Array(3);
                        var7[0] = var23;
                        var6 = var14.length;
                        var7[1] = var6;
                        var7[2] = var20;
                        var6 = function() { // Environment: var2
                            var2 = _closure2_slot0;
                            var1 = var2.setOptions;
                            var0 = {};
                            var4 = function arg0() {
                                var0 = arg0;
                                var0 = var0.children;
                                var3 = _closure1_slot17;
                                var2 = _closure1_slot28;
                                var1 = {};
                                var4 = _closure2_slot4;
                                var4 = var4.length;
                                var1.numInGroup = var4;
                                var1.title = var0;
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            var0.headerTitle = var4;
                            var3 = function() {
                                _fun107188: for (var _fun107188_ip = 0;;) switch (_fun107188_ip) {
                                    case 0:
                                        var1 = _closure2_slot8;
                                        var6 = null;
                                        var0 = null;
                                        if (!(var6 !== var1)) {
                                            _fun107188_ip = 107;
                                            continue _fun107188
                                        }
                                    case 15:
                                        var3 = _closure2_slot8;
                                        var7 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var2 = 17;
                                        var2 = var4[var2];
                                        var4 = undefined;
                                        var2 = var7.bind(var4)(var2);
                                        var2 = var2.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                                        var0 = null;
                                        if (!(var3 !== var2)) {
                                            _fun107188_ip = 107;
                                            continue _fun107188
                                        }
                                    case 56:
                                        var3 = _closure1_slot17;
                                        var2 = _closure1_slot1;
                                        var6 = _closure1_slot2;
                                        var1 = 32;
                                        var1 = var6[var1];
                                        var2 = var2.bind(var4)(var1);
                                        var1 = {};
                                        var5 = _closure2_slot8;
                                        var1.channelId = var5;
                                        var5 = 'new-message';
                                        var1.screenIndex = var5;
                                        var0 = var3.bind(var4)(var2, var1);
                                    case 107:
                                        return var0;
                                }
                            };
                            var0.headerRight = var3;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var6 = var10.bind(var12)(var6, var7);
                        var12 = _closure1_slot5;
                        var10 = var12.useCallback;
                        var7 = new Array(1);
                        var7[0] = var23;
                        var6 = function(arg0) { // Environment: var2
                            var1 = _closure2_slot0;
                            var0 = var1.goBack;
                            var0 = var0.bind(var1)();
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 33;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.transitionTo;
                            var6 = _closure1_slot16;
                            var5 = var6.CHANNEL;
                            var4 = _closure1_slot15;
                            var1 = arg0;
                            var1 = var5.bind(var6)(var4, var1);
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var19 = var10.bind(var12)(var6, var7);
                        _closure2_slot9 = var19;
                        var12 = _closure1_slot5;
                        var10 = var12.useCallback;
                        var6 = function() { // Environment: var2
                            var3 = _closure1_slot3;
                            var2 = undefined;
                            var1 = function*(arg0) { // Environment: var0
                                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                    _fun107192: for (var _fun107192_ip = 0;;) switch (_fun107192_ip) {
                                        case 0:
                                            StartGenerator();
                                            var1 = arg0;
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                            if (var2) {
                                                _fun107192_ip = 449;
                                                continue _fun107192
                                            }
                                        case 13:
                                            var3 = _closure1_slot7;
                                            var3 = var1 instanceof var3;
                                            if (var3) {
                                                _fun107192_ip = 385;
                                                continue _fun107192
                                            }
                                        case 30:
                                            var5 = _closure1_slot9;
                                            var4 = var5.isFriend;
                                            var3 = var1.id;
                                            var3 = var4.bind(var5)(var3);
                                            if (var3) {
                                                _fun107192_ip = 161;
                                                continue _fun107192
                                            }
                                        case 53:
                                            var4 = _closure1_slot1;
                                            var5 = _closure1_slot2;
                                            var3 = 16;
                                            var3 = var5[var3];
                                            var5 = undefined;
                                            var6 = var4.bind(var5)(var3);
                                            var4 = var6.getOrEnsurePrivateChannel;
                                            var3 = var1.id;
                                            var3 = var4.bind(var6)(var3);
                                            SaveGenerator(address = 95);
                                        case 93:
                                            return var3;
                                        case 95:
                                            ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                                            if (var4) {
                                                _fun107192_ip = 158;
                                                continue _fun107192
                                            }
                                        case 101:
                                            var6 = _closure1_slot1;
                                            var7 = _closure1_slot2;
                                            var4 = 20;
                                            var4 = var7[var4];
                                            var7 = var6.bind(var5)(var4);
                                            var6 = var7.track;
                                            var4 = _closure1_slot12;
                                            var4 = var4.MESSAGE_COMPOSER_SEARCH_RESULT_CLICKED;
                                            var4 = var6.bind(var7)(var4);
                                            var4 = _closure2_slot9;
                                            var4 = var4.bind(var5)(var3);
                                            var4 = undefined;
                                            return var4;
                                        case 158:
                                            return var3;
                                        case 161:
                                            var6 = _closure2_slot4;
                                            var5 = var6.indexOf;
                                            var3 = var1.id;
                                            var6 = var5.bind(var6)(var3);
                                            var10 = _closure2_slot4;
                                            var7 = new Array(0);
                                            var9 = 0;
                                            var11 = var7;
                                            var3 = arraySpread(var11, var10, var9);
                                            var3 = -1;
                                            if (!(var3 !== var6)) {
                                                _fun107192_ip = 228;
                                                continue _fun107192
                                            }
                                        case 211:
                                            var5 = var7.splice;
                                            var3 = 1;
                                            var3 = var5.bind(var7)(var6, var3);
                                            _fun107192_ip = 289;
                                            continue _fun107192;
                                        case 228:
                                            var3 = _closure2_slot4;
                                            var6 = var3.length;
                                            var8 = _closure1_slot1;
                                            var5 = _closure1_slot2;
                                            var3 = 22;
                                            var3 = var5[var3];
                                            var5 = undefined;
                                            var3 = var8.bind(var5)(var3);
                                            var8 = var3.bind(var5)();
                                            var3 = 1;
                                            var3 = var8 - var3;
                                            if (!(!(var6 >= var3))) {
                                                _fun107192_ip = 314;
                                                continue _fun107192
                                            }
                                        case 274:
                                            var6 = var7.push;
                                            var3 = var1.id;
                                            var3 = var6.bind(var7)(var3);
                                        case 289:
                                            var6 = _closure2_slot5;
                                            var3 = undefined;
                                            var6 = var6.bind(var3)(var7);
                                            var6 = _closure2_slot7;
                                            var4 = false;
                                            var4 = var6.bind(var3)(var4);
                                            return var3;
                                        case 314:
                                            var4 = _closure1_slot0;
                                            var6 = _closure1_slot2;
                                            var3 = 34;
                                            var3 = var6[var3];
                                            var4 = var4.bind(var5)(var3);
                                            var3 = var4.showMaxGroupMembers;
                                            var3 = var3.bind(var4)();
                                            var4 = _closure1_slot1;
                                            var3 = 20;
                                            var3 = var6[var3];
                                            var5 = var4.bind(var5)(var3);
                                            var4 = var5.track;
                                            var3 = _closure1_slot12;
                                            var3 = var3.MESSAGE_COMPOSER_MAX_USERS_ADDED;
                                            var3 = var4.bind(var5)(var3);
                                            var3 = undefined;
                                            return var3;
                                        case 385:
                                            var5 = _closure1_slot1;
                                            var4 = _closure1_slot2;
                                            var3 = 20;
                                            var4 = var4[var3];
                                            var3 = undefined;
                                            var5 = var5.bind(var3)(var4);
                                            var4 = var5.track;
                                            var2 = _closure1_slot12;
                                            var2 = var2.MESSAGE_COMPOSER_SEARCH_RESULT_CLICKED;
                                            var2 = var4.bind(var5)(var2);
                                            var2 = _closure2_slot9;
                                            var1 = var1.id;
                                            var1 = var2.bind(var3)(var1);
                                            var1 = undefined;
                                            return var1;
                                        case 449:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var1 = var3.bind(var2)(var1);
                            var _closure3_slot0 = var1;
                            var0 = function(arg0) { // Environment: var0
                                var0 = undefined;
                                var3 = _closure3_slot0;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            return var0;
                        };
                        var7 = var6.bind(var3)();
                        var6 = new Array(2);
                        var6[0] = var14;
                        var6[1] = var19;
                        var16 = var10.bind(var12)(var7, var6);
                        var12 = _closure1_slot5;
                        var10 = var12.useCallback;
                        var7 = function() { // Environment: var2
                            var2 = _closure2_slot7;
                            var0 = undefined;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var0 = !var0;
                                return var0;
                            };
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var6 = new Array(0);
                        var10 = var10.bind(var12)(var7, var6);
                        var13 = _closure1_slot5;
                        var12 = var13.useCallback;
                        var7 = function(arg0) { // Environment: var2
                            var3 = _closure2_slot7;
                            var0 = undefined;
                            var2 = false;
                            var2 = var3.bind(var0)(var2);
                            var2 = _closure2_slot6;
                            var1 = arg0;
                            var3 = var1.length;
                            var1 = 0;
                            var1 = var3 > var1;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var6 = new Array(0);
                        var15 = var12.bind(var13)(var7, var6);
                        var13 = _closure1_slot5;
                        var12 = var13.useMemo;
                        var7 = new Array(1);
                        var7[0] = var14;
                        var6 = function() { // Environment: var2
                            var2 = _closure2_slot4;
                            var1 = var2.join;
                            var0 = ':';
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var12 = var12.bind(var13)(var6, var7);
                        var13 = undefined;
                        if (var1) {
                            _fun107184_ip = 656;
                            continue _fun107184
                        }
                    case 576:
                        var13 = undefined;
                        if (var11) {
                            _fun107184_ip = 656;
                            continue _fun107184
                        }
                    case 581:
                        var1 = var14.length;
                        var1 = var1 > var5;
                        var13 = undefined;
                        if (!var1) {
                            _fun107184_ip = 656;
                            continue _fun107184
                        }
                    case 595:
                        var7 = _closure1_slot17;
                        var6 = _closure1_slot29;
                        var1 = {};
                        if (!(var21 == var20)) {
                            _fun107184_ip = 635;
                            continue _fun107184
                        }
                    case 609:
                        var24 = _closure1_slot0;
                        var25 = _closure1_slot2;
                        var21 = 17;
                        var21 = var25[var21];
                        var21 = var24.bind(var3)(var21);
                        var20 = var21.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                    case 635:
                        var1.channelId = var20;
                        var1.navigateToChannel = var19;
                        var1.tagListInputRef = var17;
                        var13 = var7.bind(var3)(var6, var1, var12);
                    case 656:
                        var1 = var14.length;
                        var12 = var5 === var1;
                        _closure2_slot10 = var12;
                        var1 = _closure1_slot0;
                        var21 = _closure1_slot2;
                        var5 = 19;
                        var5 = var21[var5];
                        var19 = var1.bind(var3)(var5);
                        var7 = var19.useStateFromStores;
                        var5 = _closure1_slot9;
                        var6 = new Array(1);
                        var6[0] = var5;
                        var5 = function() { // Environment: var2
                            var1 = _closure1_slot9;
                            var0 = var1.getRelationshipCount;
                            var1 = var0.bind(var1)();
                            var0 = 0;
                            var0 = var1 > var0;
                            return var0;
                        };
                        var5 = var7.bind(var19)(var6, var5);
                        _closure2_slot11 = var5;
                        var19 = _closure1_slot5;
                        var7 = var19.useMemo;
                        var6 = new Array(3);
                        var6[0] = var23;
                        var6[1] = var5;
                        var6[2] = var12;
                        var5 = function() { // Environment: var2
                            _fun107199: for (var _fun107199_ip = 0;;) switch (_fun107199_ip) {
                                case 0:
                                    var0 = new Array(0);
                                    var2 = _closure2_slot10;
                                    if (!var2) {
                                        _fun107199_ip = 307;
                                        continue _fun107199
                                    }
                                case 19:
                                    var1 = _closure2_slot11;
                                    if (!var1) {
                                        _fun107199_ip = 167;
                                        continue _fun107199
                                    }
                                case 29:
                                    var2 = var0.push;
                                    var1 = {};
                                    var6 = _closure1_slot1;
                                    var9 = _closure1_slot2;
                                    var5 = 35;
                                    var5 = var9[var5];
                                    var8 = undefined;
                                    var5 = var6.bind(var8)(var5);
                                    var1.icon = var5;
                                    var7 = _closure1_slot0;
                                    var4 = 36;
                                    var4 = var9[var4];
                                    var4 = var7.bind(var8)(var4);
                                    var4 = var4.GroupPlusIcon;
                                    var1.IconComponent = var4;
                                    var4 = 25;
                                    var5 = var9[var4];
                                    var5 = var7.bind(var8)(var5);
                                    var6 = var5.intl;
                                    var5 = var6.string;
                                    var4 = var9[var4];
                                    var4 = var7.bind(var8)(var4);
                                    var4 = var4.t;
                                    var4 = var4["3hF1W4"];
                                    var4 = var5.bind(var6)(var4);
                                    var1.label = var4;
                                    var4 = 'blurple';
                                    var1.iconVariant = var4;
                                    var4 = function() {
                                        var3 = _closure2_slot0;
                                        var2 = var3.navigate;
                                        var1 = {};
                                        var0 = false;
                                        var1.allowNameEdit = var0;
                                        var0 = _closure1_slot13;
                                        var0 = var0.NEW_MESSAGE_COMPOSER;
                                        var1.locationPage = var0;
                                        var0 = 'gdm';
                                        var0 = var2.bind(var3)(var0, var1);
                                        return var0;
                                    };
                                    var1.onPress = var4;
                                    var1 = var2.bind(var0)(var1);
                                case 167:
                                    var2 = var0.push;
                                    var1 = {};
                                    var6 = _closure1_slot1;
                                    var9 = _closure1_slot2;
                                    var5 = 37;
                                    var5 = var9[var5];
                                    var8 = undefined;
                                    var5 = var6.bind(var8)(var5);
                                    var1.icon = var5;
                                    var7 = _closure1_slot0;
                                    var4 = 38;
                                    var4 = var9[var4];
                                    var4 = var7.bind(var8)(var4);
                                    var4 = var4.UserPlusIcon;
                                    var1.IconComponent = var4;
                                    var4 = 25;
                                    var5 = var9[var4];
                                    var5 = var7.bind(var8)(var5);
                                    var6 = var5.intl;
                                    var5 = var6.string;
                                    var4 = var9[var4];
                                    var4 = var7.bind(var8)(var4);
                                    var4 = var4.t;
                                    var4 = var4["9nbDJx"];
                                    var4 = var5.bind(var6)(var4);
                                    var1.label = var4;
                                    var4 = 'boosting-pink';
                                    var1.iconVariant = var4;
                                    var3 = function() {
                                        var3 = _closure2_slot0;
                                        var2 = var3.navigate;
                                        var1 = {};
                                        var0 = 'New Message Composer';
                                        var1.sourcePage = var0;
                                        var0 = 'add-friends';
                                        var0 = var2.bind(var3)(var0, var1);
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var1.onPress = var3;
                                    var1 = var2.bind(var0)(var1);
                                case 307:
                                    return var0;
                            }
                        };
                        var20 = var7.bind(var19)(var5, var6);
                        var19 = _closure1_slot5;
                        var7 = var19.useMemo;
                        var6 = new Array(1);
                        var6[0] = var23;
                        var5 = function() { // Environment: var2
                            var1 = {};
                            var3 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 37;
                            var2 = var6[var2];
                            var5 = undefined;
                            var2 = var3.bind(var5)(var2);
                            var1.icon = var2;
                            var4 = _closure1_slot0;
                            var0 = 38;
                            var0 = var6[var0];
                            var0 = var4.bind(var5)(var0);
                            var0 = var0.UserPlusIcon;
                            var1.IconComponent = var0;
                            var0 = 25;
                            var2 = var6[var0];
                            var2 = var4.bind(var5)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var0 = var6[var0];
                            var0 = var4.bind(var5)(var0);
                            var0 = var0.t;
                            var0 = var0["9nbDJx"];
                            var0 = var2.bind(var3)(var0);
                            var1.label = var0;
                            var0 = 'boosting-pink';
                            var1.iconVariant = var0;
                            var0 = function() {
                                var3 = _closure2_slot0;
                                var2 = var3.navigate;
                                var1 = {};
                                var0 = 'New Message Composer';
                                var1.sourcePage = var0;
                                var0 = 'add-friends';
                                var0 = var2.bind(var3)(var0, var1);
                                var0 = undefined;
                                return var0;
                            };
                            var1.onPress = var0;
                            var0 = new Array(1);
                            var0[0] = var1;
                            return var0;
                        };
                        var19 = var7.bind(var19)(var5, var6);
                        var7 = _closure1_slot5;
                        var6 = var7.useMemo;
                        var5 = new Array(3);
                        var5[0] = var23;
                        var5[1] = var22;
                        var9 = var9.bottom;
                        var5[2] = var9;
                        var2 = function() { // Environment: var2
                            var3 = _closure1_slot17;
                            var2 = _closure1_slot6;
                            var1 = {};
                            var11 = _closure2_slot2;
                            var4 = var11.emptyKeyboardView;
                            var0 = new Array(2);
                            var0[0] = var4;
                            var4 = {};
                            var5 = _closure2_slot3;
                            var5 = var5.bottom;
                            var4.paddingBottom = var5;
                            var0[1] = var4;
                            var1.style = var0;
                            var6 = _closure1_slot17;
                            var5 = _closure1_slot1;
                            var18 = _closure1_slot2;
                            var0 = 39;
                            var4 = var18[var0];
                            var0 = undefined;
                            var5 = var5.bind(var0)(var4);
                            var4 = {};
                            var17 = _closure1_slot0;
                            var14 = 25;
                            var7 = var18[var14];
                            var7 = var17.bind(var0)(var7);
                            var9 = var7.intl;
                            var8 = var9.string;
                            var7 = var18[var14];
                            var7 = var17.bind(var0)(var7);
                            var7 = var7.t;
                            var7 = var7["1ESycm"];
                            var7 = var8.bind(var9)(var7);
                            var4.title = var7;
                            var7 = var18[var14];
                            var7 = var17.bind(var0)(var7);
                            var9 = var7.intl;
                            var8 = var9.string;
                            var7 = var18[var14];
                            var7 = var17.bind(var0)(var7);
                            var7 = var7.t;
                            var7 = var7["5IlFpu"];
                            var7 = var8.bind(var9)(var7);
                            var4.subtitle = var7;
                            var7 = var11.emptyContainer;
                            var4.containerStyle = var7;
                            var13 = true;
                            var4.fullHeight = var13;
                            var9 = _closure1_slot17;
                            var8 = _closure1_slot6;
                            var7 = {};
                            var11 = var11.addFriendsButtonContainer;
                            var7.style = var11;
                            var12 = _closure1_slot17;
                            var10 = 40;
                            var10 = var18[var10];
                            var10 = var17.bind(var0)(var10);
                            var11 = var10.Button;
                            var10 = {};
                            var15 = var18[var14];
                            var15 = var17.bind(var0)(var15);
                            var16 = var15.intl;
                            var15 = var16.string;
                            var14 = var18[var14];
                            var14 = var17.bind(var0)(var14);
                            var14 = var14.t;
                            var14 = var14.zIJnA6;
                            var14 = var15.bind(var16)(var14);
                            var10.text = var14;
                            var14 = 'lg';
                            var10.size = var14;
                            var14 = function() {
                                var3 = _closure2_slot0;
                                var2 = var3.navigate;
                                var1 = {};
                                var0 = 'New Message Composer No Results';
                                var1.sourcePage = var0;
                                var0 = 'add-friends';
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var10.onPress = var14;
                            var10.grow = var13;
                            var10 = var12.bind(var0)(var11, var10);
                            var7.children = var10;
                            var7 = var9.bind(var0)(var8, var7);
                            var4.children = var7;
                            var4 = var6.bind(var0)(var5, var4);
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var9 = var6.bind(var7)(var2, var5);
                        var2 = _closure1_slot18;
                        var0 = var21[var0];
                        var0 = var1.bind(var3)(var0);
                        var1 = var0.AnalyticsLocationProvider;
                        var0 = {};
                        var0.value = var4;
                        var7 = _closure1_slot17;
                        var6 = _closure1_slot1;
                        var4 = 41;
                        var4 = var21[var4];
                        var5 = var6.bind(var3)(var4);
                        var4 = {
                            'absolute': true,
                            'tall': true,
                            'wide': true
                        };
                        var5 = var7.bind(var3)(var5, var4);
                        var4 = new Array(2);
                        var4[0] = var5;
                        var7 = _closure1_slot17;
                        var5 = 42;
                        var5 = var21[var5];
                        var6 = var6.bind(var3)(var5);
                        var5 = {};
                        var5.actions = var20;
                        var5.noResultActions = var19;
                        var18 = _closure1_slot11;
                        var18 = var18.NONE;
                        var5.rowMode = var18;
                        var5.tagListInputRef = var17;
                        var5.onSelectUser = var16;
                        var5.onQueryChanged = var15;
                        var5.selectedUserIds = var14;
                        var5.withAffinitySuggestions = var8;
                        var5.overrideResults = var13;
                        var5.withGuildMembers = var12;
                        var5.withGDMNames = var8;
                        var5.forceSearchResults = var11;
                        var5.onForceSearchResults = var10;
                        var5.defaultNoResultsFound = var9;
                        var5.autoFocusSearch = var8;
                        var5 = var7.bind(var3)(var6, var5);
                        var4[1] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1376, 1372, 3061, 8294, 8844, 660, 33, 3681, 3902, 1297, 671, 478, 3906, 5608, 806, 566, 795, 13807, 13808, 4058, 8850, 1234, 9744, 13809, 5690, 5543, 4858, 4064, 8860, 1220, 3108, 8595, 8596, 3210, 3209, 9120, 4045, 8673, 13735, 2]);