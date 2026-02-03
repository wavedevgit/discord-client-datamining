package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class s extends o {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ x f15597e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public s(x xVar, wg.k kVar) {
        super(xVar, kVar);
        this.f15597e = xVar;
    }

    @Override // com.google.android.play.core.assetpacks.o, th.d0
    public final void b0(Bundle bundle, Bundle bundle2) {
        AtomicBoolean atomicBoolean;
        th.k0 k0Var;
        super.b0(bundle, bundle2);
        atomicBoolean = this.f15597e.f15694f;
        if (!atomicBoolean.compareAndSet(true, false)) {
            k0Var = x.f15687g;
            k0Var.e("Expected keepingAlive to be true, but was false.", new Object[0]);
        }
        if (bundle.getBoolean("keep_alive")) {
            this.f15597e.f();
        }
    }

    @Override // com.google.android.play.core.assetpacks.o, th.d0
    public final void g(Bundle bundle) {
        th.v0 v0Var;
        th.k0 k0Var;
        v0Var = this.f15597e.f15693e;
        v0Var.u(this.f15542c);
        int i10 = bundle.getInt("error_code");
        k0Var = x.f15687g;
        k0Var.b("onError(%d)", Integer.valueOf(i10));
        this.f15542c.d(new a(i10));
    }
}
