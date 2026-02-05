package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class s extends o {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ x f15991e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public s(x xVar, xg.k kVar) {
        super(xVar, kVar);
        this.f15991e = xVar;
    }

    @Override // com.google.android.play.core.assetpacks.o, wh.d0
    public final void g(Bundle bundle) {
        this.f15991e.f16087e.u(this.f15936c);
        int i10 = bundle.getInt("error_code");
        x.f16081g.b("onError(%d)", Integer.valueOf(i10));
        this.f15936c.d(new a(i10));
    }

    @Override // com.google.android.play.core.assetpacks.o, wh.d0
    public final void j0(Bundle bundle, Bundle bundle2) {
        AtomicBoolean atomicBoolean;
        super.j0(bundle, bundle2);
        atomicBoolean = this.f15991e.f16088f;
        if (!atomicBoolean.compareAndSet(true, false)) {
            x.f16081g.e("Expected keepingAlive to be true, but was false.", new Object[0]);
        }
        if (bundle.getBoolean("keep_alive")) {
            this.f15991e.f();
        }
    }
}
