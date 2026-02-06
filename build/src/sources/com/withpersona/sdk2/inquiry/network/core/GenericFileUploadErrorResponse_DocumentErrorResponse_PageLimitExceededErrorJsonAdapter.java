package com.withpersona.sdk2.inquiry.network.core;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse;
import kotlin.collections.x0;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class GenericFileUploadErrorResponse_DocumentErrorResponse_PageLimitExceededErrorJsonAdapter extends h {
    @NotNull
    private final h detailsAdapter;
    @NotNull
    private final m.b options = m.b.a("title", "code", "details");
    @NotNull
    private final h stringAdapter;

    public GenericFileUploadErrorResponse_DocumentErrorResponse_PageLimitExceededErrorJsonAdapter(@NotNull w wVar) {
        this.stringAdapter = wVar.f(String.class, x0.d(), "title");
        this.detailsAdapter = wVar.f(GenericFileUploadErrorResponse.DocumentErrorResponse.PageLimitExceededError.Details.class, x0.d(), "details");
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(97);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("GenericFileUploadErrorResponse.DocumentErrorResponse.PageLimitExceededError");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public GenericFileUploadErrorResponse.DocumentErrorResponse.PageLimitExceededError fromJson(@NotNull m mVar) {
        mVar.u();
        String str = null;
        String str2 = null;
        GenericFileUploadErrorResponse.DocumentErrorResponse.PageLimitExceededError.Details details = null;
        while (mVar.hasNext()) {
            int J = mVar.J(this.options);
            if (J == -1) {
                mVar.E0();
                mVar.S();
            } else if (J == 0) {
                str = (String) this.stringAdapter.fromJson(mVar);
                if (str == null) {
                    throw an.c.x("title", "title", mVar);
                }
            } else if (J == 1) {
                str2 = (String) this.stringAdapter.fromJson(mVar);
                if (str2 == null) {
                    throw an.c.x("code", "code", mVar);
                }
            } else if (J == 2 && (details = (GenericFileUploadErrorResponse.DocumentErrorResponse.PageLimitExceededError.Details) this.detailsAdapter.fromJson(mVar)) == null) {
                throw an.c.x("details", "details", mVar);
            }
        }
        mVar.D();
        if (str != null) {
            if (str2 != null) {
                if (details != null) {
                    return new GenericFileUploadErrorResponse.DocumentErrorResponse.PageLimitExceededError(str, str2, details);
                }
                throw an.c.o("details", "details", mVar);
            }
            throw an.c.o("code", "code", mVar);
        }
        throw an.c.o("title", "title", mVar);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t tVar, GenericFileUploadErrorResponse.DocumentErrorResponse.PageLimitExceededError pageLimitExceededError) {
        if (pageLimitExceededError != null) {
            tVar.k();
            tVar.J("title");
            this.stringAdapter.toJson(tVar, pageLimitExceededError.getTitle());
            tVar.J("code");
            this.stringAdapter.toJson(tVar, pageLimitExceededError.getCode());
            tVar.J("details");
            this.detailsAdapter.toJson(tVar, pageLimitExceededError.getDetails());
            tVar.s();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
