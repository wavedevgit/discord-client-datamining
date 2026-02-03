package com.withpersona.sdk2.inquiry.network.core;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.core.ErrorResponse;
import kotlin.collections.x0;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ErrorResponse_Error_RateLimitExceededErrorJsonAdapter extends h {
    @NotNull
    private final h nullableStringAdapter;
    @NotNull
    private final m.b options = m.b.a("title", "details");

    public ErrorResponse_Error_RateLimitExceededErrorJsonAdapter(@NotNull w wVar) {
        this.nullableStringAdapter = wVar.f(String.class, x0.d(), "title");
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("ErrorResponse.Error.RateLimitExceededError");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public ErrorResponse.Error.RateLimitExceededError fromJson(@NotNull m mVar) {
        mVar.r();
        String str = null;
        String str2 = null;
        while (mVar.hasNext()) {
            int t02 = mVar.t0(this.options);
            if (t02 == -1) {
                mVar.F0();
                mVar.P();
            } else if (t02 == 0) {
                str = (String) this.nullableStringAdapter.fromJson(mVar);
            } else if (t02 == 1) {
                str2 = (String) this.nullableStringAdapter.fromJson(mVar);
            }
        }
        mVar.y();
        return new ErrorResponse.Error.RateLimitExceededError(str, str2);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t tVar, ErrorResponse.Error.RateLimitExceededError rateLimitExceededError) {
        if (rateLimitExceededError != null) {
            tVar.l();
            tVar.t0("title");
            this.nullableStringAdapter.toJson(tVar, rateLimitExceededError.getTitle());
            tVar.t0("details");
            this.nullableStringAdapter.toJson(tVar, rateLimitExceededError.getDetails());
            tVar.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
