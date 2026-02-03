package com.withpersona.sdk2.inquiry.network.dto.ui.components;

import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputRadioGroup;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.AttributeStyles;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000p\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001c\u0010\u001b\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0019R\u001c\u0010\u001d\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001c0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u0019R\u001c\u0010\u001f\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001e0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010\u0019R\u001c\u0010!\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010 0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u0010\u0019R\u001c\u0010#\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\"0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b#\u0010\u0019R\u001c\u0010%\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010$0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b%\u0010\u0019R\u001c\u0010'\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010&0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b'\u0010\u0019¨\u0006("}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputRadioGroup_InputRadioGroupComponentStyleJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputRadioGroup$InputRadioGroupComponentStyle;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputRadioGroup$InputRadioGroupComponentStyle;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputRadioGroup$InputRadioGroupComponentStyle;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$TextBasedMarginStyle;", "nullableTextBasedMarginStyleAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputRadioGroupFontFamilyStyle;", "nullableInputRadioGroupFontFamilyStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputRadioGroupFontSizeStyle;", "nullableInputRadioGroupFontSizeStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputRadioGroupFontWeightStyle;", "nullableInputRadioGroupFontWeightStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputRadioGroupLetterSpacingStyle;", "nullableInputRadioGroupLetterSpacingStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputRadioGroupLineHeightStyle;", "nullableInputRadioGroupLineHeightStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputRadioGroupTextColorStyle;", "nullableInputRadioGroupTextColorStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$TextBasedTextColorStyle;", "nullableTextBasedTextColorStyleAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InputRadioGroup_InputRadioGroupComponentStyleJsonAdapter extends h {
    @NotNull
    private final h nullableInputRadioGroupFontFamilyStyleAdapter;
    @NotNull
    private final h nullableInputRadioGroupFontSizeStyleAdapter;
    @NotNull
    private final h nullableInputRadioGroupFontWeightStyleAdapter;
    @NotNull
    private final h nullableInputRadioGroupLetterSpacingStyleAdapter;
    @NotNull
    private final h nullableInputRadioGroupLineHeightStyleAdapter;
    @NotNull
    private final h nullableInputRadioGroupTextColorStyleAdapter;
    @NotNull
    private final h nullableTextBasedMarginStyleAdapter;
    @NotNull
    private final h nullableTextBasedTextColorStyleAdapter;
    @NotNull
    private final m.b options;

    public InputRadioGroup_InputRadioGroupComponentStyleJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a(ViewProps.MARGIN, ViewProps.FONT_FAMILY, ViewProps.FONT_SIZE, ViewProps.FONT_WEIGHT, ViewProps.LETTER_SPACING, ViewProps.LINE_HEIGHT, "textColor", "textColorHighlight");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(AttributeStyles.TextBasedMarginStyle.class, x0.d(), ViewProps.MARGIN);
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableTextBasedMarginStyleAdapter = f10;
        h f11 = moshi.f(AttributeStyles.InputRadioGroupFontFamilyStyle.class, x0.d(), ViewProps.FONT_FAMILY);
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableInputRadioGroupFontFamilyStyleAdapter = f11;
        h f12 = moshi.f(AttributeStyles.InputRadioGroupFontSizeStyle.class, x0.d(), ViewProps.FONT_SIZE);
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.nullableInputRadioGroupFontSizeStyleAdapter = f12;
        h f13 = moshi.f(AttributeStyles.InputRadioGroupFontWeightStyle.class, x0.d(), ViewProps.FONT_WEIGHT);
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.nullableInputRadioGroupFontWeightStyleAdapter = f13;
        h f14 = moshi.f(AttributeStyles.InputRadioGroupLetterSpacingStyle.class, x0.d(), ViewProps.LETTER_SPACING);
        Intrinsics.checkNotNullExpressionValue(f14, "adapter(...)");
        this.nullableInputRadioGroupLetterSpacingStyleAdapter = f14;
        h f15 = moshi.f(AttributeStyles.InputRadioGroupLineHeightStyle.class, x0.d(), ViewProps.LINE_HEIGHT);
        Intrinsics.checkNotNullExpressionValue(f15, "adapter(...)");
        this.nullableInputRadioGroupLineHeightStyleAdapter = f15;
        h f16 = moshi.f(AttributeStyles.InputRadioGroupTextColorStyle.class, x0.d(), "textColor");
        Intrinsics.checkNotNullExpressionValue(f16, "adapter(...)");
        this.nullableInputRadioGroupTextColorStyleAdapter = f16;
        h f17 = moshi.f(AttributeStyles.TextBasedTextColorStyle.class, x0.d(), "textColorHighlight");
        Intrinsics.checkNotNullExpressionValue(f17, "adapter(...)");
        this.nullableTextBasedTextColorStyleAdapter = f17;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(67);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("InputRadioGroup.InputRadioGroupComponentStyle");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public InputRadioGroup.InputRadioGroupComponentStyle fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        AttributeStyles.TextBasedMarginStyle textBasedMarginStyle = null;
        AttributeStyles.InputRadioGroupFontFamilyStyle inputRadioGroupFontFamilyStyle = null;
        AttributeStyles.InputRadioGroupFontSizeStyle inputRadioGroupFontSizeStyle = null;
        AttributeStyles.InputRadioGroupFontWeightStyle inputRadioGroupFontWeightStyle = null;
        AttributeStyles.InputRadioGroupLetterSpacingStyle inputRadioGroupLetterSpacingStyle = null;
        AttributeStyles.InputRadioGroupLineHeightStyle inputRadioGroupLineHeightStyle = null;
        AttributeStyles.InputRadioGroupTextColorStyle inputRadioGroupTextColorStyle = null;
        AttributeStyles.TextBasedTextColorStyle textBasedTextColorStyle = null;
        while (reader.hasNext()) {
            switch (reader.t0(this.options)) {
                case -1:
                    reader.F0();
                    reader.P();
                    break;
                case 0:
                    textBasedMarginStyle = (AttributeStyles.TextBasedMarginStyle) this.nullableTextBasedMarginStyleAdapter.fromJson(reader);
                    break;
                case 1:
                    inputRadioGroupFontFamilyStyle = (AttributeStyles.InputRadioGroupFontFamilyStyle) this.nullableInputRadioGroupFontFamilyStyleAdapter.fromJson(reader);
                    break;
                case 2:
                    inputRadioGroupFontSizeStyle = (AttributeStyles.InputRadioGroupFontSizeStyle) this.nullableInputRadioGroupFontSizeStyleAdapter.fromJson(reader);
                    break;
                case 3:
                    inputRadioGroupFontWeightStyle = (AttributeStyles.InputRadioGroupFontWeightStyle) this.nullableInputRadioGroupFontWeightStyleAdapter.fromJson(reader);
                    break;
                case 4:
                    inputRadioGroupLetterSpacingStyle = (AttributeStyles.InputRadioGroupLetterSpacingStyle) this.nullableInputRadioGroupLetterSpacingStyleAdapter.fromJson(reader);
                    break;
                case 5:
                    inputRadioGroupLineHeightStyle = (AttributeStyles.InputRadioGroupLineHeightStyle) this.nullableInputRadioGroupLineHeightStyleAdapter.fromJson(reader);
                    break;
                case 6:
                    inputRadioGroupTextColorStyle = (AttributeStyles.InputRadioGroupTextColorStyle) this.nullableInputRadioGroupTextColorStyleAdapter.fromJson(reader);
                    break;
                case 7:
                    textBasedTextColorStyle = (AttributeStyles.TextBasedTextColorStyle) this.nullableTextBasedTextColorStyleAdapter.fromJson(reader);
                    break;
            }
        }
        reader.y();
        return new InputRadioGroup.InputRadioGroupComponentStyle(textBasedMarginStyle, inputRadioGroupFontFamilyStyle, inputRadioGroupFontSizeStyle, inputRadioGroupFontWeightStyle, inputRadioGroupLetterSpacingStyle, inputRadioGroupLineHeightStyle, inputRadioGroupTextColorStyle, textBasedTextColorStyle);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, InputRadioGroup.InputRadioGroupComponentStyle inputRadioGroupComponentStyle) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (inputRadioGroupComponentStyle != null) {
            writer.l();
            writer.t0(ViewProps.MARGIN);
            this.nullableTextBasedMarginStyleAdapter.toJson(writer, inputRadioGroupComponentStyle.getMargin());
            writer.t0(ViewProps.FONT_FAMILY);
            this.nullableInputRadioGroupFontFamilyStyleAdapter.toJson(writer, inputRadioGroupComponentStyle.getFontFamily());
            writer.t0(ViewProps.FONT_SIZE);
            this.nullableInputRadioGroupFontSizeStyleAdapter.toJson(writer, inputRadioGroupComponentStyle.getFontSize());
            writer.t0(ViewProps.FONT_WEIGHT);
            this.nullableInputRadioGroupFontWeightStyleAdapter.toJson(writer, inputRadioGroupComponentStyle.getFontWeight());
            writer.t0(ViewProps.LETTER_SPACING);
            this.nullableInputRadioGroupLetterSpacingStyleAdapter.toJson(writer, inputRadioGroupComponentStyle.getLetterSpacing());
            writer.t0(ViewProps.LINE_HEIGHT);
            this.nullableInputRadioGroupLineHeightStyleAdapter.toJson(writer, inputRadioGroupComponentStyle.getLineHeight());
            writer.t0("textColor");
            this.nullableInputRadioGroupTextColorStyleAdapter.toJson(writer, inputRadioGroupComponentStyle.getTextColor());
            writer.t0("textColorHighlight");
            this.nullableTextBasedTextColorStyleAdapter.toJson(writer, inputRadioGroupComponentStyle.getTextColorHighlight());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
