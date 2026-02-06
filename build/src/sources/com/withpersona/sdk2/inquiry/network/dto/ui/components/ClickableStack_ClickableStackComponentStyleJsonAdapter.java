package com.withpersona.sdk2.inquiry.network.dto.ui.components;

import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.ClickableStack;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.AttributeStyles;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0082\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001c\u0010\u001b\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0019R\u001c\u0010\u001d\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001c0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u0019R\u001c\u0010\u001f\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001e0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010\u0019R\u001c\u0010!\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010 0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u0010\u0019R\u001c\u0010#\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\"0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b#\u0010\u0019R\u001c\u0010%\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010$0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b%\u0010\u0019R\u001c\u0010'\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010&0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b'\u0010\u0019R\u001c\u0010)\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010(0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b)\u0010\u0019R\u001c\u0010+\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010*0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b+\u0010\u0019R\u001c\u0010-\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010,0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b-\u0010\u0019¨\u0006."}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/ClickableStack_ClickableStackComponentStyleJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/ClickableStack$ClickableStackComponentStyle;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/ClickableStack$ClickableStackComponentStyle;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/ClickableStack$ClickableStackComponentStyle;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ClickableStackBackgroundColorStyle;", "nullableClickableStackBackgroundColorStyleAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ClickableStackBorderWidthStyle;", "nullableClickableStackBorderWidthStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ClickableStackBorderColorStyle;", "nullableClickableStackBorderColorStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ClickableStackBorderRadiusStyle;", "nullableClickableStackBorderRadiusStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ClickableStackPaddingStyle;", "nullableClickableStackPaddingStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ClickableStackMarginStyle;", "nullableClickableStackMarginStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ClickableStackAxisStyle;", "nullableClickableStackAxisStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ClickableStackChildSizesStyle;", "nullableClickableStackChildSizesStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ClickableStackAlignmentStyle;", "nullableClickableStackAlignmentStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ClickableStackGapStyle;", "nullableClickableStackGapStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$ClickableStackWidthStyle;", "nullableClickableStackWidthStyleAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ClickableStack_ClickableStackComponentStyleJsonAdapter extends h {
    @NotNull
    private final h nullableClickableStackAlignmentStyleAdapter;
    @NotNull
    private final h nullableClickableStackAxisStyleAdapter;
    @NotNull
    private final h nullableClickableStackBackgroundColorStyleAdapter;
    @NotNull
    private final h nullableClickableStackBorderColorStyleAdapter;
    @NotNull
    private final h nullableClickableStackBorderRadiusStyleAdapter;
    @NotNull
    private final h nullableClickableStackBorderWidthStyleAdapter;
    @NotNull
    private final h nullableClickableStackChildSizesStyleAdapter;
    @NotNull
    private final h nullableClickableStackGapStyleAdapter;
    @NotNull
    private final h nullableClickableStackMarginStyleAdapter;
    @NotNull
    private final h nullableClickableStackPaddingStyleAdapter;
    @NotNull
    private final h nullableClickableStackWidthStyleAdapter;
    @NotNull
    private final m.b options;

    public ClickableStack_ClickableStackComponentStyleJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a(ViewProps.BACKGROUND_COLOR, ViewProps.BORDER_WIDTH, ViewProps.BORDER_COLOR, "borderRadius", ViewProps.PADDING, ViewProps.MARGIN, "axis", "childSizes", "alignment", ViewProps.GAP, "width");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(AttributeStyles.ClickableStackBackgroundColorStyle.class, x0.d(), ViewProps.BACKGROUND_COLOR);
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableClickableStackBackgroundColorStyleAdapter = f10;
        h f11 = moshi.f(AttributeStyles.ClickableStackBorderWidthStyle.class, x0.d(), ViewProps.BORDER_WIDTH);
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableClickableStackBorderWidthStyleAdapter = f11;
        h f12 = moshi.f(AttributeStyles.ClickableStackBorderColorStyle.class, x0.d(), ViewProps.BORDER_COLOR);
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.nullableClickableStackBorderColorStyleAdapter = f12;
        h f13 = moshi.f(AttributeStyles.ClickableStackBorderRadiusStyle.class, x0.d(), "borderRadius");
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.nullableClickableStackBorderRadiusStyleAdapter = f13;
        h f14 = moshi.f(AttributeStyles.ClickableStackPaddingStyle.class, x0.d(), ViewProps.PADDING);
        Intrinsics.checkNotNullExpressionValue(f14, "adapter(...)");
        this.nullableClickableStackPaddingStyleAdapter = f14;
        h f15 = moshi.f(AttributeStyles.ClickableStackMarginStyle.class, x0.d(), ViewProps.MARGIN);
        Intrinsics.checkNotNullExpressionValue(f15, "adapter(...)");
        this.nullableClickableStackMarginStyleAdapter = f15;
        h f16 = moshi.f(AttributeStyles.ClickableStackAxisStyle.class, x0.d(), "axis");
        Intrinsics.checkNotNullExpressionValue(f16, "adapter(...)");
        this.nullableClickableStackAxisStyleAdapter = f16;
        h f17 = moshi.f(AttributeStyles.ClickableStackChildSizesStyle.class, x0.d(), "childSizes");
        Intrinsics.checkNotNullExpressionValue(f17, "adapter(...)");
        this.nullableClickableStackChildSizesStyleAdapter = f17;
        h f18 = moshi.f(AttributeStyles.ClickableStackAlignmentStyle.class, x0.d(), "alignment");
        Intrinsics.checkNotNullExpressionValue(f18, "adapter(...)");
        this.nullableClickableStackAlignmentStyleAdapter = f18;
        h f19 = moshi.f(AttributeStyles.ClickableStackGapStyle.class, x0.d(), ViewProps.GAP);
        Intrinsics.checkNotNullExpressionValue(f19, "adapter(...)");
        this.nullableClickableStackGapStyleAdapter = f19;
        h f20 = moshi.f(AttributeStyles.ClickableStackWidthStyle.class, x0.d(), "width");
        Intrinsics.checkNotNullExpressionValue(f20, "adapter(...)");
        this.nullableClickableStackWidthStyleAdapter = f20;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(65);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("ClickableStack.ClickableStackComponentStyle");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public ClickableStack.ClickableStackComponentStyle fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.u();
        AttributeStyles.ClickableStackBackgroundColorStyle clickableStackBackgroundColorStyle = null;
        AttributeStyles.ClickableStackBorderWidthStyle clickableStackBorderWidthStyle = null;
        AttributeStyles.ClickableStackBorderColorStyle clickableStackBorderColorStyle = null;
        AttributeStyles.ClickableStackBorderRadiusStyle clickableStackBorderRadiusStyle = null;
        AttributeStyles.ClickableStackPaddingStyle clickableStackPaddingStyle = null;
        AttributeStyles.ClickableStackMarginStyle clickableStackMarginStyle = null;
        AttributeStyles.ClickableStackAxisStyle clickableStackAxisStyle = null;
        AttributeStyles.ClickableStackChildSizesStyle clickableStackChildSizesStyle = null;
        AttributeStyles.ClickableStackAlignmentStyle clickableStackAlignmentStyle = null;
        AttributeStyles.ClickableStackGapStyle clickableStackGapStyle = null;
        AttributeStyles.ClickableStackWidthStyle clickableStackWidthStyle = null;
        while (reader.hasNext()) {
            switch (reader.J(this.options)) {
                case -1:
                    reader.E0();
                    reader.S();
                    break;
                case 0:
                    clickableStackBackgroundColorStyle = (AttributeStyles.ClickableStackBackgroundColorStyle) this.nullableClickableStackBackgroundColorStyleAdapter.fromJson(reader);
                    break;
                case 1:
                    clickableStackBorderWidthStyle = (AttributeStyles.ClickableStackBorderWidthStyle) this.nullableClickableStackBorderWidthStyleAdapter.fromJson(reader);
                    break;
                case 2:
                    clickableStackBorderColorStyle = (AttributeStyles.ClickableStackBorderColorStyle) this.nullableClickableStackBorderColorStyleAdapter.fromJson(reader);
                    break;
                case 3:
                    clickableStackBorderRadiusStyle = (AttributeStyles.ClickableStackBorderRadiusStyle) this.nullableClickableStackBorderRadiusStyleAdapter.fromJson(reader);
                    break;
                case 4:
                    clickableStackPaddingStyle = (AttributeStyles.ClickableStackPaddingStyle) this.nullableClickableStackPaddingStyleAdapter.fromJson(reader);
                    break;
                case 5:
                    clickableStackMarginStyle = (AttributeStyles.ClickableStackMarginStyle) this.nullableClickableStackMarginStyleAdapter.fromJson(reader);
                    break;
                case 6:
                    clickableStackAxisStyle = (AttributeStyles.ClickableStackAxisStyle) this.nullableClickableStackAxisStyleAdapter.fromJson(reader);
                    break;
                case 7:
                    clickableStackChildSizesStyle = (AttributeStyles.ClickableStackChildSizesStyle) this.nullableClickableStackChildSizesStyleAdapter.fromJson(reader);
                    break;
                case 8:
                    clickableStackAlignmentStyle = (AttributeStyles.ClickableStackAlignmentStyle) this.nullableClickableStackAlignmentStyleAdapter.fromJson(reader);
                    break;
                case 9:
                    clickableStackGapStyle = (AttributeStyles.ClickableStackGapStyle) this.nullableClickableStackGapStyleAdapter.fromJson(reader);
                    break;
                case 10:
                    clickableStackWidthStyle = (AttributeStyles.ClickableStackWidthStyle) this.nullableClickableStackWidthStyleAdapter.fromJson(reader);
                    break;
            }
        }
        reader.D();
        return new ClickableStack.ClickableStackComponentStyle(clickableStackBackgroundColorStyle, clickableStackBorderWidthStyle, clickableStackBorderColorStyle, clickableStackBorderRadiusStyle, clickableStackPaddingStyle, clickableStackMarginStyle, clickableStackAxisStyle, clickableStackChildSizesStyle, clickableStackAlignmentStyle, clickableStackGapStyle, clickableStackWidthStyle);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, ClickableStack.ClickableStackComponentStyle clickableStackComponentStyle) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (clickableStackComponentStyle != null) {
            writer.k();
            writer.J(ViewProps.BACKGROUND_COLOR);
            this.nullableClickableStackBackgroundColorStyleAdapter.toJson(writer, clickableStackComponentStyle.getBackgroundColor());
            writer.J(ViewProps.BORDER_WIDTH);
            this.nullableClickableStackBorderWidthStyleAdapter.toJson(writer, clickableStackComponentStyle.getBorderWidth());
            writer.J(ViewProps.BORDER_COLOR);
            this.nullableClickableStackBorderColorStyleAdapter.toJson(writer, clickableStackComponentStyle.getBorderColor());
            writer.J("borderRadius");
            this.nullableClickableStackBorderRadiusStyleAdapter.toJson(writer, clickableStackComponentStyle.getBorderRadius());
            writer.J(ViewProps.PADDING);
            this.nullableClickableStackPaddingStyleAdapter.toJson(writer, clickableStackComponentStyle.getPadding());
            writer.J(ViewProps.MARGIN);
            this.nullableClickableStackMarginStyleAdapter.toJson(writer, clickableStackComponentStyle.getMargin());
            writer.J("axis");
            this.nullableClickableStackAxisStyleAdapter.toJson(writer, clickableStackComponentStyle.getAxis());
            writer.J("childSizes");
            this.nullableClickableStackChildSizesStyleAdapter.toJson(writer, clickableStackComponentStyle.getChildSizes());
            writer.J("alignment");
            this.nullableClickableStackAlignmentStyleAdapter.toJson(writer, clickableStackComponentStyle.getAlignment());
            writer.J(ViewProps.GAP);
            this.nullableClickableStackGapStyleAdapter.toJson(writer, clickableStackComponentStyle.getGap());
            writer.J("width");
            this.nullableClickableStackWidthStyleAdapter.toJson(writer, clickableStackComponentStyle.getWidth());
            writer.s();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
