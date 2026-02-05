package d1;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class x {

    /* renamed from: a  reason: collision with root package name */
    private final double f20282a;

    /* renamed from: b  reason: collision with root package name */
    private final double f20283b;

    /* renamed from: c  reason: collision with root package name */
    private final double f20284c;

    /* renamed from: d  reason: collision with root package name */
    private final double f20285d;

    /* renamed from: e  reason: collision with root package name */
    private final double f20286e;

    /* renamed from: f  reason: collision with root package name */
    private final double f20287f;

    /* renamed from: g  reason: collision with root package name */
    private final double f20288g;

    public x(double d10, double d11, double d12, double d13, double d14, double d15, double d16) {
        this.f20282a = d10;
        this.f20283b = d11;
        this.f20284c = d12;
        this.f20285d = d13;
        this.f20286e = d14;
        this.f20287f = d15;
        this.f20288g = d16;
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
        return this.f20283b;
    }

    public final double b() {
        return this.f20284c;
    }

    public final double c() {
        return this.f20285d;
    }

    public final double d() {
        return this.f20286e;
    }

    public final double e() {
        return this.f20287f;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof x)) {
            return false;
        }
        x xVar = (x) obj;
        if (Double.compare(this.f20282a, xVar.f20282a) == 0 && Double.compare(this.f20283b, xVar.f20283b) == 0 && Double.compare(this.f20284c, xVar.f20284c) == 0 && Double.compare(this.f20285d, xVar.f20285d) == 0 && Double.compare(this.f20286e, xVar.f20286e) == 0 && Double.compare(this.f20287f, xVar.f20287f) == 0 && Double.compare(this.f20288g, xVar.f20288g) == 0) {
            return true;
        }
        return false;
    }

    public final double f() {
        return this.f20288g;
    }

    public final double g() {
        return this.f20282a;
    }

    public int hashCode() {
        return (((((((((((Double.hashCode(this.f20282a) * 31) + Double.hashCode(this.f20283b)) * 31) + Double.hashCode(this.f20284c)) * 31) + Double.hashCode(this.f20285d)) * 31) + Double.hashCode(this.f20286e)) * 31) + Double.hashCode(this.f20287f)) * 31) + Double.hashCode(this.f20288g);
    }

    public String toString() {
        return "TransferParameters(gamma=" + this.f20282a + ", a=" + this.f20283b + ", b=" + this.f20284c + ", c=" + this.f20285d + ", d=" + this.f20286e + ", e=" + this.f20287f + ", f=" + this.f20288g + ')';
    }

    public /* synthetic */ x(double d10, double d11, double d12, double d13, double d14, double d15, double d16, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(d10, d11, d12, d13, d14, (i10 & 32) != 0 ? 0.0d : d15, (i10 & 64) != 0 ? 0.0d : d16);
    }
}
