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
    private static final Map f31664o = new HashMap();

    /* renamed from: a */
    private final Context f31665a;

    /* renamed from: b */
    private final t0 f31666b;

    /* renamed from: c */
    private final String f31667c;

    /* renamed from: g */
    private boolean f31671g;

    /* renamed from: h */
    private final Intent f31672h;

    /* renamed from: i */
    private final a1 f31673i;

    /* renamed from: m */
    private ServiceConnection f31677m;

    /* renamed from: n */
    private IInterface f31678n;

    /* renamed from: d */
    private final List f31668d = new ArrayList();

    /* renamed from: e */
    private final Set f31669e = new HashSet();

    /* renamed from: f */
    private final Object f31670f = new Object();

    /* renamed from: k */
    private final IBinder.DeathRecipient f31675k = new IBinder.DeathRecipient() { // from class: ki.v0
        @Override // android.os.IBinder.DeathRecipient
        public final void binderDied() {
            f.k(f.this);
        }
    };

    /* renamed from: l */
    private final AtomicInteger f31676l = new AtomicInteger(0);

    /* renamed from: j */
    private final WeakReference f31674j = new WeakReference(null);

    public f(Context context, t0 t0Var, String str, Intent intent, a1 a1Var, z0 z0Var) {
        this.f31665a = context;
        this.f31666b = t0Var;
        this.f31667c = str;
        this.f31672h = intent;
        this.f31673i = a1Var;
    }

    public static /* synthetic */ void k(f fVar) {
        fVar.f31666b.c("reportBinderDeath", new Object[0]);
        android.support.v4.media.session.b.a(fVar.f31674j.get());
        fVar.f31666b.c("%s : Binder has died.", fVar.f31667c);
        for (u0 u0Var : fVar.f31668d) {
            u0Var.a(fVar.w());
        }
        fVar.f31668d.clear();
        synchronized (fVar.f31670f) {
            fVar.x();
        }
    }

    public static /* bridge */ /* synthetic */ void o(f fVar, final yg.k kVar) {
        fVar.f31669e.add(kVar);
        kVar.a().addOnCompleteListener(new OnCompleteListener() { // from class: ki.w0
            @Override // com.google.android.gms.tasks.OnCompleteListener
            public final void onComplete(Task task) {
                f.this.u(kVar, task);
            }
        });
    }

    public static /* bridge */ /* synthetic */ void q(f fVar, u0 u0Var) {
        if (fVar.f31678n == null && !fVar.f31671g) {
            fVar.f31666b.c("Initiate binding to the service.", new Object[0]);
            fVar.f31668d.add(u0Var);
            e eVar = new e(fVar, null);
            fVar.f31677m = eVar;
            fVar.f31671g = true;
            if (!fVar.f31665a.bindService(fVar.f31672h, eVar, 1)) {
                fVar.f31666b.c("Failed to bind to the service.", new Object[0]);
                fVar.f31671g = false;
                for (u0 u0Var2 : fVar.f31668d) {
                    u0Var2.a(new g());
                }
                fVar.f31668d.clear();
            }
        } else if (fVar.f31671g) {
            fVar.f31666b.c("Waiting to bind to the service.", new Object[0]);
            fVar.f31668d.add(u0Var);
        } else {
            u0Var.run();
        }
    }

    public static /* bridge */ /* synthetic */ void r(f fVar) {
        fVar.f31666b.c("linkToDeath", new Object[0]);
        try {
            fVar.f31678n.asBinder().linkToDeath(fVar.f31675k, 0);
        } catch (RemoteException e10) {
            fVar.f31666b.b(e10, "linkToDeath failed", new Object[0]);
        }
    }

    public static /* bridge */ /* synthetic */ void s(f fVar) {
        fVar.f31666b.c("unlinkToDeath", new Object[0]);
        fVar.f31678n.asBinder().unlinkToDeath(fVar.f31675k, 0);
    }

    private final RemoteException w() {
        return new RemoteException(String.valueOf(this.f31667c).concat(" : Binder has died."));
    }

    public final void x() {
        for (yg.k kVar : this.f31669e) {
            kVar.d(w());
        }
        this.f31669e.clear();
    }

    public final Handler c() {
        Handler handler;
        Map map = f31664o;
        synchronized (map) {
            try {
                if (!map.containsKey(this.f31667c)) {
                    HandlerThread handlerThread = new HandlerThread(this.f31667c, 10);
                    handlerThread.start();
                    map.put(this.f31667c, new Handler(handlerThread.getLooper()));
                }
                handler = (Handler) map.get(this.f31667c);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return handler;
    }

    public final IInterface e() {
        return this.f31678n;
    }

    public final void t(u0 u0Var, yg.k kVar) {
        c().post(new x0(this, u0Var.c(), kVar, u0Var));
    }

    public final /* synthetic */ void u(yg.k kVar, Task task) {
        synchronized (this.f31670f) {
            this.f31669e.remove(kVar);
        }
    }

    public final void v(yg.k kVar) {
        synchronized (this.f31670f) {
            this.f31669e.remove(kVar);
        }
        c().post(new y0(this));
    }
}
