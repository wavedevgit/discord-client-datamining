package th;

import android.content.Context;
import android.os.Bundle;
import android.os.RemoteException;
import java.util.Objects;
import qg.p;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j extends qg.e {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ xg.k f50662e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ d f50663i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ l f50664o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j(l lVar, xg.k kVar, xg.k kVar2, d dVar) {
        super(kVar);
        this.f50662e = kVar2;
        this.f50663i = dVar;
        Objects.requireNonNull(lVar);
        this.f50664o = lVar;
    }

    @Override // qg.e
    public final void a(Exception exc) {
        if (exc instanceof p) {
            super.a(new a(-5));
        } else {
            super.a(exc);
        }
    }

    @Override // qg.e
    protected final void b() {
        qg.d dVar;
        Context context;
        try {
            l lVar = this.f50664o;
            context = lVar.f50669a;
            String packageName = context.getPackageName();
            Bundle bundle = new Bundle();
            bundle.putInt("playcore.version.code", 2);
            ((uh.a) lVar.f50670b.e()).T(packageName, bundle, new k(lVar, this.f50662e));
        } catch (RemoteException e10) {
            d dVar2 = this.f50663i;
            dVar = l.f50668c;
            dVar.b(e10, "checkAgeSignals(%s)", dVar2);
            this.f50662e.d(new a(-100));
        }
    }
}
