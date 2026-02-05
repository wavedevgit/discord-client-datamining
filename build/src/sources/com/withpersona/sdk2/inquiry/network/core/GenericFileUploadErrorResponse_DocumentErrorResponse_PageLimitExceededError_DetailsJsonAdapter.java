package com.withpersona.sdk2.inquiry.network.core;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse;
import kotlin.collections.x0;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class GenericFileUploadErrorResponse_DocumentErrorResponse_PageLimitExceededError_DetailsJsonAdapter extends h {
    @NotNull
    private final h intAdapter;
    @NotNull
    private final m.b options = m.b.a("page_limit");

    public GenericFileUploadErrorResponse_DocumentErrorResponse_PageLimitExceededError_DetailsJsonAdapter(@NotNull w wVar) {
        this.intAdapter = wVar.f(Integer.TYPE, x0.d(), "pageLimit");
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(105);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("GenericFileUploadErrorResponse.DocumentErrorResponse.PageLimitExceededError.Details");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public GenericFileUploadErrorResponse.DocumentErrorResponse.PageLimitExceededError.Details fromJson(@NotNull m mVar) {
        mVar.s();
        Integer num = null;
        while (mVar.hasNext()) {
            int W = mVar.W(this.options);
            if (W == -1) {
                mVar.E0();
                mVar.P();
            } else if (W == 0 && (num = (Integer) this.intAdapter.fromJson(mVar)) == null) {
                throw ym.c.x("pageLimit", "page_limit", mVar);
            }
        }
        mVar.z();
        if (num != null) {
            return new GenericFileUploadErrorResponse.DocumentErrorResponse.PageLimitExceededError.Details(num.intValue());
        }
        throw ym.c.o("pageLimit", "page_limit", mVar);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t tVar, GenericFileUploadErrorResponse.DocumentErrorResponse.PageLimitExceededError.Details details) {
        if (details != null) {
            tVar.k();
            tVar.W("page_limit");
            this.intAdapter.toJson(tVar, Integer.valueOf(details.getPageLimit()));
            tVar.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
