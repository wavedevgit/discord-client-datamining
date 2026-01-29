package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.DynamicFromObject;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.RNSVGFeGaussianBlurManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNSVGFeGaussianBlurManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNSVGFeGaussianBlurManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNSVGFeGaussianBlurManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1221029593:
                if (str.equals("height")) {
                    c10 = 0;
                    break;
                }
                break;
            case -934426595:
                if (str.equals("result")) {
                    c10 = 1;
                    break;
                }
                break;
            case 120:
                if (str.equals("x")) {
                    c10 = 2;
                    break;
                }
                break;
            case 121:
                if (str.equals("y")) {
                    c10 = 3;
                    break;
                }
                break;
            case 104364:
                if (str.equals("in1")) {
                    c10 = 4;
                    break;
                }
                break;
            case 113126854:
                if (str.equals("width")) {
                    c10 = 5;
                    break;
                }
                break;
            case 1530721536:
                if (str.equals("edgeMode")) {
                    c10 = 6;
                    break;
                }
                break;
            case 1837475450:
                if (str.equals("stdDeviationX")) {
                    c10 = 7;
                    break;
                }
                break;
            case 1837475451:
                if (str.equals("stdDeviationY")) {
                    c10 = '\b';
                    break;
                }
                break;
        }
        String str2 = null;
        float f10 = 0.0f;
        switch (c10) {
            case 0:
                ((RNSVGFeGaussianBlurManagerInterface) this.mViewManager).setHeight(t10, new DynamicFromObject(obj));
                return;
            case 1:
                RNSVGFeGaussianBlurManagerInterface rNSVGFeGaussianBlurManagerInterface = (RNSVGFeGaussianBlurManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGFeGaussianBlurManagerInterface.setResult(t10, str2);
                return;
            case 2:
                ((RNSVGFeGaussianBlurManagerInterface) this.mViewManager).setX(t10, new DynamicFromObject(obj));
                return;
            case 3:
                ((RNSVGFeGaussianBlurManagerInterface) this.mViewManager).setY(t10, new DynamicFromObject(obj));
                return;
            case 4:
                RNSVGFeGaussianBlurManagerInterface rNSVGFeGaussianBlurManagerInterface2 = (RNSVGFeGaussianBlurManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGFeGaussianBlurManagerInterface2.setIn1(t10, str2);
                return;
            case 5:
                ((RNSVGFeGaussianBlurManagerInterface) this.mViewManager).setWidth(t10, new DynamicFromObject(obj));
                return;
            case 6:
                ((RNSVGFeGaussianBlurManagerInterface) this.mViewManager).setEdgeMode(t10, (String) obj);
                return;
            case 7:
                RNSVGFeGaussianBlurManagerInterface rNSVGFeGaussianBlurManagerInterface3 = (RNSVGFeGaussianBlurManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNSVGFeGaussianBlurManagerInterface3.setStdDeviationX(t10, f10);
                return;
            case '\b':
                RNSVGFeGaussianBlurManagerInterface rNSVGFeGaussianBlurManagerInterface4 = (RNSVGFeGaussianBlurManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNSVGFeGaussianBlurManagerInterface4.setStdDeviationY(t10, f10);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
