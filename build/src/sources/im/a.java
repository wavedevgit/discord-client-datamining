package im;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final double f28603a;

    /* renamed from: b  reason: collision with root package name */
    private final double f28604b;

    public a(double d10, double d11) {
        this.f28603a = d10;
        this.f28604b = d11;
    }

    public final double a() {
        return this.f28604b;
    }

    public final double b() {
        return this.f28603a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Double.compare(this.f28603a, aVar.f28603a) == 0 && Double.compare(this.f28604b, aVar.f28604b) == 0) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (Double.hashCode(this.f28603a) * 31) + Double.hashCode(this.f28604b);
    }

    public String toString() {
        double d10 = this.f28603a;
        double d11 = this.f28604b;
        return "Dimensions(width=" + d10 + ", height=" + d11 + ")";
    }
}
