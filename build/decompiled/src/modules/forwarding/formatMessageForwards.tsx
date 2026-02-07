// modules/forwarding/formatMessageForwards.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1() {
        var6 = arg0;
        var5 = arg1;
        var0 = {};
        var1 = var6.name;
        var0.originLabel = var1;
        var3 = _closure1_slot1;
        var8 = _closure1_slot2;
        var2 = 8;
        var2 = var8[var2];
        var7 = undefined;
        var4 = var3.bind(var7)(var2);
        var3 = var4.getGuildIconURL;
        var2 = {};
        var9 = var6.id;
        var2.id = var9;
        var9 = 16;
        var2.size = var9;
        var9 = var6.icon;
        var2.icon = var9;
        var9 = false;
        var2.canAnimate = var9;
        var2 = var3.bind(var4)(var2);
        var0.originIconUrl = var2;
        var0.timestampLabel = var5;
        var2 = _closure1_slot0;
        var1 = 9;
        var3 = var8[var1];
        var3 = var2.bind(var7)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var8[var1];
        var1 = var2.bind(var7)(var1);
        var1 = var1.t;
        var2 = var1["+l04BN"];
        var1 = {};
        var6 = var6.name;
        var1.origin = var6;
        var1.timestamp = var5;
        var1 = var3.bind(var4)(var2, var1);
        var0.accessibilityLabel = var1;
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1() {
        var6 = arg0;
        var5 = arg1;
        var0 = {};
        var0.originLabel = var6;
        var0.timestampLabel = var5;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 9;
        var3 = var8[var1];
        var2 = undefined;
        var3 = var7.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var8[var1];
        var1 = var7.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1["+l04BN"];
        var1 = {};
        var1.origin = var6;
        var1.timestamp = var5;
        var1 = var3.bind(var4)(var2, var1);
        var0.accessibilityLabel = var1;
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function arg0, arg1, arg2() {
            var2 = this;
            var3 = _closure1_slot3;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = arg0;
            var2.parentMessage = var1;
            var1 = arg1;
            var2.messageSnapshot = var1;
            var1 = arg2;
            var2.snapshotIndex = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var4 = 'getForwardInfo';
        var0.key = var4;
        var1 = function() {
            _fun56003: for (var _fun56003_ip = 0;;) switch (_fun56003_ip) {
                case 0:
                    var10 = arguments[0];
                    var15 = arguments[1];
                    var14 = arguments[2];
                    var9 = arguments[3];
                    var7 = arguments[4];
                    var13 = arguments[5];
                    var0 = this;
                    var5 = undefined;
                    if (!(var10 === var5)) {
                        _fun56003_ip = 34;
                        continue _fun56003
                    }
                case 27:
                    var10 = _closure1_slot6;
                case 34:
                    if (!(var15 === var5)) {
                        _fun56003_ip = 45;
                        continue _fun56003
                    }
                case 38:
                    var15 = _closure1_slot10;
                case 45:
                    if (!(var14 === var5)) {
                        _fun56003_ip = 56;
                        continue _fun56003
                    }
                case 49:
                    var14 = _closure1_slot9;
                case 56:
                    if (!(var9 === var5)) {
                        _fun56003_ip = 67;
                        continue _fun56003
                    }
                case 60:
                    var9 = _closure1_slot8;
                case 67:
                    if (!(var7 === var5)) {
                        _fun56003_ip = 78;
                        continue _fun56003
                    }
                case 71:
                    var7 = _closure1_slot7;
                case 78:
                    if (!(var13 === var5)) {
                        _fun56003_ip = 89;
                        continue _fun56003
                    }
                case 82:
                    var13 = _closure1_slot5;
                case 89:
                    var2 = var0.snapshotIndex;
                    var6 = var0.parentMessage;
                    var3 = var0.messageSnapshot;
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var4 = 10;
                    var4 = var11[var4];
                    var8 = var8.bind(var5)(var4);
                    var4 = var8.calendarFormatCompact;
                    var3 = var3.message;
                    var3 = var3.timestamp;
                    var4 = var4.bind(var8)(var3);
                    var3 = var10.getChannel;
                    var0 = var0.parentMessage;
                    var0 = var0.channel_id;
                    var3 = var3.bind(var10)(var0);
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun56003_ip = 208;
                        continue _fun56003
                    }
                case 179:
                    var11 = var3.guild_id;
                    var12 = var6.messageReference;
                    var16 = var0 == var12;
                    var8 = undefined;
                    if (var16) {
                        _fun56003_ip = 204;
                        continue _fun56003
                    }
                case 199:
                    var8 = var12.guild_id;
                case 204:
                    if (!(var11 !== var8)) {
                        _fun56003_ip = 305;
                        continue _fun56003
                    }
                case 208:
                    var8 = var6.messageReference;
                    var12 = var0 == var8;
                    var11 = undefined;
                    if (var12) {
                        _fun56003_ip = 228;
                        continue _fun56003
                    }
                case 223:
                    var11 = var8.guild_id;
                case 228:
                    if (!(var0 != var11)) {
                        _fun56003_ip = 296;
                        continue _fun56003
                    }
                case 232:
                    var8 = var7.getGuild;
                    var12 = var8.bind(var7)(var11);
                    if (!(var0 == var12)) {
                        _fun56003_ip = 256;
                        continue _fun56003
                    }
                case 246:
                    var8 = var13.getGuild;
                    var12 = var8.bind(var13)(var11);
                case 256:
                    if (!(var0 != var12)) {
                        _fun56003_ip = 284;
                        continue _fun56003
                    }
                case 260:
                    var8 = {};
                    var8.snapshotIndex = var2;
                    var11 = _closure1_slot12;
                    var11 = var11.bind(var5)(var12, var4);
                    var8.footerInfo = var11;
                    _fun56003_ip = 294;
                    continue _fun56003;
                case 284:
                    var11 = {};
                    var11.snapshotIndex = var2;
                    var8 = var11;
                case 294:
                    return var8;
                case 296:
                    var8 = {};
                    var8.snapshotIndex = var2;
                    return var8;
                case 305:
                    var8 = var10.getChannel;
                    var11 = var6.messageReference;
                    var12 = var0 == var11;
                    var6 = undefined;
                    if (var12) {
                        _fun56003_ip = 330;
                        continue _fun56003
                    }
                case 325:
                    var6 = var11.channel_id;
                case 330:
                    var13 = var8.bind(var10)(var6);
                    if (!(var0 != var13)) {
                        _fun56003_ip = 440;
                        continue _fun56003
                    }
                case 339:
                    var8 = var9.can;
                    var6 = var13.accessPermissions;
                    var6 = var8.bind(var9)(var6, var13);
                    if (var6) {
                        _fun56003_ip = 369;
                        continue _fun56003
                    }
                case 360:
                    var6 = {};
                    var6.snapshotIndex = var2;
                    _fun56003_ip = 438;
                    continue _fun56003;
                case 369:
                    var8 = {};
                    var8.snapshotIndex = var2;
                    var10 = _closure1_slot13;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var9 = 11;
                    var9 = var12[var9];
                    var12 = var11.bind(var5)(var9);
                    var11 = var12.computeChannelName;
                    var17 = true;
                    var21 = var12;
                    var20 = var13;
                    var19 = var15;
                    var18 = var14;
                    var9 = var21[var11](var20, var19, var18, var17, var16);
                    var9 = var10.bind(var5)(var9, var4);
                    var8.footerInfo = var9;
                    var6 = var8;
                case 438:
                    return var6;
                case 440:
                    var6 = var7.getGuild;
                    var3 = var3.guild_id;
                    var3 = var6.bind(var7)(var3);
                    if (!(var0 != var3)) {
                        _fun56003_ip = 483;
                        continue _fun56003
                    }
                case 459:
                    var0 = {};
                    var0.snapshotIndex = var2;
                    var1 = _closure1_slot12;
                    var1 = var1.bind(var5)(var3, var4);
                    var0.footerInfo = var1;
                    _fun56003_ip = 493;
                    continue _fun56003;
                case 483:
                    var1 = {};
                    var1.snapshotIndex = var2;
                    var0 = var1;
                case 493:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot11 = var3;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forwarding/formatMessageForwards.tsx';
    var4 = var5.bind(var6)(var4);
    var2.MessageForward = var3;
    var1 = function arg0() {
        _fun56004: for (var _fun56004_ip = 0;;) switch (_fun56004_ip) {
            case 0:
                var4 = arg0;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var2 = var2.bind(var1)(var4);
                if (!var2) {
                    _fun56004_ip = 54;
                    continue _fun56004
                }
            case 36:
                var2 = var4.messageSnapshots;
                var3 = 0;
                var2 = var2[var3];
                var5 = null;
                if (!(var5 == var2)) {
                    _fun56004_ip = 56;
                    continue _fun56004
                }
            case 54:
                return var1;
            case 56:
                var0 = _closure1_slot11;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var9 = var1;
                var8 = var4;
                var7 = var2;
                var6 = 0;
                var0 = new var9[var0](var8, var7, var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var2.maybeCreateSingleForwardForMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 6737, 1372, 1410, 3093, 3102, 1621, 1417, 1234, 3134, 4794, 4282, 2]);