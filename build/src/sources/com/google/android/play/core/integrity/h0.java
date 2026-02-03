package com.google.android.play.core.integrity;

import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class h0 extends e0 {

    /* renamed from: e  reason: collision with root package name */
    private final gi.t0 f16818e;

    /* renamed from: f  reason: collision with root package name */
    final /* synthetic */ j0 f16819f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h0(j0 j0Var, wg.k kVar) {
        super(j0Var, kVar);
        this.f16819f = j0Var;
        this.f16818e = new gi.t0("OnWarmUpIntegrityTokenCallback");
    }

    @Override // com.google.android.play.core.integrity.e0, gi.n0
    public final void u0(Bundle bundle) {
        x0 x0Var;
        super.u0(bundle);
        this.f16818e.c("onWarmUpExpressIntegrityToken", new Object[0]);
        x0Var = this.f16819f.f16834e;
        ef.b a10 = x0Var.a(bundle);
        if (a10 != null) {
            this.f16797c.d(a10);
        } else {
            this.f16797c.e(Long.valueOf(bundle.getLong("warm.up.sid")));
        }
    }
}
