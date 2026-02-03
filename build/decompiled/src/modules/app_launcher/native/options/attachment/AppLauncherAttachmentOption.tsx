// modules/app_launcher/native/options/attachment/AppLauncherAttachmentOption.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var11 = var0.uri;
        var10 = var0.isImage;
        var9 = var0.isVideo;
        var0 = _closure1_slot8;
        var3 = undefined;
        var5 = var0.bind(var3)();
        var0 = var5.selectedImage;
        var8 = var0.width;
        var6 = var0.height;
        var2 = _closure1_slot7;
        var1 = _closure1_slot1;
        var7 = _closure1_slot2;
        var0 = 7;
        var0 = var7[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var0.uri = var11;
        var0.isImage = var10;
        var0.isVideo = var9;
        var0.width = var8;
        var0.height = var6;
        var5 = var5.selectedImage;
        var0.style = var5;
        var6 = _closure1_slot7;
        var5 = _closure1_slot0;
        var4 = 8;
        var4 = var7[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.FileIcon;
        var4 = {};
        var7 = 'sm';
        var4.size = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.defaultPreview = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot9 = var0;
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
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DraftType;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 6;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_TEXT_DEFAULT;
    var8.tintColor = var11;
    var3.imageIcon = var8;
    var8 = {
        'justifyContent': 'center',
        'alignItems': 'center',
        'backgroundColor': null,
        'width': 32,
        'height': 32
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_SUBTLE;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var8.borderRadius = var11;
    var3.imageIconWrapper = var8;
    var8 = {
        'width': 32,
        'height': 32
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.sm;
    var8.borderRadius = var9;
    var3.selectedImage = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/options/attachment/AppLauncherAttachmentOption.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun108163: for (var _fun108163_ip = 0;;) switch (_fun108163_ip) {
            case 0:
                var2 = arg0;
                var8 = var2.option;
                var _closure2_slot0 = var8;
                var1 = var2.channel;
                var _closure2_slot1 = var1;
                var12 = var2.style;
                var4 = var2.autoFocus;
                var9 = var2.hasError;
                var5 = var2.onPress;
                var2 = var2.onSelectAttachment;
                var _closure2_slot2 = var2;
                var6 = _closure1_slot8;
                var3 = undefined;
                var11 = var6.bind(var3)();
                var10 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = 9;
                var6 = var13[var6];
                var14 = var10.bind(var3)(var6);
                var13 = var14.useStateFromStores;
                var6 = _closure1_slot6;
                var10 = new Array(1);
                var10[0] = var6;
                var6 = function() { // Environment: var0
                    var4 = _closure1_slot6;
                    var3 = var4.getUpload;
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var1 = _closure2_slot0;
                    var1 = var1.name;
                    var0 = _closure1_slot5;
                    var0 = var0.ApplicationLauncherCommand;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var10 = var13.bind(var14)(var10, var6);
                var _closure2_slot3 = var10;
                var13 = _closure1_slot3;
                var14 = var13.useEffect;
                var1 = var1.id;
                var6 = new Array(2);
                var6[0] = var1;
                var1 = var8.name;
                var6[1] = var1;
                var1 = function() { // Environment: var0
                    var0 = function() { // Environment: var0
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 10;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.remove;
                        var2 = _closure2_slot1;
                        var2 = var2.id;
                        var1 = _closure2_slot0;
                        var1 = var1.name;
                        var0 = _closure1_slot5;
                        var0 = var0.ApplicationLauncherCommand;
                        var0 = var3.bind(var4)(var2, var1, var0);
                        return var0;
                    };
                    return var0;
                };
                var1 = var14.bind(var13)(var1, var6);
                var1 = var13.useRef;
                var1 = var1.bind(var13)(var2);
                var _closure2_slot4 = var1;
                var2 = var13.useEffect;
                var1 = function() { // Environment: var0
                    var1 = _closure2_slot4;
                    var0 = _closure2_slot2;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var1 = var2.bind(var13)(var1);
                var2 = var13.useEffect;
                var6 = null;
                var1 = var6 == var10;
                var14 = undefined;
                if (var1) {
                    _fun108163_ip = 220;
                    continue _fun108163
                }
            case 214:
                var14 = var10.filename;
            case 220:
                var1 = new Array(1);
                var1[0] = var14;
                var0 = function() { // Environment: var0
                    _fun108168: for (var _fun108168_ip = 0;;) switch (_fun108168_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var3 = null;
                            var4 = var3 == var0;
                            var0 = undefined;
                            var2 = undefined;
                            if (var4) {
                                _fun108168_ip = 30;
                                continue _fun108168
                            }
                        case 20:
                            var4 = _closure2_slot3;
                            var2 = var4.filename;
                        case 30:
                            if (!(var3 != var2)) {
                                _fun108168_ip = 71;
                                continue _fun108168
                            }
                        case 34:
                            var2 = _closure2_slot4;
                            var2 = var2.current;
                            if (!(var3 != var2)) {
                                _fun108168_ip = 71;
                                continue _fun108168
                            }
                        case 47:
                            var3 = _closure2_slot4;
                            var2 = var3.current;
                            var1 = _closure2_slot3;
                            var1 = var1.filename;
                            var1 = var2.bind(var3)(var1);
                        case 71:
                            return var0;
                    }
                };
                var0 = var2.bind(var13)(var0, var1);
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = 11;
                var0 = var13[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.style = var12;
                var0.hasError = var9;
                var0.option = var8;
                var8 = var6 != var10;
                var0.selected = var8;
                var9 = var6 != var10;
                var8 = undefined;
                if (!var9) {
                    _fun108163_ip = 305;
                    continue _fun108163
                }
            case 299:
                var8 = var10.filename;
            case 305:
                var0.selectedItemName = var8;
                if (!(var6 != var10)) {
                    _fun108163_ip = 361;
                    continue _fun108163
                }
            case 314:
                var6 = var10.item;
                var8 = var6.platform;
                var9 = _closure1_slot0;
                var12 = _closure1_slot2;
                var6 = 12;
                var6 = var12[var6];
                var6 = var9.bind(var3)(var6);
                var6 = var6.UploadPlatform;
                var6 = var6.REACT_NATIVE;
                if (!(var8 !== var6)) {
                    _fun108163_ip = 443;
                    continue _fun108163
                }
            case 361:
                var9 = _closure1_slot7;
                var8 = _closure1_slot4;
                var6 = {};
                var11 = var11.imageIconWrapper;
                var6.style = var11;
                var13 = _closure1_slot7;
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var11 = 13;
                var11 = var14[var11];
                var11 = var12.bind(var3)(var11);
                var12 = var11.ImageFileIcon;
                var11 = {
                    'size': 'sm',
                    'color': 'interactive-text-default'
                };
                var11 = var13.bind(var3)(var12, var11);
                var6.children = var11;
                var6 = var9.bind(var3)(var8, var6);
                _fun108163_ip = 495;
                continue _fun108163;
            case 443:
                var9 = _closure1_slot7;
                var8 = _closure1_slot9;
                var7 = {};
                var11 = var10.item;
                var11 = var11.uri;
                var7.uri = var11;
                var11 = var10.isImage;
                var7.isImage = var11;
                var10 = var10.isVideo;
                var7.isVideo = var10;
                var6 = var9.bind(var3)(var8, var7);
            case 495:
                var0.leading = var6;
                var0.onPress = var5;
                var0.autoFocus = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4001, 4000, 33, 1297, 671, 8833, 13765, 566, 7607, 13963, 4006, 9608, 2]);