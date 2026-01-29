package com.facebook.react.views.text;

import android.content.Context;
import com.facebook.react.common.annotations.UnstableReactNativeAPI;
import com.facebook.react.uimanager.BackgroundStyleApplicator;
import com.facebook.react.uimanager.BaseViewManager;
import com.facebook.react.uimanager.LengthPercentage;
import com.facebook.react.uimanager.LengthPercentageType;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.annotations.ReactPropGroup;
import com.facebook.react.uimanager.style.BorderRadiusProp;
import com.facebook.react.uimanager.style.BorderStyle;
import com.facebook.react.uimanager.style.LogicalEdge;
import com.facebook.react.views.text.ReactBaseTextShadowNode;
import kotlin.Metadata;
import kotlin.jvm.internal.FloatCompanionObject;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0006\n\u0002\u0010\u0007\n\u0002\b(\b'\u0018\u0000*\n\b\u0000\u0010\u0001*\u0004\u0018\u00010\u00022\u000e\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u0002H\u00010\u0003B\u0007¢\u0006\u0004\b\u0005\u0010\u0006J\u001d\u0010\u0007\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\n\u001a\u00020\u000bH\u0001¢\u0006\u0002\b\fJ\u001d\u0010\r\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u000e\u001a\u00020\u000fH\u0001¢\u0006\u0002\b\u0010J\u001f\u0010\u0011\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\u00042\b\u0010\u0012\u001a\u0004\u0018\u00010\u0013H\u0001¢\u0006\u0002\b\u0014J\u001d\u0010\u0015\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0016\u001a\u00020\u000bH\u0001¢\u0006\u0002\b\u0017J\u001d\u0010\u0018\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u0019\u001a\u00020\u001aH\u0001¢\u0006\u0002\b\u001bJ\u001d\u0010\u001c\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010\u001d\u001a\u00020\u001aH\u0001¢\u0006\u0002\b\u001eJ\u001f\u0010\u001f\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\u00042\b\u0010 \u001a\u0004\u0018\u00010\u0013H\u0001¢\u0006\u0002\b!J\u001d\u0010\"\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010#\u001a\u00020\u000bH\u0001¢\u0006\u0002\b$J!\u0010%\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\u00042\b\u0010&\u001a\u0004\u0018\u00010\u000fH\u0001¢\u0006\u0004\b'\u0010(J\u001f\u0010)\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\u00042\b\u0010*\u001a\u0004\u0018\u00010\u0013H\u0001¢\u0006\u0002\b+J%\u0010,\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010-\u001a\u00020\u000f2\u0006\u0010.\u001a\u00020\u001aH\u0001¢\u0006\u0002\b/J\u001f\u00100\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\u00042\b\u00101\u001a\u0004\u0018\u00010\u0013H\u0001¢\u0006\u0002\b2J%\u00103\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010-\u001a\u00020\u000f2\u0006\u00104\u001a\u00020\u001aH\u0001¢\u0006\u0002\b5J)\u00106\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010-\u001a\u00020\u000f2\b\u0010&\u001a\u0004\u0018\u00010\u000fH\u0001¢\u0006\u0004\b7\u00108J\u001d\u00109\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010:\u001a\u00020\u000bH\u0001¢\u0006\u0002\b;J\u001d\u0010<\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\u00042\u0006\u0010=\u001a\u00020\u000bH\u0001¢\u0006\u0002\b>J\u001f\u0010?\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\u00042\b\u0010@\u001a\u0004\u0018\u00010\u0013H\u0001¢\u0006\u0002\bA¨\u0006B"}, d2 = {"Lcom/facebook/react/views/text/ReactTextAnchorViewManager;", "C", "Lcom/facebook/react/views/text/ReactBaseTextShadowNode;", "Lcom/facebook/react/uimanager/BaseViewManager;", "Lcom/facebook/react/views/text/ReactTextView;", "<init>", "()V", "setAccessible", "", "view", "accessible", "", "setAccessible$ReactAndroid_release", "setNumberOfLines", ViewProps.NUMBER_OF_LINES, "", "setNumberOfLines$ReactAndroid_release", "setEllipsizeMode", ViewProps.ELLIPSIZE_MODE, "", "setEllipsizeMode$ReactAndroid_release", "setAdjustFontSizeToFit", ViewProps.ADJUSTS_FONT_SIZE_TO_FIT, "setAdjustFontSizeToFit$ReactAndroid_release", "setFontSize", ViewProps.FONT_SIZE, "", "setFontSize$ReactAndroid_release", "setLetterSpacing", ViewProps.LETTER_SPACING, "setLetterSpacing$ReactAndroid_release", "setTextAlignVertical", ViewProps.TEXT_ALIGN_VERTICAL, "setTextAlignVertical$ReactAndroid_release", "setSelectable", "isSelectable", "setSelectable$ReactAndroid_release", "setSelectionColor", ViewProps.COLOR, "setSelectionColor$ReactAndroid_release", "(Lcom/facebook/react/views/text/ReactTextView;Ljava/lang/Integer;)V", "setAndroidHyphenationFrequency", "frequency", "setAndroidHyphenationFrequency$ReactAndroid_release", "setBorderRadius", "index", "borderRadius", "setBorderRadius$ReactAndroid_release", "setBorderStyle", "borderStyle", "setBorderStyle$ReactAndroid_release", "setBorderWidth", "width", "setBorderWidth$ReactAndroid_release", "setBorderColor", "setBorderColor$ReactAndroid_release", "(Lcom/facebook/react/views/text/ReactTextView;ILjava/lang/Integer;)V", "setIncludeFontPadding", "includepad", "setIncludeFontPadding$ReactAndroid_release", "setDisabled", "disabled", "setDisabled$ReactAndroid_release", "setDataDetectorType", "type", "setDataDetectorType$ReactAndroid_release", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@UnstableReactNativeAPI
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class ReactTextAnchorViewManager<C extends ReactBaseTextShadowNode> extends BaseViewManager<ReactTextView, C> {
    @ReactProp(name = "accessible")
    public final void setAccessible$ReactAndroid_release(@NotNull ReactTextView view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setFocusable(z10);
    }

    @ReactProp(name = ViewProps.ADJUSTS_FONT_SIZE_TO_FIT)
    public final void setAdjustFontSizeToFit$ReactAndroid_release(@NotNull ReactTextView view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setAdjustFontSizeToFit(z10);
    }

    /* JADX WARN: Code restructure failed: missing block: B:12:0x0022, code lost:
        if (r5.equals(com.facebook.react.uimanager.ViewProps.NONE) == false) goto L11;
     */
    @com.facebook.react.uimanager.annotations.ReactProp(name = "android_hyphenationFrequency")
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void setAndroidHyphenationFrequency$ReactAndroid_release(@org.jetbrains.annotations.NotNull com.facebook.react.views.text.ReactTextView r4, java.lang.String r5) {
        /*
            r3 = this;
            java.lang.String r0 = "view"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
            r0 = 0
            if (r5 == 0) goto L5a
            int r1 = r5.hashCode()
            r2 = -1039745817(0xffffffffc206bce7, float:-33.684475)
            if (r1 == r2) goto L33
            r2 = 3154575(0x30228f, float:4.420501E-39)
            if (r1 == r2) goto L25
            r2 = 3387192(0x33af38, float:4.746467E-39)
            if (r1 == r2) goto L1c
            goto L3b
        L1c:
            java.lang.String r1 = "none"
            boolean r1 = r5.equals(r1)
            if (r1 != 0) goto L5a
            goto L3b
        L25:
            java.lang.String r1 = "full"
            boolean r1 = r5.equals(r1)
            if (r1 != 0) goto L2e
            goto L3b
        L2e:
            r5 = 2
            r4.setHyphenationFrequency(r5)
            return
        L33:
            java.lang.String r1 = "normal"
            boolean r1 = r5.equals(r1)
            if (r1 != 0) goto L55
        L3b:
            java.lang.StringBuilder r1 = new java.lang.StringBuilder
            r1.<init>()
            java.lang.String r2 = "Invalid android_hyphenationFrequency: "
            r1.append(r2)
            r1.append(r5)
            java.lang.String r5 = r1.toString()
            java.lang.String r1 = "ReactNative"
            p8.a.J(r1, r5)
            r4.setHyphenationFrequency(r0)
            return
        L55:
            r5 = 1
            r4.setHyphenationFrequency(r5)
            return
        L5a:
            r4.setHyphenationFrequency(r0)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.views.text.ReactTextAnchorViewManager.setAndroidHyphenationFrequency$ReactAndroid_release(com.facebook.react.views.text.ReactTextView, java.lang.String):void");
    }

    @ReactPropGroup(customType = "Color", names = {ViewProps.BORDER_COLOR, ViewProps.BORDER_LEFT_COLOR, ViewProps.BORDER_RIGHT_COLOR, ViewProps.BORDER_TOP_COLOR, ViewProps.BORDER_BOTTOM_COLOR})
    public final void setBorderColor$ReactAndroid_release(@NotNull ReactTextView view, int i10, Integer num) {
        Intrinsics.checkNotNullParameter(view, "view");
        BackgroundStyleApplicator.setBorderColor(view, LogicalEdge.values()[i10], num);
    }

    @ReactPropGroup(defaultFloat = FloatCompanionObject.NaN, names = {"borderRadius", "borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"})
    public final void setBorderRadius$ReactAndroid_release(@NotNull ReactTextView view, int i10, float f10) {
        LengthPercentage lengthPercentage;
        Intrinsics.checkNotNullParameter(view, "view");
        if (Float.isNaN(f10)) {
            lengthPercentage = null;
        } else {
            lengthPercentage = new LengthPercentage(f10, LengthPercentageType.POINT);
        }
        BackgroundStyleApplicator.setBorderRadius(view, BorderRadiusProp.values()[i10], lengthPercentage);
    }

    @ReactProp(name = "borderStyle")
    public final void setBorderStyle$ReactAndroid_release(@NotNull ReactTextView view, String str) {
        BorderStyle fromString;
        Intrinsics.checkNotNullParameter(view, "view");
        if (str == null) {
            fromString = null;
        } else {
            fromString = BorderStyle.Companion.fromString(str);
        }
        BackgroundStyleApplicator.setBorderStyle(view, fromString);
    }

    @ReactPropGroup(defaultFloat = FloatCompanionObject.NaN, names = {ViewProps.BORDER_WIDTH, ViewProps.BORDER_LEFT_WIDTH, ViewProps.BORDER_RIGHT_WIDTH, ViewProps.BORDER_TOP_WIDTH, ViewProps.BORDER_BOTTOM_WIDTH, ViewProps.BORDER_START_WIDTH, ViewProps.BORDER_END_WIDTH})
    public final void setBorderWidth$ReactAndroid_release(@NotNull ReactTextView view, int i10, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        BackgroundStyleApplicator.setBorderWidth(view, LogicalEdge.values()[i10], Float.valueOf(f10));
    }

    @ReactProp(name = "dataDetectorType")
    public final void setDataDetectorType$ReactAndroid_release(@NotNull ReactTextView view, String str) {
        Intrinsics.checkNotNullParameter(view, "view");
        if (str != null) {
            switch (str.hashCode()) {
                case -1192969641:
                    if (str.equals("phoneNumber")) {
                        view.setLinkifyMask(4);
                        return;
                    }
                    break;
                case 96673:
                    if (str.equals("all")) {
                        view.setLinkifyMask(15);
                        return;
                    }
                    break;
                case 3321850:
                    if (str.equals("link")) {
                        view.setLinkifyMask(1);
                        return;
                    }
                    break;
                case 96619420:
                    if (str.equals("email")) {
                        view.setLinkifyMask(2);
                        return;
                    }
                    break;
            }
        }
        view.setLinkifyMask(0);
    }

    @ReactProp(defaultBoolean = false, name = "disabled")
    public final void setDisabled$ReactAndroid_release(@NotNull ReactTextView view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setEnabled(!z10);
    }

    /* JADX WARN: Code restructure failed: missing block: B:8:0x0015, code lost:
        if (r4.equals("tail") == false) goto L20;
     */
    @com.facebook.react.uimanager.annotations.ReactProp(name = com.facebook.react.uimanager.ViewProps.ELLIPSIZE_MODE)
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void setEllipsizeMode$ReactAndroid_release(@org.jetbrains.annotations.NotNull com.facebook.react.views.text.ReactTextView r3, java.lang.String r4) {
        /*
            r2 = this;
            java.lang.String r0 = "view"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r3, r0)
            if (r4 == 0) goto L5f
            int r0 = r4.hashCode()
            switch(r0) {
                case -1074341483: goto L35;
                case 3056464: goto L27;
                case 3198432: goto L18;
                case 3552336: goto Lf;
                default: goto Le;
            }
        Le:
            goto L3d
        Lf:
            java.lang.String r0 = "tail"
            boolean r0 = r4.equals(r0)
            if (r0 != 0) goto L5f
            goto L3d
        L18:
            java.lang.String r0 = "head"
            boolean r0 = r4.equals(r0)
            if (r0 != 0) goto L21
            goto L3d
        L21:
            android.text.TextUtils$TruncateAt r4 = android.text.TextUtils.TruncateAt.START
            r3.setEllipsizeLocation(r4)
            return
        L27:
            java.lang.String r0 = "clip"
            boolean r0 = r4.equals(r0)
            if (r0 != 0) goto L30
            goto L3d
        L30:
            r4 = 0
            r3.setEllipsizeLocation(r4)
            return
        L35:
            java.lang.String r0 = "middle"
            boolean r0 = r4.equals(r0)
            if (r0 != 0) goto L59
        L3d:
            java.lang.StringBuilder r0 = new java.lang.StringBuilder
            r0.<init>()
            java.lang.String r1 = "Invalid ellipsizeMode: "
            r0.append(r1)
            r0.append(r4)
            java.lang.String r4 = r0.toString()
            java.lang.String r0 = "ReactNative"
            p8.a.J(r0, r4)
            android.text.TextUtils$TruncateAt r4 = android.text.TextUtils.TruncateAt.END
            r3.setEllipsizeLocation(r4)
            return
        L59:
            android.text.TextUtils$TruncateAt r4 = android.text.TextUtils.TruncateAt.MIDDLE
            r3.setEllipsizeLocation(r4)
            return
        L5f:
            android.text.TextUtils$TruncateAt r4 = android.text.TextUtils.TruncateAt.END
            r3.setEllipsizeLocation(r4)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.views.text.ReactTextAnchorViewManager.setEllipsizeMode$ReactAndroid_release(com.facebook.react.views.text.ReactTextView, java.lang.String):void");
    }

    @ReactProp(name = ViewProps.FONT_SIZE)
    public final void setFontSize$ReactAndroid_release(@NotNull ReactTextView view, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setFontSize(f10);
    }

    @ReactProp(defaultBoolean = true, name = ViewProps.INCLUDE_FONT_PADDING)
    public final void setIncludeFontPadding$ReactAndroid_release(@NotNull ReactTextView view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setIncludeFontPadding(z10);
    }

    @ReactProp(defaultFloat = 0.0f, name = ViewProps.LETTER_SPACING)
    public final void setLetterSpacing$ReactAndroid_release(@NotNull ReactTextView view, float f10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setLetterSpacing(f10);
    }

    @ReactProp(defaultInt = Integer.MAX_VALUE, name = ViewProps.NUMBER_OF_LINES)
    public final void setNumberOfLines$ReactAndroid_release(@NotNull ReactTextView view, int i10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setNumberOfLines(i10);
    }

    @ReactProp(name = "selectable")
    public final void setSelectable$ReactAndroid_release(@NotNull ReactTextView view, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "view");
        view.setTextIsSelectable(z10);
    }

    @ReactProp(customType = "Color", name = "selectionColor")
    public final void setSelectionColor$ReactAndroid_release(@NotNull ReactTextView view, Integer num) {
        int defaultTextColorHighlight;
        Intrinsics.checkNotNullParameter(view, "view");
        if (num != null) {
            defaultTextColorHighlight = num.intValue();
        } else {
            Context context = view.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            defaultTextColorHighlight = DefaultStyleValuesUtil.getDefaultTextColorHighlight(context);
        }
        view.setHighlightColor(defaultTextColorHighlight);
    }

    /* JADX WARN: Code restructure failed: missing block: B:8:0x0016, code lost:
        if (r5.equals("auto") == false) goto L20;
     */
    @com.facebook.react.uimanager.annotations.ReactProp(name = com.facebook.react.uimanager.ViewProps.TEXT_ALIGN_VERTICAL)
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void setTextAlignVertical$ReactAndroid_release(@org.jetbrains.annotations.NotNull com.facebook.react.views.text.ReactTextView r4, java.lang.String r5) {
        /*
            r3 = this;
            java.lang.String r0 = "view"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
            r0 = 0
            if (r5 == 0) goto L5f
            int r1 = r5.hashCode()
            switch(r1) {
                case -1383228885: goto L37;
                case -1364013995: goto L28;
                case 115029: goto L19;
                case 3005871: goto L10;
                default: goto Lf;
            }
        Lf:
            goto L3f
        L10:
            java.lang.String r1 = "auto"
            boolean r1 = r5.equals(r1)
            if (r1 != 0) goto L5f
            goto L3f
        L19:
            java.lang.String r1 = "top"
            boolean r1 = r5.equals(r1)
            if (r1 != 0) goto L22
            goto L3f
        L22:
            r5 = 48
            r4.setGravityVertical(r5)
            return
        L28:
            java.lang.String r1 = "center"
            boolean r1 = r5.equals(r1)
            if (r1 != 0) goto L31
            goto L3f
        L31:
            r5 = 16
            r4.setGravityVertical(r5)
            return
        L37:
            java.lang.String r1 = "bottom"
            boolean r1 = r5.equals(r1)
            if (r1 != 0) goto L59
        L3f:
            java.lang.StringBuilder r1 = new java.lang.StringBuilder
            r1.<init>()
            java.lang.String r2 = "Invalid textAlignVertical: "
            r1.append(r2)
            r1.append(r5)
            java.lang.String r5 = r1.toString()
            java.lang.String r1 = "ReactNative"
            p8.a.J(r1, r5)
            r4.setGravityVertical(r0)
            return
        L59:
            r5 = 80
            r4.setGravityVertical(r5)
            return
        L5f:
            r4.setGravityVertical(r0)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.views.text.ReactTextAnchorViewManager.setTextAlignVertical$ReactAndroid_release(com.facebook.react.views.text.ReactTextView, java.lang.String):void");
    }
}
