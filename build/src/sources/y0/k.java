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
    private static final long f54906b = 0;

    /* renamed from: e */
    private static h f54909e;

    /* renamed from: f */
    private static long f54910f;

    /* renamed from: g */
    private static final f f54911g;

    /* renamed from: h */
    private static final m f54912h;

    /* renamed from: i */
    private static List f54913i;

    /* renamed from: j */
    private static List f54914j;

    /* renamed from: k */
    private static final b f54915k;

    /* renamed from: l */
    private static final e f54916l;

    /* renamed from: m */
    private static x0.a f54917m;

    /* renamed from: a */
    private static final Function1 f54905a = new Function1() { // from class: y0.j
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Unit f10;
            f10 = k.f((h) obj);
            return f10;
        }
    };

    /* renamed from: c */
    private static final x0.b f54907c = new x0.b();

    /* renamed from: d */
    private static final Object f54908d = new Object();

    static {
        h.a aVar = h.f54893p;
        f54909e = aVar.a();
        long j10 = 1;
        f54910f = i.c(1) + j10;
        f54911g = new f();
        f54912h = new m();
        f54913i = CollectionsKt.l();
        f54914j = CollectionsKt.l();
        long j11 = f54910f;
        f54910f = j10 + j11;
        b bVar = new b(j11, aVar.a());
        f54909e = f54909e.i(bVar.d());
        f54915k = bVar;
        f54916l = bVar;
        f54917m = new x0.a(0);
    }

    public static final /* synthetic */ List b() {
        return f54914j;
    }

    public static final /* synthetic */ long c() {
        return f54906b;
    }

    public static final p d(p pVar) {
        p l10;
        e.a aVar = e.f54882d;
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
            throw new qr.h();
        }
        return l11;
    }

    public static final e e() {
        e eVar = (e) f54907c.a();
        if (eVar == null) {
            return f54915k;
        }
        return eVar;
    }

    public static final Unit f(h hVar) {
        return Unit.f32056a;
    }

    public static final Object g() {
        return f54908d;
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
        e.a aVar = e.f54882d;
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
                    throw new qr.h();
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
            a10 = f54911g.a(h10);
        }
        return a10;
    }

    private static final p o(n nVar) {
        long d10 = f54911g.d(f54910f) - 1;
        h a10 = h.f54893p.a();
        p pVar = null;
        for (p b10 = nVar.b(); b10 != null; b10 = b10.b()) {
            if (b10.c() != f54906b) {
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
        if (j11 != f54906b && Intrinsics.compare(j11, j10) <= 0 && !hVar.g(j11)) {
            return true;
        }
        return false;
    }

    private static final boolean q(p pVar, long j10, h hVar) {
        return p(j10, pVar.c(), hVar);
    }
}
