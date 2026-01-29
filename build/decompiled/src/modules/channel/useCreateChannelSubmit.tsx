// modules/channel/useCreateChannelSubmit.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var4 = metroImportAll;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var4;
    var _closure1_slot3 = var6;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var1);
    var7 = 0;
    var1 = var6[var7];
    var0 = undefined;
    var1 = var8.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.ChannelTypes;
    var _closure1_slot7 = var4;
    var1 = var1.Permissions;
    var _closure1_slot8 = var1;
    var1 = {};
    var1.PREMIUM_CHANNEL = var7;
    var4 = 'PREMIUM_CHANNEL';
    var1[var7] = var4;
    var _closure1_slot9 = var1;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel/useCreateChannelSubmit.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: useCreateChannelSubmit, environment: var3
        var6 = arg0;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot6;
        var3 = var5.useState;
        var2 = false;
        var2 = var3.bind(var5)(var2);
        var9 = _closure1_slot5;
        var1 = undefined;
        var8 = 2;
        var4 = var9.bind(var1)(var2, var8);
        var2 = 0;
        var3 = var4[var2];
        var7 = 1;
        var4 = var4[var7];
        var _closure2_slot1 = var4;
        var10 = var5.useState;
        var4 = {};
        var4 = var10.bind(var5)(var4);
        var4 = var9.bind(var1)(var4, var8);
        var2 = var4[var2];
        var4 = var4[var7];
        var _closure2_slot2 = var4;
        var4 = var5.useCallback;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function*(arg0) { // Environment: var0
                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                    _fun65448: for (var _fun65448_ip = 0;;) switch (_fun65448_ip) {
                        case 0:
                            StartGenerator();
                            var1 = arg0;
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                            if (var2) {
                                _fun65448_ip = 670;
                                continue _fun65448
                            }
                        case 13:
                            var18 = var1.overwrites;
                            var15 = var1.bitrate;
                            var11 = var1.userLimit;
                            var3 = var1.createMode;
                            var20 = var1.guildId;
                            var17 = var1.name;
                            var19 = var1.channelType;
                            var16 = var1.categoryId;
                            var5 = undefined;
                            var12 = undefined;
                            var10 = undefined;
                            var9 = undefined;
                            var7 = undefined;
                            var6 = undefined;
                            var8 = undefined;
                            SaveGenerator(address = 77);
                        case 75:
                            return var5;
                        case 77:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                            if (var2) {
                                _fun65448_ip = 667;
                                continue _fun65448
                            }
                        case 86:
                            var2 = _closure1_slot9;
                            var2 = var2.PREMIUM_CHANNEL;
                            if (!(var3 === var2)) {
                                _fun65448_ip = 210;
                                continue _fun65448
                            }
                        case 103:
                            var13 = var18;
                            var3 = var13.push;
                            var2 = {};
                            var14 = var20;
                            var2.id = var14;
                            var21 = _closure1_slot0;
                            var22 = _closure1_slot3;
                            var14 = 4;
                            var14 = var22[var14];
                            var14 = var21.bind(var5)(var14);
                            var14 = var14.PermissionOverwriteType;
                            var14 = var14.ROLE;
                            var2.type = var14;
                            var14 = _closure1_slot8;
                            var14 = var14.VIEW_CHANNEL;
                            var2.deny = var14;
                            var21 = _closure1_slot2;
                            var14 = 5;
                            var14 = var22[var14];
                            var22 = var21.bind(var5)(var14);
                            var21 = var22.getFlag;
                            var14 = 0;
                            var14 = var21.bind(var22)(var14);
                            var2.allow = var14;
                            var2 = var3.bind(var13)(var2);
                        case 210:
                            var13 = _closure2_slot1;
                            var2 = true;
                            var2 = var13.bind(var5)(var2);
                        case 224: // try_start_0 // try_start_1
                            var13 = _closure1_slot1;
                            var14 = _closure1_slot3;
                            var2 = 6;
                            var2 = var14[var2];
                            var14 = var13.bind(var5)(var2);
                            var13 = var14.createChannel;
                            var2 = {};
                            var2.guildId = var20;
                            var2.type = var19;
                            var20 = var17;
                            var2.name = var20;
                            var2.permissionOverwrites = var18;
                            var2.bitrate = var15;
                            var2.userLimit = var11;
                            var11 = _closure1_slot7;
                            var18 = var11.GUILD_CATEGORY;
                            var11 = null;
                            var15 = null;
                            if (!(var19 !== var18)) {
                                _fun65448_ip = 303;
                                continue _fun65448
                            }
                        case 300:
                            var15 = var16;
                        case 303:
                            var2.parentId = var15;
                            var2 = var13.bind(var14)(var2);
                            SaveGenerator(address = 317);
                        case 315:
                            return var2;
                        case 317:
                            ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 13);
                            if (var13) {
                                _fun65448_ip = 488;
                                continue _fun65448
                            }
                        case 326:
                            var12 = var2;
                            if (!(var11 != var2)) {
                                _fun65448_ip = 483;
                                continue _fun65448
                            }
                        case 336:
                            var12 = var12.body;
                            var10 = var12;
                            if (!(var11 == var12)) {
                                _fun65448_ip = 352;
                                continue _fun65448
                            }
                        case 348:
                            var12 = {};
                            _fun65448_ip = 355;
                            continue _fun65448;
                        case 352:
                            var12 = var10;
                        case 355:
                            var10 = var12.id;
                            var9 = var10;
                            var7 = var12.guild_id;
                            if (!(var11 != var10)) {
                                _fun65448_ip = 483;
                                continue _fun65448
                            }
                        case 372:
                            var14 = _closure1_slot0;
                            var18 = _closure1_slot3;
                            var10 = 7;
                            var10 = var18[var10];
                            var10 = var14.bind(var5)(var10);
                            var13 = var10.AccessibilityAnnouncer;
                            var12 = var13.announce;
                            var10 = 8;
                            var15 = var18[var10];
                            var15 = var14.bind(var5)(var15);
                            var16 = var15.intl;
                            var15 = var16.formatToPlainString;
                            var10 = var18[var10];
                            var10 = var14.bind(var5)(var10);
                            var10 = var10.t;
                            var14 = var10.Wke70b;
                            var10 = {};
                            var10.name = var17;
                            var10 = var15.bind(var16)(var14, var10);
                            var10 = var12.bind(var13)(var10);
                            var10 = _closure2_slot0;
                            if (!(var11 != var10)) {
                                _fun65448_ip = 483;
                                continue _fun65448
                            }
                        case 473:
                            var10 = _closure2_slot0;
                            var7 = var10.bind(var5)(var9, var7);
                        case 483: // try_end0
                            _fun65448_ip = 638;
                            continue _fun65448;
                        case 488: // try_end1
                            var9 = _closure2_slot1;
                            var7 = false;
                            var7 = var9.bind(var5)(var7);
                            return var2;
                        case 502: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register = 2);
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot3;
                            var4 = 7;
                            var4 = var13[var4];
                            var4 = var12.bind(var5)(var4);
                            var9 = var4.AccessibilityAnnouncer;
                            var7 = var9.announce;
                            var4 = 8;
                            var10 = var13[var4];
                            var10 = var12.bind(var5)(var10);
                            var11 = var10.intl;
                            var10 = var11.string;
                            var4 = var13[var4];
                            var4 = var12.bind(var5)(var4);
                            var4 = var4.t;
                            var4 = var4["0SbUzm"];
                            var4 = var10.bind(var11)(var4);
                            var4 = var7.bind(var9)(var4);
                            var4 = _closure2_slot2;
                            var2 = var2.body;
                            var8 = var2;
                            var7 = null;
                            var9 = var7 == var2;
                            var2 = undefined;
                            if (var9) {
                                _fun65448_ip = 619;
                                continue _fun65448
                            }
                        case 613:
                            var2 = var8.errors;
                        case 619:
                            var6 = var2;
                            if (!(var7 == var2)) {
                                _fun65448_ip = 630;
                                continue _fun65448
                            }
                        case 626:
                            var2 = {};
                            _fun65448_ip = 633;
                            continue _fun65448;
                        case 630:
                            var2 = var6;
                        case 633:
                            var2 = var4.bind(var5)(var2);
                        case 638: // try_end2
                            var4 = _closure2_slot1;
                            var2 = false;
                            var2 = var4.bind(var5)(var2);
                            return var5;
                        case 652: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register = 2);
                            var4 = _closure2_slot1;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                            throw var2;
                        case 667:
                            return var1;
                        case 670:
                            return var0;
                    }
                };
                var1 = var0.next;
                var1 = var1.bind(var0)();
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
        var1 = var0.bind(var1)();
        var0 = new Array(1);
        var0[0] = var6;
        var1 = var4.bind(var5)(var1, var0);
        var0 = new Array(3);
        var0[0] = var3;
        var0[1] = var2;
        var0[2] = var1;
        return var0;
    };
    var2.default = var3;
    var2.CreateChannelMode = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 660, 1636, 484, 8091, 3165, 1234, 2]);