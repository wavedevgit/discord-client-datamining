package th;

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
    private static final Map f49579n = new HashMap();

    /* renamed from: a */
    private final Context f49580a;

    /* renamed from: b */
    private final k0 f49581b;

    /* renamed from: c */
    private final String f49582c;

    /* renamed from: g */
    private boolean f49586g;

    /* renamed from: h */
    private final Intent f49587h;

    /* renamed from: l */
    private ServiceConnection f49591l;

    /* renamed from: m */
    private IInterface f49592m;

    /* renamed from: d */
    private final List f49583d = new ArrayList();

    /* renamed from: e */
    private final Set f49584e = new HashSet();

    /* renamed from: f */
    private final Object f49585f = new Object();

    /* renamed from: j */
    private final IBinder.DeathRecipient f49589j = new IBinder.DeathRecipient() { // from class: th.m0
        @Override // android.os.IBinder.DeathRecipient
        public final void binderDied() {
            v0.j(v0.this);
        }
    };

    /* renamed from: k */
    private final AtomicInteger f49590k = new AtomicInteger(0);

    /* renamed from: i */
    private final WeakReference f49588i = new WeakReference(null);

    public v0(Context context, k0 k0Var, String str, Intent intent, sh.a aVar, q0 q0Var) {
        this.f49580a = context;
        this.f49581b = k0Var;
        this.f49582c = str;
        this.f49587h = intent;
    }

    public static /* synthetic */ void j(v0 v0Var) {
        v0Var.f49581b.d("reportBinderDeath", new Object[0]);
        android.support.v4.media.session.b.a(v0Var.f49588i.get());
        v0Var.f49581b.d("%s : Binder has died.", v0Var.f49582c);
        for (l0 l0Var : v0Var.f49583d) {
            l0Var.c(v0Var.v());
        }
        v0Var.f49583d.clear();
        synchronized (v0Var.f49585f) {
            v0Var.w();
        }
    }

    public static /* synthetic */ void k(v0 v0Var, wg.k kVar, Task task) {
        synchronized (v0Var.f49585f) {
            v0Var.f49584e.remove(kVar);
        }
    }

    public static /* bridge */ /* synthetic */ void o(v0 v0Var, final wg.k kVar) {
        v0Var.f49584e.add(kVar);
        kVar.a().addOnCompleteListener(new OnCompleteListener() { // from class: th.n0
            @Override // com.google.android.gms.tasks.OnCompleteListener
            public final void onComplete(Task task) {
                v0.k(v0.this, kVar, task);
            }
        });
    }

    public static /* bridge */ /* synthetic */ void q(v0 v0Var, l0 l0Var) {
        if (v0Var.f49592m == null && !v0Var.f49586g) {
            v0Var.f49581b.d("Initiate binding to the service.", new Object[0]);
            v0Var.f49583d.add(l0Var);
            t0 t0Var = new t0(v0Var, null);
            v0Var.f49591l = t0Var;
            v0Var.f49586g = true;
            if (!v0Var.f49580a.bindService(v0Var.f49587h, t0Var, 1)) {
                v0Var.f49581b.d("Failed to bind to the service.", new Object[0]);
                v0Var.f49586g = false;
                for (l0 l0Var2 : v0Var.f49583d) {
                    l0Var2.c(new b());
                }
                v0Var.f49583d.clear();
            }
        } else if (v0Var.f49586g) {
            v0Var.f49581b.d("Waiting to bind to the service.", new Object[0]);
            v0Var.f49583d.add(l0Var);
        } else {
            l0Var.run();
        }
    }

    public static /* bridge */ /* synthetic */ void r(v0 v0Var) {
        v0Var.f49581b.d("linkToDeath", new Object[0]);
        try {
            v0Var.f49592m.asBinder().linkToDeath(v0Var.f49589j, 0);
        } catch (RemoteException e10) {
            v0Var.f49581b.c(e10, "linkToDeath failed", new Object[0]);
        }
    }

    public static /* bridge */ /* synthetic */ void s(v0 v0Var) {
        v0Var.f49581b.d("unlinkToDeath", new Object[0]);
        v0Var.f49592m.asBinder().unlinkToDeath(v0Var.f49589j, 0);
    }

    private final RemoteException v() {
        return new RemoteException(String.valueOf(this.f49582c).concat(" : Binder has died."));
    }

    public final void w() {
        for (wg.k kVar : this.f49584e) {
            kVar.d(v());
        }
        this.f49584e.clear();
    }

    public final Handler c() {
        Handler handler;
        Map map = f49579n;
        synchronized (map) {
            try {
                if (!map.containsKey(this.f49582c)) {
                    HandlerThread handlerThread = new HandlerThread(this.f49582c, 10);
                    handlerThread.start();
                    map.put(this.f49582c, new Handler(handlerThread.getLooper()));
                }
                handler = (Handler) map.get(this.f49582c);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return handler;
    }

    public final IInterface e() {
        return this.f49592m;
    }

    public final void t(l0 l0Var, wg.k kVar) {
        c().post(new o0(this, l0Var.b(), kVar, l0Var));
    }

    public final void u(wg.k kVar) {
        synchronized (this.f49585f) {
            this.f49584e.remove(kVar);
        }
        c().post(new p0(this));
    }
}
