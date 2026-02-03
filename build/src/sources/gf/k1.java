package gf;

import android.content.ComponentName;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.IBinder;
import android.os.StrictMode;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k1 implements ServiceConnection, o1 {

    /* renamed from: d  reason: collision with root package name */
    private final Map f26932d = new HashMap();

    /* renamed from: e  reason: collision with root package name */
    private int f26933e = 2;

    /* renamed from: i  reason: collision with root package name */
    private boolean f26934i;

    /* renamed from: o  reason: collision with root package name */
    private IBinder f26935o;

    /* renamed from: p  reason: collision with root package name */
    private final j1 f26936p;

    /* renamed from: q  reason: collision with root package name */
    private ComponentName f26937q;

    /* renamed from: r  reason: collision with root package name */
    final /* synthetic */ n1 f26938r;

    public k1(n1 n1Var, j1 j1Var) {
        this.f26938r = n1Var;
        this.f26936p = j1Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ com.google.android.gms.common.b d(k1 k1Var, String str, Executor executor) {
        try {
            Intent b10 = k1Var.f26936p.b(n1.g(k1Var.f26938r));
            k1Var.f26933e = 3;
            StrictMode.VmPolicy a10 = com.google.android.gms.common.util.r.a();
            try {
                n1 n1Var = k1Var.f26938r;
                boolean d10 = n1.i(n1Var).d(n1.g(n1Var), str, b10, k1Var, 4225, executor);
                k1Var.f26934i = d10;
                if (d10) {
                    n1.h(k1Var.f26938r).sendMessageDelayed(n1.h(k1Var.f26938r).obtainMessage(1, k1Var.f26936p), n1.f(k1Var.f26938r));
                    com.google.android.gms.common.b bVar = com.google.android.gms.common.b.f14431p;
                    StrictMode.setVmPolicy(a10);
                    return bVar;
                }
                k1Var.f26933e = 2;
                try {
                    n1 n1Var2 = k1Var.f26938r;
                    n1.i(n1Var2).c(n1.g(n1Var2), k1Var);
                } catch (IllegalArgumentException unused) {
                }
                com.google.android.gms.common.b bVar2 = new com.google.android.gms.common.b(16);
                StrictMode.setVmPolicy(a10);
                return bVar2;
            } catch (Throwable th2) {
                StrictMode.setVmPolicy(a10);
                throw th2;
            }
        } catch (x0 e10) {
            return e10.f27001d;
        }
    }

    public final int a() {
        return this.f26933e;
    }

    public final ComponentName b() {
        return this.f26937q;
    }

    public final IBinder c() {
        return this.f26935o;
    }

    public final void e(ServiceConnection serviceConnection, ServiceConnection serviceConnection2, String str) {
        this.f26932d.put(serviceConnection, serviceConnection2);
    }

    public final void f(ServiceConnection serviceConnection, String str) {
        this.f26932d.remove(serviceConnection);
    }

    public final void g(String str) {
        n1.h(this.f26938r).removeMessages(1, this.f26936p);
        n1 n1Var = this.f26938r;
        n1.i(n1Var).c(n1.g(n1Var), this);
        this.f26934i = false;
        this.f26933e = 2;
    }

    public final boolean h(ServiceConnection serviceConnection) {
        return this.f26932d.containsKey(serviceConnection);
    }

    public final boolean i() {
        return this.f26932d.isEmpty();
    }

    public final boolean j() {
        return this.f26934i;
    }

    @Override // android.content.ServiceConnection
    public final void onBindingDied(ComponentName componentName) {
        onServiceDisconnected(componentName);
    }

    @Override // android.content.ServiceConnection
    public final void onServiceConnected(ComponentName componentName, IBinder iBinder) {
        synchronized (n1.j(this.f26938r)) {
            try {
                n1.h(this.f26938r).removeMessages(1, this.f26936p);
                this.f26935o = iBinder;
                this.f26937q = componentName;
                for (ServiceConnection serviceConnection : this.f26932d.values()) {
                    serviceConnection.onServiceConnected(componentName, iBinder);
                }
                this.f26933e = 1;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // android.content.ServiceConnection
    public final void onServiceDisconnected(ComponentName componentName) {
        synchronized (n1.j(this.f26938r)) {
            try {
                n1.h(this.f26938r).removeMessages(1, this.f26936p);
                this.f26935o = null;
                this.f26937q = componentName;
                for (ServiceConnection serviceConnection : this.f26932d.values()) {
                    serviceConnection.onServiceDisconnected(componentName);
                }
                this.f26933e = 2;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
