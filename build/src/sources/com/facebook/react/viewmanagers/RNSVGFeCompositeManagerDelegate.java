package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.DynamicFromObject;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.RNSVGFeCompositeManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNSVGFeCompositeManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNSVGFeCompositeManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNSVGFeCompositeManagerDelegate(BaseViewManager baseViewManager) {
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
            case 3366:
                if (str.equals("k1")) {
                    c10 = 4;
                    break;
                }
                break;
            case 3367:
                if (str.equals("k2")) {
                    c10 = 5;
                    break;
                }
                break;
            case 3368:
                if (str.equals("k3")) {
                    c10 = 6;
                    break;
                }
                break;
            case 3369:
                if (str.equals("k4")) {
                    c10 = 7;
                    break;
                }
                break;
            case 104364:
                if (str.equals("in1")) {
                    c10 = '\b';
                    break;
                }
                break;
            case 104365:
                if (str.equals("in2")) {
                    c10 = '\t';
                    break;
                }
                break;
            case 113126854:
                if (str.equals("width")) {
                    c10 = '\n';
                    break;
                }
                break;
            case 1662708749:
                if (str.equals("operator1")) {
                    c10 = 11;
                    break;
                }
                break;
        }
        String str2 = null;
        float f10 = 0.0f;
        switch (c10) {
            case 0:
                ((RNSVGFeCompositeManagerInterface) this.mViewManager).setHeight(t10, new DynamicFromObject(obj));
                return;
            case 1:
                RNSVGFeCompositeManagerInterface rNSVGFeCompositeManagerInterface = (RNSVGFeCompositeManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGFeCompositeManagerInterface.setResult(t10, str2);
                return;
            case 2:
                ((RNSVGFeCompositeManagerInterface) this.mViewManager).setX(t10, new DynamicFromObject(obj));
                return;
            case 3:
                ((RNSVGFeCompositeManagerInterface) this.mViewManager).setY(t10, new DynamicFromObject(obj));
                return;
            case 4:
                RNSVGFeCompositeManagerInterface rNSVGFeCompositeManagerInterface2 = (RNSVGFeCompositeManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNSVGFeCompositeManagerInterface2.setK1(t10, f10);
                return;
            case 5:
                RNSVGFeCompositeManagerInterface rNSVGFeCompositeManagerInterface3 = (RNSVGFeCompositeManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNSVGFeCompositeManagerInterface3.setK2(t10, f10);
                return;
            case 6:
                RNSVGFeCompositeManagerInterface rNSVGFeCompositeManagerInterface4 = (RNSVGFeCompositeManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNSVGFeCompositeManagerInterface4.setK3(t10, f10);
                return;
            case 7:
                RNSVGFeCompositeManagerInterface rNSVGFeCompositeManagerInterface5 = (RNSVGFeCompositeManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNSVGFeCompositeManagerInterface5.setK4(t10, f10);
                return;
            case '\b':
                RNSVGFeCompositeManagerInterface rNSVGFeCompositeManagerInterface6 = (RNSVGFeCompositeManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGFeCompositeManagerInterface6.setIn1(t10, str2);
                return;
            case '\t':
                RNSVGFeCompositeManagerInterface rNSVGFeCompositeManagerInterface7 = (RNSVGFeCompositeManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGFeCompositeManagerInterface7.setIn2(t10, str2);
                return;
            case '\n':
                ((RNSVGFeCompositeManagerInterface) this.mViewManager).setWidth(t10, new DynamicFromObject(obj));
                return;
            case 11:
                ((RNSVGFeCompositeManagerInterface) this.mViewManager).setOperator1(t10, (String) obj);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
