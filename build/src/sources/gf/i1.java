package gf;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.IBinder;
import android.os.StrictMode;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i1 implements ServiceConnection, l1 {

    /* renamed from: d  reason: collision with root package name */
    private final Map f25087d;

    /* renamed from: e  reason: collision with root package name */
    private int f25088e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f25089i;

    /* renamed from: o  reason: collision with root package name */
    private IBinder f25090o;

    /* renamed from: p  reason: collision with root package name */
    private final h1 f25091p;

    /* renamed from: q  reason: collision with root package name */
    private ComponentName f25092q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ k1 f25093r;

    public i1(k1 k1Var, h1 h1Var) {
        Objects.requireNonNull(k1Var);
        this.f25093r = k1Var;
        this.f25091p = h1Var;
        this.f25087d = new HashMap();
        this.f25088e = 2;
    }

    public final void a(String str) {
        h1 h1Var = this.f25091p;
        k1 k1Var = this.f25093r;
        k1Var.h().removeMessages(1, h1Var);
        k1Var.i().c(k1Var.g(), this);
        this.f25089i = false;
        this.f25088e = 2;
    }

    public final void b(ServiceConnection serviceConnection, ServiceConnection serviceConnection2, String str) {
        this.f25087d.put(serviceConnection, serviceConnection2);
    }

    public final void c(ServiceConnection serviceConnection, String str) {
        this.f25087d.remove(serviceConnection);
    }

    public final boolean d() {
        return this.f25089i;
    }

    public final int e() {
        return this.f25088e;
    }

    public final boolean f(ServiceConnection serviceConnection) {
        return this.f25087d.containsKey(serviceConnection);
    }

    public final boolean g() {
        return this.f25087d.isEmpty();
    }

    public final IBinder h() {
        return this.f25090o;
    }

    public final ComponentName i() {
        return this.f25092q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ com.google.android.gms.common.b j(String str, Executor executor) {
        k1 k1Var;
        nf.a i10;
        Context g10;
        h1 h1Var;
        try {
            Intent a10 = w0.a(this.f25093r.g(), this.f25091p);
            this.f25088e = 3;
            StrictMode.VmPolicy a11 = com.google.android.gms.common.util.r.a();
            try {
                k1Var = this.f25093r;
                i10 = k1Var.i();
                g10 = k1Var.g();
                h1Var = this.f25091p;
            } catch (Throwable th2) {
                th = th2;
            }
            try {
                boolean d10 = i10.d(g10, str, a10, this, 4225, executor);
                this.f25089i = d10;
                if (d10) {
                    k1Var.h().sendMessageDelayed(k1Var.h().obtainMessage(1, h1Var), k1Var.j());
                    com.google.android.gms.common.b bVar = com.google.android.gms.common.b.f13747q;
                    StrictMode.setVmPolicy(a11);
                    return bVar;
                }
                this.f25088e = 2;
                try {
                    k1Var.i().c(k1Var.g(), this);
                } catch (IllegalArgumentException unused) {
                }
                com.google.android.gms.common.b bVar2 = new com.google.android.gms.common.b(16);
                StrictMode.setVmPolicy(a11);
                return bVar2;
            } catch (Throwable th3) {
                th = th3;
                Throwable th4 = th;
                StrictMode.setVmPolicy(a11);
                throw th4;
            }
        } catch (u0 e10) {
            return e10.f25154d;
        }
    }

    @Override // android.content.ServiceConnection
    public final void onBindingDied(ComponentName componentName) {
        onServiceDisconnected(componentName);
    }

    @Override // android.content.ServiceConnection
    public final void onServiceConnected(ComponentName componentName, IBinder iBinder) {
        k1 k1Var = this.f25093r;
        synchronized (k1Var.f()) {
            try {
                k1Var.h().removeMessages(1, this.f25091p);
                this.f25090o = iBinder;
                this.f25092q = componentName;
                for (ServiceConnection serviceConnection : this.f25087d.values()) {
                    serviceConnection.onServiceConnected(componentName, iBinder);
                }
                this.f25088e = 1;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // android.content.ServiceConnection
    public final void onServiceDisconnected(ComponentName componentName) {
        k1 k1Var = this.f25093r;
        synchronized (k1Var.f()) {
            try {
                k1Var.h().removeMessages(1, this.f25091p);
                this.f25090o = null;
                this.f25092q = componentName;
                for (ServiceConnection serviceConnection : this.f25087d.values()) {
                    serviceConnection.onServiceDisconnected(componentName);
                }
                this.f25088e = 2;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
