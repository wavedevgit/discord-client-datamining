package com.withpersona.sdk2.inquiry.network.dto.ui.components;

import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.QRCode;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.AttributeStyles;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000^\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001c\u0010\u001b\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0019R\u001c\u0010\u001d\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001c0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u0019R\u001c\u0010\u001f\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001e0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010\u0019R\u001c\u0010!\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010 0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u0010\u0019¨\u0006\""}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/QRCode_QRCodeComponentStyleJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/QRCode$QRCodeComponentStyle;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/QRCode$QRCodeComponentStyle;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/QRCode$QRCodeComponentStyle;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$QRCodeWidthStyle;", "nullableQRCodeWidthStyleAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$QRCodeJustifyStyle;", "nullableQRCodeJustifyStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$QRCodeMarginStyle;", "nullableQRCodeMarginStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$QRCodeStrokeColorStyle;", "nullableQRCodeStrokeColorStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$QRCodeFillColorStyle;", "nullableQRCodeFillColorStyleAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class QRCode_QRCodeComponentStyleJsonAdapter extends h {
    @NotNull
    private final h nullableQRCodeFillColorStyleAdapter;
    @NotNull
    private final h nullableQRCodeJustifyStyleAdapter;
    @NotNull
    private final h nullableQRCodeMarginStyleAdapter;
    @NotNull
    private final h nullableQRCodeStrokeColorStyleAdapter;
    @NotNull
    private final h nullableQRCodeWidthStyleAdapter;
    @NotNull
    private final m.b options;

    public QRCode_QRCodeComponentStyleJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("width", "justify", ViewProps.MARGIN, "strokeColor", "fillColor");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(AttributeStyles.QRCodeWidthStyle.class, x0.d(), "width");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableQRCodeWidthStyleAdapter = f10;
        h f11 = moshi.f(AttributeStyles.QRCodeJustifyStyle.class, x0.d(), "justify");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableQRCodeJustifyStyleAdapter = f11;
        h f12 = moshi.f(AttributeStyles.QRCodeMarginStyle.class, x0.d(), ViewProps.MARGIN);
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.nullableQRCodeMarginStyleAdapter = f12;
        h f13 = moshi.f(AttributeStyles.QRCodeStrokeColorStyle.class, x0.d(), "strokeColor");
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.nullableQRCodeStrokeColorStyleAdapter = f13;
        h f14 = moshi.f(AttributeStyles.QRCodeFillColorStyle.class, x0.d(), "fillColor");
        Intrinsics.checkNotNullExpressionValue(f14, "adapter(...)");
        this.nullableQRCodeFillColorStyleAdapter = f14;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(49);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("QRCode.QRCodeComponentStyle");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public QRCode.QRCodeComponentStyle fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        AttributeStyles.QRCodeWidthStyle qRCodeWidthStyle = null;
        AttributeStyles.QRCodeJustifyStyle qRCodeJustifyStyle = null;
        AttributeStyles.QRCodeMarginStyle qRCodeMarginStyle = null;
        AttributeStyles.QRCodeStrokeColorStyle qRCodeStrokeColorStyle = null;
        AttributeStyles.QRCodeFillColorStyle qRCodeFillColorStyle = null;
        while (reader.hasNext()) {
            int t02 = reader.t0(this.options);
            if (t02 == -1) {
                reader.F0();
                reader.P();
            } else if (t02 == 0) {
                qRCodeWidthStyle = (AttributeStyles.QRCodeWidthStyle) this.nullableQRCodeWidthStyleAdapter.fromJson(reader);
            } else if (t02 == 1) {
                qRCodeJustifyStyle = (AttributeStyles.QRCodeJustifyStyle) this.nullableQRCodeJustifyStyleAdapter.fromJson(reader);
            } else if (t02 == 2) {
                qRCodeMarginStyle = (AttributeStyles.QRCodeMarginStyle) this.nullableQRCodeMarginStyleAdapter.fromJson(reader);
            } else if (t02 == 3) {
                qRCodeStrokeColorStyle = (AttributeStyles.QRCodeStrokeColorStyle) this.nullableQRCodeStrokeColorStyleAdapter.fromJson(reader);
            } else if (t02 == 4) {
                qRCodeFillColorStyle = (AttributeStyles.QRCodeFillColorStyle) this.nullableQRCodeFillColorStyleAdapter.fromJson(reader);
            }
        }
        reader.y();
        return new QRCode.QRCodeComponentStyle(qRCodeWidthStyle, qRCodeJustifyStyle, qRCodeMarginStyle, qRCodeStrokeColorStyle, qRCodeFillColorStyle);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, QRCode.QRCodeComponentStyle qRCodeComponentStyle) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (qRCodeComponentStyle != null) {
            writer.l();
            writer.t0("width");
            this.nullableQRCodeWidthStyleAdapter.toJson(writer, qRCodeComponentStyle.getWidth());
            writer.t0("justify");
            this.nullableQRCodeJustifyStyleAdapter.toJson(writer, qRCodeComponentStyle.getJustify());
            writer.t0(ViewProps.MARGIN);
            this.nullableQRCodeMarginStyleAdapter.toJson(writer, qRCodeComponentStyle.getMargin());
            writer.t0("strokeColor");
            this.nullableQRCodeStrokeColorStyleAdapter.toJson(writer, qRCodeComponentStyle.getStrokeColor());
            writer.t0("fillColor");
            this.nullableQRCodeFillColorStyleAdapter.toJson(writer, qRCodeComponentStyle.getFillColor());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
