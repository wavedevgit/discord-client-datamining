package ei;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.IInterface;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n extends j {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ t f21536e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(t tVar) {
        this.f21536e = tVar;
    }

    @Override // ei.j
    public final void a() {
        IInterface iInterface;
        i iVar;
        Context context;
        ServiceConnection serviceConnection;
        t tVar = this.f21536e;
        iInterface = tVar.f21554m;
        if (iInterface != null) {
            iVar = tVar.f21543b;
            iVar.d("Unbind from service.", new Object[0]);
            t tVar2 = this.f21536e;
            context = tVar2.f21542a;
            serviceConnection = tVar2.f21553l;
            context.unbindService(serviceConnection);
            this.f21536e.f21548g = false;
            this.f21536e.f21554m = null;
            this.f21536e.f21553l = null;
        }
        this.f21536e.t();
    }
}
