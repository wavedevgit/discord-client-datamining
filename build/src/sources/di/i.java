package di;

import android.os.Bundle;
import android.os.RemoteException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i extends ei.j {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ yg.k f20774e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ l f20775i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(l lVar, yg.k kVar, yg.k kVar2) {
        super(kVar);
        this.f20775i = lVar;
        this.f20774e = kVar2;
    }

    /* JADX WARN: Type inference failed for: r0v3, types: [ei.f, android.os.IInterface] */
    @Override // ei.j
    protected final void a() {
        ei.i iVar;
        String str;
        String str2;
        String str3;
        try {
            ?? e10 = this.f20775i.f20781a.e();
            str2 = this.f20775i.f20782b;
            Bundle a10 = m.a();
            l lVar = this.f20775i;
            yg.k kVar = this.f20774e;
            str3 = lVar.f20782b;
            e10.G(str2, a10, new k(lVar, kVar, str3));
        } catch (RemoteException e11) {
            iVar = l.f20780c;
            str = this.f20775i.f20782b;
            iVar.c(e11, "error requesting in-app review for %s", str);
            this.f20774e.d(new RuntimeException(e11));
        }
    }
}
