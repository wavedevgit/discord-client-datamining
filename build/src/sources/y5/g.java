package y5;

import android.view.Choreographer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class g extends a implements Choreographer.FrameCallback {

    /* renamed from: w  reason: collision with root package name */
    private l5.i f55525w;

    /* renamed from: o  reason: collision with root package name */
    private float f55517o = 1.0f;

    /* renamed from: p  reason: collision with root package name */
    private boolean f55518p = false;

    /* renamed from: q  reason: collision with root package name */
    private long f55519q = 0;

    /* renamed from: r  reason: collision with root package name */
    private float f55520r = 0.0f;

    /* renamed from: s  reason: collision with root package name */
    private float f55521s = 0.0f;

    /* renamed from: t  reason: collision with root package name */
    private int f55522t = 0;

    /* renamed from: u  reason: collision with root package name */
    private float f55523u = -2.14748365E9f;

    /* renamed from: v  reason: collision with root package name */
    private float f55524v = 2.14748365E9f;

    /* renamed from: x  reason: collision with root package name */
    protected boolean f55526x = false;

    /* renamed from: y  reason: collision with root package name */
    private boolean f55527y = false;

    private void I() {
        if (this.f55525w != null) {
            float f10 = this.f55521s;
            if (f10 >= this.f55523u && f10 <= this.f55524v) {
                return;
            }
            throw new IllegalStateException(String.format("Frame must be [%f,%f]. It is %f", Float.valueOf(this.f55523u), Float.valueOf(this.f55524v), Float.valueOf(this.f55521s)));
        }
    }

    private float m() {
        l5.i iVar = this.f55525w;
        if (iVar == null) {
            return Float.MAX_VALUE;
        }
        return (1.0E9f / iVar.i()) / Math.abs(this.f55517o);
    }

    private boolean r() {
        if (q() < 0.0f) {
            return true;
        }
        return false;
    }

    public void A(l5.i iVar) {
        boolean z10;
        if (this.f55525w == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f55525w = iVar;
        if (z10) {
            E(Math.max(this.f55523u, iVar.p()), Math.min(this.f55524v, iVar.f()));
        } else {
            E((int) iVar.p(), (int) iVar.f());
        }
        float f10 = this.f55521s;
        this.f55521s = 0.0f;
        this.f55520r = 0.0f;
        B((int) f10);
        h();
    }

    public void B(float f10) {
        if (this.f55520r == f10) {
            return;
        }
        float b10 = i.b(f10, o(), n());
        this.f55520r = b10;
        if (this.f55527y) {
            b10 = (float) Math.floor(b10);
        }
        this.f55521s = b10;
        this.f55519q = 0L;
        h();
    }

    public void D(float f10) {
        E(this.f55523u, f10);
    }

    public void E(float f10, float f11) {
        float p10;
        float f12;
        if (f10 <= f11) {
            l5.i iVar = this.f55525w;
            if (iVar == null) {
                p10 = -3.4028235E38f;
            } else {
                p10 = iVar.p();
            }
            l5.i iVar2 = this.f55525w;
            if (iVar2 == null) {
                f12 = Float.MAX_VALUE;
            } else {
                f12 = iVar2.f();
            }
            float b10 = i.b(f10, p10, f12);
            float b11 = i.b(f11, p10, f12);
            if (b10 == this.f55523u && b11 == this.f55524v) {
                return;
            }
            this.f55523u = b10;
            this.f55524v = b11;
            B((int) i.b(this.f55521s, b10, b11));
            return;
        }
        throw new IllegalArgumentException(String.format("minFrame (%s) must be <= maxFrame (%s)", Float.valueOf(f10), Float.valueOf(f11)));
    }

    public void F(int i10) {
        E(i10, (int) this.f55524v);
    }

    public void G(float f10) {
        this.f55517o = f10;
    }

    public void H(boolean z10) {
        this.f55527y = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // y5.a
    public void a() {
        super.a();
        b(r());
    }

    @Override // android.animation.ValueAnimator, android.animation.Animator
    public void cancel() {
        a();
        w();
    }

    @Override // android.view.Choreographer.FrameCallback
    public void doFrame(long j10) {
        float o10;
        float n10;
        v();
        if (this.f55525w != null && isRunning()) {
            if (l5.e.h()) {
                l5.e.b("LottieValueAnimator#doFrame");
            }
            long j11 = this.f55519q;
            long j12 = 0;
            if (j11 != 0) {
                j12 = j10 - j11;
            }
            float m10 = ((float) j12) / m();
            float f10 = this.f55520r;
            if (r()) {
                m10 = -m10;
            }
            float f11 = f10 + m10;
            boolean d10 = i.d(f11, o(), n());
            float f12 = this.f55520r;
            float b10 = i.b(f11, o(), n());
            this.f55520r = b10;
            if (this.f55527y) {
                b10 = (float) Math.floor(b10);
            }
            this.f55521s = b10;
            this.f55519q = j10;
            if (!this.f55527y || this.f55520r != f12) {
                h();
            }
            if (!d10) {
                if (getRepeatCount() != -1 && this.f55522t >= getRepeatCount()) {
                    if (this.f55517o < 0.0f) {
                        n10 = o();
                    } else {
                        n10 = n();
                    }
                    this.f55520r = n10;
                    this.f55521s = n10;
                    w();
                    b(r());
                } else {
                    d();
                    this.f55522t++;
                    if (getRepeatMode() == 2) {
                        this.f55518p = !this.f55518p;
                        z();
                    } else {
                        if (r()) {
                            o10 = n();
                        } else {
                            o10 = o();
                        }
                        this.f55520r = o10;
                        this.f55521s = o10;
                    }
                    this.f55519q = j10;
                }
            }
            I();
            if (l5.e.h()) {
                l5.e.c("LottieValueAnimator#doFrame");
            }
        }
    }

    @Override // android.animation.ValueAnimator
    public float getAnimatedFraction() {
        float o10;
        float n10;
        float o11;
        if (this.f55525w == null) {
            return 0.0f;
        }
        if (r()) {
            o10 = n() - this.f55521s;
            n10 = n();
            o11 = o();
        } else {
            o10 = this.f55521s - o();
            n10 = n();
            o11 = o();
        }
        return o10 / (n10 - o11);
    }

    @Override // android.animation.ValueAnimator
    public Object getAnimatedValue() {
        return Float.valueOf(k());
    }

    @Override // android.animation.ValueAnimator, android.animation.Animator
    public long getDuration() {
        l5.i iVar = this.f55525w;
        if (iVar == null) {
            return 0L;
        }
        return iVar.d();
    }

    public void i() {
        this.f55525w = null;
        this.f55523u = -2.14748365E9f;
        this.f55524v = 2.14748365E9f;
    }

    @Override // android.animation.ValueAnimator, android.animation.Animator
    public boolean isRunning() {
        return this.f55526x;
    }

    public void j() {
        w();
        b(r());
    }

    public float k() {
        l5.i iVar = this.f55525w;
        if (iVar == null) {
            return 0.0f;
        }
        return (this.f55521s - iVar.p()) / (this.f55525w.f() - this.f55525w.p());
    }

    public float l() {
        return this.f55521s;
    }

    public float n() {
        l5.i iVar = this.f55525w;
        if (iVar == null) {
            return 0.0f;
        }
        float f10 = this.f55524v;
        if (f10 == 2.14748365E9f) {
            return iVar.f();
        }
        return f10;
    }

    public float o() {
        l5.i iVar = this.f55525w;
        if (iVar == null) {
            return 0.0f;
        }
        float f10 = this.f55523u;
        if (f10 == -2.14748365E9f) {
            return iVar.p();
        }
        return f10;
    }

    public float q() {
        return this.f55517o;
    }

    @Override // android.animation.ValueAnimator
    public void setRepeatMode(int i10) {
        super.setRepeatMode(i10);
        if (i10 != 2 && this.f55518p) {
            this.f55518p = false;
            z();
        }
    }

    public void t() {
        w();
        c();
    }

    public void u() {
        float o10;
        this.f55526x = true;
        f(r());
        if (r()) {
            o10 = n();
        } else {
            o10 = o();
        }
        B((int) o10);
        this.f55519q = 0L;
        this.f55522t = 0;
        v();
    }

    protected void v() {
        if (isRunning()) {
            x(false);
            Choreographer.getInstance().postFrameCallback(this);
        }
    }

    protected void w() {
        x(true);
    }

    protected void x(boolean z10) {
        Choreographer.getInstance().removeFrameCallback(this);
        if (z10) {
            this.f55526x = false;
        }
    }

    public void y() {
        this.f55526x = true;
        v();
        this.f55519q = 0L;
        if (r() && l() == o()) {
            B(n());
        } else if (!r() && l() == n()) {
            B(o());
        }
        e();
    }

    public void z() {
        G(-q());
    }
}
