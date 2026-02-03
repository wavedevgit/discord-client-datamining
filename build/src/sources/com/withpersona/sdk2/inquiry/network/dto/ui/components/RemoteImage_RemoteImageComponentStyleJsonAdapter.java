package com.withpersona.sdk2.inquiry.network.dto.ui.components;

import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.AttributeStyles;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000d\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001c\u0010\u001b\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0019R\u001c\u0010\u001d\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001c0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u0019R\u001c\u0010\u001f\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001e0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010\u0019R\u001c\u0010!\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010 0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u0010\u0019R\u001c\u0010#\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\"0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b#\u0010\u0019¨\u0006$"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage_RemoteImageComponentStyleJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage$RemoteImageComponentStyle;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage$RemoteImageComponentStyle;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage$RemoteImageComponentStyle;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$RemoteImageHeightStyle;", "nullableRemoteImageHeightStyleAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$RemoteImageWidthStyle;", "nullableRemoteImageWidthStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$RemoteImageJustifyStyle;", "nullableRemoteImageJustifyStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$RemoteImageMarginStyle;", "nullableRemoteImageMarginStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$RemoteImageStrokeColorStyle;", "nullableRemoteImageStrokeColorStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$RemoteImageFillColorStyle;", "nullableRemoteImageFillColorStyleAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class RemoteImage_RemoteImageComponentStyleJsonAdapter extends h {
    @NotNull
    private final h nullableRemoteImageFillColorStyleAdapter;
    @NotNull
    private final h nullableRemoteImageHeightStyleAdapter;
    @NotNull
    private final h nullableRemoteImageJustifyStyleAdapter;
    @NotNull
    private final h nullableRemoteImageMarginStyleAdapter;
    @NotNull
    private final h nullableRemoteImageStrokeColorStyleAdapter;
    @NotNull
    private final h nullableRemoteImageWidthStyleAdapter;
    @NotNull
    private final m.b options;

    public RemoteImage_RemoteImageComponentStyleJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("height", "width", "justify", ViewProps.MARGIN, "strokeColor", "fillColor");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(AttributeStyles.RemoteImageHeightStyle.class, x0.d(), "height");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableRemoteImageHeightStyleAdapter = f10;
        h f11 = moshi.f(AttributeStyles.RemoteImageWidthStyle.class, x0.d(), "width");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableRemoteImageWidthStyleAdapter = f11;
        h f12 = moshi.f(AttributeStyles.RemoteImageJustifyStyle.class, x0.d(), "justify");
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.nullableRemoteImageJustifyStyleAdapter = f12;
        h f13 = moshi.f(AttributeStyles.RemoteImageMarginStyle.class, x0.d(), ViewProps.MARGIN);
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.nullableRemoteImageMarginStyleAdapter = f13;
        h f14 = moshi.f(AttributeStyles.RemoteImageStrokeColorStyle.class, x0.d(), "strokeColor");
        Intrinsics.checkNotNullExpressionValue(f14, "adapter(...)");
        this.nullableRemoteImageStrokeColorStyleAdapter = f14;
        h f15 = moshi.f(AttributeStyles.RemoteImageFillColorStyle.class, x0.d(), "fillColor");
        Intrinsics.checkNotNullExpressionValue(f15, "adapter(...)");
        this.nullableRemoteImageFillColorStyleAdapter = f15;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(59);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("RemoteImage.RemoteImageComponentStyle");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public RemoteImage.RemoteImageComponentStyle fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        AttributeStyles.RemoteImageHeightStyle remoteImageHeightStyle = null;
        AttributeStyles.RemoteImageWidthStyle remoteImageWidthStyle = null;
        AttributeStyles.RemoteImageJustifyStyle remoteImageJustifyStyle = null;
        AttributeStyles.RemoteImageMarginStyle remoteImageMarginStyle = null;
        AttributeStyles.RemoteImageStrokeColorStyle remoteImageStrokeColorStyle = null;
        AttributeStyles.RemoteImageFillColorStyle remoteImageFillColorStyle = null;
        while (reader.hasNext()) {
            switch (reader.t0(this.options)) {
                case -1:
                    reader.F0();
                    reader.P();
                    break;
                case 0:
                    remoteImageHeightStyle = (AttributeStyles.RemoteImageHeightStyle) this.nullableRemoteImageHeightStyleAdapter.fromJson(reader);
                    break;
                case 1:
                    remoteImageWidthStyle = (AttributeStyles.RemoteImageWidthStyle) this.nullableRemoteImageWidthStyleAdapter.fromJson(reader);
                    break;
                case 2:
                    remoteImageJustifyStyle = (AttributeStyles.RemoteImageJustifyStyle) this.nullableRemoteImageJustifyStyleAdapter.fromJson(reader);
                    break;
                case 3:
                    remoteImageMarginStyle = (AttributeStyles.RemoteImageMarginStyle) this.nullableRemoteImageMarginStyleAdapter.fromJson(reader);
                    break;
                case 4:
                    remoteImageStrokeColorStyle = (AttributeStyles.RemoteImageStrokeColorStyle) this.nullableRemoteImageStrokeColorStyleAdapter.fromJson(reader);
                    break;
                case 5:
                    remoteImageFillColorStyle = (AttributeStyles.RemoteImageFillColorStyle) this.nullableRemoteImageFillColorStyleAdapter.fromJson(reader);
                    break;
            }
        }
        reader.y();
        return new RemoteImage.RemoteImageComponentStyle(remoteImageHeightStyle, remoteImageWidthStyle, remoteImageJustifyStyle, remoteImageMarginStyle, remoteImageStrokeColorStyle, remoteImageFillColorStyle);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, RemoteImage.RemoteImageComponentStyle remoteImageComponentStyle) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (remoteImageComponentStyle != null) {
            writer.l();
            writer.t0("height");
            this.nullableRemoteImageHeightStyleAdapter.toJson(writer, remoteImageComponentStyle.getHeight());
            writer.t0("width");
            this.nullableRemoteImageWidthStyleAdapter.toJson(writer, remoteImageComponentStyle.getWidth());
            writer.t0("justify");
            this.nullableRemoteImageJustifyStyleAdapter.toJson(writer, remoteImageComponentStyle.getJustify());
            writer.t0(ViewProps.MARGIN);
            this.nullableRemoteImageMarginStyleAdapter.toJson(writer, remoteImageComponentStyle.getMargin());
            writer.t0("strokeColor");
            this.nullableRemoteImageStrokeColorStyleAdapter.toJson(writer, remoteImageComponentStyle.getStrokeColor());
            writer.t0("fillColor");
            this.nullableRemoteImageFillColorStyleAdapter.toJson(writer, remoteImageComponentStyle.getFillColor());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
