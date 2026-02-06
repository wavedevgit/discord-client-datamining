package uh;

import android.os.Bundle;
import java.util.Objects;
import vh.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class k extends b.a {

    /* renamed from: c  reason: collision with root package name */
    final rg.d f51473c;

    /* renamed from: d  reason: collision with root package name */
    final yg.k f51474d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ l f51475e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(l lVar, yg.k kVar) {
        Objects.requireNonNull(lVar);
        this.f51475e = lVar;
        this.f51473c = new rg.d("OnCheckAgeSignalsCallback");
        this.f51474d = kVar;
    }

    @Override // vh.b
    public final void Z(Bundle bundle) {
        rg.o oVar = this.f51475e.f51478b;
        yg.k kVar = this.f51474d;
        oVar.u(kVar);
        int i10 = bundle.getInt("error.code");
        this.f51473c.a("onError(%d)", Integer.valueOf(i10));
        kVar.d(new a(i10));
    }

    @Override // vh.b
    public final void t(Bundle bundle) {
        rg.o oVar = this.f51475e.f51478b;
        yg.k kVar = this.f51474d;
        oVar.u(kVar);
        this.f51473c.c("onCompleteCheckAgeSignals", new Object[0]);
        kVar.e(e.g(bundle));
    }
}
