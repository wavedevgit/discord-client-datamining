package ei;

import android.os.Bundle;
import android.os.RemoteException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i extends fi.j {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ zg.k f21663e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ l f21664i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(l lVar, zg.k kVar, zg.k kVar2) {
        super(kVar);
        this.f21664i = lVar;
        this.f21663e = kVar2;
    }

    /* JADX WARN: Type inference failed for: r0v3, types: [fi.f, android.os.IInterface] */
    @Override // fi.j
    protected final void a() {
        fi.i iVar;
        String str;
        String str2;
        String str3;
        try {
            ?? e10 = this.f21664i.f21670a.e();
            str2 = this.f21664i.f21671b;
            Bundle a10 = m.a();
            l lVar = this.f21664i;
            zg.k kVar = this.f21663e;
            str3 = lVar.f21671b;
            e10.O(str2, a10, new k(lVar, kVar, str3));
        } catch (RemoteException e11) {
            iVar = l.f21669c;
            str = this.f21664i.f21671b;
            iVar.c(e11, "error requesting in-app review for %s", str);
            this.f21663e.d(new RuntimeException(e11));
        }
    }
}
