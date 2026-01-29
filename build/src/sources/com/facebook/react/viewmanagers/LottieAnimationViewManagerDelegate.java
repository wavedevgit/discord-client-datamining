package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.viewmanagers.LottieAnimationViewManagerInterface;
import com.facebook.react.views.progressbar.ReactProgressBarViewManager;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class LottieAnimationViewManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & LottieAnimationViewManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public LottieAnimationViewManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void receiveCommand(T t10, String str, ReadableArray readableArray) {
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case -934426579:
                if (str.equals("resume")) {
                    c10 = 0;
                    break;
                }
                break;
            case 3443508:
                if (str.equals("play")) {
                    c10 = 1;
                    break;
                }
                break;
            case 106440182:
                if (str.equals("pause")) {
                    c10 = 2;
                    break;
                }
                break;
            case 108404047:
                if (str.equals("reset")) {
                    c10 = 3;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                ((LottieAnimationViewManagerInterface) this.mViewManager).resume(t10);
                return;
            case 1:
                ((LottieAnimationViewManagerInterface) this.mViewManager).play(t10, readableArray.getInt(0), readableArray.getInt(1));
                return;
            case 2:
                ((LottieAnimationViewManagerInterface) this.mViewManager).pause(t10);
                return;
            case 3:
                ((LottieAnimationViewManagerInterface) this.mViewManager).reset(t10);
                return;
            default:
                return;
        }
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        float floatValue;
        double doubleValue;
        str.getClass();
        boolean z10 = false;
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1931191604:
                if (str.equals("imageAssetsFolder")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1698420908:
                if (str.equals("sourceURL")) {
                    c10 = 1;
                    break;
                }
                break;
            case -1620771041:
                if (str.equals("textFiltersIOS")) {
                    c10 = 2;
                    break;
                }
                break;
            case -1111735389:
                if (str.equals("sourceJson")) {
                    c10 = 3;
                    break;
                }
                break;
            case -1111633594:
                if (str.equals("sourceName")) {
                    c10 = 4;
                    break;
                }
                break;
            case -1073046328:
                if (str.equals("cacheComposition")) {
                    c10 = 5;
                    break;
                }
                break;
            case -1001078227:
                if (str.equals(ReactProgressBarViewManager.PROP_PROGRESS)) {
                    c10 = 6;
                    break;
                }
                break;
            case -413415295:
                if (str.equals("textFiltersAndroid")) {
                    c10 = 7;
                    break;
                }
                break;
            case -204076609:
                if (str.equals("sourceDotLottieURI")) {
                    c10 = '\b';
                    break;
                }
                break;
            case 3327652:
                if (str.equals("loop")) {
                    c10 = '\t';
                    break;
                }
                break;
            case 95945896:
                if (str.equals("dummy")) {
                    c10 = '\n';
                    break;
                }
                break;
            case 109641799:
                if (str.equals("speed")) {
                    c10 = 11;
                    break;
                }
                break;
            case 399078087:
                if (str.equals("hardwareAccelerationAndroid")) {
                    c10 = '\f';
                    break;
                }
                break;
            case 1193882713:
                if (str.equals("renderMode")) {
                    c10 = '\r';
                    break;
                }
                break;
            case 1410565912:
                if (str.equals("colorFilters")) {
                    c10 = 14;
                    break;
                }
                break;
            case 1438608771:
                if (str.equals("autoPlay")) {
                    c10 = 15;
                    break;
                }
                break;
            case 2049757303:
                if (str.equals(ViewProps.RESIZE_MODE)) {
                    c10 = 16;
                    break;
                }
                break;
            case 2111299681:
                if (str.equals("enableMergePathsAndroidForKitKatAndAbove")) {
                    c10 = 17;
                    break;
                }
                break;
        }
        String str2 = null;
        switch (c10) {
            case 0:
                LottieAnimationViewManagerInterface lottieAnimationViewManagerInterface = (LottieAnimationViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                lottieAnimationViewManagerInterface.setImageAssetsFolder(t10, str2);
                return;
            case 1:
                LottieAnimationViewManagerInterface lottieAnimationViewManagerInterface2 = (LottieAnimationViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                lottieAnimationViewManagerInterface2.setSourceURL(t10, str2);
                return;
            case 2:
                ((LottieAnimationViewManagerInterface) this.mViewManager).setTextFiltersIOS(t10, (ReadableArray) obj);
                return;
            case 3:
                LottieAnimationViewManagerInterface lottieAnimationViewManagerInterface3 = (LottieAnimationViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                lottieAnimationViewManagerInterface3.setSourceJson(t10, str2);
                return;
            case 4:
                LottieAnimationViewManagerInterface lottieAnimationViewManagerInterface4 = (LottieAnimationViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                lottieAnimationViewManagerInterface4.setSourceName(t10, str2);
                return;
            case 5:
                LottieAnimationViewManagerInterface lottieAnimationViewManagerInterface5 = (LottieAnimationViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                lottieAnimationViewManagerInterface5.setCacheComposition(t10, z10);
                return;
            case 6:
                LottieAnimationViewManagerInterface lottieAnimationViewManagerInterface6 = (LottieAnimationViewManagerInterface) this.mViewManager;
                if (obj == null) {
                    floatValue = 0.0f;
                } else {
                    floatValue = ((Double) obj).floatValue();
                }
                lottieAnimationViewManagerInterface6.setProgress(t10, floatValue);
                return;
            case 7:
                ((LottieAnimationViewManagerInterface) this.mViewManager).setTextFiltersAndroid(t10, (ReadableArray) obj);
                return;
            case '\b':
                LottieAnimationViewManagerInterface lottieAnimationViewManagerInterface7 = (LottieAnimationViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                lottieAnimationViewManagerInterface7.setSourceDotLottieURI(t10, str2);
                return;
            case '\t':
                LottieAnimationViewManagerInterface lottieAnimationViewManagerInterface8 = (LottieAnimationViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                lottieAnimationViewManagerInterface8.setLoop(t10, z10);
                return;
            case '\n':
                ((LottieAnimationViewManagerInterface) this.mViewManager).setDummy(t10, (ReadableMap) obj);
                return;
            case 11:
                LottieAnimationViewManagerInterface lottieAnimationViewManagerInterface9 = (LottieAnimationViewManagerInterface) this.mViewManager;
                if (obj == null) {
                    doubleValue = 0.0d;
                } else {
                    doubleValue = ((Double) obj).doubleValue();
                }
                lottieAnimationViewManagerInterface9.setSpeed(t10, doubleValue);
                return;
            case '\f':
                LottieAnimationViewManagerInterface lottieAnimationViewManagerInterface10 = (LottieAnimationViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                lottieAnimationViewManagerInterface10.setHardwareAccelerationAndroid(t10, z10);
                return;
            case '\r':
                LottieAnimationViewManagerInterface lottieAnimationViewManagerInterface11 = (LottieAnimationViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                lottieAnimationViewManagerInterface11.setRenderMode(t10, str2);
                return;
            case 14:
                ((LottieAnimationViewManagerInterface) this.mViewManager).setColorFilters(t10, (ReadableArray) obj);
                return;
            case 15:
                LottieAnimationViewManagerInterface lottieAnimationViewManagerInterface12 = (LottieAnimationViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                lottieAnimationViewManagerInterface12.setAutoPlay(t10, z10);
                return;
            case 16:
                LottieAnimationViewManagerInterface lottieAnimationViewManagerInterface13 = (LottieAnimationViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                lottieAnimationViewManagerInterface13.setResizeMode(t10, str2);
                return;
            case 17:
                LottieAnimationViewManagerInterface lottieAnimationViewManagerInterface14 = (LottieAnimationViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                lottieAnimationViewManagerInterface14.setEnableMergePathsAndroidForKitKatAndAbove(t10, z10);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
