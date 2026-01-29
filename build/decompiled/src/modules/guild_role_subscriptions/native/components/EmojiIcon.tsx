// modules/guild_role_subscriptions/native/components/EmojiIcon.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/EmojiIcon.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: EmojiIcon, environment: var1
        _fun84196: for (var _fun84196_ip = 0;;) switch (_fun84196_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.guildId;
                var4 = var0.id;
                var9 = var0.size;
                var5 = undefined;
                if (!(var9 === var5)) {
                    _fun84196_ip = 27;
                    continue _fun84196
                }
            case 24:
                var9 = 20;
            case 27:
                var3 = var0.useFallbackIcon;
                if (!(var3 === var5)) {
                    _fun84196_ip = 41;
                    continue _fun84196
                }
            case 39:
                var3 = true;
            case 41:
                var11 = var0.fontSize;
                var8 = var0.lineHeight;
                if (!(var8 === var5)) {
                    _fun84196_ip = 64;
                    continue _fun84196
                }
            case 57:
                var1 = 4;
                var8 = var9 + var1;
            case 64:
                var7 = var0.style;
                var1 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 2;
                var0 = var10[var0];
                var1 = var1.bind(var5)(var0);
                var0 = var1.useEmojiByIdOrName;
                var12 = var0.bind(var1)(var6, var4);
                var1 = null;
                if (!(var1 != var12)) {
                    _fun84196_ip = 319;
                    continue _fun84196
                }
            case 113:
                var6 = _closure1_slot3;
                var4 = _closure1_slot1;
                var10 = _closure1_slot2;
                var0 = 5;
                var0 = var10[var0];
                var4 = var4.bind(var5)(var0);
                var0 = {};
                var0.style = var7;
                var7 = {};
                var7.width = var9;
                var7.height = var9;
                var0.fastImageStyle = var7;
                var7 = {};
                var10 = var9;
                if (!(var1 != var11)) {
                    _fun84196_ip = 170;
                    continue _fun84196
                }
            case 167:
                var10 = var11;
            case 170:
                var7.fontSize = var10;
                var7.lineHeight = var8;
                var0.textEmojiStyle = var7;
                var7 = var12.id;
                if (!(var1 == var7)) {
                    _fun84196_ip = 224;
                    continue _fun84196
                }
            case 194:
                var8 = var12.surrogates;
                if (!(var1 == var8)) {
                    _fun84196_ip = 208;
                    continue _fun84196
                }
            case 203:
                var8 = var12.name;
            case 208:
                var10 = var1 != var8;
                var7 = '';
                if (!var10) {
                    _fun84196_ip = 222;
                    continue _fun84196
                }
            case 219:
                var7 = var8;
            case 222:
                _fun84196_ip = 229;
                continue _fun84196;
            case 224:
                var7 = var12.name;
            case 229:
                var0.name = var7;
                var7 = var12.id;
                if (!(var1 == var7)) {
                    _fun84196_ip = 249;
                    continue _fun84196
                }
            case 242:
                var7 = var12.url;
                _fun84196_ip = 306;
                continue _fun84196;
            case 249:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 6;
                var8 = var11[var8];
                var11 = var10.bind(var5)(var8);
                var10 = var11.getEmojiURL;
                var8 = {};
                var13 = var12.id;
                var8.id = var13;
                var12 = var12.animated;
                var8.animated = var12;
                var8.size = var9;
                var7 = var10.bind(var11)(var8);
            case 306:
                var0.src = var7;
                var0 = var6.bind(var5)(var4, var0);
                _fun84196_ip = 397;
                continue _fun84196;
            case 319:
                var1 = null;
                if (!var3) {
                    _fun84196_ip = 394;
                    continue _fun84196
                }
            case 324:
                var4 = _closure1_slot3;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 3;
                var2 = var8[var2];
                var3 = var7.bind(var5)(var2);
                var2 = {};
                var6 = 'contain';
                var2.resizeMode = var6;
                var6 = {};
                var6.width = var9;
                var6.height = var9;
                var2.style = var6;
                var6 = 4;
                var6 = var8[var6];
                var6 = var7.bind(var5)(var6);
                var2.source = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 394:
                var0 = var1;
            case 397:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 10731, 4660, 9243, 5727, 1417, 2]);