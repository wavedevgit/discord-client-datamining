package com.withpersona.sdk2.inquiry.network.dto.ui.styling;

import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.AttributeStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0088\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001c\u0010\u001b\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0019R\u001c\u0010\u001d\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001c0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u0019R\u001c\u0010\u001f\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001e0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010\u0019R\u001c\u0010!\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010 0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u0010\u0019R\u001c\u0010#\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\"0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b#\u0010\u0019R\u001c\u0010%\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010$0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b%\u0010\u0019R\u001c\u0010'\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010&0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b'\u0010\u0019R\u001c\u0010)\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010(0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b)\u0010\u0019R\u001c\u0010+\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010*0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b+\u0010\u0019R\u001c\u0010-\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010,0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b-\u0010\u0019R\u001c\u0010/\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010.0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b/\u0010\u0019¨\u00060"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles_UiStepStyleJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$UiStepStyle;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$UiStepStyle;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$UiStepStyle;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$HeaderButtonColorStyle;", "nullableHeaderButtonColorStyleAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$StepBackgroundColorStyle;", "nullableStepBackgroundColorStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$StepBackgroundImageStyle;", "nullableStepBackgroundImageStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$UiStepTitleComponentStyle;", "nullableUiStepTitleComponentStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$UiStepTextBasedComponentStyle;", "nullableUiStepTextBasedComponentStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$StepPrimaryButtonComponentStyle;", "nullableStepPrimaryButtonComponentStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$StepSecondaryButtonComponentStyle;", "nullableStepSecondaryButtonComponentStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$UiStepStrokeColor;", "nullableUiStepStrokeColorAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$UiStepFillColor;", "nullableUiStepFillColorAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$UiStepAlignment;", "nullableUiStepAlignmentAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$StepPaddingStyle;", "nullableStepPaddingStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$StepBorderRadiusStyle;", "nullableStepBorderRadiusStyleAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class StepStyles_UiStepStyleJsonAdapter extends h {
    @NotNull
    private final h nullableHeaderButtonColorStyleAdapter;
    @NotNull
    private final h nullableStepBackgroundColorStyleAdapter;
    @NotNull
    private final h nullableStepBackgroundImageStyleAdapter;
    @NotNull
    private final h nullableStepBorderRadiusStyleAdapter;
    @NotNull
    private final h nullableStepPaddingStyleAdapter;
    @NotNull
    private final h nullableStepPrimaryButtonComponentStyleAdapter;
    @NotNull
    private final h nullableStepSecondaryButtonComponentStyleAdapter;
    @NotNull
    private final h nullableUiStepAlignmentAdapter;
    @NotNull
    private final h nullableUiStepFillColorAdapter;
    @NotNull
    private final h nullableUiStepStrokeColorAdapter;
    @NotNull
    private final h nullableUiStepTextBasedComponentStyleAdapter;
    @NotNull
    private final h nullableUiStepTitleComponentStyleAdapter;
    @NotNull
    private final m.b options;

    public StepStyles_UiStepStyleJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("textColor", ViewProps.BACKGROUND_COLOR, "backgroundImage", "titleStyle", "textStyle", "buttonPrimaryStyle", "buttonSecondaryStyle", "strokeColor", "fillColor", "alignment", ViewProps.PADDING, "borderRadius");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(AttributeStyles.HeaderButtonColorStyle.class, x0.d(), "headerButtonColor");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableHeaderButtonColorStyleAdapter = f10;
        h f11 = moshi.f(StepStyles.StepBackgroundColorStyle.class, x0.d(), ViewProps.BACKGROUND_COLOR);
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableStepBackgroundColorStyleAdapter = f11;
        h f12 = moshi.f(StepStyles.StepBackgroundImageStyle.class, x0.d(), "backgroundImage");
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.nullableStepBackgroundImageStyleAdapter = f12;
        h f13 = moshi.f(StepStyles.UiStepTitleComponentStyle.class, x0.d(), "titleStyle");
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.nullableUiStepTitleComponentStyleAdapter = f13;
        h f14 = moshi.f(StepStyles.UiStepTextBasedComponentStyle.class, x0.d(), "textStyle");
        Intrinsics.checkNotNullExpressionValue(f14, "adapter(...)");
        this.nullableUiStepTextBasedComponentStyleAdapter = f14;
        h f15 = moshi.f(StepStyles.StepPrimaryButtonComponentStyle.class, x0.d(), "buttonPrimaryStyle");
        Intrinsics.checkNotNullExpressionValue(f15, "adapter(...)");
        this.nullableStepPrimaryButtonComponentStyleAdapter = f15;
        h f16 = moshi.f(StepStyles.StepSecondaryButtonComponentStyle.class, x0.d(), "buttonSecondaryStyle");
        Intrinsics.checkNotNullExpressionValue(f16, "adapter(...)");
        this.nullableStepSecondaryButtonComponentStyleAdapter = f16;
        h f17 = moshi.f(StepStyles.UiStepStrokeColor.class, x0.d(), "strokeColor");
        Intrinsics.checkNotNullExpressionValue(f17, "adapter(...)");
        this.nullableUiStepStrokeColorAdapter = f17;
        h f18 = moshi.f(StepStyles.UiStepFillColor.class, x0.d(), "fillColor");
        Intrinsics.checkNotNullExpressionValue(f18, "adapter(...)");
        this.nullableUiStepFillColorAdapter = f18;
        h f19 = moshi.f(StepStyles.UiStepAlignment.class, x0.d(), "alignment");
        Intrinsics.checkNotNullExpressionValue(f19, "adapter(...)");
        this.nullableUiStepAlignmentAdapter = f19;
        h f20 = moshi.f(StepStyles.StepPaddingStyle.class, x0.d(), ViewProps.PADDING);
        Intrinsics.checkNotNullExpressionValue(f20, "adapter(...)");
        this.nullableStepPaddingStyleAdapter = f20;
        h f21 = moshi.f(StepStyles.StepBorderRadiusStyle.class, x0.d(), "borderRadius");
        Intrinsics.checkNotNullExpressionValue(f21, "adapter(...)");
        this.nullableStepBorderRadiusStyleAdapter = f21;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(44);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("StepStyles.UiStepStyle");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public StepStyles.UiStepStyle fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        AttributeStyles.HeaderButtonColorStyle headerButtonColorStyle = null;
        StepStyles.StepBackgroundColorStyle stepBackgroundColorStyle = null;
        StepStyles.StepBackgroundImageStyle stepBackgroundImageStyle = null;
        StepStyles.UiStepTitleComponentStyle uiStepTitleComponentStyle = null;
        StepStyles.UiStepTextBasedComponentStyle uiStepTextBasedComponentStyle = null;
        StepStyles.StepPrimaryButtonComponentStyle stepPrimaryButtonComponentStyle = null;
        StepStyles.StepSecondaryButtonComponentStyle stepSecondaryButtonComponentStyle = null;
        StepStyles.UiStepStrokeColor uiStepStrokeColor = null;
        StepStyles.UiStepFillColor uiStepFillColor = null;
        StepStyles.UiStepAlignment uiStepAlignment = null;
        StepStyles.StepPaddingStyle stepPaddingStyle = null;
        StepStyles.StepBorderRadiusStyle stepBorderRadiusStyle = null;
        while (reader.hasNext()) {
            switch (reader.A0(this.options)) {
                case -1:
                    reader.E0();
                    reader.P();
                    break;
                case 0:
                    headerButtonColorStyle = (AttributeStyles.HeaderButtonColorStyle) this.nullableHeaderButtonColorStyleAdapter.fromJson(reader);
                    break;
                case 1:
                    stepBackgroundColorStyle = (StepStyles.StepBackgroundColorStyle) this.nullableStepBackgroundColorStyleAdapter.fromJson(reader);
                    break;
                case 2:
                    stepBackgroundImageStyle = (StepStyles.StepBackgroundImageStyle) this.nullableStepBackgroundImageStyleAdapter.fromJson(reader);
                    break;
                case 3:
                    uiStepTitleComponentStyle = (StepStyles.UiStepTitleComponentStyle) this.nullableUiStepTitleComponentStyleAdapter.fromJson(reader);
                    break;
                case 4:
                    uiStepTextBasedComponentStyle = (StepStyles.UiStepTextBasedComponentStyle) this.nullableUiStepTextBasedComponentStyleAdapter.fromJson(reader);
                    break;
                case 5:
                    stepPrimaryButtonComponentStyle = (StepStyles.StepPrimaryButtonComponentStyle) this.nullableStepPrimaryButtonComponentStyleAdapter.fromJson(reader);
                    break;
                case 6:
                    stepSecondaryButtonComponentStyle = (StepStyles.StepSecondaryButtonComponentStyle) this.nullableStepSecondaryButtonComponentStyleAdapter.fromJson(reader);
                    break;
                case 7:
                    uiStepStrokeColor = (StepStyles.UiStepStrokeColor) this.nullableUiStepStrokeColorAdapter.fromJson(reader);
                    break;
                case 8:
                    uiStepFillColor = (StepStyles.UiStepFillColor) this.nullableUiStepFillColorAdapter.fromJson(reader);
                    break;
                case 9:
                    uiStepAlignment = (StepStyles.UiStepAlignment) this.nullableUiStepAlignmentAdapter.fromJson(reader);
                    break;
                case 10:
                    stepPaddingStyle = (StepStyles.StepPaddingStyle) this.nullableStepPaddingStyleAdapter.fromJson(reader);
                    break;
                case 11:
                    stepBorderRadiusStyle = (StepStyles.StepBorderRadiusStyle) this.nullableStepBorderRadiusStyleAdapter.fromJson(reader);
                    break;
            }
        }
        reader.y();
        return new StepStyles.UiStepStyle(headerButtonColorStyle, stepBackgroundColorStyle, stepBackgroundImageStyle, uiStepTitleComponentStyle, uiStepTextBasedComponentStyle, stepPrimaryButtonComponentStyle, stepSecondaryButtonComponentStyle, uiStepStrokeColor, uiStepFillColor, uiStepAlignment, stepPaddingStyle, stepBorderRadiusStyle);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, StepStyles.UiStepStyle uiStepStyle) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (uiStepStyle != null) {
            writer.l();
            writer.A0("textColor");
            this.nullableHeaderButtonColorStyleAdapter.toJson(writer, uiStepStyle.getHeaderButtonColor());
            writer.A0(ViewProps.BACKGROUND_COLOR);
            this.nullableStepBackgroundColorStyleAdapter.toJson(writer, uiStepStyle.getBackgroundColor());
            writer.A0("backgroundImage");
            this.nullableStepBackgroundImageStyleAdapter.toJson(writer, uiStepStyle.getBackgroundImage());
            writer.A0("titleStyle");
            this.nullableUiStepTitleComponentStyleAdapter.toJson(writer, uiStepStyle.getTitleStyle());
            writer.A0("textStyle");
            this.nullableUiStepTextBasedComponentStyleAdapter.toJson(writer, uiStepStyle.getTextStyle());
            writer.A0("buttonPrimaryStyle");
            this.nullableStepPrimaryButtonComponentStyleAdapter.toJson(writer, uiStepStyle.getButtonPrimaryStyle());
            writer.A0("buttonSecondaryStyle");
            this.nullableStepSecondaryButtonComponentStyleAdapter.toJson(writer, uiStepStyle.getButtonSecondaryStyle());
            writer.A0("strokeColor");
            this.nullableUiStepStrokeColorAdapter.toJson(writer, uiStepStyle.getStrokeColor());
            writer.A0("fillColor");
            this.nullableUiStepFillColorAdapter.toJson(writer, uiStepStyle.getFillColor());
            writer.A0("alignment");
            this.nullableUiStepAlignmentAdapter.toJson(writer, uiStepStyle.getAlignment());
            writer.A0(ViewProps.PADDING);
            this.nullableStepPaddingStyleAdapter.toJson(writer, uiStepStyle.getPadding());
            writer.A0("borderRadius");
            this.nullableStepBorderRadiusStyleAdapter.toJson(writer, uiStepStyle.getBorderRadius());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
