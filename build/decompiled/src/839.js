// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = function arg0() {
        _fun8877: for (var _fun8877_ip = 0;;) switch (_fun8877_ip) {
            case 0:
                var1 = arg0;
                var0 = 400;
                if (!(var1 < var0)) {
                    _fun8877_ip = 23;
                    continue _fun8877
                }
            case 13:
                var2 = 100;
                if (!(!(var1 >= var2))) {
                    _fun8877_ip = 319;
                    continue _fun8877
                }
            case 23:
                if (!(var1 >= var0)) {
                    _fun8877_ip = 37;
                    continue _fun8877
                }
            case 27:
                var0 = 500;
                if (!(!(var1 < var0))) {
                    _fun8877_ip = 147;
                    continue _fun8877
                }
            case 37:
                var0 = 500;
                if (!(var1 >= var0)) {
                    _fun8877_ip = 57;
                    continue _fun8877
                }
            case 47:
                var0 = 600;
                if (!(!(var1 < var0))) {
                    _fun8877_ip = 69;
                    continue _fun8877
                }
            case 57:
                var0 = {
                    'code': 2,
                    'message': 'internal_error'
                };
                return var0;
            case 69:
                var0 = 501;
                if (!(var0 !== var1)) {
                    _fun8877_ip = 135;
                    continue _fun8877
                }
            case 79:
                var0 = 503;
                if (!(var0 !== var1)) {
                    _fun8877_ip = 123;
                    continue _fun8877
                }
            case 89:
                var0 = 504;
                if (!(var0 !== var1)) {
                    _fun8877_ip = 111;
                    continue _fun8877
                }
            case 99:
                var0 = {
                    'code': 2,
                    'message': 'internal_error'
                };
                return var0;
            case 111:
                var0 = {
                    'code': 2,
                    'message': 'deadline_exceeded'
                };
                return var0;
            case 123:
                var0 = {
                    'code': 2,
                    'message': 'unavailable'
                };
                return var0;
            case 135:
                var0 = {
                    'code': 2,
                    'message': 'unimplemented'
                };
                return var0;
            case 147:
                var0 = 401;
                if (!(var0 !== var1)) {
                    _fun8877_ip = 307;
                    continue _fun8877
                }
            case 160:
                var0 = 403;
                if (!(var0 !== var1)) {
                    _fun8877_ip = 295;
                    continue _fun8877
                }
            case 173:
                var0 = 404;
                if (!(var0 !== var1)) {
                    _fun8877_ip = 283;
                    continue _fun8877
                }
            case 183:
                var0 = 409;
                if (!(var0 !== var1)) {
                    _fun8877_ip = 271;
                    continue _fun8877
                }
            case 193:
                var0 = 413;
                if (!(var0 !== var1)) {
                    _fun8877_ip = 259;
                    continue _fun8877
                }
            case 203:
                var0 = 429;
                if (!(var0 !== var1)) {
                    _fun8877_ip = 247;
                    continue _fun8877
                }
            case 213:
                var0 = 499;
                if (!(var0 !== var1)) {
                    _fun8877_ip = 235;
                    continue _fun8877
                }
            case 223:
                var0 = {
                    'code': 2,
                    'message': 'invalid_argument'
                };
                return var0;
            case 235:
                var0 = {
                    'code': 2,
                    'message': 'cancelled'
                };
                return var0;
            case 247:
                var0 = {
                    'code': 2,
                    'message': 'resource_exhausted'
                };
                return var0;
            case 259:
                var0 = {
                    'code': 2,
                    'message': 'failed_precondition'
                };
                return var0;
            case 271:
                var0 = {
                    'code': 2,
                    'message': 'already_exists'
                };
                return var0;
            case 283:
                var0 = {
                    'code': 2,
                    'message': 'not_found'
                };
                return var0;
            case 295:
                var0 = {
                    'code': 2,
                    'message': 'permission_denied'
                };
                return var0;
            case 307:
                var0 = {
                    'code': 2,
                    'message': 'unauthenticated'
                };
                return var0;
            case 319:
                var0 = {};
                var1 = 1;
                var0.code = var1;
                return var0;
        }
    };
    var _closure1_slot0 = var2;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var1, var4, var3);
    var3 = 2;
    var1.SPAN_STATUS_ERROR = var3;
    var3 = 1;
    var1.SPAN_STATUS_OK = var3;
    var3 = 0;
    var1.SPAN_STATUS_UNSET = var3;
    var1.getSpanStatusFromHttpCode = var2;
    var0 = function arg0, arg1() {
        _fun8878: for (var _fun8878_ip = 0;;) switch (_fun8878_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var1 = var3.setAttribute;
                var0 = 'http.response.status_code';
                var0 = var1.bind(var3)(var0, var2);
                var1 = _closure1_slot0;
                var0 = undefined;
                var2 = var1.bind(var0)(var2);
                var4 = var2.message;
                var1 = 'unknown_error';
                if (!(var1 !== var4)) {
                    _fun8878_ip = 64;
                    continue _fun8878
                }
            case 53:
                var1 = var3.setStatus;
                var1 = var1.bind(var3)(var2);
            case 64:
                return var0;
        }
    };
    var1.setHttpStatus = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);