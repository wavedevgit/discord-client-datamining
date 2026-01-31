// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = undefined;
    var2.default = var0;
    var3 = {};
    var4 = 'http://localhost:8081';
    var3.url = var4;
    var _closure1_slot0 = var3;
    var1 = function() {
        _fun97526: for (var _fun97526_ip = 0;;) switch (_fun97526_ip) {
            case 0:
                var4 = undefined;
                var3 = undefined;
                var1 = arguments.length;
                var2 = 0;
                if (!(var1 > var2)) {
                    _fun97526_ip = 23;
                    continue _fun97526
                }
            case 15:
                var1 = arguments[var2];
                if (!(var4 === var1)) {
                    _fun97526_ip = 27;
                    continue _fun97526
                }
            case 23:
                var1 = {};
                _fun97526_ip = 31;
                continue _fun97526;
            case 27:
                var1 = arguments[var2];
            case 31:
                var _closure2_slot0 = var1;
                var0 = function() { // Environment: var0
                    var0 = global;
                    var5 = var0.Object;
                    var4 = var5.assign;
                    var3 = _closure1_slot0;
                    var2 = _closure2_slot0;
                    var0 = {};
                    var0 = var4.bind(var5)(var0, var3, var2);
                    var _closure3_slot0 = var0;
                    var0 = {};
                    var1 = function arg0() {
                        _fun97528: for (var _fun97528_ip = 0;;) switch (_fun97528_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.type;
                                var1 = 'editor.open';
                                if (!(var1 === var2)) {
                                    _fun97528_ip = 146;
                                    continue _fun97528
                                }
                            case 21:
                                var0 = var0.payload;
                                var2 = var0.file;
                                var1 = var0.lineNumber;
                                var0 = _closure3_slot0;
                                var6 = var0.url;
                                var0 = global;
                                var3 = var0.HermesInternal;
                                var5 = var3.concat;
                                var4 = '';
                                var3 = '/open-stack-frame';
                                var3 = var5.bind(var4)(var6, var3);
                                var5 = {};
                                var5.file = var2;
                                if (var1) {
                                    _fun97528_ip = 93;
                                    continue _fun97528
                                }
                            case 90:
                                var1 = 1;
                            case 93:
                                var5.lineNumber = var1;
                                var2 = var0.fetch;
                                var1 = {};
                                var4 = 'POST';
                                var1.method = var4;
                                var4 = var0.JSON;
                                var0 = var4.stringify;
                                var0 = var0.bind(var4)(var5);
                                var1.body = var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var3, var1);
                            case 146:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.onCommand = var1;
                    return var0;
                };
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);