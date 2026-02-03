package com.withpersona.sdk2.inquiry.ui.network;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.ui.network.TransitionInquiryRequest;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import vm.c;
@kotlin.Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0016\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\f\u0010\u0015R\u001a\u0010\u0019\u001a\b\u0012\u0004\u0012\u00020\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010\u0018R\u001a\u0010\u001c\u001a\b\u0012\u0004\u0012\u00020\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0018¨\u0006\u001d"}, d2 = {"Lcom/withpersona/sdk2/inquiry/ui/network/TransitionInquiryRequestJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/ui/network/TransitionInquiryRequest;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "a", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/ui/network/TransitionInquiryRequest;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "b", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/ui/network/TransitionInquiryRequest;)V", "Lcom/squareup/moshi/m$b;", "Lcom/squareup/moshi/m$b;", "options", "Lcom/withpersona/sdk2/inquiry/ui/network/TransitionInquiryRequest$Data;", "Lcom/squareup/moshi/h;", "dataAdapter", "Lcom/withpersona/sdk2/inquiry/ui/network/TransitionInquiryRequest$Meta;", "c", "metaAdapter", "ui_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class TransitionInquiryRequestJsonAdapter extends h {

    /* renamed from: a  reason: collision with root package name */
    private final m.b f19448a;

    /* renamed from: b  reason: collision with root package name */
    private final h f19449b;

    /* renamed from: c  reason: collision with root package name */
    private final h f19450c;

    public TransitionInquiryRequestJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("data", "meta");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.f19448a = a10;
        h f10 = moshi.f(TransitionInquiryRequest.Data.class, x0.d(), "data");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.f19449b = f10;
        h f11 = moshi.f(TransitionInquiryRequest.Meta.class, x0.d(), "meta");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.f19450c = f11;
    }

    @Override // com.squareup.moshi.h
    /* renamed from: a */
    public TransitionInquiryRequest fromJson(m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        TransitionInquiryRequest.Data data = null;
        TransitionInquiryRequest.Meta meta = null;
        while (reader.hasNext()) {
            int A0 = reader.A0(this.f19448a);
            if (A0 != -1) {
                if (A0 != 0) {
                    if (A0 == 1 && (meta = (TransitionInquiryRequest.Meta) this.f19450c.fromJson(reader)) == null) {
                        throw c.x("meta", "meta", reader);
                    }
                } else {
                    data = (TransitionInquiryRequest.Data) this.f19449b.fromJson(reader);
                    if (data == null) {
                        throw c.x("data_", "data", reader);
                    }
                }
            } else {
                reader.E0();
                reader.P();
            }
        }
        reader.y();
        if (data != null) {
            if (meta != null) {
                return new TransitionInquiryRequest(data, meta);
            }
            throw c.o("meta", "meta", reader);
        }
        throw c.o("data_", "data", reader);
    }

    @Override // com.squareup.moshi.h
    /* renamed from: b */
    public void toJson(t writer, TransitionInquiryRequest transitionInquiryRequest) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (transitionInquiryRequest != null) {
            writer.l();
            writer.A0("data");
            this.f19449b.toJson(writer, transitionInquiryRequest.a());
            writer.A0("meta");
            this.f19450c.toJson(writer, transitionInquiryRequest.b());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(46);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("TransitionInquiryRequest");
        sb2.append(')');
        return sb2.toString();
    }
}
