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
    private gf.u f23874i;

    /* renamed from: o  reason: collision with root package name */
    private gf.w f23875o;

    /* renamed from: p  reason: collision with root package name */
    private final Context f23876p;

    /* renamed from: q  reason: collision with root package name */
    private final com.google.android.gms.common.f f23877q;

    /* renamed from: r  reason: collision with root package name */
    private final gf.h0 f23878r;

    /* renamed from: y  reason: collision with root package name */
    private final Handler f23885y;

    /* renamed from: z  reason: collision with root package name */
    private volatile boolean f23886z;

    /* renamed from: d  reason: collision with root package name */
    private long f23872d = 10000;

    /* renamed from: e  reason: collision with root package name */
    private boolean f23873e = false;

    /* renamed from: s  reason: collision with root package name */
    private final AtomicInteger f23879s = new AtomicInteger(1);

    /* renamed from: t  reason: collision with root package name */
    private final AtomicInteger f23880t = new AtomicInteger(0);

    /* renamed from: u  reason: collision with root package name */
    private final Map f23881u = new ConcurrentHashMap(5, 0.75f, 1);

    /* renamed from: v  reason: collision with root package name */
    private w f23882v = null;

    /* renamed from: w  reason: collision with root package name */
    private final Set f23883w = new u0.b();

    /* renamed from: x  reason: collision with root package name */
    private final Set f23884x = new u0.b();

    private e(Context context, Looper looper, com.google.android.gms.common.f fVar) {
        this.f23886z = true;
        this.f23876p = context;
        fg.h hVar = new fg.h(looper, this);
        this.f23885y = hVar;
        this.f23877q = fVar;
        this.f23878r = new gf.h0(fVar);
        if (com.google.android.gms.common.util.g.a(context)) {
            this.f23886z = false;
        }
        hVar.sendMessage(hVar.obtainMessage(6));
    }

    public static void a() {
        synchronized (C) {
            try {
                e eVar = D;
                if (eVar != null) {
                    eVar.f23880t.incrementAndGet();
                    Handler handler = eVar.f23885y;
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
        Map map = this.f23881u;
        b t10 = dVar.t();
        e0 e0Var = (e0) map.get(t10);
        if (e0Var == null) {
            e0Var = new e0(this, dVar);
            this.f23881u.put(t10, e0Var);
        }
        if (e0Var.a()) {
            this.f23884x.add(t10);
        }
        e0Var.E();
        return e0Var;
    }

    private final gf.w i() {
        if (this.f23875o == null) {
            this.f23875o = gf.v.a(this.f23876p);
        }
        return this.f23875o;
    }

    private final void j() {
        gf.u uVar = this.f23874i;
        if (uVar != null) {
            if (uVar.b() > 0 || e()) {
                i().d(uVar);
            }
            this.f23874i = null;
        }
    }

    private final void k(wg.k kVar, int i10, ef.d dVar) {
        n0 a10;
        if (i10 != 0 && (a10 = n0.a(this, i10, dVar.t())) != null) {
            Task a11 = kVar.a();
            final Handler handler = this.f23885y;
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
                    D = new e(context.getApplicationContext(), gf.h.b().getLooper(), com.google.android.gms.common.f.m());
                }
                eVar = D;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return eVar;
    }

    public final void A(ef.d dVar, int i10, com.google.android.gms.common.api.internal.a aVar) {
        this.f23885y.sendMessage(this.f23885y.obtainMessage(4, new p0(new y0(i10, aVar), this.f23880t.get(), dVar)));
    }

    public final void B(ef.d dVar, int i10, q qVar, wg.k kVar, o oVar) {
        k(kVar, qVar.d(), dVar);
        this.f23885y.sendMessage(this.f23885y.obtainMessage(4, new p0(new z0(i10, qVar, kVar, oVar), this.f23880t.get(), dVar)));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void C(gf.n nVar, int i10, long j10, int i11) {
        this.f23885y.sendMessage(this.f23885y.obtainMessage(18, new o0(nVar, i10, j10, i11)));
    }

    public final void D(com.google.android.gms.common.b bVar, int i10) {
        if (!f(bVar, i10)) {
            Handler handler = this.f23885y;
            handler.sendMessage(handler.obtainMessage(5, i10, 0, bVar));
        }
    }

    public final void E() {
        Handler handler = this.f23885y;
        handler.sendMessage(handler.obtainMessage(3));
    }

    public final void F(ef.d dVar) {
        Handler handler = this.f23885y;
        handler.sendMessage(handler.obtainMessage(7, dVar));
    }

    public final void b(w wVar) {
        synchronized (C) {
            try {
                if (this.f23882v != wVar) {
                    this.f23882v = wVar;
                    this.f23883w.clear();
                }
                this.f23883w.addAll(wVar.t());
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void c(w wVar) {
        synchronized (C) {
            try {
                if (this.f23882v == wVar) {
                    this.f23882v = null;
                    this.f23883w.clear();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean e() {
        if (this.f23873e) {
            return false;
        }
        gf.s a10 = gf.r.b().a();
        if (a10 != null && !a10.d()) {
            return false;
        }
        int a11 = this.f23878r.a(this.f23876p, 203400000);
        if (a11 != -1 && a11 != 0) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean f(com.google.android.gms.common.b bVar, int i10) {
        return this.f23877q.w(this.f23876p, bVar, i10);
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
                this.f23872d = j10;
                this.f23885y.removeMessages(12);
                for (b bVar5 : this.f23881u.keySet()) {
                    Handler handler = this.f23885y;
                    handler.sendMessageDelayed(handler.obtainMessage(12, bVar5), this.f23872d);
                }
                break;
            case 2:
                android.support.v4.media.session.b.a(message.obj);
                throw null;
            case 3:
                for (e0 e0Var2 : this.f23881u.values()) {
                    e0Var2.D();
                    e0Var2.E();
                }
                break;
            case 4:
            case 8:
            case 13:
                p0 p0Var = (p0) message.obj;
                e0 e0Var3 = (e0) this.f23881u.get(p0Var.f23942c.t());
                if (e0Var3 == null) {
                    e0Var3 = h(p0Var.f23942c);
                }
                if (e0Var3.a() && this.f23880t.get() != p0Var.f23941b) {
                    p0Var.f23940a.a(A);
                    e0Var3.K();
                    break;
                } else {
                    e0Var3.F(p0Var.f23940a);
                    break;
                }
            case 5:
                int i11 = message.arg1;
                com.google.android.gms.common.b bVar6 = (com.google.android.gms.common.b) message.obj;
                Iterator it = this.f23881u.values().iterator();
                while (true) {
                    if (it.hasNext()) {
                        e0 e0Var4 = (e0) it.next();
                        if (e0Var4.s() == i11) {
                            e0Var = e0Var4;
                        }
                    }
                }
                if (e0Var != null) {
                    if (bVar6.b() == 13) {
                        String e10 = this.f23877q.e(bVar6.b());
                        String c10 = bVar6.c();
                        e0.y(e0Var, new Status(17, "Error resolution was canceled by the user, original error message: " + e10 + ": " + c10));
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
                if (this.f23876p.getApplicationContext() instanceof Application) {
                    c.c((Application) this.f23876p.getApplicationContext());
                    c.b().a(new z(this));
                    if (!c.b().e(true)) {
                        this.f23872d = LogThrottleSingleton.RATE_LIMIT_FIVE_MINUTES;
                        break;
                    }
                }
                break;
            case 7:
                h((ef.d) message.obj);
                break;
            case 9:
                if (this.f23881u.containsKey(message.obj)) {
                    ((e0) this.f23881u.get(message.obj)).J();
                    break;
                }
                break;
            case 10:
                for (b bVar7 : this.f23884x) {
                    e0 e0Var5 = (e0) this.f23881u.remove(bVar7);
                    if (e0Var5 != null) {
                        e0Var5.K();
                    }
                }
                this.f23884x.clear();
                break;
            case 11:
                if (this.f23881u.containsKey(message.obj)) {
                    ((e0) this.f23881u.get(message.obj)).L();
                    break;
                }
                break;
            case 12:
                if (this.f23881u.containsKey(message.obj)) {
                    ((e0) this.f23881u.get(message.obj)).b();
                    break;
                }
                break;
            case 14:
                android.support.v4.media.session.b.a(message.obj);
                throw null;
            case 15:
                g0 g0Var = (g0) message.obj;
                Map map = this.f23881u;
                bVar = g0Var.f23908a;
                if (map.containsKey(bVar)) {
                    Map map2 = this.f23881u;
                    bVar2 = g0Var.f23908a;
                    e0.B((e0) map2.get(bVar2), g0Var);
                    break;
                }
                break;
            case 16:
                g0 g0Var2 = (g0) message.obj;
                Map map3 = this.f23881u;
                bVar3 = g0Var2.f23908a;
                if (map3.containsKey(bVar3)) {
                    Map map4 = this.f23881u;
                    bVar4 = g0Var2.f23908a;
                    e0.C((e0) map4.get(bVar4), g0Var2);
                    break;
                }
                break;
            case 17:
                j();
                break;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                o0 o0Var = (o0) message.obj;
                if (o0Var.f23938c == 0) {
                    i().d(new gf.u(o0Var.f23937b, Arrays.asList(o0Var.f23936a)));
                    break;
                } else {
                    gf.u uVar = this.f23874i;
                    if (uVar != null) {
                        List c11 = uVar.c();
                        if (uVar.b() == o0Var.f23937b && (c11 == null || c11.size() < o0Var.f23939d)) {
                            this.f23874i.d(o0Var.f23936a);
                        } else {
                            this.f23885y.removeMessages(17);
                            j();
                        }
                    }
                    if (this.f23874i == null) {
                        ArrayList arrayList = new ArrayList();
                        arrayList.add(o0Var.f23936a);
                        this.f23874i = new gf.u(o0Var.f23937b, arrayList);
                        Handler handler2 = this.f23885y;
                        handler2.sendMessageDelayed(handler2.obtainMessage(17), o0Var.f23938c);
                        break;
                    }
                }
                break;
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                this.f23873e = false;
                break;
            default:
                Log.w("GoogleApiManager", "Unknown message id: " + i10);
                return false;
        }
        return true;
    }

    public final int l() {
        return this.f23879s.getAndIncrement();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final e0 t(b bVar) {
        return (e0) this.f23881u.get(bVar);
    }
}
