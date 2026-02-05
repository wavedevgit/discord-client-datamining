package com.withpersona.sdk2.inquiry.network.core;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class GenericFileUploadErrorResponse_DocumentErrorResponse_MalformedImageError_DetailsJsonAdapter extends h {
    @NotNull
    private final m.b options = m.b.a(new String[0]);

    public GenericFileUploadErrorResponse_DocumentErrorResponse_MalformedImageError_DetailsJsonAdapter(@NotNull w wVar) {
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(102);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("GenericFileUploadErrorResponse.DocumentErrorResponse.MalformedImageError.Details");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public GenericFileUploadErrorResponse.DocumentErrorResponse.MalformedImageError.Details fromJson(@NotNull m mVar) {
        mVar.s();
        while (mVar.hasNext()) {
            if (mVar.W(this.options) == -1) {
                mVar.E0();
                mVar.P();
            }
        }
        mVar.z();
        return new GenericFileUploadErrorResponse.DocumentErrorResponse.MalformedImageError.Details();
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t tVar, GenericFileUploadErrorResponse.DocumentErrorResponse.MalformedImageError.Details details) {
        if (details != null) {
            tVar.k();
            tVar.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
