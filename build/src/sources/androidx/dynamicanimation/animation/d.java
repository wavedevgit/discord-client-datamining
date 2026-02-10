package androidx.dynamicanimation.animation;

import androidx.dynamicanimation.animation.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    double f4075a;

    /* renamed from: b  reason: collision with root package name */
    double f4076b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f4077c;

    /* renamed from: d  reason: collision with root package name */
    private double f4078d;

    /* renamed from: e  reason: collision with root package name */
    private double f4079e;

    /* renamed from: f  reason: collision with root package name */
    private double f4080f;

    /* renamed from: g  reason: collision with root package name */
    private double f4081g;

    /* renamed from: h  reason: collision with root package name */
    private double f4082h;

    /* renamed from: i  reason: collision with root package name */
    private double f4083i;

    /* renamed from: j  reason: collision with root package name */
    private final c.p f4084j;

    public d() {
        this.f4075a = Math.sqrt(1500.0d);
        this.f4076b = 0.5d;
        this.f4077c = false;
        this.f4083i = Double.MAX_VALUE;
        this.f4084j = new c.p();
    }

    private void d() {
        if (this.f4077c) {
            return;
        }
        if (this.f4083i != Double.MAX_VALUE) {
            double d10 = this.f4076b;
            if (d10 > 1.0d) {
                double d11 = this.f4075a;
                this.f4080f = ((-d10) * d11) + (d11 * Math.sqrt((d10 * d10) - 1.0d));
                double d12 = this.f4076b;
                double d13 = this.f4075a;
                this.f4081g = ((-d12) * d13) - (d13 * Math.sqrt((d12 * d12) - 1.0d));
            } else if (d10 >= 0.0d && d10 < 1.0d) {
                this.f4082h = this.f4075a * Math.sqrt(1.0d - (d10 * d10));
            }
            this.f4077c = true;
            return;
        }
        throw new IllegalStateException("Error: Final position of the spring must be set before the animation starts");
    }

    public float a() {
        return (float) this.f4076b;
    }

    public float b() {
        return (float) this.f4083i;
    }

    public float c() {
        double d10 = this.f4075a;
        return (float) (d10 * d10);
    }

    public boolean e(float f10, float f11) {
        if (Math.abs(f11) < this.f4079e && Math.abs(f10 - b()) < this.f4078d) {
            return true;
        }
        return false;
    }

    public d f(float f10) {
        if (f10 >= 0.0f) {
            this.f4076b = f10;
            this.f4077c = false;
            return this;
        }
        throw new IllegalArgumentException("Damping ratio must be non-negative");
    }

    public d g(float f10) {
        this.f4083i = f10;
        return this;
    }

    public d h(float f10) {
        if (f10 > 0.0f) {
            this.f4075a = Math.sqrt(f10);
            this.f4077c = false;
            return this;
        }
        throw new IllegalArgumentException("Spring stiffness constant must be positive.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void i(double d10) {
        double abs = Math.abs(d10);
        this.f4078d = abs;
        this.f4079e = abs * 62.5d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c.p j(double d10, double d11, long j10) {
        double pow;
        double cos;
        d();
        double d12 = j10 / 1000.0d;
        double d13 = d10 - this.f4083i;
        double d14 = this.f4076b;
        if (d14 > 1.0d) {
            double d15 = this.f4081g;
            double d16 = this.f4080f;
            double d17 = d13 - (((d15 * d13) - d11) / (d15 - d16));
            double d18 = ((d13 * d15) - d11) / (d15 - d16);
            pow = (Math.pow(2.718281828459045d, d15 * d12) * d17) + (Math.pow(2.718281828459045d, this.f4080f * d12) * d18);
            double d19 = this.f4081g;
            double pow2 = d17 * d19 * Math.pow(2.718281828459045d, d19 * d12);
            double d20 = this.f4080f;
            cos = pow2 + (d18 * d20 * Math.pow(2.718281828459045d, d20 * d12));
        } else if (d14 == 1.0d) {
            double d21 = this.f4075a;
            double d22 = d11 + (d21 * d13);
            double d23 = d13 + (d22 * d12);
            pow = Math.pow(2.718281828459045d, (-d21) * d12) * d23;
            double pow3 = d23 * Math.pow(2.718281828459045d, (-this.f4075a) * d12);
            double d24 = this.f4075a;
            cos = (d22 * Math.pow(2.718281828459045d, (-d24) * d12)) + (pow3 * (-d24));
        } else {
            double d25 = 1.0d / this.f4082h;
            double d26 = this.f4075a;
            double d27 = d25 * ((d14 * d26 * d13) + d11);
            pow = Math.pow(2.718281828459045d, (-d14) * d26 * d12) * ((Math.cos(this.f4082h * d12) * d13) + (Math.sin(this.f4082h * d12) * d27));
            double d28 = this.f4075a;
            double d29 = this.f4076b;
            double pow4 = Math.pow(2.718281828459045d, (-d29) * d28 * d12);
            double d30 = this.f4082h;
            double sin = (-d30) * d13 * Math.sin(d30 * d12);
            double d31 = this.f4082h;
            cos = ((-d28) * pow * d29) + (pow4 * (sin + (d27 * d31 * Math.cos(d31 * d12))));
        }
        c.p pVar = this.f4084j;
        pVar.f4073a = (float) (pow + this.f4083i);
        pVar.f4074b = (float) cos;
        return pVar;
    }

    public d(float f10) {
        this.f4075a = Math.sqrt(1500.0d);
        this.f4076b = 0.5d;
        this.f4077c = false;
        this.f4083i = Double.MAX_VALUE;
        this.f4084j = new c.p();
        this.f4083i = f10;
    }
}
