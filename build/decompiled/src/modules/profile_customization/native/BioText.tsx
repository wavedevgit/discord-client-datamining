// modules/profile_customization/native/BioText.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var9 = var0.lineClamp;
        var8 = var0.text;
        var0 = _closure1_slot10;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var2 = _closure1_slot8;
        var1 = _closure1_slot4;
        var0 = {};
        var5 = function() {
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var0 = 6;
            var1 = var3[var0];
            var0 = undefined;
            var6 = var2.bind(var0)(var1);
            var4 = var6.openURL;
            var1 = _closure1_slot6;
            var1 = var4.bind(var6)(var1);
            var1 = 7;
            var1 = var3[var1];
            var4 = var2.bind(var0)(var1);
            var3 = var4.track;
            var1 = _closure1_slot5;
            var2 = var1.CHANGE_LOG_CTA_CLICKED;
            var1 = {};
            var6 = 'profile_bio';
            var1.cta_type = var6;
            var5 = _closure1_slot6;
            var1.target = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0.onPress = var5;
        var5 = var7.link;
        var0.style = var5;
        var6 = _closure1_slot7;
        var5 = _closure1_slot0;
        var10 = _closure1_slot2;
        var4 = 8;
        var4 = var10[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {
            'variant': 'text-md/normal',
            'color': 'text-link'
        };
        var4.lineClamp = var9;
        var7 = var7.link;
        var4.style = var7;
        var7 = ['\n'];
        var7[1] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
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
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Pressable;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CHANGELOG_URL;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsxs;
    var _closure1_slot7 = var6;
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.Fragment;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'alignSelf': 'stretch',
        'textAlignVertical': 'top',
        'width': '100%',
        'flexGrow': 1,
        'paddingTop': 2,
        'lineHeight': 24
    };
    var3.text = var8;
    var8 = {
        'alignSelf': 'stretch',
        'textAlignVertical': 'bottom',
        'width': '100%',
        'flexGrow': 1,
        'display': 'flex',
        'paddingBottom': 2
    };
    var3.span = var8;
    var8 = {
        'alignSelf': 'stretch',
        'textAlignVertical': 'bottom',
        'width': '100%',
        'flexGrow': 1,
        'bottom': 4294967292,
        'position': 'relative'
    };
    var3.link = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/profile_customization/native/BioText.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun61094: for (var _fun61094_ip = 0;;) switch (_fun61094_ip) {
            case 0:
                var2 = arg0;
                var7 = var2.placeholder;
                var0 = var2.bio;
                var _closure2_slot0 = var0;
                var11 = var2.lineClamp;
                var _closure2_slot1 = var11;
                var1 = var2.userId;
                var16 = var2.textVariant;
                var4 = undefined;
                if (!(var16 === var4)) {
                    _fun61094_ip = 54;
                    continue _fun61094
                }
            case 48:
                var16 = 'text-md/normal';
            case 54:
                var _closure2_slot2 = var16;
                var2 = _closure1_slot10;
                var10 = var2.bind(var4)();
                var8 = _closure1_slot3;
                var5 = var8.useMemo;
                var3 = new Array(2);
                var3[0] = var0;
                var3[1] = var16;
                var2 = function() { // Environment: var13
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 9;
                    var0 = var2[var0];
                    var4 = undefined;
                    var3 = var1.bind(var4)(var0);
                    var2 = var3.parseBioReact;
                    var1 = _closure2_slot0;
                    var0 = {};
                    var5 = _closure2_slot2;
                    var0.linkVariant = var5;
                    var0 = var2.bind(var3)(var1, var4, var0);
                    return var0;
                };
                var5 = var5.bind(var8)(var2, var3);
                var2 = var0.length;
                var0 = 0;
                var15 = var0 === var2;
                if (!var15) {
                    _fun61094_ip = 143;
                    continue _fun61094
                }
            case 115:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 10;
                var0 = var3[var0];
                var0 = var2.bind(var4)(var0);
                var0 = var0.bind(var4)(var1);
                var15 = !var0;
            case 143:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 10;
                var0 = var3[var0];
                var0 = var2.bind(var4)(var0);
                var0 = var0.bind(var4)(var1);
                if (var0) {
                    _fun61094_ip = 272;
                    continue _fun61094
                }
            case 171:
                if (!var15) {
                    _fun61094_ip = 183;
                    continue _fun61094
                }
            case 174:
                var0 = null;
                var1 = var0 == var7;
                if (var1) {
                    _fun61094_ip = 267;
                    continue _fun61094
                }
            case 183:
                var3 = _closure1_slot8;
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 8;
                var1 = var8[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {};
                var1.variant = var16;
                var8 = 'text-default';
                if (!var15) {
                    _fun61094_ip = 233;
                    continue _fun61094
                }
            case 227:
                var8 = 'text-muted';
            case 233:
                var1.color = var8;
                var1.lineClamp = var11;
                var8 = var10.text;
                var1.style = var8;
                if (!var15) {
                    _fun61094_ip = 257;
                    continue _fun61094
                }
            case 254:
                var5 = var7;
            case 257:
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 267:
                _fun61094_ip = 599;
                continue _fun61094;
            case 272:
                var3 = _closure1_slot7;
                var2 = _closure1_slot9;
                var1 = {};
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var17 = 8;
                var5 = var5[var17];
                var5 = var7.bind(var4)(var5);
                var18 = var5.Text;
                var9 = {};
                var9.variant = var16;
                var12 = 'text-default';
                var5 = var12;
                if (!var15) {
                    _fun61094_ip = 331;
                    continue _fun61094
                }
            case 325:
                var5 = 'text-muted';
            case 331:
                var9.color = var5;
                var9.lineClamp = var11;
                var5 = var10.text;
                var9.style = var5;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = 11;
                var5 = var7[var14];
                var5 = var8.bind(var4)(var5);
                var20 = var5.intl;
                var19 = var20.string;
                var5 = var7[var14];
                var5 = var8.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5.OJmNR9;
                var19 = var19.bind(var20)(var5);
                var5 = new Array(2);
                var5[0] = var19;
                var19 = '\n';
                var5[1] = var19;
                var9.children = var5;
                var5 = 'changelog-bio';
                var9 = var3.bind(var4)(var18, var9, var5);
                var5 = new Array(2);
                var5[0] = var9;
                var9 = _closure1_slot8;
                var7 = var7[var17];
                var7 = var8.bind(var4)(var7);
                var8 = var7.Text;
                var7 = {};
                var7.variant = var16;
                if (!var15) {
                    _fun61094_ip = 480;
                    continue _fun61094
                }
            case 474:
                var12 = 'text-muted';
            case 480:
                var7.color = var12;
                var7.lineClamp = var11;
                var10 = var10.span;
                var7.style = var10;
                var10 = _closure1_slot0;
                var6 = _closure1_slot2;
                var11 = var6[var14];
                var11 = var10.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.format;
                var6 = var6[var14];
                var6 = var10.bind(var4)(var6);
                var6 = var6.t;
                var10 = var6.RCYeBL;
                var6 = {};
                var13 = function arg0, arg1() {
                    var4 = _closure1_slot8;
                    var3 = _closure1_slot11;
                    var2 = {};
                    var0 = _closure2_slot1;
                    var2.lineClamp = var0;
                    var0 = arg0;
                    var2.text = var0;
                    var1 = undefined;
                    var0 = arg1;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var6.blogHook = var13;
                var6 = var11.bind(var12)(var10, var6);
                var7.children = var6;
                var6 = 'changelog-cta';
                var6 = var9.bind(var4)(var8, var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 599:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 1660, 33, 1297, 3103, 795, 3900, 5323, 1659, 1234, 2]);