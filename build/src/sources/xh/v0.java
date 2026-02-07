package xh;

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
    private static final Map f54734n = new HashMap();

    /* renamed from: a */
    private final Context f54735a;

    /* renamed from: b */
    private final k0 f54736b;

    /* renamed from: c */
    private final String f54737c;

    /* renamed from: g */
    private boolean f54741g;

    /* renamed from: h */
    private final Intent f54742h;

    /* renamed from: l */
    private ServiceConnection f54746l;

    /* renamed from: m */
    private IInterface f54747m;

    /* renamed from: d */
    private final List f54738d = new ArrayList();

    /* renamed from: e */
    private final Set f54739e = new HashSet();

    /* renamed from: f */
    private final Object f54740f = new Object();

    /* renamed from: j */
    private final IBinder.DeathRecipient f54744j = new IBinder.DeathRecipient() { // from class: xh.m0
        @Override // android.os.IBinder.DeathRecipient
        public final void binderDied() {
            v0.j(v0.this);
        }
    };

    /* renamed from: k */
    private final AtomicInteger f54745k = new AtomicInteger(0);

    /* renamed from: i */
    private final WeakReference f54743i = new WeakReference(null);

    public v0(Context context, k0 k0Var, String str, Intent intent, wh.a aVar, q0 q0Var) {
        this.f54735a = context;
        this.f54736b = k0Var;
        this.f54737c = str;
        this.f54742h = intent;
    }

    public static /* synthetic */ void j(v0 v0Var) {
        v0Var.f54736b.d("reportBinderDeath", new Object[0]);
        android.support.v4.media.session.b.a(v0Var.f54743i.get());
        v0Var.f54736b.d("%s : Binder has died.", v0Var.f54737c);
        for (l0 l0Var : v0Var.f54738d) {
            l0Var.c(v0Var.v());
        }
        v0Var.f54738d.clear();
        synchronized (v0Var.f54740f) {
            v0Var.w();
        }
    }

    public static /* synthetic */ void k(v0 v0Var, yg.k kVar, Task task) {
        synchronized (v0Var.f54740f) {
            v0Var.f54739e.remove(kVar);
        }
    }

    public static /* bridge */ /* synthetic */ void o(v0 v0Var, final yg.k kVar) {
        v0Var.f54739e.add(kVar);
        kVar.a().addOnCompleteListener(new OnCompleteListener() { // from class: xh.n0
            @Override // com.google.android.gms.tasks.OnCompleteListener
            public final void onComplete(Task task) {
                v0.k(v0.this, kVar, task);
            }
        });
    }

    public static /* bridge */ /* synthetic */ void q(v0 v0Var, l0 l0Var) {
        if (v0Var.f54747m == null && !v0Var.f54741g) {
            v0Var.f54736b.d("Initiate binding to the service.", new Object[0]);
            v0Var.f54738d.add(l0Var);
            t0 t0Var = new t0(v0Var, null);
            v0Var.f54746l = t0Var;
            v0Var.f54741g = true;
            if (!v0Var.f54735a.bindService(v0Var.f54742h, t0Var, 1)) {
                v0Var.f54736b.d("Failed to bind to the service.", new Object[0]);
                v0Var.f54741g = false;
                for (l0 l0Var2 : v0Var.f54738d) {
                    l0Var2.c(new b());
                }
                v0Var.f54738d.clear();
            }
        } else if (v0Var.f54741g) {
            v0Var.f54736b.d("Waiting to bind to the service.", new Object[0]);
            v0Var.f54738d.add(l0Var);
        } else {
            l0Var.run();
        }
    }

    public static /* bridge */ /* synthetic */ void r(v0 v0Var) {
        v0Var.f54736b.d("linkToDeath", new Object[0]);
        try {
            v0Var.f54747m.asBinder().linkToDeath(v0Var.f54744j, 0);
        } catch (RemoteException e10) {
            v0Var.f54736b.c(e10, "linkToDeath failed", new Object[0]);
        }
    }

    public static /* bridge */ /* synthetic */ void s(v0 v0Var) {
        v0Var.f54736b.d("unlinkToDeath", new Object[0]);
        v0Var.f54747m.asBinder().unlinkToDeath(v0Var.f54744j, 0);
    }

    private final RemoteException v() {
        return new RemoteException(String.valueOf(this.f54737c).concat(" : Binder has died."));
    }

    public final void w() {
        for (yg.k kVar : this.f54739e) {
            kVar.d(v());
        }
        this.f54739e.clear();
    }

    public final Handler c() {
        Handler handler;
        Map map = f54734n;
        synchronized (map) {
            try {
                if (!map.containsKey(this.f54737c)) {
                    HandlerThread handlerThread = new HandlerThread(this.f54737c, 10);
                    handlerThread.start();
                    map.put(this.f54737c, new Handler(handlerThread.getLooper()));
                }
                handler = (Handler) map.get(this.f54737c);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return handler;
    }

    public final IInterface e() {
        return this.f54747m;
    }

    public final void t(l0 l0Var, yg.k kVar) {
        c().post(new o0(this, l0Var.b(), kVar, l0Var));
    }

    public final void u(yg.k kVar) {
        synchronized (this.f54740f) {
            this.f54739e.remove(kVar);
        }
        c().post(new p0(this));
    }
}
