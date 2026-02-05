package wh;

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
    private static final Map f53099n = new HashMap();

    /* renamed from: a */
    private final Context f53100a;

    /* renamed from: b */
    private final k0 f53101b;

    /* renamed from: c */
    private final String f53102c;

    /* renamed from: g */
    private boolean f53106g;

    /* renamed from: h */
    private final Intent f53107h;

    /* renamed from: l */
    private ServiceConnection f53111l;

    /* renamed from: m */
    private IInterface f53112m;

    /* renamed from: d */
    private final List f53103d = new ArrayList();

    /* renamed from: e */
    private final Set f53104e = new HashSet();

    /* renamed from: f */
    private final Object f53105f = new Object();

    /* renamed from: j */
    private final IBinder.DeathRecipient f53109j = new IBinder.DeathRecipient() { // from class: wh.m0
        @Override // android.os.IBinder.DeathRecipient
        public final void binderDied() {
            v0.j(v0.this);
        }
    };

    /* renamed from: k */
    private final AtomicInteger f53110k = new AtomicInteger(0);

    /* renamed from: i */
    private final WeakReference f53108i = new WeakReference(null);

    public v0(Context context, k0 k0Var, String str, Intent intent, vh.a aVar, q0 q0Var) {
        this.f53100a = context;
        this.f53101b = k0Var;
        this.f53102c = str;
        this.f53107h = intent;
    }

    public static /* synthetic */ void j(v0 v0Var) {
        v0Var.f53101b.d("reportBinderDeath", new Object[0]);
        android.support.v4.media.session.b.a(v0Var.f53108i.get());
        v0Var.f53101b.d("%s : Binder has died.", v0Var.f53102c);
        for (l0 l0Var : v0Var.f53103d) {
            l0Var.c(v0Var.v());
        }
        v0Var.f53103d.clear();
        synchronized (v0Var.f53105f) {
            v0Var.w();
        }
    }

    public static /* synthetic */ void k(v0 v0Var, xg.k kVar, Task task) {
        synchronized (v0Var.f53105f) {
            v0Var.f53104e.remove(kVar);
        }
    }

    public static /* bridge */ /* synthetic */ void o(v0 v0Var, final xg.k kVar) {
        v0Var.f53104e.add(kVar);
        kVar.a().addOnCompleteListener(new OnCompleteListener() { // from class: wh.n0
            @Override // com.google.android.gms.tasks.OnCompleteListener
            public final void onComplete(Task task) {
                v0.k(v0.this, kVar, task);
            }
        });
    }

    public static /* bridge */ /* synthetic */ void q(v0 v0Var, l0 l0Var) {
        if (v0Var.f53112m == null && !v0Var.f53106g) {
            v0Var.f53101b.d("Initiate binding to the service.", new Object[0]);
            v0Var.f53103d.add(l0Var);
            t0 t0Var = new t0(v0Var, null);
            v0Var.f53111l = t0Var;
            v0Var.f53106g = true;
            if (!v0Var.f53100a.bindService(v0Var.f53107h, t0Var, 1)) {
                v0Var.f53101b.d("Failed to bind to the service.", new Object[0]);
                v0Var.f53106g = false;
                for (l0 l0Var2 : v0Var.f53103d) {
                    l0Var2.c(new b());
                }
                v0Var.f53103d.clear();
            }
        } else if (v0Var.f53106g) {
            v0Var.f53101b.d("Waiting to bind to the service.", new Object[0]);
            v0Var.f53103d.add(l0Var);
        } else {
            l0Var.run();
        }
    }

    public static /* bridge */ /* synthetic */ void r(v0 v0Var) {
        v0Var.f53101b.d("linkToDeath", new Object[0]);
        try {
            v0Var.f53112m.asBinder().linkToDeath(v0Var.f53109j, 0);
        } catch (RemoteException e10) {
            v0Var.f53101b.c(e10, "linkToDeath failed", new Object[0]);
        }
    }

    public static /* bridge */ /* synthetic */ void s(v0 v0Var) {
        v0Var.f53101b.d("unlinkToDeath", new Object[0]);
        v0Var.f53112m.asBinder().unlinkToDeath(v0Var.f53109j, 0);
    }

    private final RemoteException v() {
        return new RemoteException(String.valueOf(this.f53102c).concat(" : Binder has died."));
    }

    public final void w() {
        for (xg.k kVar : this.f53104e) {
            kVar.d(v());
        }
        this.f53104e.clear();
    }

    public final Handler c() {
        Handler handler;
        Map map = f53099n;
        synchronized (map) {
            try {
                if (!map.containsKey(this.f53102c)) {
                    HandlerThread handlerThread = new HandlerThread(this.f53102c, 10);
                    handlerThread.start();
                    map.put(this.f53102c, new Handler(handlerThread.getLooper()));
                }
                handler = (Handler) map.get(this.f53102c);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return handler;
    }

    public final IInterface e() {
        return this.f53112m;
    }

    public final void t(l0 l0Var, xg.k kVar) {
        c().post(new o0(this, l0Var.b(), kVar, l0Var));
    }

    public final void u(xg.k kVar) {
        synchronized (this.f53105f) {
            this.f53104e.remove(kVar);
        }
        c().post(new p0(this));
    }
}
