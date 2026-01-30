// modules/activity_status/native/VoiceActivityStatus.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var9 = 0;
    var6 = var5[var9];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot3 = var6;
    var6 = var3.Fragment;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flexShrink = var9;
    var3.icon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activity_status/native/VoiceActivityStatus.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: VoiceActivityStatus, environment: var1
        _fun61936: for (var _fun61936_ip = 0;;) switch (_fun61936_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.channel;
                var15 = var0.iconStyle;
                var13 = var0.textStyle;
                var12 = var0.maxFontSizeMultiplier;
                var5 = var0.hideIcon;
                var4 = undefined;
                if (!(var5 === var4)) {
                    _fun61936_ip = 40;
                    continue _fun61936
                }
            case 38:
                var5 = false;
            case 40:
                var6 = var0.hideText;
                if (!(var6 === var4)) {
                    _fun61936_ip = 52;
                    continue _fun61936
                }
            case 50:
                var6 = false;
            case 52:
                var0 = _closure1_slot6;
                var14 = var0.bind(var4)();
                if (!var5) {
                    _fun61936_ip = 74;
                    continue _fun61936
                }
            case 66:
                var0 = null;
                if (var6) {
                    _fun61936_ip = 457;
                    continue _fun61936
                }
            case 74:
                var3 = _closure1_slot5;
                var2 = _closure1_slot4;
                var1 = {};
                var7 = !var5;
                if (!var7) {
                    _fun61936_ip = 161;
                    continue _fun61936
                }
            case 90:
                var10 = _closure1_slot3;
                var9 = _closure1_slot1;
                var16 = _closure1_slot2;
                var5 = 3;
                var5 = var16[var5];
                var9 = var9.bind(var4)(var5);
                var5 = {
                    'channel': null,
                    'size': 'xxs',
                    'color': 'status-positive'
                };
                var5.channel = var8;
                var16 = var14.icon;
                var14 = new Array(2);
                var14[0] = var16;
                var14[1] = var15;
                var5.style = var14;
                var7 = var10.bind(var4)(var9, var5);
            case 161:
                var5 = new Array(2);
                var5[0] = var7;
                var6 = !var6;
                if (!var6) {
                    _fun61936_ip = 443;
                    continue _fun61936
                }
            case 178:
                var7 = var8.isDM;
                var7 = var7.bind(var8)();
                if (var7) {
                    _fun61936_ip = 344;
                    continue _fun61936
                }
            case 194:
                var7 = var8.isGroupDM;
                var7 = var7.bind(var8)();
                if (var7) {
                    _fun61936_ip = 344;
                    continue _fun61936
                }
            case 210:
                var7 = var8.isGuildStageVoice;
                var7 = var7.bind(var8)();
                var10 = _closure1_slot3;
                var9 = _closure1_slot1;
                var18 = _closure1_slot2;
                var8 = 4;
                var8 = var18[var8];
                var9 = var9.bind(var4)(var8);
                var8 = {};
                var8.style = var13;
                var8.maxFontSizeMultiplier = var12;
                var17 = _closure1_slot0;
                var14 = 5;
                var15 = var18[var14];
                var15 = var17.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var18[var14];
                var14 = var17.bind(var4)(var14);
                var14 = var14.t;
                if (var7) {
                    _fun61936_ip = 321;
                    continue _fun61936
                }
            case 298:
                var7 = var14.msxteM;
                var7 = var15.bind(var16)(var7);
                var8.children = var7;
                var7 = var10.bind(var4)(var9, var8);
                _fun61936_ip = 342;
                continue _fun61936;
            case 321:
                var14 = var14.QygGCN;
                var14 = var15.bind(var16)(var14);
                var8.children = var14;
                var7 = var10.bind(var4)(var9, var8);
            case 342:
                _fun61936_ip = 440;
                continue _fun61936;
            case 344:
                var10 = _closure1_slot3;
                var9 = _closure1_slot1;
                var15 = _closure1_slot2;
                var8 = 4;
                var8 = var15[var8];
                var9 = var9.bind(var4)(var8);
                var8 = {};
                var8.style = var13;
                var8.maxFontSizeMultiplier = var12;
                var14 = _closure1_slot0;
                var11 = 5;
                var12 = var15[var11];
                var12 = var14.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11["9FaEzi"];
                var11 = var12.bind(var13)(var11);
                var8.children = var11;
                var7 = var10.bind(var4)(var9, var8);
            case 440:
                var6 = var7;
            case 443:
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 457:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 7745, 7733, 1234, 2]);