package hi;

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
public final class t {

    /* renamed from: o */
    private static final Map f27362o = new HashMap();

    /* renamed from: a */
    private final Context f27363a;

    /* renamed from: b */
    private final i f27364b;

    /* renamed from: g */
    private boolean f27369g;

    /* renamed from: h */
    private final Intent f27370h;

    /* renamed from: l */
    private ServiceConnection f27374l;

    /* renamed from: m */
    private IInterface f27375m;

    /* renamed from: n */
    private final gi.h f27376n;

    /* renamed from: d */
    private final List f27366d = new ArrayList();

    /* renamed from: e */
    private final Set f27367e = new HashSet();

    /* renamed from: f */
    private final Object f27368f = new Object();

    /* renamed from: j */
    private final IBinder.DeathRecipient f27372j = new IBinder.DeathRecipient() { // from class: hi.l
        @Override // android.os.IBinder.DeathRecipient
        public final void binderDied() {
            t.h(t.this);
        }
    };

    /* renamed from: k */
    private final AtomicInteger f27373k = new AtomicInteger(0);

    /* renamed from: c */
    private final String f27365c = "com.google.android.finsky.inappreviewservice.InAppReviewService";

    /* renamed from: i */
    private final WeakReference f27371i = new WeakReference(null);

    public t(Context context, i iVar, String str, Intent intent, gi.h hVar, o oVar, byte[] bArr) {
        this.f27363a = context;
        this.f27364b = iVar;
        this.f27370h = intent;
        this.f27376n = hVar;
    }

    public static /* synthetic */ void h(t tVar) {
        tVar.f27364b.d("reportBinderDeath", new Object[0]);
        android.support.v4.media.session.b.a(tVar.f27371i.get());
        tVar.f27364b.d("%s : Binder has died.", tVar.f27365c);
        for (j jVar : tVar.f27366d) {
            jVar.c(tVar.s());
        }
        tVar.f27366d.clear();
        tVar.t();
    }

    public static /* bridge */ /* synthetic */ void m(t tVar, j jVar) {
        if (tVar.f27375m == null && !tVar.f27369g) {
            tVar.f27364b.d("Initiate binding to the service.", new Object[0]);
            tVar.f27366d.add(jVar);
            s sVar = new s(tVar, null);
            tVar.f27374l = sVar;
            tVar.f27369g = true;
            if (!tVar.f27363a.bindService(tVar.f27370h, sVar, 1)) {
                tVar.f27364b.d("Failed to bind to the service.", new Object[0]);
                tVar.f27369g = false;
                for (j jVar2 : tVar.f27366d) {
                    jVar2.c(new u());
                }
                tVar.f27366d.clear();
            }
        } else if (tVar.f27369g) {
            tVar.f27364b.d("Waiting to bind to the service.", new Object[0]);
            tVar.f27366d.add(jVar);
        } else {
            jVar.run();
        }
    }

    public static /* bridge */ /* synthetic */ void n(t tVar) {
        tVar.f27364b.d("linkToDeath", new Object[0]);
        try {
            tVar.f27375m.asBinder().linkToDeath(tVar.f27372j, 0);
        } catch (RemoteException e10) {
            tVar.f27364b.c(e10, "linkToDeath failed", new Object[0]);
        }
    }

    public static /* bridge */ /* synthetic */ void o(t tVar) {
        tVar.f27364b.d("unlinkToDeath", new Object[0]);
        tVar.f27375m.asBinder().unlinkToDeath(tVar.f27372j, 0);
    }

    private final RemoteException s() {
        return new RemoteException(String.valueOf(this.f27365c).concat(" : Binder has died."));
    }

    public final void t() {
        synchronized (this.f27368f) {
            try {
                for (zg.k kVar : this.f27367e) {
                    kVar.d(s());
                }
                this.f27367e.clear();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final Handler c() {
        Handler handler;
        Map map = f27362o;
        synchronized (map) {
            try {
                if (!map.containsKey(this.f27365c)) {
                    HandlerThread handlerThread = new HandlerThread(this.f27365c, 10);
                    handlerThread.start();
                    map.put(this.f27365c, new Handler(handlerThread.getLooper()));
                }
                handler = (Handler) map.get(this.f27365c);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return handler;
    }

    public final IInterface e() {
        return this.f27375m;
    }

    public final void p(j jVar, final zg.k kVar) {
        synchronized (this.f27368f) {
            this.f27367e.add(kVar);
            kVar.a().addOnCompleteListener(new OnCompleteListener() { // from class: hi.k
                @Override // com.google.android.gms.tasks.OnCompleteListener
                public final void onComplete(Task task) {
                    t.this.q(kVar, task);
                }
            });
        }
        synchronized (this.f27368f) {
            try {
                if (this.f27373k.getAndIncrement() > 0) {
                    this.f27364b.a("Already connected to the service.", new Object[0]);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        c().post(new m(this, jVar.b(), jVar));
    }

    public final /* synthetic */ void q(zg.k kVar, Task task) {
        synchronized (this.f27368f) {
            this.f27367e.remove(kVar);
        }
    }

    public final void r(zg.k kVar) {
        synchronized (this.f27368f) {
            this.f27367e.remove(kVar);
        }
        synchronized (this.f27368f) {
            try {
                if (this.f27373k.get() > 0 && this.f27373k.decrementAndGet() > 0) {
                    this.f27364b.d("Leaving the connection open for other ongoing calls.", new Object[0]);
                    return;
                }
                c().post(new n(this));
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
