package com.withpersona.sdk2.inquiry.network.dto.ui.styling;

import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.AttributeStyles;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u008e\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001c\u0010\u001b\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0019R\u001c\u0010\u001d\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001c0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u0019R\u001c\u0010\u001f\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001e0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010\u0019R\u001c\u0010!\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010 0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u0010\u0019R\u001c\u0010#\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\"0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b#\u0010\u0019R\u001c\u0010%\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010$0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b%\u0010\u0019R\u001c\u0010'\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010&0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b'\u0010\u0019R\u001c\u0010)\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010(0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b)\u0010\u0019R\u001c\u0010+\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010*0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b+\u0010\u0019R\u001c\u0010-\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010,0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b-\u0010\u0019R\u001c\u0010/\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010.0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b/\u0010\u0019R\u001c\u00101\u001a\n\u0012\u0006\u0012\u0004\u0018\u0001000\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b1\u0010\u0019¨\u00062"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/InputSelectComponentStyleJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/InputSelectComponentStyle;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/InputSelectComponentStyle;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/InputSelectComponentStyle;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputMarginStyle;", "nullableInputMarginStyleAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$TextBasedJustifyStyle;", "nullableTextBasedJustifyStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectTextFontFamilyStyle;", "nullableInputSelectTextFontFamilyStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectTextFontSizeStyle;", "nullableInputSelectTextFontSizeStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectTextFontWeightStyle;", "nullableInputSelectTextFontWeightStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectTextLetterSpacingStyle;", "nullableInputSelectTextLetterSpacingStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectTextLineHeightStyle;", "nullableInputSelectTextLineHeightStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectTextColorStyle;", "nullableInputSelectTextColorStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectBorderRadiusStyle;", "nullableInputSelectBorderRadiusStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectBorderWidthStyle;", "nullableInputSelectBorderWidthStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectBackgroundColorStyle;", "nullableInputSelectBackgroundColorStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectBorderColorStyle;", "nullableInputSelectBorderColorStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputSelectStrokeColorStyle;", "nullableInputSelectStrokeColorStyleAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InputSelectComponentStyleJsonAdapter extends h {
    @NotNull
    private final h nullableInputMarginStyleAdapter;
    @NotNull
    private final h nullableInputSelectBackgroundColorStyleAdapter;
    @NotNull
    private final h nullableInputSelectBorderColorStyleAdapter;
    @NotNull
    private final h nullableInputSelectBorderRadiusStyleAdapter;
    @NotNull
    private final h nullableInputSelectBorderWidthStyleAdapter;
    @NotNull
    private final h nullableInputSelectStrokeColorStyleAdapter;
    @NotNull
    private final h nullableInputSelectTextColorStyleAdapter;
    @NotNull
    private final h nullableInputSelectTextFontFamilyStyleAdapter;
    @NotNull
    private final h nullableInputSelectTextFontSizeStyleAdapter;
    @NotNull
    private final h nullableInputSelectTextFontWeightStyleAdapter;
    @NotNull
    private final h nullableInputSelectTextLetterSpacingStyleAdapter;
    @NotNull
    private final h nullableInputSelectTextLineHeightStyleAdapter;
    @NotNull
    private final h nullableTextBasedJustifyStyleAdapter;
    @NotNull
    private final m.b options;

    public InputSelectComponentStyleJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a(ViewProps.MARGIN, "justify", ViewProps.FONT_FAMILY, ViewProps.FONT_SIZE, ViewProps.FONT_WEIGHT, ViewProps.LETTER_SPACING, ViewProps.LINE_HEIGHT, "textColor", "borderRadius", ViewProps.BORDER_WIDTH, ViewProps.BACKGROUND_COLOR, ViewProps.BORDER_COLOR, "strokeColor");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(AttributeStyles.InputMarginStyle.class, x0.d(), ViewProps.MARGIN);
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableInputMarginStyleAdapter = f10;
        h f11 = moshi.f(AttributeStyles.TextBasedJustifyStyle.class, x0.d(), "justify");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableTextBasedJustifyStyleAdapter = f11;
        h f12 = moshi.f(AttributeStyles.InputSelectTextFontFamilyStyle.class, x0.d(), ViewProps.FONT_FAMILY);
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.nullableInputSelectTextFontFamilyStyleAdapter = f12;
        h f13 = moshi.f(AttributeStyles.InputSelectTextFontSizeStyle.class, x0.d(), ViewProps.FONT_SIZE);
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.nullableInputSelectTextFontSizeStyleAdapter = f13;
        h f14 = moshi.f(AttributeStyles.InputSelectTextFontWeightStyle.class, x0.d(), ViewProps.FONT_WEIGHT);
        Intrinsics.checkNotNullExpressionValue(f14, "adapter(...)");
        this.nullableInputSelectTextFontWeightStyleAdapter = f14;
        h f15 = moshi.f(AttributeStyles.InputSelectTextLetterSpacingStyle.class, x0.d(), ViewProps.LETTER_SPACING);
        Intrinsics.checkNotNullExpressionValue(f15, "adapter(...)");
        this.nullableInputSelectTextLetterSpacingStyleAdapter = f15;
        h f16 = moshi.f(AttributeStyles.InputSelectTextLineHeightStyle.class, x0.d(), ViewProps.LINE_HEIGHT);
        Intrinsics.checkNotNullExpressionValue(f16, "adapter(...)");
        this.nullableInputSelectTextLineHeightStyleAdapter = f16;
        h f17 = moshi.f(AttributeStyles.InputSelectTextColorStyle.class, x0.d(), "textColor");
        Intrinsics.checkNotNullExpressionValue(f17, "adapter(...)");
        this.nullableInputSelectTextColorStyleAdapter = f17;
        h f18 = moshi.f(AttributeStyles.InputSelectBorderRadiusStyle.class, x0.d(), "borderRadius");
        Intrinsics.checkNotNullExpressionValue(f18, "adapter(...)");
        this.nullableInputSelectBorderRadiusStyleAdapter = f18;
        h f19 = moshi.f(AttributeStyles.InputSelectBorderWidthStyle.class, x0.d(), ViewProps.BORDER_WIDTH);
        Intrinsics.checkNotNullExpressionValue(f19, "adapter(...)");
        this.nullableInputSelectBorderWidthStyleAdapter = f19;
        h f20 = moshi.f(AttributeStyles.InputSelectBackgroundColorStyle.class, x0.d(), ViewProps.BACKGROUND_COLOR);
        Intrinsics.checkNotNullExpressionValue(f20, "adapter(...)");
        this.nullableInputSelectBackgroundColorStyleAdapter = f20;
        h f21 = moshi.f(AttributeStyles.InputSelectBorderColorStyle.class, x0.d(), ViewProps.BORDER_COLOR);
        Intrinsics.checkNotNullExpressionValue(f21, "adapter(...)");
        this.nullableInputSelectBorderColorStyleAdapter = f21;
        h f22 = moshi.f(AttributeStyles.InputSelectStrokeColorStyle.class, x0.d(), "strokeColor");
        Intrinsics.checkNotNullExpressionValue(f22, "adapter(...)");
        this.nullableInputSelectStrokeColorStyleAdapter = f22;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(47);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("InputSelectComponentStyle");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public InputSelectComponentStyle fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        AttributeStyles.InputMarginStyle inputMarginStyle = null;
        AttributeStyles.TextBasedJustifyStyle textBasedJustifyStyle = null;
        AttributeStyles.InputSelectTextFontFamilyStyle inputSelectTextFontFamilyStyle = null;
        AttributeStyles.InputSelectTextFontSizeStyle inputSelectTextFontSizeStyle = null;
        AttributeStyles.InputSelectTextFontWeightStyle inputSelectTextFontWeightStyle = null;
        AttributeStyles.InputSelectTextLetterSpacingStyle inputSelectTextLetterSpacingStyle = null;
        AttributeStyles.InputSelectTextLineHeightStyle inputSelectTextLineHeightStyle = null;
        AttributeStyles.InputSelectTextColorStyle inputSelectTextColorStyle = null;
        AttributeStyles.InputSelectBorderRadiusStyle inputSelectBorderRadiusStyle = null;
        AttributeStyles.InputSelectBorderWidthStyle inputSelectBorderWidthStyle = null;
        AttributeStyles.InputSelectBackgroundColorStyle inputSelectBackgroundColorStyle = null;
        AttributeStyles.InputSelectBorderColorStyle inputSelectBorderColorStyle = null;
        AttributeStyles.InputSelectStrokeColorStyle inputSelectStrokeColorStyle = null;
        while (reader.hasNext()) {
            switch (reader.A0(this.options)) {
                case -1:
                    reader.E0();
                    reader.P();
                    break;
                case 0:
                    inputMarginStyle = (AttributeStyles.InputMarginStyle) this.nullableInputMarginStyleAdapter.fromJson(reader);
                    break;
                case 1:
                    textBasedJustifyStyle = (AttributeStyles.TextBasedJustifyStyle) this.nullableTextBasedJustifyStyleAdapter.fromJson(reader);
                    break;
                case 2:
                    inputSelectTextFontFamilyStyle = (AttributeStyles.InputSelectTextFontFamilyStyle) this.nullableInputSelectTextFontFamilyStyleAdapter.fromJson(reader);
                    break;
                case 3:
                    inputSelectTextFontSizeStyle = (AttributeStyles.InputSelectTextFontSizeStyle) this.nullableInputSelectTextFontSizeStyleAdapter.fromJson(reader);
                    break;
                case 4:
                    inputSelectTextFontWeightStyle = (AttributeStyles.InputSelectTextFontWeightStyle) this.nullableInputSelectTextFontWeightStyleAdapter.fromJson(reader);
                    break;
                case 5:
                    inputSelectTextLetterSpacingStyle = (AttributeStyles.InputSelectTextLetterSpacingStyle) this.nullableInputSelectTextLetterSpacingStyleAdapter.fromJson(reader);
                    break;
                case 6:
                    inputSelectTextLineHeightStyle = (AttributeStyles.InputSelectTextLineHeightStyle) this.nullableInputSelectTextLineHeightStyleAdapter.fromJson(reader);
                    break;
                case 7:
                    inputSelectTextColorStyle = (AttributeStyles.InputSelectTextColorStyle) this.nullableInputSelectTextColorStyleAdapter.fromJson(reader);
                    break;
                case 8:
                    inputSelectBorderRadiusStyle = (AttributeStyles.InputSelectBorderRadiusStyle) this.nullableInputSelectBorderRadiusStyleAdapter.fromJson(reader);
                    break;
                case 9:
                    inputSelectBorderWidthStyle = (AttributeStyles.InputSelectBorderWidthStyle) this.nullableInputSelectBorderWidthStyleAdapter.fromJson(reader);
                    break;
                case 10:
                    inputSelectBackgroundColorStyle = (AttributeStyles.InputSelectBackgroundColorStyle) this.nullableInputSelectBackgroundColorStyleAdapter.fromJson(reader);
                    break;
                case 11:
                    inputSelectBorderColorStyle = (AttributeStyles.InputSelectBorderColorStyle) this.nullableInputSelectBorderColorStyleAdapter.fromJson(reader);
                    break;
                case 12:
                    inputSelectStrokeColorStyle = (AttributeStyles.InputSelectStrokeColorStyle) this.nullableInputSelectStrokeColorStyleAdapter.fromJson(reader);
                    break;
            }
        }
        reader.y();
        return new InputSelectComponentStyle(inputMarginStyle, textBasedJustifyStyle, inputSelectTextFontFamilyStyle, inputSelectTextFontSizeStyle, inputSelectTextFontWeightStyle, inputSelectTextLetterSpacingStyle, inputSelectTextLineHeightStyle, inputSelectTextColorStyle, inputSelectBorderRadiusStyle, inputSelectBorderWidthStyle, inputSelectBackgroundColorStyle, inputSelectBorderColorStyle, inputSelectStrokeColorStyle);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, InputSelectComponentStyle inputSelectComponentStyle) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (inputSelectComponentStyle != null) {
            writer.l();
            writer.A0(ViewProps.MARGIN);
            this.nullableInputMarginStyleAdapter.toJson(writer, inputSelectComponentStyle.getMargin());
            writer.A0("justify");
            this.nullableTextBasedJustifyStyleAdapter.toJson(writer, inputSelectComponentStyle.getJustify());
            writer.A0(ViewProps.FONT_FAMILY);
            this.nullableInputSelectTextFontFamilyStyleAdapter.toJson(writer, inputSelectComponentStyle.getFontFamily());
            writer.A0(ViewProps.FONT_SIZE);
            this.nullableInputSelectTextFontSizeStyleAdapter.toJson(writer, inputSelectComponentStyle.getFontSize());
            writer.A0(ViewProps.FONT_WEIGHT);
            this.nullableInputSelectTextFontWeightStyleAdapter.toJson(writer, inputSelectComponentStyle.getFontWeight());
            writer.A0(ViewProps.LETTER_SPACING);
            this.nullableInputSelectTextLetterSpacingStyleAdapter.toJson(writer, inputSelectComponentStyle.getLetterSpacing());
            writer.A0(ViewProps.LINE_HEIGHT);
            this.nullableInputSelectTextLineHeightStyleAdapter.toJson(writer, inputSelectComponentStyle.getLineHeight());
            writer.A0("textColor");
            this.nullableInputSelectTextColorStyleAdapter.toJson(writer, inputSelectComponentStyle.getTextColor());
            writer.A0("borderRadius");
            this.nullableInputSelectBorderRadiusStyleAdapter.toJson(writer, inputSelectComponentStyle.getBorderRadius());
            writer.A0(ViewProps.BORDER_WIDTH);
            this.nullableInputSelectBorderWidthStyleAdapter.toJson(writer, inputSelectComponentStyle.getBorderWidth());
            writer.A0(ViewProps.BACKGROUND_COLOR);
            this.nullableInputSelectBackgroundColorStyleAdapter.toJson(writer, inputSelectComponentStyle.getBackgroundColor());
            writer.A0(ViewProps.BORDER_COLOR);
            this.nullableInputSelectBorderColorStyleAdapter.toJson(writer, inputSelectComponentStyle.getBorderColor());
            writer.A0("strokeColor");
            this.nullableInputSelectStrokeColorStyleAdapter.toJson(writer, inputSelectComponentStyle.getStrokeColor());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
