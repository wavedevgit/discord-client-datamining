// modules/saved_messages/SavedMessageUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun75911: for (var _fun75911_ip = 0;;) switch (_fun75911_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun75911_ip = 341;
                            continue _fun75911
                        }
                    case 13:
                        var2 = arg0;
                        var1 = undefined;
                        var6 = undefined;
                        var3 = null;
                        var4 = var3 == var8;
                        var7 = undefined;
                        if (var4) {
                            _fun75911_ip = 36;
                            continue _fun75911
                        }
                    case 31:
                        var7 = var8.type;
                    case 36:
                        var4 = _closure1_slot7;
                        var4 = var4.UNKNOWN;
                        if (!(var7 === var4)) {
                            _fun75911_ip = 245;
                            continue _fun75911
                        }
                    case 56:
                        var4 = var2;
                        var4 = var4.saveData;
                        var4 = var4.guildId;
                        if (!(var3 == var4)) {
                            _fun75911_ip = 245;
                            continue _fun75911
                        }
                    case 77: // try_start_0
                        var7 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var10 = 8;
                        var4 = var4[var10];
                        var9 = var7.bind(var1)(var4);
                        var7 = var9.fetchChannel;
                        var4 = var2;
                        var4 = var4.saveData;
                        var4 = var4.channelId;
                        var4 = var7.bind(var9)(var4);
                        SaveGenerator(address = 126);
                    case 124:
                        return var4;
                    case 126:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 7);
                        if (var7) {
                            _fun75911_ip = 240;
                            continue _fun75911
                        }
                    case 132:
                        var6 = var4;
                        var7 = var4.recipients;
                        if (!(var3 != var7)) {
                            _fun75911_ip = 237;
                            continue _fun75911
                        }
                    case 145:
                        var7 = var6;
                        var7 = var7.recipients;
                        var9 = var7.length;
                        var7 = 1;
                        if (!(!(var9 > var7))) {
                            _fun75911_ip = 234;
                            continue _fun75911
                        }
                    case 166:
                        var9 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var7 = var7[var10];
                        var9 = var9.bind(var1)(var7);
                        var7 = var9.ensurePrivateChannel;
                        var11 = var6.recipients;
                        var10 = var11.map;
                        var6 = function(arg0) { // Environment: var6
                            var0 = arg0;
                            var0 = var0.id;
                            return var0;
                        };
                        var6 = var10.bind(var11)(var6);
                        var6 = var7.bind(var9)(var6);
                        SaveGenerator(address = 223);
                    case 221:
                        return var6;
                    case 223:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 7);
                        if (var7) {
                            _fun75911_ip = 231;
                            continue _fun75911
                        }
                    case 229: // try_end0
                        _fun75911_ip = 245;
                        continue _fun75911;
                    case 231:
                        return var6;
                    case 234:
                        return var1;
                    case 237:
                        return var1;
                    case 240:
                        return var4;
                    case 243: // catch_target0
                        CatchBlockStart(arg_register = 4);
                    case 245:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 9;
                        var4 = var7[var4];
                        var4 = var6.bind(var1)(var4);
                        var7 = _closure1_slot8;
                        var6 = var7.CHANNEL;
                        var3 = var3 == var8;
                        var5 = undefined;
                        if (var3) {
                            _fun75911_ip = 294;
                            continue _fun75911
                        }
                    case 284:
                        var3 = var8.getGuildId;
                        var5 = var3.bind(var8)();
                    case 294:
                        var3 = var2.saveData;
                        var3 = var3.channelId;
                        var2 = var2.saveData;
                        var2 = var2.messageId;
                        var3 = var6.bind(var7)(var5, var3, var2);
                        var2 = {};
                        var5 = true;
                        var2.openChannel = var5;
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    case 341:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot10 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var8 = 0;
    var3 = var6[var8];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var7 = 1;
    var9 = var6[var7];
    var3 = arg3;
    var3 = var3.bind(var0)(var9);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.UnknownChannelRecord;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.ChannelTypes;
    var _closure1_slot7 = var4;
    var3 = var3.Routes;
    var _closure1_slot8 = var3;
    var3 = {};
    var3.LONG = var8;
    var4 = 'LONG';
    var3[var8] = var4;
    var3.SHORT = var7;
    var4 = 'SHORT';
    var3[var7] = var4;
    var _closure1_slot9 = var3;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/saved_messages/SavedMessageUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.DueInStringTypes = var3;
    var3 = function arg0() {
        _fun75913: for (var _fun75913_ip = 0;;) switch (_fun75913_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.dueAt;
                var10 = var0.now;
                var1 = var0.type;
                var0 = null;
                if (!(var0 != var7)) {
                    _fun75913_ip = 336;
                    continue _fun75913
                }
            case 28:
                var0 = _closure1_slot9;
                var0 = var0.LONG;
                if (!(var1 !== var0)) {
                    _fun75913_ip = 82;
                    continue _fun75913
                }
            case 45:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var2 = var2[var0];
                var0 = undefined;
                var0 = var3.bind(var0)(var2);
                var0 = var0.t;
                var5 = var0.H4gnX9;
                _fun75913_ip = 117;
                continue _fun75913;
            case 82:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var2 = var2[var0];
                var0 = undefined;
                var0 = var3.bind(var0)(var2);
                var0 = var0.t;
                var5 = var0.TjNWNF;
            case 117:
                var0 = _closure1_slot9;
                var0 = var0.LONG;
                if (!(var1 !== var0)) {
                    _fun75913_ip = 168;
                    continue _fun75913
                }
            case 131:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.t;
                var0 = var0["Uq7Y+7"];
                _fun75913_ip = 203;
                continue _fun75913;
            case 168:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.t;
                var0 = var1.haia16;
            case 203:
                var1 = var10 > var7;
                if (!var1) {
                    _fun75913_ip = 213;
                    continue _fun75913
                }
            case 210:
                var5 = var0;
            case 213:
                var0 = {};
                var3 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 5;
                var2 = var11[var2];
                var9 = undefined;
                var2 = var3.bind(var9)(var2);
                var4 = var2.intl;
                var3 = var4.formatToPlainString;
                var2 = {};
                var8 = _closure1_slot1;
                var6 = 6;
                var6 = var11[var6];
                var9 = var8.bind(var9)(var6);
                var8 = var9.duration;
                var6 = var7.getTime;
                var7 = var6.bind(var7)();
                var6 = var10.getTime;
                var6 = var6.bind(var10)();
                var7 = var7 - var6;
                var6 = 'millisecond';
                var7 = var8.bind(var9)(var7, var6);
                var6 = var7.humanize;
                var6 = var6.bind(var7)();
                var2.duration = var6;
                var2 = var3.bind(var4)(var5, var2);
                var0.dueInText = var2;
                var0.isOverdue = var1;
                return var0;
            case 336:
                var0 = {
                    'string': '',
                    'isOverdue': false
                };
                return var0;
        }
    };
    var2.useDueInString = var3;
    var3 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var5 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 7;
        var3 = var3[var2];
        var2 = undefined;
        var6 = var5.bind(var2)(var3);
        var5 = var6.useStateFromStores;
        var2 = _closure1_slot6;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            var2 = _closure1_slot6;
            var1 = var2.getChannel;
            var0 = _closure2_slot0;
            var0 = var0.saveData;
            var0 = var0.channelId;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5 = var5.bind(var6)(var3, var2);
        var _closure2_slot1 = var5;
        var3 = _closure1_slot4;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun75916: for (var _fun75916_ip = 0;;) switch (_fun75916_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun75916_ip = 180;
                        continue _fun75916
                    }
                case 16:
                    var0 = _closure2_slot0;
                    var0 = var0.message;
                    var2 = var2 != var0;
                    var8 = undefined;
                    var0 = undefined;
                    if (!var2) {
                        _fun75916_ip = 178;
                        continue _fun75916
                    }
                case 39:
                    var4 = _closure1_slot5;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var6 = var5.saveData;
                    var6 = var6.channelId;
                    var2.id = var6;
                    var5 = var5.saveData;
                    var5 = var5.guildId;
                    var2.guild_id = var5;
                    var5 = _closure1_slot7;
                    var5 = var5.UNKNOWN;
                    var2.type = var5;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 5;
                    var5 = var9[var3];
                    var5 = var7.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var3 = var9[var3];
                    var3 = var7.bind(var8)(var3);
                    var3 = var3.t;
                    var3 = var3.J90oLW;
                    var3 = var5.bind(var6)(var3);
                    var2.name = var3;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var11 = var3;
                    var10 = var2;
                    var2 = new var11[var4](var10, var9);
                    var0 = var2 instanceof Object ? var2 : var3;
                case 178:
                    _fun75916_ip = 184;
                    continue _fun75916;
                case 180:
                    var0 = _closure2_slot1;
                case 184:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useSavedMessageChannel = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.savedMessageJumpToMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 1376, 1372, 660, 1234, 3006, 566, 3906, 5581, 2]);