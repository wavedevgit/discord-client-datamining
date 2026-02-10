package d1;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class x {

    /* renamed from: a  reason: collision with root package name */
    private final double f20470a;

    /* renamed from: b  reason: collision with root package name */
    private final double f20471b;

    /* renamed from: c  reason: collision with root package name */
    private final double f20472c;

    /* renamed from: d  reason: collision with root package name */
    private final double f20473d;

    /* renamed from: e  reason: collision with root package name */
    private final double f20474e;

    /* renamed from: f  reason: collision with root package name */
    private final double f20475f;

    /* renamed from: g  reason: collision with root package name */
    private final double f20476g;

    public x(double d10, double d11, double d12, double d13, double d14, double d15, double d16) {
        this.f20470a = d10;
        this.f20471b = d11;
        this.f20472c = d12;
        this.f20473d = d13;
        this.f20474e = d14;
        this.f20475f = d15;
        this.f20476g = d16;
        if (Double.isNaN(d11) || Double.isNaN(d12) || Double.isNaN(d13) || Double.isNaN(d14) || Double.isNaN(d15) || Double.isNaN(d16) || Double.isNaN(d10)) {
            throw new IllegalArgumentException("Parameters cannot be NaN");
        }
        if (d14 < 0.0d || d14 > 1.0d) {
            throw new IllegalArgumentException("Parameter d must be in the range [0..1], was " + d14);
        } else if (d14 == 0.0d && (d11 == 0.0d || d10 == 0.0d)) {
            throw new IllegalArgumentException("Parameter a or g is zero, the transfer function is constant");
        } else {
            if (d14 >= 1.0d && d13 == 0.0d) {
                throw new IllegalArgumentException("Parameter c is zero, the transfer function is constant");
            }
            if ((d11 == 0.0d || d10 == 0.0d) && d13 == 0.0d) {
                throw new IllegalArgumentException("Parameter a or g is zero, and c is zero, the transfer function is constant");
            }
            if (d13 < 0.0d) {
                throw new IllegalArgumentException("The transfer function must be increasing");
            }
            if (d11 < 0.0d || d10 < 0.0d) {
                throw new IllegalArgumentException("The transfer function must be positive or increasing");
            }
        }
    }

    public final double a() {
        return this.f20471b;
    }

    public final double b() {
        return this.f20472c;
    }

    public final double c() {
        return this.f20473d;
    }

    public final double d() {
        return this.f20474e;
    }

    public final double e() {
        return this.f20475f;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof x)) {
            return false;
        }
        x xVar = (x) obj;
        if (Double.compare(this.f20470a, xVar.f20470a) == 0 && Double.compare(this.f20471b, xVar.f20471b) == 0 && Double.compare(this.f20472c, xVar.f20472c) == 0 && Double.compare(this.f20473d, xVar.f20473d) == 0 && Double.compare(this.f20474e, xVar.f20474e) == 0 && Double.compare(this.f20475f, xVar.f20475f) == 0 && Double.compare(this.f20476g, xVar.f20476g) == 0) {
            return true;
        }
        return false;
    }

    public final double f() {
        return this.f20476g;
    }

    public final double g() {
        return this.f20470a;
    }

    public int hashCode() {
        return (((((((((((Double.hashCode(this.f20470a) * 31) + Double.hashCode(this.f20471b)) * 31) + Double.hashCode(this.f20472c)) * 31) + Double.hashCode(this.f20473d)) * 31) + Double.hashCode(this.f20474e)) * 31) + Double.hashCode(this.f20475f)) * 31) + Double.hashCode(this.f20476g);
    }

    public String toString() {
        return "TransferParameters(gamma=" + this.f20470a + ", a=" + this.f20471b + ", b=" + this.f20472c + ", c=" + this.f20473d + ", d=" + this.f20474e + ", e=" + this.f20475f + ", f=" + this.f20476g + ')';
    }

    public /* synthetic */ x(double d10, double d11, double d12, double d13, double d14, double d15, double d16, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(d10, d11, d12, d13, d14, (i10 & 32) != 0 ? 0.0d : d15, (i10 & 64) != 0 ? 0.0d : d16);
    }
}
