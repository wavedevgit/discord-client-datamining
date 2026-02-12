package ma;

import android.os.SystemClock;
import com.facebook.common.internal.Supplier;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.cache.MemoryCacheParams;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Map;
import java.util.WeakHashMap;
import ma.n;
import ma.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class v implements n, w {

    /* renamed from: a  reason: collision with root package name */
    private final n.b f36209a;

    /* renamed from: b  reason: collision with root package name */
    final m f36210b;

    /* renamed from: c  reason: collision with root package name */
    final m f36211c;

    /* renamed from: e  reason: collision with root package name */
    private final b0 f36213e;

    /* renamed from: f  reason: collision with root package name */
    private final w.a f36214f;

    /* renamed from: g  reason: collision with root package name */
    private final Supplier f36215g;

    /* renamed from: h  reason: collision with root package name */
    protected MemoryCacheParams f36216h;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f36218j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f36219k;

    /* renamed from: d  reason: collision with root package name */
    final Map f36212d = new WeakHashMap();

    /* renamed from: i  reason: collision with root package name */
    private long f36217i = SystemClock.uptimeMillis();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements b0 {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ b0 f36220a;

        a(b0 b0Var) {
            this.f36220a = b0Var;
        }

        @Override // ma.b0
        /* renamed from: b */
        public int a(n.a aVar) {
            if (v.this.f36218j) {
                return aVar.f36203g;
            }
            return this.f36220a.a(aVar.f36198b.J());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements t8.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ n.a f36222a;

        b(n.a aVar) {
            this.f36222a = aVar;
        }

        @Override // t8.c
        public void release(Object obj) {
            v.this.y(this.f36222a);
        }
    }

    public v(b0 b0Var, w.a aVar, Supplier supplier, n.b bVar, boolean z10, boolean z11) {
        this.f36213e = b0Var;
        this.f36210b = new m(A(b0Var));
        this.f36211c = new m(A(b0Var));
        this.f36214f = aVar;
        this.f36215g = supplier;
        this.f36216h = (MemoryCacheParams) p8.j.h((MemoryCacheParams) supplier.get(), "mMemoryCacheParamsSupplier returned null");
        this.f36209a = bVar;
        this.f36218j = z10;
        this.f36219k = z11;
    }

    private b0 A(b0 b0Var) {
        return new a(b0Var);
    }

    /* JADX WARN: Code restructure failed: missing block: B:9:0x001c, code lost:
        if (l() <= (r3.f36216h.f11034a - r4)) goto L10;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private synchronized boolean i(int r4) {
        /*
            r3 = this;
            monitor-enter(r3)
            com.facebook.imagepipeline.cache.MemoryCacheParams r0 = r3.f36216h     // Catch: java.lang.Throwable -> L1f
            int r0 = r0.f11038e     // Catch: java.lang.Throwable -> L1f
            if (r4 > r0) goto L21
            int r0 = r3.k()     // Catch: java.lang.Throwable -> L1f
            com.facebook.imagepipeline.cache.MemoryCacheParams r1 = r3.f36216h     // Catch: java.lang.Throwable -> L1f
            int r1 = r1.f11035b     // Catch: java.lang.Throwable -> L1f
            r2 = 1
            int r1 = r1 - r2
            if (r0 > r1) goto L21
            int r0 = r3.l()     // Catch: java.lang.Throwable -> L1f
            com.facebook.imagepipeline.cache.MemoryCacheParams r1 = r3.f36216h     // Catch: java.lang.Throwable -> L1f
            int r1 = r1.f11034a     // Catch: java.lang.Throwable -> L1f
            int r1 = r1 - r4
            if (r0 > r1) goto L21
            goto L22
        L1f:
            r4 = move-exception
            goto L24
        L21:
            r2 = 0
        L22:
            monitor-exit(r3)
            return r2
        L24:
            monitor-exit(r3)     // Catch: java.lang.Throwable -> L1f
            throw r4
        */
        throw new UnsupportedOperationException("Method not decompiled: ma.v.i(int):boolean");
    }

    private synchronized void j(n.a aVar) {
        boolean z10;
        p8.j.g(aVar);
        if (aVar.f36199c > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        p8.j.i(z10);
        aVar.f36199c--;
    }

    private synchronized void m(n.a aVar) {
        p8.j.g(aVar);
        p8.j.i(!aVar.f36200d);
        aVar.f36199c++;
    }

    private synchronized void n(n.a aVar) {
        p8.j.g(aVar);
        p8.j.i(!aVar.f36200d);
        aVar.f36200d = true;
    }

    private synchronized void o(ArrayList arrayList) {
        if (arrayList != null) {
            Iterator it = arrayList.iterator();
            while (it.hasNext()) {
                n((n.a) it.next());
            }
        }
    }

    private synchronized boolean p(n.a aVar) {
        if (!aVar.f36200d && aVar.f36199c == 0) {
            this.f36210b.h(aVar.f36197a, aVar);
            return true;
        }
        return false;
    }

    private void q(ArrayList arrayList) {
        if (arrayList != null) {
            Iterator it = arrayList.iterator();
            while (it.hasNext()) {
                CloseableReference.z(x((n.a) it.next()));
            }
        }
    }

    private static void s(n.a aVar) {
        n.b bVar;
        if (aVar != null && (bVar = aVar.f36201e) != null) {
            bVar.a(aVar.f36197a, true);
        }
    }

    private void t(ArrayList arrayList) {
        if (arrayList != null) {
            Iterator it = arrayList.iterator();
            while (it.hasNext()) {
                u((n.a) it.next());
            }
        }
    }

    private static void u(n.a aVar) {
        n.b bVar;
        if (aVar != null && (bVar = aVar.f36201e) != null) {
            bVar.a(aVar.f36197a, false);
        }
    }

    private synchronized void v() {
        if (this.f36217i + this.f36216h.f11039f > SystemClock.uptimeMillis()) {
            return;
        }
        this.f36217i = SystemClock.uptimeMillis();
        this.f36216h = (MemoryCacheParams) p8.j.h((MemoryCacheParams) this.f36215g.get(), "mMemoryCacheParamsSupplier returned null");
    }

    private synchronized CloseableReference w(n.a aVar) {
        m(aVar);
        return CloseableReference.G0(aVar.f36198b.J(), new b(aVar));
    }

    private synchronized CloseableReference x(n.a aVar) {
        CloseableReference closeableReference;
        p8.j.g(aVar);
        if (aVar.f36200d && aVar.f36199c == 0) {
            closeableReference = aVar.f36198b;
        } else {
            closeableReference = null;
        }
        return closeableReference;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void y(n.a aVar) {
        boolean p10;
        CloseableReference x10;
        p8.j.g(aVar);
        synchronized (this) {
            j(aVar);
            p10 = p(aVar);
            x10 = x(aVar);
        }
        CloseableReference.z(x10);
        if (!p10) {
            aVar = null;
        }
        s(aVar);
        v();
        r();
    }

    private synchronized ArrayList z(int i10, int i11) {
        int max = Math.max(i10, 0);
        int max2 = Math.max(i11, 0);
        if (this.f36210b.c() <= max && this.f36210b.f() <= max2) {
            return null;
        }
        ArrayList arrayList = new ArrayList();
        while (true) {
            if (this.f36210b.c() <= max && this.f36210b.f() <= max2) {
                break;
            }
            Object d10 = this.f36210b.d();
            if (d10 == null) {
                if (this.f36219k) {
                    this.f36210b.k();
                } else {
                    throw new IllegalStateException(String.format("key is null, but exclusiveEntries count: %d, size: %d", Integer.valueOf(this.f36210b.c()), Integer.valueOf(this.f36210b.f())));
                }
            } else {
                this.f36210b.i(d10);
                arrayList.add((n.a) this.f36211c.i(d10));
            }
        }
        return arrayList;
    }

    @Override // ma.w
    public void a(Object obj) {
        p8.j.g(obj);
        synchronized (this) {
            try {
                n.a aVar = (n.a) this.f36210b.i(obj);
                if (aVar != null) {
                    this.f36210b.h(obj, aVar);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // ma.w
    public synchronized boolean b(p8.k kVar) {
        return !this.f36211c.e(kVar).isEmpty();
    }

    @Override // ma.w
    public CloseableReference c(Object obj, CloseableReference closeableReference) {
        return d(obj, closeableReference, this.f36209a);
    }

    @Override // ma.w
    public synchronized boolean contains(Object obj) {
        return this.f36211c.a(obj);
    }

    @Override // ma.n
    public CloseableReference d(Object obj, CloseableReference closeableReference, n.b bVar) {
        n.a aVar;
        CloseableReference closeableReference2;
        CloseableReference closeableReference3;
        n.a b10;
        p8.j.g(obj);
        p8.j.g(closeableReference);
        v();
        synchronized (this) {
            try {
                aVar = (n.a) this.f36210b.i(obj);
                n.a aVar2 = (n.a) this.f36211c.i(obj);
                closeableReference2 = null;
                if (aVar2 != null) {
                    n(aVar2);
                    closeableReference3 = x(aVar2);
                } else {
                    closeableReference3 = null;
                }
                int a10 = this.f36213e.a(closeableReference.J());
                if (i(a10)) {
                    if (this.f36218j) {
                        b10 = n.a.a(obj, closeableReference, a10, bVar);
                    } else {
                        b10 = n.a.b(obj, closeableReference, bVar);
                    }
                    this.f36211c.h(obj, b10);
                    closeableReference2 = w(b10);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        CloseableReference.z(closeableReference3);
        u(aVar);
        r();
        return closeableReference2;
    }

    @Override // ma.w
    public int e(p8.k kVar) {
        ArrayList j10;
        ArrayList j11;
        synchronized (this) {
            j10 = this.f36210b.j(kVar);
            j11 = this.f36211c.j(kVar);
            o(j11);
        }
        q(j11);
        t(j10);
        v();
        r();
        return j11.size();
    }

    @Override // ma.n
    public CloseableReference f(Object obj) {
        n.a aVar;
        boolean z10;
        CloseableReference closeableReference;
        p8.j.g(obj);
        synchronized (this) {
            try {
                aVar = (n.a) this.f36210b.i(obj);
                z10 = false;
                if (aVar != null) {
                    n.a aVar2 = (n.a) this.f36211c.i(obj);
                    p8.j.g(aVar2);
                    if (aVar2.f36199c == 0) {
                        z10 = true;
                    }
                    p8.j.i(z10);
                    closeableReference = aVar2.f36198b;
                    z10 = true;
                } else {
                    closeableReference = null;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        if (z10) {
            u(aVar);
        }
        return closeableReference;
    }

    @Override // ma.w
    public CloseableReference get(Object obj) {
        n.a aVar;
        CloseableReference closeableReference;
        p8.j.g(obj);
        synchronized (this) {
            try {
                aVar = (n.a) this.f36210b.i(obj);
                n.a aVar2 = (n.a) this.f36211c.b(obj);
                if (aVar2 != null) {
                    closeableReference = w(aVar2);
                } else {
                    closeableReference = null;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        u(aVar);
        v();
        r();
        return closeableReference;
    }

    public synchronized int k() {
        return this.f36211c.c() - this.f36210b.c();
    }

    public synchronized int l() {
        return this.f36211c.f() - this.f36210b.f();
    }

    public void r() {
        ArrayList z10;
        synchronized (this) {
            MemoryCacheParams memoryCacheParams = this.f36216h;
            int min = Math.min(memoryCacheParams.f11037d, memoryCacheParams.f11035b - k());
            MemoryCacheParams memoryCacheParams2 = this.f36216h;
            z10 = z(min, Math.min(memoryCacheParams2.f11036c, memoryCacheParams2.f11034a - l()));
            o(z10);
        }
        q(z10);
        t(z10);
    }
}
