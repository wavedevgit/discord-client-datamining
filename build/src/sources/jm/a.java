package jm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final double f31787a;

    /* renamed from: b  reason: collision with root package name */
    private final double f31788b;

    public a(double d10, double d11) {
        this.f31787a = d10;
        this.f31788b = d11;
    }

    public final double a() {
        return this.f31788b;
    }

    public final double b() {
        return this.f31787a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Double.compare(this.f31787a, aVar.f31787a) == 0 && Double.compare(this.f31788b, aVar.f31788b) == 0) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Double.hashCode(this.f31787a) * 31) + Double.hashCode(this.f31788b);
    }

    public String toString() {
        double d10 = this.f31787a;
        double d11 = this.f31788b;
        return "Dimensions(width=" + d10 + ", height=" + d11 + ")";
    }
}
