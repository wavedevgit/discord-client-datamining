package com.withpersona.sdk2.inquiry.network.dto.ui.styling;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.AttributeStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019¨\u0006\u001a"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles_InputCheckboxTextColorStyleJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputCheckboxTextColorStyle;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputCheckboxTextColorStyle;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/AttributeStyles$InputCheckboxTextColorStyle;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$SimpleElementColor;", "nullableSimpleElementColorAdapter", "Lcom/squareup/moshi/h;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class AttributeStyles_InputCheckboxTextColorStyleJsonAdapter extends h {
    @NotNull
    private final h nullableSimpleElementColorAdapter;
    @NotNull
    private final m.b options;

    public AttributeStyles_InputCheckboxTextColorStyleJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("base", "description", "error");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(StyleElements.SimpleElementColor.class, x0.d(), "base");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableSimpleElementColorAdapter = f10;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(65);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("AttributeStyles.InputCheckboxTextColorStyle");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public AttributeStyles.InputCheckboxTextColorStyle fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.s();
        StyleElements.SimpleElementColor simpleElementColor = null;
        StyleElements.SimpleElementColor simpleElementColor2 = null;
        StyleElements.SimpleElementColor simpleElementColor3 = null;
        while (reader.hasNext()) {
            int W = reader.W(this.options);
            if (W == -1) {
                reader.E0();
                reader.P();
            } else if (W == 0) {
                simpleElementColor = (StyleElements.SimpleElementColor) this.nullableSimpleElementColorAdapter.fromJson(reader);
            } else if (W == 1) {
                simpleElementColor2 = (StyleElements.SimpleElementColor) this.nullableSimpleElementColorAdapter.fromJson(reader);
            } else if (W == 2) {
                simpleElementColor3 = (StyleElements.SimpleElementColor) this.nullableSimpleElementColorAdapter.fromJson(reader);
            }
        }
        reader.z();
        return new AttributeStyles.InputCheckboxTextColorStyle(simpleElementColor, simpleElementColor2, simpleElementColor3);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, AttributeStyles.InputCheckboxTextColorStyle inputCheckboxTextColorStyle) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (inputCheckboxTextColorStyle != null) {
            writer.k();
            writer.W("base");
            this.nullableSimpleElementColorAdapter.toJson(writer, inputCheckboxTextColorStyle.getBase());
            writer.W("description");
            this.nullableSimpleElementColorAdapter.toJson(writer, inputCheckboxTextColorStyle.getDescription());
            writer.W("error");
            this.nullableSimpleElementColorAdapter.toJson(writer, inputCheckboxTextColorStyle.getError());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
