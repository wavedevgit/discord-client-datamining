// modules/user_profile/native/ProfileGIFSelectActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var0 = global;
    var5 = var0.Object;
    var3 = var5.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var5)(var2, var0, var1);
    var9 = 0;
    var1 = var7[var9];
    var0 = undefined;
    var1 = var12.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var8 = 1;
    var3 = var7[var8];
    var1 = metroImportAll;
    var1 = var1.bind(var0)(var3);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var3 = var1.jsx;
    var _closure1_slot6 = var3;
    var1 = var1.jsxs;
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var7[var1];
    var5 = var6.bind(var0)(var1);
    var3 = var5.createStyles;
    var1 = {};
    var10 = {};
    var10.flex = var9;
    var1.titleWrapper = var10;
    var10 = {};
    var11 = 'flex-start';
    var10.justifyContent = var11;
    var1.titleContainer = var10;
    var10 = {};
    var10.flex = var8;
    var11 = 5;
    var13 = var7[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var10.marginTop = var13;
    var13 = var7[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var10.marginLeft = var13;
    var11 = var7[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var10.marginRight = var11;
    var1.gifPicker = var10;
    var1 = var3.bind(var5)(var1);
    var _closure1_slot8 = var1;
    var3 = {};
    var3.AVATAR = var9;
    var1 = 'AVATAR';
    var3[var9] = var1;
    var3.BANNER = var8;
    var1 = 'BANNER';
    var3[var8] = var1;
    var _closure1_slot9 = var3;
    var1 = {};
    var1.PROFILE_EDIT = var9;
    var5 = 'PROFILE_EDIT';
    var1[var9] = var5;
    var1.PROFILE_TRY_IT_OUT = var8;
    var5 = 'PROFILE_TRY_IT_OUT';
    var1[var8] = var5;
    var _closure1_slot10 = var1;
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_profile/native/ProfileGIFSelectActionSheet.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function arg0() {
        var0 = arg0;
        var1 = var0.user;
        var _closure2_slot0 = var1;
        var1 = var0.profileAssetType;
        var _closure2_slot1 = var1;
        var0 = var0.selectionContext;
        var _closure2_slot2 = var0;
        var0 = function() {
            var3 = undefined;
            var0 = undefined;
            var2 = _closure1_slot3;
            var1 = function*(arg0) { // Environment: var1
                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                    _fun80864: for (var _fun80864_ip = 0;;) switch (_fun80864_ip) {
                        case 0:
                            StartGenerator();
                            var1 = arg0;
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                            if (var2) {
                                _fun80864_ip = 449;
                                continue _fun80864
                            }
                        case 13:
                            var2 = var1.gifSrc;
                            var11 = null;
                            if (!(var11 == var2)) {
                                _fun80864_ip = 31;
                                continue _fun80864
                            }
                        case 25:
                            var2 = var1.src;
                        case 31:
                            var1 = global;
                            var1 = var1.fetch;
                            var4 = undefined;
                            var1 = var1.bind(var4)(var2);
                            SaveGenerator(address = 50);
                        case 48:
                            return var1;
                        case 50:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                            if (var2) {
                                _fun80864_ip = 446;
                                continue _fun80864
                            }
                        case 59:
                            var2 = var1.blob;
                            var2 = var2.bind(var1)();
                            SaveGenerator(address = 73);
                        case 71:
                            return var2;
                        case 73:
                            ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                            if (var3) {
                                _fun80864_ip = 443;
                                continue _fun80864
                            }
                        case 82:
                            var3 = function arg0() {
                                var1 = arg0;
                                var _closure6_slot0 = var1;
                                var1 = global;
                                var2 = var1.Promise;
                                var1 = var2.prototype;
                                var1 = Object.create(var1, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var3 = function(arg0) { // Environment: var0
                                    var1 = arg0;
                                    var _closure7_slot0 = var1;
                                    var1 = global;
                                    var1 = var1.FileReader;
                                    var2 = var1.prototype;
                                    var2 = Object.create(var2, {
                                        constructor: {
                                            value: var1
                                        }
                                    });
                                    var4 = var2;
                                    var1 = new var4[var1](var3);
                                    var2 = var1 instanceof Object ? var1 : var2;
                                    var0 = function(arg0) { // Environment: var0
                                        _fun80867: for (var _fun80867_ip = 0;;) switch (_fun80867_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var1 = var0.target;
                                                var0 = null;
                                                var2 = var0 == var1;
                                                var0 = undefined;
                                                var3 = undefined;
                                                if (var2) {
                                                    _fun80867_ip = 28;
                                                    continue _fun80867
                                                }
                                            case 22:
                                                var3 = var1.result;
                                            case 28:
                                                var2 = _closure7_slot0;
                                                var1 = '';
                                                var5 = 'string';
                                                var4 = typeof var3;
                                                if (!(var5 === var4)) {
                                                    _fun80867_ip = 53;
                                                    continue _fun80867
                                                }
                                            case 50:
                                                var1 = var3;
                                            case 53:
                                                var1 = var2.bind(var0)(var1);
                                                return var0;
                                        }
                                    };
                                    var2.onload = var0;
                                    var1 = var2.readAsDataURL;
                                    var0 = _closure6_slot0;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var4 = var1;
                                var0 = new var4[var2](var3, var2);
                                var0 = var0 instanceof Object ? var0 : var1;
                                return var0;
                            };
                            var3 = var3.bind(var4)(var2);
                            SaveGenerator(address = 100);
                        case 98:
                            return var3;
                        case 100:
                            ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                            if (var5) {
                                _fun80864_ip = 440;
                                continue _fun80864
                            }
                        case 109:
                            var7 = _closure2_slot1;
                            var6 = _closure1_slot9;
                            var6 = var6.AVATAR;
                            if (!(var6 !== var7)) {
                                _fun80864_ip = 240;
                                continue _fun80864
                            }
                        case 133:
                            var6 = _closure1_slot9;
                            var6 = var6.BANNER;
                            if (!(var6 === var7)) {
                                _fun80864_ip = 407;
                                continue _fun80864
                            }
                        case 150:
                            var7 = _closure2_slot2;
                            var6 = _closure1_slot10;
                            var6 = var6.PROFILE_TRY_IT_OUT;
                            if (!(var7 !== var6)) {
                                _fun80864_ip = 204;
                                continue _fun80864
                            }
                        case 168:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var6 = 7;
                            var6 = var8[var6];
                            var7 = var7.bind(var4)(var6);
                            var6 = var7.setPendingBanner;
                            var6 = var6.bind(var7)(var3);
                            _fun80864_ip = 407;
                            continue _fun80864;
                        case 204:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var6 = 7;
                            var6 = var8[var6];
                            var7 = var7.bind(var4)(var6);
                            var6 = var7.setTryItOutBanner;
                            var6 = var6.bind(var7)(var3);
                            _fun80864_ip = 407;
                            continue _fun80864;
                        case 240:
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var9 = 6;
                            var6 = var13[var9];
                            var8 = var12.bind(var4)(var6);
                            var7 = var8.createPendingImage;
                            var6 = {};
                            var6.imageUri = var3;
                            var9 = var13[var9];
                            var12 = var12.bind(var4)(var9);
                            var9 = var12.generateAvatarDescription;
                            var9 = var9.bind(var12)();
                            var6.description = var9;
                            var8 = var7.bind(var8)(var6);
                            var7 = _closure2_slot2;
                            var6 = _closure1_slot10;
                            var6 = var6.PROFILE_TRY_IT_OUT;
                            if (!(var7 !== var6)) {
                                _fun80864_ip = 376;
                                continue _fun80864
                            }
                        case 319:
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var6 = 8;
                            var6 = var9[var6];
                            var9 = var7.bind(var4)(var6);
                            var7 = var9.setNewPendingAvatar;
                            var6 = _closure2_slot0;
                            var11 = var11 == var6;
                            var6 = undefined;
                            if (var11) {
                                _fun80864_ip = 368;
                                continue _fun80864
                            }
                        case 358:
                            var10 = _closure2_slot0;
                            var6 = var10.avatar;
                        case 368:
                            var6 = var7.bind(var9)(var8, var6);
                            _fun80864_ip = 407;
                            continue _fun80864;
                        case 376:
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var6 = 7;
                            var6 = var9[var6];
                            var7 = var7.bind(var4)(var6);
                            var6 = var7.setTryItOutAvatar;
                            var6 = var6.bind(var7)(var8);
                        case 407:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 9;
                            var5 = var7[var5];
                            var6 = var6.bind(var4)(var5);
                            var5 = var6.hideActionSheet;
                            var5 = var5.bind(var6)();
                            return var4;
                        case 440:
                            return var3;
                        case 443:
                            return var2;
                        case 446:
                            return var1;
                        case 449:
                            return var0;
                    }
                };
                return var0;
            };
            var3 = var2.bind(var3)(var1);
            _closure2_slot3 = var3;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var _closure2_slot3 = var0;
        var0 = _closure1_slot8;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var2 = _closure1_slot4;
        var1 = var2.useRef;
        var0 = null;
        var11 = var1.bind(var2)(var0);
        var2 = _closure1_slot7;
        var13 = _closure1_slot0;
        var12 = _closure1_slot2;
        var0 = 10;
        var0 = var12[var0];
        var0 = var13.bind(var3)(var0);
        var1 = var0.BottomSheet;
        var0 = {
            'ref': null,
            'scrollable': true,
            'startExpanded': true
        };
        var0.ref = var11;
        var7 = _closure1_slot6;
        var4 = 11;
        var4 = var12[var4];
        var4 = var13.bind(var3)(var4);
        var5 = var4.BottomSheetTitleHeader;
        var4 = {};
        var6 = 12;
        var14 = var12[var6];
        var14 = var13.bind(var3)(var14);
        var15 = var14.intl;
        var14 = var15.string;
        var6 = var12[var6];
        var6 = var13.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6["xsC+/y"];
        var6 = var14.bind(var15)(var6);
        var4.title = var6;
        var6 = 13;
        var6 = var12[var6];
        var6 = var13.bind(var3)(var6);
        var13 = var6.NitroWheelIcon;
        var6 = {};
        var6 = var7.bind(var3)(var13, var6);
        var4.trailing = var6;
        var6 = var9.titleWrapper;
        var4.titleWrapperStyle = var6;
        var6 = var9.titleContainer;
        var4.titleContainerStyle = var6;
        var5 = var7.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var6 = _closure1_slot5;
        var5 = {};
        var9 = var9.gifPicker;
        var5.style = var9;
        var9 = _closure1_slot1;
        var8 = 14;
        var8 = var12[var8];
        var9 = var9.bind(var3)(var8);
        var8 = {};
        var8.bottomSheetRef = var11;
        var10 = function arg0() {
            var0 = undefined;
            var3 = _closure2_slot3;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var8.onPressGIF = var10;
        var8 = var7.bind(var3)(var9, var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var4;
    var2.ProfileAssetType = var3;
    var2.GIFSelectionContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 33, 1297, 671, 5774, 5637, 5636, 3279, 4933, 5261, 1234, 5800, 9429, 2]);