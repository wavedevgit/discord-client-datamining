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
    private final int f25050d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ c f25051e;

    public a1(c cVar, int i10) {
        Objects.requireNonNull(cVar);
        this.f25051e = cVar;
        this.f25050d = i10;
    }

    @Override // android.content.ServiceConnection
    public final void onServiceConnected(ComponentName componentName, IBinder iBinder) {
        l s0Var;
        c cVar = this.f25051e;
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
        this.f25051e.S(0, null, this.f25050d);
    }

    @Override // android.content.ServiceConnection
    public final void onServiceDisconnected(ComponentName componentName) {
        c cVar = this.f25051e;
        synchronized (cVar.Y()) {
            cVar.Z(null);
        }
        c cVar2 = this.f25051e;
        int i10 = this.f25050d;
        Handler handler = cVar2.f25067w;
        handler.sendMessage(handler.obtainMessage(6, i10, 1));
    }
}
