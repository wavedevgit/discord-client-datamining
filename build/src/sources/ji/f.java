package ji;

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
    private static final Map f30916o = new HashMap();

    /* renamed from: a */
    private final Context f30917a;

    /* renamed from: b */
    private final t0 f30918b;

    /* renamed from: c */
    private final String f30919c;

    /* renamed from: g */
    private boolean f30923g;

    /* renamed from: h */
    private final Intent f30924h;

    /* renamed from: i */
    private final a1 f30925i;

    /* renamed from: m */
    private ServiceConnection f30929m;

    /* renamed from: n */
    private IInterface f30930n;

    /* renamed from: d */
    private final List f30920d = new ArrayList();

    /* renamed from: e */
    private final Set f30921e = new HashSet();

    /* renamed from: f */
    private final Object f30922f = new Object();

    /* renamed from: k */
    private final IBinder.DeathRecipient f30927k = new IBinder.DeathRecipient() { // from class: ji.v0
        @Override // android.os.IBinder.DeathRecipient
        public final void binderDied() {
            f.k(f.this);
        }
    };

    /* renamed from: l */
    private final AtomicInteger f30928l = new AtomicInteger(0);

    /* renamed from: j */
    private final WeakReference f30926j = new WeakReference(null);

    public f(Context context, t0 t0Var, String str, Intent intent, a1 a1Var, z0 z0Var) {
        this.f30917a = context;
        this.f30918b = t0Var;
        this.f30919c = str;
        this.f30924h = intent;
        this.f30925i = a1Var;
    }

    public static /* synthetic */ void k(f fVar) {
        fVar.f30918b.c("reportBinderDeath", new Object[0]);
        android.support.v4.media.session.b.a(fVar.f30926j.get());
        fVar.f30918b.c("%s : Binder has died.", fVar.f30919c);
        for (u0 u0Var : fVar.f30920d) {
            u0Var.a(fVar.w());
        }
        fVar.f30920d.clear();
        synchronized (fVar.f30922f) {
            fVar.x();
        }
    }

    public static /* bridge */ /* synthetic */ void o(f fVar, final xg.k kVar) {
        fVar.f30921e.add(kVar);
        kVar.a().addOnCompleteListener(new OnCompleteListener() { // from class: ji.w0
            @Override // com.google.android.gms.tasks.OnCompleteListener
            public final void onComplete(Task task) {
                f.this.u(kVar, task);
            }
        });
    }

    public static /* bridge */ /* synthetic */ void q(f fVar, u0 u0Var) {
        if (fVar.f30930n == null && !fVar.f30923g) {
            fVar.f30918b.c("Initiate binding to the service.", new Object[0]);
            fVar.f30920d.add(u0Var);
            e eVar = new e(fVar, null);
            fVar.f30929m = eVar;
            fVar.f30923g = true;
            if (!fVar.f30917a.bindService(fVar.f30924h, eVar, 1)) {
                fVar.f30918b.c("Failed to bind to the service.", new Object[0]);
                fVar.f30923g = false;
                for (u0 u0Var2 : fVar.f30920d) {
                    u0Var2.a(new g());
                }
                fVar.f30920d.clear();
            }
        } else if (fVar.f30923g) {
            fVar.f30918b.c("Waiting to bind to the service.", new Object[0]);
            fVar.f30920d.add(u0Var);
        } else {
            u0Var.run();
        }
    }

    public static /* bridge */ /* synthetic */ void r(f fVar) {
        fVar.f30918b.c("linkToDeath", new Object[0]);
        try {
            fVar.f30930n.asBinder().linkToDeath(fVar.f30927k, 0);
        } catch (RemoteException e10) {
            fVar.f30918b.b(e10, "linkToDeath failed", new Object[0]);
        }
    }

    public static /* bridge */ /* synthetic */ void s(f fVar) {
        fVar.f30918b.c("unlinkToDeath", new Object[0]);
        fVar.f30930n.asBinder().unlinkToDeath(fVar.f30927k, 0);
    }

    private final RemoteException w() {
        return new RemoteException(String.valueOf(this.f30919c).concat(" : Binder has died."));
    }

    public final void x() {
        for (xg.k kVar : this.f30921e) {
            kVar.d(w());
        }
        this.f30921e.clear();
    }

    public final Handler c() {
        Handler handler;
        Map map = f30916o;
        synchronized (map) {
            try {
                if (!map.containsKey(this.f30919c)) {
                    HandlerThread handlerThread = new HandlerThread(this.f30919c, 10);
                    handlerThread.start();
                    map.put(this.f30919c, new Handler(handlerThread.getLooper()));
                }
                handler = (Handler) map.get(this.f30919c);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return handler;
    }

    public final IInterface e() {
        return this.f30930n;
    }

    public final void t(u0 u0Var, xg.k kVar) {
        c().post(new x0(this, u0Var.c(), kVar, u0Var));
    }

    public final /* synthetic */ void u(xg.k kVar, Task task) {
        synchronized (this.f30922f) {
            this.f30921e.remove(kVar);
        }
    }

    public final void v(xg.k kVar) {
        synchronized (this.f30922f) {
            this.f30921e.remove(kVar);
        }
        c().post(new y0(this));
    }
}
