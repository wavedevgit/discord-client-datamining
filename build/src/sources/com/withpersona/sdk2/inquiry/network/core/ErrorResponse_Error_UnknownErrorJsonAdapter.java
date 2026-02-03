package com.withpersona.sdk2.inquiry.network.core;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.core.ErrorResponse;
import kotlin.collections.x0;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ErrorResponse_Error_UnknownErrorJsonAdapter extends h {
    @NotNull
    private final h nullableStringAdapter;
    @NotNull
    private final m.b options = m.b.a("title", "originalCode");

    public ErrorResponse_Error_UnknownErrorJsonAdapter(@NotNull w wVar) {
        this.nullableStringAdapter = wVar.f(String.class, x0.d(), "title");
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(54);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("ErrorResponse.Error.UnknownError");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public ErrorResponse.Error.UnknownError fromJson(@NotNull m mVar) {
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
        return new ErrorResponse.Error.UnknownError(str, str2);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t tVar, ErrorResponse.Error.UnknownError unknownError) {
        if (unknownError != null) {
            tVar.l();
            tVar.A0("title");
            this.nullableStringAdapter.toJson(tVar, unknownError.getTitle());
            tVar.A0("originalCode");
            this.nullableStringAdapter.toJson(tVar, unknownError.getOriginalCode());
            tVar.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
