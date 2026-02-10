package rc;

import java.util.ArrayDeque;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h implements d {

    /* renamed from: a  reason: collision with root package name */
    private final Thread f47785a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f47786b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private final ArrayDeque f47787c = new ArrayDeque();

    /* renamed from: d  reason: collision with root package name */
    private final ArrayDeque f47788d = new ArrayDeque();

    /* renamed from: e  reason: collision with root package name */
    private final f[] f47789e;

    /* renamed from: f  reason: collision with root package name */
    private final g[] f47790f;

    /* renamed from: g  reason: collision with root package name */
    private int f47791g;

    /* renamed from: h  reason: collision with root package name */
    private int f47792h;

    /* renamed from: i  reason: collision with root package name */
    private f f47793i;

    /* renamed from: j  reason: collision with root package name */
    private e f47794j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f47795k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f47796l;

    /* renamed from: m  reason: collision with root package name */
    private int f47797m;

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
        this.f47789e = fVarArr;
        this.f47791g = fVarArr.length;
        for (int i10 = 0; i10 < this.f47791g; i10++) {
            this.f47789e[i10] = g();
        }
        this.f47790f = gVarArr;
        this.f47792h = gVarArr.length;
        for (int i11 = 0; i11 < this.f47792h; i11++) {
            this.f47790f[i11] = h();
        }
        a aVar = new a("ExoPlayer:SimpleDecoder");
        this.f47785a = aVar;
        aVar.start();
    }

    private boolean f() {
        if (!this.f47787c.isEmpty() && this.f47792h > 0) {
            return true;
        }
        return false;
    }

    private boolean k() {
        e i10;
        synchronized (this.f47786b) {
            while (!this.f47796l && !f()) {
                try {
                    this.f47786b.wait();
                } finally {
                }
            }
            if (this.f47796l) {
                return false;
            }
            f fVar = (f) this.f47787c.removeFirst();
            g[] gVarArr = this.f47790f;
            int i11 = this.f47792h - 1;
            this.f47792h = i11;
            g gVar = gVarArr[i11];
            boolean z10 = this.f47795k;
            this.f47795k = false;
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
                    synchronized (this.f47786b) {
                        this.f47794j = i10;
                    }
                    return false;
                }
            }
            synchronized (this.f47786b) {
                try {
                    if (this.f47795k) {
                        gVar.t();
                    } else if (gVar.m()) {
                        this.f47797m++;
                        gVar.t();
                    } else {
                        gVar.f47784i = this.f47797m;
                        this.f47797m = 0;
                        this.f47788d.addLast(gVar);
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
            this.f47786b.notify();
        }
    }

    private void o() {
        e eVar = this.f47794j;
        if (eVar == null) {
            return;
        }
        throw eVar;
    }

    private void q(f fVar) {
        fVar.h();
        f[] fVarArr = this.f47789e;
        int i10 = this.f47791g;
        this.f47791g = i10 + 1;
        fVarArr[i10] = fVar;
    }

    private void s(g gVar) {
        gVar.h();
        g[] gVarArr = this.f47790f;
        int i10 = this.f47792h;
        this.f47792h = i10 + 1;
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

    @Override // rc.d
    public final void flush() {
        synchronized (this.f47786b) {
            try {
                this.f47795k = true;
                this.f47797m = 0;
                f fVar = this.f47793i;
                if (fVar != null) {
                    q(fVar);
                    this.f47793i = null;
                }
                while (!this.f47787c.isEmpty()) {
                    q((f) this.f47787c.removeFirst());
                }
                while (!this.f47788d.isEmpty()) {
                    ((g) this.f47788d.removeFirst()).t();
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

    @Override // rc.d
    /* renamed from: l */
    public final f d() {
        boolean z10;
        f fVar;
        synchronized (this.f47786b) {
            o();
            if (this.f47793i == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.g(z10);
            int i10 = this.f47791g;
            if (i10 == 0) {
                fVar = null;
            } else {
                f[] fVarArr = this.f47789e;
                int i11 = i10 - 1;
                this.f47791g = i11;
                fVar = fVarArr[i11];
            }
            this.f47793i = fVar;
        }
        return fVar;
    }

    @Override // rc.d
    /* renamed from: m */
    public final g b() {
        synchronized (this.f47786b) {
            try {
                o();
                if (this.f47788d.isEmpty()) {
                    return null;
                }
                return (g) this.f47788d.removeFirst();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // rc.d
    /* renamed from: p */
    public final void c(f fVar) {
        boolean z10;
        synchronized (this.f47786b) {
            o();
            if (fVar == this.f47793i) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.a(z10);
            this.f47787c.addLast(fVar);
            n();
            this.f47793i = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void r(g gVar) {
        synchronized (this.f47786b) {
            s(gVar);
            n();
        }
    }

    @Override // rc.d
    public void release() {
        synchronized (this.f47786b) {
            this.f47796l = true;
            this.f47786b.notify();
        }
        try {
            this.f47785a.join();
        } catch (InterruptedException unused) {
            Thread.currentThread().interrupt();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void u(int i10) {
        boolean z10;
        if (this.f47791g == this.f47789e.length) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        for (f fVar : this.f47789e) {
            fVar.u(i10);
        }
    }
}
