package com.withpersona.sdk2.inquiry.document.network;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.document.network.CreateDocumentRequest;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0016\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\f\u0010\u0015R\u001a\u0010\u0019\u001a\b\u0012\u0004\u0012\u00020\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010\u0018R\u001a\u0010\u001c\u001a\b\u0012\u0004\u0012\u00020\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0018¨\u0006\u001d"}, d2 = {"Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentRequestJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentRequest;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "a", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentRequest;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "b", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentRequest;)V", "Lcom/squareup/moshi/m$b;", "Lcom/squareup/moshi/m$b;", "options", "Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentRequest$Data;", "Lcom/squareup/moshi/h;", "dataAdapter", "Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentRequest$Meta;", "c", "metaAdapter", "document_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class CreateDocumentRequestJsonAdapter extends h {

    /* renamed from: a  reason: collision with root package name */
    private final m.b f18469a;

    /* renamed from: b  reason: collision with root package name */
    private final h f18470b;

    /* renamed from: c  reason: collision with root package name */
    private final h f18471c;

    public CreateDocumentRequestJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("data", "meta");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.f18469a = a10;
        h f10 = moshi.f(CreateDocumentRequest.Data.class, x0.d(), "data");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.f18470b = f10;
        h f11 = moshi.f(CreateDocumentRequest.Meta.class, x0.d(), "meta");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.f18471c = f11;
    }

    @Override // com.squareup.moshi.h
    /* renamed from: a */
    public CreateDocumentRequest fromJson(m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.u();
        CreateDocumentRequest.Data data = null;
        CreateDocumentRequest.Meta meta = null;
        while (reader.hasNext()) {
            int J = reader.J(this.f18469a);
            if (J != -1) {
                if (J != 0) {
                    if (J == 1 && (meta = (CreateDocumentRequest.Meta) this.f18471c.fromJson(reader)) == null) {
                        throw an.c.x("meta", "meta", reader);
                    }
                } else {
                    data = (CreateDocumentRequest.Data) this.f18470b.fromJson(reader);
                    if (data == null) {
                        throw an.c.x("data_", "data", reader);
                    }
                }
            } else {
                reader.E0();
                reader.S();
            }
        }
        reader.D();
        if (data != null) {
            if (meta != null) {
                return new CreateDocumentRequest(data, meta);
            }
            throw an.c.o("meta", "meta", reader);
        }
        throw an.c.o("data_", "data", reader);
    }

    @Override // com.squareup.moshi.h
    /* renamed from: b */
    public void toJson(t writer, CreateDocumentRequest createDocumentRequest) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (createDocumentRequest != null) {
            writer.k();
            writer.J("data");
            this.f18470b.toJson(writer, createDocumentRequest.a());
            writer.J("meta");
            this.f18471c.toJson(writer, createDocumentRequest.b());
            writer.s();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(43);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("CreateDocumentRequest");
        sb2.append(')');
        return sb2.toString();
    }
}
