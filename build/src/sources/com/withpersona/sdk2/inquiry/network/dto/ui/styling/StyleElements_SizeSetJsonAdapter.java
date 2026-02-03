package com.withpersona.sdk2.inquiry.network.dto.ui.styling;

import com.facebook.react.uimanager.ViewProps;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019¨\u0006\u001a"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements_SizeSetJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$SizeSet;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$SizeSet;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$SizeSet;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Size;", "nullableSizeAdapter", "Lcom/squareup/moshi/h;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class StyleElements_SizeSetJsonAdapter extends h {
    @NotNull
    private final h nullableSizeAdapter;
    @NotNull
    private final m.b options;

    public StyleElements_SizeSetJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a(ViewProps.TOP, ViewProps.BOTTOM, ViewProps.LEFT, ViewProps.RIGHT);
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(StyleElements.Size.class, x0.d(), ViewProps.TOP);
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableSizeAdapter = f10;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(43);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("StyleElements.SizeSet");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public StyleElements.SizeSet fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        StyleElements.Size size = null;
        StyleElements.Size size2 = null;
        StyleElements.Size size3 = null;
        StyleElements.Size size4 = null;
        while (reader.hasNext()) {
            int t02 = reader.t0(this.options);
            if (t02 == -1) {
                reader.F0();
                reader.P();
            } else if (t02 == 0) {
                size = (StyleElements.Size) this.nullableSizeAdapter.fromJson(reader);
            } else if (t02 == 1) {
                size2 = (StyleElements.Size) this.nullableSizeAdapter.fromJson(reader);
            } else if (t02 == 2) {
                size3 = (StyleElements.Size) this.nullableSizeAdapter.fromJson(reader);
            } else if (t02 == 3) {
                size4 = (StyleElements.Size) this.nullableSizeAdapter.fromJson(reader);
            }
        }
        reader.y();
        return new StyleElements.SizeSet(size, size2, size3, size4);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, StyleElements.SizeSet sizeSet) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (sizeSet != null) {
            writer.l();
            writer.t0(ViewProps.TOP);
            this.nullableSizeAdapter.toJson(writer, sizeSet.getTop());
            writer.t0(ViewProps.BOTTOM);
            this.nullableSizeAdapter.toJson(writer, sizeSet.getBottom());
            writer.t0(ViewProps.LEFT);
            this.nullableSizeAdapter.toJson(writer, sizeSet.getLeft());
            writer.t0(ViewProps.RIGHT);
            this.nullableSizeAdapter.toJson(writer, sizeSet.getRight());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
