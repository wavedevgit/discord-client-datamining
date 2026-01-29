package qc;

import java.util.ArrayDeque;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h implements d {

    /* renamed from: a  reason: collision with root package name */
    private final Thread f47086a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f47087b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private final ArrayDeque f47088c = new ArrayDeque();

    /* renamed from: d  reason: collision with root package name */
    private final ArrayDeque f47089d = new ArrayDeque();

    /* renamed from: e  reason: collision with root package name */
    private final f[] f47090e;

    /* renamed from: f  reason: collision with root package name */
    private final g[] f47091f;

    /* renamed from: g  reason: collision with root package name */
    private int f47092g;

    /* renamed from: h  reason: collision with root package name */
    private int f47093h;

    /* renamed from: i  reason: collision with root package name */
    private f f47094i;

    /* renamed from: j  reason: collision with root package name */
    private e f47095j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f47096k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f47097l;

    /* renamed from: m  reason: collision with root package name */
    private int f47098m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends Thread {
        a(String str) {
            super(str);
        }

        @Override // java.lang.Thread, java.lang.Runnable
        public void run() {
            h.this.t();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public h(f[] fVarArr, g[] gVarArr) {
        this.f47090e = fVarArr;
        this.f47092g = fVarArr.length;
        for (int i10 = 0; i10 < this.f47092g; i10++) {
            this.f47090e[i10] = g();
        }
        this.f47091f = gVarArr;
        this.f47093h = gVarArr.length;
        for (int i11 = 0; i11 < this.f47093h; i11++) {
            this.f47091f[i11] = h();
        }
        a aVar = new a("ExoPlayer:SimpleDecoder");
        this.f47086a = aVar;
        aVar.start();
    }

    private boolean f() {
        if (!this.f47088c.isEmpty() && this.f47093h > 0) {
            return true;
        }
        return false;
    }

    private boolean k() {
        e i10;
        synchronized (this.f47087b) {
            while (!this.f47097l && !f()) {
                try {
                    this.f47087b.wait();
                } finally {
                }
            }
            if (this.f47097l) {
                return false;
            }
            f fVar = (f) this.f47088c.removeFirst();
            g[] gVarArr = this.f47091f;
            int i11 = this.f47093h - 1;
            this.f47093h = i11;
            g gVar = gVarArr[i11];
            boolean z10 = this.f47096k;
            this.f47096k = false;
            if (fVar.o()) {
                gVar.g(4);
            } else {
                if (fVar.l()) {
                    gVar.g(Integer.MIN_VALUE);
                }
                if (fVar.p()) {
                    gVar.g(134217728);
                }
                try {
                    i10 = j(fVar, gVar, z10);
                } catch (OutOfMemoryError e10) {
                    i10 = i(e10);
                } catch (RuntimeException e11) {
                    i10 = i(e11);
                }
                if (i10 != null) {
                    synchronized (this.f47087b) {
                        this.f47095j = i10;
                    }
                    return false;
                }
            }
            synchronized (this.f47087b) {
                try {
                    if (this.f47096k) {
                        gVar.t();
                    } else if (gVar.l()) {
                        this.f47098m++;
                        gVar.t();
                    } else {
                        gVar.f47085i = this.f47098m;
                        this.f47098m = 0;
                        this.f47089d.addLast(gVar);
                    }
                    q(fVar);
                } finally {
                }
            }
            return true;
        }
    }

    private void n() {
        if (f()) {
            this.f47087b.notify();
        }
    }

    private void o() {
        e eVar = this.f47095j;
        if (eVar == null) {
            return;
        }
        throw eVar;
    }

    private void q(f fVar) {
        fVar.h();
        f[] fVarArr = this.f47090e;
        int i10 = this.f47092g;
        this.f47092g = i10 + 1;
        fVarArr[i10] = fVar;
    }

    private void s(g gVar) {
        gVar.h();
        g[] gVarArr = this.f47091f;
        int i10 = this.f47093h;
        this.f47093h = i10 + 1;
        gVarArr[i10] = gVar;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void t() {
        do {
            try {
            } catch (InterruptedException e10) {
                throw new IllegalStateException(e10);
            }
        } while (k());
    }

    @Override // qc.d
    public final void flush() {
        synchronized (this.f47087b) {
            try {
                this.f47096k = true;
                this.f47098m = 0;
                f fVar = this.f47094i;
                if (fVar != null) {
                    q(fVar);
                    this.f47094i = null;
                }
                while (!this.f47088c.isEmpty()) {
                    q((f) this.f47088c.removeFirst());
                }
                while (!this.f47089d.isEmpty()) {
                    ((g) this.f47089d.removeFirst()).t();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    protected abstract f g();

    protected abstract g h();

    protected abstract e i(Throwable th2);

    protected abstract e j(f fVar, g gVar, boolean z10);

    @Override // qc.d
    /* renamed from: l */
    public final f d() {
        boolean z10;
        f fVar;
        synchronized (this.f47087b) {
            o();
            if (this.f47094i == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            int i10 = this.f47092g;
            if (i10 == 0) {
                fVar = null;
            } else {
                f[] fVarArr = this.f47090e;
                int i11 = i10 - 1;
                this.f47092g = i11;
                fVar = fVarArr[i11];
            }
            this.f47094i = fVar;
        }
        return fVar;
    }

    @Override // qc.d
    /* renamed from: m */
    public final g b() {
        synchronized (this.f47087b) {
            try {
                o();
                if (this.f47089d.isEmpty()) {
                    return null;
                }
                return (g) this.f47089d.removeFirst();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // qc.d
    /* renamed from: p */
    public final void c(f fVar) {
        boolean z10;
        synchronized (this.f47087b) {
            o();
            if (fVar == this.f47094i) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.a(z10);
            this.f47088c.addLast(fVar);
            n();
            this.f47094i = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void r(g gVar) {
        synchronized (this.f47087b) {
            s(gVar);
            n();
        }
    }

    @Override // qc.d
    public void release() {
        synchronized (this.f47087b) {
            this.f47097l = true;
            this.f47087b.notify();
        }
        try {
            this.f47086a.join();
        } catch (InterruptedException unused) {
            Thread.currentThread().interrupt();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void u(int i10) {
        boolean z10;
        if (this.f47092g == this.f47090e.length) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        for (f fVar : this.f47090e) {
            fVar.u(i10);
        }
    }
}
