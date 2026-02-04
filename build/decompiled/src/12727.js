// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun97222: for (var _fun97222_ip = 0;;) switch (_fun97222_ip) {
        case 0:
            var3 = global;
            var1 = dependencyMap;
            var0 = 0;
            var2 = var1[var0];
            var1 = require;
            var0 = undefined;
            var4 = var1.bind(var0)(var2);
            if (!var4) {
                _fun97222_ip = 50;
                continue _fun97222
            }
        case 25:
            var2 = 'object';
            var1 = typeof var4;
            if (!(var2 === var1)) {
                _fun97222_ip = 50;
                continue _fun97222
            }
        case 36:
            var1 = 'default';
            var2 = var1 in var4;
            var1 = var4;
            if (var2) {
                _fun97222_ip = 59;
                continue _fun97222
            }
        case 50:
            var2 = {};
            var2.default = var4;
            var1 = var2;
        case 59:
            var2 = global;
            var4 = var2.Intl;
            var5 = 'undefined';
            var4 = typeof var4;
            if (!(var5 !== var4)) {
                _fun97222_ip = 241;
                continue _fun97222
            }
        case 81:
            var4 = var2.Intl;
            var4 = var4.PluralRules;
            if (!var4) {
                _fun97222_ip = 124;
                continue _fun97222
            }
        case 96:
            var4 = var2.Intl;
            var4 = var4.PluralRules;
            var4 = var4.prototype;
            var4 = var4.selectRange;
            if (var4) {
                _fun97222_ip = 159;
                continue _fun97222
            }
        case 124:
            var6 = var2.Intl;
            var4 = var1.default;
            var6.PluralRules = var4;
            var6 = var1.default;
            var4 = true;
            var6.polyfill = var4;
            _fun97222_ip = 337;
            continue _fun97222;
        case 159:
            var4 = ['en', 'es', 'ru', 'zh'];
            var6 = var2.Intl;
            var7 = var6.PluralRules;
            var6 = var7.supportedLocalesOf;
            var6 = var6.bind(var7)(var4);
            var6 = var6.length;
            var4 = var4.length;
            if (!(var6 < var4)) {
                _fun97222_ip = 337;
                continue _fun97222
            }
        case 209:
            var6 = var2.Intl;
            var4 = var1.default;
            var6.PluralRules = var4;
            var6 = var1.default;
            var4 = true;
            var6.polyfill = var4;
            _fun97222_ip = 337;
            continue _fun97222;
        case 241:
            if (!(var0 === var3)) {
                _fun97222_ip = 306;
                continue _fun97222
            }
        case 245:
            var4 = var2.window;
            var4 = typeof var4;
            if (!(var5 === var4)) {
                _fun97222_ip = 280;
                continue _fun97222
            }
        case 257:
            var5 = {};
            var4 = var1.default;
            var5.PluralRules = var4;
            var4 = this;
            var4.Intl = var5;
            _fun97222_ip = 324;
            continue _fun97222;
        case 280:
            var4 = var2.window;
            var2 = {};
            var5 = var1.default;
            var2.PluralRules = var5;
            var4.Intl = var2;
            _fun97222_ip = 324;
            continue _fun97222;
        case 306:
            var2 = {};
            var4 = var1.default;
            var2.PluralRules = var4;
            var3.Intl = var2;
        case 324:
            var2 = var1.default;
            var1 = true;
            var2.polyfill = var1;
        case 337:
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [12728]);