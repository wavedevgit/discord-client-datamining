// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function() {
        var0 = undefined;
        return var0;
    };
    var2 = arg4;
    var2.exports = var1;
    var3 = var1.prototype;
    var2 = function(arg0) { // Environment: var0
        var2 = arg0;
        var0 = this;
        var1 = var0.header;
        var0 = var2.toLowerCase;
        var0 = var0.bind(var2)();
        var0 = var1[var0];
        return var0;
    };
    var3.get = var2;
    var3 = var1.prototype;
    var2 = function(arg0) { // Environment: var0
        _fun6704: for (var _fun6704_ip = 0;;) switch (_fun6704_ip) {
            case 0:
                var0 = arg0;
                var2 = this;
                var1 = var0;
                var7 = var0["content-type"];
                if (var7) {
                    _fun6704_ip = 22;
                    continue _fun6704
                }
            case 18:
                var7 = '';
            case 22:
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var5 = 0;
                var8 = var4[var5];
                var0 = undefined;
                var9 = var6.bind(var0)(var8);
                var8 = var9.type;
                var8 = var8.bind(var9)(var7);
                var2.type = var8;
                var4 = var4[var5];
                var6 = var6.bind(var0)(var4);
                var4 = var6.params;
                var11 = var4.bind(var6)(var7);
                var9 = var11;
                var4 = global;
                for (var6 in var9)
                    case 95: {
                        case 104: var13 = var6;
                        var12 = var4.Object;
                        var12 = var12.prototype;
                        var14 = var12.hasOwnProperty;
                        var12 = var14.call;
                        var12 = var12.bind(var14)(var11, var13);
                        if (!var12) {
                            _fun6704_ip = 95;
                            continue _fun6704
                        }
                        case 138: var12 = var11[var13];
                        var2[var13] = var12;
                        _fun6704_ip = 95;
                        continue _fun6704;
                    }
            case 148:
                var4 = {};
                var2.links = var4;
            case 156: // try_start_0
                var4 = var1;
                var4 = var4.link;
                if (!var4) {
                    _fun6704_ip = 208;
                    continue _fun6704
                }
            case 168:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var5];
                var4 = var4.bind(var0)(var3);
                var3 = var4.parseLinks;
                var1 = var1.link;
                var1 = var3.bind(var4)(var1);
                var2.links = var1;
            case 208: // try_end0
                _fun6704_ip = 212;
                continue _fun6704;
            case 210: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 212:
                return var0;
        }
    };
    var3._setHeaderProperties = var2;
    var1 = var1.prototype;
    var0 = function(arg0) { // Environment: var0
        _fun6705: for (var _fun6705_ip = 0;;) switch (_fun6705_ip) {
            case 0:
                var2 = arg0;
                var1 = this;
                var0 = global;
                var4 = var0.Math;
                var3 = var4.trunc;
                var0 = 100;
                var0 = var2 / var0;
                var4 = var3.bind(var4)(var0);
                var1.statusCode = var2;
                var0 = var1.statusCode;
                var1.status = var0;
                var1.statusType = var4;
                var0 = 1;
                var0 = var0 === var4;
                var1.info = var0;
                var0 = 2;
                var0 = var0 === var4;
                var1.ok = var0;
                var0 = 3;
                var0 = var0 === var4;
                var1.redirect = var0;
                var0 = 4;
                var0 = var0 === var4;
                var1.clientError = var0;
                var3 = 5;
                var3 = var3 === var4;
                var1.serverError = var3;
                if (var0) {
                    _fun6705_ip = 127;
                    continue _fun6705
                }
            case 124:
                var0 = var3;
            case 127:
                if (!var0) {
                    _fun6705_ip = 140;
                    continue _fun6705
                }
            case 130:
                var3 = var1.toError;
                var0 = var3.bind(var1)();
            case 140:
                var1.error = var0;
                var0 = 201;
                var0 = var0 === var2;
                var1.created = var0;
                var0 = 202;
                var0 = var0 === var2;
                var1.accepted = var0;
                var0 = 204;
                var0 = var0 === var2;
                var1.noContent = var0;
                var0 = 400;
                var0 = var0 === var2;
                var1.badRequest = var0;
                var0 = 401;
                var0 = var0 === var2;
                var1.unauthorized = var0;
                var0 = 406;
                var0 = var0 === var2;
                var1.notAcceptable = var0;
                var0 = 403;
                var0 = var0 === var2;
                var1.forbidden = var0;
                var0 = 404;
                var0 = var0 === var2;
                var1.notFound = var0;
                var0 = 422;
                var0 = var0 === var2;
                var1.unprocessableEntity = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1._setStatusProperties = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [509]);