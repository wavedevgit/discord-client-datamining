package ai;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.IInterface;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n extends j {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ t f635e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(t tVar) {
        this.f635e = tVar;
    }

    @Override // ai.j
    public final void a() {
        IInterface iInterface;
        i iVar;
        Context context;
        ServiceConnection serviceConnection;
        t tVar = this.f635e;
        iInterface = tVar.f653m;
        if (iInterface != null) {
            iVar = tVar.f642b;
            iVar.d("Unbind from service.", new Object[0]);
            t tVar2 = this.f635e;
            context = tVar2.f641a;
            serviceConnection = tVar2.f652l;
            context.unbindService(serviceConnection);
            this.f635e.f647g = false;
            this.f635e.f653m = null;
            this.f635e.f652l = null;
        }
        this.f635e.t();
    }
}
