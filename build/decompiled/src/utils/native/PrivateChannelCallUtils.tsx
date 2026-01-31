// utils/native/PrivateChannelCallUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var12 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var13 = dependencyMap;
    var _closure1_slot0 = var12;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var13;
    var3 = function(arg0) { // Original name: openGuildVoiceModal, environment: var1
        _fun62518: for (var _fun62518_ip = 0;;) switch (_fun62518_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot18;
                var3 = var2.id;
                var0 = undefined;
                var5 = var4.bind(var0)(var3);
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 31;
                var3 = var6[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.isModalOpen;
                var3 = var3.bind(var4)(var5);
                if (var3) {
                    _fun62518_ip = 65;
                    continue _fun62518
                }
            case 56:
                var1 = _closure1_slot19;
                var1 = var1.bind(var0)(var2);
            case 65:
                return var0;
        }
    };
    var _closure1_slot24 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var4);
    var0 = 0;
    var4 = var13[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var6 = var13[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var6);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var13[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var13[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var13[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var13[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var13[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var13[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var13[var4];
    var4 = var12.bind(var0)(var4);
    var5 = var4.ChannelTypes;
    var _closure1_slot11 = var5;
    var5 = var4.ComponentActions;
    var _closure1_slot12 = var5;
    var4 = var4.NOOP;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var13[var4];
    var4 = var12.bind(var0)(var4);
    var4 = var4.AgeGateSource;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var13[var4];
    var4 = var12.bind(var0)(var4);
    var4 = var4.NativePermissionTypes;
    var _closure1_slot15 = var4;
    var4 = 11;
    var4 = var13[var4];
    var4 = var12.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot16 = var4;
    var10 = function(arg0) { // Original name: getVoiceChannelKeyByChannelId, environment: var1
        var0 = global;
        var0 = var0.HermesInternal;
        var4 = var0.concat;
        var3 = '';
        var2 = 'voice-channel';
        var1 = '-';
        var0 = arg0;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var _closure1_slot17 = var10;
    var9 = function(arg0) { // Original name: getVoiceChannelKey, environment: var1
        var2 = _closure1_slot17;
        var1 = undefined;
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot18 = var9;
    var8 = function(arg0) { // Original name: openChannelCallModal, environment: var1
        _fun62521: for (var _fun62521_ip = 0;;) switch (_fun62521_ip) {
            case 0:
                var5 = arg0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 12;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.maybeOpenAgeGateForVoiceChannel;
                var2 = var5.id;
                var2 = var3.bind(var4)(var2);
                if (var2) {
                    _fun62521_ip = 287;
                    continue _fun62521
                }
            case 50:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 13;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.rebuildRTCActiveChannels;
                var2 = var2.bind(var3)();
                var3 = _closure1_slot0;
                var2 = 14;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.isVoicePanelEnabled;
                var2 = var2.bind(var3)(var5);
                if (var2) {
                    _fun62521_ip = 199;
                    continue _fun62521
                }
            case 110:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var3 = 16;
                var3 = var2[var3];
                var7 = var4.bind(var0)(var3);
                var6 = var7.pushLazy;
                var4 = _closure1_slot0;
                var3 = 18;
                var3 = var2[var3];
                var4 = var4.bind(var0)(var3);
                var3 = 17;
                var3 = var2[var3];
                var2 = var2.paths;
                var4 = var4.bind(var0)(var3, var2);
                var3 = {};
                var3.channel = var5;
                var8 = _closure1_slot18;
                var2 = var5.id;
                var2 = var8.bind(var0)(var2);
                var2 = var6.bind(var7)(var4, var3, var2);
                _fun62521_ip = 287;
                continue _fun62521;
            case 199:
                var3 = _closure1_slot6;
                var2 = var3.getState;
                var4 = var2.bind(var3)();
                var3 = var4.openChannel;
                var2 = var5.id;
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 15;
                var2 = var4[var2];
                var2 = var3.bind(var0)(var2);
                var4 = var2.ComponentDispatch;
                var3 = var4.dispatch;
                var1 = _closure1_slot12;
                var2 = var1.VOICE_PANEL_OPEN;
                var1 = {};
                var5 = var5.id;
                var1.channelId = var5;
                var1 = var3.bind(var4)(var2, var1);
            case 287:
                return var0;
        }
    };
    var _closure1_slot19 = var8;
    var7 = function(arg0, arg1) { // Original name: dismissVoiceChannelScreens, environment: var1
        _fun62522: for (var _fun62522_ip = 0;;) switch (_fun62522_ip) {
            case 0:
                var3 = _closure1_slot18;
                var0 = arg0;
                var2 = var0.id;
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 16;
                var2 = var5[var2];
                var5 = var4.bind(var0)(var2);
                var4 = var5.popWithKey;
                var2 = arg1;
                var2 = var4.bind(var5)(var3, var2);
                var4 = _closure1_slot5;
                var2 = var4.getKey;
                var2 = var2.bind(var4)();
                if (!(var2 === var3)) {
                    _fun62522_ip = 105;
                    continue _fun62522
                }
            case 75:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 21;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.hideActionSheet;
                var1 = var1.bind(var2)();
            case 105:
                return var0;
        }
    };
    var _closure1_slot20 = var7;
    var6 = function() { // Original name: monkeyPatchCall, environment: var1
        var0 = global;
        var2 = var0.Promise;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0) { // Environment: var0
            _fun62524: for (var _fun62524_ip = 0;;) switch (_fun62524_ip) {
                case 0:
                    var2 = _closure1_slot9;
                    var1 = var2.getVoiceChannelId;
                    var3 = var1.bind(var2)();
                    var2 = _closure1_slot7;
                    var1 = var2.getChannel;
                    var4 = var1.bind(var2)(var3);
                    var3 = null;
                    if (!(var3 != var4)) {
                        _fun62524_ip = 48;
                        continue _fun62524
                    }
                case 37:
                    var2 = _closure1_slot20;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var4);
                case 48:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 23;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.selectVoiceChannel;
                    var1 = var1.bind(var2)(var3);
                    var1 = global;
                    var3 = var1.setTimeout;
                    var2 = arg0;
                    var1 = 500;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
            }
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var _closure1_slot21 = var6;
    var5 = function(arg0) { // Original name: showGuardCallAlert, environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var2 = _closure1_slot1;
        var10 = _closure1_slot2;
        var0 = 24;
        var1 = var10[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.show;
        var1 = {};
        var9 = _closure1_slot0;
        var6 = 25;
        var7 = var10[var6];
        var7 = var9.bind(var0)(var7);
        var11 = var7.intl;
        var8 = var11.string;
        var7 = var10[var6];
        var7 = var9.bind(var0)(var7);
        var7 = var7.t;
        var7 = var7["91WuJ9"];
        var7 = var8.bind(var11)(var7);
        var1.title = var7;
        var7 = var10[var6];
        var7 = var9.bind(var0)(var7);
        var11 = var7.intl;
        var8 = var11.string;
        var7 = var10[var6];
        var7 = var9.bind(var0)(var7);
        var7 = var7.t;
        var7 = var7["Rs+Vk1"];
        var7 = var8.bind(var11)(var7);
        var1.body = var7;
        var7 = var10[var6];
        var7 = var9.bind(var0)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var0)(var6);
        var6 = var6.t;
        var6 = var6["ETE/oC"];
        var6 = var7.bind(var8)(var6);
        var1.cancelText = var6;
        var5 = function() { // Original name: onConfirm, environment: var5
            var1 = _closure2_slot0;
            var0 = undefined;
            var0 = var1.bind(var0)();
            return var0;
        };
        var1.onConfirm = var5;
        var4 = _closure1_slot13;
        var1.onCancel = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot22 = var5;
    var4 = function(arg0, arg1) { // Original name: guardPrivateCallForChannel, environment: var1
        _fun62527: for (var _fun62527_ip = 0;;) switch (_fun62527_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var _closure2_slot0 = var3;
                var5 = _closure1_slot9;
                var2 = var5.getVoiceChannelId;
                var6 = var2.bind(var5)();
                var5 = _closure1_slot7;
                var2 = var5.getChannel;
                var2 = var2.bind(var5)(var6);
                var5 = null;
                if (!(var5 != var2)) {
                    _fun62527_ip = 86;
                    continue _fun62527
                }
            case 49:
                var7 = var2.type;
                var6 = _closure1_slot11;
                var6 = var6.GUILD_VOICE;
                if (!(var7 !== var6)) {
                    _fun62527_ip = 86;
                    continue _fun62527
                }
            case 68:
                if (!(var5 != var4)) {
                    _fun62527_ip = 86;
                    continue _fun62527
                }
            case 72:
                var4 = var4.id;
                var2 = var2.id;
                if (!(var4 === var2)) {
                    _fun62527_ip = 94;
                    continue _fun62527
                }
            case 86:
                var2 = undefined;
                var2 = var3.bind(var2)();
                _fun62527_ip = 119;
                continue _fun62527;
            case 94:
                var2 = _closure1_slot22;
                var3 = _closure1_slot3;
                var1 = undefined;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun62529: for (var _fun62529_ip = 0;;) switch (_fun62529_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun62529_ip = 47;
                                    continue _fun62529
                                }
                            case 7:
                                var1 = _closure1_slot21;
                                var2 = undefined;
                                var1 = var1.bind(var2)();
                                SaveGenerator(address = 24);
                            case 22:
                                return var1;
                            case 24:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun62529_ip = 44;
                                    continue _fun62529
                                }
                            case 30:
                                var3 = _closure2_slot0;
                                var3 = var3.bind(var2)();
                                return var2;
                            case 44:
                                return var1;
                            case 47:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var3.bind(var1)(var0);
                var0 = var2.bind(var1)(var0);
            case 119:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot23 = var4;
    var11 = 33;
    var11 = var13[var11];
    var13 = var12.bind(var0)(var11);
    var12 = var13.fileFinishedImporting;
    var11 = 'utils/native/PrivateChannelCallUtils.tsx';
    var11 = var12.bind(var13)(var11);
    var2.getVoiceChannelKeyByChannelId = var10;
    var2.getVoiceChannelKey = var9;
    var9 = function(arg0) { // Original name: isVoiceChannelModalKey, environment: var1
        var2 = arg0;
        var1 = var2.startsWith;
        var0 = 'voice-channel';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isVoiceChannelModalKey = var9;
    var2.openChannelCallModal = var8;
    var8 = function(arg0) { // Original name: maybeShowAgeGateModal, environment: var1
        _fun62531: for (var _fun62531_ip = 0;;) switch (_fun62531_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 12;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.shouldShowAgeGateForChannelId;
                var2 = arg0;
                var2 = var3.bind(var4)(var2);
                if (!var2) {
                    _fun62531_ip = 84;
                    continue _fun62531
                }
            case 42:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 19;
                var1 = var3[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.runAfterInteractions;
                var2 = function() { // Environment: var1
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 20;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.openAgeGateModal;
                    var1 = _closure1_slot14;
                    var1 = var1.NSFW_VOICE_CHANNEL;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = 150;
                var1 = var3.bind(var4)(var2, var1);
            case 84:
                return var0;
        }
    };
    var2.maybeShowAgeGateModal = var8;
    var8 = function(arg0) { // Environment: var1
        var6 = arg0;
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 21;
        var3 = var2[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.openLazy;
        var7 = _closure1_slot0;
        var3 = 18;
        var3 = var2[var3];
        var7 = var7.bind(var0)(var3);
        var3 = 22;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var7.bind(var0)(var3, var2);
        var2 = _closure1_slot18;
        var1 = var6.id;
        var2 = var2.bind(var0)(var1);
        var1 = {};
        var1.channel = var6;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var2.openVoiceChannelActionSheet = var8;
    var8 = function(arg0) { // Environment: var1
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 21;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.hideActionSheet;
        var4 = _closure1_slot18;
        var1 = arg0;
        var1 = var1.id;
        var1 = var4.bind(var0)(var1);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.hideVoiceChannelActionSheet = var8;
    var2.dismissVoiceChannelScreens = var7;
    var2.monkeyPatchCall = var6;
    var2.showGuardCallAlert = var5;
    var2.guardPrivateCallForChannel = var4;
    var4 = function(arg0) { // Environment: var1
        _fun62535: for (var _fun62535_ip = 0;;) switch (_fun62535_ip) {
            case 0:
                var3 = arg0;
                var2 = arguments[1];
                var _closure2_slot0 = var3;
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun62535_ip = 20;
                    continue _fun62535
                }
            case 18:
                var2 = false;
            case 20:
                var _closure2_slot1 = var2;
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun62538: for (var _fun62538_ip = 0;;) switch (_fun62538_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun62538_ip = 205;
                                        continue _fun62538
                                    }
                                case 10:
                                    var1 = _closure2_slot1;
                                    if (!var1) {
                                        _fun62538_ip = 85;
                                        continue _fun62538
                                    }
                                case 20:
                                    var5 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var2 = 26;
                                    var4 = var4[var2];
                                    var2 = undefined;
                                    var5 = var5.bind(var2)(var4);
                                    var4 = var5.requestPermission;
                                    var1 = _closure1_slot15;
                                    var1 = var1.CAMERA;
                                    var1 = var4.bind(var5)(var1);
                                    SaveGenerator(address = 70);
                                case 68:
                                    return var1;
                                case 70:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun62538_ip = 202;
                                        continue _fun62538
                                    }
                                case 79:
                                    if (var1) {
                                        _fun62538_ip = 85;
                                        continue _fun62538
                                    }
                                case 82:
                                    return var2;
                                case 85:
                                    var6 = _closure1_slot0;
                                    var7 = _closure1_slot2;
                                    var2 = 27;
                                    var5 = var7[var2];
                                    var2 = undefined;
                                    var8 = var6.bind(var2)(var5);
                                    var5 = var8.dismissKeyboard;
                                    var5 = var5.bind(var8)();
                                    var8 = _closure1_slot1;
                                    var5 = 23;
                                    var5 = var7[var5];
                                    var10 = var8.bind(var2)(var5);
                                    var9 = var10.selectVoiceChannel;
                                    var5 = _closure2_slot0;
                                    var8 = var5.id;
                                    var5 = _closure2_slot1;
                                    var5 = var9.bind(var10)(var8, var5);
                                    var5 = 14;
                                    var5 = var7[var5];
                                    var6 = var6.bind(var2)(var5);
                                    var5 = var6.isVoicePanelEnabled;
                                    var5 = var5.bind(var6)();
                                    if (var5) {
                                        _fun62538_ip = 199;
                                        continue _fun62538
                                    }
                                case 186:
                                    var4 = _closure1_slot19;
                                    var3 = _closure2_slot0;
                                    var3 = var4.bind(var2)(var3);
                                case 199:
                                    return var2;
                                case 202:
                                    return var1;
                                case 205:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
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
                var2 = var1.bind(var0)();
                var1 = _closure1_slot23;
                var1 = var1.bind(var0)(var3, var2);
                return var0;
        }
    };
    var2.handleJoinCall = var4;
    var4 = function(arg0) { // Environment: var1
        _fun62540: for (var _fun62540_ip = 0;;) switch (_fun62540_ip) {
            case 0:
                var3 = arg0;
                var2 = arguments[1];
                var _closure2_slot0 = var3;
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun62540_ip = 20;
                    continue _fun62540
                }
            case 18:
                var2 = false;
            case 20:
                var _closure2_slot1 = var2;
                var2 = function(arg0) { // Original name: guardAgainstCallingProvisionalAccount, environment: var1
                    _fun62541: for (var _fun62541_ip = 0;;) switch (_fun62541_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = var4.isDM;
                            var0 = var0.bind(var4)();
                            if (!var0) {
                                _fun62541_ip = 59;
                                continue _fun62541
                            }
                        case 16:
                            var3 = _closure1_slot10;
                            var2 = var3.getUser;
                            var1 = var4.getRecipientId;
                            var1 = var1.bind(var4)();
                            var1 = var2.bind(var3)(var1);
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun62541_ip = 59;
                                continue _fun62541
                            }
                        case 50:
                            var1 = var1.isProvisional;
                            if (var1) {
                                _fun62541_ip = 63;
                                continue _fun62541
                            }
                        case 59:
                            var1 = false;
                            return var1;
                        case 63:
                            var3 = _closure1_slot4;
                            var2 = var3.lazy;
                            var1 = function() { // Environment: var1
                                var2 = _closure1_slot0;
                                var0 = _closure1_slot2;
                                var1 = 18;
                                var1 = var0[var1];
                                var3 = undefined;
                                var2 = var2.bind(var3)(var1);
                                var1 = 28;
                                var1 = var0[var1];
                                var0 = var0.paths;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var5 = var2.bind(var3)(var1);
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 29;
                            var1 = var3[var1];
                            var4 = undefined;
                            var3 = var2.bind(var4)(var1);
                            var2 = var3.openAlert;
                            var1 = _closure1_slot16;
                            var0 = {};
                            var1 = var1.bind(var4)(var5, var0);
                            var0 = 'ProvisionalAccountNocallAllowed';
                            var0 = var2.bind(var3)(var0, var1);
                            var0 = true;
                            return var0;
                    }
                };
                var2 = var2.bind(var0)(var3);
                if (var2) {
                    _fun62540_ip = 59;
                    continue _fun62540
                }
            case 37:
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun62545: for (var _fun62545_ip = 0;;) switch (_fun62545_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun62545_ip = 284;
                                        continue _fun62545
                                    }
                                case 10:
                                    var1 = _closure2_slot1;
                                    if (!var1) {
                                        _fun62545_ip = 85;
                                        continue _fun62545
                                    }
                                case 20:
                                    var5 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var2 = 26;
                                    var4 = var4[var2];
                                    var2 = undefined;
                                    var5 = var5.bind(var2)(var4);
                                    var4 = var5.requestPermission;
                                    var1 = _closure1_slot15;
                                    var1 = var1.CAMERA;
                                    var1 = var4.bind(var5)(var1);
                                    SaveGenerator(address = 70);
                                case 68:
                                    return var1;
                                case 70:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun62545_ip = 281;
                                        continue _fun62545
                                    }
                                case 79:
                                    if (var1) {
                                        _fun62545_ip = 85;
                                        continue _fun62545
                                    }
                                case 82:
                                    return var2;
                                case 85:
                                    var6 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var2 = 27;
                                    var5 = var5[var2];
                                    var2 = undefined;
                                    var6 = var6.bind(var2)(var5);
                                    var5 = var6.dismissKeyboard;
                                    var5 = var5.bind(var6)();
                                    var5 = _closure2_slot0;
                                    var6 = var5.type;
                                    var5 = _closure1_slot11;
                                    var5 = var5.DM;
                                    var9 = var6 !== var5;
                                    if (var9) {
                                        _fun62545_ip = 175;
                                        continue _fun62545
                                    }
                                case 146:
                                    var7 = _closure1_slot8;
                                    var6 = var7.isFriend;
                                    var8 = _closure2_slot0;
                                    var5 = var8.getRecipientId;
                                    var5 = var5.bind(var8)();
                                    var9 = var6.bind(var7)(var5);
                                case 175:
                                    var8 = null;
                                    if (var9) {
                                        _fun62545_ip = 194;
                                        continue _fun62545
                                    }
                                case 180:
                                    var6 = _closure2_slot0;
                                    var5 = var6.getRecipientId;
                                    var8 = var5.bind(var6)();
                                case 194:
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var4 = 30;
                                    var4 = var6[var4];
                                    var7 = var5.bind(var2)(var4);
                                    var6 = var7.call;
                                    var4 = _closure2_slot0;
                                    var5 = var4.id;
                                    var4 = _closure2_slot1;
                                    if (!var9) {
                                        _fun62545_ip = 252;
                                        continue _fun62545
                                    }
                                case 235:
                                    var10 = _closure2_slot0;
                                    var3 = var10.isManaged;
                                    var3 = var3.bind(var10)();
                                    var9 = !var3;
                                case 252:
                                    var11 = function() { // Environment: var3
                                        _fun62546: for (var _fun62546_ip = 0;;) switch (_fun62546_ip) {
                                            case 0:
                                                var3 = _closure1_slot0;
                                                var2 = _closure1_slot2;
                                                var0 = 14;
                                                var2 = var2[var0];
                                                var0 = undefined;
                                                var3 = var3.bind(var0)(var2);
                                                var2 = var3.isVoicePanelEnabled;
                                                var2 = var2.bind(var3)();
                                                var2 = !var2;
                                                if (!var2) {
                                                    _fun62546_ip = 57;
                                                    continue _fun62546
                                                }
                                            case 41:
                                                var2 = _closure1_slot19;
                                                var1 = _closure2_slot0;
                                                var1 = var2.bind(var0)(var1);
                                            case 57:
                                                return var0;
                                        }
                                    };
                                    var16 = var7;
                                    var15 = var5;
                                    var14 = var4;
                                    var13 = var9;
                                    var12 = var8;
                                    var3 = var16[var6](var15, var14, var13, var12, var11, var10);
                                    return var2;
                                case 281:
                                    return var1;
                                case 284:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
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
                var2 = var1.bind(var0)();
                var1 = _closure1_slot23;
                var1 = var1.bind(var0)(var3, var2);
            case 59:
                return var0;
        }
    };
    var2.handleStartCall = var4;
    var4 = function(arg0) { // Environment: var1
        _fun62548: for (var _fun62548_ip = 0;;) switch (_fun62548_ip) {
            case 0:
                var3 = arg0;
                var2 = arguments[1];
                var _closure2_slot0 = var3;
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun62548_ip = 20;
                    continue _fun62548
                }
            case 18:
                var2 = false;
            case 20:
                var _closure2_slot1 = var2;
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun62551: for (var _fun62551_ip = 0;;) switch (_fun62551_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun62551_ip = 166;
                                        continue _fun62551
                                    }
                                case 10:
                                    var1 = _closure2_slot1;
                                    if (!var1) {
                                        _fun62551_ip = 82;
                                        continue _fun62551
                                    }
                                case 20:
                                    var5 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var2 = 26;
                                    var4 = var4[var2];
                                    var2 = undefined;
                                    var5 = var5.bind(var2)(var4);
                                    var4 = var5.requestPermission;
                                    var1 = _closure1_slot15;
                                    var1 = var1.CAMERA;
                                    var1 = var4.bind(var5)(var1);
                                    SaveGenerator(address = 70);
                                case 68:
                                    return var1;
                                case 70:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun62551_ip = 163;
                                        continue _fun62551
                                    }
                                case 76:
                                    if (var1) {
                                        _fun62551_ip = 82;
                                        continue _fun62551
                                    }
                                case 79:
                                    return var2;
                                case 82:
                                    var7 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var2 = 27;
                                    var5 = var6[var2];
                                    var2 = undefined;
                                    var7 = var7.bind(var2)(var5);
                                    var5 = var7.dismissKeyboard;
                                    var5 = var5.bind(var7)();
                                    var5 = _closure1_slot1;
                                    var4 = 30;
                                    var4 = var6[var4];
                                    var7 = var5.bind(var2)(var4);
                                    var6 = var7.call;
                                    var4 = _closure2_slot0;
                                    var5 = var4.id;
                                    var4 = _closure2_slot1;
                                    var3 = true;
                                    var3 = var6.bind(var7)(var5, var4, var3);
                                    return var2;
                                case 163:
                                    return var1;
                                case 166:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
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
                var2 = var1.bind(var0)();
                var1 = _closure1_slot23;
                var1 = var1.bind(var0)(var3, var2);
                return var0;
        }
    };
    var2.handleRedesignGroupDMCall = var4;
    var4 = function(arg0) { // Environment: var1
        _fun62553: for (var _fun62553_ip = 0;;) switch (_fun62553_ip) {
            case 0:
                var3 = arg0;
                var2 = arguments[1];
                var _closure2_slot0 = var3;
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun62553_ip = 20;
                    continue _fun62553
                }
            case 18:
                var2 = false;
            case 20:
                var _closure2_slot1 = var2;
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun62556: for (var _fun62556_ip = 0;;) switch (_fun62556_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun62556_ip = 164;
                                        continue _fun62556
                                    }
                                case 10:
                                    var1 = _closure2_slot1;
                                    if (!var1) {
                                        _fun62556_ip = 82;
                                        continue _fun62556
                                    }
                                case 20:
                                    var5 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var2 = 26;
                                    var4 = var4[var2];
                                    var2 = undefined;
                                    var5 = var5.bind(var2)(var4);
                                    var4 = var5.requestPermission;
                                    var1 = _closure1_slot15;
                                    var1 = var1.CAMERA;
                                    var1 = var4.bind(var5)(var1);
                                    SaveGenerator(address = 70);
                                case 68:
                                    return var1;
                                case 70:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun62556_ip = 161;
                                        continue _fun62556
                                    }
                                case 76:
                                    if (var1) {
                                        _fun62556_ip = 82;
                                        continue _fun62556
                                    }
                                case 79:
                                    return var2;
                                case 82:
                                    var7 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var2 = 27;
                                    var5 = var6[var2];
                                    var2 = undefined;
                                    var7 = var7.bind(var2)(var5);
                                    var5 = var7.dismissKeyboard;
                                    var5 = var5.bind(var7)();
                                    var5 = _closure1_slot1;
                                    var4 = 23;
                                    var4 = var6[var4];
                                    var6 = var5.bind(var2)(var4);
                                    var5 = var6.selectVoiceChannel;
                                    var4 = _closure2_slot0;
                                    var4 = var4.id;
                                    var3 = _closure2_slot1;
                                    var3 = var5.bind(var6)(var4, var3);
                                    return var2;
                                case 161:
                                    return var1;
                                case 164:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
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
                var2 = var1.bind(var0)();
                var1 = _closure1_slot23;
                var1 = var1.bind(var0)(var3, var2);
                return var0;
        }
    };
    var2.handleRedesignJoinCall = var4;
    var2.openGuildVoiceModal = var3;
    var1 = function(arg0, arg1) { // Original name: navigateToVoiceChannel, environment: var1
        _fun62558: for (var _fun62558_ip = 0;;) switch (_fun62558_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.isPrivate;
                var1 = var0.bind(var2)();
                if (var1) {
                    _fun62558_ip = 80;
                    continue _fun62558
                }
            case 19:
                var1 = var2.isGuildStageVoice;
                var1 = var1.bind(var2)();
                if (var1) {
                    _fun62558_ip = 45;
                    continue _fun62558
                }
            case 32:
                var3 = _closure1_slot24;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                _fun62558_ip = 91;
                continue _fun62558;
            case 45:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 32;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var1 = var3.openStageChannel;
                var1 = var1.bind(var3)(var2);
                _fun62558_ip = 91;
                continue _fun62558;
            case 80:
                var1 = _closure1_slot19;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
            case 91:
                var0 = undefined;
                return var0;
        }
    };
    var2.navigateToVoiceChannel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 3099, 7839, 1372, 3059, 1661, 1613, 660, 1219, 3973, 33, 4515, 7840, 7842, 1229, 4525, 7843, 1307, 5813, 4520, 3237, 11848, 4195, 3895, 1234, 3974, 3677, 11872, 3988, 7980, 3878, 5874, 2]);