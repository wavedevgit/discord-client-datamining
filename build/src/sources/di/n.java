package di;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.IInterface;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n extends j {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ t f20821e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(t tVar) {
        this.f20821e = tVar;
    }

    @Override // di.j
    public final void a() {
        IInterface iInterface;
        i iVar;
        Context context;
        ServiceConnection serviceConnection;
        t tVar = this.f20821e;
        iInterface = tVar.f20839m;
        if (iInterface != null) {
            iVar = tVar.f20828b;
            iVar.d("Unbind from service.", new Object[0]);
            t tVar2 = this.f20821e;
            context = tVar2.f20827a;
            serviceConnection = tVar2.f20838l;
            context.unbindService(serviceConnection);
            this.f20821e.f20833g = false;
            this.f20821e.f20839m = null;
            this.f20821e.f20838l = null;
        }
        this.f20821e.t();
    }
}
