// stores/ExternalStreamingStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun50390: for (var _fun50390_ip = 0;;) switch (_fun50390_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun50390_ip = 74;
                continue _fun50390;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot21 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function arg0, arg1, arg2() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 10;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.get;
        var0 = {};
        var4 = global;
        var3 = var4.HermesInternal;
        var6 = var3.concat;
        var5 = 'https://api.twitch.tv/helix';
        var3 = arg0;
        var3 = var6.bind(var5)(var3);
        var0.url = var3;
        var3 = arg1;
        var0.query = var3;
        var3 = {};
        var5 = '33kozedd0zs6fbauka98psnc7zwom2s';
        var3['Client-ID'] = var5;
        var4 = var4.HermesInternal;
        var6 = var4.concat;
        var5 = 'Bearer ';
        var4 = arg2;
        var4 = var6.bind(var5)(var4);
        var3.Authorization = var4;
        var0.headers = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot22 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun50396: for (var _fun50396_ip = 0;;) switch (_fun50396_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun50396_ip = 112;
                            continue _fun50396
                        }
                    case 10:
                        var1 = _closure1_slot19;
                        var1 = var1[var5];
                        var7 = null;
                        if (!(var7 == var1)) {
                            _fun50396_ip = 109;
                            continue _fun50396
                        }
                    case 27:
                        var9 = _closure1_slot22;
                        var8 = {};
                        var8.id = var5;
                        var3 = undefined;
                        var6 = '/games';
                        var2 = arg1;
                        var2 = var9.bind(var3)(var6, var8, var2);
                        SaveGenerator(address = 59);
                    case 57:
                        return var2;
                    case 59:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun50396_ip = 106;
                            continue _fun50396
                        }
                    case 65:
                        var6 = var2.body;
                        var8 = var6.data;
                        var6 = 0;
                        var6 = var8[var6];
                        var7 = var7 == var6;
                        var3 = undefined;
                        if (var7) {
                            _fun50396_ip = 95;
                            continue _fun50396
                        }
                    case 90:
                        var3 = var6.name;
                    case 95:
                        var4 = _closure1_slot19;
                        var4[var5] = var3;
                        return var3;
                    case 106:
                        return var2;
                    case 109:
                        return var1;
                    case 112:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot23 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot23 = var0;
    var0 = function() {
        _fun50397: for (var _fun50397_ip = 0;;) switch (_fun50397_ip) {
            case 0:
                var0 = _closure1_slot10;
                var0 = var0.enabled;
                var1 = _closure1_slot20;
                if (var0) {
                    _fun50397_ip = 31;
                    continue _fun50397
                }
            case 19:
                var0 = var1.stop;
                var0 = var0.bind(var1)();
                _fun50397_ip = 40;
                continue _fun50397;
            case 31:
                var0 = var1.start;
                var0 = var0.bind(var1)();
            case 40:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var8 = 0;
    var7 = var5[var8];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var11 = 1;
    var7 = var5[var11];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var9 = 5;
    var7 = var5[var9];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.PlatformTypes;
    var _closure1_slot11 = var7;
    var7 = 9;
    var10 = var5[var7];
    var10 = var6.bind(var0)(var10);
    var10 = var10.Millis;
    var10 = var10.MINUTE;
    var10 = var11 * var10;
    var _closure1_slot12 = var10;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var7 = var7.Millis;
    var7 = var7.MINUTE;
    var7 = var9 * var7;
    var _closure1_slot13 = var7;
    var7 = /live_user_(.*)-\{width\}/;
    var _closure1_slot14 = var7;
    var7 = null;
    var _closure1_slot15 = var7;
    var _closure1_slot16 = var8;
    var _closure1_slot17 = var7;
    var1 = var1.Set;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var15 = var7;
    var1 = new var15[var1](var14);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot18 = var1;
    var1 = {};
    var _closure1_slot19 = var1;
    var1 = function() { // Environment: var3
        var3 = _closure1_slot7;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot6;
            var1 = _closure2_slot2;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = false;
            var2._started = var1;
            return var0;
        };
        var _closure2_slot2 = var2;
        var0 = {};
        var1 = 'start';
        var0.key = var1;
        var1 = function() {
            _fun50400: for (var _fun50400_ip = 0;;) switch (_fun50400_ip) {
                case 0:
                    var2 = this;
                    var0 = var2._started;
                    if (var0) {
                        _fun50400_ip = 84;
                        continue _fun50400
                    }
                case 12:
                    var0 = true;
                    var2._started = var0;
                    var3 = _closure1_slot9;
                    var1 = var3.isFetching;
                    var1 = var1.bind(var3)();
                    if (var1) {
                        _fun50400_ip = 52;
                        continue _fun50400
                    }
                case 40:
                    var1 = var2._check;
                    var1 = var1.bind(var2)();
                    _fun50400_ip = 84;
                    continue _fun50400;
                case 52:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.fetch;
                    var0 = var0.bind(var1)();
                case 84:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(6);
        var1[0] = var0;
        var0 = {};
        var4 = 'stop';
        var0.key = var4;
        var4 = function() {
            _fun50401: for (var _fun50401_ip = 0;;) switch (_fun50401_ip) {
                case 0:
                    var1 = this;
                    var0 = false;
                    var1._started = var0;
                    var3 = null;
                    _closure1_slot17 = var3;
                    var2 = 0;
                    _closure1_slot16 = var2;
                    var2 = var1._nextCheck;
                    if (!(var3 != var2)) {
                        _fun50401_ip = 57;
                        continue _fun50401
                    }
                case 36:
                    var2 = global;
                    var3 = var2.clearTimeout;
                    var2 = var1._nextCheck;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                case 57:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {
                        'type': 'STREAMING_UPDATE',
                        'stream': null
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.value = var4;
        var1[1] = var0;
        var4 = {};
        var0 = '_checkTwitch';
        var4.key = var0;
        var8 = _closure1_slot8;
        var0 = undefined;
        var7 = function*(arg0) { // Environment: var5
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun50403: for (var _fun50403_ip = 0;;) switch (_fun50403_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arg0;
                        var1 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun50403_ip = 790;
                            continue _fun50403
                        }
                    case 18:
                        var8 = this;
                        var _closure4_slot0 = var8;
                        var5 = var3;
                        var _closure4_slot1 = var3;
                        var8 = undefined;
                        if (!(var1 === var8)) {
                            _fun50403_ip = 40;
                            continue _fun50403
                        }
                    case 38:
                        var1 = null;
                    case 40:
                        var6 = var1;
                        var23 = undefined;
                        var16 = undefined;
                        var21 = undefined;
                        var19 = undefined;
                        var7 = undefined;
                        var15 = undefined;
                        var12 = undefined;
                        var14 = undefined;
                        var13 = undefined;
                        var18 = undefined;
                        var11 = undefined;
                        var10 = undefined;
                        SaveGenerator(address = 71);
                    case 69:
                        return var8;
                    case 71:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun50403_ip = 787;
                            continue _fun50403
                        }
                    case 80:
                        var2 = var5;
                        var3 = var2.revoked;
                        var2 = null;
                        if (var3) {
                            _fun50403_ip = 784;
                            continue _fun50403
                        }
                    case 97:
                        var3 = var6;
                        if (!(var2 == var3)) {
                            _fun50403_ip = 115;
                            continue _fun50403
                        }
                    case 104:
                        var3 = var5;
                        var3 = var3.accessToken;
                        _fun50403_ip = 118;
                        continue _fun50403;
                    case 115:
                        var3 = var6;
                    case 118:
                        var6 = var3;
                        if (!(var2 != var3)) {
                            _fun50403_ip = 781;
                            continue _fun50403
                        }
                    case 128: // try_start_0
                        var24 = _closure1_slot22;
                        var22 = {};
                        var3 = var5;
                        var3 = var3.id;
                        var22.user_id = var3;
                        var20 = 1;
                        var22.first = var20;
                        var17 = var6;
                        var3 = '/streams';
                        var3 = var24.bind(var8)(var3, var22, var17);
                        SaveGenerator(address = 178);
                    case 176:
                        return var3;
                    case 178:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 17);
                        if (var17) {
                            _fun50403_ip = 671;
                            continue _fun50403
                        }
                    case 187:
                        var17 = var3.body;
                        var22 = var17.data;
                        var17 = 0;
                        var22 = var22[var17];
                        var21 = var22;
                        if (!(var2 != var22)) {
                            _fun50403_ip = 635;
                            continue _fun50403
                        }
                    case 213:
                        var22 = var21;
                        var24 = var22.type;
                        var22 = 'live';
                        if (!(var22 === var24)) {
                            _fun50403_ip = 635;
                            continue _fun50403
                        }
                    case 232:
                        var22 = var21.thumbnail_url;
                        var19 = var22;
                        var7 = var21.game_id;
                        var15 = var21.title;
                        var21 = {};
                        var24 = var2 != var22;
                        var22 = undefined;
                        if (!var24) {
                            _fun50403_ip = 325;
                            continue _fun50403
                        }
                    case 265:
                        var25 = _closure1_slot0;
                        var26 = _closure1_slot2;
                        var24 = 13;
                        var24 = var26[var24];
                        var27 = var25.bind(var8)(var24);
                        var26 = var27.getAssetFromImageURL;
                        var24 = _closure1_slot11;
                        var25 = var24.TWITCH;
                        var24 = var19;
                        var24 = var26.bind(var27)(var25, var24);
                        var23 = var24;
                        var24 = var2 != var24;
                        var22 = undefined;
                        if (!var24) {
                            _fun50403_ip = 325;
                            continue _fun50403
                        }
                    case 322:
                        var22 = var23;
                    case 325:
                        var21.large_image = var22;
                        var12 = var21;
                        var22 = var7;
                        var21 = var6;
                        var7 = function() {
                            var0 = undefined;
                            var3 = _closure1_slot23;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var7 = var7.bind(var8)(var22, var21);
                        SaveGenerator(address = 354);
                    case 352:
                        return var7;
                    case 354:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 21);
                        if (var21) {
                            _fun50403_ip = 632;
                            continue _fun50403
                        }
                    case 363:
                        var14 = var7;
                        var22 = _closure1_slot1;
                        var23 = _closure1_slot2;
                        var21 = 14;
                        var21 = var23[var21];
                        var23 = var22.bind(var8)(var21);
                        var22 = var23.get;
                        var21 = _closure1_slot11;
                        var21 = var21.TWITCH;
                        var13 = var22.bind(var23)(var21);
                        var21 = var19;
                        var19 = _closure1_slot14;
                        var9 = var19.exec;
                        var19 = var9.bind(var19)(var21);
                        var21 = var2 == var19;
                        var9 = undefined;
                        if (var21) {
                            _fun50403_ip = 437;
                            continue _fun50403
                        }
                    case 433:
                        var9 = var19[var20];
                    case 437:
                        var16 = var9;
                        if (!(var2 == var9)) {
                            _fun50403_ip = 454;
                            continue _fun50403
                        }
                    case 444:
                        var9 = var5;
                        var9 = var9.name;
                        _fun50403_ip = 457;
                        continue _fun50403;
                    case 454:
                        var9 = var16;
                    case 457:
                        var18 = var9;
                        var9 = var15;
                        var16 = var2 != var9;
                        var9 = undefined;
                        if (!var16) {
                            _fun50403_ip = 502;
                            continue _fun50403
                        }
                    case 472:
                        var19 = var15;
                        var16 = '';
                        var9 = undefined;
                        if (!(var16 !== var19)) {
                            _fun50403_ip = 502;
                            continue _fun50403
                        }
                    case 485:
                        var19 = var15;
                        var16 = var19.slice;
                        var15 = 128;
                        var9 = var16.bind(var19)(var17, var15);
                    case 502:
                        var11 = var9;
                        var9 = var14;
                        var15 = var2 != var9;
                        var9 = undefined;
                        if (!var15) {
                            _fun50403_ip = 547;
                            continue _fun50403
                        }
                    case 517:
                        var16 = var14;
                        var15 = '';
                        var9 = undefined;
                        if (!(var15 !== var16)) {
                            _fun50403_ip = 547;
                            continue _fun50403
                        }
                    case 530:
                        var16 = var14;
                        var15 = var16.slice;
                        var14 = 128;
                        var9 = var15.bind(var16)(var17, var14);
                    case 547:
                        var10 = var9;
                        var9 = {};
                        var14 = var13;
                        var14 = var14.getPlatformUserUrl;
                        var15 = var2 == var14;
                        var14 = undefined;
                        if (var15) {
                            _fun50403_ip = 602;
                            continue _fun50403
                        }
                    case 570:
                        var17 = var13;
                        var16 = var17.getPlatformUserUrl;
                        var15 = {};
                        var19 = var5;
                        var19 = var19.id;
                        var15.id = var19;
                        var15.name = var18;
                        var14 = var16.bind(var17)(var15);
                    case 602:
                        var9.url = var14;
                        var13 = var13.name;
                        var9.name = var13;
                        var9.assets = var12;
                        var9.details = var11;
                        var9.state = var10;
                    case 629: // try_end0
                        return var9;
                    case 632:
                        return var7;
                    case 635: // try_start_1
                        var7 = global;
                        var10 = var7.Error;
                        var7 = var10.prototype;
                        var9 = Object.create(var7, {
                            constructor: {
                                value: var10
                            }
                        });
                        var30 = 'no stream';
                        var31 = var9;
                        var7 = new var31[var10](var30, var29);
                        var7 = var7 instanceof Object ? var7 : var9;
                        throw var7;
                    case 671: // try_end1
                        return var3;
                    case 674: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 3);
                        var9 = var3.status;
                        var7 = 401;
                        var3 = null;
                        if (!(var7 === var9)) {
                            _fun50403_ip = 778;
                            continue _fun50403
                        }
                    case 693:
                        var6 = var2 == var6;
                        var3 = null;
                        if (!var6) {
                            _fun50403_ip = 778;
                            continue _fun50403
                        }
                    case 702:
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var6 = 11;
                        var6 = var9[var6];
                        var8 = var7.bind(var8)(var6);
                        var7 = var8.refreshAccessToken;
                        var6 = var5.type;
                        var5 = var5.id;
                        var7 = var7.bind(var8)(var6, var5);
                        var6 = var7.then;
                        var5 = function(arg0) { // Environment: var4
                            var3 = _closure4_slot0;
                            var2 = var3._checkTwitch;
                            var1 = _closure4_slot1;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var6 = var6.bind(var7)(var5);
                        var5 = var6.catch;
                        var4 = function() { // Environment: var4
                            var0 = null;
                            return var0;
                        };
                        var3 = var5.bind(var6)(var4);
                    case 778:
                        return var3;
                    case 781:
                        return var2;
                    case 784:
                        return var2;
                    case 787:
                        return var1;
                    case 790:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var7 = var8.bind(var0)(var7);
        var _closure2_slot1 = var7;
        var7 = function() {
            var0 = undefined;
            var3 = _closure2_slot1;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var7;
        var1[2] = var4;
        var4 = {};
        var7 = '_checkYouTube';
        var4.key = var7;
        var7 = _closure1_slot8;
        var6 = function*(arg0) { // Environment: var5
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun50409: for (var _fun50409_ip = 0;;) switch (_fun50409_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        var1 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun50409_ip = 719;
                            continue _fun50409
                        }
                    case 18:
                        var8 = this;
                        var _closure4_slot0 = var8;
                        var5 = var6;
                        var _closure4_slot1 = var6;
                        var8 = undefined;
                        if (!(var1 === var8)) {
                            _fun50409_ip = 40;
                            continue _fun50409
                        }
                    case 38:
                        var1 = null;
                    case 40:
                        var7 = var1;
                        var16 = undefined;
                        var13 = undefined;
                        var14 = undefined;
                        var11 = undefined;
                        var12 = undefined;
                        SaveGenerator(address = 57);
                    case 55:
                        return var8;
                    case 57:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun50409_ip = 716;
                            continue _fun50409
                        }
                    case 66:
                        var2 = null;
                        _closure1_slot17 = var2;
                        var9 = var5;
                        var9 = var9.revoked;
                        if (var9) {
                            _fun50409_ip = 713;
                            continue _fun50409
                        }
                    case 90:
                        var15 = _closure1_slot18;
                        var10 = var15.has;
                        var9 = var5;
                        var9 = var9.id;
                        var9 = var10.bind(var15)(var9);
                        if (var9) {
                            _fun50409_ip = 713;
                            continue _fun50409
                        }
                    case 118: // try_start_0
                        var10 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var9 = 10;
                        var9 = var15[var9];
                        var9 = var10.bind(var8)(var9);
                        var17 = var9.HTTP;
                        var15 = var17.get;
                        var9 = {
                            'url': 'https://www.googleapis.com/youtube/v3/liveBroadcasts',
                            'query': null,
                            'headers': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var10 = {
                            'part': 'id,snippet',
                            'broadcastStatus': 'active',
                            'broadcastType': 'all'
                        };
                        var9.query = var10;
                        var18 = {};
                        var10 = var7;
                        if (!(var2 == var10)) {
                            _fun50409_ip = 202;
                            continue _fun50409
                        }
                    case 191:
                        var10 = var5;
                        var21 = var10.accessToken;
                        _fun50409_ip = 205;
                        continue _fun50409;
                    case 202:
                        var21 = var7;
                    case 205:
                        var10 = global;
                        var19 = var10.HermesInternal;
                        var20 = var19.concat;
                        var19 = 'Bearer ';
                        var19 = var20.bind(var19)(var21);
                        var18.Authorization = var19;
                        var9.headers = var18;
                        var9 = var15.bind(var17)(var9);
                        SaveGenerator(address = 249);
                    case 247:
                        return var9;
                    case 249:
                        ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 15);
                        if (var15) {
                            _fun50409_ip = 567;
                            continue _fun50409
                        }
                    case 258:
                        var15 = var9.body;
                        var15 = var15.items;
                        var13 = var15;
                        var17 = var15.length;
                        var15 = 1;
                        if (!(!(var17 < var15))) {
                            _fun50409_ip = 533;
                            continue _fun50409
                        }
                    case 286:
                        var17 = 0;
                        var13 = var13[var17];
                        var14 = var13.id;
                        var13 = var13.snippet;
                        var11 = var13.title;
                        var15 = var13.thumbnails;
                        var13 = {};
                        var19 = _closure1_slot0;
                        var20 = _closure1_slot2;
                        var18 = 13;
                        var18 = var20[var18];
                        var20 = var19.bind(var8)(var18);
                        var19 = var20.getAssetFromImageURL;
                        var18 = _closure1_slot11;
                        var18 = var18.YOUTUBE;
                        var15 = var15.high;
                        var15 = var15.url;
                        var15 = var19.bind(var20)(var18, var15);
                        var16 = var15;
                        var18 = var2 != var15;
                        var15 = undefined;
                        if (!var18) {
                            _fun50409_ip = 386;
                            continue _fun50409
                        }
                    case 383:
                        var15 = var16;
                    case 386:
                        var13.large_image = var15;
                        var12 = var13;
                        var13 = var11;
                        var15 = var2 != var13;
                        var13 = undefined;
                        if (!var15) {
                            _fun50409_ip = 436;
                            continue _fun50409
                        }
                    case 406:
                        var16 = var11;
                        var15 = '';
                        var13 = undefined;
                        if (!(var15 !== var16)) {
                            _fun50409_ip = 436;
                            continue _fun50409
                        }
                    case 419:
                        var16 = var11;
                        var15 = var16.slice;
                        var11 = 128;
                        var13 = var15.bind(var16)(var17, var11);
                    case 436:
                        var11 = {};
                        var16 = var14;
                        var14 = var10.HermesInternal;
                        var15 = var14.concat;
                        var14 = 'https://youtube.com/watch?v=';
                        var14 = var15.bind(var14)(var16);
                        var11.url = var14;
                        var15 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var14 = 14;
                        var14 = var16[var14];
                        var16 = var15.bind(var8)(var14);
                        var15 = var16.get;
                        var14 = _closure1_slot11;
                        var14 = var14.YOUTUBE;
                        var14 = var15.bind(var16)(var14);
                        var14 = var14.name;
                        var11.name = var14;
                        var11.details = var13;
                        var11.assets = var12;
                        _closure1_slot17 = var11;
                    case 530: // try_end0
                        return var11;
                    case 533: // try_start_1
                        var12 = var10.Error;
                        var10 = var12.prototype;
                        var11 = Object.create(var10, {
                            constructor: {
                                value: var12
                            }
                        });
                        var23 = 'no stream';
                        var24 = var11;
                        var10 = new var24[var12](var23, var22);
                        var10 = var10 instanceof Object ? var10 : var11;
                        throw var10;
                    case 567: // try_end1
                        return var9;
                    case 570: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 9);
                        var3 = var9;
                        var10 = var9.status;
                        var9 = 401;
                        if (!(var9 === var10)) {
                            _fun50409_ip = 594;
                            continue _fun50409
                        }
                    case 590:
                        if (!(var2 != var7)) {
                            _fun50409_ip = 637;
                            continue _fun50409
                        }
                    case 594:
                        var9 = var3.status;
                        var7 = 403;
                        var3 = null;
                        if (!(var7 === var9)) {
                            _fun50409_ip = 710;
                            continue _fun50409
                        }
                    case 611:
                        var10 = _closure1_slot18;
                        var9 = var10.add;
                        var7 = var5;
                        var7 = var7.id;
                        var7 = var9.bind(var10)(var7);
                        var3 = null;
                        _fun50409_ip = 710;
                        continue _fun50409;
                    case 637:
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var6 = 11;
                        var6 = var9[var6];
                        var8 = var7.bind(var8)(var6);
                        var7 = var8.refreshAccessToken;
                        var6 = var5.type;
                        var5 = var5.id;
                        var7 = var7.bind(var8)(var6, var5);
                        var6 = var7.then;
                        var5 = function(arg0) { // Environment: var4
                            var3 = _closure4_slot0;
                            var2 = var3._checkYouTube;
                            var1 = _closure4_slot1;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var6 = var6.bind(var7)(var5);
                        var5 = var6.catch;
                        var4 = function() { // Environment: var4
                            var0 = null;
                            return var0;
                        };
                        var3 = var5.bind(var6)(var4);
                    case 710:
                        return var3;
                    case 713:
                        return var2;
                    case 716:
                        return var1;
                    case 719:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var6 = var7.bind(var0)(var6);
        var _closure2_slot0 = var6;
        var6 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var1[3] = var4;
        var4 = {};
        var6 = '_check';
        var4.key = var6;
        var6 = function() {
            _fun50413: for (var _fun50413_ip = 0;;) switch (_fun50413_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var2 = var1._started;
                    if (!var2) {
                        _fun50413_ip = 219;
                        continue _fun50413
                    }
                case 21:
                    var4 = _closure1_slot9;
                    var2 = var4.getAccounts;
                    var4 = var2.bind(var4)();
                    var5 = null;
                    if (!(var5 != var4)) {
                        _fun50413_ip = 219;
                        continue _fun50413
                    }
                case 47:
                    var2 = var1._nextCheck;
                    if (!(var5 != var2)) {
                        _fun50413_ip = 78;
                        continue _fun50413
                    }
                case 57:
                    var2 = global;
                    var5 = var2.clearTimeout;
                    var2 = var1._nextCheck;
                    var1 = undefined;
                    var1 = var5.bind(var1)(var2);
                case 78:
                    var1 = _closure1_slot11;
                    var1 = var1.TWITCH;
                    var7 = new Array(1);
                    var7[0] = var1;
                    var _closure3_slot1 = var7;
                    var1 = global;
                    var5 = var1.Date;
                    var2 = var5.now;
                    var5 = var2.bind(var5)();
                    var2 = _closure1_slot16;
                    if (!(var2 <= var5)) {
                        _fun50413_ip = 157;
                        continue _fun50413
                    }
                case 125:
                    var6 = var7.push;
                    var2 = _closure1_slot11;
                    var2 = var2.YOUTUBE;
                    var2 = var6.bind(var7)(var2);
                    var2 = _closure1_slot13;
                    var2 = var5 + var2;
                    _closure1_slot16 = var2;
                case 157:
                    var3 = var4.filter;
                    var2 = function(arg0) { // Environment: var0
                        var2 = _closure3_slot1;
                        var1 = var2.includes;
                        var0 = arg0;
                        var0 = var0.type;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.map;
                    var2 = function(arg0) { // Environment: var0
                        _fun50415: for (var _fun50415_ip = 0;;) switch (_fun50415_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = var3.type;
                                var0 = _closure1_slot11;
                                var0 = var0.TWITCH;
                                if (!(var1 !== var0)) {
                                    _fun50415_ip = 45;
                                    continue _fun50415
                                }
                            case 25:
                                var1 = _closure3_slot0;
                                var0 = var1._checkYouTube;
                                var0 = var0.bind(var1)(var3);
                                _fun50415_ip = 63;
                                continue _fun50415;
                            case 45:
                                var2 = _closure3_slot0;
                                var1 = var2._checkTwitch;
                                var0 = var1.bind(var2)(var3);
                            case 63:
                                return var0;
                        }
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var1.Promise;
                    var1 = var2.allSettled;
                    var2 = var1.bind(var2)(var3);
                    var1 = var2.then;
                    var0 = function(arg0) { // Environment: var0
                        _fun50416: for (var _fun50416_ip = 0;;) switch (_fun50416_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = _closure3_slot0;
                                var1 = var1._started;
                                if (!var1) {
                                    _fun50416_ip = 130;
                                    continue _fun50416
                                }
                            case 19:
                                var2 = var3.find;
                                var1 = function(arg0) { // Environment: var1
                                    _fun50417: for (var _fun50417_ip = 0;;) switch (_fun50417_ip) {
                                        case 0:
                                            var1 = arg0;
                                            var2 = var1.status;
                                            var0 = 'fulfilled';
                                            var0 = var0 === var2;
                                            if (!var0) {
                                                _fun50417_ip = 32;
                                                continue _fun50417
                                            }
                                        case 21:
                                            var2 = var1.value;
                                            var1 = null;
                                            var0 = var1 != var2;
                                        case 32:
                                            return var0;
                                    }
                                };
                                var1 = var2.bind(var3)(var1);
                                var5 = null;
                                var2 = var5 == var1;
                                var3 = undefined;
                                var4 = undefined;
                                if (var2) {
                                    _fun50416_ip = 54;
                                    continue _fun50416
                                }
                            case 49:
                                var4 = var1.value;
                            case 54:
                                var1 = var5 == var4;
                                if (!var1) {
                                    _fun50416_ip = 72;
                                    continue _fun50416
                                }
                            case 61:
                                var2 = _closure1_slot17;
                                var1 = var5 != var2;
                            case 72:
                                if (!var1) {
                                    _fun50416_ip = 82;
                                    continue _fun50416
                                }
                            case 75:
                                var4 = _closure1_slot17;
                            case 82:
                                var2 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var1 = 12;
                                var1 = var5[var1];
                                var3 = var2.bind(var3)(var1);
                                var2 = var3.dispatch;
                                var1 = {};
                                var5 = 'STREAMING_UPDATE';
                                var1.type = var5;
                                var1.stream = var4;
                                var1 = var2.bind(var3)(var1);
                            case 130:
                                var1 = _closure3_slot0;
                                var0 = var1._scheduleCheck;
                                var0 = var0.bind(var1)();
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                case 219:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var1[4] = var4;
        var4 = {};
        var6 = '_scheduleCheck';
        var4.key = var6;
        var5 = function() {
            _fun50418: for (var _fun50418_ip = 0;;) switch (_fun50418_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var2 = var1._started;
                    if (!var2) {
                        _fun50418_ip = 52;
                        continue _fun50418
                    }
                case 18:
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = _closure1_slot12;
                    var2 = undefined;
                    var0 = function() { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = var1._check;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0 = var4.bind(var2)(var0, var3);
                    var1._nextCheck = var0;
                case 52:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var5;
        var1[5] = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var15 = var7;
    var1 = new var15[var1](var14);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot20 = var1;
    var1 = 16;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun50421: for (var _fun50421_ip = 0;;) switch (_fun50421_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot6;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot4;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot3;
                    var0 = _closure1_slot21;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun50421_ip = 69;
                        continue _fun50421
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun50421_ip = 105;
                    continue _fun50421;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot4;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot5;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot7;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var4 = this;
            var3 = _closure1_slot24;
            var0 = undefined;
            var2 = var3.bind(var0)();
            var6 = var4.waitFor;
            var5 = _closure1_slot9;
            var2 = _closure1_slot10;
            var2 = var6.bind(var4)(var5, var2);
            var2 = var4.syncWith;
            var5 = _closure1_slot10;
            var1 = new Array(1);
            var1[0] = var5;
            var1 = var2.bind(var4)(var1, var3);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'getStream';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot15;
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ExternalStreamingStore';
    var7.displayName = var1;
    var1 = 12;
    var1 = var5[var1];
    var14 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        _fun50424: for (var _fun50424_ip = 0;;) switch (_fun50424_ip) {
            case 0:
                var1 = arg0;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 15;
                var3 = var3[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var3);
                var4 = var1.stream;
                var3 = _closure1_slot15;
                var3 = var5.bind(var0)(var4, var3);
                if (var3) {
                    _fun50424_ip = 71;
                    continue _fun50424
                }
            case 47:
                var3 = var1.stream;
                var1 = null;
                var4 = var1 != var3;
                if (!var4) {
                    _fun50424_ip = 65;
                    continue _fun50424
                }
            case 62:
                var1 = var3;
            case 65:
                _closure1_slot15 = var1;
                return var0;
            case 71:
                var0 = false;
                return var0;
        }
    };
    var1.STREAMING_UPDATE = var8;
    var3 = function() {
        var1 = _closure1_slot20;
        var0 = var1._check;
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.USER_CONNECTIONS_UPDATE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var15 = var3;
    var13 = var1;
    var1 = new var15[var7](var14, var13, var12);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/ExternalStreamingStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 6, 7, 5, 4485, 3198, 660, 667, 507, 4487, 806, 5618, 4361, 644, 566, 2]);