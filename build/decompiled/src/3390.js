// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun29103: for (var _fun29103_ip = 0;;) switch (_fun29103_ip) {
        case 0:
            var3 = require;
            var2 = dependencyMap;
            var _closure1_slot0 = var3;
            var _closure1_slot1 = var2;
            var0 = 0;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = 'String.prototype.replace';
            var2 = var3.bind(var0)(var2);
            var _closure1_slot2 = var2;
            var4 = /^\s$/;
            var3 = var4.test;
            var2 = '\u180e';
            var2 = var3.bind(var4)(var2);
            if (var2) {
                _fun29103_ip = 93;
                continue _fun29103
            }
        case 77:
            var3 = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/;
            _fun29103_ip = 107;
            continue _fun29103;
        case 93:
            var3 = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/;
        case 107:
            var _closure1_slot3 = var3;
            if (var2) {
                _fun29103_ip = 130;
                continue _fun29103
            }
        case 114:
            var2 = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
            _fun29103_ip = 144;
            continue _fun29103;
        case 130:
            var2 = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
        case 144:
            var _closure1_slot4 = var2;
            var2 = function() {
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 1;
                var1 = var5[var1];
                var4 = undefined;
                var2 = var3.bind(var4)(var1);
                var1 = 2;
                var1 = var5[var1];
                var3 = var3.bind(var4)(var1);
                var1 = this;
                var1 = var3.bind(var4)(var1);
                var5 = var2.bind(var4)(var1);
                var3 = _closure1_slot2;
                var1 = _closure1_slot3;
                var2 = '';
                var1 = var3.bind(var4)(var5, var1, var2);
                var0 = _closure1_slot4;
                var0 = var3.bind(var4)(var1, var0, var2);
                return var0;
            };
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [551, 3391, 3377]);