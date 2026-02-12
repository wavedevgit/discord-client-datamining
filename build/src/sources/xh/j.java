package xh;

import android.content.Context;
import android.os.Bundle;
import android.os.RemoteException;
import java.util.Objects;
import sg.p;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j extends sg.e {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ zg.k f54775e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ d f54776i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ l f54777o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j(l lVar, zg.k kVar, zg.k kVar2, d dVar) {
        super(kVar);
        this.f54775e = kVar2;
        this.f54776i = dVar;
        Objects.requireNonNull(lVar);
        this.f54777o = lVar;
    }

    @Override // sg.e
    public final void a(Exception exc) {
        if (exc instanceof p) {
            super.a(new a(-5));
        } else {
            super.a(exc);
        }
    }

    @Override // sg.e
    protected final void b() {
        sg.d dVar;
        Context context;
        try {
            l lVar = this.f54777o;
            context = lVar.f54782a;
            String packageName = context.getPackageName();
            Bundle bundle = new Bundle();
            bundle.putInt("playcore.version.code", 2);
            ((yh.a) lVar.f54783b.e()).Q(packageName, bundle, new k(lVar, this.f54775e));
        } catch (RemoteException e10) {
            d dVar2 = this.f54776i;
            dVar = l.f54781c;
            dVar.b(e10, "checkAgeSignals(%s)", dVar2);
            this.f54775e.d(new a(-100));
        }
    }
}
