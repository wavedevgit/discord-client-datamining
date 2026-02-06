package qc;

import java.util.ArrayDeque;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h implements d {

    /* renamed from: a  reason: collision with root package name */
    private final Thread f46619a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f46620b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private final ArrayDeque f46621c = new ArrayDeque();

    /* renamed from: d  reason: collision with root package name */
    private final ArrayDeque f46622d = new ArrayDeque();

    /* renamed from: e  reason: collision with root package name */
    private final f[] f46623e;

    /* renamed from: f  reason: collision with root package name */
    private final g[] f46624f;

    /* renamed from: g  reason: collision with root package name */
    private int f46625g;

    /* renamed from: h  reason: collision with root package name */
    private int f46626h;

    /* renamed from: i  reason: collision with root package name */
    private f f46627i;

    /* renamed from: j  reason: collision with root package name */
    private e f46628j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f46629k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f46630l;

    /* renamed from: m  reason: collision with root package name */
    private int f46631m;

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
        this.f46623e = fVarArr;
        this.f46625g = fVarArr.length;
        for (int i10 = 0; i10 < this.f46625g; i10++) {
            this.f46623e[i10] = g();
        }
        this.f46624f = gVarArr;
        this.f46626h = gVarArr.length;
        for (int i11 = 0; i11 < this.f46626h; i11++) {
            this.f46624f[i11] = h();
        }
        a aVar = new a("ExoPlayer:SimpleDecoder");
        this.f46619a = aVar;
        aVar.start();
    }

    private boolean f() {
        if (!this.f46621c.isEmpty() && this.f46626h > 0) {
            return true;
        }
        return false;
    }

    private boolean k() {
        e i10;
        synchronized (this.f46620b) {
            while (!this.f46630l && !f()) {
                try {
                    this.f46620b.wait();
                } finally {
                }
            }
            if (this.f46630l) {
                return false;
            }
            f fVar = (f) this.f46621c.removeFirst();
            g[] gVarArr = this.f46624f;
            int i11 = this.f46626h - 1;
            this.f46626h = i11;
            g gVar = gVarArr[i11];
            boolean z10 = this.f46629k;
            this.f46629k = false;
            if (fVar.n()) {
                gVar.g(4);
            } else {
                if (fVar.m()) {
                    gVar.g(Integer.MIN_VALUE);
                }
                if (fVar.o()) {
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
                    synchronized (this.f46620b) {
                        this.f46628j = i10;
                    }
                    return false;
                }
            }
            synchronized (this.f46620b) {
                try {
                    if (this.f46629k) {
                        gVar.t();
                    } else if (gVar.m()) {
                        this.f46631m++;
                        gVar.t();
                    } else {
                        gVar.f46618i = this.f46631m;
                        this.f46631m = 0;
                        this.f46622d.addLast(gVar);
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
            this.f46620b.notify();
        }
    }

    private void o() {
        e eVar = this.f46628j;
        if (eVar == null) {
            return;
        }
        throw eVar;
    }

    private void q(f fVar) {
        fVar.h();
        f[] fVarArr = this.f46623e;
        int i10 = this.f46625g;
        this.f46625g = i10 + 1;
        fVarArr[i10] = fVar;
    }

    private void s(g gVar) {
        gVar.h();
        g[] gVarArr = this.f46624f;
        int i10 = this.f46626h;
        this.f46626h = i10 + 1;
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
        synchronized (this.f46620b) {
            try {
                this.f46629k = true;
                this.f46631m = 0;
                f fVar = this.f46627i;
                if (fVar != null) {
                    q(fVar);
                    this.f46627i = null;
                }
                while (!this.f46621c.isEmpty()) {
                    q((f) this.f46621c.removeFirst());
                }
                while (!this.f46622d.isEmpty()) {
                    ((g) this.f46622d.removeFirst()).t();
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
        synchronized (this.f46620b) {
            o();
            if (this.f46627i == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            int i10 = this.f46625g;
            if (i10 == 0) {
                fVar = null;
            } else {
                f[] fVarArr = this.f46623e;
                int i11 = i10 - 1;
                this.f46625g = i11;
                fVar = fVarArr[i11];
            }
            this.f46627i = fVar;
        }
        return fVar;
    }

    @Override // qc.d
    /* renamed from: m */
    public final g b() {
        synchronized (this.f46620b) {
            try {
                o();
                if (this.f46622d.isEmpty()) {
                    return null;
                }
                return (g) this.f46622d.removeFirst();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // qc.d
    /* renamed from: p */
    public final void c(f fVar) {
        boolean z10;
        synchronized (this.f46620b) {
            o();
            if (fVar == this.f46627i) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.a(z10);
            this.f46621c.addLast(fVar);
            n();
            this.f46627i = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void r(g gVar) {
        synchronized (this.f46620b) {
            s(gVar);
            n();
        }
    }

    @Override // qc.d
    public void release() {
        synchronized (this.f46620b) {
            this.f46630l = true;
            this.f46620b.notify();
        }
        try {
            this.f46619a.join();
        } catch (InterruptedException unused) {
            Thread.currentThread().interrupt();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void u(int i10) {
        boolean z10;
        if (this.f46625g == this.f46623e.length) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        for (f fVar : this.f46623e) {
            fVar.u(i10);
        }
    }
}
