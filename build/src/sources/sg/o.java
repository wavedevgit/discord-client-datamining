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
    private static final Map f49788n = new HashMap();

    /* renamed from: a */
    private final Context f49789a;

    /* renamed from: b */
    private final d f49790b;

    /* renamed from: g */
    private boolean f49795g;

    /* renamed from: h */
    private final Intent f49796h;

    /* renamed from: l */
    private ServiceConnection f49800l;

    /* renamed from: m */
    private IInterface f49801m;

    /* renamed from: d */
    private final List f49792d = new ArrayList();

    /* renamed from: e */
    private final Set f49793e = new HashSet();

    /* renamed from: f */
    private final Object f49794f = new Object();

    /* renamed from: j */
    private final IBinder.DeathRecipient f49798j = new IBinder.DeathRecipient() { // from class: sg.f
        @Override // android.os.IBinder.DeathRecipient
        public final void binderDied() {
            o.j(o.this);
        }
    };

    /* renamed from: k */
    private final AtomicInteger f49799k = new AtomicInteger(0);

    /* renamed from: c */
    private final String f49791c = "AgeSignalsService";

    /* renamed from: i */
    private final WeakReference f49797i = new WeakReference(null);

    public o(Context context, d dVar, String str, Intent intent, vh.i iVar, j jVar) {
        this.f49789a = context;
        this.f49790b = dVar;
        this.f49796h = intent;
    }

    public static /* synthetic */ void j(o oVar) {
        d dVar = oVar.f49790b;
        dVar.c("reportBinderDeath", new Object[0]);
        android.support.v4.media.session.b.a(oVar.f49797i.get());
        dVar.c("%s : Binder has died.", oVar.f49791c);
        List<e> list = oVar.f49792d;
        for (e eVar : list) {
            eVar.a(oVar.v());
        }
        list.clear();
        synchronized (oVar.f49794f) {
            oVar.w();
        }
    }

    public static /* synthetic */ void k(o oVar, zg.k kVar, Task task) {
        synchronized (oVar.f49794f) {
            oVar.f49793e.remove(kVar);
        }
    }

    public static /* bridge */ /* synthetic */ void o(o oVar, final zg.k kVar) {
        oVar.f49793e.add(kVar);
        kVar.a().addOnCompleteListener(new OnCompleteListener() { // from class: sg.g
            @Override // com.google.android.gms.tasks.OnCompleteListener
            public final void onComplete(Task task) {
                o.k(o.this, kVar, task);
            }
        });
    }

    public static /* bridge */ /* synthetic */ void q(o oVar, e eVar) {
        if (oVar.f49801m == null && !oVar.f49795g) {
            d dVar = oVar.f49790b;
            dVar.c("Initiate binding to the service.", new Object[0]);
            List<e> list = oVar.f49792d;
            list.add(eVar);
            m mVar = new m(oVar, null);
            oVar.f49800l = mVar;
            oVar.f49795g = true;
            if (!oVar.f49789a.bindService(oVar.f49796h, mVar, 1)) {
                dVar.c("Failed to bind to the service.", new Object[0]);
                oVar.f49795g = false;
                for (e eVar2 : list) {
                    eVar2.a(new p());
                }
                list.clear();
            }
        } else if (oVar.f49795g) {
            oVar.f49790b.c("Waiting to bind to the service.", new Object[0]);
            oVar.f49792d.add(eVar);
        } else {
            eVar.run();
        }
    }

    public static /* bridge */ /* synthetic */ void r(o oVar) {
        oVar.f49790b.c("linkToDeath", new Object[0]);
        try {
            oVar.f49801m.asBinder().linkToDeath(oVar.f49798j, 0);
        } catch (RemoteException e10) {
            oVar.f49790b.b(e10, "linkToDeath failed", new Object[0]);
        }
    }

    public static /* bridge */ /* synthetic */ void s(o oVar) {
        oVar.f49790b.c("unlinkToDeath", new Object[0]);
        oVar.f49801m.asBinder().unlinkToDeath(oVar.f49798j, 0);
    }

    private final RemoteException v() {
        return new RemoteException(String.valueOf(this.f49791c).concat(" : Binder has died."));
    }

    public final void w() {
        Set<zg.k> set = this.f49793e;
        for (zg.k kVar : set) {
            kVar.d(v());
        }
        set.clear();
    }

    public final Handler c() {
        Handler handler;
        Map map = f49788n;
        synchronized (map) {
            try {
                String str = this.f49791c;
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
        return this.f49801m;
    }

    public final void t(e eVar, zg.k kVar) {
        c().post(new h(this, eVar.c(), kVar, eVar));
    }

    public final void u(zg.k kVar) {
        synchronized (this.f49794f) {
            this.f49793e.remove(kVar);
        }
        c().post(new i(this));
    }
}
