package im;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final double f28587a;

    /* renamed from: b  reason: collision with root package name */
    private final double f28588b;

    public a(double d10, double d11) {
        this.f28587a = d10;
        this.f28588b = d11;
    }

    public final double a() {
        return this.f28588b;
    }

    public final double b() {
        return this.f28587a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Double.compare(this.f28587a, aVar.f28587a) == 0 && Double.compare(this.f28588b, aVar.f28588b) == 0) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Double.hashCode(this.f28587a) * 31) + Double.hashCode(this.f28588b);
    }

    public String toString() {
        double d10 = this.f28587a;
        double d11 = this.f28588b;
        return "Dimensions(width=" + d10 + ", height=" + d11 + ")";
    }
}
