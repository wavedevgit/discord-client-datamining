package x5;

import android.view.Choreographer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class g extends a implements Choreographer.FrameCallback {

    /* renamed from: w  reason: collision with root package name */
    private l5.i f53723w;

    /* renamed from: o  reason: collision with root package name */
    private float f53715o = 1.0f;

    /* renamed from: p  reason: collision with root package name */
    private boolean f53716p = false;

    /* renamed from: q  reason: collision with root package name */
    private long f53717q = 0;

    /* renamed from: r  reason: collision with root package name */
    private float f53718r = 0.0f;

    /* renamed from: s  reason: collision with root package name */
    private float f53719s = 0.0f;

    /* renamed from: t  reason: collision with root package name */
    private int f53720t = 0;

    /* renamed from: u  reason: collision with root package name */
    private float f53721u = -2.14748365E9f;

    /* renamed from: v  reason: collision with root package name */
    private float f53722v = 2.14748365E9f;

    /* renamed from: x  reason: collision with root package name */
    protected boolean f53724x = false;

    /* renamed from: y  reason: collision with root package name */
    private boolean f53725y = false;

    private void H() {
        if (this.f53723w != null) {
            float f10 = this.f53719s;
            if (f10 >= this.f53721u && f10 <= this.f53722v) {
                return;
            }
            throw new IllegalStateException(String.format("Frame must be [%f,%f]. It is %f", Float.valueOf(this.f53721u), Float.valueOf(this.f53722v), Float.valueOf(this.f53719s)));
        }
    }

    private float m() {
        l5.i iVar = this.f53723w;
        if (iVar == null) {
            return Float.MAX_VALUE;
        }
        return (1.0E9f / iVar.i()) / Math.abs(this.f53715o);
    }

    private boolean r() {
        if (q() < 0.0f) {
            return true;
        }
        return false;
    }

    public void A(l5.i iVar) {
        boolean z10;
        if (this.f53723w == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f53723w = iVar;
        if (z10) {
            D(Math.max(this.f53721u, iVar.p()), Math.min(this.f53722v, iVar.f()));
        } else {
            D((int) iVar.p(), (int) iVar.f());
        }
        float f10 = this.f53719s;
        this.f53719s = 0.0f;
        this.f53718r = 0.0f;
        B((int) f10);
        g();
    }

    public void B(float f10) {
        if (this.f53718r == f10) {
            return;
        }
        float b10 = i.b(f10, p(), n());
        this.f53718r = b10;
        if (this.f53725y) {
            b10 = (float) Math.floor(b10);
        }
        this.f53719s = b10;
        this.f53717q = 0L;
        g();
    }

    public void C(float f10) {
        D(this.f53721u, f10);
    }

    public void D(float f10, float f11) {
        float p10;
        float f12;
        if (f10 <= f11) {
            l5.i iVar = this.f53723w;
            if (iVar == null) {
                p10 = -3.4028235E38f;
            } else {
                p10 = iVar.p();
            }
            l5.i iVar2 = this.f53723w;
            if (iVar2 == null) {
                f12 = Float.MAX_VALUE;
            } else {
                f12 = iVar2.f();
            }
            float b10 = i.b(f10, p10, f12);
            float b11 = i.b(f11, p10, f12);
            if (b10 == this.f53721u && b11 == this.f53722v) {
                return;
            }
            this.f53721u = b10;
            this.f53722v = b11;
            B((int) i.b(this.f53719s, b10, b11));
            return;
        }
        throw new IllegalArgumentException(String.format("minFrame (%s) must be <= maxFrame (%s)", Float.valueOf(f10), Float.valueOf(f11)));
    }

    public void E(int i10) {
        D(i10, (int) this.f53722v);
    }

    public void F(float f10) {
        this.f53715o = f10;
    }

    public void G(boolean z10) {
        this.f53725y = z10;
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
        float n10;
        u();
        if (this.f53723w != null && isRunning()) {
            l5.e.b("LottieValueAnimator#doFrame");
            long j11 = this.f53717q;
            long j12 = 0;
            if (j11 != 0) {
                j12 = j10 - j11;
            }
            float m10 = ((float) j12) / m();
            float f10 = this.f53718r;
            if (r()) {
                m10 = -m10;
            }
            float f11 = f10 + m10;
            boolean d10 = i.d(f11, p(), n());
            float f12 = this.f53718r;
            float b10 = i.b(f11, p(), n());
            this.f53718r = b10;
            if (this.f53725y) {
                b10 = (float) Math.floor(b10);
            }
            this.f53719s = b10;
            this.f53717q = j10;
            if (!this.f53725y || this.f53718r != f12) {
                g();
            }
            if (!d10) {
                if (getRepeatCount() != -1 && this.f53720t >= getRepeatCount()) {
                    if (this.f53715o < 0.0f) {
                        n10 = p();
                    } else {
                        n10 = n();
                    }
                    this.f53718r = n10;
                    this.f53719s = n10;
                    v();
                    b(r());
                } else {
                    d();
                    this.f53720t++;
                    if (getRepeatMode() == 2) {
                        this.f53716p = !this.f53716p;
                        z();
                    } else {
                        if (r()) {
                            p10 = n();
                        } else {
                            p10 = p();
                        }
                        this.f53718r = p10;
                        this.f53719s = p10;
                    }
                    this.f53717q = j10;
                }
            }
            H();
            l5.e.c("LottieValueAnimator#doFrame");
        }
    }

    @Override // android.animation.ValueAnimator
    public float getAnimatedFraction() {
        float p10;
        float n10;
        float p11;
        if (this.f53723w == null) {
            return 0.0f;
        }
        if (r()) {
            p10 = n() - this.f53719s;
            n10 = n();
            p11 = p();
        } else {
            p10 = this.f53719s - p();
            n10 = n();
            p11 = p();
        }
        return p10 / (n10 - p11);
    }

    @Override // android.animation.ValueAnimator
    public Object getAnimatedValue() {
        return Float.valueOf(k());
    }

    @Override // android.animation.ValueAnimator, android.animation.Animator
    public long getDuration() {
        l5.i iVar = this.f53723w;
        if (iVar == null) {
            return 0L;
        }
        return iVar.d();
    }

    public void i() {
        this.f53723w = null;
        this.f53721u = -2.14748365E9f;
        this.f53722v = 2.14748365E9f;
    }

    @Override // android.animation.ValueAnimator, android.animation.Animator
    public boolean isRunning() {
        return this.f53724x;
    }

    public void j() {
        v();
        b(r());
    }

    public float k() {
        l5.i iVar = this.f53723w;
        if (iVar == null) {
            return 0.0f;
        }
        return (this.f53719s - iVar.p()) / (this.f53723w.f() - this.f53723w.p());
    }

    public float l() {
        return this.f53719s;
    }

    public float n() {
        l5.i iVar = this.f53723w;
        if (iVar == null) {
            return 0.0f;
        }
        float f10 = this.f53722v;
        if (f10 == 2.14748365E9f) {
            return iVar.f();
        }
        return f10;
    }

    public float p() {
        l5.i iVar = this.f53723w;
        if (iVar == null) {
            return 0.0f;
        }
        float f10 = this.f53721u;
        if (f10 == -2.14748365E9f) {
            return iVar.p();
        }
        return f10;
    }

    public float q() {
        return this.f53715o;
    }

    public void s() {
        v();
        c();
    }

    @Override // android.animation.ValueAnimator
    public void setRepeatMode(int i10) {
        super.setRepeatMode(i10);
        if (i10 != 2 && this.f53716p) {
            this.f53716p = false;
            z();
        }
    }

    public void t() {
        float p10;
        this.f53724x = true;
        f(r());
        if (r()) {
            p10 = n();
        } else {
            p10 = p();
        }
        B((int) p10);
        this.f53717q = 0L;
        this.f53720t = 0;
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
            this.f53724x = false;
        }
    }

    public void x() {
        this.f53724x = true;
        u();
        this.f53717q = 0L;
        if (r() && l() == p()) {
            B(n());
        } else if (!r() && l() == n()) {
            B(p());
        }
        e();
    }

    public void z() {
        F(-q());
    }
}
