// modules/rpc/server/commands/soundboard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var14 = var1.RPC_LOCAL_SCOPE;
    var9 = var1.RPC_SCOPE_CONFIG;
    var1 = 4;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.RPCCommands;
    var1 = var1.RPCErrors;
    var _closure1_slot6 = var1;
    var1 = {};
    var8 = var3.GET_SOUNDBOARD_SOUNDS;
    var6 = {};
    var10 = {};
    var13 = var9.ANY;
    var11 = 5;
    var12 = var5[var11];
    var12 = var4.bind(var0)(var12);
    var12 = var12.OAuth2Scopes;
    var15 = var12.RPC;
    var12 = new Array(2);
    var12[0] = var15;
    var12[1] = var14;
    var10[var13] = var12;
    var6.scope = var10;
    var10 = function() { // Original name: handler, environment: var7
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun98895: for (var _fun98895_ip = 0;;) switch (_fun98895_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun98895_ip = 103;
                            continue _fun98895
                        }
                    case 9:
                        var5 = undefined;
                        var _closure4_slot0 = var5;
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 6;
                        var1 = var6[var1];
                        var4 = var4.bind(var5)(var1);
                        var1 = var4.maybeFetchSoundboardSounds;
                        var1 = var1.bind(var4)();
                        SaveGenerator(address = 52);
                    case 50:
                        return var1;
                    case 52:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun98895_ip = 100;
                            continue _fun98895
                        }
                    case 58:
                        var4 = _closure1_slot4;
                        var2 = var4.getSounds;
                        var5 = var2.bind(var4)();
                        var2 = new Array(0);
                        _closure4_slot0 = var2;
                        var4 = var5.forEach;
                        var3 = function(arg0) { // Environment: var3
                            var2 = arg0;
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure4_slot0;
                                var1 = var2.push;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 7;
                                var3 = var3[var0];
                                var0 = undefined;
                                var4 = var4.bind(var0)(var3);
                                var3 = var4.soundboardSoundToAPI;
                                var0 = arg0;
                                var0 = var3.bind(var4)(var0);
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 100:
                        return var1;
                    case 103:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var6.handler = var10;
    var1[var8] = var6;
    var6 = var3.PLAY_SOUNDBOARD_SOUND;
    var3 = {};
    var8 = {};
    var10 = var9.ALL;
    var9 = var5[var11];
    var9 = var4.bind(var0)(var9);
    var9 = var9.OAuth2Scopes;
    var12 = var9.RPC;
    var9 = new Array(2);
    var9[0] = var12;
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var11 = var11.OAuth2Scopes;
    var11 = var11.RPC_VOICE_WRITE;
    var9[1] = var11;
    var8[var10] = var9;
    var3.scope = var8;
    var8 = function(arg0) { // Original name: validation, environment: var7
        var4 = arg0;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var0 = var1[var0];
        var1 = undefined;
        var0 = var2.bind(var1)(var0);
        var1 = var0.bind(var1)(var4);
        var0 = var1.required;
        var2 = var0.bind(var1)();
        var1 = var2.keys;
        var0 = {};
        var3 = var4.string;
        var3 = var3.bind(var4)();
        var0.guild_id = var3;
        var3 = var4.string;
        var3 = var3.bind(var4)();
        var0.sound_id = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.validation = var8;
    var7 = function(arg0) { // Original name: handler, environment: var7
        var1 = arg0;
        var1 = var1.args;
        var2 = var1.guild_id;
        var _closure2_slot0 = var2;
        var1 = var1.sound_id;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun98901: for (var _fun98901_ip = 0;;) switch (_fun98901_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun98901_ip = 483;
                            continue _fun98901
                        }
                    case 10:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 6;
                        var1 = var4[var1];
                        var5 = undefined;
                        var3 = var3.bind(var5)(var1);
                        var1 = var3.maybeFetchSoundboardSounds;
                        var1 = var1.bind(var3)();
                        SaveGenerator(address = 49);
                    case 47:
                        return var1;
                    case 49:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun98901_ip = 480;
                            continue _fun98901
                        }
                    case 58:
                        var4 = _closure1_slot5;
                        var3 = var4.getCurrentUser;
                        var10 = var3.bind(var4)();
                        var7 = _closure1_slot4;
                        var6 = var7.getSound;
                        var4 = _closure2_slot0;
                        var3 = _closure2_slot1;
                        var8 = var6.bind(var7)(var4, var3);
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 9;
                        var3 = var6[var3];
                        var3 = var4.bind(var5)(var3);
                        var3 = var3.bind(var5)();
                        var4 = null;
                        var6 = var4 != var8;
                        if (!var6) {
                            _fun98901_ip = 135;
                            continue _fun98901
                        }
                    case 131:
                        var6 = var4 != var10;
                    case 135:
                        if (!var6) {
                            _fun98901_ip = 171;
                            continue _fun98901
                        }
                    case 138:
                        var9 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var7 = 10;
                        var7 = var11[var7];
                        var9 = var9.bind(var5)(var7);
                        var7 = var9.canUseSoundboardSound;
                        var6 = var7.bind(var9)(var10, var8, var3);
                    case 171:
                        if (!(var4 != var3)) {
                            _fun98901_ip = 412;
                            continue _fun98901
                        }
                    case 178:
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        if (var6) {
                            _fun98901_ip = 249;
                            continue _fun98901
                        }
                    case 189:
                        var6 = 11;
                        var6 = var9[var6];
                        var12 = var7.bind(var5)(var6);
                        var11 = {};
                        var6 = _closure1_slot6;
                        var6 = var6.INVALID_SOUND;
                        var11.errorCode = var6;
                        var6 = var12.prototype;
                        var10 = Object.create(var6, {
                            constructor: {
                                value: var12
                            }
                        });
                        var14 = 'Invalid Sound.';
                        var16 = var10;
                        var15 = var11;
                        var6 = new var16[var12](var15, var14, var13);
                        var6 = var6 instanceof Object ? var6 : var10;
                        throw var6;
                    case 249:
                        var6 = 12;
                        var6 = var9[var6];
                        var6 = var7.bind(var5)(var6);
                        var6 = var6.bind(var5)(var3);
                        if (var6) {
                            _fun98901_ip = 337;
                            continue _fun98901
                        }
                    case 269:
                        var7 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var6 = 11;
                        var6 = var9[var6];
                        var10 = var7.bind(var5)(var6);
                        var9 = {};
                        var6 = _closure1_slot6;
                        var6 = var6.INVALID_PERMISSIONS;
                        var9.errorCode = var6;
                        var6 = var10.prototype;
                        var7 = Object.create(var6, {
                            constructor: {
                                value: var10
                            }
                        });
                        var14 = 'Invalid Permissions.';
                        var16 = var7;
                        var15 = var9;
                        var6 = new var16[var10](var15, var14, var13);
                        var6 = var6 instanceof Object ? var6 : var7;
                        throw var6;
                    case 337:
                        if (!(var4 != var8)) {
                            _fun98901_ip = 409;
                            continue _fun98901
                        }
                    case 341:
                        var6 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var4 = 10;
                        var4 = var10[var4];
                        var7 = var6.bind(var5)(var4);
                        var6 = var7.playSound;
                        var4 = var3.id;
                        var9 = _closure1_slot1;
                        var3 = 13;
                        var3 = var10[var3];
                        var3 = var9.bind(var5)(var3);
                        var9 = var3.RPC;
                        var3 = new Array(1);
                        var3[0] = var9;
                        var3 = var6.bind(var7)(var8, var4, var3);
                    case 409:
                        return var5;
                    case 412:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 11;
                        var3 = var6[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = {};
                        var2 = _closure1_slot6;
                        var2 = var2.INVALID_CHANNEL;
                        var4.errorCode = var2;
                        var2 = var5.prototype;
                        var3 = Object.create(var2, {
                            constructor: {
                                value: var5
                            }
                        });
                        var14 = 'Invalid Channel.';
                        var16 = var3;
                        var15 = var4;
                        var2 = new var16[var5](var15, var14, var13);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 480:
                        return var1;
                    case 483:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.handler = var7;
    var1[var6] = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/server/commands/soundboard.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3916, 1613, 3315, 483, 3298, 5573, 4761, 7893, 5679, 5650, 7890, 5681, 5540, 2]);