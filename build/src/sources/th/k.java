package th;

import android.os.Bundle;
import java.util.Objects;
import uh.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class k extends b.a {

    /* renamed from: c  reason: collision with root package name */
    final qg.d f50665c;

    /* renamed from: d  reason: collision with root package name */
    final xg.k f50666d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ l f50667e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(l lVar, xg.k kVar) {
        Objects.requireNonNull(lVar);
        this.f50667e = lVar;
        this.f50665c = new qg.d("OnCheckAgeSignalsCallback");
        this.f50666d = kVar;
    }

    @Override // uh.b
    public final void X(Bundle bundle) {
        qg.o oVar = this.f50667e.f50670b;
        xg.k kVar = this.f50666d;
        oVar.u(kVar);
        int i10 = bundle.getInt("error.code");
        this.f50665c.a("onError(%d)", Integer.valueOf(i10));
        kVar.d(new a(i10));
    }

    @Override // uh.b
    public final void u(Bundle bundle) {
        qg.o oVar = this.f50667e.f50670b;
        xg.k kVar = this.f50666d;
        oVar.u(kVar);
        this.f50665c.c("onCompleteCheckAgeSignals", new Object[0]);
        kVar.e(e.g(bundle));
    }
}
