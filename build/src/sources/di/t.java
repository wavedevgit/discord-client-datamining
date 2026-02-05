package di;

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
    private static final Map f20826o = new HashMap();

    /* renamed from: a */
    private final Context f20827a;

    /* renamed from: b */
    private final i f20828b;

    /* renamed from: g */
    private boolean f20833g;

    /* renamed from: h */
    private final Intent f20834h;

    /* renamed from: l */
    private ServiceConnection f20838l;

    /* renamed from: m */
    private IInterface f20839m;

    /* renamed from: n */
    private final ci.h f20840n;

    /* renamed from: d */
    private final List f20830d = new ArrayList();

    /* renamed from: e */
    private final Set f20831e = new HashSet();

    /* renamed from: f */
    private final Object f20832f = new Object();

    /* renamed from: j */
    private final IBinder.DeathRecipient f20836j = new IBinder.DeathRecipient() { // from class: di.l
        @Override // android.os.IBinder.DeathRecipient
        public final void binderDied() {
            t.h(t.this);
        }
    };

    /* renamed from: k */
    private final AtomicInteger f20837k = new AtomicInteger(0);

    /* renamed from: c */
    private final String f20829c = "com.google.android.finsky.inappreviewservice.InAppReviewService";

    /* renamed from: i */
    private final WeakReference f20835i = new WeakReference(null);

    public t(Context context, i iVar, String str, Intent intent, ci.h hVar, o oVar, byte[] bArr) {
        this.f20827a = context;
        this.f20828b = iVar;
        this.f20834h = intent;
        this.f20840n = hVar;
    }

    public static /* synthetic */ void h(t tVar) {
        tVar.f20828b.d("reportBinderDeath", new Object[0]);
        android.support.v4.media.session.b.a(tVar.f20835i.get());
        tVar.f20828b.d("%s : Binder has died.", tVar.f20829c);
        for (j jVar : tVar.f20830d) {
            jVar.c(tVar.s());
        }
        tVar.f20830d.clear();
        tVar.t();
    }

    public static /* bridge */ /* synthetic */ void m(t tVar, j jVar) {
        if (tVar.f20839m == null && !tVar.f20833g) {
            tVar.f20828b.d("Initiate binding to the service.", new Object[0]);
            tVar.f20830d.add(jVar);
            s sVar = new s(tVar, null);
            tVar.f20838l = sVar;
            tVar.f20833g = true;
            if (!tVar.f20827a.bindService(tVar.f20834h, sVar, 1)) {
                tVar.f20828b.d("Failed to bind to the service.", new Object[0]);
                tVar.f20833g = false;
                for (j jVar2 : tVar.f20830d) {
                    jVar2.c(new u());
                }
                tVar.f20830d.clear();
            }
        } else if (tVar.f20833g) {
            tVar.f20828b.d("Waiting to bind to the service.", new Object[0]);
            tVar.f20830d.add(jVar);
        } else {
            jVar.run();
        }
    }

    public static /* bridge */ /* synthetic */ void n(t tVar) {
        tVar.f20828b.d("linkToDeath", new Object[0]);
        try {
            tVar.f20839m.asBinder().linkToDeath(tVar.f20836j, 0);
        } catch (RemoteException e10) {
            tVar.f20828b.c(e10, "linkToDeath failed", new Object[0]);
        }
    }

    public static /* bridge */ /* synthetic */ void o(t tVar) {
        tVar.f20828b.d("unlinkToDeath", new Object[0]);
        tVar.f20839m.asBinder().unlinkToDeath(tVar.f20836j, 0);
    }

    private final RemoteException s() {
        return new RemoteException(String.valueOf(this.f20829c).concat(" : Binder has died."));
    }

    public final void t() {
        synchronized (this.f20832f) {
            try {
                for (xg.k kVar : this.f20831e) {
                    kVar.d(s());
                }
                this.f20831e.clear();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final Handler c() {
        Handler handler;
        Map map = f20826o;
        synchronized (map) {
            try {
                if (!map.containsKey(this.f20829c)) {
                    HandlerThread handlerThread = new HandlerThread(this.f20829c, 10);
                    handlerThread.start();
                    map.put(this.f20829c, new Handler(handlerThread.getLooper()));
                }
                handler = (Handler) map.get(this.f20829c);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return handler;
    }

    public final IInterface e() {
        return this.f20839m;
    }

    public final void p(j jVar, final xg.k kVar) {
        synchronized (this.f20832f) {
            this.f20831e.add(kVar);
            kVar.a().addOnCompleteListener(new OnCompleteListener() { // from class: di.k
                @Override // com.google.android.gms.tasks.OnCompleteListener
                public final void onComplete(Task task) {
                    t.this.q(kVar, task);
                }
            });
        }
        synchronized (this.f20832f) {
            try {
                if (this.f20837k.getAndIncrement() > 0) {
                    this.f20828b.a("Already connected to the service.", new Object[0]);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        c().post(new m(this, jVar.b(), jVar));
    }

    public final /* synthetic */ void q(xg.k kVar, Task task) {
        synchronized (this.f20832f) {
            this.f20831e.remove(kVar);
        }
    }

    public final void r(xg.k kVar) {
        synchronized (this.f20832f) {
            this.f20831e.remove(kVar);
        }
        synchronized (this.f20832f) {
            try {
                if (this.f20837k.get() > 0 && this.f20837k.decrementAndGet() > 0) {
                    this.f20828b.d("Leaving the connection open for other ongoing calls.", new Object[0]);
                    return;
                }
                c().post(new n(this));
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
