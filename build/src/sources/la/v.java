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
    private final n.b f37036a;

    /* renamed from: b  reason: collision with root package name */
    final m f37037b;

    /* renamed from: c  reason: collision with root package name */
    final m f37038c;

    /* renamed from: e  reason: collision with root package name */
    private final b0 f37040e;

    /* renamed from: f  reason: collision with root package name */
    private final w.a f37041f;

    /* renamed from: g  reason: collision with root package name */
    private final Supplier f37042g;

    /* renamed from: h  reason: collision with root package name */
    protected MemoryCacheParams f37043h;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f37045j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f37046k;

    /* renamed from: d  reason: collision with root package name */
    final Map f37039d = new WeakHashMap();

    /* renamed from: i  reason: collision with root package name */
    private long f37044i = SystemClock.uptimeMillis();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements b0 {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ b0 f37047a;

        a(b0 b0Var) {
            this.f37047a = b0Var;
        }

        @Override // la.b0
        /* renamed from: b */
        public int a(n.a aVar) {
            if (v.this.f37045j) {
                return aVar.f37030g;
            }
            return this.f37047a.a(aVar.f37025b.D0());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements s8.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ n.a f37049a;

        b(n.a aVar) {
            this.f37049a = aVar;
        }

        @Override // s8.c
        public void release(Object obj) {
            v.this.y(this.f37049a);
        }
    }

    public v(b0 b0Var, w.a aVar, Supplier supplier, n.b bVar, boolean z10, boolean z11) {
        this.f37040e = b0Var;
        this.f37037b = new m(A(b0Var));
        this.f37038c = new m(A(b0Var));
        this.f37041f = aVar;
        this.f37042g = supplier;
        this.f37043h = (MemoryCacheParams) o8.j.h((MemoryCacheParams) supplier.get(), "mMemoryCacheParamsSupplier returned null");
        this.f37036a = bVar;
        this.f37045j = z10;
        this.f37046k = z11;
    }

    private b0 A(b0 b0Var) {
        return new a(b0Var);
    }

    /* JADX WARN: Code restructure failed: missing block: B:9:0x001c, code lost:
        if (l() <= (r3.f37043h.f11435a - r4)) goto L10;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private synchronized boolean i(int r4) {
        /*
            r3 = this;
            monitor-enter(r3)
            com.facebook.imagepipeline.cache.MemoryCacheParams r0 = r3.f37043h     // Catch: java.lang.Throwable -> L1f
            int r0 = r0.f11439e     // Catch: java.lang.Throwable -> L1f
            if (r4 > r0) goto L21
            int r0 = r3.k()     // Catch: java.lang.Throwable -> L1f
            com.facebook.imagepipeline.cache.MemoryCacheParams r1 = r3.f37043h     // Catch: java.lang.Throwable -> L1f
            int r1 = r1.f11436b     // Catch: java.lang.Throwable -> L1f
            r2 = 1
            int r1 = r1 - r2
            if (r0 > r1) goto L21
            int r0 = r3.l()     // Catch: java.lang.Throwable -> L1f
            com.facebook.imagepipeline.cache.MemoryCacheParams r1 = r3.f37043h     // Catch: java.lang.Throwable -> L1f
            int r1 = r1.f11435a     // Catch: java.lang.Throwable -> L1f
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
        if (aVar.f37026c > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        o8.j.i(z10);
        aVar.f37026c--;
    }

    private synchronized void m(n.a aVar) {
        o8.j.g(aVar);
        o8.j.i(!aVar.f37027d);
        aVar.f37026c++;
    }

    private synchronized void n(n.a aVar) {
        o8.j.g(aVar);
        o8.j.i(!aVar.f37027d);
        aVar.f37027d = true;
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
        if (!aVar.f37027d && aVar.f37026c == 0) {
            this.f37037b.h(aVar.f37024a, aVar);
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
        if (aVar != null && (bVar = aVar.f37028e) != null) {
            bVar.a(aVar.f37024a, true);
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
        if (aVar != null && (bVar = aVar.f37028e) != null) {
            bVar.a(aVar.f37024a, false);
        }
    }

    private synchronized void v() {
        if (this.f37044i + this.f37043h.f11440f > SystemClock.uptimeMillis()) {
            return;
        }
        this.f37044i = SystemClock.uptimeMillis();
        this.f37043h = (MemoryCacheParams) o8.j.h((MemoryCacheParams) this.f37042g.get(), "mMemoryCacheParamsSupplier returned null");
    }

    private synchronized CloseableReference w(n.a aVar) {
        m(aVar);
        return CloseableReference.U0(aVar.f37025b.D0(), new b(aVar));
    }

    private synchronized CloseableReference x(n.a aVar) {
        CloseableReference closeableReference;
        o8.j.g(aVar);
        if (aVar.f37027d && aVar.f37026c == 0) {
            closeableReference = aVar.f37025b;
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
        if (this.f37037b.c() <= max && this.f37037b.f() <= max2) {
            return null;
        }
        ArrayList arrayList = new ArrayList();
        while (true) {
            if (this.f37037b.c() <= max && this.f37037b.f() <= max2) {
                break;
            }
            Object d10 = this.f37037b.d();
            if (d10 == null) {
                if (this.f37046k) {
                    this.f37037b.k();
                } else {
                    throw new IllegalStateException(String.format("key is null, but exclusiveEntries count: %d, size: %d", Integer.valueOf(this.f37037b.c()), Integer.valueOf(this.f37037b.f())));
                }
            } else {
                this.f37037b.i(d10);
                arrayList.add((n.a) this.f37038c.i(d10));
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
                aVar = (n.a) this.f37037b.i(obj);
                n.a aVar2 = (n.a) this.f37038c.i(obj);
                closeableReference2 = null;
                if (aVar2 != null) {
                    n(aVar2);
                    closeableReference3 = x(aVar2);
                } else {
                    closeableReference3 = null;
                }
                int a10 = this.f37040e.a(closeableReference.D0());
                if (i(a10)) {
                    if (this.f37045j) {
                        b10 = n.a.a(obj, closeableReference, a10, bVar);
                    } else {
                        b10 = n.a.b(obj, closeableReference, bVar);
                    }
                    this.f37038c.h(obj, b10);
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
                n.a aVar = (n.a) this.f37037b.i(obj);
                if (aVar != null) {
                    this.f37037b.h(obj, aVar);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // la.w
    public CloseableReference c(Object obj, CloseableReference closeableReference) {
        return a(obj, closeableReference, this.f37036a);
    }

    @Override // la.w
    public synchronized boolean contains(Object obj) {
        return this.f37038c.a(obj);
    }

    @Override // la.n
    public CloseableReference d(Object obj) {
        n.a aVar;
        boolean z10;
        CloseableReference closeableReference;
        o8.j.g(obj);
        synchronized (this) {
            try {
                aVar = (n.a) this.f37037b.i(obj);
                z10 = false;
                if (aVar != null) {
                    n.a aVar2 = (n.a) this.f37038c.i(obj);
                    o8.j.g(aVar2);
                    if (aVar2.f37026c == 0) {
                        z10 = true;
                    }
                    o8.j.i(z10);
                    closeableReference = aVar2.f37025b;
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
        return !this.f37038c.e(kVar).isEmpty();
    }

    @Override // la.w
    public int f(o8.k kVar) {
        ArrayList j10;
        ArrayList j11;
        synchronized (this) {
            j10 = this.f37037b.j(kVar);
            j11 = this.f37038c.j(kVar);
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
                aVar = (n.a) this.f37037b.i(obj);
                n.a aVar2 = (n.a) this.f37038c.b(obj);
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
        return this.f37038c.c() - this.f37037b.c();
    }

    public synchronized int l() {
        return this.f37038c.f() - this.f37037b.f();
    }

    public void r() {
        ArrayList z10;
        synchronized (this) {
            MemoryCacheParams memoryCacheParams = this.f37043h;
            int min = Math.min(memoryCacheParams.f11438d, memoryCacheParams.f11436b - k());
            MemoryCacheParams memoryCacheParams2 = this.f37043h;
            z10 = z(min, Math.min(memoryCacheParams2.f11437c, memoryCacheParams2.f11435a - l()));
            o(z10);
        }
        q(z10);
        t(z10);
    }
}
