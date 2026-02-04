package x5;

import android.view.Choreographer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class g extends a implements Choreographer.FrameCallback {

    /* renamed from: w  reason: collision with root package name */
    private l5.i f53179w;

    /* renamed from: o  reason: collision with root package name */
    private float f53171o = 1.0f;

    /* renamed from: p  reason: collision with root package name */
    private boolean f53172p = false;

    /* renamed from: q  reason: collision with root package name */
    private long f53173q = 0;

    /* renamed from: r  reason: collision with root package name */
    private float f53174r = 0.0f;

    /* renamed from: s  reason: collision with root package name */
    private float f53175s = 0.0f;

    /* renamed from: t  reason: collision with root package name */
    private int f53176t = 0;

    /* renamed from: u  reason: collision with root package name */
    private float f53177u = -2.14748365E9f;

    /* renamed from: v  reason: collision with root package name */
    private float f53178v = 2.14748365E9f;

    /* renamed from: x  reason: collision with root package name */
    protected boolean f53180x = false;

    /* renamed from: y  reason: collision with root package name */
    private boolean f53181y = false;

    private void H() {
        if (this.f53179w != null) {
            float f10 = this.f53175s;
            if (f10 >= this.f53177u && f10 <= this.f53178v) {
                return;
            }
            throw new IllegalStateException(String.format("Frame must be [%f,%f]. It is %f", Float.valueOf(this.f53177u), Float.valueOf(this.f53178v), Float.valueOf(this.f53175s)));
        }
    }

    private float m() {
        l5.i iVar = this.f53179w;
        if (iVar == null) {
            return Float.MAX_VALUE;
        }
        return (1.0E9f / iVar.i()) / Math.abs(this.f53171o);
    }

    private boolean r() {
        if (q() < 0.0f) {
            return true;
        }
        return false;
    }

    public void A(l5.i iVar) {
        boolean z10;
        if (this.f53179w == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f53179w = iVar;
        if (z10) {
            D(Math.max(this.f53177u, iVar.p()), Math.min(this.f53178v, iVar.f()));
        } else {
            D((int) iVar.p(), (int) iVar.f());
        }
        float f10 = this.f53175s;
        this.f53175s = 0.0f;
        this.f53174r = 0.0f;
        B((int) f10);
        g();
    }

    public void B(float f10) {
        if (this.f53174r == f10) {
            return;
        }
        float b10 = i.b(f10, p(), o());
        this.f53174r = b10;
        if (this.f53181y) {
            b10 = (float) Math.floor(b10);
        }
        this.f53175s = b10;
        this.f53173q = 0L;
        g();
    }

    public void C(float f10) {
        D(this.f53177u, f10);
    }

    public void D(float f10, float f11) {
        float p10;
        float f12;
        if (f10 <= f11) {
            l5.i iVar = this.f53179w;
            if (iVar == null) {
                p10 = -3.4028235E38f;
            } else {
                p10 = iVar.p();
            }
            l5.i iVar2 = this.f53179w;
            if (iVar2 == null) {
                f12 = Float.MAX_VALUE;
            } else {
                f12 = iVar2.f();
            }
            float b10 = i.b(f10, p10, f12);
            float b11 = i.b(f11, p10, f12);
            if (b10 == this.f53177u && b11 == this.f53178v) {
                return;
            }
            this.f53177u = b10;
            this.f53178v = b11;
            B((int) i.b(this.f53175s, b10, b11));
            return;
        }
        throw new IllegalArgumentException(String.format("minFrame (%s) must be <= maxFrame (%s)", Float.valueOf(f10), Float.valueOf(f11)));
    }

    public void E(int i10) {
        D(i10, (int) this.f53178v);
    }

    public void F(float f10) {
        this.f53171o = f10;
    }

    public void G(boolean z10) {
        this.f53181y = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // x5.a
    public void a() {
        super.a();
        b(r());
    }

    @Override // android.animation.ValueAnimator, android.animation.Animator
    public void cancel() {
        a();
        v();
    }

    @Override // android.view.Choreographer.FrameCallback
    public void doFrame(long j10) {
        float p10;
        float o10;
        u();
        if (this.f53179w != null && isRunning()) {
            l5.e.b("LottieValueAnimator#doFrame");
            long j11 = this.f53173q;
            long j12 = 0;
            if (j11 != 0) {
                j12 = j10 - j11;
            }
            float m10 = ((float) j12) / m();
            float f10 = this.f53174r;
            if (r()) {
                m10 = -m10;
            }
            float f11 = f10 + m10;
            boolean d10 = i.d(f11, p(), o());
            float f12 = this.f53174r;
            float b10 = i.b(f11, p(), o());
            this.f53174r = b10;
            if (this.f53181y) {
                b10 = (float) Math.floor(b10);
            }
            this.f53175s = b10;
            this.f53173q = j10;
            if (!this.f53181y || this.f53174r != f12) {
                g();
            }
            if (!d10) {
                if (getRepeatCount() != -1 && this.f53176t >= getRepeatCount()) {
                    if (this.f53171o < 0.0f) {
                        o10 = p();
                    } else {
                        o10 = o();
                    }
                    this.f53174r = o10;
                    this.f53175s = o10;
                    v();
                    b(r());
                } else {
                    d();
                    this.f53176t++;
                    if (getRepeatMode() == 2) {
                        this.f53172p = !this.f53172p;
                        z();
                    } else {
                        if (r()) {
                            p10 = o();
                        } else {
                            p10 = p();
                        }
                        this.f53174r = p10;
                        this.f53175s = p10;
                    }
                    this.f53173q = j10;
                }
            }
            H();
            l5.e.c("LottieValueAnimator#doFrame");
        }
    }

    @Override // android.animation.ValueAnimator
    public float getAnimatedFraction() {
        float p10;
        float o10;
        float p11;
        if (this.f53179w == null) {
            return 0.0f;
        }
        if (r()) {
            p10 = o() - this.f53175s;
            o10 = o();
            p11 = p();
        } else {
            p10 = this.f53175s - p();
            o10 = o();
            p11 = p();
        }
        return p10 / (o10 - p11);
    }

    @Override // android.animation.ValueAnimator
    public Object getAnimatedValue() {
        return Float.valueOf(k());
    }

    @Override // android.animation.ValueAnimator, android.animation.Animator
    public long getDuration() {
        l5.i iVar = this.f53179w;
        if (iVar == null) {
            return 0L;
        }
        return iVar.d();
    }

    public void i() {
        this.f53179w = null;
        this.f53177u = -2.14748365E9f;
        this.f53178v = 2.14748365E9f;
    }

    @Override // android.animation.ValueAnimator, android.animation.Animator
    public boolean isRunning() {
        return this.f53180x;
    }

    public void j() {
        v();
        b(r());
    }

    public float k() {
        l5.i iVar = this.f53179w;
        if (iVar == null) {
            return 0.0f;
        }
        return (this.f53175s - iVar.p()) / (this.f53179w.f() - this.f53179w.p());
    }

    public float l() {
        return this.f53175s;
    }

    public float o() {
        l5.i iVar = this.f53179w;
        if (iVar == null) {
            return 0.0f;
        }
        float f10 = this.f53178v;
        if (f10 == 2.14748365E9f) {
            return iVar.f();
        }
        return f10;
    }

    public float p() {
        l5.i iVar = this.f53179w;
        if (iVar == null) {
            return 0.0f;
        }
        float f10 = this.f53177u;
        if (f10 == -2.14748365E9f) {
            return iVar.p();
        }
        return f10;
    }

    public float q() {
        return this.f53171o;
    }

    public void s() {
        v();
        c();
    }

    @Override // android.animation.ValueAnimator
    public void setRepeatMode(int i10) {
        super.setRepeatMode(i10);
        if (i10 != 2 && this.f53172p) {
            this.f53172p = false;
            z();
        }
    }

    public void t() {
        float p10;
        this.f53180x = true;
        f(r());
        if (r()) {
            p10 = o();
        } else {
            p10 = p();
        }
        B((int) p10);
        this.f53173q = 0L;
        this.f53176t = 0;
        u();
    }

    protected void u() {
        if (isRunning()) {
            w(false);
            Choreographer.getInstance().postFrameCallback(this);
        }
    }

    protected void v() {
        w(true);
    }

    protected void w(boolean z10) {
        Choreographer.getInstance().removeFrameCallback(this);
        if (z10) {
            this.f53180x = false;
        }
    }

    public void y() {
        this.f53180x = true;
        u();
        this.f53173q = 0L;
        if (r() && l() == p()) {
            B(o());
        } else if (!r() && l() == o()) {
            B(p());
        }
        e();
    }

    public void z() {
        F(-q());
    }
}
