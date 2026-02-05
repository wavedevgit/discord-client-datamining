package com.facebook.imagepipeline.memory;

import android.util.SparseArray;
import android.util.SparseIntArray;
import java.util.Set;
import o8.j;
import o8.l;
import o8.n;
import va.a0;
import va.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a implements r8.f {

    /* renamed from: a  reason: collision with root package name */
    private final Class f10613a;

    /* renamed from: b  reason: collision with root package name */
    final r8.d f10614b;

    /* renamed from: c  reason: collision with root package name */
    final z f10615c;

    /* renamed from: d  reason: collision with root package name */
    final SparseArray f10616d;

    /* renamed from: e  reason: collision with root package name */
    final Set f10617e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f10618f;

    /* renamed from: g  reason: collision with root package name */
    final C0158a f10619g;

    /* renamed from: h  reason: collision with root package name */
    final C0158a f10620h;

    /* renamed from: i  reason: collision with root package name */
    private final a0 f10621i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f10622j;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.facebook.imagepipeline.memory.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class C0158a {

        /* renamed from: a  reason: collision with root package name */
        int f10623a;

        /* renamed from: b  reason: collision with root package name */
        int f10624b;

        C0158a() {
        }

        public void a(int i10) {
            int i11;
            int i12 = this.f10624b;
            if (i12 >= i10 && (i11 = this.f10623a) > 0) {
                this.f10623a = i11 - 1;
                this.f10624b = i12 - i10;
                return;
            }
            p8.a.O("com.facebook.imagepipeline.memory.BasePool.Counter", "Unexpected decrement of %d. Current numBytes = %d, count = %d", Integer.valueOf(i10), Integer.valueOf(this.f10624b), Integer.valueOf(this.f10623a));
        }

        public void b(int i10) {
            this.f10623a++;
            this.f10624b += i10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b extends RuntimeException {
        public b(Object obj) {
            super("Invalid size: " + obj.toString());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c extends RuntimeException {
        public c(int i10, int i11, int i12, int i13) {
            super("Pool hard cap violation? Hard cap = " + i10 + " Used size = " + i11 + " Free size = " + i12 + " Request size = " + i13);
        }
    }

    public a(r8.d dVar, z zVar, a0 a0Var) {
        this.f10613a = getClass();
        this.f10614b = (r8.d) j.g(dVar);
        z zVar2 = (z) j.g(zVar);
        this.f10615c = zVar2;
        this.f10621i = (a0) j.g(a0Var);
        this.f10616d = new SparseArray();
        if (zVar2.f52001f) {
            r();
        } else {
            v(new SparseIntArray(0));
        }
        this.f10617e = l.b();
        this.f10620h = new C0158a();
        this.f10619g = new C0158a();
    }

    private synchronized void i() {
        boolean z10;
        try {
            if (t() && this.f10620h.f10624b != 0) {
                z10 = false;
                j.i(z10);
            }
            z10 = true;
            j.i(z10);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    private void j(SparseIntArray sparseIntArray) {
        this.f10616d.clear();
        for (int i10 = 0; i10 < sparseIntArray.size(); i10++) {
            int keyAt = sparseIntArray.keyAt(i10);
            this.f10616d.put(keyAt, new com.facebook.imagepipeline.memory.b(p(keyAt), sparseIntArray.valueAt(i10), 0, this.f10615c.f52001f));
        }
    }

    private synchronized com.facebook.imagepipeline.memory.b m(int i10) {
        return (com.facebook.imagepipeline.memory.b) this.f10616d.get(i10);
    }

    private synchronized void r() {
        try {
            SparseIntArray sparseIntArray = this.f10615c.f51998c;
            if (sparseIntArray != null) {
                j(sparseIntArray);
                this.f10618f = false;
            } else {
                this.f10618f = true;
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    private synchronized void v(SparseIntArray sparseIntArray) {
        try {
            j.g(sparseIntArray);
            this.f10616d.clear();
            SparseIntArray sparseIntArray2 = this.f10615c.f51998c;
            if (sparseIntArray2 != null) {
                for (int i10 = 0; i10 < sparseIntArray2.size(); i10++) {
                    int keyAt = sparseIntArray2.keyAt(i10);
                    this.f10616d.put(keyAt, new com.facebook.imagepipeline.memory.b(p(keyAt), sparseIntArray2.valueAt(i10), sparseIntArray.get(keyAt, 0), this.f10615c.f52001f));
                }
                this.f10618f = false;
            } else {
                this.f10618f = true;
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    private void w() {
        if (p8.a.w(2)) {
            p8.a.C(this.f10613a, "Used = (%d, %d); Free = (%d, %d)", Integer.valueOf(this.f10619g.f10623a), Integer.valueOf(this.f10619g.f10624b), Integer.valueOf(this.f10620h.f10623a), Integer.valueOf(this.f10620h.f10624b));
        }
    }

    protected abstract Object g(int i10);

    @Override // r8.f
    public Object get(int i10) {
        Object obj;
        Object q10;
        i();
        int n10 = n(i10);
        synchronized (this) {
            try {
                com.facebook.imagepipeline.memory.b l10 = l(n10);
                if (l10 != null && (q10 = q(l10)) != null) {
                    j.i(this.f10617e.add(q10));
                    int o10 = o(q10);
                    int p10 = p(o10);
                    this.f10619g.b(p10);
                    this.f10620h.a(p10);
                    this.f10621i.e(p10);
                    w();
                    if (p8.a.w(2)) {
                        p8.a.A(this.f10613a, "get (reuse) (object, size) = (%x, %s)", Integer.valueOf(System.identityHashCode(q10)), Integer.valueOf(o10));
                    }
                    return q10;
                }
                int p11 = p(n10);
                if (h(p11)) {
                    this.f10619g.b(p11);
                    if (l10 != null) {
                        l10.e();
                    }
                    try {
                        obj = g(n10);
                    } catch (Throwable th2) {
                        synchronized (this) {
                            try {
                                this.f10619g.a(p11);
                                com.facebook.imagepipeline.memory.b l11 = l(n10);
                                if (l11 != null) {
                                    l11.b();
                                }
                                n.c(th2);
                                obj = null;
                            } finally {
                            }
                        }
                    }
                    synchronized (this) {
                        try {
                            j.i(this.f10617e.add(obj));
                            z();
                            this.f10621i.d(p11);
                            w();
                            if (p8.a.w(2)) {
                                p8.a.A(this.f10613a, "get (alloc) (object, size) = (%x, %s)", Integer.valueOf(System.identityHashCode(obj)), Integer.valueOf(n10));
                            }
                        } finally {
                        }
                    }
                    return obj;
                }
                throw new c(this.f10615c.f51996a, this.f10619g.f10624b, this.f10620h.f10624b, p11);
            } finally {
            }
        }
    }

    synchronized boolean h(int i10) {
        if (this.f10622j) {
            return true;
        }
        z zVar = this.f10615c;
        int i11 = zVar.f51996a;
        int i12 = this.f10619g.f10624b;
        if (i10 > i11 - i12) {
            this.f10621i.g();
            return false;
        }
        int i13 = zVar.f51997b;
        if (i10 > i13 - (i12 + this.f10620h.f10624b)) {
            y(i13 - i10);
        }
        if (i10 <= i11 - (this.f10619g.f10624b + this.f10620h.f10624b)) {
            return true;
        }
        this.f10621i.g();
        return false;
    }

    protected abstract void k(Object obj);

    synchronized com.facebook.imagepipeline.memory.b l(int i10) {
        try {
            com.facebook.imagepipeline.memory.b bVar = (com.facebook.imagepipeline.memory.b) this.f10616d.get(i10);
            if (bVar == null && this.f10618f) {
                if (p8.a.w(2)) {
                    p8.a.z(this.f10613a, "creating new bucket %s", Integer.valueOf(i10));
                }
                com.facebook.imagepipeline.memory.b x10 = x(i10);
                this.f10616d.put(i10, x10);
                return x10;
            }
            return bVar;
        } finally {
        }
    }

    protected abstract int n(int i10);

    protected abstract int o(Object obj);

    protected abstract int p(int i10);

    /* JADX INFO: Access modifiers changed from: protected */
    public synchronized Object q(com.facebook.imagepipeline.memory.b bVar) {
        return bVar.c();
    }

    /* JADX WARN: Code restructure failed: missing block: B:22:0x007f, code lost:
        r2.b();
     */
    @Override // r8.f, s8.c
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void release(java.lang.Object r6) {
        /*
            r5 = this;
            o8.j.g(r6)
            int r0 = r5.o(r6)
            int r1 = r5.p(r0)
            monitor-enter(r5)
            com.facebook.imagepipeline.memory.b r2 = r5.m(r0)     // Catch: java.lang.Throwable -> L38
            java.util.Set r3 = r5.f10617e     // Catch: java.lang.Throwable -> L38
            boolean r3 = r3.remove(r6)     // Catch: java.lang.Throwable -> L38
            if (r3 != 0) goto L3b
            java.lang.Class r2 = r5.f10613a     // Catch: java.lang.Throwable -> L38
            java.lang.String r3 = "release (free, value unrecognized) (object, size) = (%x, %s)"
            int r4 = java.lang.System.identityHashCode(r6)     // Catch: java.lang.Throwable -> L38
            java.lang.Integer r4 = java.lang.Integer.valueOf(r4)     // Catch: java.lang.Throwable -> L38
            java.lang.Integer r0 = java.lang.Integer.valueOf(r0)     // Catch: java.lang.Throwable -> L38
            java.lang.Object[] r0 = new java.lang.Object[]{r4, r0}     // Catch: java.lang.Throwable -> L38
            p8.a.k(r2, r3, r0)     // Catch: java.lang.Throwable -> L38
            r5.k(r6)     // Catch: java.lang.Throwable -> L38
            va.a0 r6 = r5.f10621i     // Catch: java.lang.Throwable -> L38
            r6.b(r1)     // Catch: java.lang.Throwable -> L38
            goto La8
        L38:
            r6 = move-exception
            goto Lad
        L3b:
            r3 = 2
            if (r2 == 0) goto L7d
            boolean r4 = r2.f()     // Catch: java.lang.Throwable -> L38
            if (r4 != 0) goto L7d
            boolean r4 = r5.t()     // Catch: java.lang.Throwable -> L38
            if (r4 != 0) goto L7d
            boolean r4 = r5.u(r6)     // Catch: java.lang.Throwable -> L38
            if (r4 != 0) goto L51
            goto L7d
        L51:
            r2.h(r6)     // Catch: java.lang.Throwable -> L38
            com.facebook.imagepipeline.memory.a$a r2 = r5.f10620h     // Catch: java.lang.Throwable -> L38
            r2.b(r1)     // Catch: java.lang.Throwable -> L38
            com.facebook.imagepipeline.memory.a$a r2 = r5.f10619g     // Catch: java.lang.Throwable -> L38
            r2.a(r1)     // Catch: java.lang.Throwable -> L38
            va.a0 r2 = r5.f10621i     // Catch: java.lang.Throwable -> L38
            r2.c(r1)     // Catch: java.lang.Throwable -> L38
            boolean r1 = p8.a.w(r3)     // Catch: java.lang.Throwable -> L38
            if (r1 == 0) goto La8
            java.lang.Class r1 = r5.f10613a     // Catch: java.lang.Throwable -> L38
            java.lang.String r2 = "release (reuse) (object, size) = (%x, %s)"
            int r6 = java.lang.System.identityHashCode(r6)     // Catch: java.lang.Throwable -> L38
            java.lang.Integer r6 = java.lang.Integer.valueOf(r6)     // Catch: java.lang.Throwable -> L38
            java.lang.Integer r0 = java.lang.Integer.valueOf(r0)     // Catch: java.lang.Throwable -> L38
            p8.a.A(r1, r2, r6, r0)     // Catch: java.lang.Throwable -> L38
            goto La8
        L7d:
            if (r2 == 0) goto L82
            r2.b()     // Catch: java.lang.Throwable -> L38
        L82:
            boolean r2 = p8.a.w(r3)     // Catch: java.lang.Throwable -> L38
            if (r2 == 0) goto L9b
            java.lang.Class r2 = r5.f10613a     // Catch: java.lang.Throwable -> L38
            java.lang.String r3 = "release (free) (object, size) = (%x, %s)"
            int r4 = java.lang.System.identityHashCode(r6)     // Catch: java.lang.Throwable -> L38
            java.lang.Integer r4 = java.lang.Integer.valueOf(r4)     // Catch: java.lang.Throwable -> L38
            java.lang.Integer r0 = java.lang.Integer.valueOf(r0)     // Catch: java.lang.Throwable -> L38
            p8.a.A(r2, r3, r4, r0)     // Catch: java.lang.Throwable -> L38
        L9b:
            r5.k(r6)     // Catch: java.lang.Throwable -> L38
            com.facebook.imagepipeline.memory.a$a r6 = r5.f10619g     // Catch: java.lang.Throwable -> L38
            r6.a(r1)     // Catch: java.lang.Throwable -> L38
            va.a0 r6 = r5.f10621i     // Catch: java.lang.Throwable -> L38
            r6.b(r1)     // Catch: java.lang.Throwable -> L38
        La8:
            r5.w()     // Catch: java.lang.Throwable -> L38
            monitor-exit(r5)     // Catch: java.lang.Throwable -> L38
            return
        Lad:
            monitor-exit(r5)     // Catch: java.lang.Throwable -> L38
            throw r6
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.imagepipeline.memory.a.release(java.lang.Object):void");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void s() {
        this.f10614b.a(this);
        this.f10621i.f(this);
    }

    synchronized boolean t() {
        boolean z10;
        if (this.f10619g.f10624b + this.f10620h.f10624b > this.f10615c.f51997b) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            this.f10621i.a();
        }
        return z10;
    }

    protected boolean u(Object obj) {
        j.g(obj);
        return true;
    }

    com.facebook.imagepipeline.memory.b x(int i10) {
        return new com.facebook.imagepipeline.memory.b(p(i10), Integer.MAX_VALUE, 0, this.f10615c.f52001f);
    }

    synchronized void y(int i10) {
        try {
            int i11 = this.f10619g.f10624b;
            int i12 = this.f10620h.f10624b;
            int min = Math.min((i11 + i12) - i10, i12);
            if (min <= 0) {
                return;
            }
            if (p8.a.w(2)) {
                p8.a.B(this.f10613a, "trimToSize: TargetSize = %d; Initial Size = %d; Bytes to free = %d", Integer.valueOf(i10), Integer.valueOf(this.f10619g.f10624b + this.f10620h.f10624b), Integer.valueOf(min));
            }
            w();
            for (int i13 = 0; i13 < this.f10616d.size() && min > 0; i13++) {
                com.facebook.imagepipeline.memory.b bVar = (com.facebook.imagepipeline.memory.b) j.g((com.facebook.imagepipeline.memory.b) this.f10616d.valueAt(i13));
                while (min > 0) {
                    Object g10 = bVar.g();
                    if (g10 == null) {
                        break;
                    }
                    k(g10);
                    int i14 = bVar.f10625a;
                    min -= i14;
                    this.f10620h.a(i14);
                }
            }
            w();
            if (p8.a.w(2)) {
                p8.a.A(this.f10613a, "trimToSize: TargetSize = %d; Final Size = %d", Integer.valueOf(i10), Integer.valueOf(this.f10619g.f10624b + this.f10620h.f10624b));
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    synchronized void z() {
        if (t()) {
            y(this.f10615c.f51997b);
        }
    }

    public a(r8.d dVar, z zVar, a0 a0Var, boolean z10) {
        this(dVar, zVar, a0Var);
        this.f10622j = z10;
    }
}
