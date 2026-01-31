// modules/applications/message_embed/native/utils/joinOrStartActivityInChannel.tsx
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
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun88763: for (var _fun88763_ip = 0;;) switch (_fun88763_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun88763_ip = 365;
                            continue _fun88763
                        }
                    case 15:
                        var14 = var1.appId;
                        var _closure4_slot0 = var14;
                        var8 = var1.channelId;
                        var12 = var1.analyticsLocations;
                        var11 = var1.customId;
                        var10 = var1.referrerId;
                        var5 = undefined;
                        SaveGenerator(address = 54);
                    case 52:
                        return var5;
                    case 54:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun88763_ip = 362;
                            continue _fun88763
                        }
                    case 63:
                        var4 = _closure1_slot4;
                        var2 = var4.getSelfEmbeddedActivityForChannel;
                        var2 = var2.bind(var4)(var8);
                        var7 = _closure1_slot6;
                        var4 = var7.getVoiceChannelId;
                        var7 = var4.bind(var7)();
                        var4 = null;
                        var13 = var4 == var2;
                        var9 = undefined;
                        if (var13) {
                            _fun88763_ip = 111;
                            continue _fun88763
                        }
                    case 106:
                        var9 = var2.applicationId;
                    case 111:
                        if (!(var9 === var14)) {
                            _fun88763_ip = 122;
                            continue _fun88763
                        }
                    case 115:
                        if (!(var7 !== var8)) {
                            _fun88763_ip = 286;
                            continue _fun88763
                        }
                    case 122:
                        var9 = _closure1_slot4;
                        var7 = var9.getEmbeddedActivitiesForChannel;
                        var9 = var7.bind(var9)(var8);
                        var7 = var9.filter;
                        var6 = function(arg0) { // Environment: var6
                            var0 = arg0;
                            var1 = var0.applicationId;
                            var0 = _closure4_slot0;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var7 = var7.bind(var9)(var6);
                        var9 = var7.length;
                        var6 = 0;
                        var9 = var9 > var6;
                        var13 = undefined;
                        if (!var9) {
                            _fun88763_ip = 180;
                            continue _fun88763
                        }
                    case 170:
                        var6 = var7[var6];
                        var13 = var6.compositeInstanceId;
                    case 180:
                        var7 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var6 = 5;
                        var6 = var15[var6];
                        var9 = var7.bind(var5)(var6);
                        var7 = var9.runPrimaryAppCommandOrJoinEmbeddedActivity;
                        var6 = {};
                        var6.channelId = var8;
                        var6.applicationId = var14;
                        var13 = var4 == var13;
                        var6.isStart = var13;
                        var14 = _closure1_slot1;
                        var13 = 6;
                        var13 = var15[var13];
                        var13 = var14.bind(var5)(var13);
                        var13 = var13.bind(var5)();
                        var6.embeddedActivitiesManager = var13;
                        var6.analyticsLocations = var12;
                        var6.customId = var11;
                        var6.referrerId = var10;
                        var6 = var7.bind(var9)(var6);
                        SaveGenerator(address = 274);
                    case 272:
                        return var6;
                    case 274:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 7);
                        if (var7) {
                            _fun88763_ip = 283;
                            continue _fun88763
                        }
                    case 280:
                        return var6;
                    case 283:
                        return var6;
                    case 286:
                        var7 = _closure1_slot5;
                        var6 = var7.getChannel;
                        var7 = var6.bind(var7)(var8);
                        var8 = var4 == var7;
                        var6 = undefined;
                        if (var8) {
                            _fun88763_ip = 314;
                            continue _fun88763
                        }
                    case 309:
                        var6 = var7.guild_id;
                    case 314:
                        var7 = var4 != var6;
                        var4 = null;
                        if (!var7) {
                            _fun88763_ip = 326;
                            continue _fun88763
                        }
                    case 323:
                        var4 = var6;
                    case 326:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 4;
                        var3 = var7[var3];
                        var3 = var6.bind(var5)(var3);
                        var2 = var2.location;
                        var2 = var3.bind(var5)(var4, var2);
                        var2 = true;
                        return var2;
                    case 362:
                        return var1;
                    case 365:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/applications/message_embed/native/utils/joinOrStartActivityInChannel.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.joinOrStartActivityInChannel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1371, 1372, 1661, 7927, 7874, 7904, 2]);