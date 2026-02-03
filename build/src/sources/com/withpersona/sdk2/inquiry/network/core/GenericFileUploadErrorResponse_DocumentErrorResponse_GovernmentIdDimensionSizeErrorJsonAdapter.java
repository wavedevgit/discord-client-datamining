package com.withpersona.sdk2.inquiry.network.core;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse;
import kotlin.collections.x0;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class GenericFileUploadErrorResponse_DocumentErrorResponse_GovernmentIdDimensionSizeErrorJsonAdapter extends h {
    @NotNull
    private final h detailsAdapter;
    @NotNull
    private final m.b options = m.b.a("title", "code", "details");
    @NotNull
    private final h stringAdapter;

    public GenericFileUploadErrorResponse_DocumentErrorResponse_GovernmentIdDimensionSizeErrorJsonAdapter(@NotNull w wVar) {
        this.stringAdapter = wVar.f(String.class, x0.d(), "title");
        this.detailsAdapter = wVar.f(GenericFileUploadErrorResponse.DocumentErrorResponse.GovernmentIdDimensionSizeError.Details.class, x0.d(), "details");
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(105);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("GenericFileUploadErrorResponse.DocumentErrorResponse.GovernmentIdDimensionSizeError");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public GenericFileUploadErrorResponse.DocumentErrorResponse.GovernmentIdDimensionSizeError fromJson(@NotNull m mVar) {
        mVar.r();
        String str = null;
        String str2 = null;
        GenericFileUploadErrorResponse.DocumentErrorResponse.GovernmentIdDimensionSizeError.Details details = null;
        while (mVar.hasNext()) {
            int A0 = mVar.A0(this.options);
            if (A0 == -1) {
                mVar.E0();
                mVar.P();
            } else if (A0 == 0) {
                str = (String) this.stringAdapter.fromJson(mVar);
                if (str == null) {
                    throw vm.c.x("title", "title", mVar);
                }
            } else if (A0 == 1) {
                str2 = (String) this.stringAdapter.fromJson(mVar);
                if (str2 == null) {
                    throw vm.c.x("code", "code", mVar);
                }
            } else if (A0 == 2 && (details = (GenericFileUploadErrorResponse.DocumentErrorResponse.GovernmentIdDimensionSizeError.Details) this.detailsAdapter.fromJson(mVar)) == null) {
                throw vm.c.x("details", "details", mVar);
            }
        }
        mVar.y();
        if (str != null) {
            if (str2 != null) {
                if (details != null) {
                    return new GenericFileUploadErrorResponse.DocumentErrorResponse.GovernmentIdDimensionSizeError(str, str2, details);
                }
                throw vm.c.o("details", "details", mVar);
            }
            throw vm.c.o("code", "code", mVar);
        }
        throw vm.c.o("title", "title", mVar);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t tVar, GenericFileUploadErrorResponse.DocumentErrorResponse.GovernmentIdDimensionSizeError governmentIdDimensionSizeError) {
        if (governmentIdDimensionSizeError != null) {
            tVar.l();
            tVar.A0("title");
            this.stringAdapter.toJson(tVar, governmentIdDimensionSizeError.getTitle());
            tVar.A0("code");
            this.stringAdapter.toJson(tVar, governmentIdDimensionSizeError.getCode());
            tVar.A0("details");
            this.detailsAdapter.toJson(tVar, governmentIdDimensionSizeError.getDetails());
            tVar.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
