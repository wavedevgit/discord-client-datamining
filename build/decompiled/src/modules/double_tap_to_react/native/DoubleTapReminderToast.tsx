// modules/double_tap_to_react/native/DoubleTapReminderToast.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 5;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var8.marginRight = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_8;
    var8.marginVertical = var9;
    var3.toastText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = function arg0() {
        var0 = arg0;
        var8 = var0.emoji;
        var1 = _closure1_slot6;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var2 = _closure1_slot5;
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 6;
        var0 = var9[var0];
        var0 = var5.bind(var3)(var0);
        var1 = var0.Text;
        var0 = {};
        var6 = 'text-sm/normal';
        var0.variant = var6;
        var4 = var4.toastText;
        var0.style = var4;
        var4 = 7;
        var6 = var9[var4];
        var6 = var5.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.format;
        var4 = var9[var4];
        var4 = var5.bind(var3)(var4);
        var4 = var4.t;
        var5 = var4.C2tQIV;
        var4 = {};
        var9 = function arg0() {
            var4 = _closure1_slot5;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 6;
            var0 = var2[var0];
            var3 = undefined;
            var0 = var1.bind(var3)(var0);
            var2 = var0.Text;
            var1 = {
                'variant': 'text-sm/bold',
                'color': 'icon-feedback-info'
            };
            var0 = arg0;
            var1.children = var0;
            var0 = 'doubleTapReminder';
            var0 = var4.bind(var3)(var2, var1, var0);
            return var0;
        };
        var4.protipHook = var9;
        var8 = var8.name;
        var4.emojiName = var8;
        var4 = var6.bind(var7)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot7 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/double_tap_to_react/native/DoubleTapReminderToast.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun58065: for (var _fun58065_ip = 0;;) switch (_fun58065_ip) {
            case 0:
                var9 = arg0;
                var4 = _closure1_slot5;
                var2 = _closure1_slot7;
                var1 = {};
                var1.emoji = var9;
                var0 = undefined;
                var1 = var4.bind(var0)(var2, var1);
                var _closure2_slot0 = var1;
                var7 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = 8;
                var2 = var1[var2];
                var2 = var7.bind(var0)(var2);
                var3 = var2.ToastEmoji;
                var2 = {};
                var2.emoji = var9;
                var2 = var4.bind(var0)(var3, var2);
                var _closure2_slot1 = var2;
                var3 = 9;
                var2 = var1[var3];
                var4 = var7.bind(var0)(var2);
                var2 = var4.UNSAFE_isDismissibleContentDismissed;
                var6 = 10;
                var1 = var1[var6];
                var1 = var7.bind(var0)(var1);
                var1 = var1.DismissibleContent;
                var1 = var1.DOUBLE_TAP_TO_REACT_REMINDER;
                var1 = var2.bind(var4)(var1);
                if (var1) {
                    _fun58065_ip = 419;
                    continue _fun58065
                }
            case 131:
                var1 = _closure1_slot3;
                var1 = var1.settings;
                var1 = var1.textAndImages;
                var2 = null;
                var4 = var2 == var1;
                var11 = undefined;
                if (var4) {
                    _fun58065_ip = 164;
                    continue _fun58065
                }
            case 158:
                var11 = var1.defaultReactionEmoji;
            case 164:
                if (!(var2 == var11)) {
                    _fun58065_ip = 170;
                    continue _fun58065
                }
            case 168:
                var11 = {};
            case 170:
                var1 = var11.disableDoubleTap;
                var7 = var2 == var1;
                var4 = undefined;
                if (var7) {
                    _fun58065_ip = 190;
                    continue _fun58065
                }
            case 185:
                var4 = var1.value;
            case 190:
                var1 = var2 != var4;
                if (!var1) {
                    _fun58065_ip = 200;
                    continue _fun58065
                }
            case 197:
                var1 = var4;
            case 200:
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var10 = 11;
                var4 = var4[var10];
                var7 = var7.bind(var0)(var4);
                var4 = var7.disambiguatedEmojiFromProtoValue;
                var7 = var4.bind(var7)(var11);
                var1 = !var1;
                if (!var1) {
                    _fun58065_ip = 241;
                    continue _fun58065
                }
            case 237:
                var1 = var2 != var7;
            case 241:
                if (!var1) {
                    _fun58065_ip = 273;
                    continue _fun58065
                }
            case 244:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var10];
                var4 = var4.bind(var0)(var2);
                var2 = var4.areEmojisEqual;
                var1 = var2.bind(var4)(var7, var9);
            case 273:
                if (!var1) {
                    _fun58065_ip = 419;
                    continue _fun58065
                }
            case 279:
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var2 = 12;
                var2 = var1[var2];
                var7 = var4.bind(var0)(var2);
                var4 = var7.open;
                var2 = {};
                var9 = 'DOUBLE_TAP_TO_REACT_REMINDER';
                var2.key = var9;
                var9 = function() {
                    var0 = _closure2_slot1;
                    return var0;
                };
                var2.icon = var9;
                var8 = function() {
                    var0 = _closure2_slot0;
                    return var0;
                };
                var2.content = var8;
                var8 = 4000;
                var2.toastDurationMs = var8;
                var2 = var4.bind(var7)(var2);
                var2 = _closure1_slot0;
                var3 = var1[var3];
                var4 = var2.bind(var0)(var3);
                var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
                var1 = var1[var6];
                var1 = var2.bind(var0)(var1);
                var1 = var1.DismissibleContent;
                var2 = var1.DOUBLE_TAP_TO_REACT_REMINDER;
                var1 = {};
                var5 = _closure1_slot4;
                var5 = var5.AUTO_DISMISS;
                var1.dismissAction = var5;
                var5 = true;
                var1.forceTrack = var5;
                var1 = var3.bind(var4)(var2, var1);
            case 419:
                return var0;
        }
    };
    var2.maybeShowDoubleTapReminderToast = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1310, 1369, 33, 1297, 671, 3938, 1234, 7106, 3213, 1358, 7097, 3150, 2]);