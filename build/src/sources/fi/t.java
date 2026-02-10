package fi;

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
    private static final Map f22649o = new HashMap();

    /* renamed from: a */
    private final Context f22650a;

    /* renamed from: b */
    private final i f22651b;

    /* renamed from: g */
    private boolean f22656g;

    /* renamed from: h */
    private final Intent f22657h;

    /* renamed from: l */
    private ServiceConnection f22661l;

    /* renamed from: m */
    private IInterface f22662m;

    /* renamed from: n */
    private final ei.h f22663n;

    /* renamed from: d */
    private final List f22653d = new ArrayList();

    /* renamed from: e */
    private final Set f22654e = new HashSet();

    /* renamed from: f */
    private final Object f22655f = new Object();

    /* renamed from: j */
    private final IBinder.DeathRecipient f22659j = new IBinder.DeathRecipient() { // from class: fi.l
        @Override // android.os.IBinder.DeathRecipient
        public final void binderDied() {
            t.h(t.this);
        }
    };

    /* renamed from: k */
    private final AtomicInteger f22660k = new AtomicInteger(0);

    /* renamed from: c */
    private final String f22652c = "com.google.android.finsky.inappreviewservice.InAppReviewService";

    /* renamed from: i */
    private final WeakReference f22658i = new WeakReference(null);

    public t(Context context, i iVar, String str, Intent intent, ei.h hVar, o oVar, byte[] bArr) {
        this.f22650a = context;
        this.f22651b = iVar;
        this.f22657h = intent;
        this.f22663n = hVar;
    }

    public static /* synthetic */ void h(t tVar) {
        tVar.f22651b.d("reportBinderDeath", new Object[0]);
        android.support.v4.media.session.b.a(tVar.f22658i.get());
        tVar.f22651b.d("%s : Binder has died.", tVar.f22652c);
        for (j jVar : tVar.f22653d) {
            jVar.c(tVar.s());
        }
        tVar.f22653d.clear();
        tVar.t();
    }

    public static /* bridge */ /* synthetic */ void m(t tVar, j jVar) {
        if (tVar.f22662m == null && !tVar.f22656g) {
            tVar.f22651b.d("Initiate binding to the service.", new Object[0]);
            tVar.f22653d.add(jVar);
            s sVar = new s(tVar, null);
            tVar.f22661l = sVar;
            tVar.f22656g = true;
            if (!tVar.f22650a.bindService(tVar.f22657h, sVar, 1)) {
                tVar.f22651b.d("Failed to bind to the service.", new Object[0]);
                tVar.f22656g = false;
                for (j jVar2 : tVar.f22653d) {
                    jVar2.c(new u());
                }
                tVar.f22653d.clear();
            }
        } else if (tVar.f22656g) {
            tVar.f22651b.d("Waiting to bind to the service.", new Object[0]);
            tVar.f22653d.add(jVar);
        } else {
            jVar.run();
        }
    }

    public static /* bridge */ /* synthetic */ void n(t tVar) {
        tVar.f22651b.d("linkToDeath", new Object[0]);
        try {
            tVar.f22662m.asBinder().linkToDeath(tVar.f22659j, 0);
        } catch (RemoteException e10) {
            tVar.f22651b.c(e10, "linkToDeath failed", new Object[0]);
        }
    }

    public static /* bridge */ /* synthetic */ void o(t tVar) {
        tVar.f22651b.d("unlinkToDeath", new Object[0]);
        tVar.f22662m.asBinder().unlinkToDeath(tVar.f22659j, 0);
    }

    private final RemoteException s() {
        return new RemoteException(String.valueOf(this.f22652c).concat(" : Binder has died."));
    }

    public final void t() {
        synchronized (this.f22655f) {
            try {
                for (zg.k kVar : this.f22654e) {
                    kVar.d(s());
                }
                this.f22654e.clear();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final Handler c() {
        Handler handler;
        Map map = f22649o;
        synchronized (map) {
            try {
                if (!map.containsKey(this.f22652c)) {
                    HandlerThread handlerThread = new HandlerThread(this.f22652c, 10);
                    handlerThread.start();
                    map.put(this.f22652c, new Handler(handlerThread.getLooper()));
                }
                handler = (Handler) map.get(this.f22652c);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return handler;
    }

    public final IInterface e() {
        return this.f22662m;
    }

    public final void p(j jVar, final zg.k kVar) {
        synchronized (this.f22655f) {
            this.f22654e.add(kVar);
            kVar.a().addOnCompleteListener(new OnCompleteListener() { // from class: fi.k
                @Override // com.google.android.gms.tasks.OnCompleteListener
                public final void onComplete(Task task) {
                    t.this.q(kVar, task);
                }
            });
        }
        synchronized (this.f22655f) {
            try {
                if (this.f22660k.getAndIncrement() > 0) {
                    this.f22651b.a("Already connected to the service.", new Object[0]);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        c().post(new m(this, jVar.b(), jVar));
    }

    public final /* synthetic */ void q(zg.k kVar, Task task) {
        synchronized (this.f22655f) {
            this.f22654e.remove(kVar);
        }
    }

    public final void r(zg.k kVar) {
        synchronized (this.f22655f) {
            this.f22654e.remove(kVar);
        }
        synchronized (this.f22655f) {
            try {
                if (this.f22660k.get() > 0 && this.f22660k.decrementAndGet() > 0) {
                    this.f22651b.d("Leaving the connection open for other ongoing calls.", new Object[0]);
                    return;
                }
                c().post(new n(this));
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
