package com.withpersona.sdk2.inquiry.governmentid.network;

import com.squareup.moshi.a0;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.governmentid.network.AutoClassifyResponse;
import com.withpersona.sdk2.inquiry.network.dto.government_id.Id;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import ym.c;
@Metadata(d1 = {"\u0000H\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0016\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\f\u0010\u0015R\u001a\u0010\u0018\u001a\b\u0012\u0004\u0012\u00020\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010\u0017R \u0010\u001c\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u001a0\u00190\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0017¨\u0006\u001d"}, d2 = {"Lcom/withpersona/sdk2/inquiry/governmentid/network/AutoClassifyResponse_IdClassesForCountryJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/governmentid/network/AutoClassifyResponse$IdClassesForCountry;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "a", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/governmentid/network/AutoClassifyResponse$IdClassesForCountry;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "b", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/governmentid/network/AutoClassifyResponse$IdClassesForCountry;)V", "Lcom/squareup/moshi/m$b;", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/h;", "stringAdapter", "", "Lcom/withpersona/sdk2/inquiry/network/dto/government_id/Id;", "c", "listOfIdAdapter", "government-id_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class AutoClassifyResponse_IdClassesForCountryJsonAdapter extends h {

    /* renamed from: a  reason: collision with root package name */
    private final m.b f18638a;

    /* renamed from: b  reason: collision with root package name */
    private final h f18639b;

    /* renamed from: c  reason: collision with root package name */
    private final h f18640c;

    public AutoClassifyResponse_IdClassesForCountryJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("countryName", "countryCode", "idConfigs");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.f18638a = a10;
        h f10 = moshi.f(String.class, x0.d(), "countryName");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.f18639b = f10;
        h f11 = moshi.f(a0.j(List.class, Id.class), x0.d(), "idConfigs");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.f18640c = f11;
    }

    @Override // com.squareup.moshi.h
    /* renamed from: a */
    public AutoClassifyResponse.IdClassesForCountry fromJson(m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.s();
        String str = null;
        String str2 = null;
        List list = null;
        while (reader.hasNext()) {
            int W = reader.W(this.f18638a);
            if (W != -1) {
                if (W != 0) {
                    if (W != 1) {
                        if (W == 2 && (list = (List) this.f18640c.fromJson(reader)) == null) {
                            throw c.x("idConfigs", "idConfigs", reader);
                        }
                    } else {
                        str2 = (String) this.f18639b.fromJson(reader);
                        if (str2 == null) {
                            throw c.x("countryCode", "countryCode", reader);
                        }
                    }
                } else {
                    str = (String) this.f18639b.fromJson(reader);
                    if (str == null) {
                        throw c.x("countryName", "countryName", reader);
                    }
                }
            } else {
                reader.E0();
                reader.P();
            }
        }
        reader.z();
        if (str != null) {
            if (str2 != null) {
                if (list != null) {
                    return new AutoClassifyResponse.IdClassesForCountry(str, str2, list);
                }
                throw c.o("idConfigs", "idConfigs", reader);
            }
            throw c.o("countryCode", "countryCode", reader);
        }
        throw c.o("countryName", "countryName", reader);
    }

    @Override // com.squareup.moshi.h
    /* renamed from: b */
    public void toJson(t writer, AutoClassifyResponse.IdClassesForCountry idClassesForCountry) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (idClassesForCountry != null) {
            writer.k();
            writer.W("countryName");
            this.f18639b.toJson(writer, idClassesForCountry.b());
            writer.W("countryCode");
            this.f18639b.toJson(writer, idClassesForCountry.a());
            writer.W("idConfigs");
            this.f18640c.toJson(writer, idClassesForCountry.c());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(62);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("AutoClassifyResponse.IdClassesForCountry");
        sb2.append(')');
        return sb2.toString();
    }
}
