// modules/instant_invite/native/components/InviteButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.InviteSendStates;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'minWidth': 66,
        'flexDirection': 'row'
    };
    var3.buttonWrapper = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot5 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun67737: for (var _fun67737_ip = 0;;) switch (_fun67737_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.sendState;
                var6 = var0.disabled;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun67737_ip = 22;
                    continue _fun67737
                }
            case 20:
                var6 = false;
            case 22:
                var8 = var0.onPressSend;
                var0 = _closure1_slot5;
                var5 = var0.bind(var3)();
                var9 = _closure1_slot0;
                var0 = _closure1_slot1;
                var11 = 5;
                var2 = var0[var11];
                var2 = var9.bind(var3)(var2);
                var7 = var2.intl;
                var2 = var7.string;
                var0 = var0[var11];
                var0 = var9.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.jYnGPG;
                var0 = var2.bind(var7)(var0);
                var0 = _closure1_slot3;
                var0 = var0.SENDING;
                if (!(var0 !== var1)) {
                    _fun67737_ip = 321;
                    continue _fun67737
                }
            case 111:
                var0 = _closure1_slot3;
                var0 = var0.SENT;
                if (!(var0 !== var1)) {
                    _fun67737_ip = 261;
                    continue _fun67737
                }
            case 128:
                var0 = _closure1_slot3;
                var0 = var0.ERROR;
                if (!(var0 !== var1)) {
                    _fun67737_ip = 201;
                    continue _fun67737
                }
            case 142:
                var7 = _closure1_slot0;
                var0 = _closure1_slot1;
                var1 = var0[var11];
                var1 = var7.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var0[var11];
                var0 = var7.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.jYnGPG;
                var9 = var1.bind(var2)(var0);
                var7 = false;
                _fun67737_ip = 377;
                continue _fun67737;
            case 201:
                var10 = _closure1_slot0;
                var0 = _closure1_slot1;
                var1 = var0[var11];
                var1 = var10.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var0[var11];
                var0 = var10.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.wNcfpX;
                var9 = var1.bind(var2)(var0);
                var7 = false;
                var6 = false;
                _fun67737_ip = 377;
                continue _fun67737;
            case 261:
                var10 = _closure1_slot0;
                var0 = _closure1_slot1;
                var1 = var0[var11];
                var1 = var10.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var0[var11];
                var0 = var10.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.dVT149;
                var9 = var1.bind(var2)(var0);
                var7 = false;
                var6 = true;
                _fun67737_ip = 377;
                continue _fun67737;
            case 321:
                var10 = _closure1_slot0;
                var0 = _closure1_slot1;
                var1 = var0[var11];
                var1 = var10.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var0[var11];
                var0 = var10.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.jYnGPG;
                var9 = var1.bind(var2)(var0);
                var7 = true;
                var6 = false;
            case 377:
                var2 = _closure1_slot4;
                var1 = _closure1_slot2;
                var0 = {};
                var5 = var5.buttonWrapper;
                var0.style = var5;
                var5 = _closure1_slot0;
                var10 = _closure1_slot1;
                var4 = 6;
                var4 = var10[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Button;
                var4 = {
                    'accessibilityRole': 'none',
                    'size': 'sm',
                    'variant': 'secondary'
                };
                var4.text = var9;
                var4.onPress = var8;
                if (var6) {
                    _fun67737_ip = 451;
                    continue _fun67737
                }
            case 448:
                var6 = var7;
            case 451:
                var4.disabled = var6;
                var6 = true;
                var4.grow = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/instant_invite/native/components/InviteButton.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3335, 33, 1297, 1234, 4084, 2]);