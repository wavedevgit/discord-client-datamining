// modules/notifications/settings/native/NotificationSettingsMockMessage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserNotificationSettings;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'backgroundColor': null,
        'overflow': 'hidden',
        'borderRadius': 10,
        'padding': 16
    };
    var9 = 6;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var11;
    var3.card = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row'
    };
    var3.cardContent = var8;
    var8 = {
        'marginLeft': 12,
        'maxWidth': 240
    };
    var3.cardMessage = var8;
    var8 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var9;
    var3.overlay = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = 'function NotificationSettingsMockMessageTsx1(){const{withTiming,opacity,timingStandard}=this.__closure;return{opacity:withTiming(opacity.get(),timingStandard)};}';
    var3.code = var6;
    var _closure1_slot10 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notifications/settings/native/NotificationSettingsMockMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun70174: for (var _fun70174_ip = 0;;) switch (_fun70174_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot9;
                var3 = undefined;
                var9 = var2.bind(var3)();
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 7;
                var2 = var6[var2];
                var7 = var4.bind(var3)(var2);
                var5 = var7.useStateFromStores;
                var2 = _closure1_slot5;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var5.bind(var7)(var4, var2);
                var4 = _closure1_slot1;
                var2 = 8;
                var2 = var6[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.getName;
                var2 = var2.bind(var4)(var5);
                var4 = null;
                var4 = var4 != var2;
                var17 = 'Roka';
                if (!var4) {
                    _fun70174_ip = 113;
                    continue _fun70174
                }
            case 110:
                var17 = var2;
            case 113:
                var4 = var1.notificationSetting;
                var2 = _closure1_slot6;
                var2 = var2.NO_MESSAGES;
                var5 = var4 === var2;
                var _closure2_slot0 = var5;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var8 = 9;
                var2 = var2[var8];
                var6 = var4.bind(var3)(var2);
                var4 = var6.useSharedValue;
                var2 = 0;
                if (!var5) {
                    _fun70174_ip = 178;
                    continue _fun70174
                }
            case 168:
                var2 = 0.8;
            case 178:
                var6 = var4.bind(var6)(var2);
                var _closure2_slot1 = var6;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = var13[var8];
                var7 = var12.bind(var3)(var2);
                var4 = var7.useAnimatedStyle;
                var2 = function() {
                    var0 = {};
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 10;
                    var1 = var7[var1];
                    var5 = undefined;
                    var4 = var6.bind(var5)(var1);
                    var3 = var4.withTiming;
                    var2 = _closure2_slot1;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = 11;
                    var1 = var7[var1];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.timingStandard;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.opacity = var1;
                    return var0;
                };
                var10 = {};
                var11 = 10;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.withTiming;
                var10.withTiming = var11;
                var10.opacity = var6;
                var11 = 11;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.timingStandard;
                var10.timingStandard = var11;
                var2.__closure = var10;
                var10 = 6531430956793.0;
                var2.__workletHash = var10;
                var10 = _closure1_slot10;
                var2.__initData = var10;
                var10 = var4.bind(var7)(var2);
                var2 = var1.notificationSetting;
                var1 = _closure1_slot6;
                var1 = var1.ALL_MESSAGES;
                if (!(var2 !== var1)) {
                    _fun70174_ip = 523;
                    continue _fun70174
                }
            case 327:
                var4 = _closure1_slot7;
                var2 = _closure1_slot4;
                var1 = {};
                var12 = _closure1_slot8;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var13 = 12;
                var7 = var19[var13];
                var7 = var18.bind(var3)(var7);
                var11 = var7.Text;
                var7 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var13 = var19[var13];
                var13 = var18.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {
                    'variant': 'text-sm/normal',
                    'color': 'text-link'
                };
                var16 = ['@'];
                var16[1] = var17;
                var17 = ' ';
                var16[2] = var17;
                var13.children = var16;
                var14 = var12.bind(var3)(var14, var13);
                var13 = new Array(2);
                var13[0] = var14;
                var14 = 13;
                var16 = var19[var14];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var14 = var19[var14];
                var14 = var18.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.WYyzI5;
                var14 = var16.bind(var17)(var14);
                var13[1] = var14;
                var7.children = var13;
                var7 = var12.bind(var3)(var11, var7);
                var1.children = var7;
                var14 = var4.bind(var3)(var2, var1);
                _fun70174_ip = 623;
                continue _fun70174;
            case 523:
                var4 = _closure1_slot7;
                var13 = _closure1_slot0;
                var16 = _closure1_slot2;
                var1 = 12;
                var1 = var16[var1];
                var1 = var13.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var7 = 13;
                var11 = var16[var7];
                var11 = var13.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var7 = var16[var7];
                var7 = var13.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.WYyzI5;
                var7 = var11.bind(var12)(var7);
                var1.children = var7;
                var14 = var4.bind(var3)(var2, var1);
            case 623:
                var4 = _closure1_slot3;
                var2 = var4.useEffect;
                var1 = new Array(2);
                var1[0] = var6;
                var1[1] = var5;
                var0 = function() { // Environment: var0
                    _fun70177: for (var _fun70177_ip = 0;;) switch (_fun70177_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = var2.set;
                            var3 = _closure2_slot0;
                            var0 = 0;
                            if (!var3) {
                                _fun70177_ip = 31;
                                continue _fun70177
                            }
                        case 21:
                            var0 = 0.8;
                        case 31:
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot8;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var9.card;
                var0.style = var4;
                var4 = {};
                var5 = var9.cardContent;
                var4.style = var5;
                var7 = _closure1_slot7;
                var11 = {};
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var12 = 14;
                var12 = var5[var12];
                var13 = var6.bind(var3)(var12);
                var12 = {};
                var16 = 15;
                var16 = var5[var16];
                var16 = var6.bind(var3)(var16);
                var12.source = var16;
                var19 = _closure1_slot0;
                var15 = 16;
                var15 = var5[var15];
                var15 = var19.bind(var3)(var15);
                var15 = var15.AvatarSizes;
                var15 = var15.LARGE_48;
                var12.size = var15;
                var12 = var7.bind(var3)(var13, var12);
                var11.children = var12;
                var12 = var7.bind(var3)(var1, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var12 = {};
                var13 = var9.cardMessage;
                var12.style = var13;
                var13 = 12;
                var13 = var5[var13];
                var13 = var19.bind(var3)(var13);
                var15 = var13.Text;
                var13 = {};
                var16 = 'text-sm/semibold';
                var13.variant = var16;
                var16 = 13;
                var17 = var5[var16];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var5[var16];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.qSq0tD;
                var16 = var17.bind(var18)(var16);
                var13.children = var16;
                var15 = var7.bind(var3)(var15, var13);
                var13 = new Array(2);
                var13[0] = var15;
                var13[1] = var14;
                var12.children = var13;
                var12 = var2.bind(var3)(var1, var12);
                var11[1] = var12;
                var4.children = var11;
                var11 = var2.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var11;
                var5 = var5[var8];
                var5 = var6.bind(var3)(var5);
                var6 = var5.View;
                var5 = {};
                var8 = new Array(2);
                var8[0] = var10;
                var9 = var9.overlay;
                var8[1] = var9;
                var5.style = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1621, 660, 33, 1297, 671, 566, 3238, 3722, 4098, 4884, 3943, 1234, 5457, 8801, 5459, 2]);