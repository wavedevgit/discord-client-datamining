package zh;

import android.os.Bundle;
import android.os.RemoteException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i extends ai.j {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ wg.k f55971e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ l f55972i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(l lVar, wg.k kVar, wg.k kVar2) {
        super(kVar);
        this.f55972i = lVar;
        this.f55971e = kVar2;
    }

    /* JADX WARN: Type inference failed for: r0v3, types: [android.os.IInterface, ai.f] */
    @Override // ai.j
    protected final void a() {
        ai.i iVar;
        String str;
        String str2;
        String str3;
        try {
            ?? e10 = this.f55972i.f55978a.e();
            str2 = this.f55972i.f55979b;
            Bundle a10 = m.a();
            l lVar = this.f55972i;
            wg.k kVar = this.f55971e;
            str3 = lVar.f55979b;
            e10.O0(str2, a10, new k(lVar, kVar, str3));
        } catch (RemoteException e11) {
            iVar = l.f55977c;
            str = this.f55972i.f55979b;
            iVar.c(e11, "error requesting in-app review for %s", str);
            this.f55971e.d(new RuntimeException(e11));
        }
    }
}
