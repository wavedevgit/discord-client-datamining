package ai;

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
    private static final Map f640o = new HashMap();

    /* renamed from: a */
    private final Context f641a;

    /* renamed from: b */
    private final i f642b;

    /* renamed from: g */
    private boolean f647g;

    /* renamed from: h */
    private final Intent f648h;

    /* renamed from: l */
    private ServiceConnection f652l;

    /* renamed from: m */
    private IInterface f653m;

    /* renamed from: n */
    private final zh.h f654n;

    /* renamed from: d */
    private final List f644d = new ArrayList();

    /* renamed from: e */
    private final Set f645e = new HashSet();

    /* renamed from: f */
    private final Object f646f = new Object();

    /* renamed from: j */
    private final IBinder.DeathRecipient f650j = new IBinder.DeathRecipient() { // from class: ai.l
        @Override // android.os.IBinder.DeathRecipient
        public final void binderDied() {
            t.h(t.this);
        }
    };

    /* renamed from: k */
    private final AtomicInteger f651k = new AtomicInteger(0);

    /* renamed from: c */
    private final String f643c = "com.google.android.finsky.inappreviewservice.InAppReviewService";

    /* renamed from: i */
    private final WeakReference f649i = new WeakReference(null);

    public t(Context context, i iVar, String str, Intent intent, zh.h hVar, o oVar, byte[] bArr) {
        this.f641a = context;
        this.f642b = iVar;
        this.f648h = intent;
        this.f654n = hVar;
    }

    public static /* synthetic */ void h(t tVar) {
        tVar.f642b.d("reportBinderDeath", new Object[0]);
        android.support.v4.media.session.b.a(tVar.f649i.get());
        tVar.f642b.d("%s : Binder has died.", tVar.f643c);
        for (j jVar : tVar.f644d) {
            jVar.c(tVar.s());
        }
        tVar.f644d.clear();
        tVar.t();
    }

    public static /* bridge */ /* synthetic */ void m(t tVar, j jVar) {
        if (tVar.f653m == null && !tVar.f647g) {
            tVar.f642b.d("Initiate binding to the service.", new Object[0]);
            tVar.f644d.add(jVar);
            s sVar = new s(tVar, null);
            tVar.f652l = sVar;
            tVar.f647g = true;
            if (!tVar.f641a.bindService(tVar.f648h, sVar, 1)) {
                tVar.f642b.d("Failed to bind to the service.", new Object[0]);
                tVar.f647g = false;
                for (j jVar2 : tVar.f644d) {
                    jVar2.c(new u());
                }
                tVar.f644d.clear();
            }
        } else if (tVar.f647g) {
            tVar.f642b.d("Waiting to bind to the service.", new Object[0]);
            tVar.f644d.add(jVar);
        } else {
            jVar.run();
        }
    }

    public static /* bridge */ /* synthetic */ void n(t tVar) {
        tVar.f642b.d("linkToDeath", new Object[0]);
        try {
            tVar.f653m.asBinder().linkToDeath(tVar.f650j, 0);
        } catch (RemoteException e10) {
            tVar.f642b.c(e10, "linkToDeath failed", new Object[0]);
        }
    }

    public static /* bridge */ /* synthetic */ void o(t tVar) {
        tVar.f642b.d("unlinkToDeath", new Object[0]);
        tVar.f653m.asBinder().unlinkToDeath(tVar.f650j, 0);
    }

    private final RemoteException s() {
        return new RemoteException(String.valueOf(this.f643c).concat(" : Binder has died."));
    }

    public final void t() {
        synchronized (this.f646f) {
            try {
                for (wg.k kVar : this.f645e) {
                    kVar.d(s());
                }
                this.f645e.clear();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public final Handler c() {
        Handler handler;
        Map map = f640o;
        synchronized (map) {
            try {
                if (!map.containsKey(this.f643c)) {
                    HandlerThread handlerThread = new HandlerThread(this.f643c, 10);
                    handlerThread.start();
                    map.put(this.f643c, new Handler(handlerThread.getLooper()));
                }
                handler = (Handler) map.get(this.f643c);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return handler;
    }

    public final IInterface e() {
        return this.f653m;
    }

    public final void p(j jVar, final wg.k kVar) {
        synchronized (this.f646f) {
            this.f645e.add(kVar);
            kVar.a().addOnCompleteListener(new OnCompleteListener() { // from class: ai.k
                @Override // com.google.android.gms.tasks.OnCompleteListener
                public final void onComplete(Task task) {
                    t.this.q(kVar, task);
                }
            });
        }
        synchronized (this.f646f) {
            try {
                if (this.f651k.getAndIncrement() > 0) {
                    this.f642b.a("Already connected to the service.", new Object[0]);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        c().post(new m(this, jVar.b(), jVar));
    }

    public final /* synthetic */ void q(wg.k kVar, Task task) {
        synchronized (this.f646f) {
            this.f645e.remove(kVar);
        }
    }

    public final void r(wg.k kVar) {
        synchronized (this.f646f) {
            this.f645e.remove(kVar);
        }
        synchronized (this.f646f) {
            try {
                if (this.f651k.get() > 0 && this.f651k.decrementAndGet() > 0) {
                    this.f642b.d("Leaving the connection open for other ongoing calls.", new Object[0]);
                    return;
                }
                c().post(new n(this));
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
