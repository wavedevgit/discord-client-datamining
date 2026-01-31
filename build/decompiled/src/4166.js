// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = {
        'xmp': 'http://ns.adobe.com/xap/1.0/',
        'tiff': 'http://ns.adobe.com/tiff/1.0/',
        'exif': 'http://ns.adobe.com/exif/1.0/',
        'dc': 'http://purl.org/dc/elements/1.1/',
        'xmpMM': 'http://ns.adobe.com/xap/1.0/mm/',
        'stEvt': 'http://ns.adobe.com/xap/1.0/sType/ResourceEvent#',
        'stRef': 'http://ns.adobe.com/xap/1.0/sType/ResourceRef#',
        'photoshop': 'http://ns.adobe.com/photoshop/1.0/'
    };
    var _closure1_slot0 = var2;
    var2 = function arg0() {
        _fun38232: for (var _fun38232_ip = 0;;) switch (_fun38232_ip) {
            case 0:
                var4 = arg0;
                var3 = ['prefix is non-null and namespace is null', 'prefix not bound to a namespace', 'prefix inte bundet till en namnrymd'];
                var0 = /Namespace prefix .+ is not defined/;
                var3[3] = var0;
                var0 = var3.length;
                var2 = 0;
                var0 = var2 < var0;
                var1 = global;
                if (!var0) {
                    _fun38232_ip = 107;
                    continue _fun38232
                }
            case 47:
                var6 = var1.RegExp;
                var7 = var3[var2];
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var8 = var5;
                var0 = new var8[var6](var7, var6);
                var6 = var0 instanceof Object ? var0 : var5;
                var5 = var6.test;
                var0 = var4.message;
                var0 = var5.bind(var6)(var0);
                if (var0) {
                    _fun38232_ip = 111;
                    continue _fun38232
                }
            case 95:
                var2 = var2 + 1;
                var0 = var3.length;
                if (var2 < var0) {
                    _fun38232_ip = 47;
                    continue _fun38232
                }
            case 107:
                var0 = false;
                return var0;
            case 111:
                var0 = true;
                return var0;
        }
    };
    var1.isMissingNamespaceError = var2;
    var0 = function arg0() {
        _fun38233: for (var _fun38233_ip = 0;;) switch (_fun38233_ip) {
            case 0:
                var4 = arg0;
                var2 = var4.match;
                var1 = /<([A-Za-z_][A-Za-z0-9._-]*)([^>]*)>/;
                var1 = var2.bind(var4)(var1);
                if (var1) {
                    _fun38233_ip = 35;
                    continue _fun38233
                }
            case 33:
                return var4;
            case 35:
                var10 = 1;
                var6 = var1[var10];
                var1 = new Array(0);
                var3 = /xmlns:([\w-]+)=["'][^"']+["']/g;
                var2 = var3.exec;
                var2 = var2.bind(var3)(var4);
                var9 = null;
                var8 = -1;
                if (!(var9 !== var2)) {
                    _fun38233_ip = 131;
                    continue _fun38233
                }
            case 83:
                var7 = var1.indexOf;
                var5 = var2[var10];
                var5 = var7.bind(var1)(var5);
                if (!(var8 === var5)) {
                    _fun38233_ip = 116;
                    continue _fun38233
                }
            case 102:
                var7 = var1.push;
                var5 = var2[var10];
                var5 = var7.bind(var1)(var5);
            case 116:
                var5 = var3.exec;
                var2 = var5.bind(var3)(var4);
                if (var9 !== var2) {
                    _fun38233_ip = 83;
                    continue _fun38233
                }
            case 131:
                var _closure2_slot0 = var1;
                var2 = new Array(0);
                var7 = /\b([A-Za-z_][A-Za-z0-9._-]*):[A-Za-z_][A-Za-z0-9._-]*\b/g;
                var1 = var7.exec;
                var1 = var1.bind(var7)(var4);
                var5 = 'xml';
                var3 = 'xmlns';
                if (!(var9 !== var1)) {
                    _fun38233_ip = 236;
                    continue _fun38233
                }
            case 178:
                var12 = var1[var10];
                var11 = var3 !== var12;
                if (!var11) {
                    _fun38233_ip = 193;
                    continue _fun38233
                }
            case 189:
                var11 = var5 !== var12;
            case 193:
                if (!var11) {
                    _fun38233_ip = 221;
                    continue _fun38233
                }
            case 196:
                var11 = var2.indexOf;
                var11 = var11.bind(var2)(var12);
                if (!(var8 === var11)) {
                    _fun38233_ip = 221;
                    continue _fun38233
                }
            case 211:
                var11 = var2.push;
                var11 = var11.bind(var2)(var12);
            case 221:
                var11 = var7.exec;
                var1 = var11.bind(var7)(var4);
                if (var9 !== var1) {
                    _fun38233_ip = 178;
                    continue _fun38233
                }
            case 236:
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.indexOf;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = -1;
                    var0 = var0 === var1;
                    return var0;
                };
                var11 = var1.bind(var2)(var0);
                var1 = var11.length;
                var10 = 0;
                var0 = var4;
                if (!(var10 !== var1)) {
                    _fun38233_ip = 465;
                    continue _fun38233
                }
            case 268:
                var3 = new Array(0);
                var1 = var11.length;
                var1 = var10 < var1;
                var9 = ' xmlns:';
                var8 = '="';
                var7 = '"';
                var5 = 'http://fallback.namespace/';
                var10 = 0;
                if (!var1) {
                    _fun38233_ip = 368;
                    continue _fun38233
                }
            case 311:
                var1 = var11[var10];
                var12 = _closure1_slot0;
                var13 = var12[var1];
                if (var13) {
                    _fun38233_ip = 330;
                    continue _fun38233
                }
            case 326:
                var13 = var5 + var1;
            case 330:
                var12 = var3.push;
                var1 = var9 + var1;
                var1 = var1 + var8;
                var1 = var1 + var13;
                var1 = var1 + var7;
                var1 = var12.bind(var3)(var1);
                var10 = var10 + 1;
                var1 = var11.length;
                if (var10 < var1) {
                    _fun38233_ip = 311;
                    continue _fun38233
                }
            case 368:
                var2 = var3.join;
                var1 = '';
                var5 = var2.bind(var3)(var1);
                var1 = global;
                var7 = var1.RegExp;
                var1 = '<';
                var8 = var1 + var6;
                var2 = var7.prototype;
                var3 = Object.create(var2, {
                    constructor: {
                        value: var7
                    }
                });
                var2 = '([^>]*)>';
                var15 = var8 + var2;
                var16 = var3;
                var2 = new var16[var7](var15, var14);
                var3 = var2 instanceof Object ? var2 : var3;
                var2 = var4.replace;
                var6 = var1 + var6;
                var1 = '$1';
                var1 = var6 + var1;
                var5 = var1 + var5;
                var1 = '>';
                var1 = var5 + var1;
                var0 = var2.bind(var4)(var3, var1);
            case 465:
                return var0;
        }
    };
    var1.addMissingNamespaces = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);