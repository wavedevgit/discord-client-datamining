// modules/guild_home/useActiveChannels.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.isTextChannel;
    var _closure1_slot2 = var3;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelFlags;
    var _closure1_slot8 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_home/useActiveChannels.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun101939: for (var _fun101939_ip = 0;;) switch (_fun101939_ip) {
            case 0:
                var4 = arg0;
                var2 = arguments[1];
                var5 = undefined;
                if (!(var2 === var5)) {
                    _fun101939_ip = 56;
                    continue _fun101939
                }
            case 14:
                var6 = _closure1_slot3;
                var1 = new Array(4);
                var1[0] = var6;
                var6 = _closure1_slot4;
                var1[1] = var6;
                var6 = _closure1_slot6;
                var1[2] = var6;
                var3 = _closure1_slot5;
                var1[3] = var3;
                var2 = var1;
            case 56:
                var7 = var2;
                var1 = var7[Symbol.iterator];
                var7 = var1().next;
                var3 = var7().value;
                var2 = var1;
                var6 = var2 === var5;
                var2 = undefined;
                if (var6) {
                    _fun101939_ip = 81;
                    continue _fun101939
                }
            case 78:
                var2 = var3;
            case 81:
                var _closure2_slot0 = var2;
                var2 = undefined;
                if (var6) {
                    _fun101939_ip = 115;
                    continue _fun101939
                }
            case 90:
                var8 = var7().value;
                var3 = var1;
                var3 = var3 === var5;
                var2 = undefined;
                var6 = var3;
                if (var3) {
                    _fun101939_ip = 115;
                    continue _fun101939
                }
            case 109:
                var2 = var8;
                var6 = var3;
            case 115:
                var _closure2_slot1 = var2;
                var3 = undefined;
                if (var6) {
                    _fun101939_ip = 149;
                    continue _fun101939
                }
            case 124:
                var8 = var7().value;
                var2 = var1;
                var2 = var2 === var5;
                var3 = undefined;
                var6 = var2;
                if (var2) {
                    _fun101939_ip = 149;
                    continue _fun101939
                }
            case 143:
                var3 = var8;
                var6 = var2;
            case 149:
                var2 = undefined;
                if (var6) {
                    _fun101939_ip = 179;
                    continue _fun101939
                }
            case 154:
                var8 = var7().value;
                var7 = var1;
                var7 = var7 === var5;
                var2 = undefined;
                var6 = var7;
                if (var7) {
                    _fun101939_ip = 179;
                    continue _fun101939
                }
            case 173:
                var2 = var8;
                var6 = var7;
            case 179:
                if (var6) {
                    _fun101939_ip = 185;
                    continue _fun101939
                }
            case 182:
                var1.return();
            case 185:
                var _closure2_slot2 = var5;
                var1 = var3.getActiveChannelIds;
                var7 = var1.bind(var3)(var4);
                var1 = null;
                if (!(var1 == var7)) {
                    _fun101939_ip = 212;
                    continue _fun101939
                }
            case 206:
                var3 = new Array(0);
                _fun101939_ip = 230;
                continue _fun101939;
            case 212:
                var1 = global;
                var6 = var1.Array;
                var1 = var6.from;
                var3 = var1.bind(var6)(var7);
            case 230:
                var1 = var2.getMutedChannels;
                var1 = var1.bind(var2)(var4);
                _closure2_slot2 = var1;
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.getChannel;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 7;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.isNotNullish;
                var2 = var2.bind(var3)(var1);
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    _fun101941: for (var _fun101941_ip = 0;;) switch (_fun101941_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = null;
                            if (!(var2 != var4)) {
                                _fun101941_ip = 39;
                                continue _fun101941
                            }
                        case 9:
                            var1 = var4.hasFlag;
                            var0 = _closure1_slot8;
                            var0 = var0.ACTIVE_CHANNELS_REMOVED;
                            var0 = var1.bind(var4)(var0);
                            if (var0) {
                                _fun101941_ip = 243;
                                continue _fun101941
                            }
                        case 39:
                            var5 = _closure1_slot2;
                            var3 = var4.type;
                            var0 = undefined;
                            var0 = var5.bind(var0)(var3);
                            if (var0) {
                                _fun101941_ip = 65;
                                continue _fun101941
                            }
                        case 61:
                            var0 = false;
                            return var0;
                        case 65:
                            var6 = _closure2_slot2;
                            var5 = var6.has;
                            var3 = var4.id;
                            var3 = var5.bind(var6)(var3);
                            if (var3) {
                                _fun101941_ip = 239;
                                continue _fun101941
                            }
                        case 93:
                            var3 = var4.parent_id;
                            if (!(var2 != var3)) {
                                _fun101941_ip = 126;
                                continue _fun101941
                            }
                        case 103:
                            var6 = _closure2_slot2;
                            var5 = var6.has;
                            var3 = var4.parent_id;
                            var3 = var5.bind(var6)(var3);
                            if (var3) {
                                _fun101941_ip = 235;
                                continue _fun101941
                            }
                        case 126:
                            var6 = _closure2_slot1;
                            var5 = var6.can;
                            var3 = _closure1_slot7;
                            var3 = var3.VIEW_CHANNEL;
                            var3 = var5.bind(var6)(var3, var4);
                            if (var3) {
                                _fun101941_ip = 159;
                                continue _fun101941
                            }
                        case 155:
                            var3 = false;
                            return var3;
                        case 159:
                            var5 = _closure2_slot0;
                            var3 = var5.getChannel;
                            var0 = var4.parent_id;
                            var3 = var3.bind(var5)(var0);
                            var0 = var4.isThread;
                            var0 = var0.bind(var4)();
                            var0 = !var0;
                            if (var0) {
                                _fun101941_ip = 199;
                                continue _fun101941
                            }
                        case 195:
                            var0 = var2 == var3;
                        case 199:
                            if (var0) {
                                _fun101941_ip = 206;
                                continue _fun101941
                            }
                        case 202:
                            var0 = var2 == var3;
                        case 206:
                            if (var0) {
                                _fun101941_ip = 233;
                                continue _fun101941
                            }
                        case 209:
                            var2 = var3.hasFlag;
                            var1 = _closure1_slot8;
                            var1 = var1.ACTIVE_CHANNELS_REMOVED;
                            var1 = var2.bind(var3)(var1);
                            var0 = !var1;
                        case 233:
                            return var0;
                        case 235:
                            var0 = false;
                            return var0;
                        case 239:
                            var0 = false;
                            return var0;
                        case 243:
                            var0 = false;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getActiveTextChannels = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1376, 1372, 3050, 4260, 12468, 660, 1379, 1304, 2]);