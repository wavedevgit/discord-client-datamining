package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.viewmanagers.OverKeyboardViewManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class OverKeyboardViewManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & OverKeyboardViewManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public OverKeyboardViewManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        boolean booleanValue;
        str.getClass();
        if (!str.equals(ViewProps.VISIBLE)) {
            super.kotlinCompat$setProperty(t10, str, obj);
            return;
        }
        OverKeyboardViewManagerInterface overKeyboardViewManagerInterface = (OverKeyboardViewManagerInterface) this.mViewManager;
        if (obj == null) {
            booleanValue = false;
        } else {
            booleanValue = ((Boolean) obj).booleanValue();
        }
        overKeyboardViewManagerInterface.setVisible(t10, booleanValue);
    }
}
