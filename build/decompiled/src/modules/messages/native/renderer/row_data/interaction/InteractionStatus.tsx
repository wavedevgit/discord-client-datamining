// modules/messages/native/renderer/row_data/interaction/InteractionStatus.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = {};
    var6 = 0;
    var0.LOADING = var6;
    var5 = 'LOADING';
    var0[var6] = var5;
    var6 = 1;
    var0.FAILED = var6;
    var5 = 'FAILED';
    var0[var6] = var5;
    var6 = 999;
    var0.EPHEMERAL_SUCCESS = var6;
    var5 = 'EPHEMERAL_SUCCESS';
    var0[var6] = var5;
    var _closure1_slot2 = var0;
    var0 = 2;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/row_data/interaction/InteractionStatus.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun55980: for (var _fun55980_ip = 0;;) switch (_fun55980_ip) {
            case 0:
                var7 = arg0;
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var4 = 0;
                var2 = var0[var4];
                var6 = undefined;
                var8 = var3.bind(var6)(var2);
                var5 = var8.getInteractionStatusViewState;
                var2 = arg1;
                var2 = var5.bind(var8)(var7, var2);
                var0 = var0[var4];
                var0 = var3.bind(var6)(var0);
                var0 = var0.InteractionStatusViewState;
                var0 = var0.SENDING;
                if (!(var0 !== var2)) {
                    _fun55980_ip = 502;
                    continue _fun55980
                }
            case 70:
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var4];
                var0 = var3.bind(var6)(var0);
                var0 = var0.InteractionStatusViewState;
                var0 = var0.CREATED;
                if (!(var0 !== var2)) {
                    _fun55980_ip = 404;
                    continue _fun55980
                }
            case 106:
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var4];
                var0 = var3.bind(var6)(var0);
                var0 = var0.InteractionStatusViewState;
                var0 = var0.TIMED_OUT;
                if (!(var0 !== var2)) {
                    _fun55980_ip = 325;
                    continue _fun55980
                }
            case 142:
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var4];
                var0 = var3.bind(var6)(var0);
                var0 = var0.InteractionStatusViewState;
                var0 = var0.FAILED;
                if (!(var0 !== var2)) {
                    _fun55980_ip = 236;
                    continue _fun55980
                }
            case 175:
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var4];
                var0 = var3.bind(var6)(var0);
                var0 = var0.InteractionStatusViewState;
                var0 = var0.EPHEMERAL_SUCCESS;
                if (!(var0 !== var2)) {
                    _fun55980_ip = 210;
                    continue _fun55980
                }
            case 208:
                return var6;
            case 210:
                var0 = {};
                var2 = '';
                var0.text = var2;
                var2 = _closure1_slot2;
                var2 = var2.EPHEMERAL_SUCCESS;
                var0.state = var2;
                return var0;
            case 236:
                var0 = {};
                var2 = var7.interactionError;
                var3 = null;
                if (!(var3 == var2)) {
                    _fun55980_ip = 305;
                    continue _fun55980
                }
            case 250:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var3 = 1;
                var4 = var9[var3];
                var4 = var8.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var9[var3];
                var3 = var8.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.VCsUJu;
                var2 = var4.bind(var5)(var3);
            case 305:
                var0.text = var2;
                var2 = _closure1_slot2;
                var2 = var2.FAILED;
                var0.state = var2;
                return var0;
            case 325:
                var0 = {};
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 1;
                var3 = var8[var2];
                var3 = var5.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var8[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.h8hzPd;
                var2 = var3.bind(var4)(var2);
                var0.text = var2;
                var2 = _closure1_slot2;
                var2 = var2.FAILED;
                var0.state = var2;
                return var0;
            case 404:
                var0 = {};
                var3 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 1;
                var4 = var8[var2];
                var4 = var3.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.formatToPlainString;
                var2 = var8[var2];
                var2 = var3.bind(var6)(var2);
                var2 = var2.t;
                var3 = var2["7ePV4t"];
                var2 = {};
                var7 = var7.author;
                var7 = var7.username;
                var2.applicationName = var7;
                var2 = var4.bind(var5)(var3, var2);
                var0.text = var2;
                var2 = _closure1_slot2;
                var2 = var2.LOADING;
                var0.state = var2;
                return var0;
            case 502:
                var0 = {};
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 1;
                var3 = var7[var2];
                var3 = var5.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.RiLfBY;
                var2 = var3.bind(var4)(var2);
                var0.text = var2;
                var1 = _closure1_slot2;
                var1 = var1.LOADING;
                var0.state = var1;
                return var0;
        }
    };
    var2.createInteractionStatus = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6754, 1234, 2]);