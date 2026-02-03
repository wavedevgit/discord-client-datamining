package com.withpersona.sdk2.inquiry.internal.network;

import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.internal.network.ExchangeOneTimeLinkCodeRequest;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0016\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\f\u0010\u0015R\u001a\u0010\u0019\u001a\b\u0012\u0004\u0012\u00020\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010\u0018¨\u0006\u001a"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/network/ExchangeOneTimeLinkCodeRequestJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/internal/network/ExchangeOneTimeLinkCodeRequest;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "a", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/internal/network/ExchangeOneTimeLinkCodeRequest;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "b", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/internal/network/ExchangeOneTimeLinkCodeRequest;)V", "Lcom/squareup/moshi/m$b;", "Lcom/squareup/moshi/m$b;", "options", "Lcom/withpersona/sdk2/inquiry/internal/network/ExchangeOneTimeLinkCodeRequest$Data;", "Lcom/squareup/moshi/h;", "dataAdapter", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ExchangeOneTimeLinkCodeRequestJsonAdapter extends com.squareup.moshi.h {

    /* renamed from: a  reason: collision with root package name */
    private final m.b f18795a;

    /* renamed from: b  reason: collision with root package name */
    private final com.squareup.moshi.h f18796b;

    public ExchangeOneTimeLinkCodeRequestJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("data");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.f18795a = a10;
        com.squareup.moshi.h f10 = moshi.f(ExchangeOneTimeLinkCodeRequest.Data.class, x0.d(), "data");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.f18796b = f10;
    }

    @Override // com.squareup.moshi.h
    /* renamed from: a */
    public ExchangeOneTimeLinkCodeRequest fromJson(m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        ExchangeOneTimeLinkCodeRequest.Data data = null;
        while (reader.hasNext()) {
            int A0 = reader.A0(this.f18795a);
            if (A0 != -1) {
                if (A0 == 0 && (data = (ExchangeOneTimeLinkCodeRequest.Data) this.f18796b.fromJson(reader)) == null) {
                    throw vm.c.x("data_", "data", reader);
                }
            } else {
                reader.E0();
                reader.P();
            }
        }
        reader.y();
        if (data != null) {
            return new ExchangeOneTimeLinkCodeRequest(data);
        }
        throw vm.c.o("data_", "data", reader);
    }

    @Override // com.squareup.moshi.h
    /* renamed from: b */
    public void toJson(t writer, ExchangeOneTimeLinkCodeRequest exchangeOneTimeLinkCodeRequest) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (exchangeOneTimeLinkCodeRequest != null) {
            writer.l();
            writer.A0("data");
            this.f18796b.toJson(writer, exchangeOneTimeLinkCodeRequest.a());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(52);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("ExchangeOneTimeLinkCodeRequest");
        sb2.append(')');
        return sb2.toString();
    }
}
