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
    private static final Map f50075n = new HashMap();

    /* renamed from: a */
    private final Context f50076a;

    /* renamed from: b */
    private final k0 f50077b;

    /* renamed from: c */
    private final String f50078c;

    /* renamed from: g */
    private boolean f50082g;

    /* renamed from: h */
    private final Intent f50083h;

    /* renamed from: l */
    private ServiceConnection f50087l;

    /* renamed from: m */
    private IInterface f50088m;

    /* renamed from: d */
    private final List f50079d = new ArrayList();

    /* renamed from: e */
    private final Set f50080e = new HashSet();

    /* renamed from: f */
    private final Object f50081f = new Object();

    /* renamed from: j */
    private final IBinder.DeathRecipient f50085j = new IBinder.DeathRecipient() { // from class: th.m0
        @Override // android.os.IBinder.DeathRecipient
        public final void binderDied() {
            v0.j(v0.this);
        }
    };

    /* renamed from: k */
    private final AtomicInteger f50086k = new AtomicInteger(0);

    /* renamed from: i */
    private final WeakReference f50084i = new WeakReference(null);

    public v0(Context context, k0 k0Var, String str, Intent intent, sh.a aVar, q0 q0Var) {
        this.f50076a = context;
        this.f50077b = k0Var;
        this.f50078c = str;
        this.f50083h = intent;
    }

    public static /* synthetic */ void j(v0 v0Var) {
        v0Var.f50077b.d("reportBinderDeath", new Object[0]);
        android.support.v4.media.session.b.a(v0Var.f50084i.get());
        v0Var.f50077b.d("%s : Binder has died.", v0Var.f50078c);
        for (l0 l0Var : v0Var.f50079d) {
            l0Var.c(v0Var.v());
        }
        v0Var.f50079d.clear();
        synchronized (v0Var.f50081f) {
            v0Var.w();
        }
    }

    public static /* synthetic */ void k(v0 v0Var, wg.k kVar, Task task) {
        synchronized (v0Var.f50081f) {
            v0Var.f50080e.remove(kVar);
        }
    }

    public static /* bridge */ /* synthetic */ void o(v0 v0Var, final wg.k kVar) {
        v0Var.f50080e.add(kVar);
        kVar.a().addOnCompleteListener(new OnCompleteListener() { // from class: th.n0
            @Override // com.google.android.gms.tasks.OnCompleteListener
            public final void onComplete(Task task) {
                v0.k(v0.this, kVar, task);
            }
        });
    }

    public static /* bridge */ /* synthetic */ void q(v0 v0Var, l0 l0Var) {
        if (v0Var.f50088m == null && !v0Var.f50082g) {
            v0Var.f50077b.d("Initiate binding to the service.", new Object[0]);
            v0Var.f50079d.add(l0Var);
            t0 t0Var = new t0(v0Var, null);
            v0Var.f50087l = t0Var;
            v0Var.f50082g = true;
            if (!v0Var.f50076a.bindService(v0Var.f50083h, t0Var, 1)) {
                v0Var.f50077b.d("Failed to bind to the service.", new Object[0]);
                v0Var.f50082g = false;
                for (l0 l0Var2 : v0Var.f50079d) {
                    l0Var2.c(new b());
                }
                v0Var.f50079d.clear();
            }
        } else if (v0Var.f50082g) {
            v0Var.f50077b.d("Waiting to bind to the service.", new Object[0]);
            v0Var.f50079d.add(l0Var);
        } else {
            l0Var.run();
        }
    }

    public static /* bridge */ /* synthetic */ void r(v0 v0Var) {
        v0Var.f50077b.d("linkToDeath", new Object[0]);
        try {
            v0Var.f50088m.asBinder().linkToDeath(v0Var.f50085j, 0);
        } catch (RemoteException e10) {
            v0Var.f50077b.c(e10, "linkToDeath failed", new Object[0]);
        }
    }

    public static /* bridge */ /* synthetic */ void s(v0 v0Var) {
        v0Var.f50077b.d("unlinkToDeath", new Object[0]);
        v0Var.f50088m.asBinder().unlinkToDeath(v0Var.f50085j, 0);
    }

    private final RemoteException v() {
        return new RemoteException(String.valueOf(this.f50078c).concat(" : Binder has died."));
    }

    public final void w() {
        for (wg.k kVar : this.f50080e) {
            kVar.d(v());
        }
        this.f50080e.clear();
    }

    public final Handler c() {
        Handler handler;
        Map map = f50075n;
        synchronized (map) {
            try {
                if (!map.containsKey(this.f50078c)) {
                    HandlerThread handlerThread = new HandlerThread(this.f50078c, 10);
                    handlerThread.start();
                    map.put(this.f50078c, new Handler(handlerThread.getLooper()));
                }
                handler = (Handler) map.get(this.f50078c);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return handler;
    }

    public final IInterface e() {
        return this.f50088m;
    }

    public final void t(l0 l0Var, wg.k kVar) {
        c().post(new o0(this, l0Var.b(), kVar, l0Var));
    }

    public final void u(wg.k kVar) {
        synchronized (this.f50081f) {
            this.f50080e.remove(kVar);
        }
        c().post(new p0(this));
    }
}
