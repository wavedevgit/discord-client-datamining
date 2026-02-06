package com.withpersona.sdk2.inquiry.network.core;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.core.InternalErrorInfo;
import kotlin.collections.x0;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InternalErrorInfo_PermissionErrorInfoJsonAdapter extends h {
    @NotNull
    private final m.b options = m.b.a("message");
    @NotNull
    private final h stringAdapter;

    public InternalErrorInfo_PermissionErrorInfoJsonAdapter(@NotNull w wVar) {
        this.stringAdapter = wVar.f(String.class, x0.d(), "message");
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(59);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("InternalErrorInfo.PermissionErrorInfo");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public InternalErrorInfo.PermissionErrorInfo fromJson(@NotNull m mVar) {
        mVar.u();
        String str = null;
        while (mVar.hasNext()) {
            int J = mVar.J(this.options);
            if (J == -1) {
                mVar.E0();
                mVar.S();
            } else if (J == 0 && (str = (String) this.stringAdapter.fromJson(mVar)) == null) {
                throw an.c.x("message", "message", mVar);
            }
        }
        mVar.D();
        if (str != null) {
            return new InternalErrorInfo.PermissionErrorInfo(str);
        }
        throw an.c.o("message", "message", mVar);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t tVar, InternalErrorInfo.PermissionErrorInfo permissionErrorInfo) {
        if (permissionErrorInfo != null) {
            tVar.k();
            tVar.J("message");
            this.stringAdapter.toJson(tVar, permissionErrorInfo.getMessage());
            tVar.s();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
