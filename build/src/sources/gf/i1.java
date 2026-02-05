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
    private final Map f24834d;

    /* renamed from: e  reason: collision with root package name */
    private int f24835e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f24836i;

    /* renamed from: o  reason: collision with root package name */
    private IBinder f24837o;

    /* renamed from: p  reason: collision with root package name */
    private final h1 f24838p;

    /* renamed from: q  reason: collision with root package name */
    private ComponentName f24839q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ k1 f24840r;

    public i1(k1 k1Var, h1 h1Var) {
        Objects.requireNonNull(k1Var);
        this.f24840r = k1Var;
        this.f24838p = h1Var;
        this.f24834d = new HashMap();
        this.f24835e = 2;
    }

    public final void a(String str) {
        h1 h1Var = this.f24838p;
        k1 k1Var = this.f24840r;
        k1Var.h().removeMessages(1, h1Var);
        k1Var.i().c(k1Var.g(), this);
        this.f24836i = false;
        this.f24835e = 2;
    }

    public final void b(ServiceConnection serviceConnection, ServiceConnection serviceConnection2, String str) {
        this.f24834d.put(serviceConnection, serviceConnection2);
    }

    public final void c(ServiceConnection serviceConnection, String str) {
        this.f24834d.remove(serviceConnection);
    }

    public final boolean d() {
        return this.f24836i;
    }

    public final int e() {
        return this.f24835e;
    }

    public final boolean f(ServiceConnection serviceConnection) {
        return this.f24834d.containsKey(serviceConnection);
    }

    public final boolean g() {
        return this.f24834d.isEmpty();
    }

    public final IBinder h() {
        return this.f24837o;
    }

    public final ComponentName i() {
        return this.f24839q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ com.google.android.gms.common.b j(String str, Executor executor) {
        k1 k1Var;
        nf.a i10;
        Context g10;
        h1 h1Var;
        try {
            Intent a10 = w0.a(this.f24840r.g(), this.f24838p);
            this.f24835e = 3;
            StrictMode.VmPolicy a11 = com.google.android.gms.common.util.r.a();
            try {
                k1Var = this.f24840r;
                i10 = k1Var.i();
                g10 = k1Var.g();
                h1Var = this.f24838p;
            } catch (Throwable th2) {
                th = th2;
            }
            try {
                boolean d10 = i10.d(g10, str, a10, this, 4225, executor);
                this.f24836i = d10;
                if (d10) {
                    k1Var.h().sendMessageDelayed(k1Var.h().obtainMessage(1, h1Var), k1Var.j());
                    com.google.android.gms.common.b bVar = com.google.android.gms.common.b.f13792q;
                    StrictMode.setVmPolicy(a11);
                    return bVar;
                }
                this.f24835e = 2;
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
            return e10.f24901d;
        }
    }

    @Override // android.content.ServiceConnection
    public final void onBindingDied(ComponentName componentName) {
        onServiceDisconnected(componentName);
    }

    @Override // android.content.ServiceConnection
    public final void onServiceConnected(ComponentName componentName, IBinder iBinder) {
        k1 k1Var = this.f24840r;
        synchronized (k1Var.f()) {
            try {
                k1Var.h().removeMessages(1, this.f24838p);
                this.f24837o = iBinder;
                this.f24839q = componentName;
                for (ServiceConnection serviceConnection : this.f24834d.values()) {
                    serviceConnection.onServiceConnected(componentName, iBinder);
                }
                this.f24835e = 1;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // android.content.ServiceConnection
    public final void onServiceDisconnected(ComponentName componentName) {
        k1 k1Var = this.f24840r;
        synchronized (k1Var.f()) {
            try {
                k1Var.h().removeMessages(1, this.f24838p);
                this.f24837o = null;
                this.f24839q = componentName;
                for (ServiceConnection serviceConnection : this.f24834d.values()) {
                    serviceConnection.onServiceDisconnected(componentName);
                }
                this.f24835e = 2;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
