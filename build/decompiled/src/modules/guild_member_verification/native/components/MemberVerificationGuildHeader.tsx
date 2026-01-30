// modules/guild_member_verification/native/components/MemberVerificationGuildHeader.tsx
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
    var16 = 0;
    var6 = var5[var16];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var14 = 2;
    var3 = var5[var14];
    var3 = var4.bind(var0)(var3);
    var12 = var3.AVATAR_BORDER_WIDTH;
    var13 = var3.AVATAR_SIZE;
    var _closure1_slot4 = var13;
    var3 = var3.useBannerHeight;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'flexDirection': 'column',
        'justifyContent': 'flex-end',
        'alignItems': 'center',
        'marginBottom': 12
    };
    var3.header = var8;
    var15 = 20;
    var11 = 16;
    var8 = {
        'alignItems': 'center',
        'marginTop': 4294967248,
        'paddingTop': 20,
        'paddingBottom': 0,
        'paddingHorizontal': 16
    };
    var3.headerContent = var8;
    var8 = {
        'position': 'absolute',
        'height': 140,
        'top': 0,
        'right': 0,
        'left': 0
    };
    var3.linearGradient = var8;
    var8 = {};
    var9 = 5;
    var17 = var5[var9];
    var17 = var10.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.lg;
    var8.borderRadius = var17;
    var8.borderWidth = var16;
    var17 = var5[var9];
    var17 = var10.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_BASE_LOWER;
    var8.borderColor = var17;
    var8.height = var13;
    var8.width = var13;
    var8.margin = var16;
    var16 = var5[var9];
    var16 = var10.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_SCRIM;
    var8.backgroundColor = var16;
    var3.avatar = var8;
    var8 = {};
    var8.borderRadius = var15;
    var8.borderWidth = var12;
    var15 = var5[var9];
    var15 = var10.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOWER;
    var8.borderColor = var15;
    var15 = var14 * var12;
    var15 = var13 + var15;
    var8.height = var15;
    var12 = var14 * var12;
    var12 = var13 + var12;
    var8.width = var12;
    var8.marginBottom = var11;
    var11 = -16;
    var8.marginTop = var11;
    var11 = -4;
    var8.marginLeft = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var9;
    var3.avatarContainer = var8;
    var8 = {
        'position': 'absolute',
        'top': 56,
        'right': 4294967288
    };
    var3.featureIcon = var8;
    var8 = {
        'textAlign': 'center',
        'marginBottom': 8
    };
    var3.headerTitle = var8;
    var8 = {
        'lineHeight': 18,
        'textAlign': 'center'
    };
    var3.headerDescription = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = 'function MemberVerificationGuildHeaderTsx1(){const{scrollTop}=this.__closure;return scrollTop.get()*-1;}';
    var3.code = var6;
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = "function MemberVerificationGuildHeaderTsx2(){const{height,interpolate,scrollTop,safeAreaTop,scrollTopNegative}=this.__closure;return{width:'100%',height:height,opacity:interpolate(scrollTop.get(),[0,height-safeAreaTop],[1,0],'clamp'),transform:[{translateY:interpolate(scrollTopNegative.get(),[0,height],[0,-height],'clamp')},{scale:interpolate(scrollTopNegative.get(),[0,height],[1,1.08],'clamp')}]};}";
    var3.code = var6;
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = "function MemberVerificationGuildHeaderTsx3(){const{interpolate,scrollTopNegative,height,ANIMATION_GOLDEN_RATIO,AVATAR_SIZE}=this.__closure;return{transform:[{translateY:interpolate(scrollTopNegative.get(),[0,height],[0,-(height/ANIMATION_GOLDEN_RATIO)],'clamp')},{scale:interpolate(scrollTopNegative.get(),[0,AVATAR_SIZE],[1,ANIMATION_GOLDEN_RATIO],'clamp')}]};}";
    var3.code = var6;
    var _closure1_slot11 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_member_verification/native/components/MemberVerificationGuildHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: MemberVerificationGuildHeader, environment: var1
        _fun60302: for (var _fun60302_ip = 0;;) switch (_fun60302_ip) {
            case 0:
                var1 = arg0;
                var20 = var1.guild;
                var14 = var1.scrollTop;
                var _closure2_slot0 = var14;
                var10 = var1.hasManualFormFields;
                var1 = _closure1_slot8;
                var3 = undefined;
                var12 = var1.bind(var3)();
                var2 = var20.banner;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun60302_ip = 73;
                    continue _fun60302
                }
            case 51:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 7;
                var1 = var4[var1];
                var17 = var2.bind(var3)(var1);
                _fun60302_ip = 104;
                continue _fun60302;
            case 73:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 6;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getGuildBannerSource;
                var17 = var1.bind(var2)(var20);
            case 104:
                var1 = _closure1_slot5;
                var19 = var1.bind(var3)();
                var _closure2_slot1 = var19;
                var16 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 8;
                var1 = var7[var1];
                var1 = var16.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var13 = var1.top;
                var _closure2_slot2 = var13;
                var8 = _closure1_slot0;
                var6 = 9;
                var1 = var7[var6];
                var4 = var8.bind(var3)(var1);
                var2 = var4.useDerivedValue;
                var1 = function() { // Original name: N, environment: var0
                    var1 = _closure2_slot0;
                    var0 = var1.get;
                    var1 = var0.bind(var1)();
                    var0 = -1;
                    var0 = var0 * var1;
                    return var0;
                };
                var5 = {};
                var5.scrollTop = var14;
                var1.__closure = var5;
                var5 = 6997429707371.0;
                var1.__workletHash = var5;
                var5 = _closure1_slot9;
                var1.__initData = var5;
                var5 = var2.bind(var4)(var1);
                var _closure2_slot3 = var5;
                var1 = var7[var6];
                var4 = var8.bind(var3)(var1);
                var2 = var4.useAnimatedStyle;
                var1 = function() { // Original name: I, environment: var0
                    var0 = {};
                    var1 = '100%';
                    var0.width = var1;
                    var3 = _closure2_slot1;
                    var0.height = var3;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 9;
                    var2 = var9[var4];
                    var6 = undefined;
                    var12 = var7.bind(var6)(var2);
                    var11 = var12.interpolate;
                    var5 = _closure2_slot0;
                    var2 = var5.get;
                    var18 = var2.bind(var5)();
                    var2 = _closure2_slot2;
                    var2 = var3 - var2;
                    var5 = [0];
                    var5[1] = var2;
                    var16 = [1, 0];
                    var8 = 'clamp';
                    var19 = var12;
                    var17 = var5;
                    var15 = var8;
                    var2 = var19[var11](var18, var17, var16, var15, var14);
                    var0.opacity = var2;
                    var2 = {};
                    var5 = var9[var4];
                    var13 = var7.bind(var6)(var5);
                    var12 = var13.interpolate;
                    var5 = _closure2_slot3;
                    var1 = var5.get;
                    var18 = var1.bind(var5)();
                    var10 = [0];
                    var10[1] = var3;
                    var14 = -var3;
                    var1 = [0];
                    var1[1] = var14;
                    var19 = var13;
                    var17 = var10;
                    var16 = var1;
                    var1 = var19[var12](var18, var17, var16, var15, var14);
                    var2.translateY = var1;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = {};
                    var4 = var9[var4];
                    var7 = var7.bind(var6)(var4);
                    var6 = var7.interpolate;
                    var4 = var5.get;
                    var18 = var4.bind(var5)();
                    var4 = [0];
                    var4[1] = var3;
                    var16 = [1, 1.08];
                    var19 = var7;
                    var17 = var4;
                    var3 = var19[var6](var18, var17, var16, var15, var14);
                    var2.scale = var3;
                    var1[1] = var2;
                    var0.transform = var1;
                    return var0;
                };
                var9 = {};
                var9.height = var19;
                var15 = var7[var6];
                var15 = var8.bind(var3)(var15);
                var15 = var15.interpolate;
                var9.interpolate = var15;
                var9.scrollTop = var14;
                var9.safeAreaTop = var13;
                var9.scrollTopNegative = var5;
                var1.__closure = var9;
                var9 = 15738371977789.0;
                var1.__workletHash = var9;
                var9 = _closure1_slot10;
                var1.__initData = var9;
                var9 = var2.bind(var4)(var1);
                var1 = var7[var6];
                var2 = var8.bind(var3)(var1);
                var1 = var2.useAnimatedStyle;
                var0 = function() { // Original name: b, environment: var0
                    var0 = {};
                    var2 = {};
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 9;
                    var1 = var10[var4];
                    var6 = undefined;
                    var14 = var7.bind(var6)(var1);
                    var13 = var14.interpolate;
                    var5 = _closure2_slot3;
                    var8 = var5.get;
                    var18 = var8.bind(var5)();
                    var1 = _closure2_slot1;
                    var11 = [0];
                    var11[1] = var1;
                    var1 = -var1;
                    var9 = 1.20225424859375;
                    var8 = var1 / var9;
                    var1 = [0];
                    var1[1] = var8;
                    var8 = 'clamp';
                    var19 = var14;
                    var17 = var11;
                    var16 = var1;
                    var15 = var8;
                    var1 = var19[var13](var18, var17, var16, var15, var14);
                    var2.translateY = var1;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = {};
                    var4 = var10[var4];
                    var7 = var7.bind(var6)(var4);
                    var6 = var7.interpolate;
                    var4 = var5.get;
                    var18 = var4.bind(var5)();
                    var3 = _closure1_slot4;
                    var4 = [0];
                    var4[1] = var3;
                    var3 = [1];
                    var3[1] = var9;
                    var19 = var7;
                    var17 = var4;
                    var16 = var3;
                    var3 = var19[var6](var18, var17, var16, var15, var14);
                    var2.scale = var3;
                    var1[1] = var2;
                    var0.transform = var1;
                    return var0;
                };
                var4 = {};
                var13 = var7[var6];
                var13 = var8.bind(var3)(var13);
                var13 = var13.interpolate;
                var4.interpolate = var13;
                var4.scrollTopNegative = var5;
                var4.height = var19;
                var5 = 1.20225424859375;
                var4.ANIMATION_GOLDEN_RATIO = var5;
                var5 = _closure1_slot4;
                var4.AVATAR_SIZE = var5;
                var0.__closure = var4;
                var4 = 62412230968.0;
                var0.__workletHash = var4;
                var4 = _closure1_slot11;
                var0.__initData = var4;
                var15 = var1.bind(var2)(var0);
                var2 = _closure1_slot7;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var12.header;
                var0.style = var4;
                var4 = var7[var6];
                var4 = var16.bind(var3)(var4);
                var5 = var4.View;
                var4 = {};
                var4.style = var9;
                var9 = _closure1_slot6;
                var13 = var7[var6];
                var13 = var16.bind(var3)(var13);
                var14 = var13.Image;
                var13 = {};
                var18 = {};
                var21 = '100%';
                var18.width = var21;
                var18.height = var19;
                var13.style = var18;
                var13.source = var17;
                var14 = var9.bind(var3)(var14, var13);
                var13 = new Array(2);
                var13[0] = var14;
                var14 = 10;
                var14 = var7[var14];
                var17 = var16.bind(var3)(var14);
                var14 = {};
                var18 = {
                    'x': 0,
                    'y': 0
                };
                var14.start = var18;
                var18 = {
                    'x': 0,
                    'y': 1
                };
                var14.end = var18;
                var18 = var12.linearGradient;
                var14.style = var18;
                var18 = ['rgba(0,0,0,0.7)', 'transparent'];
                var14.colors = var18;
                var14 = var9.bind(var3)(var17, var14);
                var13[1] = var14;
                var4.children = var13;
                var5 = var2.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var13 = var12.headerContent;
                var5.style = var13;
                var6 = var7[var6];
                var6 = var16.bind(var3)(var6);
                var13 = var6.View;
                var6 = {};
                var17 = var12.avatarContainer;
                var14 = new Array(2);
                var14[0] = var17;
                var14[1] = var15;
                var6.style = var14;
                var17 = 11;
                var14 = var7[var17];
                var15 = var16.bind(var3)(var14);
                var14 = {};
                var18 = var12.avatar;
                var14.style = var18;
                var14.guild = var20;
                var17 = var7[var17];
                var17 = var8.bind(var3)(var17);
                var17 = var17.GuildIconSizes;
                var17 = var17.XLARGE;
                var14.size = var17;
                var17 = true;
                var14.animate = var17;
                var15 = var9.bind(var3)(var15, var14);
                var14 = new Array(2);
                var14[0] = var15;
                var15 = 12;
                var15 = var7[var15];
                var16 = var16.bind(var3)(var15);
                var15 = {};
                var18 = var12.featureIcon;
                var15.style = var18;
                var15.guild = var20;
                var15.disableColor = var17;
                var15 = var9.bind(var3)(var16, var15);
                var14[1] = var15;
                var6.children = var14;
                var13 = var2.bind(var3)(var13, var6);
                var6 = new Array(3);
                var6[0] = var13;
                var13 = 13;
                var7 = var7[var13];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var14 = var12.headerTitle;
                var7.style = var14;
                var16 = _closure1_slot0;
                var14 = _closure1_slot2;
                var15 = 14;
                var17 = var14[var15];
                var17 = var16.bind(var3)(var17);
                var19 = var17.intl;
                var18 = var19.format;
                var14 = var14[var15];
                var14 = var16.bind(var3)(var14);
                var16 = var14.t;
                if (var10) {
                    _fun60302_ip = 931;
                    continue _fun60302
                }
            case 903:
                var17 = var16.VnxBOA;
                var14 = {};
                var21 = var20.name;
                var14.guildName = var21;
                var14 = var18.bind(var19)(var17, var14);
                _fun60302_ip = 957;
                continue _fun60302;
            case 931:
                var17 = var16.cgX47Z;
                var16 = {};
                var20 = var20.name;
                var16.guildName = var20;
                var14 = var18.bind(var19)(var17, var16);
            case 957:
                var7.children = var14;
                var7 = var9.bind(var3)(var8, var7);
                var6[1] = var7;
                var9 = _closure1_slot6;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var13];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var12 = var12.headerDescription;
                var7.style = var12;
                var14 = _closure1_slot0;
                var11 = _closure1_slot2;
                var12 = var11[var15];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var11[var15];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                if (var10) {
                    _fun60302_ip = 1082;
                    continue _fun60302
                }
            case 1067:
                var10 = var11["7D3C5p"];
                var10 = var12.bind(var13)(var10);
                _fun60302_ip = 1095;
                continue _fun60302;
            case 1082:
                var11 = var11["3smSPP"];
                var10 = var12.bind(var13)(var11);
            case 1095:
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var6[2] = var7;
                var5.children = var6;
                var5 = var2.bind(var3)(var1, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 7409, 33, 1297, 671, 1417, 7414, 1568, 3679, 4057, 7356, 7415, 3901, 1234, 2]);