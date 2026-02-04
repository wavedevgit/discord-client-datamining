// modules/app_launcher/native/screens/home/recommendations/RecommendationsBanner.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.BANNER_HEIGHT;
    var _closure1_slot6 = var7;
    var3 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'width': '100%',
        'height': '100%'
    };
    var3.imageContainer = var9;
    var9 = {
        'width': '100%',
        'height': '100%'
    };
    var3.image = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot9 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun107697: for (var _fun107697_ip = 0;;) switch (_fun107697_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.applicationId;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 6;
                var2 = var6[var2];
                var4 = undefined;
                var7 = var3.bind(var4)(var2);
                var2 = var7.useRequiredAppLauncherContext;
                var2 = var2.bind(var7)();
                var8 = var2.width;
                var2 = 7;
                var2 = var6[var2];
                var7 = var3.bind(var4)(var2);
                var3 = var7.useHeroMediaDimensions;
                var2 = {};
                var2.width = var8;
                var7 = var3.bind(var7)(var2);
                var _closure2_slot0 = var7;
                var3 = _closure1_slot1;
                var2 = 8;
                var2 = var6[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2.applicationId = var5;
                var5 = var7.width;
                var2.size = var5;
                var5 = ['embedded_cover'];
                var2.names = var5;
                var6 = var3.bind(var4)(var2);
                var _closure2_slot1 = var6;
                var5 = _closure1_slot3;
                var3 = var5.useMemo;
                var2 = new Array(2);
                var2[0] = var7;
                var2[1] = var6;
                var0 = function() { // Environment: var0
                    _fun107698: for (var _fun107698_ip = 0;;) switch (_fun107698_ip) {
                        case 0:
                            var0 = {};
                            var1 = {};
                            var2 = 'black';
                            var1.backgroundColor = var2;
                            var2 = _closure2_slot0;
                            var4 = var2.height;
                            var1.height = var4;
                            var4 = var2.width;
                            var1.width = var4;
                            var4 = {};
                            var5 = _closure1_slot6;
                            var2 = var2.height;
                            var5 = var5 - var2;
                            var2 = 2;
                            var2 = var5 / var2;
                            var4.translateY = var2;
                            var2 = new Array(1);
                            var2[0] = var4;
                            var1.transform = var2;
                            var0.imageStyle = var1;
                            var1 = _closure2_slot1;
                            var2 = var1.url;
                            var1 = null;
                            var2 = var1 != var2;
                            var1 = undefined;
                            if (!var2) {
                                _fun107698_ip = 122;
                                continue _fun107698
                            }
                        case 104:
                            var2 = {};
                            var3 = _closure2_slot1;
                            var3 = var3.url;
                            var2.uri = var3;
                            var1 = var2;
                        case 122:
                            var0.imageSource = var1;
                            return var0;
                    }
                };
                var0 = var3.bind(var5)(var0, var2);
                var6 = var0.imageStyle;
                var5 = var0.imageSource;
                var0 = null;
                if (!(var0 == var5)) {
                    _fun107697_ip = 211;
                    continue _fun107697
                }
            case 189:
                var3 = _closure1_slot8;
                var2 = _closure1_slot4;
                var0 = {};
                var0.style = var6;
                var0 = var3.bind(var4)(var2, var0);
                _fun107697_ip = 259;
                continue _fun107697;
            case 211:
                var3 = _closure1_slot8;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 9;
                var1 = var7[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.style = var6;
                var1.source = var5;
                var5 = 'cover';
                var1.resizeMode = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 259:
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot10 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun107699: for (var _fun107699_ip = 0;;) switch (_fun107699_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.applicationBot;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 10;
                var0 = var2[var0];
                var3 = undefined;
                var1 = var1.bind(var3)(var0);
                var2 = null;
                var5 = var2 == var6;
                var0 = undefined;
                if (var5) {
                    _fun107699_ip = 50;
                    continue _fun107699
                }
            case 45:
                var0 = var6.id;
            case 50:
                if (!(var2 == var0)) {
                    _fun107699_ip = 58;
                    continue _fun107699
                }
            case 54:
                var0 = _closure1_slot7;
            case 58:
                var5 = var1.bind(var3)(var0);
                var2 = _closure1_slot8;
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 11;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.displayProfile = var5;
                var4 = _closure1_slot5;
                var5 = var4.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var4
                    }
                });
                var10 = var5;
                var9 = var6;
                var4 = new var10[var4](var9, var8);
                var4 = var4 instanceof Object ? var4 : var5;
                var0.user = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot11 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun107700: for (var _fun107700_ip = 0;;) switch (_fun107700_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.applicationEmbedded;
                var6 = var0.applicationId;
                var12 = var0.applicationIcon;
                var9 = var0.applicationBot;
                var8 = var0.overrideImageUrl;
                var0 = _closure1_slot9;
                var4 = undefined;
                var7 = var0.bind(var4)();
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 12;
                var0 = var3[var0];
                var11 = var2.bind(var4)(var0);
                var10 = var11.getApplicationIconSource;
                var0 = {};
                var0.id = var6;
                var0.icon = var12;
                var0.bot = var9;
                var12 = true;
                var0.botIconFirst = var12;
                var10 = var10.bind(var11)(var0);
                var0 = 13;
                var0 = var3[var0];
                var3 = var2.bind(var4)(var0);
                var11 = 'number';
                var0 = typeof var10;
                var2 = var10;
                if (!(var11 !== var0)) {
                    _fun107700_ip = 143;
                    continue _fun107700
                }
            case 124:
                var0 = null;
                var11 = var0 == var10;
                var0 = undefined;
                if (var11) {
                    _fun107700_ip = 140;
                    continue _fun107700
                }
            case 135:
                var0 = var10.uri;
            case 140:
                var2 = var0;
            case 143:
                var0 = '';
                var10 = var3.bind(var4)(var2, var0);
                var0 = null;
                if (!(var0 == var8)) {
                    _fun107700_ip = 239;
                    continue _fun107700
                }
            case 159:
                if (var1) {
                    _fun107700_ip = 217;
                    continue _fun107700
                }
            case 162:
                if (!(var0 == var9)) {
                    _fun107700_ip = 194;
                    continue _fun107700
                }
            case 166:
                var2 = _closure1_slot8;
                var1 = _closure1_slot4;
                var0 = {};
                var3 = {};
                var3.backgroundColor = var10;
                var0.style = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun107700_ip = 215;
                continue _fun107700;
            case 194:
                var3 = _closure1_slot8;
                var2 = _closure1_slot11;
                var1 = {};
                var1.applicationBot = var9;
                var0 = var3.bind(var4)(var2, var1);
            case 215:
                _fun107700_ip = 237;
                continue _fun107700;
            case 217:
                var3 = _closure1_slot8;
                var2 = _closure1_slot10;
                var1 = {};
                var1.applicationId = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 237:
                _fun107700_ip = 325;
                continue _fun107700;
            case 239:
                var3 = _closure1_slot8;
                var2 = _closure1_slot4;
                var1 = {};
                var6 = var7.imageContainer;
                var1.style = var6;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = 9;
                var5 = var9[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var7 = var7.image;
                var5.style = var7;
                var7 = {};
                var7.uri = var8;
                var5.source = var7;
                var7 = 'cover';
                var5.resizeMode = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 325:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/screens/home/recommendations/RecommendationsBanner.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1628, 660, 33, 1297, 7736, 13888, 8071, 4704, 6956, 6969, 1417, 6842, 2]);