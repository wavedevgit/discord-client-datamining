package rg;

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
    private static final Map f48963n = new HashMap();

    /* renamed from: a */
    private final Context f48964a;

    /* renamed from: b */
    private final d f48965b;

    /* renamed from: g */
    private boolean f48970g;

    /* renamed from: h */
    private final Intent f48971h;

    /* renamed from: l */
    private ServiceConnection f48975l;

    /* renamed from: m */
    private IInterface f48976m;

    /* renamed from: d */
    private final List f48967d = new ArrayList();

    /* renamed from: e */
    private final Set f48968e = new HashSet();

    /* renamed from: f */
    private final Object f48969f = new Object();

    /* renamed from: j */
    private final IBinder.DeathRecipient f48973j = new IBinder.DeathRecipient() { // from class: rg.f
        @Override // android.os.IBinder.DeathRecipient
        public final void binderDied() {
            o.j(o.this);
        }
    };

    /* renamed from: k */
    private final AtomicInteger f48974k = new AtomicInteger(0);

    /* renamed from: c */
    private final String f48966c = "AgeSignalsService";

    /* renamed from: i */
    private final WeakReference f48972i = new WeakReference(null);

    public o(Context context, d dVar, String str, Intent intent, uh.i iVar, j jVar) {
        this.f48964a = context;
        this.f48965b = dVar;
        this.f48971h = intent;
    }

    public static /* synthetic */ void j(o oVar) {
        d dVar = oVar.f48965b;
        dVar.c("reportBinderDeath", new Object[0]);
        android.support.v4.media.session.b.a(oVar.f48972i.get());
        dVar.c("%s : Binder has died.", oVar.f48966c);
        List<e> list = oVar.f48967d;
        for (e eVar : list) {
            eVar.a(oVar.v());
        }
        list.clear();
        synchronized (oVar.f48969f) {
            oVar.w();
        }
    }

    public static /* synthetic */ void k(o oVar, yg.k kVar, Task task) {
        synchronized (oVar.f48969f) {
            oVar.f48968e.remove(kVar);
        }
    }

    public static /* bridge */ /* synthetic */ void o(o oVar, final yg.k kVar) {
        oVar.f48968e.add(kVar);
        kVar.a().addOnCompleteListener(new OnCompleteListener() { // from class: rg.g
            @Override // com.google.android.gms.tasks.OnCompleteListener
            public final void onComplete(Task task) {
                o.k(o.this, kVar, task);
            }
        });
    }

    public static /* bridge */ /* synthetic */ void q(o oVar, e eVar) {
        if (oVar.f48976m == null && !oVar.f48970g) {
            d dVar = oVar.f48965b;
            dVar.c("Initiate binding to the service.", new Object[0]);
            List<e> list = oVar.f48967d;
            list.add(eVar);
            m mVar = new m(oVar, null);
            oVar.f48975l = mVar;
            oVar.f48970g = true;
            if (!oVar.f48964a.bindService(oVar.f48971h, mVar, 1)) {
                dVar.c("Failed to bind to the service.", new Object[0]);
                oVar.f48970g = false;
                for (e eVar2 : list) {
                    eVar2.a(new p());
                }
                list.clear();
            }
        } else if (oVar.f48970g) {
            oVar.f48965b.c("Waiting to bind to the service.", new Object[0]);
            oVar.f48967d.add(eVar);
        } else {
            eVar.run();
        }
    }

    public static /* bridge */ /* synthetic */ void r(o oVar) {
        oVar.f48965b.c("linkToDeath", new Object[0]);
        try {
            oVar.f48976m.asBinder().linkToDeath(oVar.f48973j, 0);
        } catch (RemoteException e10) {
            oVar.f48965b.b(e10, "linkToDeath failed", new Object[0]);
        }
    }

    public static /* bridge */ /* synthetic */ void s(o oVar) {
        oVar.f48965b.c("unlinkToDeath", new Object[0]);
        oVar.f48976m.asBinder().unlinkToDeath(oVar.f48973j, 0);
    }

    private final RemoteException v() {
        return new RemoteException(String.valueOf(this.f48966c).concat(" : Binder has died."));
    }

    public final void w() {
        Set<yg.k> set = this.f48968e;
        for (yg.k kVar : set) {
            kVar.d(v());
        }
        set.clear();
    }

    public final Handler c() {
        Handler handler;
        Map map = f48963n;
        synchronized (map) {
            try {
                String str = this.f48966c;
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
        return this.f48976m;
    }

    public final void t(e eVar, yg.k kVar) {
        c().post(new h(this, eVar.c(), kVar, eVar));
    }

    public final void u(yg.k kVar) {
        synchronized (this.f48969f) {
            this.f48968e.remove(kVar);
        }
        c().post(new i(this));
    }
}
