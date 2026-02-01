package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class s extends o {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ x f17000e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public s(x xVar, wg.k kVar) {
        super(xVar, kVar);
        this.f17000e = xVar;
    }

    @Override // com.google.android.play.core.assetpacks.o, th.d0
    public final void b0(Bundle bundle, Bundle bundle2) {
        AtomicBoolean atomicBoolean;
        super.b0(bundle, bundle2);
        atomicBoolean = this.f17000e.f17097f;
        if (!atomicBoolean.compareAndSet(true, false)) {
            x.f17090g.e("Expected keepingAlive to be true, but was false.", new Object[0]);
        }
        if (bundle.getBoolean("keep_alive")) {
            this.f17000e.f();
        }
    }

    @Override // com.google.android.play.core.assetpacks.o, th.d0
    public final void g(Bundle bundle) {
        th.v0 v0Var;
        v0Var = this.f17000e.f17096e;
        v0Var.u(this.f16945c);
        int i10 = bundle.getInt("error_code");
        x.f17090g.b("onError(%d)", Integer.valueOf(i10));
        this.f16945c.d(new a(i10));
    }
}
