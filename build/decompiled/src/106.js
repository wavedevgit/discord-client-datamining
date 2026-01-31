// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = function arg0() {
        _fun1588: for (var _fun1588_ip = 0;;) switch (_fun1588_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.httpServerLocation;
                var1 = var3.startsWith;
                var0 = '/';
                var1 = var1.bind(var3)(var0);
                var0 = var3;
                if (!var1) {
                    _fun1588_ip = 42;
                    continue _fun1588
                }
            case 29:
                var2 = var3.slice;
                var1 = 1;
                var0 = var2.bind(var3)(var1);
            case 42:
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var1 = {
        '0.75': 'ldpi',
        1: 'mdpi',
        '1.5': 'hdpi',
        2: 'xhdpi',
        3: 'xxhdpi',
        4: 'xxxhdpi'
    };
    var _closure1_slot0 = var1;
    var1 = global;
    var4 = var1.Set;
    var1 = var4.prototype;
    var3 = Object.create(var1, {
        constructor: {
            value: var4
        }
    });
    var5 = ['gif', 'jpeg', 'jpg', 'ktx', 'png', 'webp', 'xml'];
    var6 = var3;
    var1 = new var6[var4](var5, var4);
    var1 = var1 instanceof Object ? var1 : var3;
    var _closure1_slot1 = var1;
    var1 = {};
    var3 = function arg0, arg1() {
        _fun1589: for (var _fun1589_ip = 0;;) switch (_fun1589_ip) {
            case 0:
                var9 = arg0;
                var5 = arg1;
                var3 = _closure1_slot1;
                var2 = var3.has;
                var1 = var9.type;
                var1 = var2.bind(var3)(var1);
                if (var1) {
                    _fun1589_ip = 37;
                    continue _fun1589
                }
            case 31:
                var1 = 'raw';
                return var1;
            case 37:
                var1 = var5.toString;
                var2 = var1.bind(var5)();
                var1 = _closure1_slot0;
                var1 = var2 in var1;
                if (var1) {
                    _fun1589_ip = 165;
                    continue _fun1589
                }
            case 57:
                var1 = global;
                var3 = var1.Number;
                var2 = var3.isFinite;
                var2 = var2.bind(var3)(var5);
                if (!var2) {
                    _fun1589_ip = 85;
                    continue _fun1589
                }
            case 79:
                var2 = 0;
                if (!(!(var5 > var2))) {
                    _fun1589_ip = 132;
                    continue _fun1589
                }
            case 85:
                var4 = var1.Error;
                var2 = var5.toString;
                var3 = var2.bind(var5)();
                var2 = 'no such scale ';
                var12 = var2 + var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var13 = var3;
                var2 = new var13[var4](var12, var11);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
            case 132:
                var3 = var1.Math;
                var2 = var3.round;
                var1 = 160;
                var1 = var1 * var5;
                var2 = var2.bind(var3)(var1);
                var1 = 'dpi';
                var1 = var2 + var1;
                _fun1589_ip = 182;
                continue _fun1589;
            case 165:
                var3 = _closure1_slot0;
                var2 = var5.toString;
                var2 = var2.bind(var5)();
                var1 = var3[var2];
            case 182:
                if (var1) {
                    _fun1589_ip = 301;
                    continue _fun1589
                }
            case 185:
                var2 = global;
                var3 = var2.Error;
                var4 = "Don't know which android drawable suffix to use for scale: ";
                var8 = var4 + var5;
                var5 = var2.JSON;
                var4 = var5.stringify;
                var7 = null;
                var6 = '\t';
                var5 = var4.bind(var5)(var9, var7, var6);
                var4 = '\nAsset: ';
                var4 = var8 + var4;
                var4 = var4 + var5;
                var5 = var2.JSON;
                var2 = var5.stringify;
                var0 = _closure1_slot0;
                var2 = var2.bind(var5)(var0, var7, var6);
                var0 = '\nPossible scales are:';
                var0 = var4 + var0;
                var12 = var0 + var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var13 = var2;
                var0 = new var13[var3](var12, var11);
                var0 = var0 instanceof Object ? var0 : var2;
                throw var0;
            case 301:
                var0 = 'drawable-';
                var0 = var0 + var1;
                return var0;
        }
    };
    var1.getAndroidResourceFolderName = var3;
    var2 = function arg0() {
        var0 = arg0;
        var2 = _closure1_slot2;
        var1 = undefined;
        var2 = var2.bind(var1)(var0);
        var1 = '/';
        var1 = var2 + var1;
        var0 = var0.name;
        var1 = var1 + var0;
        var0 = var1.toLowerCase;
        var3 = var0.bind(var1)();
        var2 = var3.replace;
        var1 = /\\/ / g;
        var0 = '_';
        var2 = var2.bind(var3)(var1, var0);
        var1 = var2.replace;
        var0 = /([^a-z0-9_])/g;
        var3 = '';
        var2 = var1.bind(var2)(var0, var3);
        var1 = var2.replace;
        var0 = /^(?:assets|assetsunstable_path)_/;
        var0 = var1.bind(var2)(var0, var3);
        return var0;
    };
    var1.getAndroidResourceIdentifier = var2;
    var1.getBasePath = var0;
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);