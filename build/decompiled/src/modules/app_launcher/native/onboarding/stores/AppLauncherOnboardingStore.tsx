// modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingStore.tsx
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
        _fun90390: for (var _fun90390_ip = 0;;) switch (_fun90390_ip) {
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
                _fun90390_ip = 76;
                continue _fun90390;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
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
    var _closure1_slot5 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun90394: for (var _fun90394_ip = 0;;) switch (_fun90394_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot5;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot8;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot7;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun90394_ip = 69;
                        continue _fun90394
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun90394_ip = 105;
                    continue _fun90394;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot8;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot9;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot6;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot10;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getRecentMessageMetadata';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot3;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getRecentApplicationCommandMetadata';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot4;
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'AppLauncherOnboardingStore';
    var7.displayName = var1;
    var1 = 10;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        _fun90398: for (var _fun90398_ip = 0;;) switch (_fun90398_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.command;
                var3 = var0.context;
                var5 = var0.commandOrigin;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var6.bind(var0)(var1);
                var1 = var1.CommandOrigin;
                var1 = var1.APPLICATION_LAUNCHER;
                var1 = var5 !== var1;
                if (!var1) {
                    _fun90398_ip = 75;
                    continue _fun90398
                }
            case 64:
                var6 = var3.channel;
                var5 = null;
                var1 = var5 != var6;
            case 75:
                if (!var1) {
                    _fun90398_ip = 154;
                    continue _fun90398
                }
            case 78:
                var1 = {};
                var5 = global;
                var6 = var5.Date;
                var5 = var6.now;
                var5 = var5.bind(var6)();
                var1.timeMs = var5;
                var4 = var4.applicationId;
                var1.applicationId = var4;
                var5 = var3.guild;
                var4 = null;
                var6 = var4 == var5;
                var4 = undefined;
                if (var6) {
                    _fun90398_ip = 132;
                    continue _fun90398
                }
            case 127:
                var4 = var5.id;
            case 132:
                var1.guildId = var4;
                var3 = var3.channel;
                var3 = var3.id;
                var1.channelId = var3;
                var _closure1_slot4 = var1;
            case 154:
                return var0;
        }
    };
    var1.APPLICATION_COMMAND_USED = var8;
    var3 = function arg0() {
        _fun90399: for (var _fun90399_ip = 0;;) switch (_fun90399_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var3 = var0.guildId;
                var0 = var0.message;
                var5 = _closure1_slot10;
                var4 = var5.getCurrentUser;
                var4 = var4.bind(var5)();
                var6 = null;
                if (!(var6 != var4)) {
                    _fun90399_ip = 192;
                    continue _fun90399
                }
            case 43:
                var5 = var4.id;
                if (!(var6 != var5)) {
                    _fun90399_ip = 192;
                    continue _fun90399
                }
            case 55:
                var5 = var0.author;
                if (!(var6 != var5)) {
                    _fun90399_ip = 192;
                    continue _fun90399
                }
            case 68:
                var5 = var4.id;
                var4 = var0.author;
                var4 = var4.id;
                if (!(var5 === var4)) {
                    _fun90399_ip = 192;
                    continue _fun90399
                }
            case 88:
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 6;
                var4 = var8[var4];
                var7 = undefined;
                var5 = var5.bind(var7)(var4);
                var4 = var5.extractTimestamp;
                var0 = var0.id;
                var4 = var4.bind(var5)(var0);
                var0 = global;
                var5 = var0.Date;
                var0 = var5.now;
                var5 = var0.bind(var5)();
                var6 = _closure1_slot0;
                var0 = 7;
                var0 = var8[var0];
                var0 = var6.bind(var7)(var0);
                var0 = var0.RECENT_MESSAGE_MS;
                var0 = var4 + var0;
                if (!(!(var5 > var0))) {
                    _fun90399_ip = 192;
                    continue _fun90399
                }
            case 173:
                var0 = {};
                var0.timeMs = var4;
                var0.guildId = var3;
                var0.channelId = var2;
                var _closure1_slot3 = var0;
            case 192:
                var0 = undefined;
                return var0;
        }
    };
    var1.MESSAGE_CREATE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1621, 21, 11751, 4548, 566, 806, 2]);