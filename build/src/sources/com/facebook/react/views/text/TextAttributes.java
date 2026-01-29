package com.facebook.react.views.text;

import com.facebook.react.common.ReactConstants;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0005\n\u0002\u0010\u0007\n\u0002\b\u000e\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\b\n\u0002\b\t\n\u0002\u0010\u000e\n\u0002\b\u0002\u0018\u0000 ,2\u00020\u0001:\u0001,B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u001b\u001a\u00020\u00002\u0006\u0010\u001c\u001a\u00020\u0000J\b\u0010*\u001a\u00020+H\u0016R\u001a\u0010\u0004\u001a\u00020\u0005X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0006\u0010\u0007\"\u0004\b\b\u0010\tR\u001a\u0010\n\u001a\u00020\u000bX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\f\u0010\r\"\u0004\b\u000e\u0010\u000fR\u001a\u0010\u0010\u001a\u00020\u000bX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0011\u0010\r\"\u0004\b\u0012\u0010\u000fR\u001a\u0010\u0013\u001a\u00020\u000bX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0014\u0010\r\"\u0004\b\u0015\u0010\u000fR\u001a\u0010\u0016\u001a\u00020\u000bX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0017\u0010\r\"\u0004\b\u0018\u0010\u000fR\u0012\u0010\u0019\u001a\u00020\u001a8\u0000@\u0000X\u0081\u000e¢\u0006\u0002\n\u0000R$\u0010\u001d\u001a\u00020\u000b2\u0006\u0010\u001d\u001a\u00020\u000b@FX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u001e\u0010\r\"\u0004\b\u001f\u0010\u000fR\u0011\u0010 \u001a\u00020!8F¢\u0006\u0006\u001a\u0004\b\"\u0010#R\u0011\u0010$\u001a\u00020\u000b8F¢\u0006\u0006\u001a\u0004\b%\u0010\rR\u0011\u0010&\u001a\u00020\u000b8F¢\u0006\u0006\u001a\u0004\b'\u0010\rR\u0011\u0010(\u001a\u00020\u000b8F¢\u0006\u0006\u001a\u0004\b)\u0010\r¨\u0006-"}, d2 = {"Lcom/facebook/react/views/text/TextAttributes;", "", "<init>", "()V", ViewProps.ALLOW_FONT_SCALING, "", "getAllowFontScaling", "()Z", "setAllowFontScaling", "(Z)V", ViewProps.FONT_SIZE, "", "getFontSize", "()F", "setFontSize", "(F)V", ViewProps.LINE_HEIGHT, "getLineHeight", "setLineHeight", ViewProps.LETTER_SPACING, "getLetterSpacing", "setLetterSpacing", "heightOfTallestInlineViewOrImage", "getHeightOfTallestInlineViewOrImage", "setHeightOfTallestInlineViewOrImage", ReactBaseTextShadowNode.PROP_TEXT_TRANSFORM, "Lcom/facebook/react/views/text/TextTransform;", "applyChild", "child", ViewProps.MAX_FONT_SIZE_MULTIPLIER, "getMaxFontSizeMultiplier", "setMaxFontSizeMultiplier", "effectiveFontSize", "", "getEffectiveFontSize", "()I", "effectiveLineHeight", "getEffectiveLineHeight", "effectiveLetterSpacing", "getEffectiveLetterSpacing", "effectiveMaxFontSizeMultiplier", "getEffectiveMaxFontSizeMultiplier", "toString", "", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class TextAttributes {
    @NotNull
    public static final Companion Companion = new Companion(null);
    public static final float DEFAULT_MAX_FONT_SIZE_MULTIPLIER = 0.0f;
    private boolean allowFontScaling = true;
    private float fontSize = Float.NaN;
    private float lineHeight = Float.NaN;
    private float letterSpacing = Float.NaN;
    private float heightOfTallestInlineViewOrImage = Float.NaN;
    @NotNull
    public TextTransform textTransform = TextTransform.UNSET;
    private float maxFontSizeMultiplier = Float.NaN;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0000\b\u0080\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/facebook/react/views/text/TextAttributes$Companion;", "", "<init>", "()V", "DEFAULT_MAX_FONT_SIZE_MULTIPLIER", "", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    @NotNull
    public final TextAttributes applyChild(@NotNull TextAttributes child) {
        float f10;
        float f11;
        float f12;
        float f13;
        float f14;
        Intrinsics.checkNotNullParameter(child, "child");
        TextAttributes textAttributes = new TextAttributes();
        textAttributes.allowFontScaling = this.allowFontScaling;
        if (!Float.isNaN(child.fontSize)) {
            f10 = child.fontSize;
        } else {
            f10 = this.fontSize;
        }
        textAttributes.fontSize = f10;
        if (!Float.isNaN(child.lineHeight)) {
            f11 = child.lineHeight;
        } else {
            f11 = this.lineHeight;
        }
        textAttributes.lineHeight = f11;
        if (!Float.isNaN(child.letterSpacing)) {
            f12 = child.letterSpacing;
        } else {
            f12 = this.letterSpacing;
        }
        textAttributes.letterSpacing = f12;
        if (!Float.isNaN(child.maxFontSizeMultiplier)) {
            f13 = child.maxFontSizeMultiplier;
        } else {
            f13 = this.maxFontSizeMultiplier;
        }
        textAttributes.setMaxFontSizeMultiplier(f13);
        if (!Float.isNaN(child.heightOfTallestInlineViewOrImage)) {
            f14 = child.heightOfTallestInlineViewOrImage;
        } else {
            f14 = this.heightOfTallestInlineViewOrImage;
        }
        textAttributes.heightOfTallestInlineViewOrImage = f14;
        TextTransform textTransform = child.textTransform;
        if (textTransform == TextTransform.UNSET) {
            textTransform = this.textTransform;
        }
        textAttributes.textTransform = textTransform;
        return textAttributes;
    }

    public final boolean getAllowFontScaling() {
        return this.allowFontScaling;
    }

    public final int getEffectiveFontSize() {
        float f10;
        double ceil;
        if (!Float.isNaN(this.fontSize)) {
            f10 = this.fontSize;
        } else {
            f10 = 14.0f;
        }
        if (this.allowFontScaling) {
            ceil = Math.ceil(PixelUtil.toPixelFromSP(f10, getEffectiveMaxFontSizeMultiplier()));
        } else {
            ceil = Math.ceil(PixelUtil.toPixelFromDIP(f10));
        }
        return (int) ceil;
    }

    public final float getEffectiveLetterSpacing() {
        float pixelFromDIP;
        if (Float.isNaN(this.letterSpacing)) {
            return Float.NaN;
        }
        if (this.allowFontScaling) {
            pixelFromDIP = PixelUtil.toPixelFromSP(this.letterSpacing, getEffectiveMaxFontSizeMultiplier());
        } else {
            pixelFromDIP = PixelUtil.toPixelFromDIP(this.letterSpacing);
        }
        return pixelFromDIP / getEffectiveFontSize();
    }

    public final float getEffectiveLineHeight() {
        float pixelFromDIP;
        if (Float.isNaN(this.lineHeight)) {
            return Float.NaN;
        }
        if (this.allowFontScaling) {
            pixelFromDIP = PixelUtil.toPixelFromSP(this.lineHeight, getEffectiveMaxFontSizeMultiplier());
        } else {
            pixelFromDIP = PixelUtil.toPixelFromDIP(this.lineHeight);
        }
        if (!Float.isNaN(this.heightOfTallestInlineViewOrImage)) {
            float f10 = this.heightOfTallestInlineViewOrImage;
            if (f10 > pixelFromDIP) {
                return f10;
            }
        }
        return pixelFromDIP;
    }

    public final float getEffectiveMaxFontSizeMultiplier() {
        if (!Float.isNaN(this.maxFontSizeMultiplier)) {
            return this.maxFontSizeMultiplier;
        }
        return 0.0f;
    }

    public final float getFontSize() {
        return this.fontSize;
    }

    public final float getHeightOfTallestInlineViewOrImage() {
        return this.heightOfTallestInlineViewOrImage;
    }

    public final float getLetterSpacing() {
        return this.letterSpacing;
    }

    public final float getLineHeight() {
        return this.lineHeight;
    }

    public final float getMaxFontSizeMultiplier() {
        return this.maxFontSizeMultiplier;
    }

    public final void setAllowFontScaling(boolean z10) {
        this.allowFontScaling = z10;
    }

    public final void setFontSize(float f10) {
        this.fontSize = f10;
    }

    public final void setHeightOfTallestInlineViewOrImage(float f10) {
        this.heightOfTallestInlineViewOrImage = f10;
    }

    public final void setLetterSpacing(float f10) {
        this.letterSpacing = f10;
    }

    public final void setLineHeight(float f10) {
        this.lineHeight = f10;
    }

    public final void setMaxFontSizeMultiplier(float f10) {
        if (f10 != 0.0f && f10 < 1.0f && !Float.isNaN(f10)) {
            p8.a.J(ReactConstants.TAG, "maxFontSizeMultiplier must be NaN, 0, or >= 1");
            this.maxFontSizeMultiplier = Float.NaN;
            return;
        }
        this.maxFontSizeMultiplier = f10;
    }

    @NotNull
    public String toString() {
        boolean z10 = this.allowFontScaling;
        float f10 = this.fontSize;
        int effectiveFontSize = getEffectiveFontSize();
        float f11 = this.heightOfTallestInlineViewOrImage;
        float f12 = this.letterSpacing;
        float effectiveLetterSpacing = getEffectiveLetterSpacing();
        float f13 = this.lineHeight;
        float effectiveLineHeight = getEffectiveLineHeight();
        TextTransform textTransform = this.textTransform;
        float f14 = this.maxFontSizeMultiplier;
        float effectiveMaxFontSizeMultiplier = getEffectiveMaxFontSizeMultiplier();
        return StringsKt.j("\n    TextAttributes {\n      getAllowFontScaling(): " + z10 + "\n      getFontSize(): " + f10 + "\n      getEffectiveFontSize(): " + effectiveFontSize + "\n      getHeightOfTallestInlineViewOrImage(): " + f11 + "\n      getLetterSpacing(): " + f12 + "\n      getEffectiveLetterSpacing(): " + effectiveLetterSpacing + "\n      getLineHeight(): " + f13 + "\n      getEffectiveLineHeight(): " + effectiveLineHeight + "\n      getTextTransform(): " + textTransform + "\n      getMaxFontSizeMultiplier(): " + f14 + "\n      getEffectiveMaxFontSizeMultiplier(): " + effectiveMaxFontSizeMultiplier + "\n    }\n  ");
    }
}
