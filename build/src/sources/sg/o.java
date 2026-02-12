package sg;

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
    private static final Map f48105n = new HashMap();

    /* renamed from: a */
    private final Context f48106a;

    /* renamed from: b */
    private final d f48107b;

    /* renamed from: g */
    private boolean f48112g;

    /* renamed from: h */
    private final Intent f48113h;

    /* renamed from: l */
    private ServiceConnection f48117l;

    /* renamed from: m */
    private IInterface f48118m;

    /* renamed from: d */
    private final List f48109d = new ArrayList();

    /* renamed from: e */
    private final Set f48110e = new HashSet();

    /* renamed from: f */
    private final Object f48111f = new Object();

    /* renamed from: j */
    private final IBinder.DeathRecipient f48115j = new IBinder.DeathRecipient() { // from class: sg.f
        @Override // android.os.IBinder.DeathRecipient
        public final void binderDied() {
            o.j(o.this);
        }
    };

    /* renamed from: k */
    private final AtomicInteger f48116k = new AtomicInteger(0);

    /* renamed from: c */
    private final String f48108c = "AgeSignalsService";

    /* renamed from: i */
    private final WeakReference f48114i = new WeakReference(null);

    public o(Context context, d dVar, String str, Intent intent, xh.i iVar, j jVar) {
        this.f48106a = context;
        this.f48107b = dVar;
        this.f48113h = intent;
    }

    public static /* synthetic */ void j(o oVar) {
        d dVar = oVar.f48107b;
        dVar.c("reportBinderDeath", new Object[0]);
        android.support.v4.media.session.b.a(oVar.f48114i.get());
        dVar.c("%s : Binder has died.", oVar.f48108c);
        List<e> list = oVar.f48109d;
        for (e eVar : list) {
            eVar.a(oVar.v());
        }
        list.clear();
        synchronized (oVar.f48111f) {
            oVar.w();
        }
    }

    public static /* synthetic */ void k(o oVar, zg.k kVar, Task task) {
        synchronized (oVar.f48111f) {
            oVar.f48110e.remove(kVar);
        }
    }

    public static /* bridge */ /* synthetic */ void o(o oVar, final zg.k kVar) {
        oVar.f48110e.add(kVar);
        kVar.a().addOnCompleteListener(new OnCompleteListener() { // from class: sg.g
            @Override // com.google.android.gms.tasks.OnCompleteListener
            public final void onComplete(Task task) {
                o.k(o.this, kVar, task);
            }
        });
    }

    public static /* bridge */ /* synthetic */ void q(o oVar, e eVar) {
        if (oVar.f48118m == null && !oVar.f48112g) {
            d dVar = oVar.f48107b;
            dVar.c("Initiate binding to the service.", new Object[0]);
            List<e> list = oVar.f48109d;
            list.add(eVar);
            m mVar = new m(oVar, null);
            oVar.f48117l = mVar;
            oVar.f48112g = true;
            if (!oVar.f48106a.bindService(oVar.f48113h, mVar, 1)) {
                dVar.c("Failed to bind to the service.", new Object[0]);
                oVar.f48112g = false;
                for (e eVar2 : list) {
                    eVar2.a(new p());
                }
                list.clear();
            }
        } else if (oVar.f48112g) {
            oVar.f48107b.c("Waiting to bind to the service.", new Object[0]);
            oVar.f48109d.add(eVar);
        } else {
            eVar.run();
        }
    }

    public static /* bridge */ /* synthetic */ void r(o oVar) {
        oVar.f48107b.c("linkToDeath", new Object[0]);
        try {
            oVar.f48118m.asBinder().linkToDeath(oVar.f48115j, 0);
        } catch (RemoteException e10) {
            oVar.f48107b.b(e10, "linkToDeath failed", new Object[0]);
        }
    }

    public static /* bridge */ /* synthetic */ void s(o oVar) {
        oVar.f48107b.c("unlinkToDeath", new Object[0]);
        oVar.f48118m.asBinder().unlinkToDeath(oVar.f48115j, 0);
    }

    private final RemoteException v() {
        return new RemoteException(String.valueOf(this.f48108c).concat(" : Binder has died."));
    }

    public final void w() {
        Set<zg.k> set = this.f48110e;
        for (zg.k kVar : set) {
            kVar.d(v());
        }
        set.clear();
    }

    public final Handler c() {
        Handler handler;
        Map map = f48105n;
        synchronized (map) {
            try {
                String str = this.f48108c;
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
        return this.f48118m;
    }

    public final void t(e eVar, zg.k kVar) {
        c().post(new h(this, eVar.c(), kVar, eVar));
    }

    public final void u(zg.k kVar) {
        synchronized (this.f48111f) {
            this.f48110e.remove(kVar);
        }
        c().post(new i(this));
    }
}
