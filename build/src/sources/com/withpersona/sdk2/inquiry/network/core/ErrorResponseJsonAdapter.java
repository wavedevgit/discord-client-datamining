package com.withpersona.sdk2.inquiry.network.core;

import com.squareup.moshi.a0;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.core.ErrorResponse;
import java.util.List;
import kotlin.collections.x0;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ErrorResponseJsonAdapter extends h {
    @NotNull
    private final h nullableListOfErrorAdapter;
    @NotNull
    private final m.b options = m.b.a("errors");

    public ErrorResponseJsonAdapter(@NotNull w wVar) {
        this.nullableListOfErrorAdapter = wVar.f(a0.j(List.class, ErrorResponse.Error.class), x0.d(), "errors");
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(35);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("ErrorResponse");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public ErrorResponse fromJson(@NotNull m mVar) {
        mVar.u();
        List list = null;
        while (mVar.hasNext()) {
            int J = mVar.J(this.options);
            if (J == -1) {
                mVar.E0();
                mVar.S();
            } else if (J == 0) {
                list = (List) this.nullableListOfErrorAdapter.fromJson(mVar);
            }
        }
        mVar.D();
        return new ErrorResponse(list);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t tVar, ErrorResponse errorResponse) {
        if (errorResponse != null) {
            tVar.k();
            tVar.J("errors");
            this.nullableListOfErrorAdapter.toJson(tVar, errorResponse.getErrors());
            tVar.s();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
