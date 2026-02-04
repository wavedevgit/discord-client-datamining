// modules/guild_profile/native/components/GuildProfileTraits.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun59949: for (var _fun59949_ip = 0;;) switch (_fun59949_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.emoji;
                var0 = _closure1_slot7;
                var4 = undefined;
                var5 = var0.bind(var4)();
                var0 = null;
                if (!(var0 != var2)) {
                    _fun59949_ip = 205;
                    continue _fun59949
                }
            case 31:
                var3 = var2.id;
                var3 = var0 != var3;
                var7 = undefined;
                if (!var3) {
                    _fun59949_ip = 105;
                    continue _fun59949
                }
            case 45:
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 5;
                var3 = var8[var3];
                var8 = var6.bind(var4)(var3);
                var6 = var8.getEmojiURL;
                var3 = {};
                var9 = var2.id;
                var3.id = var9;
                var9 = var2.animated;
                var3.animated = var9;
                var9 = 16;
                var3.size = var9;
                var7 = var6.bind(var8)(var3);
            case 105:
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 6;
                var3 = var8[var3];
                var6 = var6.bind(var4)(var3);
                var3 = var6.isCustomEmoji;
                var3 = var3.bind(var6)(var2);
                if (var3) {
                    _fun59949_ip = 146;
                    continue _fun59949
                }
            case 139:
                var6 = var2.surrogates;
                _fun59949_ip = 151;
                continue _fun59949;
            case 146:
                var6 = var2.name;
            case 151:
                var3 = _closure1_slot5;
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 7;
                var1 = var8[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.src = var7;
                var1.name = var6;
                var5 = var5.emojiImage;
                var1.fastImageStyle = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 205:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var8 = var0.trait;
        var0 = _closure1_slot7;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var4.trait;
        var0.style = var4;
        var7 = _closure1_slot5;
        var6 = _closure1_slot8;
        var4 = {};
        var9 = var8.emoji;
        var4.emoji = var9;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot5;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var5 = 8;
        var5 = var9[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var8 = var8.label;
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot9 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'flexWrap': 'wrap',
        'gap': 8
    };
    var3.container = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'gap': 4,
        'alignItems': 'center',
        'paddingHorizontal': 8,
        'paddingVertical': 4,
        'borderRadius': null,
        'borderWidth': 1,
        'borderStyle': 'solid'
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var8.borderRadius = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BORDER_SUBTLE;
    var8.borderColor = var9;
    var3.trait = var8;
    var8 = {
        'width': 16,
        'height': 16
    };
    var3.emojiImage = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_profile/native/components/GuildProfileTraits.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var1 = var0.profile;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot7;
        var3 = undefined;
        var5 = var2.bind(var3)();
        var7 = _closure1_slot3;
        var6 = var7.useMemo;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var4
            var1 = _closure2_slot0;
            var3 = var1.traits;
            var2 = var3.map;
            var1 = function(arg0, arg1) { // Environment: var0
                var0 = {};
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = 'trait-';
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                var0.key = var1;
                var4 = arg0;
                var5 = var0;
                var1 = copyDataProperties(var5, var4);
                return var0;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.label;
                var1 = var0.length;
                var0 = 0;
                var0 = var1 > var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var6 = var6.bind(var7)(var1, var2);
        var2 = _closure1_slot5;
        var1 = _closure1_slot4;
        var0 = {};
        var5 = var5.container;
        var0.style = var5;
        var5 = var6.map;
        var4 = function(arg0) { // Environment: var4
            var0 = arg0;
            var4 = _closure1_slot5;
            var3 = _closure1_slot9;
            var2 = {};
            var2.trait = var0;
            var1 = var0.key;
            var0 = undefined;
            var0 = var4.bind(var0)(var3, var2, var1);
            return var0;
        };
        var4 = var5.bind(var6)(var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 1417, 3108, 5769, 3941, 2]);