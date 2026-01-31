// modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingPersistentCta.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticsSections;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = {
        'stiffness': 70,
        'damping': 10
    };
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'display': 'flex',
        'alignItems': 'center',
        'position': 'absolute',
        'width': '100%',
        'zIndex': 1,
        'bottom': 4294967220
    };
    var3.wrapper = var8;
    var8 = {
        'backgroundColor': null,
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'position': 'relative',
        'height': 76,
        'width': 343,
        'borderRadius': 76,
        'paddingLeft': 13,
        'paddingVertical': 13,
        'paddingRight': 27
    };
    var9 = 6;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_NORMAL;
    var8.backgroundColor = var11;
    var3.innerWraper = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'flex': 1,
        'marginRight': 10
    };
    var3.guildInfoContainer = var8;
    var8 = {
        'backgroundColor': null,
        'marginRight': 10,
        'height': 50,
        'width': 50,
        'borderRadius': 25
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var11;
    var3.guildIcon = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.MOBILE_TEXT_HEADING_PRIMARY;
    var8.color = var9;
    var3.guildIconText = var8;
    var8 = {
        'flexGrow': 1,
        'flexShrink': 1,
        'flexBasis': 'auto'
    };
    var3.guildName = var8;
    var8 = {};
    var9 = 40;
    var8.height = var9;
    var3.buttonContainer = var8;
    var8 = {};
    var9 = 100;
    var8.minWidth = var9;
    var3.button = var8;
    var8 = {
        'padding': 2,
        'borderRadius': 80
    };
    var3.border = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = 'function GuildBoostingMarketingPersistentCtaTsx1(){const{useReducedMotion,VISIBILITY_OFFSET,withSpring,isVisible,SPRING_CONFIG}=this.__closure;return{transform:[{translateY:useReducedMotion?-VISIBILITY_OFFSET:withSpring(isVisible?-VISIBILITY_OFFSET:VISIBILITY_OFFSET,SPRING_CONFIG)}],opacity:withSpring(isVisible?1:0,SPRING_CONFIG)};}';
    var3.code = var6;
    var _closure1_slot10 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingPersistentCta.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var2 = _closure1_slot9;
        var3 = undefined;
        var16 = var2.bind(var3)();
        var14 = var0.fractionalPremiumState;
        var19 = var0.guild;
        var18 = var0.previousGuildSubscriptionSlot;
        var6 = var0.isVisible;
        var _closure2_slot0 = var6;
        var13 = var0.premiumGroupRole;
        var21 = _closure1_slot0;
        var20 = _closure1_slot2;
        var0 = 7;
        var0 = var20[var0];
        var5 = var21.bind(var3)(var0);
        var4 = var5.useStateFromStores;
        var0 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var0;
        var0 = function() { // Environment: var1
            var0 = _closure1_slot4;
            var0 = var0.useReducedMotion;
            return var0;
        };
        var7 = var4.bind(var5)(var2, var0);
        var _closure2_slot1 = var7;
        var0 = 8;
        var2 = var20[var0];
        var4 = var21.bind(var3)(var2);
        var2 = var4.useAnimatedStyle;
        var1 = function() {
            _fun77972: for (var _fun77972_ip = 0;;) switch (_fun77972_ip) {
                case 0:
                    var0 = {};
                    var3 = {};
                    var4 = _closure2_slot1;
                    var8 = -120;
                    var1 = var8;
                    if (var4) {
                        _fun77972_ip = 76;
                        continue _fun77972
                    }
                case 23:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 9;
                    var6 = var6[var5];
                    var5 = undefined;
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.withSpring;
                    var9 = _closure2_slot0;
                    var5 = 120;
                    if (!var9) {
                        _fun77972_ip = 66;
                        continue _fun77972
                    }
                case 63:
                    var5 = var8;
                case 66:
                    var4 = _closure1_slot8;
                    var1 = var6.bind(var7)(var5, var4);
                case 76:
                    var3.translateY = var1;
                    var1 = new Array(1);
                    var1[0] = var3;
                    var0.transform = var1;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 9;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.withSpring;
                    var5 = _closure2_slot0;
                    var2 = 0;
                    if (!var5) {
                        _fun77972_ip = 135;
                        continue _fun77972
                    }
                case 132:
                    var2 = 1;
                case 135:
                    var1 = _closure1_slot8;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.opacity = var1;
                    return var0;
            }
        };
        var5 = {};
        var5.useReducedMotion = var7;
        var7 = 120;
        var5.VISIBILITY_OFFSET = var7;
        var7 = 9;
        var7 = var20[var7];
        var7 = var21.bind(var3)(var7);
        var7 = var7.withSpring;
        var5.withSpring = var7;
        var5.isVisible = var6;
        var6 = _closure1_slot8;
        var5.SPRING_CONFIG = var6;
        var1.__closure = var5;
        var5 = 14370895185277.0;
        var1.__workletHash = var5;
        var5 = _closure1_slot10;
        var1.__initData = var5;
        var5 = var2.bind(var4)(var1);
        var2 = _closure1_slot6;
        var12 = _closure1_slot1;
        var0 = var20[var0];
        var0 = var12.bind(var3)(var0);
        var1 = var0.View;
        var0 = {};
        var6 = var16.wrapper;
        var4 = new Array(2);
        var4[0] = var6;
        var4[1] = var5;
        var0.style = var4;
        var4 = 10;
        var4 = var20[var4];
        var5 = var12.bind(var3)(var4);
        var4 = {};
        var6 = 45;
        var4.angle = var6;
        var6 = {
            'x': 0.5,
            'y': 0.5
        };
        var4.angleCenter = var6;
        var7 = 6;
        var6 = var20[var7];
        var6 = var12.bind(var3)(var6);
        var6 = var6.unsafe_rawColors;
        var8 = var6.GUILD_BOOSTING_BLUE;
        var6 = new Array(2);
        var6[0] = var8;
        var7 = var20[var7];
        var7 = var12.bind(var3)(var7);
        var7 = var7.unsafe_rawColors;
        var7 = var7.GUILD_BOOSTING_PURPLE;
        var6[1] = var7;
        var4.colors = var6;
        var6 = [0, 1];
        var4.locations = var6;
        var6 = var16.border;
        var4.style = var6;
        var17 = true;
        var4.useAngle = var17;
        var8 = _closure1_slot7;
        var7 = _closure1_slot3;
        var6 = {};
        var9 = var16.innerWraper;
        var6.style = var9;
        var9 = {};
        var10 = var16.guildInfoContainer;
        var9.style = var10;
        var22 = 11;
        var10 = var20[var22];
        var11 = var12.bind(var3)(var10);
        var10 = {};
        var23 = var16.guildIcon;
        var10.style = var23;
        var23 = var16.guildIconText;
        var10.textStyle = var23;
        var10.guild = var19;
        var22 = var20[var22];
        var22 = var21.bind(var3)(var22);
        var22 = var22.GuildIconSizes;
        var22 = var22.LARGE;
        var10.size = var22;
        var11 = var2.bind(var3)(var11, var10);
        var10 = new Array(2);
        var10[0] = var11;
        var11 = 12;
        var11 = var20[var11];
        var11 = var21.bind(var3)(var11);
        var21 = var11.Text;
        var11 = {
            'style': null,
            'variant': 'text-md/bold',
            'lineClamp': 1
        };
        var22 = var16.guildName;
        var11.style = var22;
        var22 = var19.name;
        var11.children = var22;
        var11 = var2.bind(var3)(var21, var11);
        var10[1] = var11;
        var9.children = var10;
        var10 = var8.bind(var3)(var7, var9);
        var9 = new Array(2);
        var9[0] = var10;
        var10 = {};
        var11 = var16.buttonContainer;
        var10.style = var11;
        var11 = 13;
        var11 = var20[var11];
        var12 = var12.bind(var3)(var11);
        var11 = {};
        var11.guild = var19;
        var11.previousGuildSubscriptionSlot = var18;
        var11.useShortenedCTA = var17;
        var16 = var16.button;
        var11.styles = var16;
        var15 = _closure1_slot5;
        var15 = var15.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR;
        var11.analyticsSection = var15;
        var11.fractionalPremiumState = var14;
        var11.premiumGroupRole = var13;
        var11 = var2.bind(var3)(var12, var11);
        var10.children = var11;
        var10 = var2.bind(var3)(var7, var10);
        var9[1] = var10;
        var6.children = var9;
        var6 = var8.bind(var3)(var7, var6);
        var4.children = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    var1 = 120;
    var2.VISIBILITY_OFFSET = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 660, 33, 1297, 671, 632, 3679, 4040, 4057, 7355, 3900, 9859, 2]);