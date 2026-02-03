// modules/voice_panel/native/shared/VoicePanelStreamPreview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
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
    var9 = var3.StyleSheet;
    var8 = var3.Pressable;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot3 = var6;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = 3;
    var6 = var5[var3];
    var7 = var12.bind(var0)(var6);
    var6 = var7.createAnimatedComponent;
    var6 = var6.bind(var7)(var8);
    var _closure1_slot5 = var6;
    var3 = var5[var3];
    var7 = var12.bind(var0)(var3);
    var6 = var7.createAnimatedComponent;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Button;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = {};
    var6 = 200;
    var3.duration = var6;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'alignItems': 'center',
        'justifyContent': 'center',
        'width': '100%',
        'height': '100%'
    };
    var10 = 'center';
    var11 = 6;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.VOICE_VIDEO_VIDEO_TILE_BACKGROUND;
    var8.backgroundColor = var11;
    var3.roundedCard = var8;
    var8 = {};
    var14 = var9.absoluteFillObject;
    var15 = var8;
    var9 = copyDataProperties(var15, var14);
    var9 = 'alignItems';
    var8[var9] = var10;
    var9 = 'justifyContent';
    var8[var9] = var10;
    var3.streamPreviewImageContainer = var8;
    var8 = {
        'position': 'absolute',
        'width': '100%',
        'height': '100%',
        'opacity': 0.5
    };
    var3.streamPreviewImage = var8;
    var8 = {
        'position': 'absolute',
        'width': '75%',
        'opacity': 0.5
    };
    var3.streamPreviewImagePlaceholder = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = "function VoicePanelStreamPreviewTsx1(){const{mode,withTiming,OPACITY_TIMING}=this.__closure;if(mode==null){return{opacity:1};}return{opacity:withTiming(mode.get()==='pip'?0:1,OPACITY_TIMING)};}";
    var3.code = var6;
    var _closure1_slot9 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/shared/VoicePanelStreamPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun91633: for (var _fun91633_ip = 0;;) switch (_fun91633_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.mode;
                var _closure2_slot0 = var6;
                var7 = var1.stream;
                var12 = var1.disabled;
                var10 = var1.onPress;
                var13 = var1.layout;
                var1 = _closure1_slot8;
                var3 = undefined;
                var15 = var1.bind(var3)();
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 7;
                var1 = var4[var1];
                var5 = var2.bind(var3)(var1);
                var9 = null;
                var1 = var9 == var7;
                var4 = undefined;
                if (var1) {
                    _fun91633_ip = 85;
                    continue _fun91633
                }
            case 80:
                var4 = var7.guildId;
            case 85:
                var1 = var9 == var7;
                var2 = undefined;
                if (var1) {
                    _fun91633_ip = 99;
                    continue _fun91633
                }
            case 94:
                var2 = var7.channelId;
            case 99:
                var8 = var9 == var7;
                var1 = undefined;
                if (var8) {
                    _fun91633_ip = 114;
                    continue _fun91633
                }
            case 108:
                var1 = var7.ownerId;
            case 114:
                var1 = var5.bind(var3)(var4, var2, var1);
                var7 = var1.previewUrl;
                var8 = _closure1_slot0;
                var14 = _closure1_slot2;
                var4 = 3;
                var1 = var14[var4];
                var2 = var8.bind(var3)(var1);
                var1 = var2.useAnimatedStyle;
                var0 = function() {
                    _fun91634: for (var _fun91634_ip = 0;;) switch (_fun91634_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun91634_ip = 87;
                                continue _fun91634
                            }
                        case 13:
                            var0 = {};
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 8;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var3 = var4.withTiming;
                            var5 = _closure2_slot0;
                            var2 = var5.get;
                            var6 = var2.bind(var5)();
                            var2 = 1;
                            var5 = 'pip';
                            if (!(var5 === var6)) {
                                _fun91634_ip = 71;
                                continue _fun91634
                            }
                        case 69:
                            var2 = 0;
                        case 71:
                            var1 = _closure1_slot7;
                            var1 = var3.bind(var4)(var2, var1);
                            var0.opacity = var1;
                            _fun91634_ip = 99;
                            continue _fun91634;
                        case 87:
                            var1 = {};
                            var2 = 1;
                            var1.opacity = var2;
                            var0 = var1;
                        case 99:
                            return var0;
                    }
                };
                var5 = {};
                var5.mode = var6;
                var6 = 8;
                var6 = var14[var6];
                var6 = var8.bind(var3)(var6);
                var6 = var6.withTiming;
                var5.withTiming = var6;
                var6 = _closure1_slot7;
                var5.OPACITY_TIMING = var6;
                var0.__closure = var5;
                var5 = 15496474861955.0;
                var0.__workletHash = var5;
                var5 = _closure1_slot9;
                var0.__initData = var5;
                var8 = var1.bind(var2)(var0);
                var2 = _closure1_slot4;
                var1 = _closure1_slot5;
                var0 = {};
                var0.layout = var13;
                var0.onPress = var10;
                var5 = var15.roundedCard;
                var0.style = var5;
                var0.disabled = var12;
                var5 = false;
                var0.accessible = var5;
                var6 = _closure1_slot3;
                var5 = _closure1_slot1;
                var4 = var14[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Image;
                var4 = {};
                var4.layout = var13;
                if (!(var9 == var7)) {
                    _fun91633_ip = 328;
                    continue _fun91633
                }
            case 306:
                var16 = _closure1_slot1;
                var17 = _closure1_slot2;
                var14 = 9;
                var14 = var17[var14];
                var14 = var16.bind(var3)(var14);
                _fun91633_ip = 337;
                continue _fun91633;
            case 328:
                var16 = {};
                var16.uri = var7;
                var14 = var16;
            case 337:
                var4.source = var14;
                if (!(var9 == var7)) {
                    _fun91633_ip = 353;
                    continue _fun91633
                }
            case 345:
                var14 = var15.streamPreviewImagePlaceholder;
                _fun91633_ip = 359;
                continue _fun91633;
            case 353:
                var14 = var15.streamPreviewImage;
            case 359:
                var4.style = var14;
                var9 = var9 != var7;
                var7 = 'contain';
                if (!var9) {
                    _fun91633_ip = 378;
                    continue _fun91633
                }
            case 374:
                var7 = 'cover';
            case 378:
                var4.resizeMode = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot3;
                var6 = _closure1_slot1;
                var15 = _closure1_slot2;
                var5 = 10;
                var5 = var15[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.style = var8;
                var5.layout = var13;
                var9 = _closure1_slot6;
                var8 = {};
                var8.layout = var13;
                var8.disabled = var12;
                var14 = _closure1_slot0;
                var11 = 11;
                var12 = var15[var11];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11["7Xq/nV"];
                var11 = var12.bind(var13)(var11);
                var8.text = var11;
                var11 = 'sm';
                var8.size = var11;
                var11 = 'primary-overlay';
                var8.variant = var11;
                var8.onPress = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.VoicePanelStreamPreview = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 3711, 4075, 1297, 671, 8663, 4088, 8661, 6453, 1234, 2]);