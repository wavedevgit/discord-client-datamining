package gf;

import android.content.ComponentName;
import android.content.ServiceConnection;
import android.os.Handler;
import android.os.IBinder;
import android.os.IInterface;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a1 implements ServiceConnection {

    /* renamed from: d  reason: collision with root package name */
    private final int f24749d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ c f24750e;

    public a1(c cVar, int i10) {
        Objects.requireNonNull(cVar);
        this.f24750e = cVar;
        this.f24749d = i10;
    }

    @Override // android.content.ServiceConnection
    public final void onServiceConnected(ComponentName componentName, IBinder iBinder) {
        l s0Var;
        c cVar = this.f24750e;
        if (iBinder == null) {
            cVar.W(16);
            return;
        }
        synchronized (cVar.Y()) {
            try {
                IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                if (queryLocalInterface != null && (queryLocalInterface instanceof l)) {
                    s0Var = (l) queryLocalInterface;
                } else {
                    s0Var = new s0(iBinder);
                }
                cVar.Z(s0Var);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        this.f24750e.S(0, null, this.f24749d);
    }

    @Override // android.content.ServiceConnection
    public final void onServiceDisconnected(ComponentName componentName) {
        c cVar = this.f24750e;
        synchronized (cVar.Y()) {
            cVar.Z(null);
        }
        c cVar2 = this.f24750e;
        int i10 = this.f24749d;
        Handler handler = cVar2.f24766w;
        handler.sendMessage(handler.obtainMessage(6, i10, 1));
    }
}
