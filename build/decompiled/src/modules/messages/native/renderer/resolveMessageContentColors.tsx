// modules/messages/native/renderer/resolveMessageContentColors.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var3 = 0;
    var6 = var5[var3];
    var0 = undefined;
    var9 = var4.bind(var0)(var6);
    var7 = var9.experimental_createToken;
    var6 = function(arg0) { // Environment: var1
        _fun55496: for (var _fun55496_ip = 0;;) switch (_fun55496_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.theme;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 1;
                var0 = var3[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = var2.isThemeDark;
                var0 = var0.bind(var2)(var4);
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 2;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.unsafe_rawColors;
                if (var0) {
                    _fun55496_ip = 81;
                    continue _fun55496
                }
            case 73:
                var0 = var1.PRIMARY_630;
                _fun55496_ip = 87;
                continue _fun55496;
            case 81:
                var0 = var1.PRIMARY_300;
            case 87:
                return var0;
        }
    };
    var10 = var7.bind(var9)(var6);
    var6 = var5[var3];
    var9 = var4.bind(var0)(var6);
    var7 = var9.experimental_createToken;
    var6 = function(arg0) { // Environment: var1
        _fun55497: for (var _fun55497_ip = 0;;) switch (_fun55497_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.theme;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 1;
                var0 = var3[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = var2.isThemeDark;
                var0 = var0.bind(var2)(var4);
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 2;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.unsafe_rawColors;
                if (var0) {
                    _fun55497_ip = 81;
                    continue _fun55497
                }
            case 73:
                var0 = var1.BRAND_200;
                _fun55497_ip = 87;
                continue _fun55497;
            case 81:
                var0 = var1.BRAND_260;
            case 87:
                return var0;
        }
    };
    var9 = var7.bind(var9)(var6);
    var6 = {};
    var7 = 2;
    var11 = var5[var7];
    var11 = var8.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_STRONG;
    var6.textColor = var11;
    var11 = var5[var7];
    var11 = var8.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_LINK;
    var6.linkColor = var11;
    var11 = var5[var7];
    var11 = var8.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_MUTED;
    var6.timestampColor = var11;
    var11 = var5[var7];
    var11 = var8.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT;
    var6.highlightColor = var11;
    var11 = var5[var7];
    var11 = var8.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_MUTED;
    var6.unsupportedColor = var11;
    var6.embedProviderColor = var10;
    var10 = var5[var7];
    var10 = var8.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWEST;
    var6.embedBorderLeftColor = var10;
    var10 = var5[var7];
    var10 = var8.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_DEFAULT;
    var6.embedBodyTextColor = var10;
    var10 = var5[var7];
    var10 = var8.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.MOBILE_TEXT_HEADING_PRIMARY;
    var6.embedHeaderTextColor = var10;
    var10 = var5[var7];
    var10 = var8.bind(var0)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.BRAND_560;
    var6.opTagTextColor = var10;
    var6.opTagBackgroundColor = var9;
    var9 = var5[var7];
    var9 = var8.bind(var0)(var9);
    var9 = var9.unsafe_rawColors;
    var9 = var9.RED_400;
    var6.failedMessageBodyTextColor = var9;
    var9 = var5[var7];
    var9 = var8.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_MUTED;
    var6.automodBlockedBodyTextColor = var9;
    var9 = var5[var7];
    var9 = var8.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_FEEDBACK_POSITIVE;
    var6.aiBotTagColor = var9;
    var9 = var5[var7];
    var9 = var8.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_MUTED;
    var6.editedColor = var9;
    var9 = var5[var7];
    var9 = var8.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.INTERACTIVE_TEXT_ACTIVE;
    var6.defaultUsernameColor = var9;
    var9 = var5[var7];
    var9 = var8.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_MOD_MUTED;
    var6.feedbackColor = var9;
    var9 = var5[var7];
    var9 = var8.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.CONTROL_SECONDARY_TEXT_DEFAULT;
    var6.reportFpTextColor = var9;
    var9 = var5[var7];
    var9 = var8.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
    var6.reportFpBackgroundColor = var9;
    var9 = var5[var7];
    var9 = var8.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.WHITE;
    var6.retryTextColor = var9;
    var9 = var5[var7];
    var9 = var8.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BRAND;
    var6.retryBackgroundColor = var9;
    var9 = var5[var7];
    var9 = var8.bind(var0)(var9);
    var9 = var9.unsafe_rawColors;
    var9 = var9.BRAND_500;
    var6.clipTagBackgroundColor = var9;
    var7 = var5[var7];
    var7 = var8.bind(var0)(var7);
    var7 = var7.unsafe_rawColors;
    var7 = var7.WHITE;
    var6.clipTagTextColor = var7;
    var _closure1_slot3 = var6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createNativeStyleProperties;
    var3 = function(arg0) { // Environment: var1
        _fun55498: for (var _fun55498_ip = 0;;) switch (_fun55498_ip) {
            case 0:
                var0 = {};
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 2;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var3 = var2.colors;
                var2 = arg0;
                if (var2) {
                    _fun55498_ip = 46;
                    continue _fun55498
                }
            case 38:
                var2 = var3.EMBED_BACKGROUND;
                _fun55498_ip = 52;
                continue _fun55498;
            case 46:
                var2 = var3.EMBED_BACKGROUND_ALTERNATE;
            case 52:
                var0.embedBackgroundColor = var2;
                var5 = _closure1_slot3;
                var6 = var0;
                var1 = copyDataProperties(var6, var5);
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/resolveMessageContentColors.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun55499: for (var _fun55499_ip = 0;;) switch (_fun55499_ip) {
            case 0:
                var3 = arguments[1];
                var2 = undefined;
                if (!(var3 === var2)) {
                    _fun55499_ip = 11;
                    continue _fun55499
                }
            case 9:
                var3 = false;
            case 11:
                var1 = _closure1_slot4;
                var0 = arg0;
                var0 = var1.bind(var2)(var0, var3);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1297, 3206, 671, 2]);