package com.withpersona.sdk2.inquiry.network.dto.ui.components;

import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputDate;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.AttributeStyles;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u008e\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001c\u0010\u001b\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0019R\u001c\u0010\u001d\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001c0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u0019R\u001c\u0010\u001f\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001e0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010\u0019R\u001c\u0010!\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010 0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u0010\u0019R\u001c\u0010#\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\"0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b#\u0010\u0019R\u001c\u0010%\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010$0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b%\u0010\u0019R\u001c\u0010'\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010&0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b'\u0010\u0019R\u001c\u0010)\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010(0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b)\u0010\u0019R\u001c\u0010+\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010*0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b+\u0010\u0019R\u001c\u0010-\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010,0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b-\u0010\u0019R\u001c\u0010/\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010.0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b/\u0010\u0019R\u001c\u00101\u001a\n\u0012\u0006\u0012\u0004\u0018\u0001000\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b1\u0010\u0019¨\u00062"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputDate_InputDateComponentStyleJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputDate$InputDateComponentStyle;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputDate$InputDateComponentStyle;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputDate$InputDateComponentStyle;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ComplexTextBasedFontFamilyStyle;", "nullableComplexTextBasedFontFamilyStyleAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ComplexTextBasedFontSizeStyle;", "nullableComplexTextBasedFontSizeStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ComplexTextBasedFontWeightStyle;", "nullableComplexTextBasedFontWeightStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ComplexTextBasedLetterSpacingStyle;", "nullableComplexTextBasedLetterSpacingStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ComplexTextBasedLineHeightStyle;", "nullableComplexTextBasedLineHeightStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$DateSelectTextColorStyle;", "nullableDateSelectTextColorStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$DateSelectBorderRadiusStyle;", "nullableDateSelectBorderRadiusStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$DateSelectBorderWidthStyle;", "nullableDateSelectBorderWidthStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$DateSelectBackgroundColorStyle;", "nullableDateSelectBackgroundColorStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$DateSelectBorderColorStyle;", "nullableDateSelectBorderColorStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputMarginStyle;", "nullableInputMarginStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$TextBasedJustifyStyle;", "nullableTextBasedJustifyStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$DateSelectStrokeColorStyle;", "nullableDateSelectStrokeColorStyleAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InputDate_InputDateComponentStyleJsonAdapter extends h {
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
    private final h nullableDateSelectBackgroundColorStyleAdapter;
    @NotNull
    private final h nullableDateSelectBorderColorStyleAdapter;
    @NotNull
    private final h nullableDateSelectBorderRadiusStyleAdapter;
    @NotNull
    private final h nullableDateSelectBorderWidthStyleAdapter;
    @NotNull
    private final h nullableDateSelectStrokeColorStyleAdapter;
    @NotNull
    private final h nullableDateSelectTextColorStyleAdapter;
    @NotNull
    private final h nullableInputMarginStyleAdapter;
    @NotNull
    private final h nullableTextBasedJustifyStyleAdapter;
    @NotNull
    private final m.b options;

    public InputDate_InputDateComponentStyleJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a(ViewProps.FONT_FAMILY, ViewProps.FONT_SIZE, ViewProps.FONT_WEIGHT, ViewProps.LETTER_SPACING, ViewProps.LINE_HEIGHT, "textColor", "borderRadius", ViewProps.BORDER_WIDTH, ViewProps.BACKGROUND_COLOR, ViewProps.BORDER_COLOR, ViewProps.MARGIN, "justify", "strokeColor");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(AttributeStyles.ComplexTextBasedFontFamilyStyle.class, x0.d(), ViewProps.FONT_FAMILY);
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableComplexTextBasedFontFamilyStyleAdapter = f10;
        h f11 = moshi.f(AttributeStyles.ComplexTextBasedFontSizeStyle.class, x0.d(), ViewProps.FONT_SIZE);
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableComplexTextBasedFontSizeStyleAdapter = f11;
        h f12 = moshi.f(AttributeStyles.ComplexTextBasedFontWeightStyle.class, x0.d(), ViewProps.FONT_WEIGHT);
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.nullableComplexTextBasedFontWeightStyleAdapter = f12;
        h f13 = moshi.f(AttributeStyles.ComplexTextBasedLetterSpacingStyle.class, x0.d(), ViewProps.LETTER_SPACING);
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.nullableComplexTextBasedLetterSpacingStyleAdapter = f13;
        h f14 = moshi.f(AttributeStyles.ComplexTextBasedLineHeightStyle.class, x0.d(), ViewProps.LINE_HEIGHT);
        Intrinsics.checkNotNullExpressionValue(f14, "adapter(...)");
        this.nullableComplexTextBasedLineHeightStyleAdapter = f14;
        h f15 = moshi.f(AttributeStyles.DateSelectTextColorStyle.class, x0.d(), "textColor");
        Intrinsics.checkNotNullExpressionValue(f15, "adapter(...)");
        this.nullableDateSelectTextColorStyleAdapter = f15;
        h f16 = moshi.f(AttributeStyles.DateSelectBorderRadiusStyle.class, x0.d(), "borderRadius");
        Intrinsics.checkNotNullExpressionValue(f16, "adapter(...)");
        this.nullableDateSelectBorderRadiusStyleAdapter = f16;
        h f17 = moshi.f(AttributeStyles.DateSelectBorderWidthStyle.class, x0.d(), ViewProps.BORDER_WIDTH);
        Intrinsics.checkNotNullExpressionValue(f17, "adapter(...)");
        this.nullableDateSelectBorderWidthStyleAdapter = f17;
        h f18 = moshi.f(AttributeStyles.DateSelectBackgroundColorStyle.class, x0.d(), ViewProps.BACKGROUND_COLOR);
        Intrinsics.checkNotNullExpressionValue(f18, "adapter(...)");
        this.nullableDateSelectBackgroundColorStyleAdapter = f18;
        h f19 = moshi.f(AttributeStyles.DateSelectBorderColorStyle.class, x0.d(), ViewProps.BORDER_COLOR);
        Intrinsics.checkNotNullExpressionValue(f19, "adapter(...)");
        this.nullableDateSelectBorderColorStyleAdapter = f19;
        h f20 = moshi.f(AttributeStyles.InputMarginStyle.class, x0.d(), ViewProps.MARGIN);
        Intrinsics.checkNotNullExpressionValue(f20, "adapter(...)");
        this.nullableInputMarginStyleAdapter = f20;
        h f21 = moshi.f(AttributeStyles.TextBasedJustifyStyle.class, x0.d(), "justify");
        Intrinsics.checkNotNullExpressionValue(f21, "adapter(...)");
        this.nullableTextBasedJustifyStyleAdapter = f21;
        h f22 = moshi.f(AttributeStyles.DateSelectStrokeColorStyle.class, x0.d(), "strokeColor");
        Intrinsics.checkNotNullExpressionValue(f22, "adapter(...)");
        this.nullableDateSelectStrokeColorStyleAdapter = f22;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(55);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("InputDate.InputDateComponentStyle");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public InputDate.InputDateComponentStyle fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.s();
        AttributeStyles.ComplexTextBasedFontFamilyStyle complexTextBasedFontFamilyStyle = null;
        AttributeStyles.ComplexTextBasedFontSizeStyle complexTextBasedFontSizeStyle = null;
        AttributeStyles.ComplexTextBasedFontWeightStyle complexTextBasedFontWeightStyle = null;
        AttributeStyles.ComplexTextBasedLetterSpacingStyle complexTextBasedLetterSpacingStyle = null;
        AttributeStyles.ComplexTextBasedLineHeightStyle complexTextBasedLineHeightStyle = null;
        AttributeStyles.DateSelectTextColorStyle dateSelectTextColorStyle = null;
        AttributeStyles.DateSelectBorderRadiusStyle dateSelectBorderRadiusStyle = null;
        AttributeStyles.DateSelectBorderWidthStyle dateSelectBorderWidthStyle = null;
        AttributeStyles.DateSelectBackgroundColorStyle dateSelectBackgroundColorStyle = null;
        AttributeStyles.DateSelectBorderColorStyle dateSelectBorderColorStyle = null;
        AttributeStyles.InputMarginStyle inputMarginStyle = null;
        AttributeStyles.TextBasedJustifyStyle textBasedJustifyStyle = null;
        AttributeStyles.DateSelectStrokeColorStyle dateSelectStrokeColorStyle = null;
        while (reader.hasNext()) {
            switch (reader.W(this.options)) {
                case -1:
                    reader.E0();
                    reader.P();
                    break;
                case 0:
                    complexTextBasedFontFamilyStyle = (AttributeStyles.ComplexTextBasedFontFamilyStyle) this.nullableComplexTextBasedFontFamilyStyleAdapter.fromJson(reader);
                    break;
                case 1:
                    complexTextBasedFontSizeStyle = (AttributeStyles.ComplexTextBasedFontSizeStyle) this.nullableComplexTextBasedFontSizeStyleAdapter.fromJson(reader);
                    break;
                case 2:
                    complexTextBasedFontWeightStyle = (AttributeStyles.ComplexTextBasedFontWeightStyle) this.nullableComplexTextBasedFontWeightStyleAdapter.fromJson(reader);
                    break;
                case 3:
                    complexTextBasedLetterSpacingStyle = (AttributeStyles.ComplexTextBasedLetterSpacingStyle) this.nullableComplexTextBasedLetterSpacingStyleAdapter.fromJson(reader);
                    break;
                case 4:
                    complexTextBasedLineHeightStyle = (AttributeStyles.ComplexTextBasedLineHeightStyle) this.nullableComplexTextBasedLineHeightStyleAdapter.fromJson(reader);
                    break;
                case 5:
                    dateSelectTextColorStyle = (AttributeStyles.DateSelectTextColorStyle) this.nullableDateSelectTextColorStyleAdapter.fromJson(reader);
                    break;
                case 6:
                    dateSelectBorderRadiusStyle = (AttributeStyles.DateSelectBorderRadiusStyle) this.nullableDateSelectBorderRadiusStyleAdapter.fromJson(reader);
                    break;
                case 7:
                    dateSelectBorderWidthStyle = (AttributeStyles.DateSelectBorderWidthStyle) this.nullableDateSelectBorderWidthStyleAdapter.fromJson(reader);
                    break;
                case 8:
                    dateSelectBackgroundColorStyle = (AttributeStyles.DateSelectBackgroundColorStyle) this.nullableDateSelectBackgroundColorStyleAdapter.fromJson(reader);
                    break;
                case 9:
                    dateSelectBorderColorStyle = (AttributeStyles.DateSelectBorderColorStyle) this.nullableDateSelectBorderColorStyleAdapter.fromJson(reader);
                    break;
                case 10:
                    inputMarginStyle = (AttributeStyles.InputMarginStyle) this.nullableInputMarginStyleAdapter.fromJson(reader);
                    break;
                case 11:
                    textBasedJustifyStyle = (AttributeStyles.TextBasedJustifyStyle) this.nullableTextBasedJustifyStyleAdapter.fromJson(reader);
                    break;
                case 12:
                    dateSelectStrokeColorStyle = (AttributeStyles.DateSelectStrokeColorStyle) this.nullableDateSelectStrokeColorStyleAdapter.fromJson(reader);
                    break;
            }
        }
        reader.z();
        return new InputDate.InputDateComponentStyle(complexTextBasedFontFamilyStyle, complexTextBasedFontSizeStyle, complexTextBasedFontWeightStyle, complexTextBasedLetterSpacingStyle, complexTextBasedLineHeightStyle, dateSelectTextColorStyle, dateSelectBorderRadiusStyle, dateSelectBorderWidthStyle, dateSelectBackgroundColorStyle, dateSelectBorderColorStyle, inputMarginStyle, textBasedJustifyStyle, dateSelectStrokeColorStyle);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, InputDate.InputDateComponentStyle inputDateComponentStyle) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (inputDateComponentStyle != null) {
            writer.k();
            writer.W(ViewProps.FONT_FAMILY);
            this.nullableComplexTextBasedFontFamilyStyleAdapter.toJson(writer, inputDateComponentStyle.getFontFamily());
            writer.W(ViewProps.FONT_SIZE);
            this.nullableComplexTextBasedFontSizeStyleAdapter.toJson(writer, inputDateComponentStyle.getFontSize());
            writer.W(ViewProps.FONT_WEIGHT);
            this.nullableComplexTextBasedFontWeightStyleAdapter.toJson(writer, inputDateComponentStyle.getFontWeight());
            writer.W(ViewProps.LETTER_SPACING);
            this.nullableComplexTextBasedLetterSpacingStyleAdapter.toJson(writer, inputDateComponentStyle.getLetterSpacing());
            writer.W(ViewProps.LINE_HEIGHT);
            this.nullableComplexTextBasedLineHeightStyleAdapter.toJson(writer, inputDateComponentStyle.getLineHeight());
            writer.W("textColor");
            this.nullableDateSelectTextColorStyleAdapter.toJson(writer, inputDateComponentStyle.getTextColor());
            writer.W("borderRadius");
            this.nullableDateSelectBorderRadiusStyleAdapter.toJson(writer, inputDateComponentStyle.getBorderRadius());
            writer.W(ViewProps.BORDER_WIDTH);
            this.nullableDateSelectBorderWidthStyleAdapter.toJson(writer, inputDateComponentStyle.getBorderWidth());
            writer.W(ViewProps.BACKGROUND_COLOR);
            this.nullableDateSelectBackgroundColorStyleAdapter.toJson(writer, inputDateComponentStyle.getBackgroundColor());
            writer.W(ViewProps.BORDER_COLOR);
            this.nullableDateSelectBorderColorStyleAdapter.toJson(writer, inputDateComponentStyle.getBorderColor());
            writer.W(ViewProps.MARGIN);
            this.nullableInputMarginStyleAdapter.toJson(writer, inputDateComponentStyle.getMargin());
            writer.W("justify");
            this.nullableTextBasedJustifyStyleAdapter.toJson(writer, inputDateComponentStyle.getJustify());
            writer.W("strokeColor");
            this.nullableDateSelectStrokeColorStyleAdapter.toJson(writer, inputDateComponentStyle.getStrokeColor());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
