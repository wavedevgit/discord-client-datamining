package pm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final double f44336a;

    /* renamed from: b  reason: collision with root package name */
    private final double f44337b;

    public a(double d10, double d11) {
        this.f44336a = d10;
        this.f44337b = d11;
    }

    public final double a() {
        return this.f44337b;
    }

    public final double b() {
        return this.f44336a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Double.compare(this.f44336a, aVar.f44336a) == 0 && Double.compare(this.f44337b, aVar.f44337b) == 0) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Double.hashCode(this.f44336a) * 31) + Double.hashCode(this.f44337b);
    }

    public String toString() {
        double d10 = this.f44336a;
        double d11 = this.f44337b;
        return "Dimensions(width=" + d10 + ", height=" + d11 + ")";
    }
}
