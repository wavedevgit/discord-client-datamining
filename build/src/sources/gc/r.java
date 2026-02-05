package gc;

import ac.g;
import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import cc.c;
import ic.b;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class r {

    /* renamed from: a  reason: collision with root package name */
    private final Context f24647a;

    /* renamed from: b  reason: collision with root package name */
    private final ac.e f24648b;

    /* renamed from: c  reason: collision with root package name */
    private final hc.d f24649c;

    /* renamed from: d  reason: collision with root package name */
    private final x f24650d;

    /* renamed from: e  reason: collision with root package name */
    private final Executor f24651e;

    /* renamed from: f  reason: collision with root package name */
    private final ic.b f24652f;

    /* renamed from: g  reason: collision with root package name */
    private final jc.a f24653g;

    /* renamed from: h  reason: collision with root package name */
    private final jc.a f24654h;

    /* renamed from: i  reason: collision with root package name */
    private final hc.c f24655i;

    public r(Context context, ac.e eVar, hc.d dVar, x xVar, Executor executor, ic.b bVar, jc.a aVar, jc.a aVar2, hc.c cVar) {
        this.f24647a = context;
        this.f24648b = eVar;
        this.f24649c = dVar;
        this.f24650d = xVar;
        this.f24651e = executor;
        this.f24652f = bVar;
        this.f24653g = aVar;
        this.f24654h = aVar2;
        this.f24655i = cVar;
    }

    public static /* synthetic */ Object b(r rVar, Iterable iterable, zb.o oVar, long j10) {
        rVar.f24649c.T0(iterable);
        rVar.f24649c.Z(oVar, rVar.f24653g.a() + j10);
        return null;
    }

    public static /* synthetic */ Object c(r rVar) {
        rVar.f24655i.a();
        return null;
    }

    public static /* synthetic */ Object e(r rVar, Iterable iterable) {
        rVar.f24649c.G(iterable);
        return null;
    }

    public static /* synthetic */ Object f(r rVar, zb.o oVar, int i10) {
        rVar.f24650d.b(oVar, i10 + 1);
        return null;
    }

    public static /* synthetic */ Object g(r rVar, zb.o oVar, long j10) {
        rVar.f24649c.Z(oVar, rVar.f24653g.a() + j10);
        return null;
    }

    public static /* synthetic */ Object h(r rVar, Map map) {
        rVar.getClass();
        for (Map.Entry entry : map.entrySet()) {
            rVar.f24655i.h(((Integer) entry.getValue()).intValue(), c.b.INVALID_PAYLOD, (String) entry.getKey());
        }
        return null;
    }

    public static /* synthetic */ void i(final r rVar, final zb.o oVar, final int i10, Runnable runnable) {
        rVar.getClass();
        try {
            try {
                ic.b bVar = rVar.f24652f;
                final hc.d dVar = rVar.f24649c;
                Objects.requireNonNull(dVar);
                bVar.k(new b.a() { // from class: gc.i
                    @Override // ic.b.a
                    public final Object execute() {
                        return Integer.valueOf(hc.d.this.l());
                    }
                });
                if (!rVar.k()) {
                    rVar.f24652f.k(new b.a() { // from class: gc.j
                        @Override // ic.b.a
                        public final Object execute() {
                            return r.f(r.this, oVar, i10);
                        }
                    });
                } else {
                    rVar.l(oVar, i10);
                }
                runnable.run();
            } catch (ic.a unused) {
                rVar.f24650d.b(oVar, i10 + 1);
                runnable.run();
            }
        } catch (Throwable th2) {
            runnable.run();
            throw th2;
        }
    }

    public zb.i j(ac.m mVar) {
        ic.b bVar = this.f24652f;
        final hc.c cVar = this.f24655i;
        Objects.requireNonNull(cVar);
        return mVar.a(zb.i.a().i(this.f24653g.a()).k(this.f24654h.a()).j("GDT_CLIENT_METRICS").h(new zb.h(xb.c.b("proto"), ((cc.a) bVar.k(new b.a() { // from class: gc.h
            @Override // ic.b.a
            public final Object execute() {
                return hc.c.this.m();
            }
        })).f())).d());
    }

    boolean k() {
        NetworkInfo activeNetworkInfo = ((ConnectivityManager) this.f24647a.getSystemService("connectivity")).getActiveNetworkInfo();
        if (activeNetworkInfo != null && activeNetworkInfo.isConnected()) {
            return true;
        }
        return false;
    }

    public ac.g l(final zb.o oVar, int i10) {
        ac.g b10;
        ac.m a10 = this.f24648b.a(oVar.b());
        ac.g e10 = ac.g.e(0L);
        final long j10 = 0;
        while (((Boolean) this.f24652f.k(new b.a() { // from class: gc.k
            @Override // ic.b.a
            public final Object execute() {
                Boolean valueOf;
                valueOf = Boolean.valueOf(r.this.f24649c.p0(oVar));
                return valueOf;
            }
        })).booleanValue()) {
            final Iterable<hc.k> iterable = (Iterable) this.f24652f.k(new b.a() { // from class: gc.l
                @Override // ic.b.a
                public final Object execute() {
                    Iterable X1;
                    X1 = r.this.f24649c.X1(oVar);
                    return X1;
                }
            });
            if (!iterable.iterator().hasNext()) {
                return e10;
            }
            if (a10 == null) {
                dc.a.b("Uploader", "Unknown backend for %s, deleting event batch for it...", oVar);
                b10 = ac.g.a();
            } else {
                ArrayList arrayList = new ArrayList();
                for (hc.k kVar : iterable) {
                    arrayList.add(kVar.b());
                }
                if (oVar.e()) {
                    arrayList.add(j(a10));
                }
                b10 = a10.b(ac.f.a().b(arrayList).c(oVar.c()).a());
            }
            e10 = b10;
            if (e10.c() == g.a.TRANSIENT_ERROR) {
                final zb.o oVar2 = oVar;
                this.f24652f.k(new b.a() { // from class: gc.m
                    @Override // ic.b.a
                    public final Object execute() {
                        return r.b(r.this, iterable, oVar2, j10);
                    }
                });
                this.f24650d.a(oVar2, i10 + 1, true);
                return e10;
            }
            zb.o oVar3 = oVar;
            this.f24652f.k(new b.a() { // from class: gc.n
                @Override // ic.b.a
                public final Object execute() {
                    return r.e(r.this, iterable);
                }
            });
            if (e10.c() == g.a.OK) {
                long max = Math.max(j10, e10.b());
                if (oVar3.e()) {
                    this.f24652f.k(new b.a() { // from class: gc.o
                        @Override // ic.b.a
                        public final Object execute() {
                            return r.c(r.this);
                        }
                    });
                }
                j10 = max;
            } else if (e10.c() == g.a.INVALID_PAYLOAD) {
                final HashMap hashMap = new HashMap();
                for (hc.k kVar2 : iterable) {
                    String j11 = kVar2.b().j();
                    if (!hashMap.containsKey(j11)) {
                        hashMap.put(j11, 1);
                    } else {
                        hashMap.put(j11, Integer.valueOf(((Integer) hashMap.get(j11)).intValue() + 1));
                    }
                }
                this.f24652f.k(new b.a() { // from class: gc.p
                    @Override // ic.b.a
                    public final Object execute() {
                        return r.h(r.this, hashMap);
                    }
                });
            }
            oVar = oVar3;
        }
        final zb.o oVar4 = oVar;
        this.f24652f.k(new b.a() { // from class: gc.q
            @Override // ic.b.a
            public final Object execute() {
                return r.g(r.this, oVar4, j10);
            }
        });
        return e10;
    }

    public void m(final zb.o oVar, final int i10, final Runnable runnable) {
        this.f24651e.execute(new Runnable() { // from class: gc.g
            @Override // java.lang.Runnable
            public final void run() {
                r.i(r.this, oVar, i10, runnable);
            }
        });
    }
}
