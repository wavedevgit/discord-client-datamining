// stores/LocalActivityStore.tsx
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
        _fun50388: for (var _fun50388_ip = 0;;) switch (_fun50388_ip) {
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
                _fun50388_ip = 74;
                continue _fun50388;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot28 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function arg0() {
        _fun50391: for (var _fun50391_ip = 0;;) switch (_fun50391_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot16;
                var0 = var1.getVoiceDareCustomStatusActivity;
                var0 = var0.bind(var1)();
                var5 = null;
                if (!(var5 == var0)) {
                    _fun50391_ip = 221;
                    continue _fun50391
                }
            case 31:
                var3 = var5 == var4;
                var1 = null;
                if (var3) {
                    _fun50391_ip = 218;
                    continue _fun50391
                }
            case 43:
                var6 = var5 == var4;
                var3 = true;
                if (var6) {
                    _fun50391_ip = 180;
                    continue _fun50391
                }
            case 55:
                var7 = var4.expiresAtMs;
                var6 = '0';
                var6 = var6 === var7;
                if (var6) {
                    _fun50391_ip = 177;
                    continue _fun50391
                }
            case 74:
                var7 = global;
                var10 = var7.Date;
                var11 = var7.Number;
                var9 = var4.expiresAtMs;
                var8 = undefined;
                var12 = var11.bind(var8)(var9);
                var9 = var10.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var10
                    }
                });
                var13 = var9;
                var8 = new var13[var10](var12, var11);
                var9 = var8 instanceof Object ? var8 : var9;
                var8 = var9.getTime;
                var8 = var8.bind(var9)();
                var7 = var7.Date;
                var9 = var7.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var7
                    }
                });
                var13 = var9;
                var7 = new var13[var7](var12);
                var9 = var7 instanceof Object ? var7 : var9;
                var7 = var9.getTime;
                var7 = var7.bind(var9)();
                var8 = var8 - var7;
                var7 = 0;
                var6 = var8 > var7;
            case 177:
                var3 = !var6;
            case 180:
                var1 = null;
                if (var3) {
                    _fun50391_ip = 218;
                    continue _fun50391
                }
            case 185:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 21;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.getActivityFromCustomStatus;
                var1 = var2.bind(var3)(var4);
            case 218:
                var0 = var1;
            case 221:
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var3 = function() {
        _fun50392: for (var _fun50392_ip = 0;;) switch (_fun50392_ip) {
            case 0:
                var2 = new Array(0);
                var _closure2_slot0 = var2;
                var5 = _closure1_slot29;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 22;
                var4 = var4[var0];
                var0 = undefined;
                var4 = var6.bind(var0)(var4);
                var6 = var4.CustomStatusSetting;
                var4 = var6.getSetting;
                var4 = var4.bind(var6)();
                var6 = var5.bind(var0)(var4);
                var5 = null;
                if (!(var5 != var6)) {
                    _fun50392_ip = 76;
                    continue _fun50392
                }
            case 66:
                var4 = var2.push;
                var4 = var4.bind(var2)(var6);
            case 76:
                var6 = _closure1_slot13;
                var4 = var6.getActivities;
                var15 = var4.bind(var6)();
                var6 = var2.push;
                var4 = new Array(0);
                var16 = var4;
                var14 = 0;
                var7 = arraySpread(var16, var15, var14);
                var16 = var6;
                var15 = var4;
                var14 = var2;
                var4 = apply(var16, var15, var14);
                var6 = _closure1_slot20;
                var4 = var6.getStream;
                var7 = var4.bind(var6)();
                if (!(var5 != var7)) {
                    _fun50392_ip = 177;
                    continue _fun50392
                }
            case 141:
                var6 = var2.push;
                var4 = {};
                var8 = _closure1_slot25;
                var8 = var8.STREAMING;
                var4.type = var8;
                var16 = var4;
                var15 = var7;
                var7 = copyDataProperties(var16, var15);
                var4 = var6.bind(var2)(var4);
            case 177:
                var7 = global;
                var4 = var7.Set;
                var6 = var4.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var4
                    }
                });
                var17 = var6;
                var4 = new var17[var4](var16);
                var8 = var4 instanceof Object ? var4 : var6;
                var _closure2_slot1 = var8;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 23;
                var4 = var9[var4];
                var9 = var6.bind(var0)(var4);
                var6 = var9.forEach;
                var4 = _closure1_slot27;
                var3 = function(arg0) { // Environment: var3
                    _fun50393: for (var _fun50393_ip = 0;;) switch (_fun50393_ip) {
                        case 0:
                            var6 = arg0;
                            var1 = var6[Symbol.iterator];
                            var6 = var1().next;
                            var3 = undefined;
                            var2 = undefined;
                            var4 = undefined;
                            var7 = var6().value;
                            var8 = var1;
                            var8 = var8 === var3;
                            var2 = var8;
                            if (var8) {
                                _fun50393_ip = 32;
                                continue _fun50393
                            }
                        case 29:
                            var4 = var7;
                        case 32:
                            var4 = undefined;
                            var7 = var2;
                            if (var7) {
                                _fun50393_ip = 60;
                                continue _fun50393
                            }
                        case 40:
                            var6 = var6().value;
                            var7 = var1;
                            var7 = var7 === var3;
                            var2 = var7;
                            if (var7) {
                                _fun50393_ip = 60;
                                continue _fun50393
                            }
                        case 57:
                            var4 = var6;
                        case 60:
                            var5 = var4;
                            var4 = var2;
                            if (var4) {
                                _fun50393_ip = 72;
                                continue _fun50393
                            }
                        case 69:
                            var1.return();
                        case 72:
                            var4 = var5;
                            var6 = var4.application_id;
                            var4 = null;
                            if (!(var4 != var6)) {
                                _fun50393_ip = 126;
                                continue _fun50393
                            }
                        case 87:
                            var8 = _closure2_slot1;
                            var7 = var8.add;
                            var6 = var5;
                            var5 = var6.name;
                            var5 = var7.bind(var8)(var5);
                            var5 = _closure2_slot0;
                            var4 = var5.push;
                            var4 = var4.bind(var5)(var6);
                        case 126:
                            return var3;
                        case 128:
                            CatchBlockStart(arg_register = 0);
                            if (var2) {
                                _fun50393_ip = 136;
                                continue _fun50393
                            }
                        case 133:
                            var1.return();
                        case 136:
                            throw var0;
                    }
                };
                var3 = var6.bind(var9)(var4, var3);
                var4 = _closure1_slot11;
                var3 = var4.getVisibleGame;
                var9 = var3.bind(var4)();
                var6 = var5 != var9;
                if (!var6) {
                    _fun50392_ip = 279;
                    continue _fun50392
                }
            case 270:
                var3 = var9.name;
                var6 = var5 != var3;
            case 279:
                if (!var6) {
                    _fun50392_ip = 372;
                    continue _fun50392
                }
            case 282:
                var4 = var8.has;
                var3 = var9.name;
                var3 = var4.bind(var8)(var3);
                if (var3) {
                    _fun50392_ip = 369;
                    continue _fun50392
                }
            case 300:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 24;
                var4 = var10[var4];
                var10 = var8.bind(var0)(var4);
                var8 = var10.doesGameHaveRichPresence;
                var4 = new Array(0);
                var16 = var4;
                var15 = var2;
                var14 = 0;
                var14 = arraySpread(var16, var15, var14);
                var13 = _closure1_slot22;
                var11 = var13.getRemoteActivities;
                var15 = var11.bind(var13)();
                var16 = var4;
                var11 = arraySpread(var16, var15, var14);
                var3 = var8.bind(var10)(var9, var4);
            case 369:
                var6 = var3;
            case 372:
                var4 = var5 != var9;
                if (!var4) {
                    _fun50392_ip = 385;
                    continue _fun50392
                }
            case 379:
                var4 = var9.isLauncher;
            case 385:
                var8 = _closure1_slot17;
                var3 = var8.getCurrentUserActiveStream;
                var3 = var3.bind(var8)();
                if (!(var5 != var9)) {
                    _fun50392_ip = 574;
                    continue _fun50392
                }
            case 406:
                var8 = var9.name;
                if (!(var5 != var8)) {
                    _fun50392_ip = 574;
                    continue _fun50392
                }
            case 418:
                if (var6) {
                    _fun50392_ip = 574;
                    continue _fun50392
                }
            case 424:
                if (!var4) {
                    _fun50392_ip = 434;
                    continue _fun50392
                }
            case 427:
                if (!(var5 != var3)) {
                    _fun50392_ip = 574;
                    continue _fun50392
                }
            case 434:
                var6 = _closure1_slot19;
                var4 = var6.getGameByName;
                var3 = var9.name;
                var10 = var4.bind(var6)(var3);
                var4 = var2.push;
                var3 = {};
                var6 = _closure1_slot25;
                var6 = var6.PLAYING;
                var3.type = var6;
                var6 = var9.name;
                var3.name = var6;
                var6 = var9.id;
                if (!(var5 == var6)) {
                    _fun50392_ip = 510;
                    continue _fun50392
                }
            case 493:
                var11 = var5 == var10;
                var8 = undefined;
                if (var11) {
                    _fun50392_ip = 507;
                    continue _fun50392
                }
            case 502:
                var8 = var10.id;
            case 507:
                var6 = var8;
            case 510:
                var3.application_id = var6;
                var6 = {};
                var8 = var9.start;
                var6.start = var8;
                var3.timestamps = var6;
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 25;
                var6 = var10[var6];
                var8 = var8.bind(var0)(var6);
                var6 = var8.maybeAddAdditionalGameMetadata;
                var15 = var6.bind(var8)(var9);
                var16 = var3;
                var6 = copyDataProperties(var16, var15);
                var3 = var4.bind(var2)(var3);
            case 574:
                var4 = _closure1_slot14;
                var3 = var4.getActivity;
                var6 = var3.bind(var4)();
                if (!(var5 != var6)) {
                    _fun50392_ip = 628;
                    continue _fun50392
                }
            case 592:
                var4 = var2.push;
                var3 = {};
                var8 = _closure1_slot25;
                var8 = var8.LISTENING;
                var3.type = var8;
                var16 = var3;
                var15 = var6;
                var6 = copyDataProperties(var16, var15);
                var3 = var4.bind(var2)(var3);
            case 628:
                var4 = _closure1_slot12;
                var3 = var4.getCurrentHangStatus;
                var11 = var3.bind(var4)();
                if (!(var5 != var11)) {
                    _fun50392_ip = 863;
                    continue _fun50392
                }
            case 649:
                var4 = _closure1_slot12;
                var3 = var4.getCustomHangStatus;
                var6 = var3.bind(var4)();
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 26;
                var3 = var8[var3];
                var8 = var4.bind(var0)(var3);
                var4 = var8.getHangStatusExperiment;
                var3 = {};
                var12 = _closure1_slot18;
                var10 = var12.getChannel;
                var13 = _closure1_slot21;
                var9 = var13.getVoiceChannelId;
                var9 = var9.bind(var13)();
                var10 = var10.bind(var12)(var9);
                var12 = var5 == var10;
                var9 = undefined;
                if (var12) {
                    _fun50392_ip = 733;
                    continue _fun50392
                }
            case 728:
                var9 = var10.guild_id;
            case 733:
                var3.guildId = var9;
                var9 = 'LocalActivityStore';
                var3.location = var9;
                var3 = var4.bind(var8)(var3);
                var10 = var3.defaultStatusVariant;
                var4 = var2.push;
                var3 = {};
                var8 = _closure1_slot25;
                var8 = var8.HANG_STATUS;
                var3.type = var8;
                var8 = 'Hang Status';
                var3.name = var8;
                var7 = var7.HermesInternal;
                var9 = var7.concat;
                var8 = '';
                var7 = ':';
                var7 = var9.bind(var8)(var11, var7, var10);
                var3.state = var7;
                var8 = var5 == var6;
                var7 = undefined;
                if (var8) {
                    _fun50392_ip = 833;
                    continue _fun50392
                }
            case 828:
                var7 = var6.status;
            case 833:
                var3.details = var7;
                var7 = var5 == var6;
                var5 = undefined;
                if (var7) {
                    _fun50392_ip = 853;
                    continue _fun50392
                }
            case 847:
                var5 = var6.emoji;
            case 853:
                var3.emoji = var5;
                var3 = var4.bind(var2)(var3);
            case 863:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 27;
                var3 = var5[var3];
                var4 = var4.bind(var0)(var3);
                var3 = _closure1_slot26;
                var3 = var4.bind(var0)(var3, var2);
                if (var3) {
                    _fun50392_ip = 900;
                    continue _fun50392
                }
            case 896:
                _closure1_slot26 = var2;
            case 900:
                return var0;
        }
    };
    var _closure1_slot30 = var3;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var1);
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
    var1 = var6.bind(var0)(var1);
    var _closure1_slot18 = var1;
    var1 = 16;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot19 = var1;
    var1 = 17;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot20 = var1;
    var1 = 18;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot21 = var1;
    var1 = 19;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot22 = var1;
    var1 = 20;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.ActivityFlags;
    var _closure1_slot23 = var7;
    var7 = var1.ActivityGamePlatforms;
    var _closure1_slot24 = var7;
    var1 = var1.ActivityTypes;
    var _closure1_slot25 = var1;
    var1 = new Array(0);
    var _closure1_slot26 = var1;
    var1 = {};
    var _closure1_slot27 = var1;
    var1 = 30;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var8
        var3 = function() {
            _fun50395: for (var _fun50395_ip = 0;;) switch (_fun50395_ip) {
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
                    var0 = _closure1_slot28;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun50395_ip = 69;
                        continue _fun50395
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun50395_ip = 105;
                    continue _fun50395;
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
        var0 = function() {
            var3 = this;
            var16 = var3.waitFor;
            var30 = _closure1_slot10;
            var29 = _closure1_slot17;
            var28 = _closure1_slot18;
            var27 = _closure1_slot9;
            var26 = _closure1_slot20;
            var25 = _closure1_slot13;
            var24 = _closure1_slot19;
            var23 = _closure1_slot12;
            var22 = _closure1_slot11;
            var21 = _closure1_slot21;
            var20 = _closure1_slot22;
            var19 = _closure1_slot14;
            var18 = _closure1_slot16;
            var17 = _closure1_slot15;
            var31 = var3;
            var1 = var31[var16](var30, var29, var28, var27, var26, var25, var24, var23, var22, var21, var20, var19, var18, var17, var16);
            var2 = var3.syncWith;
            var4 = _closure1_slot13;
            var1 = new Array(3);
            var1[0] = var4;
            var4 = _closure1_slot12;
            var1[1] = var4;
            var0 = _closure1_slot16;
            var1[2] = var0;
            var0 = function() { // Environment: var0
                var1 = _closure1_slot30;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
            };
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(8);
        var0[0] = var4;
        var4 = {};
        var6 = 'getActivities';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot26;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getPrimaryActivity';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot26;
            var0 = 0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getApplicationActivity';
        var4.key = var6;
        var6 = function arg0() {
            var2 = this;
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = var2.findActivity;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.application_id;
                var0 = _closure3_slot0;
                var0 = var1 === var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getCustomStatusActivity';
        var4.key = var6;
        var6 = function() {
            var2 = this;
            var1 = var2.findActivity;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.type;
                var0 = _closure1_slot25;
                var0 = var0.CUSTOM_STATUS;
                var0 = var1 === var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'findActivity';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot26;
            var1 = var2.find;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getApplicationActivities';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot27;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getActivityForPID';
        var4.key = var6;
        var5 = function arg0() {
            _fun50406: for (var _fun50406_ip = 0;;) switch (_fun50406_ip) {
                case 0:
                    var9 = arg0;
                    var0 = global;
                    var2 = var0.Object;
                    var1 = var2.values;
                    var0 = _closure1_slot27;
                    var7 = var1.bind(var2)(var0);
                    var0 = var7.length;
                    var6 = 0;
                    var0 = var6 < var0;
                    var5 = undefined;
                    var4 = 2;
                    var3 = 1;
                    var2 = 0;
                    if (!var0) {
                        _fun50406_ip = 90;
                        continue _fun50406
                    }
                case 52:
                    var1 = var7[var2];
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var5)(var1, var4);
                    var1 = var0[var6];
                    var0 = var0[var3];
                    if (!(var1 !== var9)) {
                        _fun50406_ip = 94;
                        continue _fun50406
                    }
                case 78:
                    var2 = var2 + 1;
                    var1 = var7.length;
                    if (var2 < var1) {
                        _fun50406_ip = 52;
                        continue _fun50406
                    }
                case 90:
                    var1 = null;
                    return var1;
                case 94:
                    return var0;
            }
        };
        var4.value = var5;
        var0[7] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'LocalActivityStore';
    var7.displayName = var1;
    var1 = 31;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var1.ROBLOX_SUBGAME_UPDATE = var3;
    var1.ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS = var3;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.localActivities;
        var1 = {};
        var3 = var1;
        var0 = copyDataProperties(var3, var2);
        _closure1_slot27 = var1;
        var1 = _closure1_slot30;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.OVERLAY_INITIALIZE = var9;
    var9 = function() {
        var1 = {};
        _closure1_slot27 = var1;
        var1 = _closure1_slot30;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.START_SESSION = var9;
    var9 = function arg0() {
        _fun50409: for (var _fun50409_ip = 0;;) switch (_fun50409_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.socketId;
                var7 = var0.pid;
                var6 = var0.activity;
                var5 = var0.partyPrivacy;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 27;
                var2 = var2[var0];
                var0 = undefined;
                var8 = var3.bind(var0)(var2);
                var2 = _closure1_slot27;
                var3 = var2[var4];
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var6;
                var2[2] = var5;
                var2 = var8.bind(var0)(var3, var2);
                if (var2) {
                    _fun50409_ip = 135;
                    continue _fun50409
                }
            case 85:
                var2 = null;
                if (!(var2 == var6)) {
                    _fun50409_ip = 101;
                    continue _fun50409
                }
            case 91:
                var2 = _closure1_slot27;
                var2 = delete var2[var4];
                _fun50409_ip = 125;
                continue _fun50409;
            case 101:
                var3 = _closure1_slot27;
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var6;
                var2[2] = var5;
                var3[var4] = var2;
            case 125:
                var1 = _closure1_slot30;
                var1 = var1.bind(var0)();
                return var0;
            case 135:
                var0 = false;
                return var0;
        }
    };
    var1.LOCAL_ACTIVITY_UPDATE = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.socketId;
        var1 = _closure1_slot27;
        var1 = delete var1[var2];
        var1 = _closure1_slot30;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.RPC_APP_DISCONNECTED = var9;
    var1.RUNNING_GAMES_CHANGE = var3;
    var1.LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS = var3;
    var1.SPOTIFY_PLAYER_STATE = var3;
    var1.SPOTIFY_PLAYER_PLAY = var3;
    var1.STREAMING_UPDATE = var3;
    var1.USER_CONNECTIONS_UPDATE = var3;
    var1.STREAM_START = var3;
    var1.STREAM_STOP = var3;
    var8 = function() {
        _fun50411: for (var _fun50411_ip = 0;;) switch (_fun50411_ip) {
            case 0:
                var2 = {};
                var0 = global;
                var4 = var0.Object;
                var3 = var4.entries;
                var0 = _closure1_slot27;
                var16 = var3.bind(var4)(var0);
                var0 = var16.length;
                var15 = 0;
                var4 = var15 < var0;
                var6 = false;
                var14 = 'flags';
                var12 = 28;
                var0 = undefined;
                var11 = null;
                var10 = 29;
                var9 = 2;
                var8 = 1;
                var7 = 3;
                var5 = 0;
                var3 = false;
                if (!var4) {
                    _fun50411_ip = 355;
                    continue _fun50411
                }
            case 74:
                var4 = var16[var5];
                var18 = _closure1_slot8;
                var4 = var18.bind(var0)(var4, var9);
                var17 = var4[var15];
                var4 = var4[var8];
                var4 = var18.bind(var0)(var4, var7);
                var19 = var4[var15];
                var21 = var4[var8];
                var18 = var4[var9];
                var20 = var21.flags;
                var22 = var11 != var20;
                var4 = 0;
                if (!var22) {
                    _fun50411_ip = 131;
                    continue _fun50411
                }
            case 128:
                var4 = var20;
            case 131:
                var22 = _closure1_slot0;
                var20 = _closure1_slot2;
                var23 = var20[var12];
                var25 = var22.bind(var0)(var23);
                var24 = var25.computeActivityFlags;
                var20 = var20[var10];
                var26 = var22.bind(var0)(var20);
                var23 = var26.hasFlag;
                var22 = var11 == var21;
                var20 = undefined;
                if (var22) {
                    _fun50411_ip = 183;
                    continue _fun50411
                }
            case 178:
                var20 = var21.flags;
            case 183:
                var27 = var11 != var20;
                var22 = 0;
                if (!var27) {
                    _fun50411_ip = 195;
                    continue _fun50411
                }
            case 192:
                var22 = var20;
            case 195:
                var20 = _closure1_slot23;
                var20 = var20.INSTANCE;
                var31 = var23.bind(var26)(var22, var20);
                var26 = var21.platform;
                var20 = _closure1_slot24;
                var20 = var20.EMBEDDED;
                var27 = _closure1_slot0;
                var22 = _closure1_slot2;
                var22 = var22[var12];
                var27 = var27.bind(var0)(var22);
                var22 = var27.isContextlessEmbeddedActivity;
                var29 = var22.bind(var27)(var21);
                var30 = var26 === var20;
                var33 = var25;
                var32 = var21;
                var28 = var18;
                var20 = var33[var24](var32, var31, var30, var29, var28, var27);
                if (!(var20 === var4)) {
                    _fun50411_ip = 298;
                    continue _fun50411
                }
            case 276:
                var4 = new Array(3);
                var4[0] = var19;
                var4[1] = var21;
                var4[2] = var18;
                var2[var17] = var4;
                _fun50411_ip = 337;
                continue _fun50411;
            case 298:
                var4 = new Array(3);
                var4[0] = var19;
                var19 = {};
                var32 = var19;
                var31 = var21;
                var21 = copyDataProperties(var32, var31);
                var19[var14] = var20;
                var4[1] = var19;
                var4[2] = var18;
                var2[var17] = var4;
                var6 = true;
            case 337:
                var5 = var5 + 1;
                var4 = var16.length;
                var3 = var6;
                if (var5 < var4) {
                    _fun50411_ip = 74;
                    continue _fun50411
                }
            case 355:
                if (!var3) {
                    _fun50411_ip = 362;
                    continue _fun50411
                }
            case 358:
                _closure1_slot27 = var2;
            case 362:
                var1 = _closure1_slot30;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var1.USER_SETTINGS_PROTO_UPDATE = var8;
    var1.EMBEDDED_ACTIVITY_CLOSE = var3;
    var1.UPDATE_HANG_STATUS = var3;
    var1.RUNNING_GAME_TOGGLE_DETECTION = var3;
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
    var3 = 32;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/LocalActivityStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 1371, 3456, 3485, 3613, 5663, 5652, 1310, 5670, 3716, 1372, 3486, 5674, 1670, 3522, 660, 5675, 1348, 22, 5676, 3619, 3616, 644, 5677, 1384, 566, 806, 2]);