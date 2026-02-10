package hf;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.Handler;
import android.os.Looper;
import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
import java.util.HashMap;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k1 extends h {

    /* renamed from: g  reason: collision with root package name */
    private final HashMap f26058g = new HashMap();

    /* renamed from: h  reason: collision with root package name */
    private final Context f26059h;

    /* renamed from: i  reason: collision with root package name */
    private volatile Handler f26060i;

    /* renamed from: j  reason: collision with root package name */
    private final j1 f26061j;

    /* renamed from: k  reason: collision with root package name */
    private final of.a f26062k;

    /* renamed from: l  reason: collision with root package name */
    private final long f26063l;

    /* renamed from: m  reason: collision with root package name */
    private final long f26064m;

    /* renamed from: n  reason: collision with root package name */
    private volatile Executor f26065n;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k1(Context context, Looper looper, Executor executor) {
        j1 j1Var = new j1(this, null);
        this.f26061j = j1Var;
        this.f26059h = context.getApplicationContext();
        this.f26060i = new ig.p(looper, j1Var);
        this.f26062k = of.a.b();
        this.f26063l = 5000L;
        this.f26064m = LogThrottleSingleton.RATE_LIMIT_FIVE_MINUTES;
        this.f26065n = executor;
    }

    @Override // hf.h
    protected final com.google.android.gms.common.b c(h1 h1Var, ServiceConnection serviceConnection, String str, Executor executor) {
        com.google.android.gms.common.b bVar;
        q.m(serviceConnection, "ServiceConnection must not be null");
        HashMap hashMap = this.f26058g;
        synchronized (hashMap) {
            try {
                i1 i1Var = (i1) hashMap.get(h1Var);
                if (executor == null) {
                    executor = this.f26065n;
                }
                if (i1Var == null) {
                    i1Var = new i1(this, h1Var);
                    i1Var.b(serviceConnection, serviceConnection, str);
                    bVar = i1Var.j(str, executor);
                    hashMap.put(h1Var, i1Var);
                } else {
                    this.f26060i.removeMessages(0, h1Var);
                    if (!i1Var.f(serviceConnection)) {
                        i1Var.b(serviceConnection, serviceConnection, str);
                        int e10 = i1Var.e();
                        if (e10 != 1) {
                            if (e10 == 2) {
                                bVar = i1Var.j(str, executor);
                            }
                        } else {
                            serviceConnection.onServiceConnected(i1Var.i(), i1Var.h());
                        }
                        bVar = null;
                    } else {
                        String obj = h1Var.toString();
                        StringBuilder sb2 = new StringBuilder(obj.length() + 81);
                        sb2.append("Trying to bind a GmsServiceConnection that was already connected before.  config=");
                        sb2.append(obj);
                        throw new IllegalStateException(sb2.toString());
                    }
                }
                if (i1Var.d()) {
                    return com.google.android.gms.common.b.f13887q;
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

    @Override // hf.h
    protected final void e(h1 h1Var, ServiceConnection serviceConnection, String str) {
        q.m(serviceConnection, "ServiceConnection must not be null");
        HashMap hashMap = this.f26058g;
        synchronized (hashMap) {
            try {
                i1 i1Var = (i1) hashMap.get(h1Var);
                if (i1Var != null) {
                    if (i1Var.f(serviceConnection)) {
                        i1Var.c(serviceConnection, str);
                        if (i1Var.g()) {
                            this.f26060i.sendMessageDelayed(this.f26060i.obtainMessage(0, h1Var), this.f26063l);
                        }
                    } else {
                        String obj = h1Var.toString();
                        StringBuilder sb2 = new StringBuilder(obj.length() + 76);
                        sb2.append("Trying to unbind a GmsServiceConnection  that was not bound before.  config=");
                        sb2.append(obj);
                        throw new IllegalStateException(sb2.toString());
                    }
                } else {
                    String obj2 = h1Var.toString();
                    StringBuilder sb3 = new StringBuilder(obj2.length() + 50);
                    sb3.append("Nonexistent connection status for service config: ");
                    sb3.append(obj2);
                    throw new IllegalStateException(sb3.toString());
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ HashMap f() {
        return this.f26058g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ Context g() {
        return this.f26059h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ Handler h() {
        return this.f26060i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ of.a i() {
        return this.f26062k;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ long j() {
        return this.f26064m;
    }
}
