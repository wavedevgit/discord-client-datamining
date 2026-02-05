package qc;

import java.util.ArrayDeque;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h implements d {

    /* renamed from: a  reason: collision with root package name */
    private final Thread f47571a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f47572b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private final ArrayDeque f47573c = new ArrayDeque();

    /* renamed from: d  reason: collision with root package name */
    private final ArrayDeque f47574d = new ArrayDeque();

    /* renamed from: e  reason: collision with root package name */
    private final f[] f47575e;

    /* renamed from: f  reason: collision with root package name */
    private final g[] f47576f;

    /* renamed from: g  reason: collision with root package name */
    private int f47577g;

    /* renamed from: h  reason: collision with root package name */
    private int f47578h;

    /* renamed from: i  reason: collision with root package name */
    private f f47579i;

    /* renamed from: j  reason: collision with root package name */
    private e f47580j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f47581k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f47582l;

    /* renamed from: m  reason: collision with root package name */
    private int f47583m;

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
        this.f47575e = fVarArr;
        this.f47577g = fVarArr.length;
        for (int i10 = 0; i10 < this.f47577g; i10++) {
            this.f47575e[i10] = g();
        }
        this.f47576f = gVarArr;
        this.f47578h = gVarArr.length;
        for (int i11 = 0; i11 < this.f47578h; i11++) {
            this.f47576f[i11] = h();
        }
        a aVar = new a("ExoPlayer:SimpleDecoder");
        this.f47571a = aVar;
        aVar.start();
    }

    private boolean f() {
        if (!this.f47573c.isEmpty() && this.f47578h > 0) {
            return true;
        }
        return false;
    }

    private boolean k() {
        e i10;
        synchronized (this.f47572b) {
            while (!this.f47582l && !f()) {
                try {
                    this.f47572b.wait();
                } finally {
                }
            }
            if (this.f47582l) {
                return false;
            }
            f fVar = (f) this.f47573c.removeFirst();
            g[] gVarArr = this.f47576f;
            int i11 = this.f47578h - 1;
            this.f47578h = i11;
            g gVar = gVarArr[i11];
            boolean z10 = this.f47581k;
            this.f47581k = false;
            if (fVar.n()) {
                gVar.g(4);
            } else {
                if (fVar.m()) {
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
                    synchronized (this.f47572b) {
                        this.f47580j = i10;
                    }
                    return false;
                }
            }
            synchronized (this.f47572b) {
                try {
                    if (this.f47581k) {
                        gVar.t();
                    } else if (gVar.m()) {
                        this.f47583m++;
                        gVar.t();
                    } else {
                        gVar.f47570i = this.f47583m;
                        this.f47583m = 0;
                        this.f47574d.addLast(gVar);
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
            this.f47572b.notify();
        }
    }

    private void o() {
        e eVar = this.f47580j;
        if (eVar == null) {
            return;
        }
        throw eVar;
    }

    private void q(f fVar) {
        fVar.h();
        f[] fVarArr = this.f47575e;
        int i10 = this.f47577g;
        this.f47577g = i10 + 1;
        fVarArr[i10] = fVar;
    }

    private void s(g gVar) {
        gVar.h();
        g[] gVarArr = this.f47576f;
        int i10 = this.f47578h;
        this.f47578h = i10 + 1;
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
        synchronized (this.f47572b) {
            try {
                this.f47581k = true;
                this.f47583m = 0;
                f fVar = this.f47579i;
                if (fVar != null) {
                    q(fVar);
                    this.f47579i = null;
                }
                while (!this.f47573c.isEmpty()) {
                    q((f) this.f47573c.removeFirst());
                }
                while (!this.f47574d.isEmpty()) {
                    ((g) this.f47574d.removeFirst()).t();
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
        synchronized (this.f47572b) {
            o();
            if (this.f47579i == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            int i10 = this.f47577g;
            if (i10 == 0) {
                fVar = null;
            } else {
                f[] fVarArr = this.f47575e;
                int i11 = i10 - 1;
                this.f47577g = i11;
                fVar = fVarArr[i11];
            }
            this.f47579i = fVar;
        }
        return fVar;
    }

    @Override // qc.d
    /* renamed from: m */
    public final g b() {
        synchronized (this.f47572b) {
            try {
                o();
                if (this.f47574d.isEmpty()) {
                    return null;
                }
                return (g) this.f47574d.removeFirst();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // qc.d
    /* renamed from: p */
    public final void c(f fVar) {
        boolean z10;
        synchronized (this.f47572b) {
            o();
            if (fVar == this.f47579i) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.a(z10);
            this.f47573c.addLast(fVar);
            n();
            this.f47579i = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void r(g gVar) {
        synchronized (this.f47572b) {
            s(gVar);
            n();
        }
    }

    @Override // qc.d
    public void release() {
        synchronized (this.f47572b) {
            this.f47582l = true;
            this.f47572b.notify();
        }
        try {
            this.f47571a.join();
        } catch (InterruptedException unused) {
            Thread.currentThread().interrupt();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void u(int i10) {
        boolean z10;
        if (this.f47577g == this.f47575e.length) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        for (f fVar : this.f47575e) {
            fVar.u(i10);
        }
    }
}
