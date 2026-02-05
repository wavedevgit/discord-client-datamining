// modules/guild_sidebar/useShowConnectedUserLimit.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var6;
    var0 = function arg0() {
        _fun89844: for (var _fun89844_ip = 0;;) switch (_fun89844_ip) {
            case 0:
                var3 = arg0;
                var2 = arguments[1];
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun89844_ip = 18;
                    continue _fun89844
                }
            case 12:
                var2 = 1000;
            case 18:
                if (!(!(var3 >= var2))) {
                    _fun89844_ip = 58;
                    continue _fun89844
                }
            case 22:
                var1 = var3.toFixed;
                var0 = 0;
                var5 = var1.bind(var3)(var0);
                var4 = var5.padStart;
                var1 = 2;
                var0 = '0';
                var0 = var4.bind(var5)(var1, var0);
                _fun89844_ip = 124;
                continue _fun89844;
            case 58:
                var1 = global;
                var6 = var1.Math;
                var5 = var6.floor;
                var4 = var3 / var2;
                var5 = var5.bind(var6)(var4);
                var6 = var3 % var2;
                var4 = '';
                var2 = 0;
                var3 = var4;
                if (!(var6 != var2)) {
                    _fun89844_ip = 102;
                    continue _fun89844
                }
            case 98:
                var3 = '+';
            case 102:
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'k';
                var0 = var2.bind(var4)(var5, var1, var3);
            case 124:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var3 = function arg0() {
        _fun89845: for (var _fun89845_ip = 0;;) switch (_fun89845_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channel;
                var4 = var0.video;
                var3 = var0.considerMaxStageVoiceUserLimit;
                var5 = undefined;
                if (!(var3 === var5)) {
                    _fun89845_ip = 30;
                    continue _fun89845
                }
            case 28:
                var3 = true;
            case 30:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 1;
                var0 = var7[var0];
                var0 = var6.bind(var5)(var0);
                var0 = var0.bind(var5)(var1);
                var8 = var0.limit;
                var5 = var1.userLimit;
                var0 = 0;
                var5 = var5 > var0;
                var7 = -1;
                if (!var5) {
                    _fun89845_ip = 90;
                    continue _fun89845
                }
            case 84:
                var7 = var1.userLimit;
            case 90:
                if (!var4) {
                    _fun89845_ip = 97;
                    continue _fun89845
                }
            case 93:
                var4 = var8 > var0;
            case 97:
                var1 = var7;
                if (!var4) {
                    _fun89845_ip = 132;
                    continue _fun89845
                }
            case 103:
                var4 = var8;
                if (!(var7 > var0)) {
                    _fun89845_ip = 129;
                    continue _fun89845
                }
            case 110:
                var5 = global;
                var6 = var5.Math;
                var5 = var6.min;
                var4 = var5.bind(var6)(var7, var8);
            case 129:
                var1 = var4;
            case 132:
                if (!var3) {
                    _fun89845_ip = 145;
                    continue _fun89845
                }
            case 135:
                var2 = _closure1_slot2;
                var0 = 0;
                if (!(var1 !== var2)) {
                    _fun89845_ip = 148;
                    continue _fun89845
                }
            case 145:
                var0 = var1;
            case 148:
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var4 = var4.MAX_STAGE_VOICE_USER_LIMIT;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_sidebar/useShowConnectedUserLimit.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        _fun89846: for (var _fun89846_ip = 0;;) switch (_fun89846_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.channel;
                var2 = var1.locked;
                var0 = var1.video;
                var1 = var1.selected;
                var4 = _closure1_slot4;
                var3 = {};
                var3.channel = var5;
                var3.video = var0;
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                var0 = 0;
                var0 = var3 > var0;
                if (!var0) {
                    _fun89846_ip = 63;
                    continue _fun89846
                }
            case 60:
                var0 = !var2;
            case 63:
                if (!var0) {
                    _fun89846_ip = 69;
                    continue _fun89846
                }
            case 66:
                var0 = !var1;
            case 69:
                return var0;
        }
    };
    var2.default = var4;
    var2.useConnectedUserLimit = var3;
    var1 = function arg0() {
        _fun89847: for (var _fun89847_ip = 0;;) switch (_fun89847_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.channel;
                var3 = var0.video;
                var5 = var0.userCount;
                var1 = _closure1_slot4;
                var0 = {};
                var0.channel = var4;
                var0.video = var3;
                var4 = undefined;
                var3 = var1.bind(var4)(var0);
                var0 = 0;
                var6 = var3 <= var0;
                var1 = null;
                var0 = null;
                if (var6) {
                    _fun89847_ip = 118;
                    continue _fun89847
                }
            case 58:
                if (!(var1 == var5)) {
                    _fun89847_ip = 73;
                    continue _fun89847
                }
            case 62:
                var1 = _closure1_slot3;
                var1 = var1.bind(var4)(var3);
                _fun89847_ip = 115;
                continue _fun89847;
            case 73:
                var2 = _closure1_slot3;
                var6 = var2.bind(var4)(var5);
                var5 = var2.bind(var4)(var3);
                var2 = global;
                var2 = var2.HermesInternal;
                var4 = var2.concat;
                var3 = '';
                var2 = '/';
                var1 = var4.bind(var3)(var6, var2, var5);
            case 115:
                var0 = var1;
            case 118:
                return var0;
        }
    };
    var2.useConnectedUserLimitFormatted = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 8229, 2]);