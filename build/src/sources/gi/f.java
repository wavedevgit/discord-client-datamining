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
    private static final Map f26233o = new HashMap();

    /* renamed from: a */
    private final Context f26234a;

    /* renamed from: b */
    private final t0 f26235b;

    /* renamed from: c */
    private final String f26236c;

    /* renamed from: g */
    private boolean f26240g;

    /* renamed from: h */
    private final Intent f26241h;

    /* renamed from: i */
    private final a1 f26242i;

    /* renamed from: m */
    private ServiceConnection f26246m;

    /* renamed from: n */
    private IInterface f26247n;

    /* renamed from: d */
    private final List f26237d = new ArrayList();

    /* renamed from: e */
    private final Set f26238e = new HashSet();

    /* renamed from: f */
    private final Object f26239f = new Object();

    /* renamed from: k */
    private final IBinder.DeathRecipient f26244k = new IBinder.DeathRecipient() { // from class: gi.v0
        @Override // android.os.IBinder.DeathRecipient
        public final void binderDied() {
            f.k(f.this);
        }
    };

    /* renamed from: l */
    private final AtomicInteger f26245l = new AtomicInteger(0);

    /* renamed from: j */
    private final WeakReference f26243j = new WeakReference(null);

    public f(Context context, t0 t0Var, String str, Intent intent, a1 a1Var, z0 z0Var) {
        this.f26234a = context;
        this.f26235b = t0Var;
        this.f26236c = str;
        this.f26241h = intent;
        this.f26242i = a1Var;
    }

    public static /* synthetic */ void k(f fVar) {
        fVar.f26235b.c("reportBinderDeath", new Object[0]);
        android.support.v4.media.session.b.a(fVar.f26243j.get());
        fVar.f26235b.c("%s : Binder has died.", fVar.f26236c);
        for (u0 u0Var : fVar.f26237d) {
            u0Var.a(fVar.w());
        }
        fVar.f26237d.clear();
        synchronized (fVar.f26239f) {
            fVar.x();
        }
    }

    public static /* bridge */ /* synthetic */ void o(f fVar, final wg.k kVar) {
        fVar.f26238e.add(kVar);
        kVar.a().addOnCompleteListener(new OnCompleteListener() { // from class: gi.w0
            @Override // com.google.android.gms.tasks.OnCompleteListener
            public final void onComplete(Task task) {
                f.this.u(kVar, task);
            }
        });
    }

    public static /* bridge */ /* synthetic */ void q(f fVar, u0 u0Var) {
        if (fVar.f26247n == null && !fVar.f26240g) {
            fVar.f26235b.c("Initiate binding to the service.", new Object[0]);
            fVar.f26237d.add(u0Var);
            e eVar = new e(fVar, null);
            fVar.f26246m = eVar;
            fVar.f26240g = true;
            if (!fVar.f26234a.bindService(fVar.f26241h, eVar, 1)) {
                fVar.f26235b.c("Failed to bind to the service.", new Object[0]);
                fVar.f26240g = false;
                for (u0 u0Var2 : fVar.f26237d) {
                    u0Var2.a(new g());
                }
                fVar.f26237d.clear();
            }
        } else if (fVar.f26240g) {
            fVar.f26235b.c("Waiting to bind to the service.", new Object[0]);
            fVar.f26237d.add(u0Var);
        } else {
            u0Var.run();
        }
    }

    public static /* bridge */ /* synthetic */ void r(f fVar) {
        fVar.f26235b.c("linkToDeath", new Object[0]);
        try {
            fVar.f26247n.asBinder().linkToDeath(fVar.f26244k, 0);
        } catch (RemoteException e10) {
            fVar.f26235b.b(e10, "linkToDeath failed", new Object[0]);
        }
    }

    public static /* bridge */ /* synthetic */ void s(f fVar) {
        fVar.f26235b.c("unlinkToDeath", new Object[0]);
        fVar.f26247n.asBinder().unlinkToDeath(fVar.f26244k, 0);
    }

    private final RemoteException w() {
        return new RemoteException(String.valueOf(this.f26236c).concat(" : Binder has died."));
    }

    public final void x() {
        for (wg.k kVar : this.f26238e) {
            kVar.d(w());
        }
        this.f26238e.clear();
    }

    public final Handler c() {
        Handler handler;
        Map map = f26233o;
        synchronized (map) {
            try {
                if (!map.containsKey(this.f26236c)) {
                    HandlerThread handlerThread = new HandlerThread(this.f26236c, 10);
                    handlerThread.start();
                    map.put(this.f26236c, new Handler(handlerThread.getLooper()));
                }
                handler = (Handler) map.get(this.f26236c);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return handler;
    }

    public final IInterface e() {
        return this.f26247n;
    }

    public final void t(u0 u0Var, wg.k kVar) {
        c().post(new x0(this, u0Var.c(), kVar, u0Var));
    }

    public final /* synthetic */ void u(wg.k kVar, Task task) {
        synchronized (this.f26239f) {
            this.f26238e.remove(kVar);
        }
    }

    public final void v(wg.k kVar) {
        synchronized (this.f26239f) {
            this.f26238e.remove(kVar);
        }
        c().post(new y0(this));
    }
}
