// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var4 = function(arg0) { // Original name: isValidProfile, environment: var1
        var0 = arg0;
        var0 = var0.samples;
        var1 = var0.length;
        var0 = 1;
        var0 = var1 <= var0;
        var0 = !var0;
        return var0;
    };
    var _closure1_slot3 = var4;
    var3 = function(arg0, arg1, arg2) { // Original name: enrichAndroidProfileWithEventContext, environment: var1
        _fun12241: for (var _fun12241_ip = 0;;) switch (_fun12241_ip) {
            case 0:
                var5 = arg1;
                var4 = arg2;
                var6 = global;
                var3 = var6.Object;
                var2 = var3.assign;
                var7 = var6.Object;
                var1 = var7.assign;
                var0 = {};
                var1 = var1.bind(var7)(var0, var5);
                var0 = {};
                var8 = {};
                var11 = _closure1_slot0;
                var10 = _closure1_slot1;
                var7 = 3;
                var10 = var10[var7];
                var7 = undefined;
                var11 = var11.bind(var7)(var10);
                var10 = var11.getDebugMetadata;
                var10 = var10.bind(var11)();
                var8.images = var10;
                var0.debug_meta = var8;
                var5 = var5.build_id;
                if (var5) {
                    _fun12241_ip = 100;
                    continue _fun12241
                }
            case 96:
                var5 = '';
            case 100:
                var0.build_id = var5;
                var5 = new Array(0);
                var0.device_cpu_frequencies = var5;
                var5 = var4.contexts;
                var8 = null;
                var10 = undefined;
                if (!(var8 !== var5)) {
                    _fun12241_ip = 140;
                    continue _fun12241
                }
            case 128:
                var10 = undefined;
                if (!(var7 !== var5)) {
                    _fun12241_ip = 140;
                    continue _fun12241
                }
            case 134:
                var10 = var5.device;
            case 140:
                var5 = undefined;
                if (!(var8 !== var10)) {
                    _fun12241_ip = 158;
                    continue _fun12241
                }
            case 146:
                var5 = undefined;
                if (!(var7 !== var10)) {
                    _fun12241_ip = 158;
                    continue _fun12241
                }
            case 152:
                var5 = var10.simulator;
            case 158:
                if (var5) {
                    _fun12241_ip = 163;
                    continue _fun12241
                }
            case 161:
                var5 = false;
            case 163:
                var0.device_is_emulator = var5;
                var10 = var4.contexts;
                var5 = undefined;
                if (!(var8 !== var10)) {
                    _fun12241_ip = 192;
                    continue _fun12241
                }
            case 180:
                var5 = undefined;
                if (!(var7 !== var10)) {
                    _fun12241_ip = 192;
                    continue _fun12241
                }
            case 186:
                var5 = var10.device;
            case 192:
                if (!var5) {
                    _fun12241_ip = 213;
                    continue _fun12241
                }
            case 195:
                var10 = var4.contexts;
                var10 = var10.device;
                var5 = var10.locale;
            case 213:
                if (var5) {
                    _fun12241_ip = 220;
                    continue _fun12241
                }
            case 216:
                var5 = '';
            case 220:
                var0.device_locale = var5;
                var5 = var4.contexts;
                var10 = undefined;
                if (!(var8 !== var5)) {
                    _fun12241_ip = 249;
                    continue _fun12241
                }
            case 237:
                var10 = undefined;
                if (!(var7 !== var5)) {
                    _fun12241_ip = 249;
                    continue _fun12241
                }
            case 243:
                var10 = var5.device;
            case 249:
                var5 = undefined;
                if (!(var8 !== var10)) {
                    _fun12241_ip = 267;
                    continue _fun12241
                }
            case 255:
                var5 = undefined;
                if (!(var7 !== var10)) {
                    _fun12241_ip = 267;
                    continue _fun12241
                }
            case 261:
                var5 = var10.manufacturer;
            case 267:
                if (var5) {
                    _fun12241_ip = 274;
                    continue _fun12241
                }
            case 270:
                var5 = '';
            case 274:
                var0.device_manufacturer = var5;
                var5 = var4.contexts;
                var10 = undefined;
                if (!(var8 !== var5)) {
                    _fun12241_ip = 303;
                    continue _fun12241
                }
            case 291:
                var10 = undefined;
                if (!(var7 !== var5)) {
                    _fun12241_ip = 303;
                    continue _fun12241
                }
            case 297:
                var10 = var5.device;
            case 303:
                var5 = undefined;
                if (!(var8 !== var10)) {
                    _fun12241_ip = 321;
                    continue _fun12241
                }
            case 309:
                var5 = undefined;
                if (!(var7 !== var10)) {
                    _fun12241_ip = 321;
                    continue _fun12241
                }
            case 315:
                var5 = var10.model;
            case 321:
                if (var5) {
                    _fun12241_ip = 328;
                    continue _fun12241
                }
            case 324:
                var5 = '';
            case 328:
                var0.device_model = var5;
                var5 = var4.contexts;
                var10 = undefined;
                if (!(var8 !== var5)) {
                    _fun12241_ip = 357;
                    continue _fun12241
                }
            case 345:
                var10 = undefined;
                if (!(var7 !== var5)) {
                    _fun12241_ip = 357;
                    continue _fun12241
                }
            case 351:
                var10 = var5.os;
            case 357:
                var5 = undefined;
                if (!(var8 !== var10)) {
                    _fun12241_ip = 374;
                    continue _fun12241
                }
            case 363:
                var5 = undefined;
                if (!(var7 !== var10)) {
                    _fun12241_ip = 374;
                    continue _fun12241
                }
            case 369:
                var5 = var10.name;
            case 374:
                if (var5) {
                    _fun12241_ip = 381;
                    continue _fun12241
                }
            case 377:
                var5 = '';
            case 381:
                var0.device_os_name = var5;
                var5 = var4.contexts;
                var10 = undefined;
                if (!(var8 !== var5)) {
                    _fun12241_ip = 410;
                    continue _fun12241
                }
            case 398:
                var10 = undefined;
                if (!(var7 !== var5)) {
                    _fun12241_ip = 410;
                    continue _fun12241
                }
            case 404:
                var10 = var5.os;
            case 410:
                var5 = undefined;
                if (!(var8 !== var10)) {
                    _fun12241_ip = 428;
                    continue _fun12241
                }
            case 416:
                var5 = undefined;
                if (!(var7 !== var10)) {
                    _fun12241_ip = 428;
                    continue _fun12241
                }
            case 422:
                var5 = var10.version;
            case 428:
                if (var5) {
                    _fun12241_ip = 435;
                    continue _fun12241
                }
            case 431:
                var5 = '';
            case 435:
                var0.device_os_version = var5;
                var5 = var4.contexts;
                var10 = undefined;
                if (!(var8 !== var5)) {
                    _fun12241_ip = 464;
                    continue _fun12241
                }
            case 452:
                var10 = undefined;
                if (!(var7 !== var5)) {
                    _fun12241_ip = 464;
                    continue _fun12241
                }
            case 458:
                var10 = var5.device;
            case 464:
                var5 = undefined;
                if (!(var8 !== var10)) {
                    _fun12241_ip = 482;
                    continue _fun12241
                }
            case 470:
                var5 = undefined;
                if (!(var7 !== var10)) {
                    _fun12241_ip = 482;
                    continue _fun12241
                }
            case 476:
                var5 = var10.memory_size;
            case 482:
                if (!var5) {
                    _fun12241_ip = 527;
                    continue _fun12241
                }
            case 485:
                var11 = var6.Number;
                var10 = var4.contexts;
                var10 = var10.device;
                var10 = var10.memory_size;
                var12 = var11.bind(var7)(var10);
                var11 = var12.toString;
                var10 = 10;
                var5 = var11.bind(var12)(var10);
            case 527:
                if (var5) {
                    _fun12241_ip = 534;
                    continue _fun12241
                }
            case 530:
                var5 = '';
            case 534:
                var0.device_physical_memory_bytes = var5;
                var5 = var4.environment;
                if (var5) {
                    _fun12241_ip = 578;
                    continue _fun12241
                }
            case 548:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var9 = 2;
                var9 = var11[var9];
                var10 = var10.bind(var7)(var9);
                var9 = var10.getDefaultEnvironment;
                var5 = var9.bind(var10)();
            case 578:
                var0.environment = var5;
                var5 = arg0;
                var0.profile_id = var5;
                var5 = var4.start_timestamp;
                var10 = var6.Date;
                if (var5) {
                    _fun12241_ip = 638;
                    continue _fun12241
                }
            case 606:
                var5 = var10.prototype;
                var6 = Object.create(var5, {
                    constructor: {
                        value: var10
                    }
                });
                var15 = var6;
                var5 = new var15[var10](var14);
                var6 = var5 instanceof Object ? var5 : var6;
                var5 = var6.toISOString;
                var5 = var5.bind(var6)();
                _fun12241_ip = 684;
                continue _fun12241;
            case 638:
                var9 = var4.start_timestamp;
                var6 = 1000;
                var14 = var6 * var9;
                var9 = var10.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var10
                    }
                });
                var15 = var9;
                var6 = new var15[var10](var14, var13);
                var9 = var6 instanceof Object ? var6 : var9;
                var6 = var9.toISOString;
                var5 = var6.bind(var9)();
            case 684:
                var0.timestamp = var5;
                var5 = var4.release;
                if (var5) {
                    _fun12241_ip = 702;
                    continue _fun12241
                }
            case 698:
                var5 = '';
            case 702:
                var0.release = var5;
                var5 = var4.dist;
                if (var5) {
                    _fun12241_ip = 720;
                    continue _fun12241
                }
            case 716:
                var5 = '';
            case 720:
                var0.dist = var5;
                var5 = var4.event_id;
                if (var5) {
                    _fun12241_ip = 738;
                    continue _fun12241
                }
            case 734:
                var5 = '';
            case 738:
                var0.transaction_id = var5;
                var5 = var4.transaction;
                if (var5) {
                    _fun12241_ip = 756;
                    continue _fun12241
                }
            case 752:
                var5 = '';
            case 756:
                var0.transaction_name = var5;
                var5 = var4.contexts;
                var6 = undefined;
                if (!(var8 !== var5)) {
                    _fun12241_ip = 785;
                    continue _fun12241
                }
            case 773:
                var6 = undefined;
                if (!(var7 !== var5)) {
                    _fun12241_ip = 785;
                    continue _fun12241
                }
            case 779:
                var6 = var5.trace;
            case 785:
                var5 = undefined;
                if (!(var8 !== var6)) {
                    _fun12241_ip = 803;
                    continue _fun12241
                }
            case 791:
                var5 = undefined;
                if (!(var5 !== var6)) {
                    _fun12241_ip = 803;
                    continue _fun12241
                }
            case 797:
                var5 = var6.trace_id;
            case 803:
                if (var5) {
                    _fun12241_ip = 810;
                    continue _fun12241
                }
            case 806:
                var5 = '';
            case 810:
                var0.trace_id = var5;
                var5 = var4.release;
                if (var5) {
                    _fun12241_ip = 828;
                    continue _fun12241
                }
            case 824:
                var5 = '';
            case 828:
                var0.version_name = var5;
                var4 = var4.dist;
                if (var4) {
                    _fun12241_ip = 846;
                    continue _fun12241
                }
            case 842:
                var4 = '';
            case 846:
                var0.version_code = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var5 = arg2;
    var0 = undefined;
    var5 = var5.bind(var0)(var6);
    var _closure1_slot2 = var5;
    var2.isValidProfile = var4;
    var4 = function(arg0) { // Original name: findProfiledTransactionsFromEnvelope, environment: var1
        var0 = new Array(0);
        var _closure2_slot0 = var0;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.forEachEnvelopeItem;
        var2 = arg0;
        var1 = function(arg0, arg1) { // Environment: var1
            _fun12243: for (var _fun12243_ip = 0;;) switch (_fun12243_ip) {
                case 0:
                    var5 = arg0;
                    var1 = 'transaction';
                    var0 = arg1;
                    if (!(var1 === var0)) {
                        _fun12243_ip = 132;
                        continue _fun12243
                    }
                case 14:
                    var0 = var5.length;
                    var4 = 1;
                    var0 = var4 < var0;
                    var2 = undefined;
                    var1 = null;
                    if (!var0) {
                        _fun12243_ip = 132;
                        continue _fun12243
                    }
                case 36:
                    var0 = var5[var4];
                    var6 = var0.contexts;
                    var0 = undefined;
                    if (!(var1 !== var6)) {
                        _fun12243_ip = 64;
                        continue _fun12243
                    }
                case 52:
                    var0 = undefined;
                    if (!(var2 !== var6)) {
                        _fun12243_ip = 64;
                        continue _fun12243
                    }
                case 58:
                    var0 = var6.trace;
                case 64:
                    var6 = undefined;
                    if (!(var1 !== var0)) {
                        _fun12243_ip = 81;
                        continue _fun12243
                    }
                case 70:
                    var6 = undefined;
                    if (!(var2 !== var0)) {
                        _fun12243_ip = 81;
                        continue _fun12243
                    }
                case 76:
                    var6 = var0.data;
                case 81:
                    var0 = undefined;
                    if (!(var1 !== var6)) {
                        _fun12243_ip = 99;
                        continue _fun12243
                    }
                case 87:
                    var0 = undefined;
                    if (!(var0 !== var6)) {
                        _fun12243_ip = 99;
                        continue _fun12243
                    }
                case 93:
                    var0 = var6.profile_id;
                case 99:
                    if (!var0) {
                        _fun12243_ip = 120;
                        continue _fun12243
                    }
                case 102:
                    var7 = _closure2_slot0;
                    var6 = var7.push;
                    var0 = var5[var4];
                    var0 = var6.bind(var7)(var0);
                case 120:
                    var4 = var4 + 1;
                    var0 = var5.length;
                    if (var4 < var0) {
                        _fun12243_ip = 36;
                        continue _fun12243
                    }
                case 132:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.findProfiledTransactionsFromEnvelope = var4;
    var4 = function(arg0, arg1, arg2) { // Original name: enrichCombinedProfileWithEventContext, environment: var1
        _fun12244: for (var _fun12244_ip = 0;;) switch (_fun12244_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var2 = arg2;
                var0 = 'js_profile';
                var0 = var0 in var3;
                if (var0) {
                    _fun12244_ip = 963;
                    continue _fun12244
                }
            case 23:
                var0 = var3.profile;
                if (!var0) {
                    _fun12244_ip = 55;
                    continue _fun12244
                }
            case 32:
                var1 = _closure1_slot3;
                var0 = var3.profile;
                var13 = undefined;
                var0 = var1.bind(var13)(var0);
                if (var0) {
                    _fun12244_ip = 59;
                    continue _fun12244
                }
            case 55:
                var0 = null;
                return var0;
            case 59:
                var1 = var2.contexts;
                var15 = null;
                var0 = undefined;
                if (!(var15 !== var1)) {
                    _fun12244_ip = 85;
                    continue _fun12244
                }
            case 73:
                var0 = undefined;
                if (!(var13 !== var1)) {
                    _fun12244_ip = 85;
                    continue _fun12244
                }
            case 79:
                var0 = var1.trace;
            case 85:
                var9 = undefined;
                if (!(var15 !== var0)) {
                    _fun12244_ip = 103;
                    continue _fun12244
                }
            case 91:
                var9 = undefined;
                if (!(var13 !== var0)) {
                    _fun12244_ip = 103;
                    continue _fun12244
                }
            case 97:
                var9 = var0.trace_id;
            case 103:
                if (var9) {
                    _fun12244_ip = 110;
                    continue _fun12244
                }
            case 106:
                var9 = '';
            case 110:
                if (!(var15 != var9)) {
                    _fun12244_ip = 119;
                    continue _fun12244
                }
            case 114:
                var0 = var9.length;
            case 119:
                var11 = global;
                var6 = var11.Object;
                var5 = var6.assign;
                var7 = var11.Object;
                var1 = var7.assign;
                var0 = {};
                var1 = var1.bind(var7)(var0, var3);
                var0 = {};
                var0.event_id = var4;
                var10 = '';
                var7 = {
                    'name': 'hermes',
                    'version': ''
                };
                var0.runtime = var7;
                var7 = var2.start_timestamp;
                var14 = var11.Date;
                if (var7) {
                    _fun12244_ip = 224;
                    continue _fun12244
                }
            case 192:
                var7 = var14.prototype;
                var11 = Object.create(var7, {
                    constructor: {
                        value: var14
                    }
                });
                var19 = var11;
                var7 = new var19[var14](var18);
                var11 = var7 instanceof Object ? var7 : var11;
                var7 = var11.toISOString;
                var7 = var7.bind(var11)();
                _fun12244_ip = 270;
                continue _fun12244;
            case 224:
                var12 = var2.start_timestamp;
                var11 = 1000;
                var18 = var11 * var12;
                var12 = var14.prototype;
                var12 = Object.create(var12, {
                    constructor: {
                        value: var14
                    }
                });
                var19 = var12;
                var11 = new var19[var14](var18, var17);
                var12 = var11 instanceof Object ? var11 : var12;
                var11 = var12.toISOString;
                var7 = var11.bind(var12)();
            case 270:
                var0.timestamp = var7;
                var7 = var2.release;
                if (var7) {
                    _fun12244_ip = 287;
                    continue _fun12244
                }
            case 284:
                var7 = var10;
            case 287:
                var0.release = var7;
                var7 = var2.environment;
                if (var7) {
                    _fun12244_ip = 331;
                    continue _fun12244
                }
            case 301:
                var12 = _closure1_slot0;
                var14 = _closure1_slot1;
                var11 = 2;
                var11 = var14[var11];
                var12 = var12.bind(var13)(var11);
                var11 = var12.getDefaultEnvironment;
                var7 = var11.bind(var12)();
            case 331:
                var0.environment = var7;
                var7 = {};
                var11 = var2.contexts;
                var12 = undefined;
                if (!(var15 !== var11)) {
                    _fun12244_ip = 362;
                    continue _fun12244
                }
            case 350:
                var12 = undefined;
                if (!(var13 !== var11)) {
                    _fun12244_ip = 362;
                    continue _fun12244
                }
            case 356:
                var12 = var11.os;
            case 362:
                var11 = undefined;
                if (!(var15 !== var12)) {
                    _fun12244_ip = 379;
                    continue _fun12244
                }
            case 368:
                var11 = undefined;
                if (!(var13 !== var12)) {
                    _fun12244_ip = 379;
                    continue _fun12244
                }
            case 374:
                var11 = var12.name;
            case 379:
                if (var11) {
                    _fun12244_ip = 385;
                    continue _fun12244
                }
            case 382:
                var11 = var10;
            case 385:
                var7.name = var11;
                var11 = var2.contexts;
                var12 = undefined;
                if (!(var15 !== var11)) {
                    _fun12244_ip = 413;
                    continue _fun12244
                }
            case 401:
                var12 = undefined;
                if (!(var13 !== var11)) {
                    _fun12244_ip = 413;
                    continue _fun12244
                }
            case 407:
                var12 = var11.os;
            case 413:
                var11 = undefined;
                if (!(var15 !== var12)) {
                    _fun12244_ip = 431;
                    continue _fun12244
                }
            case 419:
                var11 = undefined;
                if (!(var13 !== var12)) {
                    _fun12244_ip = 431;
                    continue _fun12244
                }
            case 425:
                var11 = var12.version;
            case 431:
                if (var11) {
                    _fun12244_ip = 437;
                    continue _fun12244
                }
            case 434:
                var11 = var10;
            case 437:
                var7.version = var11;
                var11 = var2.contexts;
                var12 = undefined;
                if (!(var15 !== var11)) {
                    _fun12244_ip = 466;
                    continue _fun12244
                }
            case 454:
                var12 = undefined;
                if (!(var13 !== var11)) {
                    _fun12244_ip = 466;
                    continue _fun12244
                }
            case 460:
                var12 = var11.os;
            case 466:
                var11 = undefined;
                if (!(var15 !== var12)) {
                    _fun12244_ip = 484;
                    continue _fun12244
                }
            case 472:
                var11 = undefined;
                if (!(var13 !== var12)) {
                    _fun12244_ip = 484;
                    continue _fun12244
                }
            case 478:
                var11 = var12.build;
            case 484:
                if (var11) {
                    _fun12244_ip = 490;
                    continue _fun12244
                }
            case 487:
                var11 = var10;
            case 490:
                var7.build_number = var11;
                var0.os = var7;
                var7 = {};
                var12 = var2.contexts;
                var11 = undefined;
                if (!(var15 !== var12)) {
                    _fun12244_ip = 526;
                    continue _fun12244
                }
            case 514:
                var11 = undefined;
                if (!(var13 !== var12)) {
                    _fun12244_ip = 526;
                    continue _fun12244
                }
            case 520:
                var11 = var12.device;
            case 526:
                if (!var11) {
                    _fun12244_ip = 547;
                    continue _fun12244
                }
            case 529:
                var12 = var2.contexts;
                var12 = var12.device;
                var11 = var12.locale;
            case 547:
                if (var11) {
                    _fun12244_ip = 553;
                    continue _fun12244
                }
            case 550:
                var11 = var10;
            case 553:
                var7.locale = var11;
                var11 = var2.contexts;
                var12 = undefined;
                if (!(var15 !== var11)) {
                    _fun12244_ip = 582;
                    continue _fun12244
                }
            case 570:
                var12 = undefined;
                if (!(var13 !== var11)) {
                    _fun12244_ip = 582;
                    continue _fun12244
                }
            case 576:
                var12 = var11.device;
            case 582:
                var11 = undefined;
                if (!(var15 !== var12)) {
                    _fun12244_ip = 600;
                    continue _fun12244
                }
            case 588:
                var11 = undefined;
                if (!(var13 !== var12)) {
                    _fun12244_ip = 600;
                    continue _fun12244
                }
            case 594:
                var11 = var12.model;
            case 600:
                if (var11) {
                    _fun12244_ip = 606;
                    continue _fun12244
                }
            case 603:
                var11 = var10;
            case 606:
                var7.model = var11;
                var11 = var2.contexts;
                var12 = undefined;
                if (!(var15 !== var11)) {
                    _fun12244_ip = 635;
                    continue _fun12244
                }
            case 623:
                var12 = undefined;
                if (!(var13 !== var11)) {
                    _fun12244_ip = 635;
                    continue _fun12244
                }
            case 629:
                var12 = var11.device;
            case 635:
                var11 = undefined;
                if (!(var15 !== var12)) {
                    _fun12244_ip = 653;
                    continue _fun12244
                }
            case 641:
                var11 = undefined;
                if (!(var13 !== var12)) {
                    _fun12244_ip = 653;
                    continue _fun12244
                }
            case 647:
                var11 = var12.manufacturer;
            case 653:
                if (var11) {
                    _fun12244_ip = 659;
                    continue _fun12244
                }
            case 656:
                var11 = var10;
            case 659:
                var7.manufacturer = var11;
                var11 = var2.contexts;
                var12 = undefined;
                if (!(var15 !== var11)) {
                    _fun12244_ip = 688;
                    continue _fun12244
                }
            case 676:
                var12 = undefined;
                if (!(var13 !== var11)) {
                    _fun12244_ip = 688;
                    continue _fun12244
                }
            case 682:
                var12 = var11.device;
            case 688:
                var11 = undefined;
                if (!(var15 !== var12)) {
                    _fun12244_ip = 706;
                    continue _fun12244
                }
            case 694:
                var11 = undefined;
                if (!(var13 !== var12)) {
                    _fun12244_ip = 706;
                    continue _fun12244
                }
            case 700:
                var11 = var12.arch;
            case 706:
                if (var11) {
                    _fun12244_ip = 712;
                    continue _fun12244
                }
            case 709:
                var11 = var10;
            case 712:
                var7.architecture = var11;
                var11 = var2.contexts;
                var12 = undefined;
                if (!(var15 !== var11)) {
                    _fun12244_ip = 741;
                    continue _fun12244
                }
            case 729:
                var12 = undefined;
                if (!(var13 !== var11)) {
                    _fun12244_ip = 741;
                    continue _fun12244
                }
            case 735:
                var12 = var11.device;
            case 741:
                var11 = undefined;
                if (!(var15 !== var12)) {
                    _fun12244_ip = 759;
                    continue _fun12244
                }
            case 747:
                var11 = undefined;
                if (!(var13 !== var12)) {
                    _fun12244_ip = 759;
                    continue _fun12244
                }
            case 753:
                var11 = var12.simulator;
            case 759:
                if (var11) {
                    _fun12244_ip = 764;
                    continue _fun12244
                }
            case 762:
                var11 = false;
            case 764:
                var7.is_emulator = var11;
                var0.device = var7;
                var7 = {};
                var11 = var2.transaction;
                if (var11) {
                    _fun12244_ip = 788;
                    continue _fun12244
                }
            case 785:
                var11 = var10;
            case 788:
                var7.name = var11;
                var11 = var2.event_id;
                if (var11) {
                    _fun12244_ip = 804;
                    continue _fun12244
                }
            case 801:
                var11 = var10;
            case 804:
                var7.id = var11;
                var7.trace_id = var9;
                var11 = var3.transaction;
                var9 = undefined;
                if (!(var15 !== var11)) {
                    _fun12244_ip = 837;
                    continue _fun12244
                }
            case 825:
                var9 = undefined;
                if (!(var13 !== var11)) {
                    _fun12244_ip = 837;
                    continue _fun12244
                }
            case 831:
                var9 = var11.active_thread_id;
            case 837:
                if (var9) {
                    _fun12244_ip = 843;
                    continue _fun12244
                }
            case 840:
                var9 = var10;
            case 843:
                var7.active_thread_id = var9;
                var0.transaction = var7;
                var7 = {};
                var11 = new Array(0);
                var10 = var11.concat;
                var12 = _closure1_slot2;
                var9 = _closure1_slot0;
                var14 = _closure1_slot1;
                var8 = 3;
                var8 = var14[var8];
                var9 = var9.bind(var13)(var8);
                var8 = var9.getDebugMetadata;
                var8 = var8.bind(var9)();
                var9 = var12.bind(var13)(var8);
                var14 = var3.debug_meta;
                var8 = undefined;
                if (!(var15 !== var14)) {
                    _fun12244_ip = 927;
                    continue _fun12244
                }
            case 915:
                var8 = undefined;
                if (!(var8 !== var14)) {
                    _fun12244_ip = 927;
                    continue _fun12244
                }
            case 921:
                var8 = var14.images;
            case 927:
                if (var8) {
                    _fun12244_ip = 934;
                    continue _fun12244
                }
            case 930:
                var8 = new Array(0);
            case 934:
                var8 = var12.bind(var13)(var8);
                var8 = var10.bind(var11)(var9, var8);
                var7.images = var8;
                var0.debug_meta = var7;
                var0 = var5.bind(var6)(var1, var0);
                return var0;
            case 963:
                var1 = _closure1_slot4;
                var0 = undefined;
                var0 = var1.bind(var0)(var4, var3, var2);
                return var0;
        }
    };
    var2.enrichCombinedProfileWithEventContext = var4;
    var2.enrichAndroidProfileWithEventContext = var3;
    var3 = function(arg0) { // Original name: createHermesProfilingEvent, environment: var1
        var2 = arg0;
        var0 = {
            'platform': 'javascript',
            'version': '1'
        };
        var0.profile = var2;
        var1 = {};
        var2 = var2.active_thread_id;
        var1.active_thread_id = var2;
        var0.transaction = var1;
        return var0;
    };
    var2.createHermesProfilingEvent = var3;
    var1 = function(arg0, arg1) { // Original name: addProfilesToEnvelope, environment: var1
        _fun12246: for (var _fun12246_ip = 0;;) switch (_fun12246_ip) {
            case 0:
                var1 = arg1;
                var0 = arg0;
                var2 = var1.length;
                if (var2) {
                    _fun12246_ip = 19;
                    continue _fun12246
                }
            case 14:
                var2 = var0;
                return var2;
            case 19:
                var5 = var1;
                var2 = var5[Symbol.iterator];
                var5 = var2().next;
                var4 = 1;
                var3 = 'profile';
                var1 = undefined;
            case 34:
                var9 = var5().value;
                var6 = var2;
                if (!(var6 !== var1)) {
                    _fun12246_ip = 89;
                    continue _fun12246
                }
            case 45: // try_start_0
                var6 = var0;
                var8 = var6[var4];
                var7 = var8.push;
                var10 = {};
                var10.type = var3;
                var6 = new Array(2);
                var6[0] = var10;
                var6[1] = var9;
                var6 = var7.bind(var8)(var6);
            case 80: // try_end0
                _fun12246_ip = 34;
                continue _fun12246;
            case 82: // catch_target0
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 89:
                return var0;
        }
    };
    var2.addProfilesToEnvelope = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 817, 999, 1115]);