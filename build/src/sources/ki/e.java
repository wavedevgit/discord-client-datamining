package ki;

import android.content.ComponentName;
import android.content.ServiceConnection;
import android.os.IBinder;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements ServiceConnection {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ f f31711d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ e(f fVar, d dVar) {
        this.f31711d = fVar;
    }

    @Override // android.content.ServiceConnection
    public final void onServiceConnected(ComponentName componentName, IBinder iBinder) {
        f.f(this.f31711d).c("ServiceConnectionImpl.onServiceConnected(%s)", componentName);
        this.f31711d.c().post(new b(this, iBinder));
    }

    @Override // android.content.ServiceConnection
    public final void onServiceDisconnected(ComponentName componentName) {
        f.f(this.f31711d).c("ServiceConnectionImpl.onServiceDisconnected(%s)", componentName);
        this.f31711d.c().post(new c(this));
    }
}
