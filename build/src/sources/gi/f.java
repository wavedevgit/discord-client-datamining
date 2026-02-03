package gi;

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
public final class f {

    /* renamed from: o */
    private static final Map f27020o = new HashMap();

    /* renamed from: a */
    private final Context f27021a;

    /* renamed from: b */
    private final t0 f27022b;

    /* renamed from: c */
    private final String f27023c;

    /* renamed from: g */
    private boolean f27027g;

    /* renamed from: h */
    private final Intent f27028h;

    /* renamed from: i */
    private final a1 f27029i;

    /* renamed from: m */
    private ServiceConnection f27033m;

    /* renamed from: n */
    private IInterface f27034n;

    /* renamed from: d */
    private final List f27024d = new ArrayList();

    /* renamed from: e */
    private final Set f27025e = new HashSet();

    /* renamed from: f */
    private final Object f27026f = new Object();

    /* renamed from: k */
    private final IBinder.DeathRecipient f27031k = new IBinder.DeathRecipient() { // from class: gi.v0
        @Override // android.os.IBinder.DeathRecipient
        public final void binderDied() {
            f.k(f.this);
        }
    };

    /* renamed from: l */
    private final AtomicInteger f27032l = new AtomicInteger(0);

    /* renamed from: j */
    private final WeakReference f27030j = new WeakReference(null);

    public f(Context context, t0 t0Var, String str, Intent intent, a1 a1Var, z0 z0Var) {
        this.f27021a = context;
        this.f27022b = t0Var;
        this.f27023c = str;
        this.f27028h = intent;
        this.f27029i = a1Var;
    }

    public static /* synthetic */ void k(f fVar) {
        fVar.f27022b.c("reportBinderDeath", new Object[0]);
        android.support.v4.media.session.b.a(fVar.f27030j.get());
        fVar.f27022b.c("%s : Binder has died.", fVar.f27023c);
        for (u0 u0Var : fVar.f27024d) {
            u0Var.a(fVar.w());
        }
        fVar.f27024d.clear();
        synchronized (fVar.f27026f) {
            fVar.x();
        }
    }

    public static /* bridge */ /* synthetic */ void o(f fVar, final wg.k kVar) {
        fVar.f27025e.add(kVar);
        kVar.a().addOnCompleteListener(new OnCompleteListener() { // from class: gi.w0
            @Override // com.google.android.gms.tasks.OnCompleteListener
            public final void onComplete(Task task) {
                f.this.u(kVar, task);
            }
        });
    }

    public static /* bridge */ /* synthetic */ void q(f fVar, u0 u0Var) {
        if (fVar.f27034n == null && !fVar.f27027g) {
            fVar.f27022b.c("Initiate binding to the service.", new Object[0]);
            fVar.f27024d.add(u0Var);
            e eVar = new e(fVar, null);
            fVar.f27033m = eVar;
            fVar.f27027g = true;
            if (!fVar.f27021a.bindService(fVar.f27028h, eVar, 1)) {
                fVar.f27022b.c("Failed to bind to the service.", new Object[0]);
                fVar.f27027g = false;
                for (u0 u0Var2 : fVar.f27024d) {
                    u0Var2.a(new g());
                }
                fVar.f27024d.clear();
            }
        } else if (fVar.f27027g) {
            fVar.f27022b.c("Waiting to bind to the service.", new Object[0]);
            fVar.f27024d.add(u0Var);
        } else {
            u0Var.run();
        }
    }

    public static /* bridge */ /* synthetic */ void r(f fVar) {
        fVar.f27022b.c("linkToDeath", new Object[0]);
        try {
            fVar.f27034n.asBinder().linkToDeath(fVar.f27031k, 0);
        } catch (RemoteException e10) {
            fVar.f27022b.b(e10, "linkToDeath failed", new Object[0]);
        }
    }

    public static /* bridge */ /* synthetic */ void s(f fVar) {
        fVar.f27022b.c("unlinkToDeath", new Object[0]);
        fVar.f27034n.asBinder().unlinkToDeath(fVar.f27031k, 0);
    }

    private final RemoteException w() {
        return new RemoteException(String.valueOf(this.f27023c).concat(" : Binder has died."));
    }

    public final void x() {
        for (wg.k kVar : this.f27025e) {
            kVar.d(w());
        }
        this.f27025e.clear();
    }

    public final Handler c() {
        Handler handler;
        Map map = f27020o;
        synchronized (map) {
            try {
                if (!map.containsKey(this.f27023c)) {
                    HandlerThread handlerThread = new HandlerThread(this.f27023c, 10);
                    handlerThread.start();
                    map.put(this.f27023c, new Handler(handlerThread.getLooper()));
                }
                handler = (Handler) map.get(this.f27023c);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return handler;
    }

    public final IInterface e() {
        return this.f27034n;
    }

    public final void t(u0 u0Var, wg.k kVar) {
        c().post(new x0(this, u0Var.c(), kVar, u0Var));
    }

    public final /* synthetic */ void u(wg.k kVar, Task task) {
        synchronized (this.f27026f) {
            this.f27025e.remove(kVar);
        }
    }

    public final void v(wg.k kVar) {
        synchronized (this.f27026f) {
            this.f27025e.remove(kVar);
        }
        c().post(new y0(this));
    }
}
