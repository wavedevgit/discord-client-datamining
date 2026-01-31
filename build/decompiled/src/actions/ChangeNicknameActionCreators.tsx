// actions/ChangeNicknameActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.Endpoints;
    var _closure1_slot3 = var1;
    var1 = {};
    var3 = function arg0, arg1, arg2, arg3() {
        var5 = arg3;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var _closure2_slot1 = var5;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.patch;
        var1 = {};
        var8 = _closure1_slot3;
        var7 = var8.GUILD_MEMBER_NICK;
        var6 = arg0;
        var4 = arg2;
        var4 = var7.bind(var8)(var6, var4);
        var1.url = var4;
        var4 = {};
        var4.nick = var5;
        var1.body = var4;
        var4 = true;
        var1.oldFormErrors = var4;
        var4 = false;
        var1.rejectWithError = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg0) { // Environment: var0
            _fun61256: for (var _fun61256_ip = 0;;) switch (_fun61256_ip) {
                case 0:
                    var0 = arg0;
                    var0 = var0.body;
                    var0 = var0.nick;
                    _closure2_slot1 = var0;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.sendBotMessage;
                    var2 = _closure2_slot0;
                    var6 = _closure2_slot1;
                    var1 = null;
                    if (!(var1 != var6)) {
                        _fun61256_ip = 78;
                        continue _fun61256
                    }
                case 66:
                    var6 = _closure2_slot1;
                    var1 = '';
                    if (!(var1 === var6)) {
                        _fun61256_ip = 137;
                        continue _fun61256
                    }
                case 78:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 3;
                    var6 = var10[var1];
                    var6 = var8.bind(var0)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var1 = var10[var1];
                    var1 = var8.bind(var0)(var1);
                    var1 = var1.t;
                    var1 = var1.Vhpd9A;
                    var1 = var6.bind(var7)(var1);
                    _fun61256_ip = 207;
                    continue _fun61256;
                case 137:
                    var6 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 3;
                    var7 = var10[var5];
                    var7 = var6.bind(var0)(var7);
                    var8 = var7.intl;
                    var7 = var8.formatToMarkdownString;
                    var5 = var10[var5];
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.t;
                    var6 = var5["gz+HRq"];
                    var5 = {};
                    var9 = _closure2_slot1;
                    var5.nick = var9;
                    var1 = var7.bind(var8)(var6, var5);
                case 207:
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var0 = function(arg0) { // Environment: var0
            _fun61257: for (var _fun61257_ip = 0;;) switch (_fun61257_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.status;
                    var0 = 403;
                    if (!(var0 !== var1)) {
                        _fun61257_ip = 115;
                        continue _fun61257
                    }
                case 18:
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 2;
                    var1 = var8[var1];
                    var7 = undefined;
                    var3 = var2.bind(var7)(var1);
                    var2 = var3.sendBotMessage;
                    var1 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var0 = 3;
                    var4 = var8[var0];
                    var4 = var6.bind(var7)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var0 = var8[var0];
                    var0 = var6.bind(var7)(var0);
                    var0 = var0.t;
                    var0 = var0["5LO/Ss"];
                    var0 = var4.bind(var5)(var0);
                    var0 = var2.bind(var3)(var1, var0);
                    _fun61257_ip = 214;
                    continue _fun61257;
                case 115:
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 2;
                    var1 = var8[var1];
                    var7 = undefined;
                    var3 = var2.bind(var7)(var1);
                    var2 = var3.sendBotMessage;
                    var1 = _closure2_slot0;
                    var4 = _closure1_slot0;
                    var0 = 3;
                    var5 = var8[var0];
                    var5 = var4.bind(var7)(var5);
                    var6 = var5.intl;
                    var5 = var6.formatToMarkdownString;
                    var0 = var8[var0];
                    var0 = var4.bind(var7)(var0);
                    var0 = var0.t;
                    var4 = var0.Izf9jO;
                    var0 = {};
                    var0 = var5.bind(var6)(var4, var0);
                    var0 = var2.bind(var3)(var1, var0);
                case 214:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.changeNickname = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/ChangeNicknameActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 507, 6488, 1234, 2]);