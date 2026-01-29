package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.DynamicFromObject;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.RNSVGFeColorMatrixManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNSVGFeColorMatrixManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNSVGFeColorMatrixManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNSVGFeColorMatrixManagerDelegate(BaseViewManager baseViewManager) {
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
            case -823812830:
                if (str.equals("values")) {
                    c10 = 2;
                    break;
                }
                break;
            case 120:
                if (str.equals("x")) {
                    c10 = 3;
                    break;
                }
                break;
            case 121:
                if (str.equals("y")) {
                    c10 = 4;
                    break;
                }
                break;
            case 104364:
                if (str.equals("in1")) {
                    c10 = 5;
                    break;
                }
                break;
            case 3575610:
                if (str.equals("type")) {
                    c10 = 6;
                    break;
                }
                break;
            case 113126854:
                if (str.equals("width")) {
                    c10 = 7;
                    break;
                }
                break;
        }
        String str2 = null;
        switch (c10) {
            case 0:
                ((RNSVGFeColorMatrixManagerInterface) this.mViewManager).setHeight(t10, new DynamicFromObject(obj));
                return;
            case 1:
                RNSVGFeColorMatrixManagerInterface rNSVGFeColorMatrixManagerInterface = (RNSVGFeColorMatrixManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGFeColorMatrixManagerInterface.setResult(t10, str2);
                return;
            case 2:
                ((RNSVGFeColorMatrixManagerInterface) this.mViewManager).setValues(t10, (ReadableArray) obj);
                return;
            case 3:
                ((RNSVGFeColorMatrixManagerInterface) this.mViewManager).setX(t10, new DynamicFromObject(obj));
                return;
            case 4:
                ((RNSVGFeColorMatrixManagerInterface) this.mViewManager).setY(t10, new DynamicFromObject(obj));
                return;
            case 5:
                RNSVGFeColorMatrixManagerInterface rNSVGFeColorMatrixManagerInterface2 = (RNSVGFeColorMatrixManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGFeColorMatrixManagerInterface2.setIn1(t10, str2);
                return;
            case 6:
                ((RNSVGFeColorMatrixManagerInterface) this.mViewManager).setType(t10, (String) obj);
                return;
            case 7:
                ((RNSVGFeColorMatrixManagerInterface) this.mViewManager).setWidth(t10, new DynamicFromObject(obj));
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
