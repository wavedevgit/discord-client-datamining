// modules/guild_member_verification/native/components/alerts/MemberVerificationAlertIncomplete.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var6 = var3.Fragment;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_member_verification/native/components/alerts/MemberVerificationAlertIncomplete.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun61233: for (var _fun61233_ip = 0;;) switch (_fun61233_ip) {
            case 0:
                var4 = arg0;
                var10 = var4.guildId;
                var _closure2_slot0 = var10;
                var9 = var4.onClose;
                var _closure2_slot1 = var9;
                var1 = null;
                var3 = Object.create(var1);
                var2 = 0;
                var3.guildId = var2;
                var3.onClose = var2;
                var20 = {};
                var19 = var4;
                var18 = var3;
                var5 = copyDataProperties(var20, var19, var18);
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 3;
                var2 = var3[var2];
                var3 = undefined;
                var11 = var6.bind(var3)(var2);
                var8 = var11.useStateFromStores;
                var2 = _closure1_slot4;
                var7 = new Array(1);
                var7[0] = var2;
                var6 = new Array(1);
                var6[0] = var10;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getJoinRequestGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var8.bind(var11)(var7, var2, var6);
                var7 = _closure1_slot3;
                var11 = var7.useCallback;
                var6 = new Array(2);
                var6[0] = var10;
                var6[1] = var9;
                var2 = function() { // Environment: var0
                    _fun61235: for (var _fun61235_ip = 0;;) switch (_fun61235_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun61235_ip = 23;
                                continue _fun61235
                            }
                        case 13:
                            var2 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var2.bind(var0)();
                        case 23:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 4;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.openMemberVerificationModal;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var12 = var11.bind(var7)(var2, var6);
                var6 = var7.useCallback;
                var2 = new Array(2);
                var2[0] = var10;
                var2[1] = var9;
                var0 = function() { // Environment: var0
                    _fun61236: for (var _fun61236_ip = 0;;) switch (_fun61236_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun61236_ip = 23;
                                continue _fun61236
                            }
                        case 13:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 23:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var0 = 5;
                            var1 = var8[var0];
                            var0 = undefined;
                            var3 = var7.bind(var0)(var1);
                            var2 = var3.openMemberVerificationCancelPendingAlert;
                            var1 = {};
                            var4 = _closure2_slot0;
                            var1.guildId = var4;
                            var4 = 6;
                            var5 = var8[var4];
                            var5 = var7.bind(var0)(var5);
                            var9 = var5.intl;
                            var6 = var9.string;
                            var5 = var8[var4];
                            var5 = var7.bind(var0)(var5);
                            var5 = var5.t;
                            var5 = var5.fJwWVt;
                            var5 = var6.bind(var9)(var5);
                            var1.subtitleText = var5;
                            var5 = var8[var4];
                            var5 = var7.bind(var0)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var8[var4];
                            var4 = var7.bind(var0)(var4);
                            var4 = var4.t;
                            var4 = var4.OQFlFD;
                            var4 = var5.bind(var6)(var4);
                            var1.confirmText = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var10 = var6.bind(var7)(var0, var2);
                var2 = var1 == var8;
                var0 = undefined;
                if (var2) {
                    _fun61233_ip = 188;
                    continue _fun61233
                }
            case 183:
                var0 = var8.name;
            case 188:
                if (!(var1 == var0)) {
                    _fun61233_ip = 251;
                    continue _fun61233
                }
            case 192:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 6;
                var1 = var7[var0];
                var1 = var6.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var7[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["0sTyEb"];
                var6 = var1.bind(var2)(var0);
                _fun61233_ip = 321;
                continue _fun61233;
            case 251:
                var1 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 6;
                var2 = var9[var0];
                var2 = var1.bind(var3)(var2);
                var7 = var2.intl;
                var2 = var7.formatToPlainString;
                var0 = var9[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0.f5Jaw7;
                var0 = {};
                var8 = var8.name;
                var0.guildName = var8;
                var6 = var2.bind(var7)(var1, var0);
            case 321:
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var15 = _closure1_slot2;
                var0 = 7;
                var0 = var15[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var20 = var0;
                var19 = var5;
                var5 = copyDataProperties(var20, var19);
                var14 = _closure1_slot0;
                var5 = 8;
                var5 = var15[var5];
                var5 = var14.bind(var3)(var5);
                var7 = var5.ListViewIcon;
                var5 = 'icon';
                var0[var5] = var7;
                var5 = 'header';
                var0[var5] = var6;
                var6 = _closure1_slot7;
                var5 = _closure1_slot6;
                var4 = {};
                var8 = 9;
                var7 = var15[var8];
                var7 = var14.bind(var3)(var7);
                var9 = var7.Button;
                var7 = {};
                var11 = 'secondary';
                var7.variant = var11;
                var11 = 6;
                var13 = var15[var11];
                var13 = var14.bind(var3)(var13);
                var17 = var13.intl;
                var16 = var17.string;
                var13 = var15[var11];
                var13 = var14.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.h3aGmv;
                var13 = var16.bind(var17)(var13);
                var7.text = var13;
                var7.onPress = var12;
                var9 = var2.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var8 = var15[var8];
                var8 = var14.bind(var3)(var8);
                var9 = var8.Button;
                var8 = {};
                var12 = var15[var11];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.OQFlFD;
                var11 = var12.bind(var13)(var11);
                var8.text = var11;
                var11 = 'destructive';
                var8.variant = var11;
                var8.onPress = var10;
                var8 = var2.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = 'buttons';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3214, 33, 632, 7443, 7420, 1234, 7424, 7592, 4084, 2]);