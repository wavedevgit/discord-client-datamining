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
    private static final Map f37903o = new HashMap();

    /* renamed from: a */
    private final Context f37904a;

    /* renamed from: b */
    private final t0 f37905b;

    /* renamed from: c */
    private final String f37906c;

    /* renamed from: g */
    private boolean f37910g;

    /* renamed from: h */
    private final Intent f37911h;

    /* renamed from: i */
    private final a1 f37912i;

    /* renamed from: m */
    private ServiceConnection f37916m;

    /* renamed from: n */
    private IInterface f37917n;

    /* renamed from: d */
    private final List f37907d = new ArrayList();

    /* renamed from: e */
    private final Set f37908e = new HashSet();

    /* renamed from: f */
    private final Object f37909f = new Object();

    /* renamed from: k */
    private final IBinder.DeathRecipient f37914k = new IBinder.DeathRecipient() { // from class: ni.v0
        @Override // android.os.IBinder.DeathRecipient
        public final void binderDied() {
            f.k(f.this);
        }
    };

    /* renamed from: l */
    private final AtomicInteger f37915l = new AtomicInteger(0);

    /* renamed from: j */
    private final WeakReference f37913j = new WeakReference(null);

    public f(Context context, t0 t0Var, String str, Intent intent, a1 a1Var, z0 z0Var) {
        this.f37904a = context;
        this.f37905b = t0Var;
        this.f37906c = str;
        this.f37911h = intent;
        this.f37912i = a1Var;
    }

    public static /* synthetic */ void k(f fVar) {
        fVar.f37905b.c("reportBinderDeath", new Object[0]);
        android.support.v4.media.session.b.a(fVar.f37913j.get());
        fVar.f37905b.c("%s : Binder has died.", fVar.f37906c);
        for (u0 u0Var : fVar.f37907d) {
            u0Var.a(fVar.w());
        }
        fVar.f37907d.clear();
        synchronized (fVar.f37909f) {
            fVar.x();
        }
    }

    public static /* bridge */ /* synthetic */ void o(f fVar, final zg.k kVar) {
        fVar.f37908e.add(kVar);
        kVar.a().addOnCompleteListener(new OnCompleteListener() { // from class: ni.w0
            @Override // com.google.android.gms.tasks.OnCompleteListener
            public final void onComplete(Task task) {
                f.this.u(kVar, task);
            }
        });
    }

    public static /* bridge */ /* synthetic */ void q(f fVar, u0 u0Var) {
        if (fVar.f37917n == null && !fVar.f37910g) {
            fVar.f37905b.c("Initiate binding to the service.", new Object[0]);
            fVar.f37907d.add(u0Var);
            e eVar = new e(fVar, null);
            fVar.f37916m = eVar;
            fVar.f37910g = true;
            if (!fVar.f37904a.bindService(fVar.f37911h, eVar, 1)) {
                fVar.f37905b.c("Failed to bind to the service.", new Object[0]);
                fVar.f37910g = false;
                for (u0 u0Var2 : fVar.f37907d) {
                    u0Var2.a(new g());
                }
                fVar.f37907d.clear();
            }
        } else if (fVar.f37910g) {
            fVar.f37905b.c("Waiting to bind to the service.", new Object[0]);
            fVar.f37907d.add(u0Var);
        } else {
            u0Var.run();
        }
    }

    public static /* bridge */ /* synthetic */ void r(f fVar) {
        fVar.f37905b.c("linkToDeath", new Object[0]);
        try {
            fVar.f37917n.asBinder().linkToDeath(fVar.f37914k, 0);
        } catch (RemoteException e10) {
            fVar.f37905b.b(e10, "linkToDeath failed", new Object[0]);
        }
    }

    public static /* bridge */ /* synthetic */ void s(f fVar) {
        fVar.f37905b.c("unlinkToDeath", new Object[0]);
        fVar.f37917n.asBinder().unlinkToDeath(fVar.f37914k, 0);
    }

    private final RemoteException w() {
        return new RemoteException(String.valueOf(this.f37906c).concat(" : Binder has died."));
    }

    public final void x() {
        for (zg.k kVar : this.f37908e) {
            kVar.d(w());
        }
        this.f37908e.clear();
    }

    public final Handler c() {
        Handler handler;
        Map map = f37903o;
        synchronized (map) {
            try {
                if (!map.containsKey(this.f37906c)) {
                    HandlerThread handlerThread = new HandlerThread(this.f37906c, 10);
                    handlerThread.start();
                    map.put(this.f37906c, new Handler(handlerThread.getLooper()));
                }
                handler = (Handler) map.get(this.f37906c);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return handler;
    }

    public final IInterface e() {
        return this.f37917n;
    }

    public final void t(u0 u0Var, zg.k kVar) {
        c().post(new x0(this, u0Var.c(), kVar, u0Var));
    }

    public final /* synthetic */ void u(zg.k kVar, Task task) {
        synchronized (this.f37909f) {
            this.f37908e.remove(kVar);
        }
    }

    public final void v(zg.k kVar) {
        synchronized (this.f37909f) {
            this.f37908e.remove(kVar);
        }
        c().post(new y0(this));
    }
}
