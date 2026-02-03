// uikit-native/GuildBadge.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function arg0() {
        _fun60429: for (var _fun60429_ip = 0;;) switch (_fun60429_ip) {
            case 0:
                var5 = arg0;
                var6 = var5.guild;
                var3 = var5.monocolored;
                var4 = undefined;
                if (!(var3 === var4)) {
                    _fun60429_ip = 22;
                    continue _fun60429
                }
            case 20:
                var3 = false;
            case 22:
                var7 = var5.size;
                if (!(var7 === var4)) {
                    _fun60429_ip = 50;
                    continue _fun60429
                }
            case 31:
                var0 = _closure1_slot9;
                var0 = var0.Sizes;
                var7 = var0.MEDIUM;
            case 50:
                var2 = {
                    'guild': 0,
                    'monocolored': 0,
                    'size': 0
                };
                var0 = null;
                var11 = var2;
                var10 = null;
                var1 = silentSetPrototypeOf(var11, var10);
                var11 = {};
                var10 = var5;
                var9 = var2;
                var5 = copyDataProperties(var11, var10, var9);
                var2 = _closure1_slot8;
                var6 = var2.bind(var4)(var6, var3);
                var2 = var0 == var6;
                if (var2) {
                    _fun60429_ip = 163;
                    continue _fun60429
                }
            case 103:
                var3 = _closure1_slot4;
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 8;
                var1 = var8[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var11 = var1;
                var10 = var5;
                var5 = copyDataProperties(var11, var10);
                var5 = 'size';
                var1[var5] = var7;
                var5 = 'source';
                var1[var5] = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 163:
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var1);
    var11 = 0;
    var8 = var6[var11];
    var1 = arg3;
    var0 = undefined;
    var1 = var1.bind(var0)(var8);
    var10 = 1;
    var1 = var6[var10];
    var1 = var5.bind(var0)(var1);
    var1 = var1.GuildFeatures;
    var _closure1_slot3 = var1;
    var9 = 2;
    var1 = var6[var9];
    var1 = var5.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot4 = var1;
    var8 = {};
    var8.PARTNERED = var11;
    var1 = 'PARTNERED';
    var8[var11] = var1;
    var8.VERIFIED = var10;
    var1 = 'VERIFIED';
    var8[var10] = var1;
    var8.PARTNERED_BLACK = var9;
    var1 = 'PARTNERED_BLACK';
    var8[var9] = var1;
    var10 = 3;
    var8.VERIFIED_BLACK = var10;
    var1 = 'VERIFIED_BLACK';
    var8[var10] = var1;
    var9 = 4;
    var8.NONE = var9;
    var1 = 'NONE';
    var8[var9] = var1;
    var _closure1_slot5 = var8;
    var1 = {};
    var11 = var8.VERIFIED;
    var10 = var6[var10];
    var10 = var7.bind(var0)(var10);
    var1[var11] = var10;
    var10 = var8.PARTNERED;
    var9 = var6[var9];
    var9 = var7.bind(var0)(var9);
    var1[var10] = var9;
    var10 = var8.VERIFIED_BLACK;
    var9 = 5;
    var9 = var6[var9];
    var9 = var7.bind(var0)(var9);
    var1[var10] = var9;
    var10 = var8.PARTNERED_BLACK;
    var9 = 6;
    var9 = var6[var9];
    var9 = var7.bind(var0)(var9);
    var1[var10] = var9;
    var9 = var8.NONE;
    var8 = null;
    var1[var9] = var8;
    var _closure1_slot6 = var1;
    var1 = function arg0, arg1() {
        _fun60430: for (var _fun60430_ip = 0;;) switch (_fun60430_ip) {
            case 0:
                var2 = arg0;
                var4 = arg1;
                var1 = null;
                var0 = var1 != var2;
                if (!var0) {
                    _fun60430_ip = 159;
                    continue _fun60430
                }
            case 18:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 7;
                var3 = var5[var3];
                var5 = undefined;
                var6 = var6.bind(var5)(var3);
                var3 = var6.isGuildRecord;
                var3 = var3.bind(var6)(var2);
                if (var3) {
                    _fun60430_ip = 140;
                    continue _fun60430
                }
            case 57:
                var3 = global;
                var8 = var3.Array;
                var7 = var8.isArray;
                var6 = var2.features;
                var6 = var7.bind(var8)(var6);
                if (var6) {
                    _fun60430_ip = 122;
                    continue _fun60430
                }
            case 84:
                var3 = var3.Boolean;
                var7 = var2.features;
                var6 = var1 == var7;
                var1 = undefined;
                if (var6) {
                    _fun60430_ip = 115;
                    continue _fun60430
                }
            case 105:
                var6 = var7.has;
                var1 = var6.bind(var7)(var4);
            case 115:
                var1 = var3.bind(var5)(var1);
                _fun60430_ip = 138;
                continue _fun60430;
            case 122:
                var5 = var2.features;
                var3 = var5.includes;
                var1 = var3.bind(var5)(var4);
            case 138:
                _fun60430_ip = 156;
                continue _fun60430;
            case 140:
                var3 = var2.features;
                var2 = var3.has;
                var1 = var2.bind(var3)(var4);
            case 156:
                var0 = var1;
            case 159:
                return var0;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function arg0, arg1() {
        _fun60431: for (var _fun60431_ip = 0;;) switch (_fun60431_ip) {
            case 0:
                var6 = arg0;
                var2 = arg1;
                var1 = _closure1_slot5;
                var1 = var1.NONE;
                var4 = _closure1_slot7;
                var3 = _closure1_slot3;
                var3 = var3.VERIFIED;
                var5 = undefined;
                var3 = var4.bind(var5)(var6, var3);
                if (var3) {
                    _fun60431_ip = 93;
                    continue _fun60431
                }
            case 44:
                var4 = _closure1_slot7;
                var3 = _closure1_slot3;
                var3 = var3.PARTNERED;
                var3 = var4.bind(var5)(var6, var3);
                if (!var3) {
                    _fun60431_ip = 117;
                    continue _fun60431
                }
            case 67:
                var4 = _closure1_slot5;
                if (var2) {
                    _fun60431_ip = 82;
                    continue _fun60431
                }
            case 74:
                var3 = var4.PARTNERED;
                _fun60431_ip = 88;
                continue _fun60431;
            case 82:
                var3 = var4.PARTNERED_BLACK;
            case 88:
                var1 = var3;
                _fun60431_ip = 117;
                continue _fun60431;
            case 93:
                var3 = _closure1_slot5;
                if (var2) {
                    _fun60431_ip = 108;
                    continue _fun60431
                }
            case 100:
                var2 = var3.VERIFIED;
                _fun60431_ip = 114;
                continue _fun60431;
            case 108:
                var2 = var3.VERIFIED_BLACK;
            case 114:
                var1 = var2;
            case 117:
                var0 = _closure1_slot6;
                var0 = var0[var1];
                return var0;
        }
    };
    var _closure1_slot8 = var1;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var4 = var4.Sizes;
    var3.Sizes = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/GuildBadge.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.getGuildBadgeSource = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 33, 7392, 7393, 7448, 7449, 1598, 4077, 2]);