package com.facebook.react.viewmanagers;

import android.view.View;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.viewmanagers.EmojiPickerViewManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class EmojiPickerViewManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & EmojiPickerViewManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public EmojiPickerViewManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void receiveCommand(T t10, String str, ReadableArray readableArray) {
        str.getClass();
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1782271235:
                if (str.equals("scrollToHeaderIndex")) {
                    c10 = 0;
                    break;
                }
                break;
            case -641084532:
                if (str.equals("scrollingEnabled")) {
                    c10 = 1;
                    break;
                }
                break;
            case 2112108456:
                if (str.equals("refreshEmojis")) {
                    c10 = 2;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                ((EmojiPickerViewManagerInterface) this.mViewManager).scrollToHeaderIndex(t10, readableArray.getInt(0), readableArray.getBoolean(1));
                return;
            case 1:
                ((EmojiPickerViewManagerInterface) this.mViewManager).scrollingEnabled(t10, readableArray.getBoolean(0));
                return;
            case 2:
                ((EmojiPickerViewManagerInterface) this.mViewManager).refreshEmojis(t10);
                return;
            default:
                return;
        }
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        str.getClass();
        boolean z10 = false;
        int i10 = 0;
        int i11 = 0;
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1354792126:
                if (str.equals("config")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1275922107:
                if (str.equals("useTier0UpsellContent")) {
                    c10 = 1;
                    break;
                }
                break;
            case 90130308:
                if (str.equals(ViewProps.PADDING_TOP)) {
                    c10 = 2;
                    break;
                }
                break;
            case 202355100:
                if (str.equals(ViewProps.PADDING_BOTTOM)) {
                    c10 = 3;
                    break;
                }
                break;
            case 1237853588:
                if (str.equals("emojiMargin")) {
                    c10 = 4;
                    break;
                }
                break;
            case 1685934352:
                if (str.equals("emojiData")) {
                    c10 = 5;
                    break;
                }
                break;
            case 1686389095:
                if (str.equals("emojiSize")) {
                    c10 = 6;
                    break;
                }
                break;
        }
        float f10 = Float.NaN;
        switch (c10) {
            case 0:
                ((EmojiPickerViewManagerInterface) this.mViewManager).setConfig(t10, (ReadableMap) obj);
                return;
            case 1:
                EmojiPickerViewManagerInterface emojiPickerViewManagerInterface = (EmojiPickerViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                emojiPickerViewManagerInterface.setUseTier0UpsellContent(t10, z10);
                return;
            case 2:
                EmojiPickerViewManagerInterface emojiPickerViewManagerInterface2 = (EmojiPickerViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                emojiPickerViewManagerInterface2.setPaddingTop(t10, f10);
                return;
            case 3:
                EmojiPickerViewManagerInterface emojiPickerViewManagerInterface3 = (EmojiPickerViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                emojiPickerViewManagerInterface3.setPaddingBottom(t10, f10);
                return;
            case 4:
                EmojiPickerViewManagerInterface emojiPickerViewManagerInterface4 = (EmojiPickerViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    i11 = ((Double) obj).intValue();
                }
                emojiPickerViewManagerInterface4.setEmojiMargin(t10, i11);
                return;
            case 5:
                ((EmojiPickerViewManagerInterface) this.mViewManager).setEmojiData(t10, (ReadableMap) obj);
                return;
            case 6:
                EmojiPickerViewManagerInterface emojiPickerViewManagerInterface5 = (EmojiPickerViewManagerInterface) this.mViewManager;
                if (obj != null) {
                    i10 = ((Double) obj).intValue();
                }
                emojiPickerViewManagerInterface5.setEmojiSize(t10, i10);
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
