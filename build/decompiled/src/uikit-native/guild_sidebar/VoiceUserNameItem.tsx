// uikit-native/guild_sidebar/VoiceUserNameItem.tsx
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
    var9 = 0;
    var3 = var5[var9];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsxs;
    var _closure1_slot6 = var6;
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'marginLeft': 8,
        'flex': 1,
        'flexDirection': 'row'
    };
    var3.container = var8;
    var8 = {
        'marginLeft': 4,
        'alignSelf': 'center'
    };
    var3.tag = var8;
    var8 = {};
    var8.opacity = var9;
    var3.measuringTag = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/guild_sidebar/VoiceUserNameItem.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: VoiceUserNameItem, environment: var1
        _fun102088: for (var _fun102088_ip = 0;;) switch (_fun102088_ip) {
            case 0:
                var1 = arg0;
                var20 = var1.member;
                var12 = var1.user;
                var5 = var1.guildId;
                var17 = var1.isGuest;
                var21 = var1.color;
                var23 = var1.variant;
                var1 = _closure1_slot8;
                var3 = undefined;
                var11 = var1.bind(var3)();
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 5;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = var12.id;
                var1.userId = var6;
                var1.guildId = var5;
                var5 = var2.bind(var3)(var1);
                var2 = _closure1_slot0;
                var1 = 6;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var2 = var4.useDisplayNameStylesFont;
                var1 = {};
                var1.displayNameStyles = var5;
                var22 = var2.bind(var4)(var1);
                var6 = _closure1_slot4;
                var1 = var6.useState;
                var14 = 0;
                var1 = var1.bind(var6)(var14);
                var4 = _closure1_slot3;
                var2 = 2;
                var1 = var4.bind(var3)(var1, var2);
                var8 = var1[var14];
                var19 = 1;
                var1 = var1[var19];
                var _closure2_slot0 = var1;
                var1 = var6.useState;
                var1 = var1.bind(var6)(var14);
                var1 = var4.bind(var3)(var1, var2);
                var13 = var1[var14];
                var1 = var1[var19];
                var _closure2_slot1 = var1;
                var5 = var6.useState;
                var1 = true;
                var1 = var5.bind(var6)(var1);
                var1 = var4.bind(var3)(var1, var2);
                var5 = var1[var14];
                var1 = var1[var19];
                var _closure2_slot2 = var1;
                var1 = var6.useState;
                var1 = var1.bind(var6)(var14);
                var1 = var4.bind(var3)(var1, var2);
                var7 = var1[var14];
                var1 = var1[var19];
                var _closure2_slot3 = var1;
                var4 = var6.useCallback;
                var2 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var1 = var0.width;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = new Array(0);
                var4 = var4.bind(var6)(var2, var1);
                var10 = var6.useCallback;
                var2 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot1;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var1 = var0.width;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = new Array(0);
                var16 = var10.bind(var6)(var2, var1);
                var2 = var6.useCallback;
                var1 = function(arg0) { // Environment: var0
                    var3 = _closure2_slot3;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var2 = var0.width;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure2_slot2;
                    var1 = false;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var10 = var2.bind(var6)(var1, var0);
                var2 = _closure1_slot6;
                var1 = _closure1_slot5;
                var0 = {};
                var0.onLayout = var4;
                var6 = var11.container;
                var4 = new Array(2);
                var4[0] = var6;
                var6 = var5;
                if (!var5) {
                    _fun102088_ip = 360;
                    continue _fun102088
                }
            case 354:
                var6 = var11.measuringTag;
            case 360:
                var4[1] = var6;
                var0.style = var4;
                var15 = _closure1_slot6;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var18 = 7;
                var4 = var4[var18];
                var4 = var6.bind(var3)(var4);
                var6 = var4.Text;
                var4 = {};
                var4.variant = var23;
                var4.color = var21;
                var4.lineClamp = var19;
                var4.onLayout = var16;
                var16 = null;
                var19 = var16 != var22;
                if (!var19) {
                    _fun102088_ip = 436;
                    continue _fun102088
                }
            case 426:
                var21 = {};
                var21.fontFamily = var22;
                var19 = var21;
            case 436:
                var4.style = var19;
                var21 = var16 == var20;
                var19 = undefined;
                if (var21) {
                    _fun102088_ip = 455;
                    continue _fun102088
                }
            case 449:
                var19 = var20.nick;
            case 455:
                if (!(var16 == var19)) {
                    _fun102088_ip = 490;
                    continue _fun102088
                }
            case 459:
                var20 = _closure1_slot1;
                var21 = _closure1_slot2;
                var16 = 8;
                var16 = var21[var16];
                var20 = var20.bind(var3)(var16);
                var16 = var20.getName;
                var19 = var16.bind(var20)(var12);
            case 490:
                var16 = new Array(2);
                var16[0] = var19;
                if (!var17) {
                    _fun102088_ip = 612;
                    continue _fun102088
                }
            case 501:
                var20 = _closure1_slot6;
                var24 = _closure1_slot0;
                var25 = _closure1_slot2;
                var18 = var25[var18];
                var18 = var24.bind(var3)(var18);
                var19 = var18.Text;
                var18 = {
                    'variant': 'text-sm/normal',
                    'lineClamp': 1,
                    'color': 'status-positive'
                };
                var21 = 9;
                var22 = var25[var21];
                var22 = var24.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var25[var21];
                var21 = var24.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21["pFO/Ph"];
                var22 = var22.bind(var23)(var21);
                var21 = ['\xa0'];
                var21[1] = var22;
                var18.children = var21;
                var17 = var20.bind(var3)(var19, var18);
            case 612:
                var16[1] = var17;
                var4.children = var16;
                var6 = var15.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                if (var5) {
                    _fun102088_ip = 669;
                    continue _fun102088
                }
            case 637:
                var6 = var14 !== var8;
                if (!var6) {
                    _fun102088_ip = 648;
                    continue _fun102088
                }
            case 644:
                var6 = var14 !== var13;
            case 648:
                if (!var6) {
                    _fun102088_ip = 655;
                    continue _fun102088
                }
            case 651:
                var6 = var14 !== var7;
            case 655:
                if (!var6) {
                    _fun102088_ip = 666;
                    continue _fun102088
                }
            case 658:
                var7 = var13 + var7;
                var6 = var8 >= var7;
            case 666:
                var5 = var6;
            case 669:
                if (!var5) {
                    _fun102088_ip = 753;
                    continue _fun102088
                }
            case 672:
                var8 = _closure1_slot7;
                var7 = _closure1_slot5;
                var6 = {};
                var6.onLayout = var10;
                var10 = var11.tag;
                var6.style = var10;
                var10 = _closure1_slot1;
                var13 = _closure1_slot2;
                var9 = 10;
                var9 = var13[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var12 = var12.id;
                var9.userId = var12;
                var11 = var11.tag;
                var9.containerStyles = var11;
                var9 = var8.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 753:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 3943, 6882, 3900, 3195, 1234, 13265, 2]);