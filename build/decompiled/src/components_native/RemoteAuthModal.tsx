// components_native/RemoteAuthModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var6;
    var0 = function(arg0) { // Original name: RemoteAuthBody, environment: var3
        _fun81753: for (var _fun81753_ip = 0;;) switch (_fun81753_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.remoteAuthFingerprint;
                var _closure2_slot0 = var10;
                var4 = _closure1_slot4;
                var3 = var4.useState;
                var1 = _closure1_slot14;
                var1 = var1.LOADING;
                var4 = var3.bind(var4)(var1);
                var1 = _closure1_slot3;
                var3 = undefined;
                var9 = 2;
                var1 = var1.bind(var3)(var4, var9);
                var7 = 0;
                var4 = var1[var7];
                var6 = 1;
                var1 = var1[var6];
                var _closure2_slot1 = var1;
                var8 = _closure1_slot4;
                var5 = var8.useState;
                var1 = null;
                var8 = var5.bind(var8)(var1);
                var5 = _closure1_slot3;
                var5 = var5.bind(var3)(var8, var9);
                var7 = var5[var7];
                var5 = var5[var6];
                var _closure2_slot2 = var5;
                var6 = function(arg0) { // Original name: transitionStep, environment: var2
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 10;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.DeprecatedLayoutAnimation;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var _closure2_slot3 = var6;
                var9 = _closure1_slot4;
                var8 = var9.useEffect;
                var5 = new Array(1);
                var5[0] = var10;
                var2 = function() { // Environment: var2
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 11;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var5 = _closure1_slot9;
                    var5 = var5.REMOTE_AUTH_INITIALIZE;
                    var2.url = var5;
                    var5 = {};
                    var6 = _closure2_slot0;
                    var5.fingerprint = var6;
                    var2.body = var5;
                    var5 = true;
                    var2.oldFormErrors = var5;
                    var2.rejectWithError = var5;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.then;
                    var2 = function(arg0) { // Environment: var1
                        var3 = _closure2_slot2;
                        var0 = arg0;
                        var0 = var0.body;
                        var2 = var0.handshake_token;
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var2 = _closure2_slot3;
                        var1 = _closure1_slot14;
                        var1 = var1.LOADED;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.catch;
                    var1 = function() { // Environment: var1
                        var2 = _closure2_slot3;
                        var0 = _closure1_slot14;
                        var1 = var0.NOT_FOUND;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = var8.bind(var9)(var2, var5);
                var2 = _closure1_slot14;
                var2 = var2.LOADING;
                if (!(var2 !== var4)) {
                    _fun81753_ip = 294;
                    continue _fun81753
                }
            case 170:
                var2 = _closure1_slot14;
                var2 = var2.LOADED;
                if (!(var2 !== var4)) {
                    _fun81753_ip = 244;
                    continue _fun81753
                }
            case 184:
                var2 = _closure1_slot14;
                var2 = var2.SUCCEEDED;
                if (!(var2 !== var4)) {
                    _fun81753_ip = 226;
                    continue _fun81753
                }
            case 198:
                var2 = _closure1_slot14;
                var2 = var2.NOT_FOUND;
                var5 = _closure1_slot10;
                var4 = _closure1_slot19;
                var2 = {};
                var2 = var5.bind(var3)(var4, var2);
                return var2;
            case 226:
                var5 = _closure1_slot10;
                var4 = _closure1_slot18;
                var2 = {};
                var2 = var5.bind(var3)(var4, var2);
                return var2;
            case 244:
                if (!(var1 == var7)) {
                    _fun81753_ip = 266;
                    continue _fun81753
                }
            case 248:
                var4 = _closure1_slot10;
                var2 = _closure1_slot19;
                var1 = {};
                var1 = var4.bind(var3)(var2, var1);
                _fun81753_ip = 292;
                continue _fun81753;
            case 266:
                var5 = _closure1_slot10;
                var4 = _closure1_slot16;
                var2 = {};
                var2.handshakeToken = var7;
                var2.setAuthStep = var6;
                var1 = var5.bind(var3)(var4, var2);
            case 292:
                return var1;
            case 294:
                var2 = _closure1_slot10;
                var1 = _closure1_slot20;
                var0 = {};
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0) { // Original name: ExperimentConnectedRemoteAuthLogin, environment: var3
        _fun81758: for (var _fun81758_ip = 0;;) switch (_fun81758_ip) {
            case 0:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var1 = var3[var1];
                var3 = undefined;
                var5 = var2.bind(var3)(var1);
                var4 = var5.useExperiment;
                var2 = {};
                var1 = '204185_1';
                var2.location = var1;
                var1 = {};
                var6 = false;
                var1.autoTrackExposure = var6;
                var1 = var4.bind(var5)(var2, var1);
                var1 = var1.showDelayedLogin;
                var2 = _closure1_slot10;
                if (var1) {
                    _fun81758_ip = 77;
                    continue _fun81758
                }
            case 71:
                var1 = _closure1_slot17;
                _fun81758_ip = 97;
                continue _fun81758;
            case 77:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 13;
                var0 = var5[var0];
                var1 = var4.bind(var3)(var0);
            case 97:
                var0 = {};
                var7 = arg0;
                var8 = var0;
                var4 = copyDataProperties(var8, var7);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function(arg0) { // Original name: RemoteAuthLogin, environment: var3
        _fun81759: for (var _fun81759_ip = 0;;) switch (_fun81759_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.handshakeToken;
                var _closure2_slot0 = var1;
                var0 = var0.setAuthStep;
                var _closure2_slot1 = var0;
                var0 = _closure1_slot13;
                var3 = undefined;
                var11 = var0.bind(var3)();
                var1 = _closure1_slot4;
                var0 = var1.useState;
                var6 = false;
                var1 = var0.bind(var1)(var6);
                var0 = _closure1_slot3;
                var5 = 2;
                var0 = var0.bind(var3)(var1, var5);
                var2 = 0;
                var18 = var0[var2];
                var1 = 1;
                var17 = var0[var1];
                var4 = _closure1_slot4;
                var0 = var4.useState;
                var4 = var0.bind(var4)(var6);
                var0 = _closure1_slot3;
                var0 = var0.bind(var3)(var4, var5);
                var9 = var0[var2];
                var0 = var0[var1];
                var _closure2_slot2 = var0;
                var4 = _closure1_slot4;
                var0 = var4.useState;
                var4 = var0.bind(var4)(var6);
                var0 = _closure1_slot3;
                var0 = var0.bind(var3)(var4, var5);
                var14 = var0[var2];
                var0 = var0[var1];
                var _closure2_slot3 = var0;
                var4 = _closure1_slot4;
                var2 = var4.useEffect;
                var1 = function() { // Environment: var8
                    var1 = global;
                    var4 = var1.setTimeout;
                    var3 = undefined;
                    var2 = function() { // Environment: var0
                        var2 = _closure2_slot2;
                        var0 = undefined;
                        var1 = true;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = 1000;
                    var1 = var4.bind(var3)(var2, var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
                };
                var0 = new Array(0);
                var0 = var2.bind(var4)(var1, var0);
                var6 = _closure1_slot1;
                var16 = _closure1_slot2;
                var0 = 14;
                var0 = var16[var0];
                var5 = var6.bind(var3)(var0);
                var4 = var5.throttle;
                var2 = function() { // Environment: var8
                    var2 = _closure2_slot3;
                    var0 = undefined;
                    var5 = true;
                    var2 = var2.bind(var0)(var5);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 11;
                    var2 = var4[var2];
                    var2 = var3.bind(var0)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var6 = _closure1_slot9;
                    var6 = var6.REMOTE_AUTH_FINISH;
                    var2.url = var6;
                    var6 = {};
                    var7 = _closure2_slot0;
                    var6.handshake_token = var7;
                    var7 = false;
                    var6.temporary_token = var7;
                    var2.body = var6;
                    var2.oldFormErrors = var5;
                    var2.rejectWithError = var5;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.then;
                    var2 = function() { // Environment: var1
                        var2 = _closure2_slot1;
                        var0 = _closure1_slot14;
                        var1 = var0.SUCCEEDED;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.catch;
                    var1 = function() { // Environment: var1
                        var2 = _closure2_slot1;
                        var0 = _closure1_slot14;
                        var1 = var0.NOT_FOUND;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = 1000;
                var0 = {
                    'leading': true,
                    'trailing': false
                };
                var15 = var4.bind(var5)(var2, var1, var0);
                var2 = _closure1_slot11;
                var1 = _closure1_slot12;
                var0 = {};
                var7 = _closure1_slot10;
                var5 = _closure1_slot6;
                var4 = {};
                var12 = 15;
                var12 = var16[var12];
                var12 = var6.bind(var3)(var12);
                var4.source = var12;
                var12 = var11.mainImage;
                var4.style = var12;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(6);
                var4[0] = var5;
                var12 = _closure1_slot10;
                var19 = _closure1_slot0;
                var5 = 16;
                var5 = var16[var5];
                var5 = var19.bind(var3)(var5);
                var7 = var5.Text;
                var5 = {};
                var13 = var11.header;
                var5.style = var13;
                var13 = 'heading-xl/extrabold';
                var5.variant = var13;
                var13 = 17;
                var20 = var16[var13];
                var20 = var19.bind(var3)(var20);
                var22 = var20.intl;
                var21 = var22.string;
                var20 = var16[var13];
                var20 = var19.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.jD2pqF;
                var20 = var21.bind(var22)(var20);
                var5.children = var20;
                var5 = var12.bind(var3)(var7, var5);
                var4[1] = var5;
                var12 = _closure1_slot10;
                var5 = 18;
                var5 = var16[var5];
                var5 = var19.bind(var3)(var5);
                var7 = var5.LegacyText;
                var5 = {};
                var20 = var11.warningCaption;
                var5.style = var20;
                var20 = var16[var13];
                var20 = var19.bind(var3)(var20);
                var22 = var20.intl;
                var21 = var22.string;
                var20 = var16[var13];
                var20 = var19.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20["hcd/kh"];
                var20 = var21.bind(var22)(var20);
                var5.children = var20;
                var5 = var12.bind(var3)(var7, var5);
                var4[2] = var5;
                var12 = _closure1_slot10;
                var5 = 19;
                var5 = var16[var5];
                var5 = var19.bind(var3)(var5);
                var7 = var5.FormSwitchRow;
                var5 = {};
                var20 = var16[var13];
                var20 = var19.bind(var3)(var20);
                var22 = var20.intl;
                var21 = var22.string;
                var20 = var16[var13];
                var20 = var19.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.UpAoQn;
                var20 = var21.bind(var22)(var20);
                var5.label = var20;
                var20 = var11.temporaryToggle;
                var5.DEPRECATED_style = var20;
                var5.value = var18;
                var5.onValueChange = var17;
                var5 = var12.bind(var3)(var7, var5);
                var4[3] = var5;
                var7 = _closure1_slot10;
                var12 = 20;
                var5 = var16[var12];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var18 = var11.button;
                var17 = new Array(2);
                var17[0] = var18;
                var18 = var11.loginButton;
                var17[1] = var18;
                var5.style = var17;
                var17 = var16[var13];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var16[var13];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.N3qV8e;
                var16 = var17.bind(var18)(var16);
                var5.text = var16;
                var5.onPress = var15;
                var9 = !var9;
                if (!var9) {
                    _fun81759_ip = 706;
                    continue _fun81759
                }
            case 703:
                var9 = !var14;
            case 706:
                var5.disabled = var9;
                var5 = var7.bind(var3)(var6, var5);
                var4[4] = var5;
                var7 = _closure1_slot10;
                var14 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = var9[var12];
                var6 = var14.bind(var3)(var5);
                var5 = {};
                var12 = var9[var12];
                var12 = var14.bind(var3)(var12);
                var12 = var12.Colors;
                var12 = var12.TRANSPARENT;
                var5.color = var12;
                var11 = var11.button;
                var5.style = var11;
                var12 = _closure1_slot0;
                var10 = var9[var13];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var9[var13];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9["ETE/oC"];
                var9 = var10.bind(var11)(var9);
                var5.text = var9;
                var8 = function() { // Original name: onPress, environment: var8
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 11;
                    var2 = var3[var0];
                    var0 = undefined;
                    var2 = var4.bind(var0)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.post;
                    var2 = {};
                    var6 = _closure1_slot9;
                    var6 = var6.REMOTE_AUTH_CANCEL;
                    var2.url = var6;
                    var6 = {};
                    var7 = _closure2_slot0;
                    var6.handshake_token = var7;
                    var2.body = var6;
                    var6 = true;
                    var2.oldFormErrors = var6;
                    var2.rejectWithError = var6;
                    var2 = var4.bind(var5)(var2);
                    var2 = _closure1_slot1;
                    var1 = 21;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var5.onPress = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[5] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function() { // Original name: RemoteAuthLoginSucceeded, environment: var3
        var0 = _closure1_slot13;
        var3 = undefined;
        var11 = var0.bind(var3)();
        var2 = _closure1_slot11;
        var1 = _closure1_slot12;
        var0 = {};
        var7 = _closure1_slot10;
        var6 = _closure1_slot6;
        var4 = {};
        var9 = _closure1_slot1;
        var10 = _closure1_slot2;
        var8 = 22;
        var8 = var10[var8];
        var8 = var9.bind(var3)(var8);
        var4.source = var8;
        var8 = var11.mainImage;
        var4.style = var8;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(4);
        var4[0] = var6;
        var14 = _closure1_slot10;
        var13 = _closure1_slot0;
        var6 = 16;
        var7 = var10[var6];
        var7 = var13.bind(var3)(var7);
        var12 = var7.Text;
        var7 = {};
        var8 = var11.header;
        var7.style = var8;
        var8 = 'heading-xl/extrabold';
        var7.variant = var8;
        var8 = 17;
        var15 = var10[var8];
        var15 = var13.bind(var3)(var15);
        var17 = var15.intl;
        var16 = var17.string;
        var15 = var10[var8];
        var15 = var13.bind(var3)(var15);
        var15 = var15.t;
        var15 = var15.up6YpO;
        var15 = var16.bind(var17)(var15);
        var7.children = var15;
        var7 = var14.bind(var3)(var12, var7);
        var4[1] = var7;
        var12 = _closure1_slot10;
        var6 = var10[var6];
        var6 = var13.bind(var3)(var6);
        var7 = var6.Text;
        var6 = {
            'style': null,
            'variant': 'text-md/medium',
            'color': 'text-muted'
        };
        var14 = var11.caption;
        var6.style = var14;
        var14 = var10[var8];
        var14 = var13.bind(var3)(var14);
        var16 = var14.intl;
        var15 = var16.string;
        var14 = var10[var8];
        var14 = var13.bind(var3)(var14);
        var14 = var14.t;
        var14 = var14.Lb3Boh;
        var14 = var15.bind(var16)(var14);
        var6.children = var14;
        var6 = var12.bind(var3)(var7, var6);
        var4[2] = var6;
        var7 = _closure1_slot10;
        var5 = 20;
        var5 = var10[var5];
        var6 = var9.bind(var3)(var5);
        var5 = {};
        var11 = var11.button;
        var5.style = var11;
        var11 = var10[var8];
        var11 = var13.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var8 = var10[var8];
        var8 = var13.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8.pYWLA0;
        var8 = var11.bind(var12)(var8);
        var5.text = var8;
        var8 = 21;
        var8 = var10[var8];
        var8 = var9.bind(var3)(var8);
        var8 = var8.pop;
        var5.onPress = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[3] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function() { // Original name: RemoteAuthNotFound, environment: var3
        var0 = _closure1_slot13;
        var3 = undefined;
        var11 = var0.bind(var3)();
        var2 = _closure1_slot11;
        var1 = _closure1_slot12;
        var0 = {};
        var7 = _closure1_slot10;
        var6 = _closure1_slot6;
        var4 = {};
        var9 = _closure1_slot1;
        var10 = _closure1_slot2;
        var8 = 23;
        var8 = var10[var8];
        var8 = var9.bind(var3)(var8);
        var4.source = var8;
        var8 = var11.mainImage;
        var4.style = var8;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(4);
        var4[0] = var6;
        var14 = _closure1_slot10;
        var13 = _closure1_slot0;
        var6 = 16;
        var7 = var10[var6];
        var7 = var13.bind(var3)(var7);
        var12 = var7.Text;
        var7 = {};
        var8 = var11.header;
        var7.style = var8;
        var8 = 'heading-xl/extrabold';
        var7.variant = var8;
        var8 = 17;
        var15 = var10[var8];
        var15 = var13.bind(var3)(var15);
        var17 = var15.intl;
        var16 = var17.string;
        var15 = var10[var8];
        var15 = var13.bind(var3)(var15);
        var15 = var15.t;
        var15 = var15.HEZYRV;
        var15 = var16.bind(var17)(var15);
        var7.children = var15;
        var7 = var14.bind(var3)(var12, var7);
        var4[1] = var7;
        var12 = _closure1_slot10;
        var6 = var10[var6];
        var6 = var13.bind(var3)(var6);
        var7 = var6.Text;
        var6 = {
            'style': null,
            'variant': 'text-md/medium',
            'color': 'text-muted'
        };
        var14 = var11.caption;
        var6.style = var14;
        var14 = var10[var8];
        var14 = var13.bind(var3)(var14);
        var16 = var14.intl;
        var15 = var16.string;
        var14 = var10[var8];
        var14 = var13.bind(var3)(var14);
        var14 = var14.t;
        var14 = var14.qW4FVn;
        var14 = var15.bind(var16)(var14);
        var6.children = var14;
        var6 = var12.bind(var3)(var7, var6);
        var4[2] = var6;
        var7 = _closure1_slot10;
        var5 = 20;
        var5 = var10[var5];
        var6 = var9.bind(var3)(var5);
        var5 = {};
        var11 = var11.button;
        var5.style = var11;
        var11 = var10[var8];
        var11 = var13.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var8 = var10[var8];
        var8 = var13.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8["ETE/oC"];
        var8 = var11.bind(var12)(var8);
        var5.text = var8;
        var8 = 21;
        var8 = var10[var8];
        var8 = var9.bind(var3)(var8);
        var8 = var8.pop;
        var5.onPress = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[3] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = function() { // Original name: RemoteAuthLoading, environment: var3
        var0 = _closure1_slot13;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var2 = _closure1_slot10;
        var1 = _closure1_slot7;
        var0 = {};
        var4 = var4.loadingContainer;
        var0.style = var4;
        var6 = _closure1_slot10;
        var5 = _closure1_slot8;
        var4 = {
            'animating': true,
            'color': null,
            'size': 'large'
        };
        var8 = _closure1_slot1;
        var9 = _closure1_slot2;
        var7 = 6;
        var7 = var9[var7];
        var7 = var8.bind(var3)(var7);
        var7 = var7.unsafe_rawColors;
        var7 = var7.BRAND_500;
        var4.color = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var10 = 0;
    var1 = var6[var10];
    var0 = undefined;
    var1 = var14.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var9 = 1;
    var4 = var6[var9];
    var1 = arg3;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot4 = var1;
    var8 = 2;
    var1 = var6[var8];
    var1 = var5.bind(var0)(var1);
    var4 = var1.ImageBackground;
    var _closure1_slot5 = var4;
    var4 = var1.Image;
    var _closure1_slot6 = var4;
    var4 = var1.View;
    var _closure1_slot7 = var4;
    var1 = var1.ActivityIndicator;
    var _closure1_slot8 = var1;
    var7 = 3;
    var1 = var6[var7];
    var1 = var5.bind(var0)(var1);
    var1 = var1.Endpoints;
    var _closure1_slot9 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot10 = var4;
    var4 = var1.jsxs;
    var _closure1_slot11 = var4;
    var1 = var1.Fragment;
    var _closure1_slot12 = var1;
    var1 = 5;
    var1 = var6[var1];
    var11 = var5.bind(var0)(var1);
    var4 = var11.createStyles;
    var1 = {};
    var12 = {
        'width': '100%',
        'height': '100%'
    };
    var1.background = var12;
    var13 = 'center';
    var12 = {
        'flex': 1,
        'alignItems': 'stretch',
        'alignContent': 'center'
    };
    var1.container = var12;
    var12 = {};
    var15 = 'cover';
    var12.resizeMode = var15;
    var1.imageStyle = var12;
    var15 = 32;
    var12 = {
        'position': 'absolute',
        'top': 16,
        'alignSelf': 'center',
        'width': 32,
        'height': 32
    };
    var1.logo = var12;
    var12 = {
        'marginTop': 16,
        'marginBottom': 32
    };
    var1.mainImage = var12;
    var12 = {};
    var12.textAlign = var13;
    var1.header = var12;
    var12 = {
        'fontSize': 16,
        'lineHeight': 20,
        'color': null,
        'textAlign': 'center',
        'marginTop': 8,
        'marginBottom': 32
    };
    var13 = 6;
    var16 = var6[var13];
    var16 = var14.bind(var0)(var16);
    var16 = var16.unsafe_rawColors;
    var16 = var16.RED_400;
    var12.color = var16;
    var16 = 8;
    var1.warningCaption = var12;
    var12 = {
        'lineHeight': 20,
        'textAlign': 'center',
        'marginTop': 8,
        'marginBottom': 32
    };
    var1.caption = var12;
    var12 = {
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        'backgroundColor': null,
        'marginTop': 'auto',
        'marginBottom': 'auto',
        'marginLeft': 16,
        'marginRight': 16,
        'borderRadius': null,
        'padding': 16,
        'shadowColor': null,
        'shadowOpacity': 0.16,
        'shadowRadius': 2
    };
    var17 = var6[var13];
    var17 = var14.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_BASE_LOW;
    var12.backgroundColor = var17;
    var17 = var6[var13];
    var17 = var14.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.sm;
    var12.borderRadius = var17;
    var17 = var6[var13];
    var17 = var14.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BLACK;
    var12.shadowColor = var17;
    var17 = {
        'height': 2,
        'width': 0
    };
    var12.shadowOffset = var17;
    var1.mainCard = var12;
    var12 = {};
    var12.flexGrow = var10;
    var1.button = var12;
    var12 = {};
    var12.marginBottom = var16;
    var1.loginButton = var12;
    var12 = {};
    var16 = var6[var13];
    var16 = var14.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.xs;
    var12.borderRadius = var16;
    var12.marginBottom = var15;
    var13 = var6[var13];
    var13 = var14.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGH;
    var12.backgroundColor = var13;
    var13 = 'none';
    var12.display = var13;
    var1.temporaryToggle = var12;
    var12 = {
        'height': 300,
        'justifyContent': 'center'
    };
    var1.loadingContainer = var12;
    var1 = var4.bind(var11)(var1);
    var _closure1_slot13 = var1;
    var1 = {};
    var1.LOADING = var10;
    var4 = 'LOADING';
    var1[var10] = var4;
    var1.NOT_FOUND = var9;
    var4 = 'NOT_FOUND';
    var1[var9] = var4;
    var1.LOADED = var8;
    var4 = 'LOADED';
    var1[var8] = var4;
    var1.SUCCEEDED = var7;
    var4 = 'SUCCEEDED';
    var1[var7] = var4;
    var _closure1_slot14 = var1;
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/RemoteAuthModal.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: RemoteAuth, environment: var3
        var0 = _closure1_slot13;
        var3 = undefined;
        var12 = var0.bind(var3)();
        var8 = _closure1_slot1;
        var9 = _closure1_slot2;
        var0 = 7;
        var0 = var9[var0];
        var0 = var8.bind(var3)(var0);
        var0 = var0.bind(var3)();
        var13 = var0.top;
        var2 = _closure1_slot11;
        var1 = _closure1_slot5;
        var0 = {};
        var4 = 8;
        var4 = var9[var4];
        var4 = var8.bind(var3)(var4);
        var0.source = var4;
        var4 = var12.imageStyle;
        var0.imageStyle = var4;
        var4 = var12.background;
        var0.style = var4;
        var6 = _closure1_slot10;
        var5 = _closure1_slot6;
        var4 = {};
        var10 = var12.logo;
        var7 = new Array(2);
        var7[0] = var10;
        var10 = {};
        var10.marginTop = var13;
        var7[1] = var10;
        var4.style = var7;
        var7 = 9;
        var7 = var9[var7];
        var7 = var8.bind(var3)(var7);
        var4.source = var7;
        var5 = var6.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var7 = _closure1_slot10;
        var6 = _closure1_slot7;
        var5 = {};
        var8 = var12.container;
        var5.style = var8;
        var10 = _closure1_slot10;
        var9 = _closure1_slot7;
        var8 = {};
        var12 = var12.mainCard;
        var8.style = var12;
        var13 = _closure1_slot10;
        var12 = _closure1_slot15;
        var11 = {};
        var15 = arg0;
        var16 = var11;
        var14 = copyDataProperties(var16, var15);
        var11 = var13.bind(var3)(var12, var11);
        var8.children = var11;
        var8 = var10.bind(var3)(var9, var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var2.RemoteAuthSteps = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 660, 33, 1297, 671, 1568, 10401, 10402, 4851, 507, 10403, 10404, 22, 10405, 3895, 1234, 4832, 5335, 4829, 4518, 10406, 10407, 2]);