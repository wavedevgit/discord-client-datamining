package hi;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.IInterface;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n extends j {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ t f27357e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(t tVar) {
        this.f27357e = tVar;
    }

    @Override // hi.j
    public final void a() {
        IInterface iInterface;
        i iVar;
        Context context;
        ServiceConnection serviceConnection;
        t tVar = this.f27357e;
        iInterface = tVar.f27375m;
        if (iInterface != null) {
            iVar = tVar.f27364b;
            iVar.d("Unbind from service.", new Object[0]);
            t tVar2 = this.f27357e;
            context = tVar2.f27363a;
            serviceConnection = tVar2.f27374l;
            context.unbindService(serviceConnection);
            this.f27357e.f27369g = false;
            this.f27357e.f27375m = null;
            this.f27357e.f27374l = null;
        }
        this.f27357e.t();
    }
}
