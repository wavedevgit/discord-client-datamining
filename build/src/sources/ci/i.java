package ci;

import android.os.Bundle;
import android.os.RemoteException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i extends di.j {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ xg.k f7627e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ l f7628i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(l lVar, xg.k kVar, xg.k kVar2) {
        super(kVar);
        this.f7628i = lVar;
        this.f7627e = kVar2;
    }

    /* JADX WARN: Type inference failed for: r0v3, types: [di.f, android.os.IInterface] */
    @Override // di.j
    protected final void a() {
        di.i iVar;
        String str;
        String str2;
        String str3;
        try {
            ?? e10 = this.f7628i.f7634a.e();
            str2 = this.f7628i.f7635b;
            Bundle a10 = m.a();
            l lVar = this.f7628i;
            xg.k kVar = this.f7627e;
            str3 = lVar.f7635b;
            e10.T0(str2, a10, new k(lVar, kVar, str3));
        } catch (RemoteException e11) {
            iVar = l.f7633c;
            str = this.f7628i.f7635b;
            iVar.c(e11, "error requesting in-app review for %s", str);
            this.f7627e.d(new RuntimeException(e11));
        }
    }
}
