package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.AutoLayoutViewManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class AutoLayoutViewManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & AutoLayoutViewManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public AutoLayoutViewManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        str.getClass();
        boolean z10 = false;
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1742339391:
                if (str.equals("disableAutoLayout")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1735873685:
                if (str.equals("enableInstrumentation")) {
                    c10 = 1;
                    break;
                }
                break;
            case -866440768:
                if (str.equals("scrollOffset")) {
                    c10 = 2;
                    break;
                }
                break;
            case 1387629604:
                if (str.equals("horizontal")) {
                    c10 = 3;
                    break;
                }
                break;
            case 1705877054:
                if (str.equals("renderAheadOffset")) {
                    c10 = 4;
                    break;
                }
                break;
            case 1862514705:
                if (str.equals("windowSize")) {
                    c10 = 5;
                    break;
                }
                break;
        }
        double d10 = 0.0d;
        switch (c10) {
            case 0:
                AutoLayoutViewManagerInterface autoLayoutViewManagerInterface = (AutoLayoutViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                autoLayoutViewManagerInterface.setDisableAutoLayout(t10, z10);
                return;
            case 1:
                AutoLayoutViewManagerInterface autoLayoutViewManagerInterface2 = (AutoLayoutViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                autoLayoutViewManagerInterface2.setEnableInstrumentation(t10, z10);
                return;
            case 2:
                AutoLayoutViewManagerInterface autoLayoutViewManagerInterface3 = (AutoLayoutViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    d10 = ((Double) obj).doubleValue();
                }
                autoLayoutViewManagerInterface3.setScrollOffset(t10, d10);
                return;
            case 3:
                AutoLayoutViewManagerInterface autoLayoutViewManagerInterface4 = (AutoLayoutViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                autoLayoutViewManagerInterface4.setHorizontal(t10, z10);
                return;
            case 4:
                AutoLayoutViewManagerInterface autoLayoutViewManagerInterface5 = (AutoLayoutViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    d10 = ((Double) obj).doubleValue();
                }
                autoLayoutViewManagerInterface5.setRenderAheadOffset(t10, d10);
                return;
            case 5:
                AutoLayoutViewManagerInterface autoLayoutViewManagerInterface6 = (AutoLayoutViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    d10 = ((Double) obj).doubleValue();
                }
                autoLayoutViewManagerInterface6.setWindowSize(t10, d10);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
