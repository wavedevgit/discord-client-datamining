package qs;

import java.util.concurrent.atomic.AtomicReferenceArray;
import kotlin.jvm.internal.Intrinsics;
import ts.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class m extends b0 {

    /* renamed from: p  reason: collision with root package name */
    private final e f48182p;

    /* renamed from: q  reason: collision with root package name */
    private final /* synthetic */ AtomicReferenceArray f48183q;

    public m(long j10, m mVar, e eVar, int i10) {
        super(j10, mVar, i10);
        this.f48182p = eVar;
        this.f48183q = new AtomicReferenceArray(f.f48155b * 2);
    }

    private final void E(int i10, Object obj) {
        z().set(i10 * 2, obj);
    }

    private final /* synthetic */ AtomicReferenceArray z() {
        return this.f48183q;
    }

    public final Object A(int i10) {
        return z().get(i10 * 2);
    }

    public final Object B(int i10) {
        return z().get((i10 * 2) + 1);
    }

    public final void C(int i10, boolean z10) {
        if (z10) {
            y().w1((this.f50863i * f.f48155b) + i10);
        }
        t();
    }

    public final Object D(int i10) {
        Object A = A(i10);
        w(i10);
        return A;
    }

    public final void F(int i10, Object obj) {
        z().set((i10 * 2) + 1, obj);
    }

    public final void G(int i10, Object obj) {
        E(i10, obj);
    }

    @Override // ts.b0
    public int r() {
        return f.f48155b;
    }

    /* JADX WARN: Code restructure failed: missing block: B:34:0x0062, code lost:
        w(r4);
     */
    /* JADX WARN: Code restructure failed: missing block: B:35:0x0065, code lost:
        if (r0 == false) goto L61;
     */
    /* JADX WARN: Code restructure failed: missing block: B:36:0x0067, code lost:
        r4 = y().f48135e;
     */
    /* JADX WARN: Code restructure failed: missing block: B:37:0x006d, code lost:
        if (r4 == null) goto L60;
     */
    /* JADX WARN: Code restructure failed: missing block: B:38:0x006f, code lost:
        ts.x.a(r4, r5, r6);
     */
    /* JADX WARN: Code restructure failed: missing block: B:39:0x0072, code lost:
        return;
     */
    /* JADX WARN: Code restructure failed: missing block: B:64:?, code lost:
        return;
     */
    /* JADX WARN: Code restructure failed: missing block: B:65:?, code lost:
        return;
     */
    @Override // ts.b0
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void s(int r4, java.lang.Throwable r5, kotlin.coroutines.CoroutineContext r6) {
        /*
            r3 = this;
            int r5 = qs.f.f48155b
            if (r4 < r5) goto L6
            r0 = 1
            goto L7
        L6:
            r0 = 0
        L7:
            if (r0 == 0) goto La
            int r4 = r4 - r5
        La:
            java.lang.Object r5 = r3.A(r4)
        Le:
            java.lang.Object r1 = r3.B(r4)
            boolean r2 = r1 instanceof os.w1
            if (r2 != 0) goto L73
            boolean r2 = r1 instanceof qs.x
            if (r2 == 0) goto L1b
            goto L73
        L1b:
            ts.e0 r2 = qs.f.j()
            if (r1 == r2) goto L62
            ts.e0 r2 = qs.f.i()
            if (r1 != r2) goto L28
            goto L62
        L28:
            ts.e0 r2 = qs.f.p()
            if (r1 == r2) goto Le
            ts.e0 r2 = qs.f.q()
            if (r1 != r2) goto L35
            goto Le
        L35:
            ts.e0 r4 = qs.f.f()
            if (r1 == r4) goto L99
            ts.e0 r4 = qs.f.f48157d
            if (r1 != r4) goto L40
            goto L99
        L40:
            ts.e0 r4 = qs.f.z()
            if (r1 != r4) goto L47
            goto L99
        L47:
            java.lang.IllegalStateException r4 = new java.lang.IllegalStateException
            java.lang.StringBuilder r5 = new java.lang.StringBuilder
            r5.<init>()
            java.lang.String r6 = "unexpected state: "
            r5.append(r6)
            r5.append(r1)
            java.lang.String r5 = r5.toString()
            java.lang.String r5 = r5.toString()
            r4.<init>(r5)
            throw r4
        L62:
            r3.w(r4)
            if (r0 == 0) goto L99
            qs.e r4 = r3.y()
            kotlin.jvm.functions.Function1 r4 = r4.f48135e
            if (r4 == 0) goto L99
            ts.x.a(r4, r5, r6)
            return
        L73:
            if (r0 == 0) goto L7a
            ts.e0 r2 = qs.f.j()
            goto L7e
        L7a:
            ts.e0 r2 = qs.f.i()
        L7e:
            boolean r1 = r3.v(r4, r1, r2)
            if (r1 == 0) goto Le
            r3.w(r4)
            r1 = r0 ^ 1
            r3.C(r4, r1)
            if (r0 == 0) goto L99
            qs.e r4 = r3.y()
            kotlin.jvm.functions.Function1 r4 = r4.f48135e
            if (r4 == 0) goto L99
            ts.x.a(r4, r5, r6)
        L99:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: qs.m.s(int, java.lang.Throwable, kotlin.coroutines.CoroutineContext):void");
    }

    public final boolean v(int i10, Object obj, Object obj2) {
        return l.a(z(), (i10 * 2) + 1, obj, obj2);
    }

    public final void w(int i10) {
        E(i10, null);
    }

    public final Object x(int i10, Object obj) {
        return z().getAndSet((i10 * 2) + 1, obj);
    }

    public final e y() {
        e eVar = this.f48182p;
        Intrinsics.checkNotNull(eVar);
        return eVar;
    }
}
