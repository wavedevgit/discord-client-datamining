package com.airbnb.lottie;

import android.animation.Animator;
import android.animation.ValueAnimator;
import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.Typeface;
import android.graphics.drawable.Animatable;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.widget.ImageView;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Executor;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.Semaphore;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import l5.a0;
import l5.d0;
import l5.g0;
import l5.i0;
import l5.w;
import v5.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n extends Drawable implements Drawable.Callback, Animatable {

    /* renamed from: e0  reason: collision with root package name */
    private static final boolean f7863e0;

    /* renamed from: f0  reason: collision with root package name */
    private static final List f7864f0;

    /* renamed from: g0  reason: collision with root package name */
    private static final Executor f7865g0;
    private boolean A;
    private boolean B;
    private t5.c C;
    private int D;
    private boolean E;
    private boolean F;
    private boolean G;
    private boolean H;
    private g0 I;
    private boolean J;
    private final Matrix K;
    private Bitmap L;
    private Canvas M;
    private Rect N;
    private RectF O;
    private Paint P;
    private Rect Q;
    private Rect R;
    private RectF S;
    private RectF T;
    private Matrix U;
    private Matrix V;
    private boolean W;
    private l5.a X;
    private final ValueAnimator.AnimatorUpdateListener Y;
    private final Semaphore Z;

    /* renamed from: a0  reason: collision with root package name */
    private Handler f7866a0;

    /* renamed from: b0  reason: collision with root package name */
    private Runnable f7867b0;

    /* renamed from: c0  reason: collision with root package name */
    private final Runnable f7868c0;

    /* renamed from: d  reason: collision with root package name */
    private l5.i f7869d;

    /* renamed from: d0  reason: collision with root package name */
    private float f7870d0;

    /* renamed from: e  reason: collision with root package name */
    private final x5.g f7871e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f7872i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f7873o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f7874p;

    /* renamed from: q  reason: collision with root package name */
    private b f7875q;

    /* renamed from: r  reason: collision with root package name */
    private final ArrayList f7876r;

    /* renamed from: s  reason: collision with root package name */
    private p5.b f7877s;

    /* renamed from: t  reason: collision with root package name */
    private String f7878t;

    /* renamed from: u  reason: collision with root package name */
    private p5.a f7879u;

    /* renamed from: v  reason: collision with root package name */
    private Map f7880v;

    /* renamed from: w  reason: collision with root package name */
    String f7881w;

    /* renamed from: x  reason: collision with root package name */
    l5.b f7882x;

    /* renamed from: y  reason: collision with root package name */
    i0 f7883y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f7884z;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a(l5.i iVar);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum b {
        NONE,
        PLAY,
        RESUME
    }

    static {
        boolean z10;
        if (Build.VERSION.SDK_INT <= 25) {
            z10 = true;
        } else {
            z10 = false;
        }
        f7863e0 = z10;
        f7864f0 = Arrays.asList("reduced motion", "reduced_motion", "reduced-motion", "reducedmotion");
        f7865g0 = new ThreadPoolExecutor(0, 2, 35L, TimeUnit.MILLISECONDS, new LinkedBlockingQueue(), new x5.e());
    }

    public n() {
        x5.g gVar = new x5.g();
        this.f7871e = gVar;
        this.f7872i = true;
        this.f7873o = false;
        this.f7874p = false;
        this.f7875q = b.NONE;
        this.f7876r = new ArrayList();
        this.A = false;
        this.B = true;
        this.D = SetSpanOperation.SPAN_MAX_PRIORITY;
        this.H = false;
        this.I = g0.AUTOMATIC;
        this.J = false;
        this.K = new Matrix();
        this.W = false;
        ValueAnimator.AnimatorUpdateListener animatorUpdateListener = new ValueAnimator.AnimatorUpdateListener() { // from class: l5.u
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                com.airbnb.lottie.n.g(com.airbnb.lottie.n.this, valueAnimator);
            }
        };
        this.Y = animatorUpdateListener;
        this.Z = new Semaphore(1);
        this.f7868c0 = new Runnable() { // from class: l5.v
            @Override // java.lang.Runnable
            public final void run() {
                com.airbnb.lottie.n.k(com.airbnb.lottie.n.this);
            }
        };
        this.f7870d0 = -3.4028235E38f;
        gVar.addUpdateListener(animatorUpdateListener);
    }

    private void D(int i10, int i11) {
        Bitmap bitmap = this.L;
        if (bitmap != null && bitmap.getWidth() >= i10 && this.L.getHeight() >= i11) {
            if (this.L.getWidth() <= i10 && this.L.getHeight() <= i11) {
                return;
            }
            Bitmap createBitmap = Bitmap.createBitmap(this.L, 0, 0, i10, i11);
            this.L = createBitmap;
            this.M.setBitmap(createBitmap);
            this.W = true;
            return;
        }
        Bitmap createBitmap2 = Bitmap.createBitmap(i10, i11, Bitmap.Config.ARGB_8888);
        this.L = createBitmap2;
        this.M.setBitmap(createBitmap2);
        this.W = true;
    }

    private void E() {
        if (this.M != null) {
            return;
        }
        this.M = new Canvas();
        this.T = new RectF();
        this.U = new Matrix();
        this.V = new Matrix();
        this.N = new Rect();
        this.O = new RectF();
        this.P = new m5.a();
        this.Q = new Rect();
        this.R = new Rect();
        this.S = new RectF();
    }

    private Context L() {
        Drawable.Callback callback = getCallback();
        if (callback == null || !(callback instanceof View)) {
            return null;
        }
        return ((View) callback).getContext();
    }

    private p5.a M() {
        if (getCallback() == null) {
            return null;
        }
        if (this.f7879u == null) {
            p5.a aVar = new p5.a(getCallback(), this.f7882x);
            this.f7879u = aVar;
            String str = this.f7881w;
            if (str != null) {
                aVar.c(str);
            }
        }
        return this.f7879u;
    }

    private p5.b O() {
        p5.b bVar = this.f7877s;
        if (bVar != null && !bVar.b(L())) {
            this.f7877s = null;
        }
        if (this.f7877s == null) {
            this.f7877s = new p5.b(getCallback(), this.f7878t, null, this.f7869d.j());
        }
        return this.f7877s;
    }

    private q5.h S() {
        q5.h hVar = null;
        for (String str : f7864f0) {
            hVar = this.f7869d.l(str);
            if (hVar != null) {
                break;
            }
        }
        return hVar;
    }

    private boolean W0() {
        l5.i iVar = this.f7869d;
        if (iVar == null) {
            return false;
        }
        float f10 = this.f7870d0;
        float k10 = this.f7871e.k();
        this.f7870d0 = k10;
        if (Math.abs(k10 - f10) * iVar.d() < 50.0f) {
            return false;
        }
        return true;
    }

    private boolean d0() {
        Drawable.Callback callback = getCallback();
        if (!(callback instanceof View)) {
            return false;
        }
        ViewParent parent = ((View) callback).getParent();
        if (!(parent instanceof ViewGroup)) {
            return false;
        }
        return !((ViewGroup) parent).getClipChildren();
    }

    public static /* synthetic */ void g(n nVar, ValueAnimator valueAnimator) {
        if (nVar.G()) {
            nVar.invalidateSelf();
            return;
        }
        t5.c cVar = nVar.C;
        if (cVar != null) {
            cVar.M(nVar.f7871e.k());
        }
    }

    public static /* synthetic */ void k(final n nVar) {
        t5.c cVar = nVar.C;
        if (cVar == null) {
            return;
        }
        try {
            nVar.Z.acquire();
            cVar.M(nVar.f7871e.k());
            if (f7863e0 && nVar.W) {
                if (nVar.f7866a0 == null) {
                    nVar.f7866a0 = new Handler(Looper.getMainLooper());
                    nVar.f7867b0 = new Runnable() { // from class: l5.t
                        @Override // java.lang.Runnable
                        public final void run() {
                            com.airbnb.lottie.n.n(com.airbnb.lottie.n.this);
                        }
                    };
                }
                nVar.f7866a0.post(nVar.f7867b0);
            }
        } catch (InterruptedException unused) {
        } catch (Throwable th2) {
            nVar.Z.release();
            throw th2;
        }
        nVar.Z.release();
    }

    private void l0(Canvas canvas, t5.c cVar) {
        if (this.f7869d != null && cVar != null) {
            E();
            canvas.getMatrix(this.U);
            canvas.getClipBounds(this.N);
            x(this.N, this.O);
            this.U.mapRect(this.O);
            y(this.O, this.N);
            if (this.B) {
                this.T.set(0.0f, 0.0f, getIntrinsicWidth(), getIntrinsicHeight());
            } else {
                cVar.e(this.T, null, false);
            }
            this.U.mapRect(this.T);
            Rect bounds = getBounds();
            float width = bounds.width() / getIntrinsicWidth();
            float height = bounds.height() / getIntrinsicHeight();
            p0(this.T, width, height);
            if (!d0()) {
                RectF rectF = this.T;
                Rect rect = this.N;
                rectF.intersect(rect.left, rect.top, rect.right, rect.bottom);
            }
            int ceil = (int) Math.ceil(this.T.width());
            int ceil2 = (int) Math.ceil(this.T.height());
            if (ceil > 0 && ceil2 > 0) {
                D(ceil, ceil2);
                if (this.W) {
                    this.K.set(this.U);
                    this.K.preScale(width, height);
                    Matrix matrix = this.K;
                    RectF rectF2 = this.T;
                    matrix.postTranslate(-rectF2.left, -rectF2.top);
                    this.L.eraseColor(0);
                    cVar.g(this.M, this.K, this.D);
                    this.U.invert(this.V);
                    this.V.mapRect(this.S, this.T);
                    y(this.S, this.R);
                }
                this.Q.set(0, 0, ceil, ceil2);
                canvas.drawBitmap(this.L, this.Q, this.R, this.P);
            }
        }
    }

    public static /* synthetic */ void n(n nVar) {
        Drawable.Callback callback = nVar.getCallback();
        if (callback != null) {
            callback.invalidateDrawable(nVar);
        }
    }

    private void p0(RectF rectF, float f10, float f11) {
        rectF.set(rectF.left * f10, rectF.top * f11, rectF.right * f10, rectF.bottom * f11);
    }

    private boolean s() {
        if (!this.f7872i && !this.f7873o) {
            return false;
        }
        return true;
    }

    private void t() {
        l5.i iVar = this.f7869d;
        if (iVar == null) {
            return;
        }
        t5.c cVar = new t5.c(this, v.a(iVar), iVar.k(), iVar);
        this.C = cVar;
        if (this.F) {
            cVar.K(true);
        }
        this.C.Q(this.B);
    }

    private void w() {
        l5.i iVar = this.f7869d;
        if (iVar == null) {
            return;
        }
        this.J = this.I.d(Build.VERSION.SDK_INT, iVar.q(), iVar.m());
    }

    private void x(Rect rect, RectF rectF) {
        rectF.set(rect.left, rect.top, rect.right, rect.bottom);
    }

    private void y(RectF rectF, Rect rect) {
        rect.set((int) Math.floor(rectF.left), (int) Math.floor(rectF.top), (int) Math.ceil(rectF.right), (int) Math.ceil(rectF.bottom));
    }

    private void z(Canvas canvas) {
        t5.c cVar = this.C;
        l5.i iVar = this.f7869d;
        if (cVar != null && iVar != null) {
            this.K.reset();
            Rect bounds = getBounds();
            if (!bounds.isEmpty()) {
                this.K.preScale(bounds.width() / iVar.b().width(), bounds.height() / iVar.b().height());
                this.K.preTranslate(bounds.left, bounds.top);
            }
            cVar.g(canvas, this.K, this.D);
        }
    }

    public void A(boolean z10) {
        if (this.f7884z != z10) {
            this.f7884z = z10;
            if (this.f7869d != null) {
                t();
            }
        }
    }

    public void A0(l5.c cVar) {
        p5.b bVar = this.f7877s;
        if (bVar != null) {
            bVar.d(cVar);
        }
    }

    public boolean B() {
        return this.f7884z;
    }

    public void B0(String str) {
        this.f7878t = str;
    }

    public void C() {
        this.f7876r.clear();
        this.f7871e.j();
        if (!isVisible()) {
            this.f7875q = b.NONE;
        }
    }

    public void C0(boolean z10) {
        this.A = z10;
    }

    public void D0(final int i10) {
        if (this.f7869d == null) {
            this.f7876r.add(new a() { // from class: com.airbnb.lottie.b
                @Override // com.airbnb.lottie.n.a
                public final void a(l5.i iVar) {
                    n.this.D0(i10);
                }
            });
        } else {
            this.f7871e.C(i10 + 0.99f);
        }
    }

    public void E0(final String str) {
        l5.i iVar = this.f7869d;
        if (iVar == null) {
            this.f7876r.add(new a() { // from class: com.airbnb.lottie.h
                @Override // com.airbnb.lottie.n.a
                public final void a(l5.i iVar2) {
                    n.this.E0(str);
                }
            });
            return;
        }
        q5.h l10 = iVar.l(str);
        if (l10 != null) {
            D0((int) (l10.f47495b + l10.f47496c));
            return;
        }
        throw new IllegalArgumentException("Cannot find marker with name " + str + ".");
    }

    public l5.a F() {
        l5.a aVar = this.X;
        if (aVar != null) {
            return aVar;
        }
        return l5.e.d();
    }

    public void F0(final float f10) {
        l5.i iVar = this.f7869d;
        if (iVar == null) {
            this.f7876r.add(new a() { // from class: com.airbnb.lottie.e
                @Override // com.airbnb.lottie.n.a
                public final void a(l5.i iVar2) {
                    n.this.F0(f10);
                }
            });
        } else {
            this.f7871e.C(x5.i.i(iVar.p(), this.f7869d.f(), f10));
        }
    }

    public boolean G() {
        if (F() == l5.a.ENABLED) {
            return true;
        }
        return false;
    }

    public void G0(final int i10, final int i11) {
        if (this.f7869d == null) {
            this.f7876r.add(new a() { // from class: com.airbnb.lottie.f
                @Override // com.airbnb.lottie.n.a
                public final void a(l5.i iVar) {
                    n.this.G0(i10, i11);
                }
            });
        } else {
            this.f7871e.D(i10, i11 + 0.99f);
        }
    }

    public Bitmap H(String str) {
        p5.b O = O();
        if (O != null) {
            return O.a(str);
        }
        return null;
    }

    public void H0(final String str) {
        l5.i iVar = this.f7869d;
        if (iVar == null) {
            this.f7876r.add(new a() { // from class: com.airbnb.lottie.a
                @Override // com.airbnb.lottie.n.a
                public final void a(l5.i iVar2) {
                    n.this.H0(str);
                }
            });
            return;
        }
        q5.h l10 = iVar.l(str);
        if (l10 != null) {
            int i10 = (int) l10.f47495b;
            G0(i10, ((int) l10.f47496c) + i10);
            return;
        }
        throw new IllegalArgumentException("Cannot find marker with name " + str + ".");
    }

    public boolean I() {
        return this.H;
    }

    public void I0(final int i10) {
        if (this.f7869d == null) {
            this.f7876r.add(new a() { // from class: com.airbnb.lottie.c
                @Override // com.airbnb.lottie.n.a
                public final void a(l5.i iVar) {
                    n.this.I0(i10);
                }
            });
        } else {
            this.f7871e.E(i10);
        }
    }

    public boolean J() {
        return this.B;
    }

    public void J0(final String str) {
        l5.i iVar = this.f7869d;
        if (iVar == null) {
            this.f7876r.add(new a() { // from class: com.airbnb.lottie.i
                @Override // com.airbnb.lottie.n.a
                public final void a(l5.i iVar2) {
                    n.this.J0(str);
                }
            });
            return;
        }
        q5.h l10 = iVar.l(str);
        if (l10 != null) {
            I0((int) l10.f47495b);
            return;
        }
        throw new IllegalArgumentException("Cannot find marker with name " + str + ".");
    }

    public l5.i K() {
        return this.f7869d;
    }

    public void K0(final float f10) {
        l5.i iVar = this.f7869d;
        if (iVar == null) {
            this.f7876r.add(new a() { // from class: com.airbnb.lottie.k
                @Override // com.airbnb.lottie.n.a
                public final void a(l5.i iVar2) {
                    n.this.K0(f10);
                }
            });
        } else {
            I0((int) x5.i.i(iVar.p(), this.f7869d.f(), f10));
        }
    }

    public void L0(boolean z10) {
        if (this.F != z10) {
            this.F = z10;
            t5.c cVar = this.C;
            if (cVar != null) {
                cVar.K(z10);
            }
        }
    }

    public void M0(boolean z10) {
        this.E = z10;
        l5.i iVar = this.f7869d;
        if (iVar != null) {
            iVar.v(z10);
        }
    }

    public int N() {
        return (int) this.f7871e.l();
    }

    public void N0(final float f10) {
        if (this.f7869d == null) {
            this.f7876r.add(new a() { // from class: com.airbnb.lottie.l
                @Override // com.airbnb.lottie.n.a
                public final void a(l5.i iVar) {
                    n.this.N0(f10);
                }
            });
            return;
        }
        l5.e.b("Drawable#setProgress");
        this.f7871e.B(this.f7869d.h(f10));
        l5.e.c("Drawable#setProgress");
    }

    public void O0(g0 g0Var) {
        this.I = g0Var;
        w();
    }

    public String P() {
        return this.f7878t;
    }

    public void P0(int i10) {
        this.f7871e.setRepeatCount(i10);
    }

    public w Q(String str) {
        l5.i iVar = this.f7869d;
        if (iVar == null) {
            return null;
        }
        return (w) iVar.j().get(str);
    }

    public void Q0(int i10) {
        this.f7871e.setRepeatMode(i10);
    }

    public boolean R() {
        return this.A;
    }

    public void R0(boolean z10) {
        this.f7874p = z10;
    }

    public void S0(float f10) {
        this.f7871e.F(f10);
    }

    public float T() {
        return this.f7871e.n();
    }

    public void T0(Boolean bool) {
        this.f7872i = bool.booleanValue();
    }

    public float U() {
        return this.f7871e.p();
    }

    public void U0(i0 i0Var) {
        this.f7883y = i0Var;
    }

    public d0 V() {
        l5.i iVar = this.f7869d;
        if (iVar != null) {
            return iVar.n();
        }
        return null;
    }

    public void V0(boolean z10) {
        this.f7871e.G(z10);
    }

    public float W() {
        return this.f7871e.k();
    }

    public g0 X() {
        if (this.J) {
            return g0.SOFTWARE;
        }
        return g0.HARDWARE;
    }

    public boolean X0() {
        if (this.f7880v == null && this.f7883y == null && this.f7869d.c().l() > 0) {
            return true;
        }
        return false;
    }

    public int Y() {
        return this.f7871e.getRepeatCount();
    }

    public int Z() {
        return this.f7871e.getRepeatMode();
    }

    public float a0() {
        return this.f7871e.q();
    }

    public i0 b0() {
        return this.f7883y;
    }

    public Typeface c0(q5.c cVar) {
        Map map = this.f7880v;
        if (map != null) {
            String a10 = cVar.a();
            if (map.containsKey(a10)) {
                return (Typeface) map.get(a10);
            }
            String b10 = cVar.b();
            if (map.containsKey(b10)) {
                return (Typeface) map.get(b10);
            }
            String str = cVar.a() + "-" + cVar.c();
            if (map.containsKey(str)) {
                return (Typeface) map.get(str);
            }
        }
        p5.a M = M();
        if (M != null) {
            return M.b(cVar);
        }
        return null;
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        t5.c cVar = this.C;
        if (cVar != null) {
            boolean G = G();
            if (G) {
                try {
                    this.Z.acquire();
                } catch (InterruptedException unused) {
                    l5.e.c("Drawable#draw");
                    if (G) {
                        this.Z.release();
                        if (cVar.P() == this.f7871e.k()) {
                            return;
                        }
                    } else {
                        return;
                    }
                } catch (Throwable th2) {
                    l5.e.c("Drawable#draw");
                    if (G) {
                        this.Z.release();
                        if (cVar.P() != this.f7871e.k()) {
                            f7865g0.execute(this.f7868c0);
                        }
                    }
                    throw th2;
                }
            }
            l5.e.b("Drawable#draw");
            if (G && W0()) {
                N0(this.f7871e.k());
            }
            if (this.f7874p) {
                if (this.J) {
                    l0(canvas, cVar);
                } else {
                    z(canvas);
                }
            } else if (this.J) {
                l0(canvas, cVar);
            } else {
                z(canvas);
            }
            this.W = false;
            l5.e.c("Drawable#draw");
            if (G) {
                this.Z.release();
                if (cVar.P() == this.f7871e.k()) {
                    return;
                }
                f7865g0.execute(this.f7868c0);
            }
        }
    }

    public boolean e0() {
        x5.g gVar = this.f7871e;
        if (gVar == null) {
            return false;
        }
        return gVar.isRunning();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean f0() {
        if (isVisible()) {
            return this.f7871e.isRunning();
        }
        b bVar = this.f7875q;
        if (bVar != b.PLAY && bVar != b.RESUME) {
            return false;
        }
        return true;
    }

    public boolean g0() {
        return this.G;
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.D;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        l5.i iVar = this.f7869d;
        if (iVar == null) {
            return -1;
        }
        return iVar.b().height();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        l5.i iVar = this.f7869d;
        if (iVar == null) {
            return -1;
        }
        return iVar.b().width();
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    public void h0() {
        this.f7876r.clear();
        this.f7871e.s();
        if (!isVisible()) {
            this.f7875q = b.NONE;
        }
    }

    public void i0() {
        float T;
        if (this.C == null) {
            this.f7876r.add(new a() { // from class: com.airbnb.lottie.j
                @Override // com.airbnb.lottie.n.a
                public final void a(l5.i iVar) {
                    n.this.i0();
                }
            });
            return;
        }
        w();
        if (s() || Y() == 0) {
            if (isVisible()) {
                this.f7871e.t();
                this.f7875q = b.NONE;
            } else {
                this.f7875q = b.PLAY;
            }
        }
        if (!s()) {
            q5.h S = S();
            if (S != null) {
                y0((int) S.f47495b);
            } else {
                if (a0() < 0.0f) {
                    T = U();
                } else {
                    T = T();
                }
                y0((int) T);
            }
            this.f7871e.j();
            if (!isVisible()) {
                this.f7875q = b.NONE;
            }
        }
    }

    @Override // android.graphics.drawable.Drawable.Callback
    public void invalidateDrawable(Drawable drawable) {
        Drawable.Callback callback = getCallback();
        if (callback == null) {
            return;
        }
        callback.invalidateDrawable(this);
    }

    @Override // android.graphics.drawable.Drawable
    public void invalidateSelf() {
        Drawable.Callback callback;
        if (!this.W) {
            this.W = true;
            if ((!f7863e0 || Looper.getMainLooper() == Looper.myLooper()) && (callback = getCallback()) != null) {
                callback.invalidateDrawable(this);
            }
        }
    }

    @Override // android.graphics.drawable.Animatable
    public boolean isRunning() {
        return e0();
    }

    public void j0() {
        this.f7871e.removeAllListeners();
    }

    public void k0() {
        this.f7871e.removeAllUpdateListeners();
        this.f7871e.addUpdateListener(this.Y);
    }

    public List m0(q5.e eVar) {
        if (this.C == null) {
            x5.d.c("Cannot resolve KeyPath. Composition is not set yet.");
            return Collections.EMPTY_LIST;
        }
        ArrayList arrayList = new ArrayList();
        this.C.c(eVar, 0, arrayList, new q5.e(new String[0]));
        return arrayList;
    }

    public void n0() {
        float T;
        if (this.C == null) {
            this.f7876r.add(new a() { // from class: com.airbnb.lottie.g
                @Override // com.airbnb.lottie.n.a
                public final void a(l5.i iVar) {
                    n.this.n0();
                }
            });
            return;
        }
        w();
        if (s() || Y() == 0) {
            if (isVisible()) {
                this.f7871e.x();
                this.f7875q = b.NONE;
            } else {
                this.f7875q = b.RESUME;
            }
        }
        if (!s()) {
            if (a0() < 0.0f) {
                T = U();
            } else {
                T = T();
            }
            y0((int) T);
            this.f7871e.j();
            if (!isVisible()) {
                this.f7875q = b.NONE;
            }
        }
    }

    public void o0() {
        this.f7871e.z();
    }

    public void q(Animator.AnimatorListener animatorListener) {
        this.f7871e.addListener(animatorListener);
    }

    public void q0(boolean z10) {
        this.G = z10;
    }

    public void r(final q5.e eVar, final Object obj, final y5.c cVar) {
        t5.c cVar2 = this.C;
        if (cVar2 == null) {
            this.f7876r.add(new a() { // from class: com.airbnb.lottie.d
                @Override // com.airbnb.lottie.n.a
                public final void a(l5.i iVar) {
                    n.this.r(eVar, obj, cVar);
                }
            });
            return;
        }
        boolean z10 = true;
        if (eVar == q5.e.f47489c) {
            cVar2.d(obj, cVar);
        } else if (eVar.d() != null) {
            eVar.d().d(obj, cVar);
        } else {
            List m02 = m0(eVar);
            for (int i10 = 0; i10 < m02.size(); i10++) {
                ((q5.e) m02.get(i10)).d().d(obj, cVar);
            }
            z10 = true ^ m02.isEmpty();
        }
        if (z10) {
            invalidateSelf();
            if (obj == a0.E) {
                N0(W());
            }
        }
    }

    public void r0(l5.a aVar) {
        this.X = aVar;
    }

    public void s0(boolean z10) {
        if (z10 != this.H) {
            this.H = z10;
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable.Callback
    public void scheduleDrawable(Drawable drawable, Runnable runnable, long j10) {
        Drawable.Callback callback = getCallback();
        if (callback == null) {
            return;
        }
        callback.scheduleDrawable(this, runnable, j10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.D = i10;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        x5.d.c("Use addColorFilter instead.");
    }

    @Override // android.graphics.drawable.Drawable
    public boolean setVisible(boolean z10, boolean z11) {
        boolean isVisible = isVisible();
        boolean visible = super.setVisible(z10, z11);
        if (z10) {
            b bVar = this.f7875q;
            if (bVar == b.PLAY) {
                i0();
                return visible;
            } else if (bVar == b.RESUME) {
                n0();
                return visible;
            }
        } else if (this.f7871e.isRunning()) {
            h0();
            this.f7875q = b.RESUME;
            return visible;
        } else if (isVisible) {
            this.f7875q = b.NONE;
        }
        return visible;
    }

    @Override // android.graphics.drawable.Animatable
    public void start() {
        Drawable.Callback callback = getCallback();
        if ((callback instanceof View) && ((View) callback).isInEditMode()) {
            return;
        }
        i0();
    }

    @Override // android.graphics.drawable.Animatable
    public void stop() {
        C();
    }

    public void t0(boolean z10) {
        if (z10 != this.B) {
            this.B = z10;
            t5.c cVar = this.C;
            if (cVar != null) {
                cVar.Q(z10);
            }
            invalidateSelf();
        }
    }

    public void u() {
        this.f7876r.clear();
        this.f7871e.cancel();
        if (!isVisible()) {
            this.f7875q = b.NONE;
        }
    }

    public boolean u0(l5.i iVar) {
        if (this.f7869d == iVar) {
            return false;
        }
        this.W = true;
        v();
        this.f7869d = iVar;
        t();
        this.f7871e.A(iVar);
        N0(this.f7871e.getAnimatedFraction());
        Iterator it = new ArrayList(this.f7876r).iterator();
        while (it.hasNext()) {
            a aVar = (a) it.next();
            if (aVar != null) {
                aVar.a(iVar);
            }
            it.remove();
        }
        this.f7876r.clear();
        iVar.v(this.E);
        w();
        Drawable.Callback callback = getCallback();
        if (callback instanceof ImageView) {
            ImageView imageView = (ImageView) callback;
            imageView.setImageDrawable(null);
            imageView.setImageDrawable(this);
        }
        return true;
    }

    @Override // android.graphics.drawable.Drawable.Callback
    public void unscheduleDrawable(Drawable drawable, Runnable runnable) {
        Drawable.Callback callback = getCallback();
        if (callback == null) {
            return;
        }
        callback.unscheduleDrawable(this, runnable);
    }

    public void v() {
        if (this.f7871e.isRunning()) {
            this.f7871e.cancel();
            if (!isVisible()) {
                this.f7875q = b.NONE;
            }
        }
        this.f7869d = null;
        this.C = null;
        this.f7877s = null;
        this.f7870d0 = -3.4028235E38f;
        this.f7871e.i();
        invalidateSelf();
    }

    public void v0(String str) {
        this.f7881w = str;
        p5.a M = M();
        if (M != null) {
            M.c(str);
        }
    }

    public void w0(l5.b bVar) {
        this.f7882x = bVar;
        p5.a aVar = this.f7879u;
        if (aVar != null) {
            aVar.d(bVar);
        }
    }

    public void x0(Map map) {
        if (map == this.f7880v) {
            return;
        }
        this.f7880v = map;
        invalidateSelf();
    }

    public void y0(final int i10) {
        if (this.f7869d == null) {
            this.f7876r.add(new a() { // from class: com.airbnb.lottie.m
                @Override // com.airbnb.lottie.n.a
                public final void a(l5.i iVar) {
                    n.this.y0(i10);
                }
            });
        } else {
            this.f7871e.B(i10);
        }
    }

    public void z0(boolean z10) {
        this.f7873o = z10;
    }
}
