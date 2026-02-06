package com.withpersona.sdk2.inquiry.document.network;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.document.network.SubmitDocumentRequest;
import java.lang.reflect.Constructor;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000T\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0016\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\f\u0010\u0015R\u001a\u0010\u0019\u001a\b\u0012\u0004\u0012\u00020\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010\u0018R\u001a\u0010\u001c\u001a\b\u0012\u0004\u0012\u00020\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0018R\u001e\u0010 \u001a\n\u0012\u0004\u0012\u00020\u0002\u0018\u00010\u001d8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001e\u0010\u001f¨\u0006!"}, d2 = {"Lcom/withpersona/sdk2/inquiry/document/network/SubmitDocumentRequestJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/document/network/SubmitDocumentRequest;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "a", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/document/network/SubmitDocumentRequest;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "b", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/document/network/SubmitDocumentRequest;)V", "Lcom/squareup/moshi/m$b;", "Lcom/squareup/moshi/m$b;", "options", "Lcom/withpersona/sdk2/inquiry/document/network/SubmitDocumentRequest$Data;", "Lcom/squareup/moshi/h;", "dataAdapter", "Lcom/withpersona/sdk2/inquiry/document/network/SubmitDocumentRequest$Meta;", "c", "metaAdapter", "Ljava/lang/reflect/Constructor;", "d", "Ljava/lang/reflect/Constructor;", "constructorRef", "document_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nSubmitDocumentRequestJsonAdapter.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SubmitDocumentRequestJsonAdapter.kt\ncom/withpersona/sdk2/inquiry/document/network/SubmitDocumentRequestJsonAdapter\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,96:1\n1#2:97\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class SubmitDocumentRequestJsonAdapter extends h {

    /* renamed from: a  reason: collision with root package name */
    private final m.b f18509a;

    /* renamed from: b  reason: collision with root package name */
    private final h f18510b;

    /* renamed from: c  reason: collision with root package name */
    private final h f18511c;

    /* renamed from: d  reason: collision with root package name */
    private volatile Constructor f18512d;

    public SubmitDocumentRequestJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("data", "meta");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.f18509a = a10;
        h f10 = moshi.f(SubmitDocumentRequest.Data.class, x0.d(), "data");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.f18510b = f10;
        h f11 = moshi.f(SubmitDocumentRequest.Meta.class, x0.d(), "meta");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.f18511c = f11;
    }

    @Override // com.squareup.moshi.h
    /* renamed from: a */
    public SubmitDocumentRequest fromJson(m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.u();
        SubmitDocumentRequest.Data data = null;
        SubmitDocumentRequest.Meta meta = null;
        int i10 = -1;
        while (reader.hasNext()) {
            int J = reader.J(this.f18509a);
            if (J != -1) {
                if (J != 0) {
                    if (J == 1 && (meta = (SubmitDocumentRequest.Meta) this.f18511c.fromJson(reader)) == null) {
                        throw an.c.x("meta", "meta", reader);
                    }
                } else {
                    data = (SubmitDocumentRequest.Data) this.f18510b.fromJson(reader);
                    if (data != null) {
                        i10 = -2;
                    } else {
                        throw an.c.x("data_", "data", reader);
                    }
                }
            } else {
                reader.E0();
                reader.S();
            }
        }
        reader.D();
        if (i10 == -2) {
            Intrinsics.checkNotNull(data, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.document.network.SubmitDocumentRequest.Data");
            if (meta != null) {
                return new SubmitDocumentRequest(data, meta);
            }
            throw an.c.o("meta", "meta", reader);
        }
        Constructor constructor = this.f18512d;
        if (constructor == null) {
            constructor = SubmitDocumentRequest.class.getDeclaredConstructor(SubmitDocumentRequest.Data.class, SubmitDocumentRequest.Meta.class, Integer.TYPE, an.c.f1164c);
            this.f18512d = constructor;
            Intrinsics.checkNotNullExpressionValue(constructor, "also(...)");
        }
        if (meta != null) {
            Object newInstance = constructor.newInstance(data, meta, Integer.valueOf(i10), null);
            Intrinsics.checkNotNullExpressionValue(newInstance, "newInstance(...)");
            return (SubmitDocumentRequest) newInstance;
        }
        throw an.c.o("meta", "meta", reader);
    }

    @Override // com.squareup.moshi.h
    /* renamed from: b */
    public void toJson(t writer, SubmitDocumentRequest submitDocumentRequest) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (submitDocumentRequest != null) {
            writer.k();
            writer.J("data");
            this.f18510b.toJson(writer, submitDocumentRequest.a());
            writer.J("meta");
            this.f18511c.toJson(writer, submitDocumentRequest.b());
            writer.s();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(43);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("SubmitDocumentRequest");
        sb2.append(')');
        return sb2.toString();
    }
}
