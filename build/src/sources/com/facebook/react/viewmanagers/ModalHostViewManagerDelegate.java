package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.viewmanagers.ModalHostViewManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class ModalHostViewManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & ModalHostViewManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public ModalHostViewManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        str.getClass();
        boolean z10 = false;
        boolean z11 = false;
        boolean z12 = false;
        boolean z13 = false;
        boolean z14 = false;
        boolean z15 = false;
        boolean z16 = false;
        int i10 = 0;
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1851617609:
                if (str.equals("presentationStyle")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1850124175:
                if (str.equals("supportedOrientations")) {
                    c10 = 1;
                    break;
                }
                break;
            case -1726194350:
                if (str.equals("transparent")) {
                    c10 = 2;
                    break;
                }
                break;
            case -1618432855:
                if (str.equals("identifier")) {
                    c10 = 3;
                    break;
                }
                break;
            case -1156137512:
                if (str.equals("statusBarTranslucent")) {
                    c10 = 4;
                    break;
                }
                break;
            case -1112923708:
                if (str.equals("allowSwipeDismissal")) {
                    c10 = 5;
                    break;
                }
                break;
            case -795203165:
                if (str.equals("animated")) {
                    c10 = 6;
                    break;
                }
                break;
            case 466743410:
                if (str.equals(ViewProps.VISIBLE)) {
                    c10 = 7;
                    break;
                }
                break;
            case 1116050554:
                if (str.equals("navigationBarTranslucent")) {
                    c10 = '\b';
                    break;
                }
                break;
            case 1195991583:
                if (str.equals("hardwareAccelerated")) {
                    c10 = '\t';
                    break;
                }
                break;
            case 2031205598:
                if (str.equals("animationType")) {
                    c10 = '\n';
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                ((ModalHostViewManagerInterface) this.mViewManager).setPresentationStyle(t10, (String) obj);
                return;
            case 1:
                ((ModalHostViewManagerInterface) this.mViewManager).setSupportedOrientations(t10, (ReadableArray) obj);
                return;
            case 2:
                ModalHostViewManagerInterface modalHostViewManagerInterface = (ModalHostViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                modalHostViewManagerInterface.setTransparent(t10, z10);
                return;
            case 3:
                ModalHostViewManagerInterface modalHostViewManagerInterface2 = (ModalHostViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    i10 = ((Double) obj).intValue();
                }
                modalHostViewManagerInterface2.setIdentifier(t10, i10);
                return;
            case 4:
                ModalHostViewManagerInterface modalHostViewManagerInterface3 = (ModalHostViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    z16 = ((Boolean) obj).booleanValue();
                }
                modalHostViewManagerInterface3.setStatusBarTranslucent(t10, z16);
                return;
            case 5:
                ModalHostViewManagerInterface modalHostViewManagerInterface4 = (ModalHostViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    z15 = ((Boolean) obj).booleanValue();
                }
                modalHostViewManagerInterface4.setAllowSwipeDismissal(t10, z15);
                return;
            case 6:
                ModalHostViewManagerInterface modalHostViewManagerInterface5 = (ModalHostViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    z14 = ((Boolean) obj).booleanValue();
                }
                modalHostViewManagerInterface5.setAnimated(t10, z14);
                return;
            case 7:
                ModalHostViewManagerInterface modalHostViewManagerInterface6 = (ModalHostViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    z13 = ((Boolean) obj).booleanValue();
                }
                modalHostViewManagerInterface6.setVisible(t10, z13);
                return;
            case '\b':
                ModalHostViewManagerInterface modalHostViewManagerInterface7 = (ModalHostViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    z12 = ((Boolean) obj).booleanValue();
                }
                modalHostViewManagerInterface7.setNavigationBarTranslucent(t10, z12);
                return;
            case '\t':
                ModalHostViewManagerInterface modalHostViewManagerInterface8 = (ModalHostViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    z11 = ((Boolean) obj).booleanValue();
                }
                modalHostViewManagerInterface8.setHardwareAccelerated(t10, z11);
                return;
            case '\n':
                ((ModalHostViewManagerInterface) this.mViewManager).setAnimationType(t10, (String) obj);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
