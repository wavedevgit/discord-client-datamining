// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = function(arg0) { // Original name: parseRetryAfterHeader, environment: var1
        _fun99379: for (var _fun99379_ip = 0;;) switch (_fun99379_ip) {
            case 0:
                var7 = arg0;
                var3 = undefined;
                var1 = undefined;
                var2 = arguments.length;
                var0 = 1;
                if (!(var2 > var0)) {
                    _fun99379_ip = 25;
                    continue _fun99379
                }
            case 17:
                var2 = arguments[var0];
                if (!(var3 === var2)) {
                    _fun99379_ip = 44;
                    continue _fun99379
                }
            case 25:
                var2 = global;
                var4 = var2.Date;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                _fun99379_ip = 48;
                continue _fun99379;
            case 44:
                var2 = arguments[var0];
            case 48:
                var0 = global;
                var5 = var0.parseInt;
                var1 = var0.HermesInternal;
                var1 = var1.concat;
                var6 = '';
                var4 = var1.bind(var6)(var7);
                var1 = 10;
                var4 = var5.bind(var3)(var4, var1);
                var1 = var0.isNaN;
                var1 = var1.bind(var3)(var4);
                if (var1) {
                    _fun99379_ip = 111;
                    continue _fun99379
                }
            case 99:
                var1 = 1000;
                var1 = var1 * var4;
                return var1;
            case 111:
                var5 = var0.Date;
                var4 = var5.parse;
                var1 = var0.HermesInternal;
                var1 = var1.concat;
                var1 = var1.bind(var6)(var7);
                var1 = var4.bind(var5)(var1);
                var0 = var0.isNaN;
                var3 = var0.bind(var3)(var1);
                var0 = 60000;
                if (var3) {
                    _fun99379_ip = 168;
                    continue _fun99379
                }
            case 164:
                var0 = var1 - var2;
            case 168:
                return var0;
        }
    };
    var _closure1_slot1 = var3;
    var4 = function(arg0, arg1) { // Original name: disabledUntil, environment: var1
        _fun99380: for (var _fun99380_ip = 0;;) switch (_fun99380_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var0 = var1[var0];
                if (var0) {
                    _fun99380_ip = 19;
                    continue _fun99380
                }
            case 13:
                var0 = var1.all;
            case 19:
                if (var0) {
                    _fun99380_ip = 24;
                    continue _fun99380
                }
            case 22:
                var0 = 0;
            case 24:
                return var0;
        }
    };
    var _closure1_slot2 = var4;
    var5 = arg6;
    var0 = 0;
    var6 = var5[var0];
    var5 = arg1;
    var0 = undefined;
    var5 = var5.bind(var0)(var6);
    var _closure1_slot0 = var5;
    var5 = global;
    var8 = var5.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var5 = true;
    var6.value = var5;
    var5 = '__esModule';
    var5 = var7.bind(var8)(var2, var5, var6);
    var5 = 60000;
    var2.DEFAULT_RETRY_AFTER = var5;
    var2.disabledUntil = var4;
    var4 = function(arg0, arg1) { // Original name: isRateLimited, environment: var1
        _fun99381: for (var _fun99381_ip = 0;;) switch (_fun99381_ip) {
            case 0:
                var4 = undefined;
                var2 = undefined;
                var1 = arguments.length;
                var0 = 2;
                if (!(var1 > var0)) {
                    _fun99381_ip = 22;
                    continue _fun99381
                }
            case 14:
                var1 = arguments[var0];
                if (!(var4 === var1)) {
                    _fun99381_ip = 41;
                    continue _fun99381
                }
            case 22:
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                _fun99381_ip = 45;
                continue _fun99381;
            case 41:
                var1 = arguments[var0];
            case 45:
                var3 = _closure1_slot2;
                var2 = arg0;
                var0 = arg1;
                var0 = var3.bind(var4)(var2, var0);
                var0 = var0 > var1;
                return var0;
        }
    };
    var2.isRateLimited = var4;
    var2.parseRetryAfterHeader = var3;
    var1 = function(arg0, arg1) { // Original name: updateRateLimits, environment: var1
        _fun99382: for (var _fun99382_ip = 0;;) switch (_fun99382_ip) {
            case 0:
                var1 = arg1;
                var16 = undefined;
                var5 = undefined;
                var17 = undefined;
                var0 = undefined;
                var18 = undefined;
                var19 = undefined;
                var20 = undefined;
                var21 = undefined;
                var22 = undefined;
                var3 = var1.statusCode;
                var1 = var1.headers;
                var2 = arguments.length;
                var4 = 2;
                if (!(var2 > var4)) {
                    _fun99382_ip = 51;
                    continue _fun99382
                }
            case 43:
                var2 = arguments[var4];
                if (!(var16 === var2)) {
                    _fun99382_ip = 70;
                    continue _fun99382
                }
            case 51:
                var2 = global;
                var6 = var2.Date;
                var2 = var6.now;
                var2 = var2.bind(var6)();
                _fun99382_ip = 74;
                continue _fun99382;
            case 70:
                var2 = arguments[var4];
            case 74:
                var17 = var2;
                var15 = global;
                var6 = var15.Object;
                var5 = var6.assign;
                var4 = {};
                var2 = arg0;
                var0 = var5.bind(var6)(var4, var2);
                var2 = var1;
                if (!var1) {
                    _fun99382_ip = 113;
                    continue _fun99382
                }
            case 107:
                var2 = var1["x-sentry-rate-limits"];
            case 113:
                var5 = var1;
                if (!var5) {
                    _fun99382_ip = 125;
                    continue _fun99382
                }
            case 119:
                var5 = var1["retry-after"];
            case 125:
                if (var2) {
                    _fun99382_ip = 205;
                    continue _fun99382
                }
            case 128:
                if (var5) {
                    _fun99382_ip = 171;
                    continue _fun99382
                }
            case 131:
                var1 = 429;
                if (!(var1 === var3)) {
                    _fun99382_ip = 514;
                    continue _fun99382
                }
            case 144:
                var3 = var0;
                var4 = var17;
                var1 = 60000;
                var1 = var4 + var1;
                var3.all = var1;
                _fun99382_ip = 514;
                continue _fun99382;
            case 171:
                var3 = var0;
                var4 = var17;
                var1 = _closure1_slot1;
                var1 = var1.bind(var16)(var5, var4);
                var1 = var4 + var1;
                var3.all = var1;
                _fun99382_ip = 514;
                continue _fun99382;
            case 205:
                var1 = var2.trim;
                var3 = var1.bind(var2)();
                var2 = var3.split;
                var1 = ',';
                var1 = var2.bind(var3)(var1);
                var14 = var1;
                var2 = var14[Symbol.iterator];
                var14 = var2().next;
                var13 = ';';
                var12 = 'custom';
                var11 = 'metric_bucket';
                var10 = 1000;
                var9 = ':';
                var8 = 5;
                var6 = 0;
                var5 = 1;
                var4 = 4;
                var3 = 10;
                var1 = 60;
            case 279:
                var24 = var14().value;
                var23 = var2;
                if (!(var23 !== var16)) {
                    _fun99382_ip = 514;
                    continue _fun99382
                }
            case 293: // try_start_1
                var23 = var24.split;
                var24 = var23.bind(var24)(var9, var8);
                var23 = _closure1_slot0;
                var23 = var23.bind(var16)(var24, var8);
                var24 = var23[var6];
                var18 = var23[var5];
                var19 = var23[var4];
                var23 = var15.parseInt;
                var24 = var23.bind(var16)(var24, var3);
                var20 = var24;
                var23 = var15.isNaN;
                var24 = var23.bind(var16)(var24);
                var23 = var1;
                if (var24) {
                    _fun99382_ip = 361;
                    continue _fun99382
                }
            case 358:
                var23 = var20;
            case 361:
                var21 = var10 * var23;
                var23 = var18;
                if (var23) {
                    _fun99382_ip = 392;
                    continue _fun99382
                }
            case 371:
                var24 = var0;
                var25 = var17;
                var23 = var21;
                var23 = var25 + var23;
                var24.all = var23;
                _fun99382_ip = 502;
                continue _fun99382;
            case 392:
                var24 = var18;
                var23 = var24.split;
                var25 = var23.bind(var24)(var13);
                var23 = var25;
                var24 = var23[Symbol.iterator];
                var23 = var24().next;
            case 411:
                var27 = var23().value;
                var25 = var24;
                if (!(var25 !== var16)) {
                    _fun99382_ip = 502;
                    continue _fun99382
                }
            case 422: // try_start_0
                var22 = var27;
                var27 = var11 === var27;
                var26 = var27;
                if (!var27) {
                    _fun99382_ip = 438;
                    continue _fun99382
                }
            case 435:
                var26 = var19;
            case 438:
                var25 = var26;
                if (!var26) {
                    _fun99382_ip = 470;
                    continue _fun99382
                }
            case 444:
                var27 = var19;
                var26 = var27.split;
                var27 = var26.bind(var27)(var13);
                var26 = var27.includes;
                var26 = var26.bind(var27)(var12);
                var25 = !var26;
            case 470:
                if (var25) {
                    _fun99382_ip = 493;
                    continue _fun99382
                }
            case 473:
                var27 = var0;
                var26 = var22;
                var28 = var17;
                var25 = var21;
                var25 = var28 + var25;
                var27[var26] = var25;
            case 493: // try_end0
                _fun99382_ip = 411;
                continue _fun99382;
            case 495: // catch_target0
                CatchBlockStart(arg_register = 23);
                var24.return();
                throw var23;
            case 502: // try_end1
                _fun99382_ip = 279;
                continue _fun99382;
            case 507: // catch_target1
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 514:
                return var0;
        }
    };
    var2.updateRateLimits = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57]);