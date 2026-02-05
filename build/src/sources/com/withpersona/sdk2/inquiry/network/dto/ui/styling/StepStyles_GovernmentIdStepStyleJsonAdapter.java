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
@Metadata(d1 = {"\u0000¬\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001c\u0010\u001b\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0019R\u001c\u0010\u001d\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001c0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u0019R\u001c\u0010\u001f\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001e0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010\u0019R\u001c\u0010!\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010 0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u0010\u0019R\u001c\u0010#\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\"0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b#\u0010\u0019R\u001c\u0010%\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010$0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b%\u0010\u0019R\u001c\u0010'\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010&0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b'\u0010\u0019R\u001c\u0010)\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010(0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b)\u0010\u0019R\u001c\u0010+\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010*0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b+\u0010\u0019R\u001c\u0010-\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010,0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b-\u0010\u0019R\u001c\u0010/\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010.0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b/\u0010\u0019R\u001c\u00101\u001a\n\u0012\u0006\u0012\u0004\u0018\u0001000\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b1\u0010\u0019R\u001c\u00103\u001a\n\u0012\u0006\u0012\u0004\u0018\u0001020\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b3\u0010\u0019R\u001c\u00105\u001a\n\u0012\u0006\u0012\u0004\u0018\u0001040\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b5\u0010\u0019R\u001c\u00107\u001a\n\u0012\u0006\u0012\u0004\u0018\u0001060\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b7\u0010\u0019R\u001c\u00109\u001a\n\u0012\u0006\u0012\u0004\u0018\u0001080\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b9\u0010\u0019R\u001c\u0010;\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010:0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b;\u0010\u0019¨\u0006<"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles_GovernmentIdStepStyleJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$GovernmentIdStepStyle;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$GovernmentIdStepStyle;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$GovernmentIdStepStyle;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$HeaderButtonColorStyle;", "nullableHeaderButtonColorStyleAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$StepBackgroundColorStyle;", "nullableStepBackgroundColorStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$StepBackgroundImageStyle;", "nullableStepBackgroundImageStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$GovernmentIdStepTitleComponentStyle;", "nullableGovernmentIdStepTitleComponentStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$GovernmentIdStepTextBasedComponentStyle;", "nullableGovernmentIdStepTextBasedComponentStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$GovernmentIdStepPrimaryButtonComponentStyle;", "nullableGovernmentIdStepPrimaryButtonComponentStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$GovernmentIdStepSecondaryButtonComponentStyle;", "nullableGovernmentIdStepSecondaryButtonComponentStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$StepTextBasedComponentStyle;", "nullableStepTextBasedComponentStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$GovernmentIdStepRowHeight;", "nullableGovernmentIdStepRowHeightAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$GovernmentIdStepStrokeColor;", "nullableGovernmentIdStepStrokeColorAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$GovernmentIdStepFillColor;", "nullableGovernmentIdStepFillColorAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$GovernmentIdStepBorderColor;", "nullableGovernmentIdStepBorderColorAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$GovernmentIdStepBorderRadius;", "nullableGovernmentIdStepBorderRadiusAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$GovernmentIdStepBorderWidth;", "nullableGovernmentIdStepBorderWidthAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$StepPaddingStyle;", "nullableStepPaddingStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$GovernmentIdStepInputSelectStyle;", "nullableGovernmentIdStepInputSelectStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$GovernmentIdStepImageLocalStyle;", "nullableGovernmentIdStepImageLocalStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$CombinedStepAlignment;", "nullableCombinedStepAlignmentAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class StepStyles_GovernmentIdStepStyleJsonAdapter extends h {
    @NotNull
    private final h nullableCombinedStepAlignmentAdapter;
    @NotNull
    private final h nullableGovernmentIdStepBorderColorAdapter;
    @NotNull
    private final h nullableGovernmentIdStepBorderRadiusAdapter;
    @NotNull
    private final h nullableGovernmentIdStepBorderWidthAdapter;
    @NotNull
    private final h nullableGovernmentIdStepFillColorAdapter;
    @NotNull
    private final h nullableGovernmentIdStepImageLocalStyleAdapter;
    @NotNull
    private final h nullableGovernmentIdStepInputSelectStyleAdapter;
    @NotNull
    private final h nullableGovernmentIdStepPrimaryButtonComponentStyleAdapter;
    @NotNull
    private final h nullableGovernmentIdStepRowHeightAdapter;
    @NotNull
    private final h nullableGovernmentIdStepSecondaryButtonComponentStyleAdapter;
    @NotNull
    private final h nullableGovernmentIdStepStrokeColorAdapter;
    @NotNull
    private final h nullableGovernmentIdStepTextBasedComponentStyleAdapter;
    @NotNull
    private final h nullableGovernmentIdStepTitleComponentStyleAdapter;
    @NotNull
    private final h nullableHeaderButtonColorStyleAdapter;
    @NotNull
    private final h nullableStepBackgroundColorStyleAdapter;
    @NotNull
    private final h nullableStepBackgroundImageStyleAdapter;
    @NotNull
    private final h nullableStepPaddingStyleAdapter;
    @NotNull
    private final h nullableStepTextBasedComponentStyleAdapter;
    @NotNull
    private final m.b options;

    public StepStyles_GovernmentIdStepStyleJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("textColor", ViewProps.BACKGROUND_COLOR, "backgroundImage", "titleStyle", "textStyle", "buttonPrimaryStyle", "buttonSecondaryStyle", "disclaimerStyle", "height", "strokeColor", "fillColor", ViewProps.BORDER_COLOR, "borderRadius", ViewProps.BORDER_WIDTH, ViewProps.PADDING, "inputSelectStyle", "imageLocalStyle", "alignment");
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
        h f13 = moshi.f(StepStyles.GovernmentIdStepTitleComponentStyle.class, x0.d(), "titleStyle");
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.nullableGovernmentIdStepTitleComponentStyleAdapter = f13;
        h f14 = moshi.f(StepStyles.GovernmentIdStepTextBasedComponentStyle.class, x0.d(), "textStyle");
        Intrinsics.checkNotNullExpressionValue(f14, "adapter(...)");
        this.nullableGovernmentIdStepTextBasedComponentStyleAdapter = f14;
        h f15 = moshi.f(StepStyles.GovernmentIdStepPrimaryButtonComponentStyle.class, x0.d(), "buttonPrimaryStyle");
        Intrinsics.checkNotNullExpressionValue(f15, "adapter(...)");
        this.nullableGovernmentIdStepPrimaryButtonComponentStyleAdapter = f15;
        h f16 = moshi.f(StepStyles.GovernmentIdStepSecondaryButtonComponentStyle.class, x0.d(), "buttonSecondaryStyle");
        Intrinsics.checkNotNullExpressionValue(f16, "adapter(...)");
        this.nullableGovernmentIdStepSecondaryButtonComponentStyleAdapter = f16;
        h f17 = moshi.f(StepStyles.StepTextBasedComponentStyle.class, x0.d(), "disclaimerStyle");
        Intrinsics.checkNotNullExpressionValue(f17, "adapter(...)");
        this.nullableStepTextBasedComponentStyleAdapter = f17;
        h f18 = moshi.f(StepStyles.GovernmentIdStepRowHeight.class, x0.d(), "height");
        Intrinsics.checkNotNullExpressionValue(f18, "adapter(...)");
        this.nullableGovernmentIdStepRowHeightAdapter = f18;
        h f19 = moshi.f(StepStyles.GovernmentIdStepStrokeColor.class, x0.d(), "strokeColor");
        Intrinsics.checkNotNullExpressionValue(f19, "adapter(...)");
        this.nullableGovernmentIdStepStrokeColorAdapter = f19;
        h f20 = moshi.f(StepStyles.GovernmentIdStepFillColor.class, x0.d(), "fillColor");
        Intrinsics.checkNotNullExpressionValue(f20, "adapter(...)");
        this.nullableGovernmentIdStepFillColorAdapter = f20;
        h f21 = moshi.f(StepStyles.GovernmentIdStepBorderColor.class, x0.d(), ViewProps.BORDER_COLOR);
        Intrinsics.checkNotNullExpressionValue(f21, "adapter(...)");
        this.nullableGovernmentIdStepBorderColorAdapter = f21;
        h f22 = moshi.f(StepStyles.GovernmentIdStepBorderRadius.class, x0.d(), "borderRadius");
        Intrinsics.checkNotNullExpressionValue(f22, "adapter(...)");
        this.nullableGovernmentIdStepBorderRadiusAdapter = f22;
        h f23 = moshi.f(StepStyles.GovernmentIdStepBorderWidth.class, x0.d(), ViewProps.BORDER_WIDTH);
        Intrinsics.checkNotNullExpressionValue(f23, "adapter(...)");
        this.nullableGovernmentIdStepBorderWidthAdapter = f23;
        h f24 = moshi.f(StepStyles.StepPaddingStyle.class, x0.d(), ViewProps.PADDING);
        Intrinsics.checkNotNullExpressionValue(f24, "adapter(...)");
        this.nullableStepPaddingStyleAdapter = f24;
        h f25 = moshi.f(StepStyles.GovernmentIdStepInputSelectStyle.class, x0.d(), "inputSelectStyle");
        Intrinsics.checkNotNullExpressionValue(f25, "adapter(...)");
        this.nullableGovernmentIdStepInputSelectStyleAdapter = f25;
        h f26 = moshi.f(StepStyles.GovernmentIdStepImageLocalStyle.class, x0.d(), "imageLocalStyle");
        Intrinsics.checkNotNullExpressionValue(f26, "adapter(...)");
        this.nullableGovernmentIdStepImageLocalStyleAdapter = f26;
        h f27 = moshi.f(StepStyles.CombinedStepAlignment.class, x0.d(), "alignment");
        Intrinsics.checkNotNullExpressionValue(f27, "adapter(...)");
        this.nullableCombinedStepAlignmentAdapter = f27;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(54);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("StepStyles.GovernmentIdStepStyle");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public StepStyles.GovernmentIdStepStyle fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.s();
        AttributeStyles.HeaderButtonColorStyle headerButtonColorStyle = null;
        StepStyles.StepBackgroundColorStyle stepBackgroundColorStyle = null;
        StepStyles.StepBackgroundImageStyle stepBackgroundImageStyle = null;
        StepStyles.GovernmentIdStepTitleComponentStyle governmentIdStepTitleComponentStyle = null;
        StepStyles.GovernmentIdStepTextBasedComponentStyle governmentIdStepTextBasedComponentStyle = null;
        StepStyles.GovernmentIdStepPrimaryButtonComponentStyle governmentIdStepPrimaryButtonComponentStyle = null;
        StepStyles.GovernmentIdStepSecondaryButtonComponentStyle governmentIdStepSecondaryButtonComponentStyle = null;
        StepStyles.StepTextBasedComponentStyle stepTextBasedComponentStyle = null;
        StepStyles.GovernmentIdStepRowHeight governmentIdStepRowHeight = null;
        StepStyles.GovernmentIdStepStrokeColor governmentIdStepStrokeColor = null;
        StepStyles.GovernmentIdStepFillColor governmentIdStepFillColor = null;
        StepStyles.GovernmentIdStepBorderColor governmentIdStepBorderColor = null;
        StepStyles.GovernmentIdStepBorderRadius governmentIdStepBorderRadius = null;
        StepStyles.GovernmentIdStepBorderWidth governmentIdStepBorderWidth = null;
        StepStyles.StepPaddingStyle stepPaddingStyle = null;
        StepStyles.GovernmentIdStepInputSelectStyle governmentIdStepInputSelectStyle = null;
        StepStyles.GovernmentIdStepImageLocalStyle governmentIdStepImageLocalStyle = null;
        StepStyles.CombinedStepAlignment combinedStepAlignment = null;
        while (reader.hasNext()) {
            switch (reader.W(this.options)) {
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
                    governmentIdStepTitleComponentStyle = (StepStyles.GovernmentIdStepTitleComponentStyle) this.nullableGovernmentIdStepTitleComponentStyleAdapter.fromJson(reader);
                    break;
                case 4:
                    governmentIdStepTextBasedComponentStyle = (StepStyles.GovernmentIdStepTextBasedComponentStyle) this.nullableGovernmentIdStepTextBasedComponentStyleAdapter.fromJson(reader);
                    break;
                case 5:
                    governmentIdStepPrimaryButtonComponentStyle = (StepStyles.GovernmentIdStepPrimaryButtonComponentStyle) this.nullableGovernmentIdStepPrimaryButtonComponentStyleAdapter.fromJson(reader);
                    break;
                case 6:
                    governmentIdStepSecondaryButtonComponentStyle = (StepStyles.GovernmentIdStepSecondaryButtonComponentStyle) this.nullableGovernmentIdStepSecondaryButtonComponentStyleAdapter.fromJson(reader);
                    break;
                case 7:
                    stepTextBasedComponentStyle = (StepStyles.StepTextBasedComponentStyle) this.nullableStepTextBasedComponentStyleAdapter.fromJson(reader);
                    break;
                case 8:
                    governmentIdStepRowHeight = (StepStyles.GovernmentIdStepRowHeight) this.nullableGovernmentIdStepRowHeightAdapter.fromJson(reader);
                    break;
                case 9:
                    governmentIdStepStrokeColor = (StepStyles.GovernmentIdStepStrokeColor) this.nullableGovernmentIdStepStrokeColorAdapter.fromJson(reader);
                    break;
                case 10:
                    governmentIdStepFillColor = (StepStyles.GovernmentIdStepFillColor) this.nullableGovernmentIdStepFillColorAdapter.fromJson(reader);
                    break;
                case 11:
                    governmentIdStepBorderColor = (StepStyles.GovernmentIdStepBorderColor) this.nullableGovernmentIdStepBorderColorAdapter.fromJson(reader);
                    break;
                case 12:
                    governmentIdStepBorderRadius = (StepStyles.GovernmentIdStepBorderRadius) this.nullableGovernmentIdStepBorderRadiusAdapter.fromJson(reader);
                    break;
                case 13:
                    governmentIdStepBorderWidth = (StepStyles.GovernmentIdStepBorderWidth) this.nullableGovernmentIdStepBorderWidthAdapter.fromJson(reader);
                    break;
                case 14:
                    stepPaddingStyle = (StepStyles.StepPaddingStyle) this.nullableStepPaddingStyleAdapter.fromJson(reader);
                    break;
                case 15:
                    governmentIdStepInputSelectStyle = (StepStyles.GovernmentIdStepInputSelectStyle) this.nullableGovernmentIdStepInputSelectStyleAdapter.fromJson(reader);
                    break;
                case 16:
                    governmentIdStepImageLocalStyle = (StepStyles.GovernmentIdStepImageLocalStyle) this.nullableGovernmentIdStepImageLocalStyleAdapter.fromJson(reader);
                    break;
                case 17:
                    combinedStepAlignment = (StepStyles.CombinedStepAlignment) this.nullableCombinedStepAlignmentAdapter.fromJson(reader);
                    break;
            }
        }
        reader.z();
        return new StepStyles.GovernmentIdStepStyle(headerButtonColorStyle, stepBackgroundColorStyle, stepBackgroundImageStyle, governmentIdStepTitleComponentStyle, governmentIdStepTextBasedComponentStyle, governmentIdStepPrimaryButtonComponentStyle, governmentIdStepSecondaryButtonComponentStyle, stepTextBasedComponentStyle, governmentIdStepRowHeight, governmentIdStepStrokeColor, governmentIdStepFillColor, governmentIdStepBorderColor, governmentIdStepBorderRadius, governmentIdStepBorderWidth, stepPaddingStyle, governmentIdStepInputSelectStyle, governmentIdStepImageLocalStyle, combinedStepAlignment);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, StepStyles.GovernmentIdStepStyle governmentIdStepStyle) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (governmentIdStepStyle != null) {
            writer.k();
            writer.W("textColor");
            this.nullableHeaderButtonColorStyleAdapter.toJson(writer, governmentIdStepStyle.getHeaderButtonColor());
            writer.W(ViewProps.BACKGROUND_COLOR);
            this.nullableStepBackgroundColorStyleAdapter.toJson(writer, governmentIdStepStyle.getBackgroundColor());
            writer.W("backgroundImage");
            this.nullableStepBackgroundImageStyleAdapter.toJson(writer, governmentIdStepStyle.getBackgroundImage());
            writer.W("titleStyle");
            this.nullableGovernmentIdStepTitleComponentStyleAdapter.toJson(writer, governmentIdStepStyle.getTitleStyle());
            writer.W("textStyle");
            this.nullableGovernmentIdStepTextBasedComponentStyleAdapter.toJson(writer, governmentIdStepStyle.getTextStyle());
            writer.W("buttonPrimaryStyle");
            this.nullableGovernmentIdStepPrimaryButtonComponentStyleAdapter.toJson(writer, governmentIdStepStyle.getButtonPrimaryStyle());
            writer.W("buttonSecondaryStyle");
            this.nullableGovernmentIdStepSecondaryButtonComponentStyleAdapter.toJson(writer, governmentIdStepStyle.getButtonSecondaryStyle());
            writer.W("disclaimerStyle");
            this.nullableStepTextBasedComponentStyleAdapter.toJson(writer, governmentIdStepStyle.getDisclaimerStyle());
            writer.W("height");
            this.nullableGovernmentIdStepRowHeightAdapter.toJson(writer, governmentIdStepStyle.getHeight());
            writer.W("strokeColor");
            this.nullableGovernmentIdStepStrokeColorAdapter.toJson(writer, governmentIdStepStyle.getStrokeColor());
            writer.W("fillColor");
            this.nullableGovernmentIdStepFillColorAdapter.toJson(writer, governmentIdStepStyle.getFillColor());
            writer.W(ViewProps.BORDER_COLOR);
            this.nullableGovernmentIdStepBorderColorAdapter.toJson(writer, governmentIdStepStyle.getBorderColor());
            writer.W("borderRadius");
            this.nullableGovernmentIdStepBorderRadiusAdapter.toJson(writer, governmentIdStepStyle.getBorderRadius());
            writer.W(ViewProps.BORDER_WIDTH);
            this.nullableGovernmentIdStepBorderWidthAdapter.toJson(writer, governmentIdStepStyle.getBorderWidth());
            writer.W(ViewProps.PADDING);
            this.nullableStepPaddingStyleAdapter.toJson(writer, governmentIdStepStyle.getPadding());
            writer.W("inputSelectStyle");
            this.nullableGovernmentIdStepInputSelectStyleAdapter.toJson(writer, governmentIdStepStyle.getInputSelectStyle());
            writer.W("imageLocalStyle");
            this.nullableGovernmentIdStepImageLocalStyleAdapter.toJson(writer, governmentIdStepStyle.getImageLocalStyle());
            writer.W("alignment");
            this.nullableCombinedStepAlignmentAdapter.toJson(writer, governmentIdStepStyle.getAlignment());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
