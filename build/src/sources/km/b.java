package km;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final double f31727a;

    /* renamed from: b  reason: collision with root package name */
    private final double f31728b;

    /* renamed from: c  reason: collision with root package name */
    private final double f31729c;

    /* renamed from: d  reason: collision with root package name */
    private final double f31730d;

    /* renamed from: e  reason: collision with root package name */
    private final double f31731e;

    /* renamed from: f  reason: collision with root package name */
    private final double f31732f;

    /* renamed from: g  reason: collision with root package name */
    private final int f31733g;

    /* renamed from: h  reason: collision with root package name */
    private final int f31734h;

    public b(double d10, double d11, double d12, double d13, double d14, double d15, int i10, int i11) {
        this.f31727a = d10;
        this.f31728b = d11;
        this.f31729c = d12;
        this.f31730d = d13;
        this.f31731e = d14;
        this.f31732f = d15;
        this.f31733g = i10;
        this.f31734h = i11;
    }

    public final double a() {
        return this.f31731e;
    }

    public final double b() {
        return this.f31732f;
    }

    public final double c() {
        return this.f31730d;
    }

    public final int d() {
        return this.f31734h;
    }

    public final int e() {
        return this.f31733g;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (Double.compare(this.f31727a, bVar.f31727a) == 0 && Double.compare(this.f31728b, bVar.f31728b) == 0 && Double.compare(this.f31729c, bVar.f31729c) == 0 && Double.compare(this.f31730d, bVar.f31730d) == 0 && Double.compare(this.f31731e, bVar.f31731e) == 0 && Double.compare(this.f31732f, bVar.f31732f) == 0 && this.f31733g == bVar.f31733g && this.f31734h == bVar.f31734h) {
            return true;
        }
        return false;
    }

    public final double f() {
        return this.f31729c;
    }

    public final double g() {
        return this.f31727a;
    }

    public final double h() {
        return this.f31728b;
    }

    public int hashCode() {
        return (((((((((((((Double.hashCode(this.f31727a) * 31) + Double.hashCode(this.f31728b)) * 31) + Double.hashCode(this.f31729c)) * 31) + Double.hashCode(this.f31730d)) * 31) + Double.hashCode(this.f31731e)) * 31) + Double.hashCode(this.f31732f)) * 31) + Integer.hashCode(this.f31733g)) * 31) + Integer.hashCode(this.f31734h);
    }

    public String toString() {
        double d10 = this.f31727a;
        double d11 = this.f31728b;
        double d12 = this.f31729c;
        double d13 = this.f31730d;
        double d14 = this.f31731e;
        double d15 = this.f31732f;
        int i10 = this.f31733g;
        int i11 = this.f31734h;
        return "FocusedInputLayoutChangedEventData(x=" + d10 + ", y=" + d11 + ", width=" + d12 + ", height=" + d13 + ", absoluteX=" + d14 + ", absoluteY=" + d15 + ", target=" + i10 + ", parentScrollViewTarget=" + i11 + ")";
    }
}
