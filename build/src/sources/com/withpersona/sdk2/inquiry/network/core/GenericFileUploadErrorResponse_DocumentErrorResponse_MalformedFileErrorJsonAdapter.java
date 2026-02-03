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
        mVar.r();
        String str = null;
        String str2 = null;
        GenericFileUploadErrorResponse.DocumentErrorResponse.MalformedFileError.Details details = null;
        while (mVar.hasNext()) {
            int t02 = mVar.t0(this.options);
            if (t02 == -1) {
                mVar.F0();
                mVar.P();
            } else if (t02 == 0) {
                str = (String) this.stringAdapter.fromJson(mVar);
                if (str == null) {
                    throw tm.c.x("title", "title", mVar);
                }
            } else if (t02 == 1) {
                str2 = (String) this.stringAdapter.fromJson(mVar);
                if (str2 == null) {
                    throw tm.c.x("code", "code", mVar);
                }
            } else if (t02 == 2 && (details = (GenericFileUploadErrorResponse.DocumentErrorResponse.MalformedFileError.Details) this.detailsAdapter.fromJson(mVar)) == null) {
                throw tm.c.x("details", "details", mVar);
            }
        }
        mVar.y();
        if (str != null) {
            if (str2 != null) {
                if (details != null) {
                    return new GenericFileUploadErrorResponse.DocumentErrorResponse.MalformedFileError(str, str2, details);
                }
                throw tm.c.o("details", "details", mVar);
            }
            throw tm.c.o("code", "code", mVar);
        }
        throw tm.c.o("title", "title", mVar);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t tVar, GenericFileUploadErrorResponse.DocumentErrorResponse.MalformedFileError malformedFileError) {
        if (malformedFileError != null) {
            tVar.l();
            tVar.t0("title");
            this.stringAdapter.toJson(tVar, malformedFileError.getTitle());
            tVar.t0("code");
            this.stringAdapter.toJson(tVar, malformedFileError.getCode());
            tVar.t0("details");
            this.detailsAdapter.toJson(tVar, malformedFileError.getDetails());
            tVar.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
