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
@Metadata(d1 = {"\u0000\u009a\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001c\u0010\u001b\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0019R\u001c\u0010\u001d\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001c0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u0019R\u001c\u0010\u001f\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001e0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010\u0019R\u001c\u0010!\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010 0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u0010\u0019R\u001c\u0010#\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\"0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b#\u0010\u0019R\u001c\u0010%\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010$0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b%\u0010\u0019R\u001c\u0010'\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010&0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b'\u0010\u0019R\u001c\u0010)\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010(0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b)\u0010\u0019R\u001c\u0010+\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010*0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b+\u0010\u0019R\u001c\u0010-\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010,0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b-\u0010\u0019R\u001c\u0010/\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010.0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b/\u0010\u0019R\u001c\u00101\u001a\n\u0012\u0006\u0012\u0004\u0018\u0001000\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b1\u0010\u0019R\u001c\u00103\u001a\n\u0012\u0006\u0012\u0004\u0018\u0001020\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b3\u0010\u0019R\u001c\u00105\u001a\n\u0012\u0006\u0012\u0004\u0018\u0001040\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b5\u0010\u0019¨\u00066"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles_DocumentStepStyleJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$DocumentStepStyle;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$DocumentStepStyle;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$DocumentStepStyle;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$HeaderButtonColorStyle;", "nullableHeaderButtonColorStyleAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$StepBackgroundColorStyle;", "nullableStepBackgroundColorStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$StepBackgroundImageStyle;", "nullableStepBackgroundImageStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$DocumentStepTitleComponentStyle;", "nullableDocumentStepTitleComponentStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$DocumentStepTextBasedComponentStyle;", "nullableDocumentStepTextBasedComponentStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$StepTextBasedComponentStyle;", "nullableStepTextBasedComponentStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$StepPrimaryButtonComponentStyle;", "nullableStepPrimaryButtonComponentStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$StepSecondaryButtonComponentStyle;", "nullableStepSecondaryButtonComponentStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$DocumentStepStrokeColor;", "nullableDocumentStepStrokeColorAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$DocumentStepFillColor;", "nullableDocumentStepFillColorAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$DocumentStepBorderColor;", "nullableDocumentStepBorderColorAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$DocumentStepBorderRadius;", "nullableDocumentStepBorderRadiusAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$DocumentStepBorderWidth;", "nullableDocumentStepBorderWidthAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$StepPaddingStyle;", "nullableStepPaddingStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$CombinedStepAlignment;", "nullableCombinedStepAlignmentAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class StepStyles_DocumentStepStyleJsonAdapter extends h {
    @NotNull
    private final h nullableCombinedStepAlignmentAdapter;
    @NotNull
    private final h nullableDocumentStepBorderColorAdapter;
    @NotNull
    private final h nullableDocumentStepBorderRadiusAdapter;
    @NotNull
    private final h nullableDocumentStepBorderWidthAdapter;
    @NotNull
    private final h nullableDocumentStepFillColorAdapter;
    @NotNull
    private final h nullableDocumentStepStrokeColorAdapter;
    @NotNull
    private final h nullableDocumentStepTextBasedComponentStyleAdapter;
    @NotNull
    private final h nullableDocumentStepTitleComponentStyleAdapter;
    @NotNull
    private final h nullableHeaderButtonColorStyleAdapter;
    @NotNull
    private final h nullableStepBackgroundColorStyleAdapter;
    @NotNull
    private final h nullableStepBackgroundImageStyleAdapter;
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

    public StepStyles_DocumentStepStyleJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("textColor", ViewProps.BACKGROUND_COLOR, "backgroundImage", "titleStyle", "textStyle", "disclaimerStyle", "buttonPrimaryStyle", "buttonSecondaryStyle", "strokeColor", "fillColor", ViewProps.BORDER_COLOR, "borderRadius", ViewProps.BORDER_WIDTH, ViewProps.PADDING, "alignment");
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
        h f13 = moshi.f(StepStyles.DocumentStepTitleComponentStyle.class, x0.d(), "titleStyle");
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.nullableDocumentStepTitleComponentStyleAdapter = f13;
        h f14 = moshi.f(StepStyles.DocumentStepTextBasedComponentStyle.class, x0.d(), "textStyle");
        Intrinsics.checkNotNullExpressionValue(f14, "adapter(...)");
        this.nullableDocumentStepTextBasedComponentStyleAdapter = f14;
        h f15 = moshi.f(StepStyles.StepTextBasedComponentStyle.class, x0.d(), "disclaimerStyle");
        Intrinsics.checkNotNullExpressionValue(f15, "adapter(...)");
        this.nullableStepTextBasedComponentStyleAdapter = f15;
        h f16 = moshi.f(StepStyles.StepPrimaryButtonComponentStyle.class, x0.d(), "buttonPrimaryStyle");
        Intrinsics.checkNotNullExpressionValue(f16, "adapter(...)");
        this.nullableStepPrimaryButtonComponentStyleAdapter = f16;
        h f17 = moshi.f(StepStyles.StepSecondaryButtonComponentStyle.class, x0.d(), "buttonSecondaryStyle");
        Intrinsics.checkNotNullExpressionValue(f17, "adapter(...)");
        this.nullableStepSecondaryButtonComponentStyleAdapter = f17;
        h f18 = moshi.f(StepStyles.DocumentStepStrokeColor.class, x0.d(), "strokeColor");
        Intrinsics.checkNotNullExpressionValue(f18, "adapter(...)");
        this.nullableDocumentStepStrokeColorAdapter = f18;
        h f19 = moshi.f(StepStyles.DocumentStepFillColor.class, x0.d(), "fillColor");
        Intrinsics.checkNotNullExpressionValue(f19, "adapter(...)");
        this.nullableDocumentStepFillColorAdapter = f19;
        h f20 = moshi.f(StepStyles.DocumentStepBorderColor.class, x0.d(), ViewProps.BORDER_COLOR);
        Intrinsics.checkNotNullExpressionValue(f20, "adapter(...)");
        this.nullableDocumentStepBorderColorAdapter = f20;
        h f21 = moshi.f(StepStyles.DocumentStepBorderRadius.class, x0.d(), "borderRadius");
        Intrinsics.checkNotNullExpressionValue(f21, "adapter(...)");
        this.nullableDocumentStepBorderRadiusAdapter = f21;
        h f22 = moshi.f(StepStyles.DocumentStepBorderWidth.class, x0.d(), ViewProps.BORDER_WIDTH);
        Intrinsics.checkNotNullExpressionValue(f22, "adapter(...)");
        this.nullableDocumentStepBorderWidthAdapter = f22;
        h f23 = moshi.f(StepStyles.StepPaddingStyle.class, x0.d(), ViewProps.PADDING);
        Intrinsics.checkNotNullExpressionValue(f23, "adapter(...)");
        this.nullableStepPaddingStyleAdapter = f23;
        h f24 = moshi.f(StepStyles.CombinedStepAlignment.class, x0.d(), "alignment");
        Intrinsics.checkNotNullExpressionValue(f24, "adapter(...)");
        this.nullableCombinedStepAlignmentAdapter = f24;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(50);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("StepStyles.DocumentStepStyle");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public StepStyles.DocumentStepStyle fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        AttributeStyles.HeaderButtonColorStyle headerButtonColorStyle = null;
        StepStyles.StepBackgroundColorStyle stepBackgroundColorStyle = null;
        StepStyles.StepBackgroundImageStyle stepBackgroundImageStyle = null;
        StepStyles.DocumentStepTitleComponentStyle documentStepTitleComponentStyle = null;
        StepStyles.DocumentStepTextBasedComponentStyle documentStepTextBasedComponentStyle = null;
        StepStyles.StepTextBasedComponentStyle stepTextBasedComponentStyle = null;
        StepStyles.StepPrimaryButtonComponentStyle stepPrimaryButtonComponentStyle = null;
        StepStyles.StepSecondaryButtonComponentStyle stepSecondaryButtonComponentStyle = null;
        StepStyles.DocumentStepStrokeColor documentStepStrokeColor = null;
        StepStyles.DocumentStepFillColor documentStepFillColor = null;
        StepStyles.DocumentStepBorderColor documentStepBorderColor = null;
        StepStyles.DocumentStepBorderRadius documentStepBorderRadius = null;
        StepStyles.DocumentStepBorderWidth documentStepBorderWidth = null;
        StepStyles.StepPaddingStyle stepPaddingStyle = null;
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
                    documentStepTitleComponentStyle = (StepStyles.DocumentStepTitleComponentStyle) this.nullableDocumentStepTitleComponentStyleAdapter.fromJson(reader);
                    break;
                case 4:
                    documentStepTextBasedComponentStyle = (StepStyles.DocumentStepTextBasedComponentStyle) this.nullableDocumentStepTextBasedComponentStyleAdapter.fromJson(reader);
                    break;
                case 5:
                    stepTextBasedComponentStyle = (StepStyles.StepTextBasedComponentStyle) this.nullableStepTextBasedComponentStyleAdapter.fromJson(reader);
                    break;
                case 6:
                    stepPrimaryButtonComponentStyle = (StepStyles.StepPrimaryButtonComponentStyle) this.nullableStepPrimaryButtonComponentStyleAdapter.fromJson(reader);
                    break;
                case 7:
                    stepSecondaryButtonComponentStyle = (StepStyles.StepSecondaryButtonComponentStyle) this.nullableStepSecondaryButtonComponentStyleAdapter.fromJson(reader);
                    break;
                case 8:
                    documentStepStrokeColor = (StepStyles.DocumentStepStrokeColor) this.nullableDocumentStepStrokeColorAdapter.fromJson(reader);
                    break;
                case 9:
                    documentStepFillColor = (StepStyles.DocumentStepFillColor) this.nullableDocumentStepFillColorAdapter.fromJson(reader);
                    break;
                case 10:
                    documentStepBorderColor = (StepStyles.DocumentStepBorderColor) this.nullableDocumentStepBorderColorAdapter.fromJson(reader);
                    break;
                case 11:
                    documentStepBorderRadius = (StepStyles.DocumentStepBorderRadius) this.nullableDocumentStepBorderRadiusAdapter.fromJson(reader);
                    break;
                case 12:
                    documentStepBorderWidth = (StepStyles.DocumentStepBorderWidth) this.nullableDocumentStepBorderWidthAdapter.fromJson(reader);
                    break;
                case 13:
                    stepPaddingStyle = (StepStyles.StepPaddingStyle) this.nullableStepPaddingStyleAdapter.fromJson(reader);
                    break;
                case 14:
                    combinedStepAlignment = (StepStyles.CombinedStepAlignment) this.nullableCombinedStepAlignmentAdapter.fromJson(reader);
                    break;
            }
        }
        reader.y();
        return new StepStyles.DocumentStepStyle(headerButtonColorStyle, stepBackgroundColorStyle, stepBackgroundImageStyle, documentStepTitleComponentStyle, documentStepTextBasedComponentStyle, stepTextBasedComponentStyle, stepPrimaryButtonComponentStyle, stepSecondaryButtonComponentStyle, documentStepStrokeColor, documentStepFillColor, documentStepBorderColor, documentStepBorderRadius, documentStepBorderWidth, stepPaddingStyle, combinedStepAlignment);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, StepStyles.DocumentStepStyle documentStepStyle) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (documentStepStyle != null) {
            writer.l();
            writer.A0("textColor");
            this.nullableHeaderButtonColorStyleAdapter.toJson(writer, documentStepStyle.getHeaderButtonColor());
            writer.A0(ViewProps.BACKGROUND_COLOR);
            this.nullableStepBackgroundColorStyleAdapter.toJson(writer, documentStepStyle.getBackgroundColor());
            writer.A0("backgroundImage");
            this.nullableStepBackgroundImageStyleAdapter.toJson(writer, documentStepStyle.getBackgroundImage());
            writer.A0("titleStyle");
            this.nullableDocumentStepTitleComponentStyleAdapter.toJson(writer, documentStepStyle.getTitleStyle());
            writer.A0("textStyle");
            this.nullableDocumentStepTextBasedComponentStyleAdapter.toJson(writer, documentStepStyle.getTextStyle());
            writer.A0("disclaimerStyle");
            this.nullableStepTextBasedComponentStyleAdapter.toJson(writer, documentStepStyle.getDisclaimerStyle());
            writer.A0("buttonPrimaryStyle");
            this.nullableStepPrimaryButtonComponentStyleAdapter.toJson(writer, documentStepStyle.getButtonPrimaryStyle());
            writer.A0("buttonSecondaryStyle");
            this.nullableStepSecondaryButtonComponentStyleAdapter.toJson(writer, documentStepStyle.getButtonSecondaryStyle());
            writer.A0("strokeColor");
            this.nullableDocumentStepStrokeColorAdapter.toJson(writer, documentStepStyle.getStrokeColor());
            writer.A0("fillColor");
            this.nullableDocumentStepFillColorAdapter.toJson(writer, documentStepStyle.getFillColor());
            writer.A0(ViewProps.BORDER_COLOR);
            this.nullableDocumentStepBorderColorAdapter.toJson(writer, documentStepStyle.getBorderColor());
            writer.A0("borderRadius");
            this.nullableDocumentStepBorderRadiusAdapter.toJson(writer, documentStepStyle.getBorderRadius());
            writer.A0(ViewProps.BORDER_WIDTH);
            this.nullableDocumentStepBorderWidthAdapter.toJson(writer, documentStepStyle.getBorderWidth());
            writer.A0(ViewProps.PADDING);
            this.nullableStepPaddingStyleAdapter.toJson(writer, documentStepStyle.getPadding());
            writer.A0("alignment");
            this.nullableCombinedStepAlignmentAdapter.toJson(writer, documentStepStyle.getAlignment());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
