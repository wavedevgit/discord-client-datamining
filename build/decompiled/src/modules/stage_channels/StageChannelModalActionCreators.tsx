// modules/stage_channels/StageChannelModalActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var8;
    var5 = function arg0() {
        _fun51906: for (var _fun51906_ip = 0;;) switch (_fun51906_ip) {
            case 0:
                var0 = arg0;
                var1 = arguments[1];
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun51906_ip = 14;
                    continue _fun51906
                }
            case 12:
                var1 = false;
            case 14:
                var5 = _closure1_slot9;
                var3 = var5.getVoiceChannelId;
                var3 = var3.bind(var5)();
                if (var1) {
                    _fun51906_ip = 54;
                    continue _fun51906
                }
            case 34:
                var1 = function arg0, arg1() {
                    _fun51907: for (var _fun51907_ip = 0;;) switch (_fun51907_ip) {
                        case 0:
                            var5 = arg0;
                            var _closure3_slot0 = var5;
                            var4 = _closure1_slot8;
                            var1 = var4.can;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var0 = 6;
                            var0 = var6[var0];
                            var6 = undefined;
                            var0 = var7.bind(var6)(var0);
                            var0 = var0.JOIN_VOCAL_CHANNEL_PERMISSIONS;
                            var0 = var1.bind(var4)(var0, var5);
                            var0 = !var0;
                            if (var0) {
                                _fun51907_ip = 156;
                                continue _fun51907
                            }
                        case 62:
                            var4 = _closure1_slot2;
                            var1 = _closure1_slot3;
                            var7 = 7;
                            var1 = var1[var7];
                            var8 = var4.bind(var6)(var1);
                            var4 = var8.shouldShowBlockedUsers;
                            var1 = var5.id;
                            var1 = var4.bind(var8)(var1);
                            if (!var1) {
                                _fun51907_ip = 113;
                                continue _fun51907
                            }
                        case 101:
                            var8 = var5.id;
                            var4 = arg1;
                            var1 = var4 !== var8;
                        case 113:
                            if (!var1) {
                                _fun51907_ip = 153;
                                continue _fun51907
                            }
                        case 116:
                            var4 = _closure1_slot2;
                            var3 = _closure1_slot3;
                            var3 = var3[var7];
                            var4 = var4.bind(var6)(var3);
                            var3 = var4.openStageBlockedUsersSheet;
                            var2 = function() { // Environment: var2
                                var3 = _closure1_slot11;
                                var2 = _closure3_slot0;
                                var0 = undefined;
                                var1 = true;
                                var1 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            var2 = var3.bind(var4)(var5, var2);
                            var1 = 1;
                        case 153:
                            var0 = var1;
                        case 156:
                            var0 = !var0;
                            return var0;
                    }
                };
                var1 = var1.bind(var4)(var0, var3);
                if (var1) {
                    _fun51906_ip = 54;
                    continue _fun51906
                }
            case 50:
                var1 = false;
                return var1;
            case 54:
                var3 = _closure1_slot1;
                var5 = _closure1_slot3;
                var1 = 11;
                var1 = var5[var1];
                var6 = var3.bind(var4)(var1);
                var1 = var6.initialize;
                var1 = var1.bind(var6)();
                var1 = 12;
                var1 = var5[var1];
                var5 = var3.bind(var4)(var1);
                var3 = var5.selectVoiceChannel;
                var1 = var0.id;
                var1 = var3.bind(var5)(var1);
                var3 = _closure1_slot9;
                var1 = var3.getVoiceChannelId;
                var3 = var1.bind(var3)();
                var1 = var0.id;
                if (!(var3 === var1)) {
                    _fun51906_ip = 215;
                    continue _fun51906
                }
            case 135:
                var3 = _closure1_slot5;
                var1 = var3.getAllApplicationStreamsForChannel;
                var0 = var0.id;
                var1 = var1.bind(var3)(var0);
                var3 = var1.length;
                var0 = 0;
                if (!(var3 > var0)) {
                    _fun51906_ip = 211;
                    continue _fun51906
                }
            case 166:
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 13;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.watchStream;
                var1 = var1[var0];
                var0 = {};
                var4 = true;
                var0.noFocus = var4;
                var0 = var2.bind(var3)(var1, var0);
            case 211:
                var0 = true;
                return var0;
            case 215:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot10 = var5;
    var4 = function arg0() {
        _fun51909: for (var _fun51909_ip = 0;;) switch (_fun51909_ip) {
            case 0:
                var3 = arg0;
                var5 = arguments[1];
                var1 = arguments[2];
                var4 = arguments[3];
                var _closure2_slot0 = var3;
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun51909_ip = 26;
                    continue _fun51909
                }
            case 24:
                var5 = false;
            case 26:
                var _closure2_slot1 = var5;
                if (!(var1 === var0)) {
                    _fun51909_ip = 36;
                    continue _fun51909
                }
            case 34:
                var1 = false;
            case 36:
                var _closure2_slot2 = var1;
                if (!(var4 === var0)) {
                    _fun51909_ip = 46;
                    continue _fun51909
                }
            case 44:
                var4 = false;
            case 46:
                var7 = _closure1_slot9;
                var2 = var7.getVoiceChannelId;
                var2 = var2.bind(var7)();
                var4 = !var4;
                if (!var4) {
                    _fun51909_ip = 78;
                    continue _fun51909
                }
            case 69:
                var7 = var3.id;
                var4 = var2 !== var7;
            case 78:
                if (!var4) {
                    _fun51909_ip = 112;
                    continue _fun51909
                }
            case 81:
                var8 = _closure1_slot0;
                var9 = _closure1_slot3;
                var7 = 14;
                var7 = var9[var7];
                var8 = var8.bind(var0)(var7);
                var7 = var8.shouldShowVoiceChannelChangeConfirmation;
                var4 = var7.bind(var8)(var3);
            case 112:
                if (!var4) {
                    _fun51909_ip = 152;
                    continue _fun51909
                }
            case 115:
                var8 = _closure1_slot2;
                var9 = _closure1_slot3;
                var7 = 7;
                var7 = var9[var7];
                var8 = var8.bind(var0)(var7);
                var7 = var8.showChannelChangeConfirmationAlert;
                var6 = function() { // Environment: var6
                    var5 = _closure1_slot11;
                    var9 = _closure2_slot0;
                    var8 = _closure2_slot1;
                    var7 = _closure2_slot2;
                    var0 = undefined;
                    var6 = true;
                    var10 = undefined;
                    var1 = var10[var5](var9, var8, var7, var6, var5);
                    return var0;
                };
                var4 = var7.bind(var8)(var3, var6);
            case 152:
                if (var4) {
                    _fun51909_ip = 178;
                    continue _fun51909
                }
            case 155:
                var4 = _closure1_slot10;
                var4 = var4.bind(var0)(var3, var5);
                if (!var4) {
                    _fun51909_ip = 178;
                    continue _fun51909
                }
            case 168:
                var1 = _closure1_slot12;
                var1 = var1.bind(var0)(var3, var2);
            case 178:
                return var0;
        }
    };
    var _closure1_slot11 = var4;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot2;
        var1 = _closure1_slot3;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.navigateToStage;
        var2 = arg0;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot12 = var3;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var6);
    var0 = 0;
    var6 = var8[var0];
    var0 = undefined;
    var6 = var9.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot9 = var6;
    var6 = 15;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/stage_channels/StageChannelModalActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function arg0, arg1() {
        _fun51912: for (var _fun51912_ip = 0;;) switch (_fun51912_ip) {
            case 0:
                var2 = arguments[2];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var1 = undefined;
                if (!(var2 === var1)) {
                    _fun51912_ip = 27;
                    continue _fun51912
                }
            case 25:
                var2 = false;
            case 27:
                var _closure2_slot2 = var2;
                var2 = global;
                var2 = var2.Promise;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot4;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun51915: for (var _fun51915_ip = 0;;) switch (_fun51915_ip) {
                                case 0:
                                    StartGenerator();
                                    var3 = arg0;
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun51915_ip = 215;
                                        continue _fun51915
                                    }
                                case 15:
                                    var _closure5_slot0 = var3;
                                    var6 = _closure1_slot6;
                                    var5 = var6.getChannel;
                                    var2 = _closure2_slot1;
                                    var2 = var5.bind(var6)(var2);
                                    var5 = null;
                                    if (!(var5 == var2)) {
                                        _fun51915_ip = 191;
                                        continue _fun51915
                                    }
                                case 52:
                                    var6 = _closure1_slot0;
                                    var7 = _closure1_slot3;
                                    var5 = 8;
                                    var5 = var7[var5];
                                    var7 = undefined;
                                    var9 = var6.bind(var7)(var5);
                                    var6 = var9.stopLurkingAll;
                                    var10 = _closure2_slot0;
                                    var5 = new Array(1);
                                    var5[0] = var10;
                                    var5 = var6.bind(var9)(var5);
                                    SaveGenerator(address = 101);
                                case 99:
                                    return var5;
                                case 101:
                                    ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 6);
                                    if (var6) {
                                        _fun51915_ip = 188;
                                        continue _fun51915
                                    }
                                case 107:
                                    var9 = _closure1_slot1;
                                    var10 = _closure1_slot3;
                                    var6 = 9;
                                    var6 = var10[var6];
                                    var11 = var9.bind(var7)(var6);
                                    var10 = var11.joinGuild;
                                    var9 = _closure2_slot0;
                                    var6 = {};
                                    var12 = true;
                                    var6.lurker = var12;
                                    var6 = var10.bind(var11)(var9, var6);
                                    SaveGenerator(address = 156);
                                case 154:
                                    return var6;
                                case 156:
                                    ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 9);
                                    if (var9) {
                                        _fun51915_ip = 185;
                                        continue _fun51915
                                    }
                                case 162:
                                    var10 = _closure1_slot7;
                                    var9 = var10.addConditionalChangeListener;
                                    var8 = function() { // Environment: var8
                                        _fun51916: for (var _fun51916_ip = 0;;) switch (_fun51916_ip) {
                                            case 0:
                                                var3 = _closure1_slot6;
                                                var2 = var3.getChannel;
                                                var0 = _closure2_slot1;
                                                var3 = var2.bind(var3)(var0);
                                                var0 = null;
                                                var0 = var0 == var3;
                                                if (var0) {
                                                    _fun51916_ip = 88;
                                                    continue _fun51916
                                                }
                                            case 33:
                                                var4 = _closure1_slot10;
                                                var2 = undefined;
                                                var4 = var4.bind(var2)(var3);
                                                var4 = _closure1_slot1;
                                                var5 = _closure1_slot3;
                                                var1 = 10;
                                                var1 = var5[var1];
                                                var4 = var4.bind(var2)(var1);
                                                var1 = var4.initialize;
                                                var1 = var1.bind(var4)();
                                                var1 = _closure5_slot0;
                                                var1 = var1.bind(var2)(var3);
                                                var0 = false;
                                            case 88:
                                                return var0;
                                        }
                                    };
                                    var8 = var9.bind(var10)(var8);
                                    return var7;
                                case 185:
                                    return var6;
                                case 188:
                                    return var5;
                                case 191:
                                    var5 = _closure1_slot10;
                                    var4 = _closure2_slot2;
                                    var1 = undefined;
                                    var4 = var5.bind(var1)(var2, var4);
                                    var1 = var3.bind(var1)(var2);
                                    return var1;
                                case 215:
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
                var4 = var0.bind(var1)();
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = var1;
                var0 = new var5[var2](var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var2.connectOrLurkStage = var6;
    var2.connectToStage = var5;
    var2.connectAndOpen = var4;
    var2.navigateToStage = var3;
    var1 = function arg0() {
        var2 = _closure1_slot2;
        var1 = _closure1_slot3;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.showPlatformUserProfile;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.showUserProfile = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3714, 1372, 1410, 3091, 1670, 1380, 5912, 12118, 4679, 12119, 12120, 4231, 8016, 12122, 2]);