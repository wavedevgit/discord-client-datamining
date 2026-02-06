package com.google.android.play.core.integrity;

import android.os.Bundle;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j extends ki.r0 {

    /* renamed from: c  reason: collision with root package name */
    private final ki.t0 f16169c = new ki.t0("OnRequestIntegrityTokenCallback");

    /* renamed from: d  reason: collision with root package name */
    private final yg.k f16170d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ k f16171e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(k kVar, yg.k kVar2) {
        this.f16171e = kVar;
        this.f16170d = kVar2;
    }

    @Override // ki.s0
    public final void d(Bundle bundle) {
        x0 x0Var;
        String str;
        this.f16171e.f16183f.v(this.f16170d);
        this.f16169c.c("onRequestIntegrityToken", new Object[0]);
        x0Var = this.f16171e.f16182e;
        ef.b a10 = x0Var.a(bundle);
        if (a10 != null) {
            this.f16170d.d(a10);
            return;
        }
        String string = bundle.getString("token");
        if (string == null) {
            this.f16170d.d(new a(-100, null));
            return;
        }
        long j10 = bundle.getLong("request.token.sid");
        str = this.f16171e.f16179b;
        i iVar = new i(this, str, j10);
        yg.k kVar = this.f16170d;
        d dVar = new d();
        dVar.b(string);
        dVar.a(iVar);
        kVar.e(dVar.c());
    }
}
