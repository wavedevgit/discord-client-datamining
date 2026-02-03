package jm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final double f31991a;

    /* renamed from: b  reason: collision with root package name */
    private final double f31992b;

    public a(double d10, double d11) {
        this.f31991a = d10;
        this.f31992b = d11;
    }

    public final double a() {
        return this.f31992b;
    }

    public final double b() {
        return this.f31991a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Double.compare(this.f31991a, aVar.f31991a) == 0 && Double.compare(this.f31992b, aVar.f31992b) == 0) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Double.hashCode(this.f31991a) * 31) + Double.hashCode(this.f31992b);
    }

    public String toString() {
        double d10 = this.f31991a;
        double d11 = this.f31992b;
        return "Dimensions(width=" + d10 + ", height=" + d11 + ")";
    }
}
