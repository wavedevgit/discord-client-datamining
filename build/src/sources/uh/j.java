package uh;

import android.content.Context;
import android.os.Bundle;
import android.os.RemoteException;
import java.util.Objects;
import rg.p;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j extends rg.e {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ yg.k f51518e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ d f51519i;

    /* renamed from: o  reason: collision with root package name */
    final /* synthetic */ l f51520o;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j(l lVar, yg.k kVar, yg.k kVar2, d dVar) {
        super(kVar);
        this.f51518e = kVar2;
        this.f51519i = dVar;
        Objects.requireNonNull(lVar);
        this.f51520o = lVar;
    }

    @Override // rg.e
    public final void a(Exception exc) {
        if (exc instanceof p) {
            super.a(new a(-5));
        } else {
            super.a(exc);
        }
    }

    @Override // rg.e
    protected final void b() {
        rg.d dVar;
        Context context;
        try {
            l lVar = this.f51520o;
            context = lVar.f51525a;
            String packageName = context.getPackageName();
            Bundle bundle = new Bundle();
            bundle.putInt("playcore.version.code", 2);
            ((vh.a) lVar.f51526b.e()).S0(packageName, bundle, new k(lVar, this.f51518e));
        } catch (RemoteException e10) {
            d dVar2 = this.f51519i;
            dVar = l.f51524c;
            dVar.b(e10, "checkAgeSignals(%s)", dVar2);
            this.f51518e.d(new a(-100));
        }
    }
}
