// modules/messages/validateJumpWithAlert.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/validateJumpWithAlert.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun76654: for (var _fun76654_ip = 0;;) switch (_fun76654_ip) {
            case 0:
                var11 = arg0;
                var1 = _closure1_slot5;
                var0 = var1.isBlockedForMessage;
                var0 = var0.bind(var1)(var11);
                if (var0) {
                    _fun76654_ip = 859;
                    continue _fun76654
                }
            case 27:
                var1 = _closure1_slot5;
                var0 = var1.isIgnoredForMessage;
                var0 = var0.bind(var1)(var11);
                if (var0) {
                    _fun76654_ip = 646;
                    continue _fun76654
                }
            case 48:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 6;
                var0 = var2[var0];
                var8 = undefined;
                var1 = var1.bind(var8)(var0);
                var0 = var1.isSpam;
                var0 = var0.bind(var1)(var11);
                if (var0) {
                    _fun76654_ip = 88;
                    continue _fun76654
                }
            case 84:
                var0 = true;
                return var0;
            case 88:
                var2 = _closure1_slot3;
                var1 = var2.getChannel;
                var0 = var11.channel_id;
                var4 = var1.bind(var2)(var0);
                var0 = null;
                var1 = var0 == var4;
                var0 = undefined;
                if (var1) {
                    _fun76654_ip = 128;
                    continue _fun76654
                }
            case 118:
                var1 = var4.isPrivate;
                var0 = var1.bind(var4)();
            case 128:
                if (var0) {
                    _fun76654_ip = 378;
                    continue _fun76654
                }
            case 134:
                var2 = _closure1_slot4;
                var1 = var2.can;
                var0 = _closure1_slot6;
                var0 = var0.MODERATE_MEMBERS;
                var0 = var1.bind(var2)(var0, var4);
                if (var0) {
                    _fun76654_ip = 378;
                    continue _fun76654
                }
            case 166:
                var1 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 4;
                var0 = var9[var0];
                var2 = var1.bind(var8)(var0);
                var1 = var2.show;
                var0 = {};
                var7 = _closure1_slot0;
                var4 = 5;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var10 = var5.intl;
                var6 = var10.string;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var5 = var5.t;
                var5 = var5["6vJKFk"];
                var5 = var6.bind(var10)(var5);
                var0.title = var5;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var12 = var5.intl;
                var10 = var12.formatToPlainString;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var5 = var5.t;
                var6 = var5.zKNgPF;
                var5 = {};
                var13 = var11.author;
                var13 = var13.username;
                var5.name = var13;
                var5 = var10.bind(var12)(var6, var5);
                var0.body = var5;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var9[var4];
                var4 = var7.bind(var8)(var4);
                var4 = var4.t;
                var4 = var4.BddRzS;
                var4 = var5.bind(var6)(var4);
                var0.confirmText = var4;
                var0 = var1.bind(var2)(var0);
                _fun76654_ip = 642;
                continue _fun76654;
            case 378:
                var1 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 4;
                var0 = var9[var0];
                var2 = var1.bind(var8)(var0);
                var1 = var2.show;
                var0 = {};
                var7 = _closure1_slot0;
                var4 = 5;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var10 = var5.intl;
                var6 = var10.string;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var5 = var5.t;
                var5 = var5["cZcG+P"];
                var5 = var6.bind(var10)(var5);
                var0.title = var5;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var12 = var5.intl;
                var10 = var12.formatToPlainString;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var5 = var5.t;
                var6 = var5["1YTWty"];
                var5 = {};
                var13 = var11.author;
                var13 = var13.username;
                var5.name = var13;
                var5 = var10.bind(var12)(var6, var5);
                var0.body = var5;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var10 = var5.intl;
                var6 = var10.string;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var5 = var5.t;
                var5 = var5["+TSRGD"];
                var5 = var6.bind(var10)(var5);
                var0.confirmText = var5;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var9[var4];
                var4 = var7.bind(var8)(var4);
                var4 = var4.t;
                var4 = var4["ETE/oC"];
                var4 = var5.bind(var6)(var4);
                var0.cancelText = var4;
                var4 = arg1;
                var0.onConfirm = var4;
                var0 = var1.bind(var2)(var0);
            case 642:
                var0 = false;
                return var0;
            case 646:
                var1 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 4;
                var0 = var9[var0];
                var8 = undefined;
                var2 = var1.bind(var8)(var0);
                var1 = var2.show;
                var0 = {};
                var7 = _closure1_slot0;
                var4 = 5;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var10 = var5.intl;
                var6 = var10.string;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var5 = var5.t;
                var5 = var5.XyWoKV;
                var5 = var6.bind(var10)(var5);
                var0.title = var5;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var12 = var5.intl;
                var10 = var12.formatToPlainString;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var5 = var5.t;
                var6 = var5["8t8doK"];
                var5 = {};
                var13 = var11.author;
                var13 = var13.username;
                var5.name = var13;
                var5 = var10.bind(var12)(var6, var5);
                var0.body = var5;
                var5 = var9[var4];
                var5 = var7.bind(var8)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var9[var4];
                var4 = var7.bind(var8)(var4);
                var4 = var4.t;
                var4 = var4.BddRzS;
                var4 = var5.bind(var6)(var4);
                var0.confirmText = var4;
                var0 = var1.bind(var2)(var0);
                var0 = false;
                return var0;
            case 859:
                var1 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 4;
                var0 = var8[var0];
                var7 = undefined;
                var2 = var1.bind(var7)(var0);
                var1 = var2.show;
                var0 = {};
                var6 = _closure1_slot0;
                var3 = 5;
                var4 = var8[var3];
                var4 = var6.bind(var7)(var4);
                var9 = var4.intl;
                var5 = var9.string;
                var4 = var8[var3];
                var4 = var6.bind(var7)(var4);
                var4 = var4.t;
                var4 = var4["j7eA/g"];
                var4 = var5.bind(var9)(var4);
                var0.title = var4;
                var4 = var8[var3];
                var4 = var6.bind(var7)(var4);
                var10 = var4.intl;
                var9 = var10.formatToPlainString;
                var4 = var8[var3];
                var4 = var6.bind(var7)(var4);
                var4 = var4.t;
                var5 = var4.dTNNgr;
                var4 = {};
                var11 = var11.author;
                var11 = var11.username;
                var4.name = var11;
                var4 = var9.bind(var10)(var5, var4);
                var0.body = var4;
                var4 = var8[var3];
                var4 = var6.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var6.bind(var7)(var3);
                var3 = var3.t;
                var3 = var3.BddRzS;
                var3 = var4.bind(var5)(var3);
                var0.confirmText = var3;
                var0 = var1.bind(var2)(var0);
                var0 = false;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3093, 3102, 660, 4002, 1234, 4529, 2]);