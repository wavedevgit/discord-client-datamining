// modules/voice_panel/native/card/VoicePanelCTACardCallerDisconnected.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun111308: for (var _fun111308_ip = 0;;) switch (_fun111308_ip) {
            case 0:
                var2 = arg0;
                var3 = 'number';
                var1 = typeof var2;
                var0 = var2;
                if (!(var3 !== var1)) {
                    _fun111308_ip = 26;
                    continue _fun111308
                }
            case 17:
                var1 = {};
                var1.uri = var2;
                var0 = var1;
            case 26:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot8 = var7;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'width': '100%',
        'height': '100%',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var10 = 'center';
    var11 = 7;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.VOICE_VIDEO_VIDEO_TILE_BACKGROUND;
    var9.backgroundColor = var13;
    var3.container = var9;
    var9 = {
        'flexDirection': 'row',
        'gap': 24
    };
    var3.avatarContainer = var9;
    var9 = {
        'width': 80,
        'height': 80,
        'borderRadius': null,
        'overflow': 'hidden'
    };
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var9.borderRadius = var11;
    var3.avatarWrapper = var9;
    var9 = {
        'width': 80,
        'height': 80
    };
    var3.avatar = var9;
    var9 = {};
    var11 = 0.2;
    var9.opacity = var11;
    var3.disconnectedAvatar = var9;
    var9 = {
        'position': 'absolute',
        'left': 0,
        'right': 0,
        'bottom': 0,
        'padding': 16,
        'width': '100%'
    };
    var3.textContainer = var9;
    var9 = {};
    var9.textAlign = var10;
    var3.text = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot10 = var3;
    var3 = var6.memo;
    var1 = function() {
        _fun111309: for (var _fun111309_ip = 0;;) switch (_fun111309_ip) {
            case 0:
                var4 = _closure1_slot4;
                var2 = var4.useContext;
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 8;
                var0 = var3[var0];
                var3 = undefined;
                var0 = var5.bind(var3)(var0);
                var0 = var2.bind(var4)(var0);
                var14 = var0.channelId;
                var _closure2_slot0 = var14;
                var0 = _closure1_slot10;
                var15 = var0.bind(var3)();
                var2 = _closure1_slot6;
                var0 = var2.getChannel;
                var0 = var0.bind(var2)(var14);
                var9 = null;
                var4 = var9 == var0;
                var2 = undefined;
                if (var4) {
                    _fun111309_ip = 90;
                    continue _fun111309
                }
            case 84:
                var2 = var0.recipients;
            case 90:
                if (!(var9 == var2)) {
                    _fun111309_ip = 98;
                    continue _fun111309
                }
            case 94:
                var2 = new Array(0);
            case 98:
                var6 = _closure1_slot3;
                var0 = 1;
                var4 = var6.bind(var3)(var2, var0);
                var2 = 0;
                var12 = var4[var2];
                var _closure2_slot1 = var12;
                var5 = _closure1_slot5;
                var4 = var5.getId;
                var13 = var4.bind(var5)();
                var _closure2_slot2 = var13;
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var5 = 9;
                var5 = var4[var5];
                var10 = var7.bind(var3)(var5);
                var8 = var10.useStateFromStoresArray;
                var5 = _closure1_slot7;
                var7 = new Array(1);
                var7[0] = var5;
                var5 = new Array(3);
                var5[0] = var14;
                var5[1] = var13;
                var5[2] = var12;
                var1 = function() { // Environment: var1
                    _fun111310: for (var _fun111310_ip = 0;;) switch (_fun111310_ip) {
                        case 0:
                            var4 = _closure1_slot7;
                            var3 = var4.getUser;
                            var0 = _closure2_slot2;
                            var8 = var3.bind(var4)(var0);
                            var3 = var4.getUser;
                            var0 = _closure2_slot1;
                            var5 = var3.bind(var4)(var0);
                            var3 = null;
                            var0 = var3 == var8;
                            var4 = undefined;
                            var6 = undefined;
                            if (var0) {
                                _fun111310_ip = 68;
                                continue _fun111310
                            }
                        case 53:
                            var7 = var8.getAvatarURL;
                            var0 = 80;
                            var6 = var7.bind(var8)(var4, var0);
                        case 68:
                            var0 = new Array(3);
                            var0[0] = var6;
                            var6 = var3 == var5;
                            var3 = undefined;
                            if (var6) {
                                _fun111310_ip = 100;
                                continue _fun111310
                            }
                        case 85:
                            var7 = var5.getAvatarURL;
                            var6 = 80;
                            var3 = var7.bind(var5)(var4, var6);
                        case 100:
                            var0[1] = var3;
                            var3 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 10;
                            var2 = var6[var2];
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.getName;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var3)(var4, var1, var5);
                            var0[2] = var1;
                            return var0;
                    }
                };
                var5 = var8.bind(var10)(var7, var1, var5);
                var1 = 3;
                var1 = var6.bind(var3)(var5, var1);
                var18 = var1[var2];
                var19 = var1[var0];
                var0 = 2;
                var17 = var1[var0];
                var2 = _closure1_slot9;
                var6 = _closure1_slot1;
                var5 = 11;
                var0 = var4[var5];
                var1 = var6.bind(var3)(var0);
                var0 = {};
                var7 = var15.container;
                var0.style = var7;
                var4 = var4[var5];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var7 = var15.avatarContainer;
                var4.style = var7;
                var8 = var9 != var18;
                if (!var8) {
                    _fun111309_ip = 376;
                    continue _fun111309
                }
            case 290:
                var12 = _closure1_slot8;
                var14 = _closure1_slot1;
                var16 = _closure1_slot2;
                var7 = var16[var5];
                var10 = var14.bind(var3)(var7);
                var7 = {};
                var13 = var15.avatarWrapper;
                var7.style = var13;
                var13 = 12;
                var13 = var16[var13];
                var14 = var14.bind(var3)(var13);
                var13 = {};
                var16 = _closure1_slot11;
                var16 = var16.bind(var3)(var18);
                var13.source = var16;
                var16 = var15.avatar;
                var13.style = var16;
                var13 = var12.bind(var3)(var14, var13);
                var7.children = var13;
                var8 = var12.bind(var3)(var10, var7);
            case 376:
                var7 = new Array(2);
                var7[0] = var8;
                var8 = var9 != var19;
                if (!var8) {
                    _fun111309_ip = 495;
                    continue _fun111309
                }
            case 391:
                var13 = _closure1_slot8;
                var16 = _closure1_slot1;
                var18 = _closure1_slot2;
                var10 = var18[var5];
                var12 = var16.bind(var3)(var10);
                var10 = {};
                var14 = var15.avatarWrapper;
                var10.style = var14;
                var14 = 12;
                var14 = var18[var14];
                var16 = var16.bind(var3)(var14);
                var14 = {};
                var18 = _closure1_slot11;
                var18 = var18.bind(var3)(var19);
                var14.source = var18;
                var19 = var15.avatar;
                var18 = new Array(2);
                var18[0] = var19;
                var19 = var15.disconnectedAvatar;
                var18[1] = var19;
                var14.style = var18;
                var14 = var13.bind(var3)(var16, var14);
                var10.children = var14;
                var8 = var13.bind(var3)(var12, var10);
            case 495:
                var7[1] = var8;
                var4.children = var7;
                var6 = var2.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot9;
                var6 = _closure1_slot1;
                var14 = _closure1_slot2;
                var5 = var14[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var8 = var15.textContainer;
                var5.style = var8;
                var13 = _closure1_slot8;
                var20 = _closure1_slot0;
                var10 = 13;
                var8 = var14[var10];
                var8 = var20.bind(var3)(var8);
                var12 = var8.Text;
                var8 = {
                    'style': null,
                    'variant': 'heading-sm/semibold',
                    'color': 'always-white'
                };
                var16 = var15.text;
                var8.style = var16;
                var18 = 14;
                var16 = var14[var18];
                var16 = var20.bind(var3)(var16);
                var19 = var16.intl;
                var16 = var19.string;
                var14 = var14[var18];
                var14 = var20.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.WkAgPU;
                var14 = var16.bind(var19)(var14);
                var8.children = var14;
                var12 = var13.bind(var3)(var12, var8);
                var8 = new Array(2);
                var8[0] = var12;
                var9 = var9 != var17;
                if (!var9) {
                    _fun111309_ip = 786;
                    continue _fun111309
                }
            case 672:
                var12 = _closure1_slot8;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var10 = var13[var10];
                var10 = var14.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'always-white'
                };
                var15 = var15.text;
                var10.style = var15;
                var15 = var13[var18];
                var15 = var14.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.format;
                var13 = var13[var18];
                var13 = var14.bind(var3)(var13);
                var13 = var13.t;
                var14 = var13.kXrAqz;
                var13 = {};
                var13.username = var17;
                var13 = var15.bind(var16)(var14, var13);
                var10.children = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 786:
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/card/VoicePanelCTACardCallerDisconnected.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1216, 1372, 1621, 33, 1297, 671, 11818, 566, 3961, 6457, 4704, 4876, 1234, 2]);