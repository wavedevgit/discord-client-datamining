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
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var8
        _fun50254: for (var _fun50254_ip = 0;;) switch (_fun50254_ip) {
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
                _fun50254_ip = 74;
                continue _fun50254;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot27 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var3 = function() { // Original name: updateActivities, environment: var8
        _fun50257: for (var _fun50257_ip = 0;;) switch (_fun50257_ip) {
            case 0:
                var2 = new Array(0);
                var _closure2_slot0 = var2;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 20;
                var4 = var4[var0];
                var0 = undefined;
                var4 = var5.bind(var0)(var4);
                var5 = var4.CustomStatusSetting;
                var4 = var5.getSetting;
                var8 = var4.bind(var5)();
                var5 = null;
                var4 = var5 != var8;
                if (!var4) {
                    _fun50257_ip = 186;
                    continue _fun50257
                }
            case 63:
                var7 = var8.expiresAtMs;
                var6 = '0';
                var6 = var6 === var7;
                if (var6) {
                    _fun50257_ip = 183;
                    continue _fun50257
                }
            case 82:
                var7 = global;
                var11 = var7.Date;
                var10 = var7.Number;
                var9 = var8.expiresAtMs;
                var16 = var10.bind(var0)(var9);
                var10 = var11.prototype;
                var10 = Object.create(var10, {
                    constructor: {
                        value: var11
                    }
                });
                var17 = var10;
                var9 = new var17[var11](var16, var15);
                var10 = var9 instanceof Object ? var9 : var10;
                var9 = var10.getTime;
                var9 = var9.bind(var10)();
                var7 = var7.Date;
                var10 = var7.prototype;
                var10 = Object.create(var10, {
                    constructor: {
                        value: var7
                    }
                });
                var17 = var10;
                var7 = new var17[var7](var16);
                var10 = var7 instanceof Object ? var7 : var10;
                var7 = var10.getTime;
                var7 = var7.bind(var10)();
                var9 = var9 - var7;
                var7 = 0;
                var6 = var9 > var7;
            case 183:
                var4 = var6;
            case 186:
                if (!var4) {
                    _fun50257_ip = 230;
                    continue _fun50257
                }
            case 189:
                var6 = var2.push;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 21;
                var4 = var9[var4];
                var7 = var7.bind(var0)(var4);
                var4 = var7.getActivityFromCustomStatus;
                var4 = var4.bind(var7)(var8);
                var4 = var6.bind(var2)(var4);
            case 230:
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
                var6 = _closure1_slot19;
                var4 = var6.getStream;
                var7 = var4.bind(var6)();
                if (!(var5 != var7)) {
                    _fun50257_ip = 331;
                    continue _fun50257
                }
            case 295:
                var6 = var2.push;
                var4 = {};
                var8 = _closure1_slot24;
                var8 = var8.STREAMING;
                var4.type = var8;
                var16 = var4;
                var15 = var7;
                var7 = copyDataProperties(var16, var15);
                var4 = var6.bind(var2)(var4);
            case 331:
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
                var4 = 22;
                var4 = var9[var4];
                var9 = var6.bind(var0)(var4);
                var6 = var9.forEach;
                var4 = _closure1_slot26;
                var3 = function(arg0) { // Environment: var3
                    _fun50258: for (var _fun50258_ip = 0;;) switch (_fun50258_ip) {
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
                                _fun50258_ip = 32;
                                continue _fun50258
                            }
                        case 29:
                            var4 = var7;
                        case 32:
                            var4 = undefined;
                            var7 = var2;
                            if (var7) {
                                _fun50258_ip = 60;
                                continue _fun50258
                            }
                        case 40:
                            var6 = var6().value;
                            var7 = var1;
                            var7 = var7 === var3;
                            var2 = var7;
                            if (var7) {
                                _fun50258_ip = 60;
                                continue _fun50258
                            }
                        case 57:
                            var4 = var6;
                        case 60:
                            var5 = var4;
                            var4 = var2;
                            if (var4) {
                                _fun50258_ip = 72;
                                continue _fun50258
                            }
                        case 69:
                            var1.return();
                        case 72:
                            var4 = var5;
                            var6 = var4.application_id;
                            var4 = null;
                            if (!(var4 != var6)) {
                                _fun50258_ip = 126;
                                continue _fun50258
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
                                _fun50258_ip = 136;
                                continue _fun50258
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
                    _fun50257_ip = 433;
                    continue _fun50257
                }
            case 424:
                var3 = var9.name;
                var6 = var5 != var3;
            case 433:
                if (!var6) {
                    _fun50257_ip = 526;
                    continue _fun50257
                }
            case 436:
                var4 = var8.has;
                var3 = var9.name;
                var3 = var4.bind(var8)(var3);
                if (var3) {
                    _fun50257_ip = 523;
                    continue _fun50257
                }
            case 454:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 23;
                var4 = var10[var4];
                var10 = var8.bind(var0)(var4);
                var8 = var10.doesGameHaveRichPresence;
                var4 = new Array(0);
                var16 = var4;
                var15 = var2;
                var14 = 0;
                var14 = arraySpread(var16, var15, var14);
                var13 = _closure1_slot21;
                var11 = var13.getRemoteActivities;
                var15 = var11.bind(var13)();
                var16 = var4;
                var11 = arraySpread(var16, var15, var14);
                var3 = var8.bind(var10)(var9, var4);
            case 523:
                var6 = var3;
            case 526:
                var4 = var5 != var9;
                if (!var4) {
                    _fun50257_ip = 539;
                    continue _fun50257
                }
            case 533:
                var4 = var9.isLauncher;
            case 539:
                var8 = _closure1_slot16;
                var3 = var8.getCurrentUserActiveStream;
                var3 = var3.bind(var8)();
                if (!(var5 != var9)) {
                    _fun50257_ip = 728;
                    continue _fun50257
                }
            case 560:
                var8 = var9.name;
                if (!(var5 != var8)) {
                    _fun50257_ip = 728;
                    continue _fun50257
                }
            case 572:
                if (var6) {
                    _fun50257_ip = 728;
                    continue _fun50257
                }
            case 578:
                if (!var4) {
                    _fun50257_ip = 588;
                    continue _fun50257
                }
            case 581:
                if (!(var5 != var3)) {
                    _fun50257_ip = 728;
                    continue _fun50257
                }
            case 588:
                var6 = _closure1_slot18;
                var4 = var6.getGameByName;
                var3 = var9.name;
                var10 = var4.bind(var6)(var3);
                var4 = var2.push;
                var3 = {};
                var6 = _closure1_slot24;
                var6 = var6.PLAYING;
                var3.type = var6;
                var6 = var9.name;
                var3.name = var6;
                var6 = var9.id;
                if (!(var5 == var6)) {
                    _fun50257_ip = 664;
                    continue _fun50257
                }
            case 647:
                var11 = var5 == var10;
                var8 = undefined;
                if (var11) {
                    _fun50257_ip = 661;
                    continue _fun50257
                }
            case 656:
                var8 = var10.id;
            case 661:
                var6 = var8;
            case 664:
                var3.application_id = var6;
                var6 = {};
                var8 = var9.start;
                var6.start = var8;
                var3.timestamps = var6;
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 24;
                var6 = var10[var6];
                var8 = var8.bind(var0)(var6);
                var6 = var8.maybeAddAdditionalGameMetadata;
                var15 = var6.bind(var8)(var9);
                var16 = var3;
                var6 = copyDataProperties(var16, var15);
                var3 = var4.bind(var2)(var3);
            case 728:
                var4 = _closure1_slot14;
                var3 = var4.getActivity;
                var6 = var3.bind(var4)();
                if (!(var5 != var6)) {
                    _fun50257_ip = 782;
                    continue _fun50257
                }
            case 746:
                var4 = var2.push;
                var3 = {};
                var8 = _closure1_slot24;
                var8 = var8.LISTENING;
                var3.type = var8;
                var16 = var3;
                var15 = var6;
                var6 = copyDataProperties(var16, var15);
                var3 = var4.bind(var2)(var3);
            case 782:
                var4 = _closure1_slot12;
                var3 = var4.getCurrentHangStatus;
                var11 = var3.bind(var4)();
                if (!(var5 != var11)) {
                    _fun50257_ip = 1017;
                    continue _fun50257
                }
            case 803:
                var4 = _closure1_slot12;
                var3 = var4.getCustomHangStatus;
                var6 = var3.bind(var4)();
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 25;
                var3 = var8[var3];
                var8 = var4.bind(var0)(var3);
                var4 = var8.getHangStatusExperiment;
                var3 = {};
                var12 = _closure1_slot17;
                var10 = var12.getChannel;
                var13 = _closure1_slot20;
                var9 = var13.getVoiceChannelId;
                var9 = var9.bind(var13)();
                var10 = var10.bind(var12)(var9);
                var12 = var5 == var10;
                var9 = undefined;
                if (var12) {
                    _fun50257_ip = 887;
                    continue _fun50257
                }
            case 882:
                var9 = var10.guild_id;
            case 887:
                var3.guildId = var9;
                var9 = 'LocalActivityStore';
                var3.location = var9;
                var3 = var4.bind(var8)(var3);
                var10 = var3.defaultStatusVariant;
                var4 = var2.push;
                var3 = {};
                var8 = _closure1_slot24;
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
                    _fun50257_ip = 987;
                    continue _fun50257
                }
            case 982:
                var7 = var6.status;
            case 987:
                var3.details = var7;
                var7 = var5 == var6;
                var5 = undefined;
                if (var7) {
                    _fun50257_ip = 1007;
                    continue _fun50257
                }
            case 1001:
                var5 = var6.emoji;
            case 1007:
                var3.emoji = var5;
                var3 = var4.bind(var2)(var3);
            case 1017:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 26;
                var3 = var5[var3];
                var4 = var4.bind(var0)(var3);
                var3 = _closure1_slot25;
                var3 = var4.bind(var0)(var3, var2);
                if (var3) {
                    _fun50257_ip = 1054;
                    continue _fun50257
                }
            case 1050:
                _closure1_slot25 = var2;
            case 1054:
                return var0;
        }
    };
    var _closure1_slot28 = var3;
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
    var1 = var4.bind(var0)(var1);
    var7 = var1.ActivityFlags;
    var _closure1_slot22 = var7;
    var7 = var1.ActivityGamePlatforms;
    var _closure1_slot23 = var7;
    var1 = var1.ActivityTypes;
    var _closure1_slot24 = var1;
    var1 = new Array(0);
    var _closure1_slot25 = var1;
    var1 = {};
    var _closure1_slot26 = var1;
    var1 = 29;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var8
        var3 = function() { // Original name: LocalActivityStore, environment: var5
            _fun50260: for (var _fun50260_ip = 0;;) switch (_fun50260_ip) {
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
                    var0 = _closure1_slot27;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun50260_ip = 69;
                        continue _fun50260
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun50260_ip = 105;
                    continue _fun50260;
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
        var0 = function() { // Original name: value, environment: var5
            var3 = this;
            var15 = var3.waitFor;
            var28 = _closure1_slot10;
            var27 = _closure1_slot16;
            var26 = _closure1_slot17;
            var25 = _closure1_slot9;
            var24 = _closure1_slot19;
            var23 = _closure1_slot13;
            var22 = _closure1_slot18;
            var21 = _closure1_slot12;
            var20 = _closure1_slot11;
            var19 = _closure1_slot20;
            var18 = _closure1_slot21;
            var17 = _closure1_slot14;
            var16 = _closure1_slot15;
            var29 = var3;
            var1 = var29[var15](var28, var27, var26, var25, var24, var23, var22, var21, var20, var19, var18, var17, var16, var15);
            var2 = var3.syncWith;
            var4 = _closure1_slot13;
            var1 = new Array(2);
            var1[0] = var4;
            var0 = _closure1_slot12;
            var1[1] = var0;
            var0 = function() { // Environment: var0
                var1 = _closure1_slot28;
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
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot25;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getPrimaryActivity';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var1 = _closure1_slot25;
            var0 = 0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getApplicationActivity';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
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
        var6 = function() { // Original name: value, environment: var5
            var2 = this;
            var1 = var2.findActivity;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.type;
                var0 = _closure1_slot24;
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
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot25;
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
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot26;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getActivityForPID';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun50271: for (var _fun50271_ip = 0;;) switch (_fun50271_ip) {
                case 0:
                    var9 = arg0;
                    var0 = global;
                    var2 = var0.Object;
                    var1 = var2.values;
                    var0 = _closure1_slot26;
                    var7 = var1.bind(var2)(var0);
                    var0 = var7.length;
                    var6 = 0;
                    var0 = var6 < var0;
                    var5 = undefined;
                    var4 = 2;
                    var3 = 1;
                    var2 = 0;
                    if (!var0) {
                        _fun50271_ip = 90;
                        continue _fun50271
                    }
                case 52:
                    var1 = var7[var2];
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var5)(var1, var4);
                    var1 = var0[var6];
                    var0 = var0[var3];
                    if (!(var1 !== var9)) {
                        _fun50271_ip = 94;
                        continue _fun50271
                    }
                case 78:
                    var2 = var2 + 1;
                    var1 = var7.length;
                    if (var2 < var1) {
                        _fun50271_ip = 52;
                        continue _fun50271
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
    var1 = 30;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var1.ROBLOX_SUBGAME_UPDATE = var3;
    var1.ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS = var3;
    var9 = function(arg0) { // Original name: handleOverlayInitialize, environment: var8
        var0 = arg0;
        var2 = var0.localActivities;
        var1 = {};
        var3 = var1;
        var0 = copyDataProperties(var3, var2);
        _closure1_slot26 = var1;
        var1 = _closure1_slot28;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.OVERLAY_INITIALIZE = var9;
    var9 = function() { // Original name: handleStartSession, environment: var8
        var1 = {};
        _closure1_slot26 = var1;
        var1 = _closure1_slot28;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.START_SESSION = var9;
    var9 = function(arg0) { // Original name: handleLocalActivityUpdate, environment: var8
        _fun50274: for (var _fun50274_ip = 0;;) switch (_fun50274_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.socketId;
                var7 = var0.pid;
                var6 = var0.activity;
                var5 = var0.partyPrivacy;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 26;
                var2 = var2[var0];
                var0 = undefined;
                var8 = var3.bind(var0)(var2);
                var2 = _closure1_slot26;
                var3 = var2[var4];
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var6;
                var2[2] = var5;
                var2 = var8.bind(var0)(var3, var2);
                if (var2) {
                    _fun50274_ip = 135;
                    continue _fun50274
                }
            case 85:
                var2 = null;
                if (!(var2 == var6)) {
                    _fun50274_ip = 101;
                    continue _fun50274
                }
            case 91:
                var2 = _closure1_slot26;
                var2 = delete var2[var4];
                _fun50274_ip = 125;
                continue _fun50274;
            case 101:
                var3 = _closure1_slot26;
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var6;
                var2[2] = var5;
                var3[var4] = var2;
            case 125:
                var1 = _closure1_slot28;
                var1 = var1.bind(var0)();
                return var0;
            case 135:
                var0 = false;
                return var0;
        }
    };
    var1.LOCAL_ACTIVITY_UPDATE = var9;
    var9 = function(arg0) { // Original name: handleRPCAppDisconnected, environment: var8
        var0 = arg0;
        var2 = var0.socketId;
        var1 = _closure1_slot26;
        var1 = delete var1[var2];
        var1 = _closure1_slot28;
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
    var8 = function() { // Original name: handleUserSettingsProtoUpdate, environment: var8
        _fun50276: for (var _fun50276_ip = 0;;) switch (_fun50276_ip) {
            case 0:
                var2 = {};
                var0 = global;
                var4 = var0.Object;
                var3 = var4.entries;
                var0 = _closure1_slot26;
                var16 = var3.bind(var4)(var0);
                var0 = var16.length;
                var15 = 0;
                var4 = var15 < var0;
                var6 = false;
                var14 = 'flags';
                var12 = 27;
                var0 = undefined;
                var11 = null;
                var10 = 28;
                var9 = 2;
                var8 = 1;
                var7 = 3;
                var5 = 0;
                var3 = false;
                if (!var4) {
                    _fun50276_ip = 355;
                    continue _fun50276
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
                    _fun50276_ip = 131;
                    continue _fun50276
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
                    _fun50276_ip = 183;
                    continue _fun50276
                }
            case 178:
                var20 = var21.flags;
            case 183:
                var27 = var11 != var20;
                var22 = 0;
                if (!var27) {
                    _fun50276_ip = 195;
                    continue _fun50276
                }
            case 192:
                var22 = var20;
            case 195:
                var20 = _closure1_slot22;
                var20 = var20.INSTANCE;
                var31 = var23.bind(var26)(var22, var20);
                var26 = var21.platform;
                var20 = _closure1_slot23;
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
                    _fun50276_ip = 298;
                    continue _fun50276
                }
            case 276:
                var4 = new Array(3);
                var4[0] = var19;
                var4[1] = var21;
                var4[2] = var18;
                var2[var17] = var4;
                _fun50276_ip = 337;
                continue _fun50276;
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
                    _fun50276_ip = 74;
                    continue _fun50276
                }
            case 355:
                if (!var3) {
                    _fun50276_ip = 362;
                    continue _fun50276
                }
            case 358:
                _closure1_slot26 = var2;
            case 362:
                var1 = _closure1_slot28;
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
    var3 = 31;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/LocalActivityStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 1371, 3413, 3442, 3570, 5621, 5610, 1310, 3673, 1372, 3443, 5628, 1661, 3479, 660, 1348, 5629, 22, 5630, 3576, 3573, 644, 5631, 1384, 566, 806, 2]);