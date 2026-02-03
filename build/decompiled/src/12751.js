// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = undefined;
    var2.XHRInterceptor = var0;
    var4 = var1.XMLHttpRequest;
    var4 = var4.prototype;
    var4 = var4.open;
    var _closure1_slot5 = var4;
    var4 = var1.XMLHttpRequest;
    var4 = var4.prototype;
    var4 = var4.send;
    var _closure1_slot6 = var4;
    var1 = var1.XMLHttpRequest;
    var1 = var1.prototype;
    var1 = var1.setRequestHeader;
    var _closure1_slot7 = var1;
    var1 = false;
    var _closure1_slot8 = var1;
    var1 = {};
    var4 = function arg0() {
        var0 = arg0;
        var _closure1_slot0 = var0;
        var0 = undefined;
        return var0;
    };
    var1.setOpenCallback = var4;
    var4 = function arg0() {
        var0 = arg0;
        var _closure1_slot1 = var0;
        var0 = undefined;
        return var0;
    };
    var1.setSendCallback = var4;
    var4 = function arg0() {
        var0 = arg0;
        var _closure1_slot3 = var0;
        var0 = undefined;
        return var0;
    };
    var1.setHeaderReceivedCallback = var4;
    var4 = function arg0() {
        var0 = arg0;
        var _closure1_slot4 = var0;
        var0 = undefined;
        return var0;
    };
    var1.setResponseCallback = var4;
    var4 = function arg0() {
        var0 = arg0;
        var _closure1_slot2 = var0;
        var0 = undefined;
        return var0;
    };
    var1.setRequestHeaderCallback = var4;
    var4 = function() {
        var0 = _closure1_slot8;
        return var0;
    };
    var1.isInterceptorEnabled = var4;
    var4 = function() {
        _fun97636: for (var _fun97636_ip = 0;;) switch (_fun97636_ip) {
            case 0:
                var2 = _closure1_slot8;
                if (var2) {
                    _fun97636_ip = 92;
                    continue _fun97636
                }
            case 12:
                var2 = global;
                var3 = var2.XMLHttpRequest;
                var4 = var3.prototype;
                var3 = function(arg0, arg1) { // Environment: var0
                    _fun97637: for (var _fun97637_ip = 0;;) switch (_fun97637_ip) {
                        case 0:
                            var4 = this;
                            var0 = undefined;
                            var1 = undefined;
                            var3 = _closure1_slot0;
                            if (!var3) {
                                _fun97637_ip = 34;
                                continue _fun97637
                            }
                        case 17:
                            var6 = _closure1_slot0;
                            var5 = arg0;
                            var3 = arg1;
                            var3 = var6.bind(var0)(var5, var3, var4);
                        case 34:
                            var3 = _closure1_slot5;
                            var2 = var3.apply;
                            var1 = arguments;
                            var1 = var2.bind(var3)(var4, var1);
                            return var0;
                    }
                };
                var4.open = var3;
                var3 = var2.XMLHttpRequest;
                var4 = var3.prototype;
                var3 = function(arg0, arg1) { // Environment: var0
                    _fun97638: for (var _fun97638_ip = 0;;) switch (_fun97638_ip) {
                        case 0:
                            var4 = this;
                            var0 = undefined;
                            var1 = undefined;
                            var3 = _closure1_slot2;
                            if (!var3) {
                                _fun97638_ip = 34;
                                continue _fun97638
                            }
                        case 17:
                            var6 = _closure1_slot2;
                            var5 = arg0;
                            var3 = arg1;
                            var3 = var6.bind(var0)(var5, var3, var4);
                        case 34:
                            var3 = _closure1_slot7;
                            var2 = var3.apply;
                            var1 = arguments;
                            var1 = var2.bind(var3)(var4, var1);
                            return var0;
                    }
                };
                var4.setRequestHeader = var3;
                var2 = var2.XMLHttpRequest;
                var2 = var2.prototype;
                var0 = function(arg0) { // Environment: var0
                    _fun97639: for (var _fun97639_ip = 0;;) switch (_fun97639_ip) {
                        case 0:
                            var4 = this;
                            var0 = undefined;
                            var1 = undefined;
                            var _closure3_slot0 = var4;
                            var5 = _closure1_slot1;
                            if (!var5) {
                                _fun97639_ip = 36;
                                continue _fun97639
                            }
                        case 23:
                            var6 = _closure1_slot1;
                            var5 = arg0;
                            var5 = var6.bind(var0)(var5, var4);
                        case 36:
                            var5 = var4.addEventListener;
                            if (!var5) {
                                _fun97639_ip = 73;
                                continue _fun97639
                            }
                        case 45:
                            var7 = var4.addEventListener;
                            var6 = 'readystatechange';
                            var5 = function() { // Environment: var3
                                _fun97640: for (var _fun97640_ip = 0;;) switch (_fun97640_ip) {
                                    case 0:
                                        var0 = _closure1_slot8;
                                        if (!var0) {
                                            _fun97640_ip = 238;
                                            continue _fun97640
                                        }
                                    case 13:
                                        var2 = _closure3_slot0;
                                        var3 = var2.readyState;
                                        var2 = var2.HEADERS_RECEIVED;
                                        if (!(var3 === var2)) {
                                            _fun97640_ip = 162;
                                            continue _fun97640
                                        }
                                    case 39:
                                        var4 = _closure3_slot0;
                                        var3 = var4.getResponseHeader;
                                        var2 = 'Content-Type';
                                        var5 = var3.bind(var4)(var2);
                                        var3 = var4.getResponseHeader;
                                        var2 = 'Content-Length';
                                        var4 = var3.bind(var4)(var2);
                                        var7 = undefined;
                                        var6 = undefined;
                                        if (!var5) {
                                            _fun97640_ip = 100;
                                            continue _fun97640
                                        }
                                    case 80:
                                        var3 = var5.split;
                                        var2 = ';';
                                        var3 = var3.bind(var5)(var2);
                                        var2 = 0;
                                        var6 = var3[var2];
                                    case 100:
                                        var5 = undefined;
                                        if (!var4) {
                                            _fun97640_ip = 122;
                                            continue _fun97640
                                        }
                                    case 105:
                                        var2 = global;
                                        var3 = var2.parseInt;
                                        var2 = 10;
                                        var5 = var3.bind(var7)(var4, var2);
                                    case 122:
                                        var2 = _closure1_slot3;
                                        if (!var2) {
                                            _fun97640_ip = 162;
                                            continue _fun97640
                                        }
                                    case 129:
                                        var4 = _closure1_slot3;
                                        var3 = _closure3_slot0;
                                        var2 = var3.getAllResponseHeaders;
                                        var11 = var2.bind(var3)();
                                        var14 = undefined;
                                        var13 = var6;
                                        var12 = var5;
                                        var10 = var3;
                                        var2 = var14[var4](var13, var12, var11, var10, var9);
                                    case 162:
                                        var2 = _closure3_slot0;
                                        var3 = var2.readyState;
                                        var2 = var2.DONE;
                                        var2 = var3 === var2;
                                        if (!var2) {
                                            _fun97640_ip = 189;
                                            continue _fun97640
                                        }
                                    case 185:
                                        var2 = _closure1_slot4;
                                    case 189:
                                        if (!var2) {
                                            _fun97640_ip = 238;
                                            continue _fun97640
                                        }
                                    case 192:
                                        var7 = _closure1_slot4;
                                        var6 = _closure3_slot0;
                                        var13 = var6.status;
                                        var12 = var6.timeout;
                                        var11 = var6.response;
                                        var10 = var6.responseURL;
                                        var9 = var6.responseType;
                                        var14 = undefined;
                                        var8 = var6;
                                        var0 = var14[var7](var13, var12, var11, var10, var9, var8, var7);
                                    case 238:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var3 = false;
                            var3 = var7.bind(var4)(var6, var5, var3);
                        case 73:
                            var3 = _closure1_slot6;
                            var2 = var3.apply;
                            var1 = arguments;
                            var1 = var2.bind(var3)(var4, var1);
                            return var0;
                    }
                };
                var2.send = var0;
                var0 = true;
                _closure1_slot8 = var0;
            case 92:
                var0 = undefined;
                return var0;
        }
    };
    var1.enableInterception = var4;
    var3 = function() {
        _fun97641: for (var _fun97641_ip = 0;;) switch (_fun97641_ip) {
            case 0:
                var0 = _closure1_slot8;
                if (!var0) {
                    _fun97641_ip = 103;
                    continue _fun97641
                }
            case 10:
                var0 = false;
                _closure1_slot8 = var0;
                var0 = global;
                var2 = var0.XMLHttpRequest;
                var3 = var2.prototype;
                var2 = _closure1_slot6;
                var3.send = var2;
                var2 = var0.XMLHttpRequest;
                var3 = var2.prototype;
                var2 = _closure1_slot5;
                var3.open = var2;
                var0 = var0.XMLHttpRequest;
                var2 = var0.prototype;
                var0 = _closure1_slot7;
                var2.setRequestHeader = var0;
                var0 = null;
                _closure1_slot4 = var0;
                _closure1_slot0 = var0;
                _closure1_slot1 = var0;
                _closure1_slot3 = var0;
                _closure1_slot2 = var0;
            case 103:
                var0 = undefined;
                return var0;
        }
    };
    var1.disableInterception = var3;
    var2.XHRInterceptor = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);