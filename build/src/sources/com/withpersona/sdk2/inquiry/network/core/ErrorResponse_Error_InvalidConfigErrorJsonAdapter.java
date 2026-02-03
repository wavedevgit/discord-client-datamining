package com.withpersona.sdk2.inquiry.network.core;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.core.ErrorResponse;
import kotlin.collections.x0;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ErrorResponse_Error_InvalidConfigErrorJsonAdapter extends h {
    @NotNull
    private final h nullableStringAdapter;
    @NotNull
    private final m.b options = m.b.a("title", "details");

    public ErrorResponse_Error_InvalidConfigErrorJsonAdapter(@NotNull w wVar) {
        this.nullableStringAdapter = wVar.f(String.class, x0.d(), "title");
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(60);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("ErrorResponse.Error.InvalidConfigError");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public ErrorResponse.Error.InvalidConfigError fromJson(@NotNull m mVar) {
        mVar.r();
        String str = null;
        String str2 = null;
        while (mVar.hasNext()) {
            int A0 = mVar.A0(this.options);
            if (A0 == -1) {
                mVar.E0();
                mVar.P();
            } else if (A0 == 0) {
                str = (String) this.nullableStringAdapter.fromJson(mVar);
            } else if (A0 == 1) {
                str2 = (String) this.nullableStringAdapter.fromJson(mVar);
            }
        }
        mVar.y();
        return new ErrorResponse.Error.InvalidConfigError(str, str2);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t tVar, ErrorResponse.Error.InvalidConfigError invalidConfigError) {
        if (invalidConfigError != null) {
            tVar.l();
            tVar.A0("title");
            this.nullableStringAdapter.toJson(tVar, invalidConfigError.getTitle());
            tVar.A0("details");
            this.nullableStringAdapter.toJson(tVar, invalidConfigError.getDetails());
            tVar.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
