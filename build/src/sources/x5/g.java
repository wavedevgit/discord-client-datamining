package x5;

import android.view.Choreographer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class g extends a implements Choreographer.FrameCallback {

    /* renamed from: w  reason: collision with root package name */
    private l5.i f54542w;

    /* renamed from: o  reason: collision with root package name */
    private float f54534o = 1.0f;

    /* renamed from: p  reason: collision with root package name */
    private boolean f54535p = false;

    /* renamed from: q  reason: collision with root package name */
    private long f54536q = 0;

    /* renamed from: r  reason: collision with root package name */
    private float f54537r = 0.0f;

    /* renamed from: s  reason: collision with root package name */
    private float f54538s = 0.0f;

    /* renamed from: t  reason: collision with root package name */
    private int f54539t = 0;

    /* renamed from: u  reason: collision with root package name */
    private float f54540u = -2.14748365E9f;

    /* renamed from: v  reason: collision with root package name */
    private float f54541v = 2.14748365E9f;

    /* renamed from: x  reason: collision with root package name */
    protected boolean f54543x = false;

    /* renamed from: y  reason: collision with root package name */
    private boolean f54544y = false;

    private void I() {
        if (this.f54542w != null) {
            float f10 = this.f54538s;
            if (f10 >= this.f54540u && f10 <= this.f54541v) {
                return;
            }
            throw new IllegalStateException(String.format("Frame must be [%f,%f]. It is %f", Float.valueOf(this.f54540u), Float.valueOf(this.f54541v), Float.valueOf(this.f54538s)));
        }
    }

    private float m() {
        l5.i iVar = this.f54542w;
        if (iVar == null) {
            return Float.MAX_VALUE;
        }
        return (1.0E9f / iVar.i()) / Math.abs(this.f54534o);
    }

    private boolean r() {
        if (q() < 0.0f) {
            return true;
        }
        return false;
    }

    public void A(l5.i iVar) {
        boolean z10;
        if (this.f54542w == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f54542w = iVar;
        if (z10) {
            E(Math.max(this.f54540u, iVar.p()), Math.min(this.f54541v, iVar.f()));
        } else {
            E((int) iVar.p(), (int) iVar.f());
        }
        float f10 = this.f54538s;
        this.f54538s = 0.0f;
        this.f54537r = 0.0f;
        B((int) f10);
        h();
    }

    public void B(float f10) {
        if (this.f54537r == f10) {
            return;
        }
        float b10 = i.b(f10, o(), n());
        this.f54537r = b10;
        if (this.f54544y) {
            b10 = (float) Math.floor(b10);
        }
        this.f54538s = b10;
        this.f54536q = 0L;
        h();
    }

    public void D(float f10) {
        E(this.f54540u, f10);
    }

    public void E(float f10, float f11) {
        float p10;
        float f12;
        if (f10 <= f11) {
            l5.i iVar = this.f54542w;
            if (iVar == null) {
                p10 = -3.4028235E38f;
            } else {
                p10 = iVar.p();
            }
            l5.i iVar2 = this.f54542w;
            if (iVar2 == null) {
                f12 = Float.MAX_VALUE;
            } else {
                f12 = iVar2.f();
            }
            float b10 = i.b(f10, p10, f12);
            float b11 = i.b(f11, p10, f12);
            if (b10 == this.f54540u && b11 == this.f54541v) {
                return;
            }
            this.f54540u = b10;
            this.f54541v = b11;
            B((int) i.b(this.f54538s, b10, b11));
            return;
        }
        throw new IllegalArgumentException(String.format("minFrame (%s) must be <= maxFrame (%s)", Float.valueOf(f10), Float.valueOf(f11)));
    }

    public void F(int i10) {
        E(i10, (int) this.f54541v);
    }

    public void G(float f10) {
        this.f54534o = f10;
    }

    public void H(boolean z10) {
        this.f54544y = z10;
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
        w();
    }

    @Override // android.view.Choreographer.FrameCallback
    public void doFrame(long j10) {
        float o10;
        float n10;
        v();
        if (this.f54542w != null && isRunning()) {
            l5.e.b("LottieValueAnimator#doFrame");
            long j11 = this.f54536q;
            long j12 = 0;
            if (j11 != 0) {
                j12 = j10 - j11;
            }
            float m10 = ((float) j12) / m();
            float f10 = this.f54537r;
            if (r()) {
                m10 = -m10;
            }
            float f11 = f10 + m10;
            boolean d10 = i.d(f11, o(), n());
            float f12 = this.f54537r;
            float b10 = i.b(f11, o(), n());
            this.f54537r = b10;
            if (this.f54544y) {
                b10 = (float) Math.floor(b10);
            }
            this.f54538s = b10;
            this.f54536q = j10;
            if (!this.f54544y || this.f54537r != f12) {
                h();
            }
            if (!d10) {
                if (getRepeatCount() != -1 && this.f54539t >= getRepeatCount()) {
                    if (this.f54534o < 0.0f) {
                        n10 = o();
                    } else {
                        n10 = n();
                    }
                    this.f54537r = n10;
                    this.f54538s = n10;
                    w();
                    b(r());
                } else {
                    d();
                    this.f54539t++;
                    if (getRepeatMode() == 2) {
                        this.f54535p = !this.f54535p;
                        z();
                    } else {
                        if (r()) {
                            o10 = n();
                        } else {
                            o10 = o();
                        }
                        this.f54537r = o10;
                        this.f54538s = o10;
                    }
                    this.f54536q = j10;
                }
            }
            I();
            l5.e.c("LottieValueAnimator#doFrame");
        }
    }

    @Override // android.animation.ValueAnimator
    public float getAnimatedFraction() {
        float o10;
        float n10;
        float o11;
        if (this.f54542w == null) {
            return 0.0f;
        }
        if (r()) {
            o10 = n() - this.f54538s;
            n10 = n();
            o11 = o();
        } else {
            o10 = this.f54538s - o();
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
        l5.i iVar = this.f54542w;
        if (iVar == null) {
            return 0L;
        }
        return iVar.d();
    }

    public void i() {
        this.f54542w = null;
        this.f54540u = -2.14748365E9f;
        this.f54541v = 2.14748365E9f;
    }

    @Override // android.animation.ValueAnimator, android.animation.Animator
    public boolean isRunning() {
        return this.f54543x;
    }

    public void j() {
        w();
        b(r());
    }

    public float k() {
        l5.i iVar = this.f54542w;
        if (iVar == null) {
            return 0.0f;
        }
        return (this.f54538s - iVar.p()) / (this.f54542w.f() - this.f54542w.p());
    }

    public float l() {
        return this.f54538s;
    }

    public float n() {
        l5.i iVar = this.f54542w;
        if (iVar == null) {
            return 0.0f;
        }
        float f10 = this.f54541v;
        if (f10 == 2.14748365E9f) {
            return iVar.f();
        }
        return f10;
    }

    public float o() {
        l5.i iVar = this.f54542w;
        if (iVar == null) {
            return 0.0f;
        }
        float f10 = this.f54540u;
        if (f10 == -2.14748365E9f) {
            return iVar.p();
        }
        return f10;
    }

    public float q() {
        return this.f54534o;
    }

    @Override // android.animation.ValueAnimator
    public void setRepeatMode(int i10) {
        super.setRepeatMode(i10);
        if (i10 != 2 && this.f54535p) {
            this.f54535p = false;
            z();
        }
    }

    public void t() {
        w();
        c();
    }

    public void u() {
        float o10;
        this.f54543x = true;
        f(r());
        if (r()) {
            o10 = n();
        } else {
            o10 = o();
        }
        B((int) o10);
        this.f54536q = 0L;
        this.f54539t = 0;
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
            this.f54543x = false;
        }
    }

    public void y() {
        this.f54543x = true;
        v();
        this.f54536q = 0L;
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
