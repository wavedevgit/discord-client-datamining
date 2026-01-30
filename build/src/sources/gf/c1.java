package gf;

import android.content.ComponentName;
import android.content.ServiceConnection;
import android.os.Handler;
import android.os.IBinder;
import android.os.IInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c1 implements ServiceConnection {

    /* renamed from: d  reason: collision with root package name */
    private final int f26768d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ c f26769e;

    public c1(c cVar, int i10) {
        this.f26769e = cVar;
        this.f26768d = i10;
    }

    @Override // android.content.ServiceConnection
    public final void onServiceConnected(ComponentName componentName, IBinder iBinder) {
        Object obj;
        l u0Var;
        c cVar = this.f26769e;
        if (iBinder != null) {
            obj = cVar.f26762y;
            synchronized (obj) {
                try {
                    c cVar2 = this.f26769e;
                    IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    if (queryLocalInterface != null && (queryLocalInterface instanceof l)) {
                        u0Var = (l) queryLocalInterface;
                    } else {
                        u0Var = new u0(iBinder);
                    }
                    cVar2.f26763z = u0Var;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            this.f26769e.c0(0, null, this.f26768d);
            return;
        }
        c.b0(cVar, 16);
    }

    @Override // android.content.ServiceConnection
    public final void onServiceDisconnected(ComponentName componentName) {
        Object obj;
        obj = this.f26769e.f26762y;
        synchronized (obj) {
            this.f26769e.f26763z = null;
        }
        c cVar = this.f26769e;
        int i10 = this.f26768d;
        Handler handler = cVar.f26760w;
        handler.sendMessage(handler.obtainMessage(6, i10, 1));
    }
}
