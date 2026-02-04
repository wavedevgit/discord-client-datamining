// modules/avatar/native/components/TouchableUploadAvatar.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'display': 'flex',
        'paddingTop': 24
    };
    var3.avatarContainer = var8;
    var8 = {};
    var10 = 4;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.INTERACTIVE_TEXT_DEFAULT;
    var8.tintColor = var9;
    var9 = 96;
    var8.width = var9;
    var3.defaultLogoStyle = var8;
    var8 = {
        'width': 200,
        'height': 200,
        'borderRadius': 100,
        'position': 'relative'
    };
    var3.uploadedAvatarStyle = var8;
    var8 = {
        'borderColor': null,
        'borderStyle': 'dashed',
        'borderWidth': 2,
        'borderRadius': null,
        'width': 200,
        'height': 200,
        'justifyContent': 'center',
        'alignItems': 'center',
        'position': 'relative',
        'overflow': 'visible'
    };
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BORDER_MUTED;
    var8.borderColor = var9;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.round;
    var8.borderRadius = var9;
    var9 = 'center';
    var3.avatarWrapper = var8;
    var8 = {
        'backgroundColor': null,
        'borderRadius': null,
        'tintColor': null,
        'position': 'absolute',
        'right': 10,
        'top': 10,
        'width': 40,
        'height': 40,
        'flex': 1,
        'justifyContent': 'center'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BRAND;
    var8.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var8.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var8.tintColor = var12;
    var3.uploadAvatarWrapper = var8;
    var8 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.WHITE;
    var8.tintColor = var10;
    var8.alignSelf = var9;
    var3.uploadAvatarIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/avatar/native/components/TouchableUploadAvatar.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun113885: for (var _fun113885_ip = 0;;) switch (_fun113885_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.avatarSource;
                var0 = var2.showPendingAvatar;
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun113885_ip = 23;
                    continue _fun113885
                }
            case 21:
                var0 = false;
            case 23:
                var6 = var2.onSelectAvatar;
                var2 = _closure1_slot6;
                var12 = var2.bind(var3)();
                if (!var0) {
                    _fun113885_ip = 52;
                    continue _fun113885
                }
            case 43:
                var2 = null;
                var10 = var1;
                if (!(var2 == var10)) {
                    _fun113885_ip = 72;
                    continue _fun113885
                }
            case 52:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 5;
                var2 = var5[var2];
                var10 = var4.bind(var3)(var2);
            case 72:
                if (!var0) {
                    _fun113885_ip = 81;
                    continue _fun113885
                }
            case 75:
                var0 = null;
                if (!(var0 == var1)) {
                    _fun113885_ip = 89;
                    continue _fun113885
                }
            case 81:
                var11 = var12.defaultLogoStyle;
                _fun113885_ip = 95;
                continue _fun113885;
            case 89:
                var11 = var12.uploadedAvatarStyle;
            case 95:
                var2 = _closure1_slot4;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var12.avatarContainer;
                var0.style = var4;
                var13 = _closure1_slot0;
                var15 = _closure1_slot2;
                var4 = 6;
                var4 = var15[var4];
                var4 = var13.bind(var3)(var4);
                var5 = var4.PressableOpacity;
                var4 = {};
                var4.onPress = var6;
                var6 = 'button';
                var4.accessibilityRole = var6;
                var6 = 7;
                var7 = var15[var6];
                var7 = var13.bind(var3)(var7);
                var9 = var7.intl;
                var7 = var9.string;
                var6 = var15[var6];
                var6 = var13.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6["70lEQe"];
                var6 = var7.bind(var9)(var6);
                var4.accessibilityLabel = var6;
                var7 = _closure1_slot5;
                var6 = {};
                var9 = var12.avatarWrapper;
                var6.style = var9;
                var14 = _closure1_slot1;
                var8 = 8;
                var8 = var15[var8];
                var9 = var14.bind(var3)(var8);
                var8 = {};
                var13 = 'contain';
                var8.resizeMode = var13;
                var8.style = var11;
                var8.source = var10;
                var9 = var2.bind(var3)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = {};
                var10 = var12.uploadAvatarWrapper;
                var9.style = var10;
                var13 = 9;
                var10 = var15[var13];
                var11 = var14.bind(var3)(var10);
                var10 = {};
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.Sizes;
                var13 = var13.MEDIUM;
                var10.size = var13;
                var13 = 10;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var10.source = var13;
                var12 = var12.uploadAvatarIcon;
                var10.style = var12;
                var10 = var2.bind(var3)(var11, var10);
                var9.children = var10;
                var9 = var2.bind(var3)(var1, var9);
                var8[1] = var9;
                var6.children = var8;
                var6 = var7.bind(var3)(var1, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 10510, 4902, 1234, 4704, 4086, 11418, 2]);