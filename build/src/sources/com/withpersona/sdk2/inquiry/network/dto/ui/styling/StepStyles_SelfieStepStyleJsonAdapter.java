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
@Metadata(d1 = {"\u0000 \u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001c\u0010\u001b\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0019R\u001c\u0010\u001d\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001c0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u0019R\u001c\u0010\u001f\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001e0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010\u0019R\u001c\u0010!\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010 0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u0010\u0019R\u001c\u0010#\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\"0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b#\u0010\u0019R\u001c\u0010%\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010$0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b%\u0010\u0019R\u001c\u0010'\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010&0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b'\u0010\u0019R\u001c\u0010)\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010(0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b)\u0010\u0019R\u001c\u0010+\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010*0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b+\u0010\u0019R\u001c\u0010-\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010,0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b-\u0010\u0019R\u001c\u0010/\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010.0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b/\u0010\u0019R\u001c\u00101\u001a\n\u0012\u0006\u0012\u0004\u0018\u0001000\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b1\u0010\u0019R\u001c\u00103\u001a\n\u0012\u0006\u0012\u0004\u0018\u0001020\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b3\u0010\u0019R\u001c\u00105\u001a\n\u0012\u0006\u0012\u0004\u0018\u0001040\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b5\u0010\u0019R\u001c\u00107\u001a\n\u0012\u0006\u0012\u0004\u0018\u0001060\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b7\u0010\u0019¨\u00068"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles_SelfieStepStyleJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$SelfieStepStyle;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$SelfieStepStyle;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$SelfieStepStyle;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$HeaderButtonColorStyle;", "nullableHeaderButtonColorStyleAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$StepBackgroundColorStyle;", "nullableStepBackgroundColorStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$StepBackgroundImageStyle;", "nullableStepBackgroundImageStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$SelfieStepTitleComponentStyle;", "nullableSelfieStepTitleComponentStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$SelfieStepTextBasedComponentStyle;", "nullableSelfieStepTextBasedComponentStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$StepPrimaryButtonComponentStyle;", "nullableStepPrimaryButtonComponentStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$StepSecondaryButtonComponentStyle;", "nullableStepSecondaryButtonComponentStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$StepTextBasedComponentStyle;", "nullableStepTextBasedComponentStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$SelfieStepStrokeColor;", "nullableSelfieStepStrokeColorAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$SelfieStepBorderColor;", "nullableSelfieStepBorderColorAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$SelfieStepBorderWidth;", "nullableSelfieStepBorderWidthAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$SelfieStepFillColor;", "nullableSelfieStepFillColorAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$SelfieStepImageLocalStyle;", "nullableSelfieStepImageLocalStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$StepPaddingStyle;", "nullableStepPaddingStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$StepBorderRadiusStyle;", "nullableStepBorderRadiusStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$CombinedStepAlignment;", "nullableCombinedStepAlignmentAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class StepStyles_SelfieStepStyleJsonAdapter extends h {
    @NotNull
    private final h nullableCombinedStepAlignmentAdapter;
    @NotNull
    private final h nullableHeaderButtonColorStyleAdapter;
    @NotNull
    private final h nullableSelfieStepBorderColorAdapter;
    @NotNull
    private final h nullableSelfieStepBorderWidthAdapter;
    @NotNull
    private final h nullableSelfieStepFillColorAdapter;
    @NotNull
    private final h nullableSelfieStepImageLocalStyleAdapter;
    @NotNull
    private final h nullableSelfieStepStrokeColorAdapter;
    @NotNull
    private final h nullableSelfieStepTextBasedComponentStyleAdapter;
    @NotNull
    private final h nullableSelfieStepTitleComponentStyleAdapter;
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
    private final h nullableStepTextBasedComponentStyleAdapter;
    @NotNull
    private final m.b options;

    public StepStyles_SelfieStepStyleJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("textColor", ViewProps.BACKGROUND_COLOR, "backgroundImage", "titleStyle", "textStyle", "buttonPrimaryStyle", "buttonSecondaryStyle", "disclaimerStyle", "strokeColor", ViewProps.BORDER_COLOR, ViewProps.BORDER_WIDTH, "fillColor", "imageLocalStyle", ViewProps.PADDING, "borderRadius", "alignment");
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
        h f13 = moshi.f(StepStyles.SelfieStepTitleComponentStyle.class, x0.d(), "titleStyle");
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.nullableSelfieStepTitleComponentStyleAdapter = f13;
        h f14 = moshi.f(StepStyles.SelfieStepTextBasedComponentStyle.class, x0.d(), "textStyle");
        Intrinsics.checkNotNullExpressionValue(f14, "adapter(...)");
        this.nullableSelfieStepTextBasedComponentStyleAdapter = f14;
        h f15 = moshi.f(StepStyles.StepPrimaryButtonComponentStyle.class, x0.d(), "buttonPrimaryStyle");
        Intrinsics.checkNotNullExpressionValue(f15, "adapter(...)");
        this.nullableStepPrimaryButtonComponentStyleAdapter = f15;
        h f16 = moshi.f(StepStyles.StepSecondaryButtonComponentStyle.class, x0.d(), "buttonSecondaryStyle");
        Intrinsics.checkNotNullExpressionValue(f16, "adapter(...)");
        this.nullableStepSecondaryButtonComponentStyleAdapter = f16;
        h f17 = moshi.f(StepStyles.StepTextBasedComponentStyle.class, x0.d(), "disclaimerStyle");
        Intrinsics.checkNotNullExpressionValue(f17, "adapter(...)");
        this.nullableStepTextBasedComponentStyleAdapter = f17;
        h f18 = moshi.f(StepStyles.SelfieStepStrokeColor.class, x0.d(), "strokeColor");
        Intrinsics.checkNotNullExpressionValue(f18, "adapter(...)");
        this.nullableSelfieStepStrokeColorAdapter = f18;
        h f19 = moshi.f(StepStyles.SelfieStepBorderColor.class, x0.d(), ViewProps.BORDER_COLOR);
        Intrinsics.checkNotNullExpressionValue(f19, "adapter(...)");
        this.nullableSelfieStepBorderColorAdapter = f19;
        h f20 = moshi.f(StepStyles.SelfieStepBorderWidth.class, x0.d(), ViewProps.BORDER_WIDTH);
        Intrinsics.checkNotNullExpressionValue(f20, "adapter(...)");
        this.nullableSelfieStepBorderWidthAdapter = f20;
        h f21 = moshi.f(StepStyles.SelfieStepFillColor.class, x0.d(), "fillColor");
        Intrinsics.checkNotNullExpressionValue(f21, "adapter(...)");
        this.nullableSelfieStepFillColorAdapter = f21;
        h f22 = moshi.f(StepStyles.SelfieStepImageLocalStyle.class, x0.d(), "imageLocalStyle");
        Intrinsics.checkNotNullExpressionValue(f22, "adapter(...)");
        this.nullableSelfieStepImageLocalStyleAdapter = f22;
        h f23 = moshi.f(StepStyles.StepPaddingStyle.class, x0.d(), ViewProps.PADDING);
        Intrinsics.checkNotNullExpressionValue(f23, "adapter(...)");
        this.nullableStepPaddingStyleAdapter = f23;
        h f24 = moshi.f(StepStyles.StepBorderRadiusStyle.class, x0.d(), "borderRadius");
        Intrinsics.checkNotNullExpressionValue(f24, "adapter(...)");
        this.nullableStepBorderRadiusStyleAdapter = f24;
        h f25 = moshi.f(StepStyles.CombinedStepAlignment.class, x0.d(), "alignment");
        Intrinsics.checkNotNullExpressionValue(f25, "adapter(...)");
        this.nullableCombinedStepAlignmentAdapter = f25;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(48);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("StepStyles.SelfieStepStyle");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public StepStyles.SelfieStepStyle fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        AttributeStyles.HeaderButtonColorStyle headerButtonColorStyle = null;
        StepStyles.StepBackgroundColorStyle stepBackgroundColorStyle = null;
        StepStyles.StepBackgroundImageStyle stepBackgroundImageStyle = null;
        StepStyles.SelfieStepTitleComponentStyle selfieStepTitleComponentStyle = null;
        StepStyles.SelfieStepTextBasedComponentStyle selfieStepTextBasedComponentStyle = null;
        StepStyles.StepPrimaryButtonComponentStyle stepPrimaryButtonComponentStyle = null;
        StepStyles.StepSecondaryButtonComponentStyle stepSecondaryButtonComponentStyle = null;
        StepStyles.StepTextBasedComponentStyle stepTextBasedComponentStyle = null;
        StepStyles.SelfieStepStrokeColor selfieStepStrokeColor = null;
        StepStyles.SelfieStepBorderColor selfieStepBorderColor = null;
        StepStyles.SelfieStepBorderWidth selfieStepBorderWidth = null;
        StepStyles.SelfieStepFillColor selfieStepFillColor = null;
        StepStyles.SelfieStepImageLocalStyle selfieStepImageLocalStyle = null;
        StepStyles.StepPaddingStyle stepPaddingStyle = null;
        StepStyles.StepBorderRadiusStyle stepBorderRadiusStyle = null;
        StepStyles.CombinedStepAlignment combinedStepAlignment = null;
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
                    selfieStepTitleComponentStyle = (StepStyles.SelfieStepTitleComponentStyle) this.nullableSelfieStepTitleComponentStyleAdapter.fromJson(reader);
                    break;
                case 4:
                    selfieStepTextBasedComponentStyle = (StepStyles.SelfieStepTextBasedComponentStyle) this.nullableSelfieStepTextBasedComponentStyleAdapter.fromJson(reader);
                    break;
                case 5:
                    stepPrimaryButtonComponentStyle = (StepStyles.StepPrimaryButtonComponentStyle) this.nullableStepPrimaryButtonComponentStyleAdapter.fromJson(reader);
                    break;
                case 6:
                    stepSecondaryButtonComponentStyle = (StepStyles.StepSecondaryButtonComponentStyle) this.nullableStepSecondaryButtonComponentStyleAdapter.fromJson(reader);
                    break;
                case 7:
                    stepTextBasedComponentStyle = (StepStyles.StepTextBasedComponentStyle) this.nullableStepTextBasedComponentStyleAdapter.fromJson(reader);
                    break;
                case 8:
                    selfieStepStrokeColor = (StepStyles.SelfieStepStrokeColor) this.nullableSelfieStepStrokeColorAdapter.fromJson(reader);
                    break;
                case 9:
                    selfieStepBorderColor = (StepStyles.SelfieStepBorderColor) this.nullableSelfieStepBorderColorAdapter.fromJson(reader);
                    break;
                case 10:
                    selfieStepBorderWidth = (StepStyles.SelfieStepBorderWidth) this.nullableSelfieStepBorderWidthAdapter.fromJson(reader);
                    break;
                case 11:
                    selfieStepFillColor = (StepStyles.SelfieStepFillColor) this.nullableSelfieStepFillColorAdapter.fromJson(reader);
                    break;
                case 12:
                    selfieStepImageLocalStyle = (StepStyles.SelfieStepImageLocalStyle) this.nullableSelfieStepImageLocalStyleAdapter.fromJson(reader);
                    break;
                case 13:
                    stepPaddingStyle = (StepStyles.StepPaddingStyle) this.nullableStepPaddingStyleAdapter.fromJson(reader);
                    break;
                case 14:
                    stepBorderRadiusStyle = (StepStyles.StepBorderRadiusStyle) this.nullableStepBorderRadiusStyleAdapter.fromJson(reader);
                    break;
                case 15:
                    combinedStepAlignment = (StepStyles.CombinedStepAlignment) this.nullableCombinedStepAlignmentAdapter.fromJson(reader);
                    break;
            }
        }
        reader.y();
        return new StepStyles.SelfieStepStyle(headerButtonColorStyle, stepBackgroundColorStyle, stepBackgroundImageStyle, selfieStepTitleComponentStyle, selfieStepTextBasedComponentStyle, stepPrimaryButtonComponentStyle, stepSecondaryButtonComponentStyle, stepTextBasedComponentStyle, selfieStepStrokeColor, selfieStepBorderColor, selfieStepBorderWidth, selfieStepFillColor, selfieStepImageLocalStyle, stepPaddingStyle, stepBorderRadiusStyle, combinedStepAlignment);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, StepStyles.SelfieStepStyle selfieStepStyle) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (selfieStepStyle != null) {
            writer.l();
            writer.A0("textColor");
            this.nullableHeaderButtonColorStyleAdapter.toJson(writer, selfieStepStyle.getHeaderButtonColor());
            writer.A0(ViewProps.BACKGROUND_COLOR);
            this.nullableStepBackgroundColorStyleAdapter.toJson(writer, selfieStepStyle.getBackgroundColor());
            writer.A0("backgroundImage");
            this.nullableStepBackgroundImageStyleAdapter.toJson(writer, selfieStepStyle.getBackgroundImage());
            writer.A0("titleStyle");
            this.nullableSelfieStepTitleComponentStyleAdapter.toJson(writer, selfieStepStyle.getTitleStyle());
            writer.A0("textStyle");
            this.nullableSelfieStepTextBasedComponentStyleAdapter.toJson(writer, selfieStepStyle.getTextStyle());
            writer.A0("buttonPrimaryStyle");
            this.nullableStepPrimaryButtonComponentStyleAdapter.toJson(writer, selfieStepStyle.getButtonPrimaryStyle());
            writer.A0("buttonSecondaryStyle");
            this.nullableStepSecondaryButtonComponentStyleAdapter.toJson(writer, selfieStepStyle.getButtonSecondaryStyle());
            writer.A0("disclaimerStyle");
            this.nullableStepTextBasedComponentStyleAdapter.toJson(writer, selfieStepStyle.getDisclaimerStyle());
            writer.A0("strokeColor");
            this.nullableSelfieStepStrokeColorAdapter.toJson(writer, selfieStepStyle.getStrokeColor());
            writer.A0(ViewProps.BORDER_COLOR);
            this.nullableSelfieStepBorderColorAdapter.toJson(writer, selfieStepStyle.getBorderColor());
            writer.A0(ViewProps.BORDER_WIDTH);
            this.nullableSelfieStepBorderWidthAdapter.toJson(writer, selfieStepStyle.getBorderWidth());
            writer.A0("fillColor");
            this.nullableSelfieStepFillColorAdapter.toJson(writer, selfieStepStyle.getFillColor());
            writer.A0("imageLocalStyle");
            this.nullableSelfieStepImageLocalStyleAdapter.toJson(writer, selfieStepStyle.getImageLocalStyle());
            writer.A0(ViewProps.PADDING);
            this.nullableStepPaddingStyleAdapter.toJson(writer, selfieStepStyle.getPadding());
            writer.A0("borderRadius");
            this.nullableStepBorderRadiusStyleAdapter.toJson(writer, selfieStepStyle.getBorderRadius());
            writer.A0("alignment");
            this.nullableCombinedStepAlignmentAdapter.toJson(writer, selfieStepStyle.getAlignment());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
