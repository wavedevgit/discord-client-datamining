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
    private static final Map f26909o = new HashMap();

    /* renamed from: a */
    private final Context f26910a;

    /* renamed from: b */
    private final t0 f26911b;

    /* renamed from: c */
    private final String f26912c;

    /* renamed from: g */
    private boolean f26916g;

    /* renamed from: h */
    private final Intent f26917h;

    /* renamed from: i */
    private final a1 f26918i;

    /* renamed from: m */
    private ServiceConnection f26922m;

    /* renamed from: n */
    private IInterface f26923n;

    /* renamed from: d */
    private final List f26913d = new ArrayList();

    /* renamed from: e */
    private final Set f26914e = new HashSet();

    /* renamed from: f */
    private final Object f26915f = new Object();

    /* renamed from: k */
    private final IBinder.DeathRecipient f26920k = new IBinder.DeathRecipient() { // from class: gi.v0
        @Override // android.os.IBinder.DeathRecipient
        public final void binderDied() {
            f.k(f.this);
        }
    };

    /* renamed from: l */
    private final AtomicInteger f26921l = new AtomicInteger(0);

    /* renamed from: j */
    private final WeakReference f26919j = new WeakReference(null);

    public f(Context context, t0 t0Var, String str, Intent intent, a1 a1Var, z0 z0Var) {
        this.f26910a = context;
        this.f26911b = t0Var;
        this.f26912c = str;
        this.f26917h = intent;
        this.f26918i = a1Var;
    }

    public static /* synthetic */ void k(f fVar) {
        fVar.f26911b.c("reportBinderDeath", new Object[0]);
        android.support.v4.media.session.b.a(fVar.f26919j.get());
        fVar.f26911b.c("%s : Binder has died.", fVar.f26912c);
        for (u0 u0Var : fVar.f26913d) {
            u0Var.a(fVar.w());
        }
        fVar.f26913d.clear();
        synchronized (fVar.f26915f) {
            fVar.x();
        }
    }

    public static /* bridge */ /* synthetic */ void o(f fVar, final wg.k kVar) {
        fVar.f26914e.add(kVar);
        kVar.a().addOnCompleteListener(new OnCompleteListener() { // from class: gi.w0
            @Override // com.google.android.gms.tasks.OnCompleteListener
            public final void onComplete(Task task) {
                f.this.u(kVar, task);
            }
        });
    }

    public static /* bridge */ /* synthetic */ void q(f fVar, u0 u0Var) {
        if (fVar.f26923n == null && !fVar.f26916g) {
            fVar.f26911b.c("Initiate binding to the service.", new Object[0]);
            fVar.f26913d.add(u0Var);
            e eVar = new e(fVar, null);
            fVar.f26922m = eVar;
            fVar.f26916g = true;
            if (!fVar.f26910a.bindService(fVar.f26917h, eVar, 1)) {
                fVar.f26911b.c("Failed to bind to the service.", new Object[0]);
                fVar.f26916g = false;
                for (u0 u0Var2 : fVar.f26913d) {
                    u0Var2.a(new g());
                }
                fVar.f26913d.clear();
            }
        } else if (fVar.f26916g) {
            fVar.f26911b.c("Waiting to bind to the service.", new Object[0]);
            fVar.f26913d.add(u0Var);
        } else {
            u0Var.run();
        }
    }

    public static /* bridge */ /* synthetic */ void r(f fVar) {
        fVar.f26911b.c("linkToDeath", new Object[0]);
        try {
            fVar.f26923n.asBinder().linkToDeath(fVar.f26920k, 0);
        } catch (RemoteException e10) {
            fVar.f26911b.b(e10, "linkToDeath failed", new Object[0]);
        }
    }

    public static /* bridge */ /* synthetic */ void s(f fVar) {
        fVar.f26911b.c("unlinkToDeath", new Object[0]);
        fVar.f26923n.asBinder().unlinkToDeath(fVar.f26920k, 0);
    }

    private final RemoteException w() {
        return new RemoteException(String.valueOf(this.f26912c).concat(" : Binder has died."));
    }

    public final void x() {
        for (wg.k kVar : this.f26914e) {
            kVar.d(w());
        }
        this.f26914e.clear();
    }

    public final Handler c() {
        Handler handler;
        Map map = f26909o;
        synchronized (map) {
            try {
                if (!map.containsKey(this.f26912c)) {
                    HandlerThread handlerThread = new HandlerThread(this.f26912c, 10);
                    handlerThread.start();
                    map.put(this.f26912c, new Handler(handlerThread.getLooper()));
                }
                handler = (Handler) map.get(this.f26912c);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return handler;
    }

    public final IInterface e() {
        return this.f26923n;
    }

    public final void t(u0 u0Var, wg.k kVar) {
        c().post(new x0(this, u0Var.c(), kVar, u0Var));
    }

    public final /* synthetic */ void u(wg.k kVar, Task task) {
        synchronized (this.f26915f) {
            this.f26914e.remove(kVar);
        }
    }

    public final void v(wg.k kVar) {
        synchronized (this.f26915f) {
            this.f26914e.remove(kVar);
        }
        c().post(new y0(this));
    }
}
