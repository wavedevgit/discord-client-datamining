package com.withpersona.sdk2.inquiry.network.dto.ui.components;

import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.ESignature;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.AttributeStyles;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000 \u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001c\u0010\u001b\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0019R\u001c\u0010\u001d\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001c0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u0019R\u001c\u0010\u001f\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001e0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010\u0019R\u001c\u0010!\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010 0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u0010\u0019R\u001c\u0010#\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\"0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b#\u0010\u0019R\u001c\u0010%\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010$0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b%\u0010\u0019R\u001c\u0010'\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010&0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b'\u0010\u0019R\u001c\u0010)\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010(0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b)\u0010\u0019R\u001c\u0010+\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010*0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b+\u0010\u0019R\u001c\u0010-\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010,0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b-\u0010\u0019R\u001c\u0010/\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010.0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b/\u0010\u0019R\u001c\u00101\u001a\n\u0012\u0006\u0012\u0004\u0018\u0001000\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b1\u0010\u0019R\u001c\u00103\u001a\n\u0012\u0006\u0012\u0004\u0018\u0001020\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b3\u0010\u0019R\u001c\u00105\u001a\n\u0012\u0006\u0012\u0004\u0018\u0001040\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b5\u0010\u0019R\u001c\u00107\u001a\n\u0012\u0006\u0012\u0004\u0018\u0001060\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b7\u0010\u0019¨\u00068"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/ESignature_ESignatureComponentStyleJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/ESignature$ESignatureComponentStyle;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/ESignature$ESignatureComponentStyle;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/ESignature$ESignatureComponentStyle;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ESignaturePrimaryButtonStyles;", "nullableESignaturePrimaryButtonStylesAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ESignatureSecondaryButtonStyles;", "nullableESignatureSecondaryButtonStylesAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ESignatureTitleStylesContainer;", "nullableESignatureTitleStylesContainerAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ESignatureTextStylesContainer;", "nullableESignatureTextStylesContainerAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ESignatureFillColorStyle;", "nullableESignatureFillColorStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ESignatureBackgroundColorStyle;", "nullableESignatureBackgroundColorStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ComplexTextBasedFontFamilyStyle;", "nullableComplexTextBasedFontFamilyStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ComplexTextBasedFontSizeStyle;", "nullableComplexTextBasedFontSizeStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ComplexTextBasedFontWeightStyle;", "nullableComplexTextBasedFontWeightStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ComplexTextBasedLetterSpacingStyle;", "nullableComplexTextBasedLetterSpacingStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ComplexTextBasedLineHeightStyle;", "nullableComplexTextBasedLineHeightStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ESignatureTextColorStyle;", "nullableESignatureTextColorStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ESignatureBorderRadiusStyle;", "nullableESignatureBorderRadiusStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ESignatureBorderWidthStyle;", "nullableESignatureBorderWidthStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ESignatureBorderColorStyle;", "nullableESignatureBorderColorStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputMarginStyle;", "nullableInputMarginStyleAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ESignature_ESignatureComponentStyleJsonAdapter extends h {
    @NotNull
    private final h nullableComplexTextBasedFontFamilyStyleAdapter;
    @NotNull
    private final h nullableComplexTextBasedFontSizeStyleAdapter;
    @NotNull
    private final h nullableComplexTextBasedFontWeightStyleAdapter;
    @NotNull
    private final h nullableComplexTextBasedLetterSpacingStyleAdapter;
    @NotNull
    private final h nullableComplexTextBasedLineHeightStyleAdapter;
    @NotNull
    private final h nullableESignatureBackgroundColorStyleAdapter;
    @NotNull
    private final h nullableESignatureBorderColorStyleAdapter;
    @NotNull
    private final h nullableESignatureBorderRadiusStyleAdapter;
    @NotNull
    private final h nullableESignatureBorderWidthStyleAdapter;
    @NotNull
    private final h nullableESignatureFillColorStyleAdapter;
    @NotNull
    private final h nullableESignaturePrimaryButtonStylesAdapter;
    @NotNull
    private final h nullableESignatureSecondaryButtonStylesAdapter;
    @NotNull
    private final h nullableESignatureTextColorStyleAdapter;
    @NotNull
    private final h nullableESignatureTextStylesContainerAdapter;
    @NotNull
    private final h nullableESignatureTitleStylesContainerAdapter;
    @NotNull
    private final h nullableInputMarginStyleAdapter;
    @NotNull
    private final m.b options;

    public ESignature_ESignatureComponentStyleJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("buttonPrimaryStyle", "buttonSecondaryStyle", "titleStyle", "textStyle", "fillColor", ViewProps.BACKGROUND_COLOR, ViewProps.FONT_FAMILY, ViewProps.FONT_SIZE, ViewProps.FONT_WEIGHT, ViewProps.LETTER_SPACING, ViewProps.LINE_HEIGHT, "textColor", "borderRadius", ViewProps.BORDER_WIDTH, ViewProps.BORDER_COLOR, ViewProps.MARGIN);
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(AttributeStyles.ESignaturePrimaryButtonStyles.class, x0.d(), "buttonPrimaryStyle");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableESignaturePrimaryButtonStylesAdapter = f10;
        h f11 = moshi.f(AttributeStyles.ESignatureSecondaryButtonStyles.class, x0.d(), "buttonSecondaryStyle");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableESignatureSecondaryButtonStylesAdapter = f11;
        h f12 = moshi.f(AttributeStyles.ESignatureTitleStylesContainer.class, x0.d(), "titleStyle");
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.nullableESignatureTitleStylesContainerAdapter = f12;
        h f13 = moshi.f(AttributeStyles.ESignatureTextStylesContainer.class, x0.d(), "textStyle");
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.nullableESignatureTextStylesContainerAdapter = f13;
        h f14 = moshi.f(AttributeStyles.ESignatureFillColorStyle.class, x0.d(), "fillColor");
        Intrinsics.checkNotNullExpressionValue(f14, "adapter(...)");
        this.nullableESignatureFillColorStyleAdapter = f14;
        h f15 = moshi.f(AttributeStyles.ESignatureBackgroundColorStyle.class, x0.d(), ViewProps.BACKGROUND_COLOR);
        Intrinsics.checkNotNullExpressionValue(f15, "adapter(...)");
        this.nullableESignatureBackgroundColorStyleAdapter = f15;
        h f16 = moshi.f(AttributeStyles.ComplexTextBasedFontFamilyStyle.class, x0.d(), ViewProps.FONT_FAMILY);
        Intrinsics.checkNotNullExpressionValue(f16, "adapter(...)");
        this.nullableComplexTextBasedFontFamilyStyleAdapter = f16;
        h f17 = moshi.f(AttributeStyles.ComplexTextBasedFontSizeStyle.class, x0.d(), ViewProps.FONT_SIZE);
        Intrinsics.checkNotNullExpressionValue(f17, "adapter(...)");
        this.nullableComplexTextBasedFontSizeStyleAdapter = f17;
        h f18 = moshi.f(AttributeStyles.ComplexTextBasedFontWeightStyle.class, x0.d(), ViewProps.FONT_WEIGHT);
        Intrinsics.checkNotNullExpressionValue(f18, "adapter(...)");
        this.nullableComplexTextBasedFontWeightStyleAdapter = f18;
        h f19 = moshi.f(AttributeStyles.ComplexTextBasedLetterSpacingStyle.class, x0.d(), ViewProps.LETTER_SPACING);
        Intrinsics.checkNotNullExpressionValue(f19, "adapter(...)");
        this.nullableComplexTextBasedLetterSpacingStyleAdapter = f19;
        h f20 = moshi.f(AttributeStyles.ComplexTextBasedLineHeightStyle.class, x0.d(), ViewProps.LINE_HEIGHT);
        Intrinsics.checkNotNullExpressionValue(f20, "adapter(...)");
        this.nullableComplexTextBasedLineHeightStyleAdapter = f20;
        h f21 = moshi.f(AttributeStyles.ESignatureTextColorStyle.class, x0.d(), "textColor");
        Intrinsics.checkNotNullExpressionValue(f21, "adapter(...)");
        this.nullableESignatureTextColorStyleAdapter = f21;
        h f22 = moshi.f(AttributeStyles.ESignatureBorderRadiusStyle.class, x0.d(), "borderRadius");
        Intrinsics.checkNotNullExpressionValue(f22, "adapter(...)");
        this.nullableESignatureBorderRadiusStyleAdapter = f22;
        h f23 = moshi.f(AttributeStyles.ESignatureBorderWidthStyle.class, x0.d(), ViewProps.BORDER_WIDTH);
        Intrinsics.checkNotNullExpressionValue(f23, "adapter(...)");
        this.nullableESignatureBorderWidthStyleAdapter = f23;
        h f24 = moshi.f(AttributeStyles.ESignatureBorderColorStyle.class, x0.d(), ViewProps.BORDER_COLOR);
        Intrinsics.checkNotNullExpressionValue(f24, "adapter(...)");
        this.nullableESignatureBorderColorStyleAdapter = f24;
        h f25 = moshi.f(AttributeStyles.InputMarginStyle.class, x0.d(), ViewProps.MARGIN);
        Intrinsics.checkNotNullExpressionValue(f25, "adapter(...)");
        this.nullableInputMarginStyleAdapter = f25;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(57);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("ESignature.ESignatureComponentStyle");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public ESignature.ESignatureComponentStyle fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.u();
        AttributeStyles.ESignaturePrimaryButtonStyles eSignaturePrimaryButtonStyles = null;
        AttributeStyles.ESignatureSecondaryButtonStyles eSignatureSecondaryButtonStyles = null;
        AttributeStyles.ESignatureTitleStylesContainer eSignatureTitleStylesContainer = null;
        AttributeStyles.ESignatureTextStylesContainer eSignatureTextStylesContainer = null;
        AttributeStyles.ESignatureFillColorStyle eSignatureFillColorStyle = null;
        AttributeStyles.ESignatureBackgroundColorStyle eSignatureBackgroundColorStyle = null;
        AttributeStyles.ComplexTextBasedFontFamilyStyle complexTextBasedFontFamilyStyle = null;
        AttributeStyles.ComplexTextBasedFontSizeStyle complexTextBasedFontSizeStyle = null;
        AttributeStyles.ComplexTextBasedFontWeightStyle complexTextBasedFontWeightStyle = null;
        AttributeStyles.ComplexTextBasedLetterSpacingStyle complexTextBasedLetterSpacingStyle = null;
        AttributeStyles.ComplexTextBasedLineHeightStyle complexTextBasedLineHeightStyle = null;
        AttributeStyles.ESignatureTextColorStyle eSignatureTextColorStyle = null;
        AttributeStyles.ESignatureBorderRadiusStyle eSignatureBorderRadiusStyle = null;
        AttributeStyles.ESignatureBorderWidthStyle eSignatureBorderWidthStyle = null;
        AttributeStyles.ESignatureBorderColorStyle eSignatureBorderColorStyle = null;
        AttributeStyles.InputMarginStyle inputMarginStyle = null;
        while (reader.hasNext()) {
            switch (reader.J(this.options)) {
                case -1:
                    reader.E0();
                    reader.S();
                    break;
                case 0:
                    eSignaturePrimaryButtonStyles = (AttributeStyles.ESignaturePrimaryButtonStyles) this.nullableESignaturePrimaryButtonStylesAdapter.fromJson(reader);
                    break;
                case 1:
                    eSignatureSecondaryButtonStyles = (AttributeStyles.ESignatureSecondaryButtonStyles) this.nullableESignatureSecondaryButtonStylesAdapter.fromJson(reader);
                    break;
                case 2:
                    eSignatureTitleStylesContainer = (AttributeStyles.ESignatureTitleStylesContainer) this.nullableESignatureTitleStylesContainerAdapter.fromJson(reader);
                    break;
                case 3:
                    eSignatureTextStylesContainer = (AttributeStyles.ESignatureTextStylesContainer) this.nullableESignatureTextStylesContainerAdapter.fromJson(reader);
                    break;
                case 4:
                    eSignatureFillColorStyle = (AttributeStyles.ESignatureFillColorStyle) this.nullableESignatureFillColorStyleAdapter.fromJson(reader);
                    break;
                case 5:
                    eSignatureBackgroundColorStyle = (AttributeStyles.ESignatureBackgroundColorStyle) this.nullableESignatureBackgroundColorStyleAdapter.fromJson(reader);
                    break;
                case 6:
                    complexTextBasedFontFamilyStyle = (AttributeStyles.ComplexTextBasedFontFamilyStyle) this.nullableComplexTextBasedFontFamilyStyleAdapter.fromJson(reader);
                    break;
                case 7:
                    complexTextBasedFontSizeStyle = (AttributeStyles.ComplexTextBasedFontSizeStyle) this.nullableComplexTextBasedFontSizeStyleAdapter.fromJson(reader);
                    break;
                case 8:
                    complexTextBasedFontWeightStyle = (AttributeStyles.ComplexTextBasedFontWeightStyle) this.nullableComplexTextBasedFontWeightStyleAdapter.fromJson(reader);
                    break;
                case 9:
                    complexTextBasedLetterSpacingStyle = (AttributeStyles.ComplexTextBasedLetterSpacingStyle) this.nullableComplexTextBasedLetterSpacingStyleAdapter.fromJson(reader);
                    break;
                case 10:
                    complexTextBasedLineHeightStyle = (AttributeStyles.ComplexTextBasedLineHeightStyle) this.nullableComplexTextBasedLineHeightStyleAdapter.fromJson(reader);
                    break;
                case 11:
                    eSignatureTextColorStyle = (AttributeStyles.ESignatureTextColorStyle) this.nullableESignatureTextColorStyleAdapter.fromJson(reader);
                    break;
                case 12:
                    eSignatureBorderRadiusStyle = (AttributeStyles.ESignatureBorderRadiusStyle) this.nullableESignatureBorderRadiusStyleAdapter.fromJson(reader);
                    break;
                case 13:
                    eSignatureBorderWidthStyle = (AttributeStyles.ESignatureBorderWidthStyle) this.nullableESignatureBorderWidthStyleAdapter.fromJson(reader);
                    break;
                case 14:
                    eSignatureBorderColorStyle = (AttributeStyles.ESignatureBorderColorStyle) this.nullableESignatureBorderColorStyleAdapter.fromJson(reader);
                    break;
                case 15:
                    inputMarginStyle = (AttributeStyles.InputMarginStyle) this.nullableInputMarginStyleAdapter.fromJson(reader);
                    break;
            }
        }
        reader.D();
        return new ESignature.ESignatureComponentStyle(eSignaturePrimaryButtonStyles, eSignatureSecondaryButtonStyles, eSignatureTitleStylesContainer, eSignatureTextStylesContainer, eSignatureFillColorStyle, eSignatureBackgroundColorStyle, complexTextBasedFontFamilyStyle, complexTextBasedFontSizeStyle, complexTextBasedFontWeightStyle, complexTextBasedLetterSpacingStyle, complexTextBasedLineHeightStyle, eSignatureTextColorStyle, eSignatureBorderRadiusStyle, eSignatureBorderWidthStyle, eSignatureBorderColorStyle, inputMarginStyle);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, ESignature.ESignatureComponentStyle eSignatureComponentStyle) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (eSignatureComponentStyle != null) {
            writer.k();
            writer.J("buttonPrimaryStyle");
            this.nullableESignaturePrimaryButtonStylesAdapter.toJson(writer, eSignatureComponentStyle.getButtonPrimaryStyle());
            writer.J("buttonSecondaryStyle");
            this.nullableESignatureSecondaryButtonStylesAdapter.toJson(writer, eSignatureComponentStyle.getButtonSecondaryStyle());
            writer.J("titleStyle");
            this.nullableESignatureTitleStylesContainerAdapter.toJson(writer, eSignatureComponentStyle.getTitleStyle());
            writer.J("textStyle");
            this.nullableESignatureTextStylesContainerAdapter.toJson(writer, eSignatureComponentStyle.getTextStyle());
            writer.J("fillColor");
            this.nullableESignatureFillColorStyleAdapter.toJson(writer, eSignatureComponentStyle.getFillColor());
            writer.J(ViewProps.BACKGROUND_COLOR);
            this.nullableESignatureBackgroundColorStyleAdapter.toJson(writer, eSignatureComponentStyle.getBackgroundColor());
            writer.J(ViewProps.FONT_FAMILY);
            this.nullableComplexTextBasedFontFamilyStyleAdapter.toJson(writer, eSignatureComponentStyle.getFontFamily());
            writer.J(ViewProps.FONT_SIZE);
            this.nullableComplexTextBasedFontSizeStyleAdapter.toJson(writer, eSignatureComponentStyle.getFontSize());
            writer.J(ViewProps.FONT_WEIGHT);
            this.nullableComplexTextBasedFontWeightStyleAdapter.toJson(writer, eSignatureComponentStyle.getFontWeight());
            writer.J(ViewProps.LETTER_SPACING);
            this.nullableComplexTextBasedLetterSpacingStyleAdapter.toJson(writer, eSignatureComponentStyle.getLetterSpacing());
            writer.J(ViewProps.LINE_HEIGHT);
            this.nullableComplexTextBasedLineHeightStyleAdapter.toJson(writer, eSignatureComponentStyle.getLineHeight());
            writer.J("textColor");
            this.nullableESignatureTextColorStyleAdapter.toJson(writer, eSignatureComponentStyle.getTextColor());
            writer.J("borderRadius");
            this.nullableESignatureBorderRadiusStyleAdapter.toJson(writer, eSignatureComponentStyle.getBorderRadius());
            writer.J(ViewProps.BORDER_WIDTH);
            this.nullableESignatureBorderWidthStyleAdapter.toJson(writer, eSignatureComponentStyle.getBorderWidth());
            writer.J(ViewProps.BORDER_COLOR);
            this.nullableESignatureBorderColorStyleAdapter.toJson(writer, eSignatureComponentStyle.getBorderColor());
            writer.J(ViewProps.MARGIN);
            this.nullableInputMarginStyleAdapter.toJson(writer, eSignatureComponentStyle.getMargin());
            writer.s();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
