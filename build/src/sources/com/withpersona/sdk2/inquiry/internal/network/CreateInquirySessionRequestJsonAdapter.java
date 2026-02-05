package com.withpersona.sdk2.inquiry.internal.network;

import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.internal.network.CreateInquirySessionRequest;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0000\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0016\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\f\u0010\u0015R\u001a\u0010\u0019\u001a\b\u0012\u0004\u0012\u00020\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010\u0018R\u001a\u0010\u001c\u001a\b\u0012\u0004\u0012\u00020\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0018¨\u0006\u001d"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionRequestJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionRequest;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "a", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionRequest;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "b", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionRequest;)V", "Lcom/squareup/moshi/m$b;", "Lcom/squareup/moshi/m$b;", "options", "Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionRequest$Data;", "Lcom/squareup/moshi/h;", "dataAdapter", "Lcom/withpersona/sdk2/inquiry/internal/network/CreateInquirySessionRequest$Meta;", "c", "metaAdapter", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class CreateInquirySessionRequestJsonAdapter extends com.squareup.moshi.h {

    /* renamed from: a  reason: collision with root package name */
    private final m.b f19163a;

    /* renamed from: b  reason: collision with root package name */
    private final com.squareup.moshi.h f19164b;

    /* renamed from: c  reason: collision with root package name */
    private final com.squareup.moshi.h f19165c;

    public CreateInquirySessionRequestJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("data", "meta");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.f19163a = a10;
        com.squareup.moshi.h f10 = moshi.f(CreateInquirySessionRequest.Data.class, x0.d(), "data");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.f19164b = f10;
        com.squareup.moshi.h f11 = moshi.f(CreateInquirySessionRequest.Meta.class, x0.d(), "meta");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.f19165c = f11;
    }

    @Override // com.squareup.moshi.h
    /* renamed from: a */
    public CreateInquirySessionRequest fromJson(m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.s();
        CreateInquirySessionRequest.Data data = null;
        CreateInquirySessionRequest.Meta meta = null;
        while (reader.hasNext()) {
            int W = reader.W(this.f19163a);
            if (W != -1) {
                if (W != 0) {
                    if (W == 1 && (meta = (CreateInquirySessionRequest.Meta) this.f19165c.fromJson(reader)) == null) {
                        throw ym.c.x("meta", "meta", reader);
                    }
                } else {
                    data = (CreateInquirySessionRequest.Data) this.f19164b.fromJson(reader);
                    if (data == null) {
                        throw ym.c.x("data_", "data", reader);
                    }
                }
            } else {
                reader.E0();
                reader.P();
            }
        }
        reader.z();
        if (data != null) {
            if (meta != null) {
                return new CreateInquirySessionRequest(data, meta);
            }
            throw ym.c.o("meta", "meta", reader);
        }
        throw ym.c.o("data_", "data", reader);
    }

    @Override // com.squareup.moshi.h
    /* renamed from: b */
    public void toJson(t writer, CreateInquirySessionRequest createInquirySessionRequest) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (createInquirySessionRequest != null) {
            writer.k();
            writer.W("data");
            this.f19164b.toJson(writer, createInquirySessionRequest.a());
            writer.W("meta");
            this.f19165c.toJson(writer, createInquirySessionRequest.b());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(49);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("CreateInquirySessionRequest");
        sb2.append(')');
        return sb2.toString();
    }
}
