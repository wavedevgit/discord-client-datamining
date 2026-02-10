package li;

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
    private static final Map f35932o = new HashMap();

    /* renamed from: a */
    private final Context f35933a;

    /* renamed from: b */
    private final t0 f35934b;

    /* renamed from: c */
    private final String f35935c;

    /* renamed from: g */
    private boolean f35939g;

    /* renamed from: h */
    private final Intent f35940h;

    /* renamed from: i */
    private final a1 f35941i;

    /* renamed from: m */
    private ServiceConnection f35945m;

    /* renamed from: n */
    private IInterface f35946n;

    /* renamed from: d */
    private final List f35936d = new ArrayList();

    /* renamed from: e */
    private final Set f35937e = new HashSet();

    /* renamed from: f */
    private final Object f35938f = new Object();

    /* renamed from: k */
    private final IBinder.DeathRecipient f35943k = new IBinder.DeathRecipient() { // from class: li.v0
        @Override // android.os.IBinder.DeathRecipient
        public final void binderDied() {
            f.k(f.this);
        }
    };

    /* renamed from: l */
    private final AtomicInteger f35944l = new AtomicInteger(0);

    /* renamed from: j */
    private final WeakReference f35942j = new WeakReference(null);

    public f(Context context, t0 t0Var, String str, Intent intent, a1 a1Var, z0 z0Var) {
        this.f35933a = context;
        this.f35934b = t0Var;
        this.f35935c = str;
        this.f35940h = intent;
        this.f35941i = a1Var;
    }

    public static /* synthetic */ void k(f fVar) {
        fVar.f35934b.c("reportBinderDeath", new Object[0]);
        android.support.v4.media.session.b.a(fVar.f35942j.get());
        fVar.f35934b.c("%s : Binder has died.", fVar.f35935c);
        for (u0 u0Var : fVar.f35936d) {
            u0Var.a(fVar.w());
        }
        fVar.f35936d.clear();
        synchronized (fVar.f35938f) {
            fVar.x();
        }
    }

    public static /* bridge */ /* synthetic */ void o(f fVar, final zg.k kVar) {
        fVar.f35937e.add(kVar);
        kVar.a().addOnCompleteListener(new OnCompleteListener() { // from class: li.w0
            @Override // com.google.android.gms.tasks.OnCompleteListener
            public final void onComplete(Task task) {
                f.this.u(kVar, task);
            }
        });
    }

    public static /* bridge */ /* synthetic */ void q(f fVar, u0 u0Var) {
        if (fVar.f35946n == null && !fVar.f35939g) {
            fVar.f35934b.c("Initiate binding to the service.", new Object[0]);
            fVar.f35936d.add(u0Var);
            e eVar = new e(fVar, null);
            fVar.f35945m = eVar;
            fVar.f35939g = true;
            if (!fVar.f35933a.bindService(fVar.f35940h, eVar, 1)) {
                fVar.f35934b.c("Failed to bind to the service.", new Object[0]);
                fVar.f35939g = false;
                for (u0 u0Var2 : fVar.f35936d) {
                    u0Var2.a(new g());
                }
                fVar.f35936d.clear();
            }
        } else if (fVar.f35939g) {
            fVar.f35934b.c("Waiting to bind to the service.", new Object[0]);
            fVar.f35936d.add(u0Var);
        } else {
            u0Var.run();
        }
    }

    public static /* bridge */ /* synthetic */ void r(f fVar) {
        fVar.f35934b.c("linkToDeath", new Object[0]);
        try {
            fVar.f35946n.asBinder().linkToDeath(fVar.f35943k, 0);
        } catch (RemoteException e10) {
            fVar.f35934b.b(e10, "linkToDeath failed", new Object[0]);
        }
    }

    public static /* bridge */ /* synthetic */ void s(f fVar) {
        fVar.f35934b.c("unlinkToDeath", new Object[0]);
        fVar.f35946n.asBinder().unlinkToDeath(fVar.f35943k, 0);
    }

    private final RemoteException w() {
        return new RemoteException(String.valueOf(this.f35935c).concat(" : Binder has died."));
    }

    public final void x() {
        for (zg.k kVar : this.f35937e) {
            kVar.d(w());
        }
        this.f35937e.clear();
    }

    public final Handler c() {
        Handler handler;
        Map map = f35932o;
        synchronized (map) {
            try {
                if (!map.containsKey(this.f35935c)) {
                    HandlerThread handlerThread = new HandlerThread(this.f35935c, 10);
                    handlerThread.start();
                    map.put(this.f35935c, new Handler(handlerThread.getLooper()));
                }
                handler = (Handler) map.get(this.f35935c);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return handler;
    }

    public final IInterface e() {
        return this.f35946n;
    }

    public final void t(u0 u0Var, zg.k kVar) {
        c().post(new x0(this, u0Var.c(), kVar, u0Var));
    }

    public final /* synthetic */ void u(zg.k kVar, Task task) {
        synchronized (this.f35938f) {
            this.f35937e.remove(kVar);
        }
    }

    public final void v(zg.k kVar) {
        synchronized (this.f35938f) {
            this.f35937e.remove(kVar);
        }
        c().post(new y0(this));
    }
}
