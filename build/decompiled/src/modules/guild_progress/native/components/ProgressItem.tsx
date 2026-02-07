// modules/guild_progress/native/components/ProgressItem.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var9 = {};
    var3 = 8;
    var9.marginBottom = var3;
    var6.formCTAContainer = var9;
    var9 = {};
    var10 = 5;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.CARD_BACKGROUND_DEFAULT;
    var9.backgroundColor = var10;
    var6.formCTA = var9;
    var9 = {};
    var10 = '100%';
    var9.width = var10;
    var6.formCTAFullWidth = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot7 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_progress/native/components/ProgressItem.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun81107: for (var _fun81107_ip = 0;;) switch (_fun81107_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.title;
                var10 = var1.source;
                var11 = var1.onPress;
                var _closure2_slot0 = var11;
                var6 = var1.isCompleted;
                var _closure2_slot1 = var6;
                var7 = var1.description;
                var12 = var1.analyticsSetupType;
                var _closure2_slot2 = var12;
                var13 = var1.analyticsAction;
                var _closure2_slot3 = var13;
                var8 = var1.renderEndComponent;
                var15 = var1.fullWidth;
                var1 = _closure1_slot7;
                var3 = undefined;
                var14 = var1.bind(var3)();
                var5 = _closure1_slot3;
                var2 = var5.useCallback;
                var1 = new Array(4);
                var1[0] = var13;
                var1[1] = var12;
                var1[2] = var11;
                var1[3] = var6;
                var0 = function() { // Environment: var0
                    _fun81108: for (var _fun81108_ip = 0;;) switch (_fun81108_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun81108_ip = 24;
                                continue _fun81108
                            }
                        case 16:
                            var2 = _closure2_slot2;
                            var1 = var3 != var2;
                        case 24:
                            if (!var1) {
                                _fun81108_ip = 104;
                                continue _fun81108
                            }
                        case 27:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 6;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.trackWithMetadata;
                            var1 = _closure1_slot5;
                            var2 = var1.SERVER_SETUP_CTA_CLICKED;
                            var1 = {};
                            var5 = _closure2_slot2;
                            var1.setup_type = var5;
                            var5 = _closure2_slot3;
                            var1.action = var5;
                            var5 = _closure2_slot1;
                            var1.action_completed = var5;
                            var1 = var3.bind(var4)(var2, var1);
                        case 104:
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var11 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var5 = var14.formCTAContainer;
                var0.style = var5;
                var5 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 7;
                var4 = var12[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.FormCTA;
                var4 = {};
                var12 = 'row-button';
                var4.variant = var12;
                var13 = var14.formCTA;
                var12 = new Array(2);
                var12[0] = var13;
                var13 = undefined;
                if (!var15) {
                    _fun81107_ip = 209;
                    continue _fun81107
                }
            case 203:
                var13 = var14.formCTAFullWidth;
            case 209:
                var12[1] = var13;
                var4.style = var12;
                var4.onPress = var11;
                var4.iconSource = var10;
                var4.title = var9;
                var4.subtitle = var7;
                var4.completed = var6;
                var6 = null;
                var9 = var6 == var8;
                var7 = undefined;
                if (var9) {
                    _fun81107_ip = 255;
                    continue _fun81107
                }
            case 251:
                var7 = var8.bind(var3)();
            case 255:
                var8 = var6 != var7;
                var6 = null;
                if (!var8) {
                    _fun81107_ip = 267;
                    continue _fun81107
                }
            case 264:
                var6 = var7;
            case 267:
                var4.trailing = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 4302, 5430, 2]);