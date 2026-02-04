// stores/DraftStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun36839: for (var _fun36839_ip = 0;;) switch (_fun36839_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun36839_ip = 74;
                continue _fun36839;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot15 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1() {
        _fun36842: for (var _fun36842_ip = 0;;) switch (_fun36842_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun36842_ip = 46;
                    continue _fun36842
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun36842_ip = 55;
                    continue _fun36842
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun36842_ip = 343;
                    continue _fun36842
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun36842_ip = 323;
                    continue _fun36842
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun36842_ip = 283;
                    continue _fun36842
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun36842_ip = 270;
                    continue _fun36842
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
                    _fun36842_ip = 163;
                    continue _fun36842
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun36842_ip = 179;
                    continue _fun36842
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun36842_ip = 249;
                    continue _fun36842
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun36842_ip = 249;
                    continue _fun36842
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun36842_ip = 234;
                    continue _fun36842
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun36842_ip = 247;
                    continue _fun36842
                }
            case 234:
                var8 = _closure1_slot17;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun36842_ip = 265;
                continue _fun36842;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun36842_ip = 283;
                continue _fun36842;
            case 270:
                var6 = _closure1_slot17;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun36842_ip = 323;
                    continue _fun36842
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
                    _fun36842_ip = 330;
                    continue _fun36842
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun36843: for (var _fun36843_ip = 0;;) switch (_fun36843_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun36843_ip = 56;
                                continue _fun36843
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
                            _fun36843_ip = 67;
                            continue _fun36843;
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
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0, arg1() {
        _fun36844: for (var _fun36844_ip = 0;;) switch (_fun36844_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun36844_ip = 23;
                    continue _fun36844
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun36844_ip = 33;
                    continue _fun36844
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
                    _fun36844_ip = 70;
                    continue _fun36844
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun36844_ip = 55;
                    continue _fun36844
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        _fun36845: for (var _fun36845_ip = 0;;) switch (_fun36845_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot14;
                var0 = var0[var3];
                var2 = null;
                if (!(var2 == var0)) {
                    _fun36845_ip = 33;
                    continue _fun36845
                }
            case 20:
                var2 = _closure1_slot14;
                var1 = {};
                var2[var3] = var1;
                var0 = var1;
            case 33:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var9 = function arg0() {
        _fun36846: for (var _fun36846_ip = 0;;) switch (_fun36846_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.type;
                var8 = var0.channelId;
                var9 = var0.draft;
                var3 = var0.draftType;
                var2 = _closure1_slot10;
                var0 = var2.getChannel;
                var4 = var0.bind(var2)(var8);
                var6 = null;
                var7 = var6 == var4;
                var0 = undefined;
                var2 = undefined;
                if (var7) {
                    _fun36846_ip = 61;
                    continue _fun36846
                }
            case 55:
                var2 = var4.template;
            case 61:
                if (!(var9 === var2)) {
                    _fun36846_ip = 69;
                    continue _fun36846
                }
            case 65:
                var9 = '';
            case 69:
                var4 = _closure1_slot9;
                var2 = var4.getId;
                var4 = var2.bind(var4)();
                if (!(var6 != var4)) {
                    _fun36846_ip = 99;
                    continue _fun36846
                }
            case 87:
                if (!(var6 != var9)) {
                    _fun36846_ip = 99;
                    continue _fun36846
                }
            case 91:
                var2 = '';
                if (!(var2 === var9)) {
                    _fun36846_ip = 111;
                    continue _fun36846
                }
            case 99:
                var2 = _closure1_slot19;
                var2 = var2.bind(var0)(var8, var3);
                _fun36846_ip = 227;
                continue _fun36846;
            case 111:
                var2 = _closure1_slot18;
                var7 = var2.bind(var0)(var4);
                var2 = var7[var8];
                if (!(var6 == var2)) {
                    _fun36846_ip = 137;
                    continue _fun36846
                }
            case 128:
                var4 = {};
                var7[var8] = var4;
                var2 = var4;
            case 137:
                var8 = var9.length;
                var7 = _closure1_slot12;
                var4 = var9;
                if (!(var8 > var7)) {
                    _fun36846_ip = 171;
                    continue _fun36846
                }
            case 153:
                var8 = var9.substr;
                var7 = _closure1_slot12;
                var5 = 0;
                var4 = var8.bind(var9)(var5, var7);
            case 171:
                var5 = var2[var3];
                var6 = var6 == var5;
                var0 = undefined;
                if (var6) {
                    _fun36846_ip = 190;
                    continue _fun36846
                }
            case 184:
                var0 = var5.draft;
            case 190:
                if (!(var4 !== var0)) {
                    _fun36846_ip = 227;
                    continue _fun36846
                }
            case 194:
                var0 = {};
                var5 = global;
                var6 = var5.Date;
                var5 = var6.now;
                var5 = var5.bind(var6)();
                var0.timestamp = var5;
                var0.draft = var4;
                var2[var3] = var0;
            case 227:
                var0 = 'DRAFT_SAVE';
                var0 = var0 === var1;
                return var0;
        }
    };
    var0 = function arg0, arg1() {
        _fun36847: for (var _fun36847_ip = 0;;) switch (_fun36847_ip) {
            case 0:
                var2 = arg0;
                var5 = arguments[2];
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun36847_ip = 29;
                    continue _fun36847
                }
            case 12:
                var3 = _closure1_slot9;
                var1 = var3.getId;
                var5 = var1.bind(var3)();
            case 29:
                var4 = null;
                if (!(var4 != var5)) {
                    _fun36847_ip = 106;
                    continue _fun36847
                }
            case 35:
                var1 = _closure1_slot18;
                var1 = var1.bind(var0)(var5);
                var5 = var1[var2];
                if (!(var4 != var5)) {
                    _fun36847_ip = 102;
                    continue _fun36847
                }
            case 55:
                var4 = arg1;
                var4 = delete var5[var4];
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 10;
                var3 = var6[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.isEmpty;
                var3 = var3.bind(var4)(var5);
                if (!var3) {
                    _fun36847_ip = 100;
                    continue _fun36847
                }
            case 96:
                var1 = delete var1[var2];
            case 100:
                return var0;
            case 102:
                var0 = false;
                return var0;
            case 106:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function() {
        _fun36848: for (var _fun36848_ip = 0;;) switch (_fun36848_ip) {
            case 0:
                var1 = _closure1_slot9;
                var0 = var1.getId;
                var2 = var0.bind(var1)();
                var6 = null;
                if (!(var6 != var2)) {
                    _fun36848_ip = 97;
                    continue _fun36848
                }
            case 23:
                var0 = _closure1_slot11;
                var1 = var0.totalUnavailableGuilds;
                var0 = 0;
                if (!(!(var1 > var0))) {
                    _fun36848_ip = 97;
                    continue _fun36848
                }
            case 39:
                var1 = _closure1_slot18;
                var0 = undefined;
                var5 = var1.bind(var0)(var2);
                var3 = var5;
                for (var0 in var3)
                    case 61: {
                        case 70: var8 = var0;
                        var10 = _closure1_slot10;
                        var9 = var10.getChannel;
                        var9 = var9.bind(var10)(var8);
                        if (var6 != var9) {
                            _fun36848_ip = 61;
                            continue _fun36848
                        }
                        case 91: var8 = delete var5[var8];
                        _fun36848_ip = 61;
                        continue _fun36848;
                    }
            case 97:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var10 = function arg0() {
        _fun36849: for (var _fun36849_ip = 0;;) switch (_fun36849_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var1 = var0.id;
                var3 = _closure1_slot9;
                var2 = var3.getId;
                var3 = var2.bind(var3)();
                var2 = null;
                if (!(var2 != var3)) {
                    _fun36849_ip = 51;
                    continue _fun36849
                }
            case 36:
                var2 = _closure1_slot18;
                var0 = undefined;
                var0 = var2.bind(var0)(var3);
                var0 = delete var0[var1];
            case 51:
                var0 = false;
                return var0;
        }
    };
    var0 = global;
    var8 = var0.Object;
    var3 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var8)(var2, var0, var1);
    var17 = 0;
    var1 = var6[var17];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var16 = 1;
    var1 = var6[var16];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var15 = 2;
    var1 = var6[var15];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var14 = 3;
    var1 = var6[var14];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var13 = 4;
    var1 = var6[var13];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var12 = 5;
    var1 = var6[var12];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var11 = 6;
    var1 = var6[var11];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var8 = 7;
    var1 = var6[var8];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var3 = var1.MAX_MESSAGE_LENGTH_PREMIUM;
    var1 = 500;
    var1 = var3 + var1;
    var _closure1_slot12 = var1;
    var1 = {};
    var1.ChannelMessage = var17;
    var3 = 'ChannelMessage';
    var1[var17] = var3;
    var1.ThreadSettings = var16;
    var3 = 'ThreadSettings';
    var1[var16] = var3;
    var1.FirstThreadMessage = var15;
    var3 = 'FirstThreadMessage';
    var1[var15] = var3;
    var1.ApplicationLauncherCommand = var14;
    var3 = 'ApplicationLauncherCommand';
    var1[var14] = var3;
    var1.Poll = var13;
    var3 = 'Poll';
    var1[var13] = var3;
    var1.SlashCommand = var12;
    var3 = 'SlashCommand';
    var1[var12] = var3;
    var1.ForwardContextMessage = var11;
    var3 = 'ForwardContextMessage';
    var1[var11] = var3;
    var1.InteractionModal = var8;
    var3 = 'InteractionModal';
    var1[var8] = var3;
    var _closure1_slot13 = var1;
    var3 = {};
    var _closure1_slot14 = var3;
    var3 = 13;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.PersistedStore;
    var3 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun36851: for (var _fun36851_ip = 0;;) switch (_fun36851_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot15;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun36851_ip = 69;
                        continue _fun36851
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun36851_ip = 105;
                    continue _fun36851;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun36852: for (var _fun36852_ip = 0;;) switch (_fun36852_ip) {
                case 0:
                    var0 = arg0;
                    var5 = this;
                    var13 = null;
                    if (!(var13 == var0)) {
                        _fun36852_ip = 14;
                        continue _fun36852
                    }
                case 12:
                    var0 = {};
                case 14:
                    _closure1_slot14 = var0;
                    var3 = _closure1_slot16;
                    var4 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var12 = 11;
                    var2 = var0[var12];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var2);
                    var4 = var6.entries;
                    var2 = _closure1_slot14;
                    var2 = var4.bind(var6)(var2);
                    var11 = var3.bind(var0)(var2);
                    var3 = var11.bind(var0)();
                    var2 = var3.done;
                    var10 = 2;
                    var9 = 0;
                    var8 = 1;
                    var7 = '';
                    var6 = var3;
                    var4 = undefined;
                    var3 = undefined;
                    if (var2) {
                        _fun36852_ip = 310;
                        continue _fun36852
                    }
                case 101:
                    var14 = var6.value;
                    var2 = _closure1_slot8;
                    var2 = var2.bind(var0)(var14, var10);
                    var16 = var2[var9];
                    var17 = var2[var8];
                    var14 = _closure1_slot16;
                    var15 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var12];
                    var15 = var15.bind(var0)(var2);
                    var2 = var15.entries;
                    var2 = var2.bind(var15)(var17);
                    var15 = var14.bind(var0)(var2);
                    var14 = var15.bind(var0)();
                    var2 = var14.done;
                    if (var2) {
                        _fun36852_ip = 292;
                        continue _fun36852
                    }
                case 173:
                    var17 = var14.value;
                    var2 = _closure1_slot8;
                    var2 = var2.bind(var0)(var17, var10);
                    var18 = var2[var9];
                    var17 = var2[var8];
                    var2 = _closure1_slot13;
                    var2 = var2.ChannelMessage;
                    var17 = var17[var2];
                    if (!(var13 != var17)) {
                        _fun36852_ip = 271;
                        continue _fun36852
                    }
                case 214:
                    var2 = var17.draft;
                    var2 = var7 !== var2;
                    if (!var2) {
                        _fun36852_ip = 247;
                        continue _fun36852
                    }
                case 227:
                    var20 = var17.draft;
                    var19 = var20.trim;
                    var19 = var19.bind(var20)();
                    var2 = var7 !== var19;
                case 247:
                    if (var2) {
                        _fun36852_ip = 271;
                        continue _fun36852
                    }
                case 250:
                    var19 = _closure1_slot19;
                    var2 = _closure1_slot13;
                    var2 = var2.ChannelMessage;
                    var2 = var19.bind(var0)(var18, var2, var16);
                case 271:
                    var19 = var15.bind(var0)();
                    var2 = var19.done;
                    var14 = var19;
                    var4 = var18;
                    var3 = var17;
                    if (!var2) {
                        _fun36852_ip = 173;
                        continue _fun36852
                    }
                case 292:
                    var14 = var11.bind(var0)();
                    var2 = var14.done;
                    var6 = var14;
                    if (!var2) {
                        _fun36852_ip = 101;
                        continue _fun36852
                    }
                case 310:
                    var4 = var5.waitFor;
                    var3 = _closure1_slot9;
                    var2 = _closure1_slot10;
                    var1 = _closure1_slot11;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot14;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getThreadDraftWithParentMessageId';
        var4.key = var6;
        var6 = function arg0() {
            _fun36854: for (var _fun36854_ip = 0;;) switch (_fun36854_ip) {
                case 0:
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var0 = arg0;
                    var _closure3_slot1 = var0;
                    var1 = _closure1_slot9;
                    var0 = var1.getId;
                    var6 = var0.bind(var1)();
                    var1 = null;
                    if (!(var1 == var6)) {
                        _fun36854_ip = 43;
                        continue _fun36854
                    }
                case 39:
                    var0 = undefined;
                    return var0;
                case 43:
                    var5 = _closure1_slot18;
                    var0 = undefined;
                    var6 = var5.bind(var0)(var6);
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 11;
                    var4 = var7[var4];
                    var5 = var5.bind(var0)(var4);
                    var4 = var5.keys;
                    var5 = var4.bind(var5)(var6);
                    var4 = var5.find;
                    var2 = function(arg0) { // Environment: var2
                        _fun36855: for (var _fun36855_ip = 0;;) switch (_fun36855_ip) {
                            case 0:
                                var3 = _closure3_slot0;
                                var2 = var3.getThreadSettings;
                                var1 = arg0;
                                var2 = var2.bind(var3)(var1);
                                var1 = null;
                                var3 = var1 == var2;
                                var1 = undefined;
                                if (var3) {
                                    _fun36855_ip = 38;
                                    continue _fun36855
                                }
                            case 32:
                                var1 = var2.parentMessageId;
                            case 38:
                                var0 = _closure3_slot1;
                                var0 = var1 === var0;
                                return var0;
                        }
                    };
                    var2 = var4.bind(var5)(var2);
                    var1 = var1 != var2;
                    if (!var1) {
                        _fun36854_ip = 117;
                        continue _fun36854
                    }
                case 106:
                    var1 = var3.getThreadSettings;
                    var0 = var1.bind(var3)(var2);
                case 117:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getRecentlyEditedDrafts';
        var4.key = var6;
        var6 = function arg0() {
            _fun36856: for (var _fun36856_ip = 0;;) switch (_fun36856_ip) {
                case 0:
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var3 = _closure1_slot9;
                    var2 = var3.getId;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun36856_ip = 172;
                        continue _fun36856
                    }
                case 35:
                    var2 = _closure1_slot18;
                    var5 = undefined;
                    var3 = var2.bind(var5)(var3);
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 10;
                    var2 = var6[var2];
                    var2 = var4.bind(var5)(var2);
                    var4 = var2.bind(var5)(var3);
                    var3 = var4.mapValues;
                    var2 = function(arg0) { // Environment: var0
                        _fun36857: for (var _fun36857_ip = 0;;) switch (_fun36857_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = null;
                                var1 = var0 == var2;
                                var0 = undefined;
                                if (var1) {
                                    _fun36857_ip = 25;
                                    continue _fun36857
                                }
                            case 14:
                                var1 = _closure3_slot0;
                                var0 = var2[var1];
                            case 25:
                                return var0;
                        }
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.pickBy;
                    var4 = _closure1_slot0;
                    var1 = 12;
                    var1 = var6[var1];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.isNotNullish;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.toPairs;
                    var3 = var1.bind(var2)();
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var0
                        _fun36858: for (var _fun36858_ip = 0;;) switch (_fun36858_ip) {
                            case 0:
                                var7 = arg0;
                                var1 = var7[Symbol.iterator];
                                var7 = var1().next;
                                var9 = undefined;
                                var2 = undefined;
                                var3 = undefined;
                                var8 = var7().value;
                                var10 = var1;
                                var10 = var10 === var9;
                                var2 = var10;
                                if (var10) {
                                    _fun36858_ip = 32;
                                    continue _fun36858
                                }
                            case 29:
                                var3 = var8;
                            case 32:
                                var6 = var3;
                                var3 = undefined;
                                var8 = var2;
                                if (var8) {
                                    _fun36858_ip = 63;
                                    continue _fun36858
                                }
                            case 43:
                                var7 = var7().value;
                                var8 = var1;
                                var8 = var8 === var9;
                                var2 = var8;
                                if (var8) {
                                    _fun36858_ip = 63;
                                    continue _fun36858
                                }
                            case 60:
                                var3 = var7;
                            case 63: // try_start_0
                                var5 = var3.timestamp;
                                var4 = var3.draft;
                            case 75: // try_end0
                                var3 = var2;
                                if (var3) {
                                    _fun36858_ip = 84;
                                    continue _fun36858
                                }
                            case 81:
                                var1.return();
                            case 84:
                                var3 = {};
                                var3.channelId = var6;
                                var3.timestamp = var5;
                                var3.draft = var4;
                                return var3;
                            case 102: // catch_target0
                                CatchBlockStart(arg_register = 0);
                                _fun36858_ip = 108;
                                continue _fun36858;
                            case 106:
                                CatchBlockStart(arg_register = 0);
                            case 108:
                                if (var2) {
                                    _fun36858_ip = 114;
                                    continue _fun36858
                                }
                            case 111:
                                var1.return();
                            case 114:
                                throw var0;
                        }
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.sortBy;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.timestamp;
                        var0 = -var0;
                        return var0;
                    };
                    var1 = var1.bind(var2)(var0);
                    var0 = var1.value;
                    var0 = var0.bind(var1)();
                    return var0;
                case 172:
                    var0 = new Array(0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getDraft';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun36860: for (var _fun36860_ip = 0;;) switch (_fun36860_ip) {
                case 0:
                    var2 = _closure1_slot9;
                    var1 = var2.getId;
                    var3 = var1.bind(var2)();
                    var1 = null;
                    if (!(var1 != var3)) {
                        _fun36860_ip = 70;
                        continue _fun36860
                    }
                case 23:
                    var2 = _closure1_slot18;
                    var0 = undefined;
                    var2 = var2.bind(var0)(var3);
                    var0 = arg0;
                    var2 = var2[var0];
                    if (!(var1 != var2)) {
                        _fun36860_ip = 56;
                        continue _fun36860
                    }
                case 45:
                    var0 = arg1;
                    var0 = var2[var0];
                    if (!(var1 == var0)) {
                        _fun36860_ip = 62;
                        continue _fun36860
                    }
                case 56:
                    var1 = '';
                    return var1;
                case 62:
                    var0 = var0.draft;
                    return var0;
                case 70:
                    var0 = '';
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getThreadSettings';
        var4.key = var6;
        var5 = function arg0() {
            _fun36861: for (var _fun36861_ip = 0;;) switch (_fun36861_ip) {
                case 0:
                    var1 = _closure1_slot9;
                    var0 = var1.getId;
                    var4 = var0.bind(var1)();
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun36861_ip = 66;
                        continue _fun36861
                    }
                case 23:
                    var3 = _closure1_slot18;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var4);
                    var1 = arg0;
                    var3 = var3[var1];
                    var4 = var0 == var3;
                    var1 = null;
                    if (var4) {
                        _fun36861_ip = 64;
                        continue _fun36861
                    }
                case 50:
                    var2 = _closure1_slot13;
                    var2 = var2.ThreadSettings;
                    var1 = var3[var2];
                case 64:
                    return var1;
                case 66:
                    return var0;
            }
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'DraftStore';
    var8.displayName = var3;
    var8.persistKey = var3;
    var3 = new Array(2);
    var11 = function(arg0) { // Environment: var4
        _fun36862: for (var _fun36862_ip = 0;;) switch (_fun36862_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun36862_ip = 79;
                    continue _fun36862
                }
            case 9:
                var6 = var0;
                var1 = 'timestamp';
                for (var3 in var6)
                    case 27: {
                        case 36: var9 = var3;
                        var8 = var0[var9];
                        var8 = var1 in var8;
                        if (!var8) {
                            _fun36862_ip = 27;
                            continue _fun36862
                        }
                        case 50: var8 = {};
                        var10 = _closure1_slot13;
                        var11 = var10.ChannelMessage;
                        var10 = var0[var9];
                        var8[var11] = var10;
                        var0[var9] = var8;
                        _fun36862_ip = 27;
                        continue _fun36862;
                    }
            case 77:
                return var0;
            case 79:
                var0 = {};
                return var0;
        }
    };
    var3[0] = var11;
    var11 = function(arg0) { // Environment: var4
        _fun36863: for (var _fun36863_ip = 0;;) switch (_fun36863_ip) {
            case 0:
                var7 = arg0;
                var1 = _closure1_slot9;
                var0 = var1.getId;
                var1 = var0.bind(var1)();
                var0 = null;
                if (!(var0 != var7)) {
                    _fun36863_ip = 73;
                    continue _fun36863
                }
            case 26:
                if (!(var0 != var1)) {
                    _fun36863_ip = 73;
                    continue _fun36863
                }
            case 30:
                var0 = {};
                var6 = {};
                var0[var1] = var6;
                var4 = var7;
                for (var1 in var4)
                    case 49: {
                        case 58: var9 = var1;
                        var8 = var7[var9];
                        var6[var9] = var8;
                        _fun36863_ip = 49;
                        continue _fun36863;
                    }
            case 71:
                return var0;
            case 73:
                var0 = {};
                return var0;
        }
    };
    var3[1] = var11;
    var8.migrations = var3;
    var3 = 14;
    var3 = var6[var3];
    var20 = var7.bind(var0)(var3);
    var3 = {};
    var11 = function() {
        _fun36864: for (var _fun36864_ip = 0;;) switch (_fun36864_ip) {
            case 0:
                var2 = _closure1_slot9;
                var1 = var2.getId;
                var3 = var1.bind(var2)();
                var1 = _closure1_slot14;
                var1 = var3 in var1;
                if (var1) {
                    _fun36864_ip = 38;
                    continue _fun36864
                }
            case 28:
                var2 = _closure1_slot14;
                var1 = {};
                var2[var3] = var1;
            case 38:
                var1 = _closure1_slot20;
                var0 = undefined;
                var0 = var1.bind(var0)();
                var0 = false;
                return var0;
        }
    };
    var3.CONNECTION_OPEN = var11;
    var11 = function arg0() {
        _fun36865: for (var _fun36865_ip = 0;;) switch (_fun36865_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.isSwitchingAccount;
                if (var0) {
                    _fun36865_ip = 21;
                    continue _fun36865
                }
            case 12:
                var0 = {};
                _closure1_slot14 = var0;
            case 21:
                var0 = undefined;
                return var0;
        }
    };
    var3.LOGOUT = var11;
    var11 = function arg0() {
        _fun36866: for (var _fun36866_ip = 0;;) switch (_fun36866_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.userId;
                var2 = _closure1_slot14;
                var2 = var3 in var2;
                if (!var2) {
                    _fun36866_ip = 35;
                    continue _fun36866
                }
            case 22:
                var1 = _closure1_slot14;
                var0 = var0.userId;
                var0 = delete var1[var0];
            case 35:
                var0 = undefined;
                return var0;
        }
    };
    var3.MULTI_ACCOUNT_REMOVE_ACCOUNT = var11;
    var11 = function() {
        var1 = _closure1_slot20;
        var0 = undefined;
        var0 = var1.bind(var0)();
        var0 = false;
        return var0;
    };
    var3.GUILD_DELETE = var11;
    var3.CHANNEL_DELETE = var10;
    var3.THREAD_DELETE = var10;
    var10 = function arg0() {
        _fun36868: for (var _fun36868_ip = 0;;) switch (_fun36868_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channel;
                var3 = _closure1_slot9;
                var0 = var3.getId;
                var5 = var0.bind(var3)();
                var3 = null;
                if (!(var3 != var5)) {
                    _fun36868_ip = 329;
                    continue _fun36868
                }
            case 34:
                var0 = var2.ownerId;
                if (!(var0 !== var5)) {
                    _fun36868_ip = 329;
                    continue _fun36868
                }
            case 47:
                var4 = _closure1_slot18;
                var0 = undefined;
                var5 = var4.bind(var0)(var5);
                var4 = var2.parent_id;
                var6 = var5[var4];
                if (!(var3 != var6)) {
                    _fun36868_ip = 325;
                    continue _fun36868
                }
            case 75:
                var4 = _closure1_slot13;
                var4 = var4.ThreadSettings;
                var4 = var6[var4];
                if (!(var3 != var4)) {
                    _fun36868_ip = 321;
                    continue _fun36868
                }
            case 96:
                var6 = var4.parentMessageId;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 11;
                var4 = var8[var4];
                var8 = var7.bind(var0)(var4);
                var7 = var8.castChannelIdAsMessageId;
                var4 = var2.id;
                var4 = var7.bind(var8)(var4);
                if (!(var6 === var4)) {
                    _fun36868_ip = 317;
                    continue _fun36868
                }
            case 145:
                var4 = var2.parent_id;
                var6 = var5[var4];
                if (!(var3 != var6)) {
                    _fun36868_ip = 313;
                    continue _fun36868
                }
            case 162:
                var4 = _closure1_slot13;
                var4 = var4.FirstThreadMessage;
                var6 = var6[var4];
                var7 = var3 == var6;
                var4 = undefined;
                if (var7) {
                    _fun36868_ip = 191;
                    continue _fun36868
                }
            case 185:
                var4 = var6.draft;
            case 191:
                var6 = var3 != var4;
                var3 = '';
                var8 = var3;
                if (!var6) {
                    _fun36868_ip = 208;
                    continue _fun36868
                }
            case 205:
                var8 = var4;
            case 208:
                if (!(var3 !== var8)) {
                    _fun36868_ip = 267;
                    continue _fun36868
                }
            case 212:
                var4 = var2.id;
                var3 = {};
                var6 = _closure1_slot13;
                var7 = var6.ChannelMessage;
                var6 = {};
                var9 = global;
                var10 = var9.Date;
                var9 = var10.now;
                var9 = var9.bind(var10)();
                var6.timestamp = var9;
                var6.draft = var8;
                var3[var7] = var6;
                var5[var4] = var3;
            case 267:
                var3 = _closure1_slot19;
                var5 = var2.parent_id;
                var1 = _closure1_slot13;
                var4 = var1.ThreadSettings;
                var4 = var3.bind(var0)(var5, var4);
                var2 = var2.parent_id;
                var1 = var1.FirstThreadMessage;
                var1 = var3.bind(var0)(var2, var1);
                return var0;
            case 313:
                var0 = false;
                return var0;
            case 317:
                var0 = false;
                return var0;
            case 321:
                var0 = false;
                return var0;
            case 325:
                var0 = false;
                return var0;
            case 329:
                var0 = false;
                return var0;
        }
    };
    var3.THREAD_CREATE = var10;
    var3.DRAFT_SAVE = var9;
    var3.DRAFT_CHANGE = var9;
    var9 = function arg0() {
        var0 = arg0;
        var3 = var0.channelId;
        var2 = var0.draftType;
        var1 = _closure1_slot19;
        var0 = undefined;
        var0 = var1.bind(var0)(var3, var2);
        return var0;
    };
    var3.DRAFT_CLEAR = var9;
    var4 = function arg0() {
        _fun36870: for (var _fun36870_ip = 0;;) switch (_fun36870_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.channelId;
                var3 = var0.draft;
                var2 = _closure1_slot9;
                var1 = var2.getId;
                var6 = var1.bind(var2)();
                var1 = null;
                if (!(var1 != var6)) {
                    _fun36870_ip = 139;
                    continue _fun36870
                }
            case 37:
                var5 = _closure1_slot18;
                var2 = undefined;
                var5 = var5.bind(var2)(var6);
                var2 = var5[var4];
                if (!(var1 == var2)) {
                    _fun36870_ip = 65;
                    continue _fun36870
                }
            case 56:
                var1 = {};
                var5[var4] = var1;
                var2 = var1;
            case 65:
                var5 = _closure1_slot13;
                var1 = var5.ThreadSettings;
                var0 = {};
                var6 = global;
                var7 = var6.Date;
                var6 = var7.now;
                var6 = var6.bind(var7)();
                var0.timestamp = var6;
                var5 = var5.ThreadSettings;
                var8 = var2[var5];
                var9 = var0;
                var5 = copyDataProperties(var9, var8);
                var9 = var0;
                var8 = var3;
                var3 = copyDataProperties(var9, var8);
                var3 = 'parentChannelId';
                var0[var3] = var4;
                var2[var1] = var0;
            case 139:
                var0 = undefined;
                return var0;
        }
    };
    var3.THREAD_SETTINGS_DRAFT_CHANGE = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var21 = var4;
    var19 = var3;
    var3 = new var21[var8](var20, var19, var18);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/DraftStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.DraftType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 1216, 1372, 4002, 660, 22, 21, 1304, 566, 806, 2]);