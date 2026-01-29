// modules/activate_device/useDeviceCodeAuthorizeCallback.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _createTwoWayLink, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun96652: for (var _fun96652_ip = 0;;) switch (_fun96652_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun96652_ip = 721;
                            continue _fun96652
                        }
                    case 10:
                        var18 = arg1;
                        var1 = arg2;
                        var5 = undefined;
                        var7 = undefined;
                        var11 = undefined;
                        var3 = undefined;
                        var9 = undefined;
                        var17 = undefined;
                        var6 = undefined;
                        var14 = undefined;
                        var8 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var12 = 2;
                        var4 = var4[var12];
                        var13 = var8.bind(var5)(var4);
                        var8 = var13.clientIdToActivateDevicePlatform;
                        var4 = arg0;
                        var4 = var8.bind(var13)(var4);
                        var7 = var4;
                        var8 = null;
                        if (!(var8 != var4)) {
                            _fun96652_ip = 651;
                            continue _fun96652
                        }
                    case 81:
                        var11 = null;
                    case 83: // try_start_0
                        var13 = _closure1_slot1;
                        var23 = _closure1_slot2;
                        var16 = 3;
                        var4 = var23[var16];
                        var20 = var13.bind(var5)(var4);
                        var19 = var20.authorize;
                        var13 = var7;
                        var4 = {};
                        var22 = _closure1_slot0;
                        var21 = 4;
                        var21 = var23[var21];
                        var21 = var22.bind(var5)(var21);
                        var21 = var21.TwoWayLinkType;
                        var21 = var21.DEVICE_CODE;
                        var4.twoWayLinkType = var21;
                        var21 = var1;
                        var4.userCode = var21;
                        var4 = var19.bind(var20)(var13, var4);
                        SaveGenerator(address = 165);
                    case 163:
                        return var4;
                    case 165:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 13);
                        if (var13) {
                            _fun96652_ip = 530;
                            continue _fun96652
                        }
                    case 174:
                        var13 = var4.body;
                        var11 = var13.url;
                    case 184: // try_end0
                        var17 = null;
                    case 186: // try_start_1
                        var19 = _closure1_slot1;
                        var20 = _closure1_slot2;
                        var13 = 5;
                        var21 = var20[var13];
                        var23 = var19.bind(var5)(var21);
                        var22 = var11;
                        var21 = var8 != var22;
                        var11 = 'No URL in authorize response';
                        var11 = var23.bind(var5)(var21, var11);
                        var21 = _closure1_slot0;
                        var11 = 6;
                        var11 = var20[var11];
                        var21 = var21.bind(var5)(var11);
                        var11 = var21.getCallbackParamsFromURL;
                        var11 = var11.bind(var21)(var22);
                        var11 = var11.state;
                        var13 = var20[var13];
                        var20 = var19.bind(var5)(var13);
                        var19 = var8 != var11;
                        var13 = 'Authorize URL state query parameter must be present';
                        var13 = var20.bind(var5)(var19, var13);
                        var17 = var11;
                    case 285: // try_start_2 // try_end1
                        var13 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var11 = var11[var16];
                        var16 = var13.bind(var5)(var11);
                        var13 = var16.callback;
                        var11 = var7;
                        var7 = {};
                        var7.code = var18;
                        var7.state = var17;
                        var7 = var13.bind(var16)(var11, var7);
                        SaveGenerator(address = 331);
                    case 329:
                        return var7;
                    case 331:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 11);
                        if (var11) {
                            _fun96652_ip = 340;
                            continue _fun96652
                        }
                    case 337: // try_end2
                        return var5;
                    case 340:
                        return var7;
                    case 343: // catch_target2
                        CatchBlockStart(arg_register = 7);
                        var15 = var7;
                        var13 = _closure1_slot6;
                        var11 = var1;
                        var16 = var8 == var7;
                        var7 = undefined;
                        if (var16) {
                            _fun96652_ip = 386;
                            continue _fun96652
                        }
                    case 364:
                        var15 = var15.body;
                        var14 = var15;
                        var15 = var8 == var15;
                        var7 = undefined;
                        if (var15) {
                            _fun96652_ip = 386;
                            continue _fun96652
                        }
                    case 381:
                        var7 = var14.code;
                    case 386:
                        var6 = var7;
                        var14 = var8 != var7;
                        var7 = 0;
                        if (!var14) {
                            _fun96652_ip = 401;
                            continue _fun96652
                        }
                    case 398:
                        var7 = var6;
                    case 401:
                        var6 = 'callback';
                        var6 = var13.bind(var5)(var11, var7, var6);
                        SaveGenerator(address = 416);
                    case 414:
                        return var6;
                    case 416:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 7);
                        if (var7) {
                            _fun96652_ip = 458;
                            continue _fun96652
                        }
                    case 422:
                        var7 = global;
                        var13 = var7.Error;
                        var7 = var13.prototype;
                        var11 = Object.create(var7, {
                            constructor: {
                                value: var13
                            }
                        });
                        var26 = 'error during two way callback';
                        var27 = var11;
                        var7 = new var27[var13](var26, var25);
                        var7 = var7 instanceof Object ? var7 : var11;
                        throw var7;
                    case 458:
                        return var6;
                    case 461: // catch_target1
                        CatchBlockStart(arg_register = 6);
                        var11 = _closure1_slot6;
                        var7 = var1;
                        var6 = 'authorize';
                        var6 = var11.bind(var5)(var7, var12, var6);
                        SaveGenerator(address = 485);
                    case 483:
                        return var6;
                    case 485:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 7);
                        if (var7) {
                            _fun96652_ip = 527;
                            continue _fun96652
                        }
                    case 491:
                        var7 = global;
                        var12 = var7.Error;
                        var7 = var12.prototype;
                        var11 = Object.create(var7, {
                            constructor: {
                                value: var12
                            }
                        });
                        var26 = 'error parsing callback params';
                        var27 = var11;
                        var7 = new var27[var12](var26, var25);
                        var7 = var7 instanceof Object ? var7 : var11;
                        throw var7;
                    case 527:
                        return var6;
                    case 530:
                        return var4;
                    case 533: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var10 = var4;
                        var7 = _closure1_slot6;
                        var6 = var1;
                        var11 = var8 == var4;
                        var4 = undefined;
                        if (var11) {
                            _fun96652_ip = 576;
                            continue _fun96652
                        }
                    case 554:
                        var10 = var10.body;
                        var9 = var10;
                        var10 = var8 == var10;
                        var4 = undefined;
                        if (var10) {
                            _fun96652_ip = 576;
                            continue _fun96652
                        }
                    case 571:
                        var4 = var9.code;
                    case 576:
                        var3 = var4;
                        var8 = var8 != var4;
                        var4 = 0;
                        if (!var8) {
                            _fun96652_ip = 591;
                            continue _fun96652
                        }
                    case 588:
                        var4 = var3;
                    case 591:
                        var3 = 'authorize';
                        var3 = var7.bind(var5)(var6, var4, var3);
                        SaveGenerator(address = 606);
                    case 604:
                        return var3;
                    case 606:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun96652_ip = 648;
                            continue _fun96652
                        }
                    case 612:
                        var4 = global;
                        var7 = var4.Error;
                        var4 = var7.prototype;
                        var6 = Object.create(var4, {
                            constructor: {
                                value: var7
                            }
                        });
                        var26 = 'error during two way authorize';
                        var27 = var6;
                        var4 = new var27[var7](var26, var25);
                        var4 = var4 instanceof Object ? var4 : var6;
                        throw var4;
                    case 648:
                        return var3;
                    case 651:
                        var4 = _closure1_slot6;
                        var3 = var1;
                        var2 = 1;
                        var1 = 'authorize';
                        var1 = var4.bind(var5)(var3, var2, var1);
                        SaveGenerator(address = 676);
                    case 674:
                        return var1;
                    case 676:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun96652_ip = 718;
                            continue _fun96652
                        }
                    case 682:
                        var2 = global;
                        var4 = var2.Error;
                        var2 = var4.prototype;
                        var3 = Object.create(var2, {
                            constructor: {
                                value: var4
                            }
                        });
                        var26 = 'Unsupported client_id for two way link';
                        var27 = var3;
                        var2 = new var27[var4](var26, var25);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 718:
                        return var1;
                    case 721:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = function() { // Original name: silentlyFinishTwoWayLinkError, environment: var1
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = function() { // Original name: _silentlyFinishTwoWayLinkError, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun96656: for (var _fun96656_ip = 0;;) switch (_fun96656_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 4);
                        if (var4) {
                            _fun96656_ip = 76;
                            continue _fun96656
                        }
                    case 7:
                        var3 = arg0;
                        var2 = arg1;
                        var1 = arg2;
                    case 16: // try_start_0
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 7;
                        var5 = var5[var4];
                        var4 = undefined;
                        var5 = var6.bind(var4)(var5);
                        var4 = var5.finishUserCodeTwoWayLinkError;
                        var1 = var4.bind(var5)(var3, var2, var1);
                        SaveGenerator(address = 58);
                    case 56:
                        return var1;
                    case 58:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun96656_ip = 66;
                            continue _fun96656
                        }
                    case 64: // try_end0
                        _fun96656_ip = 71;
                        continue _fun96656;
                    case 66:
                        return var1;
                    case 69: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 71:
                        var1 = undefined;
                        return var1;
                    case 76:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activate_device/useDeviceCodeAuthorizeCallback.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1, arg2) { // Original name: useDeviceCodeAuthorizeCallback, environment: var1
        var6 = arg0;
        var5 = arg1;
        var4 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var _closure2_slot2 = var4;
        var3 = _closure1_slot4;
        var2 = var3.useCallback;
        var1 = function() { // Environment: var0
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = function*(arg0, arg1) { // Environment: var0
                var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                    _fun96660: for (var _fun96660_ip = 0;;) switch (_fun96660_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                            if (var2) {
                                _fun96660_ip = 318;
                                continue _fun96660
                            }
                        case 10:
                            var1 = arg0;
                            var2 = arg1;
                            if (var2) {
                                _fun96660_ip = 106;
                                continue _fun96660
                            }
                        case 19: // try_start_0
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 7;
                            var3 = var3[var2];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.finishUserCode;
                            var2 = var1;
                            var3 = var2.userCode;
                            var2 = 'denied';
                            var2 = var4.bind(var5)(var3, var2);
                            SaveGenerator(address = 75);
                        case 73:
                            return var2;
                        case 75:
                            ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                            if (var3) {
                                _fun96660_ip = 83;
                                continue _fun96660
                            }
                        case 81: // try_end0
                            _fun96660_ip = 88;
                            continue _fun96660;
                        case 83:
                            return var2;
                        case 86: // catch_target0
                            CatchBlockStart(arg_register = 2);
                        case 88:
                            var3 = _closure2_slot0;
                            var2 = undefined;
                            var2 = var3.bind(var2)();
                            _fun96660_ip = 313;
                            continue _fun96660;
                        case 106:
                            var2 = var1;
                            var3 = var2.twoWayLinkCode;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun96660_ip = 214;
                                continue _fun96660
                            }
                        case 121: // try_start_1
                            var2 = var1;
                            var6 = var2.clientId;
                            var4 = var2.twoWayLinkCode;
                            var3 = var2.userCode;
                            var2 = function() { // Original name: createTwoWayLink, environment: var2
                                var0 = undefined;
                                var3 = _closure1_slot5;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var5 = undefined;
                            var2 = var2.bind(var5)(var6, var4, var3);
                            SaveGenerator(address = 164);
                        case 162:
                            return var2;
                        case 164:
                            ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                            if (var3) {
                                _fun96660_ip = 190;
                                continue _fun96660
                            }
                        case 170:
                            var4 = _closure2_slot2;
                            var3 = var1;
                            var3 = var4.bind(var5)(var3);
                        case 185: // try_end1
                            _fun96660_ip = 313;
                            continue _fun96660;
                        case 190:
                            return var2;
                        case 193: // catch_target1
                            CatchBlockStart(arg_register = 2);
                            var4 = _closure2_slot1;
                            var3 = var1;
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            _fun96660_ip = 313;
                            continue _fun96660;
                        case 214: // try_start_2
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 7;
                            var2 = var4[var2];
                            var5 = undefined;
                            var6 = var3.bind(var5)(var2);
                            var4 = var6.finishUserCode;
                            var2 = var1;
                            var3 = var2.userCode;
                            var2 = 'granted';
                            var2 = var4.bind(var6)(var3, var2);
                            SaveGenerator(address = 268);
                        case 266:
                            return var2;
                        case 268:
                            ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                            if (var3) {
                                _fun96660_ip = 291;
                                continue _fun96660
                            }
                        case 274:
                            var4 = _closure2_slot2;
                            var3 = var1;
                            var3 = var4.bind(var5)(var3);
                        case 289: // try_end2
                            _fun96660_ip = 313;
                            continue _fun96660;
                        case 291:
                            return var2;
                        case 294: // catch_target2
                            CatchBlockStart(arg_register = 2);
                            var3 = _closure2_slot1;
                            var2 = var1;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                        case 313:
                            var1 = undefined;
                            return var1;
                        case 318:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var0 = undefined;
        var1 = var1.bind(var0)();
        var0 = new Array(3);
        var0[0] = var6;
        var0[1] = var5;
        var0[2] = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useDeviceCodeAuthorizeCallback = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 12535, 4478, 5294, 44, 4479, 5306, 2]);