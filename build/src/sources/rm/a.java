package rm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final double f48033a;

    /* renamed from: b  reason: collision with root package name */
    private final double f48034b;

    public a(double d10, double d11) {
        this.f48033a = d10;
        this.f48034b = d11;
    }

    public final double a() {
        return this.f48034b;
    }

    public final double b() {
        return this.f48033a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Double.compare(this.f48033a, aVar.f48033a) == 0 && Double.compare(this.f48034b, aVar.f48034b) == 0) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Double.hashCode(this.f48033a) * 31) + Double.hashCode(this.f48034b);
    }

    public String toString() {
        double d10 = this.f48033a;
        double d11 = this.f48034b;
        return "Dimensions(width=" + d10 + ", height=" + d11 + ")";
    }
}
