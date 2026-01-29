// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun4856: for (var _fun4856_ip = 0;;) switch (_fun4856_ip) {
        case 0:
            var7 = require;
            var5 = metroImportDefault;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var7;
            var _closure1_slot1 = var5;
            var _closure1_slot2 = var6;
            var3 = function(arg0, arg1) { // Original name: prefetch, environment: var4
                _fun4857: for (var _fun4857_ip = 0;;) switch (_fun4857_ip) {
                    case 0:
                        var2 = arg1;
                        var1 = _closure1_slot7;
                        var3 = parseFloat(var1);
                        var1 = var3 + 1;
                        _closure1_slot7 = var1;
                        if (!var2) {
                            _fun4857_ip = 30;
                            continue _fun4857
                        }
                    case 23:
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
                    case 30:
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 4;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.prefetchImage;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0, var3);
                        return var0;
                }
            };
            var _closure1_slot9 = var3;
            var0 = function() { // Original name: _queryCache, environment: var4
                var4 = undefined;
                var0 = undefined;
                var3 = _closure1_slot5;
                var2 = function*(arg0) { // Environment: var2
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun4860: for (var _fun4860_ip = 0;;) switch (_fun4860_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun4860_ip = 49;
                                    continue _fun4860
                                }
                            case 7:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 4;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.queryCache;
                                var1 = arg0;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            case 49:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                _closure1_slot10 = var3;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var _closure1_slot10 = var0;
            var0 = ['ref'];
            var _closure1_slot3 = var0;
            var0 = global;
            var9 = var0.Object;
            var8 = var9.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var8.bind(var9)(var2, var0, var1);
            var0 = 0;
            var1 = var6[var0];
            var0 = undefined;
            var1 = var5.bind(var0)(var1);
            var _closure1_slot4 = var1;
            var1 = 1;
            var8 = var6[var1];
            var8 = var5.bind(var0)(var8);
            var _closure1_slot5 = var8;
            var8 = 2;
            var9 = var6[var8];
            var8 = arg3;
            var8 = var8.bind(var0)(var9);
            var8 = 3;
            var8 = var6[var8];
            var8 = var7.bind(var0)(var8);
            var8 = var8.jsx;
            var _closure1_slot6 = var8;
            var _closure1_slot7 = var1;
            var8 = function(arg0) { // Original name: BaseImage, environment: var4
                _fun4861: for (var _fun4861_ip = 0;;) switch (_fun4861_ip) {
                    case 0:
                        var5 = arg0;
                        var6 = var5.ref;
                        var2 = _closure1_slot4;
                        var1 = _closure1_slot3;
                        var3 = undefined;
                        var7 = var2.bind(var3)(var5, var1);
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 5;
                        var1 = var5[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.getImageSourcesFromImageProps;
                        var14 = var1.bind(var2)(var7);
                        if (var14) {
                            _fun4861_ip = 80;
                            continue _fun4861
                        }
                    case 63:
                        var1 = {};
                        var1.uri = var3;
                        var1.width = var3;
                        var1.height = var3;
                        var14 = var1;
                    case 80:
                        var2 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 6;
                        var8 = var5[var1];
                        var9 = var2.bind(var3)(var8);
                        var8 = var7.defaultSource;
                        var12 = var9.bind(var3)(var8);
                        var1 = var5[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var7.loadingIndicatorSource;
                        var11 = var2.bind(var3)(var1);
                        var1 = var7.children;
                        var2 = null;
                        if (!(var2 == var1)) {
                            _fun4861_ip = 1048;
                            continue _fun4861
                        }
                    case 145:
                        var1 = var7.defaultSource;
                        if (!(var2 != var1)) {
                            _fun4861_ip = 168;
                            continue _fun4861
                        }
                    case 155:
                        var1 = var7.loadingIndicatorSource;
                        if (!(var2 == var1)) {
                            _fun4861_ip = 1012;
                            continue _fun4861
                        }
                    case 168:
                        var8 = global;
                        var5 = var8.Array;
                        var1 = var5.isArray;
                        var1 = var1.bind(var5)(var14);
                        if (var1) {
                            _fun4861_ip = 314;
                            continue _fun4861
                        }
                    case 192:
                        var5 = var14.uri;
                        var1 = '';
                        if (!(var1 === var5)) {
                            _fun4861_ip = 227;
                            continue _fun4861
                        }
                    case 205:
                        var9 = var8.console;
                        var5 = var9.warn;
                        var1 = 'source.uri should not be an empty string';
                        var1 = var5.bind(var9)(var1);
                    case 227:
                        var9 = var14.width;
                        if (!(var2 == var9)) {
                            _fun4861_ip = 241;
                            continue _fun4861
                        }
                    case 236:
                        var9 = var7.width;
                    case 241:
                        var5 = var14.height;
                        if (!(var2 == var5)) {
                            _fun4861_ip = 255;
                            continue _fun4861
                        }
                    case 250:
                        var5 = var7.height;
                    case 255:
                        var1 = {};
                        var1.width = var9;
                        var1.height = var5;
                        var5 = new Array(3);
                        var5[0] = var1;
                        var1 = _closure1_slot8;
                        var1 = var1.base;
                        var5[1] = var1;
                        var1 = var7.style;
                        var5[2] = var1;
                        var _closure2_slot0 = var5;
                        var1 = new Array(1);
                        var1[0] = var14;
                        var _closure2_slot1 = var1;
                        _fun4861_ip = 355;
                        continue _fun4861;
                    case 314:
                        var9 = _closure1_slot8;
                        var10 = var9.base;
                        var9 = new Array(2);
                        var9[0] = var10;
                        var10 = var7.style;
                        var9[1] = var10;
                        _closure2_slot0 = var9;
                        _closure2_slot1 = var14;
                        var5 = var9;
                        var1 = var14;
                    case 355:
                        var13 = var7.onLoadStart;
                        var17 = var7.onLoad;
                        var16 = var7.onLoadEnd;
                        var15 = var7.onError;
                        var10 = var8.Object;
                        var9 = var10.assign;
                        var8 = {};
                        var8.style = var5;
                        if (var13) {
                            _fun4861_ip = 402;
                            continue _fun4861
                        }
                    case 399:
                        var13 = var17;
                    case 402:
                        if (var13) {
                            _fun4861_ip = 408;
                            continue _fun4861
                        }
                    case 405:
                        var13 = var16;
                    case 408:
                        if (var13) {
                            _fun4861_ip = 414;
                            continue _fun4861
                        }
                    case 411:
                        var13 = var15;
                    case 414:
                        var13 = !var13;
                        var13 = !var13;
                        var8.shouldNotifyLoadEvents = var13;
                        var8.src = var1;
                        var8.source = var1;
                        var13 = var2 == var14;
                        var1 = undefined;
                        if (var13) {
                            _fun4861_ip = 464;
                            continue _fun4861
                        }
                    case 443:
                        var13 = 0;
                        var13 = var14[var13];
                        var15 = var2 == var13;
                        var1 = undefined;
                        if (var15) {
                            _fun4861_ip = 464;
                            continue _fun4861
                        }
                    case 458:
                        var1 = var13.headers;
                    case 464:
                        if (var1) {
                            _fun4861_ip = 485;
                            continue _fun4861
                        }
                    case 467:
                        var15 = var2 == var14;
                        var13 = undefined;
                        if (var15) {
                            _fun4861_ip = 482;
                            continue _fun4861
                        }
                    case 476:
                        var13 = var14.headers;
                    case 482:
                        var1 = var13;
                    case 485:
                        var8.headers = var1;
                        var1 = null;
                        if (!var12) {
                            _fun4861_ip = 500;
                            continue _fun4861
                        }
                    case 495:
                        var1 = var12.uri;
                    case 500:
                        var8.defaultSource = var1;
                        var1 = null;
                        if (!var11) {
                            _fun4861_ip = 515;
                            continue _fun4861
                        }
                    case 510:
                        var1 = var11.uri;
                    case 515:
                        var8.loadingIndicatorSrc = var1;
                        var1 = var7["aria-label"];
                        if (!(var2 == var1)) {
                            _fun4861_ip = 535;
                            continue _fun4861
                        }
                    case 530:
                        var1 = var7.accessibilityLabel;
                    case 535:
                        if (!(var2 == var1)) {
                            _fun4861_ip = 545;
                            continue _fun4861
                        }
                    case 539:
                        var1 = var7.alt;
                    case 545:
                        var8.accessibilityLabel = var1;
                        var11 = var2 == var7;
                        var1 = undefined;
                        if (var11) {
                            _fun4861_ip = 564;
                            continue _fun4861
                        }
                    case 558:
                        var1 = var7["aria-labelledby"];
                    case 564:
                        if (!(var2 == var1)) {
                            _fun4861_ip = 586;
                            continue _fun4861
                        }
                    case 568:
                        var12 = var2 == var7;
                        var11 = undefined;
                        if (var12) {
                            _fun4861_ip = 583;
                            continue _fun4861
                        }
                    case 577:
                        var11 = var7.accessibilityLabelledBy;
                    case 583:
                        var1 = var11;
                    case 586:
                        var8.accessibilityLabelledBy = var1;
                        var1 = var7.alt;
                        var1 = var3 !== var1;
                        if (var1) {
                            _fun4861_ip = 609;
                            continue _fun4861
                        }
                    case 604:
                        var1 = var7.accessible;
                    case 609:
                        var8.accessible = var1;
                        var1 = {};
                        var11 = var7["aria-busy"];
                        if (!(var2 == var11)) {
                            _fun4861_ip = 649;
                            continue _fun4861
                        }
                    case 625:
                        var13 = var7.accessibilityState;
                        var14 = var2 == var13;
                        var12 = undefined;
                        if (var14) {
                            _fun4861_ip = 646;
                            continue _fun4861
                        }
                    case 640:
                        var12 = var13.busy;
                    case 646:
                        var11 = var12;
                    case 649:
                        var1.busy = var11;
                        var11 = var7["aria-checked"];
                        if (!(var2 == var11)) {
                            _fun4861_ip = 688;
                            continue _fun4861
                        }
                    case 664:
                        var13 = var7.accessibilityState;
                        var14 = var2 == var13;
                        var12 = undefined;
                        if (var14) {
                            _fun4861_ip = 685;
                            continue _fun4861
                        }
                    case 679:
                        var12 = var13.checked;
                    case 685:
                        var11 = var12;
                    case 688:
                        var1.checked = var11;
                        var11 = var7["aria-disabled"];
                        if (!(var2 == var11)) {
                            _fun4861_ip = 726;
                            continue _fun4861
                        }
                    case 703:
                        var13 = var7.accessibilityState;
                        var14 = var2 == var13;
                        var12 = undefined;
                        if (var14) {
                            _fun4861_ip = 723;
                            continue _fun4861
                        }
                    case 718:
                        var12 = var13.disabled;
                    case 723:
                        var11 = var12;
                    case 726:
                        var1.disabled = var11;
                        var11 = var7["aria-expanded"];
                        if (!(var2 == var11)) {
                            _fun4861_ip = 764;
                            continue _fun4861
                        }
                    case 740:
                        var13 = var7.accessibilityState;
                        var14 = var2 == var13;
                        var12 = undefined;
                        if (var14) {
                            _fun4861_ip = 761;
                            continue _fun4861
                        }
                    case 755:
                        var12 = var13.expanded;
                    case 761:
                        var11 = var12;
                    case 764:
                        var1.expanded = var11;
                        var11 = var7["aria-selected"];
                        if (!(var2 == var11)) {
                            _fun4861_ip = 803;
                            continue _fun4861
                        }
                    case 779:
                        var13 = var7.accessibilityState;
                        var14 = var2 == var13;
                        var12 = undefined;
                        if (var14) {
                            _fun4861_ip = 800;
                            continue _fun4861
                        }
                    case 794:
                        var12 = var13.selected;
                    case 800:
                        var11 = var12;
                    case 803:
                        var1.selected = var11;
                        var8.accessibilityState = var1;
                        var1 = {};
                        var1 = var9.bind(var10)(var1, var7, var8);
                        var _closure2_slot2 = var1;
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var1 = 7;
                        var1 = var9[var1];
                        var1 = var8.bind(var3)(var1);
                        var5 = var1.bind(var3)(var5);
                        var8 = _closure1_slot0;
                        var1 = 8;
                        var1 = var9[var1];
                        var9 = var8.bind(var3)(var1);
                        var8 = var9.convertObjectFitToResizeMode;
                        var10 = var2 == var5;
                        var1 = undefined;
                        if (var10) {
                            _fun4861_ip = 888;
                            continue _fun4861
                        }
                    case 882:
                        var1 = var5.objectFit;
                    case 888:
                        var1 = var8.bind(var9)(var1);
                        if (var1) {
                            _fun4861_ip = 901;
                            continue _fun4861
                        }
                    case 896:
                        var1 = var7.resizeMode;
                    case 901:
                        if (var1) {
                            _fun4861_ip = 921;
                            continue _fun4861
                        }
                    case 904:
                        var7 = var2 == var5;
                        var2 = undefined;
                        if (var7) {
                            _fun4861_ip = 918;
                            continue _fun4861
                        }
                    case 913:
                        var2 = var5.resizeMode;
                    case 918:
                        var1 = var2;
                    case 921:
                        if (var1) {
                            _fun4861_ip = 928;
                            continue _fun4861
                        }
                    case 924:
                        var1 = 'cover';
                    case 928:
                        var _closure2_slot3 = var1;
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 9;
                        var1 = var5[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.useWrapRefWithImageAttachedCallbacks;
                        var1 = var1.bind(var2)(var6);
                        var _closure2_slot4 = var1;
                        var2 = _closure1_slot6;
                        var1 = _closure1_slot1;
                        var0 = 10;
                        var0 = var5[var0];
                        var0 = var1.bind(var3)(var0);
                        var1 = var0.Consumer;
                        var0 = {};
                        var4 = function(arg0) { // Original name: children, environment: var4
                            _fun4862: for (var _fun4862_ip = 0;;) switch (_fun4862_ip) {
                                case 0:
                                    var1 = arg0;
                                    var0 = null;
                                    if (!(var0 === var1)) {
                                        _fun4862_ip = 20;
                                        continue _fun4862
                                    }
                                case 11:
                                    var0 = _closure2_slot2;
                                    _fun4862_ip = 56;
                                    continue _fun4862;
                                case 20:
                                    var2 = global;
                                    var6 = var2.Object;
                                    var5 = var6.assign;
                                    var3 = _closure2_slot2;
                                    var2 = {};
                                    var2.internal_analyticTag = var1;
                                    var1 = {};
                                    var0 = var5.bind(var6)(var1, var3, var2);
                                case 56:
                                    var _closure3_slot0 = var0;
                                    var3 = _closure1_slot6;
                                    var1 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var0 = 11;
                                    var0 = var2[var0];
                                    var2 = undefined;
                                    var0 = var1.bind(var2)(var0);
                                    var1 = var0.Consumer;
                                    var0 = {};
                                    var4 = function(arg0) { // Original name: children, environment: var4
                                        _fun4863: for (var _fun4863_ip = 0;;) switch (_fun4863_ip) {
                                            case 0:
                                                var4 = _closure1_slot6;
                                                var2 = _closure1_slot1;
                                                var3 = _closure1_slot2;
                                                var0 = arg0;
                                                if (var0) {
                                                    _fun4863_ip = 93;
                                                    continue _fun4863
                                                }
                                            case 21:
                                                var0 = 13;
                                                var0 = var3[var0];
                                                var5 = undefined;
                                                var1 = var2.bind(var5)(var0);
                                                var0 = global;
                                                var9 = var0.Object;
                                                var8 = var9.assign;
                                                var7 = _closure3_slot0;
                                                var6 = {};
                                                var10 = _closure2_slot3;
                                                var6.resizeMode = var10;
                                                var0 = _closure2_slot4;
                                                var6.ref = var0;
                                                var0 = {};
                                                var0 = var8.bind(var9)(var0, var7, var6);
                                                var0 = var4.bind(var5)(var1, var0);
                                                _fun4863_ip = 166;
                                                continue _fun4863;
                                            case 93:
                                                var1 = 12;
                                                var1 = var3[var1];
                                                var3 = undefined;
                                                var2 = var2.bind(var3)(var1);
                                                var1 = {};
                                                var6 = _closure2_slot0;
                                                var1.style = var6;
                                                var6 = _closure2_slot3;
                                                var1.resizeMode = var6;
                                                var6 = _closure2_slot2;
                                                var6 = var6.headers;
                                                var1.headers = var6;
                                                var6 = _closure2_slot1;
                                                var1.src = var6;
                                                var5 = _closure2_slot4;
                                                var1.ref = var5;
                                                var0 = var4.bind(var3)(var2, var1);
                                            case 166:
                                                return var0;
                                        }
                                    };
                                    var0.children = var4;
                                    var0 = var3.bind(var2)(var1, var0);
                                    return var0;
                            }
                        };
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    case 1012:
                        var0 = global;
                        var2 = var0.Error;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var21 = 'The <Image> component cannot have defaultSource and loadingIndicatorSource at the same time. Please use either defaultSource or loadingIndicatorSource.';
                        var22 = var1;
                        var0 = new var22[var2](var21, var20);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                    case 1048:
                        var0 = global;
                        var2 = var0.Error;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var21 = 'The <Image> component cannot contain children. If you want to render content on top of the image, consider using the <ImageBackground> component or absolute positioning.';
                        var22 = var1;
                        var0 = new var22[var2](var21, var20);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var1 = 9;
            var1 = var6[var1];
            var7 = var7.bind(var0)(var1);
            var1 = var7.unstable_getImageComponentDecorator;
            var7 = var1.bind(var7)();
            var9 = null;
            var1 = var8;
            if (!(var9 != var7)) {
                _fun4856_ip = 204;
                continue _fun4856
            }
        case 199:
            var1 = var7.bind(var0)(var8);
        case 204:
            var7 = 'Image';
            var1.displayName = var7;
            var7 = function(arg0, arg1, arg2) { // Original name: getSize, environment: var4
                _fun4864: for (var _fun4864_ip = 0;;) switch (_fun4864_ip) {
                    case 0:
                        var6 = arg0;
                        var2 = arg1;
                        var4 = arg2;
                        var _closure2_slot0 = var6;
                        var _closure2_slot1 = var2;
                        var3 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 4;
                        var0 = var1[var0];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var0);
                        var0 = var3.getSize;
                        var0 = var0.bind(var3)(var6);
                        var3 = 'function';
                        var2 = typeof var2;
                        if (!(var3 === var2)) {
                            _fun4864_ip = 102;
                            continue _fun4864
                        }
                    case 66:
                        var3 = var0.then;
                        var2 = function(arg0) { // Environment: var5
                            var0 = arg0;
                            var3 = _closure2_slot1;
                            var2 = var0.width;
                            var1 = var0.height;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.catch;
                        if (var4) {
                            _fun4864_ip = 95;
                            continue _fun4864
                        }
                    case 90:
                        var4 = function() { // Environment: var5
                            var0 = global;
                            var2 = var0.console;
                            var1 = var2.warn;
                            var3 = _closure2_slot0;
                            var0 = 'Failed to get size for image: ';
                            var0 = var0 + var3;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                    case 95:
                        var2 = var2.bind(var3)(var4);
                        return var1;
                    case 102:
                        return var0;
                }
            };
            var1.getSize = var7;
            var7 = function(arg0, arg1, arg2, arg3) { // Original name: getSizeWithHeaders, environment: var4
                _fun4867: for (var _fun4867_ip = 0;;) switch (_fun4867_ip) {
                    case 0:
                        var7 = arg0;
                        var2 = arg2;
                        var4 = arg3;
                        var _closure2_slot0 = var7;
                        var _closure2_slot1 = var2;
                        var3 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 4;
                        var0 = var1[var0];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var0);
                        var3 = var6.getSizeWithHeaders;
                        var0 = arg1;
                        var0 = var3.bind(var6)(var7, var0);
                        var3 = 'function';
                        var2 = typeof var2;
                        if (!(var3 === var2)) {
                            _fun4867_ip = 106;
                            continue _fun4867
                        }
                    case 70:
                        var3 = var0.then;
                        var2 = function(arg0) { // Environment: var5
                            var0 = arg0;
                            var3 = _closure2_slot1;
                            var2 = var0.width;
                            var1 = var0.height;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.catch;
                        if (var4) {
                            _fun4867_ip = 99;
                            continue _fun4867
                        }
                    case 94:
                        var4 = function() { // Environment: var5
                            var0 = global;
                            var2 = var0.console;
                            var1 = var2.warn;
                            var3 = _closure2_slot0;
                            var0 = 'Failed to get size for image: ';
                            var0 = var0 + var3;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                    case 99:
                        var2 = var2.bind(var3)(var4);
                        return var1;
                    case 106:
                        return var0;
                }
            };
            var1.getSizeWithHeaders = var7;
            var1.prefetch = var3;
            var3 = function(arg0, arg1, arg2, arg3) { // Original name: prefetchWithMetadata, environment: var4
                var3 = _closure1_slot9;
                var2 = undefined;
                var1 = arg0;
                var0 = arg3;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var1.prefetchWithMetadata = var3;
            var3 = function(arg0) { // Original name: abortPrefetch, environment: var4
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.abortRequest;
                var1 = arg0;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var1.abortPrefetch = var3;
            var3 = function(arg0) { // Original name: queryCache, environment: var4
                var0 = undefined;
                var3 = _closure1_slot10;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var1.queryCache = var3;
            var3 = 6;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var1.resolveAssetSource = var3;
            var3 = 14;
            var3 = var6[var3];
            var6 = var5.bind(var0)(var3);
            var5 = var6.create;
            var3 = {};
            var7 = {};
            var8 = 'hidden';
            var7.overflow = var8;
            var3.base = var7;
            var3 = var5.bind(var6)(var3);
            var _closure1_slot8 = var3;
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 5, 31, 33, 320, 322, 90, 147, 323, 324, 327, 114, 328, 329, 253]);