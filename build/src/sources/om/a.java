package om;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final double f43278a;

    /* renamed from: b  reason: collision with root package name */
    private final double f43279b;

    public a(double d10, double d11) {
        this.f43278a = d10;
        this.f43279b = d11;
    }

    public final double a() {
        return this.f43279b;
    }

    public final double b() {
        return this.f43278a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Double.compare(this.f43278a, aVar.f43278a) == 0 && Double.compare(this.f43279b, aVar.f43279b) == 0) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Double.hashCode(this.f43278a) * 31) + Double.hashCode(this.f43279b);
    }

    public String toString() {
        double d10 = this.f43278a;
        double d11 = this.f43279b;
        return "Dimensions(width=" + d10 + ", height=" + d11 + ")";
    }
}
