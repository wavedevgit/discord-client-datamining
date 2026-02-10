package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class s extends o {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ x f16860e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public s(x xVar, zg.k kVar) {
        super(xVar, kVar);
        this.f16860e = xVar;
    }

    @Override // com.google.android.play.core.assetpacks.o, ai.d0
    public final void g(Bundle bundle) {
        ai.v0 v0Var;
        ai.k0 k0Var;
        v0Var = this.f16860e.f16956e;
        v0Var.u(this.f16805c);
        int i10 = bundle.getInt("error_code");
        k0Var = x.f16950g;
        k0Var.b("onError(%d)", Integer.valueOf(i10));
        this.f16805c.d(new a(i10));
    }

    @Override // com.google.android.play.core.assetpacks.o, ai.d0
    public final void l0(Bundle bundle, Bundle bundle2) {
        AtomicBoolean atomicBoolean;
        ai.k0 k0Var;
        super.l0(bundle, bundle2);
        atomicBoolean = this.f16860e.f16957f;
        if (!atomicBoolean.compareAndSet(true, false)) {
            k0Var = x.f16950g;
            k0Var.e("Expected keepingAlive to be true, but was false.", new Object[0]);
        }
        if (bundle.getBoolean("keep_alive")) {
            this.f16860e.f();
        }
    }
}
