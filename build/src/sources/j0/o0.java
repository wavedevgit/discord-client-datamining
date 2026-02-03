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
    private final Surface f31303e;

    /* renamed from: i  reason: collision with root package name */
    private final int f31304i;

    /* renamed from: o  reason: collision with root package name */
    private final int f31305o;

    /* renamed from: p  reason: collision with root package name */
    private final Size f31306p;

    /* renamed from: q  reason: collision with root package name */
    private final l1.a f31307q;

    /* renamed from: r  reason: collision with root package name */
    private final l1.a f31308r;

    /* renamed from: s  reason: collision with root package name */
    private final float[] f31309s;

    /* renamed from: t  reason: collision with root package name */
    private final float[] f31310t;

    /* renamed from: u  reason: collision with root package name */
    private final float[] f31311u;

    /* renamed from: v  reason: collision with root package name */
    private final float[] f31312v;

    /* renamed from: w  reason: collision with root package name */
    private Consumer f31313w;

    /* renamed from: x  reason: collision with root package name */
    private Executor f31314x;

    /* renamed from: d  reason: collision with root package name */
    private final Object f31302d = new Object();

    /* renamed from: y  reason: collision with root package name */
    private boolean f31315y = false;

    /* renamed from: z  reason: collision with root package name */
    private boolean f31316z = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o0(Surface surface, int i10, int i11, Size size, l1.a aVar, l1.a aVar2, Matrix matrix) {
        float[] fArr = new float[16];
        this.f31309s = fArr;
        float[] fArr2 = new float[16];
        this.f31310t = fArr2;
        float[] fArr3 = new float[16];
        this.f31311u = fArr3;
        float[] fArr4 = new float[16];
        this.f31312v = fArr4;
        this.f31303e = surface;
        this.f31304i = i10;
        this.f31305o = i11;
        this.f31306p = size;
        this.f31307q = aVar;
        this.f31308r = aVar2;
        this.C = matrix;
        l(fArr, fArr3, aVar);
        l(fArr2, fArr4, aVar2);
        this.A = androidx.concurrent.futures.c.a(new c.InterfaceC0028c() { // from class: j0.m0
            @Override // androidx.concurrent.futures.c.InterfaceC0028c
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

    private static void l(float[] fArr, float[] fArr2, l1.a aVar) {
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
        n(fArr2, aVar.a());
        android.opengl.Matrix.multiplyMM(fArr, 0, fArr2, 0, fArr, 0);
    }

    private static void n(float[] fArr, a0.e0 e0Var) {
        android.opengl.Matrix.setIdentityM(fArr, 0);
        b0.m.d(fArr, 0.5f);
        if (e0Var != null) {
            b2.e.j(e0Var.q(), "Camera has no transform.");
            b0.m.c(fArr, e0Var.b().a(), 0.5f, 0.5f);
            if (e0Var.o()) {
                android.opengl.Matrix.translateM(fArr, 0, 1.0f, 0.0f, 0.0f);
                android.opengl.Matrix.scaleM(fArr, 0, -1.0f, 1.0f, 1.0f);
            }
        }
        android.opengl.Matrix.invertM(fArr, 0, fArr, 0);
    }

    public void B() {
        Executor executor;
        Consumer consumer;
        final AtomicReference atomicReference = new AtomicReference();
        synchronized (this.f31302d) {
            try {
                if (this.f31314x != null && (consumer = this.f31313w) != null) {
                    if (!this.f31316z) {
                        atomicReference.set(consumer);
                        executor = this.f31314x;
                        this.f31315y = false;
                    }
                    executor = null;
                }
                this.f31315y = true;
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

    @Override // x.l1
    public void M(float[] fArr, float[] fArr2, boolean z10) {
        float[] fArr3;
        if (z10) {
            fArr3 = this.f31309s;
        } else {
            fArr3 = this.f31310t;
        }
        android.opengl.Matrix.multiplyMM(fArr, 0, fArr2, 0, fArr3, 0);
    }

    @Override // x.l1, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        synchronized (this.f31302d) {
            try {
                if (!this.f31316z) {
                    this.f31316z = true;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        this.B.c(null);
    }

    @Override // x.l1
    public int getFormat() {
        return this.f31305o;
    }

    @Override // x.l1
    public Size getSize() {
        return this.f31306p;
    }

    @Override // x.l1
    public void i1(float[] fArr, float[] fArr2) {
        M(fArr, fArr2, true);
    }

    @Override // x.l1
    public Surface j1(Executor executor, Consumer consumer) {
        boolean z10;
        synchronized (this.f31302d) {
            this.f31314x = executor;
            this.f31313w = consumer;
            z10 = this.f31315y;
        }
        if (z10) {
            B();
        }
        return this.f31303e;
    }

    public ListenableFuture x() {
        return this.A;
    }
}
