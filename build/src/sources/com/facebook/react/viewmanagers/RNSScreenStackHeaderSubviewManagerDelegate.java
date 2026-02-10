package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.RNSScreenStackHeaderSubviewManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNSScreenStackHeaderSubviewManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNSScreenStackHeaderSubviewManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNSScreenStackHeaderSubviewManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        str.getClass();
        boolean z10 = false;
        char c10 = 65535;
        switch (str.hashCode()) {
            case -2035671681:
                if (str.equals("synchronousShadowStateUpdatesEnabled")) {
                    c10 = 0;
                    break;
                }
                break;
            case 3575610:
                if (str.equals("type")) {
                    c10 = 1;
                    break;
                }
                break;
            case 144077060:
                if (str.equals("hidesSharedBackground")) {
                    c10 = 2;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                RNSScreenStackHeaderSubviewManagerInterface rNSScreenStackHeaderSubviewManagerInterface = (RNSScreenStackHeaderSubviewManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNSScreenStackHeaderSubviewManagerInterface.setSynchronousShadowStateUpdatesEnabled(t10, z10);
                return;
            case 1:
                ((RNSScreenStackHeaderSubviewManagerInterface) this.mViewManager).setType(t10, (String) obj);
                return;
            case 2:
                RNSScreenStackHeaderSubviewManagerInterface rNSScreenStackHeaderSubviewManagerInterface2 = (RNSScreenStackHeaderSubviewManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNSScreenStackHeaderSubviewManagerInterface2.setHidesSharedBackground(t10, z10);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
