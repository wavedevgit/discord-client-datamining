package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.DynamicFromObject;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.RNSVGFeOffsetManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNSVGFeOffsetManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNSVGFeOffsetManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNSVGFeOffsetManagerDelegate(BaseViewManager baseViewManager) {
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
            case 3220:
                if (str.equals("dx")) {
                    c10 = 4;
                    break;
                }
                break;
            case 3221:
                if (str.equals("dy")) {
                    c10 = 5;
                    break;
                }
                break;
            case 104364:
                if (str.equals("in1")) {
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
                ((RNSVGFeOffsetManagerInterface) this.mViewManager).setHeight(t10, new DynamicFromObject(obj));
                return;
            case 1:
                RNSVGFeOffsetManagerInterface rNSVGFeOffsetManagerInterface = (RNSVGFeOffsetManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGFeOffsetManagerInterface.setResult(t10, str2);
                return;
            case 2:
                ((RNSVGFeOffsetManagerInterface) this.mViewManager).setX(t10, new DynamicFromObject(obj));
                return;
            case 3:
                ((RNSVGFeOffsetManagerInterface) this.mViewManager).setY(t10, new DynamicFromObject(obj));
                return;
            case 4:
                ((RNSVGFeOffsetManagerInterface) this.mViewManager).setDx(t10, new DynamicFromObject(obj));
                return;
            case 5:
                ((RNSVGFeOffsetManagerInterface) this.mViewManager).setDy(t10, new DynamicFromObject(obj));
                return;
            case 6:
                RNSVGFeOffsetManagerInterface rNSVGFeOffsetManagerInterface2 = (RNSVGFeOffsetManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNSVGFeOffsetManagerInterface2.setIn1(t10, str2);
                return;
            case 7:
                ((RNSVGFeOffsetManagerInterface) this.mViewManager).setWidth(t10, new DynamicFromObject(obj));
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
