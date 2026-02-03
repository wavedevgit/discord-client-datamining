// modules/guild_member_verification/native/components/alerts/MemberVerificationAlertSuccess.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 120;
    var8.marginTop = var9;
    var3.alert = var8;
    var8 = {
        'marginTop': 40,
        'textAlign': 'center'
    };
    var3.header = var8;
    var8 = {
        'marginVertical': 8,
        'lineHeight': 18,
        'textAlign': 'center'
    };
    var3.text = var8;
    var8 = {
        'position': 'absolute',
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        'left': 0,
        'right': 0,
        'top': 4294967076
    };
    var3.illustrationContainer = var8;
    var8 = {
        'height': 246,
        'width': 240
    };
    var3.illustration = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_member_verification/native/components/alerts/MemberVerificationAlertSuccess.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun59990: for (var _fun59990_ip = 0;;) switch (_fun59990_ip) {
            case 0:
                var4 = arg0;
                var8 = var4.guildId;
                var _closure2_slot0 = var8;
                var0 = var4.handleConfirmAndAck;
                var _closure2_slot1 = var0;
                var0 = null;
                var3 = Object.create(var0);
                var2 = 0;
                var3.guildId = var2;
                var3.handleConfirmAndAck = var2;
                var21 = {};
                var20 = var4;
                var19 = var3;
                var6 = copyDataProperties(var21, var20, var19);
                var _closure2_slot2 = var6;
                var2 = _closure1_slot8;
                var4 = undefined;
                var10 = var2.bind(var4)();
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 6;
                var9 = var7[var2];
                var13 = var3.bind(var4)(var9);
                var12 = var13.useStateFromStores;
                var9 = _closure1_slot5;
                var11 = new Array(1);
                var11[0] = var9;
                var9 = new Array(1);
                var9[0] = var8;
                var8 = function() { // Environment: var1
                    var2 = _closure1_slot5;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var18 = var12.bind(var13)(var11, var8, var9);
                var2 = var7[var2];
                var8 = var3.bind(var4)(var2);
                var7 = var8.useStateFromStores;
                var2 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var1
                    var0 = _closure1_slot4;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var14 = var7.bind(var8)(var3, var2);
                if (!(var0 != var18)) {
                    _fun59990_ip = 629;
                    continue _fun59990
                }
            case 170:
                var7 = function() {
                    _fun59993: for (var _fun59993_ip = 0;;) switch (_fun59993_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = undefined;
                            var2 = var2.bind(var0)();
                            var2 = _closure2_slot2;
                            var3 = var2.onClose;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun59993_ip = 43;
                                continue _fun59993
                            }
                        case 29:
                            var2 = _closure2_slot2;
                            var1 = var2.onClose;
                            var1 = var1.bind(var2)();
                        case 43:
                            return var0;
                    }
                };
                var3 = _closure1_slot7;
                var11 = _closure1_slot1;
                var13 = _closure1_slot2;
                var1 = 7;
                var1 = var13[var1];
                var2 = var11.bind(var4)(var1);
                var1 = {};
                var21 = var1;
                var20 = var6;
                var6 = copyDataProperties(var21, var20);
                var12 = _closure1_slot0;
                var9 = 8;
                var6 = var13[var9];
                var6 = var12.bind(var4)(var6);
                var15 = var6.intl;
                var8 = var15.string;
                var6 = var13[var9];
                var6 = var12.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.NuzmOA;
                var8 = var8.bind(var15)(var6);
                var6 = 'confirmText';
                var1[var6] = var8;
                var8 = var10.alert;
                var6 = 'style';
                var1[var6] = var8;
                var6 = 'onCancel';
                var1[var6] = var7;
                var6 = 'onConfirm';
                var1[var6] = var7;
                var8 = _closure1_slot6;
                var6 = _closure1_slot3;
                var5 = {};
                var7 = var10.illustrationContainer;
                var5.style = var7;
                var7 = 9;
                var7 = var13[var7];
                var11 = var11.bind(var4)(var7);
                var7 = {};
                var15 = 10;
                var15 = var13[var15];
                var15 = var12.bind(var4)(var15);
                var7.source = var15;
                var14 = !var14;
                var7.autoPlay = var14;
                var14 = var10.illustration;
                var7.style = var14;
                var7 = var8.bind(var4)(var11, var7);
                var5.children = var7;
                var5 = var8.bind(var4)(var6, var5);
                var6 = new Array(3);
                var6[0] = var5;
                var5 = 11;
                var7 = var13[var5];
                var7 = var12.bind(var4)(var7);
                var11 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'heading-lg/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var14 = var10.header;
                var7.style = var14;
                var14 = var13[var9];
                var14 = var12.bind(var4)(var14);
                var17 = var14.intl;
                var16 = var17.format;
                var14 = var13[var9];
                var14 = var12.bind(var4)(var14);
                var14 = var14.t;
                var15 = var14["7hhNEn"];
                var14 = {};
                var18 = var18.name;
                var14.guildName = var18;
                var14 = var16.bind(var17)(var15, var14);
                var7.children = var14;
                var7 = var8.bind(var4)(var11, var7);
                var6[1] = var7;
                var5 = var13[var5];
                var5 = var12.bind(var4)(var5);
                var7 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var10 = var10.text;
                var5.style = var10;
                var10 = var13[var9];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.nwpqyc;
                var9 = var10.bind(var11)(var9);
                var5.children = var9;
                var5 = var8.bind(var4)(var7, var5);
                var6[2] = var5;
                var5 = 'children';
                var1[var5] = var6;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 629:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 1410, 33, 1297, 566, 3928, 1234, 6594, 7417, 3932, 2]);