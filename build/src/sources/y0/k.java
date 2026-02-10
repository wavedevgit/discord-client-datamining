package y0;

import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import y0.e;
import y0.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class k {

    /* renamed from: b */
    private static final long f55383b = 0;

    /* renamed from: e */
    private static h f55386e;

    /* renamed from: f */
    private static long f55387f;

    /* renamed from: g */
    private static final f f55388g;

    /* renamed from: h */
    private static final m f55389h;

    /* renamed from: i */
    private static List f55390i;

    /* renamed from: j */
    private static List f55391j;

    /* renamed from: k */
    private static final b f55392k;

    /* renamed from: l */
    private static final e f55393l;

    /* renamed from: m */
    private static x0.a f55394m;

    /* renamed from: a */
    private static final Function1 f55382a = new Function1() { // from class: y0.j
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Unit f10;
            f10 = k.f((h) obj);
            return f10;
        }
    };

    /* renamed from: c */
    private static final x0.b f55384c = new x0.b();

    /* renamed from: d */
    private static final Object f55385d = new Object();

    static {
        h.a aVar = h.f55370p;
        f55386e = aVar.a();
        long j10 = 1;
        f55387f = i.c(1) + j10;
        f55388g = new f();
        f55389h = new m();
        f55390i = CollectionsKt.l();
        f55391j = CollectionsKt.l();
        long j11 = f55387f;
        f55387f = j10 + j11;
        b bVar = new b(j11, aVar.a());
        f55386e = f55386e.i(bVar.d());
        f55392k = bVar;
        f55393l = bVar;
        f55394m = new x0.a(0);
    }

    public static final /* synthetic */ List b() {
        return f55391j;
    }

    public static final /* synthetic */ long c() {
        return f55383b;
    }

    public static final p d(p pVar) {
        p l10;
        e.a aVar = e.f55359d;
        e a10 = aVar.a();
        p l11 = l(pVar, a10.d(), a10.a());
        if (l11 == null) {
            synchronized (g()) {
                e a11 = aVar.a();
                l10 = l(pVar, a11.d(), a11.a());
            }
            if (l10 != null) {
                return l10;
            }
            k();
            throw new rr.h();
        }
        return l11;
    }

    public static final e e() {
        e eVar = (e) f55384c.a();
        if (eVar == null) {
            return f55392k;
        }
        return eVar;
    }

    public static final Unit f(h hVar) {
        return Unit.f31765a;
    }

    public static final Object g() {
        return f55385d;
    }

    public static final p h(p pVar, n nVar) {
        p o10 = o(nVar);
        if (o10 != null) {
            o10.e(LongCompanionObject.MAX_VALUE);
            return o10;
        }
        p a10 = pVar.a(LongCompanionObject.MAX_VALUE);
        a10.d(nVar.b());
        Intrinsics.checkNotNull(a10, "null cannot be cast to non-null type T of androidx.compose.runtime.snapshots.SnapshotKt.newOverwritableRecordLocked");
        nVar.c(a10);
        Intrinsics.checkNotNull(a10, "null cannot be cast to non-null type T of androidx.compose.runtime.snapshots.SnapshotKt.newOverwritableRecordLocked");
        return a10;
    }

    public static final void i(e eVar, n nVar) {
        eVar.h(eVar.e() + 1);
        Function1 f10 = eVar.f();
        if (f10 != null) {
            f10.invoke(nVar);
        }
    }

    public static final p j(p pVar, n nVar, e eVar, p pVar2) {
        p h10;
        if (eVar.c()) {
            eVar.g(nVar);
        }
        long d10 = eVar.d();
        if (pVar2.c() == d10) {
            return pVar2;
        }
        synchronized (g()) {
            h10 = h(pVar, nVar);
        }
        h10.e(d10);
        if (pVar2.c() != i.c(1)) {
            eVar.g(nVar);
        }
        return h10;
    }

    private static final Void k() {
        throw new IllegalStateException("Reading a state that was created after the snapshot was taken or in a snapshot that has not yet been applied");
    }

    private static final p l(p pVar, long j10, h hVar) {
        p pVar2 = null;
        while (pVar != null) {
            if (q(pVar, j10, hVar) && (pVar2 == null || Intrinsics.compare(pVar2.c(), pVar.c()) < 0)) {
                pVar2 = pVar;
            }
            pVar = pVar.b();
        }
        if (pVar2 == null) {
            return null;
        }
        return pVar2;
    }

    public static final p m(p pVar, n nVar) {
        p l10;
        e.a aVar = e.f55359d;
        e a10 = aVar.a();
        Function1 b10 = a10.b();
        if (b10 != null) {
            b10.invoke(nVar);
        }
        p l11 = l(pVar, a10.d(), a10.a());
        if (l11 == null) {
            synchronized (g()) {
                e a11 = aVar.a();
                p b11 = nVar.b();
                Intrinsics.checkNotNull(b11, "null cannot be cast to non-null type T of androidx.compose.runtime.snapshots.SnapshotKt.readable");
                l10 = l(b11, a11.d(), a11.a());
                if (l10 == null) {
                    k();
                    throw new rr.h();
                }
            }
            return l10;
        }
        return l11;
    }

    public static final int n(long j10, h hVar) {
        int a10;
        long h10 = hVar.h(j10);
        synchronized (g()) {
            a10 = f55388g.a(h10);
        }
        return a10;
    }

    private static final p o(n nVar) {
        long d10 = f55388g.d(f55387f) - 1;
        h a10 = h.f55370p.a();
        p pVar = null;
        for (p b10 = nVar.b(); b10 != null; b10 = b10.b()) {
            if (b10.c() != f55383b) {
                if (q(b10, d10, a10)) {
                    if (pVar == null) {
                        pVar = b10;
                    } else if (Intrinsics.compare(b10.c(), pVar.c()) >= 0) {
                        return pVar;
                    }
                }
            }
            return b10;
        }
        return null;
    }

    private static final boolean p(long j10, long j11, h hVar) {
        if (j11 != f55383b && Intrinsics.compare(j11, j10) <= 0 && !hVar.g(j11)) {
            return true;
        }
        return false;
    }

    private static final boolean q(p pVar, long j10, h hVar) {
        return p(j10, pVar.c(), hVar);
    }
}
