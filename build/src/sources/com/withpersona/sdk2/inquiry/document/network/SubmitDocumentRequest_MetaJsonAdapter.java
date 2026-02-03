package com.withpersona.sdk2.inquiry.document.network;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.document.network.SubmitDocumentRequest;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0016\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\f\u0010\u0015R\u001a\u0010\u0018\u001a\b\u0012\u0004\u0012\u00020\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010\u0017¨\u0006\u0019"}, d2 = {"Lcom/withpersona/sdk2/inquiry/document/network/SubmitDocumentRequest_MetaJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/document/network/SubmitDocumentRequest$Meta;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "a", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/document/network/SubmitDocumentRequest$Meta;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "b", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/document/network/SubmitDocumentRequest$Meta;)V", "Lcom/squareup/moshi/m$b;", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/h;", "stringAdapter", "document_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class SubmitDocumentRequest_MetaJsonAdapter extends h {

    /* renamed from: a  reason: collision with root package name */
    private final m.b f18130a;

    /* renamed from: b  reason: collision with root package name */
    private final h f18131b;

    public SubmitDocumentRequest_MetaJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("fromStep", "fromComponent");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.f18130a = a10;
        h f10 = moshi.f(String.class, x0.d(), "fromStep");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.f18131b = f10;
    }

    @Override // com.squareup.moshi.h
    /* renamed from: a */
    public SubmitDocumentRequest.Meta fromJson(m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        String str = null;
        String str2 = null;
        while (reader.hasNext()) {
            int A0 = reader.A0(this.f18130a);
            if (A0 != -1) {
                if (A0 != 0) {
                    if (A0 == 1 && (str2 = (String) this.f18131b.fromJson(reader)) == null) {
                        throw vm.c.x("fromComponent", "fromComponent", reader);
                    }
                } else {
                    str = (String) this.f18131b.fromJson(reader);
                    if (str == null) {
                        throw vm.c.x("fromStep", "fromStep", reader);
                    }
                }
            } else {
                reader.E0();
                reader.P();
            }
        }
        reader.y();
        if (str != null) {
            if (str2 != null) {
                return new SubmitDocumentRequest.Meta(str, str2);
            }
            throw vm.c.o("fromComponent", "fromComponent", reader);
        }
        throw vm.c.o("fromStep", "fromStep", reader);
    }

    @Override // com.squareup.moshi.h
    /* renamed from: b */
    public void toJson(t writer, SubmitDocumentRequest.Meta meta) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (meta != null) {
            writer.l();
            writer.A0("fromStep");
            this.f18131b.toJson(writer, meta.b());
            writer.A0("fromComponent");
            this.f18131b.toJson(writer, meta.a());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(48);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("SubmitDocumentRequest.Meta");
        sb2.append(')');
        return sb2.toString();
    }
}
