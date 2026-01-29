// modules/launchpad/native/shared/renderChannelBadge.tsx
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
    var3 = 'modules/launchpad/native/shared/renderChannelBadge.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: renderChannelBadge, environment: var1
        _fun110471: for (var _fun110471_ip = 0;;) switch (_fun110471_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.newChannel;
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun110471_ip = 17;
                    continue _fun110471
                }
            case 15:
                var0 = false;
            case 17:
                var6 = var1.mentionCount;
                if (!(var6 === var4)) {
                    _fun110471_ip = 29;
                    continue _fun110471
                }
            case 27:
                var6 = 0;
            case 29:
                var5 = var1.isMentionLowImportance;
                var7 = var1.postsWithUnreadsCount;
                var14 = var1.newPostCount;
                var8 = var1.eventsMentionCount;
                var13 = var1.locale;
                var2 = null;
                if (!(var2 != var6)) {
                    _fun110471_ip = 74;
                    continue _fun110471
                }
            case 65:
                var1 = 0;
                if (!(!(var6 > var1))) {
                    _fun110471_ip = 406;
                    continue _fun110471
                }
            case 74:
                if (var0) {
                    _fun110471_ip = 369;
                    continue _fun110471
                }
            case 80:
                if (!(var2 != var14)) {
                    _fun110471_ip = 93;
                    continue _fun110471
                }
            case 84:
                var0 = 0;
                if (!(!(var14 > var0))) {
                    _fun110471_ip = 232;
                    continue _fun110471
                }
            case 93:
                if (!(var2 != var7)) {
                    _fun110471_ip = 103;
                    continue _fun110471
                }
            case 97:
                var0 = 0;
                if (!(!(var7 > var0))) {
                    _fun110471_ip = 171;
                    continue _fun110471
                }
            case 103:
                var1 = var2 != var8;
                var0 = null;
                if (!var1) {
                    _fun110471_ip = 169;
                    continue _fun110471
                }
            case 112:
                var1 = 0;
                var1 = var8 > var1;
                var0 = null;
                if (!var1) {
                    _fun110471_ip = 169;
                    continue _fun110471
                }
            case 123:
                var3 = _closure1_slot3;
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 2;
                var1 = var9[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.value = var8;
                var8 = true;
                var1.eventsMentionBadge = var8;
                var0 = var3.bind(var4)(var2, var1);
            case 169:
                _fun110471_ip = 227;
                continue _fun110471;
            case 171:
                var3 = _closure1_slot3;
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 4;
                var1 = var8[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {
                    'variant': 'text-xs/bold',
                    'color': 'text-muted'
                };
                var1.children = var7;
                var0 = var3.bind(var4)(var2, var1);
            case 227:
                _fun110471_ip = 367;
                continue _fun110471;
            case 232:
                var3 = _closure1_slot3;
                var12 = _closure1_slot0;
                var15 = _closure1_slot2;
                var1 = 4;
                var1 = var15[var1];
                var1 = var12.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {
                    'variant': 'text-xs/bold',
                    'color': 'text-brand'
                };
                var7 = 5;
                var8 = var15[var7];
                var8 = var12.bind(var4)(var8);
                var10 = var8.intl;
                var9 = var10.format;
                var7 = var15[var7];
                var7 = var12.bind(var4)(var7);
                var7 = var7.t;
                var8 = var7.GkAbqY;
                var7 = {};
                var11 = 6;
                var11 = var15[var11];
                var12 = var12.bind(var4)(var11);
                var11 = var12.humanizeValue;
                var11 = var11.bind(var12)(var14, var13);
                var7.count = var11;
                var7 = var9.bind(var10)(var8, var7);
                var1.children = var7;
                var0 = var3.bind(var4)(var2, var1);
            case 367:
                _fun110471_ip = 404;
                continue _fun110471;
            case 369:
                var3 = _closure1_slot3;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 3;
                var1 = var7[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var0 = var3.bind(var4)(var2, var1);
            case 404:
                _fun110471_ip = 450;
                continue _fun110471;
            case 406:
                var3 = _closure1_slot3;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 2;
                var1 = var7[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.value = var6;
                var1.isMentionLowImportance = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 450:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 8586, 11668, 3895, 1234, 1604, 2]);