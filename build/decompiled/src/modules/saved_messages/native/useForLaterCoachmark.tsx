// modules/saved_messages/native/useForLaterCoachmark.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: CoachmarkImg, environment: var1
        var0 = _closure1_slot9;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var2 = _closure1_slot7;
        var1 = _closure1_slot5;
        var0 = {};
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var5 = 7;
        var5 = var7[var5];
        var5 = var6.bind(var3)(var5);
        var0.source = var5;
        var4 = var4.imageContainer;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Image;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DismissibleContent;
    var3 = var3.FOR_LATER_NOTIFICATIONS_COACHMARK;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'width': 100,
        'height': 80
    };
    var3.imageContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/saved_messages/native/useForLaterCoachmark.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useForLaterCoachmark, environment: var1
        _fun103688: for (var _fun103688_ip = 0;;) switch (_fun103688_ip) {
            case 0:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 8;
                var0 = var3[var0];
                var3 = undefined;
                var5 = var2.bind(var3)(var0);
                var2 = var5.useExperiment;
                var0 = {};
                var6 = 'forLaterCoachmark';
                var0.location = var6;
                var0 = var2.bind(var5)(var0);
                var0 = var0.enabled;
                if (var0) {
                    _fun103688_ip = 64;
                    continue _fun103688
                }
            case 58:
                var8 = new Array(0);
                _fun103688_ip = 79;
                continue _fun103688;
            case 64:
                var2 = _closure1_slot8;
                var0 = new Array(1);
                var0[0] = var2;
                var8 = var0;
            case 79:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 9;
                var0 = var5[var0];
                var7 = var2.bind(var3)(var0);
                var6 = var7.useSelectedDismissibleContent;
                var0 = true;
                var7 = var6.bind(var7)(var8, var3, var0);
                var6 = _closure1_slot3;
                var0 = 2;
                var6 = var6.bind(var3)(var7, var0);
                var0 = 0;
                var8 = var6[var0];
                var _closure2_slot0 = var8;
                var0 = 1;
                var0 = var6[var0];
                var _closure2_slot1 = var0;
                var7 = _closure1_slot4;
                var6 = var7.useMemo;
                var4 = new Array(2);
                var4[0] = var0;
                var4[1] = var8;
                var1 = function() { // Environment: var1
                    var0 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 10;
                    var4 = var8[var3];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var4);
                    var9 = var4.intl;
                    var5 = var9.string;
                    var4 = var8[var3];
                    var4 = var7.bind(var6)(var4);
                    var4 = var4.t;
                    var4 = var4.qPbFK2;
                    var4 = var5.bind(var9)(var4);
                    var0.title = var4;
                    var4 = var8[var3];
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.t;
                    var3 = var3.URrJq1;
                    var3 = var4.bind(var5)(var3);
                    var0.description = var3;
                    var3 = 'bottom';
                    var0.position = var3;
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot8;
                    var2 = var3 === var2;
                    var0.visible = var2;
                    var2 = function() { // Original name: onDismiss, environment: var1
                        var2 = _closure2_slot1;
                        var0 = _closure1_slot6;
                        var1 = var0.USER_DISMISS;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0.onDismiss = var2;
                    var1 = function() { // Original name: renderImgComponent, environment: var1
                        var3 = _closure1_slot7;
                        var2 = _closure1_slot10;
                        var1 = undefined;
                        var0 = {};
                        var0 = var3.bind(var1)(var2, var0);
                        return var0;
                    };
                    var0.renderImgComponent = var1;
                    return var0;
                };
                var4 = var6.bind(var7)(var1, var4);
                var1 = 11;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.useCoachmark;
                var1 = arg0;
                var1 = var2.bind(var3)(var1, var4);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1369, 33, 1358, 1297, 7586, 8696, 5918, 1234, 6979, 2]);