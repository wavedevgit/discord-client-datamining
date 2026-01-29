package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.viewmanagers.DCDChatManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class DCDChatManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & DCDChatManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public DCDChatManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void receiveCommand(T t10, String str, ReadableArray readableArray) {
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case -938100109:
                if (str.equals("scrollToBottom")) {
                    c10 = 0;
                    break;
                }
                break;
            case -402165208:
                if (str.equals("scrollTo")) {
                    c10 = 1;
                    break;
                }
                break;
            case 1908871954:
                if (str.equals("scrollIntoView")) {
                    c10 = 2;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                ((DCDChatManagerInterface) this.mViewManager).scrollToBottom(t10, readableArray.getBoolean(0));
                return;
            case 1:
                ((DCDChatManagerInterface) this.mViewManager).scrollTo(t10, readableArray.getInt(0), readableArray.getBoolean(1), readableArray.getBoolean(2), readableArray.getInt(3));
                return;
            case 2:
                ((DCDChatManagerInterface) this.mViewManager).scrollIntoView(t10, readableArray.getInt(0), readableArray.getBoolean(1), readableArray.getBoolean(2));
                return;
            default:
                return;
        }
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        String str2;
        str.getClass();
        boolean z10 = false;
        char c10 = 65535;
        switch (str.hashCode()) {
            case -627457207:
                if (str.equals("keyboardBackgroundRgba")) {
                    c10 = 0;
                    break;
                }
                break;
            case -144215618:
                if (str.equals("alwaysRespectKeyboard")) {
                    c10 = 1;
                    break;
                }
                break;
            case 235487768:
                if (str.equals("adjustContentOffsetWithBounds")) {
                    c10 = 2;
                    break;
                }
                break;
            case 324962011:
                if (str.equals("roleStyle")) {
                    c10 = 3;
                    break;
                }
                break;
            case 627674869:
                if (str.equals("inverted")) {
                    c10 = 4;
                    break;
                }
                break;
            case 1020592613:
                if (str.equals("animateEmoji")) {
                    c10 = 5;
                    break;
                }
                break;
            case 1825598780:
                if (str.equals("HACK_fixModalInteraction")) {
                    c10 = 6;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                DCDChatManagerInterface dCDChatManagerInterface = (DCDChatManagerInterface) this.mViewManager;
                if (obj == null) {
                    str2 = null;
                } else {
                    str2 = (String) obj;
                }
                dCDChatManagerInterface.setKeyboardBackgroundRgba(t10, str2);
                return;
            case 1:
                DCDChatManagerInterface dCDChatManagerInterface2 = (DCDChatManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                dCDChatManagerInterface2.setAlwaysRespectKeyboard(t10, z10);
                return;
            case 2:
                DCDChatManagerInterface dCDChatManagerInterface3 = (DCDChatManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                dCDChatManagerInterface3.setAdjustContentOffsetWithBounds(t10, z10);
                return;
            case 3:
                ((DCDChatManagerInterface) this.mViewManager).setRoleStyle(t10, (String) obj);
                return;
            case 4:
                DCDChatManagerInterface dCDChatManagerInterface4 = (DCDChatManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                dCDChatManagerInterface4.setInverted(t10, z10);
                return;
            case 5:
                DCDChatManagerInterface dCDChatManagerInterface5 = (DCDChatManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                dCDChatManagerInterface5.setAnimateEmoji(t10, z10);
                return;
            case 6:
                DCDChatManagerInterface dCDChatManagerInterface6 = (DCDChatManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                dCDChatManagerInterface6.setHACK_fixModalInteraction(t10, z10);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
