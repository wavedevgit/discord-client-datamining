// lib/InviteQueue.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun67794: for (var _fun67794_ip = 0;;) switch (_fun67794_ip) {
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
            case 72: // try_end0
                _fun67794_ip = 76;
                continue _fun67794;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
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
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var10 = 0;
    var1 = var5[var10];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var9 = 1;
    var1 = var5[var9];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var8 = 2;
    var1 = var5[var8];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.Millis;
    var1 = var1.SECOND;
    var1 = var9 * var1;
    var4 = 10;
    var1 = var1 + var4;
    var _closure1_slot8 = var1;
    var1 = {};
    var1.GROUP_DM = var10;
    var7 = 'GROUP_DM';
    var1[var10] = var7;
    var1.USER = var9;
    var7 = 'USER';
    var1[var9] = var7;
    var1.CHANNEL = var8;
    var7 = 'CHANNEL';
    var1[var8] = var7;
    var _closure1_slot9 = var1;
    var4 = var5[var4];
    var4 = var6.bind(var0)(var4);
    var3 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun67798: for (var _fun67798_ip = 0;;) switch (_fun67798_ip) {
                case 0:
                    var3 = this;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var0 = var0.bind(var2)(var3, var1);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var0 = 7;
                    var0 = var6[var0];
                    var6 = var5.bind(var2)(var0);
                    var0 = var6.prototype;
                    var5 = Object.create(var0, {
                        constructor: {
                            value: var6
                        }
                    });
                    var11 = 'InviteQueue';
                    var12 = var5;
                    var0 = new var12[var6](var11, var10);
                    var0 = var0 instanceof Object ? var0 : var5;
                    var8 = new Array(2);
                    var8[0] = var0;
                    var0 = _closure1_slot8;
                    var8[1] = var0;
                    var0 = _closure1_slot5;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun67798_ip = 124;
                        continue _fun67798
                    }
                case 111:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun67798_ip = 158;
                    continue _fun67798;
                case 124:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot5;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 158:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = '_sendInvite';
        var4.key = var0;
        var0 = function arg0, arg1, arg2, arg3, arg4() {
            var0 = arg4;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 8;
            var2 = var2[var0];
            var0 = undefined;
            var7 = var3.bind(var0)(var2);
            var6 = var7.sendInvite;
            var2 = arg0;
            var11 = var2.id;
            var10 = arg1;
            var9 = arg2;
            var8 = arg3;
            var12 = var7;
            var4 = var12[var6](var11, var10, var9, var8, var7);
            var3 = var4.then;
            var2 = function() { // Environment: var1
                var3 = _closure3_slot0;
                var2 = undefined;
                var1 = null;
                var0 = true;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var1 = function() { // Environment: var1
                var3 = _closure3_slot0;
                var2 = undefined;
                var1 = null;
                var0 = false;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'drain';
        var4.key = var6;
        var5 = function arg0, arg1() {
            _fun67802: for (var _fun67802_ip = 0;;) switch (_fun67802_ip) {
                case 0:
                    var0 = arg0;
                    var6 = arg1;
                    var5 = this;
                    var _closure3_slot0 = var5;
                    var _closure3_slot1 = var0;
                    var _closure3_slot2 = var6;
                    var4 = var0.location;
                    var _closure3_slot3 = var4;
                    var3 = var0.inviteAnalyticsMetadata;
                    var _closure3_slot4 = var3;
                    var8 = var0.type;
                    var7 = _closure1_slot9;
                    var7 = var7.GROUP_DM;
                    if (!(var7 !== var8)) {
                        _fun67802_ip = 162;
                        continue _fun67802
                    }
                case 64:
                    var7 = _closure1_slot9;
                    var7 = var7.CHANNEL;
                    if (!(var7 !== var8)) {
                        _fun67802_ip = 162;
                        continue _fun67802
                    }
                case 78:
                    var7 = _closure1_slot9;
                    var7 = var7.USER;
                    if (!(var7 === var8)) {
                        _fun67802_ip = 195;
                        continue _fun67802
                    }
                case 92:
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 9;
                    var7 = var7[var2];
                    var2 = undefined;
                    var8 = var8.bind(var2)(var7);
                    var7 = var8.ensurePrivateChannel;
                    var2 = var0.user;
                    var2 = var2.id;
                    var8 = var7.bind(var8)(var2);
                    var7 = var8.then;
                    var2 = function(arg0) { // Environment: var1
                        _fun67803: for (var _fun67803_ip = 0;;) switch (_fun67803_ip) {
                            case 0:
                                var2 = _closure1_slot7;
                                var1 = var2.getChannel;
                                var0 = arg0;
                                var6 = var1.bind(var2)(var0);
                                var0 = null;
                                if (!(var0 != var6)) {
                                    _fun67803_ip = 71;
                                    continue _fun67803
                                }
                            case 26:
                                var5 = _closure3_slot0;
                                var4 = var5._sendInvite;
                                var1 = _closure3_slot1;
                                var10 = var1.inviteKey;
                                var9 = _closure3_slot3;
                                var8 = _closure3_slot4;
                                var7 = _closure3_slot2;
                                var12 = var5;
                                var11 = var6;
                                var0 = var12[var4](var11, var10, var9, var8, var7, var6);
                            case 71:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = function() { // Environment: var1
                        var3 = _closure3_slot2;
                        var2 = undefined;
                        var1 = null;
                        var0 = false;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var1 = var7.bind(var8)(var2, var1);
                    _fun67802_ip = 195;
                    continue _fun67802;
                case 162:
                    var2 = var5._sendInvite;
                    var13 = var0.channel;
                    var12 = var0.inviteKey;
                    var14 = var5;
                    var11 = var4;
                    var10 = var3;
                    var9 = var6;
                    var0 = var14[var2](var13, var12, var11, var10, var9, var8);
                case 195:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var14 = var4;
    var3 = new var14[var3](var13);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 11;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/InviteQueue.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.InvitePropertiesType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1372, 667, 3, 6550, 3947, 8425, 2]);