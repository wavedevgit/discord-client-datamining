package hc;

import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import bc.g;
import dc.c;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.Executor;
import jc.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class r {

    /* renamed from: a  reason: collision with root package name */
    private final Context f27077a;

    /* renamed from: b  reason: collision with root package name */
    private final bc.e f27078b;

    /* renamed from: c  reason: collision with root package name */
    private final ic.d f27079c;

    /* renamed from: d  reason: collision with root package name */
    private final x f27080d;

    /* renamed from: e  reason: collision with root package name */
    private final Executor f27081e;

    /* renamed from: f  reason: collision with root package name */
    private final jc.b f27082f;

    /* renamed from: g  reason: collision with root package name */
    private final kc.a f27083g;

    /* renamed from: h  reason: collision with root package name */
    private final kc.a f27084h;

    /* renamed from: i  reason: collision with root package name */
    private final ic.c f27085i;

    public r(Context context, bc.e eVar, ic.d dVar, x xVar, Executor executor, jc.b bVar, kc.a aVar, kc.a aVar2, ic.c cVar) {
        this.f27077a = context;
        this.f27078b = eVar;
        this.f27079c = dVar;
        this.f27080d = xVar;
        this.f27081e = executor;
        this.f27082f = bVar;
        this.f27083g = aVar;
        this.f27084h = aVar2;
        this.f27085i = cVar;
    }

    public static /* synthetic */ Object b(r rVar, Iterable iterable, ac.o oVar, long j10) {
        rVar.f27079c.T0(iterable);
        rVar.f27079c.K1(oVar, rVar.f27083g.a() + j10);
        return null;
    }

    public static /* synthetic */ Object c(r rVar) {
        rVar.f27085i.a();
        return null;
    }

    public static /* synthetic */ Object e(r rVar, Iterable iterable) {
        rVar.f27079c.K(iterable);
        return null;
    }

    public static /* synthetic */ Object f(r rVar, ac.o oVar, int i10) {
        rVar.f27080d.b(oVar, i10 + 1);
        return null;
    }

    public static /* synthetic */ Object g(r rVar, ac.o oVar, long j10) {
        rVar.f27079c.K1(oVar, rVar.f27083g.a() + j10);
        return null;
    }

    public static /* synthetic */ Object h(r rVar, Map map) {
        rVar.getClass();
        for (Map.Entry entry : map.entrySet()) {
            rVar.f27085i.i(((Integer) entry.getValue()).intValue(), c.b.INVALID_PAYLOD, (String) entry.getKey());
        }
        return null;
    }

    public static /* synthetic */ void i(final r rVar, final ac.o oVar, final int i10, Runnable runnable) {
        rVar.getClass();
        try {
            try {
                jc.b bVar = rVar.f27082f;
                final ic.d dVar = rVar.f27079c;
                Objects.requireNonNull(dVar);
                bVar.m(new b.a() { // from class: hc.i
                    @Override // jc.b.a
                    public final Object execute() {
                        return Integer.valueOf(ic.d.this.l());
                    }
                });
                if (!rVar.k()) {
                    rVar.f27082f.m(new b.a() { // from class: hc.j
                        @Override // jc.b.a
                        public final Object execute() {
                            return r.f(r.this, oVar, i10);
                        }
                    });
                } else {
                    rVar.l(oVar, i10);
                }
                runnable.run();
            } catch (jc.a unused) {
                rVar.f27080d.b(oVar, i10 + 1);
                runnable.run();
            }
        } catch (Throwable th2) {
            runnable.run();
            throw th2;
        }
    }

    public ac.i j(bc.m mVar) {
        jc.b bVar = this.f27082f;
        final ic.c cVar = this.f27085i;
        Objects.requireNonNull(cVar);
        return mVar.a(ac.i.a().i(this.f27083g.a()).k(this.f27084h.a()).j("GDT_CLIENT_METRICS").h(new ac.h(yb.c.b("proto"), ((dc.a) bVar.m(new b.a() { // from class: hc.h
            @Override // jc.b.a
            public final Object execute() {
                return ic.c.this.h();
            }
        })).f())).d());
    }

    boolean k() {
        NetworkInfo activeNetworkInfo = ((ConnectivityManager) this.f27077a.getSystemService("connectivity")).getActiveNetworkInfo();
        if (activeNetworkInfo != null && activeNetworkInfo.isConnected()) {
            return true;
        }
        return false;
    }

    public bc.g l(final ac.o oVar, int i10) {
        bc.g b10;
        bc.m a10 = this.f27078b.a(oVar.b());
        bc.g e10 = bc.g.e(0L);
        final long j10 = 0;
        while (((Boolean) this.f27082f.m(new b.a() { // from class: hc.k
            @Override // jc.b.a
            public final Object execute() {
                Boolean valueOf;
                valueOf = Boolean.valueOf(r.this.f27079c.N1(oVar));
                return valueOf;
            }
        })).booleanValue()) {
            final Iterable<ic.k> iterable = (Iterable) this.f27082f.m(new b.a() { // from class: hc.l
                @Override // jc.b.a
                public final Object execute() {
                    Iterable n22;
                    n22 = r.this.f27079c.n2(oVar);
                    return n22;
                }
            });
            if (!iterable.iterator().hasNext()) {
                return e10;
            }
            if (a10 == null) {
                ec.a.b("Uploader", "Unknown backend for %s, deleting event batch for it...", oVar);
                b10 = bc.g.a();
            } else {
                ArrayList arrayList = new ArrayList();
                for (ic.k kVar : iterable) {
                    arrayList.add(kVar.b());
                }
                if (oVar.e()) {
                    arrayList.add(j(a10));
                }
                b10 = a10.b(bc.f.a().b(arrayList).c(oVar.c()).a());
            }
            e10 = b10;
            if (e10.c() == g.a.TRANSIENT_ERROR) {
                final ac.o oVar2 = oVar;
                this.f27082f.m(new b.a() { // from class: hc.m
                    @Override // jc.b.a
                    public final Object execute() {
                        return r.b(r.this, iterable, oVar2, j10);
                    }
                });
                this.f27080d.a(oVar2, i10 + 1, true);
                return e10;
            }
            ac.o oVar3 = oVar;
            this.f27082f.m(new b.a() { // from class: hc.n
                @Override // jc.b.a
                public final Object execute() {
                    return r.e(r.this, iterable);
                }
            });
            if (e10.c() == g.a.OK) {
                long max = Math.max(j10, e10.b());
                if (oVar3.e()) {
                    this.f27082f.m(new b.a() { // from class: hc.o
                        @Override // jc.b.a
                        public final Object execute() {
                            return r.c(r.this);
                        }
                    });
                }
                j10 = max;
            } else if (e10.c() == g.a.INVALID_PAYLOAD) {
                final HashMap hashMap = new HashMap();
                for (ic.k kVar2 : iterable) {
                    String j11 = kVar2.b().j();
                    if (!hashMap.containsKey(j11)) {
                        hashMap.put(j11, 1);
                    } else {
                        hashMap.put(j11, Integer.valueOf(((Integer) hashMap.get(j11)).intValue() + 1));
                    }
                }
                this.f27082f.m(new b.a() { // from class: hc.p
                    @Override // jc.b.a
                    public final Object execute() {
                        return r.h(r.this, hashMap);
                    }
                });
            }
            oVar = oVar3;
        }
        final ac.o oVar4 = oVar;
        this.f27082f.m(new b.a() { // from class: hc.q
            @Override // jc.b.a
            public final Object execute() {
                return r.g(r.this, oVar4, j10);
            }
        });
        return e10;
    }

    public void m(final ac.o oVar, final int i10, final Runnable runnable) {
        this.f27081e.execute(new Runnable() { // from class: hc.g
            @Override // java.lang.Runnable
            public final void run() {
                r.i(r.this, oVar, i10, runnable);
            }
        });
    }
}
