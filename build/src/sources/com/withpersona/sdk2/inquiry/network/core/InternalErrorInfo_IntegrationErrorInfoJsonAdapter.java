package com.withpersona.sdk2.inquiry.network.core;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import kotlin.collections.x0;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InternalErrorInfo_IntegrationErrorInfoJsonAdapter extends h {
    @NotNull
    private final m.b options = m.b.a("message");
    @NotNull
    private final h stringAdapter;

    public InternalErrorInfo_IntegrationErrorInfoJsonAdapter(@NotNull w wVar) {
        this.stringAdapter = wVar.f(String.class, x0.d(), "message");
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(60);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("InternalErrorInfo.IntegrationErrorInfo");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public InternalErrorInfo.IntegrationErrorInfo fromJson(@NotNull m mVar) {
        mVar.s();
        String str = null;
        while (mVar.hasNext()) {
            int W = mVar.W(this.options);
            if (W == -1) {
                mVar.E0();
                mVar.P();
            } else if (W == 0 && (str = (String) this.stringAdapter.fromJson(mVar)) == null) {
                throw ym.c.x("message", "message", mVar);
            }
        }
        mVar.z();
        if (str != null) {
            return new InternalErrorInfo.IntegrationErrorInfo(str);
        }
        throw ym.c.o("message", "message", mVar);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t tVar, InternalErrorInfo.IntegrationErrorInfo integrationErrorInfo) {
        if (integrationErrorInfo != null) {
            tVar.k();
            tVar.W("message");
            this.stringAdapter.toJson(tVar, integrationErrorInfo.getMessage());
            tVar.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
