// modules/main_tabs_v2/native/tabs/messages/MessagesNewMessageWidget.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var7 = var1.bind(var0)(var4);
    var _closure1_slot3 = var7;
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.useYouBarHorizontalMargin;
    var _closure1_slot4 = var4;
    var1 = var1.useYouBarTotalHeight;
    var _closure1_slot5 = var1;
    var8 = 2;
    var1 = var6[var8];
    var1 = var5.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot6 = var1;
    var1 = 3;
    var4 = var6[var1];
    var4 = var9.bind(var0)(var4);
    var4 = var4.spacing;
    var4 = var4.PX_56;
    var1 = var6[var1];
    var1 = var9.bind(var0)(var1);
    var1 = var1.spacing;
    var1 = var1.PX_16;
    var1 = var8 * var1;
    var1 = var4 + var1;
    var4 = var7.memo;
    var3 = function() {
        _fun101823: for (var _fun101823_ip = 0;;) switch (_fun101823_ip) {
            case 0:
                var14 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 4;
                var0 = var10[var0];
                var3 = undefined;
                var1 = var14.bind(var3)(var0);
                var0 = var1.useMobileQuestDockHeight;
                var8 = var0.bind(var1)();
                var0 = _closure1_slot5;
                var7 = var0.bind(var3)();
                var0 = 5;
                var0 = var10[var0];
                var2 = var14.bind(var3)(var0);
                var1 = var2.useYouBarEnabled;
                var0 = 'message floating action button';
                var6 = var1.bind(var2)(var0);
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var1 = function() { // Environment: var0
                    _fun101824: for (var _fun101824_ip = 0;;) switch (_fun101824_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.getRootNavigationRef;
                            var2 = var1.bind(var2)();
                            var3 = null;
                            var1 = var3 == var2;
                            var4 = var2;
                            if (var1) {
                                _fun101824_ip = 59;
                                continue _fun101824
                            }
                        case 47:
                            var2 = var2.current;
                            var1 = var3 == var2;
                            var4 = var2;
                        case 59:
                            if (var1) {
                                _fun101824_ip = 109;
                                continue _fun101824
                            }
                        case 62:
                            var3 = var4.navigate;
                            var2 = {};
                            var1 = 'new-message';
                            var2.screen = var1;
                            var1 = {};
                            var5 = 'Messages New Message Widget';
                            var1.sourcePage = var5;
                            var2.params = var1;
                            var1 = 'friends';
                            var1 = var3.bind(var4)(var1, var2);
                        case 109:
                            return var0;
                    }
                };
                var0 = new Array(0);
                var4 = var2.bind(var4)(var1, var0);
                var0 = _closure1_slot4;
                var5 = var0.bind(var3)();
                var2 = _closure1_slot6;
                var0 = 7;
                var0 = var10[var0];
                var0 = var14.bind(var3)(var0);
                var1 = var0.FloatingActionButton;
                var0 = {};
                var11 = 8;
                var12 = var10[var11];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var10[var11];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.jD1qzM;
                var11 = var12.bind(var13)(var11);
                var0.accessibilityLabel = var11;
                var9 = _closure1_slot1;
                var11 = 9;
                var11 = var10[var11];
                var11 = var9.bind(var3)(var11);
                var0.icon = var11;
                var0.onPress = var4;
                var4 = 3;
                var4 = var10[var4];
                var4 = var9.bind(var3)(var4);
                var4 = var4.spacing;
                var4 = var4.PX_16;
                var4 = var8 + var4;
                var4 = var4 + var7;
                var0.positionBottom = var4;
                var4 = undefined;
                if (!var6) {
                    _fun101823_ip = 250;
                    continue _fun101823
                }
            case 247:
                var4 = var5;
            case 250:
                var0.positionRight = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/messages/MessagesNewMessageWidget.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.MESSAGES_NEW_MESSAGE_WIDGET_HEIGHT = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 5227, 33, 671, 5230, 5228, 3922, 7060, 1234, 13290, 2]);