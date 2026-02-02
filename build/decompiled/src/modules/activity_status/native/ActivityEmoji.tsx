// modules/activity_status/native/ActivityEmoji.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexShrink': 0,
        'width': '100%',
        'height': '100%'
    };
    var3.emoji = var8;
    var8 = {
        'textAlign': 'center',
        'fontFamily': 'System'
    };
    var3.text = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activity_status/native/ActivityEmoji.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun61981: for (var _fun61981_ip = 0;;) switch (_fun61981_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.emoji;
                var _closure2_slot0 = var8;
                var10 = var1.size;
                var6 = var1.style;
                var3 = var1.withPlaceholder;
                var5 = undefined;
                if (!(var3 === var5)) {
                    _fun61981_ip = 39;
                    continue _fun61981
                }
            case 37:
                var3 = false;
            case 39:
                var11 = var1.animate;
                if (!(var11 === var5)) {
                    _fun61981_ip = 51;
                    continue _fun61981
                }
            case 49:
                var11 = true;
            case 51:
                var _closure2_slot1 = var5;
                var1 = _closure1_slot5;
                var7 = var1.bind(var5)();
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 3;
                var1 = var9[var1];
                var1 = var4.bind(var5)(var1);
                var4 = var1.AnimateEmoji;
                var1 = var4.useSetting;
                var12 = var1.bind(var4)();
                var1 = global;
                var9 = var1.Boolean;
                var1 = null;
                var13 = var1 == var8;
                var4 = undefined;
                if (var13) {
                    _fun61981_ip = 127;
                    continue _fun61981
                }
            case 121:
                var4 = var8.animated;
            case 127:
                if (!var4) {
                    _fun61981_ip = 133;
                    continue _fun61981
                }
            case 130:
                var4 = var12;
            case 133:
                if (!var4) {
                    _fun61981_ip = 139;
                    continue _fun61981
                }
            case 136:
                var4 = var11;
            case 139:
                var12 = var9.bind(var5)(var4);
                _closure2_slot1 = var12;
                var11 = _closure1_slot3;
                var9 = var11.useMemo;
                var4 = var1 == var8;
                var13 = undefined;
                if (var4) {
                    _fun61981_ip = 171;
                    continue _fun61981
                }
            case 166:
                var13 = var8.id;
            case 171:
                var4 = new Array(2);
                var4[0] = var13;
                var4[1] = var12;
                var0 = function() { // Environment: var0
                    _fun61982: for (var _fun61982_ip = 0;;) switch (_fun61982_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = null;
                            var4 = var1 == var0;
                            var2 = undefined;
                            var0 = undefined;
                            if (var4) {
                                _fun61982_ip = 29;
                                continue _fun61982
                            }
                        case 20:
                            var4 = _closure2_slot0;
                            var0 = var4.id;
                        case 29:
                            if (!(var1 == var0)) {
                                _fun61982_ip = 35;
                                continue _fun61982
                            }
                        case 33:
                            return var2;
                        case 35:
                            var1 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 4;
                            var0 = var4[var0];
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.getEmojiURL;
                            var0 = {};
                            var4 = _closure2_slot0;
                            var4 = var4.id;
                            var0.id = var4;
                            var4 = 48;
                            var0.size = var4;
                            var3 = _closure2_slot1;
                            var0.animated = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var9 = var9.bind(var11)(var0, var4);
                if (!(var1 == var8)) {
                    _fun61981_ip = 206;
                    continue _fun61981
                }
            case 198:
                var0 = null;
                if (!var3) {
                    _fun61981_ip = 397;
                    continue _fun61981
                }
            case 206:
                if (!(var1 != var8)) {
                    _fun61981_ip = 344;
                    continue _fun61981
                }
            case 213:
                var4 = _closure1_slot4;
                var3 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 6;
                var1 = var11[var1];
                var3 = var3.bind(var5)(var1);
                var1 = {};
                var1.src = var9;
                var8 = var8.name;
                var1.name = var8;
                var8 = new Array(2);
                var8[0] = var6;
                var9 = {};
                var9.width = var10;
                var9.height = var10;
                var8[1] = var9;
                var1.style = var8;
                var9 = var7.emoji;
                var8 = new Array(3);
                var8[0] = var9;
                var9 = var7.text;
                var8[1] = var9;
                var9 = {};
                var9.fontSize = var10;
                var8[2] = var9;
                var1.textEmojiStyle = var8;
                var7 = var7.emoji;
                var1.fastImageStyle = var7;
                var7 = true;
                var1.adjustsFontSizeToFit = var7;
                var1 = var4.bind(var5)(var3, var1);
                _fun61981_ip = 394;
                continue _fun61981;
            case 344:
                var4 = _closure1_slot4;
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 5;
                var2 = var7[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.ReactionIcon;
                var2 = {};
                var2.style = var6;
                var6 = 'sm';
                var2.size = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 394:
                var0 = var1;
            case 397:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 1348, 1417, 7640, 5733, 2]);