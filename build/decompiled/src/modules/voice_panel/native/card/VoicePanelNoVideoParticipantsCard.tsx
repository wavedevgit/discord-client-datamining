// modules/voice_panel/native/card/VoicePanelNoVideoParticipantsCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Pressable;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot5 = var7;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'width': '100%',
        'height': '100%',
        'alignItems': 'center',
        'justifyContent': 'center',
        'padding': 16
    };
    var10 = 4;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.VOICE_VIDEO_VIDEO_TILE_BACKGROUND;
    var9.backgroundColor = var12;
    var3.container = var9;
    var9 = {
        'marginBottom': 16,
        'textAlign': 'center'
    };
    var3.label = var9;
    var9 = {
        'paddingHorizontal': 20,
        'paddingVertical': 12,
        'backgroundColor': 'white'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9.borderRadius = var12;
    var3.button = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.PRIMARY_860;
    var9.color = var10;
    var3.buttonText = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot7 = var3;
    var3 = var6.memo;
    var1 = function() { // Original name: VoicePanelNoVideoParticipantsCard, environment: var1
        var6 = _closure1_slot3;
        var4 = var6.useContext;
        var1 = _closure1_slot1;
        var14 = _closure1_slot2;
        var2 = 5;
        var2 = var14[var2];
        var3 = undefined;
        var2 = var1.bind(var3)(var2);
        var2 = var4.bind(var6)(var2);
        var7 = var2.channelId;
        var _closure2_slot0 = var7;
        var2 = _closure1_slot7;
        var11 = var2.bind(var3)();
        var4 = var6.useCallback;
        var2 = new Array(1);
        var2[0] = var7;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.toggleVoiceParticipantsHidden;
            var2 = _closure2_slot0;
            var1 = false;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var9 = var4.bind(var6)(var0, var2);
        var2 = _closure1_slot6;
        var0 = 7;
        var0 = var14[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var4 = var11.container;
        var0.style = var4;
        var7 = _closure1_slot5;
        var13 = _closure1_slot0;
        var8 = 8;
        var4 = var14[var8];
        var4 = var13.bind(var3)(var4);
        var6 = var4.Text;
        var4 = {
            'style': null,
            'variant': 'text-md/semibold',
            'color': 'always-white'
        };
        var10 = var11.label;
        var4.style = var10;
        var10 = 9;
        var12 = var14[var10];
        var12 = var13.bind(var3)(var12);
        var16 = var12.intl;
        var15 = var16.string;
        var12 = var14[var10];
        var12 = var13.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12["8eBJ73"];
        var12 = var15.bind(var16)(var12);
        var4.children = var12;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var6 = _closure1_slot4;
        var5 = {};
        var12 = var11.button;
        var5.style = var12;
        var5.onPress = var9;
        var9 = 'button';
        var5.accessibilityRole = var9;
        var9 = var14[var10];
        var9 = var13.bind(var3)(var9);
        var15 = var9.intl;
        var12 = var15.string;
        var9 = var14[var10];
        var9 = var13.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9.kLQySL;
        var9 = var12.bind(var15)(var9);
        var5.accessibilityLabel = var9;
        var8 = var14[var8];
        var8 = var13.bind(var3)(var8);
        var9 = var8.Text;
        var8 = {};
        var12 = 'text-sm/semibold';
        var8.variant = var12;
        var11 = var11.buttonText;
        var8.style = var11;
        var11 = var14[var10];
        var11 = var13.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var10 = var14[var10];
        var10 = var13.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.kLQySL;
        var10 = var11.bind(var12)(var10);
        var8.children = var10;
        var8 = var7.bind(var3)(var9, var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/card/VoicePanelNoVideoParticipantsCard.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 11815, 7838, 6415, 4832, 1234, 2]);