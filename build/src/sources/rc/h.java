package rc;

import java.util.ArrayDeque;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h implements d {

    /* renamed from: a  reason: collision with root package name */
    private final Thread f46240a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f46241b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private final ArrayDeque f46242c = new ArrayDeque();

    /* renamed from: d  reason: collision with root package name */
    private final ArrayDeque f46243d = new ArrayDeque();

    /* renamed from: e  reason: collision with root package name */
    private final f[] f46244e;

    /* renamed from: f  reason: collision with root package name */
    private final g[] f46245f;

    /* renamed from: g  reason: collision with root package name */
    private int f46246g;

    /* renamed from: h  reason: collision with root package name */
    private int f46247h;

    /* renamed from: i  reason: collision with root package name */
    private f f46248i;

    /* renamed from: j  reason: collision with root package name */
    private e f46249j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f46250k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f46251l;

    /* renamed from: m  reason: collision with root package name */
    private int f46252m;

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
        this.f46244e = fVarArr;
        this.f46246g = fVarArr.length;
        for (int i10 = 0; i10 < this.f46246g; i10++) {
            this.f46244e[i10] = g();
        }
        this.f46245f = gVarArr;
        this.f46247h = gVarArr.length;
        for (int i11 = 0; i11 < this.f46247h; i11++) {
            this.f46245f[i11] = h();
        }
        a aVar = new a("ExoPlayer:SimpleDecoder");
        this.f46240a = aVar;
        aVar.start();
    }

    private boolean f() {
        if (!this.f46242c.isEmpty() && this.f46247h > 0) {
            return true;
        }
        return false;
    }

    private boolean k() {
        e i10;
        synchronized (this.f46241b) {
            while (!this.f46251l && !f()) {
                try {
                    this.f46241b.wait();
                } finally {
                }
            }
            if (this.f46251l) {
                return false;
            }
            f fVar = (f) this.f46242c.removeFirst();
            g[] gVarArr = this.f46245f;
            int i11 = this.f46247h - 1;
            this.f46247h = i11;
            g gVar = gVarArr[i11];
            boolean z10 = this.f46250k;
            this.f46250k = false;
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
                    synchronized (this.f46241b) {
                        this.f46249j = i10;
                    }
                    return false;
                }
            }
            synchronized (this.f46241b) {
                try {
                    if (this.f46250k) {
                        gVar.t();
                    } else if (gVar.m()) {
                        this.f46252m++;
                        gVar.t();
                    } else {
                        gVar.f46239i = this.f46252m;
                        this.f46252m = 0;
                        this.f46243d.addLast(gVar);
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
            this.f46241b.notify();
        }
    }

    private void o() {
        e eVar = this.f46249j;
        if (eVar == null) {
            return;
        }
        throw eVar;
    }

    private void q(f fVar) {
        fVar.h();
        f[] fVarArr = this.f46244e;
        int i10 = this.f46246g;
        this.f46246g = i10 + 1;
        fVarArr[i10] = fVar;
    }

    private void s(g gVar) {
        gVar.h();
        g[] gVarArr = this.f46245f;
        int i10 = this.f46247h;
        this.f46247h = i10 + 1;
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
        synchronized (this.f46241b) {
            try {
                this.f46250k = true;
                this.f46252m = 0;
                f fVar = this.f46248i;
                if (fVar != null) {
                    q(fVar);
                    this.f46248i = null;
                }
                while (!this.f46242c.isEmpty()) {
                    q((f) this.f46242c.removeFirst());
                }
                while (!this.f46243d.isEmpty()) {
                    ((g) this.f46243d.removeFirst()).t();
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
        synchronized (this.f46241b) {
            o();
            if (this.f46248i == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.g(z10);
            int i10 = this.f46246g;
            if (i10 == 0) {
                fVar = null;
            } else {
                f[] fVarArr = this.f46244e;
                int i11 = i10 - 1;
                this.f46246g = i11;
                fVar = fVarArr[i11];
            }
            this.f46248i = fVar;
        }
        return fVar;
    }

    @Override // rc.d
    /* renamed from: m */
    public final g b() {
        synchronized (this.f46241b) {
            try {
                o();
                if (this.f46243d.isEmpty()) {
                    return null;
                }
                return (g) this.f46243d.removeFirst();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // rc.d
    /* renamed from: p */
    public final void c(f fVar) {
        boolean z10;
        synchronized (this.f46241b) {
            o();
            if (fVar == this.f46248i) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.a(z10);
            this.f46242c.addLast(fVar);
            n();
            this.f46248i = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void r(g gVar) {
        synchronized (this.f46241b) {
            s(gVar);
            n();
        }
    }

    @Override // rc.d
    public void release() {
        synchronized (this.f46241b) {
            this.f46251l = true;
            this.f46241b.notify();
        }
        try {
            this.f46240a.join();
        } catch (InterruptedException unused) {
            Thread.currentThread().interrupt();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void u(int i10) {
        boolean z10;
        if (this.f46246g == this.f46244e.length) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        for (f fVar : this.f46244e) {
            fVar.u(i10);
        }
    }
}
