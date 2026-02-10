package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.RNSStackScreenManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNSStackScreenManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNSStackScreenManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNSStackScreenManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        String str2;
        str.getClass();
        if (!str.equals("screenKey")) {
            if (!str.equals("activityMode")) {
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
            } else {
                ((RNSStackScreenManagerInterface) this.mViewManager).setActivityMode(t10, (String) obj);
                return;
            }
        }
        RNSStackScreenManagerInterface rNSStackScreenManagerInterface = (RNSStackScreenManagerInterface) this.mViewManager;
        if (obj == null) {
            str2 = null;
        } else {
            str2 = (String) obj;
        }
        rNSStackScreenManagerInterface.setScreenKey(t10, str2);
    }
}
