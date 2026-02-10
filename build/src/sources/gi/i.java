package gi;

import android.os.Bundle;
import android.os.RemoteException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i extends hi.j {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ zg.k f25709e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ l f25710i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(l lVar, zg.k kVar, zg.k kVar2) {
        super(kVar);
        this.f25710i = lVar;
        this.f25709e = kVar2;
    }

    /* JADX WARN: Type inference failed for: r0v3, types: [android.os.IInterface, hi.f] */
    @Override // hi.j
    protected final void a() {
        hi.i iVar;
        String str;
        String str2;
        String str3;
        try {
            ?? e10 = this.f25710i.f25716a.e();
            str2 = this.f25710i.f25717b;
            Bundle a10 = m.a();
            l lVar = this.f25710i;
            zg.k kVar = this.f25709e;
            str3 = lVar.f25717b;
            e10.m(str2, a10, new k(lVar, kVar, str3));
        } catch (RemoteException e11) {
            iVar = l.f25715c;
            str = this.f25710i.f25717b;
            iVar.c(e11, "error requesting in-app review for %s", str);
            this.f25709e.d(new RuntimeException(e11));
        }
    }
}
