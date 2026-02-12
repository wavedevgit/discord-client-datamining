package j0;

import android.graphics.Matrix;
import android.graphics.RectF;
import android.util.Size;
import android.view.Surface;
import androidx.concurrent.futures.c;
import androidx.core.util.Consumer;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.concurrent.Executor;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.atomic.AtomicReference;
import x.l1;
import x.y0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class o0 implements l1 {
    private final ListenableFuture A;
    private c.a B;
    private Matrix C;

    /* renamed from: e  reason: collision with root package name */
    private final Surface f30728e;

    /* renamed from: i  reason: collision with root package name */
    private final int f30729i;

    /* renamed from: o  reason: collision with root package name */
    private final int f30730o;

    /* renamed from: p  reason: collision with root package name */
    private final Size f30731p;

    /* renamed from: q  reason: collision with root package name */
    private final l1.a f30732q;

    /* renamed from: r  reason: collision with root package name */
    private final l1.a f30733r;

    /* renamed from: s  reason: collision with root package name */
    private final float[] f30734s;

    /* renamed from: t  reason: collision with root package name */
    private final float[] f30735t;

    /* renamed from: u  reason: collision with root package name */
    private final float[] f30736u;

    /* renamed from: v  reason: collision with root package name */
    private final float[] f30737v;

    /* renamed from: w  reason: collision with root package name */
    private Consumer f30738w;

    /* renamed from: x  reason: collision with root package name */
    private Executor f30739x;

    /* renamed from: d  reason: collision with root package name */
    private final Object f30727d = new Object();

    /* renamed from: y  reason: collision with root package name */
    private boolean f30740y = false;

    /* renamed from: z  reason: collision with root package name */
    private boolean f30741z = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o0(Surface surface, int i10, int i11, Size size, l1.a aVar, l1.a aVar2, Matrix matrix) {
        float[] fArr = new float[16];
        this.f30734s = fArr;
        float[] fArr2 = new float[16];
        this.f30735t = fArr2;
        float[] fArr3 = new float[16];
        this.f30736u = fArr3;
        float[] fArr4 = new float[16];
        this.f30737v = fArr4;
        this.f30728e = surface;
        this.f30729i = i10;
        this.f30730o = i11;
        this.f30731p = size;
        this.f30732q = aVar;
        this.f30733r = aVar2;
        this.C = matrix;
        i(fArr, fArr3, aVar);
        i(fArr2, fArr4, aVar2);
        this.A = androidx.concurrent.futures.c.a(new c.InterfaceC0026c() { // from class: j0.m0
            @Override // androidx.concurrent.futures.c.InterfaceC0026c
            public final Object a(c.a aVar3) {
                return o0.a(o0.this, aVar3);
            }
        });
    }

    public static /* synthetic */ Object a(o0 o0Var, c.a aVar) {
        o0Var.B = aVar;
        return "SurfaceOutputImpl close future complete";
    }

    public static /* synthetic */ void h(o0 o0Var, AtomicReference atomicReference) {
        o0Var.getClass();
        ((Consumer) atomicReference.get()).accept(l1.b.c(0, o0Var));
    }

    private static void i(float[] fArr, float[] fArr2, l1.a aVar) {
        android.opengl.Matrix.setIdentityM(fArr, 0);
        if (aVar == null) {
            return;
        }
        b0.m.d(fArr, 0.5f);
        b0.m.c(fArr, aVar.e(), 0.5f, 0.5f);
        if (aVar.d()) {
            android.opengl.Matrix.translateM(fArr, 0, 1.0f, 0.0f, 0.0f);
            android.opengl.Matrix.scaleM(fArr, 0, -1.0f, 1.0f, 1.0f);
        }
        Size o10 = b0.q.o(aVar.c(), aVar.e());
        Matrix e10 = b0.q.e(b0.q.r(aVar.c()), b0.q.r(o10), aVar.e(), aVar.d());
        RectF rectF = new RectF(aVar.b());
        e10.mapRect(rectF);
        android.opengl.Matrix.translateM(fArr, 0, rectF.left / o10.getWidth(), ((o10.getHeight() - rectF.height()) - rectF.top) / o10.getHeight(), 0.0f);
        android.opengl.Matrix.scaleM(fArr, 0, rectF.width() / o10.getWidth(), rectF.height() / o10.getHeight(), 1.0f);
        m(fArr2, aVar.a());
        android.opengl.Matrix.multiplyMM(fArr, 0, fArr2, 0, fArr, 0);
    }

    private static void m(float[] fArr, a0.e0 e0Var) {
        android.opengl.Matrix.setIdentityM(fArr, 0);
        b0.m.d(fArr, 0.5f);
        if (e0Var != null) {
            b2.e.j(e0Var.q(), "Camera has no transform.");
            b0.m.c(fArr, e0Var.b().a(), 0.5f, 0.5f);
            if (e0Var.n()) {
                android.opengl.Matrix.translateM(fArr, 0, 1.0f, 0.0f, 0.0f);
                android.opengl.Matrix.scaleM(fArr, 0, -1.0f, 1.0f, 1.0f);
            }
        }
        android.opengl.Matrix.invertM(fArr, 0, fArr, 0);
    }

    @Override // x.l1
    public void R(float[] fArr, float[] fArr2, boolean z10) {
        float[] fArr3;
        if (z10) {
            fArr3 = this.f30734s;
        } else {
            fArr3 = this.f30735t;
        }
        android.opengl.Matrix.multiplyMM(fArr, 0, fArr2, 0, fArr3, 0);
    }

    @Override // x.l1, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        synchronized (this.f30727d) {
            try {
                if (!this.f30741z) {
                    this.f30741z = true;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        this.B.c(null);
    }

    @Override // x.l1
    public int getFormat() {
        return this.f30730o;
    }

    @Override // x.l1
    public Size getSize() {
        return this.f30731p;
    }

    @Override // x.l1
    public void j1(float[] fArr, float[] fArr2) {
        R(fArr, fArr2, true);
    }

    @Override // x.l1
    public Surface k1(Executor executor, Consumer consumer) {
        boolean z10;
        synchronized (this.f30727d) {
            this.f30739x = executor;
            this.f30738w = consumer;
            z10 = this.f30740y;
        }
        if (z10) {
            p();
        }
        return this.f30728e;
    }

    public ListenableFuture n() {
        return this.A;
    }

    public void p() {
        Executor executor;
        Consumer consumer;
        final AtomicReference atomicReference = new AtomicReference();
        synchronized (this.f30727d) {
            try {
                if (this.f30739x != null && (consumer = this.f30738w) != null) {
                    if (!this.f30741z) {
                        atomicReference.set(consumer);
                        executor = this.f30739x;
                        this.f30740y = false;
                    }
                    executor = null;
                }
                this.f30740y = true;
                executor = null;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        if (executor != null) {
            try {
                executor.execute(new Runnable() { // from class: j0.n0
                    @Override // java.lang.Runnable
                    public final void run() {
                        o0.h(o0.this, atomicReference);
                    }
                });
            } catch (RejectedExecutionException e10) {
                y0.b("SurfaceOutputImpl", "Processor executor closed. Close request not posted.", e10);
            }
        }
    }
}
