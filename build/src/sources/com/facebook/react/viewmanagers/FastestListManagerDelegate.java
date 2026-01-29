package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.FastestListManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class FastestListManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & FastestListManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public FastestListManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void receiveCommand(T t10, String str, ReadableArray readableArray) {
        str.getClass();
        if (!str.equals("scrollToLocation")) {
            if (!str.equals("scrollToTop")) {
                return;
            }
            ((FastestListManagerInterface) this.mViewManager).scrollToTop(t10, readableArray.getBoolean(0));
            return;
        }
        ((FastestListManagerInterface) this.mViewManager).scrollToLocation(t10, readableArray.getInt(0), readableArray.getInt(1), readableArray.getBoolean(2), readableArray.getInt(3));
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        String str2;
        str.getClass();
        boolean z10 = false;
        boolean z11 = false;
        int i10 = 0;
        boolean z12 = false;
        boolean z13 = false;
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1655631413:
                if (str.equals("renderAhead")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1635659115:
                if (str.equals("placeholderConfig")) {
                    c10 = 1;
                    break;
                }
                break;
            case -922092170:
                if (str.equals("showsVerticalScrollIndicator")) {
                    c10 = 2;
                    break;
                }
                break;
            case -4439498:
                if (str.equals("keyboardDismissOnDrag")) {
                    c10 = 3;
                    break;
                }
                break;
            case 541802110:
                if (str.equals("insetEnd")) {
                    c10 = 4;
                    break;
                }
                break;
            case 993893701:
                if (str.equals("insetStart")) {
                    c10 = 5;
                    break;
                }
                break;
            case 1387629604:
                if (str.equals("horizontal")) {
                    c10 = 6;
                    break;
                }
                break;
            case 1473194217:
                if (str.equals("sectionsVersioned")) {
                    c10 = 7;
                    break;
                }
                break;
            case 1782490647:
                if (str.equals("scrollEventThrottle")) {
                    c10 = '\b';
                    break;
                }
                break;
            case 1915931784:
                if (str.equals("showsHorizontalScrollIndicator")) {
                    c10 = '\t';
                    break;
                }
                break;
        }
        float f10 = Float.NaN;
        switch (c10) {
            case 0:
                FastestListManagerInterface fastestListManagerInterface = (FastestListManagerInterface) this.mViewManager;
                if (obj == null) {
                    str2 = null;
                } else {
                    str2 = (String) obj;
                }
                fastestListManagerInterface.setRenderAhead(t10, str2);
                return;
            case 1:
                ((FastestListManagerInterface) this.mViewManager).setPlaceholderConfig(t10, (ReadableMap) obj);
                return;
            case 2:
                FastestListManagerInterface fastestListManagerInterface2 = (FastestListManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                fastestListManagerInterface2.setShowsVerticalScrollIndicator(t10, z10);
                return;
            case 3:
                FastestListManagerInterface fastestListManagerInterface3 = (FastestListManagerInterface) this.mViewManager;
                if (obj != null) {
                    z13 = ((Boolean) obj).booleanValue();
                }
                fastestListManagerInterface3.setKeyboardDismissOnDrag(t10, z13);
                return;
            case 4:
                FastestListManagerInterface fastestListManagerInterface4 = (FastestListManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                fastestListManagerInterface4.setInsetEnd(t10, f10);
                return;
            case 5:
                FastestListManagerInterface fastestListManagerInterface5 = (FastestListManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                fastestListManagerInterface5.setInsetStart(t10, f10);
                return;
            case 6:
                FastestListManagerInterface fastestListManagerInterface6 = (FastestListManagerInterface) this.mViewManager;
                if (obj != null) {
                    z12 = ((Boolean) obj).booleanValue();
                }
                fastestListManagerInterface6.setHorizontal(t10, z12);
                return;
            case 7:
                ((FastestListManagerInterface) this.mViewManager).setSectionsVersioned(t10, (ReadableMap) obj);
                return;
            case '\b':
                FastestListManagerInterface fastestListManagerInterface7 = (FastestListManagerInterface) this.mViewManager;
                if (obj != null) {
                    i10 = ((Double) obj).intValue();
                }
                fastestListManagerInterface7.setScrollEventThrottle(t10, i10);
                return;
            case '\t':
                FastestListManagerInterface fastestListManagerInterface8 = (FastestListManagerInterface) this.mViewManager;
                if (obj != null) {
                    z11 = ((Boolean) obj).booleanValue();
                }
                fastestListManagerInterface8.setShowsHorizontalScrollIndicator(t10, z11);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
