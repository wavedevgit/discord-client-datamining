package com.withpersona.sdk2.inquiry.network.dto.government_id;

import com.squareup.moshi.a0;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.government_id.Id;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import ym.c;
@Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010 \n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001a\u0010\u0017\u001a\b\u0012\u0004\u0012\u00020\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018R \u0010\u001a\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00070\u00190\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\u0018R\u001c\u0010\u001c\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001b0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001c\u0010\u0018R\"\u0010\u001e\u001a\u0010\u0012\f\u0012\n\u0012\u0004\u0012\u00020\u001d\u0018\u00010\u00190\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001e\u0010\u0018¨\u0006\u001f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/government_id/IdJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/government_id/Id;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/government_id/Id;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/government_id/Id;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "stringAdapter", "Lcom/squareup/moshi/h;", "", "listOfStringAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/government_id/Id$IdIcon;", "nullableIdIconAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/government_id/CapturePageConfig;", "nullableListOfCapturePageConfigAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class IdJsonAdapter extends h {
    @NotNull
    private final h listOfStringAdapter;
    @NotNull
    private final h nullableIdIconAdapter;
    @NotNull
    private final h nullableListOfCapturePageConfigAdapter;
    @NotNull
    private final m.b options;
    @NotNull
    private final h stringAdapter;

    public IdJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("class", "requiresSides", "icon", "capturePageConfigs");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(String.class, x0.d(), "class");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.stringAdapter = f10;
        h f11 = moshi.f(a0.j(List.class, String.class), x0.d(), "requiresSides");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.listOfStringAdapter = f11;
        h f12 = moshi.f(Id.IdIcon.class, x0.d(), "icon");
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.nullableIdIconAdapter = f12;
        h f13 = moshi.f(a0.j(List.class, CapturePageConfig.class), x0.d(), "capturePageConfigs");
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.nullableListOfCapturePageConfigAdapter = f13;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(24);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("Id");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public Id fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.s();
        String str = null;
        List list = null;
        Id.IdIcon idIcon = null;
        List list2 = null;
        while (reader.hasNext()) {
            int W = reader.W(this.options);
            if (W == -1) {
                reader.E0();
                reader.P();
            } else if (W == 0) {
                str = (String) this.stringAdapter.fromJson(reader);
                if (str == null) {
                    throw c.x("class_", "class", reader);
                }
            } else if (W == 1) {
                list = (List) this.listOfStringAdapter.fromJson(reader);
                if (list == null) {
                    throw c.x("requiresSides", "requiresSides", reader);
                }
            } else if (W == 2) {
                idIcon = (Id.IdIcon) this.nullableIdIconAdapter.fromJson(reader);
            } else if (W == 3) {
                list2 = (List) this.nullableListOfCapturePageConfigAdapter.fromJson(reader);
            }
        }
        reader.z();
        if (str != null) {
            if (list != null) {
                return new Id(str, list, idIcon, list2);
            }
            throw c.o("requiresSides", "requiresSides", reader);
        }
        throw c.o("class_", "class", reader);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, Id id2) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (id2 != null) {
            writer.k();
            writer.W("class");
            this.stringAdapter.toJson(writer, id2.getClass());
            writer.W("requiresSides");
            this.listOfStringAdapter.toJson(writer, id2.getRequiresSides());
            writer.W("icon");
            this.nullableIdIconAdapter.toJson(writer, id2.getIcon());
            writer.W("capturePageConfigs");
            this.nullableListOfCapturePageConfigAdapter.toJson(writer, id2.getCapturePageConfigs());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
