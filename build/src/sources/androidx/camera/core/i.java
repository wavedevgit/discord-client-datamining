package androidx.camera.core;

import a0.j1;
import a0.q2;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.graphics.RectF;
import android.media.ImageWriter;
import androidx.camera.core.f;
import androidx.concurrent.futures.c;
import java.nio.ByteBuffer;
import java.util.concurrent.Executor;
import x.v0;
import x.y0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class i implements j1.a {

    /* renamed from: a  reason: collision with root package name */
    private f.a f1974a;

    /* renamed from: b  reason: collision with root package name */
    private volatile int f1975b;

    /* renamed from: c  reason: collision with root package name */
    private volatile int f1976c;

    /* renamed from: e  reason: collision with root package name */
    private volatile boolean f1978e;

    /* renamed from: f  reason: collision with root package name */
    private volatile boolean f1979f;

    /* renamed from: g  reason: collision with root package name */
    private Executor f1980g;

    /* renamed from: h  reason: collision with root package name */
    private q f1981h;

    /* renamed from: i  reason: collision with root package name */
    private ImageWriter f1982i;

    /* renamed from: n  reason: collision with root package name */
    ByteBuffer f1987n;

    /* renamed from: o  reason: collision with root package name */
    ByteBuffer f1988o;

    /* renamed from: p  reason: collision with root package name */
    ByteBuffer f1989p;

    /* renamed from: q  reason: collision with root package name */
    ByteBuffer f1990q;

    /* renamed from: d  reason: collision with root package name */
    private volatile int f1977d = 1;

    /* renamed from: j  reason: collision with root package name */
    private Rect f1983j = new Rect();

    /* renamed from: k  reason: collision with root package name */
    private Rect f1984k = new Rect();

    /* renamed from: l  reason: collision with root package name */
    private Matrix f1985l = new Matrix();

    /* renamed from: m  reason: collision with root package name */
    private Matrix f1986m = new Matrix();

    /* renamed from: r  reason: collision with root package name */
    private final Object f1991r = new Object();

    /* renamed from: s  reason: collision with root package name */
    protected boolean f1992s = true;

    public static /* synthetic */ void b(i iVar, n nVar, Matrix matrix, n nVar2, Rect rect, f.a aVar, c.a aVar2) {
        int i10;
        if (iVar.f1992s) {
            q2 c10 = nVar.z().c();
            long a10 = nVar.z().a();
            if (iVar.f1978e) {
                i10 = 0;
            } else {
                i10 = iVar.f1975b;
            }
            r rVar = new r(nVar2, v0.e(c10, a10, i10, matrix));
            if (!rect.isEmpty()) {
                rVar.z0(rect);
            }
            aVar.g(rVar);
            aVar2.c(null);
            return;
        }
        aVar2.f(new w1.h("ImageAnalysis is detached"));
    }

    public static /* synthetic */ Object c(final i iVar, Executor executor, final n nVar, final Matrix matrix, final n nVar2, final Rect rect, final f.a aVar, final c.a aVar2) {
        iVar.getClass();
        executor.execute(new Runnable() { // from class: androidx.camera.core.h
            @Override // java.lang.Runnable
            public final void run() {
                i.b(i.this, nVar, matrix, nVar2, rect, aVar, aVar2);
            }
        });
        return "analyzeImage";
    }

    private void h(n nVar) {
        if (this.f1977d == 1) {
            if (this.f1988o == null) {
                this.f1988o = ByteBuffer.allocateDirect(nVar.getWidth() * nVar.getHeight());
            }
            this.f1988o.position(0);
            if (this.f1989p == null) {
                this.f1989p = ByteBuffer.allocateDirect((nVar.getWidth() * nVar.getHeight()) / 4);
            }
            this.f1989p.position(0);
            if (this.f1990q == null) {
                this.f1990q = ByteBuffer.allocateDirect((nVar.getWidth() * nVar.getHeight()) / 4);
            }
            this.f1990q.position(0);
        } else if (this.f1977d == 2 && this.f1987n == null) {
            this.f1987n = ByteBuffer.allocateDirect(nVar.getWidth() * nVar.getHeight() * 4);
        }
    }

    private static q i(int i10, int i11, int i12, int i13, int i14) {
        boolean z10;
        int i15;
        if (i12 != 90 && i12 != 270) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (z10) {
            i15 = i11;
        } else {
            i15 = i10;
        }
        if (!z10) {
            i10 = i11;
        }
        return new q(o.a(i15, i10, i13, i14));
    }

    static Matrix k(int i10, int i11, int i12, int i13, int i14) {
        Matrix matrix = new Matrix();
        if (i14 > 0) {
            matrix.setRectToRect(new RectF(0.0f, 0.0f, i10, i11), b0.q.f7139a, Matrix.ScaleToFit.FILL);
            matrix.postRotate(i14);
            matrix.postConcat(b0.q.c(new RectF(0.0f, 0.0f, i12, i13)));
        }
        return matrix;
    }

    static Rect l(Rect rect, Matrix matrix) {
        RectF rectF = new RectF(rect);
        matrix.mapRect(rectF);
        Rect rect2 = new Rect();
        rectF.round(rect2);
        return rect2;
    }

    private void n(int i10, int i11, int i12, int i13) {
        Matrix k10 = k(i10, i11, i12, i13, this.f1975b);
        this.f1984k = l(this.f1983j, k10);
        this.f1986m.setConcat(this.f1985l, k10);
    }

    private void o(n nVar, int i10) {
        q qVar = this.f1981h;
        if (qVar != null) {
            qVar.j();
            this.f1981h = i(nVar.getWidth(), nVar.getHeight(), i10, this.f1981h.c(), this.f1981h.f());
            if (this.f1977d == 1) {
                ImageWriter imageWriter = this.f1982i;
                if (imageWriter != null) {
                    f0.a.a(imageWriter);
                }
                this.f1982i = f0.a.c(this.f1981h.getSurface(), this.f1981h.f());
            }
        }
    }

    @Override // a0.j1.a
    public void a(j1 j1Var) {
        try {
            n d10 = d(j1Var);
            if (d10 != null) {
                m(d10);
            }
        } catch (IllegalStateException e10) {
            y0.d("ImageAnalysisAnalyzer", "Failed to acquire image.", e10);
        }
    }

    abstract n d(j1 j1Var);

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Removed duplicated region for block: B:51:0x0075  */
    /* JADX WARN: Removed duplicated region for block: B:53:0x0078  */
    /* JADX WARN: Removed duplicated region for block: B:54:0x007b  */
    /* JADX WARN: Removed duplicated region for block: B:57:0x0089  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public com.google.common.util.concurrent.ListenableFuture e(final androidx.camera.core.n r17) {
        /*
            Method dump skipped, instructions count: 216
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.camera.core.i.e(androidx.camera.core.n):com.google.common.util.concurrent.ListenableFuture");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f() {
        this.f1992s = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void g();

    /* JADX INFO: Access modifiers changed from: package-private */
    public void j() {
        this.f1992s = false;
        g();
    }

    abstract void m(n nVar);

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p(Executor executor, f.a aVar) {
        if (aVar == null) {
            g();
        }
        synchronized (this.f1991r) {
            this.f1974a = aVar;
            this.f1980g = executor;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q(boolean z10) {
        this.f1979f = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r(int i10) {
        this.f1977d = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(boolean z10) {
        this.f1978e = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void t(q qVar) {
        synchronized (this.f1991r) {
            this.f1981h = qVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void u(int i10) {
        this.f1975b = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void v(Matrix matrix) {
        synchronized (this.f1991r) {
            this.f1985l = matrix;
            this.f1986m = new Matrix(this.f1985l);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void w(Rect rect) {
        synchronized (this.f1991r) {
            this.f1983j = rect;
            this.f1984k = new Rect(this.f1983j);
        }
    }
}
