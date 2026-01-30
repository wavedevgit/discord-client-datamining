// modules/safety_common/native/SafetySettingsNotice.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
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
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SafetySettingsNoticeAction;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 5;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var8.paddingTop = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var8.gap = var12;
    var3.header = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.gap = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.padding = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var8.borderRadius = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_LINK;
    var8.borderColor = var12;
    var8.borderWidth = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_FEEDBACK_INFO;
    var8.backgroundColor = var9;
    var3.blockedIgnoredRedirect = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/safety_common/native/SafetySettingsNotice.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: SafetySettingsNotice, environment: var1
        _fun79576: for (var _fun79576_ip = 0;;) switch (_fun79576_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.label;
                var0 = var1.labelHook;
                var _closure2_slot0 = var0;
                var6 = var1.noticeType;
                var _closure2_slot1 = var6;
                var13 = var1.count;
                var1 = _closure1_slot7;
                var3 = undefined;
                var4 = var1.bind(var3)();
                var5 = _closure1_slot2;
                var7 = var5.useEffect;
                var2 = new Array(1);
                var2[0] = var6;
                var1 = function() { // Environment: var14
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 6;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.trackSafetySettingsNoticeAnalytics;
                    var2 = _closure2_slot1;
                    var1 = _closure1_slot4;
                    var1 = var1.VIEWED;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var1 = var7.bind(var5)(var1, var2);
                var2 = var5.useCallback;
                var1 = new Array(2);
                var1[0] = var6;
                var1[1] = var0;
                var0 = function() { // Environment: var14
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 6;
                    var3 = var5[var3];
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.trackSafetySettingsNoticeAnalytics;
                    var2 = _closure2_slot1;
                    var1 = _closure1_slot4;
                    var1 = var1.LEARN_MORE;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0 = var2.bind(var5)(var0, var1);
                var _closure2_slot2 = var0;
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var4.blockedIgnoredRedirect;
                var0.style = var4;
                var7 = _closure1_slot5;
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 7;
                var4 = var8[var4];
                var4 = var6.bind(var3)(var4);
                var5 = var4.CircleInformationIcon;
                var4 = {};
                var10 = 'text-link';
                var4.color = var10;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = 8;
                var5 = var8[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {};
                var8 = {};
                var10 = 1;
                var8.flexShrink = var10;
                var5.style = var8;
                var8 = 'heading-sm/medium';
                var5.variant = var8;
                var8 = null;
                if (!(var8 == var13)) {
                    _fun79576_ip = 290;
                    continue _fun79576
                }
            case 238:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var8 = 9;
                var8 = var11[var8];
                var8 = var10.bind(var3)(var8);
                var11 = var8.intl;
                var10 = var11.format;
                var8 = {};
                var15 = function(arg0) { // Original name: hook, environment: var14
                    var3 = _closure1_slot5;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 8;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.Text;
                    var0 = {
                        'role': 'link',
                        'variant': 'heading-sm/medium',
                        'color': 'text-link'
                    };
                    var4 = _closure2_slot2;
                    var0.onPress = var4;
                    var4 = arg0;
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var8.hook = var15;
                var8 = var10.bind(var11)(var12, var8);
                _fun79576_ip = 345;
                continue _fun79576;
            case 290:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var9 = 9;
                var9 = var11[var9];
                var9 = var10.bind(var3)(var9);
                var11 = var9.intl;
                var10 = var11.format;
                var9 = {};
                var14 = function(arg0) { // Original name: hook, environment: var14
                    var3 = _closure1_slot5;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 8;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.Text;
                    var0 = {
                        'role': 'link',
                        'variant': 'heading-sm/medium',
                        'color': 'text-link'
                    };
                    var4 = _closure2_slot2;
                    var0.onPress = var4;
                    var4 = arg0;
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var9.hook = var14;
                var9.count = var13;
                var8 = var10.bind(var11)(var12, var9);
            case 345:
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 5878, 33, 1297, 671, 10087, 3225, 3901, 1234, 2]);