// modules/messages/native/renderer/transformReactions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 6;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/transformReactions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var3 = var1.reactions;
        var1 = var1.animateEmoji;
        var _closure2_slot0 = var1;
        var2 = var3.flatMap;
        var1 = function(arg0) { // Environment: var0
            _fun56020: for (var _fun56020_ip = 0;;) switch (_fun56020_ip) {
                case 0:
                    var3 = arg0;
                    var2 = var3.emoji;
                    var9 = null;
                    var1 = Object.create(var9);
                    var4 = 0;
                    var1.emoji = var4;
                    var16 = {};
                    var15 = var3;
                    var14 = var1;
                    var5 = copyDataProperties(var16, var15, var14);
                    var1 = var5.count_details;
                    var6 = var9 == var1;
                    var3 = undefined;
                    var0 = undefined;
                    if (var6) {
                        _fun56020_ip = 56;
                        continue _fun56020
                    }
                case 50:
                    var0 = var1.vote;
                case 56:
                    if (!(var9 == var0)) {
                        _fun56020_ip = 476;
                        continue _fun56020
                    }
                case 63:
                    var6 = _closure2_slot0;
                    if (!var6) {
                        _fun56020_ip = 79;
                        continue _fun56020
                    }
                case 73:
                    var6 = var2.animated;
                case 79:
                    var0 = var2.id;
                    if (!(var9 != var0)) {
                        _fun56020_ip = 147;
                        continue _fun56020
                    }
                case 88:
                    var1 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var0 = 1;
                    var0 = var7[var0];
                    var7 = var1.bind(var3)(var0);
                    var1 = var7.getEmojiURL;
                    var0 = {};
                    var8 = var2.id;
                    var0.id = var8;
                    var0.animated = var6;
                    var8 = 48;
                    var0.size = var8;
                    var8 = var1.bind(var7)(var0);
                    _fun56020_ip = 183;
                    continue _fun56020;
                case 147:
                    var1 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var0 = var0[var4];
                    var7 = var1.bind(var3)(var0);
                    var1 = var7.getURL;
                    var0 = var2.name;
                    var8 = var1.bind(var7)(var0);
                case 183:
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var0 = 2;
                    var0 = var10[var0];
                    var12 = var7.bind(var3)(var0);
                    var11 = var12.getAccessibleEmojiDisplayName;
                    var16 = var5.me;
                    var15 = var5.count;
                    var0 = var5.burst_count;
                    var13 = var0 > var4;
                    var17 = var12;
                    var14 = var2;
                    var7 = var17[var11](var16, var15, var14, var13, var12);
                    var0 = var2.id;
                    var0 = var9 == var0;
                    var9 = null;
                    if (var0) {
                        _fun56020_ip = 285;
                        continue _fun56020
                    }
                case 258:
                    var11 = var2.id;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var10 = var0.concat;
                    var0 = '';
                    var9 = var10.bind(var0)(var11);
                case 285:
                    var0 = {};
                    var16 = var0;
                    var15 = var5;
                    var5 = copyDataProperties(var16, var15);
                    var5 = {};
                    var16 = var5;
                    var15 = var2;
                    var2 = copyDataProperties(var16, var15);
                    var2 = 'id';
                    var5[var2] = var9;
                    var2 = 'src';
                    var5[var2] = var8;
                    var2 = 'displayName';
                    var5[var2] = var7;
                    var2 = 'animated';
                    var5[var2] = var6;
                    var2 = 'emoji';
                    var0[var2] = var5;
                    var2 = global;
                    var6 = var2.Array;
                    var5 = var6.isArray;
                    var2 = var0.burst_colors;
                    var2 = var5.bind(var6)(var2);
                    if (!var2) {
                        _fun56020_ip = 474;
                        continue _fun56020
                    }
                case 381:
                    var2 = var0.burst_colors;
                    var2 = var2.length;
                    if (!(var2 > var4)) {
                        _fun56020_ip = 474;
                        continue _fun56020
                    }
                case 396:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 3;
                    var1 = var6[var1];
                    var1 = var5.bind(var3)(var1);
                    var2 = var1.buildPlatformedThemedEmojiColorPalette;
                    var1 = {};
                    var4 = var0.burst_colors;
                    var1.colors = var4;
                    var4 = 4;
                    var4 = var6[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.isIOS;
                    var4 = var4.bind(var5)();
                    var1.shouldProcessMobileColors = var4;
                    var1 = var2.bind(var3)(var1);
                    var0.themedBurstColors = var1;
                case 474:
                    return var0;
                case 476:
                    var0 = new Array(0);
                    return var0;
            }
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            _fun56021: for (var _fun56021_ip = 0;;) switch (_fun56021_ip) {
                case 0:
                    var5 = arg0;
                    var3 = var5.burst_count;
                    var4 = null;
                    var2 = Object.create(var4);
                    var0 = 0;
                    var2.burst_count = var0;
                    var10 = {};
                    var9 = var5;
                    var8 = var2;
                    var1 = copyDataProperties(var10, var9, var8);
                    var2 = var3;
                    if (!(var4 === var2)) {
                        _fun56021_ip = 119;
                        continue _fun56021
                    }
                case 40:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 5;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.captureMessage;
                    var7 = {};
                    var7.burst_count = var3;
                    var10 = var7;
                    var9 = var1;
                    var3 = copyDataProperties(var10, var9);
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var6 = var3.concat;
                    var3 = 'Null burst_count while transforming reaction: ';
                    var3 = var6.bind(var3)(var7);
                    var3 = var4.bind(var5)(var3);
                    var2 = 0;
                case 119:
                    var0 = {};
                    var10 = var0;
                    var9 = var1;
                    var1 = copyDataProperties(var10, var9);
                    var1 = 'burst_count';
                    var0[var1] = var2;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3110, 1417, 3104, 6739, 478, 1207, 2]);