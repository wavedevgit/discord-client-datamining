// modules/user_profile/native/EditUserProfileAvatar.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'right': 4294967293
    };
    var3.editIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = 'function EditUserProfileAvatarTsx1(){const{rotation}=this.__closure;return{transform:[{rotateZ:rotation.get()+"deg"}]};}';
    var3.code = var6;
    var _closure1_slot8 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/EditUserProfileAvatar.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: EditUserProfileAvatar, environment: var1
        _fun79825: for (var _fun79825_ip = 0;;) switch (_fun79825_ip) {
            case 0:
                var1 = arg0;
                var21 = var1.user;
                var _closure2_slot0 = var21;
                var15 = var1.disabled;
                var19 = var1.statusStyle;
                var16 = var1.style;
                var22 = var1.avatarStyle;
                var12 = var1.editIconStyle;
                var11 = var1.disableStatus;
                var3 = undefined;
                if (!(var11 === var3)) {
                    _fun79825_ip = 58;
                    continue _fun79825
                }
            case 56:
                var11 = true;
            case 58:
                var6 = var1.isTryItOut;
                if (!(var6 === var3)) {
                    _fun79825_ip = 70;
                    continue _fun79825
                }
            case 68:
                var6 = false;
            case 70:
                var _closure2_slot1 = var6;
                var2 = var1.autoStartEditFlow;
                if (!(var2 === var3)) {
                    _fun79825_ip = 86;
                    continue _fun79825
                }
            case 84:
                var2 = false;
            case 86:
                var _closure2_slot2 = var2;
                var10 = var1.size;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)();
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var7 = var4.bind(var3)(var1);
                var1 = 5;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.EDIT_AVATAR;
                var1 = var7.bind(var3)(var1);
                var26 = var1.analyticsLocations;
                _closure2_slot3 = var26;
                var1 = 6;
                var1 = var5[var1];
                var4 = var4.bind(var3)(var1);
                var1 = var4.canUseAnimatedAvatar;
                var1 = var1.bind(var4)(var21);
                var14 = !var1;
                if (!var14) {
                    _fun79825_ip = 227;
                    continue _fun79825
                }
            case 224:
                var14 = !var6;
            case 227:
                _closure2_slot4 = var14;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 7;
                var1 = var5[var1];
                var4 = var4.bind(var3)(var1);
                var1 = {};
                var1.isTryItOut = var6;
                var1.analyticsLocations = var26;
                var1 = var4.bind(var3)(var1);
                var25 = var1.pendingAvatar;
                _closure2_slot5 = var25;
                var7 = var1.pendingAvatarDecoration;
                var23 = var1.setPendingAvatar;
                _closure2_slot6 = var23;
                var4 = _closure1_slot0;
                var1 = 8;
                var1 = var5[var1];
                var5 = var4.bind(var3)(var1);
                var4 = var5.getPendingAvatarSrc;
                var1 = {};
                var13 = var21.id;
                var1.userId = var13;
                var1.image = var25;
                var20 = var4.bind(var5)(var1);
                var4 = var7;
                if (!(var3 === var4)) {
                    _fun79825_ip = 350;
                    continue _fun79825
                }
            case 344:
                var4 = var21.avatarDecoration;
            case 350:
                _closure2_slot7 = var4;
                var1 = _closure1_slot1;
                var18 = _closure1_slot2;
                var5 = 9;
                var5 = var18[var5];
                var13 = var1.bind(var3)(var5);
                var5 = {};
                var5.isTryItOut = var6;
                var5.analyticsLocations = var26;
                var17 = var13.bind(var3)(var5);
                _closure2_slot8 = var17;
                var24 = _closure1_slot3;
                var13 = var24.useCallback;
                var5 = new Array(8);
                var5[0] = var21;
                var5[1] = var26;
                var5[2] = var25;
                var5[3] = var23;
                var5[4] = var17;
                var5[5] = var14;
                var5[6] = var4;
                var5[7] = var6;
                var4 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 10;
                    var2 = var8[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var2);
                    var4 = var5.openLazy;
                    var7 = _closure1_slot0;
                    var1 = 12;
                    var1 = var8[var1];
                    var3 = var7.bind(var0)(var1);
                    var1 = 11;
                    var2 = var8[var1];
                    var1 = var8.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = {};
                    var9 = _closure2_slot4;
                    var2.showAnimatedAvatarUpsell = var9;
                    var9 = function() { // Original name: handleRemoveAvatarSelect, environment: var6
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 10;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.hideActionSheet;
                        var1 = var1.bind(var2)();
                        var2 = _closure2_slot6;
                        var1 = null;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var2.handleRemoveAvatarSelect = var9;
                    var9 = _closure2_slot8;
                    var2.handleUploadAvatarSelect = var9;
                    var9 = function() { // Original name: handleUploadGIFAvatarSelect, environment: var6
                        _fun79828: for (var _fun79828_ip = 0;;) switch (_fun79828_ip) {
                            case 0:
                                var2 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var1 = 10;
                                var3 = var7[var1];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var3);
                                var3 = var4.hideActionSheet;
                                var3 = var3.bind(var4)();
                                var1 = var7[var1];
                                var5 = var2.bind(var0)(var1);
                                var4 = var5.openLazy;
                                var9 = _closure1_slot0;
                                var1 = 12;
                                var1 = var7[var1];
                                var3 = var9.bind(var0)(var1);
                                var1 = 13;
                                var2 = var7[var1];
                                var1 = var7.paths;
                                var3 = var3.bind(var0)(var2, var1);
                                var2 = {};
                                var8 = _closure2_slot0;
                                var2.user = var8;
                                var8 = 14;
                                var7 = var7[var8];
                                var7 = var9.bind(var0)(var7);
                                var7 = var7.ProfileAssetType;
                                var7 = var7.AVATAR;
                                var2.profileAssetType = var7;
                                var1 = _closure2_slot1;
                                var7 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var6 = var6[var8];
                                var6 = var7.bind(var0)(var6);
                                var6 = var6.GIFSelectionContext;
                                if (var1) {
                                    _fun79828_ip = 164;
                                    continue _fun79828
                                }
                            case 156:
                                var1 = var6.PROFILE_EDIT;
                                _fun79828_ip = 170;
                                continue _fun79828;
                            case 164:
                                var1 = var6.PROFILE_TRY_IT_OUT;
                            case 170:
                                var2.selectionContext = var1;
                                var1 = 'Select GIF Avatar';
                                var1 = var4.bind(var5)(var3, var1, var2);
                                return var0;
                        }
                    };
                    var2.handleUploadGIFAvatarSelect = var9;
                    var6 = function() { // Original name: handleEditAvatarDecorationSelect, environment: var6
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 15;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.openAvatarDecorationActionSheet;
                        var1 = {};
                        var5 = _closure2_slot0;
                        var1.user = var5;
                        var5 = _closure2_slot7;
                        var1.currentAvatarDecoration = var5;
                        var4 = _closure2_slot3;
                        var1.analyticsLocations = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var2.handleEditAvatarDecorationSelect = var6;
                    var6 = 16;
                    var6 = var8[var6];
                    var8 = var7.bind(var0)(var6);
                    var7 = var8.showRemoveAvatar;
                    var6 = _closure2_slot5;
                    var1 = _closure2_slot0;
                    var1 = var1.avatar;
                    var1 = var7.bind(var8)(var6, var1);
                    var2.showRemoveAvatar = var1;
                    var1 = 'Change Avatar';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
                var5 = var13.bind(var24)(var4, var5);
                _closure2_slot9 = var5;
                var13 = var24.useRef;
                var4 = false;
                var4 = var13.bind(var24)(var4);
                _closure2_slot10 = var4;
                var13 = var24.useEffect;
                var4 = new Array(3);
                var4[0] = var21;
                var4[1] = var2;
                var4[2] = var5;
                var2 = function() { // Environment: var0
                    _fun79830: for (var _fun79830_ip = 0;;) switch (_fun79830_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun79830_ip = 22;
                                continue _fun79830
                            }
                        case 10:
                            var2 = _closure2_slot10;
                            var2 = var2.current;
                            var1 = !var2;
                        case 22:
                            if (!var1) {
                                _fun79830_ip = 47;
                                continue _fun79830
                            }
                        case 25:
                            var2 = _closure2_slot10;
                            var1 = true;
                            var2.current = var1;
                            var1 = _closure2_slot9;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 47:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var13.bind(var24)(var2, var4);
                var17 = _closure1_slot0;
                var2 = 17;
                var2 = var18[var2];
                var14 = var17.bind(var3)(var2);
                var13 = var14.useStateFromStores;
                var2 = _closure1_slot4;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    var0 = _closure1_slot4;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var4 = var13.bind(var14)(var4, var2);
                var14 = 18;
                var2 = var18[var14];
                var23 = var17.bind(var3)(var2);
                var13 = var23.useSharedValue;
                var2 = 0;
                var25 = var13.bind(var23)(var2);
                _closure2_slot11 = var25;
                var2 = var18[var14];
                var23 = var17.bind(var3)(var2);
                var13 = var23.useAnimatedStyle;
                var2 = function() { // Original name: z, environment: var0
                    var0 = {};
                    var2 = {};
                    var3 = _closure2_slot11;
                    var1 = var3.get;
                    var5 = var1.bind(var3)();
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var3 = '';
                    var1 = 'deg';
                    var1 = var4.bind(var3)(var5, var1);
                    var2.rotateZ = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0.transform = var1;
                    return var0;
                };
                var26 = {};
                var26.rotation = var25;
                var2.__closure = var26;
                var26 = 13368223692459.0;
                var2.__workletHash = var26;
                var26 = _closure1_slot8;
                var2.__initData = var26;
                var13 = var13.bind(var23)(var2);
                var23 = var24.useEffect;
                var2 = new Array(1);
                var2[0] = var25;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot11;
                    var1 = var2.set;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var0 = 18;
                    var3 = var12[var0];
                    var10 = undefined;
                    var5 = var11.bind(var10)(var3);
                    var4 = var5.withRepeat;
                    var3 = 19;
                    var3 = var12[var3];
                    var7 = var11.bind(var10)(var3);
                    var6 = var7.withTiming;
                    var3 = {};
                    var8 = 3000;
                    var3.duration = var8;
                    var8 = var12[var0];
                    var8 = var11.bind(var10)(var8);
                    var9 = var8.Easing;
                    var8 = var9.inOut;
                    var0 = var12[var0];
                    var0 = var11.bind(var10)(var0);
                    var0 = var0.Easing;
                    var0 = var0.quad;
                    var0 = var8.bind(var9)(var0);
                    var3.easing = var0;
                    var0 = 360;
                    var3 = var6.bind(var7)(var0, var3);
                    var0 = -1;
                    var0 = var4.bind(var5)(var3, var0);
                    var0 = var1.bind(var2)(var0);
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 18;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.cancelAnimation;
                        var0 = _closure2_slot11;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    return var0;
                };
                var0 = var23.bind(var24)(var0, var2);
                var2 = _closure1_slot5;
                var0 = 20;
                var0 = var18[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.style = var22;
                var0.user = var21;
                var0.pendingAvatarSrc = var20;
                var0.pendingAvatarDecoration = var7;
                var0.statusStyle = var19;
                var0.disableStatus = var11;
                var0.size = var10;
                var11 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot6;
                var0 = 21;
                var0 = var18[var0];
                var0 = var17.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var0.style = var16;
                var0.disabled = var15;
                var0.onPress = var5;
                var5 = 'button';
                var0.accessibilityRole = var5;
                var5 = 22;
                var15 = var18[var5];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var5 = var18[var5];
                var5 = var17.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.MUgHIN;
                var5 = var15.bind(var16)(var5);
                var0.accessibilityLabel = var5;
                var5 = var11;
                if (!var6) {
                    _fun79825_ip = 890;
                    continue _fun79825
                }
            case 833:
                var6 = null;
                var5 = var11;
                if (!(var6 == var7)) {
                    _fun79825_ip = 890;
                    continue _fun79825
                }
            case 842:
                var5 = var11;
                if (var4) {
                    _fun79825_ip = 890;
                    continue _fun79825
                }
            case 848:
                var7 = _closure1_slot5;
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var14];
                var4 = var6.bind(var3)(var4);
                var6 = var4.View;
                var4 = {};
                var4.style = var13;
                var4.children = var11;
                var5 = var7.bind(var3)(var6, var4);
            case 890:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot5;
                var6 = _closure1_slot1;
                var11 = _closure1_slot2;
                var5 = 23;
                var5 = var11[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var13 = var9.editIcon;
                var9 = new Array(2);
                var9[0] = var13;
                var9[1] = var12;
                var5.style = var9;
                var9 = _closure1_slot0;
                var8 = 24;
                var8 = var11[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.AvatarSizes;
                var9 = var8.EDIT_AVATAR_DECORATION;
                var8 = 'xs';
                if (!(var10 === var9)) {
                    _fun79825_ip = 986;
                    continue _fun79825
                }
            case 982:
                var8 = 'sm';
            case 986:
                var5.size = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1298, 33, 1297, 5688, 5541, 3068, 5543, 5685, 10117, 3237, 10118, 1307, 10119, 10119, 5536, 5547, 566, 3679, 4056, 5696, 4865, 1234, 10120, 5416, 2]);