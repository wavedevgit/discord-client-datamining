package androidx.dynamicanimation.animation;

import androidx.dynamicanimation.animation.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    double f3914a;

    /* renamed from: b  reason: collision with root package name */
    double f3915b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f3916c;

    /* renamed from: d  reason: collision with root package name */
    private double f3917d;

    /* renamed from: e  reason: collision with root package name */
    private double f3918e;

    /* renamed from: f  reason: collision with root package name */
    private double f3919f;

    /* renamed from: g  reason: collision with root package name */
    private double f3920g;

    /* renamed from: h  reason: collision with root package name */
    private double f3921h;

    /* renamed from: i  reason: collision with root package name */
    private double f3922i;

    /* renamed from: j  reason: collision with root package name */
    private final b.p f3923j;

    public c() {
        this.f3914a = Math.sqrt(1500.0d);
        this.f3915b = 0.5d;
        this.f3916c = false;
        this.f3922i = Double.MAX_VALUE;
        this.f3923j = new b.p();
    }

    private void b() {
        if (this.f3916c) {
            return;
        }
        if (this.f3922i != Double.MAX_VALUE) {
            double d10 = this.f3915b;
            if (d10 > 1.0d) {
                double d11 = this.f3914a;
                this.f3919f = ((-d10) * d11) + (d11 * Math.sqrt((d10 * d10) - 1.0d));
                double d12 = this.f3915b;
                double d13 = this.f3914a;
                this.f3920g = ((-d12) * d13) - (d13 * Math.sqrt((d12 * d12) - 1.0d));
            } else if (d10 >= 0.0d && d10 < 1.0d) {
                this.f3921h = this.f3914a * Math.sqrt(1.0d - (d10 * d10));
            }
            this.f3916c = true;
            return;
        }
        throw new IllegalStateException("Error: Final position of the spring must be set before the animation starts");
    }

    public float a() {
        return (float) this.f3922i;
    }

    public boolean c(float f10, float f11) {
        if (Math.abs(f11) < this.f3918e && Math.abs(f10 - a()) < this.f3917d) {
            return true;
        }
        return false;
    }

    public c d(float f10) {
        if (f10 >= 0.0f) {
            this.f3915b = f10;
            this.f3916c = false;
            return this;
        }
        throw new IllegalArgumentException("Damping ratio must be non-negative");
    }

    public c e(float f10) {
        this.f3922i = f10;
        return this;
    }

    public c f(float f10) {
        if (f10 > 0.0f) {
            this.f3914a = Math.sqrt(f10);
            this.f3916c = false;
            return this;
        }
        throw new IllegalArgumentException("Spring stiffness constant must be positive.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(double d10) {
        double abs = Math.abs(d10);
        this.f3917d = abs;
        this.f3918e = abs * 62.5d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b.p h(double d10, double d11, long j10) {
        double pow;
        double cos;
        b();
        double d12 = j10 / 1000.0d;
        double d13 = d10 - this.f3922i;
        double d14 = this.f3915b;
        if (d14 > 1.0d) {
            double d15 = this.f3920g;
            double d16 = this.f3919f;
            double d17 = d13 - (((d15 * d13) - d11) / (d15 - d16));
            double d18 = ((d13 * d15) - d11) / (d15 - d16);
            pow = (Math.pow(2.718281828459045d, d15 * d12) * d17) + (Math.pow(2.718281828459045d, this.f3919f * d12) * d18);
            double d19 = this.f3920g;
            double pow2 = d17 * d19 * Math.pow(2.718281828459045d, d19 * d12);
            double d20 = this.f3919f;
            cos = pow2 + (d18 * d20 * Math.pow(2.718281828459045d, d20 * d12));
        } else if (d14 == 1.0d) {
            double d21 = this.f3914a;
            double d22 = d11 + (d21 * d13);
            double d23 = d13 + (d22 * d12);
            pow = Math.pow(2.718281828459045d, (-d21) * d12) * d23;
            double pow3 = d23 * Math.pow(2.718281828459045d, (-this.f3914a) * d12);
            double d24 = this.f3914a;
            cos = (d22 * Math.pow(2.718281828459045d, (-d24) * d12)) + (pow3 * (-d24));
        } else {
            double d25 = 1.0d / this.f3921h;
            double d26 = this.f3914a;
            double d27 = d25 * ((d14 * d26 * d13) + d11);
            pow = Math.pow(2.718281828459045d, (-d14) * d26 * d12) * ((Math.cos(this.f3921h * d12) * d13) + (Math.sin(this.f3921h * d12) * d27));
            double d28 = this.f3914a;
            double d29 = this.f3915b;
            double pow4 = Math.pow(2.718281828459045d, (-d29) * d28 * d12);
            double d30 = this.f3921h;
            double sin = (-d30) * d13 * Math.sin(d30 * d12);
            double d31 = this.f3921h;
            cos = ((-d28) * pow * d29) + (pow4 * (sin + (d27 * d31 * Math.cos(d31 * d12))));
        }
        b.p pVar = this.f3923j;
        pVar.f3912a = (float) (pow + this.f3922i);
        pVar.f3913b = (float) cos;
        return pVar;
    }

    public c(float f10) {
        this.f3914a = Math.sqrt(1500.0d);
        this.f3915b = 0.5d;
        this.f3916c = false;
        this.f3922i = Double.MAX_VALUE;
        this.f3923j = new b.p();
        this.f3922i = f10;
    }
}
