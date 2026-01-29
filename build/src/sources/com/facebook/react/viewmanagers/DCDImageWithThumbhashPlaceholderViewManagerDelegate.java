package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.DCDImageWithThumbhashPlaceholderViewManagerInterface;
import com.facebook.react.views.textinput.ReactTextInputShadowNode;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class DCDImageWithThumbhashPlaceholderViewManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & DCDImageWithThumbhashPlaceholderViewManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public DCDImageWithThumbhashPlaceholderViewManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        str.getClass();
        int i10 = 0;
        char c10 = 65535;
        switch (str.hashCode()) {
            case 96681:
                if (str.equals("alt")) {
                    c10 = 0;
                    break;
                }
                break;
            case 116076:
                if (str.equals("uri")) {
                    c10 = 1;
                    break;
                }
                break;
            case 234665957:
                if (str.equals("placeholderVersion")) {
                    c10 = 2;
                    break;
                }
                break;
            case 598246771:
                if (str.equals(ReactTextInputShadowNode.PROP_PLACEHOLDER)) {
                    c10 = 3;
                    break;
                }
                break;
        }
        String str2 = null;
        switch (c10) {
            case 0:
                DCDImageWithThumbhashPlaceholderViewManagerInterface dCDImageWithThumbhashPlaceholderViewManagerInterface = (DCDImageWithThumbhashPlaceholderViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                dCDImageWithThumbhashPlaceholderViewManagerInterface.setAlt(t10, str2);
                return;
            case 1:
                DCDImageWithThumbhashPlaceholderViewManagerInterface dCDImageWithThumbhashPlaceholderViewManagerInterface2 = (DCDImageWithThumbhashPlaceholderViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                dCDImageWithThumbhashPlaceholderViewManagerInterface2.setUri(t10, str2);
                return;
            case 2:
                DCDImageWithThumbhashPlaceholderViewManagerInterface dCDImageWithThumbhashPlaceholderViewManagerInterface3 = (DCDImageWithThumbhashPlaceholderViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    i10 = ((Double) obj).intValue();
                }
                dCDImageWithThumbhashPlaceholderViewManagerInterface3.setPlaceholderVersion(t10, i10);
                return;
            case 3:
                DCDImageWithThumbhashPlaceholderViewManagerInterface dCDImageWithThumbhashPlaceholderViewManagerInterface4 = (DCDImageWithThumbhashPlaceholderViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                dCDImageWithThumbhashPlaceholderViewManagerInterface4.setPlaceholder(t10, str2);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
