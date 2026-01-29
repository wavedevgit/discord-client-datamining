package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.DynamicFromObject;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.RNSVGFeFloodManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNSVGFeFloodManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNSVGFeFloodManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNSVGFeFloodManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        float floatValue;
        String str2;
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1960777211:
                if (str.equals("floodColor")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1221029593:
                if (str.equals("height")) {
                    c10 = 1;
                    break;
                }
                break;
            case -1033006547:
                if (str.equals("floodOpacity")) {
                    c10 = 2;
                    break;
                }
                break;
            case -934426595:
                if (str.equals("result")) {
                    c10 = 3;
                    break;
                }
                break;
            case 120:
                if (str.equals("x")) {
                    c10 = 4;
                    break;
                }
                break;
            case 121:
                if (str.equals("y")) {
                    c10 = 5;
                    break;
                }
                break;
            case 113126854:
                if (str.equals("width")) {
                    c10 = 6;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                ((RNSVGFeFloodManagerInterface) this.mViewManager).setFloodColor(t10, new DynamicFromObject(obj));
                return;
            case 1:
                ((RNSVGFeFloodManagerInterface) this.mViewManager).setHeight(t10, new DynamicFromObject(obj));
                return;
            case 2:
                RNSVGFeFloodManagerInterface rNSVGFeFloodManagerInterface = (RNSVGFeFloodManagerInterface) this.mViewManager;
                if (obj == null) {
                    floatValue = 1.0f;
                } else {
                    floatValue = ((Double) obj).floatValue();
                }
                rNSVGFeFloodManagerInterface.setFloodOpacity(t10, floatValue);
                return;
            case 3:
                RNSVGFeFloodManagerInterface rNSVGFeFloodManagerInterface2 = (RNSVGFeFloodManagerInterface) this.mViewManager;
                if (obj == null) {
                    str2 = null;
                } else {
                    str2 = (String) obj;
                }
                rNSVGFeFloodManagerInterface2.setResult(t10, str2);
                return;
            case 4:
                ((RNSVGFeFloodManagerInterface) this.mViewManager).setX(t10, new DynamicFromObject(obj));
                return;
            case 5:
                ((RNSVGFeFloodManagerInterface) this.mViewManager).setY(t10, new DynamicFromObject(obj));
                return;
            case 6:
                ((RNSVGFeFloodManagerInterface) this.mViewManager).setWidth(t10, new DynamicFromObject(obj));
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
