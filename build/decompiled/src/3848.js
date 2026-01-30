// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var4 = {};
    var0 = 'function pnpm_interpolateColorTs1(value,inputRange,colors,options){const{interpolate,Extrapolation,hsvToColor}=this.__closure;let h=0;const{useCorrectedHSVInterpolation=true}=options;if(useCorrectedHSVInterpolation){const correctedInputRange=[inputRange[0]];const originalH=colors.h;const correctedH=[originalH[0]];for(let i=1;i<originalH.length;++i){const d=originalH[i]-originalH[i-1];if(originalH[i]>originalH[i-1]&&d>0.5){correctedInputRange.push(inputRange[i]);correctedInputRange.push(inputRange[i]+0.00001);correctedH.push(originalH[i]-1);correctedH.push(originalH[i]);}else if(originalH[i]<originalH[i-1]&&d<-0.5){correctedInputRange.push(inputRange[i]);correctedInputRange.push(inputRange[i]+0.00001);correctedH.push(originalH[i]+1);correctedH.push(originalH[i]);}else{correctedInputRange.push(inputRange[i]);correctedH.push(originalH[i]);}}h=(interpolate(value,correctedInputRange,correctedH,Extrapolation.CLAMP)+1)%1;}else{h=interpolate(value,inputRange,colors.h,Extrapolation.CLAMP);}const s=interpolate(value,inputRange,colors.s,Extrapolation.CLAMP);const v=interpolate(value,inputRange,colors.v,Extrapolation.CLAMP);const a=interpolate(value,inputRange,colors.a,Extrapolation.CLAMP);return hsvToColor(h,s,v,a);}';
    var4.code = var0;
    var3 = function(arg0, arg1, arg2, arg3) { // Original name: pnpm_interpolateColorTs1, environment: var1
        _fun34864: for (var _fun34864_ip = 0;;) switch (_fun34864_ip) {
            case 0:
                var11 = arg0;
                var10 = arg1;
                var2 = arg2;
                var0 = arg3;
                var0 = var0.useCorrectedHSVInterpolation;
                var6 = undefined;
                if (!(var6 !== var0)) {
                    _fun34864_ip = 101;
                    continue _fun34864
                }
            case 26:
                if (var0) {
                    _fun34864_ip = 101;
                    continue _fun34864
                }
            case 29:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 0;
                var1 = var7[var0];
                var4 = var5.bind(var6)(var1);
                var3 = var4.interpolate;
                var18 = var2.h;
                var0 = var7[var0];
                var0 = var5.bind(var6)(var0);
                var0 = var0.Extrapolation;
                var17 = var0.CLAMP;
                var21 = var4;
                var20 = var11;
                var19 = var10;
                var5 = var21[var3](var20, var19, var18, var17, var16);
                _fun34864_ip = 488;
                continue _fun34864;
            case 101:
                var12 = 0;
                var0 = var10[var12];
                var8 = new Array(1);
                var8[0] = var0;
                var14 = var2.h;
                var0 = var14[var12];
                var7 = new Array(1);
                var7[0] = var0;
                var0 = var14.length;
                var1 = 1;
                var0 = var1 < var0;
                var13 = 1e-05;
                var9 = -0.5;
                var4 = 0.5;
                var3 = var1;
                if (!var0) {
                    _fun34864_ip = 417;
                    continue _fun34864
                }
            case 183:
                var15 = var14[var3];
                var0 = var3 - var1;
                var0 = var14[var0];
                var0 = var15 - var0;
                var16 = var14[var3];
                var15 = var3 - var1;
                var15 = var14[var15];
                if (!(var16 > var15)) {
                    _fun34864_ip = 219;
                    continue _fun34864
                }
            case 215:
                if (!(!(var0 > var4))) {
                    _fun34864_ip = 338;
                    continue _fun34864
                }
            case 219:
                var16 = var14[var3];
                var15 = var3 - var1;
                var15 = var14[var15];
                if (!(var16 < var15)) {
                    _fun34864_ip = 239;
                    continue _fun34864
                }
            case 235:
                if (!(!(var0 < var9))) {
                    _fun34864_ip = 272;
                    continue _fun34864
                }
            case 239:
                var15 = var8.push;
                var0 = var10[var3];
                var0 = var15.bind(var8)(var0);
                var15 = var7.push;
                var0 = var14[var3];
                var0 = var15.bind(var7)(var0);
                _fun34864_ip = 402;
                continue _fun34864;
            case 272:
                var15 = var8.push;
                var0 = var10[var3];
                var0 = var15.bind(var8)(var0);
                var15 = var8.push;
                var0 = var10[var3];
                var0 = var0 + var13;
                var0 = var15.bind(var8)(var0);
                var15 = var7.push;
                var0 = var14[var3];
                var0 = var0 + var1;
                var0 = var15.bind(var7)(var0);
                var15 = var7.push;
                var0 = var14[var3];
                var0 = var15.bind(var7)(var0);
                _fun34864_ip = 402;
                continue _fun34864;
            case 338:
                var15 = var8.push;
                var0 = var10[var3];
                var0 = var15.bind(var8)(var0);
                var15 = var8.push;
                var0 = var10[var3];
                var0 = var0 + var13;
                var0 = var15.bind(var8)(var0);
                var15 = var7.push;
                var0 = var14[var3];
                var0 = var0 - var1;
                var0 = var15.bind(var7)(var0);
                var15 = var7.push;
                var0 = var14[var3];
                var0 = var15.bind(var7)(var0);
            case 402:
                var3 = var3 + 1;
                var0 = var14.length;
                if (var3 < var0) {
                    _fun34864_ip = 183;
                    continue _fun34864
                }
            case 417:
                var9 = _closure1_slot0;
                var0 = _closure1_slot2;
                var3 = var0[var12];
                var4 = var9.bind(var6)(var3);
                var3 = var4.interpolate;
                var0 = var0[var12];
                var0 = var9.bind(var6)(var0);
                var0 = var0.Extrapolation;
                var17 = var0.CLAMP;
                var21 = var4;
                var20 = var11;
                var19 = var8;
                var18 = var7;
                var0 = var21[var3](var20, var19, var18, var17, var16);
                var0 = var0 + var1;
                var5 = var0 % var1;
            case 488:
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 0;
                var3 = var7[var0];
                var9 = var1.bind(var6)(var3);
                var8 = var9.interpolate;
                var18 = var2.s;
                var3 = var7[var0];
                var3 = var1.bind(var6)(var3);
                var3 = var3.Extrapolation;
                var17 = var3.CLAMP;
                var21 = var9;
                var20 = var11;
                var19 = var10;
                var4 = var21[var8](var20, var19, var18, var17, var16);
                var3 = var7[var0];
                var12 = var1.bind(var6)(var3);
                var9 = var12.interpolate;
                var18 = var2.v;
                var3 = var7[var0];
                var3 = var1.bind(var6)(var3);
                var3 = var3.Extrapolation;
                var17 = var3.CLAMP;
                var21 = var12;
                var20 = var11;
                var19 = var10;
                var3 = var21[var9](var20, var19, var18, var17, var16);
                var8 = var7[var0];
                var9 = var1.bind(var6)(var8);
                var8 = var9.interpolate;
                var18 = var2.a;
                var0 = var7[var0];
                var0 = var1.bind(var6)(var0);
                var0 = var0.Extrapolation;
                var17 = var0.CLAMP;
                var21 = var9;
                var20 = var11;
                var19 = var10;
                var17 = var21[var8](var20, var19, var18, var17, var16);
                var0 = 1;
                var0 = var7[var0];
                var1 = var1.bind(var6)(var0);
                var0 = var1.hsvToColor;
                var21 = var1;
                var20 = var5;
                var19 = var4;
                var18 = var3;
                var0 = var21[var0](var20, var19, var18, var17, var16);
                return var0;
        }
    };
    var8 = {};
    var5 = 0;
    var9 = var7[var5];
    var0 = undefined;
    var9 = var6.bind(var0)(var9);
    var9 = var9.interpolate;
    var8.interpolate = var9;
    var9 = var7[var5];
    var9 = var6.bind(var0)(var9);
    var9 = var9.Extrapolation;
    var8.Extrapolation = var9;
    var10 = 1;
    var9 = var7[var10];
    var9 = var6.bind(var0)(var9);
    var9 = var9.hsvToColor;
    var8.hsvToColor = var9;
    var3.__closure = var8;
    var8 = 1574790978150.0;
    var3.__workletHash = var8;
    var3.__initData = var4;
    var _closure1_slot3 = var3;
    var3 = {};
    var4 = 'function pnpm_interpolateColorTs2(x,gamma){return x.map(function(v){return Math.pow(v/255,gamma);});}';
    var3.code = var4;
    var11 = function(arg0, arg1) { // Original name: pnpm_interpolateColorTs2, environment: var1
        var2 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var0 = global;
            var3 = var0.Math;
            var2 = var3.pow;
            var1 = arg0;
            var0 = 255;
            var1 = var1 / var0;
            var0 = _closure2_slot0;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var4 = {};
    var11.__closure = var4;
    var4 = 16826369876333.0;
    var11.__workletHash = var4;
    var11.__initData = var3;
    var _closure1_slot4 = var11;
    var3 = {};
    var4 = 'function pnpm_interpolateColorTs3(x,gamma){return Math.round(Math.pow(x,1/gamma)*255);}';
    var3.code = var4;
    var9 = function(arg0, arg1) { // Original name: pnpm_interpolateColorTs3, environment: var1
        var0 = global;
        var2 = var0.Math;
        var1 = var2.round;
        var5 = var0.Math;
        var4 = var5.pow;
        var3 = 1;
        var0 = arg1;
        var3 = var3 / var0;
        var0 = arg0;
        var3 = var4.bind(var5)(var0, var3);
        var0 = 255;
        var0 = var0 * var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var4 = {};
    var9.__closure = var4;
    var4 = 5856560656141.0;
    var9.__workletHash = var4;
    var9.__initData = var3;
    var _closure1_slot5 = var9;
    var4 = {};
    var3 = 'function pnpm_interpolateColorTs4(value,inputRange,colors,options){const{toLinearSpace,interpolate,Extrapolation,rgbaColor,toGammaSpace}=this.__closure;const{gamma=2.2}=options;let{r:outputR,g:outputG,b:outputB}=colors;if(gamma!==1){outputR=toLinearSpace(outputR,gamma);outputG=toLinearSpace(outputG,gamma);outputB=toLinearSpace(outputB,gamma);}const r=interpolate(value,inputRange,outputR,Extrapolation.CLAMP);const g=interpolate(value,inputRange,outputG,Extrapolation.CLAMP);const b=interpolate(value,inputRange,outputB,Extrapolation.CLAMP);const a=interpolate(value,inputRange,colors.a,Extrapolation.CLAMP);if(gamma===1){return rgbaColor(r,g,b,a);}return rgbaColor(toGammaSpace(r,gamma),toGammaSpace(g,gamma),toGammaSpace(b,gamma),a);}';
    var4.code = var3;
    var3 = function(arg0, arg1, arg2, arg3) { // Original name: pnpm_interpolateColorTs4, environment: var1
        _fun34868: for (var _fun34868_ip = 0;;) switch (_fun34868_ip) {
            case 0:
                var11 = arg0;
                var10 = arg1;
                var2 = arg2;
                var0 = arg3;
                var0 = var0.gamma;
                var12 = 2.2;
                var7 = undefined;
                if (!(var7 !== var0)) {
                    _fun34868_ip = 37;
                    continue _fun34868
                }
            case 34:
                var12 = var0;
            case 37:
                var3 = var2.r;
                var1 = var2.g;
                var4 = var2.b;
                var8 = 1;
                var6 = var3;
                var9 = var1;
                var15 = var4;
                if (!(var8 !== var12)) {
                    _fun34868_ip = 94;
                    continue _fun34868
                }
            case 69:
                var0 = _closure1_slot4;
                var6 = var0.bind(var7)(var3, var12);
                var9 = var0.bind(var7)(var1, var12);
                var15 = var0.bind(var7)(var4, var12);
            case 94:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 0;
                var3 = var14[var0];
                var5 = var13.bind(var7)(var3);
                var4 = var5.interpolate;
                var3 = var14[var0];
                var3 = var13.bind(var7)(var3);
                var3 = var3.Extrapolation;
                var16 = var3.CLAMP;
                var20 = var5;
                var19 = var11;
                var18 = var10;
                var17 = var6;
                var6 = var20[var4](var19, var18, var17, var16, var15);
                var3 = var14[var0];
                var5 = var13.bind(var7)(var3);
                var4 = var5.interpolate;
                var3 = var14[var0];
                var3 = var13.bind(var7)(var3);
                var3 = var3.Extrapolation;
                var16 = var3.CLAMP;
                var20 = var5;
                var19 = var11;
                var18 = var10;
                var17 = var9;
                var5 = var20[var4](var19, var18, var17, var16, var15);
                var3 = var14[var0];
                var9 = var13.bind(var7)(var3);
                var4 = var9.interpolate;
                var3 = var14[var0];
                var3 = var13.bind(var7)(var3);
                var3 = var3.Extrapolation;
                var16 = var3.CLAMP;
                var20 = var9;
                var19 = var11;
                var18 = var10;
                var17 = var15;
                var4 = var20[var4](var19, var18, var17, var16, var15);
                var3 = var14[var0];
                var9 = var13.bind(var7)(var3);
                var3 = var9.interpolate;
                var17 = var2.a;
                var0 = var14[var0];
                var0 = var13.bind(var7)(var0);
                var0 = var0.Extrapolation;
                var16 = var0.CLAMP;
                var20 = var9;
                var19 = var11;
                var18 = var10;
                var3 = var20[var3](var19, var18, var17, var16, var15);
                if (!(var8 !== var12)) {
                    _fun34868_ip = 384;
                    continue _fun34868
                }
            case 321:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var8];
                var11 = var2.bind(var7)(var0);
                var10 = var11.rgbaColor;
                var0 = _closure1_slot5;
                var9 = var0.bind(var7)(var6, var12);
                var2 = var0.bind(var7)(var5, var12);
                var17 = var0.bind(var7)(var4, var12);
                var20 = var11;
                var19 = var9;
                var18 = var2;
                var16 = var3;
                var0 = var20[var10](var19, var18, var17, var16, var15);
                _fun34868_ip = 426;
                continue _fun34868;
            case 384:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var2 = var2.bind(var7)(var1);
                var1 = var2.rgbaColor;
                var20 = var2;
                var19 = var6;
                var18 = var5;
                var17 = var4;
                var16 = var3;
                var0 = var20[var1](var19, var18, var17, var16, var15);
            case 426:
                return var0;
        }
    };
    var8 = {};
    var8.toLinearSpace = var11;
    var11 = var7[var5];
    var11 = var6.bind(var0)(var11);
    var11 = var11.interpolate;
    var8.interpolate = var11;
    var11 = var7[var5];
    var11 = var6.bind(var0)(var11);
    var11 = var11.Extrapolation;
    var8.Extrapolation = var11;
    var11 = var7[var10];
    var11 = var6.bind(var0)(var11);
    var11 = var11.rgbaColor;
    var8.rgbaColor = var11;
    var8.toGammaSpace = var9;
    var3.__closure = var8;
    var8 = 13883480600753.0;
    var3.__workletHash = var8;
    var3.__initData = var4;
    var _closure1_slot6 = var3;
    var4 = {};
    var3 = 'function pnpm_interpolateColorTs5(value,inputRange,colors,_options){const{interpolate,Extrapolation,culori,rgbaColor}=this.__closure;const l=interpolate(value,inputRange,colors.l,Extrapolation.CLAMP);const a=interpolate(value,inputRange,colors.a,Extrapolation.CLAMP);const b=interpolate(value,inputRange,colors.b,Extrapolation.CLAMP);const alpha=interpolate(value,inputRange,colors.alpha,Extrapolation.CLAMP);const{r:_r,g:_g,b:_b,alpha:_alpha}=culori.oklab.convert.toRgb({l:l,a:a,b:b,alpha:alpha});return rgbaColor(_r,_g,_b,_alpha);}';
    var4.code = var3;
    var3 = function(arg0, arg1, arg2, arg3) { // Original name: pnpm_interpolateColorTs5, environment: var1
        var12 = arg0;
        var11 = arg1;
        var3 = arg2;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 0;
        var4 = var7[var2];
        var1 = undefined;
        var9 = var6.bind(var1)(var4);
        var8 = var9.interpolate;
        var15 = var3.l;
        var4 = var7[var2];
        var4 = var6.bind(var1)(var4);
        var4 = var4.Extrapolation;
        var14 = var4.CLAMP;
        var18 = var9;
        var17 = var12;
        var16 = var11;
        var9 = var18[var8](var17, var16, var15, var14, var13);
        var4 = var7[var2];
        var10 = var6.bind(var1)(var4);
        var8 = var10.interpolate;
        var15 = var3.a;
        var4 = var7[var2];
        var4 = var6.bind(var1)(var4);
        var4 = var4.Extrapolation;
        var14 = var4.CLAMP;
        var18 = var10;
        var17 = var12;
        var16 = var11;
        var8 = var18[var8](var17, var16, var15, var14, var13);
        var4 = var7[var2];
        var13 = var6.bind(var1)(var4);
        var10 = var13.interpolate;
        var15 = var3.b;
        var4 = var7[var2];
        var4 = var6.bind(var1)(var4);
        var4 = var4.Extrapolation;
        var14 = var4.CLAMP;
        var18 = var13;
        var17 = var12;
        var16 = var11;
        var5 = var18[var10](var17, var16, var15, var14, var13);
        var4 = var7[var2];
        var10 = var6.bind(var1)(var4);
        var4 = var10.interpolate;
        var15 = var3.alpha;
        var2 = var7[var2];
        var2 = var6.bind(var1)(var2);
        var2 = var2.Extrapolation;
        var14 = var2.CLAMP;
        var18 = var10;
        var17 = var12;
        var16 = var11;
        var4 = var18[var4](var17, var16, var15, var14, var13);
        var2 = _closure1_slot1;
        var0 = 2;
        var0 = var7[var0];
        var0 = var2.bind(var1)(var0);
        var0 = var0.oklab;
        var3 = var0.convert;
        var2 = var3.toRgb;
        var0 = {};
        var0.l = var9;
        var0.a = var8;
        var0.b = var5;
        var0.alpha = var4;
        var0 = var2.bind(var3)(var0);
        var5 = var0.r;
        var16 = var0.g;
        var15 = var0.b;
        var14 = var0.alpha;
        var0 = 1;
        var0 = var7[var0];
        var1 = var6.bind(var1)(var0);
        var0 = var1.rgbaColor;
        var18 = var1;
        var17 = var5;
        var0 = var18[var0](var17, var16, var15, var14, var13);
        return var0;
    };
    var8 = {};
    var9 = var7[var5];
    var9 = var6.bind(var0)(var9);
    var9 = var9.interpolate;
    var8.interpolate = var9;
    var9 = var7[var5];
    var9 = var6.bind(var0)(var9);
    var9 = var9.Extrapolation;
    var8.Extrapolation = var9;
    var9 = 2;
    var11 = var7[var9];
    var11 = var12.bind(var0)(var11);
    var8.culori = var11;
    var11 = var7[var10];
    var11 = var6.bind(var0)(var11);
    var11 = var11.rgbaColor;
    var8.rgbaColor = var11;
    var3.__closure = var8;
    var8 = 7788654685113.0;
    var3.__workletHash = var8;
    var3.__initData = var4;
    var _closure1_slot7 = var3;
    var3 = {};
    var4 = "function pnpm_interpolateColorTs6(colors,convFromRgb){const{processColor,red,green,blue,opacity}=this.__closure;const ch1=[];const ch2=[];const ch3=[];const alpha=[];for(let i=0;i<colors.length;i++){const color=colors[i];const processedColor=processColor(color);if(typeof processedColor==='number'){const convertedColor=convFromRgb({r:red(processedColor),g:green(processedColor),b:blue(processedColor)});ch1.push(convertedColor.ch1);ch2.push(convertedColor.ch2);ch3.push(convertedColor.ch3);alpha.push(opacity(processedColor));}}return{ch1:ch1,ch2:ch2,ch3:ch3,alpha:alpha};}";
    var3.code = var4;
    var11 = function(arg0, arg1) { // Original name: pnpm_interpolateColorTs6, environment: var1
        _fun34870: for (var _fun34870_ip = 0;;) switch (_fun34870_ip) {
            case 0:
                var11 = arg0;
                var10 = arg1;
                var4 = new Array(0);
                var3 = new Array(0);
                var2 = new Array(0);
                var1 = new Array(0);
                var0 = var11.length;
                var9 = 0;
                var0 = var9 < var0;
                var7 = 1;
                var6 = undefined;
                var5 = 'number';
                if (!var0) {
                    _fun34870_ip = 273;
                    continue _fun34870
                }
            case 51:
                var13 = var11[var9];
                var12 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var7];
                var12 = var12.bind(var6)(var0);
                var0 = var12.processColor;
                var14 = var0.bind(var12)(var13);
                var0 = typeof var14;
                if (!(var5 === var0)) {
                    _fun34870_ip = 258;
                    continue _fun34870
                }
            case 93:
                var12 = {};
                var13 = _closure1_slot0;
                var0 = _closure1_slot2;
                var15 = var0[var7];
                var16 = var13.bind(var6)(var15);
                var15 = var16.red;
                var15 = var15.bind(var16)(var14);
                var12.r = var15;
                var15 = var0[var7];
                var16 = var13.bind(var6)(var15);
                var15 = var16.green;
                var15 = var15.bind(var16)(var14);
                var12.g = var15;
                var15 = var0[var7];
                var16 = var13.bind(var6)(var15);
                var15 = var16.blue;
                var15 = var15.bind(var16)(var14);
                var12.b = var15;
                var12 = var10.bind(var6)(var12);
                var16 = var4.push;
                var15 = var12.ch1;
                var15 = var16.bind(var4)(var15);
                var16 = var3.push;
                var15 = var12.ch2;
                var15 = var16.bind(var3)(var15);
                var15 = var2.push;
                var12 = var12.ch3;
                var12 = var15.bind(var2)(var12);
                var12 = var1.push;
                var0 = var0[var7];
                var13 = var13.bind(var6)(var0);
                var0 = var13.opacity;
                var0 = var0.bind(var13)(var14);
                var0 = var12.bind(var1)(var0);
            case 258:
                var9 = var9 + 1;
                var0 = var11.length;
                if (var9 < var0) {
                    _fun34870_ip = 51;
                    continue _fun34870
                }
            case 273:
                var0 = {};
                var0.ch1 = var4;
                var0.ch2 = var3;
                var0.ch3 = var2;
                var0.alpha = var1;
                return var0;
        }
    };
    var4 = {};
    var8 = var7[var10];
    var8 = var6.bind(var0)(var8);
    var8 = var8.processColor;
    var4.processColor = var8;
    var8 = var7[var10];
    var8 = var6.bind(var0)(var8);
    var8 = var8.red;
    var4.red = var8;
    var8 = var7[var10];
    var8 = var6.bind(var0)(var8);
    var8 = var8.green;
    var4.green = var8;
    var8 = var7[var10];
    var8 = var6.bind(var0)(var8);
    var8 = var8.blue;
    var4.blue = var8;
    var8 = var7[var10];
    var8 = var6.bind(var0)(var8);
    var8 = var8.opacity;
    var4.opacity = var8;
    var11.__closure = var4;
    var4 = 8764168362190.0;
    var11.__workletHash = var4;
    var11.__initData = var3;
    var _closure1_slot8 = var11;
    var4 = {};
    var3 = 'function pnpm_interpolateColorTs7(colors){const{_splitColorsIntoChannels}=this.__closure;const{ch1:ch1,ch2:ch2,ch3:ch3,alpha:alpha}=_splitColorsIntoChannels(colors,function(color){return{ch1:color.r,ch2:color.g,ch3:color.b};});return{r:ch1,g:ch2,b:ch3,a:alpha};}';
    var4.code = var3;
    var3 = function(arg0) { // Original name: pnpm_interpolateColorTs7, environment: var1
        var3 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = {};
            var2 = var1.r;
            var0.ch1 = var2;
            var2 = var1.g;
            var0.ch2 = var2;
            var1 = var1.b;
            var0.ch3 = var1;
            return var0;
        };
        var1 = var3.bind(var2)(var1, var0);
        var0 = {};
        var2 = var1.ch1;
        var0.r = var2;
        var2 = var1.ch2;
        var0.g = var2;
        var2 = var1.ch3;
        var0.b = var2;
        var1 = var1.alpha;
        var0.a = var1;
        return var0;
    };
    var8 = {};
    var8._splitColorsIntoChannels = var11;
    var3.__closure = var8;
    var8 = 937749076324.0;
    var3.__workletHash = var8;
    var3.__initData = var4;
    var _closure1_slot9 = var3;
    var4 = {};
    var3 = 'function pnpm_interpolateColorTs8(colors){const{_splitColorsIntoChannels,RGBtoHSV}=this.__closure;const{ch1:ch1,ch2:ch2,ch3:ch3,alpha:alpha}=_splitColorsIntoChannels(colors,function(color){const hsvColor=RGBtoHSV(color.r,color.g,color.b);return{ch1:hsvColor.h,ch2:hsvColor.s,ch3:hsvColor.v};});return{h:ch1,s:ch2,v:ch3,a:alpha};}';
    var4.code = var3;
    var3 = function(arg0) { // Original name: pnpm_interpolateColorTs8, environment: var1
        var3 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 1;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.RGBtoHSV;
            var2 = var0.r;
            var1 = var0.g;
            var0 = var0.b;
            var1 = var3.bind(var4)(var2, var1, var0);
            var0 = {};
            var2 = var1.h;
            var0.ch1 = var2;
            var2 = var1.s;
            var0.ch2 = var2;
            var1 = var1.v;
            var0.ch3 = var1;
            return var0;
        };
        var1 = var3.bind(var2)(var1, var0);
        var0 = {};
        var2 = var1.ch1;
        var0.h = var2;
        var2 = var1.ch2;
        var0.s = var2;
        var2 = var1.ch3;
        var0.v = var2;
        var1 = var1.alpha;
        var0.a = var1;
        return var0;
    };
    var8 = {};
    var8._splitColorsIntoChannels = var11;
    var13 = var7[var10];
    var13 = var6.bind(var0)(var13);
    var13 = var13.RGBtoHSV;
    var8.RGBtoHSV = var13;
    var3.__closure = var8;
    var8 = 11798906675452.0;
    var3.__workletHash = var8;
    var3.__initData = var4;
    var _closure1_slot10 = var3;
    var4 = {};
    var3 = 'function pnpm_interpolateColorTs9(colors){const{_splitColorsIntoChannels,culori}=this.__closure;const{ch1:ch1,ch2:ch2,ch3:ch3,alpha:alpha}=_splitColorsIntoChannels(colors,function(color){const labColor=culori.oklab.convert.fromRgb(color);return{ch1:labColor.l,ch2:labColor.a,ch3:labColor.b};});return{l:ch1,a:ch2,b:ch3,alpha:alpha};}';
    var4.code = var3;
    var3 = function(arg0) { // Original name: pnpm_interpolateColorTs9, environment: var1
        var3 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.oklab;
            var2 = var0.convert;
            var1 = var2.fromRgb;
            var0 = arg0;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var2 = var1.l;
            var0.ch1 = var2;
            var2 = var1.a;
            var0.ch2 = var2;
            var1 = var1.b;
            var0.ch3 = var1;
            return var0;
        };
        var1 = var3.bind(var2)(var1, var0);
        var0 = {};
        var2 = var1.ch1;
        var0.l = var2;
        var2 = var1.ch2;
        var0.a = var2;
        var2 = var1.ch3;
        var0.b = var2;
        var1 = var1.alpha;
        var0.alpha = var1;
        return var0;
    };
    var8 = {};
    var8._splitColorsIntoChannels = var11;
    var11 = var7[var9];
    var11 = var12.bind(var0)(var11);
    var8.culori = var11;
    var3.__closure = var8;
    var8 = 11214827752418.0;
    var3.__workletHash = var8;
    var3.__initData = var4;
    var _closure1_slot11 = var3;
    var3 = {};
    var4 = 'function interpolateColor_Pnpm_interpolateColorTs10(value,inputRange,outputRange,colorSpace=\'RGB\',options={}){const{interpolateColorsHSV,getInterpolateHSV,interpolateColorsRGB,getInterpolateRGB,interpolateColorsLAB,getInterpolateLAB}=this.__closure;if(colorSpace===\'HSV\'){return interpolateColorsHSV(value,inputRange,getInterpolateHSV(outputRange),options);}else if(colorSpace===\'RGB\'){return interpolateColorsRGB(value,inputRange,getInterpolateRGB(outputRange),options);}else if(colorSpace===\'LAB\'){return interpolateColorsLAB(value,inputRange,getInterpolateLAB(outputRange),options);}throw new ReanimatedError("Invalid color space provided: "+colorSpace+". Supported values are: [\'RGB\', \'HSV\', \'LAB\'].");}';
    var3.code = var4;
    var _closure1_slot12 = var3;
    var3 = function() { // Environment: var1
        var0 = function(arg0, arg1, arg2) { // Original name: interpolateColor, environment: var0
            _fun34878: for (var _fun34878_ip = 0;;) switch (_fun34878_ip) {
                case 0:
                    var5 = arg0;
                    var4 = arg1;
                    var6 = arg2;
                    var3 = undefined;
                    var8 = undefined;
                    var0 = arguments.length;
                    var7 = 3;
                    var1 = var0 > var7;
                    var0 = 'RGB';
                    var9 = var0;
                    if (!var1) {
                        _fun34878_ip = 48;
                        continue _fun34878
                    }
                case 33:
                    var1 = arguments[var7];
                    var9 = var0;
                    if (!(var3 !== var1)) {
                        _fun34878_ip = 48;
                        continue _fun34878
                    }
                case 44:
                    var9 = arguments[var7];
                case 48:
                    var2 = arguments.length;
                    var1 = 4;
                    if (!(var2 > var1)) {
                        _fun34878_ip = 66;
                        continue _fun34878
                    }
                case 58:
                    var2 = arguments[var1];
                    if (!(var3 === var2)) {
                        _fun34878_ip = 70;
                        continue _fun34878
                    }
                case 66:
                    var2 = {};
                    _fun34878_ip = 74;
                    continue _fun34878;
                case 70:
                    var2 = arguments[var1];
                case 74:
                    var1 = 'HSV';
                    if (!(var1 !== var9)) {
                        _fun34878_ip = 249;
                        continue _fun34878
                    }
                case 87:
                    if (!(var0 !== var9)) {
                        _fun34878_ip = 216;
                        continue _fun34878
                    }
                case 94:
                    var0 = 'LAB';
                    if (!(var0 !== var9)) {
                        _fun34878_ip = 183;
                        continue _fun34878
                    }
                case 104:
                    var1 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var0 = var0[var7];
                    var0 = var1.bind(var3)(var0);
                    var7 = var0.ReanimatedError;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var8 = var0.concat;
                    var1 = 'Invalid color space provided: ';
                    var0 = ". Supported values are: ['RGB', 'HSV', 'LAB'].";
                    var14 = var8.bind(var1)(var9, var0);
                    var1 = var7.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var7
                        }
                    });
                    var15 = var1;
                    var0 = new var15[var7](var14, var13);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 183:
                    var1 = _closure1_slot7;
                    var0 = _closure1_slot11;
                    var12 = var0.bind(var3)(var6);
                    var15 = undefined;
                    var14 = var5;
                    var13 = var4;
                    var11 = var2;
                    var0 = var15[var1](var14, var13, var12, var11, var10);
                    return var0;
                case 216:
                    var1 = _closure1_slot6;
                    var0 = _closure1_slot9;
                    var12 = var0.bind(var3)(var6);
                    var15 = undefined;
                    var14 = var5;
                    var13 = var4;
                    var11 = var2;
                    var0 = var15[var1](var14, var13, var12, var11, var10);
                    return var0;
                case 249:
                    var1 = _closure1_slot3;
                    var0 = _closure1_slot10;
                    var12 = var0.bind(var3)(var6);
                    var15 = undefined;
                    var14 = var5;
                    var13 = var4;
                    var11 = var2;
                    var0 = var15[var1](var14, var13, var12, var11, var10);
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot3;
        var2.interpolateColorsHSV = var3;
        var3 = _closure1_slot10;
        var2.getInterpolateHSV = var3;
        var3 = _closure1_slot6;
        var2.interpolateColorsRGB = var3;
        var3 = _closure1_slot9;
        var2.getInterpolateRGB = var3;
        var3 = _closure1_slot7;
        var2.interpolateColorsLAB = var3;
        var3 = _closure1_slot11;
        var2.getInterpolateLAB = var3;
        var0.__closure = var2;
        var2 = 10004340589678.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot12;
        var0.__initData = var1;
        return var0;
    };
    var4 = var3.bind(var0)();
    var3 = {};
    var3.RGB = var5;
    var8 = 'RGB';
    var3[var5] = var8;
    var3.HSV = var10;
    var8 = 'HSV';
    var3[var10] = var8;
    var3.LAB = var9;
    var8 = 'LAB';
    var3[var9] = var8;
    var _closure1_slot13 = var3;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.Extrapolation;
    var2.Extrapolate = var5;
    var2.interpolateColor = var4;
    var2.ColorSpace = var3;
    var1 = function(arg0, arg1) { // Original name: useInterpolateConfig, environment: var1
        _fun34879: for (var _fun34879_ip = 0;;) switch (_fun34879_ip) {
            case 0:
                var6 = undefined;
                var1 = undefined;
                var2 = arguments.length;
                var0 = 2;
                if (!(var2 > var0)) {
                    _fun34879_ip = 22;
                    continue _fun34879
                }
            case 14:
                var2 = arguments[var0];
                if (!(var6 === var2)) {
                    _fun34879_ip = 37;
                    continue _fun34879
                }
            case 22:
                var2 = _closure1_slot13;
                var4 = var2.RGB;
                _fun34879_ip = 41;
                continue _fun34879;
            case 37:
                var4 = arguments[var0];
            case 41:
                var2 = arguments.length;
                var0 = 3;
                if (!(var2 > var0)) {
                    _fun34879_ip = 59;
                    continue _fun34879
                }
            case 51:
                var2 = arguments[var0];
                if (!(var6 === var2)) {
                    _fun34879_ip = 63;
                    continue _fun34879
                }
            case 59:
                var3 = {};
                _fun34879_ip = 67;
                continue _fun34879;
            case 63:
                var3 = arguments[var0];
            case 67:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 4;
                var0 = var7[var0];
                var2 = var5.bind(var6)(var0);
                var1 = var2.useSharedValue;
                var0 = {};
                var8 = arg0;
                var0.inputRange = var8;
                var8 = arg1;
                var0.outputRange = var8;
                var0.colorSpace = var4;
                var4 = 5;
                var4 = var7[var4];
                var6 = var5.bind(var6)(var4);
                var5 = var6.makeMutable;
                var4 = null;
                var4 = var5.bind(var6)(var4);
                var0.cache = var4;
                var0.options = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.useInterpolateConfig = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3849, 3723, 3850, 3691, 3832, 3724]);