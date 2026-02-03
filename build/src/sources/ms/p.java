package ms;

import java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.PropertyReference0Impl;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class p {

    /* renamed from: d  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f39182d = AtomicReferenceFieldUpdater.newUpdater(p.class, Object.class, "_next$volatile");

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f39183e = AtomicReferenceFieldUpdater.newUpdater(p.class, Object.class, "_prev$volatile");

    /* renamed from: i  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f39184i = AtomicReferenceFieldUpdater.newUpdater(p.class, Object.class, "_removedRef$volatile");
    private volatile /* synthetic */ Object _next$volatile = this;
    private volatile /* synthetic */ Object _prev$volatile = this;
    private volatile /* synthetic */ Object _removedRef$volatile;

    /* JADX WARN: Code restructure failed: missing block: B:11:0x0025, code lost:
        return r2;
     */
    /* JADX WARN: Code restructure failed: missing block: B:19:0x003f, code lost:
        if (androidx.concurrent.futures.b.a(ms.p.f39182d, r3, r2, ((ms.y) r4).f39204a) != false) goto L20;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final ms.p h() {
        /*
            r7 = this;
        L0:
            java.util.concurrent.atomic.AtomicReferenceFieldUpdater r0 = o()
            java.lang.Object r0 = r0.get(r7)
            ms.p r0 = (ms.p) r0
            r1 = 0
            r2 = r0
        Lc:
            r3 = r1
        Ld:
            java.util.concurrent.atomic.AtomicReferenceFieldUpdater r4 = n()
            java.lang.Object r4 = r4.get(r2)
            if (r4 != r7) goto L26
            if (r0 != r2) goto L1a
            goto L25
        L1a:
            java.util.concurrent.atomic.AtomicReferenceFieldUpdater r1 = o()
            boolean r0 = androidx.concurrent.futures.b.a(r1, r7, r0, r2)
            if (r0 != 0) goto L25
            goto L0
        L25:
            return r2
        L26:
            boolean r5 = r7.q()
            if (r5 == 0) goto L2d
            return r1
        L2d:
            boolean r5 = r4 instanceof ms.y
            if (r5 == 0) goto L4f
            if (r3 == 0) goto L44
            java.util.concurrent.atomic.AtomicReferenceFieldUpdater r5 = n()
            ms.y r4 = (ms.y) r4
            ms.p r4 = r4.f39204a
            boolean r2 = androidx.concurrent.futures.b.a(r5, r3, r2, r4)
            if (r2 != 0) goto L42
            goto L0
        L42:
            r2 = r3
            goto Lc
        L44:
            java.util.concurrent.atomic.AtomicReferenceFieldUpdater r4 = o()
            java.lang.Object r2 = r4.get(r2)
            ms.p r2 = (ms.p) r2
            goto Ld
        L4f:
            java.lang.String r3 = "null cannot be cast to non-null type kotlinx.coroutines.internal.LockFreeLinkedListNode"
            kotlin.jvm.internal.Intrinsics.checkNotNull(r4, r3)
            r3 = r4
            ms.p r3 = (ms.p) r3
            r6 = r3
            r3 = r2
            r2 = r6
            goto Ld
        */
        throw new UnsupportedOperationException("Method not decompiled: ms.p.h():ms.p");
    }

    private final p i(p pVar) {
        while (pVar.q()) {
            pVar = (p) f39183e.get(pVar);
        }
        return pVar;
    }

    private final void j(p pVar) {
        p pVar2;
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f39183e;
        do {
            pVar2 = (p) atomicReferenceFieldUpdater.get(pVar);
            if (k() != pVar) {
                return;
            }
        } while (!androidx.concurrent.futures.b.a(f39183e, pVar, pVar2, this));
        if (q()) {
            pVar.h();
        }
    }

    private final y t() {
        y yVar = (y) f39184i.get(this);
        if (yVar == null) {
            y yVar2 = new y(this);
            f39184i.set(this, yVar2);
            return yVar2;
        }
        return yVar;
    }

    public final boolean c(p pVar, int i10) {
        p m10;
        do {
            m10 = m();
            if (m10 instanceof n) {
                if ((((n) m10).f39179o & i10) == 0 && m10.c(pVar, i10)) {
                    return true;
                }
                return false;
            }
        } while (!m10.e(pVar, this));
        return true;
    }

    public final boolean e(p pVar, p pVar2) {
        f39183e.set(pVar, this);
        f39182d.set(pVar, pVar2);
        if (!androidx.concurrent.futures.b.a(f39182d, this, pVar2, pVar)) {
            return false;
        }
        pVar.j(pVar2);
        return true;
    }

    public final boolean f(p pVar) {
        f39183e.set(pVar, this);
        f39182d.set(pVar, this);
        while (k() == this) {
            if (androidx.concurrent.futures.b.a(f39182d, this, this, pVar)) {
                pVar.j(this);
                return true;
            }
        }
        return false;
    }

    public final void g(int i10) {
        c(new n(i10), i10);
    }

    public final Object k() {
        return f39182d.get(this);
    }

    public final p l() {
        y yVar;
        p pVar;
        Object k10 = k();
        if (k10 instanceof y) {
            yVar = (y) k10;
        } else {
            yVar = null;
        }
        if (yVar != null && (pVar = yVar.f39204a) != null) {
            return pVar;
        }
        Intrinsics.checkNotNull(k10, "null cannot be cast to non-null type kotlinx.coroutines.internal.LockFreeLinkedListNode");
        return (p) k10;
    }

    public final p m() {
        p h10 = h();
        if (h10 == null) {
            return i((p) f39183e.get(this));
        }
        return h10;
    }

    public boolean q() {
        return k() instanceof y;
    }

    public boolean r() {
        if (s() == null) {
            return true;
        }
        return false;
    }

    public final p s() {
        Object k10;
        p pVar;
        do {
            k10 = k();
            if (k10 instanceof y) {
                return ((y) k10).f39204a;
            }
            if (k10 == this) {
                return (p) k10;
            }
            Intrinsics.checkNotNull(k10, "null cannot be cast to non-null type kotlinx.coroutines.internal.LockFreeLinkedListNode");
            pVar = (p) k10;
        } while (!androidx.concurrent.futures.b.a(f39182d, this, k10, pVar.t()));
        pVar.h();
        return null;
    }

    public String toString() {
        return new PropertyReference0Impl(this) { // from class: ms.p.a
            @Override // kotlin.jvm.internal.PropertyReference0Impl, kotlin.jvm.internal.PropertyReference0
            public Object get() {
                return hs.e0.a(this.receiver);
            }
        } + '@' + hs.e0.b(this);
    }
}
