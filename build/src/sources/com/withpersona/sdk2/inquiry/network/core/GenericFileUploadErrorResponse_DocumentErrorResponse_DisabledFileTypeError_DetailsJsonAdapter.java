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
public final class GenericFileUploadErrorResponse_DocumentErrorResponse_DisabledFileTypeError_DetailsJsonAdapter extends h {
    @NotNull
    private final h listOfStringAdapter;
    @NotNull
    private final m.b options = m.b.a("uploaded_file_type", "enabled_file_types");
    @NotNull
    private final h stringAdapter;

    public GenericFileUploadErrorResponse_DocumentErrorResponse_DisabledFileTypeError_DetailsJsonAdapter(@NotNull w wVar) {
        this.stringAdapter = wVar.f(String.class, x0.d(), "uploadedFileType");
        this.listOfStringAdapter = wVar.f(a0.j(List.class, String.class), x0.d(), "enabledFileTypes");
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(104);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("GenericFileUploadErrorResponse.DocumentErrorResponse.DisabledFileTypeError.Details");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public GenericFileUploadErrorResponse.DocumentErrorResponse.DisabledFileTypeError.Details fromJson(@NotNull m mVar) {
        mVar.s();
        String str = null;
        List list = null;
        while (mVar.hasNext()) {
            int W = mVar.W(this.options);
            if (W == -1) {
                mVar.E0();
                mVar.P();
            } else if (W == 0) {
                str = (String) this.stringAdapter.fromJson(mVar);
                if (str == null) {
                    throw ym.c.x("uploadedFileType", "uploaded_file_type", mVar);
                }
            } else if (W == 1 && (list = (List) this.listOfStringAdapter.fromJson(mVar)) == null) {
                throw ym.c.x("enabledFileTypes", "enabled_file_types", mVar);
            }
        }
        mVar.z();
        if (str != null) {
            if (list != null) {
                return new GenericFileUploadErrorResponse.DocumentErrorResponse.DisabledFileTypeError.Details(str, list);
            }
            throw ym.c.o("enabledFileTypes", "enabled_file_types", mVar);
        }
        throw ym.c.o("uploadedFileType", "uploaded_file_type", mVar);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t tVar, GenericFileUploadErrorResponse.DocumentErrorResponse.DisabledFileTypeError.Details details) {
        if (details != null) {
            tVar.k();
            tVar.W("uploaded_file_type");
            this.stringAdapter.toJson(tVar, details.getUploadedFileType());
            tVar.W("enabled_file_types");
            this.listOfStringAdapter.toJson(tVar, details.getEnabledFileTypes());
            tVar.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
