package androidx.core.widget;

import android.content.res.Resources;
import android.os.SystemClock;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewConfiguration;
import android.view.animation.AccelerateInterpolator;
import android.view.animation.AnimationUtils;
import android.view.animation.Interpolator;
import androidx.core.view.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a implements View.OnTouchListener {
    private static final int C = ViewConfiguration.getTapTimeout();
    private boolean A;
    private boolean B;

    /* renamed from: i  reason: collision with root package name */
    final View f3469i;

    /* renamed from: o  reason: collision with root package name */
    private Runnable f3470o;

    /* renamed from: r  reason: collision with root package name */
    private int f3473r;

    /* renamed from: s  reason: collision with root package name */
    private int f3474s;

    /* renamed from: w  reason: collision with root package name */
    private boolean f3478w;

    /* renamed from: x  reason: collision with root package name */
    boolean f3479x;

    /* renamed from: y  reason: collision with root package name */
    boolean f3480y;

    /* renamed from: z  reason: collision with root package name */
    boolean f3481z;

    /* renamed from: d  reason: collision with root package name */
    final C0042a f3467d = new C0042a();

    /* renamed from: e  reason: collision with root package name */
    private final Interpolator f3468e = new AccelerateInterpolator();

    /* renamed from: p  reason: collision with root package name */
    private float[] f3471p = {0.0f, 0.0f};

    /* renamed from: q  reason: collision with root package name */
    private float[] f3472q = {Float.MAX_VALUE, Float.MAX_VALUE};

    /* renamed from: t  reason: collision with root package name */
    private float[] f3475t = {0.0f, 0.0f};

    /* renamed from: u  reason: collision with root package name */
    private float[] f3476u = {0.0f, 0.0f};

    /* renamed from: v  reason: collision with root package name */
    private float[] f3477v = {Float.MAX_VALUE, Float.MAX_VALUE};

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: androidx.core.widget.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class C0042a {

        /* renamed from: a  reason: collision with root package name */
        private int f3482a;

        /* renamed from: b  reason: collision with root package name */
        private int f3483b;

        /* renamed from: c  reason: collision with root package name */
        private float f3484c;

        /* renamed from: d  reason: collision with root package name */
        private float f3485d;

        /* renamed from: j  reason: collision with root package name */
        private float f3491j;

        /* renamed from: k  reason: collision with root package name */
        private int f3492k;

        /* renamed from: e  reason: collision with root package name */
        private long f3486e = Long.MIN_VALUE;

        /* renamed from: i  reason: collision with root package name */
        private long f3490i = -1;

        /* renamed from: f  reason: collision with root package name */
        private long f3487f = 0;

        /* renamed from: g  reason: collision with root package name */
        private int f3488g = 0;

        /* renamed from: h  reason: collision with root package name */
        private int f3489h = 0;

        C0042a() {
        }

        private float e(long j10) {
            long j11 = this.f3486e;
            if (j10 < j11) {
                return 0.0f;
            }
            long j12 = this.f3490i;
            if (j12 >= 0 && j10 >= j12) {
                float f10 = this.f3491j;
                return (1.0f - f10) + (f10 * a.e(((float) (j10 - j12)) / this.f3492k, 0.0f, 1.0f));
            }
            return a.e(((float) (j10 - j11)) / this.f3482a, 0.0f, 1.0f) * 0.5f;
        }

        private float g(float f10) {
            return ((-4.0f) * f10 * f10) + (f10 * 4.0f);
        }

        public void a() {
            if (this.f3487f != 0) {
                long currentAnimationTimeMillis = AnimationUtils.currentAnimationTimeMillis();
                float g10 = g(e(currentAnimationTimeMillis));
                this.f3487f = currentAnimationTimeMillis;
                float f10 = ((float) (currentAnimationTimeMillis - this.f3487f)) * g10;
                this.f3488g = (int) (this.f3484c * f10);
                this.f3489h = (int) (f10 * this.f3485d);
                return;
            }
            throw new RuntimeException("Cannot compute scroll delta before calling start()");
        }

        public int b() {
            return this.f3488g;
        }

        public int c() {
            return this.f3489h;
        }

        public int d() {
            float f10 = this.f3484c;
            return (int) (f10 / Math.abs(f10));
        }

        public int f() {
            float f10 = this.f3485d;
            return (int) (f10 / Math.abs(f10));
        }

        public boolean h() {
            if (this.f3490i > 0 && AnimationUtils.currentAnimationTimeMillis() > this.f3490i + this.f3492k) {
                return true;
            }
            return false;
        }

        public void i() {
            long currentAnimationTimeMillis = AnimationUtils.currentAnimationTimeMillis();
            this.f3492k = a.f((int) (currentAnimationTimeMillis - this.f3486e), 0, this.f3483b);
            this.f3491j = e(currentAnimationTimeMillis);
            this.f3490i = currentAnimationTimeMillis;
        }

        public void j(int i10) {
            this.f3483b = i10;
        }

        public void k(int i10) {
            this.f3482a = i10;
        }

        public void l(float f10, float f11) {
            this.f3484c = f10;
            this.f3485d = f11;
        }

        public void m() {
            long currentAnimationTimeMillis = AnimationUtils.currentAnimationTimeMillis();
            this.f3486e = currentAnimationTimeMillis;
            this.f3490i = -1L;
            this.f3487f = currentAnimationTimeMillis;
            this.f3491j = 0.5f;
            this.f3488g = 0;
            this.f3489h = 0;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements Runnable {
        b() {
        }

        @Override // java.lang.Runnable
        public void run() {
            a aVar = a.this;
            if (!aVar.f3481z) {
                return;
            }
            if (aVar.f3479x) {
                aVar.f3479x = false;
                aVar.f3467d.m();
            }
            C0042a c0042a = a.this.f3467d;
            if (!c0042a.h() && a.this.u()) {
                a aVar2 = a.this;
                if (aVar2.f3480y) {
                    aVar2.f3480y = false;
                    aVar2.c();
                }
                c0042a.a();
                a.this.j(c0042a.b(), c0042a.c());
                h0.f0(a.this.f3469i, this);
                return;
            }
            a.this.f3481z = false;
        }
    }

    public a(View view) {
        this.f3469i = view;
        float f10 = Resources.getSystem().getDisplayMetrics().density;
        float f11 = (int) ((1575.0f * f10) + 0.5f);
        o(f11, f11);
        float f12 = (int) ((f10 * 315.0f) + 0.5f);
        p(f12, f12);
        l(1);
        n(Float.MAX_VALUE, Float.MAX_VALUE);
        s(0.2f, 0.2f);
        t(1.0f, 1.0f);
        k(C);
        r(500);
        q(500);
    }

    private float d(int i10, float f10, float f11, float f12) {
        float h10 = h(this.f3471p[i10], f11, this.f3472q[i10], f10);
        int i11 = (h10 > 0.0f ? 1 : (h10 == 0.0f ? 0 : -1));
        if (i11 == 0) {
            return 0.0f;
        }
        float f13 = this.f3475t[i10];
        float f14 = this.f3476u[i10];
        float f15 = this.f3477v[i10];
        float f16 = f13 * f12;
        if (i11 > 0) {
            return e(h10 * f16, f14, f15);
        }
        return -e((-h10) * f16, f14, f15);
    }

    static float e(float f10, float f11, float f12) {
        return f10 > f12 ? f12 : f10 < f11 ? f11 : f10;
    }

    static int f(int i10, int i11, int i12) {
        return i10 > i12 ? i12 : i10 < i11 ? i11 : i10;
    }

    private float g(float f10, float f11) {
        if (f11 == 0.0f) {
            return 0.0f;
        }
        int i10 = this.f3473r;
        if (i10 != 0 && i10 != 1) {
            if (i10 == 2 && f10 < 0.0f) {
                return f10 / (-f11);
            }
        } else if (f10 < f11) {
            if (f10 >= 0.0f) {
                return 1.0f - (f10 / f11);
            }
            if (this.f3481z && i10 == 1) {
                return 1.0f;
            }
        }
        return 0.0f;
    }

    private float h(float f10, float f11, float f12, float f13) {
        float interpolation;
        float e10 = e(f10 * f11, 0.0f, f12);
        float g10 = g(f11 - f13, e10) - g(f13, e10);
        if (g10 < 0.0f) {
            interpolation = -this.f3468e.getInterpolation(-g10);
        } else if (g10 <= 0.0f) {
            return 0.0f;
        } else {
            interpolation = this.f3468e.getInterpolation(g10);
        }
        return e(interpolation, -1.0f, 1.0f);
    }

    private void i() {
        if (this.f3479x) {
            this.f3481z = false;
        } else {
            this.f3467d.i();
        }
    }

    private void v() {
        int i10;
        if (this.f3470o == null) {
            this.f3470o = new b();
        }
        this.f3481z = true;
        this.f3479x = true;
        if (!this.f3478w && (i10 = this.f3474s) > 0) {
            h0.g0(this.f3469i, this.f3470o, i10);
        } else {
            this.f3470o.run();
        }
        this.f3478w = true;
    }

    public abstract boolean a(int i10);

    public abstract boolean b(int i10);

    void c() {
        long uptimeMillis = SystemClock.uptimeMillis();
        MotionEvent obtain = MotionEvent.obtain(uptimeMillis, uptimeMillis, 3, 0.0f, 0.0f, 0);
        this.f3469i.onTouchEvent(obtain);
        obtain.recycle();
    }

    public abstract void j(int i10, int i11);

    public a k(int i10) {
        this.f3474s = i10;
        return this;
    }

    public a l(int i10) {
        this.f3473r = i10;
        return this;
    }

    public a m(boolean z10) {
        if (this.A && !z10) {
            i();
        }
        this.A = z10;
        return this;
    }

    public a n(float f10, float f11) {
        float[] fArr = this.f3472q;
        fArr[0] = f10;
        fArr[1] = f11;
        return this;
    }

    public a o(float f10, float f11) {
        float[] fArr = this.f3477v;
        fArr[0] = f10 / 1000.0f;
        fArr[1] = f11 / 1000.0f;
        return this;
    }

    /* JADX WARN: Code restructure failed: missing block: B:11:0x0013, code lost:
        if (r0 != 3) goto L12;
     */
    @Override // android.view.View.OnTouchListener
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public boolean onTouch(android.view.View r6, android.view.MotionEvent r7) {
        /*
            r5 = this;
            boolean r0 = r5.A
            r1 = 0
            if (r0 != 0) goto L6
            return r1
        L6:
            int r0 = r7.getActionMasked()
            r2 = 1
            if (r0 == 0) goto L1a
            if (r0 == r2) goto L16
            r3 = 2
            if (r0 == r3) goto L1e
            r6 = 3
            if (r0 == r6) goto L16
            goto L58
        L16:
            r5.i()
            goto L58
        L1a:
            r5.f3480y = r2
            r5.f3478w = r1
        L1e:
            float r0 = r7.getX()
            int r3 = r6.getWidth()
            float r3 = (float) r3
            android.view.View r4 = r5.f3469i
            int r4 = r4.getWidth()
            float r4 = (float) r4
            float r0 = r5.d(r1, r0, r3, r4)
            float r7 = r7.getY()
            int r6 = r6.getHeight()
            float r6 = (float) r6
            android.view.View r3 = r5.f3469i
            int r3 = r3.getHeight()
            float r3 = (float) r3
            float r6 = r5.d(r2, r7, r6, r3)
            androidx.core.widget.a$a r7 = r5.f3467d
            r7.l(r0, r6)
            boolean r6 = r5.f3481z
            if (r6 != 0) goto L58
            boolean r6 = r5.u()
            if (r6 == 0) goto L58
            r5.v()
        L58:
            boolean r6 = r5.B
            if (r6 == 0) goto L61
            boolean r6 = r5.f3481z
            if (r6 == 0) goto L61
            return r2
        L61:
            return r1
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.core.widget.a.onTouch(android.view.View, android.view.MotionEvent):boolean");
    }

    public a p(float f10, float f11) {
        float[] fArr = this.f3476u;
        fArr[0] = f10 / 1000.0f;
        fArr[1] = f11 / 1000.0f;
        return this;
    }

    public a q(int i10) {
        this.f3467d.j(i10);
        return this;
    }

    public a r(int i10) {
        this.f3467d.k(i10);
        return this;
    }

    public a s(float f10, float f11) {
        float[] fArr = this.f3471p;
        fArr[0] = f10;
        fArr[1] = f11;
        return this;
    }

    public a t(float f10, float f11) {
        float[] fArr = this.f3475t;
        fArr[0] = f10 / 1000.0f;
        fArr[1] = f11 / 1000.0f;
        return this;
    }

    boolean u() {
        C0042a c0042a = this.f3467d;
        int f10 = c0042a.f();
        int d10 = c0042a.d();
        if (f10 == 0 || !b(f10)) {
            if (d10 != 0 && a(d10)) {
                return true;
            }
            return false;
        }
        return true;
    }
}
