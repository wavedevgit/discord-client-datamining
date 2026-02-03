package d1;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class x {

    /* renamed from: a  reason: collision with root package name */
    private final double f20066a;

    /* renamed from: b  reason: collision with root package name */
    private final double f20067b;

    /* renamed from: c  reason: collision with root package name */
    private final double f20068c;

    /* renamed from: d  reason: collision with root package name */
    private final double f20069d;

    /* renamed from: e  reason: collision with root package name */
    private final double f20070e;

    /* renamed from: f  reason: collision with root package name */
    private final double f20071f;

    /* renamed from: g  reason: collision with root package name */
    private final double f20072g;

    public x(double d10, double d11, double d12, double d13, double d14, double d15, double d16) {
        this.f20066a = d10;
        this.f20067b = d11;
        this.f20068c = d12;
        this.f20069d = d13;
        this.f20070e = d14;
        this.f20071f = d15;
        this.f20072g = d16;
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
        return this.f20067b;
    }

    public final double b() {
        return this.f20068c;
    }

    public final double c() {
        return this.f20069d;
    }

    public final double d() {
        return this.f20070e;
    }

    public final double e() {
        return this.f20071f;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof x)) {
            return false;
        }
        x xVar = (x) obj;
        if (Double.compare(this.f20066a, xVar.f20066a) == 0 && Double.compare(this.f20067b, xVar.f20067b) == 0 && Double.compare(this.f20068c, xVar.f20068c) == 0 && Double.compare(this.f20069d, xVar.f20069d) == 0 && Double.compare(this.f20070e, xVar.f20070e) == 0 && Double.compare(this.f20071f, xVar.f20071f) == 0 && Double.compare(this.f20072g, xVar.f20072g) == 0) {
            return true;
        }
        return false;
    }

    public final double f() {
        return this.f20072g;
    }

    public final double g() {
        return this.f20066a;
    }

    public int hashCode() {
        return (((((((((((Double.hashCode(this.f20066a) * 31) + Double.hashCode(this.f20067b)) * 31) + Double.hashCode(this.f20068c)) * 31) + Double.hashCode(this.f20069d)) * 31) + Double.hashCode(this.f20070e)) * 31) + Double.hashCode(this.f20071f)) * 31) + Double.hashCode(this.f20072g);
    }

    public String toString() {
        return "TransferParameters(gamma=" + this.f20066a + ", a=" + this.f20067b + ", b=" + this.f20068c + ", c=" + this.f20069d + ", d=" + this.f20070e + ", e=" + this.f20071f + ", f=" + this.f20072g + ')';
    }

    public /* synthetic */ x(double d10, double d11, double d12, double d13, double d14, double d15, double d16, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(d10, d11, d12, d13, d14, (i10 & 32) != 0 ? 0.0d : d15, (i10 & 64) != 0 ? 0.0d : d16);
    }
}
