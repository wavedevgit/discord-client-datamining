package yh;

import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.Handler;
import android.os.HandlerThread;
import android.os.IBinder;
import android.os.IInterface;
import android.os.RemoteException;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class v0 {

    /* renamed from: n */
    private static final Map f55669n = new HashMap();

    /* renamed from: a */
    private final Context f55670a;

    /* renamed from: b */
    private final k0 f55671b;

    /* renamed from: c */
    private final String f55672c;

    /* renamed from: g */
    private boolean f55676g;

    /* renamed from: h */
    private final Intent f55677h;

    /* renamed from: l */
    private ServiceConnection f55681l;

    /* renamed from: m */
    private IInterface f55682m;

    /* renamed from: d */
    private final List f55673d = new ArrayList();

    /* renamed from: e */
    private final Set f55674e = new HashSet();

    /* renamed from: f */
    private final Object f55675f = new Object();

    /* renamed from: j */
    private final IBinder.DeathRecipient f55679j = new IBinder.DeathRecipient() { // from class: yh.m0
        @Override // android.os.IBinder.DeathRecipient
        public final void binderDied() {
            v0.j(v0.this);
        }
    };

    /* renamed from: k */
    private final AtomicInteger f55680k = new AtomicInteger(0);

    /* renamed from: i */
    private final WeakReference f55678i = new WeakReference(null);

    public v0(Context context, k0 k0Var, String str, Intent intent, xh.a aVar, q0 q0Var) {
        this.f55670a = context;
        this.f55671b = k0Var;
        this.f55672c = str;
        this.f55677h = intent;
    }

    public static /* synthetic */ void j(v0 v0Var) {
        v0Var.f55671b.d("reportBinderDeath", new Object[0]);
        android.support.v4.media.session.b.a(v0Var.f55678i.get());
        v0Var.f55671b.d("%s : Binder has died.", v0Var.f55672c);
        for (l0 l0Var : v0Var.f55673d) {
            l0Var.c(v0Var.v());
        }
        v0Var.f55673d.clear();
        synchronized (v0Var.f55675f) {
            v0Var.w();
        }
    }

    public static /* synthetic */ void k(v0 v0Var, zg.k kVar, Task task) {
        synchronized (v0Var.f55675f) {
            v0Var.f55674e.remove(kVar);
        }
    }

    public static /* bridge */ /* synthetic */ void o(v0 v0Var, final zg.k kVar) {
        v0Var.f55674e.add(kVar);
        kVar.a().addOnCompleteListener(new OnCompleteListener() { // from class: yh.n0
            @Override // com.google.android.gms.tasks.OnCompleteListener
            public final void onComplete(Task task) {
                v0.k(v0.this, kVar, task);
            }
        });
    }

    public static /* bridge */ /* synthetic */ void q(v0 v0Var, l0 l0Var) {
        if (v0Var.f55682m == null && !v0Var.f55676g) {
            v0Var.f55671b.d("Initiate binding to the service.", new Object[0]);
            v0Var.f55673d.add(l0Var);
            t0 t0Var = new t0(v0Var, null);
            v0Var.f55681l = t0Var;
            v0Var.f55676g = true;
            if (!v0Var.f55670a.bindService(v0Var.f55677h, t0Var, 1)) {
                v0Var.f55671b.d("Failed to bind to the service.", new Object[0]);
                v0Var.f55676g = false;
                for (l0 l0Var2 : v0Var.f55673d) {
                    l0Var2.c(new b());
                }
                v0Var.f55673d.clear();
            }
        } else if (v0Var.f55676g) {
            v0Var.f55671b.d("Waiting to bind to the service.", new Object[0]);
            v0Var.f55673d.add(l0Var);
        } else {
            l0Var.run();
        }
    }

    public static /* bridge */ /* synthetic */ void r(v0 v0Var) {
        v0Var.f55671b.d("linkToDeath", new Object[0]);
        try {
            v0Var.f55682m.asBinder().linkToDeath(v0Var.f55679j, 0);
        } catch (RemoteException e10) {
            v0Var.f55671b.c(e10, "linkToDeath failed", new Object[0]);
        }
    }

    public static /* bridge */ /* synthetic */ void s(v0 v0Var) {
        v0Var.f55671b.d("unlinkToDeath", new Object[0]);
        v0Var.f55682m.asBinder().unlinkToDeath(v0Var.f55679j, 0);
    }

    private final RemoteException v() {
        return new RemoteException(String.valueOf(this.f55672c).concat(" : Binder has died."));
    }

    public final void w() {
        for (zg.k kVar : this.f55674e) {
            kVar.d(v());
        }
        this.f55674e.clear();
    }

    public final Handler c() {
        Handler handler;
        Map map = f55669n;
        synchronized (map) {
            try {
                if (!map.containsKey(this.f55672c)) {
                    HandlerThread handlerThread = new HandlerThread(this.f55672c, 10);
                    handlerThread.start();
                    map.put(this.f55672c, new Handler(handlerThread.getLooper()));
                }
                handler = (Handler) map.get(this.f55672c);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return handler;
    }

    public final IInterface e() {
        return this.f55682m;
    }

    public final void t(l0 l0Var, zg.k kVar) {
        c().post(new o0(this, l0Var.b(), kVar, l0Var));
    }

    public final void u(zg.k kVar) {
        synchronized (this.f55675f) {
            this.f55674e.remove(kVar);
        }
        c().post(new p0(this));
    }
}
