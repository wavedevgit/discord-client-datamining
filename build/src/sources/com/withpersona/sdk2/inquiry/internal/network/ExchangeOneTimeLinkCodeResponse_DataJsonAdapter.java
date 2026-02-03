package com.withpersona.sdk2.inquiry.internal.network;

import com.squareup.moshi.a0;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.internal.network.ExchangeOneTimeLinkCodeResponse;
import java.util.Map;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000H\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010$\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0016\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\f\u0010\u0015R*\u0010\u001a\u001a\u0018\u0012\u0014\u0012\u0012\u0012\u0004\u0012\u00020\u0007\u0012\u0006\u0012\u0004\u0018\u00010\u0018\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010\u0019¨\u0006\u001b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/network/ExchangeOneTimeLinkCodeResponse_DataJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/internal/network/ExchangeOneTimeLinkCodeResponse$Data;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "a", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/internal/network/ExchangeOneTimeLinkCodeResponse$Data;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "b", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/internal/network/ExchangeOneTimeLinkCodeResponse$Data;)V", "Lcom/squareup/moshi/m$b;", "Lcom/squareup/moshi/m$b;", "options", "", "Lcom/withpersona/sdk2/inquiry/internal/network/ExchangeOneTimeLinkCodeResponse$Relationship;", "Lcom/squareup/moshi/h;", "nullableMapOfStringNullableRelationshipAdapter", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ExchangeOneTimeLinkCodeResponse_DataJsonAdapter extends com.squareup.moshi.h {

    /* renamed from: a  reason: collision with root package name */
    private final m.b f18813a;

    /* renamed from: b  reason: collision with root package name */
    private final com.squareup.moshi.h f18814b;

    public ExchangeOneTimeLinkCodeResponse_DataJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("relationships");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.f18813a = a10;
        com.squareup.moshi.h f10 = moshi.f(a0.j(Map.class, String.class, ExchangeOneTimeLinkCodeResponse.Relationship.class), x0.d(), "relationships");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.f18814b = f10;
    }

    @Override // com.squareup.moshi.h
    /* renamed from: a */
    public ExchangeOneTimeLinkCodeResponse.Data fromJson(m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        Map map = null;
        while (reader.hasNext()) {
            int A0 = reader.A0(this.f18813a);
            if (A0 != -1) {
                if (A0 == 0) {
                    map = (Map) this.f18814b.fromJson(reader);
                }
            } else {
                reader.E0();
                reader.P();
            }
        }
        reader.y();
        return new ExchangeOneTimeLinkCodeResponse.Data(map);
    }

    @Override // com.squareup.moshi.h
    /* renamed from: b */
    public void toJson(t writer, ExchangeOneTimeLinkCodeResponse.Data data) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (data != null) {
            writer.l();
            writer.A0("relationships");
            this.f18814b.toJson(writer, data.a());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(58);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("ExchangeOneTimeLinkCodeResponse.Data");
        sb2.append(')');
        return sb2.toString();
    }
}
