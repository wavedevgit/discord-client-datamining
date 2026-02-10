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
import l5.b0;
import l5.e0;
import l5.h0;
import l5.j0;
import l5.w;
import l5.x;
import w5.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n extends Drawable implements Drawable.Callback, Animatable {

    /* renamed from: e0  reason: collision with root package name */
    private static final boolean f7901e0;

    /* renamed from: f0  reason: collision with root package name */
    private static final List f7902f0;

    /* renamed from: g0  reason: collision with root package name */
    private static final Executor f7903g0;
    private boolean A;
    private boolean B;
    private u5.c C;
    private int D;
    private boolean E;
    private boolean F;
    private boolean G;
    private boolean H;
    private h0 I;
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
    private Handler f7904a0;

    /* renamed from: b0  reason: collision with root package name */
    private Runnable f7905b0;

    /* renamed from: c0  reason: collision with root package name */
    private final Runnable f7906c0;

    /* renamed from: d  reason: collision with root package name */
    private l5.i f7907d;

    /* renamed from: d0  reason: collision with root package name */
    private float f7908d0;

    /* renamed from: e  reason: collision with root package name */
    private final y5.g f7909e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f7910i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f7911o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f7912p;

    /* renamed from: q  reason: collision with root package name */
    private b f7913q;

    /* renamed from: r  reason: collision with root package name */
    private final ArrayList f7914r;

    /* renamed from: s  reason: collision with root package name */
    private q5.b f7915s;

    /* renamed from: t  reason: collision with root package name */
    private String f7916t;

    /* renamed from: u  reason: collision with root package name */
    private q5.a f7917u;

    /* renamed from: v  reason: collision with root package name */
    private Map f7918v;

    /* renamed from: w  reason: collision with root package name */
    String f7919w;

    /* renamed from: x  reason: collision with root package name */
    l5.b f7920x;

    /* renamed from: y  reason: collision with root package name */
    j0 f7921y;

    /* renamed from: z  reason: collision with root package name */
    private final o f7922z;

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
        f7901e0 = z10;
        f7902f0 = Arrays.asList("reduced motion", "reduced_motion", "reduced-motion", "reducedmotion");
        f7903g0 = new ThreadPoolExecutor(0, 2, 35L, TimeUnit.MILLISECONDS, new LinkedBlockingQueue(), new y5.e());
    }

    public n() {
        y5.g gVar = new y5.g();
        this.f7909e = gVar;
        this.f7910i = true;
        this.f7911o = false;
        this.f7912p = false;
        this.f7913q = b.NONE;
        this.f7914r = new ArrayList();
        this.f7922z = new o();
        this.A = false;
        this.B = true;
        this.D = SetSpanOperation.SPAN_MAX_PRIORITY;
        this.H = false;
        this.I = h0.AUTOMATIC;
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
        this.f7906c0 = new Runnable() { // from class: l5.v
            @Override // java.lang.Runnable
            public final void run() {
                com.airbnb.lottie.n.k(com.airbnb.lottie.n.this);
            }
        };
        this.f7908d0 = -3.4028235E38f;
        gVar.addUpdateListener(animatorUpdateListener);
    }

    private void C(int i10, int i11) {
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

    private void D() {
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

    private Context K() {
        Drawable.Callback callback = getCallback();
        if (callback == null || !(callback instanceof View)) {
            return null;
        }
        return ((View) callback).getContext();
    }

    private q5.a L() {
        if (getCallback() == null) {
            return null;
        }
        if (this.f7917u == null) {
            q5.a aVar = new q5.a(getCallback(), this.f7920x);
            this.f7917u = aVar;
            String str = this.f7919w;
            if (str != null) {
                aVar.c(str);
            }
        }
        return this.f7917u;
    }

    private q5.b N() {
        q5.b bVar = this.f7915s;
        if (bVar != null && !bVar.b(K())) {
            this.f7915s = null;
        }
        if (this.f7915s == null) {
            this.f7915s = new q5.b(getCallback(), this.f7916t, null, this.f7907d.j());
        }
        return this.f7915s;
    }

    private boolean V0() {
        l5.i iVar = this.f7907d;
        if (iVar == null) {
            return false;
        }
        float f10 = this.f7908d0;
        float k10 = this.f7909e.k();
        this.f7908d0 = k10;
        if (Math.abs(k10 - f10) * iVar.d() < 50.0f) {
            return false;
        }
        return true;
    }

    private boolean c0() {
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
        if (nVar.F()) {
            nVar.invalidateSelf();
            return;
        }
        u5.c cVar = nVar.C;
        if (cVar != null) {
            cVar.M(nVar.f7909e.k());
        }
    }

    public static /* synthetic */ void k(final n nVar) {
        u5.c cVar = nVar.C;
        if (cVar == null) {
            return;
        }
        try {
            nVar.Z.acquire();
            cVar.M(nVar.f7909e.k());
            if (f7901e0 && nVar.W) {
                if (nVar.f7904a0 == null) {
                    nVar.f7904a0 = new Handler(Looper.getMainLooper());
                    nVar.f7905b0 = new Runnable() { // from class: l5.t
                        @Override // java.lang.Runnable
                        public final void run() {
                            com.airbnb.lottie.n.n(com.airbnb.lottie.n.this);
                        }
                    };
                }
                nVar.f7904a0.post(nVar.f7905b0);
            }
        } catch (InterruptedException unused) {
        } catch (Throwable th2) {
            nVar.Z.release();
            throw th2;
        }
        nVar.Z.release();
    }

    private void l0(Canvas canvas, u5.c cVar) {
        if (this.f7907d != null && cVar != null) {
            D();
            canvas.getMatrix(this.U);
            canvas.getClipBounds(this.N);
            x(this.N, this.O);
            this.U.mapRect(this.O);
            y(this.O, this.N);
            if (this.B) {
                this.T.set(0.0f, 0.0f, getIntrinsicWidth(), getIntrinsicHeight());
            } else {
                cVar.f(this.T, null, false);
            }
            this.U.mapRect(this.T);
            Rect bounds = getBounds();
            float width = bounds.width() / getIntrinsicWidth();
            float height = bounds.height() / getIntrinsicHeight();
            p0(this.T, width, height);
            if (!c0()) {
                RectF rectF = this.T;
                Rect rect = this.N;
                rectF.intersect(rect.left, rect.top, rect.right, rect.bottom);
            }
            int ceil = (int) Math.ceil(this.T.width());
            int ceil2 = (int) Math.ceil(this.T.height());
            if (ceil > 0 && ceil2 > 0) {
                C(ceil, ceil2);
                if (this.W) {
                    this.K.set(this.U);
                    this.K.preScale(width, height);
                    Matrix matrix = this.K;
                    RectF rectF2 = this.T;
                    matrix.postTranslate(-rectF2.left, -rectF2.top);
                    this.L.eraseColor(0);
                    cVar.h(this.M, this.K, this.D);
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

    private void t() {
        l5.i iVar = this.f7907d;
        if (iVar == null) {
            return;
        }
        u5.c cVar = new u5.c(this, v.a(iVar), iVar.k(), iVar);
        this.C = cVar;
        if (this.F) {
            cVar.K(true);
        }
        this.C.Q(this.B);
    }

    private void w() {
        l5.i iVar = this.f7907d;
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
        u5.c cVar = this.C;
        l5.i iVar = this.f7907d;
        if (cVar != null && iVar != null) {
            this.K.reset();
            Rect bounds = getBounds();
            if (!bounds.isEmpty()) {
                this.K.preScale(bounds.width() / iVar.b().width(), bounds.height() / iVar.b().height());
                this.K.preTranslate(bounds.left, bounds.top);
            }
            cVar.h(canvas, this.K, this.D);
        }
    }

    public void A(w wVar, boolean z10) {
        boolean a10 = this.f7922z.a(wVar, z10);
        if (this.f7907d != null && a10) {
            t();
        }
    }

    public void A0(l5.c cVar) {
        q5.b bVar = this.f7915s;
        if (bVar != null) {
            bVar.d(cVar);
        }
    }

    public void B() {
        this.f7914r.clear();
        this.f7909e.j();
        if (!isVisible()) {
            this.f7913q = b.NONE;
        }
    }

    public void B0(String str) {
        this.f7916t = str;
    }

    public void C0(boolean z10) {
        this.A = z10;
    }

    public void D0(final int i10) {
        if (this.f7907d == null) {
            this.f7914r.add(new a() { // from class: com.airbnb.lottie.b
                @Override // com.airbnb.lottie.n.a
                public final void a(l5.i iVar) {
                    n.this.D0(i10);
                }
            });
        } else {
            this.f7909e.D(i10 + 0.99f);
        }
    }

    public l5.a E() {
        l5.a aVar = this.X;
        if (aVar != null) {
            return aVar;
        }
        return l5.e.d();
    }

    public void E0(final String str) {
        l5.i iVar = this.f7907d;
        if (iVar == null) {
            this.f7914r.add(new a() { // from class: com.airbnb.lottie.h
                @Override // com.airbnb.lottie.n.a
                public final void a(l5.i iVar2) {
                    n.this.E0(str);
                }
            });
            return;
        }
        r5.h l10 = iVar.l(str);
        if (l10 != null) {
            D0((int) (l10.f47709b + l10.f47710c));
            return;
        }
        throw new IllegalArgumentException("Cannot find marker with name " + str + ".");
    }

    public boolean F() {
        if (E() == l5.a.ENABLED) {
            return true;
        }
        return false;
    }

    public void F0(final float f10) {
        l5.i iVar = this.f7907d;
        if (iVar == null) {
            this.f7914r.add(new a() { // from class: com.airbnb.lottie.e
                @Override // com.airbnb.lottie.n.a
                public final void a(l5.i iVar2) {
                    n.this.F0(f10);
                }
            });
        } else {
            this.f7909e.D(y5.i.i(iVar.p(), this.f7907d.f(), f10));
        }
    }

    public Bitmap G(String str) {
        q5.b N = N();
        if (N != null) {
            return N.a(str);
        }
        return null;
    }

    public void G0(final int i10, final int i11) {
        if (this.f7907d == null) {
            this.f7914r.add(new a() { // from class: com.airbnb.lottie.f
                @Override // com.airbnb.lottie.n.a
                public final void a(l5.i iVar) {
                    n.this.G0(i10, i11);
                }
            });
        } else {
            this.f7909e.E(i10, i11 + 0.99f);
        }
    }

    public boolean H() {
        return this.H;
    }

    public void H0(final String str) {
        l5.i iVar = this.f7907d;
        if (iVar == null) {
            this.f7914r.add(new a() { // from class: com.airbnb.lottie.a
                @Override // com.airbnb.lottie.n.a
                public final void a(l5.i iVar2) {
                    n.this.H0(str);
                }
            });
            return;
        }
        r5.h l10 = iVar.l(str);
        if (l10 != null) {
            int i10 = (int) l10.f47709b;
            G0(i10, ((int) l10.f47710c) + i10);
            return;
        }
        throw new IllegalArgumentException("Cannot find marker with name " + str + ".");
    }

    public boolean I() {
        return this.B;
    }

    public void I0(final int i10) {
        if (this.f7907d == null) {
            this.f7914r.add(new a() { // from class: com.airbnb.lottie.c
                @Override // com.airbnb.lottie.n.a
                public final void a(l5.i iVar) {
                    n.this.I0(i10);
                }
            });
        } else {
            this.f7909e.F(i10);
        }
    }

    public l5.i J() {
        return this.f7907d;
    }

    public void J0(final String str) {
        l5.i iVar = this.f7907d;
        if (iVar == null) {
            this.f7914r.add(new a() { // from class: com.airbnb.lottie.i
                @Override // com.airbnb.lottie.n.a
                public final void a(l5.i iVar2) {
                    n.this.J0(str);
                }
            });
            return;
        }
        r5.h l10 = iVar.l(str);
        if (l10 != null) {
            I0((int) l10.f47709b);
            return;
        }
        throw new IllegalArgumentException("Cannot find marker with name " + str + ".");
    }

    public void K0(final float f10) {
        l5.i iVar = this.f7907d;
        if (iVar == null) {
            this.f7914r.add(new a() { // from class: com.airbnb.lottie.k
                @Override // com.airbnb.lottie.n.a
                public final void a(l5.i iVar2) {
                    n.this.K0(f10);
                }
            });
        } else {
            I0((int) y5.i.i(iVar.p(), this.f7907d.f(), f10));
        }
    }

    public void L0(boolean z10) {
        if (this.F != z10) {
            this.F = z10;
            u5.c cVar = this.C;
            if (cVar != null) {
                cVar.K(z10);
            }
        }
    }

    public int M() {
        return (int) this.f7909e.l();
    }

    public void M0(boolean z10) {
        this.E = z10;
        l5.i iVar = this.f7907d;
        if (iVar != null) {
            iVar.v(z10);
        }
    }

    public void N0(final float f10) {
        if (this.f7907d == null) {
            this.f7914r.add(new a() { // from class: com.airbnb.lottie.l
                @Override // com.airbnb.lottie.n.a
                public final void a(l5.i iVar) {
                    n.this.N0(f10);
                }
            });
            return;
        }
        if (l5.e.h()) {
            l5.e.b("Drawable#setProgress");
        }
        this.f7909e.B(this.f7907d.h(f10));
        if (l5.e.h()) {
            l5.e.c("Drawable#setProgress");
        }
    }

    public String O() {
        return this.f7916t;
    }

    public void O0(h0 h0Var) {
        this.I = h0Var;
        w();
    }

    public x P(String str) {
        l5.i iVar = this.f7907d;
        if (iVar == null) {
            return null;
        }
        return (x) iVar.j().get(str);
    }

    public void P0(int i10) {
        this.f7909e.setRepeatCount(i10);
    }

    public boolean Q() {
        return this.A;
    }

    public void Q0(int i10) {
        this.f7909e.setRepeatMode(i10);
    }

    public r5.h R() {
        r5.h hVar = null;
        for (String str : f7902f0) {
            hVar = this.f7907d.l(str);
            if (hVar != null) {
                break;
            }
        }
        return hVar;
    }

    public void R0(boolean z10) {
        this.f7912p = z10;
    }

    public float S() {
        return this.f7909e.n();
    }

    public void S0(float f10) {
        this.f7909e.G(f10);
    }

    public float T() {
        return this.f7909e.o();
    }

    public void T0(j0 j0Var) {
        this.f7921y = j0Var;
    }

    public e0 U() {
        l5.i iVar = this.f7907d;
        if (iVar != null) {
            return iVar.n();
        }
        return null;
    }

    public void U0(boolean z10) {
        this.f7909e.H(z10);
    }

    public float V() {
        return this.f7909e.k();
    }

    public h0 W() {
        if (this.J) {
            return h0.SOFTWARE;
        }
        return h0.HARDWARE;
    }

    public boolean W0() {
        if (this.f7918v == null && this.f7921y == null && this.f7907d.c().l() > 0) {
            return true;
        }
        return false;
    }

    public int X() {
        return this.f7909e.getRepeatCount();
    }

    public int Y() {
        return this.f7909e.getRepeatMode();
    }

    public float Z() {
        return this.f7909e.q();
    }

    public j0 a0() {
        return this.f7921y;
    }

    public Typeface b0(r5.c cVar) {
        Map map = this.f7918v;
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
        q5.a L = L();
        if (L != null) {
            return L.b(cVar);
        }
        return null;
    }

    public boolean d0() {
        y5.g gVar = this.f7909e;
        if (gVar == null) {
            return false;
        }
        return gVar.isRunning();
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        u5.c cVar = this.C;
        if (cVar != null) {
            boolean F = F();
            if (F) {
                try {
                    this.Z.acquire();
                } catch (InterruptedException unused) {
                    if (l5.e.h()) {
                        l5.e.c("Drawable#draw");
                    }
                    if (F) {
                        this.Z.release();
                        if (cVar.P() == this.f7909e.k()) {
                            return;
                        }
                    } else {
                        return;
                    }
                } catch (Throwable th2) {
                    if (l5.e.h()) {
                        l5.e.c("Drawable#draw");
                    }
                    if (F) {
                        this.Z.release();
                        if (cVar.P() != this.f7909e.k()) {
                            f7903g0.execute(this.f7906c0);
                        }
                    }
                    throw th2;
                }
            }
            if (l5.e.h()) {
                l5.e.b("Drawable#draw");
            }
            if (F && V0()) {
                N0(this.f7909e.k());
            }
            if (this.f7912p) {
                try {
                    if (this.J) {
                        l0(canvas, cVar);
                    } else {
                        z(canvas);
                    }
                } catch (Throwable th3) {
                    y5.d.b("Lottie crashed in draw!", th3);
                }
            } else if (this.J) {
                l0(canvas, cVar);
            } else {
                z(canvas);
            }
            this.W = false;
            if (l5.e.h()) {
                l5.e.c("Drawable#draw");
            }
            if (F) {
                this.Z.release();
                if (cVar.P() == this.f7909e.k()) {
                    return;
                }
                f7903g0.execute(this.f7906c0);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean e0() {
        if (isVisible()) {
            return this.f7909e.isRunning();
        }
        b bVar = this.f7913q;
        if (bVar != b.PLAY && bVar != b.RESUME) {
            return false;
        }
        return true;
    }

    public boolean f0() {
        return this.G;
    }

    public boolean g0(w wVar) {
        return this.f7922z.b(wVar);
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.D;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        l5.i iVar = this.f7907d;
        if (iVar == null) {
            return -1;
        }
        return iVar.b().height();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        l5.i iVar = this.f7907d;
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
        this.f7914r.clear();
        this.f7909e.t();
        if (!isVisible()) {
            this.f7913q = b.NONE;
        }
    }

    public void i0() {
        float S;
        if (this.C == null) {
            this.f7914r.add(new a() { // from class: com.airbnb.lottie.j
                @Override // com.airbnb.lottie.n.a
                public final void a(l5.i iVar) {
                    n.this.i0();
                }
            });
            return;
        }
        w();
        if (s(K()) || X() == 0) {
            if (isVisible()) {
                this.f7909e.u();
                this.f7913q = b.NONE;
            } else {
                this.f7913q = b.PLAY;
            }
        }
        if (!s(K())) {
            r5.h R = R();
            if (R != null) {
                y0((int) R.f47709b);
            } else {
                if (Z() < 0.0f) {
                    S = T();
                } else {
                    S = S();
                }
                y0((int) S);
            }
            this.f7909e.j();
            if (!isVisible()) {
                this.f7913q = b.NONE;
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
            if ((!f7901e0 || Looper.getMainLooper() == Looper.myLooper()) && (callback = getCallback()) != null) {
                callback.invalidateDrawable(this);
            }
        }
    }

    @Override // android.graphics.drawable.Animatable
    public boolean isRunning() {
        return d0();
    }

    public void j0() {
        this.f7909e.removeAllListeners();
    }

    public void k0() {
        this.f7909e.removeAllUpdateListeners();
        this.f7909e.addUpdateListener(this.Y);
    }

    public List m0(r5.e eVar) {
        if (this.C == null) {
            y5.d.c("Cannot resolve KeyPath. Composition is not set yet.");
            return Collections.EMPTY_LIST;
        }
        ArrayList arrayList = new ArrayList();
        this.C.e(eVar, 0, arrayList, new r5.e(new String[0]));
        return arrayList;
    }

    public void n0() {
        float S;
        if (this.C == null) {
            this.f7914r.add(new a() { // from class: com.airbnb.lottie.g
                @Override // com.airbnb.lottie.n.a
                public final void a(l5.i iVar) {
                    n.this.n0();
                }
            });
            return;
        }
        w();
        if (s(K()) || X() == 0) {
            if (isVisible()) {
                this.f7909e.y();
                this.f7913q = b.NONE;
            } else {
                this.f7913q = b.RESUME;
            }
        }
        if (!s(K())) {
            if (Z() < 0.0f) {
                S = T();
            } else {
                S = S();
            }
            y0((int) S);
            this.f7909e.j();
            if (!isVisible()) {
                this.f7913q = b.NONE;
            }
        }
    }

    public void o0() {
        this.f7909e.z();
    }

    public void q(Animator.AnimatorListener animatorListener) {
        this.f7909e.addListener(animatorListener);
    }

    public void q0(boolean z10) {
        this.G = z10;
    }

    public void r(final r5.e eVar, final Object obj, final z5.c cVar) {
        u5.c cVar2 = this.C;
        if (cVar2 == null) {
            this.f7914r.add(new a() { // from class: com.airbnb.lottie.d
                @Override // com.airbnb.lottie.n.a
                public final void a(l5.i iVar) {
                    n.this.r(eVar, obj, cVar);
                }
            });
            return;
        }
        boolean z10 = true;
        if (eVar == r5.e.f47703c) {
            cVar2.d(obj, cVar);
        } else if (eVar.d() != null) {
            eVar.d().d(obj, cVar);
        } else {
            List m02 = m0(eVar);
            for (int i10 = 0; i10 < m02.size(); i10++) {
                ((r5.e) m02.get(i10)).d().d(obj, cVar);
            }
            z10 = true ^ m02.isEmpty();
        }
        if (z10) {
            invalidateSelf();
            if (obj == b0.E) {
                N0(V());
            }
        }
    }

    public void r0(l5.a aVar) {
        this.X = aVar;
    }

    public boolean s(Context context) {
        if (this.f7911o) {
            return true;
        }
        if (this.f7910i && l5.e.f().a(context) == p5.a.STANDARD_MOTION) {
            return true;
        }
        return false;
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
        y5.d.c("Use addColorFilter instead.");
    }

    @Override // android.graphics.drawable.Drawable
    public boolean setVisible(boolean z10, boolean z11) {
        boolean isVisible = isVisible();
        boolean visible = super.setVisible(z10, z11);
        if (z10) {
            b bVar = this.f7913q;
            if (bVar == b.PLAY) {
                i0();
                return visible;
            } else if (bVar == b.RESUME) {
                n0();
                return visible;
            }
        } else if (this.f7909e.isRunning()) {
            h0();
            this.f7913q = b.RESUME;
            return visible;
        } else if (isVisible) {
            this.f7913q = b.NONE;
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
        B();
    }

    public void t0(boolean z10) {
        if (z10 != this.B) {
            this.B = z10;
            u5.c cVar = this.C;
            if (cVar != null) {
                cVar.Q(z10);
            }
            invalidateSelf();
        }
    }

    public void u() {
        this.f7914r.clear();
        this.f7909e.cancel();
        if (!isVisible()) {
            this.f7913q = b.NONE;
        }
    }

    public boolean u0(l5.i iVar) {
        if (this.f7907d == iVar) {
            return false;
        }
        this.W = true;
        v();
        this.f7907d = iVar;
        t();
        this.f7909e.A(iVar);
        N0(this.f7909e.getAnimatedFraction());
        Iterator it = new ArrayList(this.f7914r).iterator();
        while (it.hasNext()) {
            a aVar = (a) it.next();
            if (aVar != null) {
                aVar.a(iVar);
            }
            it.remove();
        }
        this.f7914r.clear();
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
        if (this.f7909e.isRunning()) {
            this.f7909e.cancel();
            if (!isVisible()) {
                this.f7913q = b.NONE;
            }
        }
        this.f7907d = null;
        this.C = null;
        this.f7915s = null;
        this.f7908d0 = -3.4028235E38f;
        this.f7909e.i();
        invalidateSelf();
    }

    public void v0(String str) {
        this.f7919w = str;
        q5.a L = L();
        if (L != null) {
            L.c(str);
        }
    }

    public void w0(l5.b bVar) {
        this.f7920x = bVar;
        q5.a aVar = this.f7917u;
        if (aVar != null) {
            aVar.d(bVar);
        }
    }

    public void x0(Map map) {
        if (map == this.f7918v) {
            return;
        }
        this.f7918v = map;
        invalidateSelf();
    }

    public void y0(final int i10) {
        if (this.f7907d == null) {
            this.f7914r.add(new a() { // from class: com.airbnb.lottie.m
                @Override // com.airbnb.lottie.n.a
                public final void a(l5.i iVar) {
                    n.this.y0(i10);
                }
            });
        } else {
            this.f7909e.B(i10);
        }
    }

    public void z0(boolean z10) {
        this.f7911o = z10;
    }
}
