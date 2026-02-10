package hi;

import android.content.ComponentName;
import android.content.ServiceConnection;
import android.os.IBinder;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s implements ServiceConnection {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ t f27360d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ s(t tVar, r rVar) {
        this.f27360d = tVar;
    }

    @Override // android.content.ServiceConnection
    public final void onServiceConnected(ComponentName componentName, IBinder iBinder) {
        t.f(this.f27360d).d("ServiceConnectionImpl.onServiceConnected(%s)", componentName);
        t tVar = this.f27360d;
        tVar.c().post(new p(this, iBinder));
    }

    @Override // android.content.ServiceConnection
    public final void onServiceDisconnected(ComponentName componentName) {
        t.f(this.f27360d).d("ServiceConnectionImpl.onServiceDisconnected(%s)", componentName);
        t tVar = this.f27360d;
        tVar.c().post(new q(this));
    }
}
