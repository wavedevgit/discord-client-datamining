package com.google.android.play.core.integrity;

import android.os.Bundle;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j extends li.r0 {

    /* renamed from: c  reason: collision with root package name */
    private final li.t0 f16309c = new li.t0("OnRequestIntegrityTokenCallback");

    /* renamed from: d  reason: collision with root package name */
    private final zg.k f16310d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ k f16311e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(k kVar, zg.k kVar2) {
        this.f16311e = kVar;
        this.f16310d = kVar2;
    }

    @Override // li.s0
    public final void d(Bundle bundle) {
        x0 x0Var;
        String str;
        this.f16311e.f16323f.v(this.f16310d);
        this.f16309c.c("onRequestIntegrityToken", new Object[0]);
        x0Var = this.f16311e.f16322e;
        ff.b a10 = x0Var.a(bundle);
        if (a10 != null) {
            this.f16310d.d(a10);
            return;
        }
        String string = bundle.getString("token");
        if (string == null) {
            this.f16310d.d(new a(-100, null));
            return;
        }
        long j10 = bundle.getLong("request.token.sid");
        str = this.f16311e.f16319b;
        i iVar = new i(this, str, j10);
        zg.k kVar = this.f16310d;
        d dVar = new d();
        dVar.b(string);
        dVar.a(iVar);
        kVar.e(dVar.c());
    }
}
