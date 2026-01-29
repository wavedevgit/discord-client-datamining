package d1;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class x {

    /* renamed from: a  reason: collision with root package name */
    private final double f21631a;

    /* renamed from: b  reason: collision with root package name */
    private final double f21632b;

    /* renamed from: c  reason: collision with root package name */
    private final double f21633c;

    /* renamed from: d  reason: collision with root package name */
    private final double f21634d;

    /* renamed from: e  reason: collision with root package name */
    private final double f21635e;

    /* renamed from: f  reason: collision with root package name */
    private final double f21636f;

    /* renamed from: g  reason: collision with root package name */
    private final double f21637g;

    public x(double d10, double d11, double d12, double d13, double d14, double d15, double d16) {
        this.f21631a = d10;
        this.f21632b = d11;
        this.f21633c = d12;
        this.f21634d = d13;
        this.f21635e = d14;
        this.f21636f = d15;
        this.f21637g = d16;
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
        return this.f21632b;
    }

    public final double b() {
        return this.f21633c;
    }

    public final double c() {
        return this.f21634d;
    }

    public final double d() {
        return this.f21635e;
    }

    public final double e() {
        return this.f21636f;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof x)) {
            return false;
        }
        x xVar = (x) obj;
        if (Double.compare(this.f21631a, xVar.f21631a) == 0 && Double.compare(this.f21632b, xVar.f21632b) == 0 && Double.compare(this.f21633c, xVar.f21633c) == 0 && Double.compare(this.f21634d, xVar.f21634d) == 0 && Double.compare(this.f21635e, xVar.f21635e) == 0 && Double.compare(this.f21636f, xVar.f21636f) == 0 && Double.compare(this.f21637g, xVar.f21637g) == 0) {
            return true;
        }
        return false;
    }

    public final double f() {
        return this.f21637g;
    }

    public final double g() {
        return this.f21631a;
    }

    public int hashCode() {
        return (((((((((((Double.hashCode(this.f21631a) * 31) + Double.hashCode(this.f21632b)) * 31) + Double.hashCode(this.f21633c)) * 31) + Double.hashCode(this.f21634d)) * 31) + Double.hashCode(this.f21635e)) * 31) + Double.hashCode(this.f21636f)) * 31) + Double.hashCode(this.f21637g);
    }

    public String toString() {
        return "TransferParameters(gamma=" + this.f21631a + ", a=" + this.f21632b + ", b=" + this.f21633c + ", c=" + this.f21634d + ", d=" + this.f21635e + ", e=" + this.f21636f + ", f=" + this.f21637g + ')';
    }

    public /* synthetic */ x(double d10, double d11, double d12, double d13, double d14, double d15, double d16, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(d10, d11, d12, d13, d14, (i10 & 32) != 0 ? 0.0d : d15, (i10 & 64) != 0 ? 0.0d : d16);
    }
}
