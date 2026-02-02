// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = ['ip', 'user'];
    var _closure1_slot4 = var3;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var3 = true;
    var6.value = var3;
    var3 = '__esModule';
    var3 = var7.bind(var8)(var2, var3, var6);
    var3 = {};
    var6 = {
        'cookies': true,
        'data': true,
        'headers': true,
        'ip': false,
        'query_string': true,
        'url': true
    };
    var7 = {
        'id': true,
        'username': true,
        'email': true
    };
    var6.user = var7;
    var3.include = var6;
    var6 = 'methodPath';
    var3.transactionNamingScheme = var6;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var4 = var4.bind(var0)(var3);
    var3 = var4.defineIntegration;
    var1 = function() {
        _fun99583: for (var _fun99583_ip = 0;;) switch (_fun99583_ip) {
            case 0:
                var4 = undefined;
                var2 = undefined;
                var3 = arguments.length;
                var0 = 0;
                if (!(var3 > var0)) {
                    _fun99583_ip = 23;
                    continue _fun99583
                }
            case 15:
                var3 = arguments[var0];
                if (!(var4 === var3)) {
                    _fun99583_ip = 27;
                    continue _fun99583
                }
            case 23:
                var6 = {};
                _fun99583_ip = 31;
                continue _fun99583;
            case 27:
                var6 = arguments[var0];
            case 31:
                var12 = global;
                var5 = var12.Object;
                var4 = var5.assign;
                var3 = _closure1_slot5;
                var2 = {};
                var11 = var12.Object;
                var10 = var11.assign;
                var9 = var3.include;
                var8 = var6.include;
                var7 = {};
                var13 = var6.include;
                if (!var13) {
                    _fun99583_ip = 109;
                    continue _fun99583
                }
            case 87:
                var13 = var6.include;
                var13 = var13.user;
                var14 = 'boolean';
                var13 = typeof var13;
                if (!(var14 !== var13)) {
                    _fun99583_ip = 162;
                    continue _fun99583
                }
            case 109:
                var15 = var12.Object;
                var14 = var15.assign;
                var0 = _closure1_slot5;
                var0 = var0.include;
                var13 = var0.user;
                var0 = var6.include;
                if (var0) {
                    _fun99583_ip = 146;
                    continue _fun99583
                }
            case 144:
                var0 = {};
            case 146:
                var12 = var0.user;
                var0 = {};
                var0 = var14.bind(var15)(var0, var13, var12);
                _fun99583_ip = 173;
                continue _fun99583;
            case 162:
                var12 = var6.include;
                var0 = var12.user;
            case 173:
                var7.user = var0;
                var19 = {};
                var20 = var11;
                var18 = var9;
                var17 = var8;
                var16 = var7;
                var0 = var20[var10](var19, var18, var17, var16, var15);
                var2.include = var0;
                var19 = {};
                var20 = var5;
                var18 = var3;
                var17 = var6;
                var16 = var2;
                var0 = var20[var4](var19, var18, var17, var16, var15);
                var _closure2_slot0 = var0;
                var0 = {};
                var2 = 'RequestData';
                var0.name = var2;
                var1 = function arg0() {
                    _fun99584: for (var _fun99584_ip = 0;;) switch (_fun99584_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = var4.sdkProcessingMetadata;
                            var5 = undefined;
                            if (!(var5 === var0)) {
                                _fun99584_ip = 17;
                                continue _fun99584
                            }
                        case 15:
                            var0 = {};
                        case 17:
                            var3 = var0.request;
                            if (var3) {
                                _fun99584_ip = 28;
                                continue _fun99584
                            }
                        case 26:
                            return var4;
                        case 28:
                            var0 = _closure2_slot0;
                            var9 = undefined;
                            var16 = undefined;
                            var1 = undefined;
                            var14 = undefined;
                            var7 = var0.transactionNamingScheme;
                            var8 = var0.include;
                            var10 = var8.ip;
                            var15 = var8.user;
                            var6 = _closure1_slot3;
                            var2 = _closure1_slot4;
                            var11 = var6.bind(var5)(var8, var2);
                            var9 = ['method'];
                            var2 = global;
                            var8 = var2.Object;
                            var6 = var8.entries;
                            var6 = var6.bind(var8)(var11);
                            var8 = var6;
                            var12 = var8[Symbol.iterator];
                            var8 = var12().next;
                            var6 = 2;
                            var11 = 0;
                            var13 = 1;
                        case 125:
                            var18 = var8().value;
                            var17 = var12;
                            if (!(var17 !== var5)) {
                                _fun99584_ip = 182;
                                continue _fun99584
                            }
                        case 136: // try_start_0
                            var17 = _closure1_slot2;
                            var17 = var17.bind(var5)(var18, var6);
                            var16 = var17[var11];
                            var17 = var17[var13];
                            if (!var17) {
                                _fun99584_ip = 173;
                                continue _fun99584
                            }
                        case 157:
                            var19 = var9;
                            var18 = var19.push;
                            var17 = var16;
                            var17 = var18.bind(var19)(var17);
                        case 173: // try_end0
                            _fun99584_ip = 125;
                            continue _fun99584;
                        case 175: // catch_target0
                            CatchBlockStart(arg_register = 8);
                            var12.return();
                            throw var8;
                        case 182:
                            var8 = true;
                            if (!(var5 !== var15)) {
                                _fun99584_ip = 289;
                                continue _fun99584
                            }
                        case 188:
                            var16 = 'boolean';
                            var12 = typeof var15;
                            var8 = var15;
                            if (!(var16 !== var12)) {
                                _fun99584_ip = 289;
                                continue _fun99584
                            }
                        case 202:
                            var1 = new Array(0);
                            var12 = var2.Object;
                            var2 = var12.entries;
                            var15 = var2.bind(var12)(var15);
                            var2 = var15;
                            var12 = var2[Symbol.iterator];
                            var2 = var12().next;
                        case 229:
                            var16 = var2().value;
                            var15 = var12;
                            if (!(var15 !== var5)) {
                                _fun99584_ip = 286;
                                continue _fun99584
                            }
                        case 240: // try_start_1
                            var15 = _closure1_slot2;
                            var15 = var15.bind(var5)(var16, var6);
                            var14 = var15[var11];
                            var15 = var15[var13];
                            if (!var15) {
                                _fun99584_ip = 277;
                                continue _fun99584
                            }
                        case 261:
                            var17 = var1;
                            var16 = var17.push;
                            var15 = var14;
                            var15 = var16.bind(var17)(var15);
                        case 277: // try_end1
                            _fun99584_ip = 229;
                            continue _fun99584;
                        case 279: // catch_target1
                            CatchBlockStart(arg_register = 2);
                            var12.return();
                            throw var2;
                        case 286:
                            var8 = var1;
                        case 289:
                            var2 = {};
                            var1 = {};
                            var1.ip = var10;
                            var1.user = var8;
                            var8 = var9;
                            var10 = var8.length;
                            var8 = undefined;
                            if (!(var11 !== var10)) {
                                _fun99584_ip = 318;
                                continue _fun99584
                            }
                        case 315:
                            var8 = var9;
                        case 318:
                            var1.request = var8;
                            var1.transaction = var7;
                            var2.include = var1;
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var0 = var0[var6];
                            var1 = var1.bind(var5)(var0);
                            var0 = var1.addRequestDataToEvent;
                            var0 = var0.bind(var1)(var4, var3, var2);
                            return var0;
                    }
                };
                var0.processEvent = var1;
                return var0;
        }
    };
    var1 = var3.bind(var4)(var1);
    var2.requestDataIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 29, 12825, 12914]);