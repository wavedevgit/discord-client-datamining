package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.viewmanagers.DCDChatInputManagerInterface;
import com.facebook.react.views.textinput.ReactTextInputShadowNode;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class DCDChatInputManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & DCDChatInputManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public DCDChatInputManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void receiveCommand(T t10, String str, ReadableArray readableArray) {
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1505238496:
                if (str.equals("setSelectedRange")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1482107872:
                if (str.equals("openSystemKeyboard")) {
                    c10 = 1;
                    break;
                }
                break;
            case -577056175:
                if (str.equals("flushText")) {
                    c10 = 2;
                    break;
                }
                break;
            case 3027047:
                if (str.equals("blur")) {
                    c10 = 3;
                    break;
                }
                break;
            case 73995964:
                if (str.equals("updateTextBlocks")) {
                    c10 = 4;
                    break;
                }
                break;
            case 97604824:
                if (str.equals("focus")) {
                    c10 = 5;
                    break;
                }
                break;
            case 448538345:
                if (str.equals("replaceRange")) {
                    c10 = 6;
                    break;
                }
                break;
            case 1353507967:
                if (str.equals("backspace")) {
                    c10 = 7;
                    break;
                }
                break;
            case 1520339810:
                if (str.equals("openCustomKeyboard")) {
                    c10 = '\b';
                    break;
                }
                break;
            case 1984984239:
                if (str.equals("setText")) {
                    c10 = '\t';
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                ((DCDChatInputManagerInterface) this.mViewManager).setSelectedRange(t10, readableArray.getInt(0), readableArray.getInt(1));
                return;
            case 1:
                ((DCDChatInputManagerInterface) this.mViewManager).openSystemKeyboard(t10);
                return;
            case 2:
                ((DCDChatInputManagerInterface) this.mViewManager).flushText(t10, readableArray.getString(0));
                return;
            case 3:
                ((DCDChatInputManagerInterface) this.mViewManager).blur(t10);
                return;
            case 4:
                ((DCDChatInputManagerInterface) this.mViewManager).updateTextBlocks(t10, readableArray.getString(0), readableArray.getString(1));
                return;
            case 5:
                ((DCDChatInputManagerInterface) this.mViewManager).focus(t10);
                return;
            case 6:
                ((DCDChatInputManagerInterface) this.mViewManager).replaceRange(t10, readableArray.getInt(0), readableArray.getInt(1), readableArray.getString(2), readableArray.getString(3), readableArray.getBoolean(4), readableArray.getString(5));
                return;
            case 7:
                ((DCDChatInputManagerInterface) this.mViewManager).backspace(t10);
                return;
            case '\b':
                ((DCDChatInputManagerInterface) this.mViewManager).openCustomKeyboard(t10);
                return;
            case '\t':
                ((DCDChatInputManagerInterface) this.mViewManager).setText(t10, readableArray.getString(0));
                return;
            default:
                return;
        }
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        float floatValue;
        str.getClass();
        boolean z10 = false;
        boolean z11 = false;
        int i10 = 0;
        boolean z12 = false;
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1710287051:
                if (str.equals("markAsSpoilerTitle")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1576785488:
                if (str.equals("placeholderColor")) {
                    c10 = 1;
                    break;
                }
                break;
            case -1187146042:
                if (str.equals("shouldShowCursor")) {
                    c10 = 2;
                    break;
                }
                break;
            case -1095204782:
                if (str.equals("setNoExtractUI")) {
                    c10 = 3;
                    break;
                }
                break;
            case -1063571914:
                if (str.equals("textColor")) {
                    c10 = 4;
                    break;
                }
                break;
            case -954624085:
                if (str.equals("keyboardAppearance")) {
                    c10 = 5;
                    break;
                }
                break;
            case -906066005:
                if (str.equals(ViewProps.MAX_HEIGHT)) {
                    c10 = 6;
                    break;
                }
                break;
            case 208939969:
                if (str.equals("keyboardType")) {
                    c10 = 7;
                    break;
                }
                break;
            case 598246771:
                if (str.equals(ReactTextInputShadowNode.PROP_PLACEHOLDER)) {
                    c10 = '\b';
                    break;
                }
                break;
            case 1602416228:
                if (str.equals("editable")) {
                    c10 = '\t';
                    break;
                }
                break;
            case 2142299447:
                if (str.equals("selectionColor")) {
                    c10 = '\n';
                    break;
                }
                break;
        }
        String str2 = null;
        switch (c10) {
            case 0:
                DCDChatInputManagerInterface dCDChatInputManagerInterface = (DCDChatInputManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                dCDChatInputManagerInterface.setMarkAsSpoilerTitle(t10, str2);
                return;
            case 1:
                DCDChatInputManagerInterface dCDChatInputManagerInterface2 = (DCDChatInputManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                dCDChatInputManagerInterface2.setPlaceholderColor(t10, str2);
                return;
            case 2:
                DCDChatInputManagerInterface dCDChatInputManagerInterface3 = (DCDChatInputManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                dCDChatInputManagerInterface3.setShouldShowCursor(t10, z10);
                return;
            case 3:
                DCDChatInputManagerInterface dCDChatInputManagerInterface4 = (DCDChatInputManagerInterface) this.mViewManager;
                if (obj != null) {
                    z12 = ((Boolean) obj).booleanValue();
                }
                dCDChatInputManagerInterface4.setSetNoExtractUI(t10, z12);
                return;
            case 4:
                DCDChatInputManagerInterface dCDChatInputManagerInterface5 = (DCDChatInputManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                dCDChatInputManagerInterface5.setTextColor(t10, str2);
                return;
            case 5:
                DCDChatInputManagerInterface dCDChatInputManagerInterface6 = (DCDChatInputManagerInterface) this.mViewManager;
                if (obj != null) {
                    i10 = ((Double) obj).intValue();
                }
                dCDChatInputManagerInterface6.setKeyboardAppearance(t10, i10);
                return;
            case 6:
                DCDChatInputManagerInterface dCDChatInputManagerInterface7 = (DCDChatInputManagerInterface) this.mViewManager;
                if (obj == null) {
                    floatValue = 0.0f;
                } else {
                    floatValue = ((Double) obj).floatValue();
                }
                dCDChatInputManagerInterface7.setMaxHeight(t10, floatValue);
                return;
            case 7:
                ((DCDChatInputManagerInterface) this.mViewManager).setKeyboardType(t10, (String) obj);
                return;
            case '\b':
                DCDChatInputManagerInterface dCDChatInputManagerInterface8 = (DCDChatInputManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                dCDChatInputManagerInterface8.setPlaceholder(t10, str2);
                return;
            case '\t':
                DCDChatInputManagerInterface dCDChatInputManagerInterface9 = (DCDChatInputManagerInterface) this.mViewManager;
                if (obj != null) {
                    z11 = ((Boolean) obj).booleanValue();
                }
                dCDChatInputManagerInterface9.setEditable(t10, z11);
                return;
            case '\n':
                DCDChatInputManagerInterface dCDChatInputManagerInterface10 = (DCDChatInputManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                dCDChatInputManagerInterface10.setSelectionColor(t10, str2);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
