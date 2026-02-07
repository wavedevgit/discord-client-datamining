// modules/guild_scheduled_events/StartEventPlatformUtils.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun67713: for (var _fun67713_ip = 0;;) switch (_fun67713_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        var2 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun67713_ip = 532;
                            continue _fun67713
                        }
                    case 16:
                        var5 = var1.entity_type;
                        var8 = var1.guild_id;
                        var4 = _closure1_slot8;
                        var4 = var4.STAGE_INSTANCE;
                        if (!(var4 !== var5)) {
                            _fun67713_ip = 298;
                            continue _fun67713
                        }
                    case 47:
                        var4 = _closure1_slot8;
                        var4 = var4.VOICE;
                        if (!(var4 !== var5)) {
                            _fun67713_ip = 164;
                            continue _fun67713
                        }
                    case 61:
                        var4 = _closure1_slot8;
                        var4 = var4.EXTERNAL;
                        if (!(var4 === var5)) {
                            _fun67713_ip = 518;
                            continue _fun67713
                        }
                    case 78:
                        var5 = _closure1_slot7;
                        var4 = var5.getGuildId;
                        var4 = var4.bind(var5)();
                        if (!(var4 !== var8)) {
                            _fun67713_ip = 144;
                            continue _fun67713
                        }
                    case 96:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var4 = 10;
                        var5 = var5[var4];
                        var4 = undefined;
                        var6 = var6.bind(var4)(var5);
                        var5 = var6.transitionTo;
                        var7 = _closure1_slot9;
                        var4 = var7.CHANNEL;
                        var4 = var4.bind(var7)(var8);
                        var4 = var5.bind(var6)(var4);
                    case 144:
                        var4 = null;
                        if (!(var4 != var2)) {
                            _fun67713_ip = 518;
                            continue _fun67713
                        }
                    case 153:
                        var4 = undefined;
                        var4 = var2.bind(var4)();
                        _fun67713_ip = 518;
                        continue _fun67713;
                    case 164:
                        var5 = _closure1_slot6;
                        var4 = var5.getChannelId;
                        var8 = var4.bind(var5)();
                        var6 = _closure1_slot5;
                        var5 = var6.getChannel;
                        var4 = var1.channel_id;
                        var6 = var5.bind(var6)(var4);
                        var7 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var4 = 6;
                        var5 = var5[var4];
                        var4 = undefined;
                        var10 = var7.bind(var4)(var5);
                        var5 = null;
                        var9 = var5 != var6;
                        var7 = 'could not find channel';
                        var7 = var10.bind(var4)(var9, var7);
                        var7 = var6.id;
                        if (!(var8 !== var7)) {
                            _fun67713_ip = 282;
                            continue _fun67713
                        }
                    case 246:
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot3;
                        var7 = 9;
                        var7 = var9[var7];
                        var8 = var8.bind(var4)(var7);
                        var7 = var8.selectVoiceChannel;
                        var6 = var6.id;
                        var6 = var7.bind(var8)(var6);
                    case 282:
                        if (!(var5 != var2)) {
                            _fun67713_ip = 518;
                            continue _fun67713
                        }
                    case 289:
                        var4 = var2.bind(var4)();
                        _fun67713_ip = 518;
                        continue _fun67713;
                    case 298:
                        var5 = _closure1_slot6;
                        var4 = var5.getChannelId;
                        var4 = var4.bind(var5)();
                        var6 = _closure1_slot5;
                        var5 = var6.getChannel;
                        var1 = var1.channel_id;
                        var6 = var5.bind(var6)(var1);
                        var7 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var1 = 6;
                        var1 = var5[var1];
                        var5 = undefined;
                        var9 = var7.bind(var5)(var1);
                        var7 = null;
                        var8 = var7 != var6;
                        var1 = 'could not find channel';
                        var1 = var9.bind(var5)(var8, var1);
                        var1 = var6.id;
                        if (!(var4 !== var1)) {
                            _fun67713_ip = 424;
                            continue _fun67713
                        }
                    case 380:
                        var4 = _closure1_slot2;
                        var8 = _closure1_slot3;
                        var1 = 7;
                        var1 = var8[var1];
                        var8 = var4.bind(var5)(var1);
                        var4 = var8.connectToStage;
                        var1 = true;
                        var1 = var4.bind(var8)(var6, var1);
                        SaveGenerator(address = 418);
                    case 416:
                        return var1;
                    case 418:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun67713_ip = 529;
                            continue _fun67713
                        }
                    case 424:
                        if (!(var7 != var2)) {
                            _fun67713_ip = 432;
                            continue _fun67713
                        }
                    case 428:
                        var2 = var2.bind(var5)();
                    case 432:
                        var4 = _closure1_slot2;
                        var8 = _closure1_slot3;
                        var2 = 7;
                        var2 = var8[var2];
                        var4 = var4.bind(var5)(var2);
                        var2 = var4.navigateToStage;
                        var2 = var2.bind(var4)(var6, var7);
                        SaveGenerator(address = 468);
                    case 466:
                        return var2;
                    case 468:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun67713_ip = 526;
                            continue _fun67713
                        }
                    case 474:
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var3 = 8;
                        var3 = var7[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.audienceAckRequestToSpeak;
                        var3 = false;
                        var3 = var4.bind(var5)(var6, var3);
                        SaveGenerator(address = 512);
                    case 510:
                        return var3;
                    case 512:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun67713_ip = 523;
                            continue _fun67713
                        }
                    case 518:
                        var4 = undefined;
                        return var4;
                    case 523:
                        return var3;
                    case 526:
                        return var2;
                    case 529:
                        return var1;
                    case 532:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot10 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
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
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildScheduledEventEntityTypes;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Routes;
    var _closure1_slot9 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/StartEventPlatformUtils.native.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.navigateToEvent = var3;
    var1 = function() {
        var0 = global;
        var1 = var0.Promise;
        var0 = var1.resolve;
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.postStartActions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1372, 3519, 3214, 1378, 660, 44, 5962, 5967, 4231, 1220, 2]);