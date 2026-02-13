package ni;

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
    private static final Map f38471o = new HashMap();

    /* renamed from: a */
    private final Context f38472a;

    /* renamed from: b */
    private final t0 f38473b;

    /* renamed from: c */
    private final String f38474c;

    /* renamed from: g */
    private boolean f38478g;

    /* renamed from: h */
    private final Intent f38479h;

    /* renamed from: i */
    private final a1 f38480i;

    /* renamed from: m */
    private ServiceConnection f38484m;

    /* renamed from: n */
    private IInterface f38485n;

    /* renamed from: d */
    private final List f38475d = new ArrayList();

    /* renamed from: e */
    private final Set f38476e = new HashSet();

    /* renamed from: f */
    private final Object f38477f = new Object();

    /* renamed from: k */
    private final IBinder.DeathRecipient f38482k = new IBinder.DeathRecipient() { // from class: ni.v0
        @Override // android.os.IBinder.DeathRecipient
        public final void binderDied() {
            f.k(f.this);
        }
    };

    /* renamed from: l */
    private final AtomicInteger f38483l = new AtomicInteger(0);

    /* renamed from: j */
    private final WeakReference f38481j = new WeakReference(null);

    public f(Context context, t0 t0Var, String str, Intent intent, a1 a1Var, z0 z0Var) {
        this.f38472a = context;
        this.f38473b = t0Var;
        this.f38474c = str;
        this.f38479h = intent;
        this.f38480i = a1Var;
    }

    public static /* synthetic */ void k(f fVar) {
        fVar.f38473b.c("reportBinderDeath", new Object[0]);
        android.support.v4.media.session.b.a(fVar.f38481j.get());
        fVar.f38473b.c("%s : Binder has died.", fVar.f38474c);
        for (u0 u0Var : fVar.f38475d) {
            u0Var.a(fVar.w());
        }
        fVar.f38475d.clear();
        synchronized (fVar.f38477f) {
            fVar.x();
        }
    }

    public static /* bridge */ /* synthetic */ void o(f fVar, final zg.k kVar) {
        fVar.f38476e.add(kVar);
        kVar.a().addOnCompleteListener(new OnCompleteListener() { // from class: ni.w0
            @Override // com.google.android.gms.tasks.OnCompleteListener
            public final void onComplete(Task task) {
                f.this.u(kVar, task);
            }
        });
    }

    public static /* bridge */ /* synthetic */ void q(f fVar, u0 u0Var) {
        if (fVar.f38485n == null && !fVar.f38478g) {
            fVar.f38473b.c("Initiate binding to the service.", new Object[0]);
            fVar.f38475d.add(u0Var);
            e eVar = new e(fVar, null);
            fVar.f38484m = eVar;
            fVar.f38478g = true;
            if (!fVar.f38472a.bindService(fVar.f38479h, eVar, 1)) {
                fVar.f38473b.c("Failed to bind to the service.", new Object[0]);
                fVar.f38478g = false;
                for (u0 u0Var2 : fVar.f38475d) {
                    u0Var2.a(new g());
                }
                fVar.f38475d.clear();
            }
        } else if (fVar.f38478g) {
            fVar.f38473b.c("Waiting to bind to the service.", new Object[0]);
            fVar.f38475d.add(u0Var);
        } else {
            u0Var.run();
        }
    }

    public static /* bridge */ /* synthetic */ void r(f fVar) {
        fVar.f38473b.c("linkToDeath", new Object[0]);
        try {
            fVar.f38485n.asBinder().linkToDeath(fVar.f38482k, 0);
        } catch (RemoteException e10) {
            fVar.f38473b.b(e10, "linkToDeath failed", new Object[0]);
        }
    }

    public static /* bridge */ /* synthetic */ void s(f fVar) {
        fVar.f38473b.c("unlinkToDeath", new Object[0]);
        fVar.f38485n.asBinder().unlinkToDeath(fVar.f38482k, 0);
    }

    private final RemoteException w() {
        return new RemoteException(String.valueOf(this.f38474c).concat(" : Binder has died."));
    }

    public final void x() {
        for (zg.k kVar : this.f38476e) {
            kVar.d(w());
        }
        this.f38476e.clear();
    }

    public final Handler c() {
        Handler handler;
        Map map = f38471o;
        synchronized (map) {
            try {
                if (!map.containsKey(this.f38474c)) {
                    HandlerThread handlerThread = new HandlerThread(this.f38474c, 10);
                    handlerThread.start();
                    map.put(this.f38474c, new Handler(handlerThread.getLooper()));
                }
                handler = (Handler) map.get(this.f38474c);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return handler;
    }

    public final IInterface e() {
        return this.f38485n;
    }

    public final void t(u0 u0Var, zg.k kVar) {
        c().post(new x0(this, u0Var.c(), kVar, u0Var));
    }

    public final /* synthetic */ void u(zg.k kVar, Task task) {
        synchronized (this.f38477f) {
            this.f38476e.remove(kVar);
        }
    }

    public final void v(zg.k kVar) {
        synchronized (this.f38477f) {
            this.f38476e.remove(kVar);
        }
        c().post(new y0(this));
    }
}
