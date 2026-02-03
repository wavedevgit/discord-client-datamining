package com.withpersona.sdk2.inquiry.document.network;

import com.squareup.moshi.a0;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.document.network.CreateDocumentResponse;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0016\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\f\u0010\u0015R\u001a\u0010\u0019\u001a\b\u0012\u0004\u0012\u00020\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010\u0018R\"\u0010\u001d\u001a\u0010\u0012\f\u0012\n\u0012\u0004\u0012\u00020\u001b\u0018\u00010\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001c\u0010\u0018¨\u0006\u001e"}, d2 = {"Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentResponseJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentResponse;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "a", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentResponse;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "b", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentResponse;)V", "Lcom/squareup/moshi/m$b;", "Lcom/squareup/moshi/m$b;", "options", "Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentResponse$Data;", "Lcom/squareup/moshi/h;", "dataAdapter", "", "Lcom/withpersona/sdk2/inquiry/document/network/DocumentFileData;", "c", "nullableListOfDocumentFileDataAdapter", "document_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class CreateDocumentResponseJsonAdapter extends h {

    /* renamed from: a  reason: collision with root package name */
    private final m.b f18097a;

    /* renamed from: b  reason: collision with root package name */
    private final h f18098b;

    /* renamed from: c  reason: collision with root package name */
    private final h f18099c;

    public CreateDocumentResponseJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("data", "included");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.f18097a = a10;
        h f10 = moshi.f(CreateDocumentResponse.Data.class, x0.d(), "data");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.f18098b = f10;
        h f11 = moshi.f(a0.j(List.class, DocumentFileData.class), x0.d(), "included");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.f18099c = f11;
    }

    @Override // com.squareup.moshi.h
    /* renamed from: a */
    public CreateDocumentResponse fromJson(m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        CreateDocumentResponse.Data data = null;
        List list = null;
        while (reader.hasNext()) {
            int A0 = reader.A0(this.f18097a);
            if (A0 != -1) {
                if (A0 != 0) {
                    if (A0 == 1) {
                        list = (List) this.f18099c.fromJson(reader);
                    }
                } else {
                    data = (CreateDocumentResponse.Data) this.f18098b.fromJson(reader);
                    if (data == null) {
                        throw vm.c.x("data_", "data", reader);
                    }
                }
            } else {
                reader.E0();
                reader.P();
            }
        }
        reader.y();
        if (data != null) {
            return new CreateDocumentResponse(data, list);
        }
        throw vm.c.o("data_", "data", reader);
    }

    @Override // com.squareup.moshi.h
    /* renamed from: b */
    public void toJson(t writer, CreateDocumentResponse createDocumentResponse) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (createDocumentResponse != null) {
            writer.l();
            writer.A0("data");
            this.f18098b.toJson(writer, createDocumentResponse.a());
            writer.A0("included");
            this.f18099c.toJson(writer, createDocumentResponse.b());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(44);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("CreateDocumentResponse");
        sb2.append(')');
        return sb2.toString();
    }
}
