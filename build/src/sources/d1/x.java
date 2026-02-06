package d1;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class x {

    /* renamed from: a  reason: collision with root package name */
    private final double f20237a;

    /* renamed from: b  reason: collision with root package name */
    private final double f20238b;

    /* renamed from: c  reason: collision with root package name */
    private final double f20239c;

    /* renamed from: d  reason: collision with root package name */
    private final double f20240d;

    /* renamed from: e  reason: collision with root package name */
    private final double f20241e;

    /* renamed from: f  reason: collision with root package name */
    private final double f20242f;

    /* renamed from: g  reason: collision with root package name */
    private final double f20243g;

    public x(double d10, double d11, double d12, double d13, double d14, double d15, double d16) {
        this.f20237a = d10;
        this.f20238b = d11;
        this.f20239c = d12;
        this.f20240d = d13;
        this.f20241e = d14;
        this.f20242f = d15;
        this.f20243g = d16;
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
        return this.f20238b;
    }

    public final double b() {
        return this.f20239c;
    }

    public final double c() {
        return this.f20240d;
    }

    public final double d() {
        return this.f20241e;
    }

    public final double e() {
        return this.f20242f;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof x)) {
            return false;
        }
        x xVar = (x) obj;
        if (Double.compare(this.f20237a, xVar.f20237a) == 0 && Double.compare(this.f20238b, xVar.f20238b) == 0 && Double.compare(this.f20239c, xVar.f20239c) == 0 && Double.compare(this.f20240d, xVar.f20240d) == 0 && Double.compare(this.f20241e, xVar.f20241e) == 0 && Double.compare(this.f20242f, xVar.f20242f) == 0 && Double.compare(this.f20243g, xVar.f20243g) == 0) {
            return true;
        }
        return false;
    }

    public final double f() {
        return this.f20243g;
    }

    public final double g() {
        return this.f20237a;
    }

    public int hashCode() {
        return (((((((((((Double.hashCode(this.f20237a) * 31) + Double.hashCode(this.f20238b)) * 31) + Double.hashCode(this.f20239c)) * 31) + Double.hashCode(this.f20240d)) * 31) + Double.hashCode(this.f20241e)) * 31) + Double.hashCode(this.f20242f)) * 31) + Double.hashCode(this.f20243g);
    }

    public String toString() {
        return "TransferParameters(gamma=" + this.f20237a + ", a=" + this.f20238b + ", b=" + this.f20239c + ", c=" + this.f20240d + ", d=" + this.f20241e + ", e=" + this.f20242f + ", f=" + this.f20243g + ')';
    }

    public /* synthetic */ x(double d10, double d11, double d12, double d13, double d14, double d15, double d16, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(d10, d11, d12, d13, d14, (i10 & 32) != 0 ? 0.0d : d15, (i10 & 64) != 0 ? 0.0d : d16);
    }
}
