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
    private static final Map f50078n = new HashMap();

    /* renamed from: a */
    private final Context f50079a;

    /* renamed from: b */
    private final k0 f50080b;

    /* renamed from: c */
    private final String f50081c;

    /* renamed from: g */
    private boolean f50085g;

    /* renamed from: h */
    private final Intent f50086h;

    /* renamed from: l */
    private ServiceConnection f50090l;

    /* renamed from: m */
    private IInterface f50091m;

    /* renamed from: d */
    private final List f50082d = new ArrayList();

    /* renamed from: e */
    private final Set f50083e = new HashSet();

    /* renamed from: f */
    private final Object f50084f = new Object();

    /* renamed from: j */
    private final IBinder.DeathRecipient f50088j = new IBinder.DeathRecipient() { // from class: th.m0
        @Override // android.os.IBinder.DeathRecipient
        public final void binderDied() {
            v0.j(v0.this);
        }
    };

    /* renamed from: k */
    private final AtomicInteger f50089k = new AtomicInteger(0);

    /* renamed from: i */
    private final WeakReference f50087i = new WeakReference(null);

    public v0(Context context, k0 k0Var, String str, Intent intent, sh.a aVar, q0 q0Var) {
        this.f50079a = context;
        this.f50080b = k0Var;
        this.f50081c = str;
        this.f50086h = intent;
    }

    public static /* synthetic */ void j(v0 v0Var) {
        v0Var.f50080b.d("reportBinderDeath", new Object[0]);
        android.support.v4.media.session.b.a(v0Var.f50087i.get());
        v0Var.f50080b.d("%s : Binder has died.", v0Var.f50081c);
        for (l0 l0Var : v0Var.f50082d) {
            l0Var.c(v0Var.v());
        }
        v0Var.f50082d.clear();
        synchronized (v0Var.f50084f) {
            v0Var.w();
        }
    }

    public static /* synthetic */ void k(v0 v0Var, wg.k kVar, Task task) {
        synchronized (v0Var.f50084f) {
            v0Var.f50083e.remove(kVar);
        }
    }

    public static /* bridge */ /* synthetic */ void o(v0 v0Var, final wg.k kVar) {
        v0Var.f50083e.add(kVar);
        kVar.a().addOnCompleteListener(new OnCompleteListener() { // from class: th.n0
            @Override // com.google.android.gms.tasks.OnCompleteListener
            public final void onComplete(Task task) {
                v0.k(v0.this, kVar, task);
            }
        });
    }

    public static /* bridge */ /* synthetic */ void q(v0 v0Var, l0 l0Var) {
        if (v0Var.f50091m == null && !v0Var.f50085g) {
            v0Var.f50080b.d("Initiate binding to the service.", new Object[0]);
            v0Var.f50082d.add(l0Var);
            t0 t0Var = new t0(v0Var, null);
            v0Var.f50090l = t0Var;
            v0Var.f50085g = true;
            if (!v0Var.f50079a.bindService(v0Var.f50086h, t0Var, 1)) {
                v0Var.f50080b.d("Failed to bind to the service.", new Object[0]);
                v0Var.f50085g = false;
                for (l0 l0Var2 : v0Var.f50082d) {
                    l0Var2.c(new b());
                }
                v0Var.f50082d.clear();
            }
        } else if (v0Var.f50085g) {
            v0Var.f50080b.d("Waiting to bind to the service.", new Object[0]);
            v0Var.f50082d.add(l0Var);
        } else {
            l0Var.run();
        }
    }

    public static /* bridge */ /* synthetic */ void r(v0 v0Var) {
        v0Var.f50080b.d("linkToDeath", new Object[0]);
        try {
            v0Var.f50091m.asBinder().linkToDeath(v0Var.f50088j, 0);
        } catch (RemoteException e10) {
            v0Var.f50080b.c(e10, "linkToDeath failed", new Object[0]);
        }
    }

    public static /* bridge */ /* synthetic */ void s(v0 v0Var) {
        v0Var.f50080b.d("unlinkToDeath", new Object[0]);
        v0Var.f50091m.asBinder().unlinkToDeath(v0Var.f50088j, 0);
    }

    private final RemoteException v() {
        return new RemoteException(String.valueOf(this.f50081c).concat(" : Binder has died."));
    }

    public final void w() {
        for (wg.k kVar : this.f50083e) {
            kVar.d(v());
        }
        this.f50083e.clear();
    }

    public final Handler c() {
        Handler handler;
        Map map = f50078n;
        synchronized (map) {
            try {
                if (!map.containsKey(this.f50081c)) {
                    HandlerThread handlerThread = new HandlerThread(this.f50081c, 10);
                    handlerThread.start();
                    map.put(this.f50081c, new Handler(handlerThread.getLooper()));
                }
                handler = (Handler) map.get(this.f50081c);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return handler;
    }

    public final IInterface e() {
        return this.f50091m;
    }

    public final void t(l0 l0Var, wg.k kVar) {
        c().post(new o0(this, l0Var.b(), kVar, l0Var));
    }

    public final void u(wg.k kVar) {
        synchronized (this.f50084f) {
            this.f50083e.remove(kVar);
        }
        c().post(new p0(this));
    }
}
