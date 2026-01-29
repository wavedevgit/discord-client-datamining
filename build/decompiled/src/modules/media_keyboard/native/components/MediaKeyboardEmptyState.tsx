// modules/media_keyboard/native/components/MediaKeyboardEmptyState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var3 = function(arg0) { // Original name: MediaKeyboardEmptyState, environment: var1
        var0 = arg0;
        var10 = var0.actionIcon;
        var9 = var0.actionLabel;
        var8 = var0.actionPress;
        var11 = var0.imageSource;
        var14 = var0.label;
        var0 = _closure1_slot8;
        var3 = undefined;
        var15 = var0.bind(var3)();
        var2 = _closure1_slot7;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var15.container;
        var0.style = var4;
        var7 = _closure1_slot6;
        var6 = _closure1_slot3;
        var4 = {};
        var4.source = var11;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(3);
        var4[0] = var6;
        var13 = _closure1_slot6;
        var6 = _closure1_slot0;
        var11 = _closure1_slot2;
        var7 = 6;
        var7 = var11[var7];
        var7 = var6.bind(var3)(var7);
        var12 = var7.Text;
        var7 = {
            'variant': 'text-sm/semibold',
            'color': 'text-muted'
        };
        var15 = var15.label;
        var7.style = var15;
        var7.children = var14;
        var7 = var13.bind(var3)(var12, var7);
        var4[1] = var7;
        var7 = _closure1_slot6;
        var5 = 7;
        var5 = var11[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Button;
        var5 = {};
        var5.icon = var10;
        var10 = 'sm';
        var5.size = var10;
        var5.text = var9;
        var5.onPress = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot9 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.Image;
    var _closure1_slot3 = var7;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.NativePermissionStatus;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9.marginHorizontal = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_32;
    var9.marginVertical = var12;
    var12 = 'center';
    var9.justifyContent = var12;
    var9.alignItems = var12;
    var4.container = var9;
    var9 = {};
    var9.textAlign = var12;
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9.marginVertical = var10;
    var4.label = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_keyboard/native/components/MediaKeyboardEmptyState.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function(arg0) { // Original name: getMediaEmptyStateComponentOrNull, environment: var1
        _fun75532: for (var _fun75532_ip = 0;;) switch (_fun75532_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.photoPermissionStatus;
                var1 = var0.photosEmpty;
                var8 = var0.onPressCamera;
                var9 = var0.onPressLimitedPicker;
                var7 = var0.onPressPrivacySettings;
                var0 = _closure1_slot5;
                var0 = var0.DENIED;
                if (!(var2 !== var0)) {
                    _fun75532_ip = 500;
                    continue _fun75532
                }
            case 53:
                var0 = _closure1_slot5;
                var0 = var0.RESTRICTED;
                if (!(var2 !== var0)) {
                    _fun75532_ip = 500;
                    continue _fun75532
                }
            case 70:
                var5 = undefined;
                var0 = undefined;
                if (!var1) {
                    _fun75532_ip = 495;
                    continue _fun75532
                }
            case 80:
                var1 = _closure1_slot5;
                var1 = var1.LIMITED;
                if (!(var2 !== var1)) {
                    _fun75532_ip = 299;
                    continue _fun75532
                }
            case 97:
                var3 = _closure1_slot6;
                var2 = _closure1_slot9;
                var1 = {};
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 11;
                var4 = var12[var4];
                var4 = var11.bind(var5)(var4);
                var10 = var4.CameraIcon;
                var4 = {
                    'color': 'white',
                    'size': 'sm'
                };
                var4 = var3.bind(var5)(var10, var4);
                var1.actionIcon = var4;
                var4 = 9;
                var10 = var12[var4];
                var10 = var11.bind(var5)(var10);
                var14 = var10.intl;
                var13 = var14.string;
                var10 = var12[var4];
                var10 = var11.bind(var5)(var10);
                var10 = var10.t;
                var10 = var10.tpoWUd;
                var10 = var13.bind(var14)(var10);
                var1.actionLabel = var10;
                var1.actionPress = var8;
                var10 = _closure1_slot1;
                var8 = 12;
                var8 = var12[var8];
                var8 = var10.bind(var5)(var8);
                var1.imageSource = var8;
                var8 = var12[var4];
                var8 = var11.bind(var5)(var8);
                var10 = var8.intl;
                var8 = var10.string;
                var4 = var12[var4];
                var4 = var11.bind(var5)(var4);
                var4 = var4.t;
                var4 = var4.YOvRBZ;
                var4 = var8.bind(var10)(var4);
                var1.label = var4;
                var1 = var3.bind(var5)(var2, var1);
                _fun75532_ip = 492;
                continue _fun75532;
            case 299:
                var4 = _closure1_slot6;
                var3 = _closure1_slot9;
                var2 = {};
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 8;
                var8 = var12[var8];
                var8 = var11.bind(var5)(var8);
                var10 = var8.SettingsIcon;
                var8 = {
                    'color': 'white',
                    'size': 'sm'
                };
                var8 = var4.bind(var5)(var10, var8);
                var2.actionIcon = var8;
                var8 = 9;
                var10 = var12[var8];
                var10 = var11.bind(var5)(var10);
                var14 = var10.intl;
                var13 = var14.string;
                var10 = var12[var8];
                var10 = var11.bind(var5)(var10);
                var10 = var10.t;
                var10 = var10.JuXTi6;
                var10 = var13.bind(var14)(var10);
                var2.actionLabel = var10;
                var2.actionPress = var9;
                var10 = _closure1_slot1;
                var9 = 10;
                var9 = var12[var9];
                var9 = var10.bind(var5)(var9);
                var2.imageSource = var9;
                var9 = var12[var8];
                var9 = var11.bind(var5)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var5)(var8);
                var8 = var8.t;
                var8 = var8["5g7NcN"];
                var8 = var9.bind(var10)(var8);
                var2.label = var8;
                var1 = var4.bind(var5)(var3, var2);
            case 492:
                var0 = var1;
            case 495:
                _fun75532_ip = 699;
                continue _fun75532;
            case 500:
                var4 = _closure1_slot6;
                var3 = _closure1_slot9;
                var2 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 8;
                var5 = var9[var1];
                var1 = undefined;
                var5 = var8.bind(var1)(var5);
                var10 = var5.SettingsIcon;
                var5 = {
                    'color': 'white',
                    'size': 'sm'
                };
                var5 = var4.bind(var1)(var10, var5);
                var2.actionIcon = var5;
                var5 = 9;
                var10 = var9[var5];
                var10 = var8.bind(var1)(var10);
                var12 = var10.intl;
                var11 = var12.string;
                var10 = var9[var5];
                var10 = var8.bind(var1)(var10);
                var10 = var10.t;
                var10 = var10["457oeG"];
                var10 = var11.bind(var12)(var10);
                var2.actionLabel = var10;
                var2.actionPress = var7;
                var7 = _closure1_slot1;
                var6 = 10;
                var6 = var9[var6];
                var6 = var7.bind(var1)(var6);
                var2.imageSource = var6;
                var6 = var9[var5];
                var6 = var8.bind(var1)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5["8p9jGu"];
                var5 = var6.bind(var7)(var5);
                var2.label = var5;
                var0 = var4.bind(var1)(var3, var2);
            case 699:
                return var0;
        }
    };
    var2.getMediaEmptyStateComponentOrNull = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3967, 33, 1297, 671, 3895, 4037, 5326, 1234, 9544, 9531, 9545, 2]);