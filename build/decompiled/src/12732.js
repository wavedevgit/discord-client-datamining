// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun97023: for (var _fun97023_ip = 0;;) switch (_fun97023_ip) {
        case 0:
            var3 = require;
            var2 = exports;
            var4 = dependencyMap;
            var1 = global;
            var8 = var1.Object;
            var7 = var8.defineProperty;
            var6 = {};
            var0 = true;
            var6.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var6);
            var0 = 0;
            var6 = var4[var0];
            var0 = undefined;
            var6 = var3.bind(var0)(var6);
            var6 = var6.NativeModules;
            var7 = null;
            var _closure1_slot0 = var7;
            var7 = var6.BlobModule;
            var6 = var7;
            if (!var6) {
                _fun97023_ip = 97;
                continue _fun97023
            }
        case 80:
            var8 = var7.BLOB_URI_SCHEME;
            var9 = 'string';
            var8 = typeof var8;
            var6 = var9 === var8;
        case 97:
            if (!var6) {
                _fun97023_ip = 176;
                continue _fun97023
            }
        case 100:
            var8 = var7.BLOB_URI_SCHEME;
            var6 = ':';
            var6 = var8 + var6;
            _closure1_slot0 = var6;
            var8 = var7.BLOB_URI_HOST;
            var9 = 'string';
            var8 = typeof var8;
            if (!(var9 === var8)) {
                _fun97023_ip = 176;
                continue _fun97023
            }
        case 135:
            var9 = var7.BLOB_URI_HOST;
            var1 = var1.HermesInternal;
            var8 = var1.concat;
            var7 = '//';
            var1 = '/';
            var1 = var8.bind(var7)(var9, var1);
            var1 = var6 + var1;
            _closure1_slot0 = var1;
        case 176:
            var1 = 1;
            var6 = var4[var1];
            var6 = var3.bind(var0)(var6);
            var7 = var6.URL;
            var6 = function arg0() {
                _fun97024: for (var _fun97024_ip = 0;;) switch (_fun97024_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = _closure1_slot0;
                        var2 = null;
                        if (!(var2 !== var3)) {
                            _fun97024_ip = 82;
                            continue _fun97024
                        }
                    case 16:
                        var13 = _closure1_slot0;
                        var1 = var0.data;
                        var12 = var1.blobId;
                        var1 = var0.data;
                        var10 = var1.offset;
                        var8 = var0.size;
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var3 = var0.concat;
                        var14 = '';
                        var11 = '?offset=';
                        var9 = '&size=';
                        var0 = var14[var3](var13, var12, var11, var10, var9, var8, var7);
                        return var0;
                    case 82:
                        var0 = global;
                        var2 = var0.Error;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var13 = 'Cannot create URL for blob!';
                        var14 = var1;
                        var0 = new var14[var2](var13, var12);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var7.createObjectURL = var6;
            var6 = var4[var1];
            var6 = var3.bind(var0)(var6);
            var6 = var6.URL;
            var5 = function arg0() {
                var0 = undefined;
                return var0;
            };
            var6.revokeObjectURL = var5;
            var1 = var4[var1];
            var1 = var3.bind(var0)(var1);
            var1 = var1.URL;
            var2.URL = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 12733]);