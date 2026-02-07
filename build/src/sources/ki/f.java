package ki;

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
    private static final Map f31712o = new HashMap();

    /* renamed from: a */
    private final Context f31713a;

    /* renamed from: b */
    private final t0 f31714b;

    /* renamed from: c */
    private final String f31715c;

    /* renamed from: g */
    private boolean f31719g;

    /* renamed from: h */
    private final Intent f31720h;

    /* renamed from: i */
    private final a1 f31721i;

    /* renamed from: m */
    private ServiceConnection f31725m;

    /* renamed from: n */
    private IInterface f31726n;

    /* renamed from: d */
    private final List f31716d = new ArrayList();

    /* renamed from: e */
    private final Set f31717e = new HashSet();

    /* renamed from: f */
    private final Object f31718f = new Object();

    /* renamed from: k */
    private final IBinder.DeathRecipient f31723k = new IBinder.DeathRecipient() { // from class: ki.v0
        @Override // android.os.IBinder.DeathRecipient
        public final void binderDied() {
            f.k(f.this);
        }
    };

    /* renamed from: l */
    private final AtomicInteger f31724l = new AtomicInteger(0);

    /* renamed from: j */
    private final WeakReference f31722j = new WeakReference(null);

    public f(Context context, t0 t0Var, String str, Intent intent, a1 a1Var, z0 z0Var) {
        this.f31713a = context;
        this.f31714b = t0Var;
        this.f31715c = str;
        this.f31720h = intent;
        this.f31721i = a1Var;
    }

    public static /* synthetic */ void k(f fVar) {
        fVar.f31714b.c("reportBinderDeath", new Object[0]);
        android.support.v4.media.session.b.a(fVar.f31722j.get());
        fVar.f31714b.c("%s : Binder has died.", fVar.f31715c);
        for (u0 u0Var : fVar.f31716d) {
            u0Var.a(fVar.w());
        }
        fVar.f31716d.clear();
        synchronized (fVar.f31718f) {
            fVar.x();
        }
    }

    public static /* bridge */ /* synthetic */ void o(f fVar, final yg.k kVar) {
        fVar.f31717e.add(kVar);
        kVar.a().addOnCompleteListener(new OnCompleteListener() { // from class: ki.w0
            @Override // com.google.android.gms.tasks.OnCompleteListener
            public final void onComplete(Task task) {
                f.this.u(kVar, task);
            }
        });
    }

    public static /* bridge */ /* synthetic */ void q(f fVar, u0 u0Var) {
        if (fVar.f31726n == null && !fVar.f31719g) {
            fVar.f31714b.c("Initiate binding to the service.", new Object[0]);
            fVar.f31716d.add(u0Var);
            e eVar = new e(fVar, null);
            fVar.f31725m = eVar;
            fVar.f31719g = true;
            if (!fVar.f31713a.bindService(fVar.f31720h, eVar, 1)) {
                fVar.f31714b.c("Failed to bind to the service.", new Object[0]);
                fVar.f31719g = false;
                for (u0 u0Var2 : fVar.f31716d) {
                    u0Var2.a(new g());
                }
                fVar.f31716d.clear();
            }
        } else if (fVar.f31719g) {
            fVar.f31714b.c("Waiting to bind to the service.", new Object[0]);
            fVar.f31716d.add(u0Var);
        } else {
            u0Var.run();
        }
    }

    public static /* bridge */ /* synthetic */ void r(f fVar) {
        fVar.f31714b.c("linkToDeath", new Object[0]);
        try {
            fVar.f31726n.asBinder().linkToDeath(fVar.f31723k, 0);
        } catch (RemoteException e10) {
            fVar.f31714b.b(e10, "linkToDeath failed", new Object[0]);
        }
    }

    public static /* bridge */ /* synthetic */ void s(f fVar) {
        fVar.f31714b.c("unlinkToDeath", new Object[0]);
        fVar.f31726n.asBinder().unlinkToDeath(fVar.f31723k, 0);
    }

    private final RemoteException w() {
        return new RemoteException(String.valueOf(this.f31715c).concat(" : Binder has died."));
    }

    public final void x() {
        for (yg.k kVar : this.f31717e) {
            kVar.d(w());
        }
        this.f31717e.clear();
    }

    public final Handler c() {
        Handler handler;
        Map map = f31712o;
        synchronized (map) {
            try {
                if (!map.containsKey(this.f31715c)) {
                    HandlerThread handlerThread = new HandlerThread(this.f31715c, 10);
                    handlerThread.start();
                    map.put(this.f31715c, new Handler(handlerThread.getLooper()));
                }
                handler = (Handler) map.get(this.f31715c);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return handler;
    }

    public final IInterface e() {
        return this.f31726n;
    }

    public final void t(u0 u0Var, yg.k kVar) {
        c().post(new x0(this, u0Var.c(), kVar, u0Var));
    }

    public final /* synthetic */ void u(yg.k kVar, Task task) {
        synchronized (this.f31718f) {
            this.f31717e.remove(kVar);
        }
    }

    public final void v(yg.k kVar) {
        synchronized (this.f31718f) {
            this.f31717e.remove(kVar);
        }
        c().post(new y0(this));
    }
}
