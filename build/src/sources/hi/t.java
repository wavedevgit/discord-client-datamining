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
    private static final Map f27361o = new HashMap();

    /* renamed from: a */
    private final Context f27362a;

    /* renamed from: b */
    private final i f27363b;

    /* renamed from: g */
    private boolean f27368g;

    /* renamed from: h */
    private final Intent f27369h;

    /* renamed from: l */
    private ServiceConnection f27373l;

    /* renamed from: m */
    private IInterface f27374m;

    /* renamed from: n */
    private final gi.h f27375n;

    /* renamed from: d */
    private final List f27365d = new ArrayList();

    /* renamed from: e */
    private final Set f27366e = new HashSet();

    /* renamed from: f */
    private final Object f27367f = new Object();

    /* renamed from: j */
    private final IBinder.DeathRecipient f27371j = new IBinder.DeathRecipient() { // from class: hi.l
        @Override // android.os.IBinder.DeathRecipient
        public final void binderDied() {
            t.h(t.this);
        }
    };

    /* renamed from: k */
    private final AtomicInteger f27372k = new AtomicInteger(0);

    /* renamed from: c */
    private final String f27364c = "com.google.android.finsky.inappreviewservice.InAppReviewService";

    /* renamed from: i */
    private final WeakReference f27370i = new WeakReference(null);

    public t(Context context, i iVar, String str, Intent intent, gi.h hVar, o oVar, byte[] bArr) {
        this.f27362a = context;
        this.f27363b = iVar;
        this.f27369h = intent;
        this.f27375n = hVar;
    }

    public static /* synthetic */ void h(t tVar) {
        tVar.f27363b.d("reportBinderDeath", new Object[0]);
        android.support.v4.media.session.b.a(tVar.f27370i.get());
        tVar.f27363b.d("%s : Binder has died.", tVar.f27364c);
        for (j jVar : tVar.f27365d) {
            jVar.c(tVar.s());
        }
        tVar.f27365d.clear();
        tVar.t();
    }

    public static /* bridge */ /* synthetic */ void m(t tVar, j jVar) {
        if (tVar.f27374m == null && !tVar.f27368g) {
            tVar.f27363b.d("Initiate binding to the service.", new Object[0]);
            tVar.f27365d.add(jVar);
            s sVar = new s(tVar, null);
            tVar.f27373l = sVar;
            tVar.f27368g = true;
            if (!tVar.f27362a.bindService(tVar.f27369h, sVar, 1)) {
                tVar.f27363b.d("Failed to bind to the service.", new Object[0]);
                tVar.f27368g = false;
                for (j jVar2 : tVar.f27365d) {
                    jVar2.c(new u());
                }
                tVar.f27365d.clear();
            }
        } else if (tVar.f27368g) {
            tVar.f27363b.d("Waiting to bind to the service.", new Object[0]);
            tVar.f27365d.add(jVar);
        } else {
            jVar.run();
        }
    }

    public static /* bridge */ /* synthetic */ void n(t tVar) {
        tVar.f27363b.d("linkToDeath", new Object[0]);
        try {
            tVar.f27374m.asBinder().linkToDeath(tVar.f27371j, 0);
        } catch (RemoteException e10) {
            tVar.f27363b.c(e10, "linkToDeath failed", new Object[0]);
        }
    }

    public static /* bridge */ /* synthetic */ void o(t tVar) {
        tVar.f27363b.d("unlinkToDeath", new Object[0]);
        tVar.f27374m.asBinder().unlinkToDeath(tVar.f27371j, 0);
    }

    private final RemoteException s() {
        return new RemoteException(String.valueOf(this.f27364c).concat(" : Binder has died."));
    }

    public final void t() {
        synchronized (this.f27367f) {
            try {
                for (zg.k kVar : this.f27366e) {
                    kVar.d(s());
                }
                this.f27366e.clear();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final Handler c() {
        Handler handler;
        Map map = f27361o;
        synchronized (map) {
            try {
                if (!map.containsKey(this.f27364c)) {
                    HandlerThread handlerThread = new HandlerThread(this.f27364c, 10);
                    handlerThread.start();
                    map.put(this.f27364c, new Handler(handlerThread.getLooper()));
                }
                handler = (Handler) map.get(this.f27364c);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return handler;
    }

    public final IInterface e() {
        return this.f27374m;
    }

    public final void p(j jVar, final zg.k kVar) {
        synchronized (this.f27367f) {
            this.f27366e.add(kVar);
            kVar.a().addOnCompleteListener(new OnCompleteListener() { // from class: hi.k
                @Override // com.google.android.gms.tasks.OnCompleteListener
                public final void onComplete(Task task) {
                    t.this.q(kVar, task);
                }
            });
        }
        synchronized (this.f27367f) {
            try {
                if (this.f27372k.getAndIncrement() > 0) {
                    this.f27363b.a("Already connected to the service.", new Object[0]);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        c().post(new m(this, jVar.b(), jVar));
    }

    public final /* synthetic */ void q(zg.k kVar, Task task) {
        synchronized (this.f27367f) {
            this.f27366e.remove(kVar);
        }
    }

    public final void r(zg.k kVar) {
        synchronized (this.f27367f) {
            this.f27366e.remove(kVar);
        }
        synchronized (this.f27367f) {
            try {
                if (this.f27372k.get() > 0 && this.f27372k.decrementAndGet() > 0) {
                    this.f27363b.d("Leaving the connection open for other ongoing calls.", new Object[0]);
                    return;
                }
                c().post(new n(this));
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
