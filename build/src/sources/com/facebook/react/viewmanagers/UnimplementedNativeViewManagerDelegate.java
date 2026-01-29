package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.UnimplementedNativeViewManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class UnimplementedNativeViewManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & UnimplementedNativeViewManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public UnimplementedNativeViewManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        String str2;
        str.getClass();
        if (!str.equals(StackTraceHelper.NAME_KEY)) {
            super.kotlinCompat$setProperty(t10, str, obj);
            return;
        }
        UnimplementedNativeViewManagerInterface unimplementedNativeViewManagerInterface = (UnimplementedNativeViewManagerInterface) this.mViewManager;
        if (obj == null) {
            str2 = "";
        } else {
            str2 = (String) obj;
        }
        unimplementedNativeViewManagerInterface.setName(t10, str2);
    }
}
