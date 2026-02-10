package fi;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.IInterface;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n extends j {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ t f22644e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(t tVar) {
        this.f22644e = tVar;
    }

    @Override // fi.j
    public final void a() {
        IInterface iInterface;
        i iVar;
        Context context;
        ServiceConnection serviceConnection;
        t tVar = this.f22644e;
        iInterface = tVar.f22662m;
        if (iInterface != null) {
            iVar = tVar.f22651b;
            iVar.d("Unbind from service.", new Object[0]);
            t tVar2 = this.f22644e;
            context = tVar2.f22650a;
            serviceConnection = tVar2.f22661l;
            context.unbindService(serviceConnection);
            this.f22644e.f22656g = false;
            this.f22644e.f22662m = null;
            this.f22644e.f22661l = null;
        }
        this.f22644e.t();
    }
}
