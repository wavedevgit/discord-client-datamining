// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun5528: for (var _fun5528_ip = 0;;) switch (_fun5528_ip) {
        case 0:
            var5 = metroImportDefault;
            var2 = exports;
            var6 = dependencyMap;
            var0 = require;
            var _closure1_slot0 = var0;
            var _closure1_slot1 = var5;
            var _closure1_slot2 = var6;
            var0 = function() { // Original name: _isNativeReflectConstruct, environment: var4
                _fun5529: for (var _fun5529_ip = 0;;) switch (_fun5529_ip) {
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
                        _fun5529_ip = 74;
                        continue _fun5529;
                    case 72: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 74:
                        var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot20 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot20 = var0;
            var0 = function(arg0, arg1, arg2, arg3) { // Original name: _superPropGet, environment: var4
                _fun5532: for (var _fun5532_ip = 0;;) switch (_fun5532_ip) {
                    case 0:
                        var4 = arg0;
                        var6 = arg2;
                        var _closure2_slot0 = var6;
                        var5 = _closure1_slot8;
                        var3 = _closure1_slot7;
                        var0 = 1;
                        var2 = 3;
                        var7 = var0 & var2;
                        var0 = var4;
                        if (!var7) {
                            _fun5532_ip = 44;
                            continue _fun5532
                        }
                    case 39:
                        var0 = var4.prototype;
                    case 44:
                        var4 = undefined;
                        var3 = var3.bind(var4)(var0);
                        var0 = arg1;
                        var4 = var5.bind(var4)(var3, var0, var6);
                        var _closure2_slot1 = var4;
                        var0 = 2;
                        var2 = var0 & var2;
                        var0 = var4;
                        if (!var2) {
                            _fun5532_ip = 97;
                            continue _fun5532
                        }
                    case 78:
                        var3 = 'function';
                        var2 = typeof var4;
                        var0 = var4;
                        if (!(var3 === var2)) {
                            _fun5532_ip = 97;
                            continue _fun5532
                        }
                    case 92:
                        var0 = function(arg0) { // Environment: var1
                            var3 = _closure2_slot1;
                            var2 = var3.apply;
                            var1 = _closure2_slot0;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                    case 97:
                        return var0;
                }
            };
            var _closure1_slot21 = var0;
            var0 = function(arg0) { // Original name: _connectAnimatedView2, environment: var4
                _fun5534: for (var _fun5534_ip = 0;;) switch (_fun5534_ip) {
                    case 0:
                        var2 = arg0;
                        var6 = this;
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var0 = 15;
                        var1 = var5[var0];
                        var0 = undefined;
                        var7 = var4.bind(var0)(var1);
                        var4 = var6.__isNative;
                        var1 = 'Expected node to be marked as "native"';
                        var1 = var7.bind(var0)(var4, var1);
                        var4 = _closure1_slot0;
                        var1 = 16;
                        var1 = var5[var1];
                        var5 = var4.bind(var0)(var1);
                        var4 = var5.findNodeHandle;
                        var1 = var2.instance;
                        var1 = var4.bind(var5)(var1);
                        var4 = null;
                        if (!(var4 != var1)) {
                            _fun5534_ip = 144;
                            continue _fun5534
                        }
                    case 88:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 14;
                        var3 = var5[var3];
                        var3 = var4.bind(var0)(var3);
                        var5 = var3.API;
                        var4 = var5.connectAnimatedNodeToView;
                        var3 = var6.__getNativeTag;
                        var3 = var3.bind(var6)();
                        var3 = var4.bind(var5)(var3, var1);
                        var2.connectedViewTag = var1;
                        return var0;
                    case 144:
                        var0 = global;
                        var2 = var0.Error;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var9 = 'Unable to locate attached view in the native tree';
                        var10 = var1;
                        var0 = new var10[var2](var9, var8);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var _closure1_slot22 = var0;
            var0 = function(arg0) { // Original name: _disconnectAnimatedView2, environment: var4
                _fun5535: for (var _fun5535_ip = 0;;) switch (_fun5535_ip) {
                    case 0:
                        var2 = arg0;
                        var7 = this;
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 15;
                        var1 = var1[var0];
                        var0 = undefined;
                        var5 = var4.bind(var0)(var1);
                        var4 = var7.__isNative;
                        var1 = 'Expected node to be marked as "native"';
                        var1 = var5.bind(var0)(var4, var1);
                        var6 = var2.connectedViewTag;
                        var1 = null;
                        if (!(var1 != var6)) {
                            _fun5535_ip = 115;
                            continue _fun5535
                        }
                    case 61:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 14;
                        var3 = var5[var3];
                        var3 = var4.bind(var0)(var3);
                        var5 = var3.API;
                        var4 = var5.disconnectAnimatedNodeFromView;
                        var3 = var7.__getNativeTag;
                        var3 = var3.bind(var7)();
                        var3 = var4.bind(var5)(var3, var6);
                        var2.connectedViewTag = var1;
                    case 115:
                        return var0;
                }
            };
            var _closure1_slot23 = var0;
            var3 = global;
            var8 = var3.Object;
            var7 = var8.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var1);
            var0 = 0;
            var1 = var6[var0];
            var0 = undefined;
            var1 = var5.bind(var0)(var1);
            var _closure1_slot3 = var1;
            var1 = 1;
            var1 = var6[var1];
            var1 = var5.bind(var0)(var1);
            var _closure1_slot4 = var1;
            var1 = 2;
            var1 = var6[var1];
            var1 = var5.bind(var0)(var1);
            var _closure1_slot5 = var1;
            var1 = 3;
            var1 = var6[var1];
            var1 = var5.bind(var0)(var1);
            var _closure1_slot6 = var1;
            var1 = 4;
            var1 = var6[var1];
            var1 = var5.bind(var0)(var1);
            var _closure1_slot7 = var1;
            var1 = 5;
            var1 = var6[var1];
            var1 = var5.bind(var0)(var1);
            var _closure1_slot8 = var1;
            var1 = 6;
            var1 = var6[var1];
            var1 = var5.bind(var0)(var1);
            var _closure1_slot9 = var1;
            var1 = 7;
            var1 = var6[var1];
            var1 = var5.bind(var0)(var1);
            var _closure1_slot10 = var1;
            var1 = 8;
            var1 = var6[var1];
            var7 = var5.bind(var0)(var1);
            var1 = 'callback';
            var1 = var7.bind(var0)(var1);
            var _closure1_slot11 = var1;
            var1 = 'nodeKeys';
            var1 = var7.bind(var0)(var1);
            var _closure1_slot12 = var1;
            var1 = 'nodes';
            var1 = var7.bind(var0)(var1);
            var _closure1_slot13 = var1;
            var1 = 'props';
            var1 = var7.bind(var0)(var1);
            var _closure1_slot14 = var1;
            var1 = 'target';
            var1 = var7.bind(var0)(var1);
            var _closure1_slot15 = var1;
            var1 = 'connectAnimatedView';
            var1 = var7.bind(var0)(var1);
            var _closure1_slot16 = var1;
            var1 = 'disconnectAnimatedView';
            var1 = var7.bind(var0)(var1);
            var _closure1_slot17 = var1;
            var1 = 11;
            var1 = var6[var1];
            var5 = var5.bind(var0)(var1);
            var1 = function(arg0) { // Environment: var4
                var3 = function(arg0, arg1, arg2, arg3) { // Original name: AnimatedProps, environment: var5
                    _fun5537: for (var _fun5537_ip = 0;;) switch (_fun5537_ip) {
                        case 0:
                            var24 = arg0;
                            var23 = arg2;
                            var4 = this;
                            var0 = _closure1_slot4;
                            var3 = _closure2_slot0;
                            var2 = undefined;
                            var0 = var0.bind(var2)(var4, var3);
                            var9 = new Array(1);
                            var0 = arg3;
                            var9[0] = var0;
                            var0 = _closure1_slot7;
                            var8 = var0.bind(var2)(var3);
                            var3 = _closure1_slot6;
                            var0 = _closure1_slot20;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun5537_ip = 79;
                                continue _fun5537
                            }
                        case 66:
                            var0 = var8.apply;
                            var0 = var0.bind(var8)(var4, var9);
                            _fun5537_ip = 113;
                            continue _fun5537;
                        case 79:
                            var5 = global;
                            var7 = var5.Reflect;
                            var6 = var7.construct;
                            var5 = _closure1_slot7;
                            var5 = var5.bind(var2)(var4);
                            var5 = var5.constructor;
                            var0 = var6.bind(var7)(var8, var9, var5);
                        case 113:
                            var0 = var3.bind(var2)(var4, var0);
                            var4 = global;
                            var7 = var4.Object;
                            var6 = var7.defineProperty;
                            var5 = _closure1_slot17;
                            var3 = {};
                            var8 = _closure1_slot23;
                            var3.value = var8;
                            var3 = var6.bind(var7)(var0, var5, var3);
                            var7 = var4.Object;
                            var6 = var7.defineProperty;
                            var5 = _closure1_slot16;
                            var3 = {};
                            var8 = _closure1_slot22;
                            var3.value = var8;
                            var3 = var6.bind(var7)(var0, var5, var3);
                            var7 = var4.Object;
                            var6 = var7.defineProperty;
                            var3 = _closure1_slot11;
                            var5 = {};
                            var11 = true;
                            var5.writable = var11;
                            var5.value = var2;
                            var5 = var6.bind(var7)(var0, var3, var5);
                            var7 = var4.Object;
                            var6 = var7.defineProperty;
                            var10 = _closure1_slot12;
                            var5 = {};
                            var5.writable = var11;
                            var5.value = var2;
                            var5 = var6.bind(var7)(var0, var10, var5);
                            var7 = var4.Object;
                            var6 = var7.defineProperty;
                            var8 = _closure1_slot13;
                            var5 = {};
                            var5.writable = var11;
                            var5.value = var2;
                            var5 = var6.bind(var7)(var0, var8, var5);
                            var9 = var4.Object;
                            var7 = var9.defineProperty;
                            var6 = _closure1_slot14;
                            var5 = {};
                            var5.writable = var11;
                            var5.value = var2;
                            var5 = var7.bind(var9)(var0, var6, var5);
                            var11 = var4.Object;
                            var9 = var11.defineProperty;
                            var7 = _closure1_slot15;
                            var22 = null;
                            var5 = {
                                'writable': true,
                                'value': null
                            };
                            var5 = var9.bind(var11)(var0, var7, var5);
                            var11 = new Array(0);
                            var7 = new Array(0);
                            var5 = {};
                            var9 = var4.Object;
                            var4 = var9.keys;
                            var21 = var4.bind(var9)(var24);
                            var20 = var21.length;
                            var4 = 0;
                            var25 = var4 < var20;
                            var19 = 9;
                            var18 = 10;
                            var17 = 'object';
                            var16 = 12;
                            var15 = 11;
                            var14 = 'style';
                            var13 = 0;
                            var12 = undefined;
                            var9 = undefined;
                            if (!var25) {
                                _fun5537_ip = 677;
                                continue _fun5537
                            }
                        case 422:
                            var29 = var21[var13];
                            var34 = var24[var29];
                            if (!(var22 != var23)) {
                                _fun5537_ip = 459;
                                continue _fun5537
                            }
                        case 434:
                            var25 = _closure1_slot19;
                            var25 = var25.bind(var2)(var23, var29);
                            if (var25) {
                                _fun5537_ip = 459;
                                continue _fun5537
                            }
                        case 447:
                            var5[var29] = var34;
                            var25 = var9;
                            _fun5537_ip = 664;
                            continue _fun5537;
                        case 459:
                            if (!(var14 !== var29)) {
                                _fun5537_ip = 525;
                                continue _fun5537
                            }
                        case 463:
                            var27 = _closure1_slot1;
                            var26 = _closure1_slot2;
                            var26 = var26[var15];
                            var26 = var27.bind(var2)(var26);
                            var26 = var34 instanceof var26;
                            var27 = var34;
                            if (var26) {
                                _fun5537_ip = 517;
                                continue _fun5537
                            }
                        case 490:
                            var28 = _closure1_slot1;
                            var26 = _closure1_slot2;
                            var26 = var26[var16];
                            var28 = var28.bind(var2)(var26);
                            var26 = var28.from;
                            var27 = var26.bind(var28)(var34);
                        case 517:
                            var28 = var34;
                            var26 = var9;
                            _fun5537_ip = 618;
                            continue _fun5537;
                        case 525:
                            var30 = typeof var34;
                            var28 = var34;
                            var27 = undefined;
                            var26 = var9;
                            if (!(var17 === var30)) {
                                _fun5537_ip = 618;
                                continue _fun5537
                            }
                        case 540:
                            var30 = var22 != var34;
                            var28 = var34;
                            var27 = undefined;
                            var26 = var9;
                            if (!var30) {
                                _fun5537_ip = 618;
                                continue _fun5537
                            }
                        case 555:
                            var32 = _closure1_slot1;
                            var31 = _closure1_slot2;
                            var30 = var31[var19];
                            var30 = var32.bind(var2)(var30);
                            var30 = var30.bind(var2)(var34);
                            var31 = var31[var18];
                            var33 = var32.bind(var2)(var31);
                            var32 = var33.from;
                            var35 = var22 == var23;
                            var31 = undefined;
                            if (var35) {
                                _fun5537_ip = 605;
                                continue _fun5537
                            }
                        case 600:
                            var31 = var23.style;
                        case 605:
                            var27 = var32.bind(var33)(var30, var31, var34);
                            var28 = var30;
                            var26 = var28;
                        case 618:
                            if (!(var22 != var27)) {
                                _fun5537_ip = 654;
                                continue _fun5537
                            }
                        case 622:
                            var30 = var11.push;
                            var30 = var30.bind(var11)(var29);
                            var30 = var7.push;
                            var30 = var30.bind(var7)(var27);
                            var5[var29] = var27;
                            var12 = var27;
                            var25 = var26;
                            _fun5537_ip = 664;
                            continue _fun5537;
                        case 654:
                            var5[var29] = var28;
                            var12 = var27;
                            var25 = var26;
                        case 664:
                            var13 = var13 + 1;
                            var9 = var25;
                            if (var13 < var20) {
                                _fun5537_ip = 422;
                                continue _fun5537
                            }
                        case 677:
                            var9 = new Array(3);
                            var9[0] = var11;
                            var9[1] = var7;
                            var9[2] = var5;
                            var7 = _closure1_slot3;
                            var5 = 3;
                            var5 = var7.bind(var2)(var9, var5);
                            var9 = var5[var4];
                            var4 = 1;
                            var7 = var5[var4];
                            var4 = 2;
                            var5 = var5[var4];
                            var1 = _closure1_slot10;
                            var4 = var1.bind(var2)(var0, var10);
                            var4[var10] = var9;
                            var4 = var1.bind(var2)(var0, var8);
                            var4[var8] = var7;
                            var4 = var1.bind(var2)(var0, var6);
                            var4[var6] = var5;
                            var2 = var1.bind(var2)(var0, var3);
                            var1 = arg1;
                            var2[var3] = var1;
                            return var0;
                    }
                };
                var _closure2_slot0 = var3;
                var4 = _closure1_slot9;
                var2 = undefined;
                var1 = arg0;
                var1 = var4.bind(var2)(var3, var1);
                var1 = _closure1_slot5;
                var4 = {};
                var0 = '__getValue';
                var4.key = var0;
                var0 = function() { // Original name: __getValue, environment: var5
                    _fun5538: for (var _fun5538_ip = 0;;) switch (_fun5538_ip) {
                        case 0:
                            var8 = this;
                            var0 = {};
                            var1 = global;
                            var3 = var1.Object;
                            var2 = var3.keys;
                            var1 = _closure1_slot10;
                            var4 = _closure1_slot14;
                            var6 = undefined;
                            var1 = var1.bind(var6)(var8, var4);
                            var1 = var1[var4];
                            var5 = var2.bind(var3)(var1);
                            var4 = var5.length;
                            var3 = 0;
                            var9 = var3 < var4;
                            var2 = 13;
                            var1 = 11;
                            if (!var9) {
                                _fun5538_ip = 192;
                                continue _fun5538
                            }
                        case 69:
                            var10 = var5[var3];
                            var9 = _closure1_slot10;
                            var11 = _closure1_slot14;
                            var9 = var9.bind(var6)(var8, var11);
                            var9 = var9[var11];
                            var11 = var9[var10];
                            var12 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var9 = var9[var1];
                            var9 = var12.bind(var6)(var9);
                            var9 = var11 instanceof var9;
                            if (var9) {
                                _fun5538_ip = 171;
                                continue _fun5538
                            }
                        case 119:
                            var12 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var9 = var9[var2];
                            var9 = var12.bind(var6)(var9);
                            var9 = var9.AnimatedEvent;
                            var9 = var11 instanceof var9;
                            if (var9) {
                                _fun5538_ip = 155;
                                continue _fun5538
                            }
                        case 149:
                            var0[var10] = var11;
                            _fun5538_ip = 185;
                            continue _fun5538;
                        case 155:
                            var9 = var11.__getHandler;
                            var9 = var9.bind(var11)();
                            var0[var10] = var9;
                            _fun5538_ip = 185;
                            continue _fun5538;
                        case 171:
                            var9 = var11.__getValue;
                            var9 = var9.bind(var11)();
                            var0[var10] = var9;
                        case 185:
                            var3 = var3 + 1;
                            if (var3 < var4) {
                                _fun5538_ip = 69;
                                continue _fun5538
                            }
                        case 192:
                            return var0;
                    }
                };
                var4.value = var0;
                var0 = new Array(11);
                var0[0] = var4;
                var4 = {};
                var6 = '__getValueWithStaticProps';
                var4.key = var6;
                var6 = function(arg0) { // Original name: __getValueWithStaticProps, environment: var5
                    _fun5539: for (var _fun5539_ip = 0;;) switch (_fun5539_ip) {
                        case 0:
                            var16 = arg0;
                            var15 = this;
                            var14 = global;
                            var2 = var14.Object;
                            var1 = var2.assign;
                            var0 = {};
                            var0 = var1.bind(var2)(var0, var16);
                            var2 = var14.Object;
                            var1 = var2.keys;
                            var13 = var1.bind(var2)(var16);
                            var12 = var13.length;
                            var11 = 0;
                            var17 = var11 < var12;
                            var10 = undefined;
                            var9 = null;
                            var7 = 9;
                            var6 = 10;
                            var5 = 13;
                            var4 = 11;
                            var3 = 'style';
                            var2 = undefined;
                            var1 = undefined;
                            if (!var17) {
                                _fun5539_ip = 364;
                                continue _fun5539
                            }
                        case 87:
                            var22 = var13[var11];
                            var17 = _closure1_slot10;
                            var18 = _closure1_slot14;
                            var17 = var17.bind(var10)(var15, var18);
                            var17 = var17[var18];
                            var24 = var17[var22];
                            if (!(var3 !== var22)) {
                                _fun5539_ip = 227;
                                continue _fun5539
                            }
                        case 117:
                            var18 = _closure1_slot1;
                            var17 = _closure1_slot2;
                            var17 = var17[var4];
                            var17 = var18.bind(var10)(var17);
                            var17 = var24 instanceof var17;
                            if (var17) {
                                _fun5539_ip = 205;
                                continue _fun5539
                            }
                        case 141:
                            var18 = _closure1_slot0;
                            var17 = _closure1_slot2;
                            var17 = var17[var5];
                            var17 = var18.bind(var10)(var17);
                            var17 = var17.AnimatedEvent;
                            var19 = var24 instanceof var17;
                            var18 = var2;
                            var17 = var1;
                            if (!var19) {
                                _fun5539_ip = 348;
                                continue _fun5539
                            }
                        case 180:
                            var19 = var24.__getHandler;
                            var19 = var19.bind(var24)();
                            var0[var22] = var19;
                            var18 = var2;
                            var17 = var1;
                            _fun5539_ip = 348;
                            continue _fun5539;
                        case 205:
                            var19 = var24.__getValue;
                            var19 = var19.bind(var24)();
                            var0[var22] = var19;
                            var18 = var2;
                            var17 = var1;
                            _fun5539_ip = 348;
                            continue _fun5539;
                        case 227:
                            var20 = var16.style;
                            var23 = _closure1_slot1;
                            var21 = _closure1_slot2;
                            var19 = var21[var7];
                            var19 = var23.bind(var10)(var19);
                            var19 = var19.bind(var10)(var20);
                            var21 = var21[var6];
                            var21 = var23.bind(var10)(var21);
                            var21 = var24 instanceof var21;
                            if (var21) {
                                _fun5539_ip = 282;
                                continue _fun5539
                            }
                        case 270:
                            var0[var22] = var19;
                            var18 = var20;
                            var17 = var19;
                            _fun5539_ip = 348;
                            continue _fun5539;
                        case 282:
                            if (!(var9 != var19)) {
                                _fun5539_ip = 314;
                                continue _fun5539
                            }
                        case 286:
                            var23 = var19;
                            if (!(var19 === var20)) {
                                _fun5539_ip = 312;
                                continue _fun5539
                            }
                        case 293:
                            var26 = var14.Object;
                            var25 = var26.assign;
                            var21 = {};
                            var23 = var25.bind(var26)(var21, var19);
                        case 312:
                            _fun5539_ip = 316;
                            continue _fun5539;
                        case 314:
                            var23 = {};
                        case 316:
                            var21 = var24.__replaceAnimatedNodeWithValues;
                            var21 = var21.bind(var24)(var23);
                            var21 = var24.__getValueForStyle;
                            var21 = var21.bind(var24)(var23);
                            var0[var22] = var21;
                            var18 = var20;
                            var17 = var19;
                        case 348:
                            var11 = var11 + 1;
                            var2 = var18;
                            var1 = var17;
                            if (var11 < var12) {
                                _fun5539_ip = 87;
                                continue _fun5539
                            }
                        case 364:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[1] = var4;
                var4 = {};
                var6 = '__getNativeAnimatedEventTuples';
                var4.key = var6;
                var6 = function() { // Original name: __getNativeAnimatedEventTuples, environment: var5
                    _fun5540: for (var _fun5540_ip = 0;;) switch (_fun5540_ip) {
                        case 0:
                            var7 = this;
                            var0 = new Array(0);
                            var1 = global;
                            var3 = var1.Object;
                            var2 = var3.keys;
                            var1 = _closure1_slot10;
                            var4 = _closure1_slot14;
                            var5 = undefined;
                            var1 = var1.bind(var5)(var7, var4);
                            var1 = var1[var4];
                            var4 = var2.bind(var3)(var1);
                            var3 = var4.length;
                            var2 = 0;
                            var8 = var2 < var3;
                            var1 = 13;
                            if (!var8) {
                                _fun5540_ip = 159;
                                continue _fun5540
                            }
                        case 65:
                            var11 = var4[var2];
                            var8 = _closure1_slot10;
                            var9 = _closure1_slot14;
                            var8 = var8.bind(var5)(var7, var9);
                            var8 = var8[var9];
                            var10 = var8[var11];
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var8 = var8[var1];
                            var8 = var9.bind(var5)(var8);
                            var8 = var8.AnimatedEvent;
                            var8 = var10 instanceof var8;
                            if (!var8) {
                                _fun5540_ip = 127;
                                continue _fun5540
                            }
                        case 121:
                            var8 = var10.__isNative;
                        case 127:
                            if (!var8) {
                                _fun5540_ip = 152;
                                continue _fun5540
                            }
                        case 130:
                            var9 = var0.push;
                            var8 = new Array(2);
                            var8[0] = var11;
                            var8[1] = var10;
                            var8 = var9.bind(var0)(var8);
                        case 152:
                            var2 = var2 + 1;
                            if (var2 < var3) {
                                _fun5540_ip = 65;
                                continue _fun5540
                            }
                        case 159:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[2] = var4;
                var4 = {};
                var6 = '__getAnimatedValue';
                var4.key = var6;
                var6 = function() { // Original name: __getAnimatedValue, environment: var5
                    _fun5541: for (var _fun5541_ip = 0;;) switch (_fun5541_ip) {
                        case 0:
                            var5 = this;
                            var0 = {};
                            var3 = _closure1_slot10;
                            var6 = _closure1_slot12;
                            var1 = undefined;
                            var4 = var3.bind(var1)(var5, var6);
                            var4 = var4[var6];
                            var2 = _closure1_slot13;
                            var1 = var3.bind(var1)(var5, var2);
                            var3 = var1[var2];
                            var2 = var3.length;
                            var1 = 0;
                            var5 = var1 < var2;
                            if (!var5) {
                                _fun5541_ip = 85;
                                continue _fun5541
                            }
                        case 56:
                            var6 = var4[var1];
                            var7 = var3[var1];
                            var5 = var7.__getAnimatedValue;
                            var5 = var5.bind(var7)();
                            var0[var6] = var5;
                            var1 = var1 + 1;
                            if (var1 < var2) {
                                _fun5541_ip = 56;
                                continue _fun5541
                            }
                        case 85:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[3] = var4;
                var4 = {};
                var6 = '__attach';
                var4.key = var6;
                var6 = function() { // Original name: __attach, environment: var5
                    _fun5542: for (var _fun5542_ip = 0;;) switch (_fun5542_ip) {
                        case 0:
                            var5 = this;
                            var2 = _closure1_slot10;
                            var3 = _closure1_slot13;
                            var0 = undefined;
                            var2 = var2.bind(var0)(var5, var3);
                            var4 = var2[var3];
                            var3 = var4.length;
                            var2 = 0;
                            var6 = var2 < var3;
                            if (!var6) {
                                _fun5542_ip = 62;
                                continue _fun5542
                            }
                        case 40:
                            var7 = var4[var2];
                            var6 = var7.__addChild;
                            var6 = var6.bind(var7)(var5);
                            var2 = var2 + 1;
                            if (var2 < var3) {
                                _fun5542_ip = 40;
                                continue _fun5542
                            }
                        case 62:
                            var4 = _closure1_slot21;
                            var11 = _closure2_slot0;
                            var10 = '__attach';
                            var8 = 3;
                            var12 = undefined;
                            var9 = var5;
                            var2 = var12[var4](var11, var10, var9, var8, var7);
                            var1 = new Array(0);
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var4.value = var6;
                var0[4] = var4;
                var4 = {};
                var6 = '__detach';
                var4.key = var6;
                var6 = function() { // Original name: __detach, environment: var5
                    _fun5543: for (var _fun5543_ip = 0;;) switch (_fun5543_ip) {
                        case 0:
                            var5 = this;
                            var0 = var5.__isNative;
                            if (!var0) {
                                _fun5543_ip = 41;
                                continue _fun5543
                            }
                        case 12:
                            var3 = _closure1_slot10;
                            var2 = _closure1_slot15;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var5, var2);
                            var2 = var1[var2];
                            var1 = null;
                            var0 = var1 != var2;
                        case 41:
                            if (!var0) {
                                _fun5543_ip = 86;
                                continue _fun5543
                            }
                        case 44:
                            var4 = _closure1_slot10;
                            var1 = _closure1_slot17;
                            var0 = undefined;
                            var2 = var4.bind(var0)(var5, var1);
                            var1 = var2[var1];
                            var3 = _closure1_slot15;
                            var0 = var4.bind(var0)(var5, var3);
                            var0 = var0[var3];
                            var0 = var1.bind(var2)(var0);
                        case 86:
                            var2 = _closure1_slot10;
                            var6 = _closure1_slot15;
                            var0 = undefined;
                            var4 = var2.bind(var0)(var5, var6);
                            var3 = null;
                            var4[var6] = var3;
                            var3 = _closure1_slot13;
                            var2 = var2.bind(var0)(var5, var3);
                            var4 = var2[var3];
                            var3 = var4.length;
                            var2 = 0;
                            var6 = var2 < var3;
                            if (!var6) {
                                _fun5543_ip = 161;
                                continue _fun5543
                            }
                        case 139:
                            var7 = var4[var2];
                            var6 = var7.__removeChild;
                            var6 = var6.bind(var7)(var5);
                            var2 = var2 + 1;
                            if (var2 < var3) {
                                _fun5543_ip = 139;
                                continue _fun5543
                            }
                        case 161:
                            var4 = _closure1_slot21;
                            var11 = _closure2_slot0;
                            var10 = '__detach';
                            var8 = 3;
                            var12 = undefined;
                            var9 = var5;
                            var2 = var12[var4](var11, var10, var9, var8, var7);
                            var1 = new Array(0);
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var4.value = var6;
                var0[5] = var4;
                var4 = {};
                var6 = 'update';
                var4.key = var6;
                var6 = function() { // Original name: update, environment: var5
                    var3 = _closure1_slot10;
                    var1 = _closure1_slot11;
                    var0 = undefined;
                    var2 = this;
                    var2 = var3.bind(var0)(var2, var1);
                    var1 = var2[var1];
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var4.value = var6;
                var0[6] = var4;
                var4 = {};
                var6 = '__makeNative';
                var4.key = var6;
                var6 = function(arg0) { // Original name: __makeNative, environment: var5
                    _fun5545: for (var _fun5545_ip = 0;;) switch (_fun5545_ip) {
                        case 0:
                            var3 = arg0;
                            var5 = this;
                            var1 = _closure1_slot10;
                            var2 = _closure1_slot13;
                            var0 = undefined;
                            var1 = var1.bind(var0)(var5, var2);
                            var6 = var1[var2];
                            var2 = var6.length;
                            var1 = 0;
                            var7 = var1 < var2;
                            if (!var7) {
                                _fun5545_ip = 65;
                                continue _fun5545
                            }
                        case 43:
                            var8 = var6[var1];
                            var7 = var8.__makeNative;
                            var7 = var7.bind(var8)(var3);
                            var1 = var1 + 1;
                            if (var1 < var2) {
                                _fun5545_ip = 43;
                                continue _fun5545
                            }
                        case 65:
                            var1 = var5.__isNative;
                            if (var1) {
                                _fun5545_ip = 185;
                                continue _fun5545
                            }
                        case 74:
                            var1 = true;
                            var5.__isNative = var1;
                            var7 = _closure1_slot21;
                            var12 = _closure2_slot0;
                            var11 = '__setPlatformConfig';
                            var9 = 3;
                            var13 = undefined;
                            var10 = var5;
                            var2 = var13[var7](var12, var11, var10, var9, var8);
                            var1 = new Array(1);
                            var1[0] = var3;
                            var1 = var2.bind(var0)(var1);
                            var1 = _closure1_slot10;
                            var2 = _closure1_slot15;
                            var1 = var1.bind(var0)(var5, var2);
                            var2 = var1[var2];
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun5545_ip = 185;
                                continue _fun5545
                            }
                        case 148:
                            var1 = _closure1_slot10;
                            var2 = _closure1_slot16;
                            var3 = var1.bind(var0)(var5, var2);
                            var2 = var3[var2];
                            var4 = _closure1_slot15;
                            var1 = var1.bind(var0)(var5, var4);
                            var1 = var1[var4];
                            var1 = var2.bind(var3)(var1);
                        case 185:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[7] = var4;
                var4 = {};
                var6 = 'setNativeView';
                var4.key = var6;
                var6 = function(arg0) { // Original name: setNativeView, environment: var5
                    _fun5546: for (var _fun5546_ip = 0;;) switch (_fun5546_ip) {
                        case 0:
                            var7 = arg0;
                            var5 = this;
                            var1 = _closure1_slot10;
                            var2 = _closure1_slot15;
                            var0 = undefined;
                            var1 = var1.bind(var0)(var5, var2);
                            var2 = var1[var2];
                            var6 = null;
                            var3 = var6 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun5546_ip = 46;
                                continue _fun5546
                            }
                        case 40:
                            var1 = var2.instance;
                        case 46:
                            if (!(var1 !== var7)) {
                                _fun5546_ip = 126;
                                continue _fun5546
                            }
                        case 50:
                            var1 = _closure1_slot10;
                            var3 = _closure1_slot15;
                            var2 = var1.bind(var0)(var5, var3);
                            var1 = {};
                            var1.instance = var7;
                            var1.connectedViewTag = var6;
                            var2[var3] = var1;
                            var1 = var5.__isNative;
                            if (!var1) {
                                _fun5546_ip = 126;
                                continue _fun5546
                            }
                        case 89:
                            var1 = _closure1_slot10;
                            var2 = _closure1_slot16;
                            var3 = var1.bind(var0)(var5, var2);
                            var2 = var3[var2];
                            var4 = _closure1_slot15;
                            var1 = var1.bind(var0)(var5, var4);
                            var1 = var1[var4];
                            var1 = var2.bind(var3)(var1);
                        case 126:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[8] = var4;
                var4 = {};
                var6 = '__restoreDefaultValues';
                var4.key = var6;
                var6 = function() { // Original name: __restoreDefaultValues, environment: var5
                    _fun5547: for (var _fun5547_ip = 0;;) switch (_fun5547_ip) {
                        case 0:
                            var3 = this;
                            var0 = var3.__isNative;
                            if (!var0) {
                                _fun5547_ip = 64;
                                continue _fun5547
                            }
                        case 12:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 14;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var2 = var0.API;
                            var1 = var2.restoreDefaultValues;
                            var0 = var3.__getNativeTag;
                            var0 = var0.bind(var3)();
                            var0 = var1.bind(var2)(var0);
                        case 64:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[9] = var4;
                var4 = {};
                var6 = '__getNativeConfig';
                var4.key = var6;
                var5 = function() { // Original name: __getNativeConfig, environment: var5
                    _fun5548: for (var _fun5548_ip = 0;;) switch (_fun5548_ip) {
                        case 0:
                            var2 = this;
                            var0 = var2.__getPlatformConfig;
                            var6 = var0.bind(var2)();
                            var1 = {};
                            var4 = _closure1_slot10;
                            var7 = _closure1_slot12;
                            var0 = undefined;
                            var5 = var4.bind(var0)(var2, var7);
                            var5 = var5[var7];
                            var3 = _closure1_slot13;
                            var0 = var4.bind(var0)(var2, var3);
                            var4 = var0[var3];
                            var3 = var4.length;
                            var0 = 0;
                            var7 = var0 < var3;
                            if (!var7) {
                                _fun5548_ip = 106;
                                continue _fun5548
                            }
                        case 66:
                            var8 = var5[var0];
                            var9 = var4[var0];
                            var7 = var9.__makeNative;
                            var7 = var7.bind(var9)(var6);
                            var7 = var9.__getNativeTag;
                            var7 = var7.bind(var9)();
                            var1[var8] = var7;
                            var0 = var0 + 1;
                            if (var0 < var3) {
                                _fun5548_ip = 66;
                                continue _fun5548
                            }
                        case 106:
                            var0 = {};
                            var3 = 'props';
                            var0.type = var3;
                            var0.props = var1;
                            var1 = var2.__getDebugID;
                            var1 = var1.bind(var2)();
                            var0.debugID = var1;
                            return var0;
                    }
                };
                var4.value = var5;
                var0[10] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var1 = var1.bind(var0)(var5);
            var5 = var3.Object;
            var5 = var5.prototype;
            var5 = var5.hasOwnProperty;
            var _closure1_slot18 = var5;
            var3 = var3.Object;
            var3 = var3.hasOwn;
            var5 = null;
            if (!(var5 == var3)) {
                _fun5528_ip = 398;
                continue _fun5528
            }
        case 393:
            var3 = function(arg0, arg1) { // Environment: var4
                var3 = _closure1_slot18;
                var2 = var3.call;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
        case 398:
            var _closure1_slot19 = var3;
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 102, 18, 99, 100, 147, 375, 359, 376, 378, 349, 44, 117]);