package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.AnimatableUnderlayViewManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class AnimatableUnderlayViewManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & AnimatableUnderlayViewManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public AnimatableUnderlayViewManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case -2083741526:
                if (str.equals("animatedHeight")) {
                    c10 = 0;
                    break;
                }
                break;
            case -2031626490:
                if (str.equals("animatedBackgroundColorRgba")) {
                    c10 = 1;
                    break;
                }
                break;
            case -1854365213:
                if (str.equals("animatedWidth")) {
                    c10 = 2;
                    break;
                }
                break;
            case -1806389417:
                if (str.equals("animatedBorderWidth")) {
                    c10 = 3;
                    break;
                }
                break;
            case -936803287:
                if (str.equals("clipDirectionX")) {
                    c10 = 4;
                    break;
                }
                break;
            case -936803286:
                if (str.equals("clipDirectionY")) {
                    c10 = 5;
                    break;
                }
                break;
            case 614423495:
                if (str.equals("animatedBottomLeftRadius")) {
                    c10 = 6;
                    break;
                }
                break;
            case 1128997308:
                if (str.equals("animatedTopRightRadius")) {
                    c10 = 7;
                    break;
                }
                break;
            case 1616042816:
                if (str.equals("animatedBottomRightRadius")) {
                    c10 = '\b';
                    break;
                }
                break;
            case 1786440776:
                if (str.equals("animatedBorderColorRgba")) {
                    c10 = '\t';
                    break;
                }
                break;
            case 2122733003:
                if (str.equals("animatedTopLeftRadius")) {
                    c10 = '\n';
                    break;
                }
                break;
        }
        String str2 = null;
        float f10 = 0.0f;
        switch (c10) {
            case 0:
                AnimatableUnderlayViewManagerInterface animatableUnderlayViewManagerInterface = (AnimatableUnderlayViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                animatableUnderlayViewManagerInterface.setAnimatedHeight(t10, f10);
                return;
            case 1:
                AnimatableUnderlayViewManagerInterface animatableUnderlayViewManagerInterface2 = (AnimatableUnderlayViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                animatableUnderlayViewManagerInterface2.setAnimatedBackgroundColorRgba(t10, str2);
                return;
            case 2:
                AnimatableUnderlayViewManagerInterface animatableUnderlayViewManagerInterface3 = (AnimatableUnderlayViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                animatableUnderlayViewManagerInterface3.setAnimatedWidth(t10, f10);
                return;
            case 3:
                AnimatableUnderlayViewManagerInterface animatableUnderlayViewManagerInterface4 = (AnimatableUnderlayViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                animatableUnderlayViewManagerInterface4.setAnimatedBorderWidth(t10, f10);
                return;
            case 4:
                ((AnimatableUnderlayViewManagerInterface) this.mViewManager).setClipDirectionX(t10, (String) obj);
                return;
            case 5:
                ((AnimatableUnderlayViewManagerInterface) this.mViewManager).setClipDirectionY(t10, (String) obj);
                return;
            case 6:
                AnimatableUnderlayViewManagerInterface animatableUnderlayViewManagerInterface5 = (AnimatableUnderlayViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                animatableUnderlayViewManagerInterface5.setAnimatedBottomLeftRadius(t10, f10);
                return;
            case 7:
                AnimatableUnderlayViewManagerInterface animatableUnderlayViewManagerInterface6 = (AnimatableUnderlayViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                animatableUnderlayViewManagerInterface6.setAnimatedTopRightRadius(t10, f10);
                return;
            case '\b':
                AnimatableUnderlayViewManagerInterface animatableUnderlayViewManagerInterface7 = (AnimatableUnderlayViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                animatableUnderlayViewManagerInterface7.setAnimatedBottomRightRadius(t10, f10);
                return;
            case '\t':
                AnimatableUnderlayViewManagerInterface animatableUnderlayViewManagerInterface8 = (AnimatableUnderlayViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                animatableUnderlayViewManagerInterface8.setAnimatedBorderColorRgba(t10, str2);
                return;
            case '\n':
                AnimatableUnderlayViewManagerInterface animatableUnderlayViewManagerInterface9 = (AnimatableUnderlayViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                animatableUnderlayViewManagerInterface9.setAnimatedTopLeftRadius(t10, f10);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
