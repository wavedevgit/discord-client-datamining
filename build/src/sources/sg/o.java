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
    private static final Map f48673n = new HashMap();

    /* renamed from: a */
    private final Context f48674a;

    /* renamed from: b */
    private final d f48675b;

    /* renamed from: g */
    private boolean f48680g;

    /* renamed from: h */
    private final Intent f48681h;

    /* renamed from: l */
    private ServiceConnection f48685l;

    /* renamed from: m */
    private IInterface f48686m;

    /* renamed from: d */
    private final List f48677d = new ArrayList();

    /* renamed from: e */
    private final Set f48678e = new HashSet();

    /* renamed from: f */
    private final Object f48679f = new Object();

    /* renamed from: j */
    private final IBinder.DeathRecipient f48683j = new IBinder.DeathRecipient() { // from class: sg.f
        @Override // android.os.IBinder.DeathRecipient
        public final void binderDied() {
            o.j(o.this);
        }
    };

    /* renamed from: k */
    private final AtomicInteger f48684k = new AtomicInteger(0);

    /* renamed from: c */
    private final String f48676c = "AgeSignalsService";

    /* renamed from: i */
    private final WeakReference f48682i = new WeakReference(null);

    public o(Context context, d dVar, String str, Intent intent, xh.i iVar, j jVar) {
        this.f48674a = context;
        this.f48675b = dVar;
        this.f48681h = intent;
    }

    public static /* synthetic */ void j(o oVar) {
        d dVar = oVar.f48675b;
        dVar.c("reportBinderDeath", new Object[0]);
        android.support.v4.media.session.b.a(oVar.f48682i.get());
        dVar.c("%s : Binder has died.", oVar.f48676c);
        List<e> list = oVar.f48677d;
        for (e eVar : list) {
            eVar.a(oVar.v());
        }
        list.clear();
        synchronized (oVar.f48679f) {
            oVar.w();
        }
    }

    public static /* synthetic */ void k(o oVar, zg.k kVar, Task task) {
        synchronized (oVar.f48679f) {
            oVar.f48678e.remove(kVar);
        }
    }

    public static /* bridge */ /* synthetic */ void o(o oVar, final zg.k kVar) {
        oVar.f48678e.add(kVar);
        kVar.a().addOnCompleteListener(new OnCompleteListener() { // from class: sg.g
            @Override // com.google.android.gms.tasks.OnCompleteListener
            public final void onComplete(Task task) {
                o.k(o.this, kVar, task);
            }
        });
    }

    public static /* bridge */ /* synthetic */ void q(o oVar, e eVar) {
        if (oVar.f48686m == null && !oVar.f48680g) {
            d dVar = oVar.f48675b;
            dVar.c("Initiate binding to the service.", new Object[0]);
            List<e> list = oVar.f48677d;
            list.add(eVar);
            m mVar = new m(oVar, null);
            oVar.f48685l = mVar;
            oVar.f48680g = true;
            if (!oVar.f48674a.bindService(oVar.f48681h, mVar, 1)) {
                dVar.c("Failed to bind to the service.", new Object[0]);
                oVar.f48680g = false;
                for (e eVar2 : list) {
                    eVar2.a(new p());
                }
                list.clear();
            }
        } else if (oVar.f48680g) {
            oVar.f48675b.c("Waiting to bind to the service.", new Object[0]);
            oVar.f48677d.add(eVar);
        } else {
            eVar.run();
        }
    }

    public static /* bridge */ /* synthetic */ void r(o oVar) {
        oVar.f48675b.c("linkToDeath", new Object[0]);
        try {
            oVar.f48686m.asBinder().linkToDeath(oVar.f48683j, 0);
        } catch (RemoteException e10) {
            oVar.f48675b.b(e10, "linkToDeath failed", new Object[0]);
        }
    }

    public static /* bridge */ /* synthetic */ void s(o oVar) {
        oVar.f48675b.c("unlinkToDeath", new Object[0]);
        oVar.f48686m.asBinder().unlinkToDeath(oVar.f48683j, 0);
    }

    private final RemoteException v() {
        return new RemoteException(String.valueOf(this.f48676c).concat(" : Binder has died."));
    }

    public final void w() {
        Set<zg.k> set = this.f48678e;
        for (zg.k kVar : set) {
            kVar.d(v());
        }
        set.clear();
    }

    public final Handler c() {
        Handler handler;
        Map map = f48673n;
        synchronized (map) {
            try {
                String str = this.f48676c;
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
        return this.f48686m;
    }

    public final void t(e eVar, zg.k kVar) {
        c().post(new h(this, eVar.c(), kVar, eVar));
    }

    public final void u(zg.k kVar) {
        synchronized (this.f48679f) {
            this.f48678e.remove(kVar);
        }
        c().post(new i(this));
    }
}
