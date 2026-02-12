package nm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final double f37966a;

    /* renamed from: b  reason: collision with root package name */
    private final double f37967b;

    /* renamed from: c  reason: collision with root package name */
    private final double f37968c;

    /* renamed from: d  reason: collision with root package name */
    private final double f37969d;

    /* renamed from: e  reason: collision with root package name */
    private final double f37970e;

    /* renamed from: f  reason: collision with root package name */
    private final double f37971f;

    /* renamed from: g  reason: collision with root package name */
    private final int f37972g;

    /* renamed from: h  reason: collision with root package name */
    private final int f37973h;

    public b(double d10, double d11, double d12, double d13, double d14, double d15, int i10, int i11) {
        this.f37966a = d10;
        this.f37967b = d11;
        this.f37968c = d12;
        this.f37969d = d13;
        this.f37970e = d14;
        this.f37971f = d15;
        this.f37972g = i10;
        this.f37973h = i11;
    }

    public final double a() {
        return this.f37970e;
    }

    public final double b() {
        return this.f37971f;
    }

    public final double c() {
        return this.f37969d;
    }

    public final int d() {
        return this.f37973h;
    }

    public final int e() {
        return this.f37972g;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Double.compare(this.f37966a, bVar.f37966a) == 0 && Double.compare(this.f37967b, bVar.f37967b) == 0 && Double.compare(this.f37968c, bVar.f37968c) == 0 && Double.compare(this.f37969d, bVar.f37969d) == 0 && Double.compare(this.f37970e, bVar.f37970e) == 0 && Double.compare(this.f37971f, bVar.f37971f) == 0 && this.f37972g == bVar.f37972g && this.f37973h == bVar.f37973h) {
            return true;
        }
        return false;
    }

    public final double f() {
        return this.f37968c;
    }

    public final double g() {
        return this.f37966a;
    }

    public final double h() {
        return this.f37967b;
    }

    public int hashCode() {
        return (((((((((((((Double.hashCode(this.f37966a) * 31) + Double.hashCode(this.f37967b)) * 31) + Double.hashCode(this.f37968c)) * 31) + Double.hashCode(this.f37969d)) * 31) + Double.hashCode(this.f37970e)) * 31) + Double.hashCode(this.f37971f)) * 31) + Integer.hashCode(this.f37972g)) * 31) + Integer.hashCode(this.f37973h);
    }

    public String toString() {
        double d10 = this.f37966a;
        double d11 = this.f37967b;
        double d12 = this.f37968c;
        double d13 = this.f37969d;
        double d14 = this.f37970e;
        double d15 = this.f37971f;
        int i10 = this.f37972g;
        int i11 = this.f37973h;
        return "FocusedInputLayoutChangedEventData(x=" + d10 + ", y=" + d11 + ", width=" + d12 + ", height=" + d13 + ", absoluteX=" + d14 + ", absoluteY=" + d15 + ", target=" + i10 + ", parentScrollViewTarget=" + i11 + ")";
    }
}
