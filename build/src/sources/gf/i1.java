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
    private final Map f25135d;

    /* renamed from: e  reason: collision with root package name */
    private int f25136e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f25137i;

    /* renamed from: o  reason: collision with root package name */
    private IBinder f25138o;

    /* renamed from: p  reason: collision with root package name */
    private final h1 f25139p;

    /* renamed from: q  reason: collision with root package name */
    private ComponentName f25140q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ k1 f25141r;

    public i1(k1 k1Var, h1 h1Var) {
        Objects.requireNonNull(k1Var);
        this.f25141r = k1Var;
        this.f25139p = h1Var;
        this.f25135d = new HashMap();
        this.f25136e = 2;
    }

    public final void a(String str) {
        h1 h1Var = this.f25139p;
        k1 k1Var = this.f25141r;
        k1Var.h().removeMessages(1, h1Var);
        k1Var.i().c(k1Var.g(), this);
        this.f25137i = false;
        this.f25136e = 2;
    }

    public final void b(ServiceConnection serviceConnection, ServiceConnection serviceConnection2, String str) {
        this.f25135d.put(serviceConnection, serviceConnection2);
    }

    public final void c(ServiceConnection serviceConnection, String str) {
        this.f25135d.remove(serviceConnection);
    }

    public final boolean d() {
        return this.f25137i;
    }

    public final int e() {
        return this.f25136e;
    }

    public final boolean f(ServiceConnection serviceConnection) {
        return this.f25135d.containsKey(serviceConnection);
    }

    public final boolean g() {
        return this.f25135d.isEmpty();
    }

    public final IBinder h() {
        return this.f25138o;
    }

    public final ComponentName i() {
        return this.f25140q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ com.google.android.gms.common.b j(String str, Executor executor) {
        k1 k1Var;
        nf.a i10;
        Context g10;
        h1 h1Var;
        try {
            Intent a10 = w0.a(this.f25141r.g(), this.f25139p);
            this.f25136e = 3;
            StrictMode.VmPolicy a11 = com.google.android.gms.common.util.r.a();
            try {
                k1Var = this.f25141r;
                i10 = k1Var.i();
                g10 = k1Var.g();
                h1Var = this.f25139p;
            } catch (Throwable th2) {
                th = th2;
            }
            try {
                boolean d10 = i10.d(g10, str, a10, this, 4225, executor);
                this.f25137i = d10;
                if (d10) {
                    k1Var.h().sendMessageDelayed(k1Var.h().obtainMessage(1, h1Var), k1Var.j());
                    com.google.android.gms.common.b bVar = com.google.android.gms.common.b.f13747q;
                    StrictMode.setVmPolicy(a11);
                    return bVar;
                }
                this.f25136e = 2;
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
            return e10.f25202d;
        }
    }

    @Override // android.content.ServiceConnection
    public final void onBindingDied(ComponentName componentName) {
        onServiceDisconnected(componentName);
    }

    @Override // android.content.ServiceConnection
    public final void onServiceConnected(ComponentName componentName, IBinder iBinder) {
        k1 k1Var = this.f25141r;
        synchronized (k1Var.f()) {
            try {
                k1Var.h().removeMessages(1, this.f25139p);
                this.f25138o = iBinder;
                this.f25140q = componentName;
                for (ServiceConnection serviceConnection : this.f25135d.values()) {
                    serviceConnection.onServiceConnected(componentName, iBinder);
                }
                this.f25136e = 1;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // android.content.ServiceConnection
    public final void onServiceDisconnected(ComponentName componentName) {
        k1 k1Var = this.f25141r;
        synchronized (k1Var.f()) {
            try {
                k1Var.h().removeMessages(1, this.f25139p);
                this.f25138o = null;
                this.f25140q = componentName;
                for (ServiceConnection serviceConnection : this.f25135d.values()) {
                    serviceConnection.onServiceDisconnected(componentName);
                }
                this.f25136e = 2;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
