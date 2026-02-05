// modules/premium/powerups/native/GuildPowerupsDeactivateAlert.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'width': 64,
        'height': 64,
        'alignItems': 'center',
        'justifyContent': 'center',
        'borderRadius': null,
        'backgroundColor': null,
        'alignSelf': 'center'
    };
    var9 = 'center';
    var10 = 3;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var8.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_SUBTLE;
    var8.backgroundColor = var12;
    var3.headerContainer = var8;
    var8 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_12;
    var8.paddingHorizontal = var10;
    var3.extraContentContainer = var8;
    var8 = {};
    var8.textAlign = var9;
    var3.warningText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/native/GuildPowerupsDeactivateAlert.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun102508: for (var _fun102508_ip = 0;;) switch (_fun102508_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.guildId;
                var11 = var0.powerup;
                var0 = _closure1_slot6;
                var3 = undefined;
                var13 = var0.bind(var3)();
                var7 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 4;
                var0 = var4[var0];
                var0 = var7.bind(var3)(var0);
                var0 = var0.bind(var3)(var6, var11);
                var1 = var0.onDeactivate;
                var _closure2_slot0 = var1;
                var20 = var0.error;
                var0 = 5;
                var0 = var4[var0];
                var0 = var7.bind(var3)(var0);
                var0 = var0.bind(var3)(var6, var11);
                var15 = var0.warningText;
                var12 = var0.vanityUrlWarning;
                var5 = _closure1_slot0;
                var0 = 6;
                var1 = var4[var0];
                var2 = var5.bind(var3)(var1);
                var1 = var2.useLogPowerupModalOpened;
                var0 = var4[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.ModalType;
                var0 = var0.DEACTIVATE;
                var0 = var1.bind(var2)(var6, var11, var0);
                var2 = _closure1_slot4;
                var0 = 7;
                var0 = var4[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.AlertModal;
                var0 = {};
                var8 = _closure1_slot3;
                var6 = {};
                var10 = var13.headerContainer;
                var6.style = var10;
                var10 = 8;
                var10 = var4[var10];
                var10 = var5.bind(var3)(var10);
                var14 = var10.CircleErrorIcon;
                var10 = {};
                var16 = 3;
                var16 = var4[var16];
                var16 = var7.bind(var3)(var16);
                var16 = var16.colors;
                var16 = var16.INTERACTIVE_ICON_DEFAULT;
                var10.color = var16;
                var16 = 'custom';
                var10.size = var16;
                var16 = {
                    'width': 40,
                    'height': 40
                };
                var10.style = var16;
                var10 = var2.bind(var3)(var14, var10);
                var6.children = var10;
                var6 = var2.bind(var3)(var8, var6);
                var0.header = var6;
                var16 = 9;
                var6 = var4[var16];
                var6 = var5.bind(var3)(var6);
                var14 = var6.intl;
                var10 = var14.formatToPlainString;
                var18 = 10;
                var6 = var4[var18];
                var6 = var7.bind(var3)(var6);
                var8 = var6.iEBw1M;
                var6 = {};
                var17 = var11.title;
                var6.perk = var17;
                var6 = var10.bind(var14)(var8, var6);
                var0.title = var6;
                var6 = var4[var16];
                var6 = var5.bind(var3)(var6);
                var10 = var6.intl;
                var8 = var10.formatToPlainString;
                var6 = var4[var18];
                var6 = var7.bind(var3)(var6);
                var7 = var6["7o0K+2"];
                var6 = {};
                var11 = var11.title;
                var6.perk = var11;
                var6 = var8.bind(var10)(var7, var6);
                var0.content = var6;
                var6 = _closure1_slot5;
                var17 = 11;
                var4 = var4[var17];
                var4 = var5.bind(var3)(var4);
                var5 = var4.AlertActions;
                var4 = {};
                var8 = null;
                var7 = var8 != var20;
                if (!var7) {
                    _fun102508_ip = 499;
                    continue _fun102508
                }
            case 434:
                var14 = _closure1_slot4;
                var11 = _closure1_slot0;
                var21 = _closure1_slot2;
                var10 = 12;
                var10 = var21[var10];
                var10 = var11.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'style': null,
                    'variant': 'text-xs/semibold',
                    'color': 'text-feedback-critical'
                };
                var21 = var13.warningText;
                var10.style = var21;
                var10.children = var20;
                var7 = var14.bind(var3)(var11, var10);
            case 499:
                var14 = new Array(3);
                var14[0] = var7;
                var11 = _closure1_slot4;
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var20 = var7[var17];
                var20 = var10.bind(var3)(var20);
                var21 = var20.AlertActionButton;
                var20 = {};
                var22 = 'destructive';
                var20.variant = var22;
                var22 = function arg0() {
                    var1 = arg0;
                    var0 = var1.stopPropagation;
                    var0 = var0.bind(var1)();
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var20.onPress = var22;
                var22 = var7[var16];
                var22 = var10.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var24 = _closure1_slot1;
                var18 = var7[var18];
                var18 = var24.bind(var3)(var18);
                var18 = var18.PYPdl4;
                var18 = var22.bind(var23)(var18);
                var20.text = var18;
                var18 = 'deactivate';
                var18 = var11.bind(var3)(var21, var20, var18);
                var14[1] = var18;
                var17 = var7[var17];
                var17 = var10.bind(var3)(var17);
                var18 = var17.AlertActionButton;
                var17 = {};
                var19 = function() {
                    var0 = undefined;
                    return var0;
                };
                var17.onPress = var19;
                var19 = 'secondary';
                var17.variant = var19;
                var19 = var7[var16];
                var19 = var10.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var16 = var7[var16];
                var16 = var10.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16["ETE/oC"];
                var16 = var19.bind(var20)(var16);
                var17.text = var16;
                var16 = 'cancel';
                var16 = var11.bind(var3)(var18, var17, var16);
                var14[2] = var16;
                var4.children = var14;
                var4 = var6.bind(var3)(var5, var4);
                var0.actions = var4;
                var6 = _closure1_slot5;
                var5 = _closure1_slot3;
                var4 = {};
                var14 = var13.extraContentContainer;
                var4.style = var14;
                var14 = 12;
                var7 = var7[var14];
                var7 = var10.bind(var3)(var7);
                var10 = var7.Text;
                var7 = {};
                var16 = 'text-sm/medium';
                var7.variant = var16;
                var16 = var13.warningText;
                var7.style = var16;
                var7.children = var15;
                var10 = var11.bind(var3)(var10, var7);
                var7 = new Array(2);
                var7[0] = var10;
                var8 = var8 != var12;
                if (!var8) {
                    _fun102508_ip = 881;
                    continue _fun102508
                }
            case 819:
                var11 = _closure1_slot4;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var14];
                var9 = var10.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'style': null,
                    'variant': 'text-sm/semibold',
                    'color': 'text-feedback-critical'
                };
                var13 = var13.warningText;
                var9.style = var13;
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 881:
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.extraContent = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 33, 1297, 671, 13394, 13395, 13396, 4026, 5395, 1234, 1890, 4026, 3941, 2]);