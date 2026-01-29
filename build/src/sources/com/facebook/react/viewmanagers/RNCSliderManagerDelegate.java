package com.facebook.react.viewmanagers;

import android.view.View;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.bridge.ColorPropConverter;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.viewmanagers.RNCSliderManagerInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RNCSliderManagerDelegate<T extends View, U extends BaseViewManager<T, ? extends LayoutShadowNode> & RNCSliderManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
    /* JADX WARN: Incorrect types in method signature: (TU;)V */
    public RNCSliderManagerDelegate(BaseViewManager baseViewManager) {
        super(baseViewManager);
    }

    @Override // com.facebook.react.uimanager.BaseViewManagerDelegate, com.facebook.react.uimanager.ViewManagerDelegate
    public void setProperty(T t10, String str, Object obj) {
        str.getClass();
        boolean z10 = false;
        char c10 = 65535;
        switch (str.hashCode()) {
            case -1984141450:
                if (str.equals("vertical")) {
                    c10 = 0;
                    break;
                }
                break;
            case -1900655011:
                if (str.equals("maximumTrackTintColor")) {
                    c10 = 1;
                    break;
                }
                break;
            case -1736983259:
                if (str.equals("thumbImage")) {
                    c10 = 2;
                    break;
                }
                break;
            case -1681713095:
                if (str.equals("upperLimit")) {
                    c10 = 3;
                    break;
                }
                break;
            case -1021497397:
                if (str.equals("minimumTrackTintColor")) {
                    c10 = 4;
                    break;
                }
                break;
            case -981448432:
                if (str.equals("maximumTrackImage")) {
                    c10 = 5;
                    break;
                }
                break;
            case -877170387:
                if (str.equals(ViewProps.TEST_ID)) {
                    c10 = 6;
                    break;
                }
                break;
            case 3540684:
                if (str.equals("step")) {
                    c10 = 7;
                    break;
                }
                break;
            case 111972721:
                if (str.equals("value")) {
                    c10 = '\b';
                    break;
                }
                break;
            case 270940796:
                if (str.equals("disabled")) {
                    c10 = '\t';
                    break;
                }
                break;
            case 627674869:
                if (str.equals("inverted")) {
                    c10 = '\n';
                    break;
                }
                break;
            case 628733650:
                if (str.equals("accessibilityIncrements")) {
                    c10 = 11;
                    break;
                }
                break;
            case 718061361:
                if (str.equals("maximumValue")) {
                    c10 = '\f';
                    break;
                }
                break;
            case 1139400400:
                if (str.equals("trackImage")) {
                    c10 = '\r';
                    break;
                }
                break;
            case 1155548865:
                if (str.equals("accessibilityUnits")) {
                    c10 = 14;
                    break;
                }
                break;
            case 1168687382:
                if (str.equals("tapToSeek")) {
                    c10 = 15;
                    break;
                }
                break;
            case 1192487427:
                if (str.equals("minimumValue")) {
                    c10 = 16;
                    break;
                }
                break;
            case 1209133370:
                if (str.equals("lowerLimit")) {
                    c10 = 17;
                    break;
                }
                break;
            case 1333596542:
                if (str.equals("minimumTrackImage")) {
                    c10 = 18;
                    break;
                }
                break;
            case 1912319986:
                if (str.equals("thumbTintColor")) {
                    c10 = 19;
                    break;
                }
                break;
        }
        String str2 = null;
        double d10 = 0.0d;
        float f10 = 0.0f;
        switch (c10) {
            case 0:
                RNCSliderManagerInterface rNCSliderManagerInterface = (RNCSliderManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNCSliderManagerInterface.setVertical(t10, z10);
                return;
            case 1:
                ((RNCSliderManagerInterface) this.mViewManager).setMaximumTrackTintColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 2:
                ((RNCSliderManagerInterface) this.mViewManager).setThumbImage(t10, (ReadableMap) obj);
                return;
            case 3:
                RNCSliderManagerInterface rNCSliderManagerInterface2 = (RNCSliderManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNCSliderManagerInterface2.setUpperLimit(t10, f10);
                return;
            case 4:
                ((RNCSliderManagerInterface) this.mViewManager).setMinimumTrackTintColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            case 5:
                ((RNCSliderManagerInterface) this.mViewManager).setMaximumTrackImage(t10, (ReadableMap) obj);
                return;
            case 6:
                RNCSliderManagerInterface rNCSliderManagerInterface3 = (RNCSliderManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNCSliderManagerInterface3.setTestID(t10, str2);
                return;
            case 7:
                RNCSliderManagerInterface rNCSliderManagerInterface4 = (RNCSliderManagerInterface) this.mViewManager;
                if (obj != null) {
                    d10 = ((Double) obj).doubleValue();
                }
                rNCSliderManagerInterface4.setStep(t10, d10);
                return;
            case '\b':
                RNCSliderManagerInterface rNCSliderManagerInterface5 = (RNCSliderManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNCSliderManagerInterface5.setValue(t10, f10);
                return;
            case '\t':
                RNCSliderManagerInterface rNCSliderManagerInterface6 = (RNCSliderManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNCSliderManagerInterface6.setDisabled(t10, z10);
                return;
            case '\n':
                RNCSliderManagerInterface rNCSliderManagerInterface7 = (RNCSliderManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNCSliderManagerInterface7.setInverted(t10, z10);
                return;
            case 11:
                ((RNCSliderManagerInterface) this.mViewManager).setAccessibilityIncrements(t10, (ReadableArray) obj);
                return;
            case '\f':
                RNCSliderManagerInterface rNCSliderManagerInterface8 = (RNCSliderManagerInterface) this.mViewManager;
                if (obj != null) {
                    d10 = ((Double) obj).doubleValue();
                }
                rNCSliderManagerInterface8.setMaximumValue(t10, d10);
                return;
            case '\r':
                ((RNCSliderManagerInterface) this.mViewManager).setTrackImage(t10, (ReadableMap) obj);
                return;
            case 14:
                RNCSliderManagerInterface rNCSliderManagerInterface9 = (RNCSliderManagerInterface) this.mViewManager;
                if (obj != null) {
                    str2 = (String) obj;
                }
                rNCSliderManagerInterface9.setAccessibilityUnits(t10, str2);
                return;
            case 15:
                RNCSliderManagerInterface rNCSliderManagerInterface10 = (RNCSliderManagerInterface) this.mViewManager;
                if (obj != null) {
                    z10 = ((Boolean) obj).booleanValue();
                }
                rNCSliderManagerInterface10.setTapToSeek(t10, z10);
                return;
            case 16:
                RNCSliderManagerInterface rNCSliderManagerInterface11 = (RNCSliderManagerInterface) this.mViewManager;
                if (obj != null) {
                    d10 = ((Double) obj).doubleValue();
                }
                rNCSliderManagerInterface11.setMinimumValue(t10, d10);
                return;
            case 17:
                RNCSliderManagerInterface rNCSliderManagerInterface12 = (RNCSliderManagerInterface) this.mViewManager;
                if (obj != null) {
                    f10 = ((Double) obj).floatValue();
                }
                rNCSliderManagerInterface12.setLowerLimit(t10, f10);
                return;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                ((RNCSliderManagerInterface) this.mViewManager).setMinimumTrackImage(t10, (ReadableMap) obj);
                return;
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                ((RNCSliderManagerInterface) this.mViewManager).setThumbTintColor(t10, ColorPropConverter.getColor(obj, t10.getContext()));
                return;
            default:
                super.kotlinCompat$setProperty(t10, str, obj);
                return;
        }
    }
}
