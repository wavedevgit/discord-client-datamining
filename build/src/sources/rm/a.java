package rm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final double f47465a;

    /* renamed from: b  reason: collision with root package name */
    private final double f47466b;

    public a(double d10, double d11) {
        this.f47465a = d10;
        this.f47466b = d11;
    }

    public final double a() {
        return this.f47466b;
    }

    public final double b() {
        return this.f47465a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Double.compare(this.f47465a, aVar.f47465a) == 0 && Double.compare(this.f47466b, aVar.f47466b) == 0) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Double.hashCode(this.f47465a) * 31) + Double.hashCode(this.f47466b);
    }

    public String toString() {
        double d10 = this.f47465a;
        double d11 = this.f47466b;
        return "Dimensions(width=" + d10 + ", height=" + d11 + ")";
    }
}
