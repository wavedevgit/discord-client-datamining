package com.withpersona.sdk2.inquiry.network.dto.ui.styling;

import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.AttributeStyles;
import java.lang.reflect.Constructor;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import ym.c;
@Metadata(d1 = {"\u0000j\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001c\u0010\u001b\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0019R\u001c\u0010\u001d\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001c0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u0019R\u001c\u0010\u001f\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001e0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010\u0019R\u001c\u0010!\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010 0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u0010\u0019R\u001c\u0010#\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\"0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b#\u0010\u0019R\u001e\u0010%\u001a\n\u0012\u0004\u0012\u00020\u0002\u0018\u00010$8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b%\u0010&¨\u0006'"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/LocalImageComponentStyleJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/LocalImageComponentStyle;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/LocalImageComponentStyle;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/LocalImageComponentStyle;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$LocalImageStrokeColorStyle;", "nullableLocalImageStrokeColorStyleAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$LocalImageFillColorStyle;", "nullableLocalImageFillColorStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$LocalImageHeightStyle;", "nullableLocalImageHeightStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$LocalImageWidthStyle;", "nullableLocalImageWidthStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$LocalImageJustifyStyle;", "nullableLocalImageJustifyStyleAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$LocalImageMarginStyle;", "nullableLocalImageMarginStyleAdapter", "Ljava/lang/reflect/Constructor;", "constructorRef", "Ljava/lang/reflect/Constructor;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nLocalImageComponentStyleJsonAdapter.kt\nKotlin\n*S Kotlin\n*F\n+ 1 LocalImageComponentStyleJsonAdapter.kt\ncom/withpersona/sdk2/inquiry/network/dto/ui/styling/LocalImageComponentStyleJsonAdapter\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,163:1\n1#2:164\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class LocalImageComponentStyleJsonAdapter extends h {
    private volatile Constructor<LocalImageComponentStyle> constructorRef;
    @NotNull
    private final h nullableLocalImageFillColorStyleAdapter;
    @NotNull
    private final h nullableLocalImageHeightStyleAdapter;
    @NotNull
    private final h nullableLocalImageJustifyStyleAdapter;
    @NotNull
    private final h nullableLocalImageMarginStyleAdapter;
    @NotNull
    private final h nullableLocalImageStrokeColorStyleAdapter;
    @NotNull
    private final h nullableLocalImageWidthStyleAdapter;
    @NotNull
    private final m.b options;

    public LocalImageComponentStyleJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("strokeColor", "fillColor", "height", "width", "justify", ViewProps.MARGIN);
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(AttributeStyles.LocalImageStrokeColorStyle.class, x0.d(), "strokeColor");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableLocalImageStrokeColorStyleAdapter = f10;
        h f11 = moshi.f(AttributeStyles.LocalImageFillColorStyle.class, x0.d(), "fillColor");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableLocalImageFillColorStyleAdapter = f11;
        h f12 = moshi.f(AttributeStyles.LocalImageHeightStyle.class, x0.d(), "height");
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.nullableLocalImageHeightStyleAdapter = f12;
        h f13 = moshi.f(AttributeStyles.LocalImageWidthStyle.class, x0.d(), "width");
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.nullableLocalImageWidthStyleAdapter = f13;
        h f14 = moshi.f(AttributeStyles.LocalImageJustifyStyle.class, x0.d(), "justify");
        Intrinsics.checkNotNullExpressionValue(f14, "adapter(...)");
        this.nullableLocalImageJustifyStyleAdapter = f14;
        h f15 = moshi.f(AttributeStyles.LocalImageMarginStyle.class, x0.d(), ViewProps.MARGIN);
        Intrinsics.checkNotNullExpressionValue(f15, "adapter(...)");
        this.nullableLocalImageMarginStyleAdapter = f15;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(46);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("LocalImageComponentStyle");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public LocalImageComponentStyle fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.s();
        int i10 = -1;
        AttributeStyles.LocalImageStrokeColorStyle localImageStrokeColorStyle = null;
        AttributeStyles.LocalImageFillColorStyle localImageFillColorStyle = null;
        AttributeStyles.LocalImageHeightStyle localImageHeightStyle = null;
        AttributeStyles.LocalImageWidthStyle localImageWidthStyle = null;
        AttributeStyles.LocalImageJustifyStyle localImageJustifyStyle = null;
        AttributeStyles.LocalImageMarginStyle localImageMarginStyle = null;
        while (reader.hasNext()) {
            switch (reader.W(this.options)) {
                case -1:
                    reader.E0();
                    reader.P();
                    break;
                case 0:
                    localImageStrokeColorStyle = (AttributeStyles.LocalImageStrokeColorStyle) this.nullableLocalImageStrokeColorStyleAdapter.fromJson(reader);
                    i10 &= -2;
                    break;
                case 1:
                    localImageFillColorStyle = (AttributeStyles.LocalImageFillColorStyle) this.nullableLocalImageFillColorStyleAdapter.fromJson(reader);
                    i10 &= -3;
                    break;
                case 2:
                    localImageHeightStyle = (AttributeStyles.LocalImageHeightStyle) this.nullableLocalImageHeightStyleAdapter.fromJson(reader);
                    i10 &= -5;
                    break;
                case 3:
                    localImageWidthStyle = (AttributeStyles.LocalImageWidthStyle) this.nullableLocalImageWidthStyleAdapter.fromJson(reader);
                    i10 &= -9;
                    break;
                case 4:
                    localImageJustifyStyle = (AttributeStyles.LocalImageJustifyStyle) this.nullableLocalImageJustifyStyleAdapter.fromJson(reader);
                    i10 &= -17;
                    break;
                case 5:
                    localImageMarginStyle = (AttributeStyles.LocalImageMarginStyle) this.nullableLocalImageMarginStyleAdapter.fromJson(reader);
                    i10 &= -33;
                    break;
            }
        }
        reader.z();
        if (i10 == -64) {
            AttributeStyles.LocalImageMarginStyle localImageMarginStyle2 = localImageMarginStyle;
            AttributeStyles.LocalImageJustifyStyle localImageJustifyStyle2 = localImageJustifyStyle;
            AttributeStyles.LocalImageWidthStyle localImageWidthStyle2 = localImageWidthStyle;
            return new LocalImageComponentStyle(localImageStrokeColorStyle, localImageFillColorStyle, localImageHeightStyle, localImageWidthStyle2, localImageJustifyStyle2, localImageMarginStyle2);
        }
        AttributeStyles.LocalImageMarginStyle localImageMarginStyle3 = localImageMarginStyle;
        AttributeStyles.LocalImageJustifyStyle localImageJustifyStyle3 = localImageJustifyStyle;
        AttributeStyles.LocalImageWidthStyle localImageWidthStyle3 = localImageWidthStyle;
        AttributeStyles.LocalImageHeightStyle localImageHeightStyle2 = localImageHeightStyle;
        AttributeStyles.LocalImageFillColorStyle localImageFillColorStyle2 = localImageFillColorStyle;
        AttributeStyles.LocalImageStrokeColorStyle localImageStrokeColorStyle2 = localImageStrokeColorStyle;
        Constructor<LocalImageComponentStyle> constructor = this.constructorRef;
        if (constructor == null) {
            constructor = LocalImageComponentStyle.class.getDeclaredConstructor(AttributeStyles.LocalImageStrokeColorStyle.class, AttributeStyles.LocalImageFillColorStyle.class, AttributeStyles.LocalImageHeightStyle.class, AttributeStyles.LocalImageWidthStyle.class, AttributeStyles.LocalImageJustifyStyle.class, AttributeStyles.LocalImageMarginStyle.class, Integer.TYPE, c.f54853c);
            this.constructorRef = constructor;
            Intrinsics.checkNotNullExpressionValue(constructor, "also(...)");
        }
        LocalImageComponentStyle newInstance = constructor.newInstance(localImageStrokeColorStyle2, localImageFillColorStyle2, localImageHeightStyle2, localImageWidthStyle3, localImageJustifyStyle3, localImageMarginStyle3, Integer.valueOf(i10), null);
        Intrinsics.checkNotNullExpressionValue(newInstance, "newInstance(...)");
        return newInstance;
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, LocalImageComponentStyle localImageComponentStyle) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (localImageComponentStyle != null) {
            writer.k();
            writer.W("strokeColor");
            this.nullableLocalImageStrokeColorStyleAdapter.toJson(writer, localImageComponentStyle.getStrokeColor());
            writer.W("fillColor");
            this.nullableLocalImageFillColorStyleAdapter.toJson(writer, localImageComponentStyle.getFillColor());
            writer.W("height");
            this.nullableLocalImageHeightStyleAdapter.toJson(writer, localImageComponentStyle.getHeight());
            writer.W("width");
            this.nullableLocalImageWidthStyleAdapter.toJson(writer, localImageComponentStyle.getWidth());
            writer.W("justify");
            this.nullableLocalImageJustifyStyleAdapter.toJson(writer, localImageComponentStyle.getJustify());
            writer.W(ViewProps.MARGIN);
            this.nullableLocalImageMarginStyleAdapter.toJson(writer, localImageComponentStyle.getMargin());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
