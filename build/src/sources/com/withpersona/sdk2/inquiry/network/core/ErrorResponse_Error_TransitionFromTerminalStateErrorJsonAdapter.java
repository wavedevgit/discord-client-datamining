package com.withpersona.sdk2.inquiry.network.core;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.core.ErrorResponse;
import kotlin.collections.x0;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ErrorResponse_Error_TransitionFromTerminalStateErrorJsonAdapter extends h {
    @NotNull
    private final h nullableStringAdapter;
    @NotNull
    private final m.b options = m.b.a("title", "details");

    public ErrorResponse_Error_TransitionFromTerminalStateErrorJsonAdapter(@NotNull w wVar) {
        this.nullableStringAdapter = wVar.f(String.class, x0.d(), "title");
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(74);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("ErrorResponse.Error.TransitionFromTerminalStateError");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public ErrorResponse.Error.TransitionFromTerminalStateError fromJson(@NotNull m mVar) {
        mVar.u();
        String str = null;
        String str2 = null;
        while (mVar.hasNext()) {
            int J = mVar.J(this.options);
            if (J == -1) {
                mVar.E0();
                mVar.S();
            } else if (J == 0) {
                str = (String) this.nullableStringAdapter.fromJson(mVar);
            } else if (J == 1) {
                str2 = (String) this.nullableStringAdapter.fromJson(mVar);
            }
        }
        mVar.D();
        return new ErrorResponse.Error.TransitionFromTerminalStateError(str, str2);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t tVar, ErrorResponse.Error.TransitionFromTerminalStateError transitionFromTerminalStateError) {
        if (transitionFromTerminalStateError != null) {
            tVar.k();
            tVar.J("title");
            this.nullableStringAdapter.toJson(tVar, transitionFromTerminalStateError.getTitle());
            tVar.J("details");
            this.nullableStringAdapter.toJson(tVar, transitionFromTerminalStateError.getDetails());
            tVar.s();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
