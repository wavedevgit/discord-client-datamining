package androidx.camera.core;

import a0.j1;
import a0.u;
import android.media.ImageReader;
import android.util.LongSparseArray;
import android.view.Surface;
import androidx.camera.core.e;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Executor;
import x.p0;
import x.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p implements j1, e.a {

    /* renamed from: a  reason: collision with root package name */
    private final Object f2167a;

    /* renamed from: b  reason: collision with root package name */
    private a0.k f2168b;

    /* renamed from: c  reason: collision with root package name */
    private int f2169c;

    /* renamed from: d  reason: collision with root package name */
    private j1.a f2170d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f2171e;

    /* renamed from: f  reason: collision with root package name */
    private final j1 f2172f;

    /* renamed from: g  reason: collision with root package name */
    j1.a f2173g;

    /* renamed from: h  reason: collision with root package name */
    private Executor f2174h;

    /* renamed from: i  reason: collision with root package name */
    private final LongSparseArray f2175i;

    /* renamed from: j  reason: collision with root package name */
    private final LongSparseArray f2176j;

    /* renamed from: k  reason: collision with root package name */
    private int f2177k;

    /* renamed from: l  reason: collision with root package name */
    private final List f2178l;

    /* renamed from: m  reason: collision with root package name */
    private final List f2179m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends a0.k {
        a() {
        }

        @Override // a0.k
        public void b(int i10, u uVar) {
            super.b(i10, uVar);
            p.this.q(uVar);
        }
    }

    public p(int i10, int i11, int i12, int i13) {
        this(j(i10, i11, i12, i13));
    }

    public static /* synthetic */ void h(p pVar, j1.a aVar) {
        pVar.getClass();
        aVar.a(pVar);
    }

    public static /* synthetic */ void i(p pVar, j1 j1Var) {
        synchronized (pVar.f2167a) {
            pVar.f2169c++;
        }
        pVar.n(j1Var);
    }

    private static j1 j(int i10, int i11, int i12, int i13) {
        return new d(ImageReader.newInstance(i10, i11, i12, i13));
    }

    private void k(n nVar) {
        synchronized (this.f2167a) {
            try {
                int indexOf = this.f2178l.indexOf(nVar);
                if (indexOf >= 0) {
                    this.f2178l.remove(indexOf);
                    int i10 = this.f2177k;
                    if (indexOf <= i10) {
                        this.f2177k = i10 - 1;
                    }
                }
                this.f2179m.remove(nVar);
                if (this.f2169c > 0) {
                    n(this.f2172f);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void l(r rVar) {
        final j1.a aVar;
        Executor executor;
        synchronized (this.f2167a) {
            try {
                if (this.f2178l.size() < f()) {
                    rVar.a(this);
                    this.f2178l.add(rVar);
                    aVar = this.f2173g;
                    executor = this.f2174h;
                } else {
                    y0.a("TAG", "Maximum image number reached.");
                    rVar.close();
                    aVar = null;
                    executor = null;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        if (aVar != null) {
            if (executor != null) {
                executor.execute(new Runnable() { // from class: x.a1
                    @Override // java.lang.Runnable
                    public final void run() {
                        androidx.camera.core.p.h(androidx.camera.core.p.this, aVar);
                    }
                });
            } else {
                aVar.a(this);
            }
        }
    }

    private void o() {
        synchronized (this.f2167a) {
            try {
                for (int size = this.f2175i.size() - 1; size >= 0; size--) {
                    p0 p0Var = (p0) this.f2175i.valueAt(size);
                    long a10 = p0Var.a();
                    n nVar = (n) this.f2176j.get(a10);
                    if (nVar != null) {
                        this.f2176j.remove(a10);
                        this.f2175i.removeAt(size);
                        l(new r(nVar, p0Var));
                    }
                }
                p();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void p() {
        synchronized (this.f2167a) {
            try {
                if (this.f2176j.size() != 0 && this.f2175i.size() != 0) {
                    long keyAt = this.f2176j.keyAt(0);
                    Long valueOf = Long.valueOf(keyAt);
                    long keyAt2 = this.f2175i.keyAt(0);
                    b2.e.a(!Long.valueOf(keyAt2).equals(valueOf));
                    if (keyAt2 > keyAt) {
                        for (int size = this.f2176j.size() - 1; size >= 0; size--) {
                            if (this.f2176j.keyAt(size) < keyAt2) {
                                ((n) this.f2176j.valueAt(size)).close();
                                this.f2176j.removeAt(size);
                            }
                        }
                    } else {
                        for (int size2 = this.f2175i.size() - 1; size2 >= 0; size2--) {
                            if (this.f2175i.keyAt(size2) < keyAt) {
                                this.f2175i.removeAt(size2);
                            }
                        }
                    }
                }
            } finally {
            }
        }
    }

    @Override // androidx.camera.core.e.a
    public void a(n nVar) {
        synchronized (this.f2167a) {
            k(nVar);
        }
    }

    @Override // a0.j1
    public n b() {
        synchronized (this.f2167a) {
            try {
                if (this.f2178l.isEmpty()) {
                    return null;
                }
                if (this.f2177k < this.f2178l.size()) {
                    ArrayList<n> arrayList = new ArrayList();
                    for (int i10 = 0; i10 < this.f2178l.size() - 1; i10++) {
                        if (!this.f2179m.contains(this.f2178l.get(i10))) {
                            arrayList.add((n) this.f2178l.get(i10));
                        }
                    }
                    for (n nVar : arrayList) {
                        nVar.close();
                    }
                    int size = this.f2178l.size();
                    List list = this.f2178l;
                    this.f2177k = size;
                    n nVar2 = (n) list.get(size - 1);
                    this.f2179m.add(nVar2);
                    return nVar2;
                }
                throw new IllegalStateException("Maximum image number reached.");
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // a0.j1
    public int c() {
        int c10;
        synchronized (this.f2167a) {
            c10 = this.f2172f.c();
        }
        return c10;
    }

    @Override // a0.j1
    public void close() {
        synchronized (this.f2167a) {
            try {
                if (this.f2171e) {
                    return;
                }
                for (n nVar : new ArrayList(this.f2178l)) {
                    nVar.close();
                }
                this.f2178l.clear();
                this.f2172f.close();
                this.f2171e = true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // a0.j1
    public void d() {
        synchronized (this.f2167a) {
            this.f2172f.d();
            this.f2173g = null;
            this.f2174h = null;
            this.f2169c = 0;
        }
    }

    @Override // a0.j1
    public void e(j1.a aVar, Executor executor) {
        synchronized (this.f2167a) {
            this.f2173g = (j1.a) b2.e.g(aVar);
            this.f2174h = (Executor) b2.e.g(executor);
            this.f2172f.e(this.f2170d, executor);
        }
    }

    @Override // a0.j1
    public int f() {
        int f10;
        synchronized (this.f2167a) {
            f10 = this.f2172f.f();
        }
        return f10;
    }

    @Override // a0.j1
    public n g() {
        synchronized (this.f2167a) {
            try {
                if (this.f2178l.isEmpty()) {
                    return null;
                }
                if (this.f2177k < this.f2178l.size()) {
                    List list = this.f2178l;
                    int i10 = this.f2177k;
                    this.f2177k = i10 + 1;
                    n nVar = (n) list.get(i10);
                    this.f2179m.add(nVar);
                    return nVar;
                }
                throw new IllegalStateException("Maximum image number reached.");
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // a0.j1
    public int getHeight() {
        int height;
        synchronized (this.f2167a) {
            height = this.f2172f.getHeight();
        }
        return height;
    }

    @Override // a0.j1
    public Surface getSurface() {
        Surface surface;
        synchronized (this.f2167a) {
            surface = this.f2172f.getSurface();
        }
        return surface;
    }

    @Override // a0.j1
    public int getWidth() {
        int width;
        synchronized (this.f2167a) {
            width = this.f2172f.getWidth();
        }
        return width;
    }

    public a0.k m() {
        return this.f2168b;
    }

    void n(j1 j1Var) {
        n nVar;
        synchronized (this.f2167a) {
            try {
                if (this.f2171e) {
                    return;
                }
                int size = this.f2176j.size() + this.f2178l.size();
                if (size >= j1Var.f()) {
                    y0.a("MetadataImageReader", "Skip to acquire the next image because the acquired image count has reached the max images count.");
                    return;
                }
                do {
                    try {
                        nVar = j1Var.g();
                        if (nVar != null) {
                            this.f2169c--;
                            size++;
                            this.f2176j.put(nVar.E().a(), nVar);
                            o();
                        }
                    } catch (IllegalStateException e10) {
                        y0.b("MetadataImageReader", "Failed to acquire next image.", e10);
                        nVar = null;
                    }
                    if (nVar == null || this.f2169c <= 0) {
                        break;
                    }
                } while (size < j1Var.f());
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    void q(u uVar) {
        synchronized (this.f2167a) {
            try {
                if (this.f2171e) {
                    return;
                }
                this.f2175i.put(uVar.a(), new e0.c(uVar));
                o();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    p(j1 j1Var) {
        this.f2167a = new Object();
        this.f2168b = new a();
        this.f2169c = 0;
        this.f2170d = new j1.a() { // from class: x.z0
            @Override // a0.j1.a
            public final void a(a0.j1 j1Var2) {
                androidx.camera.core.p.i(androidx.camera.core.p.this, j1Var2);
            }
        };
        this.f2171e = false;
        this.f2175i = new LongSparseArray();
        this.f2176j = new LongSparseArray();
        this.f2179m = new ArrayList();
        this.f2172f = j1Var;
        this.f2177k = 0;
        this.f2178l = new ArrayList(f());
    }
}
