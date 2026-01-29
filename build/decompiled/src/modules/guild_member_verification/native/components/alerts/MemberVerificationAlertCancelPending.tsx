// modules/guild_member_verification/native/components/alerts/MemberVerificationAlertCancelPending.tsx
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
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var6 = var3.Fragment;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_member_verification/native/components/alerts/MemberVerificationAlertCancelPending.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: MemberVerificationAlertCancelPending, environment: var1
        _fun59839: for (var _fun59839_ip = 0;;) switch (_fun59839_ip) {
            case 0:
                var3 = arg0;
                var4 = var3.guildId;
                var _closure2_slot0 = var4;
                var14 = var3.confirmText;
                var5 = var3.subtitleText;
                var11 = var3.onClose;
                var _closure2_slot1 = var11;
                var2 = {
                    'guildId': 0,
                    'confirmText': 0,
                    'subtitleText': 0,
                    'onClose': 0
                };
                var15 = null;
                var22 = var2;
                var21 = null;
                var1 = silentSetPrototypeOf(var22, var21);
                var22 = {};
                var21 = var3;
                var20 = var2;
                var6 = copyDataProperties(var22, var21, var20);
                var3 = _closure1_slot3;
                var2 = var3.useCallback;
                var1 = new Array(2);
                var1[0] = var4;
                var1[1] = var11;
                var0 = function() { // Environment: var0
                    _fun59840: for (var _fun59840_ip = 0;;) switch (_fun59840_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun59840_ip = 23;
                                continue _fun59840
                            }
                        case 13:
                            var2 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var2.bind(var0)();
                        case 23:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 2;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.removeGuildJoinRequest;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var13 = var2.bind(var3)(var0, var1);
                var3 = _closure1_slot4;
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 3;
                var0 = var4[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = {};
                var22 = var0;
                var21 = var6;
                var6 = copyDataProperties(var22, var21);
                var8 = _closure1_slot0;
                var16 = 4;
                var6 = var4[var16];
                var6 = var8.bind(var2)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var4 = var4[var16];
                var4 = var8.bind(var2)(var4);
                var4 = var4.t;
                var4 = var4.KYiN1Q;
                var6 = var6.bind(var7)(var4);
                var4 = 'header';
                var0[var4] = var6;
                if (!(var15 == var5)) {
                    _fun59839_ip = 266;
                    continue _fun59839
                }
            case 212:
                var8 = _closure1_slot0;
                var4 = _closure1_slot2;
                var6 = var4[var16];
                var6 = var8.bind(var2)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var4 = var4[var16];
                var4 = var8.bind(var2)(var4);
                var4 = var4.t;
                var4 = var4.nQHxqm;
                var5 = var6.bind(var7)(var4);
            case 266:
                var4 = 'subtitle';
                var0[var4] = var5;
                var6 = _closure1_slot6;
                var5 = _closure1_slot5;
                var4 = {};
                var12 = _closure1_slot4;
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var8 = 5;
                var7 = var7[var8];
                var7 = var10.bind(var2)(var7);
                var10 = var7.Button;
                var7 = {};
                var17 = 'destructive';
                var7.variant = var17;
                if (!(var15 == var14)) {
                    _fun59839_ip = 385;
                    continue _fun59839
                }
            case 331:
                var19 = _closure1_slot0;
                var15 = _closure1_slot2;
                var17 = var15[var16];
                var17 = var19.bind(var2)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var15 = var15[var16];
                var15 = var19.bind(var2)(var15);
                var15 = var15.t;
                var15 = var15.OzHPde;
                var14 = var17.bind(var18)(var15);
            case 385:
                var7.text = var14;
                var7.onPress = var13;
                var10 = var12.bind(var2)(var10, var7);
                var7 = new Array(2);
                var7[0] = var10;
                var10 = _closure1_slot4;
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = var12[var8];
                var8 = var15.bind(var2)(var8);
                var9 = var8.Button;
                var8 = {};
                var13 = var12[var16];
                var13 = var15.bind(var2)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var12[var16];
                var12 = var15.bind(var2)(var12);
                var12 = var12.t;
                var12 = var12.bANR0R;
                var12 = var13.bind(var14)(var12);
                var8.text = var12;
                var12 = 'secondary';
                var8.variant = var12;
                var8.onPress = var11;
                var8 = var10.bind(var2)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var5 = var6.bind(var2)(var5, var4);
                var4 = 'buttons';
                var0[var4] = var5;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 7379, 7384, 1234, 4037, 2]);