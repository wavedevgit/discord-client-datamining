package xh;

import android.os.Bundle;
import java.util.Objects;
import yh.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class k extends b.a {

    /* renamed from: c  reason: collision with root package name */
    final sg.d f54777c;

    /* renamed from: d  reason: collision with root package name */
    final zg.k f54778d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ l f54779e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(l lVar, zg.k kVar) {
        Objects.requireNonNull(lVar);
        this.f54779e = lVar;
        this.f54777c = new sg.d("OnCheckAgeSignalsCallback");
        this.f54778d = kVar;
    }

    @Override // yh.b
    public final void d0(Bundle bundle) {
        sg.o oVar = this.f54779e.f54782b;
        zg.k kVar = this.f54778d;
        oVar.u(kVar);
        int i10 = bundle.getInt("error.code");
        this.f54777c.a("onError(%d)", Integer.valueOf(i10));
        kVar.d(new a(i10));
    }

    @Override // yh.b
    public final void y(Bundle bundle) {
        sg.o oVar = this.f54779e.f54782b;
        zg.k kVar = this.f54778d;
        oVar.u(kVar);
        this.f54777c.c("onCompleteCheckAgeSignals", new Object[0]);
        kVar.e(e.g(bundle));
    }
}
