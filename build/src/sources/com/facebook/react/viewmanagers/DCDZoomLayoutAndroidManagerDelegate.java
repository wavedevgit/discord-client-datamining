package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.DCDZoomLayoutAndroidManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class DCDZoomLayoutAndroidManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & DCDZoomLayoutAndroidManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public DCDZoomLayoutAndroidManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void receiveCommand(T t10, String str, ReadableArray readableArray) {
        str.getClass();
        if (!str.equals("unzoom")) {
            if (!str.equals("zoomTo")) {
                return;
            }
            ((DCDZoomLayoutAndroidManagerInterface) this.mViewManager).zoomTo(t10, (float) readableArray.getDouble(0), (float) readableArray.getDouble(1), (float) readableArray.getDouble(2), readableArray.getBoolean(3));
            return;
        }
        ((DCDZoomLayoutAndroidManagerInterface) this.mViewManager).unzoom(t10, readableArray.getBoolean(0));
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        str.getClass();
        boolean z10 = false;
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1853558344:
                if (str.equals("gestureEnabled")) {
                    c10 = 0;
                    break;
                }
                break;
            case -153607991:
                if (str.equals("minimumZoomScale")) {
                    c10 = 1;
                    break;
                }
                break;
            case -89739529:
                if (str.equals("maximumZoomScale")) {
                    c10 = 2;
                    break;
                }
                break;
        }
        float f10 = 0.0f;
        switch (c10) {
            case 0:
                DCDZoomLayoutAndroidManagerInterface dCDZoomLayoutAndroidManagerInterface = (DCDZoomLayoutAndroidManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                dCDZoomLayoutAndroidManagerInterface.setGestureEnabled(t10, z10);
                return;
            case 1:
                DCDZoomLayoutAndroidManagerInterface dCDZoomLayoutAndroidManagerInterface2 = (DCDZoomLayoutAndroidManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                dCDZoomLayoutAndroidManagerInterface2.setMinimumZoomScale(t10, f10);
                return;
            case 2:
                DCDZoomLayoutAndroidManagerInterface dCDZoomLayoutAndroidManagerInterface3 = (DCDZoomLayoutAndroidManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                dCDZoomLayoutAndroidManagerInterface3.setMaximumZoomScale(t10, f10);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
