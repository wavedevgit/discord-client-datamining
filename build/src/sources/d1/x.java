package d1;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class x {

    /* renamed from: a  reason: collision with root package name */
    private final double f21418a;

    /* renamed from: b  reason: collision with root package name */
    private final double f21419b;

    /* renamed from: c  reason: collision with root package name */
    private final double f21420c;

    /* renamed from: d  reason: collision with root package name */
    private final double f21421d;

    /* renamed from: e  reason: collision with root package name */
    private final double f21422e;

    /* renamed from: f  reason: collision with root package name */
    private final double f21423f;

    /* renamed from: g  reason: collision with root package name */
    private final double f21424g;

    public x(double d10, double d11, double d12, double d13, double d14, double d15, double d16) {
        this.f21418a = d10;
        this.f21419b = d11;
        this.f21420c = d12;
        this.f21421d = d13;
        this.f21422e = d14;
        this.f21423f = d15;
        this.f21424g = d16;
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
        return this.f21419b;
    }

    public final double b() {
        return this.f21420c;
    }

    public final double c() {
        return this.f21421d;
    }

    public final double d() {
        return this.f21422e;
    }

    public final double e() {
        return this.f21423f;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof x)) {
            return false;
        }
        x xVar = (x) obj;
        if (Double.compare(this.f21418a, xVar.f21418a) == 0 && Double.compare(this.f21419b, xVar.f21419b) == 0 && Double.compare(this.f21420c, xVar.f21420c) == 0 && Double.compare(this.f21421d, xVar.f21421d) == 0 && Double.compare(this.f21422e, xVar.f21422e) == 0 && Double.compare(this.f21423f, xVar.f21423f) == 0 && Double.compare(this.f21424g, xVar.f21424g) == 0) {
            return true;
        }
        return false;
    }

    public final double f() {
        return this.f21424g;
    }

    public final double g() {
        return this.f21418a;
    }

    public int hashCode() {
        return (((((((((((Double.hashCode(this.f21418a) * 31) + Double.hashCode(this.f21419b)) * 31) + Double.hashCode(this.f21420c)) * 31) + Double.hashCode(this.f21421d)) * 31) + Double.hashCode(this.f21422e)) * 31) + Double.hashCode(this.f21423f)) * 31) + Double.hashCode(this.f21424g);
    }

    public String toString() {
        return "TransferParameters(gamma=" + this.f21418a + ", a=" + this.f21419b + ", b=" + this.f21420c + ", c=" + this.f21421d + ", d=" + this.f21422e + ", e=" + this.f21423f + ", f=" + this.f21424g + ')';
    }

    public /* synthetic */ x(double d10, double d11, double d12, double d13, double d14, double d15, double d16, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(d10, d11, d12, d13, d14, (i10 & 32) != 0 ? 0.0d : d15, (i10 & 64) != 0 ? 0.0d : d16);
    }
}
