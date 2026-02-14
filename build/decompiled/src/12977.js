// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = function arg0() {
        _fun99713: for (var _fun99713_ip = 0;;) switch (_fun99713_ip) {
            case 0:
                var1 = arg0;
                var0 = 400;
                if (!(var1 < var0)) {
                    _fun99713_ip = 23;
                    continue _fun99713
                }
            case 13:
                var2 = 100;
                if (!(!(var1 >= var2))) {
                    _fun99713_ip = 362;
                    continue _fun99713
                }
            case 23:
                if (!(var1 >= var0)) {
                    _fun99713_ip = 40;
                    continue _fun99713
                }
            case 27:
                var0 = 500;
                if (!(!(var1 < var0))) {
                    _fun99713_ip = 170;
                    continue _fun99713
                }
            case 40:
                var0 = 500;
                if (!(var1 >= var0)) {
                    _fun99713_ip = 60;
                    continue _fun99713
                }
            case 50:
                var0 = 600;
                if (!(!(var1 < var0))) {
                    _fun99713_ip = 76;
                    continue _fun99713
                }
            case 60:
                var0 = {
                    'code': 2,
                    'message': 'unknown_error'
                };
                return var0;
            case 76:
                var0 = 501;
                if (!(var0 !== var1)) {
                    _fun99713_ip = 154;
                    continue _fun99713
                }
            case 86:
                var0 = 503;
                if (!(var0 !== var1)) {
                    _fun99713_ip = 138;
                    continue _fun99713
                }
            case 96:
                var0 = 504;
                if (!(var0 !== var1)) {
                    _fun99713_ip = 122;
                    continue _fun99713
                }
            case 106:
                var0 = {
                    'code': 2,
                    'message': 'internal_error'
                };
                return var0;
            case 122:
                var0 = {
                    'code': 2,
                    'message': 'deadline_exceeded'
                };
                return var0;
            case 138:
                var0 = {
                    'code': 2,
                    'message': 'unavailable'
                };
                return var0;
            case 154:
                var0 = {
                    'code': 2,
                    'message': 'unimplemented'
                };
                return var0;
            case 170:
                var0 = 401;
                if (!(var0 !== var1)) {
                    _fun99713_ip = 350;
                    continue _fun99713
                }
            case 183:
                var0 = 403;
                if (!(var0 !== var1)) {
                    _fun99713_ip = 334;
                    continue _fun99713
                }
            case 196:
                var0 = 404;
                if (!(var0 !== var1)) {
                    _fun99713_ip = 322;
                    continue _fun99713
                }
            case 206:
                var0 = 409;
                if (!(var0 !== var1)) {
                    _fun99713_ip = 310;
                    continue _fun99713
                }
            case 216:
                var0 = 413;
                if (!(var0 !== var1)) {
                    _fun99713_ip = 294;
                    continue _fun99713
                }
            case 226:
                var0 = 429;
                if (!(var0 !== var1)) {
                    _fun99713_ip = 278;
                    continue _fun99713
                }
            case 236:
                var0 = 499;
                if (!(var0 !== var1)) {
                    _fun99713_ip = 262;
                    continue _fun99713
                }
            case 246:
                var0 = {
                    'code': 2,
                    'message': 'invalid_argument'
                };
                return var0;
            case 262:
                var0 = {
                    'code': 2,
                    'message': 'cancelled'
                };
                return var0;
            case 278:
                var0 = {
                    'code': 2,
                    'message': 'resource_exhausted'
                };
                return var0;
            case 294:
                var0 = {
                    'code': 2,
                    'message': 'failed_precondition'
                };
                return var0;
            case 310:
                var0 = {
                    'code': 2,
                    'message': 'already_exists'
                };
                return var0;
            case 322:
                var0 = {
                    'code': 2,
                    'message': 'not_found'
                };
                return var0;
            case 334:
                var0 = {
                    'code': 2,
                    'message': 'permission_denied'
                };
                return var0;
            case 350:
                var0 = {
                    'code': 2,
                    'message': 'unauthenticated'
                };
                return var0;
            case 362:
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
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var3 = 2;
    var1.SPAN_STATUS_ERROR = var3;
    var3 = 1;
    var1.SPAN_STATUS_OK = var3;
    var3 = 0;
    var1.SPAN_STATUS_UNSET = var3;
    var1.getSpanStatusFromHttpCode = var2;
    var0 = function arg0, arg1() {
        _fun99714: for (var _fun99714_ip = 0;;) switch (_fun99714_ip) {
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
                    _fun99714_ip = 64;
                    continue _fun99714
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