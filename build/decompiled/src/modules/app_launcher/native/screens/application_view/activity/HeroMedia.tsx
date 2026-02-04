// modules/app_launcher/native/screens/application_view/activity/HeroMedia.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function() {
        _fun107676: for (var _fun107676_ip = 0;;) switch (_fun107676_ip) {
            case 0:
                var0 = arguments[0];
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun107676_ip = 11;
                    continue _fun107676
                }
            case 9:
                var0 = {};
            case 11:
                var1 = var0.width;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 6;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useDefaultAppLauncherWidth;
                var5 = var2.bind(var3)();
                var2 = null;
                if (!(var2 != var1)) {
                    _fun107676_ip = 58;
                    continue _fun107676
                }
            case 55:
                var5 = var1;
            case 58:
                if (!(var2 == var1)) {
                    _fun107676_ip = 85;
                    continue _fun107676
                }
            case 62:
                var2 = global;
                var4 = var2.Math;
                var3 = var4.min;
                var2 = _closure1_slot5;
                var1 = var3.bind(var4)(var5, var2);
            case 85:
                var2 = _closure1_slot4;
                var0 = 2;
                var0 = var0 * var2;
                var4 = var1 - var0;
                var0 = {};
                var0.width = var4;
                var1 = global;
                var3 = var1.Math;
                var2 = var3.floor;
                var1 = 9;
                var4 = var1 * var4;
                var1 = 16;
                var1 = var4 / var1;
                var1 = var2.bind(var3)(var1);
                var0.height = var1;
                return var0;
        }
    };
    var _closure1_slot8 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var8 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.DEFAULT_CONTENT_PADDING;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'black';
    var9.backgroundColor = var10;
    var4.mediaBackground = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/screens/application_view/activity/HeroMedia.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun107677: for (var _fun107677_ip = 0;;) switch (_fun107677_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.applicationId;
                var11 = var0.containerHeight;
                var6 = var0.width;
                var0 = _closure1_slot7;
                var4 = undefined;
                var5 = var0.bind(var4)();
                var2 = _closure1_slot8;
                var0 = {};
                var0.width = var6;
                var9 = var2.bind(var4)(var0);
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 7;
                var0 = var7[var0];
                var2 = var2.bind(var4)(var0);
                var0 = {};
                var0.applicationId = var3;
                var6 = var9.width;
                var0.size = var6;
                var6 = ['embedded_cover'];
                var0.names = var6;
                var6 = var2.bind(var4)(var0);
                var2 = _closure1_slot0;
                var0 = 8;
                var0 = var7[var0];
                var13 = var2.bind(var4)(var0);
                var12 = var13.useStateFromStores;
                var0 = _closure1_slot3;
                var10 = new Array(1);
                var10[0] = var0;
                var8 = function() { // Environment: var0
                    var0 = _closure1_slot3;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var0 = new Array(0);
                var8 = var12.bind(var13)(var10, var8, var0);
                var0 = 9;
                var0 = var7[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.useGetOrFetchApplication;
                var2 = var0.bind(var2)(var3);
                var7 = null;
                var10 = var7 == var2;
                var0 = undefined;
                if (var10) {
                    _fun107677_ip = 194;
                    continue _fun107677
                }
            case 188:
                var0 = var2.embeddedActivityConfig;
            case 194:
                var10 = var7 == var0;
                var2 = undefined;
                if (var10) {
                    _fun107677_ip = 209;
                    continue _fun107677
                }
            case 203:
                var2 = var0.activity_preview_video_asset_id;
            case 209:
                var2 = var7 != var2;
                var12 = null;
                if (!var2) {
                    _fun107677_ip = 250;
                    continue _fun107677
                }
            case 218:
                var10 = _closure1_slot1;
                var13 = _closure1_slot2;
                var2 = 10;
                var2 = var13[var2];
                var2 = var10.bind(var4)(var2);
                var0 = var0.activity_preview_video_asset_id;
                var12 = var2.bind(var4)(var3, var0);
            case 250:
                var2 = var7 == var12;
                var0 = null;
                if (var2) {
                    _fun107677_ip = 497;
                    continue _fun107677
                }
            case 262:
                var10 = '';
                var0 = null;
                if (!(var10 !== var12)) {
                    _fun107677_ip = 497;
                    continue _fun107677
                }
            case 275:
                var3 = _closure1_slot6;
                var2 = _closure1_slot1;
                var13 = _closure1_slot2;
                var1 = 11;
                var1 = var13[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.paused = var8;
                if (!(var7 != var12)) {
                    _fun107677_ip = 314;
                    continue _fun107677
                }
            case 310:
                if (!(var10 === var12)) {
                    _fun107677_ip = 337;
                    continue _fun107677
                }
            case 314:
                var8 = {};
                var13 = var6.url;
                var14 = var7 != var13;
                if (!var14) {
                    _fun107677_ip = 331;
                    continue _fun107677
                }
            case 328:
                var10 = var13;
            case 331:
                var8.uri = var10;
                _fun107677_ip = 347;
                continue _fun107677;
            case 337:
                var10 = {};
                var10.videoURI = var12;
                var8 = var10;
            case 347:
                var1.src = var8;
                var8 = var9.height;
                var1.height = var8;
                var8 = var9.width;
                var1.width = var8;
                var6 = var6.url;
                var1.poster = var6;
                var6 = 'cover';
                var1.resizeMode = var6;
                var8 = var5.mediaBackground;
                var6 = new Array(3);
                var6[0] = var8;
                var8 = {};
                var10 = var9.height;
                var8.maxHeight = var10;
                var6[1] = var8;
                var7 = var7 != var11;
                if (!var7) {
                    _fun107677_ip = 465;
                    continue _fun107677
                }
            case 425:
                var8 = {};
                var10 = {};
                var9 = var9.height;
                var11 = var11 - var9;
                var9 = 2;
                var9 = var11 / var9;
                var10.translateY = var9;
                var9 = new Array(1);
                var9[0] = var10;
                var8.transform = var9;
                var7 = var8;
            case 465:
                var6[2] = var7;
                var1.style = var6;
                var5 = var5.mediaBackground;
                var1.videoStyle = var5;
                var5 = false;
                var1.postponeRender = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 497:
                return var0;
        }
    };
    var2.default = var3;
    var2.useHeroMediaDimensions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1298, 1468, 4932, 33, 1297, 7738, 8071, 566, 6884, 13865, 8856, 2]);