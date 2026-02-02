// uikit-native/AttachmentPreview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
    var1 = function arg0() {
        var0 = arg0;
        var7 = var0.fileName;
        var _closure2_slot0 = var7;
        var2 = _closure1_slot8;
        var3 = undefined;
        var5 = var2.bind(var3)();
        var6 = _closure1_slot3;
        var4 = var6.useMemo;
        var2 = new Array(1);
        var2[0] = var7;
        var1 = function() { // Environment: var1
            _fun70191: for (var _fun70191_ip = 0;;) switch (_fun70191_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 19;
                    var0 = var3[var0];
                    var3 = undefined;
                    var5 = var2.bind(var3)(var0);
                    var4 = var5.classifyFileName;
                    var0 = _closure2_slot0;
                    var2 = null;
                    var7 = var2 != var0;
                    var0 = '';
                    if (!var7) {
                        _fun70191_ip = 55;
                        continue _fun70191
                    }
                case 51:
                    var0 = _closure2_slot0;
                case 55:
                    var4 = var4.bind(var5)(var0);
                    var0 = _closure1_slot9;
                    var0 = var0[var4];
                    if (!(var2 == var0)) {
                        _fun70191_ip = 92;
                        continue _fun70191
                    }
                case 72:
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 16;
                    var1 = var4[var1];
                    var0 = var2.bind(var3)(var1);
                case 92:
                    return var0;
            }
        };
        var4 = var4.bind(var6)(var1, var2);
        var2 = _closure1_slot6;
        var1 = _closure1_slot4;
        var0 = {};
        var5 = var5.attachmentFileIcon;
        var0.style = var5;
        var0.source = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot11 = var1;
    var0 = function arg0() {
        _fun70192: for (var _fun70192_ip = 0;;) switch (_fun70192_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.fileName;
                var0 = _closure1_slot8;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var2 = /(?:\.([^.]+))?$/;
                var1 = var2.exec;
                var13 = null;
                var6 = var13 != var11;
                var4 = '';
                var0 = var4;
                if (!var6) {
                    _fun70192_ip = 61;
                    continue _fun70192
                }
            case 58:
                var0 = var11;
            case 61:
                var10 = var1.bind(var2)(var0);
                var2 = _closure1_slot7;
                var1 = _closure1_slot5;
                var0 = {};
                var6 = var13 != var11;
                if (!var6) {
                    _fun70192_ip = 87;
                    continue _fun70192
                }
            case 83:
                var6 = var4 !== var11;
            case 87:
                if (!var6) {
                    _fun70192_ip = 155;
                    continue _fun70192
                }
            case 90:
                var9 = _closure1_slot6;
                var7 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 20;
                var4 = var12[var4];
                var4 = var7.bind(var3)(var4);
                var7 = var4.Text;
                var4 = {
                    'style': null,
                    'ellipsizeMode': 'middle',
                    'lineClamp': 1,
                    'variant': 'text-xs/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var12 = var8.attachmentFileName;
                var4.style = var12;
                var4.children = var11;
                var6 = var9.bind(var3)(var7, var4);
            case 155:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot6;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 20;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'style': null,
                    'lineClamp': 1,
                    'variant': 'text-xs/medium',
                    'color': 'text-muted'
                };
                var8 = var8.attachmentFileName;
                var5.style = var8;
                var9 = 1;
                var11 = var13 != var10;
                var12 = 'UNKNOWN';
                var8 = var12;
                if (!var11) {
                    _fun70192_ip = 263;
                    continue _fun70192
                }
            case 235:
                var11 = var10[var9];
                var11 = var13 != var11;
                var8 = var12;
                if (!var11) {
                    _fun70192_ip = 263;
                    continue _fun70192
                }
            case 249:
                var10 = var10[var9];
                var9 = var10.toUpperCase;
                var8 = var9.bind(var10)();
            case 263:
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var8 = var0.fileName;
        var9 = var0.maxFileWidth;
        var7 = var0.borderRadius;
        var0 = _closure1_slot8;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var2 = _closure1_slot7;
        var1 = _closure1_slot5;
        var0 = {};
        var6 = var4.fileInfoAttachmentPreviewFile;
        var4 = new Array(2);
        var4[0] = var6;
        var6 = {};
        var6.maxWidth = var9;
        var6.borderRadius = var7;
        var4[1] = var6;
        var0.style = var4;
        var7 = _closure1_slot6;
        var6 = _closure1_slot11;
        var4 = {};
        var4.fileName = var8;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot6;
        var6 = _closure1_slot12;
        var5 = {};
        var5.fileName = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot13 = var0;
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
    var8 = var4.bind(var0)(var7);
    var _closure1_slot3 = var8;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.Image;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var11 = var5.bind(var0)(var4);
    var10 = var11.createStyles;
    var4 = {};
    var12 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'overflow': 'hidden',
        'borderRadius': null,
        'height': 75,
        'padding': 12,
        'flex': 1
    };
    var13 = 4;
    var7 = var6[var13];
    var7 = var9.bind(var0)(var7);
    var7 = var7.radii;
    var7 = var7.sm;
    var12.borderRadius = var7;
    var7 = 12;
    var13 = var6[var13];
    var13 = var9.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var12.gap = var13;
    var4.fileInfoAttachmentPreviewFile = var12;
    var12 = {
        'height': 32,
        'width': 24
    };
    var4.attachmentFileIcon = var12;
    var12 = {
        'paddingRight': 4,
        'paddingLeft': 4,
        'maxWidth': 136
    };
    var4.attachmentFileName = var12;
    var12 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var4.videoIcon = var12;
    var4 = var10.bind(var11)(var4);
    var _closure1_slot8 = var4;
    var4 = {};
    var10 = 5;
    var10 = var6[var10];
    var10 = var9.bind(var0)(var10);
    var4.archive = var10;
    var10 = 6;
    var10 = var6[var10];
    var10 = var9.bind(var0)(var10);
    var4.acrobat = var10;
    var10 = 7;
    var10 = var6[var10];
    var10 = var9.bind(var0)(var10);
    var4.ae = var10;
    var10 = 8;
    var10 = var6[var10];
    var10 = var9.bind(var0)(var10);
    var4.ai = var10;
    var10 = 9;
    var10 = var6[var10];
    var10 = var9.bind(var0)(var10);
    var4.audio = var10;
    var10 = 10;
    var10 = var6[var10];
    var10 = var9.bind(var0)(var10);
    var4.code = var10;
    var10 = 11;
    var10 = var6[var10];
    var10 = var9.bind(var0)(var10);
    var4.document = var10;
    var7 = var6[var7];
    var7 = var9.bind(var0)(var7);
    var4.image = var7;
    var7 = 13;
    var7 = var6[var7];
    var7 = var9.bind(var0)(var7);
    var4.photoshop = var7;
    var7 = 14;
    var7 = var6[var7];
    var7 = var9.bind(var0)(var7);
    var4.sketch = var7;
    var7 = 15;
    var7 = var6[var7];
    var7 = var9.bind(var0)(var7);
    var4.spreadsheet = var7;
    var7 = 16;
    var7 = var6[var7];
    var7 = var9.bind(var0)(var7);
    var4.unknown = var7;
    var7 = 17;
    var7 = var6[var7];
    var7 = var9.bind(var0)(var7);
    var4.video = var7;
    var7 = 18;
    var7 = var6[var7];
    var7 = var9.bind(var0)(var7);
    var4.webcode = var7;
    var _closure1_slot9 = var4;
    var7 = var8.memo;
    var4 = function(arg0) { // Environment: var3
        _fun70194: for (var _fun70194_ip = 0;;) switch (_fun70194_ip) {
            case 0:
                var3 = arg0;
                var5 = var3.uri;
                var2 = var3.width;
                var1 = var3.height;
                var0 = var3.borderRadius;
                var10 = var3.style;
                var3 = var3.fileName;
                var8 = {};
                var8.uri = var5;
                var8.width = var2;
                var8.height = var1;
                var11 = {};
                var11.width = var2;
                var11.height = var1;
                var11.borderRadius = var0;
                var0 = null;
                var1 = var0 != var3;
                if (!var1) {
                    _fun70194_ip = 79;
                    continue _fun70194
                }
            case 71:
                var0 = '';
                var1 = var0 !== var3;
            case 79:
                if (!var1) {
                    _fun70194_ip = 106;
                    continue _fun70194
                }
            case 82:
                var2 = /\.gif$/i;
                var0 = var2.test;
                var1 = var0.bind(var2)(var3);
            case 106:
                if (!var1) {
                    _fun70194_ip = 220;
                    continue _fun70194
                }
            case 109:
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 21;
                var0 = var0[var6];
                var4 = undefined;
                var3 = var3.bind(var4)(var0);
                var0 = var3.isIOS;
                var0 = var0.bind(var3)();
                if (!var0) {
                    _fun70194_ip = 164;
                    continue _fun70194
                }
            case 147:
                var7 = var5.startsWith;
                var3 = 'ph://';
                var0 = var7.bind(var5)(var3);
            case 164:
                if (var0) {
                    _fun70194_ip = 217;
                    continue _fun70194
                }
            case 167:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isAndroid;
                var2 = var2.bind(var3)();
                if (!var2) {
                    _fun70194_ip = 214;
                    continue _fun70194
                }
            case 197:
                var4 = var5.startsWith;
                var3 = 'content://';
                var2 = var4.bind(var5)(var3);
            case 214:
                var0 = var2;
            case 217:
                var1 = var0;
            case 220:
                var3 = _closure1_slot6;
                var2 = _closure1_slot5;
                var0 = {};
                var5 = new Array(3);
                var5[0] = var11;
                var5[1] = var10;
                var6 = {};
                var7 = 'hidden';
                var6.overflow = var7;
                var5[2] = var6;
                var0.style = var5;
                var7 = _closure1_slot6;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                if (var1) {
                    _fun70194_ip = 335;
                    continue _fun70194
                }
            case 279:
                var1 = 23;
                var1 = var6[var1];
                var9 = undefined;
                var4 = var5.bind(var9)(var1);
                var1 = {};
                var12 = new Array(2);
                var12[0] = var11;
                var12[1] = var10;
                var1.style = var12;
                var1.source = var8;
                var1.localImageSource = var8;
                var1 = var7.bind(var9)(var4, var1);
                var0.children = var1;
                var1 = var0;
                _fun70194_ip = 399;
                continue _fun70194;
            case 335:
                var4 = 22;
                var4 = var6[var4];
                var6 = undefined;
                var5 = var5.bind(var6)(var4);
                var4 = {};
                var9 = new Array(2);
                var9[0] = var11;
                var9[1] = var10;
                var4.style = var9;
                var4.source = var8;
                var8 = 'cover';
                var4.resizeMode = var8;
                var8 = true;
                var4.enableAnimation = var8;
                var4 = var7.bind(var6)(var5, var4);
                var0.children = var4;
                var1 = var0;
            case 399:
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/AttachmentPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun70195: for (var _fun70195_ip = 0;;) switch (_fun70195_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.uri;
                var0 = var1.isImage;
                var3 = var1.isVideo;
                var9 = var1.width;
                var4 = undefined;
                if (!(var9 === var4)) {
                    _fun70195_ip = 34;
                    continue _fun70195
                }
            case 31:
                var9 = 75;
            case 34:
                var8 = var1.height;
                if (!(var8 === var4)) {
                    _fun70195_ip = 46;
                    continue _fun70195
                }
            case 43:
                var8 = 75;
            case 46:
                var14 = var1.maxFileWidth;
                var5 = var1.fileName;
                var7 = var1.borderRadius;
                if (!(var7 === var4)) {
                    _fun70195_ip = 101;
                    continue _fun70195
                }
            case 67:
                var6 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 4;
                var2 = var11[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.radii;
                var7 = var2.sm;
            case 101:
                var2 = var1.showPlayOnVideoPreview;
                if (!(var2 === var4)) {
                    _fun70195_ip = 113;
                    continue _fun70195
                }
            case 111:
                var2 = false;
            case 113:
                var11 = var1.defaultPreview;
                if (!(var11 === var4)) {
                    _fun70195_ip = 156;
                    continue _fun70195
                }
            case 123:
                var13 = _closure1_slot6;
                var12 = _closure1_slot13;
                var6 = {};
                var6.fileName = var5;
                var6.maxFileWidth = var14;
                var6.borderRadius = var7;
                var11 = var13.bind(var4)(var12, var6);
            case 156:
                var6 = var1.style;
                var12 = _closure1_slot8;
                var17 = var12.bind(var4)();
                if (var0) {
                    _fun70195_ip = 633;
                    continue _fun70195
                }
            case 178:
                if (!var3) {
                    _fun70195_ip = 217;
                    continue _fun70195
                }
            case 181:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 21;
                var0 = var13[var0];
                var12 = var12.bind(var4)(var0);
                var0 = var12.isAndroid;
                var0 = var0.bind(var12)();
                if (var0) {
                    _fun70195_ip = 422;
                    continue _fun70195
                }
            case 217:
                var12 = _closure1_slot0;
                var0 = _closure1_slot2;
                var13 = 21;
                var0 = var0[var13];
                var12 = var12.bind(var4)(var0);
                var0 = var12.isIOS;
                var0 = var0.bind(var12)();
                if (!var0) {
                    _fun70195_ip = 273;
                    continue _fun70195
                }
            case 250:
                var12 = var10.startsWith;
                var0 = 'ph://';
                var0 = var12.bind(var10)(var0);
                if (var0) {
                    _fun70195_ip = 422;
                    continue _fun70195
                }
            case 273:
                var0 = var11;
                if (!var3) {
                    _fun70195_ip = 417;
                    continue _fun70195
                }
            case 282:
                var12 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var13];
                var12 = var12.bind(var4)(var3);
                var3 = var12.isIOS;
                var3 = var3.bind(var12)();
                var0 = var11;
                if (!var3) {
                    _fun70195_ip = 417;
                    continue _fun70195
                }
            case 315:
                var12 = _closure1_slot6;
                var11 = _closure1_slot5;
                var3 = {};
                var3.style = var6;
                var15 = _closure1_slot6;
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var13 = 25;
                var13 = var16[var13];
                var13 = var14.bind(var4)(var13);
                var14 = var13.VideoComponent;
                var13 = {
                    'style': null,
                    'source': null,
                    'muted': true,
                    'paused': true,
                    'resizeMode': 'cover',
                    'preventsDisplaySleepDuringVideoPlayback': false
                };
                var16 = {};
                var16.height = var8;
                var16.width = var9;
                var13.style = var16;
                var16 = {};
                var16.uri = var10;
                var13.source = var16;
                var13 = var15.bind(var4)(var14, var13);
                var3.children = var13;
                var0 = var12.bind(var4)(var11, var3);
            case 417:
                _fun70195_ip = 631;
                continue _fun70195;
            case 422:
                if (var2) {
                    _fun70195_ip = 471;
                    continue _fun70195
                }
            case 425:
                var11 = _closure1_slot6;
                var3 = _closure1_slot10;
                var2 = {};
                var2.uri = var10;
                var2.width = var9;
                var2.height = var8;
                var2.borderRadius = var7;
                var2.style = var6;
                var2.fileName = var5;
                var2 = var11.bind(var4)(var3, var2);
                _fun70195_ip = 628;
                continue _fun70195;
            case 471:
                var12 = _closure1_slot7;
                var11 = _closure1_slot5;
                var3 = {};
                var3.style = var6;
                var15 = _closure1_slot6;
                var14 = _closure1_slot10;
                var13 = {};
                var13.uri = var10;
                var13.width = var9;
                var13.height = var8;
                var13.borderRadius = var7;
                var13.style = var6;
                var13.fileName = var5;
                var14 = var15.bind(var4)(var14, var13);
                var13 = new Array(2);
                var13[0] = var14;
                var16 = _closure1_slot6;
                var15 = _closure1_slot5;
                var14 = {};
                var17 = var17.videoIcon;
                var14.style = var17;
                var19 = _closure1_slot6;
                var18 = _closure1_slot0;
                var20 = _closure1_slot2;
                var17 = 24;
                var17 = var20[var17];
                var17 = var18.bind(var4)(var17);
                var18 = var17.CirclePlayIcon;
                var17 = {
                    'size': 'md',
                    'color': 'white',
                    'secondaryColor': 'black'
                };
                var17 = var19.bind(var4)(var18, var17);
                var14.children = var17;
                var14 = var16.bind(var4)(var15, var14);
                var13[1] = var14;
                var3.children = var13;
                var2 = var12.bind(var4)(var11, var3);
            case 628:
                var0 = var2;
            case 631:
                _fun70195_ip = 674;
                continue _fun70195;
            case 633:
                var3 = _closure1_slot6;
                var2 = _closure1_slot10;
                var1 = {};
                var1.uri = var10;
                var1.width = var9;
                var1.height = var8;
                var1.borderRadius = var7;
                var1.style = var6;
                var1.fileName = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 674:
                return var0;
        }
    };
    var2.default = var3;
    var2.AttachmentIcon = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 8783, 8784, 8785, 8786, 8787, 8788, 8789, 8790, 8791, 8792, 8793, 8794, 8795, 8796, 3970, 3902, 478, 4669, 8797, 8799, 8802, 2]);