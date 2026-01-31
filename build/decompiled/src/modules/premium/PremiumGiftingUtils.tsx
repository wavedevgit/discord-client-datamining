// modules/premium/PremiumGiftingUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var7;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var7[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.MessageSendLocation;
    var _closure1_slot5 = var3;
    var4 = {};
    var3 = 'action';
    var4.ACTION = var3;
    var3 = 'loop';
    var4.LOOP = var3;
    var3 = 'idle';
    var4.IDLE = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun75206: for (var _fun75206_ip = 0;;) switch (_fun75206_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        var4 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun75206_ip = 310;
                            continue _fun75206
                        }
                    case 16:
                        var1 = null;
                        if (!(var1 != var4)) {
                            _fun75206_ip = 274;
                            continue _fun75206
                        }
                    case 25:
                        if (!(var1 != var5)) {
                            _fun75206_ip = 238;
                            continue _fun75206
                        }
                    case 32:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 3;
                        var1 = var3[var1];
                        var7 = undefined;
                        var3 = var2.bind(var7)(var1);
                        var2 = var3.openPrivateChannel;
                        var1 = {};
                        var5 = var5.id;
                        var1.recipientIds = var5;
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.then;
                        var1 = function(arg0) { // Environment: var1
                            _fun75207: for (var _fun75207_ip = 0;;) switch (_fun75207_ip) {
                                case 0:
                                    var3 = _closure1_slot4;
                                    var2 = var3.getChannel;
                                    var0 = arg0;
                                    var0 = var2.bind(var3)(var0);
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 4;
                                    var1 = var3[var1];
                                    var5 = undefined;
                                    var4 = var2.bind(var5)(var1);
                                    var1 = null;
                                    var3 = var1 != var0;
                                    var2 = 'PrivateChannel is null';
                                    var2 = var4.bind(var5)(var3, var2);
                                    if (!(var1 != var0)) {
                                        _fun75207_ip = 66;
                                        continue _fun75207
                                    }
                                case 64:
                                    return var0;
                                case 66:
                                    var0 = global;
                                    var2 = var0.Error;
                                    var0 = var2.prototype;
                                    var1 = Object.create(var0, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var7 = 'Channel must be defined';
                                    var8 = var1;
                                    var0 = new var8[var2](var7, var6);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    throw var0;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 103);
                    case 101:
                        return var1;
                    case 103:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun75206_ip = 235;
                            continue _fun75206
                        }
                    case 112:
                        var3 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var2 = 5;
                        var2 = var10[var2];
                        var3 = var3.bind(var7)(var2);
                        var2 = var3.getGiftCodeURL;
                        var9 = var2.bind(var3)(var4);
                        var3 = _closure1_slot1;
                        var2 = 6;
                        var2 = var10[var2];
                        var6 = var3.bind(var7)(var2);
                        var5 = var6.sendMessage;
                        var4 = var1.id;
                        var2 = 7;
                        var2 = var10[var2];
                        var3 = var3.bind(var7)(var2);
                        var2 = var3.parse;
                        var13 = var2.bind(var3)(var1, var9);
                        var2 = {};
                        var9 = true;
                        var2.isGiftLinkSentOnBehalfOfUser = var9;
                        var8 = _closure1_slot5;
                        var8 = var8.GIFTING;
                        var2.location = var8;
                        var15 = var6;
                        var14 = var4;
                        var12 = undefined;
                        var11 = var2;
                        var2 = var15[var5](var14, var13, var12, var11, var10);
                        return var2;
                    case 235:
                        return var1;
                    case 238:
                        var1 = global;
                        var3 = var1.Error;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var14 = 'Recipient must be defined';
                        var15 = var2;
                        var1 = new var15[var3](var14, var13);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 274:
                        var1 = global;
                        var3 = var1.Error;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var14 = 'giftCode must be defined';
                        var15 = var2;
                        var1 = new var15[var3](var14, var13);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 310:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var3 = var3.bind(var0)();
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/PremiumGiftingUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.AnimationState = var4;
    var2.sendGiftMessage = var3;
    var1 = function() { // Environment: var1
        var0 = undefined;
        return var0;
    };
    var2.unhandledGiftIntent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1372, 1346, 3904, 44, 3307, 6488, 5550, 2]);