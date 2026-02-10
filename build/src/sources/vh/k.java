package vh;

import android.os.Bundle;
import java.util.Objects;
import wh.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class k extends b.a {

    /* renamed from: c  reason: collision with root package name */
    final sg.d f52381c;

    /* renamed from: d  reason: collision with root package name */
    final zg.k f52382d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ l f52383e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(l lVar, zg.k kVar) {
        Objects.requireNonNull(lVar);
        this.f52383e = lVar;
        this.f52381c = new sg.d("OnCheckAgeSignalsCallback");
        this.f52382d = kVar;
    }

    @Override // wh.b
    public final void b0(Bundle bundle) {
        sg.o oVar = this.f52383e.f52386b;
        zg.k kVar = this.f52382d;
        oVar.u(kVar);
        int i10 = bundle.getInt("error.code");
        this.f52381c.a("onError(%d)", Integer.valueOf(i10));
        kVar.d(new a(i10));
    }

    @Override // wh.b
    public final void x(Bundle bundle) {
        sg.o oVar = this.f52383e.f52386b;
        zg.k kVar = this.f52382d;
        oVar.u(kVar);
        this.f52381c.c("onCompleteCheckAgeSignals", new Object[0]);
        kVar.e(e.g(bundle));
    }
}
