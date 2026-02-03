package com.withpersona.sdk2.inquiry.governmentid.network;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.governmentid.network.AutoClassifyResponse;
import com.withpersona.sdk2.inquiry.network.dto.government_id.Id;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import vm.c;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0016\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\f\u0010\u0015R\u001a\u0010\u0018\u001a\b\u0012\u0004\u0012\u00020\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010\u0017R\u001a\u0010\u001b\u001a\b\u0012\u0004\u0012\u00020\u00190\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\u0017¨\u0006\u001c"}, d2 = {"Lcom/withpersona/sdk2/inquiry/governmentid/network/AutoClassifyResponse_IdAcceptedResponseJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/governmentid/network/AutoClassifyResponse$IdAcceptedResponse;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "a", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/governmentid/network/AutoClassifyResponse$IdAcceptedResponse;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "b", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/governmentid/network/AutoClassifyResponse$IdAcceptedResponse;)V", "Lcom/squareup/moshi/m$b;", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/h;", "stringAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/government_id/Id;", "c", "idAdapter", "government-id_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class AutoClassifyResponse_IdAcceptedResponseJsonAdapter extends h {

    /* renamed from: a  reason: collision with root package name */
    private final m.b f18229a;

    /* renamed from: b  reason: collision with root package name */
    private final h f18230b;

    /* renamed from: c  reason: collision with root package name */
    private final h f18231c;

    public AutoClassifyResponse_IdAcceptedResponseJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("countryCode", "idClass", "idConfig");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.f18229a = a10;
        h f10 = moshi.f(String.class, x0.d(), "countryCode");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.f18230b = f10;
        h f11 = moshi.f(Id.class, x0.d(), "idConfig");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.f18231c = f11;
    }

    @Override // com.squareup.moshi.h
    /* renamed from: a */
    public AutoClassifyResponse.IdAcceptedResponse fromJson(m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        String str = null;
        String str2 = null;
        Id id2 = null;
        while (reader.hasNext()) {
            int A0 = reader.A0(this.f18229a);
            if (A0 != -1) {
                if (A0 != 0) {
                    if (A0 != 1) {
                        if (A0 == 2 && (id2 = (Id) this.f18231c.fromJson(reader)) == null) {
                            throw c.x("idConfig", "idConfig", reader);
                        }
                    } else {
                        str2 = (String) this.f18230b.fromJson(reader);
                        if (str2 == null) {
                            throw c.x("idClass", "idClass", reader);
                        }
                    }
                } else {
                    str = (String) this.f18230b.fromJson(reader);
                    if (str == null) {
                        throw c.x("countryCode", "countryCode", reader);
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
                if (id2 != null) {
                    return new AutoClassifyResponse.IdAcceptedResponse(str, str2, id2);
                }
                throw c.o("idConfig", "idConfig", reader);
            }
            throw c.o("idClass", "idClass", reader);
        }
        throw c.o("countryCode", "countryCode", reader);
    }

    @Override // com.squareup.moshi.h
    /* renamed from: b */
    public void toJson(t writer, AutoClassifyResponse.IdAcceptedResponse idAcceptedResponse) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (idAcceptedResponse != null) {
            writer.l();
            writer.A0("countryCode");
            this.f18230b.toJson(writer, idAcceptedResponse.a());
            writer.A0("idClass");
            this.f18230b.toJson(writer, idAcceptedResponse.b());
            writer.A0("idConfig");
            this.f18231c.toJson(writer, idAcceptedResponse.c());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(61);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("AutoClassifyResponse.IdAcceptedResponse");
        sb2.append(')');
        return sb2.toString();
    }
}
