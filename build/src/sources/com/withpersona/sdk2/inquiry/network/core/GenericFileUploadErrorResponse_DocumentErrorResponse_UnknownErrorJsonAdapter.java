package com.withpersona.sdk2.inquiry.network.core;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse;
import java.lang.reflect.Constructor;
import kotlin.collections.x0;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class GenericFileUploadErrorResponse_DocumentErrorResponse_UnknownErrorJsonAdapter extends h {
    private volatile Constructor<GenericFileUploadErrorResponse.DocumentErrorResponse.UnknownError> constructorRef;
    @NotNull
    private final h nullableErrorDetailsAdapter;
    @NotNull
    private final h nullableStringAdapter;
    @NotNull
    private final m.b options = m.b.a("title", "code", "details");
    @NotNull
    private final h stringAdapter;

    public GenericFileUploadErrorResponse_DocumentErrorResponse_UnknownErrorJsonAdapter(@NotNull w wVar) {
        this.stringAdapter = wVar.f(String.class, x0.d(), "title");
        this.nullableStringAdapter = wVar.f(String.class, x0.d(), "code");
        this.nullableErrorDetailsAdapter = wVar.f(ErrorDetails.class, x0.d(), "details");
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(87);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("GenericFileUploadErrorResponse.DocumentErrorResponse.UnknownError");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public GenericFileUploadErrorResponse.DocumentErrorResponse.UnknownError fromJson(@NotNull m mVar) {
        mVar.s();
        String str = null;
        String str2 = null;
        ErrorDetails errorDetails = null;
        int i10 = -1;
        while (mVar.hasNext()) {
            int W = mVar.W(this.options);
            if (W == -1) {
                mVar.E0();
                mVar.P();
            } else if (W == 0) {
                str = (String) this.stringAdapter.fromJson(mVar);
                if (str == null) {
                    throw ym.c.x("title", "title", mVar);
                }
                i10 &= -2;
            } else if (W == 1) {
                str2 = (String) this.nullableStringAdapter.fromJson(mVar);
                i10 &= -3;
            } else if (W == 2) {
                errorDetails = (ErrorDetails) this.nullableErrorDetailsAdapter.fromJson(mVar);
                i10 &= -5;
            }
        }
        mVar.z();
        if (i10 == -8) {
            return new GenericFileUploadErrorResponse.DocumentErrorResponse.UnknownError(str, str2, errorDetails);
        }
        Constructor<GenericFileUploadErrorResponse.DocumentErrorResponse.UnknownError> constructor = this.constructorRef;
        if (constructor == null) {
            constructor = GenericFileUploadErrorResponse.DocumentErrorResponse.UnknownError.class.getDeclaredConstructor(String.class, String.class, ErrorDetails.class, Integer.TYPE, ym.c.f54853c);
            this.constructorRef = constructor;
        }
        return constructor.newInstance(str, str2, errorDetails, Integer.valueOf(i10), null);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t tVar, GenericFileUploadErrorResponse.DocumentErrorResponse.UnknownError unknownError) {
        if (unknownError != null) {
            tVar.k();
            tVar.W("title");
            this.stringAdapter.toJson(tVar, unknownError.getTitle());
            tVar.W("code");
            this.nullableStringAdapter.toJson(tVar, unknownError.getCode());
            tVar.W("details");
            this.nullableErrorDetailsAdapter.toJson(tVar, unknownError.getDetails());
            tVar.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
