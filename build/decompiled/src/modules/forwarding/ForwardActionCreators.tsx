// modules/forwarding/ForwardActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.MessageSendLocation;
    var _closure1_slot6 = var1;
    var1 = {};
    var6 = function arg0, arg1, arg2() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun54889: for (var _fun54889_ip = 0;;) switch (_fun54889_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun54889_ip = 675;
                            continue _fun54889
                        }
                    case 10:
                        var4 = _closure1_slot4;
                        var2 = var4.getChannel;
                        var1 = _closure2_slot1;
                        var11 = var2.bind(var4)(var1);
                        var2 = var4.getChannel;
                        var1 = _closure2_slot0;
                        var1 = var1.channel_id;
                        var2 = var2.bind(var4)(var1);
                        var1 = _closure2_slot2;
                        var6 = null;
                        if (!(var6 != var1)) {
                            _fun54889_ip = 78;
                            continue _fun54889
                        }
                    case 63:
                        var1 = _closure2_slot2;
                        var1 = var1.isICYMIGameContentForwarding;
                        if (var1) {
                            _fun54889_ip = 94;
                            continue _fun54889
                        }
                    case 78:
                        var4 = var6 == var2;
                        var1 = undefined;
                        if (var4) {
                            _fun54889_ip = 92;
                            continue _fun54889
                        }
                    case 87:
                        var1 = var2.guild_id;
                    case 92:
                        _fun54889_ip = 122;
                        continue _fun54889;
                    case 94:
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 4;
                        var5 = var5[var4];
                        var4 = undefined;
                        var4 = var7.bind(var4)(var5);
                        var1 = var4.GAME_CONTENT_GUILD_ID;
                    case 122:
                        if (!(var6 == var2)) {
                            _fun54889_ip = 133;
                            continue _fun54889
                        }
                    case 126:
                        if (!(var6 != var1)) {
                            _fun54889_ip = 639;
                            continue _fun54889
                        }
                    case 133:
                        if (!(var6 != var11)) {
                            _fun54889_ip = 603;
                            continue _fun54889
                        }
                    case 140:
                        var7 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var12 = 5;
                        var4 = var5[var12];
                        var2 = undefined;
                        var8 = var7.bind(var2)(var4);
                        var7 = var8.parse;
                        var4 = '';
                        var13 = var7.bind(var8)(var11, var4);
                        var8 = {};
                        var8.guild_id = var1;
                        var1 = _closure2_slot0;
                        var4 = var1.channel_id;
                        var8.channel_id = var4;
                        var1 = var1.id;
                        var8.message_id = var1;
                        var4 = _closure1_slot0;
                        var1 = 6;
                        var1 = var5[var1];
                        var1 = var4.bind(var2)(var1);
                        var1 = var1.MessageReferenceTypes;
                        var1 = var1.FORWARD;
                        var8.type = var1;
                        var1 = _closure2_slot2;
                        var4 = var6 == var1;
                        var1 = undefined;
                        if (var4) {
                            _fun54889_ip = 262;
                            continue _fun54889
                        }
                    case 252:
                        var4 = _closure2_slot2;
                        var1 = var4.onlyAttachmentIds;
                    case 262:
                        if (!(var6 == var1)) {
                            _fun54889_ip = 298;
                            continue _fun54889
                        }
                    case 266:
                        var1 = _closure2_slot2;
                        var4 = var6 == var1;
                        var1 = undefined;
                        if (var4) {
                            _fun54889_ip = 289;
                            continue _fun54889
                        }
                    case 279:
                        var4 = _closure2_slot2;
                        var1 = var4.onlyEmbedIndices;
                    case 289:
                        var4 = var6 != var1;
                        var1 = undefined;
                        if (!var4) {
                            _fun54889_ip = 331;
                            continue _fun54889
                        }
                    case 298:
                        var4 = {};
                        var5 = _closure2_slot2;
                        var7 = var5.onlyAttachmentIds;
                        var4.attachment_ids = var7;
                        var5 = var5.onlyEmbedIndices;
                        var4.embed_indices = var5;
                        var1 = var4;
                    case 331:
                        var8.forward_only = var1;
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var5 = 7;
                        var1 = var1[var5];
                        var10 = var4.bind(var2)(var1);
                        var7 = var10.sendMessage;
                        var18 = var11.id;
                        var1 = {};
                        var1.messageReference = var8;
                        var8 = _closure1_slot6;
                        var8 = var8.FORWARDING;
                        var1.location = var8;
                        var8 = false;
                        var1.eagerDispatch = var8;
                        var19 = var10;
                        var17 = var13;
                        var16 = false;
                        var15 = var1;
                        var1 = var19[var7](var18, var17, var16, var15, var14);
                        SaveGenerator(address = 416);
                    case 414:
                        return var1;
                    case 416:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun54889_ip = 600;
                            continue _fun54889
                        }
                    case 425:
                        var4 = _closure2_slot2;
                        var7 = var6 == var4;
                        var4 = undefined;
                        if (var7) {
                            _fun54889_ip = 448;
                            continue _fun54889
                        }
                    case 438:
                        var7 = _closure2_slot2;
                        var4 = var7.withMessage;
                    case 448:
                        var4 = var6 == var4;
                        if (var4) {
                            _fun54889_ip = 491;
                            continue _fun54889
                        }
                    case 455:
                        var7 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var6 = 8;
                        var6 = var10[var6];
                        var10 = var7.bind(var2)(var6);
                        var7 = var10.isRatelimitedInChannel;
                        var6 = _closure1_slot5;
                        var4 = var7.bind(var10)(var11, var6);
                    case 491:
                        if (var4) {
                            _fun54889_ip = 597;
                            continue _fun54889
                        }
                    case 494:
                        var10 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var5 = var4[var5];
                        var7 = var10.bind(var2)(var5);
                        var6 = var7.sendMessage;
                        var5 = var11.id;
                        var4 = var4[var12];
                        var10 = var10.bind(var2)(var4);
                        var4 = var10.parse;
                        var3 = _closure2_slot2;
                        var3 = var3.withMessage;
                        var17 = var4.bind(var10)(var11, var3);
                        var3 = {};
                        var9 = _closure1_slot6;
                        var9 = var9.FORWARDING;
                        var3.location = var9;
                        var19 = var7;
                        var18 = var5;
                        var16 = false;
                        var15 = var3;
                        var3 = var19[var6](var18, var17, var16, var15, var14);
                        SaveGenerator(address = 588);
                    case 586:
                        return var3;
                    case 588:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (!var4) {
                            _fun54889_ip = 597;
                            continue _fun54889
                        }
                    case 594:
                        return var3;
                    case 597:
                        return var2;
                    case 600:
                        return var1;
                    case 603:
                        var1 = global;
                        var3 = var1.Error;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var18 = 'Unable to find destination channel for message';
                        var19 = var2;
                        var1 = new var19[var3](var18, var17);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 639:
                        var1 = global;
                        var3 = var1.Error;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var18 = 'Unable to find original channel for message';
                        var19 = var2;
                        var1 = new var19[var3](var18, var17);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 675:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.sendForward = var6;
    var6 = function arg0, arg1, arg2() {
        var4 = arg1;
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 9;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var3.bind(var2)(var1);
        var3 = var4.map;
        var0 = function(arg0) { // Environment: var0
            var4 = _closure1_slot7;
            var3 = var4.sendForward;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var0 = arg0;
            var0 = var3.bind(var4)(var2, var0, var1);
            return var0;
        };
        var0 = var3.bind(var4)(var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.sendForwards = var6;
    var _closure1_slot7 = var1;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forwarding/ForwardActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1372, 3091, 1346, 6621, 5588, 792, 6526, 6622, 3362, 2]);