package com.google.android.play.core.integrity;

import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class h0 extends e0 {

    /* renamed from: e  reason: collision with root package name */
    private final ni.t0 f17050e;

    /* renamed from: f  reason: collision with root package name */
    final /* synthetic */ j0 f17051f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h0(j0 j0Var, zg.k kVar) {
        super(j0Var, kVar);
        this.f17051f = j0Var;
        this.f17050e = new ni.t0("OnWarmUpIntegrityTokenCallback");
    }

    @Override // com.google.android.play.core.integrity.e0, ni.n0
    public final void G0(Bundle bundle) {
        x0 x0Var;
        super.G0(bundle);
        this.f17050e.c("onWarmUpExpressIntegrityToken", new Object[0]);
        x0Var = this.f17051f.f17066e;
        ff.b a10 = x0Var.a(bundle);
        if (a10 != null) {
            this.f17029c.d(a10);
        } else {
            this.f17029c.e(Long.valueOf(bundle.getLong("warm.up.sid")));
        }
    }
}
