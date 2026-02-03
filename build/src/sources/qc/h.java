package qc;

import java.util.ArrayDeque;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h implements d {

    /* renamed from: a  reason: collision with root package name */
    private final Thread f47357a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f47358b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private final ArrayDeque f47359c = new ArrayDeque();

    /* renamed from: d  reason: collision with root package name */
    private final ArrayDeque f47360d = new ArrayDeque();

    /* renamed from: e  reason: collision with root package name */
    private final f[] f47361e;

    /* renamed from: f  reason: collision with root package name */
    private final g[] f47362f;

    /* renamed from: g  reason: collision with root package name */
    private int f47363g;

    /* renamed from: h  reason: collision with root package name */
    private int f47364h;

    /* renamed from: i  reason: collision with root package name */
    private f f47365i;

    /* renamed from: j  reason: collision with root package name */
    private e f47366j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f47367k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f47368l;

    /* renamed from: m  reason: collision with root package name */
    private int f47369m;

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
        this.f47361e = fVarArr;
        this.f47363g = fVarArr.length;
        for (int i10 = 0; i10 < this.f47363g; i10++) {
            this.f47361e[i10] = g();
        }
        this.f47362f = gVarArr;
        this.f47364h = gVarArr.length;
        for (int i11 = 0; i11 < this.f47364h; i11++) {
            this.f47362f[i11] = h();
        }
        a aVar = new a("ExoPlayer:SimpleDecoder");
        this.f47357a = aVar;
        aVar.start();
    }

    private boolean f() {
        if (!this.f47359c.isEmpty() && this.f47364h > 0) {
            return true;
        }
        return false;
    }

    private boolean k() {
        e i10;
        synchronized (this.f47358b) {
            while (!this.f47368l && !f()) {
                try {
                    this.f47358b.wait();
                } finally {
                }
            }
            if (this.f47368l) {
                return false;
            }
            f fVar = (f) this.f47359c.removeFirst();
            g[] gVarArr = this.f47362f;
            int i11 = this.f47364h - 1;
            this.f47364h = i11;
            g gVar = gVarArr[i11];
            boolean z10 = this.f47367k;
            this.f47367k = false;
            if (fVar.o()) {
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
                    synchronized (this.f47358b) {
                        this.f47366j = i10;
                    }
                    return false;
                }
            }
            synchronized (this.f47358b) {
                try {
                    if (this.f47367k) {
                        gVar.t();
                    } else if (gVar.m()) {
                        this.f47369m++;
                        gVar.t();
                    } else {
                        gVar.f47356i = this.f47369m;
                        this.f47369m = 0;
                        this.f47360d.addLast(gVar);
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
            this.f47358b.notify();
        }
    }

    private void o() {
        e eVar = this.f47366j;
        if (eVar == null) {
            return;
        }
        throw eVar;
    }

    private void q(f fVar) {
        fVar.h();
        f[] fVarArr = this.f47361e;
        int i10 = this.f47363g;
        this.f47363g = i10 + 1;
        fVarArr[i10] = fVar;
    }

    private void s(g gVar) {
        gVar.h();
        g[] gVarArr = this.f47362f;
        int i10 = this.f47364h;
        this.f47364h = i10 + 1;
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
        synchronized (this.f47358b) {
            try {
                this.f47367k = true;
                this.f47369m = 0;
                f fVar = this.f47365i;
                if (fVar != null) {
                    q(fVar);
                    this.f47365i = null;
                }
                while (!this.f47359c.isEmpty()) {
                    q((f) this.f47359c.removeFirst());
                }
                while (!this.f47360d.isEmpty()) {
                    ((g) this.f47360d.removeFirst()).t();
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
        synchronized (this.f47358b) {
            o();
            if (this.f47365i == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.g(z10);
            int i10 = this.f47363g;
            if (i10 == 0) {
                fVar = null;
            } else {
                f[] fVarArr = this.f47361e;
                int i11 = i10 - 1;
                this.f47363g = i11;
                fVar = fVarArr[i11];
            }
            this.f47365i = fVar;
        }
        return fVar;
    }

    @Override // qc.d
    /* renamed from: m */
    public final g b() {
        synchronized (this.f47358b) {
            try {
                o();
                if (this.f47360d.isEmpty()) {
                    return null;
                }
                return (g) this.f47360d.removeFirst();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // qc.d
    /* renamed from: p */
    public final void c(f fVar) {
        boolean z10;
        synchronized (this.f47358b) {
            o();
            if (fVar == this.f47365i) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.a(z10);
            this.f47359c.addLast(fVar);
            n();
            this.f47365i = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void r(g gVar) {
        synchronized (this.f47358b) {
            s(gVar);
            n();
        }
    }

    @Override // qc.d
    public void release() {
        synchronized (this.f47358b) {
            this.f47368l = true;
            this.f47358b.notify();
        }
        try {
            this.f47357a.join();
        } catch (InterruptedException unused) {
            Thread.currentThread().interrupt();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void u(int i10) {
        boolean z10;
        if (this.f47363g == this.f47361e.length) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        for (f fVar : this.f47361e) {
            fVar.u(i10);
        }
    }
}
