// modules/app_launcher/native/screens/application_view/app/AppDetailsOverflowMenu.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/screens/application_view/app/AppDetailsOverflowMenu.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun108019: for (var _fun108019_ip = 0;;) switch (_fun108019_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.application;
                var _closure2_slot0 = var7;
                var3 = var0.onAddAppMenuClick;
                var _closure2_slot1 = var3;
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 2;
                var0 = var8[var0];
                var4 = undefined;
                var6 = var2.bind(var4)(var0);
                var0 = var6.getInstallAppProps;
                var7 = var0.bind(var6)(var7);
                var _closure2_slot2 = var7;
                var6 = new Array(0);
                var0 = 3;
                var0 = var8[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.canInstallApplication;
                var0 = var0.bind(var2)(var7);
                if (!var0) {
                    _fun108019_ip = 100;
                    continue _fun108019
                }
            case 94:
                var2 = null;
                var0 = var2 != var3;
            case 100:
                if (!var0) {
                    _fun108019_ip = 207;
                    continue _fun108019
                }
            case 103:
                var2 = var6.push;
                var0 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 4;
                var9 = var8[var3];
                var9 = var7.bind(var4)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var3 = var8[var3];
                var3 = var7.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3.NgXl3C;
                var3 = var9.bind(var10)(var3);
                var0.label = var3;
                var3 = function() {
                    var2 = _closure2_slot1;
                    var1 = {};
                    var0 = _closure2_slot2;
                    var1.installAppProps = var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.action = var3;
                var3 = 5;
                var3 = var8[var3];
                var3 = var7.bind(var4)(var3);
                var3 = var3.CirclePlusIcon;
                var0.IconComponent = var3;
                var0 = var2.bind(var6)(var0);
            case 207:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 6;
                var0 = var3[var0];
                var0 = var2.bind(var4)(var0);
                var2 = var0.DeveloperMode;
                var0 = var2.getSetting;
                var0 = var0.bind(var2)();
                if (!var0) {
                    _fun108019_ip = 352;
                    continue _fun108019
                }
            case 246:
                var2 = var6.push;
                var0 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 4;
                var9 = var8[var3];
                var9 = var7.bind(var4)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var3 = var8[var3];
                var3 = var7.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3["+NP/b2"];
                var3 = var9.bind(var10)(var3);
                var0.label = var3;
                var3 = function() {
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 7;
                    var1 = var3[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.copy;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var4.bind(var5)(var1);
                    var1 = 8;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.presentIdCopied;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var0.action = var3;
                var3 = 9;
                var3 = var8[var3];
                var3 = var7.bind(var4)(var3);
                var3 = var3.IdIcon;
                var0.IconComponent = var3;
                var0 = var2.bind(var6)(var0);
            case 352:
                var3 = var6.length;
                var2 = 0;
                var0 = null;
                if (!(var2 !== var3)) {
                    _fun108019_ip = 418;
                    continue _fun108019
                }
            case 365:
                var3 = _closure1_slot3;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 10;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.ContextMenu;
                var1 = {};
                var1.items = var6;
                var5 = function arg0() {
                    var2 = arg0;
                    var6 = var2.ref;
                    var0 = null;
                    var1 = Object.create(var0);
                    var0 = 0;
                    var1.ref = var0;
                    var11 = {};
                    var10 = var2;
                    var9 = var1;
                    var10 = copyDataProperties(var11, var10, var9);
                    var3 = _closure1_slot3;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 11;
                    var0 = var8[var0];
                    var2 = undefined;
                    var0 = var7.bind(var2)(var0);
                    var1 = var0.IconButton;
                    var0 = {
                        'ref': null,
                        'size': 'sm',
                        'variant': 'secondary-overlay'
                    };
                    var0.ref = var6;
                    var6 = _closure1_slot1;
                    var5 = 12;
                    var5 = var8[var5];
                    var5 = var6.bind(var2)(var5);
                    var0.icon = var5;
                    var11 = var0;
                    var4 = copyDataProperties(var11, var10);
                    var4 = 4;
                    var5 = var8[var4];
                    var5 = var7.bind(var2)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var2)(var4);
                    var4 = var4.t;
                    var4 = var4.PdRCRg;
                    var5 = var5.bind(var6)(var4);
                    var4 = 'accessibilityLabel';
                    var0[var4] = var5;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 418:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 4674, 7837, 1234, 10933, 1348, 5296, 3149, 7754, 8972, 7535, 8197, 2]);