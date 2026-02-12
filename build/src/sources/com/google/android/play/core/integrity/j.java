package com.google.android.play.core.integrity;

import android.os.Bundle;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j extends ni.r0 {

    /* renamed from: c  reason: collision with root package name */
    private final ni.t0 f17059c = new ni.t0("OnRequestIntegrityTokenCallback");

    /* renamed from: d  reason: collision with root package name */
    private final zg.k f17060d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ k f17061e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(k kVar, zg.k kVar2) {
        this.f17061e = kVar;
        this.f17060d = kVar2;
    }

    @Override // ni.s0
    public final void d(Bundle bundle) {
        x0 x0Var;
        String str;
        this.f17061e.f17073f.v(this.f17060d);
        this.f17059c.c("onRequestIntegrityToken", new Object[0]);
        x0Var = this.f17061e.f17072e;
        ff.b a10 = x0Var.a(bundle);
        if (a10 != null) {
            this.f17060d.d(a10);
            return;
        }
        String string = bundle.getString("token");
        if (string == null) {
            this.f17060d.d(new a(-100, null));
            return;
        }
        long j10 = bundle.getLong("request.token.sid");
        str = this.f17061e.f17069b;
        i iVar = new i(this, str, j10);
        zg.k kVar = this.f17060d;
        d dVar = new d();
        dVar.b(string);
        dVar.a(iVar);
        kVar.e(dVar.c());
    }
}
