// modules/chat/native/SlowModeIndicator.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot6 = var7;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'alignItems': 'center',
        'flexDirection': 'row'
    };
    var3.container = var9;
    var9 = {};
    var10 = 5;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_4;
    var9.marginLeft = var10;
    var3.icon = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot8 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        var1 = arg0;
        var2 = var1.channelId;
        var _closure2_slot0 = var2;
        var10 = var1.hasTypingText;
        var _closure2_slot1 = var10;
        var1 = var1.slowmodeType;
        var _closure2_slot2 = var1;
        var1 = _closure1_slot8;
        var3 = undefined;
        var8 = var1.bind(var3)();
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 6;
        var1 = var9[var1];
        var7 = var6.bind(var3)(var1);
        var5 = var7.useStateFromStores;
        var1 = _closure1_slot5;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var3 = _closure1_slot5;
            var2 = var3.getSlowmodeCooldownGuess;
            var1 = _closure2_slot0;
            var0 = _closure2_slot2;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var7 = var5.bind(var7)(var2, var1);
        var _closure2_slot3 = var7;
        var5 = _closure1_slot3;
        var2 = var5.useMemo;
        var1 = new Array(2);
        var1[0] = var10;
        var1[1] = var7;
        var0 = function() { // Environment: var0
            _fun90208: for (var _fun90208_ip = 0;;) switch (_fun90208_ip) {
                case 0:
                    var9 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var0 = 7;
                    var0 = var7[var0];
                    var10 = undefined;
                    var3 = var9.bind(var10)(var0);
                    var1 = var3.duration;
                    var8 = _closure2_slot3;
                    var3 = var1.bind(var3)(var8);
                    var1 = var3.minutes;
                    var5 = var1.bind(var3)();
                    var1 = global;
                    var4 = var1.HermesInternal;
                    var4 = var4.concat;
                    var6 = '';
                    var5 = var4.bind(var6)(var5);
                    var4 = var5.padStart;
                    var13 = 2;
                    var12 = '0';
                    var5 = var4.bind(var5)(var13, var12);
                    var4 = var3.seconds;
                    var11 = var4.bind(var3)();
                    var4 = var1.HermesInternal;
                    var4 = var4.concat;
                    var11 = var4.bind(var6)(var11);
                    var4 = var11.padStart;
                    var4 = var4.bind(var11)(var13, var12);
                    var11 = 8;
                    var7 = var7[var11];
                    var7 = var9.bind(var10)(var7);
                    var7 = var7.Millis;
                    var7 = var7.HOUR;
                    if (!(!(var8 >= var7))) {
                        _fun90208_ip = 337;
                        continue _fun90208
                    }
                case 164:
                    var8 = _closure2_slot3;
                    var9 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var11];
                    var7 = var9.bind(var10)(var7);
                    var7 = var7.Millis;
                    var7 = var7.MINUTE;
                    if (!(!(var8 >= var7))) {
                        _fun90208_ip = 303;
                        continue _fun90208
                    }
                case 201:
                    var8 = _closure2_slot3;
                    var7 = 0;
                    if (!(!(var8 > var7))) {
                        _fun90208_ip = 279;
                        continue _fun90208
                    }
                case 211:
                    var7 = _closure2_slot1;
                    var0 = null;
                    if (var7) {
                        _fun90208_ip = 277;
                        continue _fun90208
                    }
                case 220:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var2 = 9;
                    var7 = var11[var2];
                    var7 = var9.bind(var10)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var2 = var11[var2];
                    var2 = var9.bind(var10)(var2);
                    var2 = var2.t;
                    var2 = var2.Icu3bf;
                    var0 = var7.bind(var8)(var2);
                case 277:
                    _fun90208_ip = 301;
                    continue _fun90208;
                case 279:
                    var2 = var1.HermesInternal;
                    var7 = var2.concat;
                    var2 = '0:';
                    var0 = var7.bind(var2)(var4);
                case 301:
                    _fun90208_ip = 335;
                    continue _fun90208;
                case 303:
                    var2 = var3.minutes;
                    var8 = var2.bind(var3)();
                    var2 = var1.HermesInternal;
                    var7 = var2.concat;
                    var2 = ':';
                    var0 = var7.bind(var6)(var8, var2, var4);
                case 335:
                    _fun90208_ip = 381;
                    continue _fun90208;
                case 337:
                    var2 = var3.hours;
                    var18 = var2.bind(var3)();
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = ':';
                    var19 = var6;
                    var17 = var1;
                    var16 = var5;
                    var15 = var1;
                    var14 = var4;
                    var0 = var19[var2](var18, var17, var16, var15, var14, var13);
                case 381:
                    return var0;
            }
        };
        var10 = var2.bind(var5)(var0, var1);
        var2 = _closure1_slot7;
        var1 = _closure1_slot4;
        var0 = {};
        var5 = var8.container;
        var0.style = var5;
        var7 = _closure1_slot6;
        var4 = 10;
        var4 = var9[var4];
        var4 = var6.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {
            'lineClamp': 1,
            'allowFontScaling': false,
            'variant': 'text-xs/medium',
            'color': 'interactive-text-default'
        };
        var4.children = var10;
        var5 = var7.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = 11;
        var5 = var9[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.TimerIcon;
        var5 = {};
        var8 = var8.icon;
        var5.style = var8;
        var8 = 'xxs';
        var5.size = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat/native/SlowModeIndicator.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 6602, 33, 1297, 671, 566, 3047, 667, 1234, 3942, 7923, 2]);