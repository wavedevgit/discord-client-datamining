// modules/reply_nudge/ReplyNudgeStore.tsx
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
        _fun67404: for (var _fun67404_ip = 0;;) switch (_fun67404_ip) {
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
            case 72: // try_end0
                _fun67404_ip = 76;
                continue _fun67404;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot25 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function arg0, arg1() {
        _fun67407: for (var _fun67407_ip = 0;;) switch (_fun67407_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun67407_ip = 46;
                    continue _fun67407
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun67407_ip = 55;
                    continue _fun67407
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun67407_ip = 345;
                    continue _fun67407
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun67407_ip = 323;
                    continue _fun67407
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun67407_ip = 283;
                    continue _fun67407
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun67407_ip = 270;
                    continue _fun67407
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
                    _fun67407_ip = 163;
                    continue _fun67407
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun67407_ip = 179;
                    continue _fun67407
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun67407_ip = 249;
                    continue _fun67407
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun67407_ip = 249;
                    continue _fun67407
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun67407_ip = 234;
                    continue _fun67407
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun67407_ip = 247;
                    continue _fun67407
                }
            case 234:
                var8 = _closure1_slot27;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun67407_ip = 265;
                continue _fun67407;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun67407_ip = 283;
                continue _fun67407;
            case 270:
                var6 = _closure1_slot27;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun67407_ip = 323;
                    continue _fun67407
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
                    _fun67407_ip = 330;
                    continue _fun67407
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun67408: for (var _fun67408_ip = 0;;) switch (_fun67408_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun67408_ip = 56;
                                continue _fun67408
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
                            _fun67408_ip = 67;
                            continue _fun67408;
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
    var _closure1_slot26 = var0;
    var0 = function arg0, arg1() {
        _fun67409: for (var _fun67409_ip = 0;;) switch (_fun67409_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun67409_ip = 23;
                    continue _fun67409
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun67409_ip = 33;
                    continue _fun67409
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
                    _fun67409_ip = 70;
                    continue _fun67409
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun67409_ip = 55;
                    continue _fun67409
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function arg0, arg1() {
        _fun67410: for (var _fun67410_ip = 0;;) switch (_fun67410_ip) {
            case 0:
                var0 = arg1;
                var1 = var0.maxNudgeAge;
                var _closure2_slot0 = var1;
                var0 = var0.maxNudgeCount;
                var _closure2_slot1 = var0;
                var10 = undefined;
                var _closure2_slot5 = var10;
                var _closure2_slot6 = var10;
                var1 = global;
                var2 = var1.Date;
                var0 = var2.now;
                var0 = var0.bind(var2)();
                var _closure2_slot2 = var0;
                var0 = {};
                var _closure2_slot3 = var0;
                var4 = var1.Object;
                var3 = var4.entries;
                var2 = arg0;
                var4 = var3.bind(var4)(var2);
                var3 = var4.sort;
                var2 = function(arg0, arg1) { // Environment: var11
                    var0 = arg1;
                    var2 = 1;
                    var0 = var0[var2];
                    var1 = var0.timestamp;
                    var0 = arg0;
                    var0 = var0[var2];
                    var0 = var0.timestamp;
                    var0 = var1 - var0;
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                var9 = 0;
                var _closure2_slot4 = var9;
                var8 = function arg0, arg1, arg2, arg3() {
                    _fun67412: for (var _fun67412_ip = 0;;) switch (_fun67412_ip) {
                        case 0:
                            var5 = arg0;
                            var9 = arg1;
                            var8 = arg2;
                            var7 = arg3;
                            var _closure3_slot0 = var5;
                            var _closure3_slot1 = var9;
                            var _closure3_slot2 = var8;
                            var _closure3_slot3 = var7;
                            var2 = _closure2_slot5;
                            var11 = null;
                            if (!(var11 != var2)) {
                                _fun67412_ip = 357;
                                continue _fun67412
                            }
                        case 46:
                            var3 = _closure2_slot2;
                            var2 = _closure2_slot5;
                            var4 = var3 - var2;
                            var3 = _closure1_slot18;
                            if (!(var4 < var3)) {
                                _fun67412_ip = 357;
                                continue _fun67412
                            }
                        case 72:
                            var4 = _closure2_slot2;
                            var3 = _closure2_slot5;
                            var6 = var4 - var3;
                            var _closure3_slot4 = var6;
                            var4 = _closure1_slot14;
                            var3 = var4.lastMessageId;
                            var3 = var3.bind(var4)(var5);
                            var10 = _closure2_slot6;
                            if (!var10) {
                                _fun67412_ip = 118;
                                continue _fun67412
                            }
                        case 110:
                            var4 = _closure2_slot0;
                            var10 = var6 >= var4;
                        case 118:
                            var6 = _closure2_slot6;
                            if (!var6) {
                                _fun67412_ip = 137;
                                continue _fun67412
                            }
                        case 125:
                            var12 = _closure2_slot4;
                            var4 = _closure2_slot1;
                            var6 = var12 >= var4;
                        case 137:
                            var4 = _closure2_slot6;
                            if (!var4) {
                                _fun67412_ip = 148;
                                continue _fun67412
                            }
                        case 144:
                            var4 = var3 !== var9;
                        case 148:
                            var3 = _closure2_slot6;
                            if (!var3) {
                                _fun67412_ip = 158;
                                continue _fun67412
                            }
                        case 155:
                            var3 = !var10;
                        case 158:
                            if (!var3) {
                                _fun67412_ip = 164;
                                continue _fun67412
                            }
                        case 161:
                            var3 = !var6;
                        case 164:
                            if (!var3) {
                                _fun67412_ip = 170;
                                continue _fun67412
                            }
                        case 167:
                            var3 = !var4;
                        case 170:
                            var _closure3_slot5 = var11;
                            if (var10) {
                                _fun67412_ip = 207;
                                continue _fun67412
                            }
                        case 177:
                            if (var6) {
                                _fun67412_ip = 195;
                                continue _fun67412
                            }
                        case 180:
                            if (!var4) {
                                _fun67412_ip = 217;
                                continue _fun67412
                            }
                        case 183:
                            var4 = 'more_recent_message';
                            _closure3_slot5 = var4;
                            _fun67412_ip = 217;
                            continue _fun67412;
                        case 195:
                            var4 = 'evicted_max_count';
                            _closure3_slot5 = var4;
                            _fun67412_ip = 217;
                            continue _fun67412;
                        case 207:
                            var4 = 'aged_out';
                            _closure3_slot5 = var4;
                        case 217:
                            var6 = _closure2_slot3;
                            var4 = {};
                            var10 = _closure2_slot5;
                            var4.timestamp = var10;
                            var4.isActive = var3;
                            var4.lastMessageId = var9;
                            var4.affinity = var8;
                            var4.authorId = var7;
                            var6[var5] = var4;
                            if (var3) {
                                _fun67412_ip = 346;
                                continue _fun67412
                            }
                        case 259:
                            var4 = _closure2_slot6;
                            if (!var4) {
                                _fun67412_ip = 357;
                                continue _fun67412
                            }
                        case 266:
                            if (var3) {
                                _fun67412_ip = 357;
                                continue _fun67412
                            }
                        case 269:
                            var4 = _closure1_slot13;
                            var3 = var4.getChannel;
                            var3 = var3.bind(var4)(var5);
                            var _closure3_slot6 = var3;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var3 = 19;
                            var3 = var2[var3];
                            var5 = undefined;
                            var4 = var4.bind(var5)(var3);
                            var3 = 18;
                            var3 = var2[var3];
                            var2 = var2.paths;
                            var3 = var4.bind(var5)(var3, var2);
                            var2 = var3.then;
                            var0 = function(arg0) { // Environment: var0
                                _fun67413: for (var _fun67413_ip = 0;;) switch (_fun67413_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var7 = var0.default;
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 20;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var4 = var2.bind(var0)(var1);
                                        var3 = var4.track;
                                        var1 = _closure1_slot19;
                                        var2 = var1.REPLY_NUDGE_DISMISSED;
                                        var1 = {};
                                        var8 = _closure3_slot0;
                                        var1.channel_id = var8;
                                        var8 = _closure3_slot6;
                                        var9 = null;
                                        var10 = var9 == var8;
                                        var8 = undefined;
                                        if (var10) {
                                            _fun67413_ip = 85;
                                            continue _fun67413
                                        }
                                    case 76:
                                        var10 = _closure3_slot6;
                                        var8 = var10.type;
                                    case 85:
                                        var1.channel_type = var8;
                                        var8 = _closure3_slot6;
                                        var9 = var9 == var8;
                                        var8 = undefined;
                                        if (var9) {
                                            _fun67413_ip = 112;
                                            continue _fun67413
                                        }
                                    case 103:
                                        var9 = _closure3_slot6;
                                        var8 = var9.guild_id;
                                    case 112:
                                        var1.guild_id = var8;
                                        var8 = _closure3_slot5;
                                        var1.dismiss_method = var8;
                                        var8 = _closure3_slot4;
                                        var1.nudge_age_ms = var8;
                                        var8 = _closure3_slot2;
                                        var1.nudge_author_affinity = var8;
                                        var9 = _closure3_slot3;
                                        var1.nudge_author_id = var9;
                                        var8 = _closure1_slot15;
                                        var6 = var8.isFriend;
                                        var6 = var6.bind(var8)(var9);
                                        var1.nudge_author_is_friend = var6;
                                        var6 = _closure3_slot1;
                                        var1.nudge_message_id = var6;
                                        var6 = var7.getPrivateChannelIds;
                                        var7 = var6.bind(var7)();
                                        var6 = var7.indexOf;
                                        var5 = _closure3_slot0;
                                        var5 = var6.bind(var7)(var5);
                                        var1.channel_dm_list_index = var5;
                                        var1 = var3.bind(var4)(var2, var1);
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var0);
                            _fun67412_ip = 357;
                            continue _fun67412;
                        case 346:
                            var0 = _closure2_slot4;
                            var0 = var0 + 1;
                            _closure2_slot4 = var0;
                        case 357:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var4.length;
                var3 = var9 < var2;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                if (!var3) {
                    _fun67410_ip = 214;
                    continue _fun67410
                }
            case 136:
                var12 = var4[var5];
                var3 = _closure1_slot8;
                var3 = var3.bind(var10)(var12, var7);
                var18 = var3[var9];
                var3 = var3[var6];
                var12 = var3.timestamp;
                _closure2_slot5 = var12;
                var12 = var3.isActive;
                _closure2_slot6 = var12;
                var17 = var3.lastMessageId;
                var16 = var3.affinity;
                var15 = var3.authorId;
                var19 = undefined;
                var3 = var19[var8](var18, var17, var16, var15, var14);
                var5 = var5 + 1;
                var3 = var4.length;
                if (var5 < var3) {
                    _fun67410_ip = 136;
                    continue _fun67410
                }
            case 214:
                var3 = _closure1_slot20;
                var2 = var3.info;
                var5 = var4.length;
                var6 = var1.Object;
                var4 = var6.keys;
                var4 = var4.bind(var6)(var0);
                var4 = var4.length;
                var6 = var5 - var4;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var4 = 'Pruned ';
                var1 = ' expired nudges';
                var1 = var5.bind(var4)(var6, var1);
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function arg0, arg1() {
        _fun67414: for (var _fun67414_ip = 0;;) switch (_fun67414_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var2 = _closure1_slot23;
                var2 = var4 in var2;
                if (var2) {
                    _fun67414_ip = 34;
                    continue _fun67414
                }
            case 30:
                var2 = false;
                return var2;
            case 34:
                var2 = _closure1_slot23;
                var2 = var2[var4];
                var _closure2_slot2 = var2;
                var3 = var2.isActive;
                if (var3) {
                    _fun67414_ip = 59;
                    continue _fun67414
                }
            case 55:
                var3 = false;
                return var3;
            case 59:
                var3 = global;
                var5 = var3.Date;
                var3 = var5.now;
                var3 = var3.bind(var5)();
                var2 = var2.timestamp;
                var2 = var3 - var2;
                var _closure2_slot3 = var2;
                var2 = _closure1_slot23;
                var3 = var2[var4];
                var2 = false;
                var3.isActive = var2;
                var3 = _closure1_slot13;
                var2 = var3.getChannel;
                var2 = var2.bind(var3)(var4);
                var _closure2_slot4 = var2;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = 19;
                var2 = var1[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = 18;
                var2 = var1[var2];
                var1 = var1.paths;
                var2 = var3.bind(var4)(var2, var1);
                var1 = var2.then;
                var0 = function(arg0) { // Environment: var0
                    _fun67415: for (var _fun67415_ip = 0;;) switch (_fun67415_ip) {
                        case 0:
                            var0 = arg0;
                            var7 = var0.default;
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 20;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.track;
                            var1 = _closure1_slot19;
                            var2 = var1.REPLY_NUDGE_DISMISSED;
                            var1 = {};
                            var8 = _closure2_slot0;
                            var1.channel_id = var8;
                            var8 = _closure2_slot4;
                            var9 = null;
                            var10 = var9 == var8;
                            var8 = undefined;
                            if (var10) {
                                _fun67415_ip = 85;
                                continue _fun67415
                            }
                        case 76:
                            var10 = _closure2_slot4;
                            var8 = var10.type;
                        case 85:
                            var1.channel_type = var8;
                            var8 = _closure2_slot4;
                            var9 = var9 == var8;
                            var8 = undefined;
                            if (var9) {
                                _fun67415_ip = 112;
                                continue _fun67415
                            }
                        case 103:
                            var9 = _closure2_slot4;
                            var8 = var9.guild_id;
                        case 112:
                            var1.guild_id = var8;
                            var8 = _closure2_slot1;
                            var1.dismiss_method = var8;
                            var8 = _closure2_slot3;
                            var1.nudge_age_ms = var8;
                            var8 = _closure2_slot2;
                            var8 = var8.affinity;
                            var1.nudge_author_affinity = var8;
                            var8 = _closure2_slot2;
                            var8 = var8.authorId;
                            var1.nudge_author_id = var8;
                            var8 = _closure2_slot2;
                            var8 = var8.lastMessageId;
                            var1.nudge_message_id = var8;
                            var9 = _closure1_slot15;
                            var8 = var9.isFriend;
                            var6 = _closure2_slot2;
                            var6 = var6.authorId;
                            var6 = var8.bind(var9)(var6);
                            var1.nudge_author_is_friend = var6;
                            var6 = var7.getPrivateChannelIds;
                            var7 = var6.bind(var7)();
                            var6 = var7.indexOf;
                            var5 = _closure2_slot0;
                            var5 = var6.bind(var7)(var5);
                            var1.channel_dm_list_index = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function() {
        _fun67416: for (var _fun67416_ip = 0;;) switch (_fun67416_ip) {
            case 0:
                var0 = new Array(0);
                var1 = global;
                var3 = var1.Object;
                var2 = var3.entries;
                var1 = _closure1_slot23;
                var7 = var2.bind(var3)(var1);
                var1 = var7.length;
                var6 = 0;
                var1 = var6 < var1;
                var5 = undefined;
                var4 = 2;
                var3 = 1;
                var2 = 0;
                if (!var1) {
                    _fun67416_ip = 107;
                    continue _fun67416
                }
            case 54:
                var9 = var7[var2];
                var1 = _closure1_slot8;
                var1 = var1.bind(var5)(var9, var4);
                var9 = var1[var6];
                var1 = var1[var3];
                var1 = var1.isActive;
                if (!var1) {
                    _fun67416_ip = 95;
                    continue _fun67416
                }
            case 85:
                var1 = var0.push;
                var1 = var1.bind(var0)(var9);
            case 95:
                var2 = var2 + 1;
                var1 = var7.length;
                if (var2 < var1) {
                    _fun67416_ip = 54;
                    continue _fun67416
                }
            case 107:
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function arg0() {
        _fun67417: for (var _fun67417_ip = 0;;) switch (_fun67417_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot13;
                var0 = var3.getChannel;
                var5 = var0.bind(var3)(var1);
                var0 = null;
                if (!(var0 != var5)) {
                    _fun67417_ip = 134;
                    continue _fun67417
                }
            case 26:
                var3 = var0 == var5;
                var6 = undefined;
                if (var3) {
                    _fun67417_ip = 45;
                    continue _fun67417
                }
            case 35:
                var3 = var5.isDM;
                var6 = var3.bind(var5)();
            case 45:
                var3 = true;
                if (!(var3 === var6)) {
                    _fun67417_ip = 105;
                    continue _fun67417
                }
            case 51:
                var3 = var5.getRecipientId;
                var6 = var3.bind(var5)();
                var5 = _closure1_slot10;
                var3 = var5.getUserAffinity;
                var3 = var3.bind(var5)(var6);
                var5 = var0 == var3;
                var4 = undefined;
                if (var5) {
                    _fun67417_ip = 91;
                    continue _fun67417
                }
            case 85:
                var4 = var3.dmProbability;
            case 91:
                var5 = var0 != var4;
                var3 = null;
                if (!var5) {
                    _fun67417_ip = 103;
                    continue _fun67417
                }
            case 100:
                var3 = var4;
            case 103:
                return var3;
            case 105:
                var6 = _closure1_slot20;
                var5 = var6.warn;
                var4 = {};
                var4.channelId = var1;
                var3 = 'getDMChannelAffinity: Channel is not a DM';
                var3 = var5.bind(var6)(var3, var4);
                return var0;
            case 134:
                var4 = _closure1_slot20;
                var3 = var4.warn;
                var2 = {};
                var2.channelId = var1;
                var1 = 'getDMChannelAffinity: Unable to find channel';
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = function() {
        _fun67418: for (var _fun67418_ip = 0;;) switch (_fun67418_ip) {
            case 0:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = 21;
                var4 = var0[var1];
                var1 = undefined;
                var4 = var2.bind(var1)(var4);
                var6 = var4.ReplyNudgeExperiment;
                var5 = var6.getConfig;
                var4 = {};
                var7 = 'handleNudgeVisibilityChange';
                var4.location = var7;
                var5 = var5.bind(var6)(var4);
                var4 = var5.displayNudges;
                var8 = var5.maxNudgeAge;
                var7 = var5.maxNudgeCount;
                var5 = 22;
                var0 = var0[var5];
                var0 = var2.bind(var1)(var0);
                var2 = var0.EnableDmReplyNudgeReminders;
                var0 = var2.getSetting;
                var2 = var0.bind(var2)();
                var0 = false;
                var2 = var0 !== var2;
                if (!var2) {
                    _fun67418_ip = 112;
                    continue _fun67418
                }
            case 109:
                var2 = var4;
            case 112:
                var4 = _closure1_slot21;
                if (!(var4 !== var2)) {
                    _fun67418_ip = 277;
                    continue _fun67418
                }
            case 123:
                _closure1_slot21 = var2;
                if (!var2) {
                    _fun67418_ip = 200;
                    continue _fun67418
                }
            case 130:
                var6 = _closure1_slot28;
                var4 = _closure1_slot23;
                var2 = {};
                var2.maxNudgeAge = var8;
                var2.maxNudgeCount = var7;
                var2 = var6.bind(var1)(var4, var2);
                _closure1_slot23 = var2;
                var2 = global;
                var6 = var2.Set;
                var2 = _closure1_slot30;
                var10 = var2.bind(var1)();
                var4 = var6.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = var4;
                var2 = new var11[var6](var10, var9);
                var2 = var2 instanceof Object ? var2 : var4;
                _closure1_slot24 = var2;
            case 200:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var4 = var2.EnableDmReplyNudgeReminders;
                var2 = var4.getSetting;
                var2 = var2.bind(var4)();
                if (!(var0 === var2)) {
                    _fun67418_ip = 275;
                    continue _fun67418
                }
            case 237:
                var2 = {};
                _closure1_slot23 = var2;
                var2 = global;
                var2 = var2.Set;
                var4 = var2.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var2
                    }
                });
                var11 = var4;
                var2 = new var11[var2](var10);
                var2 = var2 instanceof Object ? var2 : var4;
                _closure1_slot24 = var2;
            case 275:
                return var1;
            case 277:
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = function() {
        _fun67419: for (var _fun67419_ip = 0;;) switch (_fun67419_ip) {
            case 0:
                var1 = false;
                var _closure2_slot0 = var1;
                var5 = function arg0() {
                    _fun67420: for (var _fun67420_ip = 0;;) switch (_fun67420_ip) {
                        case 0:
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var5 = _closure1_slot17;
                            var3 = var5.isChannelMuted;
                            var4 = null;
                            var3 = var3.bind(var5)(var4, var1);
                            if (!var3) {
                                _fun67420_ip = 150;
                                continue _fun67420
                            }
                        case 33:
                            var3 = _closure1_slot23;
                            var3 = var3[var1];
                            var _closure3_slot1 = var3;
                            if (!(var4 != var3)) {
                                _fun67420_ip = 133;
                                continue _fun67420
                            }
                        case 49:
                            var3 = var3.isActive;
                            if (!var3) {
                                _fun67420_ip = 133;
                                continue _fun67420
                            }
                        case 58:
                            var4 = _closure1_slot13;
                            var3 = var4.getChannel;
                            var3 = var3.bind(var4)(var1);
                            var _closure3_slot2 = var3;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var4 = 19;
                            var4 = var3[var4];
                            var6 = undefined;
                            var5 = var5.bind(var6)(var4);
                            var4 = 18;
                            var4 = var3[var4];
                            var3 = var3.paths;
                            var4 = var5.bind(var6)(var4, var3);
                            var3 = var4.then;
                            var2 = function(arg0) { // Environment: var2
                                _fun67421: for (var _fun67421_ip = 0;;) switch (_fun67421_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var7 = var0.default;
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 20;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var4 = var2.bind(var0)(var1);
                                        var3 = var4.track;
                                        var1 = _closure1_slot19;
                                        var2 = var1.REPLY_NUDGE_DISMISSED;
                                        var1 = {};
                                        var8 = _closure3_slot0;
                                        var1.channel_id = var8;
                                        var8 = _closure3_slot2;
                                        var9 = null;
                                        var10 = var9 == var8;
                                        var8 = undefined;
                                        if (var10) {
                                            _fun67421_ip = 85;
                                            continue _fun67421
                                        }
                                    case 76:
                                        var10 = _closure3_slot2;
                                        var8 = var10.type;
                                    case 85:
                                        var1.channel_type = var8;
                                        var8 = _closure3_slot2;
                                        var9 = var9 == var8;
                                        var8 = undefined;
                                        if (var9) {
                                            _fun67421_ip = 112;
                                            continue _fun67421
                                        }
                                    case 103:
                                        var9 = _closure3_slot2;
                                        var8 = var9.guild_id;
                                    case 112:
                                        var1.guild_id = var8;
                                        var8 = 'channel_muted';
                                        var1.dismiss_method = var8;
                                        var8 = global;
                                        var9 = var8.Date;
                                        var8 = var9.now;
                                        var9 = var8.bind(var9)();
                                        var8 = _closure3_slot1;
                                        var8 = var8.timestamp;
                                        var8 = var9 - var8;
                                        var1.nudge_age_ms = var8;
                                        var8 = _closure3_slot1;
                                        var8 = var8.affinity;
                                        var1.nudge_author_affinity = var8;
                                        var8 = _closure3_slot1;
                                        var8 = var8.authorId;
                                        var1.nudge_author_id = var8;
                                        var8 = _closure3_slot1;
                                        var8 = var8.lastMessageId;
                                        var1.nudge_message_id = var8;
                                        var9 = _closure1_slot15;
                                        var8 = var9.isFriend;
                                        var6 = _closure3_slot1;
                                        var6 = var6.authorId;
                                        var6 = var8.bind(var9)(var6);
                                        var1.nudge_author_is_friend = var6;
                                        var6 = var7.getPrivateChannelIds;
                                        var7 = var6.bind(var7)();
                                        var6 = var7.indexOf;
                                        var5 = _closure3_slot0;
                                        var5 = var6.bind(var7)(var5);
                                        var1.channel_dm_list_index = var5;
                                        var1 = var3.bind(var4)(var2, var1);
                                        return var0;
                                }
                            };
                            var2 = var3.bind(var4)(var2);
                        case 133:
                            var0 = _closure1_slot23;
                            var0 = delete var0[var1];
                            var0 = true;
                            _closure2_slot0 = var0;
                        case 150:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var1 = _closure1_slot23;
                var4 = var2.bind(var3)(var1);
                var1 = var4.length;
                var3 = 0;
                var1 = var3 < var1;
                var2 = undefined;
                if (!var1) {
                    _fun67419_ip = 77;
                    continue _fun67419
                }
            case 56:
                var1 = var4[var3];
                var1 = var5.bind(var2)(var1);
                var3 = var3 + 1;
                var1 = var4.length;
                if (var3 < var1) {
                    _fun67419_ip = 56;
                    continue _fun67419
                }
            case 77:
                var0 = _closure2_slot0;
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var7 = global;
    var9 = var7.Object;
    var8 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var1 = 11;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot14 = var1;
    var1 = 12;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot15 = var1;
    var1 = 13;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot16 = var1;
    var1 = 14;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot17 = var1;
    var1 = 15;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.MAX_LATEST_MESSAGE_AGE_MS;
    var _closure1_slot18 = var1;
    var1 = 16;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.AnalyticEvents;
    var _closure1_slot19 = var1;
    var1 = 17;
    var1 = var5[var1];
    var8 = var6.bind(var0)(var1);
    var1 = var8.prototype;
    var9 = Object.create(var1, {
        constructor: {
            value: var8
        }
    });
    var1 = 'ReplyNudgeStore';
    var13 = var9;
    var12 = var1;
    var8 = new var13[var8](var12, var11);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot20 = var8;
    var8 = false;
    var _closure1_slot21 = var8;
    var _closure1_slot22 = var8;
    var8 = {};
    var _closure1_slot23 = var8;
    var7 = var7.Set;
    var8 = var7.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var7
        }
    });
    var13 = var8;
    var7 = new var13[var7](var12);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot24 = var7;
    var7 = 23;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var8 = var7.PersistedStore;
    var7 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun67423: for (var _fun67423_ip = 0;;) switch (_fun67423_ip) {
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
                    var0 = _closure1_slot25;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun67423_ip = 69;
                        continue _fun67423
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun67423_ip = 105;
                    continue _fun67423;
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
            _fun67424: for (var _fun67424_ip = 0;;) switch (_fun67424_ip) {
                case 0:
                    var3 = arg0;
                    var4 = this;
                    var1 = null;
                    var5 = var1 == var3;
                    var0 = undefined;
                    var2 = undefined;
                    if (var5) {
                        _fun67424_ip = 25;
                        continue _fun67424
                    }
                case 19:
                    var2 = var3.nudgedChannels;
                case 25:
                    if (!(var1 == var2)) {
                        _fun67424_ip = 31;
                        continue _fun67424
                    }
                case 29:
                    var2 = {};
                case 31:
                    _closure1_slot23 = var2;
                    var12 = var4.waitFor;
                    var2 = _closure1_slot9;
                    var20 = _closure1_slot12;
                    var19 = _closure1_slot13;
                    var18 = _closure1_slot14;
                    var17 = _closure1_slot15;
                    var16 = _closure1_slot16;
                    var15 = _closure1_slot10;
                    var14 = _closure1_slot17;
                    var6 = _closure1_slot11;
                    var22 = var4;
                    var21 = var2;
                    var13 = var6;
                    var3 = var22[var12](var21, var20, var19, var18, var17, var16, var15, var14, var13, var12);
                    var5 = var4.syncWith;
                    var3 = new Array(2);
                    var3[0] = var6;
                    var3[1] = var2;
                    var2 = _closure1_slot32;
                    var2 = var5.bind(var4)(var3, var2);
                    var3 = var4.syncWith;
                    var5 = _closure1_slot17;
                    var2 = new Array(1);
                    var2[0] = var5;
                    var1 = _closure1_slot33;
                    var1 = var3.bind(var4)(var2, var1);
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
            var0 = {};
            var1 = _closure1_slot23;
            var0.nudgedChannels = var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getNudgeTimestamp';
        var4.key = var6;
        var6 = function arg0() {
            _fun67426: for (var _fun67426_ip = 0;;) switch (_fun67426_ip) {
                case 0:
                    var3 = arg0;
                    var0 = _closure1_slot21;
                    var4 = null;
                    if (var0) {
                        _fun67426_ip = 17;
                        continue _fun67426
                    }
                case 15:
                    return var4;
                case 17:
                    var0 = _closure1_slot23;
                    var1 = var0[var3];
                    var5 = var4 == var1;
                    var0 = null;
                    if (var5) {
                        _fun67426_ip = 91;
                        continue _fun67426
                    }
                case 34:
                    var1 = var1.isActive;
                    if (var1) {
                        _fun67426_ip = 62;
                        continue _fun67426
                    }
                case 43:
                    var5 = _closure1_slot24;
                    var1 = var5.has;
                    var5 = var1.bind(var5)(var3);
                    var1 = null;
                    if (!var5) {
                        _fun67426_ip = 88;
                        continue _fun67426
                    }
                case 62:
                    var2 = _closure1_slot23;
                    var2 = var2[var3];
                    var2 = var2.timestamp;
                    var3 = var4 != var2;
                    var1 = null;
                    if (!var3) {
                        _fun67426_ip = 88;
                        continue _fun67426
                    }
                case 85:
                    var1 = var2;
                case 88:
                    var0 = var1;
                case 91:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isChannelNudged';
        var4.key = var6;
        var6 = function arg0() {
            _fun67427: for (var _fun67427_ip = 0;;) switch (_fun67427_ip) {
                case 0:
                    var0 = arguments[1];
                    var2 = undefined;
                    if (!(var0 === var2)) {
                        _fun67427_ip = 11;
                        continue _fun67427
                    }
                case 9:
                    var0 = {};
                case 11:
                    var0 = var0.includeInvisible;
                    if (!(var0 === var2)) {
                        _fun67427_ip = 23;
                        continue _fun67427
                    }
                case 21:
                    var0 = false;
                case 23:
                    var3 = _closure1_slot21;
                    var3 = !var3;
                    if (!var3) {
                        _fun67427_ip = 39;
                        continue _fun67427
                    }
                case 36:
                    var3 = !var0;
                case 39:
                    var0 = !var3;
                    if (var3) {
                        _fun67427_ip = 79;
                        continue _fun67427
                    }
                case 45:
                    var3 = _closure1_slot23;
                    var1 = arg0;
                    var1 = var3[var1];
                    var3 = null;
                    var3 = var3 == var1;
                    var2 = undefined;
                    if (var3) {
                        _fun67427_ip = 73;
                        continue _fun67427
                    }
                case 67:
                    var2 = var1.isActive;
                case 73:
                    var1 = true;
                    var0 = var1 === var2;
                case 79:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getChannelNudge';
        var4.key = var6;
        var6 = function arg0() {
            _fun67428: for (var _fun67428_ip = 0;;) switch (_fun67428_ip) {
                case 0:
                    var1 = arguments[1];
                    var0 = undefined;
                    if (!(var1 === var0)) {
                        _fun67428_ip = 11;
                        continue _fun67428
                    }
                case 9:
                    var1 = {};
                case 11:
                    var2 = var1.includeInvisible;
                    if (!(var2 === var0)) {
                        _fun67428_ip = 23;
                        continue _fun67428
                    }
                case 21:
                    var2 = false;
                case 23:
                    var0 = _closure1_slot21;
                    if (var0) {
                        _fun67428_ip = 38;
                        continue _fun67428
                    }
                case 33:
                    var0 = null;
                    if (!var2) {
                        _fun67428_ip = 63;
                        continue _fun67428
                    }
                case 38:
                    var2 = _closure1_slot23;
                    var1 = arg0;
                    var1 = var2[var1];
                    var3 = null;
                    var2 = var3 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun67428_ip = 63;
                        continue _fun67428
                    }
                case 60:
                    var0 = var1;
                case 63:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isNudgesInitialized';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot22;
            return var0;
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var7.bind(var0)(var8);
    var7.displayName = var1;
    var7.persistKey = var1;
    var1 = 24;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        _fun67430: for (var _fun67430_ip = 0;;) switch (_fun67430_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.channelId;
                var10 = var1.timestamp;
                var9 = var1.lastMessageId;
                var8 = var1.affinity;
                var7 = var1.authorId;
                var3 = undefined;
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var5 = _closure1_slot17;
                var2 = var5.isChannelMuted;
                var12 = null;
                var2 = var2.bind(var5)(var12, var0);
                if (var2) {
                    _fun67430_ip = 663;
                    continue _fun67430
                }
            case 75:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 21;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var6 = var2.ReplyNudgeExperiment;
                var5 = var6.getConfig;
                var2 = {};
                var11 = 'handleReplyNudgeSet';
                var2.location = var11;
                var2 = var5.bind(var6)(var2);
                var13 = var2.maxNudgeAge;
                var5 = var2.maxNudgeCount;
                var11 = _closure1_slot28;
                var6 = _closure1_slot23;
                var2 = {};
                var2.maxNudgeAge = var13;
                var2.maxNudgeCount = var5;
                var2 = var11.bind(var3)(var6, var2);
                _closure1_slot23 = var2;
                var2 = var0 in var2;
                if (var2) {
                    _fun67430_ip = 659;
                    continue _fun67430
                }
            case 176:
                var2 = _closure1_slot30;
                var6 = var2.bind(var3)();
                var2 = var6.length;
                if (!(var2 >= var5)) {
                    _fun67430_ip = 533;
                    continue _fun67430
                }
            case 196:
                var5 = var6.at;
                var2 = -1;
                var5 = var5.bind(var6)(var2);
                _closure2_slot0 = var5;
                var2 = _closure1_slot26;
                var16 = var2.bind(var3)(var6);
                var11 = var16.bind(var3)();
                var2 = var11.done;
                var6 = inf;
                var15 = 'handleReplyNudgeSet: Nudge affinity is null';
                var14 = var11;
                var13 = var5;
                var11 = var6;
                var5 = var13;
                var6 = var11;
                if (var2) {
                    _fun67430_ip = 366;
                    continue _fun67430
                }
            case 269:
                var19 = var14.value;
                var2 = _closure1_slot31;
                var2 = var2.bind(var3)(var19);
                if (!(var12 == var2)) {
                    _fun67430_ip = 319;
                    continue _fun67430
                }
            case 287:
                var20 = _closure1_slot20;
                var18 = var20.warn;
                var17 = {};
                var17.nudgedChannelId = var19;
                var17 = var18.bind(var20)(var15, var17);
                var18 = var13;
                var17 = var11;
                _fun67430_ip = 339;
                continue _fun67430;
            case 319:
                var18 = var13;
                var17 = var11;
                if (!(var2 < var11)) {
                    _fun67430_ip = 339;
                    continue _fun67430
                }
            case 329:
                _closure2_slot0 = var19;
                var18 = var19;
                var17 = var2;
            case 339:
                var19 = var16.bind(var3)();
                var2 = var19.done;
                var13 = var18;
                var11 = var17;
                var14 = var19;
                var5 = var13;
                var6 = var11;
                if (!var2) {
                    _fun67430_ip = 269;
                    continue _fun67430
                }
            case 366:
                var2 = _closure1_slot31;
                var2 = var2.bind(var3)(var0);
                if (!(var12 != var2)) {
                    _fun67430_ip = 628;
                    continue _fun67430
                }
            case 382:
                if (!(!(var2 < var6))) {
                    _fun67430_ip = 586;
                    continue _fun67430
                }
            case 389:
                var15 = _closure1_slot20;
                var14 = var15.info;
                var13 = {};
                var13.channelId = var0;
                var13.lowestAffinity = var6;
                var13.newNudgeAffinity = var2;
                var11 = 'handleReplyNudgeSet: Evicting nudge with lowest affinity';
                var11 = var14.bind(var15)(var11, var13);
                var11 = _closure1_slot23;
                var11 = var11[var5];
                _closure2_slot1 = var11;
                if (!(var12 != var11)) {
                    _fun67430_ip = 525;
                    continue _fun67430
                }
            case 443:
                var11 = var11.isActive;
                if (!var11) {
                    _fun67430_ip = 525;
                    continue _fun67430
                }
            case 452:
                var12 = _closure1_slot13;
                var11 = var12.getChannel;
                var11 = var11.bind(var12)(var5);
                _closure2_slot2 = var11;
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var12 = 19;
                var12 = var11[var12];
                var13 = var13.bind(var3)(var12);
                var12 = 18;
                var12 = var11[var12];
                var11 = var11.paths;
                var12 = var13.bind(var3)(var12, var11);
                var11 = var12.then;
                var4 = function(arg0) { // Environment: var4
                    _fun67431: for (var _fun67431_ip = 0;;) switch (_fun67431_ip) {
                        case 0:
                            var0 = arg0;
                            var7 = var0.default;
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 20;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.track;
                            var1 = _closure1_slot19;
                            var2 = var1.REPLY_NUDGE_DISMISSED;
                            var1 = {};
                            var8 = _closure2_slot0;
                            var1.channel_id = var8;
                            var8 = _closure2_slot2;
                            var9 = null;
                            var10 = var9 == var8;
                            var8 = undefined;
                            if (var10) {
                                _fun67431_ip = 85;
                                continue _fun67431
                            }
                        case 76:
                            var10 = _closure2_slot2;
                            var8 = var10.type;
                        case 85:
                            var1.channel_type = var8;
                            var8 = _closure2_slot2;
                            var9 = var9 == var8;
                            var8 = undefined;
                            if (var9) {
                                _fun67431_ip = 112;
                                continue _fun67431
                            }
                        case 103:
                            var9 = _closure2_slot2;
                            var8 = var9.guild_id;
                        case 112:
                            var1.guild_id = var8;
                            var8 = 'evicted_affinity';
                            var1.dismiss_method = var8;
                            var8 = global;
                            var9 = var8.Date;
                            var8 = var9.now;
                            var9 = var8.bind(var9)();
                            var8 = _closure2_slot1;
                            var8 = var8.timestamp;
                            var8 = var9 - var8;
                            var1.nudge_age_ms = var8;
                            var8 = _closure2_slot1;
                            var8 = var8.affinity;
                            var1.nudge_author_affinity = var8;
                            var8 = _closure2_slot1;
                            var8 = var8.authorId;
                            var1.nudge_author_id = var8;
                            var8 = _closure2_slot1;
                            var8 = var8.lastMessageId;
                            var1.nudge_message_id = var8;
                            var9 = _closure1_slot15;
                            var8 = var9.isFriend;
                            var6 = _closure2_slot1;
                            var6 = var6.authorId;
                            var6 = var8.bind(var9)(var6);
                            var1.nudge_author_is_friend = var6;
                            var6 = var7.getPrivateChannelIds;
                            var7 = var6.bind(var7)();
                            var6 = var7.indexOf;
                            var5 = _closure2_slot0;
                            var5 = var6.bind(var7)(var5);
                            var1.channel_dm_list_index = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var4 = var11.bind(var12)(var4);
            case 525:
                var4 = _closure1_slot23;
                var4 = delete var4[var5];
            case 533:
                var5 = _closure1_slot23;
                var4 = {};
                var4.timestamp = var10;
                var10 = true;
                var4.isActive = var10;
                var4.lastMessageId = var9;
                var4.affinity = var8;
                var4.authorId = var7;
                var5[var0] = var4;
                var5 = _closure1_slot24;
                var4 = var5.add;
                var4 = var4.bind(var5)(var0);
                return var3;
            case 586:
                var5 = _closure1_slot20;
                var4 = var5.info;
                var3 = {};
                var3.channelId = var0;
                var3.lowestAffinity = var6;
                var3.newNudgeAffinity = var2;
                var2 = 'handleReplyNudgeSet: New nudge is lower than the lowest affinity. No space to nudge.';
                var2 = var4.bind(var5)(var2, var3);
                var2 = false;
                return var2;
            case 628:
                var3 = _closure1_slot20;
                var2 = var3.warn;
                var1 = {};
                var1.channelId = var0;
                var0 = 'handleReplyNudgeSet: New nudge affinity is null';
                var0 = var2.bind(var3)(var0, var1);
                var0 = false;
                return var0;
            case 659:
                var0 = false;
                return var0;
            case 663:
                var0 = false;
                return var0;
        }
    };
    var1.REPLY_NUDGE_SET = var8;
    var8 = function arg0() {
        var0 = arg0;
        var3 = var0.channelId;
        var2 = _closure1_slot29;
        var1 = undefined;
        var0 = 'manual';
        var0 = var2.bind(var1)(var3, var0);
        return var0;
    };
    var1.REPLY_NUDGE_CLEAR = var8;
    var8 = function() {
        _fun67433: for (var _fun67433_ip = 0;;) switch (_fun67433_ip) {
            case 0:
                var0 = _closure1_slot22;
                if (var0) {
                    _fun67433_ip = 20;
                    continue _fun67433
                }
            case 10:
                var0 = true;
                _closure1_slot22 = var0;
                var0 = undefined;
                return var0;
            case 20:
                var0 = false;
                return var0;
        }
    };
    var1.REPLY_NUDGES_INITIALIZED = var8;
    var8 = function arg0() {
        var0 = arg0;
        var0 = var0.message;
        var3 = _closure1_slot29;
        var2 = var0.channel_id;
        var1 = undefined;
        var0 = 'message_sent';
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var1.MESSAGE_CREATE = var8;
    var8 = function arg0() {
        _fun67435: for (var _fun67435_ip = 0;;) switch (_fun67435_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.channelId;
                var2 = var0.userId;
                var3 = _closure1_slot12;
                var0 = var3.getId;
                var0 = var0.bind(var3)();
                var0 = var2 === var0;
                if (!var0) {
                    _fun67435_ip = 55;
                    continue _fun67435
                }
            case 37:
                var3 = _closure1_slot29;
                var2 = undefined;
                var1 = 'reaction_added';
                var0 = var3.bind(var2)(var4, var1);
            case 55:
                return var0;
        }
    };
    var1.MESSAGE_REACTION_ADD = var8;
    var8 = function() {
        _fun67436: for (var _fun67436_ip = 0;;) switch (_fun67436_ip) {
            case 0:
                var2 = _closure1_slot16;
                var0 = var2.getLastSelectedChannelId;
                var4 = var0.bind(var2)();
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun67436_ip = 44;
                    continue _fun67436
                }
            case 26:
                var3 = _closure1_slot29;
                var2 = undefined;
                var1 = 'channel_opened';
                var0 = var3.bind(var2)(var4, var1);
            case 44:
                return var0;
        }
    };
    var1.CHANNEL_SELECT = var8;
    var8 = function arg0() {
        var0 = arg0;
        var0 = var0.channel;
        var3 = var0.id;
        var2 = _closure1_slot29;
        var1 = undefined;
        var0 = 'channel_deleted';
        var0 = var2.bind(var1)(var3, var0);
        return var0;
    };
    var1.CHANNEL_DELETE = var8;
    var3 = function() {
        var0 = {};
        _closure1_slot23 = var0;
        var0 = global;
        var0 = var0.Set;
        var2 = var0.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var0
            }
        });
        var3 = var2;
        var0 = new var3[var0](var2);
        var0 = var0 instanceof Object ? var0 : var2;
        _closure1_slot24 = var0;
        var0 = false;
        _closure1_slot21 = var0;
        _closure1_slot22 = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var7](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/reply_nudge/ReplyNudgeStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 1211, 6793, 1310, 1216, 1372, 3947, 3100, 1670, 4303, 8355, 660, 3, 8353, 1307, 795, 8356, 1348, 566, 806, 2]);