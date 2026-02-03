package fm;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final double f24045a;

    /* renamed from: b  reason: collision with root package name */
    private final double f24046b;

    /* renamed from: c  reason: collision with root package name */
    private final double f24047c;

    /* renamed from: d  reason: collision with root package name */
    private final double f24048d;

    /* renamed from: e  reason: collision with root package name */
    private final double f24049e;

    /* renamed from: f  reason: collision with root package name */
    private final double f24050f;

    /* renamed from: g  reason: collision with root package name */
    private final int f24051g;

    /* renamed from: h  reason: collision with root package name */
    private final int f24052h;

    public b(double d10, double d11, double d12, double d13, double d14, double d15, int i10, int i11) {
        this.f24045a = d10;
        this.f24046b = d11;
        this.f24047c = d12;
        this.f24048d = d13;
        this.f24049e = d14;
        this.f24050f = d15;
        this.f24051g = i10;
        this.f24052h = i11;
    }

    public final double a() {
        return this.f24049e;
    }

    public final double b() {
        return this.f24050f;
    }

    public final double c() {
        return this.f24048d;
    }

    public final int d() {
        return this.f24052h;
    }

    public final int e() {
        return this.f24051g;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Double.compare(this.f24045a, bVar.f24045a) == 0 && Double.compare(this.f24046b, bVar.f24046b) == 0 && Double.compare(this.f24047c, bVar.f24047c) == 0 && Double.compare(this.f24048d, bVar.f24048d) == 0 && Double.compare(this.f24049e, bVar.f24049e) == 0 && Double.compare(this.f24050f, bVar.f24050f) == 0 && this.f24051g == bVar.f24051g && this.f24052h == bVar.f24052h) {
            return true;
        }
        return false;
    }

    public final double f() {
        return this.f24047c;
    }

    public final double g() {
        return this.f24045a;
    }

    public final double h() {
        return this.f24046b;
    }

    public int hashCode() {
        return (((((((((((((Double.hashCode(this.f24045a) * 31) + Double.hashCode(this.f24046b)) * 31) + Double.hashCode(this.f24047c)) * 31) + Double.hashCode(this.f24048d)) * 31) + Double.hashCode(this.f24049e)) * 31) + Double.hashCode(this.f24050f)) * 31) + Integer.hashCode(this.f24051g)) * 31) + Integer.hashCode(this.f24052h);
    }

    public String toString() {
        double d10 = this.f24045a;
        double d11 = this.f24046b;
        double d12 = this.f24047c;
        double d13 = this.f24048d;
        double d14 = this.f24049e;
        double d15 = this.f24050f;
        int i10 = this.f24051g;
        int i11 = this.f24052h;
        return "FocusedInputLayoutChangedEventData(x=" + d10 + ", y=" + d11 + ", width=" + d12 + ", height=" + d13 + ", absoluteX=" + d14 + ", absoluteY=" + d15 + ", target=" + i10 + ", parentScrollViewTarget=" + i11 + ")";
    }
}
