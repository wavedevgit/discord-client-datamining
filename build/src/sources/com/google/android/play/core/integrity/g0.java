package com.google.android.play.core.integrity;

import android.os.Bundle;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g0 extends e0 {

    /* renamed from: e  reason: collision with root package name */
    private final gi.t0 f17180e;

    /* renamed from: f  reason: collision with root package name */
    private final long f17181f;

    /* renamed from: g  reason: collision with root package name */
    final /* synthetic */ j0 f17182g;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g0(j0 j0Var, wg.k kVar, long j10) {
        super(j0Var, kVar);
        this.f17182g = j0Var;
        this.f17180e = new gi.t0("OnRequestIntegrityTokenCallback");
        this.f17181f = j10;
    }

    @Override // com.google.android.play.core.integrity.e0, gi.n0
    public final void c(Bundle bundle) {
        x0 x0Var;
        String str;
        super.c(bundle);
        this.f17180e.c("onRequestExpressIntegrityToken", new Object[0]);
        x0Var = this.f17182g.f17205e;
        ef.b a10 = x0Var.a(bundle);
        if (a10 != null) {
            this.f17168c.d(a10);
            return;
        }
        long j10 = bundle.getLong("request.token.sid");
        str = this.f17182g.f17202b;
        f0 f0Var = new f0(this, str, j10);
        wg.k kVar = this.f17168c;
        y yVar = new y();
        yVar.b(bundle.getString("token"));
        yVar.a(f0Var);
        kVar.e(yVar.c());
    }
}
