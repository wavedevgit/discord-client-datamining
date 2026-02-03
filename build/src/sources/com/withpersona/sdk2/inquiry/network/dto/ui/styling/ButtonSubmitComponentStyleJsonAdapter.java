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
@Metadata(d1 = {"\u0000\u009a\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001c\u0010\u001b\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0019R\u001c\u0010\u001d\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001c0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u0019R\u001c\u0010\u001f\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001e0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010\u0019R\u001c\u0010!\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010 0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u0010\u0019R\u001c\u0010#\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\"0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b#\u0010\u0019R\u001c\u0010%\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010$0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b%\u0010\u0019R\u001c\u0010'\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010&0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b'\u0010\u0019R\u001c\u0010)\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010(0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b)\u0010\u0019R\u001c\u0010+\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010*0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b+\u0010\u0019R\u001c\u0010-\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010,0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b-\u0010\u0019R\u001c\u0010/\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010.0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b/\u0010\u0019R\u001c\u00101\u001a\n\u0012\u0006\u0012\u0004\u0018\u0001000\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b1\u0010\u0019R\u001c\u00103\u001a\n\u0012\u0006\u0012\u0004\u0018\u0001020\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b3\u0010\u0019R\u001c\u00105\u001a\n\u0012\u0006\u0012\u0004\u0018\u0001040\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b5\u0010\u0019¨\u00066"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/ButtonSubmitComponentStyleJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/ButtonSubmitComponentStyle;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/ButtonSubmitComponentStyle;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/ButtonSubmitComponentStyle;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ButtonBasedPaddingStyle;", "nullableButtonBasedPaddingStyleAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ButtonBasedMarginStyle;", "nullableButtonBasedMarginStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ButtonBasedJustifyStyle;", "nullableButtonBasedJustifyStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ButtonBasedFontFamilyStyle;", "nullableButtonBasedFontFamilyStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ButtonBasedFontSizeStyle;", "nullableButtonBasedFontSizeStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ButtonBasedFontWeightStyle;", "nullableButtonBasedFontWeightStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ButtonBasedLetterSpacingStyle;", "nullableButtonBasedLetterSpacingStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ButtonBasedLineHeightStyle;", "nullableButtonBasedLineHeightStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ButtonBasedTextColorStyle;", "nullableButtonBasedTextColorStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ButtonBasedHeightStyle;", "nullableButtonBasedHeightStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ButtonBasedWidthStyle;", "nullableButtonBasedWidthStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ButtonBasedBackgroundColorStyle;", "nullableButtonBasedBackgroundColorStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ButtonBasedBorderColorStyle;", "nullableButtonBasedBorderColorStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ButtonBasedBorderRadiusStyle;", "nullableButtonBasedBorderRadiusStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ButtonBasedBorderWidthStyle;", "nullableButtonBasedBorderWidthStyleAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ButtonSubmitComponentStyleJsonAdapter extends h {
    @NotNull
    private final h nullableButtonBasedBackgroundColorStyleAdapter;
    @NotNull
    private final h nullableButtonBasedBorderColorStyleAdapter;
    @NotNull
    private final h nullableButtonBasedBorderRadiusStyleAdapter;
    @NotNull
    private final h nullableButtonBasedBorderWidthStyleAdapter;
    @NotNull
    private final h nullableButtonBasedFontFamilyStyleAdapter;
    @NotNull
    private final h nullableButtonBasedFontSizeStyleAdapter;
    @NotNull
    private final h nullableButtonBasedFontWeightStyleAdapter;
    @NotNull
    private final h nullableButtonBasedHeightStyleAdapter;
    @NotNull
    private final h nullableButtonBasedJustifyStyleAdapter;
    @NotNull
    private final h nullableButtonBasedLetterSpacingStyleAdapter;
    @NotNull
    private final h nullableButtonBasedLineHeightStyleAdapter;
    @NotNull
    private final h nullableButtonBasedMarginStyleAdapter;
    @NotNull
    private final h nullableButtonBasedPaddingStyleAdapter;
    @NotNull
    private final h nullableButtonBasedTextColorStyleAdapter;
    @NotNull
    private final h nullableButtonBasedWidthStyleAdapter;
    @NotNull
    private final m.b options;

    public ButtonSubmitComponentStyleJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a(ViewProps.PADDING, ViewProps.MARGIN, "justify", ViewProps.FONT_FAMILY, ViewProps.FONT_SIZE, ViewProps.FONT_WEIGHT, ViewProps.LETTER_SPACING, ViewProps.LINE_HEIGHT, "textColor", "height", "width", ViewProps.BACKGROUND_COLOR, ViewProps.BORDER_COLOR, "borderRadius", ViewProps.BORDER_WIDTH);
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(AttributeStyles.ButtonBasedPaddingStyle.class, x0.d(), ViewProps.PADDING);
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableButtonBasedPaddingStyleAdapter = f10;
        h f11 = moshi.f(AttributeStyles.ButtonBasedMarginStyle.class, x0.d(), ViewProps.MARGIN);
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableButtonBasedMarginStyleAdapter = f11;
        h f12 = moshi.f(AttributeStyles.ButtonBasedJustifyStyle.class, x0.d(), "justify");
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.nullableButtonBasedJustifyStyleAdapter = f12;
        h f13 = moshi.f(AttributeStyles.ButtonBasedFontFamilyStyle.class, x0.d(), ViewProps.FONT_FAMILY);
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.nullableButtonBasedFontFamilyStyleAdapter = f13;
        h f14 = moshi.f(AttributeStyles.ButtonBasedFontSizeStyle.class, x0.d(), ViewProps.FONT_SIZE);
        Intrinsics.checkNotNullExpressionValue(f14, "adapter(...)");
        this.nullableButtonBasedFontSizeStyleAdapter = f14;
        h f15 = moshi.f(AttributeStyles.ButtonBasedFontWeightStyle.class, x0.d(), ViewProps.FONT_WEIGHT);
        Intrinsics.checkNotNullExpressionValue(f15, "adapter(...)");
        this.nullableButtonBasedFontWeightStyleAdapter = f15;
        h f16 = moshi.f(AttributeStyles.ButtonBasedLetterSpacingStyle.class, x0.d(), ViewProps.LETTER_SPACING);
        Intrinsics.checkNotNullExpressionValue(f16, "adapter(...)");
        this.nullableButtonBasedLetterSpacingStyleAdapter = f16;
        h f17 = moshi.f(AttributeStyles.ButtonBasedLineHeightStyle.class, x0.d(), ViewProps.LINE_HEIGHT);
        Intrinsics.checkNotNullExpressionValue(f17, "adapter(...)");
        this.nullableButtonBasedLineHeightStyleAdapter = f17;
        h f18 = moshi.f(AttributeStyles.ButtonBasedTextColorStyle.class, x0.d(), "textColor");
        Intrinsics.checkNotNullExpressionValue(f18, "adapter(...)");
        this.nullableButtonBasedTextColorStyleAdapter = f18;
        h f19 = moshi.f(AttributeStyles.ButtonBasedHeightStyle.class, x0.d(), "height");
        Intrinsics.checkNotNullExpressionValue(f19, "adapter(...)");
        this.nullableButtonBasedHeightStyleAdapter = f19;
        h f20 = moshi.f(AttributeStyles.ButtonBasedWidthStyle.class, x0.d(), "width");
        Intrinsics.checkNotNullExpressionValue(f20, "adapter(...)");
        this.nullableButtonBasedWidthStyleAdapter = f20;
        h f21 = moshi.f(AttributeStyles.ButtonBasedBackgroundColorStyle.class, x0.d(), ViewProps.BACKGROUND_COLOR);
        Intrinsics.checkNotNullExpressionValue(f21, "adapter(...)");
        this.nullableButtonBasedBackgroundColorStyleAdapter = f21;
        h f22 = moshi.f(AttributeStyles.ButtonBasedBorderColorStyle.class, x0.d(), ViewProps.BORDER_COLOR);
        Intrinsics.checkNotNullExpressionValue(f22, "adapter(...)");
        this.nullableButtonBasedBorderColorStyleAdapter = f22;
        h f23 = moshi.f(AttributeStyles.ButtonBasedBorderRadiusStyle.class, x0.d(), "borderRadius");
        Intrinsics.checkNotNullExpressionValue(f23, "adapter(...)");
        this.nullableButtonBasedBorderRadiusStyleAdapter = f23;
        h f24 = moshi.f(AttributeStyles.ButtonBasedBorderWidthStyle.class, x0.d(), ViewProps.BORDER_WIDTH);
        Intrinsics.checkNotNullExpressionValue(f24, "adapter(...)");
        this.nullableButtonBasedBorderWidthStyleAdapter = f24;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(48);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("ButtonSubmitComponentStyle");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public ButtonSubmitComponentStyle fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        AttributeStyles.ButtonBasedPaddingStyle buttonBasedPaddingStyle = null;
        AttributeStyles.ButtonBasedMarginStyle buttonBasedMarginStyle = null;
        AttributeStyles.ButtonBasedJustifyStyle buttonBasedJustifyStyle = null;
        AttributeStyles.ButtonBasedFontFamilyStyle buttonBasedFontFamilyStyle = null;
        AttributeStyles.ButtonBasedFontSizeStyle buttonBasedFontSizeStyle = null;
        AttributeStyles.ButtonBasedFontWeightStyle buttonBasedFontWeightStyle = null;
        AttributeStyles.ButtonBasedLetterSpacingStyle buttonBasedLetterSpacingStyle = null;
        AttributeStyles.ButtonBasedLineHeightStyle buttonBasedLineHeightStyle = null;
        AttributeStyles.ButtonBasedTextColorStyle buttonBasedTextColorStyle = null;
        AttributeStyles.ButtonBasedHeightStyle buttonBasedHeightStyle = null;
        AttributeStyles.ButtonBasedWidthStyle buttonBasedWidthStyle = null;
        AttributeStyles.ButtonBasedBackgroundColorStyle buttonBasedBackgroundColorStyle = null;
        AttributeStyles.ButtonBasedBorderColorStyle buttonBasedBorderColorStyle = null;
        AttributeStyles.ButtonBasedBorderRadiusStyle buttonBasedBorderRadiusStyle = null;
        AttributeStyles.ButtonBasedBorderWidthStyle buttonBasedBorderWidthStyle = null;
        while (reader.hasNext()) {
            switch (reader.t0(this.options)) {
                case -1:
                    reader.F0();
                    reader.P();
                    break;
                case 0:
                    buttonBasedPaddingStyle = (AttributeStyles.ButtonBasedPaddingStyle) this.nullableButtonBasedPaddingStyleAdapter.fromJson(reader);
                    break;
                case 1:
                    buttonBasedMarginStyle = (AttributeStyles.ButtonBasedMarginStyle) this.nullableButtonBasedMarginStyleAdapter.fromJson(reader);
                    break;
                case 2:
                    buttonBasedJustifyStyle = (AttributeStyles.ButtonBasedJustifyStyle) this.nullableButtonBasedJustifyStyleAdapter.fromJson(reader);
                    break;
                case 3:
                    buttonBasedFontFamilyStyle = (AttributeStyles.ButtonBasedFontFamilyStyle) this.nullableButtonBasedFontFamilyStyleAdapter.fromJson(reader);
                    break;
                case 4:
                    buttonBasedFontSizeStyle = (AttributeStyles.ButtonBasedFontSizeStyle) this.nullableButtonBasedFontSizeStyleAdapter.fromJson(reader);
                    break;
                case 5:
                    buttonBasedFontWeightStyle = (AttributeStyles.ButtonBasedFontWeightStyle) this.nullableButtonBasedFontWeightStyleAdapter.fromJson(reader);
                    break;
                case 6:
                    buttonBasedLetterSpacingStyle = (AttributeStyles.ButtonBasedLetterSpacingStyle) this.nullableButtonBasedLetterSpacingStyleAdapter.fromJson(reader);
                    break;
                case 7:
                    buttonBasedLineHeightStyle = (AttributeStyles.ButtonBasedLineHeightStyle) this.nullableButtonBasedLineHeightStyleAdapter.fromJson(reader);
                    break;
                case 8:
                    buttonBasedTextColorStyle = (AttributeStyles.ButtonBasedTextColorStyle) this.nullableButtonBasedTextColorStyleAdapter.fromJson(reader);
                    break;
                case 9:
                    buttonBasedHeightStyle = (AttributeStyles.ButtonBasedHeightStyle) this.nullableButtonBasedHeightStyleAdapter.fromJson(reader);
                    break;
                case 10:
                    buttonBasedWidthStyle = (AttributeStyles.ButtonBasedWidthStyle) this.nullableButtonBasedWidthStyleAdapter.fromJson(reader);
                    break;
                case 11:
                    buttonBasedBackgroundColorStyle = (AttributeStyles.ButtonBasedBackgroundColorStyle) this.nullableButtonBasedBackgroundColorStyleAdapter.fromJson(reader);
                    break;
                case 12:
                    buttonBasedBorderColorStyle = (AttributeStyles.ButtonBasedBorderColorStyle) this.nullableButtonBasedBorderColorStyleAdapter.fromJson(reader);
                    break;
                case 13:
                    buttonBasedBorderRadiusStyle = (AttributeStyles.ButtonBasedBorderRadiusStyle) this.nullableButtonBasedBorderRadiusStyleAdapter.fromJson(reader);
                    break;
                case 14:
                    buttonBasedBorderWidthStyle = (AttributeStyles.ButtonBasedBorderWidthStyle) this.nullableButtonBasedBorderWidthStyleAdapter.fromJson(reader);
                    break;
            }
        }
        reader.y();
        return new ButtonSubmitComponentStyle(buttonBasedPaddingStyle, buttonBasedMarginStyle, buttonBasedJustifyStyle, buttonBasedFontFamilyStyle, buttonBasedFontSizeStyle, buttonBasedFontWeightStyle, buttonBasedLetterSpacingStyle, buttonBasedLineHeightStyle, buttonBasedTextColorStyle, buttonBasedHeightStyle, buttonBasedWidthStyle, buttonBasedBackgroundColorStyle, buttonBasedBorderColorStyle, buttonBasedBorderRadiusStyle, buttonBasedBorderWidthStyle);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, ButtonSubmitComponentStyle buttonSubmitComponentStyle) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (buttonSubmitComponentStyle != null) {
            writer.l();
            writer.t0(ViewProps.PADDING);
            this.nullableButtonBasedPaddingStyleAdapter.toJson(writer, buttonSubmitComponentStyle.getPadding());
            writer.t0(ViewProps.MARGIN);
            this.nullableButtonBasedMarginStyleAdapter.toJson(writer, buttonSubmitComponentStyle.getMargin());
            writer.t0("justify");
            this.nullableButtonBasedJustifyStyleAdapter.toJson(writer, buttonSubmitComponentStyle.getJustify());
            writer.t0(ViewProps.FONT_FAMILY);
            this.nullableButtonBasedFontFamilyStyleAdapter.toJson(writer, buttonSubmitComponentStyle.getFontFamily());
            writer.t0(ViewProps.FONT_SIZE);
            this.nullableButtonBasedFontSizeStyleAdapter.toJson(writer, buttonSubmitComponentStyle.getFontSize());
            writer.t0(ViewProps.FONT_WEIGHT);
            this.nullableButtonBasedFontWeightStyleAdapter.toJson(writer, buttonSubmitComponentStyle.getFontWeight());
            writer.t0(ViewProps.LETTER_SPACING);
            this.nullableButtonBasedLetterSpacingStyleAdapter.toJson(writer, buttonSubmitComponentStyle.getLetterSpacing());
            writer.t0(ViewProps.LINE_HEIGHT);
            this.nullableButtonBasedLineHeightStyleAdapter.toJson(writer, buttonSubmitComponentStyle.getLineHeight());
            writer.t0("textColor");
            this.nullableButtonBasedTextColorStyleAdapter.toJson(writer, buttonSubmitComponentStyle.getTextColor());
            writer.t0("height");
            this.nullableButtonBasedHeightStyleAdapter.toJson(writer, buttonSubmitComponentStyle.getHeight());
            writer.t0("width");
            this.nullableButtonBasedWidthStyleAdapter.toJson(writer, buttonSubmitComponentStyle.getWidth());
            writer.t0(ViewProps.BACKGROUND_COLOR);
            this.nullableButtonBasedBackgroundColorStyleAdapter.toJson(writer, buttonSubmitComponentStyle.getBackgroundColor());
            writer.t0(ViewProps.BORDER_COLOR);
            this.nullableButtonBasedBorderColorStyleAdapter.toJson(writer, buttonSubmitComponentStyle.getBorderColor());
            writer.t0("borderRadius");
            this.nullableButtonBasedBorderRadiusStyleAdapter.toJson(writer, buttonSubmitComponentStyle.getBorderRadius());
            writer.t0(ViewProps.BORDER_WIDTH);
            this.nullableButtonBasedBorderWidthStyleAdapter.toJson(writer, buttonSubmitComponentStyle.getBorderWidth());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
