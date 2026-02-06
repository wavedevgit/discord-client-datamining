package com.google.android.play.core.integrity;

import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class h0 extends e0 {

    /* renamed from: e  reason: collision with root package name */
    private final ki.t0 f16160e;

    /* renamed from: f  reason: collision with root package name */
    final /* synthetic */ j0 f16161f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h0(j0 j0Var, yg.k kVar) {
        super(j0Var, kVar);
        this.f16161f = j0Var;
        this.f16160e = new ki.t0("OnWarmUpIntegrityTokenCallback");
    }

    @Override // com.google.android.play.core.integrity.e0, ki.n0
    public final void D0(Bundle bundle) {
        x0 x0Var;
        super.D0(bundle);
        this.f16160e.c("onWarmUpExpressIntegrityToken", new Object[0]);
        x0Var = this.f16161f.f16176e;
        ef.b a10 = x0Var.a(bundle);
        if (a10 != null) {
            this.f16139c.d(a10);
        } else {
            this.f16139c.e(Long.valueOf(bundle.getLong("warm.up.sid")));
        }
    }
}
