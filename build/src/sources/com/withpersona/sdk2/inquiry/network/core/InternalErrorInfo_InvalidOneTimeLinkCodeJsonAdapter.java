package com.withpersona.sdk2.inquiry.network.core;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import kotlin.collections.x0;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InternalErrorInfo_InvalidOneTimeLinkCodeJsonAdapter extends h {
    @NotNull
    private final m.b options = m.b.a("oneTimeLinkCode");
    @NotNull
    private final h stringAdapter;

    public InternalErrorInfo_InvalidOneTimeLinkCodeJsonAdapter(@NotNull w wVar) {
        this.stringAdapter = wVar.f(String.class, x0.d(), "oneTimeLinkCode");
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(62);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("InternalErrorInfo.InvalidOneTimeLinkCode");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public InternalErrorInfo.InvalidOneTimeLinkCode fromJson(@NotNull m mVar) {
        mVar.r();
        String str = null;
        while (mVar.hasNext()) {
            int t02 = mVar.t0(this.options);
            if (t02 == -1) {
                mVar.F0();
                mVar.P();
            } else if (t02 == 0 && (str = (String) this.stringAdapter.fromJson(mVar)) == null) {
                throw tm.c.x("oneTimeLinkCode", "oneTimeLinkCode", mVar);
            }
        }
        mVar.y();
        if (str != null) {
            return new InternalErrorInfo.InvalidOneTimeLinkCode(str);
        }
        throw tm.c.o("oneTimeLinkCode", "oneTimeLinkCode", mVar);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t tVar, InternalErrorInfo.InvalidOneTimeLinkCode invalidOneTimeLinkCode) {
        if (invalidOneTimeLinkCode != null) {
            tVar.l();
            tVar.t0("oneTimeLinkCode");
            this.stringAdapter.toJson(tVar, invalidOneTimeLinkCode.getOneTimeLinkCode());
            tVar.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
