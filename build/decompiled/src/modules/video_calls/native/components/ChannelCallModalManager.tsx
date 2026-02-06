// modules/video_calls/native/components/ChannelCallModalManager.tsx
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
        _fun64968: for (var _fun64968_ip = 0;;) switch (_fun64968_ip) {
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
                _fun64968_ip = 74;
                continue _fun64968;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
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
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun64972: for (var _fun64972_ip = 0;;) switch (_fun64972_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun64972_ip = 86;
                        continue _fun64972
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun64972_ip = 120;
                    continue _fun64972;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = false;
                    var0.inVoiceChannel = var2;
                    var1 = function() { // Environment: var1
                        _fun64973: for (var _fun64973_ip = 0;;) switch (_fun64973_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var5 = var1.channel;
                                var _closure4_slot0 = var5;
                                var4 = _closure1_slot8;
                                var1 = var4.getCurrentUser;
                                var6 = var1.bind(var4)();
                                var4 = null;
                                var1 = var4 != var5;
                                if (!var1) {
                                    _fun64973_ip = 47;
                                    continue _fun64973
                                }
                            case 43:
                                var1 = var4 != var6;
                            case 47:
                                if (!var1) {
                                    _fun64973_ip = 76;
                                    continue _fun64973
                                }
                            case 50:
                                var9 = _closure1_slot9;
                                var8 = var9.isInChannel;
                                var7 = var5.id;
                                var6 = var6.id;
                                var1 = var8.bind(var9)(var7, var6);
                            case 76:
                                var4 = var4 != var5;
                                if (!var4) {
                                    _fun64973_ip = 93;
                                    continue _fun64973
                                }
                            case 83:
                                var5 = _closure3_slot0;
                                var4 = var5.inVoiceChannel;
                            case 93:
                                if (!var4) {
                                    _fun64973_ip = 110;
                                    continue _fun64973
                                }
                            case 96:
                                var5 = _closure3_slot0;
                                var5 = var5.inVoiceChannel;
                                var4 = var5 !== var1;
                            case 110:
                                if (!var4) {
                                    _fun64973_ip = 165;
                                    continue _fun64973
                                }
                            case 113:
                                var5 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var3 = 7;
                                var4 = var4[var3];
                                var3 = undefined;
                                var4 = var5.bind(var3)(var4);
                                var3 = var4.wait;
                                var2 = function() { // Environment: var2
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 8;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.dismissVoiceChannelScreens;
                                    var1 = _closure4_slot0;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                                };
                                var2 = var3.bind(var4)(var2);
                                var3 = _closure3_slot0;
                                var2 = var3.terminate;
                                var2 = var2.bind(var3)();
                            case 165:
                                var0 = _closure3_slot0;
                                var0.inVoiceChannel = var1;
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleCloseModal = var1;
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
        var0 = '_initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun64975: for (var _fun64975_ip = 0;;) switch (_fun64975_ip) {
                case 0:
                    var4 = arg0;
                    var0 = this;
                    var0.channel = var4;
                    var3 = _closure1_slot8;
                    var2 = var3.getCurrentUser;
                    var3 = var2.bind(var3)();
                    var5 = null;
                    var2 = var5 != var4;
                    if (!var2) {
                        _fun64975_ip = 41;
                        continue _fun64975
                    }
                case 37:
                    var2 = var5 != var3;
                case 41:
                    if (!var2) {
                        _fun64975_ip = 70;
                        continue _fun64975
                    }
                case 44:
                    var6 = _closure1_slot9;
                    var5 = var6.isInChannel;
                    var4 = var4.id;
                    var3 = var3.id;
                    var2 = var5.bind(var6)(var4, var3);
                case 70:
                    var0.inVoiceChannel = var2;
                    var2 = _closure1_slot9;
                    var1 = var2.addChangeListener;
                    var0 = var0.handleCloseModal;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var5 = function() {
            var2 = _closure1_slot9;
            var1 = var2.removeChangeListener;
            var0 = this;
            var0 = var0.handleCloseModal;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/components/ChannelCallModalManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1621, 3523, 806, 7903, 4018, 2]);