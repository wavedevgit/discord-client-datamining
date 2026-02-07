package uh;

import android.os.Bundle;
import java.util.Objects;
import vh.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class k extends b.a {

    /* renamed from: c  reason: collision with root package name */
    final rg.d f51521c;

    /* renamed from: d  reason: collision with root package name */
    final yg.k f51522d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ l f51523e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(l lVar, yg.k kVar) {
        Objects.requireNonNull(lVar);
        this.f51523e = lVar;
        this.f51521c = new rg.d("OnCheckAgeSignalsCallback");
        this.f51522d = kVar;
    }

    @Override // vh.b
    public final void Z(Bundle bundle) {
        rg.o oVar = this.f51523e.f51526b;
        yg.k kVar = this.f51522d;
        oVar.u(kVar);
        int i10 = bundle.getInt("error.code");
        this.f51521c.a("onError(%d)", Integer.valueOf(i10));
        kVar.d(new a(i10));
    }

    @Override // vh.b
    public final void t(Bundle bundle) {
        rg.o oVar = this.f51523e.f51526b;
        yg.k kVar = this.f51522d;
        oVar.u(kVar);
        this.f51521c.c("onCompleteCheckAgeSignals", new Object[0]);
        kVar.e(e.g(bundle));
    }
}
