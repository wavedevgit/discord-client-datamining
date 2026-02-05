package qg;

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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o {

    /* renamed from: n */
    private static final Map f47892n = new HashMap();

    /* renamed from: a */
    private final Context f47893a;

    /* renamed from: b */
    private final d f47894b;

    /* renamed from: g */
    private boolean f47899g;

    /* renamed from: h */
    private final Intent f47900h;

    /* renamed from: l */
    private ServiceConnection f47904l;

    /* renamed from: m */
    private IInterface f47905m;

    /* renamed from: d */
    private final List f47896d = new ArrayList();

    /* renamed from: e */
    private final Set f47897e = new HashSet();

    /* renamed from: f */
    private final Object f47898f = new Object();

    /* renamed from: j */
    private final IBinder.DeathRecipient f47902j = new IBinder.DeathRecipient() { // from class: qg.f
        @Override // android.os.IBinder.DeathRecipient
        public final void binderDied() {
            o.j(o.this);
        }
    };

    /* renamed from: k */
    private final AtomicInteger f47903k = new AtomicInteger(0);

    /* renamed from: c */
    private final String f47895c = "AgeSignalsService";

    /* renamed from: i */
    private final WeakReference f47901i = new WeakReference(null);

    public o(Context context, d dVar, String str, Intent intent, th.i iVar, j jVar) {
        this.f47893a = context;
        this.f47894b = dVar;
        this.f47900h = intent;
    }

    public static /* synthetic */ void j(o oVar) {
        d dVar = oVar.f47894b;
        dVar.c("reportBinderDeath", new Object[0]);
        android.support.v4.media.session.b.a(oVar.f47901i.get());
        dVar.c("%s : Binder has died.", oVar.f47895c);
        List<e> list = oVar.f47896d;
        for (e eVar : list) {
            eVar.a(oVar.v());
        }
        list.clear();
        synchronized (oVar.f47898f) {
            oVar.w();
        }
    }

    public static /* synthetic */ void k(o oVar, xg.k kVar, Task task) {
        synchronized (oVar.f47898f) {
            oVar.f47897e.remove(kVar);
        }
    }

    public static /* bridge */ /* synthetic */ void o(o oVar, final xg.k kVar) {
        oVar.f47897e.add(kVar);
        kVar.a().addOnCompleteListener(new OnCompleteListener() { // from class: qg.g
            @Override // com.google.android.gms.tasks.OnCompleteListener
            public final void onComplete(Task task) {
                o.k(o.this, kVar, task);
            }
        });
    }

    public static /* bridge */ /* synthetic */ void q(o oVar, e eVar) {
        if (oVar.f47905m == null && !oVar.f47899g) {
            d dVar = oVar.f47894b;
            dVar.c("Initiate binding to the service.", new Object[0]);
            List<e> list = oVar.f47896d;
            list.add(eVar);
            m mVar = new m(oVar, null);
            oVar.f47904l = mVar;
            oVar.f47899g = true;
            if (!oVar.f47893a.bindService(oVar.f47900h, mVar, 1)) {
                dVar.c("Failed to bind to the service.", new Object[0]);
                oVar.f47899g = false;
                for (e eVar2 : list) {
                    eVar2.a(new p());
                }
                list.clear();
            }
        } else if (oVar.f47899g) {
            oVar.f47894b.c("Waiting to bind to the service.", new Object[0]);
            oVar.f47896d.add(eVar);
        } else {
            eVar.run();
        }
    }

    public static /* bridge */ /* synthetic */ void r(o oVar) {
        oVar.f47894b.c("linkToDeath", new Object[0]);
        try {
            oVar.f47905m.asBinder().linkToDeath(oVar.f47902j, 0);
        } catch (RemoteException e10) {
            oVar.f47894b.b(e10, "linkToDeath failed", new Object[0]);
        }
    }

    public static /* bridge */ /* synthetic */ void s(o oVar) {
        oVar.f47894b.c("unlinkToDeath", new Object[0]);
        oVar.f47905m.asBinder().unlinkToDeath(oVar.f47902j, 0);
    }

    private final RemoteException v() {
        return new RemoteException(String.valueOf(this.f47895c).concat(" : Binder has died."));
    }

    public final void w() {
        Set<xg.k> set = this.f47897e;
        for (xg.k kVar : set) {
            kVar.d(v());
        }
        set.clear();
    }

    public final Handler c() {
        Handler handler;
        Map map = f47892n;
        synchronized (map) {
            try {
                String str = this.f47895c;
                if (!map.containsKey(str)) {
                    HandlerThread handlerThread = new HandlerThread(str, 10);
                    handlerThread.start();
                    map.put(str, new Handler(handlerThread.getLooper()));
                }
                handler = (Handler) map.get(str);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return handler;
    }

    public final IInterface e() {
        return this.f47905m;
    }

    public final void t(e eVar, xg.k kVar) {
        c().post(new h(this, eVar.c(), kVar, eVar));
    }

    public final void u(xg.k kVar) {
        synchronized (this.f47898f) {
            this.f47897e.remove(kVar);
        }
        c().post(new i(this));
    }
}
