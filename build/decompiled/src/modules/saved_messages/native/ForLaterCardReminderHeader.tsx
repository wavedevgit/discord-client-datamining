// modules/saved_messages/native/ForLaterCardReminderHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
        'flexDirection': 'row',
        'alignItems': 'center',
        'backgroundColor': null,
        'borderTopLeftRadius': null,
        'borderTopRightRadius': null,
        'overflow': 'hidden',
        'gap': 8,
        'marginHorizontal': 4294967280,
        'marginTop': 4294967280,
        'paddingHorizontal': 16,
        'paddingVertical': 12
    };
    var9 = 3;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var8.borderTopLeftRadius = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var8.borderTopRightRadius = var11;
    var3.container = var8;
    var8 = {
        'width': 24,
        'height': 24,
        'borderRadius': null,
        'backgroundColor': null,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderRadius = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.CARD_BACKGROUND_DEFAULT;
    var8.backgroundColor = var9;
    var3.icon = var8;
    var8 = {
        'marginVertical': 4294967292,
        'marginLeft': 'auto'
    };
    var3.actionsContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/saved_messages/native/ForLaterCardReminderHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun75969: for (var _fun75969_ip = 0;;) switch (_fun75969_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.savedMessage;
                var7 = var0.throttledNow;
                var8 = var0.actions;
                var0 = _closure1_slot6;
                var4 = undefined;
                var9 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var11 = 4;
                var0 = var0[var11];
                var5 = var2.bind(var4)(var0);
                var3 = var5.useDueInString;
                var2 = {};
                var0 = null;
                var12 = var0 == var1;
                var10 = undefined;
                if (var12) {
                    _fun75969_ip = 85;
                    continue _fun75969
                }
            case 73:
                var12 = var1.saveData;
                var10 = var12.dueAt;
            case 85:
                var2.dueAt = var10;
                var2.now = var7;
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var11];
                var7 = var10.bind(var4)(var7);
                var7 = var7.DueInStringTypes;
                var7 = var7.SHORT;
                var2.type = var7;
                var2 = var3.bind(var5)(var2);
                var11 = var2.dueInText;
                var2 = var2.isOverdue;
                var1 = var1.saveData;
                var1 = var1.dueAt;
                if (!(var0 != var1)) {
                    _fun75969_ip = 401;
                    continue _fun75969
                }
            case 163:
                var12 = 'mobile-text-heading-primary';
                if (!var2) {
                    _fun75969_ip = 178;
                    continue _fun75969
                }
            case 172:
                var12 = 'text-feedback-critical';
            case 178:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 3;
                var1 = var5[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var1.colors;
                if (var2) {
                    _fun75969_ip = 214;
                    continue _fun75969
                }
            case 206:
                var15 = var1.INTERACTIVE_TEXT_DEFAULT;
                _fun75969_ip = 220;
                continue _fun75969;
            case 214:
                var15 = var1.TEXT_FEEDBACK_CRITICAL;
            case 220:
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var9.container;
                var1.style = var5;
                var7 = _closure1_slot4;
                var5 = {};
                var10 = var9.icon;
                var5.style = var10;
                var10 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = 5;
                var6 = var13[var6];
                var6 = var10.bind(var4)(var6);
                var14 = var6.ClockIcon;
                var6 = {};
                var16 = 'xxs';
                var6.size = var16;
                var6.color = var15;
                var6 = var7.bind(var4)(var14, var6);
                var5.children = var6;
                var6 = var7.bind(var4)(var2, var5);
                var5 = new Array(3);
                var5[0] = var6;
                var6 = 6;
                var6 = var13[var6];
                var6 = var10.bind(var4)(var6);
                var10 = var6.Text;
                var6 = {};
                var13 = 'text-md/semibold';
                var6.variant = var13;
                var6.color = var12;
                var6.children = var11;
                var6 = var7.bind(var4)(var10, var6);
                var5[1] = var6;
                var6 = {};
                var9 = var9.actionsContainer;
                var6.style = var9;
                var6.children = var8;
                var6 = var7.bind(var4)(var2, var6);
                var5[2] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 401:
                return var0;
        }
    };
    var2.ForLaterCardReminderHeader = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 33, 1297, 671, 9598, 3235, 3902, 2]);