// utils/ProcessArgs.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var4 = function() {
            var3 = _closure1_slot2;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var0 = {};
        var2 = 'get';
        var0.key = var2;
        var2 = function() {
            _fun37046: for (var _fun37046_ip = 0;;) switch (_fun37046_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var1 = var1.cached;
                    var3 = null;
                    if (!(var3 == var1)) {
                        _fun37046_ip = 163;
                        continue _fun37046
                    }
                case 22:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var6 = 2;
                    var1 = var1[var6];
                    var5 = undefined;
                    var1 = var4.bind(var5)(var1);
                    var4 = var3 == var1;
                    var1 = undefined;
                    if (var4) {
                        _fun37046_ip = 113;
                        continue _fun37046
                    }
                case 56:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var4.bind(var5)(var2);
                    var4 = var2.processUtils;
                    var2 = var3 == var4;
                    var1 = undefined;
                    if (var2) {
                        _fun37046_ip = 113;
                        continue _fun37046
                    }
                case 88:
                    var2 = var4.getMainArgvSync;
                    var2 = var3 == var2;
                    var1 = undefined;
                    if (var2) {
                        _fun37046_ip = 113;
                        continue _fun37046
                    }
                case 103:
                    var2 = var4.getMainArgvSync;
                    var1 = var2.bind(var4)();
                case 113:
                    var2 = var3 != var1;
                    if (!var2) {
                        _fun37046_ip = 132;
                        continue _fun37046
                    }
                case 120:
                    var5 = var1.length;
                    var4 = 1;
                    var2 = var5 > var4;
                case 132:
                    if (!var2) {
                        _fun37046_ip = 145;
                        continue _fun37046
                    }
                case 135:
                    var2 = var1.shift;
                    var2 = var2.bind(var1)();
                case 145:
                    var2 = _closure2_slot0;
                    if (!(var3 == var1)) {
                        _fun37046_ip = 157;
                        continue _fun37046
                    }
                case 153:
                    var1 = new Array(0);
                case 157:
                    var2.cached = var1;
                case 163:
                    var0 = _closure2_slot0;
                    var0 = var0.cached;
                    return var0;
            }
        };
        var0.value = var2;
        var2 = new Array(6);
        var2[0] = var0;
        var0 = {};
        var5 = 'contains';
        var0.key = var5;
        var5 = function arg0() {
            var1 = _closure2_slot0;
            var0 = var1.get;
            var2 = var0.bind(var1)();
            var1 = var2.includes;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var2[1] = var0;
        var0 = {};
        var5 = 'isEnvVariableTrue';
        var0.key = var5;
        var5 = function arg0() {
            _fun37048: for (var _fun37048_ip = 0;;) switch (_fun37048_ip) {
                case 0:
                    var1 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var5 = 2;
                    var0 = var0[var5];
                    var3 = undefined;
                    var0 = var1.bind(var3)(var0);
                    if (!(var3 !== var0)) {
                        _fun37048_ip = 137;
                        continue _fun37048
                    }
                case 29:
                    var1 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var0 = var0[var5];
                    var1 = var1.bind(var3)(var0);
                    var0 = null;
                    var4 = var0 == var1;
                    var1 = undefined;
                    if (var4) {
                        _fun37048_ip = 111;
                        continue _fun37048
                    }
                case 57:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var5];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.process;
                    var4 = var0 == var2;
                    var1 = undefined;
                    if (var4) {
                        _fun37048_ip = 111;
                        continue _fun37048
                    }
                case 89:
                    var2 = var2.env;
                    var0 = var0 == var2;
                    var1 = undefined;
                    if (var0) {
                        _fun37048_ip = 111;
                        continue _fun37048
                    }
                case 104:
                    var0 = arg0;
                    var1 = var2[var0];
                case 111:
                    var0 = '1';
                    if (!(var0 !== var1)) {
                        _fun37048_ip = 133;
                        continue _fun37048
                    }
                case 121:
                    var0 = 'true';
                    if (!(var0 !== var1)) {
                        _fun37048_ip = 133;
                        continue _fun37048
                    }
                case 129:
                    var0 = false;
                    return var0;
                case 133:
                    var0 = true;
                    return var0;
                case 137:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var5;
        var2[2] = var0;
        var0 = {};
        var5 = 'isDisallowPopupsSet';
        var0.key = var5;
        var5 = function() {
            _fun37049: for (var _fun37049_ip = 0;;) switch (_fun37049_ip) {
                case 0:
                    var3 = _closure2_slot0;
                    var2 = var3.contains;
                    var0 = '--disallow-popups';
                    var0 = var2.bind(var3)(var0);
                    if (var0) {
                        _fun37049_ip = 48;
                        continue _fun37049
                    }
                case 27:
                    var3 = _closure2_slot0;
                    var2 = var3.isEnvVariableTrue;
                    var1 = 'DISCORD_DISALLOW_POPUPS';
                    var0 = var2.bind(var3)(var1);
                case 48:
                    return var0;
            }
        };
        var0.value = var5;
        var2[3] = var0;
        var0 = {};
        var5 = 'isDiscordTestSet';
        var0.key = var5;
        var5 = function() {
            var2 = _closure2_slot0;
            var1 = var2.isEnvVariableTrue;
            var0 = 'DISCORD_TEST';
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var2[4] = var0;
        var0 = {};
        var5 = 'isDiscordGatewayPlaintextSet';
        var0.key = var5;
        var1 = function() {
            var0 = false;
            return var0;
        };
        var0.value = var1;
        var2[5] = var0;
        var1 = undefined;
        var0 = null;
        var0 = var3.bind(var1)(var4, var0, var2);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 3;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/ProcessArgs.tsx';
    var3 = var4.bind(var5)(var3);
    var2.ProcessArgs = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 3033, 2]);