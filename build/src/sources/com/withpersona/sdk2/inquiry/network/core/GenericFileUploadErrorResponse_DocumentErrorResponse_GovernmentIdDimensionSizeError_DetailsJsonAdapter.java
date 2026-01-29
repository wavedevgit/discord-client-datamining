package com.withpersona.sdk2.inquiry.network.core;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse;
import kotlin.collections.x0;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class GenericFileUploadErrorResponse_DocumentErrorResponse_GovernmentIdDimensionSizeError_DetailsJsonAdapter extends h {
    @NotNull
    private final h intAdapter;
    @NotNull
    private final m.b options = m.b.a("min_dimension_size", "max_dimension_size");

    public GenericFileUploadErrorResponse_DocumentErrorResponse_GovernmentIdDimensionSizeError_DetailsJsonAdapter(@NotNull w wVar) {
        this.intAdapter = wVar.f(Integer.TYPE, x0.d(), "minDimensionSize");
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(113);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("GenericFileUploadErrorResponse.DocumentErrorResponse.GovernmentIdDimensionSizeError.Details");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public GenericFileUploadErrorResponse.DocumentErrorResponse.GovernmentIdDimensionSizeError.Details fromJson(@NotNull m mVar) {
        mVar.r();
        Integer num = null;
        Integer num2 = null;
        while (mVar.hasNext()) {
            int A0 = mVar.A0(this.options);
            if (A0 == -1) {
                mVar.E0();
                mVar.P();
            } else if (A0 == 0) {
                num = (Integer) this.intAdapter.fromJson(mVar);
                if (num == null) {
                    throw sm.c.x("minDimensionSize", "min_dimension_size", mVar);
                }
            } else if (A0 == 1 && (num2 = (Integer) this.intAdapter.fromJson(mVar)) == null) {
                throw sm.c.x("maxDimensionSize", "max_dimension_size", mVar);
            }
        }
        mVar.y();
        if (num != null) {
            int intValue = num.intValue();
            if (num2 != null) {
                return new GenericFileUploadErrorResponse.DocumentErrorResponse.GovernmentIdDimensionSizeError.Details(intValue, num2.intValue());
            }
            throw sm.c.o("maxDimensionSize", "max_dimension_size", mVar);
        }
        throw sm.c.o("minDimensionSize", "min_dimension_size", mVar);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t tVar, GenericFileUploadErrorResponse.DocumentErrorResponse.GovernmentIdDimensionSizeError.Details details) {
        if (details != null) {
            tVar.l();
            tVar.A0("min_dimension_size");
            this.intAdapter.toJson(tVar, Integer.valueOf(details.getMinDimensionSize()));
            tVar.A0("max_dimension_size");
            this.intAdapter.toJson(tVar, Integer.valueOf(details.getMaxDimensionSize()));
            tVar.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
