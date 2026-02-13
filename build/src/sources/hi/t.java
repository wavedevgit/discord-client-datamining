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
    private static final Map f27930o = new HashMap();

    /* renamed from: a */
    private final Context f27931a;

    /* renamed from: b */
    private final i f27932b;

    /* renamed from: g */
    private boolean f27937g;

    /* renamed from: h */
    private final Intent f27938h;

    /* renamed from: l */
    private ServiceConnection f27942l;

    /* renamed from: m */
    private IInterface f27943m;

    /* renamed from: n */
    private final gi.h f27944n;

    /* renamed from: d */
    private final List f27934d = new ArrayList();

    /* renamed from: e */
    private final Set f27935e = new HashSet();

    /* renamed from: f */
    private final Object f27936f = new Object();

    /* renamed from: j */
    private final IBinder.DeathRecipient f27940j = new IBinder.DeathRecipient() { // from class: hi.l
        @Override // android.os.IBinder.DeathRecipient
        public final void binderDied() {
            t.h(t.this);
        }
    };

    /* renamed from: k */
    private final AtomicInteger f27941k = new AtomicInteger(0);

    /* renamed from: c */
    private final String f27933c = "com.google.android.finsky.inappreviewservice.InAppReviewService";

    /* renamed from: i */
    private final WeakReference f27939i = new WeakReference(null);

    public t(Context context, i iVar, String str, Intent intent, gi.h hVar, o oVar, byte[] bArr) {
        this.f27931a = context;
        this.f27932b = iVar;
        this.f27938h = intent;
        this.f27944n = hVar;
    }

    public static /* synthetic */ void h(t tVar) {
        tVar.f27932b.d("reportBinderDeath", new Object[0]);
        android.support.v4.media.session.b.a(tVar.f27939i.get());
        tVar.f27932b.d("%s : Binder has died.", tVar.f27933c);
        for (j jVar : tVar.f27934d) {
            jVar.c(tVar.s());
        }
        tVar.f27934d.clear();
        tVar.t();
    }

    public static /* bridge */ /* synthetic */ void m(t tVar, j jVar) {
        if (tVar.f27943m == null && !tVar.f27937g) {
            tVar.f27932b.d("Initiate binding to the service.", new Object[0]);
            tVar.f27934d.add(jVar);
            s sVar = new s(tVar, null);
            tVar.f27942l = sVar;
            tVar.f27937g = true;
            if (!tVar.f27931a.bindService(tVar.f27938h, sVar, 1)) {
                tVar.f27932b.d("Failed to bind to the service.", new Object[0]);
                tVar.f27937g = false;
                for (j jVar2 : tVar.f27934d) {
                    jVar2.c(new u());
                }
                tVar.f27934d.clear();
            }
        } else if (tVar.f27937g) {
            tVar.f27932b.d("Waiting to bind to the service.", new Object[0]);
            tVar.f27934d.add(jVar);
        } else {
            jVar.run();
        }
    }

    public static /* bridge */ /* synthetic */ void n(t tVar) {
        tVar.f27932b.d("linkToDeath", new Object[0]);
        try {
            tVar.f27943m.asBinder().linkToDeath(tVar.f27940j, 0);
        } catch (RemoteException e10) {
            tVar.f27932b.c(e10, "linkToDeath failed", new Object[0]);
        }
    }

    public static /* bridge */ /* synthetic */ void o(t tVar) {
        tVar.f27932b.d("unlinkToDeath", new Object[0]);
        tVar.f27943m.asBinder().unlinkToDeath(tVar.f27940j, 0);
    }

    private final RemoteException s() {
        return new RemoteException(String.valueOf(this.f27933c).concat(" : Binder has died."));
    }

    public final void t() {
        synchronized (this.f27936f) {
            try {
                for (zg.k kVar : this.f27935e) {
                    kVar.d(s());
                }
                this.f27935e.clear();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final Handler c() {
        Handler handler;
        Map map = f27930o;
        synchronized (map) {
            try {
                if (!map.containsKey(this.f27933c)) {
                    HandlerThread handlerThread = new HandlerThread(this.f27933c, 10);
                    handlerThread.start();
                    map.put(this.f27933c, new Handler(handlerThread.getLooper()));
                }
                handler = (Handler) map.get(this.f27933c);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return handler;
    }

    public final IInterface e() {
        return this.f27943m;
    }

    public final void p(j jVar, final zg.k kVar) {
        synchronized (this.f27936f) {
            this.f27935e.add(kVar);
            kVar.a().addOnCompleteListener(new OnCompleteListener() { // from class: hi.k
                @Override // com.google.android.gms.tasks.OnCompleteListener
                public final void onComplete(Task task) {
                    t.this.q(kVar, task);
                }
            });
        }
        synchronized (this.f27936f) {
            try {
                if (this.f27941k.getAndIncrement() > 0) {
                    this.f27932b.a("Already connected to the service.", new Object[0]);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        c().post(new m(this, jVar.b(), jVar));
    }

    public final /* synthetic */ void q(zg.k kVar, Task task) {
        synchronized (this.f27936f) {
            this.f27935e.remove(kVar);
        }
    }

    public final void r(zg.k kVar) {
        synchronized (this.f27936f) {
            this.f27935e.remove(kVar);
        }
        synchronized (this.f27936f) {
            try {
                if (this.f27941k.get() > 0 && this.f27941k.decrementAndGet() > 0) {
                    this.f27932b.d("Leaving the connection open for other ongoing calls.", new Object[0]);
                    return;
                }
                c().post(new n(this));
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
