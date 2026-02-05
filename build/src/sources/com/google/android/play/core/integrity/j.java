package com.google.android.play.core.integrity;

import android.os.Bundle;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j extends ji.r0 {

    /* renamed from: c  reason: collision with root package name */
    private final ji.t0 f16189c = new ji.t0("OnRequestIntegrityTokenCallback");

    /* renamed from: d  reason: collision with root package name */
    private final xg.k f16190d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ k f16191e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(k kVar, xg.k kVar2) {
        this.f16191e = kVar;
        this.f16190d = kVar2;
    }

    @Override // ji.s0
    public final void d(Bundle bundle) {
        x0 x0Var;
        String str;
        this.f16191e.f16203f.v(this.f16190d);
        this.f16189c.c("onRequestIntegrityToken", new Object[0]);
        x0Var = this.f16191e.f16202e;
        ef.b a10 = x0Var.a(bundle);
        if (a10 != null) {
            this.f16190d.d(a10);
            return;
        }
        String string = bundle.getString("token");
        if (string == null) {
            this.f16190d.d(new a(-100, null));
            return;
        }
        long j10 = bundle.getLong("request.token.sid");
        str = this.f16191e.f16199b;
        i iVar = new i(this, str, j10);
        xg.k kVar = this.f16190d;
        d dVar = new d();
        dVar.b(string);
        dVar.a(iVar);
        kVar.e(dVar.c());
    }
}
