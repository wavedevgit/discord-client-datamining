package com.withpersona.sdk2.inquiry.network.dto.ui.components;

import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.HorizontalStack;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.AttributeStyles;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0082\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001c\u0010\u001b\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0019R\u001c\u0010\u001d\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001c0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u0019R\u001c\u0010\u001f\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001e0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010\u0019R\u001c\u0010!\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010 0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u0010\u0019R\u001c\u0010#\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\"0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b#\u0010\u0019R\u001c\u0010%\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010$0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b%\u0010\u0019R\u001c\u0010'\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010&0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b'\u0010\u0019R\u001c\u0010)\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010(0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b)\u0010\u0019R\u001c\u0010+\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010*0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b+\u0010\u0019R\u001c\u0010-\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010,0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b-\u0010\u0019¨\u0006."}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/HorizontalStack_HorizontalStackComponentStyleJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/HorizontalStack$HorizontalStackComponentStyle;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/HorizontalStack$HorizontalStackComponentStyle;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/HorizontalStack$HorizontalStackComponentStyle;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$HorizontalStackBackgroundColorStyle;", "nullableHorizontalStackBackgroundColorStyleAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$HorizontalStackBorderWidthStyle;", "nullableHorizontalStackBorderWidthStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$HorizontalStackBorderColorStyle;", "nullableHorizontalStackBorderColorStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$HorizontalStackBorderRadiusStyle;", "nullableHorizontalStackBorderRadiusStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$HorizontalStackPaddingStyle;", "nullableHorizontalStackPaddingStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$HorizontalStackMarginStyle;", "nullableHorizontalStackMarginStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$HorizontalStackAxisStyle;", "nullableHorizontalStackAxisStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$HorizontalStackChildSizesStyle;", "nullableHorizontalStackChildSizesStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$HorizontalStackAlignmentStyle;", "nullableHorizontalStackAlignmentStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$HorizontalStackGapStyle;", "nullableHorizontalStackGapStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$HorizontalStackWidthStyle;", "nullableHorizontalStackWidthStyleAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class HorizontalStack_HorizontalStackComponentStyleJsonAdapter extends h {
    @NotNull
    private final h nullableHorizontalStackAlignmentStyleAdapter;
    @NotNull
    private final h nullableHorizontalStackAxisStyleAdapter;
    @NotNull
    private final h nullableHorizontalStackBackgroundColorStyleAdapter;
    @NotNull
    private final h nullableHorizontalStackBorderColorStyleAdapter;
    @NotNull
    private final h nullableHorizontalStackBorderRadiusStyleAdapter;
    @NotNull
    private final h nullableHorizontalStackBorderWidthStyleAdapter;
    @NotNull
    private final h nullableHorizontalStackChildSizesStyleAdapter;
    @NotNull
    private final h nullableHorizontalStackGapStyleAdapter;
    @NotNull
    private final h nullableHorizontalStackMarginStyleAdapter;
    @NotNull
    private final h nullableHorizontalStackPaddingStyleAdapter;
    @NotNull
    private final h nullableHorizontalStackWidthStyleAdapter;
    @NotNull
    private final m.b options;

    public HorizontalStack_HorizontalStackComponentStyleJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a(ViewProps.BACKGROUND_COLOR, ViewProps.BORDER_WIDTH, ViewProps.BORDER_COLOR, "borderRadius", ViewProps.PADDING, ViewProps.MARGIN, "axis", "childSizes", "alignment", ViewProps.GAP, "width");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(AttributeStyles.HorizontalStackBackgroundColorStyle.class, x0.d(), ViewProps.BACKGROUND_COLOR);
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableHorizontalStackBackgroundColorStyleAdapter = f10;
        h f11 = moshi.f(AttributeStyles.HorizontalStackBorderWidthStyle.class, x0.d(), ViewProps.BORDER_WIDTH);
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableHorizontalStackBorderWidthStyleAdapter = f11;
        h f12 = moshi.f(AttributeStyles.HorizontalStackBorderColorStyle.class, x0.d(), ViewProps.BORDER_COLOR);
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.nullableHorizontalStackBorderColorStyleAdapter = f12;
        h f13 = moshi.f(AttributeStyles.HorizontalStackBorderRadiusStyle.class, x0.d(), "borderRadius");
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.nullableHorizontalStackBorderRadiusStyleAdapter = f13;
        h f14 = moshi.f(AttributeStyles.HorizontalStackPaddingStyle.class, x0.d(), ViewProps.PADDING);
        Intrinsics.checkNotNullExpressionValue(f14, "adapter(...)");
        this.nullableHorizontalStackPaddingStyleAdapter = f14;
        h f15 = moshi.f(AttributeStyles.HorizontalStackMarginStyle.class, x0.d(), ViewProps.MARGIN);
        Intrinsics.checkNotNullExpressionValue(f15, "adapter(...)");
        this.nullableHorizontalStackMarginStyleAdapter = f15;
        h f16 = moshi.f(AttributeStyles.HorizontalStackAxisStyle.class, x0.d(), "axis");
        Intrinsics.checkNotNullExpressionValue(f16, "adapter(...)");
        this.nullableHorizontalStackAxisStyleAdapter = f16;
        h f17 = moshi.f(AttributeStyles.HorizontalStackChildSizesStyle.class, x0.d(), "childSizes");
        Intrinsics.checkNotNullExpressionValue(f17, "adapter(...)");
        this.nullableHorizontalStackChildSizesStyleAdapter = f17;
        h f18 = moshi.f(AttributeStyles.HorizontalStackAlignmentStyle.class, x0.d(), "alignment");
        Intrinsics.checkNotNullExpressionValue(f18, "adapter(...)");
        this.nullableHorizontalStackAlignmentStyleAdapter = f18;
        h f19 = moshi.f(AttributeStyles.HorizontalStackGapStyle.class, x0.d(), ViewProps.GAP);
        Intrinsics.checkNotNullExpressionValue(f19, "adapter(...)");
        this.nullableHorizontalStackGapStyleAdapter = f19;
        h f20 = moshi.f(AttributeStyles.HorizontalStackWidthStyle.class, x0.d(), "width");
        Intrinsics.checkNotNullExpressionValue(f20, "adapter(...)");
        this.nullableHorizontalStackWidthStyleAdapter = f20;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(67);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("HorizontalStack.HorizontalStackComponentStyle");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public HorizontalStack.HorizontalStackComponentStyle fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.s();
        AttributeStyles.HorizontalStackBackgroundColorStyle horizontalStackBackgroundColorStyle = null;
        AttributeStyles.HorizontalStackBorderWidthStyle horizontalStackBorderWidthStyle = null;
        AttributeStyles.HorizontalStackBorderColorStyle horizontalStackBorderColorStyle = null;
        AttributeStyles.HorizontalStackBorderRadiusStyle horizontalStackBorderRadiusStyle = null;
        AttributeStyles.HorizontalStackPaddingStyle horizontalStackPaddingStyle = null;
        AttributeStyles.HorizontalStackMarginStyle horizontalStackMarginStyle = null;
        AttributeStyles.HorizontalStackAxisStyle horizontalStackAxisStyle = null;
        AttributeStyles.HorizontalStackChildSizesStyle horizontalStackChildSizesStyle = null;
        AttributeStyles.HorizontalStackAlignmentStyle horizontalStackAlignmentStyle = null;
        AttributeStyles.HorizontalStackGapStyle horizontalStackGapStyle = null;
        AttributeStyles.HorizontalStackWidthStyle horizontalStackWidthStyle = null;
        while (reader.hasNext()) {
            switch (reader.W(this.options)) {
                case -1:
                    reader.E0();
                    reader.P();
                    break;
                case 0:
                    horizontalStackBackgroundColorStyle = (AttributeStyles.HorizontalStackBackgroundColorStyle) this.nullableHorizontalStackBackgroundColorStyleAdapter.fromJson(reader);
                    break;
                case 1:
                    horizontalStackBorderWidthStyle = (AttributeStyles.HorizontalStackBorderWidthStyle) this.nullableHorizontalStackBorderWidthStyleAdapter.fromJson(reader);
                    break;
                case 2:
                    horizontalStackBorderColorStyle = (AttributeStyles.HorizontalStackBorderColorStyle) this.nullableHorizontalStackBorderColorStyleAdapter.fromJson(reader);
                    break;
                case 3:
                    horizontalStackBorderRadiusStyle = (AttributeStyles.HorizontalStackBorderRadiusStyle) this.nullableHorizontalStackBorderRadiusStyleAdapter.fromJson(reader);
                    break;
                case 4:
                    horizontalStackPaddingStyle = (AttributeStyles.HorizontalStackPaddingStyle) this.nullableHorizontalStackPaddingStyleAdapter.fromJson(reader);
                    break;
                case 5:
                    horizontalStackMarginStyle = (AttributeStyles.HorizontalStackMarginStyle) this.nullableHorizontalStackMarginStyleAdapter.fromJson(reader);
                    break;
                case 6:
                    horizontalStackAxisStyle = (AttributeStyles.HorizontalStackAxisStyle) this.nullableHorizontalStackAxisStyleAdapter.fromJson(reader);
                    break;
                case 7:
                    horizontalStackChildSizesStyle = (AttributeStyles.HorizontalStackChildSizesStyle) this.nullableHorizontalStackChildSizesStyleAdapter.fromJson(reader);
                    break;
                case 8:
                    horizontalStackAlignmentStyle = (AttributeStyles.HorizontalStackAlignmentStyle) this.nullableHorizontalStackAlignmentStyleAdapter.fromJson(reader);
                    break;
                case 9:
                    horizontalStackGapStyle = (AttributeStyles.HorizontalStackGapStyle) this.nullableHorizontalStackGapStyleAdapter.fromJson(reader);
                    break;
                case 10:
                    horizontalStackWidthStyle = (AttributeStyles.HorizontalStackWidthStyle) this.nullableHorizontalStackWidthStyleAdapter.fromJson(reader);
                    break;
            }
        }
        reader.z();
        return new HorizontalStack.HorizontalStackComponentStyle(horizontalStackBackgroundColorStyle, horizontalStackBorderWidthStyle, horizontalStackBorderColorStyle, horizontalStackBorderRadiusStyle, horizontalStackPaddingStyle, horizontalStackMarginStyle, horizontalStackAxisStyle, horizontalStackChildSizesStyle, horizontalStackAlignmentStyle, horizontalStackGapStyle, horizontalStackWidthStyle);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, HorizontalStack.HorizontalStackComponentStyle horizontalStackComponentStyle) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (horizontalStackComponentStyle != null) {
            writer.k();
            writer.W(ViewProps.BACKGROUND_COLOR);
            this.nullableHorizontalStackBackgroundColorStyleAdapter.toJson(writer, horizontalStackComponentStyle.getBackgroundColor());
            writer.W(ViewProps.BORDER_WIDTH);
            this.nullableHorizontalStackBorderWidthStyleAdapter.toJson(writer, horizontalStackComponentStyle.getBorderWidth());
            writer.W(ViewProps.BORDER_COLOR);
            this.nullableHorizontalStackBorderColorStyleAdapter.toJson(writer, horizontalStackComponentStyle.getBorderColor());
            writer.W("borderRadius");
            this.nullableHorizontalStackBorderRadiusStyleAdapter.toJson(writer, horizontalStackComponentStyle.getBorderRadius());
            writer.W(ViewProps.PADDING);
            this.nullableHorizontalStackPaddingStyleAdapter.toJson(writer, horizontalStackComponentStyle.getPadding());
            writer.W(ViewProps.MARGIN);
            this.nullableHorizontalStackMarginStyleAdapter.toJson(writer, horizontalStackComponentStyle.getMargin());
            writer.W("axis");
            this.nullableHorizontalStackAxisStyleAdapter.toJson(writer, horizontalStackComponentStyle.getAxis());
            writer.W("childSizes");
            this.nullableHorizontalStackChildSizesStyleAdapter.toJson(writer, horizontalStackComponentStyle.getChildSizes());
            writer.W("alignment");
            this.nullableHorizontalStackAlignmentStyleAdapter.toJson(writer, horizontalStackComponentStyle.getAlignment());
            writer.W(ViewProps.GAP);
            this.nullableHorizontalStackGapStyleAdapter.toJson(writer, horizontalStackComponentStyle.getGap());
            writer.W("width");
            this.nullableHorizontalStackWidthStyleAdapter.toJson(writer, horizontalStackComponentStyle.getWidth());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
