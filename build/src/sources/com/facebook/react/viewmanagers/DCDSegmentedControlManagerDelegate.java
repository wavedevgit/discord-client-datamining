package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.viewmanagers.DCDSegmentedControlManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class DCDSegmentedControlManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & DCDSegmentedControlManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public DCDSegmentedControlManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        str.getClass();
        int i10 = 0;
        char c10 = 65535;
        switch (str.hashCode()) {
            case -823812830:
                if (str.equals("values")) {
                    c10 = 0;
                    break;
                }
                break;
            case -758089477:
                if (str.equals("accessibilityRoleDescriptions")) {
                    c10 = 1;
                    break;
                }
                break;
            case -85026353:
                if (str.equals("titleAttributes")) {
                    c10 = 2;
                    break;
                }
                break;
            case 583595847:
                if (str.equals("cornerRadius")) {
                    c10 = 3;
                    break;
                }
                break;
            case 1287124693:
                if (str.equals(ViewProps.BACKGROUND_COLOR)) {
                    c10 = 4;
                    break;
                }
                break;
            case 1433491354:
                if (str.equals("selectedSegmentIndex")) {
                    c10 = 5;
                    break;
                }
                break;
            case 1693087156:
                if (str.equals("selectedTitleAttributes")) {
                    c10 = 6;
                    break;
                }
                break;
            case 2125422940:
                if (str.equals("customSelectedTintColor")) {
                    c10 = 7;
                    break;
                }
                break;
        }
        String str2 = null;
        switch (c10) {
            case 0:
                ((DCDSegmentedControlManagerInterface) this.mViewManager).setValues(t10, (ReadableArray) obj);
                return;
            case 1:
                ((DCDSegmentedControlManagerInterface) this.mViewManager).setAccessibilityRoleDescriptions(t10, (ReadableArray) obj);
                return;
            case 2:
                ((DCDSegmentedControlManagerInterface) this.mViewManager).setTitleAttributes(t10, (ReadableMap) obj);
                return;
            case 3:
                DCDSegmentedControlManagerInterface dCDSegmentedControlManagerInterface = (DCDSegmentedControlManagerInterface) this.mViewManager;
                if (obj != null) {
                    i10 = ((Double) obj).intValue();
                }
                dCDSegmentedControlManagerInterface.setCornerRadius(t10, i10);
                return;
            case 4:
                DCDSegmentedControlManagerInterface dCDSegmentedControlManagerInterface2 = (DCDSegmentedControlManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                dCDSegmentedControlManagerInterface2.setBackgroundColor(t10, str2);
                return;
            case 5:
                DCDSegmentedControlManagerInterface dCDSegmentedControlManagerInterface3 = (DCDSegmentedControlManagerInterface) this.mViewManager;
                if (obj != null) {
                    i10 = ((Double) obj).intValue();
                }
                dCDSegmentedControlManagerInterface3.setSelectedSegmentIndex(t10, i10);
                return;
            case 6:
                ((DCDSegmentedControlManagerInterface) this.mViewManager).setSelectedTitleAttributes(t10, (ReadableMap) obj);
                return;
            case 7:
                DCDSegmentedControlManagerInterface dCDSegmentedControlManagerInterface4 = (DCDSegmentedControlManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                dCDSegmentedControlManagerInterface4.setCustomSelectedTintColor(t10, str2);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
