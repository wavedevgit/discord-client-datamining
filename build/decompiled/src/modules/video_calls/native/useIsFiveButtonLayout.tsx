// modules/video_calls/native/useIsFiveButtonLayout.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/useIsFiveButtonLayout.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun63040: for (var _fun63040_ip = 0;;) switch (_fun63040_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var10 = 2;
                var0 = var5[var10];
                var7 = undefined;
                var9 = var4.bind(var7)(var0);
                var8 = var9.useStateFromStores;
                var0 = _closure1_slot3;
                var6 = new Array(1);
                var6[0] = var0;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot3;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var8.bind(var9)(var6, var0);
                var0 = 3;
                var0 = var5[var0];
                var4 = var4.bind(var7)(var0);
                var0 = var4.useIsConnectedToVoiceChannel;
                var0 = var0.bind(var4)(var9);
                var5 = null;
                var6 = var5 == var9;
                var4 = undefined;
                if (var6) {
                    _fun63040_ip = 101;
                    continue _fun63040
                }
            case 96:
                var4 = var9.guild_id;
            case 101:
                var6 = var5 != var4;
                var12 = null;
                if (!var6) {
                    _fun63040_ip = 113;
                    continue _fun63040
                }
            case 110:
                var12 = var4;
            case 113:
                var _closure2_slot1 = var12;
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 4;
                var4 = var8[var4];
                var8 = var6.bind(var7)(var4);
                var6 = var5 == var9;
                var4 = undefined;
                if (var6) {
                    _fun63040_ip = 151;
                    continue _fun63040
                }
            case 146:
                var4 = var9.guild_id;
            case 151:
                var11 = var5 != var4;
                var6 = null;
                if (!var11) {
                    _fun63040_ip = 163;
                    continue _fun63040
                }
            case 160:
                var6 = var4;
            case 163:
                var11 = var5 == var9;
                var4 = undefined;
                if (var11) {
                    _fun63040_ip = 177;
                    continue _fun63040
                }
            case 172:
                var4 = var9.id;
            case 177:
                var6 = var8.bind(var7)(var6, var4);
                var8 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var10];
                var11 = var8.bind(var7)(var4);
                var10 = var11.useStateFromStores;
                var4 = _closure1_slot4;
                var8 = new Array(1);
                var8[0] = var4;
                var4 = new Array(1);
                var4[0] = var12;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot4;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var10.bind(var11)(var8, var1, var4);
                var8 = var5 == var4;
                var1 = undefined;
                if (var8) {
                    _fun63040_ip = 252;
                    continue _fun63040
                }
            case 246:
                var1 = var4.afkChannelId;
            case 252:
                var4 = var5 == var9;
                var8 = undefined;
                if (var4) {
                    _fun63040_ip = 271;
                    continue _fun63040
                }
            case 261:
                var4 = var9.isGuildVoice;
                var8 = var4.bind(var9)();
            case 271:
                var4 = var5 != var8;
                if (!var4) {
                    _fun63040_ip = 281;
                    continue _fun63040
                }
            case 278:
                var4 = var8;
            case 281:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 5;
                var8 = var11[var8];
                var8 = var10.bind(var7)(var8);
                var10 = var5 == var9;
                var5 = undefined;
                if (var10) {
                    _fun63040_ip = 315;
                    continue _fun63040
                }
            case 310:
                var5 = var9.id;
            case 315:
                var5 = var8.bind(var7)(var5);
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var3 = 6;
                var3 = var9[var3];
                var3 = var8.bind(var7)(var3);
                var3 = var3.bind(var7)();
                if (!var0) {
                    _fun63040_ip = 350;
                    continue _fun63040
                }
            case 347:
                var0 = var6;
            case 350:
                if (!var0) {
                    _fun63040_ip = 362;
                    continue _fun63040
                }
            case 353:
                if (var4) {
                    _fun63040_ip = 359;
                    continue _fun63040
                }
            case 356:
                var4 = var5;
            case 359:
                var0 = var4;
            case 362:
                if (!var0) {
                    _fun63040_ip = 368;
                    continue _fun63040
                }
            case 365:
                var0 = !var3;
            case 368:
                if (!var0) {
                    _fun63040_ip = 378;
                    continue _fun63040
                }
            case 371:
                var1 = var1 === var2;
                var0 = !var1;
            case 378:
                return var0;
        }
    };
    var2.useIsFiveButtonLayout = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1410, 566, 7886, 7909, 7911, 6698, 2]);