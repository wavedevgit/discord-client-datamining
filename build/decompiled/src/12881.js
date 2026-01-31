// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = function(arg0) { // Original name: getSpanStatusFromHttpCode, environment: var0
        _fun99089: for (var _fun99089_ip = 0;;) switch (_fun99089_ip) {
            case 0:
                var1 = arg0;
                var0 = 400;
                if (!(var1 < var0)) {
                    _fun99089_ip = 23;
                    continue _fun99089
                }
            case 13:
                var2 = 100;
                if (!(!(var1 >= var2))) {
                    _fun99089_ip = 323;
                    continue _fun99089
                }
            case 23:
                if (!(var1 >= var0)) {
                    _fun99089_ip = 37;
                    continue _fun99089
                }
            case 27:
                var0 = 500;
                if (!(!(var1 < var0))) {
                    _fun99089_ip = 151;
                    continue _fun99089
                }
            case 37:
                var0 = 500;
                if (!(var1 >= var0)) {
                    _fun99089_ip = 57;
                    continue _fun99089
                }
            case 47:
                var0 = 600;
                if (!(!(var1 < var0))) {
                    _fun99089_ip = 73;
                    continue _fun99089
                }
            case 57:
                var0 = {
                    'code': 2,
                    'message': 'unknown_error'
                };
                return var0;
            case 73:
                var0 = 501;
                if (!(var0 !== var1)) {
                    _fun99089_ip = 139;
                    continue _fun99089
                }
            case 83:
                var0 = 503;
                if (!(var0 !== var1)) {
                    _fun99089_ip = 127;
                    continue _fun99089
                }
            case 93:
                var0 = 504;
                if (!(var0 !== var1)) {
                    _fun99089_ip = 115;
                    continue _fun99089
                }
            case 103:
                var0 = {
                    'code': 2,
                    'message': 'internal_error'
                };
                return var0;
            case 115:
                var0 = {
                    'code': 2,
                    'message': 'deadline_exceeded'
                };
                return var0;
            case 127:
                var0 = {
                    'code': 2,
                    'message': 'unavailable'
                };
                return var0;
            case 139:
                var0 = {
                    'code': 2,
                    'message': 'unimplemented'
                };
                return var0;
            case 151:
                var0 = 401;
                if (!(var0 !== var1)) {
                    _fun99089_ip = 311;
                    continue _fun99089
                }
            case 164:
                var0 = 403;
                if (!(var0 !== var1)) {
                    _fun99089_ip = 299;
                    continue _fun99089
                }
            case 177:
                var0 = 404;
                if (!(var0 !== var1)) {
                    _fun99089_ip = 287;
                    continue _fun99089
                }
            case 187:
                var0 = 409;
                if (!(var0 !== var1)) {
                    _fun99089_ip = 275;
                    continue _fun99089
                }
            case 197:
                var0 = 413;
                if (!(var0 !== var1)) {
                    _fun99089_ip = 263;
                    continue _fun99089
                }
            case 207:
                var0 = 429;
                if (!(var0 !== var1)) {
                    _fun99089_ip = 251;
                    continue _fun99089
                }
            case 217:
                var0 = 499;
                if (!(var0 !== var1)) {
                    _fun99089_ip = 239;
                    continue _fun99089
                }
            case 227:
                var0 = {
                    'code': 2,
                    'message': 'invalid_argument'
                };
                return var0;
            case 239:
                var0 = {
                    'code': 2,
                    'message': 'cancelled'
                };
                return var0;
            case 251:
                var0 = {
                    'code': 2,
                    'message': 'resource_exhausted'
                };
                return var0;
            case 263:
                var0 = {
                    'code': 2,
                    'message': 'failed_precondition'
                };
                return var0;
            case 275:
                var0 = {
                    'code': 2,
                    'message': 'already_exists'
                };
                return var0;
            case 287:
                var0 = {
                    'code': 2,
                    'message': 'not_found'
                };
                return var0;
            case 299:
                var0 = {
                    'code': 2,
                    'message': 'permission_denied'
                };
                return var0;
            case 311:
                var0 = {
                    'code': 2,
                    'message': 'unauthenticated'
                };
                return var0;
            case 323:
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
    var0 = function(arg0, arg1) { // Original name: setHttpStatus, environment: var0
        _fun99090: for (var _fun99090_ip = 0;;) switch (_fun99090_ip) {
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
                    _fun99090_ip = 64;
                    continue _fun99090
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