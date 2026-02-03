package com.withpersona.sdk2.inquiry.network.core;

import com.squareup.moshi.a0;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.core.ErrorResponse;
import com.withpersona.sdk2.inquiry.network.core.dto.UiComponentError;
import java.util.Map;
import kotlin.collections.x0;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ErrorResponse_Error_InvalidFieldValueErrorJsonAdapter extends h {
    @NotNull
    private final h nullableMapOfStringUiComponentErrorAdapter;
    @NotNull
    private final h nullableStringAdapter;
    @NotNull
    private final m.b options = m.b.a("title", "details");

    public ErrorResponse_Error_InvalidFieldValueErrorJsonAdapter(@NotNull w wVar) {
        this.nullableStringAdapter = wVar.f(String.class, x0.d(), "title");
        this.nullableMapOfStringUiComponentErrorAdapter = wVar.f(a0.j(Map.class, String.class, UiComponentError.class), x0.d(), "details");
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("ErrorResponse.Error.InvalidFieldValueError");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public ErrorResponse.Error.InvalidFieldValueError fromJson(@NotNull m mVar) {
        mVar.r();
        String str = null;
        Map map = null;
        while (mVar.hasNext()) {
            int A0 = mVar.A0(this.options);
            if (A0 == -1) {
                mVar.E0();
                mVar.P();
            } else if (A0 == 0) {
                str = (String) this.nullableStringAdapter.fromJson(mVar);
            } else if (A0 == 1) {
                map = (Map) this.nullableMapOfStringUiComponentErrorAdapter.fromJson(mVar);
            }
        }
        mVar.y();
        return new ErrorResponse.Error.InvalidFieldValueError(str, map);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t tVar, ErrorResponse.Error.InvalidFieldValueError invalidFieldValueError) {
        if (invalidFieldValueError != null) {
            tVar.l();
            tVar.A0("title");
            this.nullableStringAdapter.toJson(tVar, invalidFieldValueError.getTitle());
            tVar.A0("details");
            this.nullableMapOfStringUiComponentErrorAdapter.toJson(tVar, invalidFieldValueError.getDetails());
            tVar.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
