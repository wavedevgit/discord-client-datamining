package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.ClipViewManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class ClipViewManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & ClipViewManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public ClipViewManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        str.getClass();
        int i10 = 0;
        boolean z10 = false;
        char c10 = 65535;
        switch (str.hashCode()) {
            case 1128713255:
                if (str.equals("cutouts")) {
                    c10 = 0;
                    break;
                }
                break;
            case 1349188574:
                if (str.equals("borderRadius")) {
                    c10 = 1;
                    break;
                }
                break;
            case 1481008795:
                if (str.equals("clipToCircle")) {
                    c10 = 2;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                ((ClipViewManagerInterface) this.mViewManager).setCutouts(t10, (ReadableArray) obj);
                return;
            case 1:
                ClipViewManagerInterface clipViewManagerInterface = (ClipViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    i10 = ((Double) obj).intValue();
                }
                clipViewManagerInterface.setBorderRadius(t10, i10);
                return;
            case 2:
                ClipViewManagerInterface clipViewManagerInterface2 = (ClipViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                clipViewManagerInterface2.setClipToCircle(t10, z10);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
