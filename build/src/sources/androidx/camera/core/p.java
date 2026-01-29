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
    private final Object f2013a;

    /* renamed from: b  reason: collision with root package name */
    private a0.k f2014b;

    /* renamed from: c  reason: collision with root package name */
    private int f2015c;

    /* renamed from: d  reason: collision with root package name */
    private j1.a f2016d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f2017e;

    /* renamed from: f  reason: collision with root package name */
    private final j1 f2018f;

    /* renamed from: g  reason: collision with root package name */
    j1.a f2019g;

    /* renamed from: h  reason: collision with root package name */
    private Executor f2020h;

    /* renamed from: i  reason: collision with root package name */
    private final LongSparseArray f2021i;

    /* renamed from: j  reason: collision with root package name */
    private final LongSparseArray f2022j;

    /* renamed from: k  reason: collision with root package name */
    private int f2023k;

    /* renamed from: l  reason: collision with root package name */
    private final List f2024l;

    /* renamed from: m  reason: collision with root package name */
    private final List f2025m;

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
        synchronized (pVar.f2013a) {
            pVar.f2015c++;
        }
        pVar.n(j1Var);
    }

    private static j1 j(int i10, int i11, int i12, int i13) {
        return new d(ImageReader.newInstance(i10, i11, i12, i13));
    }

    private void k(n nVar) {
        synchronized (this.f2013a) {
            try {
                int indexOf = this.f2024l.indexOf(nVar);
                if (indexOf >= 0) {
                    this.f2024l.remove(indexOf);
                    int i10 = this.f2023k;
                    if (indexOf <= i10) {
                        this.f2023k = i10 - 1;
                    }
                }
                this.f2025m.remove(nVar);
                if (this.f2015c > 0) {
                    n(this.f2018f);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void l(r rVar) {
        final j1.a aVar;
        Executor executor;
        synchronized (this.f2013a) {
            try {
                if (this.f2024l.size() < f()) {
                    rVar.a(this);
                    this.f2024l.add(rVar);
                    aVar = this.f2019g;
                    executor = this.f2020h;
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
        synchronized (this.f2013a) {
            try {
                for (int size = this.f2021i.size() - 1; size >= 0; size--) {
                    p0 p0Var = (p0) this.f2021i.valueAt(size);
                    long a10 = p0Var.a();
                    n nVar = (n) this.f2022j.get(a10);
                    if (nVar != null) {
                        this.f2022j.remove(a10);
                        this.f2021i.removeAt(size);
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
        synchronized (this.f2013a) {
            try {
                if (this.f2022j.size() != 0 && this.f2021i.size() != 0) {
                    long keyAt = this.f2022j.keyAt(0);
                    Long valueOf = Long.valueOf(keyAt);
                    long keyAt2 = this.f2021i.keyAt(0);
                    b2.e.a(!Long.valueOf(keyAt2).equals(valueOf));
                    if (keyAt2 > keyAt) {
                        for (int size = this.f2022j.size() - 1; size >= 0; size--) {
                            if (this.f2022j.keyAt(size) < keyAt2) {
                                ((n) this.f2022j.valueAt(size)).close();
                                this.f2022j.removeAt(size);
                            }
                        }
                    } else {
                        for (int size2 = this.f2021i.size() - 1; size2 >= 0; size2--) {
                            if (this.f2021i.keyAt(size2) < keyAt) {
                                this.f2021i.removeAt(size2);
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
        synchronized (this.f2013a) {
            k(nVar);
        }
    }

    @Override // a0.j1
    public n b() {
        synchronized (this.f2013a) {
            try {
                if (this.f2024l.isEmpty()) {
                    return null;
                }
                if (this.f2023k < this.f2024l.size()) {
                    ArrayList<n> arrayList = new ArrayList();
                    for (int i10 = 0; i10 < this.f2024l.size() - 1; i10++) {
                        if (!this.f2025m.contains(this.f2024l.get(i10))) {
                            arrayList.add((n) this.f2024l.get(i10));
                        }
                    }
                    for (n nVar : arrayList) {
                        nVar.close();
                    }
                    int size = this.f2024l.size();
                    List list = this.f2024l;
                    this.f2023k = size;
                    n nVar2 = (n) list.get(size - 1);
                    this.f2025m.add(nVar2);
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
        synchronized (this.f2013a) {
            c10 = this.f2018f.c();
        }
        return c10;
    }

    @Override // a0.j1
    public void close() {
        synchronized (this.f2013a) {
            try {
                if (this.f2017e) {
                    return;
                }
                for (n nVar : new ArrayList(this.f2024l)) {
                    nVar.close();
                }
                this.f2024l.clear();
                this.f2018f.close();
                this.f2017e = true;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // a0.j1
    public void d() {
        synchronized (this.f2013a) {
            this.f2018f.d();
            this.f2019g = null;
            this.f2020h = null;
            this.f2015c = 0;
        }
    }

    @Override // a0.j1
    public void e(j1.a aVar, Executor executor) {
        synchronized (this.f2013a) {
            this.f2019g = (j1.a) b2.e.g(aVar);
            this.f2020h = (Executor) b2.e.g(executor);
            this.f2018f.e(this.f2016d, executor);
        }
    }

    @Override // a0.j1
    public int f() {
        int f10;
        synchronized (this.f2013a) {
            f10 = this.f2018f.f();
        }
        return f10;
    }

    @Override // a0.j1
    public n g() {
        synchronized (this.f2013a) {
            try {
                if (this.f2024l.isEmpty()) {
                    return null;
                }
                if (this.f2023k < this.f2024l.size()) {
                    List list = this.f2024l;
                    int i10 = this.f2023k;
                    this.f2023k = i10 + 1;
                    n nVar = (n) list.get(i10);
                    this.f2025m.add(nVar);
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
        synchronized (this.f2013a) {
            height = this.f2018f.getHeight();
        }
        return height;
    }

    @Override // a0.j1
    public Surface getSurface() {
        Surface surface;
        synchronized (this.f2013a) {
            surface = this.f2018f.getSurface();
        }
        return surface;
    }

    @Override // a0.j1
    public int getWidth() {
        int width;
        synchronized (this.f2013a) {
            width = this.f2018f.getWidth();
        }
        return width;
    }

    public a0.k m() {
        return this.f2014b;
    }

    void n(j1 j1Var) {
        n nVar;
        synchronized (this.f2013a) {
            try {
                if (this.f2017e) {
                    return;
                }
                int size = this.f2022j.size() + this.f2024l.size();
                if (size >= j1Var.f()) {
                    y0.a("MetadataImageReader", "Skip to acquire the next image because the acquired image count has reached the max images count.");
                    return;
                }
                do {
                    try {
                        nVar = j1Var.g();
                        if (nVar != null) {
                            this.f2015c--;
                            size++;
                            this.f2022j.put(nVar.z().a(), nVar);
                            o();
                        }
                    } catch (IllegalStateException e10) {
                        y0.b("MetadataImageReader", "Failed to acquire next image.", e10);
                        nVar = null;
                    }
                    if (nVar == null || this.f2015c <= 0) {
                        break;
                    }
                } while (size < j1Var.f());
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    void q(u uVar) {
        synchronized (this.f2013a) {
            try {
                if (this.f2017e) {
                    return;
                }
                this.f2021i.put(uVar.a(), new e0.c(uVar));
                o();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    p(j1 j1Var) {
        this.f2013a = new Object();
        this.f2014b = new a();
        this.f2015c = 0;
        this.f2016d = new j1.a() { // from class: x.z0
            @Override // a0.j1.a
            public final void a(a0.j1 j1Var2) {
                androidx.camera.core.p.i(androidx.camera.core.p.this, j1Var2);
            }
        };
        this.f2017e = false;
        this.f2021i = new LongSparseArray();
        this.f2022j = new LongSparseArray();
        this.f2025m = new ArrayList();
        this.f2018f = j1Var;
        this.f2023k = 0;
        this.f2024l = new ArrayList(f());
    }
}
