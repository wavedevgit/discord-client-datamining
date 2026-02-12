// modules/chat_input/native/guard/ChatInputGuardRequiredLobbyApplicationAuthorization.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Image;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.jsx;
    var _closure1_slot4 = var8;
    var3 = 3;
    var3 = var5[var3];
    var10 = var4.bind(var0)(var3);
    var9 = var10.createStyles;
    var3 = {};
    var11 = {
        'height': 40,
        'width': 40,
        'resizeMode': 'contain'
    };
    var12 = 4;
    var12 = var5[var12];
    var12 = var7.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.md;
    var11.borderRadius = var12;
    var3.icon = var11;
    var3 = var9.bind(var10)(var3);
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var7.bind(var0)(var3);
    var3 = {
        'type': 'simple-action',
        'message': ''
    };
    var3 = var8.bind(var0)(var7, var3);
    var _closure1_slot6 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun89972: for (var _fun89972_ip = 0;;) switch (_fun89972_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.showLinkedLobbyApplicationLoadingIndicator;
                var12 = var0.requiredLinkedLobbyApplication;
                var4 = undefined;
                var _closure2_slot0 = var4;
                var2 = _closure1_slot5;
                var14 = var2.bind(var4)();
                if (var1) {
                    _fun89972_ip = 319;
                    continue _fun89972
                }
            case 40:
                var7 = null;
                if (!(var7 != var12)) {
                    _fun89972_ip = 319;
                    continue _fun89972
                }
            case 49:
                var2 = var12.getIconSource;
                var1 = 80;
                var13 = var2.bind(var12)(var1);
                var5 = var12.connectionEntrypointUrl;
                _closure2_slot0 = var5;
                var3 = _closure1_slot4;
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 5;
                var1 = var8[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var8 = 'simple-action';
                var1.type = var8;
                var9 = var7 != var13;
                var8 = undefined;
                if (!var9) {
                    _fun89972_ip = 147;
                    continue _fun89972
                }
            case 118:
                var11 = _closure1_slot4;
                var10 = _closure1_slot3;
                var9 = {};
                var14 = var14.icon;
                var9.style = var14;
                var9.source = var13;
                var8 = var11.bind(var4)(var10, var9);
            case 147:
                var1.icon = var8;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var13 = 6;
                var10 = var8[var13];
                var10 = var9.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.format;
                var8 = var8[var13];
                var8 = var9.bind(var4)(var8);
                var8 = var8.t;
                var9 = var8.EvDn1D;
                var8 = {};
                var12 = var12.name;
                var8.name = var12;
                var8 = var10.bind(var11)(var9, var8);
                var1.message = var8;
                var9 = var7 != var5;
                var8 = undefined;
                if (!var9) {
                    _fun89972_ip = 285;
                    continue _fun89972
                }
            case 233:
                var12 = _closure1_slot0;
                var9 = _closure1_slot2;
                var10 = var9[var13];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var9[var13];
                var9 = var12.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.S0W8Z5;
                var8 = var10.bind(var11)(var9);
            case 285:
                var1.actionLabel = var8;
                var7 = var7 != var5;
                var5 = undefined;
                if (!var7) {
                    _fun89972_ip = 306;
                    continue _fun89972
                }
            case 299:
                var5 = function() { // Environment: var6
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.openURLExternally;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
            case 306:
                var1.actionOnPress = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 319:
                var0 = _closure1_slot6;
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat_input/native/guard/ChatInputGuardRequiredLobbyApplicationAuthorization.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 11582, 1234, 3146, 2]);