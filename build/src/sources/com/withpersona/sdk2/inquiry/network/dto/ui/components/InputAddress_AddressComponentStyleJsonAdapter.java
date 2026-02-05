package com.withpersona.sdk2.inquiry.network.dto.ui.components;

import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputAddress;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.AttributeStyles;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0088\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001c\u0010\u001b\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0019R\u001c\u0010\u001d\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001c0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u0019R\u001c\u0010\u001f\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001e0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010\u0019R\u001c\u0010!\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010 0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u0010\u0019R\u001c\u0010#\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\"0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b#\u0010\u0019R\u001c\u0010%\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010$0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b%\u0010\u0019R\u001c\u0010'\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010&0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b'\u0010\u0019R\u001c\u0010)\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010(0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b)\u0010\u0019R\u001c\u0010+\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010*0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b+\u0010\u0019R\u001c\u0010-\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010,0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b-\u0010\u0019R\u001c\u0010/\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010.0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b/\u0010\u0019¨\u00060"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputAddress_AddressComponentStyleJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputAddress$AddressComponentStyle;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputAddress$AddressComponentStyle;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputAddress$AddressComponentStyle;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$AddressTextStyle;", "nullableAddressTextStyleAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputTextBackgroundColorStyle;", "nullableInputTextBackgroundColorStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ComplexTextBasedFontFamilyStyle;", "nullableComplexTextBasedFontFamilyStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ComplexTextBasedFontSizeStyle;", "nullableComplexTextBasedFontSizeStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ComplexTextBasedFontWeightStyle;", "nullableComplexTextBasedFontWeightStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ComplexTextBasedLetterSpacingStyle;", "nullableComplexTextBasedLetterSpacingStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ComplexTextBasedLineHeightStyle;", "nullableComplexTextBasedLineHeightStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ComplexTextBasedTextColorStyle;", "nullableComplexTextBasedTextColorStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputTextBorderRadiusStyle;", "nullableInputTextBorderRadiusStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputTextBorderWidthStyle;", "nullableInputTextBorderWidthStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputTextBorderColorStyle;", "nullableInputTextBorderColorStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputMarginStyle;", "nullableInputMarginStyleAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InputAddress_AddressComponentStyleJsonAdapter extends h {
    @NotNull
    private final h nullableAddressTextStyleAdapter;
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
    private final h nullableComplexTextBasedTextColorStyleAdapter;
    @NotNull
    private final h nullableInputMarginStyleAdapter;
    @NotNull
    private final h nullableInputTextBackgroundColorStyleAdapter;
    @NotNull
    private final h nullableInputTextBorderColorStyleAdapter;
    @NotNull
    private final h nullableInputTextBorderRadiusStyleAdapter;
    @NotNull
    private final h nullableInputTextBorderWidthStyleAdapter;
    @NotNull
    private final m.b options;

    public InputAddress_AddressComponentStyleJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("textStyle", ViewProps.BACKGROUND_COLOR, ViewProps.FONT_FAMILY, ViewProps.FONT_SIZE, ViewProps.FONT_WEIGHT, ViewProps.LETTER_SPACING, ViewProps.LINE_HEIGHT, "textColor", "borderRadius", ViewProps.BORDER_WIDTH, ViewProps.BORDER_COLOR, ViewProps.MARGIN);
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(AttributeStyles.AddressTextStyle.class, x0.d(), "textStyle");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableAddressTextStyleAdapter = f10;
        h f11 = moshi.f(AttributeStyles.InputTextBackgroundColorStyle.class, x0.d(), ViewProps.BACKGROUND_COLOR);
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableInputTextBackgroundColorStyleAdapter = f11;
        h f12 = moshi.f(AttributeStyles.ComplexTextBasedFontFamilyStyle.class, x0.d(), ViewProps.FONT_FAMILY);
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.nullableComplexTextBasedFontFamilyStyleAdapter = f12;
        h f13 = moshi.f(AttributeStyles.ComplexTextBasedFontSizeStyle.class, x0.d(), ViewProps.FONT_SIZE);
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.nullableComplexTextBasedFontSizeStyleAdapter = f13;
        h f14 = moshi.f(AttributeStyles.ComplexTextBasedFontWeightStyle.class, x0.d(), ViewProps.FONT_WEIGHT);
        Intrinsics.checkNotNullExpressionValue(f14, "adapter(...)");
        this.nullableComplexTextBasedFontWeightStyleAdapter = f14;
        h f15 = moshi.f(AttributeStyles.ComplexTextBasedLetterSpacingStyle.class, x0.d(), ViewProps.LETTER_SPACING);
        Intrinsics.checkNotNullExpressionValue(f15, "adapter(...)");
        this.nullableComplexTextBasedLetterSpacingStyleAdapter = f15;
        h f16 = moshi.f(AttributeStyles.ComplexTextBasedLineHeightStyle.class, x0.d(), ViewProps.LINE_HEIGHT);
        Intrinsics.checkNotNullExpressionValue(f16, "adapter(...)");
        this.nullableComplexTextBasedLineHeightStyleAdapter = f16;
        h f17 = moshi.f(AttributeStyles.ComplexTextBasedTextColorStyle.class, x0.d(), "textColor");
        Intrinsics.checkNotNullExpressionValue(f17, "adapter(...)");
        this.nullableComplexTextBasedTextColorStyleAdapter = f17;
        h f18 = moshi.f(AttributeStyles.InputTextBorderRadiusStyle.class, x0.d(), "borderRadius");
        Intrinsics.checkNotNullExpressionValue(f18, "adapter(...)");
        this.nullableInputTextBorderRadiusStyleAdapter = f18;
        h f19 = moshi.f(AttributeStyles.InputTextBorderWidthStyle.class, x0.d(), ViewProps.BORDER_WIDTH);
        Intrinsics.checkNotNullExpressionValue(f19, "adapter(...)");
        this.nullableInputTextBorderWidthStyleAdapter = f19;
        h f20 = moshi.f(AttributeStyles.InputTextBorderColorStyle.class, x0.d(), ViewProps.BORDER_COLOR);
        Intrinsics.checkNotNullExpressionValue(f20, "adapter(...)");
        this.nullableInputTextBorderColorStyleAdapter = f20;
        h f21 = moshi.f(AttributeStyles.InputMarginStyle.class, x0.d(), ViewProps.MARGIN);
        Intrinsics.checkNotNullExpressionValue(f21, "adapter(...)");
        this.nullableInputMarginStyleAdapter = f21;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(56);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("InputAddress.AddressComponentStyle");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public InputAddress.AddressComponentStyle fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.s();
        AttributeStyles.AddressTextStyle addressTextStyle = null;
        AttributeStyles.InputTextBackgroundColorStyle inputTextBackgroundColorStyle = null;
        AttributeStyles.ComplexTextBasedFontFamilyStyle complexTextBasedFontFamilyStyle = null;
        AttributeStyles.ComplexTextBasedFontSizeStyle complexTextBasedFontSizeStyle = null;
        AttributeStyles.ComplexTextBasedFontWeightStyle complexTextBasedFontWeightStyle = null;
        AttributeStyles.ComplexTextBasedLetterSpacingStyle complexTextBasedLetterSpacingStyle = null;
        AttributeStyles.ComplexTextBasedLineHeightStyle complexTextBasedLineHeightStyle = null;
        AttributeStyles.ComplexTextBasedTextColorStyle complexTextBasedTextColorStyle = null;
        AttributeStyles.InputTextBorderRadiusStyle inputTextBorderRadiusStyle = null;
        AttributeStyles.InputTextBorderWidthStyle inputTextBorderWidthStyle = null;
        AttributeStyles.InputTextBorderColorStyle inputTextBorderColorStyle = null;
        AttributeStyles.InputMarginStyle inputMarginStyle = null;
        while (reader.hasNext()) {
            switch (reader.W(this.options)) {
                case -1:
                    reader.E0();
                    reader.P();
                    break;
                case 0:
                    addressTextStyle = (AttributeStyles.AddressTextStyle) this.nullableAddressTextStyleAdapter.fromJson(reader);
                    break;
                case 1:
                    inputTextBackgroundColorStyle = (AttributeStyles.InputTextBackgroundColorStyle) this.nullableInputTextBackgroundColorStyleAdapter.fromJson(reader);
                    break;
                case 2:
                    complexTextBasedFontFamilyStyle = (AttributeStyles.ComplexTextBasedFontFamilyStyle) this.nullableComplexTextBasedFontFamilyStyleAdapter.fromJson(reader);
                    break;
                case 3:
                    complexTextBasedFontSizeStyle = (AttributeStyles.ComplexTextBasedFontSizeStyle) this.nullableComplexTextBasedFontSizeStyleAdapter.fromJson(reader);
                    break;
                case 4:
                    complexTextBasedFontWeightStyle = (AttributeStyles.ComplexTextBasedFontWeightStyle) this.nullableComplexTextBasedFontWeightStyleAdapter.fromJson(reader);
                    break;
                case 5:
                    complexTextBasedLetterSpacingStyle = (AttributeStyles.ComplexTextBasedLetterSpacingStyle) this.nullableComplexTextBasedLetterSpacingStyleAdapter.fromJson(reader);
                    break;
                case 6:
                    complexTextBasedLineHeightStyle = (AttributeStyles.ComplexTextBasedLineHeightStyle) this.nullableComplexTextBasedLineHeightStyleAdapter.fromJson(reader);
                    break;
                case 7:
                    complexTextBasedTextColorStyle = (AttributeStyles.ComplexTextBasedTextColorStyle) this.nullableComplexTextBasedTextColorStyleAdapter.fromJson(reader);
                    break;
                case 8:
                    inputTextBorderRadiusStyle = (AttributeStyles.InputTextBorderRadiusStyle) this.nullableInputTextBorderRadiusStyleAdapter.fromJson(reader);
                    break;
                case 9:
                    inputTextBorderWidthStyle = (AttributeStyles.InputTextBorderWidthStyle) this.nullableInputTextBorderWidthStyleAdapter.fromJson(reader);
                    break;
                case 10:
                    inputTextBorderColorStyle = (AttributeStyles.InputTextBorderColorStyle) this.nullableInputTextBorderColorStyleAdapter.fromJson(reader);
                    break;
                case 11:
                    inputMarginStyle = (AttributeStyles.InputMarginStyle) this.nullableInputMarginStyleAdapter.fromJson(reader);
                    break;
            }
        }
        reader.z();
        return new InputAddress.AddressComponentStyle(addressTextStyle, inputTextBackgroundColorStyle, complexTextBasedFontFamilyStyle, complexTextBasedFontSizeStyle, complexTextBasedFontWeightStyle, complexTextBasedLetterSpacingStyle, complexTextBasedLineHeightStyle, complexTextBasedTextColorStyle, inputTextBorderRadiusStyle, inputTextBorderWidthStyle, inputTextBorderColorStyle, inputMarginStyle);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, InputAddress.AddressComponentStyle addressComponentStyle) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (addressComponentStyle != null) {
            writer.k();
            writer.W("textStyle");
            this.nullableAddressTextStyleAdapter.toJson(writer, addressComponentStyle.getTextStyle());
            writer.W(ViewProps.BACKGROUND_COLOR);
            this.nullableInputTextBackgroundColorStyleAdapter.toJson(writer, addressComponentStyle.getBackgroundColor());
            writer.W(ViewProps.FONT_FAMILY);
            this.nullableComplexTextBasedFontFamilyStyleAdapter.toJson(writer, addressComponentStyle.getFontFamily());
            writer.W(ViewProps.FONT_SIZE);
            this.nullableComplexTextBasedFontSizeStyleAdapter.toJson(writer, addressComponentStyle.getFontSize());
            writer.W(ViewProps.FONT_WEIGHT);
            this.nullableComplexTextBasedFontWeightStyleAdapter.toJson(writer, addressComponentStyle.getFontWeight());
            writer.W(ViewProps.LETTER_SPACING);
            this.nullableComplexTextBasedLetterSpacingStyleAdapter.toJson(writer, addressComponentStyle.getLetterSpacing());
            writer.W(ViewProps.LINE_HEIGHT);
            this.nullableComplexTextBasedLineHeightStyleAdapter.toJson(writer, addressComponentStyle.getLineHeight());
            writer.W("textColor");
            this.nullableComplexTextBasedTextColorStyleAdapter.toJson(writer, addressComponentStyle.getTextColor());
            writer.W("borderRadius");
            this.nullableInputTextBorderRadiusStyleAdapter.toJson(writer, addressComponentStyle.getBorderRadius());
            writer.W(ViewProps.BORDER_WIDTH);
            this.nullableInputTextBorderWidthStyleAdapter.toJson(writer, addressComponentStyle.getBorderWidth());
            writer.W(ViewProps.BORDER_COLOR);
            this.nullableInputTextBorderColorStyleAdapter.toJson(writer, addressComponentStyle.getBorderColor());
            writer.W(ViewProps.MARGIN);
            this.nullableInputMarginStyleAdapter.toJson(writer, addressComponentStyle.getMargin());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
