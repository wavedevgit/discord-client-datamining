// modules/friend_suggestions/FriendSuggestionUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = 'modules/friend_suggestions/FriendSuggestionUtils.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function arg0, arg1() {
        _fun101407: for (var _fun101407_ip = 0;;) switch (_fun101407_ip) {
            case 0:
                var3 = arg0;
                var5 = arg1;
                var2 = null;
                var4 = var2 == var5;
                var1 = undefined;
                var0 = undefined;
                if (var4) {
                    _fun101407_ip = 25;
                    continue _fun101407
                }
            case 19:
                var0 = var5.contactNames;
            case 25:
                var4 = var2 != var0;
                var0 = undefined;
                if (!var4) {
                    _fun101407_ip = 123;
                    continue _fun101407
                }
            case 34:
                var6 = var2 == var5;
                var4 = undefined;
                if (var6) {
                    _fun101407_ip = 54;
                    continue _fun101407
                }
            case 43:
                var6 = var5.contactNames;
                var4 = var6.length;
            case 54:
                var8 = 2;
                var4 = var4 >= var8;
                var0 = undefined;
                if (!var4) {
                    _fun101407_ip = 123;
                    continue _fun101407
                }
            case 66:
                var6 = var2 == var5;
                var4 = undefined;
                if (var6) {
                    _fun101407_ip = 120;
                    continue _fun101407
                }
            case 75:
                var7 = var5.contactNames;
                var6 = var7.slice;
                var5 = 0;
                var7 = var6.bind(var7)(var5, var8);
                var6 = var7.join;
                var5 = ' ';
                var6 = var6.bind(var7)(var5);
                var5 = var6.trim;
                var4 = var5.bind(var6)();
            case 120:
                var0 = var4;
            case 123:
                if (!(var2 != var0)) {
                    _fun101407_ip = 183;
                    continue _fun101407
                }
            case 127:
                if (!(var2 == var3)) {
                    _fun101407_ip = 135;
                    continue _fun101407
                }
            case 131:
                if (!(var2 == var0)) {
                    _fun101407_ip = 187;
                    continue _fun101407
                }
            case 135:
                if (!(var2 != var3)) {
                    _fun101407_ip = 183;
                    continue _fun101407
                }
            case 139:
                if (!(var3 !== var0)) {
                    _fun101407_ip = 183;
                    continue _fun101407
                }
            case 143:
                var2 = var3.split;
                var5 = ' ';
                var2 = var2.bind(var3)(var5);
                var4 = 0;
                var3 = var2[var4];
                var2 = var0.split;
                var2 = var2.bind(var0)(var5);
                var2 = var2[var4];
                if (!(var3 === var2)) {
                    _fun101407_ip = 185;
                    continue _fun101407
                }
            case 183:
                return var1;
            case 185:
                return var0;
            case 187:
                return var0;
        }
    };
    var2.getSuggestedContactNameForSuggestion = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);