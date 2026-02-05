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
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\b\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0016\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\f\u0010\u0015R\u001a\u0010\u0018\u001a\b\u0012\u0004\u0012\u00020\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010\u0017R\u001a\u0010\u001b\u001a\b\u0012\u0004\u0012\u00020\u00190\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\u0017¨\u0006\u001c"}, d2 = {"Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentRequest_AttributesJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentRequest$Attributes;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "a", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentRequest$Attributes;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "b", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/document/network/CreateDocumentRequest$Attributes;)V", "Lcom/squareup/moshi/m$b;", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/h;", "stringAdapter", "", "c", "intAdapter", "document_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class CreateDocumentRequest_AttributesJsonAdapter extends h {

    /* renamed from: a  reason: collision with root package name */
    private final m.b f18492a;

    /* renamed from: b  reason: collision with root package name */
    private final h f18493b;

    /* renamed from: c  reason: collision with root package name */
    private final h f18494c;

    public CreateDocumentRequest_AttributesJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("kind", "fileLimit");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.f18492a = a10;
        h f10 = moshi.f(String.class, x0.d(), "kind");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.f18493b = f10;
        h f11 = moshi.f(Integer.TYPE, x0.d(), "fileLimit");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.f18494c = f11;
    }

    @Override // com.squareup.moshi.h
    /* renamed from: a */
    public CreateDocumentRequest.Attributes fromJson(m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.s();
        String str = null;
        Integer num = null;
        while (reader.hasNext()) {
            int W = reader.W(this.f18492a);
            if (W != -1) {
                if (W != 0) {
                    if (W == 1 && (num = (Integer) this.f18494c.fromJson(reader)) == null) {
                        throw ym.c.x("fileLimit", "fileLimit", reader);
                    }
                } else {
                    str = (String) this.f18493b.fromJson(reader);
                    if (str == null) {
                        throw ym.c.x("kind", "kind", reader);
                    }
                }
            } else {
                reader.E0();
                reader.P();
            }
        }
        reader.z();
        if (str != null) {
            if (num != null) {
                return new CreateDocumentRequest.Attributes(str, num.intValue());
            }
            throw ym.c.o("fileLimit", "fileLimit", reader);
        }
        throw ym.c.o("kind", "kind", reader);
    }

    @Override // com.squareup.moshi.h
    /* renamed from: b */
    public void toJson(t writer, CreateDocumentRequest.Attributes attributes) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (attributes != null) {
            writer.k();
            writer.W("kind");
            this.f18493b.toJson(writer, attributes.b());
            writer.W("fileLimit");
            this.f18494c.toJson(writer, Integer.valueOf(attributes.a()));
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(54);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("CreateDocumentRequest.Attributes");
        sb2.append(')');
        return sb2.toString();
    }
}
