package gf;

import android.content.ComponentName;
import android.content.ServiceConnection;
import android.os.Handler;
import android.os.IBinder;
import android.os.IInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c1 implements ServiceConnection {

    /* renamed from: d  reason: collision with root package name */
    private final int f26863d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ c f26864e;

    public c1(c cVar, int i10) {
        this.f26864e = cVar;
        this.f26863d = i10;
    }

    @Override // android.content.ServiceConnection
    public final void onServiceConnected(ComponentName componentName, IBinder iBinder) {
        Object obj;
        l u0Var;
        c cVar = this.f26864e;
        if (iBinder != null) {
            obj = cVar.f26857y;
            synchronized (obj) {
                try {
                    c cVar2 = this.f26864e;
                    IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.common.internal.IGmsServiceBroker");
                    if (queryLocalInterface != null && (queryLocalInterface instanceof l)) {
                        u0Var = (l) queryLocalInterface;
                    } else {
                        u0Var = new u0(iBinder);
                    }
                    cVar2.f26858z = u0Var;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            this.f26864e.c0(0, null, this.f26863d);
            return;
        }
        c.b0(cVar, 16);
    }

    @Override // android.content.ServiceConnection
    public final void onServiceDisconnected(ComponentName componentName) {
        Object obj;
        obj = this.f26864e.f26857y;
        synchronized (obj) {
            this.f26864e.f26858z = null;
        }
        c cVar = this.f26864e;
        int i10 = this.f26863d;
        Handler handler = cVar.f26855w;
        handler.sendMessage(handler.obtainMessage(6, i10, 1));
    }
}
