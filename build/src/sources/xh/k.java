package xh;

import android.os.Bundle;
import java.util.Objects;
import yh.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class k extends b.a {

    /* renamed from: c  reason: collision with root package name */
    final sg.d f55346c;

    /* renamed from: d  reason: collision with root package name */
    final zg.k f55347d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ l f55348e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(l lVar, zg.k kVar) {
        Objects.requireNonNull(lVar);
        this.f55348e = lVar;
        this.f55346c = new sg.d("OnCheckAgeSignalsCallback");
        this.f55347d = kVar;
    }

    @Override // yh.b
    public final void d0(Bundle bundle) {
        sg.o oVar = this.f55348e.f55351b;
        zg.k kVar = this.f55347d;
        oVar.u(kVar);
        int i10 = bundle.getInt("error.code");
        this.f55346c.a("onError(%d)", Integer.valueOf(i10));
        kVar.d(new a(i10));
    }

    @Override // yh.b
    public final void y(Bundle bundle) {
        sg.o oVar = this.f55348e.f55351b;
        zg.k kVar = this.f55347d;
        oVar.u(kVar);
        this.f55346c.c("onCompleteCheckAgeSignals", new Object[0]);
        kVar.e(e.g(bundle));
    }
}
