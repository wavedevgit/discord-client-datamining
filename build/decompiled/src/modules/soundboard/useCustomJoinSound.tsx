// modules/soundboard/useCustomJoinSound.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function(arg0, arg1) { // Original name: _getCustomJoinSound, environment: var1
        _fun50655: for (var _fun50655_ip = 0;;) switch (_fun50655_ip) {
            case 0:
                var5 = arg1;
                var0 = arg0;
                var1 = var5[var0];
                var4 = null;
                var2 = var4 == var1;
                var3 = undefined;
                if (var2) {
                    _fun50655_ip = 27;
                    continue _fun50655
                }
            case 21:
                var3 = var1.joinSound;
            case 27:
                var1 = _closure1_slot3;
                var1 = var5[var1];
                var6 = var4 == var1;
                var5 = undefined;
                if (var6) {
                    _fun50655_ip = 53;
                    continue _fun50655
                }
            case 47:
                var5 = var1.joinSound;
            case 53:
                if (!(var4 != var3)) {
                    _fun50655_ip = 60;
                    continue _fun50655
                }
            case 57:
                var5 = var3;
            case 60:
                var1 = var4 != var5;
                var0 = undefined;
                if (!var1) {
                    _fun50655_ip = 119;
                    continue _fun50655
                }
            case 69:
                var1 = {};
                var8 = var1;
                var7 = var5;
                var5 = copyDataProperties(var8, var7);
                if (!(var4 == var3)) {
                    _fun50655_ip = 97;
                    continue _fun50655
                }
            case 85:
                var3 = _closure1_slot4;
                var3 = var3.GLOBAL;
                _fun50655_ip = 107;
                continue _fun50655;
            case 97:
                var2 = _closure1_slot4;
                var3 = var2.GUILD;
            case 107:
                var2 = 'type';
                var1[var2] = var3;
                var0 = var1;
            case 119:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var8 = 0;
    var4 = var6[var8];
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot2 = var3;
    var7 = 1;
    var3 = var6[var7];
    var3 = var5.bind(var0)(var3);
    var3 = var3.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID;
    var _closure1_slot3 = var3;
    var3 = {};
    var3.GLOBAL = var8;
    var4 = 'GLOBAL';
    var3[var8] = var4;
    var3.GUILD = var7;
    var4 = 'GUILD';
    var3[var7] = var4;
    var _closure1_slot4 = var3;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/soundboard/useCustomJoinSound.tsx';
    var4 = var5.bind(var6)(var4);
    var2.CustomSoundType = var3;
    var3 = function(arg0) { // Original name: useCustomJoinSound, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun50657: for (var _fun50657_ip = 0;;) switch (_fun50657_ip) {
                case 0:
                    var1 = _closure1_slot2;
                    var1 = var1.settings;
                    var4 = var1.guilds;
                    var1 = null;
                    var5 = var1 == var4;
                    var3 = undefined;
                    var2 = undefined;
                    if (var5) {
                        _fun50657_ip = 38;
                        continue _fun50657
                    }
                case 32:
                    var2 = var4.guilds;
                case 38:
                    if (!(var1 == var2)) {
                        _fun50657_ip = 44;
                        continue _fun50657
                    }
                case 42:
                    var2 = {};
                case 44:
                    var1 = _closure1_slot5;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var3)(var0, var2);
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useCustomJoinSound = var3;
    var1 = function(arg0) { // Original name: getCustomJoinSound, environment: var1
        _fun50658: for (var _fun50658_ip = 0;;) switch (_fun50658_ip) {
            case 0:
                var3 = _closure1_slot5;
                var0 = _closure1_slot2;
                var0 = var0.settings;
                var4 = var0.guilds;
                var0 = null;
                var5 = var0 == var4;
                var2 = undefined;
                var1 = undefined;
                if (var5) {
                    _fun50658_ip = 42;
                    continue _fun50658
                }
            case 36:
                var1 = var4.guilds;
            case 42:
                if (!(var0 == var1)) {
                    _fun50658_ip = 48;
                    continue _fun50658
                }
            case 46:
                var1 = {};
            case 48:
                var0 = arg0;
                var0 = var3.bind(var2)(var0, var1);
                return var0;
        }
    };
    var2.getCustomJoinSound = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1310, 3917, 566, 2]);