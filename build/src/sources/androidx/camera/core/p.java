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
    private final Object f2467a;

    /* renamed from: b  reason: collision with root package name */
    private a0.k f2468b;

    /* renamed from: c  reason: collision with root package name */
    private int f2469c;

    /* renamed from: d  reason: collision with root package name */
    private j1.a f2470d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f2471e;

    /* renamed from: f  reason: collision with root package name */
    private final j1 f2472f;

    /* renamed from: g  reason: collision with root package name */
    j1.a f2473g;

    /* renamed from: h  reason: collision with root package name */
    private Executor f2474h;

    /* renamed from: i  reason: collision with root package name */
    private final LongSparseArray f2475i;

    /* renamed from: j  reason: collision with root package name */
    private final LongSparseArray f2476j;

    /* renamed from: k  reason: collision with root package name */
    private int f2477k;

    /* renamed from: l  reason: collision with root package name */
    private final List f2478l;

    /* renamed from: m  reason: collision with root package name */
    private final List f2479m;

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
        synchronized (pVar.f2467a) {
            pVar.f2469c++;
        }
        pVar.n(j1Var);
    }

    private static j1 j(int i10, int i11, int i12, int i13) {
        return new d(ImageReader.newInstance(i10, i11, i12, i13));
    }

    private void k(n nVar) {
        synchronized (this.f2467a) {
            try {
                int indexOf = this.f2478l.indexOf(nVar);
                if (indexOf >= 0) {
                    this.f2478l.remove(indexOf);
                    int i10 = this.f2477k;
                    if (indexOf <= i10) {
                        this.f2477k = i10 - 1;
                    }
                }
                this.f2479m.remove(nVar);
                if (this.f2469c > 0) {
                    n(this.f2472f);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void l(r rVar) {
        final j1.a aVar;
        Executor executor;
        synchronized (this.f2467a) {
            try {
                if (this.f2478l.size() < f()) {
                    rVar.a(this);
                    this.f2478l.add(rVar);
                    aVar = this.f2473g;
                    executor = this.f2474h;
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
        synchronized (this.f2467a) {
            try {
                for (int size = this.f2475i.size() - 1; size >= 0; size--) {
                    p0 p0Var = (p0) this.f2475i.valueAt(size);
                    long a10 = p0Var.a();
                    n nVar = (n) this.f2476j.get(a10);
                    if (nVar != null) {
                        this.f2476j.remove(a10);
                        this.f2475i.removeAt(size);
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
        synchronized (this.f2467a) {
            try {
                if (this.f2476j.size() != 0 && this.f2475i.size() != 0) {
                    long keyAt = this.f2476j.keyAt(0);
                    Long valueOf = Long.valueOf(keyAt);
                    long keyAt2 = this.f2475i.keyAt(0);
                    b2.e.a(!Long.valueOf(keyAt2).equals(valueOf));
                    if (keyAt2 > keyAt) {
                        for (int size = this.f2476j.size() - 1; size >= 0; size--) {
                            if (this.f2476j.keyAt(size) < keyAt2) {
                                ((n) this.f2476j.valueAt(size)).close();
                                this.f2476j.removeAt(size);
                            }
                        }
                    } else {
                        for (int size2 = this.f2475i.size() - 1; size2 >= 0; size2--) {
                            if (this.f2475i.keyAt(size2) < keyAt) {
                                this.f2475i.removeAt(size2);
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
        synchronized (this.f2467a) {
            k(nVar);
        }
    }

    @Override // a0.j1
    public n b() {
        synchronized (this.f2467a) {
            try {
                if (this.f2478l.isEmpty()) {
                    return null;
                }
                if (this.f2477k < this.f2478l.size()) {
                    ArrayList<n> arrayList = new ArrayList();
                    for (int i10 = 0; i10 < this.f2478l.size() - 1; i10++) {
                        if (!this.f2479m.contains(this.f2478l.get(i10))) {
                            arrayList.add((n) this.f2478l.get(i10));
                        }
                    }
                    for (n nVar : arrayList) {
                        nVar.close();
                    }
                    int size = this.f2478l.size();
                    List list = this.f2478l;
                    this.f2477k = size;
                    n nVar2 = (n) list.get(size - 1);
                    this.f2479m.add(nVar2);
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
        synchronized (this.f2467a) {
            c10 = this.f2472f.c();
        }
        return c10;
    }

    @Override // a0.j1
    public void close() {
        synchronized (this.f2467a) {
            try {
                if (this.f2471e) {
                    return;
                }
                for (n nVar : new ArrayList(this.f2478l)) {
                    nVar.close();
                }
                this.f2478l.clear();
                this.f2472f.close();
                this.f2471e = true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // a0.j1
    public void d() {
        synchronized (this.f2467a) {
            this.f2472f.d();
            this.f2473g = null;
            this.f2474h = null;
            this.f2469c = 0;
        }
    }

    @Override // a0.j1
    public void e(j1.a aVar, Executor executor) {
        synchronized (this.f2467a) {
            this.f2473g = (j1.a) b2.e.g(aVar);
            this.f2474h = (Executor) b2.e.g(executor);
            this.f2472f.e(this.f2470d, executor);
        }
    }

    @Override // a0.j1
    public int f() {
        int f10;
        synchronized (this.f2467a) {
            f10 = this.f2472f.f();
        }
        return f10;
    }

    @Override // a0.j1
    public n g() {
        synchronized (this.f2467a) {
            try {
                if (this.f2478l.isEmpty()) {
                    return null;
                }
                if (this.f2477k < this.f2478l.size()) {
                    List list = this.f2478l;
                    int i10 = this.f2477k;
                    this.f2477k = i10 + 1;
                    n nVar = (n) list.get(i10);
                    this.f2479m.add(nVar);
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
        synchronized (this.f2467a) {
            height = this.f2472f.getHeight();
        }
        return height;
    }

    @Override // a0.j1
    public Surface getSurface() {
        Surface surface;
        synchronized (this.f2467a) {
            surface = this.f2472f.getSurface();
        }
        return surface;
    }

    @Override // a0.j1
    public int getWidth() {
        int width;
        synchronized (this.f2467a) {
            width = this.f2472f.getWidth();
        }
        return width;
    }

    public a0.k m() {
        return this.f2468b;
    }

    void n(j1 j1Var) {
        n nVar;
        synchronized (this.f2467a) {
            try {
                if (this.f2471e) {
                    return;
                }
                int size = this.f2476j.size() + this.f2478l.size();
                if (size >= j1Var.f()) {
                    y0.a("MetadataImageReader", "Skip to acquire the next image because the acquired image count has reached the max images count.");
                    return;
                }
                do {
                    try {
                        nVar = j1Var.g();
                        if (nVar != null) {
                            this.f2469c--;
                            size++;
                            this.f2476j.put(nVar.E().a(), nVar);
                            o();
                        }
                    } catch (IllegalStateException e10) {
                        y0.b("MetadataImageReader", "Failed to acquire next image.", e10);
                        nVar = null;
                    }
                    if (nVar == null || this.f2469c <= 0) {
                        break;
                    }
                } while (size < j1Var.f());
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    void q(u uVar) {
        synchronized (this.f2467a) {
            try {
                if (this.f2471e) {
                    return;
                }
                this.f2475i.put(uVar.a(), new e0.c(uVar));
                o();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    p(j1 j1Var) {
        this.f2467a = new Object();
        this.f2468b = new a();
        this.f2469c = 0;
        this.f2470d = new j1.a() { // from class: x.z0
            @Override // a0.j1.a
            public final void a(a0.j1 j1Var2) {
                androidx.camera.core.p.i(androidx.camera.core.p.this, j1Var2);
            }
        };
        this.f2471e = false;
        this.f2475i = new LongSparseArray();
        this.f2476j = new LongSparseArray();
        this.f2479m = new ArrayList();
        this.f2472f = j1Var;
        this.f2477k = 0;
        this.f2478l = new ArrayList(f());
    }
}
