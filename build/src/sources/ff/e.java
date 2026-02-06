package ff;

import android.app.Application;
import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import android.util.Log;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
import com.google.android.gms.common.api.Status;
import com.google.android.gms.tasks.Task;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executor;
import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e implements Handler.Callback {
    public static final Status A = new Status(4, "Sign-out occurred while this API call was in progress.");
    private static final Status B = new Status(4, "The user must be signed in to make this API call.");
    private static final Object C = new Object();
    private static e D;

    /* renamed from: i  reason: collision with root package name */
    private gf.u f23200i;

    /* renamed from: o  reason: collision with root package name */
    private gf.w f23201o;

    /* renamed from: p  reason: collision with root package name */
    private final Context f23202p;

    /* renamed from: q  reason: collision with root package name */
    private final com.google.android.gms.common.f f23203q;

    /* renamed from: r  reason: collision with root package name */
    private final gf.h0 f23204r;

    /* renamed from: y  reason: collision with root package name */
    private final Handler f23211y;

    /* renamed from: z  reason: collision with root package name */
    private volatile boolean f23212z;

    /* renamed from: d  reason: collision with root package name */
    private long f23198d = 10000;

    /* renamed from: e  reason: collision with root package name */
    private boolean f23199e = false;

    /* renamed from: s  reason: collision with root package name */
    private final AtomicInteger f23205s = new AtomicInteger(1);

    /* renamed from: t  reason: collision with root package name */
    private final AtomicInteger f23206t = new AtomicInteger(0);

    /* renamed from: u  reason: collision with root package name */
    private final Map f23207u = new ConcurrentHashMap(5, 0.75f, 1);

    /* renamed from: v  reason: collision with root package name */
    private w f23208v = null;

    /* renamed from: w  reason: collision with root package name */
    private final Set f23209w = new u0.b();

    /* renamed from: x  reason: collision with root package name */
    private final Set f23210x = new u0.b();

    private e(Context context, Looper looper, com.google.android.gms.common.f fVar) {
        this.f23212z = true;
        this.f23202p = context;
        fg.h hVar = new fg.h(looper, this);
        this.f23211y = hVar;
        this.f23203q = fVar;
        this.f23204r = new gf.h0(fVar);
        if (com.google.android.gms.common.util.g.a(context)) {
            this.f23212z = false;
        }
        hVar.sendMessage(hVar.obtainMessage(6));
    }

    public static void a() {
        synchronized (C) {
            try {
                e eVar = D;
                if (eVar != null) {
                    eVar.f23206t.incrementAndGet();
                    Handler handler = eVar.f23211y;
                    handler.sendMessageAtFrontOfQueue(handler.obtainMessage(10));
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static Status g(b bVar, com.google.android.gms.common.b bVar2) {
        String b10 = bVar.b();
        String valueOf = String.valueOf(bVar2);
        return new Status(bVar2, "API: " + b10 + " is not available on this device. Connection failed with: " + valueOf);
    }

    private final e0 h(ef.d dVar) {
        Map map = this.f23207u;
        b t10 = dVar.t();
        e0 e0Var = (e0) map.get(t10);
        if (e0Var == null) {
            e0Var = new e0(this, dVar);
            this.f23207u.put(t10, e0Var);
        }
        if (e0Var.a()) {
            this.f23210x.add(t10);
        }
        e0Var.E();
        return e0Var;
    }

    private final gf.w i() {
        if (this.f23201o == null) {
            this.f23201o = gf.v.a(this.f23202p);
        }
        return this.f23201o;
    }

    private final void j() {
        gf.u uVar = this.f23200i;
        if (uVar != null) {
            if (uVar.b() > 0 || e()) {
                i().d(uVar);
            }
            this.f23200i = null;
        }
    }

    private final void k(yg.k kVar, int i10, ef.d dVar) {
        n0 a10;
        if (i10 != 0 && (a10 = n0.a(this, i10, dVar.t())) != null) {
            Task a11 = kVar.a();
            final Handler handler = this.f23211y;
            handler.getClass();
            a11.c(new Executor() { // from class: ff.y
                @Override // java.util.concurrent.Executor
                public final void execute(Runnable runnable) {
                    handler.post(runnable);
                }
            }, a10);
        }
    }

    public static e u(Context context) {
        e eVar;
        synchronized (C) {
            try {
                if (D == null) {
                    D = new e(context.getApplicationContext(), gf.h.b().getLooper(), com.google.android.gms.common.f.n());
                }
                eVar = D;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return eVar;
    }

    public final void A(ef.d dVar, int i10, com.google.android.gms.common.api.internal.a aVar) {
        this.f23211y.sendMessage(this.f23211y.obtainMessage(4, new p0(new y0(i10, aVar), this.f23206t.get(), dVar)));
    }

    public final void B(ef.d dVar, int i10, q qVar, yg.k kVar, o oVar) {
        k(kVar, qVar.d(), dVar);
        this.f23211y.sendMessage(this.f23211y.obtainMessage(4, new p0(new z0(i10, qVar, kVar, oVar), this.f23206t.get(), dVar)));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void C(gf.n nVar, int i10, long j10, int i11) {
        this.f23211y.sendMessage(this.f23211y.obtainMessage(18, new o0(nVar, i10, j10, i11)));
    }

    public final void D(com.google.android.gms.common.b bVar, int i10) {
        if (!f(bVar, i10)) {
            Handler handler = this.f23211y;
            handler.sendMessage(handler.obtainMessage(5, i10, 0, bVar));
        }
    }

    public final void E() {
        Handler handler = this.f23211y;
        handler.sendMessage(handler.obtainMessage(3));
    }

    public final void F(ef.d dVar) {
        Handler handler = this.f23211y;
        handler.sendMessage(handler.obtainMessage(7, dVar));
    }

    public final void b(w wVar) {
        synchronized (C) {
            try {
                if (this.f23208v != wVar) {
                    this.f23208v = wVar;
                    this.f23209w.clear();
                }
                this.f23209w.addAll(wVar.t());
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c(w wVar) {
        synchronized (C) {
            try {
                if (this.f23208v == wVar) {
                    this.f23208v = null;
                    this.f23209w.clear();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean e() {
        if (this.f23199e) {
            return false;
        }
        gf.s a10 = gf.r.b().a();
        if (a10 != null && !a10.d()) {
            return false;
        }
        int a11 = this.f23204r.a(this.f23202p, 203400000);
        if (a11 != -1 && a11 != 0) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean f(com.google.android.gms.common.b bVar, int i10) {
        return this.f23203q.x(this.f23202p, bVar, i10);
    }

    @Override // android.os.Handler.Callback
    public final boolean handleMessage(Message message) {
        b bVar;
        b bVar2;
        b bVar3;
        b bVar4;
        int i10 = message.what;
        long j10 = LogThrottleSingleton.RATE_LIMIT_FIVE_MINUTES;
        e0 e0Var = null;
        switch (i10) {
            case 1:
                if (true == ((Boolean) message.obj).booleanValue()) {
                    j10 = 10000;
                }
                this.f23198d = j10;
                this.f23211y.removeMessages(12);
                for (b bVar5 : this.f23207u.keySet()) {
                    Handler handler = this.f23211y;
                    handler.sendMessageDelayed(handler.obtainMessage(12, bVar5), this.f23198d);
                }
                break;
            case 2:
                android.support.v4.media.session.b.a(message.obj);
                throw null;
            case 3:
                for (e0 e0Var2 : this.f23207u.values()) {
                    e0Var2.D();
                    e0Var2.E();
                }
                break;
            case 4:
            case 8:
            case 13:
                p0 p0Var = (p0) message.obj;
                e0 e0Var3 = (e0) this.f23207u.get(p0Var.f23268c.t());
                if (e0Var3 == null) {
                    e0Var3 = h(p0Var.f23268c);
                }
                if (e0Var3.a() && this.f23206t.get() != p0Var.f23267b) {
                    p0Var.f23266a.a(A);
                    e0Var3.K();
                    break;
                } else {
                    e0Var3.F(p0Var.f23266a);
                    break;
                }
            case 5:
                int i11 = message.arg1;
                com.google.android.gms.common.b bVar6 = (com.google.android.gms.common.b) message.obj;
                Iterator it = this.f23207u.values().iterator();
                while (true) {
                    if (it.hasNext()) {
                        e0 e0Var4 = (e0) it.next();
                        if (e0Var4.s() == i11) {
                            e0Var = e0Var4;
                        }
                    }
                }
                if (e0Var != null) {
                    if (bVar6.c() == 13) {
                        String e10 = this.f23203q.e(bVar6.c());
                        String d10 = bVar6.d();
                        e0.y(e0Var, new Status(17, "Error resolution was canceled by the user, original error message: " + e10 + ": " + d10));
                        break;
                    } else {
                        e0.y(e0Var, g(e0.w(e0Var), bVar6));
                        break;
                    }
                } else {
                    Log.wtf("GoogleApiManager", "Could not find API instance " + i11 + " while trying to fail enqueued calls.", new Exception());
                    break;
                }
            case 6:
                if (this.f23202p.getApplicationContext() instanceof Application) {
                    c.c((Application) this.f23202p.getApplicationContext());
                    c.b().a(new z(this));
                    if (!c.b().e(true)) {
                        this.f23198d = LogThrottleSingleton.RATE_LIMIT_FIVE_MINUTES;
                        break;
                    }
                }
                break;
            case 7:
                h((ef.d) message.obj);
                break;
            case 9:
                if (this.f23207u.containsKey(message.obj)) {
                    ((e0) this.f23207u.get(message.obj)).J();
                    break;
                }
                break;
            case 10:
                for (b bVar7 : this.f23210x) {
                    e0 e0Var5 = (e0) this.f23207u.remove(bVar7);
                    if (e0Var5 != null) {
                        e0Var5.K();
                    }
                }
                this.f23210x.clear();
                break;
            case 11:
                if (this.f23207u.containsKey(message.obj)) {
                    ((e0) this.f23207u.get(message.obj)).L();
                    break;
                }
                break;
            case 12:
                if (this.f23207u.containsKey(message.obj)) {
                    ((e0) this.f23207u.get(message.obj)).b();
                    break;
                }
                break;
            case 14:
                android.support.v4.media.session.b.a(message.obj);
                throw null;
            case 15:
                g0 g0Var = (g0) message.obj;
                Map map = this.f23207u;
                bVar = g0Var.f23234a;
                if (map.containsKey(bVar)) {
                    Map map2 = this.f23207u;
                    bVar2 = g0Var.f23234a;
                    e0.B((e0) map2.get(bVar2), g0Var);
                    break;
                }
                break;
            case 16:
                g0 g0Var2 = (g0) message.obj;
                Map map3 = this.f23207u;
                bVar3 = g0Var2.f23234a;
                if (map3.containsKey(bVar3)) {
                    Map map4 = this.f23207u;
                    bVar4 = g0Var2.f23234a;
                    e0.C((e0) map4.get(bVar4), g0Var2);
                    break;
                }
                break;
            case 17:
                j();
                break;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                o0 o0Var = (o0) message.obj;
                if (o0Var.f23264c == 0) {
                    i().d(new gf.u(o0Var.f23263b, Arrays.asList(o0Var.f23262a)));
                    break;
                } else {
                    gf.u uVar = this.f23200i;
                    if (uVar != null) {
                        List c10 = uVar.c();
                        if (uVar.b() == o0Var.f23263b && (c10 == null || c10.size() < o0Var.f23265d)) {
                            this.f23200i.d(o0Var.f23262a);
                        } else {
                            this.f23211y.removeMessages(17);
                            j();
                        }
                    }
                    if (this.f23200i == null) {
                        ArrayList arrayList = new ArrayList();
                        arrayList.add(o0Var.f23262a);
                        this.f23200i = new gf.u(o0Var.f23263b, arrayList);
                        Handler handler2 = this.f23211y;
                        handler2.sendMessageDelayed(handler2.obtainMessage(17), o0Var.f23264c);
                        break;
                    }
                }
                break;
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                this.f23199e = false;
                break;
            default:
                Log.w("GoogleApiManager", "Unknown message id: " + i10);
                return false;
        }
        return true;
    }

    public final int l() {
        return this.f23205s.getAndIncrement();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final e0 t(b bVar) {
        return (e0) this.f23207u.get(bVar);
    }
}
