package gf;

import android.content.ComponentName;
import android.content.ServiceConnection;
import android.os.Handler;
import android.os.IBinder;
import android.os.IInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c1 implements ServiceConnection {

    /* renamed from: d  reason: collision with root package name */
    private final int f26076d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ c f26077e;

    public c1(c cVar, int i10) {
        this.f26077e = cVar;
        this.f26076d = i10;
    }

    @Override // android.content.ServiceConnection
    public final void onServiceConnected(ComponentName componentName, IBinder iBinder) {
        Object obj;
        l u0Var;
        c cVar = this.f26077e;
        if (iBinder != null) {
            obj = cVar.f26070y;
            synchronized (obj) {
                try {
                    c cVar2 = this.f26077e;
                    IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    if (queryLocalInterface != null && (queryLocalInterface instanceof l)) {
                        u0Var = (l) queryLocalInterface;
                    } else {
                        u0Var = new u0(iBinder);
                    }
                    cVar2.f26071z = u0Var;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            this.f26077e.c0(0, null, this.f26076d);
            return;
        }
        c.b0(cVar, 16);
    }

    @Override // android.content.ServiceConnection
    public final void onServiceDisconnected(ComponentName componentName) {
        Object obj;
        obj = this.f26077e.f26070y;
        synchronized (obj) {
            this.f26077e.f26071z = null;
        }
        c cVar = this.f26077e;
        int i10 = this.f26076d;
        Handler handler = cVar.f26068w;
        handler.sendMessage(handler.obtainMessage(6, i10, 1));
    }
}
