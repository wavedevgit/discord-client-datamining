package hi;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.IInterface;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n extends j {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ t f27356e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(t tVar) {
        this.f27356e = tVar;
    }

    @Override // hi.j
    public final void a() {
        IInterface iInterface;
        i iVar;
        Context context;
        ServiceConnection serviceConnection;
        t tVar = this.f27356e;
        iInterface = tVar.f27374m;
        if (iInterface != null) {
            iVar = tVar.f27363b;
            iVar.d("Unbind from service.", new Object[0]);
            t tVar2 = this.f27356e;
            context = tVar2.f27362a;
            serviceConnection = tVar2.f27373l;
            context.unbindService(serviceConnection);
            this.f27356e.f27368g = false;
            this.f27356e.f27374m = null;
            this.f27356e.f27373l = null;
        }
        this.f27356e.t();
    }
}
