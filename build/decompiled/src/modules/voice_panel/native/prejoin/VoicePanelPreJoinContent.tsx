// modules/voice_panel/native/prejoin/VoicePanelPreJoinContent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun111394: for (var _fun111394_ip = 0;;) switch (_fun111394_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun111394_ip = 46;
                    continue _fun111394
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun111394_ip = 55;
                    continue _fun111394
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun111394_ip = 345;
                    continue _fun111394
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun111394_ip = 323;
                    continue _fun111394
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun111394_ip = 283;
                    continue _fun111394
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun111394_ip = 270;
                    continue _fun111394
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
                    _fun111394_ip = 163;
                    continue _fun111394
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun111394_ip = 179;
                    continue _fun111394
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun111394_ip = 249;
                    continue _fun111394
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun111394_ip = 249;
                    continue _fun111394
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun111394_ip = 234;
                    continue _fun111394
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun111394_ip = 247;
                    continue _fun111394
                }
            case 234:
                var8 = _closure1_slot36;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun111394_ip = 265;
                continue _fun111394;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun111394_ip = 283;
                continue _fun111394;
            case 270:
                var6 = _closure1_slot36;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun111394_ip = 323;
                    continue _fun111394
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
                    _fun111394_ip = 330;
                    continue _fun111394
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun111395: for (var _fun111395_ip = 0;;) switch (_fun111395_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun111395_ip = 56;
                                continue _fun111395
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
                            _fun111395_ip = 67;
                            continue _fun111395;
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
    var _closure1_slot35 = var0;
    var0 = function arg0, arg1() {
        _fun111396: for (var _fun111396_ip = 0;;) switch (_fun111396_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun111396_ip = 23;
                    continue _fun111396
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun111396_ip = 33;
                    continue _fun111396
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
                    _fun111396_ip = 70;
                    continue _fun111396
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun111396_ip = 55;
                    continue _fun111396
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot36 = var0;
    var0 = function arg0() {
        _fun111397: for (var _fun111397_ip = 0;;) switch (_fun111397_ip) {
            case 0:
                var1 = arg0;
                var19 = var1.voiceState;
                var12 = var1.stream;
                var _closure2_slot0 = var12;
                var7 = var1.channelId;
                var _closure2_slot1 = var7;
                var1 = _closure1_slot26;
                var3 = undefined;
                var9 = var1.bind(var3)();
                var5 = _closure1_slot5;
                var4 = var5.useContext;
                var1 = _closure1_slot1;
                var18 = _closure1_slot2;
                var2 = 23;
                var2 = var18[var2];
                var2 = var1.bind(var3)(var2);
                var2 = var4.bind(var5)(var2);
                var14 = var2.mode;
                var2 = var2.setFocused;
                var _closure2_slot2 = var2;
                var6 = _closure1_slot5;
                var5 = var6.useCallback;
                var4 = new Array(3);
                var4[0] = var7;
                var4[1] = var12;
                var4[2] = var2;
                var2 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 24;
                    var1 = var5[var0];
                    var0 = undefined;
                    var6 = var3.bind(var0)(var1);
                    var4 = var6.selectVoiceChannel;
                    var3 = _closure2_slot1;
                    var3 = var4.bind(var6)(var3);
                    var3 = _closure1_slot0;
                    var2 = 25;
                    var2 = var5[var2];
                    var7 = var3.bind(var0)(var2);
                    var6 = var7.watchStream;
                    var4 = _closure2_slot0;
                    var2 = {};
                    var8 = true;
                    var2.forceMultiple = var8;
                    var2 = var6.bind(var7)(var4, var2);
                    var2 = _closure2_slot2;
                    var1 = 26;
                    var1 = var5[var1];
                    var3 = var3.bind(var0)(var1);
                    var1 = var3.encodeStreamKey;
                    var1 = var1.bind(var3)(var4);
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var11 = var5.bind(var6)(var2, var4);
                var15 = _closure1_slot0;
                var2 = 27;
                var4 = var18[var2];
                var7 = var15.bind(var3)(var4);
                var6 = var7.useStateFromStores;
                var4 = _closure1_slot11;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var0
                    var2 = _closure1_slot11;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var6.bind(var7)(var5, var4);
                var _closure2_slot3 = var4;
                var2 = var18[var2];
                var5 = var15.bind(var3)(var2);
                var4 = var5.useStateFromStores;
                var6 = _closure1_slot12;
                var2 = new Array(1);
                var2[0] = var6;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot12;
                    var2 = var3.can;
                    var0 = _closure1_slot21;
                    var1 = var0.CONNECT;
                    var0 = _closure2_slot3;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var13 = var4.bind(var5)(var2, var0);
                var2 = _closure1_slot24;
                var5 = 28;
                var0 = var18[var5];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var4 = var9.activityInfoWrapper;
                var0.style = var4;
                var7 = _closure1_slot23;
                var4 = 29;
                var4 = var18[var4];
                var4 = var15.bind(var3)(var4);
                var6 = var4.Text;
                var4 = {
                    'variant': 'text-sm/semibold',
                    'style': null,
                    'color': 'text-default'
                };
                var10 = var9.activityInfoHeader;
                var4.style = var10;
                var10 = 30;
                var16 = var18[var10];
                var16 = var15.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.format;
                var10 = var18[var10];
                var10 = var15.bind(var3)(var10);
                var10 = var10.t;
                var15 = var10.I0mOAs;
                var10 = {};
                var18 = var19.nick;
                var20 = null;
                if (!(var20 == var18)) {
                    _fun111397_ip = 361;
                    continue _fun111397
                }
            case 351:
                var19 = var19.user;
                var18 = var19.username;
            case 361:
                var10.username = var18;
                var10 = var16.bind(var17)(var15, var10);
                var4.children = var10;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot23;
                var6 = _closure1_slot1;
                var15 = _closure1_slot2;
                var5 = var15[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var9 = var9.previewImageWrapper;
                var5.style = var9;
                var10 = _closure1_slot23;
                var9 = _closure1_slot0;
                var8 = 31;
                var8 = var15[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.VoicePanelStreamPreview;
                var8 = {};
                var8.mode = var14;
                var13 = !var13;
                var8.disabled = var13;
                var8.stream = var12;
                var8.onPress = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot37 = var0;
    var0 = function arg0() {
        _fun111401: for (var _fun111401_ip = 0;;) switch (_fun111401_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.activity;
                var _closure2_slot0 = var3;
                var12 = var1.analyticsLocations;
                var _closure2_slot1 = var12;
                var1 = _closure1_slot26;
                var4 = undefined;
                var13 = var1.bind(var4)();
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 32;
                var2 = var5[var2];
                var6 = var1.bind(var4)(var2);
                var7 = var3.applicationId;
                var2 = new Array(1);
                var2[0] = var7;
                var6 = var6.bind(var4)(var2);
                var2 = _closure1_slot4;
                var8 = 1;
                var6 = var2.bind(var4)(var6, var8);
                var2 = 0;
                var24 = var6[var2];
                var _closure2_slot2 = var24;
                var7 = _closure1_slot0;
                var6 = 33;
                var6 = var5[var6];
                var10 = var7.bind(var4)(var6);
                var9 = var10.getEmbeddedActivityLocationChannelId;
                var6 = var3.location;
                var10 = var9.bind(var10)(var6);
                var6 = 34;
                var6 = var5[var6];
                var9 = var1.bind(var4)(var6);
                var6 = var3.applicationId;
                var15 = var9.bind(var4)(var6, var10);
                var10 = _closure1_slot5;
                var9 = var10.useContext;
                var6 = 23;
                var6 = var5[var6];
                var6 = var1.bind(var4)(var6);
                var6 = var9.bind(var10)(var6);
                var10 = var6.channelId;
                var _closure2_slot3 = var10;
                var14 = var6.windowDimensions;
                var _closure2_slot4 = var14;
                var11 = _closure1_slot5;
                var9 = var11.useState;
                var6 = function() { // Environment: var0
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 35;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.getWindowDimensions;
                    var1 = var1.bind(var2)();
                    var1 = var1.width;
                    var2 = _closure1_slot18;
                    var0 = 16;
                    var2 = var2 + var0;
                    var0 = 2;
                    var0 = var0 * var2;
                    var0 = var1 - var0;
                    return var0;
                };
                var11 = var9.bind(var11)(var6);
                var9 = _closure1_slot4;
                var6 = 2;
                var6 = var9.bind(var4)(var11, var6);
                var2 = var6[var2];
                var16 = var6[var8];
                var _closure2_slot5 = var16;
                var17 = 36;
                var6 = var5[var17];
                var11 = var7.bind(var4)(var6);
                var9 = var11.useAnimatedReaction;
                var8 = function() {
                    var1 = _closure2_slot4;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    var0 = var0.width;
                    return var0;
                };
                var6 = {};
                var6.windowDimensions = var14;
                var8.__closure = var6;
                var6 = 16837592262556.0;
                var8.__workletHash = var6;
                var6 = _closure1_slot28;
                var8.__initData = var6;
                var6 = function arg0, arg1() {
                    _fun111404: for (var _fun111404_ip = 0;;) switch (_fun111404_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = arg1;
                            if (!(var3 !== var0)) {
                                _fun111404_ip = 79;
                                continue _fun111404
                            }
                        case 10:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 36;
                            var1 = var2[var1];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var1);
                            var4 = var5.runOnJS;
                            var1 = _closure2_slot5;
                            var1 = var4.bind(var5)(var1);
                            var4 = _closure1_slot18;
                            var0 = 16;
                            var4 = var4 + var0;
                            var0 = 2;
                            var0 = var0 * var4;
                            var0 = var3 - var0;
                            var0 = var1.bind(var2)(var0);
                        case 79:
                            var0 = undefined;
                            return var0;
                    }
                };
                var14 = {};
                var17 = var5[var17];
                var17 = var7.bind(var4)(var17);
                var17 = var17.runOnJS;
                var14.runOnJS = var17;
                var14.setActivityPreviewWidth = var16;
                var16 = _closure1_slot18;
                var14.EDGE_GUTTER = var16;
                var6.__closure = var14;
                var14 = 1481130207412.0;
                var6.__workletHash = var14;
                var14 = _closure1_slot29;
                var6.__initData = var14;
                var6 = var9.bind(var11)(var8, var6);
                var6 = 37;
                var8 = var5[var6];
                var11 = var7.bind(var4)(var8);
                var9 = var11.useEmbeddedActivityJoinability;
                var8 = {};
                var16 = _closure1_slot10;
                var14 = var16.getId;
                var14 = var14.bind(var16)();
                var8.userId = var14;
                var8.channelId = var10;
                var8.application = var24;
                var9 = var9.bind(var11)(var8);
                var _closure2_slot6 = var9;
                var6 = var5[var6];
                var6 = var7.bind(var4)(var6);
                var6 = var6.EmbeddedActivityJoinability;
                var6 = var6.CAN_JOIN;
                var11 = var9 === var6;
                var _closure2_slot7 = var11;
                var8 = _closure1_slot5;
                var7 = var8.useCallback;
                var14 = var3.launchId;
                var6 = new Array(6);
                var6[0] = var14;
                var6[1] = var12;
                var6[2] = var24;
                var6[3] = var11;
                var6[4] = var10;
                var6[5] = var9;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 38;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var5 = _closure2_slot6;
                    var1.embeddedActivityJoinability = var5;
                    var5 = _closure1_slot3;
                    var4 = function*() { // Environment: var3
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun111407: for (var _fun111407_ip = 0;;) switch (_fun111407_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun111407_ip = 178;
                                        continue _fun111407
                                    }
                                case 10:
                                    var1 = _closure2_slot7;
                                    if (var1) {
                                        _fun111407_ip = 62;
                                        continue _fun111407
                                    }
                                case 20:
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 24;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.selectVoiceChannel;
                                    var1 = _closure2_slot3;
                                    var1 = var2.bind(var3)(var1);
                                    _fun111407_ip = 170;
                                    continue _fun111407;
                                case 62:
                                    var2 = _closure2_slot2;
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun111407_ip = 170;
                                        continue _fun111407
                                    }
                                case 72:
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var1 = 38;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.maybeJoinEmbeddedActivity;
                                    var1 = {};
                                    var5 = _closure2_slot3;
                                    var1.channelId = var5;
                                    var5 = _closure2_slot2;
                                    var6 = var5.id;
                                    var1.applicationId = var6;
                                    var6 = _closure2_slot0;
                                    var6 = var6.launchId;
                                    var1.launchId = var6;
                                    var1.inputApplication = var5;
                                    var4 = _closure2_slot1;
                                    var1.analyticsLocations = var4;
                                    var1 = var2.bind(var3)(var1);
                                    SaveGenerator(address = 164);
                                case 162:
                                    return var1;
                                case 164:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                    if (var2) {
                                        _fun111407_ip = 175;
                                        continue _fun111407
                                    }
                                case 170:
                                    var2 = undefined;
                                    return var2;
                                case 175:
                                    return var1;
                                case 178:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var4 = var5.bind(var0)(var4);
                    var _closure3_slot0 = var4;
                    var3 = function() { // Environment: var3
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var1.handleCanJoin = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var16 = var7.bind(var8)(var0, var6);
                var0 = 39;
                var0 = var5[var0];
                var1 = var1.bind(var4)(var0);
                var0 = {};
                var3 = var3.applicationId;
                var0.applicationId = var3;
                var0.size = var2;
                var2 = ['embedded_background'];
                var0.names = var2;
                var25 = var1.bind(var4)(var0);
                var21 = null;
                var1 = var21 == var24;
                var0 = null;
                if (var1) {
                    _fun111401_ip = 1172;
                    continue _fun111401
                }
            case 591:
                var3 = _closure1_slot24;
                var11 = _closure1_slot1;
                var20 = _closure1_slot2;
                var10 = 28;
                var1 = var20[var10];
                var2 = var11.bind(var4)(var1);
                var1 = {};
                var5 = var13.activityInfoWrapper;
                var1.style = var5;
                var7 = _closure1_slot23;
                var18 = _closure1_slot0;
                var5 = 29;
                var5 = var20[var5];
                var5 = var18.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-sm/semibold',
                    'style': null,
                    'color': 'text-default'
                };
                var8 = var13.activityInfoHeader;
                var5.style = var8;
                var22 = 30;
                var8 = var20[var22];
                var8 = var18.bind(var4)(var8);
                var14 = var8.intl;
                var12 = var14.format;
                var8 = var20[var22];
                var8 = var18.bind(var4)(var8);
                var8 = var8.t;
                var9 = var8["n/IJ6Y"];
                var8 = {};
                var15 = var15.length;
                var8.n = var15;
                var8 = var12.bind(var14)(var9, var8);
                var5.children = var8;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot24;
                var6 = 40;
                var6 = var20[var6];
                var6 = var18.bind(var4)(var6);
                var7 = var6.PressableOpacity;
                var6 = {};
                var9 = 0.7;
                var6.activeOpacity = var9;
                var6.onPress = var16;
                var9 = var13.previewImageWrapper;
                var6.style = var9;
                var9 = false;
                var6.accessible = var9;
                var14 = _closure1_slot23;
                var9 = var20[var10];
                var12 = var11.bind(var4)(var9);
                var9 = {};
                var15 = var13.previewImage;
                var9.style = var15;
                var23 = _closure1_slot23;
                var15 = 41;
                var15 = var20[var15];
                var17 = var11.bind(var4)(var15);
                var15 = {};
                var15.imageBackground = var25;
                var25 = 1.7777777777777777;
                var15.aspectRatio = var25;
                var15 = var23.bind(var4)(var17, var15);
                var9.children = var15;
                var12 = var14.bind(var4)(var12, var9);
                var9 = new Array(2);
                var9[0] = var12;
                var12 = _closure1_slot23;
                var10 = var20[var10];
                var11 = var11.bind(var4)(var10);
                var10 = {};
                var13 = var13.joinButtonWrapper;
                var10.style = var13;
                var15 = _closure1_slot23;
                var17 = 42;
                var13 = var20[var17];
                var13 = var18.bind(var4)(var13);
                var14 = var13.Button;
                var13 = {
                    'text': null,
                    'size': 'sm',
                    'iconPosition': 'start',
                    'variant': 'primary-overlay'
                };
                var23 = var20[var22];
                var23 = var18.bind(var4)(var23);
                var26 = var23.intl;
                var25 = var26.formatToPlainString;
                var22 = var20[var22];
                var22 = var18.bind(var4)(var22);
                var22 = var22.t;
                var23 = var22["YV/hE8"];
                var22 = {};
                var27 = var24.name;
                var22.name = var27;
                var22 = var25.bind(var26)(var23, var22);
                var13.text = var22;
                var19 = _closure1_slot23;
                var17 = var20[var17];
                var17 = var18.bind(var4)(var17);
                var17 = var17.Button;
                var18 = var17.Icon;
                var17 = {};
                var20 = 'entity';
                var17.variant = var20;
                var20 = {
                    'uri': null,
                    'width': 20,
                    'height': 20
                };
                var23 = var24.getIconURL;
                var22 = 20;
                var22 = var23.bind(var24)(var22);
                var23 = var21 != var22;
                var21 = undefined;
                if (!var23) {
                    _fun111401_ip = 1104;
                    continue _fun111401
                }
            case 1101:
                var21 = var22;
            case 1104:
                var20.uri = var21;
                var17.source = var20;
                var17 = var19.bind(var4)(var18, var17);
                var13.icon = var17;
                var13.onPress = var16;
                var13 = var15.bind(var4)(var14, var13);
                var10.children = var13;
                var10 = var12.bind(var4)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1172:
                return var0;
        }
    };
    var _closure1_slot38 = var0;
    var0 = function arg0() {
        _fun111409: for (var _fun111409_ip = 0;;) switch (_fun111409_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.title;
                var6 = var0.members;
                var13 = var0.channelId;
                var12 = var0.guildId;
                var3 = _closure1_slot23;
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var10 = 46;
                var0 = var0[var10];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.VoicePanelFormSection;
                var0 = {};
                var0.title = var4;
                var4 = new Array(0);
                var5 = _closure1_slot35;
                var9 = var5.bind(var2)(var6);
                var6 = var9.bind(var2)();
                var5 = var6.done;
                var8 = 47;
                var7 = null;
                if (var5) {
                    _fun111409_ip = 226;
                    continue _fun111409
                }
            case 98:
                var17 = var6.value;
                var14 = _closure1_slot14;
                var5 = var14.getUser;
                var20 = var5.bind(var14)(var17);
                if (!(var7 != var20)) {
                    _fun111409_ip = 211;
                    continue _fun111409
                }
            case 122:
                var14 = var4.push;
                var16 = _closure1_slot23;
                var15 = _closure1_slot0;
                var18 = _closure1_slot2;
                var5 = var18[var10];
                var5 = var15.bind(var2)(var5);
                var15 = var5.MemberRowItem;
                var5 = {};
                var5.user = var20;
                var5.channelId = var13;
                var5.guildId = var12;
                var19 = _closure1_slot1;
                var18 = var18[var8];
                var19 = var19.bind(var2)(var18);
                var18 = var19.getName;
                var18 = var18.bind(var19)(var12, var13, var20);
                var5.nick = var18;
                var5 = var16.bind(var2)(var15, var5, var17);
                var5 = var14.bind(var4)(var5);
            case 211:
                var14 = var9.bind(var2)();
                var5 = var14.done;
                var6 = var14;
                if (!var5) {
                    _fun111409_ip = 98;
                    continue _fun111409
                }
            case 226:
                var0.children = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot39 = var0;
    var0 = function arg0() {
        _fun111410: for (var _fun111410_ip = 0;;) switch (_fun111410_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.members;
                var7 = var0.streamingMembers;
                var22 = var0.blockedMembers;
                var21 = var0.ignoredMembers;
                var2 = _closure1_slot5;
                var1 = var2.useContext;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 23;
                var0 = var3[var0];
                var3 = undefined;
                var0 = var4.bind(var3)(var0);
                var0 = var1.bind(var2)(var0);
                var20 = var0.channelId;
                var _closure2_slot0 = var20;
                var19 = var0.guildId;
                var2 = _closure1_slot5;
                var1 = var2.useState;
                var0 = 20;
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot4;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var13 = 0;
                var12 = var1[var13];
                var _closure2_slot1 = var12;
                var0 = 1;
                var0 = var1[var0];
                var _closure2_slot2 = var0;
                var1 = var22.size;
                var0 = var21.size;
                var9 = var1 + var0;
                var0 = var15.length;
                var10 = var0 - var9;
                var2 = _closure1_slot24;
                var1 = _closure1_slot25;
                var0 = {};
                var5 = var9 > var13;
                if (!var5) {
                    _fun111410_ip = 204;
                    continue _fun111410
                }
            case 174:
                var8 = _closure1_slot23;
                var6 = _closure1_slot30;
                var4 = {};
                var4.channelId = var20;
                var4.blockedUserIds = var22;
                var4.ignoredUserIds = var21;
                var5 = var8.bind(var3)(var6, var4);
            case 204:
                var4 = new Array(5);
                var4[0] = var5;
                var6 = var7.map;
                var5 = function(arg0) { // Environment: var14
                    _fun111411: for (var _fun111411_ip = 0;;) switch (_fun111411_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = var3[Symbol.iterator];
                            var3 = var1().next;
                            var0 = var3().value;
                            var2 = var1;
                            var4 = undefined;
                            var2 = var2 === var4;
                            var5 = undefined;
                            if (var2) {
                                _fun111411_ip = 27;
                                continue _fun111411
                            }
                        case 24:
                            var5 = var0;
                        case 27:
                            var0 = undefined;
                            if (var2) {
                                _fun111411_ip = 57;
                                continue _fun111411
                            }
                        case 32:
                            var6 = var3().value;
                            var3 = var1;
                            var3 = var3 === var4;
                            var0 = undefined;
                            var2 = var3;
                            if (var3) {
                                _fun111411_ip = 57;
                                continue _fun111411
                            }
                        case 51:
                            var0 = var6;
                            var2 = var3;
                        case 57:
                            if (var2) {
                                _fun111411_ip = 63;
                                continue _fun111411
                            }
                        case 60:
                            var1.return();
                        case 63:
                            var3 = _closure1_slot23;
                            var2 = _closure1_slot37;
                            var1 = {};
                            var6 = _closure2_slot0;
                            var1.channelId = var6;
                            var1.voiceState = var5;
                            var1.stream = var0;
                            var0 = var0.ownerId;
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                    }
                };
                var5 = var6.bind(var7)(var5);
                var4[1] = var5;
                var5 = var22.size;
                var5 = var5 > var13;
                if (!var5) {
                    _fun111410_ip = 348;
                    continue _fun111410
                }
            case 245:
                var8 = _closure1_slot23;
                var7 = _closure1_slot39;
                var6 = {};
                var17 = _closure1_slot0;
                var24 = _closure1_slot2;
                var16 = 30;
                var18 = var24[var16];
                var18 = var17.bind(var3)(var18);
                var23 = var18.intl;
                var18 = var23.formatToPlainString;
                var16 = var24[var16];
                var16 = var17.bind(var3)(var16);
                var16 = var16.t;
                var17 = var16.pGJ1Qy;
                var16 = {};
                var24 = var22.size;
                var16.n = var24;
                var16 = var18.bind(var23)(var17, var16);
                var6.title = var16;
                var6.members = var22;
                var6.channelId = var20;
                var6.guildId = var19;
                var5 = var8.bind(var3)(var7, var6);
            case 348:
                var4[2] = var5;
                var5 = var21.size;
                var5 = var5 > var13;
                if (!var5) {
                    _fun111410_ip = 467;
                    continue _fun111410
                }
            case 364:
                var8 = _closure1_slot23;
                var7 = _closure1_slot39;
                var6 = {};
                var17 = _closure1_slot0;
                var24 = _closure1_slot2;
                var16 = 30;
                var18 = var24[var16];
                var18 = var17.bind(var3)(var18);
                var23 = var18.intl;
                var18 = var23.formatToPlainString;
                var16 = var24[var16];
                var16 = var17.bind(var3)(var16);
                var16 = var16.t;
                var17 = var16["/pXOCN"];
                var16 = {};
                var24 = var21.size;
                var16.n = var24;
                var16 = var18.bind(var23)(var17, var16);
                var6.title = var16;
                var6.members = var21;
                var6.channelId = var20;
                var6.guildId = var19;
                var5 = var8.bind(var3)(var7, var6);
            case 467:
                var4[3] = var5;
                var5 = var10 > var13;
                if (!var5) {
                    _fun111410_ip = 1010;
                    continue _fun111410
                }
            case 481:
                var8 = _closure1_slot24;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var18 = 46;
                var6 = var6[var18];
                var6 = var7.bind(var3)(var6);
                var7 = var6.VoicePanelFormSection;
                var6 = {};
                if (!(var13 !== var9)) {
                    _fun111410_ip = 584;
                    continue _fun111410
                }
            case 517:
                var13 = _closure1_slot0;
                var23 = _closure1_slot2;
                var9 = 30;
                var16 = var23[var9];
                var16 = var13.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.formatToPlainString;
                var9 = var23[var9];
                var9 = var13.bind(var3)(var9);
                var9 = var9.t;
                var13 = var9.R0h4pE;
                var9 = {};
                var9.n = var10;
                var9 = var16.bind(var17)(var13, var9);
                _fun111410_ip = 654;
                continue _fun111410;
            case 584:
                var16 = _closure1_slot0;
                var24 = _closure1_slot2;
                var13 = 30;
                var17 = var24[var13];
                var17 = var16.bind(var3)(var17);
                var23 = var17.intl;
                var17 = var23.formatToPlainString;
                var13 = var24[var13];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var16 = var13.vloEU7;
                var13 = {};
                var24 = var15.length;
                var13.n = var24;
                var9 = var17.bind(var23)(var16, var13);
            case 654:
                var6.title = var9;
                var13 = new Array(0);
                var9 = _closure1_slot35;
                var17 = var9.bind(var3)(var15);
                var15 = var17.bind(var3)();
                var9 = var15.done;
                var16 = 47;
                if (var9) {
                    _fun111410_ip = 879;
                    continue _fun111410
                }
            case 689:
                var9 = var15.value;
                var23 = var13.length;
                if (!(!(var23 >= var12))) {
                    _fun111410_ip = 879;
                    continue _fun111410
                }
            case 706:
                var24 = var22.has;
                var23 = var9.user;
                var23 = var23.id;
                var23 = var24.bind(var22)(var23);
                if (var23) {
                    _fun111410_ip = 749;
                    continue _fun111410
                }
            case 729:
                var25 = var21.has;
                var24 = var9.user;
                var24 = var24.id;
                var23 = var25.bind(var21)(var24);
            case 749:
                if (var23) {
                    _fun111410_ip = 861;
                    continue _fun111410
                }
            case 752:
                var23 = var13.push;
                var26 = _closure1_slot23;
                var25 = _closure1_slot0;
                var27 = _closure1_slot2;
                var24 = var27[var18];
                var24 = var25.bind(var3)(var24);
                var25 = var24.MemberRowItem;
                var24 = {};
                var28 = var9.user;
                var24.user = var28;
                var24.channelId = var20;
                var24.guildId = var19;
                var28 = _closure1_slot1;
                var27 = var27[var16];
                var29 = var28.bind(var3)(var27);
                var28 = var29.getName;
                var27 = var9.user;
                var27 = var28.bind(var29)(var19, var20, var27);
                var24.nick = var27;
                var9 = var9.user;
                var9 = var9.id;
                var9 = var26.bind(var3)(var25, var24, var9);
                var9 = var23.bind(var13)(var9);
            case 861:
                var23 = var17.bind(var3)();
                var9 = var23.done;
                var15 = var23;
                if (!var9) {
                    _fun111410_ip = 689;
                    continue _fun111410
                }
            case 879:
                var9 = new Array(2);
                var9[0] = var13;
                var10 = var10 > var12;
                if (!var10) {
                    _fun111410_ip = 996;
                    continue _fun111410
                }
            case 894:
                var13 = _closure1_slot23;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var11 = 48;
                var11 = var19[var11];
                var11 = var18.bind(var3)(var11);
                var12 = var11.TableRow;
                var11 = {};
                var15 = 30;
                var16 = var19[var15];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var19[var15];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.F4MCUO;
                var15 = var16.bind(var17)(var15);
                var11.label = var15;
                var14 = function() {
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot1;
                    var0 = 20;
                    var1 = var1 + var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var11.onPress = var14;
                var10 = var13.bind(var3)(var12, var11);
            case 996:
                var9[1] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 1010:
                var4[4] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot40 = var0;
    var0 = function arg0() {
        var3 = arg0;
        var16 = var3.transitionState;
        var _closure2_slot0 = var16;
        var11 = var3.transitionCleanUp;
        var _closure2_slot1 = var11;
        var1 = null;
        var2 = Object.create(var1);
        var1 = 0;
        var2.transitionState = var1;
        var2.transitionCleanUp = var1;
        var22 = {};
        var21 = var3;
        var20 = var2;
        var10 = copyDataProperties(var22, var21, var20);
        var1 = _closure1_slot26;
        var3 = undefined;
        var8 = var1.bind(var3)();
        var4 = _closure1_slot5;
        var2 = var4.useContext;
        var5 = _closure1_slot1;
        var12 = _closure1_slot2;
        var1 = 23;
        var1 = var12[var1];
        var1 = var5.bind(var3)(var1);
        var1 = var2.bind(var4)(var1);
        var19 = var1.windowDimensions;
        var _closure2_slot2 = var19;
        var18 = var1.controlsSpecs;
        var _closure2_slot3 = var18;
        var17 = var1.safeArea;
        var _closure2_slot4 = var17;
        var9 = var1.preJoinContentSize;
        var _closure2_slot5 = var9;
        var15 = var1.useReducedMotion;
        var _closure2_slot6 = var15;
        var14 = _closure1_slot0;
        var13 = 36;
        var1 = var12[var13];
        var4 = var14.bind(var3)(var1);
        var2 = var4.useAnimatedStyle;
        var1 = function() {
            _fun111414: for (var _fun111414_ip = 0;;) switch (_fun111414_ip) {
                case 0:
                    var1 = _closure2_slot2;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    var4 = var0.height;
                    var0 = {};
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var3 = 49;
                    var3 = var2[var3];
                    var12 = undefined;
                    var5 = var5.bind(var12)(var3);
                    var3 = 0.8;
                    var3 = var3 * var4;
                    var3 = var5.bind(var12)(var3);
                    var4 = var4 - var3;
                    var5 = _closure2_slot3;
                    var3 = var5.get;
                    var3 = var3.bind(var5)();
                    var3 = var3.height;
                    var4 = var4 + var3;
                    var5 = _closure2_slot4;
                    var3 = var5.get;
                    var3 = var3.bind(var5)();
                    var3 = var3.bottom;
                    var3 = var4 + var3;
                    var0.paddingBottom = var3;
                    var6 = _closure1_slot0;
                    var5 = 55;
                    var3 = var2[var5];
                    var4 = var6.bind(var12)(var3);
                    var3 = var4.withSpring;
                    var7 = _closure2_slot0;
                    var14 = 56;
                    var2 = var2[var14];
                    var2 = var6.bind(var12)(var2);
                    var2 = var2.TransitionStates;
                    var6 = var2.YEETED;
                    var10 = 1;
                    var2 = var10;
                    if (!(var7 === var6)) {
                        _fun111414_ip = 181;
                        continue _fun111414
                    }
                case 179:
                    var2 = 0;
                case 181:
                    var2 = var3.bind(var4)(var2);
                    var0.opacity = var2;
                    var2 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var5 = var3[var5];
                    var7 = var4.bind(var12)(var5);
                    var6 = var7.withSpring;
                    var13 = 36;
                    var3 = var3[var13];
                    var8 = var4.bind(var12)(var3);
                    var5 = var8.interpolate;
                    var4 = _closure2_slot6;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    if (var3) {
                        _fun111414_ip = 285;
                        continue _fun111414
                    }
                case 248:
                    var4 = _closure2_slot0;
                    var11 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var14];
                    var3 = var11.bind(var12)(var3);
                    var3 = var3.TransitionStates;
                    var3 = var3.YEETED;
                    if (!(var4 !== var3)) {
                        _fun111414_ip = 287;
                        continue _fun111414
                    }
                case 285:
                    var10 = 0;
                case 287:
                    var4 = [0, 1];
                    var3 = [0, 400];
                    var5 = var5.bind(var8)(var10, var4, var3);
                    var17 = _closure1_slot17;
                    var3 = function() {
                        _fun111415: for (var _fun111415_ip = 0;;) switch (_fun111415_ip) {
                            case 0:
                                var1 = arguments[0];
                                var0 = undefined;
                                if (!(var1 === var0)) {
                                    _fun111415_ip = 11;
                                    continue _fun111415
                                }
                            case 9:
                                var1 = false;
                            case 11:
                                if (!var1) {
                                    _fun111415_ip = 60;
                                    continue _fun111415
                                }
                            case 14:
                                var3 = _closure2_slot0;
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var2 = 56;
                                var2 = var5[var2];
                                var2 = var4.bind(var0)(var2);
                                var2 = var2.TransitionStates;
                                var2 = var2.YEETED;
                                var1 = var3 === var2;
                            case 60:
                                if (!var1) {
                                    _fun111415_ip = 107;
                                    continue _fun111415
                                }
                            case 63:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 36;
                                var1 = var3[var1];
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.runOnJS;
                                var1 = _closure2_slot1;
                                var1 = var2.bind(var3)(var1);
                                var1 = var1.bind(var0)();
                            case 107:
                                return var0;
                        }
                    };
                    var8 = {};
                    var10 = _closure2_slot0;
                    var8.transitionState = var10;
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var14 = var10[var14];
                    var14 = var11.bind(var12)(var14);
                    var14 = var14.TransitionStates;
                    var8.TransitionStates = var14;
                    var10 = var10[var13];
                    var10 = var11.bind(var12)(var10);
                    var10 = var10.runOnJS;
                    var8.runOnJS = var10;
                    var9 = _closure2_slot1;
                    var8.transitionCleanUp = var9;
                    var3.__closure = var8;
                    var8 = 2541522666097.0;
                    var3.__workletHash = var8;
                    var1 = _closure1_slot34;
                    var3.__initData = var1;
                    var16 = 'respect-motion-settings';
                    var19 = var7;
                    var18 = var5;
                    var15 = var3;
                    var1 = var19[var6](var18, var17, var16, var15, var14);
                    var2.translateY = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0.transform = var1;
                    return var0;
            }
        };
        var6 = {};
        var6.windowDimensions = var19;
        var19 = 49;
        var19 = var12[var19];
        var19 = var5.bind(var3)(var19);
        var6.roundToNearestPixel = var19;
        var6.controlsSpecs = var18;
        var6.safeArea = var17;
        var17 = 55;
        var17 = var12[var17];
        var17 = var14.bind(var3)(var17);
        var17 = var17.withSpring;
        var6.withSpring = var17;
        var6.transitionState = var16;
        var16 = 56;
        var16 = var12[var16];
        var16 = var14.bind(var3)(var16);
        var16 = var16.TransitionStates;
        var6.TransitionStates = var16;
        var16 = var12[var13];
        var16 = var14.bind(var3)(var16);
        var16 = var16.interpolate;
        var6.interpolate = var16;
        var6.useReducedMotion = var15;
        var15 = _closure1_slot17;
        var6.MODE_CHANGE_PHYSICS = var15;
        var13 = var12[var13];
        var13 = var14.bind(var3)(var13);
        var13 = var13.runOnJS;
        var6.runOnJS = var13;
        var6.transitionCleanUp = var11;
        var1.__closure = var6;
        var6 = 16643118377748.0;
        var1.__workletHash = var6;
        var6 = _closure1_slot33;
        var1.__initData = var6;
        var4 = var2.bind(var4)(var1);
        var6 = _closure1_slot5;
        var2 = var6.useCallback;
        var1 = new Array(1);
        var1[0] = var9;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.nativeEvent;
            var0 = var0.layout;
            var4 = var0.height;
            var3 = _closure2_slot5;
            var2 = var3.set;
            var5 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 49;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var5.bind(var0)(var1);
            var1 = var1.bind(var0)(var4);
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var11 = var2.bind(var6)(var0, var1);
        var2 = _closure1_slot23;
        var0 = 57;
        var0 = var12[var0];
        var1 = var5.bind(var3)(var0);
        var0 = {};
        var0.style = var4;
        var9 = false;
        var0.collapsable = var9;
        var6 = _closure1_slot23;
        var4 = 28;
        var4 = var12[var4];
        var5 = var5.bind(var3)(var4);
        var4 = {};
        var4.onLayout = var11;
        var4.collapsable = var9;
        var8 = var8.contentWrapper;
        var4.style = var8;
        var9 = _closure1_slot23;
        var8 = _closure1_slot32;
        var7 = {};
        var22 = var7;
        var21 = var10;
        var10 = copyDataProperties(var22, var21);
        var7 = var9.bind(var3)(var8, var7);
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot41 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        var4 = _closure1_slot23;
        var3 = _closure1_slot41;
        var2 = {};
        var0 = arg2;
        var2.transitionState = var0;
        var0 = arg3;
        var2.transitionCleanUp = var0;
        var6 = arg1;
        var7 = var2;
        var0 = copyDataProperties(var7, var6);
        var1 = undefined;
        var0 = arg0;
        var0 = var4.bind(var1)(var3, var2, var0);
        return var0;
    };
    var _closure1_slot42 = var0;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var12 = 1;
    var3 = var5[var12];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var14 = var3.StyleSheet;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var16 = 8;
    var3 = var5[var16];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot16 = var3;
    var3 = 15;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MODE_CHANGE_PHYSICS;
    var _closure1_slot17 = var3;
    var13 = 16;
    var3 = var5[var13];
    var3 = var4.bind(var0)(var3);
    var15 = var3.EDGE_GUTTER;
    var _closure1_slot18 = var15;
    var3 = 17;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AnalyticEvents;
    var _closure1_slot19 = var7;
    var7 = var3.AnalyticsSections;
    var _closure1_slot20 = var7;
    var3 = var3.Permissions;
    var _closure1_slot21 = var3;
    var3 = 18;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoiceChannelWarningSurfaces;
    var _closure1_slot22 = var3;
    var3 = 19;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot23 = var7;
    var7 = var3.jsxs;
    var _closure1_slot24 = var7;
    var3 = var3.Fragment;
    var _closure1_slot25 = var3;
    var3 = 20;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'paddingTop': null,
        'gap': 24,
        'paddingBottom': 16
    };
    var10 = 21;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.BASE_VOICE_PANEL_HEADER_HEIGHT;
    var10 = var15 + var10;
    var10 = var10 + var15;
    var9.paddingTop = var10;
    var3.contentWrapper = var9;
    var9 = {};
    var9.paddingHorizontal = var13;
    var3.channelInfoWrapper = var9;
    var15 = 'center';
    var9 = {
        'textAlign': 'center',
        'paddingTop': 16,
        'paddingBottom': 16
    };
    var3.subheading = var9;
    var9 = {
        'position': 'relative',
        'width': '100%',
        'aspectRatio': 1.7777777777777777,
        'borderRadius': null,
        'overflow': 'hidden',
        'justifyContent': 'center'
    };
    var10 = 22;
    var17 = var5[var10];
    var17 = var11.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.lg;
    var9.borderRadius = var17;
    var17 = var5[var10];
    var17 = var11.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BLACK;
    var9.backgroundColor = var17;
    var3.previewImageWrapper = var9;
    var9 = {};
    var20 = var14.absoluteFillObject;
    var21 = var9;
    var17 = copyDataProperties(var21, var20);
    var18 = 0.5;
    var17 = 'opacity';
    var9[var17] = var18;
    var3.previewImage = var9;
    var9 = {};
    var9.paddingHorizontal = var13;
    var3.activityInfoWrapper = var9;
    var9 = {};
    var9.marginBottom = var16;
    var3.activityInfoHeader = var9;
    var9 = {
        'borderRadius': null,
        'width': '100%',
        'aspectRatio': 1.7777777777777777
    };
    var16 = var5[var10];
    var16 = var11.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.lg;
    var9.borderRadius = var16;
    var3.activityImage = var9;
    var9 = {};
    var20 = var14.absoluteFillObject;
    var21 = var9;
    var14 = copyDataProperties(var21, var20);
    var16 = 'flex';
    var14 = 'display';
    var9[var14] = var16;
    var14 = 'alignItems';
    var9[var14] = var15;
    var14 = 'justifyContent';
    var9[var14] = var15;
    var3.joinButtonWrapper = var9;
    var9 = {};
    var9.marginHorizontal = var13;
    var3.optInChannelsContainer = var9;
    var9 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9.gap = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9.padding = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var9.borderRadius = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.ICON_FEEDBACK_WARNING;
    var9.borderColor = var13;
    var9.borderWidth = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_FEEDBACK_WARNING;
    var9.backgroundColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9.marginHorizontal = var10;
    var3.blockedMemberWarning = var9;
    var9 = {};
    var10 = 36;
    var9.height = var10;
    var3.consolePreJoinPadding = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot26 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun111418: for (var _fun111418_ip = 0;;) switch (_fun111418_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.hasMembers;
                var0 = _closure1_slot26;
                var4 = undefined;
                var8 = var0.bind(var4)();
                var0 = null;
                if (var1) {
                    _fun111418_ip = 184;
                    continue _fun111418
                }
            case 30:
                var3 = _closure1_slot23;
                var2 = _closure1_slot1;
                var12 = _closure1_slot2;
                var1 = 28;
                var1 = var12[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var6 = var8.channelInfoWrapper;
                var1.style = var6;
                var7 = _closure1_slot23;
                var11 = _closure1_slot0;
                var5 = 29;
                var5 = var12[var5];
                var5 = var11.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var8 = var8.subheading;
                var5.style = var8;
                var8 = 30;
                var9 = var12[var8];
                var9 = var11.bind(var4)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.sS2J0G;
                var8 = var9.bind(var10)(var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 184:
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot27 = var3;
    var3 = {};
    var7 = 'function VoicePanelPreJoinContentTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get().width;}';
    var3.code = var7;
    var _closure1_slot28 = var3;
    var3 = {};
    var7 = 'function VoicePanelPreJoinContentTsx2(width,previous){const{runOnJS,setActivityPreviewWidth,EDGE_GUTTER}=this.__closure;if(width===previous)return;runOnJS(setActivityPreviewWidth)(width-(EDGE_GUTTER+16)*2);}';
    var3.code = var7;
    var _closure1_slot29 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun111419: for (var _fun111419_ip = 0;;) switch (_fun111419_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.channelId;
                var1 = var0.blockedUserIds;
                var2 = var0.ignoredUserIds;
                var0 = _closure1_slot26;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var6 = _closure1_slot1;
                var0 = _closure1_slot2;
                var5 = 43;
                var5 = var0[var5];
                var7 = var6.bind(var3)(var5);
                var6 = {};
                var5 = _closure1_slot0;
                var8 = 44;
                var8 = var0[var8];
                var8 = var5.bind(var3)(var8);
                var8 = var8.ImpressionNames;
                var8 = var8.VOICE_CHANNEL_BLOCKED_USER_WARNING;
                var6.name = var8;
                var8 = {};
                var8.channel_id = var9;
                var9 = global;
                var11 = var9.Array;
                var9 = var11.from;
                var9 = var9.bind(var11)(var1);
                var8.blocked_user_ids = var9;
                var9 = _closure1_slot22;
                var9 = var9.PRE_JOIN_SHEET;
                var8.warning_surface = var9;
                var6.properties = var8;
                var6 = var7.bind(var3)(var6);
                var7 = var2.size;
                var8 = var1.size;
                var6 = 30;
                var1 = var0[var6];
                var1 = var5.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var0[var6];
                var0 = var5.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.CjrALd;
                var13 = var1.bind(var2)(var0);
                var0 = 0;
                if (!(var8 > var0)) {
                    _fun111419_ip = 213;
                    continue _fun111419
                }
            case 206:
                if (!(!(var7 > var0))) {
                    _fun111419_ip = 345;
                    continue _fun111419
                }
            case 213:
                if (!(!(var7 > var0))) {
                    _fun111419_ip = 281;
                    continue _fun111419
                }
            case 217:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = var0[var6];
                var2 = var1.bind(var3)(var2);
                var5 = var2.intl;
                var2 = var5.format;
                var0 = var0[var6];
                var0 = var1.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0["6X29zb"];
                var0 = {};
                var0.n = var8;
                var9 = var2.bind(var5)(var1, var0);
                _fun111419_ip = 343;
                continue _fun111419;
            case 281:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = var0[var6];
                var2 = var1.bind(var3)(var2);
                var5 = var2.intl;
                var2 = var5.format;
                var0 = var0[var6];
                var0 = var1.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0.u9trAZ;
                var0 = {};
                var0.n = var7;
                var9 = var2.bind(var5)(var1, var0);
            case 343:
                _fun111419_ip = 399;
                continue _fun111419;
            case 345:
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = var0[var6];
                var1 = var5.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var0[var6];
                var0 = var5.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.MpRfpC;
                var9 = var1.bind(var2)(var0);
            case 399:
                var2 = _closure1_slot24;
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 28;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var4 = var4.blockedMemberWarning;
                var0.style = var4;
                var8 = _closure1_slot23;
                var6 = _closure1_slot0;
                var4 = 45;
                var4 = var5[var4];
                var4 = var6.bind(var3)(var4);
                var7 = var4.CircleErrorIcon;
                var4 = {};
                var11 = 'text-feedback-warning';
                var4.color = var11;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                var7 = _closure1_slot24;
                var14 = 29;
                var5 = var5[var14];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-sm/bold',
                    'color': 'interactive-text-active'
                };
                var8 = {};
                var11 = 1;
                var8.flexShrink = var11;
                var5.style = var8;
                var8 = new Array(3);
                var8[0] = var9;
                var9 = ' ';
                var8[1] = var9;
                var9 = null;
                var11 = var9 != var13;
                if (!var11) {
                    _fun111419_ip = 611;
                    continue _fun111419
                }
            case 563:
                var12 = _closure1_slot23;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var14];
                var10 = var11.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {};
                var14 = 'heading-sm/semibold';
                var10.variant = var14;
                var10.children = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 611:
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot30 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun111420: for (var _fun111420_ip = 0;;) switch (_fun111420_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.channelId;
                var _closure2_slot0 = var8;
                var2 = _closure1_slot26;
                var4 = undefined;
                var5 = var2.bind(var4)();
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 27;
                var2 = var6[var2];
                var7 = var3.bind(var4)(var2);
                var6 = var7.useStateFromStores;
                var2 = _closure1_slot10;
                var3 = new Array(4);
                var3[0] = var2;
                var2 = _closure1_slot7;
                var3[1] = var2;
                var2 = _closure1_slot15;
                var3[2] = var2;
                var2 = _closure1_slot13;
                var3[3] = var2;
                var2 = new Array(1);
                var2[0] = var8;
                var0 = function() { // Environment: var0
                    _fun111421: for (var _fun111421_ip = 0;;) switch (_fun111421_ip) {
                        case 0:
                            var1 = _closure1_slot10;
                            var0 = var1.getId;
                            var3 = var0.bind(var1)();
                            var2 = _closure1_slot15;
                            var1 = var2.getVoiceStateForSession;
                            var5 = _closure1_slot7;
                            var0 = var5.getRemoteSessionId;
                            var0 = var0.bind(var5)();
                            var0 = var1.bind(var2)(var3, var0);
                            var3 = null;
                            var1 = var3 != var0;
                            var2 = undefined;
                            if (!var1) {
                                _fun111421_ip = 61;
                                continue _fun111421
                            }
                        case 58:
                            var2 = var0;
                        case 61:
                            var1 = _closure1_slot7;
                            var0 = var1.getAwaitingRemoteSessionInfo;
                            var0 = var0.bind(var1)();
                            var1 = var3 == var0;
                            var5 = undefined;
                            if (var1) {
                                _fun111421_ip = 89;
                                continue _fun111421
                            }
                        case 84:
                            var5 = var0.channelId;
                        case 89:
                            var0 = _closure2_slot0;
                            var0 = var5 === var0;
                            if (var0) {
                                _fun111421_ip = 179;
                                continue _fun111421
                            }
                        case 103:
                            var7 = var3 == var2;
                            var5 = undefined;
                            if (var7) {
                                _fun111421_ip = 117;
                                continue _fun111421
                            }
                        case 112:
                            var5 = var2.channelId;
                        case 117:
                            var1 = _closure2_slot0;
                            var1 = var5 === var1;
                            if (!var1) {
                                _fun111421_ip = 176;
                                continue _fun111421
                            }
                        case 128:
                            var5 = _closure1_slot13;
                            var4 = var5.getSessionById;
                            var7 = var3 == var2;
                            var6 = undefined;
                            if (var7) {
                                _fun111421_ip = 153;
                                continue _fun111421
                            }
                        case 147:
                            var6 = var2.sessionId;
                        case 153:
                            var7 = var3 != var6;
                            var2 = '';
                            if (!var7) {
                                _fun111421_ip = 167;
                                continue _fun111421
                            }
                        case 164:
                            var2 = var6;
                        case 167:
                            var2 = var4.bind(var5)(var2);
                            var1 = var3 != var2;
                        case 176:
                            var0 = var1;
                        case 179:
                            return var0;
                    }
                };
                var2 = var6.bind(var7)(var3, var0, var2);
                var0 = null;
                if (!var2) {
                    _fun111420_ip = 157;
                    continue _fun111420
                }
            case 115:
                var3 = _closure1_slot23;
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 28;
                var1 = var6[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var5 = var5.consolePreJoinPadding;
                var1.style = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 157:
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot31 = var3;
    var7 = var6.memo;
    var3 = function arg0() {
        _fun111422: for (var _fun111422_ip = 0;;) switch (_fun111422_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.members;
                var13 = var0.streamingMembers;
                var12 = var0.blockedMembers;
                var11 = var0.ignoredMembers;
                var10 = var0.activities;
                var0 = _closure1_slot26;
                var3 = undefined;
                var19 = var0.bind(var3)();
                var7 = _closure1_slot5;
                var1 = var7.useContext;
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 23;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var1.bind(var7)(var0);
                var8 = var0.channelId;
                var _closure2_slot0 = var8;
                var7 = var0.guildId;
                var _closure2_slot1 = var7;
                var1 = _closure1_slot0;
                var0 = 27;
                var0 = var4[var0];
                var15 = var1.bind(var3)(var0);
                var9 = var15.useStateFromStores;
                var0 = _closure1_slot11;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var6
                    var2 = _closure1_slot11;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var18 = var9.bind(var15)(var1, var0);
                var0 = 50;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var15 = var0.bind(var3)(var18);
                var0 = 51;
                var0 = var4[var0];
                var1 = var2.bind(var3)(var0);
                var0 = 52;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.VOICE_PANEL_PRE_JOIN;
                var0 = var1.bind(var3)(var0);
                var0 = var0.analyticsLocations;
                var _closure2_slot2 = var0;
                var4 = _closure1_slot5;
                var2 = var4.useEffect;
                var1 = new Array(3);
                var1[0] = var8;
                var1[1] = var7;
                var1[2] = var0;
                var0 = function() { // Environment: var6
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 53;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot19;
                    var2 = var1.VIEW_VOICE_CHANNEL;
                    var1 = {};
                    var6 = _closure2_slot1;
                    var1.guild_id = var6;
                    var6 = _closure2_slot0;
                    var1.channel_id = var6;
                    var5 = _closure2_slot2;
                    var1.location_stack = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot24;
                var1 = _closure1_slot25;
                var0 = {};
                var16 = _closure1_slot23;
                var7 = _closure1_slot27;
                var4 = {};
                var17 = var14.length;
                var9 = 0;
                var17 = var17 > var9;
                var4.hasMembers = var17;
                var7 = var16.bind(var3)(var7, var4);
                var4 = new Array(5);
                var4[0] = var7;
                var7 = null;
                if (!var15) {
                    _fun111422_ip = 363;
                    continue _fun111422
                }
            case 302:
                var17 = _closure1_slot23;
                var16 = _closure1_slot1;
                var20 = _closure1_slot2;
                var15 = 54;
                var15 = var20[var15];
                var16 = var16.bind(var3)(var15);
                var15 = {};
                var19 = var19.optInChannelsContainer;
                var15.style = var19;
                var15.channel = var18;
                var18 = _closure1_slot20;
                var18 = var18.CHANNEL;
                var15.analyticsSection = var18;
                var7 = var17.bind(var3)(var16, var15);
            case 363:
                var4[1] = var7;
                var7 = var10.map;
                var6 = function(arg0) { // Environment: var6
                    var0 = arg0;
                    var4 = _closure1_slot23;
                    var3 = _closure1_slot38;
                    var2 = {};
                    var2.activity = var0;
                    var1 = _closure2_slot2;
                    var2.analyticsLocations = var1;
                    var1 = var0.launchId;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var6 = var7.bind(var10)(var6);
                var4[2] = var6;
                var6 = var14.length;
                var6 = var6 > var9;
                if (var6) {
                    _fun111422_ip = 409;
                    continue _fun111422
                }
            case 400:
                var7 = var12.size;
                var6 = var7 > var9;
            case 409:
                if (var6) {
                    _fun111422_ip = 421;
                    continue _fun111422
                }
            case 412:
                var7 = var11.size;
                var6 = var7 > var9;
            case 421:
                if (!var6) {
                    _fun111422_ip = 460;
                    continue _fun111422
                }
            case 424:
                var10 = _closure1_slot23;
                var9 = _closure1_slot40;
                var7 = {};
                var7.members = var14;
                var7.streamingMembers = var13;
                var7.blockedMembers = var12;
                var7.ignoredMembers = var11;
                var6 = var10.bind(var3)(var9, var7);
            case 460:
                var4[3] = var6;
                var7 = _closure1_slot23;
                var6 = _closure1_slot31;
                var5 = {};
                var5.channelId = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[4] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot32 = var3;
    var3 = {};
    var7 = "function VoicePanelPreJoinContentTsx3(){const{windowDimensions,roundToNearestPixel,controlsSpecs,safeArea,withSpring,transitionState,TransitionStates,interpolate,useReducedMotion,MODE_CHANGE_PHYSICS,runOnJS,transitionCleanUp}=this.__closure;const{height:windowHeight}=windowDimensions.get();return{paddingBottom:windowHeight-roundToNearestPixel(windowHeight*0.8)+controlsSpecs.get().height+safeArea.get().bottom,opacity:withSpring(transitionState===TransitionStates.YEETED?0:1),transform:[{translateY:withSpring(interpolate(!useReducedMotion.get()&&transitionState===TransitionStates.YEETED?1:0,[0,1],[0,400]),MODE_CHANGE_PHYSICS,'respect-motion-settings',function(finished=false){finished&&transitionState===TransitionStates.YEETED&&runOnJS(transitionCleanUp)();})}]};}";
    var3.code = var7;
    var _closure1_slot33 = var3;
    var3 = {};
    var7 = 'function VoicePanelPreJoinContentTsx4(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;finished&&transitionState===TransitionStates.YEETED&&runOnJS(transitionCleanUp)();}';
    var3.code = var7;
    var _closure1_slot34 = var3;
    var3 = var6.memo;
    var1 = function() {
        var7 = _closure1_slot5;
        var2 = var7.useContext;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var1 = 23;
        var1 = var6[var1];
        var3 = undefined;
        var1 = var5.bind(var3)(var1);
        var1 = var2.bind(var7)(var1);
        var10 = var1.channelId;
        var _closure2_slot0 = var10;
        var2 = var1.guildId;
        var _closure2_slot1 = var2;
        var1 = 58;
        var1 = var6[var1];
        var1 = var5.bind(var3)(var1);
        var11 = var1.bind(var3)(var10);
        var _closure2_slot2 = var11;
        var1 = _closure1_slot0;
        var5 = 27;
        var5 = var6[var5];
        var9 = var1.bind(var3)(var5);
        var8 = var9.useStateFromStores;
        var5 = _closure1_slot16;
        var7 = new Array(4);
        var7[0] = var5;
        var5 = _closure1_slot8;
        var7[1] = var5;
        var5 = _closure1_slot6;
        var7[2] = var5;
        var5 = _closure1_slot9;
        var7[3] = var5;
        var5 = new Array(3);
        var5[0] = var11;
        var5[1] = var10;
        var5[2] = var2;
        var2 = 59;
        var2 = var6[var2];
        var2 = var1.bind(var3)(var2);
        var12 = var2.areVoicePanelPreJoinContentPropsEqual;
        var14 = function() { // Environment: var0
            _fun111427: for (var _fun111427_ip = 0;;) switch (_fun111427_ip) {
                case 0:
                    var0 = _closure2_slot2;
                    if (var0) {
                        _fun111427_ip = 258;
                        continue _fun111427
                    }
                case 13:
                    var3 = _closure1_slot16;
                    var2 = var3.getVoiceStatesForChannelAlt;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var10 = null;
                    var4 = var10 != var0;
                    var9 = undefined;
                    var0 = undefined;
                    if (!var4) {
                        _fun111427_ip = 51;
                        continue _fun111427
                    }
                case 47:
                    var0 = _closure2_slot1;
                case 51:
                    var5 = var2.bind(var3)(var1, var0);
                    var1 = _closure1_slot8;
                    var0 = var1.getBlockedUsersForVoiceChannel;
                    var4 = _closure2_slot0;
                    var2 = var0.bind(var1)(var4);
                    var0 = var1.getIgnoredUsersForVoiceChannel;
                    var1 = var0.bind(var1)(var4);
                    var3 = _closure1_slot6;
                    var0 = var3.getEmbeddedActivitiesForChannel;
                    var4 = var0.bind(var3)(var4);
                    var3 = new Array(0);
                    var0 = _closure1_slot35;
                    var8 = var0.bind(var9)(var5);
                    var6 = var8.bind(var9)();
                    var0 = var6.done;
                    var7 = var6;
                    var6 = undefined;
                    if (var0) {
                        _fun111427_ip = 229;
                        continue _fun111427
                    }
                case 132:
                    var15 = var7.value;
                    var0 = var15.voiceState;
                    var0 = var0.selfStream;
                    if (!var0) {
                        _fun111427_ip = 214;
                        continue _fun111427
                    }
                case 152:
                    var16 = _closure1_slot9;
                    var14 = var16.getStreamForUser;
                    var0 = var15.user;
                    var13 = var0.id;
                    var0 = _closure2_slot1;
                    var0 = var14.bind(var16)(var13, var0);
                    var6 = var0;
                    if (!(var10 != var0)) {
                        _fun111427_ip = 214;
                        continue _fun111427
                    }
                case 189:
                    var14 = var3.push;
                    var13 = new Array(2);
                    var13[0] = var15;
                    var13[1] = var0;
                    var13 = var14.bind(var3)(var13);
                    var6 = var0;
                case 214:
                    var13 = var8.bind(var9)();
                    var0 = var13.done;
                    var7 = var13;
                    if (!var0) {
                        _fun111427_ip = 132;
                        continue _fun111427
                    }
                case 229:
                    var0 = {};
                    var0.members = var5;
                    var0.activities = var4;
                    var0.streamingMembers = var3;
                    var0.blockedMembers = var2;
                    var0.ignoredMembers = var1;
                    return var0;
                case 258:
                    var0 = undefined;
                    return var0;
            }
        };
        var16 = var9;
        var15 = var7;
        var13 = var5;
        var5 = var16[var8](var15, var14, var13, var12, var11);
        var2 = _closure1_slot23;
        var0 = 56;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.TransitionItem;
        var0 = {};
        var0.item = var5;
        var4 = _closure1_slot42;
        var0.renderItem = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 60;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/prejoin/VoicePanelPreJoinContent.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1371, 3480, 12449, 3675, 1216, 1372, 3052, 3481, 1613, 3482, 3487, 11773, 11776, 660, 12454, 33, 1297, 11777, 671, 11772, 4197, 7977, 3466, 566, 6421, 3902, 1234, 11882, 6843, 3042, 14279, 1464, 3681, 7925, 7924, 8032, 4867, 14277, 4045, 5179, 481, 5355, 8193, 3922, 4863, 13089, 11552, 5690, 5543, 795, 14242, 4042, 3989, 6422, 14180, 14289, 2]);