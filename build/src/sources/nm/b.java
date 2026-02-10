package nm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final double f37965a;

    /* renamed from: b  reason: collision with root package name */
    private final double f37966b;

    /* renamed from: c  reason: collision with root package name */
    private final double f37967c;

    /* renamed from: d  reason: collision with root package name */
    private final double f37968d;

    /* renamed from: e  reason: collision with root package name */
    private final double f37969e;

    /* renamed from: f  reason: collision with root package name */
    private final double f37970f;

    /* renamed from: g  reason: collision with root package name */
    private final int f37971g;

    /* renamed from: h  reason: collision with root package name */
    private final int f37972h;

    public b(double d10, double d11, double d12, double d13, double d14, double d15, int i10, int i11) {
        this.f37965a = d10;
        this.f37966b = d11;
        this.f37967c = d12;
        this.f37968d = d13;
        this.f37969e = d14;
        this.f37970f = d15;
        this.f37971g = i10;
        this.f37972h = i11;
    }

    public final double a() {
        return this.f37969e;
    }

    public final double b() {
        return this.f37970f;
    }

    public final double c() {
        return this.f37968d;
    }

    public final int d() {
        return this.f37972h;
    }

    public final int e() {
        return this.f37971g;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Double.compare(this.f37965a, bVar.f37965a) == 0 && Double.compare(this.f37966b, bVar.f37966b) == 0 && Double.compare(this.f37967c, bVar.f37967c) == 0 && Double.compare(this.f37968d, bVar.f37968d) == 0 && Double.compare(this.f37969e, bVar.f37969e) == 0 && Double.compare(this.f37970f, bVar.f37970f) == 0 && this.f37971g == bVar.f37971g && this.f37972h == bVar.f37972h) {
            return true;
        }
        return false;
    }

    public final double f() {
        return this.f37967c;
    }

    public final double g() {
        return this.f37965a;
    }

    public final double h() {
        return this.f37966b;
    }

    public int hashCode() {
        return (((((((((((((Double.hashCode(this.f37965a) * 31) + Double.hashCode(this.f37966b)) * 31) + Double.hashCode(this.f37967c)) * 31) + Double.hashCode(this.f37968d)) * 31) + Double.hashCode(this.f37969e)) * 31) + Double.hashCode(this.f37970f)) * 31) + Integer.hashCode(this.f37971g)) * 31) + Integer.hashCode(this.f37972h);
    }

    public String toString() {
        double d10 = this.f37965a;
        double d11 = this.f37966b;
        double d12 = this.f37967c;
        double d13 = this.f37968d;
        double d14 = this.f37969e;
        double d15 = this.f37970f;
        int i10 = this.f37971g;
        int i11 = this.f37972h;
        return "FocusedInputLayoutChangedEventData(x=" + d10 + ", y=" + d11 + ", width=" + d12 + ", height=" + d13 + ", absoluteX=" + d14 + ", absoluteY=" + d15 + ", target=" + i10 + ", parentScrollViewTarget=" + i11 + ")";
    }
}
