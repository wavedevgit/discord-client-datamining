package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.DynamicFromObject;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.RNSVGFeMergeManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNSVGFeMergeManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNSVGFeMergeManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNSVGFeMergeManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        String str2;
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
            case 104993457:
                if (str.equals("nodes")) {
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
        }
        switch (c10) {
            case 0:
                ((RNSVGFeMergeManagerInterface) this.mViewManager).setHeight(t10, new DynamicFromObject(obj));
                return;
            case 1:
                RNSVGFeMergeManagerInterface rNSVGFeMergeManagerInterface = (RNSVGFeMergeManagerInterface) this.mViewManager;
                if (obj == null) {
                    str2 = null;
                } else {
                    str2 = (String) obj;
                }
                rNSVGFeMergeManagerInterface.setResult(t10, str2);
                return;
            case 2:
                ((RNSVGFeMergeManagerInterface) this.mViewManager).setX(t10, new DynamicFromObject(obj));
                return;
            case 3:
                ((RNSVGFeMergeManagerInterface) this.mViewManager).setY(t10, new DynamicFromObject(obj));
                return;
            case 4:
                ((RNSVGFeMergeManagerInterface) this.mViewManager).setNodes(t10, (ReadableArray) obj);
                return;
            case 5:
                ((RNSVGFeMergeManagerInterface) this.mViewManager).setWidth(t10, new DynamicFromObject(obj));
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
