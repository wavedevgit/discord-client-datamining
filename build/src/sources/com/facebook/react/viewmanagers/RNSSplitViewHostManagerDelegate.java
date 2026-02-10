package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.RNSSplitViewHostManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNSSplitViewHostManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNSSplitViewHostManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNSSplitViewHostManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        str.getClass();
        boolean z10 = true;
        boolean z11 = false;
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1485785973:
                if (str.equals("preferredSplitBehavior")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1439500848:
                if (str.equals("orientation")) {
                    c10 = 1;
                    break;
                }
                break;
            case -868016417:
                if (str.equals("primaryEdge")) {
                    c10 = 2;
                    break;
                }
                break;
            case -723350406:
                if (str.equals("showInspector")) {
                    c10 = 3;
                    break;
                }
                break;
            case 84368445:
                if (str.equals("showSecondaryToggleButton")) {
                    c10 = 4;
                    break;
                }
                break;
            case 429590084:
                if (str.equals("preferredDisplayMode")) {
                    c10 = 5;
                    break;
                }
                break;
            case 546802369:
                if (str.equals("primaryBackgroundStyle")) {
                    c10 = 6;
                    break;
                }
                break;
            case 1093280619:
                if (str.equals("presentsWithGesture")) {
                    c10 = 7;
                    break;
                }
                break;
            case 1446428553:
                if (str.equals("displayModeButtonVisibility")) {
                    c10 = '\b';
                    break;
                }
                break;
            case 1758738573:
                if (str.equals("columnMetrics")) {
                    c10 = '\t';
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                ((RNSSplitViewHostManagerInterface) this.mViewManager).setPreferredSplitBehavior(t10, (String) obj);
                return;
            case 1:
                ((RNSSplitViewHostManagerInterface) this.mViewManager).setOrientation(t10, (String) obj);
                return;
            case 2:
                ((RNSSplitViewHostManagerInterface) this.mViewManager).setPrimaryEdge(t10, (String) obj);
                return;
            case 3:
                RNSSplitViewHostManagerInterface rNSSplitViewHostManagerInterface = (RNSSplitViewHostManagerInterface) this.mViewManager;
                if (obj != null) {
                    z11 = ((Boolean) obj).booleanValue();
                }
                rNSSplitViewHostManagerInterface.setShowInspector(t10, z11);
                return;
            case 4:
                RNSSplitViewHostManagerInterface rNSSplitViewHostManagerInterface2 = (RNSSplitViewHostManagerInterface) this.mViewManager;
                if (obj != null) {
                    z11 = ((Boolean) obj).booleanValue();
                }
                rNSSplitViewHostManagerInterface2.setShowSecondaryToggleButton(t10, z11);
                return;
            case 5:
                ((RNSSplitViewHostManagerInterface) this.mViewManager).setPreferredDisplayMode(t10, (String) obj);
                return;
            case 6:
                ((RNSSplitViewHostManagerInterface) this.mViewManager).setPrimaryBackgroundStyle(t10, (String) obj);
                return;
            case 7:
                RNSSplitViewHostManagerInterface rNSSplitViewHostManagerInterface3 = (RNSSplitViewHostManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNSSplitViewHostManagerInterface3.setPresentsWithGesture(t10, z10);
                return;
            case '\b':
                ((RNSSplitViewHostManagerInterface) this.mViewManager).setDisplayModeButtonVisibility(t10, (String) obj);
                return;
            case '\t':
                ((RNSSplitViewHostManagerInterface) this.mViewManager).setColumnMetrics(t10, (ReadableMap) obj);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
