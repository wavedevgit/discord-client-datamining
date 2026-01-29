package com.withpersona.sdk2.inquiry.network.dto.ui.components;

import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.InputCheckboxGroup;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.AttributeStyles;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000j\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001c\u0010\u001b\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0019R\u001c\u0010\u001d\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001c0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u0019R\u001c\u0010\u001f\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001e0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010\u0019R\u001c\u0010!\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010 0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u0010\u0019R\u001c\u0010#\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\"0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b#\u0010\u0019R\u001c\u0010%\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010$0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b%\u0010\u0019¨\u0006&"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputCheckboxGroup_InputCheckboxComponentStyleJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputCheckboxGroup$InputCheckboxComponentStyle;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputCheckboxGroup$InputCheckboxComponentStyle;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/InputCheckboxGroup$InputCheckboxComponentStyle;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputCheckboxFontFamilyStyle;", "nullableInputCheckboxFontFamilyStyleAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputCheckboxFontSizeStyle;", "nullableInputCheckboxFontSizeStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputCheckboxFontWeightStyle;", "nullableInputCheckboxFontWeightStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputCheckboxLetterSpacingStyle;", "nullableInputCheckboxLetterSpacingStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputCheckboxLineHeightStyle;", "nullableInputCheckboxLineHeightStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputCheckboxTextColorStyle;", "nullableInputCheckboxTextColorStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$TextBasedTextColorStyle;", "nullableTextBasedTextColorStyleAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InputCheckboxGroup_InputCheckboxComponentStyleJsonAdapter extends h {
    @NotNull
    private final h nullableInputCheckboxFontFamilyStyleAdapter;
    @NotNull
    private final h nullableInputCheckboxFontSizeStyleAdapter;
    @NotNull
    private final h nullableInputCheckboxFontWeightStyleAdapter;
    @NotNull
    private final h nullableInputCheckboxLetterSpacingStyleAdapter;
    @NotNull
    private final h nullableInputCheckboxLineHeightStyleAdapter;
    @NotNull
    private final h nullableInputCheckboxTextColorStyleAdapter;
    @NotNull
    private final h nullableTextBasedTextColorStyleAdapter;
    @NotNull
    private final m.b options;

    public InputCheckboxGroup_InputCheckboxComponentStyleJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a(ViewProps.FONT_FAMILY, ViewProps.FONT_SIZE, ViewProps.FONT_WEIGHT, ViewProps.LETTER_SPACING, ViewProps.LINE_HEIGHT, "textColor", "textColorHighlight");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(AttributeStyles.InputCheckboxFontFamilyStyle.class, x0.d(), ViewProps.FONT_FAMILY);
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableInputCheckboxFontFamilyStyleAdapter = f10;
        h f11 = moshi.f(AttributeStyles.InputCheckboxFontSizeStyle.class, x0.d(), ViewProps.FONT_SIZE);
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableInputCheckboxFontSizeStyleAdapter = f11;
        h f12 = moshi.f(AttributeStyles.InputCheckboxFontWeightStyle.class, x0.d(), ViewProps.FONT_WEIGHT);
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.nullableInputCheckboxFontWeightStyleAdapter = f12;
        h f13 = moshi.f(AttributeStyles.InputCheckboxLetterSpacingStyle.class, x0.d(), ViewProps.LETTER_SPACING);
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.nullableInputCheckboxLetterSpacingStyleAdapter = f13;
        h f14 = moshi.f(AttributeStyles.InputCheckboxLineHeightStyle.class, x0.d(), ViewProps.LINE_HEIGHT);
        Intrinsics.checkNotNullExpressionValue(f14, "adapter(...)");
        this.nullableInputCheckboxLineHeightStyleAdapter = f14;
        h f15 = moshi.f(AttributeStyles.InputCheckboxTextColorStyle.class, x0.d(), "textColor");
        Intrinsics.checkNotNullExpressionValue(f15, "adapter(...)");
        this.nullableInputCheckboxTextColorStyleAdapter = f15;
        h f16 = moshi.f(AttributeStyles.TextBasedTextColorStyle.class, x0.d(), "textColorHighlight");
        Intrinsics.checkNotNullExpressionValue(f16, "adapter(...)");
        this.nullableTextBasedTextColorStyleAdapter = f16;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(68);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("InputCheckboxGroup.InputCheckboxComponentStyle");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public InputCheckboxGroup.InputCheckboxComponentStyle fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        AttributeStyles.InputCheckboxFontFamilyStyle inputCheckboxFontFamilyStyle = null;
        AttributeStyles.InputCheckboxFontSizeStyle inputCheckboxFontSizeStyle = null;
        AttributeStyles.InputCheckboxFontWeightStyle inputCheckboxFontWeightStyle = null;
        AttributeStyles.InputCheckboxLetterSpacingStyle inputCheckboxLetterSpacingStyle = null;
        AttributeStyles.InputCheckboxLineHeightStyle inputCheckboxLineHeightStyle = null;
        AttributeStyles.InputCheckboxTextColorStyle inputCheckboxTextColorStyle = null;
        AttributeStyles.TextBasedTextColorStyle textBasedTextColorStyle = null;
        while (reader.hasNext()) {
            switch (reader.A0(this.options)) {
                case -1:
                    reader.E0();
                    reader.P();
                    break;
                case 0:
                    inputCheckboxFontFamilyStyle = (AttributeStyles.InputCheckboxFontFamilyStyle) this.nullableInputCheckboxFontFamilyStyleAdapter.fromJson(reader);
                    break;
                case 1:
                    inputCheckboxFontSizeStyle = (AttributeStyles.InputCheckboxFontSizeStyle) this.nullableInputCheckboxFontSizeStyleAdapter.fromJson(reader);
                    break;
                case 2:
                    inputCheckboxFontWeightStyle = (AttributeStyles.InputCheckboxFontWeightStyle) this.nullableInputCheckboxFontWeightStyleAdapter.fromJson(reader);
                    break;
                case 3:
                    inputCheckboxLetterSpacingStyle = (AttributeStyles.InputCheckboxLetterSpacingStyle) this.nullableInputCheckboxLetterSpacingStyleAdapter.fromJson(reader);
                    break;
                case 4:
                    inputCheckboxLineHeightStyle = (AttributeStyles.InputCheckboxLineHeightStyle) this.nullableInputCheckboxLineHeightStyleAdapter.fromJson(reader);
                    break;
                case 5:
                    inputCheckboxTextColorStyle = (AttributeStyles.InputCheckboxTextColorStyle) this.nullableInputCheckboxTextColorStyleAdapter.fromJson(reader);
                    break;
                case 6:
                    textBasedTextColorStyle = (AttributeStyles.TextBasedTextColorStyle) this.nullableTextBasedTextColorStyleAdapter.fromJson(reader);
                    break;
            }
        }
        reader.y();
        return new InputCheckboxGroup.InputCheckboxComponentStyle(inputCheckboxFontFamilyStyle, inputCheckboxFontSizeStyle, inputCheckboxFontWeightStyle, inputCheckboxLetterSpacingStyle, inputCheckboxLineHeightStyle, inputCheckboxTextColorStyle, textBasedTextColorStyle);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, InputCheckboxGroup.InputCheckboxComponentStyle inputCheckboxComponentStyle) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (inputCheckboxComponentStyle != null) {
            writer.l();
            writer.A0(ViewProps.FONT_FAMILY);
            this.nullableInputCheckboxFontFamilyStyleAdapter.toJson(writer, inputCheckboxComponentStyle.getFontFamily());
            writer.A0(ViewProps.FONT_SIZE);
            this.nullableInputCheckboxFontSizeStyleAdapter.toJson(writer, inputCheckboxComponentStyle.getFontSize());
            writer.A0(ViewProps.FONT_WEIGHT);
            this.nullableInputCheckboxFontWeightStyleAdapter.toJson(writer, inputCheckboxComponentStyle.getFontWeight());
            writer.A0(ViewProps.LETTER_SPACING);
            this.nullableInputCheckboxLetterSpacingStyleAdapter.toJson(writer, inputCheckboxComponentStyle.getLetterSpacing());
            writer.A0(ViewProps.LINE_HEIGHT);
            this.nullableInputCheckboxLineHeightStyleAdapter.toJson(writer, inputCheckboxComponentStyle.getLineHeight());
            writer.A0("textColor");
            this.nullableInputCheckboxTextColorStyleAdapter.toJson(writer, inputCheckboxComponentStyle.getTextColor());
            writer.A0("textColorHighlight");
            this.nullableTextBasedTextColorStyleAdapter.toJson(writer, inputCheckboxComponentStyle.getTextColorHighlight());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
