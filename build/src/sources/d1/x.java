package d1;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class x {

    /* renamed from: a  reason: collision with root package name */
    private final double f21207a;

    /* renamed from: b  reason: collision with root package name */
    private final double f21208b;

    /* renamed from: c  reason: collision with root package name */
    private final double f21209c;

    /* renamed from: d  reason: collision with root package name */
    private final double f21210d;

    /* renamed from: e  reason: collision with root package name */
    private final double f21211e;

    /* renamed from: f  reason: collision with root package name */
    private final double f21212f;

    /* renamed from: g  reason: collision with root package name */
    private final double f21213g;

    public x(double d10, double d11, double d12, double d13, double d14, double d15, double d16) {
        this.f21207a = d10;
        this.f21208b = d11;
        this.f21209c = d12;
        this.f21210d = d13;
        this.f21211e = d14;
        this.f21212f = d15;
        this.f21213g = d16;
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
        return this.f21208b;
    }

    public final double b() {
        return this.f21209c;
    }

    public final double c() {
        return this.f21210d;
    }

    public final double d() {
        return this.f21211e;
    }

    public final double e() {
        return this.f21212f;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof x)) {
            return false;
        }
        x xVar = (x) obj;
        if (Double.compare(this.f21207a, xVar.f21207a) == 0 && Double.compare(this.f21208b, xVar.f21208b) == 0 && Double.compare(this.f21209c, xVar.f21209c) == 0 && Double.compare(this.f21210d, xVar.f21210d) == 0 && Double.compare(this.f21211e, xVar.f21211e) == 0 && Double.compare(this.f21212f, xVar.f21212f) == 0 && Double.compare(this.f21213g, xVar.f21213g) == 0) {
            return true;
        }
        return false;
    }

    public final double f() {
        return this.f21213g;
    }

    public final double g() {
        return this.f21207a;
    }

    public int hashCode() {
        return (((((((((((Double.hashCode(this.f21207a) * 31) + Double.hashCode(this.f21208b)) * 31) + Double.hashCode(this.f21209c)) * 31) + Double.hashCode(this.f21210d)) * 31) + Double.hashCode(this.f21211e)) * 31) + Double.hashCode(this.f21212f)) * 31) + Double.hashCode(this.f21213g);
    }

    public String toString() {
        return "TransferParameters(gamma=" + this.f21207a + ", a=" + this.f21208b + ", b=" + this.f21209c + ", c=" + this.f21210d + ", d=" + this.f21211e + ", e=" + this.f21212f + ", f=" + this.f21213g + ')';
    }

    public /* synthetic */ x(double d10, double d11, double d12, double d13, double d14, double d15, double d16, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(d10, d11, d12, d13, d14, (i10 & 32) != 0 ? 0.0d : d15, (i10 & 64) != 0 ? 0.0d : d16);
    }
}
