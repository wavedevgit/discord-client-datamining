package com.facebook.imagepipeline.memory;

import android.util.SparseArray;
import android.util.SparseIntArray;
import java.util.Set;
import p8.j;
import p8.l;
import p8.n;
import wa.a0;
import wa.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a implements s8.f {

    /* renamed from: a  reason: collision with root package name */
    private final Class f11229a;

    /* renamed from: b  reason: collision with root package name */
    final s8.d f11230b;

    /* renamed from: c  reason: collision with root package name */
    final z f11231c;

    /* renamed from: d  reason: collision with root package name */
    final SparseArray f11232d;

    /* renamed from: e  reason: collision with root package name */
    final Set f11233e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f11234f;

    /* renamed from: g  reason: collision with root package name */
    final C0155a f11235g;

    /* renamed from: h  reason: collision with root package name */
    final C0155a f11236h;

    /* renamed from: i  reason: collision with root package name */
    private final a0 f11237i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f11238j;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.facebook.imagepipeline.memory.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class C0155a {

        /* renamed from: a  reason: collision with root package name */
        int f11239a;

        /* renamed from: b  reason: collision with root package name */
        int f11240b;

        C0155a() {
        }

        public void a(int i10) {
            int i11;
            int i12 = this.f11240b;
            if (i12 >= i10 && (i11 = this.f11239a) > 0) {
                this.f11239a = i11 - 1;
                this.f11240b = i12 - i10;
                return;
            }
            q8.a.O("com.facebook.imagepipeline.memory.BasePool.Counter", "Unexpected decrement of %d. Current numBytes = %d, count = %d", Integer.valueOf(i10), Integer.valueOf(this.f11240b), Integer.valueOf(this.f11239a));
        }

        public void b(int i10) {
            this.f11239a++;
            this.f11240b += i10;
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

    public a(s8.d dVar, z zVar, a0 a0Var) {
        this.f11229a = getClass();
        this.f11230b = (s8.d) j.g(dVar);
        z zVar2 = (z) j.g(zVar);
        this.f11231c = zVar2;
        this.f11237i = (a0) j.g(a0Var);
        this.f11232d = new SparseArray();
        if (zVar2.f52470f) {
            r();
        } else {
            v(new SparseIntArray(0));
        }
        this.f11233e = l.b();
        this.f11236h = new C0155a();
        this.f11235g = new C0155a();
    }

    private synchronized void i() {
        boolean z10;
        try {
            if (t() && this.f11236h.f11240b != 0) {
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
        this.f11232d.clear();
        for (int i10 = 0; i10 < sparseIntArray.size(); i10++) {
            int keyAt = sparseIntArray.keyAt(i10);
            this.f11232d.put(keyAt, new com.facebook.imagepipeline.memory.b(p(keyAt), sparseIntArray.valueAt(i10), 0, this.f11231c.f52470f));
        }
    }

    private synchronized com.facebook.imagepipeline.memory.b m(int i10) {
        return (com.facebook.imagepipeline.memory.b) this.f11232d.get(i10);
    }

    private synchronized void r() {
        try {
            SparseIntArray sparseIntArray = this.f11231c.f52467c;
            if (sparseIntArray != null) {
                j(sparseIntArray);
                this.f11234f = false;
            } else {
                this.f11234f = true;
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    private synchronized void v(SparseIntArray sparseIntArray) {
        try {
            j.g(sparseIntArray);
            this.f11232d.clear();
            SparseIntArray sparseIntArray2 = this.f11231c.f52467c;
            if (sparseIntArray2 != null) {
                for (int i10 = 0; i10 < sparseIntArray2.size(); i10++) {
                    int keyAt = sparseIntArray2.keyAt(i10);
                    this.f11232d.put(keyAt, new com.facebook.imagepipeline.memory.b(p(keyAt), sparseIntArray2.valueAt(i10), sparseIntArray.get(keyAt, 0), this.f11231c.f52470f));
                }
                this.f11234f = false;
            } else {
                this.f11234f = true;
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    private void w() {
        if (q8.a.w(2)) {
            q8.a.C(this.f11229a, "Used = (%d, %d); Free = (%d, %d)", Integer.valueOf(this.f11235g.f11239a), Integer.valueOf(this.f11235g.f11240b), Integer.valueOf(this.f11236h.f11239a), Integer.valueOf(this.f11236h.f11240b));
        }
    }

    protected abstract Object g(int i10);

    @Override // s8.f
    public Object get(int i10) {
        Object obj;
        Object q10;
        i();
        int n10 = n(i10);
        synchronized (this) {
            try {
                com.facebook.imagepipeline.memory.b l10 = l(n10);
                if (l10 != null && (q10 = q(l10)) != null) {
                    j.i(this.f11233e.add(q10));
                    int o10 = o(q10);
                    int p10 = p(o10);
                    this.f11235g.b(p10);
                    this.f11236h.a(p10);
                    this.f11237i.e(p10);
                    w();
                    if (q8.a.w(2)) {
                        q8.a.A(this.f11229a, "get (reuse) (object, size) = (%x, %s)", Integer.valueOf(System.identityHashCode(q10)), Integer.valueOf(o10));
                    }
                    return q10;
                }
                int p11 = p(n10);
                if (h(p11)) {
                    this.f11235g.b(p11);
                    if (l10 != null) {
                        l10.e();
                    }
                    try {
                        obj = g(n10);
                    } catch (Throwable th2) {
                        synchronized (this) {
                            try {
                                this.f11235g.a(p11);
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
                            j.i(this.f11233e.add(obj));
                            z();
                            this.f11237i.d(p11);
                            w();
                            if (q8.a.w(2)) {
                                q8.a.A(this.f11229a, "get (alloc) (object, size) = (%x, %s)", Integer.valueOf(System.identityHashCode(obj)), Integer.valueOf(n10));
                            }
                        } finally {
                        }
                    }
                    return obj;
                }
                throw new c(this.f11231c.f52465a, this.f11235g.f11240b, this.f11236h.f11240b, p11);
            } finally {
            }
        }
    }

    synchronized boolean h(int i10) {
        if (this.f11238j) {
            return true;
        }
        z zVar = this.f11231c;
        int i11 = zVar.f52465a;
        int i12 = this.f11235g.f11240b;
        if (i10 > i11 - i12) {
            this.f11237i.g();
            return false;
        }
        int i13 = zVar.f52466b;
        if (i10 > i13 - (i12 + this.f11236h.f11240b)) {
            y(i13 - i10);
        }
        if (i10 <= i11 - (this.f11235g.f11240b + this.f11236h.f11240b)) {
            return true;
        }
        this.f11237i.g();
        return false;
    }

    protected abstract void k(Object obj);

    synchronized com.facebook.imagepipeline.memory.b l(int i10) {
        try {
            com.facebook.imagepipeline.memory.b bVar = (com.facebook.imagepipeline.memory.b) this.f11232d.get(i10);
            if (bVar == null && this.f11234f) {
                if (q8.a.w(2)) {
                    q8.a.z(this.f11229a, "creating new bucket %s", Integer.valueOf(i10));
                }
                com.facebook.imagepipeline.memory.b x10 = x(i10);
                this.f11232d.put(i10, x10);
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
    @Override // s8.f, t8.c
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void release(java.lang.Object r6) {
        /*
            r5 = this;
            p8.j.g(r6)
            int r0 = r5.o(r6)
            int r1 = r5.p(r0)
            monitor-enter(r5)
            com.facebook.imagepipeline.memory.b r2 = r5.m(r0)     // Catch: java.lang.Throwable -> L38
            java.util.Set r3 = r5.f11233e     // Catch: java.lang.Throwable -> L38
            boolean r3 = r3.remove(r6)     // Catch: java.lang.Throwable -> L38
            if (r3 != 0) goto L3b
            java.lang.Class r2 = r5.f11229a     // Catch: java.lang.Throwable -> L38
            java.lang.String r3 = "release (free, value unrecognized) (object, size) = (%x, %s)"
            int r4 = java.lang.System.identityHashCode(r6)     // Catch: java.lang.Throwable -> L38
            java.lang.Integer r4 = java.lang.Integer.valueOf(r4)     // Catch: java.lang.Throwable -> L38
            java.lang.Integer r0 = java.lang.Integer.valueOf(r0)     // Catch: java.lang.Throwable -> L38
            java.lang.Object[] r0 = new java.lang.Object[]{r4, r0}     // Catch: java.lang.Throwable -> L38
            q8.a.k(r2, r3, r0)     // Catch: java.lang.Throwable -> L38
            r5.k(r6)     // Catch: java.lang.Throwable -> L38
            wa.a0 r6 = r5.f11237i     // Catch: java.lang.Throwable -> L38
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
            com.facebook.imagepipeline.memory.a$a r2 = r5.f11236h     // Catch: java.lang.Throwable -> L38
            r2.b(r1)     // Catch: java.lang.Throwable -> L38
            com.facebook.imagepipeline.memory.a$a r2 = r5.f11235g     // Catch: java.lang.Throwable -> L38
            r2.a(r1)     // Catch: java.lang.Throwable -> L38
            wa.a0 r2 = r5.f11237i     // Catch: java.lang.Throwable -> L38
            r2.c(r1)     // Catch: java.lang.Throwable -> L38
            boolean r1 = q8.a.w(r3)     // Catch: java.lang.Throwable -> L38
            if (r1 == 0) goto La8
            java.lang.Class r1 = r5.f11229a     // Catch: java.lang.Throwable -> L38
            java.lang.String r2 = "release (reuse) (object, size) = (%x, %s)"
            int r6 = java.lang.System.identityHashCode(r6)     // Catch: java.lang.Throwable -> L38
            java.lang.Integer r6 = java.lang.Integer.valueOf(r6)     // Catch: java.lang.Throwable -> L38
            java.lang.Integer r0 = java.lang.Integer.valueOf(r0)     // Catch: java.lang.Throwable -> L38
            q8.a.A(r1, r2, r6, r0)     // Catch: java.lang.Throwable -> L38
            goto La8
        L7d:
            if (r2 == 0) goto L82
            r2.b()     // Catch: java.lang.Throwable -> L38
        L82:
            boolean r2 = q8.a.w(r3)     // Catch: java.lang.Throwable -> L38
            if (r2 == 0) goto L9b
            java.lang.Class r2 = r5.f11229a     // Catch: java.lang.Throwable -> L38
            java.lang.String r3 = "release (free) (object, size) = (%x, %s)"
            int r4 = java.lang.System.identityHashCode(r6)     // Catch: java.lang.Throwable -> L38
            java.lang.Integer r4 = java.lang.Integer.valueOf(r4)     // Catch: java.lang.Throwable -> L38
            java.lang.Integer r0 = java.lang.Integer.valueOf(r0)     // Catch: java.lang.Throwable -> L38
            q8.a.A(r2, r3, r4, r0)     // Catch: java.lang.Throwable -> L38
        L9b:
            r5.k(r6)     // Catch: java.lang.Throwable -> L38
            com.facebook.imagepipeline.memory.a$a r6 = r5.f11235g     // Catch: java.lang.Throwable -> L38
            r6.a(r1)     // Catch: java.lang.Throwable -> L38
            wa.a0 r6 = r5.f11237i     // Catch: java.lang.Throwable -> L38
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
        this.f11230b.a(this);
        this.f11237i.f(this);
    }

    synchronized boolean t() {
        boolean z10;
        if (this.f11235g.f11240b + this.f11236h.f11240b > this.f11231c.f52466b) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            this.f11237i.a();
        }
        return z10;
    }

    protected boolean u(Object obj) {
        j.g(obj);
        return true;
    }

    com.facebook.imagepipeline.memory.b x(int i10) {
        return new com.facebook.imagepipeline.memory.b(p(i10), Integer.MAX_VALUE, 0, this.f11231c.f52470f);
    }

    synchronized void y(int i10) {
        try {
            int i11 = this.f11235g.f11240b;
            int i12 = this.f11236h.f11240b;
            int min = Math.min((i11 + i12) - i10, i12);
            if (min <= 0) {
                return;
            }
            if (q8.a.w(2)) {
                q8.a.B(this.f11229a, "trimToSize: TargetSize = %d; Initial Size = %d; Bytes to free = %d", Integer.valueOf(i10), Integer.valueOf(this.f11235g.f11240b + this.f11236h.f11240b), Integer.valueOf(min));
            }
            w();
            for (int i13 = 0; i13 < this.f11232d.size() && min > 0; i13++) {
                com.facebook.imagepipeline.memory.b bVar = (com.facebook.imagepipeline.memory.b) j.g((com.facebook.imagepipeline.memory.b) this.f11232d.valueAt(i13));
                while (min > 0) {
                    Object g10 = bVar.g();
                    if (g10 == null) {
                        break;
                    }
                    k(g10);
                    int i14 = bVar.f11241a;
                    min -= i14;
                    this.f11236h.a(i14);
                }
            }
            w();
            if (q8.a.w(2)) {
                q8.a.A(this.f11229a, "trimToSize: TargetSize = %d; Final Size = %d", Integer.valueOf(i10), Integer.valueOf(this.f11235g.f11240b + this.f11236h.f11240b));
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    synchronized void z() {
        if (t()) {
            y(this.f11231c.f52466b);
        }
    }

    public a(s8.d dVar, z zVar, a0 a0Var, boolean z10) {
        this(dVar, zVar, a0Var);
        this.f11238j = z10;
    }
}
