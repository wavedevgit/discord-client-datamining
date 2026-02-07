package qc;

import java.util.ArrayDeque;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h implements d {

    /* renamed from: a  reason: collision with root package name */
    private final Thread f46667a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f46668b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private final ArrayDeque f46669c = new ArrayDeque();

    /* renamed from: d  reason: collision with root package name */
    private final ArrayDeque f46670d = new ArrayDeque();

    /* renamed from: e  reason: collision with root package name */
    private final f[] f46671e;

    /* renamed from: f  reason: collision with root package name */
    private final g[] f46672f;

    /* renamed from: g  reason: collision with root package name */
    private int f46673g;

    /* renamed from: h  reason: collision with root package name */
    private int f46674h;

    /* renamed from: i  reason: collision with root package name */
    private f f46675i;

    /* renamed from: j  reason: collision with root package name */
    private e f46676j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f46677k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f46678l;

    /* renamed from: m  reason: collision with root package name */
    private int f46679m;

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
        this.f46671e = fVarArr;
        this.f46673g = fVarArr.length;
        for (int i10 = 0; i10 < this.f46673g; i10++) {
            this.f46671e[i10] = g();
        }
        this.f46672f = gVarArr;
        this.f46674h = gVarArr.length;
        for (int i11 = 0; i11 < this.f46674h; i11++) {
            this.f46672f[i11] = h();
        }
        a aVar = new a("ExoPlayer:SimpleDecoder");
        this.f46667a = aVar;
        aVar.start();
    }

    private boolean f() {
        if (!this.f46669c.isEmpty() && this.f46674h > 0) {
            return true;
        }
        return false;
    }

    private boolean k() {
        e i10;
        synchronized (this.f46668b) {
            while (!this.f46678l && !f()) {
                try {
                    this.f46668b.wait();
                } finally {
                }
            }
            if (this.f46678l) {
                return false;
            }
            f fVar = (f) this.f46669c.removeFirst();
            g[] gVarArr = this.f46672f;
            int i11 = this.f46674h - 1;
            this.f46674h = i11;
            g gVar = gVarArr[i11];
            boolean z10 = this.f46677k;
            this.f46677k = false;
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
                    synchronized (this.f46668b) {
                        this.f46676j = i10;
                    }
                    return false;
                }
            }
            synchronized (this.f46668b) {
                try {
                    if (this.f46677k) {
                        gVar.t();
                    } else if (gVar.m()) {
                        this.f46679m++;
                        gVar.t();
                    } else {
                        gVar.f46666i = this.f46679m;
                        this.f46679m = 0;
                        this.f46670d.addLast(gVar);
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
            this.f46668b.notify();
        }
    }

    private void o() {
        e eVar = this.f46676j;
        if (eVar == null) {
            return;
        }
        throw eVar;
    }

    private void q(f fVar) {
        fVar.h();
        f[] fVarArr = this.f46671e;
        int i10 = this.f46673g;
        this.f46673g = i10 + 1;
        fVarArr[i10] = fVar;
    }

    private void s(g gVar) {
        gVar.h();
        g[] gVarArr = this.f46672f;
        int i10 = this.f46674h;
        this.f46674h = i10 + 1;
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
        synchronized (this.f46668b) {
            try {
                this.f46677k = true;
                this.f46679m = 0;
                f fVar = this.f46675i;
                if (fVar != null) {
                    q(fVar);
                    this.f46675i = null;
                }
                while (!this.f46669c.isEmpty()) {
                    q((f) this.f46669c.removeFirst());
                }
                while (!this.f46670d.isEmpty()) {
                    ((g) this.f46670d.removeFirst()).t();
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
        synchronized (this.f46668b) {
            o();
            if (this.f46675i == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            int i10 = this.f46673g;
            if (i10 == 0) {
                fVar = null;
            } else {
                f[] fVarArr = this.f46671e;
                int i11 = i10 - 1;
                this.f46673g = i11;
                fVar = fVarArr[i11];
            }
            this.f46675i = fVar;
        }
        return fVar;
    }

    @Override // qc.d
    /* renamed from: m */
    public final g b() {
        synchronized (this.f46668b) {
            try {
                o();
                if (this.f46670d.isEmpty()) {
                    return null;
                }
                return (g) this.f46670d.removeFirst();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // qc.d
    /* renamed from: p */
    public final void c(f fVar) {
        boolean z10;
        synchronized (this.f46668b) {
            o();
            if (fVar == this.f46675i) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.a(z10);
            this.f46669c.addLast(fVar);
            n();
            this.f46675i = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void r(g gVar) {
        synchronized (this.f46668b) {
            s(gVar);
            n();
        }
    }

    @Override // qc.d
    public void release() {
        synchronized (this.f46668b) {
            this.f46678l = true;
            this.f46668b.notify();
        }
        try {
            this.f46667a.join();
        } catch (InterruptedException unused) {
            Thread.currentThread().interrupt();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void u(int i10) {
        boolean z10;
        if (this.f46673g == this.f46671e.length) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        for (f fVar : this.f46671e) {
            fVar.u(i10);
        }
    }
}
