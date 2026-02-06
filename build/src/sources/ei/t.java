package ei;

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
    private static final Map f21541o = new HashMap();

    /* renamed from: a */
    private final Context f21542a;

    /* renamed from: b */
    private final i f21543b;

    /* renamed from: g */
    private boolean f21548g;

    /* renamed from: h */
    private final Intent f21549h;

    /* renamed from: l */
    private ServiceConnection f21553l;

    /* renamed from: m */
    private IInterface f21554m;

    /* renamed from: n */
    private final di.h f21555n;

    /* renamed from: d */
    private final List f21545d = new ArrayList();

    /* renamed from: e */
    private final Set f21546e = new HashSet();

    /* renamed from: f */
    private final Object f21547f = new Object();

    /* renamed from: j */
    private final IBinder.DeathRecipient f21551j = new IBinder.DeathRecipient() { // from class: ei.l
        @Override // android.os.IBinder.DeathRecipient
        public final void binderDied() {
            t.h(t.this);
        }
    };

    /* renamed from: k */
    private final AtomicInteger f21552k = new AtomicInteger(0);

    /* renamed from: c */
    private final String f21544c = "com.google.android.finsky.inappreviewservice.InAppReviewService";

    /* renamed from: i */
    private final WeakReference f21550i = new WeakReference(null);

    public t(Context context, i iVar, String str, Intent intent, di.h hVar, o oVar, byte[] bArr) {
        this.f21542a = context;
        this.f21543b = iVar;
        this.f21549h = intent;
        this.f21555n = hVar;
    }

    public static /* synthetic */ void h(t tVar) {
        tVar.f21543b.d("reportBinderDeath", new Object[0]);
        android.support.v4.media.session.b.a(tVar.f21550i.get());
        tVar.f21543b.d("%s : Binder has died.", tVar.f21544c);
        for (j jVar : tVar.f21545d) {
            jVar.c(tVar.s());
        }
        tVar.f21545d.clear();
        tVar.t();
    }

    public static /* bridge */ /* synthetic */ void m(t tVar, j jVar) {
        if (tVar.f21554m == null && !tVar.f21548g) {
            tVar.f21543b.d("Initiate binding to the service.", new Object[0]);
            tVar.f21545d.add(jVar);
            s sVar = new s(tVar, null);
            tVar.f21553l = sVar;
            tVar.f21548g = true;
            if (!tVar.f21542a.bindService(tVar.f21549h, sVar, 1)) {
                tVar.f21543b.d("Failed to bind to the service.", new Object[0]);
                tVar.f21548g = false;
                for (j jVar2 : tVar.f21545d) {
                    jVar2.c(new u());
                }
                tVar.f21545d.clear();
            }
        } else if (tVar.f21548g) {
            tVar.f21543b.d("Waiting to bind to the service.", new Object[0]);
            tVar.f21545d.add(jVar);
        } else {
            jVar.run();
        }
    }

    public static /* bridge */ /* synthetic */ void n(t tVar) {
        tVar.f21543b.d("linkToDeath", new Object[0]);
        try {
            tVar.f21554m.asBinder().linkToDeath(tVar.f21551j, 0);
        } catch (RemoteException e10) {
            tVar.f21543b.c(e10, "linkToDeath failed", new Object[0]);
        }
    }

    public static /* bridge */ /* synthetic */ void o(t tVar) {
        tVar.f21543b.d("unlinkToDeath", new Object[0]);
        tVar.f21554m.asBinder().unlinkToDeath(tVar.f21551j, 0);
    }

    private final RemoteException s() {
        return new RemoteException(String.valueOf(this.f21544c).concat(" : Binder has died."));
    }

    public final void t() {
        synchronized (this.f21547f) {
            try {
                for (yg.k kVar : this.f21546e) {
                    kVar.d(s());
                }
                this.f21546e.clear();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final Handler c() {
        Handler handler;
        Map map = f21541o;
        synchronized (map) {
            try {
                if (!map.containsKey(this.f21544c)) {
                    HandlerThread handlerThread = new HandlerThread(this.f21544c, 10);
                    handlerThread.start();
                    map.put(this.f21544c, new Handler(handlerThread.getLooper()));
                }
                handler = (Handler) map.get(this.f21544c);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return handler;
    }

    public final IInterface e() {
        return this.f21554m;
    }

    public final void p(j jVar, final yg.k kVar) {
        synchronized (this.f21547f) {
            this.f21546e.add(kVar);
            kVar.a().addOnCompleteListener(new OnCompleteListener() { // from class: ei.k
                @Override // com.google.android.gms.tasks.OnCompleteListener
                public final void onComplete(Task task) {
                    t.this.q(kVar, task);
                }
            });
        }
        synchronized (this.f21547f) {
            try {
                if (this.f21552k.getAndIncrement() > 0) {
                    this.f21543b.a("Already connected to the service.", new Object[0]);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        c().post(new m(this, jVar.b(), jVar));
    }

    public final /* synthetic */ void q(yg.k kVar, Task task) {
        synchronized (this.f21547f) {
            this.f21546e.remove(kVar);
        }
    }

    public final void r(yg.k kVar) {
        synchronized (this.f21547f) {
            this.f21546e.remove(kVar);
        }
        synchronized (this.f21547f) {
            try {
                if (this.f21552k.get() > 0 && this.f21552k.decrementAndGet() > 0) {
                    this.f21543b.d("Leaving the connection open for other ongoing calls.", new Object[0]);
                    return;
                }
                c().post(new n(this));
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
