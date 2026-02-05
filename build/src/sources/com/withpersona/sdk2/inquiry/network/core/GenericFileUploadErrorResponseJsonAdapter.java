package com.withpersona.sdk2.inquiry.network.core;

import com.squareup.moshi.a0;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse;
import java.util.List;
import kotlin.collections.x0;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class GenericFileUploadErrorResponseJsonAdapter extends h {
    @NotNull
    private final h listOfDocumentErrorResponseAdapter;
    @NotNull
    private final m.b options = m.b.a("errors");

    public GenericFileUploadErrorResponseJsonAdapter(@NotNull w wVar) {
        this.listOfDocumentErrorResponseAdapter = wVar.f(a0.j(List.class, GenericFileUploadErrorResponse.DocumentErrorResponse.class), x0.d(), "errors");
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(52);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("GenericFileUploadErrorResponse");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public GenericFileUploadErrorResponse fromJson(@NotNull m mVar) {
        mVar.s();
        List list = null;
        while (mVar.hasNext()) {
            int W = mVar.W(this.options);
            if (W == -1) {
                mVar.E0();
                mVar.P();
            } else if (W == 0 && (list = (List) this.listOfDocumentErrorResponseAdapter.fromJson(mVar)) == null) {
                throw ym.c.x("errors", "errors", mVar);
            }
        }
        mVar.z();
        if (list != null) {
            return new GenericFileUploadErrorResponse(list);
        }
        throw ym.c.o("errors", "errors", mVar);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t tVar, GenericFileUploadErrorResponse genericFileUploadErrorResponse) {
        if (genericFileUploadErrorResponse != null) {
            tVar.k();
            tVar.W("errors");
            this.listOfDocumentErrorResponseAdapter.toJson(tVar, genericFileUploadErrorResponse.getErrors());
            tVar.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
