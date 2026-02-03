// modules/external_pip/useExternalPipParticipant.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun110185: for (var _fun110185_ip = 0;;) switch (_fun110185_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun110185_ip = 46;
                    continue _fun110185
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun110185_ip = 55;
                    continue _fun110185
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun110185_ip = 345;
                    continue _fun110185
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun110185_ip = 323;
                    continue _fun110185
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun110185_ip = 283;
                    continue _fun110185
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun110185_ip = 270;
                    continue _fun110185
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
                    _fun110185_ip = 163;
                    continue _fun110185
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun110185_ip = 179;
                    continue _fun110185
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun110185_ip = 249;
                    continue _fun110185
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun110185_ip = 249;
                    continue _fun110185
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun110185_ip = 234;
                    continue _fun110185
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun110185_ip = 247;
                    continue _fun110185
                }
            case 234:
                var8 = _closure1_slot10;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun110185_ip = 265;
                continue _fun110185;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun110185_ip = 283;
                continue _fun110185;
            case 270:
                var6 = _closure1_slot10;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun110185_ip = 323;
                    continue _fun110185
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
                    _fun110185_ip = 330;
                    continue _fun110185
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun110186: for (var _fun110186_ip = 0;;) switch (_fun110186_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun110186_ip = 56;
                                continue _fun110186
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
                            _fun110186_ip = 67;
                            continue _fun110186;
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
    var _closure1_slot9 = var0;
    var0 = function arg0, arg1() {
        _fun110187: for (var _fun110187_ip = 0;;) switch (_fun110187_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun110187_ip = 23;
                    continue _fun110187
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun110187_ip = 33;
                    continue _fun110187
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
                    _fun110187_ip = 70;
                    continue _fun110187
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun110187_ip = 55;
                    continue _fun110187
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var9 = var0.channelId;
        var _closure2_slot0 = var9;
        var8 = var0.focusedParticipantStreamId;
        var _closure2_slot1 = var8;
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var3 = 7;
        var0 = var6[var3];
        var4 = undefined;
        var11 = var5.bind(var4)(var0);
        var10 = var11.useStateFromStores;
        var0 = _closure1_slot5;
        var7 = new Array(1);
        var7[0] = var0;
        var0 = function() { // Environment: var1
            var1 = _closure1_slot5;
            var0 = var1.getId;
            var0 = var0.bind(var1)();
            return var0;
        };
        var7 = var10.bind(var11)(var7, var0);
        var _closure2_slot2 = var7;
        var11 = _closure1_slot3;
        var10 = var11.useState;
        var0 = 0;
        var12 = var10.bind(var11)(var0);
        var11 = _closure1_slot2;
        var10 = 2;
        var11 = var11.bind(var4)(var12, var10);
        var0 = var11[var0];
        var10 = 1;
        var10 = var11[var10];
        var _closure2_slot3 = var10;
        var3 = var6[var3];
        var6 = var5.bind(var4)(var3);
        var5 = var6.useStateFromStoresObject;
        var3 = _closure1_slot4;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = new Array(4);
        var3[0] = var9;
        var3[1] = var8;
        var3[2] = var7;
        var3[3] = var0;
        var0 = function() { // Environment: var1
            _fun110190: for (var _fun110190_ip = 0;;) switch (_fun110190_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var4 = null;
                    if (!(var4 != var0)) {
                        _fun110190_ip = 872;
                        continue _fun110190
                    }
                case 16:
                    var0 = _closure2_slot1;
                    if (!(var4 == var0)) {
                        _fun110190_ip = 872;
                        continue _fun110190
                    }
                case 27:
                    var0 = global;
                    var1 = var0.Date;
                    var0 = var1.now;
                    var19 = var0.bind(var1)();
                    var2 = _closure1_slot4;
                    var1 = var2.getParticipants;
                    var0 = _closure2_slot0;
                    var1 = var1.bind(var2)(var0);
                    var9 = _closure2_slot2;
                    var2 = var1.length;
                    var0 = 3;
                    var0 = var0 < var2;
                    var17 = false;
                    if (var0) {
                        _fun110190_ip = 186;
                        continue _fun110190
                    }
                case 87:
                    var0 = _closure1_slot9;
                    var7 = undefined;
                    var6 = var0.bind(var7)(var1);
                    var2 = var6.bind(var7)();
                    var0 = var2.done;
                    var3 = var2;
                    var2 = undefined;
                    var17 = true;
                    if (var0) {
                        _fun110190_ip = 186;
                        continue _fun110190
                    }
                case 117:
                    var0 = var3.value;
                    var11 = var0.type;
                    var10 = _closure1_slot8;
                    var10 = var10.ACTIVITY;
                    if (!(var11 !== var10)) {
                        _fun110190_ip = 169;
                        continue _fun110190
                    }
                case 141:
                    var10 = var0.user;
                    var11 = var4 == var10;
                    var0 = undefined;
                    if (var11) {
                        _fun110190_ip = 160;
                        continue _fun110190
                    }
                case 155:
                    var0 = var10.id;
                case 160:
                    var2 = var10;
                    var17 = false;
                    if (!(var0 === var9)) {
                        _fun110190_ip = 186;
                        continue _fun110190
                    }
                case 169:
                    var10 = var6.bind(var7)();
                    var0 = var10.done;
                    var3 = var10;
                    var17 = true;
                    if (!var0) {
                        _fun110190_ip = 117;
                        continue _fun110190
                    }
                case 186:
                    var0 = _closure1_slot9;
                    var2 = undefined;
                    var16 = var0.bind(var2)(var1);
                    var1 = var16.bind(var2)();
                    var0 = var1.done;
                    var15 = 1000;
                    var14 = undefined;
                    var13 = undefined;
                    var12 = var1;
                    var11 = undefined;
                    var10 = undefined;
                    var9 = undefined;
                    var7 = undefined;
                    var5 = undefined;
                    var3 = undefined;
                    var1 = undefined;
                    var6 = undefined;
                    var8 = undefined;
                    if (var0) {
                        _fun110190_ip = 675;
                        continue _fun110190
                    }
                case 243:
                    var25 = var12.value;
                    var0 = var5;
                    if (var17) {
                        _fun110190_ip = 330;
                        continue _fun110190
                    }
                case 254:
                    var22 = var25.type;
                    var21 = _closure1_slot8;
                    var21 = var21.USER;
                    var0 = var5;
                    if (!(var22 === var21)) {
                        _fun110190_ip = 330;
                        continue _fun110190
                    }
                case 276:
                    var30 = var25.user;
                    var21 = var4 == var30;
                    var29 = undefined;
                    if (var21) {
                        _fun110190_ip = 295;
                        continue _fun110190
                    }
                case 290:
                    var29 = var30.id;
                case 295:
                    var28 = _closure2_slot2;
                    var0 = var30;
                    var27 = var14;
                    var26 = var13;
                    var24 = var11;
                    var23 = var10;
                    var22 = var9;
                    var21 = var7;
                    var5 = var0;
                    if (!(var29 !== var28)) {
                        _fun110190_ip = 627;
                        continue _fun110190
                    }
                case 330:
                    var29 = var25.type;
                    var28 = _closure1_slot8;
                    var28 = var28.USER;
                    if (!(var28 !== var29)) {
                        _fun110190_ip = 457;
                        continue _fun110190
                    }
                case 349:
                    var28 = _closure1_slot8;
                    var28 = var28.STREAM;
                    var27 = var14;
                    var26 = var13;
                    var24 = var11;
                    var23 = var10;
                    var22 = var9;
                    var21 = var7;
                    var5 = var0;
                    if (!(var28 === var29)) {
                        _fun110190_ip = 627;
                        continue _fun110190
                    }
                case 387:
                    var28 = var4 == var9;
                    if (!var28) {
                        _fun110190_ip = 404;
                        continue _fun110190
                    }
                case 394:
                    var29 = var25.streamId;
                    var28 = var4 != var29;
                case 404:
                    var27 = var14;
                    var26 = var13;
                    var24 = var11;
                    var23 = var10;
                    var22 = var9;
                    var21 = var7;
                    var5 = var0;
                    if (!var28) {
                        _fun110190_ip = 627;
                        continue _fun110190
                    }
                case 431:
                    var27 = var14;
                    var26 = var13;
                    var24 = var11;
                    var23 = var10;
                    var22 = var25;
                    var21 = var7;
                    var5 = var0;
                    _fun110190_ip = 627;
                    continue _fun110190;
                case 457:
                    var28 = var25.speaking;
                    if (var28) {
                        _fun110190_ip = 480;
                        continue _fun110190
                    }
                case 466:
                    var29 = var25.lastSpoke;
                    var29 = var19 - var29;
                    var28 = var29 < var15;
                case 480:
                    if (!var28) {
                        _fun110190_ip = 487;
                        continue _fun110190
                    }
                case 483:
                    var28 = var4 == var11;
                case 487:
                    if (!var28) {
                        _fun110190_ip = 493;
                        continue _fun110190
                    }
                case 490:
                    var11 = var25;
                case 493:
                    var28 = var25.voiceState;
                    var30 = var4 == var28;
                    var29 = undefined;
                    if (var30) {
                        _fun110190_ip = 514;
                        continue _fun110190
                    }
                case 508:
                    var29 = var28.selfVideo;
                case 514:
                    var30 = var4 != var29;
                    if (!var30) {
                        _fun110190_ip = 524;
                        continue _fun110190
                    }
                case 521:
                    var30 = var29;
                case 524:
                    if (!var30) {
                        _fun110190_ip = 553;
                        continue _fun110190
                    }
                case 527:
                    var31 = var4 == var10;
                    if (var31) {
                        _fun110190_ip = 550;
                        continue _fun110190
                    }
                case 534:
                    var33 = var10.lastSpoke;
                    var32 = var25.lastSpoke;
                    var31 = var33 < var32;
                case 550:
                    var30 = var31;
                case 553:
                    if (!var30) {
                        _fun110190_ip = 559;
                        continue _fun110190
                    }
                case 556:
                    var10 = var25;
                case 559:
                    var30 = var4 == var7;
                    if (var30) {
                        _fun110190_ip = 582;
                        continue _fun110190
                    }
                case 566:
                    var32 = var7.lastSpoke;
                    var31 = var25.lastSpoke;
                    var30 = var32 < var31;
                case 582:
                    var27 = var29;
                    var26 = var28;
                    var24 = var11;
                    var23 = var10;
                    var22 = var9;
                    var21 = var7;
                    var5 = var0;
                    if (!var30) {
                        _fun110190_ip = 627;
                        continue _fun110190
                    }
                case 606:
                    var27 = var29;
                    var26 = var28;
                    var24 = var11;
                    var23 = var10;
                    var22 = var9;
                    var21 = var25;
                    var5 = var0;
                case 627:
                    var25 = var16.bind(var2)();
                    var0 = var25.done;
                    var14 = var27;
                    var13 = var26;
                    var11 = var24;
                    var10 = var23;
                    var9 = var22;
                    var7 = var21;
                    var12 = var25;
                    var3 = var11;
                    var1 = var10;
                    var6 = var9;
                    var8 = var7;
                    if (!var0) {
                        _fun110190_ip = 243;
                        continue _fun110190
                    }
                case 675:
                    var0 = {};
                    var5 = var4 != var3;
                    var0.selectedParticipantSpeaking = var5;
                    var7 = var4 == var3;
                    var5 = undefined;
                    if (var7) {
                        _fun110190_ip = 714;
                        continue _fun110190
                    }
                case 695:
                    var7 = var3.user;
                    var9 = var4 == var7;
                    var5 = undefined;
                    if (var9) {
                        _fun110190_ip = 714;
                        continue _fun110190
                    }
                case 709:
                    var5 = var7.id;
                case 714:
                    if (!(var4 == var5)) {
                        _fun110190_ip = 749;
                        continue _fun110190
                    }
                case 718:
                    var9 = var4 == var1;
                    var7 = undefined;
                    if (var9) {
                        _fun110190_ip = 746;
                        continue _fun110190
                    }
                case 727:
                    var9 = var1.user;
                    var10 = var4 == var9;
                    var7 = undefined;
                    if (var10) {
                        _fun110190_ip = 746;
                        continue _fun110190
                    }
                case 741:
                    var7 = var9.id;
                case 746:
                    var5 = var7;
                case 749:
                    if (!(var4 == var5)) {
                        _fun110190_ip = 784;
                        continue _fun110190
                    }
                case 753:
                    var9 = var4 == var8;
                    var7 = undefined;
                    if (var9) {
                        _fun110190_ip = 781;
                        continue _fun110190
                    }
                case 762:
                    var8 = var8.user;
                    var9 = var4 == var8;
                    var7 = undefined;
                    if (var9) {
                        _fun110190_ip = 781;
                        continue _fun110190
                    }
                case 776:
                    var7 = var8.id;
                case 781:
                    var5 = var7;
                case 784:
                    var0.selectedParticipantUserId = var5;
                    if (!(var4 == var3)) {
                        _fun110190_ip = 844;
                        continue _fun110190
                    }
                case 793:
                    var7 = var4 == var1;
                    var5 = undefined;
                    if (var7) {
                        _fun110190_ip = 808;
                        continue _fun110190
                    }
                case 802:
                    var5 = var1.streamId;
                case 808:
                    if (!(var4 == var5)) {
                        _fun110190_ip = 830;
                        continue _fun110190
                    }
                case 812:
                    var7 = var4 == var6;
                    var1 = undefined;
                    if (var7) {
                        _fun110190_ip = 827;
                        continue _fun110190
                    }
                case 821:
                    var1 = var6.streamId;
                case 827:
                    var5 = var1;
                case 830:
                    var6 = var4 != var5;
                    var1 = undefined;
                    if (!var6) {
                        _fun110190_ip = 842;
                        continue _fun110190
                    }
                case 839:
                    var1 = var5;
                case 842:
                    _fun110190_ip = 865;
                    continue _fun110190;
                case 844:
                    var3 = var3.streamId;
                    var4 = var4 != var3;
                    var2 = undefined;
                    if (!var4) {
                        _fun110190_ip = 862;
                        continue _fun110190
                    }
                case 859:
                    var2 = var3;
                case 862:
                    var1 = var2;
                case 865:
                    var0.selectedStreamId = var1;
                    return var0;
                case 872:
                    var0 = {};
                    var1 = false;
                    var0.selectedParticipantSpeaking = var1;
                    var1 = undefined;
                    var0.selectedParticipantUserId = var1;
                    var0.selectedStreamId = var1;
                    return var0;
            }
        };
        var0 = var5.bind(var6)(var4, var0, var3);
        var _closure2_slot4 = var0;
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var5 = var0.selectedParticipantSpeaking;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            _fun110191: for (var _fun110191_ip = 0;;) switch (_fun110191_ip) {
                case 0:
                    var1 = _closure2_slot4;
                    var1 = var1.selectedParticipantSpeaking;
                    var4 = undefined;
                    if (var1) {
                        _fun110191_ip = 22;
                        continue _fun110191
                    }
                case 20:
                    return var4;
                case 22:
                    var1 = global;
                    var3 = var1.setTimeout;
                    var2 = function() { // Environment: var0
                        var2 = _closure2_slot3;
                        var0 = undefined;
                        var1 = function(arg0) { // Environment: var1
                            var1 = arg0;
                            var0 = 1;
                            var0 = var1 + var0;
                            return var0;
                        };
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = 3000;
                    var1 = var3.bind(var4)(var2, var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var _closure1_slot11 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ParticipantTypes;
    var _closure1_slot8 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/external_pip/useExternalPipParticipant.android.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun110195: for (var _fun110195_ip = 0;;) switch (_fun110195_ip) {
            case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 7;
                var1 = var4[var1];
                var7 = undefined;
                var5 = var3.bind(var7)(var1);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot7;
                    var0 = var1.getChannelId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var4.bind(var5)(var3, var1);
                var4 = null;
                var3 = var4 != var1;
                var5 = undefined;
                if (!var3) {
                    _fun110195_ip = 71;
                    continue _fun110195
                }
            case 68:
                var5 = var1;
            case 71:
                var3 = {};
                var3.channelId = var5;
                var1 = function arg0() {
                    var1 = arg0;
                    var1 = var1.channelId;
                    var _closure3_slot0 = var1;
                    var3 = _closure1_slot3;
                    var2 = var3.useRef;
                    var4 = undefined;
                    var2 = var2.bind(var3)(var4);
                    var _closure3_slot1 = var2;
                    var3 = _closure1_slot3;
                    var2 = var3.useRef;
                    var2 = var2.bind(var3)(var4);
                    var _closure3_slot2 = var2;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 7;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.useStateFromStoresObject;
                    var4 = _closure1_slot4;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = function() { // Environment: var0
                        _fun110198: for (var _fun110198_ip = 0;;) switch (_fun110198_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var1 = null;
                                var0 = var1 != var0;
                                var6 = null;
                                if (!var0) {
                                    _fun110198_ip = 40;
                                    continue _fun110198
                                }
                            case 18:
                                var4 = _closure1_slot4;
                                var3 = var4.getSelectedParticipantId;
                                var0 = _closure3_slot0;
                                var6 = var3.bind(var4)(var0);
                            case 40:
                                var0 = var1 != var6;
                                var5 = null;
                                if (!var0) {
                                    _fun110198_ip = 97;
                                    continue _fun110198
                                }
                            case 49:
                                var0 = _closure3_slot0;
                                var0 = var1 != var0;
                                var5 = null;
                                if (!var0) {
                                    _fun110198_ip = 97;
                                    continue _fun110198
                                }
                            case 62:
                                var4 = _closure1_slot4;
                                var3 = var4.getParticipant;
                                var0 = _closure3_slot0;
                                var0 = var3.bind(var4)(var0, var6);
                                var3 = var1 != var0;
                                var5 = null;
                                if (!var3) {
                                    _fun110198_ip = 97;
                                    continue _fun110198
                                }
                            case 94:
                                var5 = var0;
                            case 97:
                                var0 = _closure3_slot1;
                                var0 = var0.current;
                                var3 = undefined;
                                if (!(var3 === var0)) {
                                    _fun110198_ip = 160;
                                    continue _fun110198
                                }
                            case 112:
                                var4 = _closure3_slot1;
                                var6 = var1 == var5;
                                var0 = undefined;
                                if (var6) {
                                    _fun110198_ip = 130;
                                    continue _fun110198
                                }
                            case 125:
                                var0 = var5.id;
                            case 130:
                                var4.current = var0;
                                var4 = _closure3_slot2;
                                var6 = var1 == var5;
                                var0 = undefined;
                                if (var6) {
                                    _fun110198_ip = 154;
                                    continue _fun110198
                                }
                            case 149:
                                var0 = var5.type;
                            case 154:
                                var4.current = var0;
                            case 160:
                                var0 = _closure3_slot1;
                                var4 = var0.current;
                                var6 = var1 == var5;
                                var0 = undefined;
                                if (var6) {
                                    _fun110198_ip = 183;
                                    continue _fun110198
                                }
                            case 178:
                                var0 = var5.id;
                            case 183:
                                if (!(var4 === var0)) {
                                    _fun110198_ip = 287;
                                    continue _fun110198
                                }
                            case 187:
                                var0 = {};
                                var4 = var1 == var5;
                                var7 = undefined;
                                if (var4) {
                                    _fun110198_ip = 203;
                                    continue _fun110198
                                }
                            case 198:
                                var7 = var5.type;
                            case 203:
                                var4 = _closure1_slot8;
                                var6 = var4.ACTIVITY;
                                var4 = undefined;
                                if (!(var7 !== var6)) {
                                    _fun110198_ip = 249;
                                    continue _fun110198
                                }
                            case 222:
                                var7 = var1 == var5;
                                var6 = undefined;
                                if (var7) {
                                    _fun110198_ip = 237;
                                    continue _fun110198
                                }
                            case 231:
                                var6 = var5.streamId;
                            case 237:
                                var7 = var1 != var6;
                                var4 = undefined;
                                if (!var7) {
                                    _fun110198_ip = 249;
                                    continue _fun110198
                                }
                            case 246:
                                var4 = var6;
                            case 249:
                                var0.focusedParticipantStreamId = var4;
                                var6 = var1 == var5;
                                var4 = undefined;
                                if (var6) {
                                    _fun110198_ip = 268;
                                    continue _fun110198
                                }
                            case 263:
                                var4 = var5.type;
                            case 268:
                                var5 = var1 != var4;
                                var1 = undefined;
                                if (!var5) {
                                    _fun110198_ip = 280;
                                    continue _fun110198
                                }
                            case 277:
                                var1 = var4;
                            case 280:
                                var0.focusedParticipantType = var1;
                                _fun110198_ip = 311;
                                continue _fun110198;
                            case 287:
                                var1 = {};
                                var1.focusedParticipantStreamId = var3;
                                var2 = _closure3_slot2;
                                var2 = var2.current;
                                var1.focusedParticipantType = var2;
                                var0 = var1;
                            case 311:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = var1.bind(var7)(var3);
                var8 = var1.focusedParticipantStreamId;
                var1 = var1.focusedParticipantType;
                var3 = _closure1_slot11;
                var2 = {};
                var2.channelId = var5;
                var2.focusedParticipantStreamId = var8;
                var2 = var3.bind(var7)(var2);
                var6 = var2.selectedStreamId;
                var3 = var2.selectedParticipantUserId;
                var2 = var2.selectedParticipantSpeaking;
                if (!(var4 != var8)) {
                    _fun110195_ip = 146;
                    continue _fun110195
                }
            case 143:
                var6 = var8;
            case 146:
                var8 = var4 != var6;
                var4 = undefined;
                if (!var8) {
                    _fun110195_ip = 158;
                    continue _fun110195
                }
            case 155:
                var4 = var6;
            case 158:
                var6 = {};
                var6.selectedParticipantStreamId = var4;
                var0 = function arg0() {
                    var1 = arg0;
                    var4 = var1.selectedParticipantStreamId;
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot3;
                    var2 = var3.useEffect;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = function() { // Environment: var0
                        _fun110200: for (var _fun110200_ip = 0;;) switch (_fun110200_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var _closure4_slot0 = var2;
                                var1 = null;
                                if (!(var1 == var2)) {
                                    _fun110200_ip = 23;
                                    continue _fun110200
                                }
                            case 19:
                                var1 = undefined;
                                return var1;
                            case 23:
                                var1 = 'useExternalPipParticipant';
                                var _closure4_slot1 = var1;
                                var2 = _closure1_slot6;
                                var1 = var2.getMediaEngine;
                                var3 = var1.bind(var2)();
                                var2 = var3.eachConnection;
                                var1 = function(arg0) { // Environment: var0
                                    var4 = arg0;
                                    var3 = var4.setHasActiveVideoOutputSink;
                                    var2 = _closure4_slot0;
                                    var1 = _closure4_slot1;
                                    var0 = true;
                                    var0 = var3.bind(var4)(var2, var0, var1);
                                    return var0;
                                };
                                var1 = var2.bind(var3)(var1);
                                var0 = function() { // Environment: var0
                                    var1 = _closure1_slot6;
                                    var0 = var1.getMediaEngine;
                                    var2 = var0.bind(var1)();
                                    var1 = var2.eachConnection;
                                    var0 = function(arg0) { // Environment: var0
                                        var4 = arg0;
                                        var3 = var4.setHasActiveVideoOutputSink;
                                        var2 = _closure4_slot0;
                                        var1 = _closure4_slot1;
                                        var0 = false;
                                        var0 = var3.bind(var4)(var2, var0, var1);
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    var0 = undefined;
                    return var0;
                };
                var0 = var0.bind(var7)(var6);
                var0 = {};
                var0.channelId = var5;
                var0.selectedParticipantStreamId = var4;
                var0.selectedParticipantUserId = var3;
                var0.selectedParticipantSpeaking = var2;
                var0.focusedParticipantType = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 3939, 1216, 3467, 3509, 3514, 566, 2]);