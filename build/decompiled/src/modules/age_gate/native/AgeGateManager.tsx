// modules/age_gate/native/AgeGateManager.tsx
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
        _fun112525: for (var _fun112525_ip = 0;;) switch (_fun112525_ip) {
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
            case 72: // try_end0
                _fun112525_ip = 76;
                continue _fun112525;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot16 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot16 = var0;
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
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.EXISTING_USER_AGE_GATE_MODAL_KEY;
    var _closure1_slot12 = var7;
    var3 = var3.AgeGateSource;
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ChannelTypes;
    var _closure1_slot14 = var7;
    var3 = var3.GuildNSFWContentLevel;
    var _closure1_slot15 = var3;
    var3 = 16;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun112529: for (var _fun112529_ip = 0;;) switch (_fun112529_ip) {
                case 0:
                    var3 = this;
                    var11 = 0;
                    var0 = copyRestArgs(var11);
                    var6 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var6 = var6.bind(var2)(var3, var1);
                    var8 = new Array(0);
                    var11 = var8;
                    var10 = var0;
                    var9 = 0;
                    var0 = arraySpread(var11, var10, var9);
                    var0 = _closure1_slot7;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot6;
                    var0 = _closure1_slot16;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun112529_ip = 84;
                        continue _fun112529
                    }
                case 71:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun112529_ip = 118;
                    continue _fun112529;
                case 84:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot7;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 118:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = {};
                    var2 = var0.handlePostConnectionOpen;
                    var1.POST_CONNECTION_OPEN = var2;
                    var2 = var0.handleChannelSelect;
                    var1.CHANNEL_SELECT = var2;
                    var2 = var0.handleAgeGateModalOpen;
                    var1.AGE_GATE_MODAL_OPEN = var2;
                    var2 = var0.handleAgeGateModalClose;
                    var1.AGE_GATE_MODAL_CLOSE = var2;
                    var2 = var0.handleGuildUpdate;
                    var1.GUILD_UPDATE = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'handlePostConnectionOpen';
        var4.key = var0;
        var0 = function() {
            var2 = _closure1_slot11;
            var1 = var2.getGuildId;
            var4 = var1.bind(var2)();
            var2 = _closure1_slot10;
            var1 = var2.getChannelId;
            var3 = var1.bind(var2)();
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 11;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.maybeShowAgeGate;
            var1 = var1.bind(var2)(var4, var3);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'handleChannelSelect';
        var4.key = var6;
        var6 = function arg0() {
            _fun112531: for (var _fun112531_ip = 0;;) switch (_fun112531_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.guildId;
                    var2 = var0.channelId;
                    var4 = _closure1_slot9;
                    var1 = var4.getChannel;
                    var4 = var1.bind(var4)(var2);
                    var5 = null;
                    var1 = var5 != var3;
                    if (!var1) {
                        _fun112531_ip = 67;
                        continue _fun112531
                    }
                case 39:
                    var6 = var5 == var4;
                    var5 = undefined;
                    if (var6) {
                        _fun112531_ip = 53;
                        continue _fun112531
                    }
                case 48:
                    var5 = var4.type;
                case 53:
                    var4 = _closure1_slot14;
                    var4 = var4.GUILD_VOICE;
                    var1 = var5 !== var4;
                case 67:
                    if (!var1) {
                        _fun112531_ip = 104;
                        continue _fun112531
                    }
                case 70:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var4.bind(var0)(var1);
                    var0 = var1.maybeShowAgeGate;
                    var0 = var0.bind(var1)(var3, var2);
                case 104:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'handleAgeGateModalOpen';
        var4.key = var6;
        var6 = function arg0() {
            var0 = arg0;
            var6 = var0.source;
            var _closure3_slot0 = var6;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var0 = 12;
            var3 = var3[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var3);
            var4 = var5.pushLazy;
            var3 = _closure1_slot3;
            var2 = function*() { // Environment: var2
                var0 = function*() { // Original name: ?anon_0_, environment: var0
                    _fun112534: for (var _fun112534_ip = 0;;) switch (_fun112534_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun112534_ip = 140;
                                continue _fun112534
                            }
                        case 10:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var2 = 14;
                            var2 = var1[var2];
                            var6 = undefined;
                            var3 = var3.bind(var6)(var2);
                            var2 = 13;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var1 = var3.bind(var6)(var2, var1);
                            SaveGenerator(address = 57);
                        case 55:
                            return var1;
                        case 57:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                            if (var2) {
                                _fun112534_ip = 137;
                                continue _fun112534
                            }
                        case 63:
                            var2 = var1.default;
                            var5 = _closure3_slot0;
                            var3 = _closure1_slot13;
                            var3 = var3.AUTH;
                            if (!(var5 === var3)) {
                                _fun112534_ip = 134;
                                continue _fun112534
                            }
                        case 89:
                            var3 = {};
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 15;
                            var4 = var7[var4];
                            var4 = var5.bind(var6)(var4);
                            var4 = var4.ModalAnimation;
                            var4 = var4.SLIDE_IN_OUT;
                            var3.animation = var4;
                            var2.modalConfig = var3;
                        case 134:
                            return var2;
                        case 137:
                            return var1;
                        case 140:
                            return var0;
                    }
                };
                return var0;
            };
            var3 = var3.bind(var0)(var2);
            var2 = {};
            var2.source = var6;
            var1 = _closure1_slot12;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'handleAgeGateModalClose';
        var4.key = var6;
        var6 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 12;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.popWithKey;
            var1 = _closure1_slot12;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'handleGuildUpdate';
        var4.key = var6;
        var5 = function arg0() {
            _fun112536: for (var _fun112536_ip = 0;;) switch (_fun112536_ip) {
                case 0:
                    var0 = arg0;
                    var0 = var0.guild;
                    var3 = _closure1_slot11;
                    var2 = var3.getGuildId;
                    var5 = var2.bind(var3)();
                    var3 = null;
                    var2 = var3 != var5;
                    if (!var2) {
                        _fun112536_ip = 43;
                        continue _fun112536
                    }
                case 34:
                    var4 = var0.id;
                    var2 = var4 === var5;
                case 43:
                    if (!var2) {
                        _fun112536_ip = 66;
                        continue _fun112536
                    }
                case 46:
                    var5 = var0.owner_configured_content_level;
                    var4 = _closure1_slot15;
                    var4 = var4.AGE_RESTRICTED;
                    var2 = var5 === var4;
                case 66:
                    if (!var2) {
                        _fun112536_ip = 108;
                        continue _fun112536
                    }
                case 69:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.maybeShowAgeGate;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0, var3);
                case 108:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/age_gate/native/AgeGateManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 15, 17, 18, 1372, 1661, 3172, 1219, 660, 4515, 4525, 14414, 1307, 670, 4263, 2]);