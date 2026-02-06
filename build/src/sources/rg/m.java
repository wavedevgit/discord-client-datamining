package rg;

import android.content.ComponentName;
import android.content.ServiceConnection;
import android.os.IBinder;
import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m implements ServiceConnection {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ o f48914d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ m(o oVar, n nVar) {
        Objects.requireNonNull(oVar);
        this.f48914d = oVar;
    }

    @Override // android.content.ServiceConnection
    public final void onServiceConnected(ComponentName componentName, IBinder iBinder) {
        o oVar = this.f48914d;
        o.f(oVar).c("ServiceConnectionImpl.onServiceConnected(%s)", componentName);
        oVar.c().post(new k(this, iBinder));
    }

    @Override // android.content.ServiceConnection
    public final void onServiceDisconnected(ComponentName componentName) {
        o oVar = this.f48914d;
        o.f(oVar).c("ServiceConnectionImpl.onServiceDisconnected(%s)", componentName);
        oVar.c().post(new l(this));
    }
}
