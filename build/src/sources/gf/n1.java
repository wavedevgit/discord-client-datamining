package gf;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.Handler;
import android.os.Looper;
import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
import java.util.HashMap;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n1 extends h {

    /* renamed from: g */
    private final HashMap f26861g = new HashMap();

    /* renamed from: h */
    private final Context f26862h;

    /* renamed from: i */
    private volatile Handler f26863i;

    /* renamed from: j */
    private final l1 f26864j;

    /* renamed from: k */
    private final nf.a f26865k;

    /* renamed from: l */
    private final long f26866l;

    /* renamed from: m */
    private final long f26867m;

    /* renamed from: n */
    private volatile Executor f26868n;

    public n1(Context context, Looper looper, Executor executor) {
        l1 l1Var = new l1(this, null);
        this.f26864j = l1Var;
        this.f26862h = context.getApplicationContext();
        this.f26863i = new hg.g(looper, l1Var);
        this.f26865k = nf.a.b();
        this.f26866l = 5000L;
        this.f26867m = LogThrottleSingleton.RATE_LIMIT_FIVE_MINUTES;
        this.f26868n = executor;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gf.h
    public final com.google.android.gms.common.b c(j1 j1Var, ServiceConnection serviceConnection, String str, Executor executor) {
        com.google.android.gms.common.b bVar;
        q.m(serviceConnection, "ServiceConnection must not be null");
        synchronized (this.f26861g) {
            try {
                k1 k1Var = (k1) this.f26861g.get(j1Var);
                if (executor == null) {
                    executor = this.f26868n;
                }
                if (k1Var == null) {
                    k1Var = new k1(this, j1Var);
                    k1Var.e(serviceConnection, serviceConnection, str);
                    bVar = k1.d(k1Var, str, executor);
                    this.f26861g.put(j1Var, k1Var);
                } else {
                    this.f26863i.removeMessages(0, j1Var);
                    if (!k1Var.h(serviceConnection)) {
                        k1Var.e(serviceConnection, serviceConnection, str);
                        int a10 = k1Var.a();
                        if (a10 != 1) {
                            if (a10 == 2) {
                                bVar = k1.d(k1Var, str, executor);
                            }
                        } else {
                            serviceConnection.onServiceConnected(k1Var.b(), k1Var.c());
                        }
                        bVar = null;
                    } else {
                        throw new IllegalStateException("Trying to bind a GmsServiceConnection that was already connected before.  config=" + j1Var.toString());
                    }
                }
                if (k1Var.j()) {
                    return com.google.android.gms.common.b.f14802p;
                }
                if (bVar == null) {
                    bVar = new com.google.android.gms.common.b(-1);
                }
                return bVar;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // gf.h
    protected final void d(j1 j1Var, ServiceConnection serviceConnection, String str) {
        q.m(serviceConnection, "ServiceConnection must not be null");
        synchronized (this.f26861g) {
            try {
                k1 k1Var = (k1) this.f26861g.get(j1Var);
                if (k1Var != null) {
                    if (k1Var.h(serviceConnection)) {
                        k1Var.f(serviceConnection, str);
                        if (k1Var.i()) {
                            this.f26863i.sendMessageDelayed(this.f26863i.obtainMessage(0, j1Var), this.f26866l);
                        }
                    } else {
                        String obj = j1Var.toString();
                        throw new IllegalStateException("Trying to unbind a GmsServiceConnection  that was not bound before.  config=" + obj);
                    }
                } else {
                    String obj2 = j1Var.toString();
                    throw new IllegalStateException("Nonexistent connection status for service config: " + obj2);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
