// modules/go_live/utils/StreamPermissionUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var0 = function arg0, arg1() {
        _fun47144: for (var _fun47144_ip = 0;;) switch (_fun47144_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun47144_ip = 46;
                    continue _fun47144
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun47144_ip = 55;
                    continue _fun47144
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun47144_ip = 343;
                    continue _fun47144
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun47144_ip = 323;
                    continue _fun47144
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun47144_ip = 283;
                    continue _fun47144
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun47144_ip = 270;
                    continue _fun47144
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
                    _fun47144_ip = 163;
                    continue _fun47144
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun47144_ip = 179;
                    continue _fun47144
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun47144_ip = 249;
                    continue _fun47144
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun47144_ip = 249;
                    continue _fun47144
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun47144_ip = 234;
                    continue _fun47144
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun47144_ip = 247;
                    continue _fun47144
                }
            case 234:
                var8 = _closure1_slot12;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun47144_ip = 265;
                continue _fun47144;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun47144_ip = 283;
                continue _fun47144;
            case 270:
                var6 = _closure1_slot12;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun47144_ip = 323;
                    continue _fun47144
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
                    _fun47144_ip = 330;
                    continue _fun47144
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun47145: for (var _fun47145_ip = 0;;) switch (_fun47145_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun47145_ip = 56;
                                continue _fun47145
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
                            _fun47145_ip = 67;
                            continue _fun47145;
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
    var _closure1_slot11 = var0;
    var0 = function arg0, arg1() {
        _fun47146: for (var _fun47146_ip = 0;;) switch (_fun47146_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun47146_ip = 23;
                    continue _fun47146
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun47146_ip = 33;
                    continue _fun47146
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
                    _fun47146_ip = 70;
                    continue _fun47146
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun47146_ip = 55;
                    continue _fun47146
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var5 = function arg0, arg1, arg2() {
        _fun47147: for (var _fun47147_ip = 0;;) switch (_fun47147_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var7 = arg2;
                var1 = arguments[3];
                var6 = undefined;
                if (!(var1 === var6)) {
                    _fun47147_ip = 20;
                    continue _fun47147
                }
            case 18:
                var1 = true;
            case 20:
                var0 = var4.isPrivate;
                var0 = var0.bind(var4)();
                if (var0) {
                    _fun47147_ip = 218;
                    continue _fun47147
                }
            case 36:
                var2 = var3.getGuild;
                var0 = var4.getGuildId;
                var0 = var0.bind(var4)();
                var5 = var2.bind(var3)(var0);
                var3 = null;
                var2 = var3 == var5;
                var0 = undefined;
                if (var2) {
                    _fun47147_ip = 73;
                    continue _fun47147
                }
            case 67:
                var0 = var5.maxStageVideoChannelUsers;
            case 73:
                var9 = var3 != var0;
                var8 = 0;
                var2 = 0;
                if (!var9) {
                    _fun47147_ip = 87;
                    continue _fun47147
                }
            case 84:
                var2 = var0;
            case 87:
                var0 = var4.isGuildStageVoice;
                var0 = var0.bind(var4)();
                if (!var0) {
                    _fun47147_ip = 104;
                    continue _fun47147
                }
            case 100:
                var0 = var2 <= var8;
            case 104:
                var0 = !var0;
                if (!var0) {
                    _fun47147_ip = 216;
                    continue _fun47147
                }
            case 110:
                if (!var1) {
                    _fun47147_ip = 145;
                    continue _fun47147
                }
            case 113:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 7;
                var2 = var9[var2];
                var2 = var8.bind(var6)(var2);
                var2 = var2.bind(var6)(var4, var7);
                var1 = !var2;
            case 145:
                var1 = !var1;
                if (!var1) {
                    _fun47147_ip = 213;
                    continue _fun47147
                }
            case 151:
                var6 = var7.can;
                var2 = _closure1_slot9;
                var2 = var2.STREAM;
                var2 = var6.bind(var7)(var2, var4);
                var6 = !var2;
                var2 = !var6;
                if (var6) {
                    _fun47147_ip = 210;
                    continue _fun47147
                }
            case 185:
                var3 = var3 != var5;
                if (!var3) {
                    _fun47147_ip = 207;
                    continue _fun47147
                }
            case 192:
                var5 = var5.afkChannelId;
                var4 = var4.id;
                var3 = var5 !== var4;
            case 207:
                var2 = var3;
            case 210:
                var1 = var2;
            case 213:
                var0 = var1;
            case 216:
                return var0;
            case 218:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot13 = var5;
    var3 = function arg0, arg1, arg2, arg3, arg4() {
        _fun47148: for (var _fun47148_ip = 0;;) switch (_fun47148_ip) {
            case 0:
                var1 = arg0;
                var8 = arg1;
                var9 = arg4;
                var7 = null;
                if (!(var7 != var1)) {
                    _fun47148_ip = 327;
                    continue _fun47148
                }
            case 18:
                var2 = var8.isInChannel;
                var0 = var1.id;
                var0 = var2.bind(var8)(var0);
                var3 = _closure1_slot4;
                var4 = var1 instanceof var3;
                if (!var4) {
                    _fun47148_ip = 86;
                    continue _fun47148
                }
            case 48:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 9;
                var5 = var5[var3];
                var3 = undefined;
                var6 = var6.bind(var3)(var5);
                var5 = var6.isChannelFull;
                var3 = arg2;
                var4 = var5.bind(var6)(var1, var8, var3);
            case 86:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 7;
                var3 = var6[var3];
                var8 = undefined;
                var5 = var5.bind(var8)(var3);
                var3 = arg3;
                var3 = var5.bind(var8)(var1, var3);
                var5 = var9.getAwaitingRemoteSessionInfo;
                var5 = var5.bind(var9)();
                var6 = var7 != var5;
                if (var6) {
                    _fun47148_ip = 148;
                    continue _fun47148
                }
            case 134:
                var5 = var9.getRemoteSessionId;
                var5 = var5.bind(var9)();
                var6 = var7 != var5;
            case 148:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var10 = 10;
                var5 = var5[var10];
                var7 = var7.bind(var8)(var5);
                var5 = var7.shouldAgeVerifyForAgeGate;
                var5 = var5.bind(var7)();
                if (!var5) {
                    _fun47148_ip = 214;
                    continue _fun47148
                }
            case 181:
                var9 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var10];
                var9 = var9.bind(var8)(var7);
                var7 = var9.shouldShowAgeGateForChannelId;
                var1 = var1.id;
                var5 = var7.bind(var9)(var1);
            case 214:
                if (var6) {
                    _fun47148_ip = 276;
                    continue _fun47148
                }
            case 217:
                if (var5) {
                    _fun47148_ip = 264;
                    continue _fun47148
                }
            case 220:
                if (var3) {
                    _fun47148_ip = 238;
                    continue _fun47148
                }
            case 223:
                if (var0) {
                    _fun47148_ip = 238;
                    continue _fun47148
                }
            case 226:
                var1 = _closure1_slot10;
                var1 = var1.NO_PERMISSION;
                _fun47148_ip = 286;
                continue _fun47148;
            case 238:
                var7 = var4;
                if (!var7) {
                    _fun47148_ip = 247;
                    continue _fun47148
                }
            case 244:
                var7 = !var0;
            case 247:
                var1 = undefined;
                if (!var7) {
                    _fun47148_ip = 286;
                    continue _fun47148
                }
            case 252:
                var7 = _closure1_slot10;
                var1 = var7.CHANNEL_FULL;
                _fun47148_ip = 286;
                continue _fun47148;
            case 264:
                var7 = _closure1_slot10;
                var1 = var7.AGE_RESTRICTED;
                _fun47148_ip = 286;
                continue _fun47148;
            case 276:
                var2 = _closure1_slot10;
                var1 = var2.REMOTE_MODE;
            case 286:
                var2 = !var6;
                if (var6) {
                    _fun47148_ip = 295;
                    continue _fun47148
                }
            case 292:
                var2 = !var5;
            case 295:
                if (!var2) {
                    _fun47148_ip = 313;
                    continue _fun47148
                }
            case 298:
                if (var0) {
                    _fun47148_ip = 310;
                    continue _fun47148
                }
            case 301:
                if (!var3) {
                    _fun47148_ip = 307;
                    continue _fun47148
                }
            case 304:
                var3 = !var4;
            case 307:
                var0 = var3;
            case 310:
                var2 = var0;
            case 313:
                var0 = new Array(2);
                var0[0] = var2;
                var0[1] = var1;
                return var0;
            case 327:
                var0 = new Array(2);
                var1 = false;
                var0[0] = var1;
                var1 = _closure1_slot10;
                var1 = var1.NO_PERMISSION;
                var0[1] = var1;
                return var0;
        }
    };
    var _closure1_slot14 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var4);
    var12 = 0;
    var4 = var8[var12];
    var0 = undefined;
    var4 = var6.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var11 = 1;
    var4 = var8[var11];
    var4 = var7.bind(var0)(var4);
    var4 = var4.ChannelRecordBase;
    var _closure1_slot4 = var4;
    var10 = 2;
    var4 = var8[var10];
    var4 = var7.bind(var0)(var4);
    var4 = var4.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot5 = var4;
    var9 = 3;
    var4 = var8[var9];
    var4 = var6.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var6.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var8[var4];
    var4 = var6.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var8[var4];
    var4 = var7.bind(var0)(var4);
    var4 = var4.Permissions;
    var _closure1_slot9 = var4;
    var4 = {};
    var4.REMOTE_MODE = var12;
    var6 = 'REMOTE_MODE';
    var4[var12] = var6;
    var4.CHANNEL_FULL = var11;
    var6 = 'CHANNEL_FULL';
    var4[var11] = var6;
    var4.NO_PERMISSION = var10;
    var6 = 'NO_PERMISSION';
    var4[var10] = var6;
    var4.AGE_RESTRICTED = var9;
    var6 = 'AGE_RESTRICTED';
    var4[var9] = var6;
    var _closure1_slot10 = var4;
    var6 = 12;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/go_live/utils/StreamPermissionUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var2.canStreamInChannel = var5;
    var5 = function arg0() {
        _fun47149: for (var _fun47149_ip = 0;;) switch (_fun47149_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot10;
                var1 = var1.REMOTE_MODE;
                if (!(var1 !== var2)) {
                    _fun47149_ip = 307;
                    continue _fun47149
                }
            case 23:
                var1 = _closure1_slot10;
                var1 = var1.CHANNEL_FULL;
                if (!(var1 !== var2)) {
                    _fun47149_ip = 248;
                    continue _fun47149
                }
            case 40:
                var1 = _closure1_slot10;
                var1 = var1.NO_PERMISSION;
                if (!(var1 !== var2)) {
                    _fun47149_ip = 189;
                    continue _fun47149
                }
            case 57:
                var1 = _closure1_slot10;
                var1 = var1.AGE_RESTRICTED;
                if (!(var1 !== var2)) {
                    _fun47149_ip = 130;
                    continue _fun47149
                }
            case 71:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 8;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["7Xq/nV"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 130:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 8;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.b5FqhF;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 189:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 8;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.pgUTZC;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 248:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 8;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.elyVbv;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 307:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 8;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["1i3tSY"];
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getStreamCTAString = var5;
    var5 = function arg0() {
        _fun47150: for (var _fun47150_ip = 0;;) switch (_fun47150_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot10;
                var1 = var1.REMOTE_MODE;
                if (!(var1 !== var2)) {
                    _fun47150_ip = 606;
                    continue _fun47150
                }
            case 23:
                var1 = _closure1_slot10;
                var1 = var1.CHANNEL_FULL;
                if (!(var1 !== var2)) {
                    _fun47150_ip = 473;
                    continue _fun47150
                }
            case 40:
                var1 = _closure1_slot10;
                var1 = var1.NO_PERMISSION;
                if (!(var1 !== var2)) {
                    _fun47150_ip = 340;
                    continue _fun47150
                }
            case 57:
                var1 = _closure1_slot10;
                var1 = var1.AGE_RESTRICTED;
                if (!(var1 !== var2)) {
                    _fun47150_ip = 207;
                    continue _fun47150
                }
            case 74:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 8;
                var2 = var7[var1];
                var4 = undefined;
                var2 = var6.bind(var4)(var2);
                var5 = var2.intl;
                var3 = var5.string;
                var2 = var7[var1];
                var2 = var6.bind(var4)(var2);
                var2 = var2.t;
                var2 = var2["7Xq/nV"];
                var5 = var3.bind(var5)(var2);
                var2 = var7[var1];
                var2 = var6.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var7[var1];
                var1 = var6.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["9C444m"];
                var4 = var2.bind(var3)(var1);
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = ': ';
                var1 = var3.bind(var2)(var5, var1, var4);
                return var1;
            case 207:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 8;
                var2 = var7[var1];
                var4 = undefined;
                var2 = var6.bind(var4)(var2);
                var5 = var2.intl;
                var3 = var5.string;
                var2 = var7[var1];
                var2 = var6.bind(var4)(var2);
                var2 = var2.t;
                var2 = var2["7Xq/nV"];
                var5 = var3.bind(var5)(var2);
                var2 = var7[var1];
                var2 = var6.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var7[var1];
                var1 = var6.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.b5FqhF;
                var4 = var2.bind(var3)(var1);
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = ': ';
                var1 = var3.bind(var2)(var5, var1, var4);
                return var1;
            case 340:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 8;
                var2 = var7[var1];
                var4 = undefined;
                var2 = var6.bind(var4)(var2);
                var5 = var2.intl;
                var3 = var5.string;
                var2 = var7[var1];
                var2 = var6.bind(var4)(var2);
                var2 = var2.t;
                var2 = var2["7Xq/nV"];
                var5 = var3.bind(var5)(var2);
                var2 = var7[var1];
                var2 = var6.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var7[var1];
                var1 = var6.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.pgUTZC;
                var4 = var2.bind(var3)(var1);
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = ': ';
                var1 = var3.bind(var2)(var5, var1, var4);
                return var1;
            case 473:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 8;
                var2 = var7[var1];
                var4 = undefined;
                var2 = var6.bind(var4)(var2);
                var5 = var2.intl;
                var3 = var5.string;
                var2 = var7[var1];
                var2 = var6.bind(var4)(var2);
                var2 = var2.t;
                var2 = var2["7Xq/nV"];
                var5 = var3.bind(var5)(var2);
                var2 = var7[var1];
                var2 = var6.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var7[var1];
                var1 = var6.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.elyVbv;
                var4 = var2.bind(var3)(var1);
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = ': ';
                var1 = var3.bind(var2)(var5, var1, var4);
                return var1;
            case 606:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 8;
                var1 = var6[var0];
                var3 = undefined;
                var1 = var5.bind(var3)(var1);
                var4 = var1.intl;
                var2 = var4.string;
                var1 = var6[var0];
                var1 = var5.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1["7Xq/nV"];
                var4 = var2.bind(var4)(var1);
                var1 = var6[var0];
                var1 = var5.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var6[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["1i3tSY"];
                var3 = var1.bind(var2)(var0);
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '';
                var0 = ': ';
                var0 = var2.bind(var1)(var4, var0, var3);
                return var0;
        }
    };
    var2.getStreamCTAAriaLabel = var5;
    var2.StreamUnavailableReasons = var4;
    var2.canWatchStream = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStoresArray;
        var5 = _closure1_slot8;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = _closure1_slot6;
        var1[1] = var5;
        var5 = _closure1_slot7;
        var1[2] = var5;
        var4 = _closure1_slot3;
        var1[3] = var4;
        var0 = function() { // Environment: var0
            var6 = _closure1_slot14;
            var11 = _closure2_slot0;
            var10 = _closure1_slot8;
            var9 = _closure1_slot6;
            var8 = _closure1_slot7;
            var7 = _closure1_slot3;
            var12 = undefined;
            var0 = var12[var6](var11, var10, var9, var8, var7, var6);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useCanWatchStream = var3;
    var1 = function arg0, arg1, arg2() {
        _fun47153: for (var _fun47153_ip = 0;;) switch (_fun47153_ip) {
            case 0:
                var7 = arg1;
                var6 = arg2;
                var0 = new Array(0);
                var2 = _closure1_slot11;
                var3 = _closure1_slot5;
                var1 = arg0;
                var1 = var1[var3];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = var3.bind(var4)();
                var1 = var2.done;
                if (var1) {
                    _fun47153_ip = 96;
                    continue _fun47153
                }
            case 47:
                var1 = var2.value;
                var8 = var1.channel;
                var1 = _closure1_slot13;
                var1 = var1.bind(var4)(var8, var7, var6);
                if (!var1) {
                    _fun47153_ip = 81;
                    continue _fun47153
                }
            case 71:
                var1 = var0.push;
                var1 = var1.bind(var0)(var8);
            case 81:
                var8 = var3.bind(var4)();
                var1 = var8.done;
                var2 = var8;
                if (!var1) {
                    _fun47153_ip = 47;
                    continue _fun47153
                }
            case 96:
                return var0;
        }
    };
    var2.getStreamEligibleChannels = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3521, 1376, 1671, 1410, 3093, 3523, 660, 4244, 1234, 4237, 4552, 566, 2]);