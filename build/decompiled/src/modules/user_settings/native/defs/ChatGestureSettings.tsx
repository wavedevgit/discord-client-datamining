// modules/user_settings/native/defs/ChatGestureSettings.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var7;
    var3 = function() { // Original name: useSwipeToReplySettingValue, environment: var1
        _fun71909: for (var _fun71909_ip = 0;;) switch (_fun71909_ip) {
            case 0:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var2[var0];
                var3 = undefined;
                var0 = var5.bind(var3)(var0);
                var4 = var0.SwipeRightToLeftModeSetting;
                var0 = var4.useSetting;
                var0 = var0.bind(var4)();
                var4 = 2;
                var2 = var2[var4];
                var2 = var5.bind(var3)(var2);
                var2 = var2.SwipeRightToLeftMode;
                var2 = var2.SWIPE_RIGHT_TO_LEFT_UNSET;
                if (!(var0 === var2)) {
                    _fun71909_ip = 98;
                    continue _fun71909
                }
            case 69:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var1 = var2.bind(var3)(var1);
                var1 = var1.SwipeRightToLeftMode;
                var0 = var1.SWIPE_RIGHT_TO_LEFT_REPLY;
            case 98:
                return var0;
        }
    };
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var4 = var6.bind(var0)(var4);
    var9 = var4.MobileSetting;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var5 = var4.AnalyticEvents;
    var _closure1_slot3 = var5;
    var4 = var4.AnalyticsSections;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var7[var4];
    var8 = var6.bind(var0)(var4);
    var5 = var8.createRadio;
    var4 = {};
    var10 = function() { // Original name: title, environment: var1
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 3;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["Jf0C/c"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var4.title = var10;
    var10 = function() { // Original name: additionalSearchTerms, environment: var1
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 3;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["9BGJ1m"];
        var1 = var1.bind(var2)(var0);
        var0 = new Array(1);
        var0[0] = var1;
        return var0;
    };
    var4.additionalSearchTerms = var10;
    var9 = var9.SWIPE_RIGHT_TO_LEFT;
    var4.parent = var9;
    var4.useValue = var3;
    var9 = function(arg0) { // Original name: onSwipeToReplyValueChange, environment: var1
        var0 = global;
        var2 = var0.Number;
        var0 = undefined;
        var1 = arg0;
        var3 = var2.bind(var0)(var1);
        var2 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 2;
        var1 = var4[var1];
        var1 = var2.bind(var0)(var1);
        var1 = var1.SwipeRightToLeftMode;
        var8 = var1.SWIPE_RIGHT_TO_LEFT_REPLY;
        var5 = _closure1_slot1;
        var1 = 4;
        var1 = var4[var1];
        var7 = var5.bind(var0)(var1);
        var6 = var7.track;
        var1 = _closure1_slot3;
        var5 = var1.USER_SETTINGS_SWIPE_TO_REPLY_TOGGLE;
        var1 = {};
        var8 = var3 === var8;
        var1.enabled = var8;
        var8 = {};
        var9 = _closure1_slot4;
        var9 = var9.SETTINGS_TEXT_AND_IMAGES;
        var8.section = var9;
        var1.location = var8;
        var1 = var6.bind(var7)(var5, var1);
        var1 = 5;
        var1 = var4[var1];
        var1 = var2.bind(var0)(var1);
        var2 = var1.SwipeRightToLeftModeSetting;
        var1 = var2.updateSetting;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var4.onValueChange = var9;
    var9 = function() { // Original name: useHasSwipeToReplySettingOptions, environment: var1
        var1 = {};
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var3 = 2;
        var0 = var7[var3];
        var5 = undefined;
        var0 = var6.bind(var5)(var0);
        var0 = var0.SwipeRightToLeftMode;
        var0 = var0.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
        var1.value = var0;
        var2 = 3;
        var0 = var7[var2];
        var0 = var6.bind(var5)(var0);
        var8 = var0.intl;
        var4 = var8.string;
        var0 = var7[var2];
        var0 = var6.bind(var5)(var0);
        var0 = var0.t;
        var0 = var0["6eXLcJ"];
        var0 = var4.bind(var8)(var0);
        var1.label = var0;
        var0 = var7[var2];
        var0 = var6.bind(var5)(var0);
        var8 = var0.intl;
        var4 = var8.string;
        var0 = var7[var2];
        var0 = var6.bind(var5)(var0);
        var0 = var0.t;
        var0 = var0.ohhhDK;
        var0 = var4.bind(var8)(var0);
        var1.subLabel = var0;
        var0 = new Array(2);
        var0[0] = var1;
        var1 = {};
        var3 = var7[var3];
        var3 = var6.bind(var5)(var3);
        var3 = var3.SwipeRightToLeftMode;
        var3 = var3.SWIPE_RIGHT_TO_LEFT_REPLY;
        var1.value = var3;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var4 = var3.intl;
        var3 = var4.string;
        var2 = var7[var2];
        var2 = var6.bind(var5)(var2);
        var2 = var2.t;
        var2 = var2["3tYNDS"];
        var2 = var3.bind(var4)(var2);
        var1.label = var2;
        var0[1] = var1;
        return var0;
    };
    var4.useOptions = var9;
    var4 = var5.bind(var8)(var4);
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/native/defs/ChatGestureSettings.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.useSwipeToReplySettingValue = var3;
    var1 = function() { // Original name: getSwipeToReplySettingValue, environment: var1
        _fun71914: for (var _fun71914_ip = 0;;) switch (_fun71914_ip) {
            case 0:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var2[var0];
                var3 = undefined;
                var0 = var5.bind(var3)(var0);
                var4 = var0.SwipeRightToLeftModeSetting;
                var0 = var4.getSetting;
                var0 = var0.bind(var4)();
                var4 = 2;
                var2 = var2[var4];
                var2 = var5.bind(var3)(var2);
                var2 = var2.SwipeRightToLeftMode;
                var2 = var2.SWIPE_RIGHT_TO_LEFT_UNSET;
                if (!(var0 === var2)) {
                    _fun71914_ip = 98;
                    continue _fun71914
                }
            case 69:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var1 = var2.bind(var3)(var1);
                var1 = var1.SwipeRightToLeftMode;
                var0 = var1.SWIPE_RIGHT_TO_LEFT_REPLY;
            case 98:
                return var0;
        }
    };
    var2.getSwipeToReplySettingValue = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6967, 660, 1311, 1234, 795, 1348, 8943, 2]);