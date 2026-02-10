package rm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final double f47464a;

    /* renamed from: b  reason: collision with root package name */
    private final double f47465b;

    public a(double d10, double d11) {
        this.f47464a = d10;
        this.f47465b = d11;
    }

    public final double a() {
        return this.f47465b;
    }

    public final double b() {
        return this.f47464a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Double.compare(this.f47464a, aVar.f47464a) == 0 && Double.compare(this.f47465b, aVar.f47465b) == 0) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Double.hashCode(this.f47464a) * 31) + Double.hashCode(this.f47465b);
    }

    public String toString() {
        double d10 = this.f47464a;
        double d11 = this.f47465b;
        return "Dimensions(width=" + d10 + ", height=" + d11 + ")";
    }
}
