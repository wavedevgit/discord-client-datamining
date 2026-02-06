// modules/collectibles/native/OrbsBadgeCoachmark.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function() {
        var0 = _closure1_slot7;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var7.coachmarkImageContainer;
        var0.style = var4;
        var6 = _closure1_slot6;
        var5 = _closure1_slot5;
        var4 = {};
        var8 = {};
        var10 = _closure1_slot1;
        var11 = _closure1_slot2;
        var9 = 4;
        var9 = var11[var9];
        var9 = var10.bind(var3)(var9);
        var8.uri = var9;
        var4.source = var8;
        var7 = var7.coachmarkImage;
        var4.style = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot8 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var3 = var3.Image;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.coachmarkImageContainer = var8;
    var8 = {
        'width': 80,
        'height': 80
    };
    var3.coachmarkImage = var8;
    var8 = {};
    var9 = -10;
    var8.marginBottom = var9;
    var3.coachmarkDescription = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/OrbsBadgeCoachmark.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var3 = arg0;
        var4 = var3.badgeRef;
        var0 = null;
        var2 = Object.create(var0);
        var1 = 0;
        var2.badgeRef = var1;
        var8 = {};
        var7 = var3;
        var6 = var2;
        var3 = copyDataProperties(var8, var7, var6);
        var5 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var5.bind(var1)(var2);
        var1 = var2.useCoachmark;
        var1 = var1.bind(var2)(var4, var3);
        return var0;
    };
    var2.default = var3;
    var1 = function arg0() {
        _fun59801: for (var _fun59801_ip = 0;;) switch (_fun59801_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.disabled;
                var _closure2_slot0 = var1;
                var4 = _closure1_slot7;
                var3 = undefined;
                var5 = var4.bind(var3)();
                var _closure2_slot1 = var5;
                var4 = _closure1_slot3;
                var3 = var4.useMemo;
                var2 = new Array(2);
                var2[0] = var1;
                var5 = var5.coachmarkDescription;
                var2[1] = var5;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 5;
                    var4 = var8[var3];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var7.bind(var6)(var3);
                    var3 = var3.t;
                    var3 = var3["4ivm+P"];
                    var3 = var4.bind(var5)(var3);
                    var0.title = var3;
                    var5 = _closure1_slot6;
                    var4 = _closure1_slot4;
                    var3 = {};
                    var7 = _closure2_slot1;
                    var7 = var7.coachmarkDescription;
                    var3.style = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var0.description = var3;
                    var3 = 'bottom';
                    var0.position = var3;
                    var2 = _closure2_slot0;
                    var2 = !var2;
                    var0.visible = var2;
                    var2 = function() {
                        _fun59803: for (var _fun59803_ip = 0;;) switch (_fun59803_ip) {
                            case 0:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 6;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.getRootNavigationRef;
                                var3 = var1.bind(var2)();
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun59803_ip = 74;
                                    continue _fun59803
                                }
                            case 41:
                                var1 = var3.isReady;
                                var1 = var1.bind(var3)();
                                if (!var1) {
                                    _fun59803_ip = 74;
                                    continue _fun59803
                                }
                            case 54:
                                var2 = var3.setParams;
                                var1 = {};
                                var1.showOrbsBadgeCoachmark = var0;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            case 74:
                                var0 = false;
                                return var0;
                        }
                    };
                    var0.onDismiss = var2;
                    var1 = function() {
                        var3 = _closure1_slot6;
                        var2 = _closure1_slot8;
                        var1 = undefined;
                        var0 = {};
                        var0 = var3.bind(var1)(var2, var0);
                        return var0;
                    };
                    var0.renderImgComponent = var1;
                    return var0;
                };
                var2 = var3.bind(var4)(var0, var2);
                var0 = null;
                if (var1) {
                    _fun59801_ip = 83;
                    continue _fun59801
                }
            case 74:
                var1 = {};
                var1.props = var2;
                var0 = var1;
            case 83:
                return var0;
        }
    };
    var2.useOrbsBadgeCoachmark = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 7400, 1234, 3922, 7044, 2]);