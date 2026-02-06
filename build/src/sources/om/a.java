package om;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final double f43230a;

    /* renamed from: b  reason: collision with root package name */
    private final double f43231b;

    public a(double d10, double d11) {
        this.f43230a = d10;
        this.f43231b = d11;
    }

    public final double a() {
        return this.f43231b;
    }

    public final double b() {
        return this.f43230a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Double.compare(this.f43230a, aVar.f43230a) == 0 && Double.compare(this.f43231b, aVar.f43231b) == 0) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Double.hashCode(this.f43230a) * 31) + Double.hashCode(this.f43231b);
    }

    public String toString() {
        double d10 = this.f43230a;
        double d11 = this.f43231b;
        return "Dimensions(width=" + d10 + ", height=" + d11 + ")";
    }
}
