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
    var4 = var1.useYouBarTotalHeight;
    var _closure1_slot4 = var4;
    var1 = var1.YOU_BAR_MARGIN;
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
    var3 = function(arg0) { // Original name: MessagesNewMessageWidget, environment: var3
        _fun102157: for (var _fun102157_ip = 0;;) switch (_fun102157_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.state;
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 4;
                var0 = var12[var0];
                var4 = undefined;
                var2 = var15.bind(var4)(var0);
                var0 = var2.useMobileQuestDockHeight;
                var9 = var0.bind(var2)();
                var0 = _closure1_slot4;
                var6 = var0.bind(var4)();
                var0 = 5;
                var0 = var12[var0];
                var3 = var15.bind(var4)(var0);
                var2 = var3.useYouBarEnabled;
                var0 = 'message floating action button';
                var3 = var2.bind(var3)(var0);
                var8 = _closure1_slot3;
                var7 = var8.useCallback;
                var2 = function() { // Environment: var0
                    _fun102158: for (var _fun102158_ip = 0;;) switch (_fun102158_ip) {
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
                                _fun102158_ip = 59;
                                continue _fun102158
                            }
                        case 47:
                            var2 = var2.current;
                            var1 = var3 == var2;
                            var4 = var2;
                        case 59:
                            if (var1) {
                                _fun102158_ip = 109;
                                continue _fun102158
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
                var2 = var7.bind(var8)(var2, var0);
                var0 = 7;
                var0 = var12[var0];
                var10 = var15.bind(var4)(var0);
                var8 = var10.useCreateDMCTAExperiment;
                var7 = {};
                var0 = true;
                var7.autoTrackExposure = var0;
                var0 = 'MessagesNewMessageWidget';
                var7 = var8.bind(var10)(var0, var7);
                var0 = var7.enabled;
                var7 = var7.animated;
                var8 = {};
                var11 = 8;
                var10 = var12[var11];
                var10 = var15.bind(var4)(var10);
                var14 = var10.intl;
                var13 = var14.string;
                var10 = var12[var11];
                var10 = var15.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.jD1qzM;
                var10 = var13.bind(var14)(var10);
                var8.accessibilityLabel = var10;
                var10 = _closure1_slot1;
                var13 = 9;
                var13 = var12[var13];
                var13 = var10.bind(var4)(var13);
                var8.icon = var13;
                var8.onPress = var2;
                var2 = 3;
                var2 = var12[var2];
                var2 = var10.bind(var4)(var2);
                var2 = var2.spacing;
                var2 = var2.PX_16;
                var2 = var9 + var2;
                var2 = var2 + var6;
                var8.positionBottom = var2;
                var2 = undefined;
                if (!var3) {
                    _fun102157_ip = 279;
                    continue _fun102157
                }
            case 275:
                var2 = _closure1_slot5;
            case 279:
                var8.positionRight = var2;
                var3 = _closure1_slot6;
                var10 = _closure1_slot0;
                var6 = _closure1_slot2;
                if (var0) {
                    _fun102157_ip = 337;
                    continue _fun102157
                }
            case 299:
                var0 = 11;
                var0 = var6[var0];
                var0 = var10.bind(var4)(var0);
                var1 = var0.FloatingActionButton;
                var0 = {};
                var17 = var0;
                var16 = var8;
                var2 = copyDataProperties(var17, var16);
                var0 = var3.bind(var4)(var1, var0);
                _fun102157_ip = 445;
                continue _fun102157;
            case 337:
                var1 = 10;
                var1 = var6[var1];
                var1 = var10.bind(var4)(var1);
                var2 = var1.CollapsibleFloatingActionButton;
                var1 = {};
                var17 = var1;
                var16 = var8;
                var8 = copyDataProperties(var17, var16);
                var8 = var6[var11];
                var8 = var10.bind(var4)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var6 = var6[var11];
                var6 = var10.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6["6Urw1t"];
                var8 = var8.bind(var9)(var6);
                var6 = 'text';
                var1[var6] = var8;
                var6 = undefined;
                if (!var7) {
                    _fun102157_ip = 430;
                    continue _fun102157
                }
            case 427:
                var6 = var5;
            case 430:
                var5 = 'state';
                var1[var5] = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 445:
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/messages/MessagesNewMessageWidget.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.MESSAGES_NEW_MESSAGE_WIDGET_HEIGHT = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 13121, 33, 671, 5181, 12150, 3873, 13270, 1234, 13271, 6985, 6992, 2]);