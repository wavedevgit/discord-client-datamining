package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class s extends o {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ x f15971e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public s(x xVar, yg.k kVar) {
        super(xVar, kVar);
        this.f15971e = xVar;
    }

    @Override // com.google.android.play.core.assetpacks.o, xh.d0
    public final void g(Bundle bundle) {
        xh.v0 v0Var;
        xh.k0 k0Var;
        v0Var = this.f15971e.f16067e;
        v0Var.u(this.f15916c);
        int i10 = bundle.getInt("error_code");
        k0Var = x.f16061g;
        k0Var.b("onError(%d)", Integer.valueOf(i10));
        this.f15916c.d(new a(i10));
    }

    @Override // com.google.android.play.core.assetpacks.o, xh.d0
    public final void k0(Bundle bundle, Bundle bundle2) {
        AtomicBoolean atomicBoolean;
        xh.k0 k0Var;
        super.k0(bundle, bundle2);
        atomicBoolean = this.f15971e.f16068f;
        if (!atomicBoolean.compareAndSet(true, false)) {
            k0Var = x.f16061g;
            k0Var.e("Expected keepingAlive to be true, but was false.", new Object[0]);
        }
        if (bundle.getBoolean("keep_alive")) {
            this.f15971e.f();
        }
    }
}
