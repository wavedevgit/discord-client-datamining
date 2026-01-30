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
    private static final long f53888b = 0;

    /* renamed from: e */
    private static h f53891e;

    /* renamed from: f */
    private static long f53892f;

    /* renamed from: g */
    private static final f f53893g;

    /* renamed from: h */
    private static final m f53894h;

    /* renamed from: i */
    private static List f53895i;

    /* renamed from: j */
    private static List f53896j;

    /* renamed from: k */
    private static final b f53897k;

    /* renamed from: l */
    private static final e f53898l;

    /* renamed from: m */
    private static x0.a f53899m;

    /* renamed from: a */
    private static final Function1 f53887a = new Function1() { // from class: y0.j
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Unit f10;
            f10 = k.f((h) obj);
            return f10;
        }
    };

    /* renamed from: c */
    private static final x0.b f53889c = new x0.b();

    /* renamed from: d */
    private static final Object f53890d = new Object();

    static {
        h.a aVar = h.f53875p;
        f53891e = aVar.a();
        long j10 = 1;
        f53892f = i.c(1) + j10;
        f53893g = new f();
        f53894h = new m();
        f53895i = CollectionsKt.l();
        f53896j = CollectionsKt.l();
        long j11 = f53892f;
        f53892f = j10 + j11;
        b bVar = new b(j11, aVar.a());
        f53891e = f53891e.i(bVar.d());
        f53897k = bVar;
        f53898l = bVar;
        f53899m = new x0.a(0);
    }

    public static final /* synthetic */ List b() {
        return f53896j;
    }

    public static final /* synthetic */ long c() {
        return f53888b;
    }

    public static final p d(p pVar) {
        p l10;
        e.a aVar = e.f53864d;
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
            throw new ir.h();
        }
        return l11;
    }

    public static final e e() {
        e eVar = (e) f53889c.a();
        if (eVar == null) {
            return f53897k;
        }
        return eVar;
    }

    public static final Unit f(h hVar) {
        return Unit.f33298a;
    }

    public static final Object g() {
        return f53890d;
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
        e.a aVar = e.f53864d;
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
                    throw new ir.h();
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
            a10 = f53893g.a(h10);
        }
        return a10;
    }

    private static final p o(n nVar) {
        long d10 = f53893g.d(f53892f) - 1;
        h a10 = h.f53875p.a();
        p pVar = null;
        for (p b10 = nVar.b(); b10 != null; b10 = b10.b()) {
            if (b10.c() != f53888b) {
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
        if (j11 != f53888b && Intrinsics.compare(j11, j10) <= 0 && !hVar.g(j11)) {
            return true;
        }
        return false;
    }

    private static final boolean q(p pVar, long j10, h hVar) {
        return p(j10, pVar.c(), hVar);
    }
}
