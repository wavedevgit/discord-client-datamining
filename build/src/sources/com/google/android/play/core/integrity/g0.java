package com.google.android.play.core.integrity;

import android.os.Bundle;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g0 extends e0 {

    /* renamed from: e  reason: collision with root package name */
    private final li.t0 f16291e;

    /* renamed from: f  reason: collision with root package name */
    private final long f16292f;

    /* renamed from: g  reason: collision with root package name */
    final /* synthetic */ j0 f16293g;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g0(j0 j0Var, zg.k kVar, long j10) {
        super(j0Var, kVar);
        this.f16293g = j0Var;
        this.f16291e = new li.t0("OnRequestIntegrityTokenCallback");
        this.f16292f = j10;
    }

    @Override // com.google.android.play.core.integrity.e0, li.n0
    public final void c(Bundle bundle) {
        x0 x0Var;
        String str;
        super.c(bundle);
        this.f16291e.c("onRequestExpressIntegrityToken", new Object[0]);
        x0Var = this.f16293g.f16316e;
        ff.b a10 = x0Var.a(bundle);
        if (a10 != null) {
            this.f16279c.d(a10);
            return;
        }
        long j10 = bundle.getLong("request.token.sid");
        str = this.f16293g.f16313b;
        f0 f0Var = new f0(this, str, j10);
        zg.k kVar = this.f16279c;
        y yVar = new y();
        yVar.b(bundle.getString("token"));
        yVar.a(f0Var);
        kVar.e(yVar.c());
    }
}
