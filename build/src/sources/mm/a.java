package mm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final double f38749a;

    /* renamed from: b  reason: collision with root package name */
    private final double f38750b;

    public a(double d10, double d11) {
        this.f38749a = d10;
        this.f38750b = d11;
    }

    public final double a() {
        return this.f38750b;
    }

    public final double b() {
        return this.f38749a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Double.compare(this.f38749a, aVar.f38749a) == 0 && Double.compare(this.f38750b, aVar.f38750b) == 0) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Double.hashCode(this.f38749a) * 31) + Double.hashCode(this.f38750b);
    }

    public String toString() {
        double d10 = this.f38749a;
        double d11 = this.f38750b;
        return "Dimensions(width=" + d10 + ", height=" + d11 + ")";
    }
}
