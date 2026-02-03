package la;

import android.os.SystemClock;
import com.facebook.common.internal.Supplier;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.cache.MemoryCacheParams;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Map;
import java.util.WeakHashMap;
import la.n;
import la.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class v implements n, w {

    /* renamed from: a  reason: collision with root package name */
    private final n.b f36635a;

    /* renamed from: b  reason: collision with root package name */
    final m f36636b;

    /* renamed from: c  reason: collision with root package name */
    final m f36637c;

    /* renamed from: e  reason: collision with root package name */
    private final b0 f36639e;

    /* renamed from: f  reason: collision with root package name */
    private final w.a f36640f;

    /* renamed from: g  reason: collision with root package name */
    private final Supplier f36641g;

    /* renamed from: h  reason: collision with root package name */
    protected MemoryCacheParams f36642h;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f36644j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f36645k;

    /* renamed from: d  reason: collision with root package name */
    final Map f36638d = new WeakHashMap();

    /* renamed from: i  reason: collision with root package name */
    private long f36643i = SystemClock.uptimeMillis();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements b0 {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ b0 f36646a;

        a(b0 b0Var) {
            this.f36646a = b0Var;
        }

        @Override // la.b0
        /* renamed from: b */
        public int a(n.a aVar) {
            if (v.this.f36644j) {
                return aVar.f36629g;
            }
            return this.f36646a.a(aVar.f36624b.C0());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements s8.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ n.a f36648a;

        b(n.a aVar) {
            this.f36648a = aVar;
        }

        @Override // s8.c
        public void release(Object obj) {
            v.this.y(this.f36648a);
        }
    }

    public v(b0 b0Var, w.a aVar, Supplier supplier, n.b bVar, boolean z10, boolean z11) {
        this.f36639e = b0Var;
        this.f36636b = new m(A(b0Var));
        this.f36637c = new m(A(b0Var));
        this.f36640f = aVar;
        this.f36641g = supplier;
        this.f36642h = (MemoryCacheParams) o8.j.h((MemoryCacheParams) supplier.get(), "mMemoryCacheParamsSupplier returned null");
        this.f36635a = bVar;
        this.f36644j = z10;
        this.f36645k = z11;
    }

    private b0 A(b0 b0Var) {
        return new a(b0Var);
    }

    /* JADX WARN: Code restructure failed: missing block: B:9:0x001c, code lost:
        if (l() <= (r3.f36642h.f10032a - r4)) goto L10;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private synchronized boolean i(int r4) {
        /*
            r3 = this;
            monitor-enter(r3)
            com.facebook.imagepipeline.cache.MemoryCacheParams r0 = r3.f36642h     // Catch: java.lang.Throwable -> L1f
            int r0 = r0.f10036e     // Catch: java.lang.Throwable -> L1f
            if (r4 > r0) goto L21
            int r0 = r3.k()     // Catch: java.lang.Throwable -> L1f
            com.facebook.imagepipeline.cache.MemoryCacheParams r1 = r3.f36642h     // Catch: java.lang.Throwable -> L1f
            int r1 = r1.f10033b     // Catch: java.lang.Throwable -> L1f
            r2 = 1
            int r1 = r1 - r2
            if (r0 > r1) goto L21
            int r0 = r3.l()     // Catch: java.lang.Throwable -> L1f
            com.facebook.imagepipeline.cache.MemoryCacheParams r1 = r3.f36642h     // Catch: java.lang.Throwable -> L1f
            int r1 = r1.f10032a     // Catch: java.lang.Throwable -> L1f
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
        throw new UnsupportedOperationException("Method not decompiled: la.v.i(int):boolean");
    }

    private synchronized void j(n.a aVar) {
        boolean z10;
        o8.j.g(aVar);
        if (aVar.f36625c > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        o8.j.i(z10);
        aVar.f36625c--;
    }

    private synchronized void m(n.a aVar) {
        o8.j.g(aVar);
        o8.j.i(!aVar.f36626d);
        aVar.f36625c++;
    }

    private synchronized void n(n.a aVar) {
        o8.j.g(aVar);
        o8.j.i(!aVar.f36626d);
        aVar.f36626d = true;
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
        if (!aVar.f36626d && aVar.f36625c == 0) {
            this.f36636b.h(aVar.f36623a, aVar);
            return true;
        }
        return false;
    }

    private void q(ArrayList arrayList) {
        if (arrayList != null) {
            Iterator it = arrayList.iterator();
            while (it.hasNext()) {
                CloseableReference.N(x((n.a) it.next()));
            }
        }
    }

    private static void s(n.a aVar) {
        n.b bVar;
        if (aVar != null && (bVar = aVar.f36627e) != null) {
            bVar.a(aVar.f36623a, true);
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
        if (aVar != null && (bVar = aVar.f36627e) != null) {
            bVar.a(aVar.f36623a, false);
        }
    }

    private synchronized void v() {
        if (this.f36643i + this.f36642h.f10037f > SystemClock.uptimeMillis()) {
            return;
        }
        this.f36643i = SystemClock.uptimeMillis();
        this.f36642h = (MemoryCacheParams) o8.j.h((MemoryCacheParams) this.f36641g.get(), "mMemoryCacheParamsSupplier returned null");
    }

    private synchronized CloseableReference w(n.a aVar) {
        m(aVar);
        return CloseableReference.V0(aVar.f36624b.C0(), new b(aVar));
    }

    private synchronized CloseableReference x(n.a aVar) {
        CloseableReference closeableReference;
        o8.j.g(aVar);
        if (aVar.f36626d && aVar.f36625c == 0) {
            closeableReference = aVar.f36624b;
        } else {
            closeableReference = null;
        }
        return closeableReference;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void y(n.a aVar) {
        boolean p10;
        CloseableReference x10;
        o8.j.g(aVar);
        synchronized (this) {
            j(aVar);
            p10 = p(aVar);
            x10 = x(aVar);
        }
        CloseableReference.N(x10);
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
        if (this.f36636b.c() <= max && this.f36636b.f() <= max2) {
            return null;
        }
        ArrayList arrayList = new ArrayList();
        while (true) {
            if (this.f36636b.c() <= max && this.f36636b.f() <= max2) {
                break;
            }
            Object d10 = this.f36636b.d();
            if (d10 == null) {
                if (this.f36645k) {
                    this.f36636b.k();
                } else {
                    throw new IllegalStateException(String.format("key is null, but exclusiveEntries count: %d, size: %d", Integer.valueOf(this.f36636b.c()), Integer.valueOf(this.f36636b.f())));
                }
            } else {
                this.f36636b.i(d10);
                arrayList.add((n.a) this.f36637c.i(d10));
            }
        }
        return arrayList;
    }

    @Override // la.n
    public CloseableReference a(Object obj, CloseableReference closeableReference, n.b bVar) {
        n.a aVar;
        CloseableReference closeableReference2;
        CloseableReference closeableReference3;
        n.a b10;
        o8.j.g(obj);
        o8.j.g(closeableReference);
        v();
        synchronized (this) {
            try {
                aVar = (n.a) this.f36636b.i(obj);
                n.a aVar2 = (n.a) this.f36637c.i(obj);
                closeableReference2 = null;
                if (aVar2 != null) {
                    n(aVar2);
                    closeableReference3 = x(aVar2);
                } else {
                    closeableReference3 = null;
                }
                int a10 = this.f36639e.a(closeableReference.C0());
                if (i(a10)) {
                    if (this.f36644j) {
                        b10 = n.a.a(obj, closeableReference, a10, bVar);
                    } else {
                        b10 = n.a.b(obj, closeableReference, bVar);
                    }
                    this.f36637c.h(obj, b10);
                    closeableReference2 = w(b10);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        CloseableReference.N(closeableReference3);
        u(aVar);
        r();
        return closeableReference2;
    }

    @Override // la.w
    public void b(Object obj) {
        o8.j.g(obj);
        synchronized (this) {
            try {
                n.a aVar = (n.a) this.f36636b.i(obj);
                if (aVar != null) {
                    this.f36636b.h(obj, aVar);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // la.w
    public CloseableReference c(Object obj, CloseableReference closeableReference) {
        return a(obj, closeableReference, this.f36635a);
    }

    @Override // la.w
    public synchronized boolean contains(Object obj) {
        return this.f36637c.a(obj);
    }

    @Override // la.n
    public CloseableReference d(Object obj) {
        n.a aVar;
        boolean z10;
        CloseableReference closeableReference;
        o8.j.g(obj);
        synchronized (this) {
            try {
                aVar = (n.a) this.f36636b.i(obj);
                z10 = false;
                if (aVar != null) {
                    n.a aVar2 = (n.a) this.f36637c.i(obj);
                    o8.j.g(aVar2);
                    if (aVar2.f36625c == 0) {
                        z10 = true;
                    }
                    o8.j.i(z10);
                    closeableReference = aVar2.f36624b;
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

    @Override // la.w
    public synchronized boolean e(o8.k kVar) {
        return !this.f36637c.e(kVar).isEmpty();
    }

    @Override // la.w
    public int f(o8.k kVar) {
        ArrayList j10;
        ArrayList j11;
        synchronized (this) {
            j10 = this.f36636b.j(kVar);
            j11 = this.f36637c.j(kVar);
            o(j11);
        }
        q(j11);
        t(j10);
        v();
        r();
        return j11.size();
    }

    @Override // la.w
    public CloseableReference get(Object obj) {
        n.a aVar;
        CloseableReference closeableReference;
        o8.j.g(obj);
        synchronized (this) {
            try {
                aVar = (n.a) this.f36636b.i(obj);
                n.a aVar2 = (n.a) this.f36637c.b(obj);
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
        return this.f36637c.c() - this.f36636b.c();
    }

    public synchronized int l() {
        return this.f36637c.f() - this.f36636b.f();
    }

    public void r() {
        ArrayList z10;
        synchronized (this) {
            MemoryCacheParams memoryCacheParams = this.f36642h;
            int min = Math.min(memoryCacheParams.f10035d, memoryCacheParams.f10033b - k());
            MemoryCacheParams memoryCacheParams2 = this.f36642h;
            z10 = z(min, Math.min(memoryCacheParams2.f10034c, memoryCacheParams2.f10032a - l()));
            o(z10);
        }
        q(z10);
        t(z10);
    }
}
