// modules/guild_scheduled_events/native/components/EndEventActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EXPLICIT_END_EVENT_SHEET_KEY;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.Fonts;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var11 = 24;
    var3 = 16;
    var9 = {
        'paddingVertical': 24,
        'paddingHorizontal': 16,
        'alignItems': 'center'
    };
    var6.container = var9;
    var9 = {
        'fontSize': 24,
        'fontFamily': null,
        'textAlign': 'center'
    };
    var10 = var10.PRIMARY_BOLD;
    var9.fontFamily = var10;
    var10 = 6;
    var10 = var5[var10];
    var10 = var12.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.MOBILE_TEXT_HEADING_PRIMARY;
    var9.color = var10;
    var6.title = var9;
    var10 = 8;
    var9 = {
        'marginTop': 8,
        'textAlign': 'center'
    };
    var6.subtitle = var9;
    var9 = {};
    var9.marginTop = var11;
    var6.cancelButton = var9;
    var9 = {};
    var9.marginTop = var10;
    var6.confirmButton = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot7 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/native/components/EndEventActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun66355: for (var _fun66355_ip = 0;;) switch (_fun66355_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var _closure2_slot0 = var0;
                var4 = undefined;
                var _closure2_slot2 = var4;
                var1 = _closure1_slot7;
                var17 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 7;
                var1 = var3[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useActiveEvent;
                var0 = var0.id;
                var1 = var1.bind(var2)(var0);
                var _closure2_slot1 = var1;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun66355_ip = 599;
                    continue _fun66355
                }
            case 80:
                var18 = function() {
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 8;
                    var2 = var3[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var2);
                    var4 = var5.hideActionSheet;
                    var2 = _closure1_slot4;
                    var2 = var4.bind(var5)(var2);
                    var2 = _closure1_slot0;
                    var1 = 9;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.handleDisconnect;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                _closure2_slot2 = var18;
                var3 = _closure1_slot5;
                var14 = _closure1_slot1;
                var16 = _closure1_slot2;
                var1 = 10;
                var1 = var16[var1];
                var2 = var14.bind(var4)(var1);
                var1 = {};
                var7 = _closure1_slot6;
                var6 = _closure1_slot3;
                var5 = {};
                var9 = var17.container;
                var5.style = var9;
                var15 = _closure1_slot0;
                var8 = 11;
                var8 = var16[var8];
                var8 = var15.bind(var4)(var8);
                var9 = var8.LegacyText;
                var8 = {};
                var10 = var17.title;
                var8.style = var10;
                var10 = 'header';
                var8.accessibilityRole = var10;
                var12 = 12;
                var10 = var16[var12];
                var10 = var15.bind(var4)(var10);
                var19 = var10.intl;
                var13 = var19.string;
                var10 = var16[var12];
                var10 = var15.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10["4Ao8LC"];
                var10 = var13.bind(var19)(var10);
                var8.children = var10;
                var9 = var3.bind(var4)(var9, var8);
                var8 = new Array(4);
                var8[0] = var9;
                var9 = 13;
                var9 = var16[var9];
                var9 = var15.bind(var4)(var9);
                var10 = var9.Text;
                var9 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var13 = var17.subtitle;
                var9.style = var13;
                var13 = var16[var12];
                var13 = var15.bind(var4)(var13);
                var20 = var13.intl;
                var19 = var20.string;
                var13 = var16[var12];
                var13 = var15.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13["0I0B8f"];
                var13 = var19.bind(var20)(var13);
                var9.children = var13;
                var9 = var3.bind(var4)(var10, var9);
                var8[1] = var9;
                var13 = 14;
                var9 = var16[var13];
                var10 = var14.bind(var4)(var9);
                var9 = {};
                var19 = var17.cancelButton;
                var9.style = var19;
                var19 = var16[var13];
                var19 = var14.bind(var4)(var19);
                var19 = var19.Colors;
                var19 = var19.PRIMARY;
                var9.color = var19;
                var19 = var16[var12];
                var19 = var15.bind(var4)(var19);
                var21 = var19.intl;
                var20 = var21.string;
                var19 = var16[var12];
                var19 = var15.bind(var4)(var19);
                var19 = var19.t;
                var19 = var19.P60OAX;
                var19 = var20.bind(var21)(var19);
                var9.text = var19;
                var9.onPress = var18;
                var9 = var3.bind(var4)(var10, var9);
                var8[2] = var9;
                var9 = var16[var13];
                var10 = var14.bind(var4)(var9);
                var9 = {};
                var17 = var17.confirmButton;
                var9.style = var17;
                var13 = var16[var13];
                var13 = var14.bind(var4)(var13);
                var13 = var13.Colors;
                var13 = var13.RED;
                var9.color = var13;
                var13 = var16[var12];
                var13 = var15.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12.mjB9pd;
                var12 = var13.bind(var14)(var12);
                var9.text = var12;
                var11 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.endEvent;
                    var2 = _closure2_slot1;
                    var3 = var2.id;
                    var2 = var2.guild_id;
                    var2 = var4.bind(var5)(var3, var2);
                    var1 = _closure2_slot2;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var9.onPress = var11;
                var9 = var3.bind(var4)(var10, var9);
                var8[3] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 599:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1378, 660, 33, 1297, 671, 8080, 3278, 8202, 6447, 4876, 1234, 3941, 4873, 8100, 2]);