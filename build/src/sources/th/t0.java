package th;

import android.content.ComponentName;
import android.content.ServiceConnection;
import android.os.IBinder;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class t0 implements ServiceConnection {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ v0 f49577d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ t0(v0 v0Var, u0 u0Var) {
        this.f49577d = v0Var;
    }

    @Override // android.content.ServiceConnection
    public final void onServiceConnected(ComponentName componentName, IBinder iBinder) {
        v0.f(this.f49577d).d("ServiceConnectionImpl.onServiceConnected(%s)", componentName);
        this.f49577d.c().post(new r0(this, iBinder));
    }

    @Override // android.content.ServiceConnection
    public final void onServiceDisconnected(ComponentName componentName) {
        v0.f(this.f49577d).d("ServiceConnectionImpl.onServiceDisconnected(%s)", componentName);
        this.f49577d.c().post(new s0(this));
    }
}
