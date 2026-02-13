package hi;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.IInterface;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n extends j {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ t f27925e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(t tVar) {
        this.f27925e = tVar;
    }

    @Override // hi.j
    public final void a() {
        IInterface iInterface;
        i iVar;
        Context context;
        ServiceConnection serviceConnection;
        t tVar = this.f27925e;
        iInterface = tVar.f27943m;
        if (iInterface != null) {
            iVar = tVar.f27932b;
            iVar.d("Unbind from service.", new Object[0]);
            t tVar2 = this.f27925e;
            context = tVar2.f27931a;
            serviceConnection = tVar2.f27942l;
            context.unbindService(serviceConnection);
            this.f27925e.f27937g = false;
            this.f27925e.f27943m = null;
            this.f27925e.f27942l = null;
        }
        this.f27925e.t();
    }
}
