package com.withpersona.sdk2.inquiry.network.core;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse;
import kotlin.collections.x0;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class GenericFileUploadErrorResponse_DocumentErrorResponse_MalformedFileErrorJsonAdapter extends h {
    @NotNull
    private final h detailsAdapter;
    @NotNull
    private final m.b options = m.b.a("title", "code", "details");
    @NotNull
    private final h stringAdapter;

    public GenericFileUploadErrorResponse_DocumentErrorResponse_MalformedFileErrorJsonAdapter(@NotNull w wVar) {
        this.stringAdapter = wVar.f(String.class, x0.d(), "title");
        this.detailsAdapter = wVar.f(GenericFileUploadErrorResponse.DocumentErrorResponse.MalformedFileError.Details.class, x0.d(), "details");
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(93);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("GenericFileUploadErrorResponse.DocumentErrorResponse.MalformedFileError");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public GenericFileUploadErrorResponse.DocumentErrorResponse.MalformedFileError fromJson(@NotNull m mVar) {
        mVar.s();
        String str = null;
        String str2 = null;
        GenericFileUploadErrorResponse.DocumentErrorResponse.MalformedFileError.Details details = null;
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
            } else if (W == 1) {
                str2 = (String) this.stringAdapter.fromJson(mVar);
                if (str2 == null) {
                    throw ym.c.x("code", "code", mVar);
                }
            } else if (W == 2 && (details = (GenericFileUploadErrorResponse.DocumentErrorResponse.MalformedFileError.Details) this.detailsAdapter.fromJson(mVar)) == null) {
                throw ym.c.x("details", "details", mVar);
            }
        }
        mVar.z();
        if (str != null) {
            if (str2 != null) {
                if (details != null) {
                    return new GenericFileUploadErrorResponse.DocumentErrorResponse.MalformedFileError(str, str2, details);
                }
                throw ym.c.o("details", "details", mVar);
            }
            throw ym.c.o("code", "code", mVar);
        }
        throw ym.c.o("title", "title", mVar);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t tVar, GenericFileUploadErrorResponse.DocumentErrorResponse.MalformedFileError malformedFileError) {
        if (malformedFileError != null) {
            tVar.k();
            tVar.W("title");
            this.stringAdapter.toJson(tVar, malformedFileError.getTitle());
            tVar.W("code");
            this.stringAdapter.toJson(tVar, malformedFileError.getCode());
            tVar.W("details");
            this.detailsAdapter.toJson(tVar, malformedFileError.getDetails());
            tVar.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
