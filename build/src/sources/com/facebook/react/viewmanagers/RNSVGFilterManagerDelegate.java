package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.DynamicFromObject;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.RNSVGFilterManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNSVGFilterManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNSVGFilterManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNSVGFilterManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        String str2;
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1535814968:
                if (str.equals("primitiveUnits")) {
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
            case -899348777:
                if (str.equals("filterUnits")) {
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
            case 3373707:
                if (str.equals(StackTraceHelper.NAME_KEY)) {
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
                ((RNSVGFilterManagerInterface) this.mViewManager).setPrimitiveUnits(t10, (String) obj);
                return;
            case 1:
                ((RNSVGFilterManagerInterface) this.mViewManager).setHeight(t10, new DynamicFromObject(obj));
                return;
            case 2:
                ((RNSVGFilterManagerInterface) this.mViewManager).setFilterUnits(t10, (String) obj);
                return;
            case 3:
                ((RNSVGFilterManagerInterface) this.mViewManager).setX(t10, new DynamicFromObject(obj));
                return;
            case 4:
                ((RNSVGFilterManagerInterface) this.mViewManager).setY(t10, new DynamicFromObject(obj));
                return;
            case 5:
                RNSVGFilterManagerInterface rNSVGFilterManagerInterface = (RNSVGFilterManagerInterface) this.mViewManager;
                if (obj == null) {
                    str2 = null;
                } else {
                    str2 = (String) obj;
                }
                rNSVGFilterManagerInterface.setName(t10, str2);
                return;
            case 6:
                ((RNSVGFilterManagerInterface) this.mViewManager).setWidth(t10, new DynamicFromObject(obj));
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
