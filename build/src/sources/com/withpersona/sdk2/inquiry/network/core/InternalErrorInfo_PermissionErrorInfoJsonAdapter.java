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
        mVar.r();
        String str = null;
        while (mVar.hasNext()) {
            int A0 = mVar.A0(this.options);
            if (A0 == -1) {
                mVar.E0();
                mVar.P();
            } else if (A0 == 0 && (str = (String) this.stringAdapter.fromJson(mVar)) == null) {
                throw vm.c.x("message", "message", mVar);
            }
        }
        mVar.y();
        if (str != null) {
            return new InternalErrorInfo.PermissionErrorInfo(str);
        }
        throw vm.c.o("message", "message", mVar);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t tVar, InternalErrorInfo.PermissionErrorInfo permissionErrorInfo) {
        if (permissionErrorInfo != null) {
            tVar.l();
            tVar.A0("message");
            this.stringAdapter.toJson(tVar, permissionErrorInfo.getMessage());
            tVar.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
